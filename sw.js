self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', function(e) {
  if(e.request.url.endsWith('.mp4')) return;
  e.respondWith(fetch(e.request));
});
