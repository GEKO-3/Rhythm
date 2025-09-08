/**
 * RHYTHM OFFLINE MANAGER
 * Handles offline functionality for songlist and lyrics pages
 * Includes smart caching, network detection, and local storage management
 */

class RhythmOfflineManager {
    constructor() {
        this.isOnline = navigator.onLine;
        this.networkQuality = 'good'; // good, poor, offline
        this.isInitialized = false; // Track initialization status
        this.cacheKeys = {
            songsMetadata: 'rhythm_songs_metadata',
            fullSongs: 'rhythm_songs_full',
            lastSync: 'rhythm_last_sync',
            offlineMode: 'rhythm_offline_mode',
            networkQuality: 'rhythm_network_quality'
        };
        
        // Cache expiration times
        this.cacheExpiry = {
            metadata: 24 * 60 * 60 * 1000, // 24 hours
            fullSongs: 7 * 24 * 60 * 60 * 1000, // 7 days
            networkCheck: 30 * 1000 // 30 seconds
        };
        
        this.networkCheckInterval = null;
        this.connectionTestTimeout = 5000; // 5 seconds timeout for connection tests
        this.poorConnectionThreshold = 3000; // 3 seconds = poor connection
        
        this.init();
    }

    async init() {
        console.log('🔧 [OfflineManager] Initializing...');
        
        // Set up network listeners
        this.setupNetworkListeners();
        
        // Start with a basic online/offline check (fast)
        this.networkQuality = navigator.onLine ? 'good' : 'offline';
        
        // Check for cached data
        this.checkCachedData();
        
        // Mark as initialized immediately for fast startup
        this.isInitialized = true;
        console.log('✅ [OfflineManager] Initialized successfully (fast mode)');
        
        // Do detailed network quality check in background
        setTimeout(() => {
            this.checkNetworkQuality().then(() => {
                // Start periodic network monitoring after first check
                this.startNetworkMonitoring();
            });
        }, 100);
    }

    setupNetworkListeners() {
        window.addEventListener('online', () => {
            console.log('🌐 [OfflineManager] Browser detected online');
            this.isOnline = true;
            this.checkNetworkQuality();
            this.showNetworkStatus('online');
        });

        window.addEventListener('offline', () => {
            console.log('📴 [OfflineManager] Browser detected offline');
            this.isOnline = false;
            this.networkQuality = 'offline';
            this.saveNetworkQuality('offline');
            this.showNetworkStatus('offline');
        });
    }

    async checkNetworkQuality() {
        if (!this.isOnline) {
            this.networkQuality = 'offline';
            this.saveNetworkQuality('offline');
            return 'offline';
        }

        try {
            const startTime = Date.now();
            
            // Test connection to Firebase
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.connectionTestTimeout);
            
            const response = await fetch('https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app/.json?shallow=true', {
                method: 'GET',
                signal: controller.signal,
                cache: 'no-cache'
            });
            
            clearTimeout(timeoutId);
            const endTime = Date.now();
            const responseTime = endTime - startTime;
            
            if (response.ok) {
                if (responseTime < this.poorConnectionThreshold) {
                    this.networkQuality = 'good';
                    console.log(`🚀 [OfflineManager] Good connection (${responseTime}ms)`);
                } else {
                    this.networkQuality = 'poor';
                    console.log(`🐌 [OfflineManager] Poor connection (${responseTime}ms)`);
                }
            } else {
                this.networkQuality = 'poor';
                console.log('⚠️ [OfflineManager] Server responded with error, treating as poor connection');
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('⏰ [OfflineManager] Connection test timed out, treating as poor connection');
                this.networkQuality = 'poor';
            } else {
                console.log('❌ [OfflineManager] Connection test failed, going offline mode');
                this.networkQuality = 'offline';
            }
        }

