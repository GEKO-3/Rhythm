const CACHE_NAME = 'rhythm-boduberu-v1';
const CORE_FILES = [
  '/',
  '/songlist.html',
  '/lyrics.html',
  '/songs.js',
  '/Fonts/Faruma.ttf',
  '/Fonts/Montserrat-VariableFont_wght.ttf',
  '/src/Filter.png',
  '/src/Logo.png',
  '/favicons/icons-192.png',
  '/favicons/icons-512.png',
  '/favicons/apple-touch-icon.png',
  '/favicons/favicon.ico',
  '/favicons/favicon.svg',
  '/favicons/songlist-manifest.webmanifest'
];

// Install event - cache core files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching core files');
        return cache.addAll(CORE_FILES);
      })
      .then(() => {
        console.log('Service worker installed');
        self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service worker activated');
        self.clients.claim();
      })
  );
});

// Fetch event - serve from cache when offline, update cache when online
self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // If we have a cached response, use it
        if (cachedResponse) {
          // Try to update the cache in the background if online
          if (navigator.onLine) {
            fetch(request)
              .then((response) => {
                if (response.status === 200) {
                  const responseClone = response.clone();
                  caches.open(CACHE_NAME)
                    .then((cache) => {
                      cache.put(request, responseClone);
                    });
                }
              })
              .catch(() => {
                // Ignore network errors when updating cache
              });
          }
          return cachedResponse;
        }
        
        // No cached response, try to fetch from network
        return fetch(request)
          .then((response) => {
            // If we get a good response, cache it
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(request, responseClone);
                });
            }
            return response;
          })
          .catch(() => {
            // Network failed and no cache - return offline page or error
            if (request.destination === 'document') {
              return new Response('Offline - Please check your internet connection', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: {
                  'Content-Type': 'text/html'
                }
              });
            }
            throw new Error('Network failed and no cache available');
          });
      })
  );
});

// Listen for messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'UPDATE_CACHE') {
    // Force update of specific files
    const filesToUpdate = event.data.files || CORE_FILES;
    
    Promise.all(
      filesToUpdate.map((file) => {
        return fetch(file)
          .then((response) => {
            if (response.status === 200) {
              return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.put(file, response);
                });
            }
          })
          .catch((error) => {
            console.log('Failed to update cache for:', file, error);
          });
      })
    ).then(() => {
      // Notify the main thread that cache update is complete
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'CACHE_UPDATED',
            files: filesToUpdate
          });
        });
      });
    });
  }
});
