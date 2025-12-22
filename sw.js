// Simple Service Worker for Rhythm Boduberu
// Provides basic offline functionality without aggressive caching
// Updated: 2025-12-21 - Auto-update system + Force cache clear

const CACHE_NAME = 'rhythm-v2.6.5'; // Robust page loading with diagnostics
const ESSENTIAL_ASSETS = [
  './',
  './pages/songlist.html',
  './pages/lyrics.html',
  './pages/attendance.html',
  './pages/my-kits.html',
  './pages/admin-kits.html',
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
  console.log('🔧 Service Worker: Installing v2.4.7...');
  
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
  
  // Force immediate activation
  console.log('⚡ Service Worker: Skipping waiting to activate immediately');
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('✅ Service Worker: Activating v2.4.7...');
  
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
    }).then(() => {
      console.log('🎉 Service Worker: v2.4.7 activated successfully!');
    })
  );
  
  // Take control of all clients immediately
  return self.clients.claim();
});

// Fetch event - always fetch HTML files from network
self.addEventListener('fetch', event => {
  // Skip non-GET requests and external requests
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  const url = new URL(event.request.url);
  const isHTMLFile = url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.endsWith('/');
  
  // For ALL HTML files, ALWAYS fetch from network (never use cache unless offline)
  if (isHTMLFile) {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store' // Force fresh fetch, bypass HTTP cache
      })
        .then(response => {
          // Clone the response and update cache for offline use
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          console.log('🌐 Service Worker: Fresh HTML from network:', url.pathname);
          return response;
        })
        .catch(() => {
          // Only use cache if offline
          console.log('📱 Service Worker: Offline - serving cached HTML:', url.pathname);
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return new Response('Offline', { status: 503 });
          });
        })
    );
    return;
  }
  
  // For critical JavaScript files, also always try network first
  const isCriticalJS = event.request.url.includes('rhythm-unified-auth.js') ||
                       event.request.url.includes('rhythm-local-db.js');
  
  if (isCriticalJS) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // For all other resources (CSS, images, etc), try network first, cache fallback
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            console.log('📱 Service Worker: Serving from cache:', event.request.url);
            return cachedResponse;
          }
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