        this.saveNetworkQuality(this.networkQuality);
        this.showNetworkStatus(this.networkQuality);
        return this.networkQuality;
    }

    startNetworkMonitoring() {
        // Check network quality every 30 seconds
        this.networkCheckInterval = setInterval(() => {
            this.checkNetworkQuality();
        }, this.cacheExpiry.networkCheck);
    }

    stopNetworkMonitoring() {
        if (this.networkCheckInterval) {
            clearInterval(this.networkCheckInterval);
            this.networkCheckInterval = null;
        }
    }

    saveNetworkQuality(quality) {
        localStorage.setItem(this.cacheKeys.networkQuality, JSON.stringify({
            quality: quality,
            timestamp: Date.now()
        }));
    }

    getNetworkQuality() {
        try {
            const saved = JSON.parse(localStorage.getItem(this.cacheKeys.networkQuality));
            if (saved && (Date.now() - saved.timestamp) < this.cacheExpiry.networkCheck) {
                return saved.quality;
            }
        } catch (error) {
            console.warn('Failed to get saved network quality');
        }
        return this.networkQuality;
    }

    showNetworkStatus(status) {
        // Find or create network status indicator
        let indicator = document.getElementById('network-status-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'network-status-indicator';
            indicator.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 9999;
                padding: 8px;
                text-align: center;
                font-size: 14px;
                font-weight: 600;
                font-family: 'Montserrat', Arial, sans-serif;
                transition: all 0.3s ease;
                transform: translateY(-100%);
            `;
            document.body.appendChild(indicator);
        }

        let message = '';
        let bgColor = '';
        let textColor = '';
        let show = false;

        switch (status) {
            case 'offline':
                message = '📴 Offline - Using cached content';
                bgColor = '#ff6b6b';
                textColor = '#fff';
                show = true;
                break;
            case 'poor':
                message = '🐌 Slow connection - Using cached content when possible';
                bgColor = '#ffa726';
                textColor = '#fff';
                show = true;
                break;
            case 'good':
                message = '🌐 Connected';
                bgColor = '#4caf50';
                textColor = '#fff';
                show = false; // Only show briefly for good connections
                break;
        }

        indicator.textContent = message;
        indicator.style.backgroundColor = bgColor;
        indicator.style.color = textColor;

        if (show) {
            indicator.style.transform = 'translateY(0)';
            
            // Auto-hide good connection status after 2 seconds
            if (status === 'good') {
                setTimeout(() => {
                    indicator.style.transform = 'translateY(-100%)';
                }, 2000);
            }
        } else {
            indicator.style.transform = 'translateY(-100%)';
        }
    }

    checkCachedData() {
        const metadataCache = this.getCachedSongsMetadata();
        const fullSongsCache = this.getCachedFullSongs();
        
        console.log('📦 [OfflineManager] Cached metadata:', metadataCache ? 'Available' : 'None');
        console.log('📦 [OfflineManager] Cached full songs:', fullSongsCache ? Object.keys(fullSongsCache).length + ' songs' : 'None');
    }

    // === SONGS METADATA CACHING ===

    async cacheSongsMetadata(metadata) {
        try {
            const cacheData = {
                data: metadata,
                timestamp: Date.now(),
                version: '1.0'
            };
            
            localStorage.setItem(this.cacheKeys.songsMetadata, JSON.stringify(cacheData));
            localStorage.setItem(this.cacheKeys.lastSync, Date.now().toString());
            
            console.log(`💾 [OfflineManager] Cached ${metadata.length} songs metadata`);
            return true;
        } catch (error) {
            console.error('Failed to cache songs metadata:', error);
            return false;
        }
    }

    getCachedSongsMetadata() {
        try {
            const cached = localStorage.getItem(this.cacheKeys.songsMetadata);
            if (!cached) return null;

            const cacheData = JSON.parse(cached);
            const age = Date.now() - cacheData.timestamp;

            // Check if cache is still valid
            if (age < this.cacheExpiry.metadata) {
                console.log(`📖 [OfflineManager] Using cached metadata (${Math.round(age / 1000 / 60)} minutes old)`);
                return cacheData.data;
            } else {
                console.log('⏰ [OfflineManager] Cached metadata expired, will fetch fresh data');
                return null;
            }
        } catch (error) {
            console.error('Failed to get cached metadata:', error);
            return null;
        }
    }

    // === FULL SONGS CACHING ===

    async cacheFullSongs(songs) {
        try {
            const cacheData = {
                data: songs,
                timestamp: Date.now(),
                version: '1.0'
            };
            
            const serialized = JSON.stringify(cacheData);
            localStorage.setItem(this.cacheKeys.fullSongs, serialized);
            
            console.log(`💾 [OfflineManager] Cached ${Object.keys(songs).length} full songs (${(serialized.length / 1024).toFixed(1)}KB)`);
            return true;
        } catch (error) {
            console.error('Failed to cache full songs:', error);
            // If quota exceeded, try to clear old data and retry
            if (error.name === 'QuotaExceededError') {
                this.clearOldCache();
                try {
                    localStorage.setItem(this.cacheKeys.fullSongs, JSON.stringify(cacheData));
                    console.log('💾 [OfflineManager] Cached songs after clearing old data');
                    return true;
                } catch (retryError) {
                    console.error('Failed to cache even after clearing:', retryError);
                    return false;
                }
            }
            return false;
        }
    }

    getCachedFullSongs() {
        try {
            const cached = localStorage.getItem(this.cacheKeys.fullSongs);
            if (!cached) return null;

            const cacheData = JSON.parse(cached);
            const age = Date.now() - cacheData.timestamp;

            // Full songs cache is valid for longer
            if (age < this.cacheExpiry.fullSongs) {
                console.log(`📖 [OfflineManager] Using cached full songs (${Math.round(age / 1000 / 60 / 60)} hours old)`);
                return cacheData.data;
            } else {
                console.log('⏰ [OfflineManager] Cached full songs expired');
                return null;
            }
        } catch (error) {
            console.error('Failed to get cached full songs:', error);
            return null;
        }
    }

    getCachedSong(songId) {
        const fullSongs = this.getCachedFullSongs();
        if (fullSongs && fullSongs[songId]) {
            console.log(`📖 [OfflineManager] Using cached song: ${songId}`);
            return fullSongs[songId];
        }
        return null;
    }

    // === CACHE MANAGEMENT ===

    clearOldCache() {
        try {
            // Clear expired caches
            const itemsToCheck = [
                this.cacheKeys.songsMetadata,
                this.cacheKeys.fullSongs,
                this.cacheKeys.networkQuality
            ];

            itemsToCheck.forEach(key => {
                const item = localStorage.getItem(key);
                if (item) {
                    try {
                        const data = JSON.parse(item);
                        const age = Date.now() - (data.timestamp || 0);
                        
                        // Remove if older than 30 days
                        if (age > 30 * 24 * 60 * 60 * 1000) {
                            localStorage.removeItem(key);
                            console.log(`🗑️ [OfflineManager] Cleared old cache: ${key}`);
                        }
                    } catch (error) {
                        // Invalid JSON, remove it
                        localStorage.removeItem(key);
                        console.log(`🗑️ [OfflineManager] Cleared invalid cache: ${key}`);
                    }
                }
            });
        } catch (error) {
            console.error('Failed to clear old cache:', error);
        }
    }

    clearAllCache() {
        Object.values(this.cacheKeys).forEach(key => {
            localStorage.removeItem(key);
        });
        console.log('🗑️ [OfflineManager] Cleared all cache');
    }

    getCacheInfo() {
        const info = {};
        Object.entries(this.cacheKeys).forEach(([name, key]) => {
            const item = localStorage.getItem(key);
            if (item) {
                try {
                    const data = JSON.parse(item);
                    info[name] = {
                        size: (item.length / 1024).toFixed(1) + 'KB',
                        age: Math.round((Date.now() - (data.timestamp || 0)) / 1000 / 60) + ' minutes',
                        timestamp: new Date(data.timestamp || 0).toLocaleString()
                    };
                } catch (error) {
                    info[name] = 'Invalid cache';
                }
            } else {
                info[name] = 'Not cached';
            }
        });
        return info;
    }

    // === OFFLINE MODE DETECTION ===

    shouldUseOfflineMode() {
        return this.networkQuality === 'offline' || 
               this.networkQuality === 'poor' || 
               !this.isOnline;
    }

    isOfflineReady() {
        const metadata = this.getCachedSongsMetadata();
        return metadata && metadata.length > 0;
    }

    // === UTILITY METHODS ===

    getLastSyncTime() {
        const timestamp = localStorage.getItem(this.cacheKeys.lastSync);
        return timestamp ? new Date(parseInt(timestamp)) : null;
    }

    // Clean up when page unloads
    cleanup() {
        this.stopNetworkMonitoring();
    }
}

// Create global instance
window.rhythmOffline = new RhythmOfflineManager();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.rhythmOffline) {
        window.rhythmOffline.cleanup();
    }
});

// Export for modules
export default RhythmOfflineManager;
