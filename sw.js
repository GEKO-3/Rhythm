// Simple Service Worker for Rhythm Boduberu
// Provides basic offline functionality without aggressive caching

const CACHE_NAME = 'rhythm-v2.3.5';
const ESSENTIAL_ASSETS = [
  './',
  './pages/songlist.html',
  './pages/lyrics.html',
  './pages/attendance.html',
  './login.html',
  './pages/admin/admin.html',
  './js/rhythm-unified-auth.js',
  './js/rhythm-local-db.js',
  './js/firebase-db-offline.js',
  './js/firebase-db-optimized.js',
  './js/music-data.js',
  './js/members-data.js'
];

// Install event - cache essential assets
self.addEventListener('install', event => {
  console.log('🔧 Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Service Worker: Caching essential assets...');
        // Cache assets one by one to avoid failures
        const cachePromises = ESSENTIAL_ASSETS.map(asset => 
          cache.add(asset).catch(err => {
            console.warn(`⚠️ Service Worker: Failed to cache ${asset}:`, err);
            return null;
          })
        );
        return Promise.allSettled(cachePromises);
      })
      .then(results => {
        const successful = results.filter(r => r.status === 'fulfilled').length;
        console.log(`✅ Service Worker: Cached ${successful}/${ESSENTIAL_ASSETS.length} assets`);
      })
      .catch(error => {
        console.error('❌ Service Worker: Cache operation failed:', error);
      })
  );
  
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('✅ Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  self.clients.claim();
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  // Skip non-GET requests and external requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If online, return fresh response
        return response;
      })
      .catch(() => {
        // If offline, try to serve from cache
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            console.log('📱 Service Worker: Serving from cache:', event.request.url);
            return cachedResponse;
          }
          
          // If not in cache and it's a navigation request, serve the main page
          if (event.request.mode === 'navigate') {
            return caches.match('./');
          }
          
          // For other requests, just fail gracefully
          return new Response('Offline', { status: 503 });
        });
      })
  );
});

// Handle messages from the client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('💫 Service Worker: Skipping waiting, activating new version...');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'FORCE_UPDATE_CHECK') {
    console.log('🔄 Service Worker: Force update requested');
    // This will trigger an update check
    self.registration.update();
  }
});
