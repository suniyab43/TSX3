
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin === 'https://woss.883602.xyz') {
    event.respondWith((async () => {
      const cache = await caches.open('videos');
      const cached = await cache.match(event.request);
      if (cached) return cached;
      const response = await fetch(event.request);
      cache.put(event.request, response.clone());
      return response;
    })());
  }
});
