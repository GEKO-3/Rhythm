/**
 * RHYTHM SERVICE WORKER - OFFLINE SUPPORT
 * Handles caching for offline functionality
 */

const CACHE_NAME = 'rhythm-offline-v2.1'; // Updated version to force cache refresh
const DYNAMIC_CACHE = 'rhythm-dynamic-v2.1'; // Updated version to force cache refresh

// Critical files to cache for offline functionality
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/login.html',
  '/pages/songlist.html',
  '/pages/lyrics.html',
  '/js/rhythm-unified-auth.js',
  '/js/rhythm-local-db.js',
  '/js/firebase-db-optimized.js',
  '/js/firebase-db-offline.js',
  '/js/reverse-transliteration.js',
  '/assets/styles.css',
  '/assets/Fonts/Montserrat-VariableFont_wght.ttf',
  '/assets/Fonts/Faruma.ttf',
  '/assets/favicons/icons-192.png',
  '/assets/favicons/icons-512.png'
];

// Network-first strategy URLs (always try network first)
const NETWORK_FIRST_URLS = [
  'firebasedatabase.app',
  'googleapis.com',
  'gstatic.com'
];

// Cache-first strategy URLs (use cache if available)
const CACHE_FIRST_URLS = [
  '/assets/',
  '/js/',
  '/css/',
  '.ttf',
  '.woff',
  '.woff2',
  '.png',
  '.jpg',
  '.svg',
  '.ico'
];

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    console.log('🧹 Service Worker: Clearing all caches');
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log('🗑️ Service Worker: Deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(() => {
        console.log('✅ Service Worker: All caches cleared');
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ type: 'CACHE_CLEARED' });
          });
        });
      })
    );
  } else if (event.data && event.data.type === 'FORCE_UPDATE_CHECK') {
    console.log('🔄 Service Worker: Force update check requested');
    event.waitUntil(
      Promise.all([
        // Force clear dynamic cache to ensure fresh content
        caches.delete(DYNAMIC_CACHE),
        // Invalidate critical JS files in main cache
        caches.open(CACHE_NAME).then(cache => {
          const jsFiles = CRITICAL_ASSETS.filter(asset => asset.endsWith('.js'));
          return Promise.all(
            jsFiles.map(file => cache.delete(file))
          );
        })
      ]).then(() => {
        console.log('✅ Service Worker: Force update completed');
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ 
              type: 'FORCE_UPDATE_COMPLETED',
              timestamp: new Date().toISOString()
            });
          });
        });
      })
    );
  }
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Installing v2.1 with force update');
  
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    Promise.all([
      // Clear old caches first
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName.includes('rhythm-offline-v1') || cacheName.includes('rhythm-dynamic-v1')) {
              console.log('�️ Service Worker: Force deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Then populate new cache
      caches.open(CACHE_NAME).then((cache) => {
        console.log('📦 Service Worker: Caching critical assets');
        return Promise.allSettled(
          CRITICAL_ASSETS.map(url => {
            return cache.add(url).catch(error => {
              console.warn(`⚠️ Service Worker: Failed to cache ${url}:`, error.message);
            });
          })
        );
      })
    ])
  );
});

self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker: Activating v2.1 and claiming clients');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter(name => name.startsWith('rhythm-') && name !== CACHE_NAME && name !== DYNAMIC_CACHE)
            .map(name => {
              console.log('🗑️ Service Worker: Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      }),
      // Claim all clients immediately
      self.clients.claim().then(() => {
        console.log('👥 Service Worker: Claimed all clients for immediate update');
        
        // Notify all clients about the update
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'SW_UPDATED',
              version: '2.1',
              timestamp: new Date().toISOString()
            });
          });
        });
      })
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Force network-first for JavaScript files to prevent stale code
  if (url.pathname.endsWith('.js') || url.search.includes('t=')) {
    event.respondWith(forceNetworkStrategy(request));
    return;
  }

  // Determine caching strategy for other files
  if (shouldUseNetworkFirst(url)) {
    event.respondWith(networkFirstStrategy(request));
  } else if (shouldUseCacheFirst(url)) {
    event.respondWith(cacheFirstStrategy(request));
  } else {
    event.respondWith(networkFirstStrategy(request));
  }
});

function shouldUseNetworkFirst(url) {
  return NETWORK_FIRST_URLS.some(pattern => url.href.includes(pattern)) ||
         url.pathname.includes('firebase') ||
         url.pathname.endsWith('.json');
}

function shouldUseCacheFirst(url) {
  return CACHE_FIRST_URLS.some(pattern => url.pathname.includes(pattern));
}

// Force network strategy for JavaScript files to prevent stale code
async function forceNetworkStrategy(request) {
  try {
    console.log('🔄 Service Worker: Force network fetch for:', request.url);
    const networkResponse = await fetch(request, { cache: 'no-cache' });
    
    // Update cache with fresh version
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      caches.open(DYNAMIC_CACHE).then((cache) => {
        cache.put(request, responseClone);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.log('❌ Service Worker: Force network failed for:', request.url);
    
    // Fallback to cache only if network completely fails
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('📦 Service Worker: Using stale cache as last resort for:', request.url);
      return cachedResponse;
    }
    
    // If no cache, return network error
    return fetch(request);
  }
}

async function networkFirstStrategy(request) {
  try {
    // Try network with timeout
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Network timeout')), 5000)
      )
    ]);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      caches.open(DYNAMIC_CACHE).then((cache) => {
        cache.put(request, responseClone);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.log('🔄 Service Worker: Network failed, trying cache for:', request.url);
    
    // Try cache as fallback
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('📖 Service Worker: Serving from cache:', request.url);
      return cachedResponse;
    }
    
    // If it's a page request and we have no cache, return offline page
    if (request.destination === 'document') {
      const offlineResponse = await caches.match('/pages/songlist.html');
      if (offlineResponse) {
        return offlineResponse;
      }
    }
    
    throw error;
  }
}

async function cacheFirstStrategy(request) {
  // Try cache first
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    console.log('📖 Service Worker: Serving from cache (cache-first):', request.url);
    return cachedResponse;
  }
  
  // Fallback to network
  try {
    const networkResponse = await fetch(request);
    
    // Cache the response
    if (networkResponse.ok) {
      const responseClone = networkResponse.clone();
      caches.open(DYNAMIC_CACHE).then((cache) => {
        cache.put(request, responseClone);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.error('❌ Service Worker: Both cache and network failed for:', request.url);
    throw error;
  }
}

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_SONGS') {
    // Cache songs data when requested
    caches.open(DYNAMIC_CACHE).then((cache) => {
      cache.put('/data/songs-offline.json', new Response(JSON.stringify(event.data.songs)));
    });
  }
});
