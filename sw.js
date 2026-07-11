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

  // 1. Cache hit → respuesta inmediata (funciona offline)
  const cached = await mediaCache.match(request);
  if (cached) return cached;

  // 2. Cache miss → intentar red
  try {
    const response = await fetch(request);

    if (response.ok) {
      const contentType = response.headers.get('Content-Type') || '';
      // Solo cachear imágenes y videos; nunca cachear errores ni HTML accidental
      if (contentType.startsWith('image/') || contentType.startsWith('video/')) {
        const toCache = response.clone();
        // No bloquear la respuesta — guardar en background
        // La API de caché no soporta respuestas parciales (HTTP 206)
        if (toCache.status !== 206) {
          mediaCache.put(request, toCache).then(async () => {
            // LRU manual: si superamos el límite, eliminar la entrada más antigua
            const keys = await mediaCache.keys();
            if (keys.length > MEDIA_MAX_ENTRIES) {
              await mediaCache.delete(keys[0]);
            }
          }).catch(() => { /* silenciar errores de escritura de caché */ });
        }
      }
    }

    return response;
  } catch {
    // Sin caché y sin red: 503 controlado
    return new Response('', { status: 503, statusText: 'Media offline - not cached' });
  }
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
