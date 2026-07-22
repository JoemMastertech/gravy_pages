/**
 * Gravy3 Service Worker — Offline-First Proxy
 * 
 * Intercepta todas las peticiones HTTP de la aplicación.
 * Para llamadas a supabase.co aplica estrategias diferenciadas según el endpoint:
 *   - auth/v1/*        → NetworkOnly con fallback 503 (AuthGateway maneja la sesión local)
 *   - rest/v1/*        → NetworkFirst con fallback 503 (repositorios locales manejan caché)
 *   - storage/v1/*     → CacheFirst con LRU (multimedia del menú funciona offline)
 *   - otros            → pass-through sin intervención
 * 
 * Para assets propios de la app aplica CacheFirst desde el shell pre-cacheado.
 *
 * Cachés gestionados:
 *   gravy3-shell-v1   — App shell (HTML, JS, CSS)
 *   gravy3-media-v1   — Multimedia del menú (imágenes y videos de Supabase Storage)
 */

const SHELL_CACHE  = 'gravy3-shell-v1';
const MEDIA_CACHE  = 'gravy3-media-v1';
const SUPABASE_HOST = 'udtlqjmrtbcpdqknwuro.supabase.co';

// Límite LRU para el caché de multimedia.
// ~300 entradas cubre un menú completo con imágenes + miniaturas de video.
const MEDIA_MAX_ENTRIES = 300;

// Cachés conocidos — todos los demás se eliminan en activate para evitar acumulación.
const KNOWN_CACHES = [SHELL_CACHE, MEDIA_CACHE];

// ── Instalación: pre-cachear el app shell ────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
      ]).catch(() => {
        // Silenciar fallos de pre-cache en dev (assets con hash cambian en cada build)
      });
    })
  );
  self.skipWaiting();
});

// ── Activación: limpiar cachés antiguas ──────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          // Conservar los cachés conocidos; eliminar versiones antiguas o huérfanas
          .filter((key) => !KNOWN_CACHES.includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── Interceptor de fetch ──────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Solo interceptamos GET y POST; ignoramos el resto (PUT, DELETE, etc. pasan directo)
  if (request.method !== 'GET' && request.method !== 'POST') return;

  const url = new URL(request.url);

  // === Llamadas a Supabase ===
  if (url.hostname === SUPABASE_HOST) {
    event.respondWith(handleSupabaseRequest(request, url));
    return;
  }

  // === Assets propios de la app: CacheFirst ===
  if (url.origin === self.location.origin) {
    event.respondWith(handleAppAsset(request));
  }
});

// ── Estrategia por ruta de Supabase ──────────────────────────────────────────
async function handleSupabaseRequest(request, url) {
  // Auth tokens: NetworkOnly con fallback 503 controlado.
  // AuthGateway en el hilo principal conserva la sesión snapshot local.
  if (url.pathname.startsWith('/auth/v1/')) {
    try {
      return await fetch(request);
    } catch {
      // Devolvemos 503 para que GoTrue no marque la sesión como inválida
      // sino simplemente informe que la red no está disponible.
      return new Response(
        JSON.stringify({ error: 'offline', message: 'No network available' }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }

  // REST API (catálogo, perfil, waiter_settings...): NetworkFirst con fallback 503.
  // Los repositorios locales (IndexedDB) son la fuente de verdad offline.
  if (url.pathname.startsWith('/rest/v1/')) {
    try {
      return await fetch(request);
    } catch {
      return new Response(
        JSON.stringify({ error: 'offline', message: 'No network available' }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }

  // Storage de Supabase (imágenes y videos del menú): CacheFirst con LRU.
  // Si está en caché → sirve offline inmediatamente.
  // Si no está en caché y hay red → descarga, guarda y sirve.
  // Si no está en caché y no hay red → 503 limpio.
  if (url.pathname.startsWith('/storage/v1/object/public/')) {
    return handleMediaAsset(request);
  }

  // Edge Functions y cualquier otra ruta de Supabase: NetworkOnly, sin fallback.
  try {
    return await fetch(request);
  } catch {
    return new Response('', { status: 503, statusText: 'Offline' });
  }
}

// ── CacheFirst + LRU para multimedia del menú ────────────────────────────────
async function handleMediaAsset(request) {
  const mediaCache = await caches.open(MEDIA_CACHE);
  const rangeHeader = request.headers.get('range');

  if (rangeHeader) {
    // Petición con rango: buscamos la versión completa en caché usando una petición limpia (sin rango)
    const cleanRequest = new Request(request.url);
    const cachedResponse = await mediaCache.match(cleanRequest);

    if (cachedResponse) {
      try {
        return await buildRangeResponse(cachedResponse, rangeHeader);
      } catch (err) {
        console.warn('[Media Cache] Error construyendo respuesta parcial desde caché, usando red:', err);
      }
    }

    // Cache miss de petición con rango: descargamos completo, guardamos y servimos el rango solicitado
    try {
      const response = await fetch(cleanRequest);
      if (response.ok) {
        const contentType = response.headers.get('Content-Type') || '';
        if (contentType.startsWith('image/') || contentType.startsWith('video/')) {
          await mediaCache.put(cleanRequest, response.clone());
        }
        return await buildRangeResponse(response, rangeHeader);
      }
      return response;
    } catch (err) {
      console.error('[Media Cache] Fallo descarga con rango:', err);
      return new Response('', { status: 503, statusText: 'Media offline - not cached' });
    }
  }

  // Petición estándar (sin rango)
  const cached = await mediaCache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);

    if (response.ok) {
      const contentType = response.headers.get('Content-Type') || '';
      if (contentType.startsWith('image/') || contentType.startsWith('video/')) {
        const toCache = response.clone();
        if (toCache.status !== 206) {
          mediaCache.put(request, toCache).then(async () => {
            const keys = await mediaCache.keys();
            if (keys.length > MEDIA_MAX_ENTRIES) {
              await mediaCache.delete(keys[0]);
            }
          }).catch(() => {});
        }
      }
    }

    return response;
  } catch {
    return new Response('', { status: 503, statusText: 'Media offline - not cached' });
  }
}

// ── Constructor de Respuestas Parciales (HTTP 206) desde respuestas completas ──
async function buildRangeResponse(response, rangeHeader) {
  const blob = await response.blob();
  const size = blob.size;
  const parts = rangeHeader.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : size - 1;

  // Validación de límites de rango
  if (start >= size || end >= size) {
    return new Response('', {
      status: 416,
      statusText: 'Requested Range Not Satisfiable',
      headers: { 'Content-Range': `bytes */${size}` }
    });
  }

  const chunk = blob.slice(start, end + 1);
  const headers = new Headers(response.headers);
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', chunk.size);
  headers.set('Accept-Ranges', 'bytes');

  return new Response(chunk, {
    status: 206,
    statusText: 'Partial Content',
    headers: headers
  });
}

// ── NetworkFirst para assets propios (App Shell) ──────────────────────────────
async function handleAppAsset(request) {
  // Si la petición pide un rango (Range), no la cacheamos y la dejamos pasar directo a la red
  if (request.headers.has('range')) {
    return fetch(request);
  }

  try {
    const response = await fetch(request);
    // Solo cachear respuestas estrictamente exitosas completas (status 200) de assets estáticos
    if (response.status === 200 && request.method === 'GET') {
      const cache = await caches.open(SHELL_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Si falla la red, intentar buscar en caché
    const cached = await caches.match(request);
    if (cached) return cached;

    // Si tampoco está en caché, devolver la página index como fallback SPA
    const indexFallback = await caches.match('/index.html');
    return indexFallback || new Response('Offline', { status: 503 });
  }
}
