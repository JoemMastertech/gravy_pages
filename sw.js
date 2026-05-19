// ─────────────────────────────────────────────────────────────────────────────
// GRAVY MEDIA CACHE — Service Worker v4
// Propósito: Cachear medios de Supabase Storage, incluyendo videos que el
//            navegador solicita via Range requests (206 Partial Content).
//
// Estrategia:
//  • Intercepta peticiones GET a Supabase Storage
//  • Si ya está en caché → sirve el contenido local (egress = 0)
//  • Si es Range request y NO está cacheado → descarga el archivo COMPLETO (200),
//    lo guarda en caché, luego sirve el fragmento solicitado como 206.
//  • Próximas recargas de la misma página → 100% desde caché local.
// ─────────────────────────────────────────────────────────────────────────────

const CACHE_NAME = 'gravy-media-cache-v6';

const SUPABASE_STORAGE_PATTERN = /supabase\.co\/storage\/v1\/object\/public\//;
const MEDIA_EXTENSIONS = /\.(webp|jpg|jpeg|png|svg|gif)(\?.*)?$/i;

// ─── 1. Instalar ──────────────────────────────────────────────────────────────
self.addEventListener('install', () => {
    console.log('[SW v4] Instalado.');
    self.skipWaiting();
});

// ─── 2. Activar: eliminar cachés de versiones anteriores ─────────────────────
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((names) => Promise.all(
                names
                    .filter(n => n !== CACHE_NAME)
                    .map(n => {
                        console.log(`[SW v4] Eliminando caché viejo: ${n}`);
                        return caches.delete(n);
                    })
            ))
            .then(() => {
                console.log('[SW v4] Activo. Tomando control de todos los clientes.');
                return self.clients.claim();
            })
    );
});

// ─── 3. Mensaje SKIP_WAITING ──────────────────────────────────────────────────
self.addEventListener('message', (event) => {
    if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

// ─── 4. Interceptar peticiones ────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // ✅ Cache-First con Background Fetch para Videos
    // Recuperamos el bypass para ahorrar egress sin bloquear la UI inicial
    const isVideo = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url.pathname);

    if (isVideo) {
        event.respondWith(
            caches.open(CACHE_NAME).then(async (cache) => {
                
                // Construir clave de caché sin headers Range
                // (los Range requests no se pueden cachear directamente)
                const cacheKey = url.origin + url.pathname;
                const cached = await cache.match(cacheKey);

                if (cached) {
                    // ✅ Ya está en caché — respuesta instantánea, 0 egress
                    const isRange = request.headers.has('Range');
                    if (isRange) {
                        console.debug(`[SW v5] 🎯 Cache HIT de Video (range): ${_shortName(request.url)}`);
                        return serveRange(cached, request.headers.get('Range'));
                    }
                    console.debug(`[SW v5] 🎯 Cache HIT de Video: ${_shortName(request.url)}`);
                    return cached;
                }

                // 🌐 No está en caché — fetch directo SIN bloquear
                // El navegador hace su Range Request nativo (HTTP 206, rápido)
                const networkResponse = await fetch(
                    new Request(url.href, { method: 'GET' })
                );

                // Cachear en background solo si la respuesta fue exitosa
                // NO hacemos await — esto ocurre en paralelo sin bloquear
                if (networkResponse.ok) {
                    cache.put(cacheKey, networkResponse.clone());
                }

                return networkResponse;
            })
        );
        return; // importante: salir del listener para este caso
    }
    if (request.method !== 'GET') return;

    const rawUrl = request.url;
    if (!SUPABASE_STORAGE_PATTERN.test(rawUrl) || !MEDIA_EXTENSIONS.test(rawUrl)) return;

    event.respondWith(handleMediaRequest(request));
});

// ─── Handler principal ────────────────────────────────────────────────────────
async function handleMediaRequest(request) {
    const cache      = await caches.open(CACHE_NAME);
    const isRange    = request.headers.has('Range');
    const rangeHdr   = isRange ? request.headers.get('Range') : null;

    // Clave de caché sin cabecera Range (siempre buscamos el archivo completo)
    const cacheKey = new Request(request.url, { method: 'GET' });

    // ── Paso 1: Buscar en caché local ─────────────────────────────────────────
    const cached = await cache.match(cacheKey, { ignoreVary: true });
    if (cached) {
        if (isRange) {
            // ✅ Cache HIT en Range request — servimos slice sin tocar Supabase
            console.debug(`[SW v4] 🎯 Cache HIT (range): ${_shortName(request.url)}`);
            return serveRange(cached, rangeHdr);
        }
        console.debug(`[SW v4] 🎯 Cache HIT: ${_shortName(request.url)}`);
        return cached;
    }

    // ── Paso 2: No está en caché — descargar ARCHIVO COMPLETO ─────────────────
    // Se descarta la cabecera Range para forzar una respuesta 200 completa
    // que sí podemos guardar en caché.
    const fullRequest = new Request(request.url, { method: 'GET' });

    try {
        const response = await fetch(fullRequest);

        if (response.status === 200 && response.ok) {
            // Guardar copia completa en caché (no bloquea la respuesta)
            const forCache = response.clone();
            cache.put(cacheKey, forCache)
                .then(() => console.log(`[SW v4] 💾 Cacheado: ${_shortName(request.url)}`))
                .catch(err => console.warn('[SW v4] Error al cachear:', err));

            if (isRange) {
                // Servimos el fragmento solicitado desde la respuesta recién descargada
                return serveRange(response, rangeHdr);
            }
            return response;
        }

        // Respuesta inesperada (4xx, 5xx): la pasamos al browser sin cachear
        console.warn(`[SW v4] ⚠️ Respuesta no cacheable (${response.status}): ${_shortName(request.url)}`);
        return response;

    } catch (error) {
        console.error('[SW v4] ❌ Error de red:', error);
        return new Response('Network error — recurso no disponible.', { status: 503 });
    }
}

// ─── Sirve un fragmento (Range) desde una respuesta completa ─────────────────
async function serveRange(fullResponse, rangeHeader) {
    const blob      = await fullResponse.blob();
    const totalSize = blob.size;
    const mime      = fullResponse.headers.get('Content-Type') || 'video/mp4';

    if (!rangeHeader) {
        // Sin cabecera Range: devolvemos el archivo completo
        return new Response(blob, {
            status: 200,
            headers: {
                'Content-Type':   mime,
                'Content-Length': String(totalSize),
                'Accept-Ranges':  'bytes',
            }
        });
    }

    // Parsear "bytes=<start>-<end>"
    const match = rangeHeader.match(/bytes=(\d+)-(\d+)?/);
    if (!match) {
        return new Response('Invalid Range Header', {
            status: 416,
            headers: { 'Content-Range': `bytes */${totalSize}` }
        });
    }

    const start = parseInt(match[1], 10);
    const end   = match[2] !== undefined ? parseInt(match[2], 10) : totalSize - 1;

    if (start >= totalSize || end >= totalSize || start > end) {
        return new Response('Range Not Satisfiable', {
            status: 416,
            headers: { 'Content-Range': `bytes */${totalSize}` }
        });
    }

    const sliced = blob.slice(start, end + 1);

    return new Response(sliced, {
        status:     206,
        statusText: 'Partial Content',
        headers: {
            'Content-Type':   mime,
            'Content-Range':  `bytes ${start}-${end}/${totalSize}`,
            'Content-Length': String(sliced.size),
            'Accept-Ranges':  'bytes',
        }
    });
}

// ─── Utilidades ───────────────────────────────────────────────────────────────
function _shortName(url) {
    try { return url.split('/').pop().split('?')[0]; } catch { return url; }
}
