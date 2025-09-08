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
  }
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker: Installing with offline support');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Caching critical assets');
        return cache.addAll(CRITICAL_ASSETS.map(url => {
          // Handle relative URLs
          return url.startsWith('/') ? url : '/' + url;
        }));
      })
      .then(() => {
        console.log('✅ Service Worker: Critical assets cached');
        self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Service Worker: Failed to cache critical assets:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker: Activating');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activated and claiming clients');
      self.clients.claim();
    })
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
