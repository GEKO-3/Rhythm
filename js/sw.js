// Service Worker disabled - offline mode removed
console.log('Service Worker: Offline mode disabled');

// Minimal service worker that does nothing
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install - doing nothing');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate - cleaning up old caches');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});
