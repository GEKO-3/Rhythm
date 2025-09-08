/**
 * FIREBASE DATABASE WITH OFFLINE SUPPORT
 * Enhanced wrapper that provides offline functionality
 */

import { RhythmFirebaseDB } from './firebase-db-optimized.js';

class RhythmFirebaseDBOffline extends RhythmFirebaseDB {
    constructor() {
        super();
        this.offlineManager = null;
        this.initOfflineManager();
    }

    async initOfflineManager() {
        // Wait for offline manager to be available
        if (typeof window !== 'undefined' && window.rhythmOffline) {
            this.offlineManager = window.rhythmOffline;
        } else {
            // Wait a bit and try again
            setTimeout(() => this.initOfflineManager(), 100);
        }
    }

    /**
     * Enhanced getSongsMetadata with offline support
     */
    async getSongsMetadata() {
        console.log('🎵 [OfflineDB] Getting songs metadata...');

        // Always check offline manager first
        if (this.offlineManager) {
            const shouldUseOffline = this.offlineManager.shouldUseOfflineMode();
            const cachedData = this.offlineManager.getCachedSongsMetadata();
            
            if (shouldUseOffline && cachedData) {
                console.log('📴 [OfflineDB] Using cached metadata (offline/poor connection)');
                return cachedData;
            }
            
            if (cachedData && this.offlineManager.networkQuality === 'poor') {
                console.log('🐌 [OfflineDB] Using cached metadata (poor connection)');
                return cachedData;
            }
        }

        // Try to fetch fresh data
        try {
            console.log('🌐 [OfflineDB] Attempting to fetch fresh metadata...');
            const freshData = await super.getSongsMetadata();
            
            // Cache the fresh data
            if (this.offlineManager && freshData && freshData.length > 0) {
                await this.offlineManager.cacheSongsMetadata(freshData);
                console.log('💾 [OfflineDB] Fresh metadata cached for offline use');
            }
            
            return freshData;
        } catch (error) {
            console.warn('⚠️ [OfflineDB] Failed to fetch fresh metadata:', error.message);
            
            // Fallback to cached data if available
            if (this.offlineManager) {
                const cachedData = this.offlineManager.getCachedSongsMetadata();
                if (cachedData) {
                    console.log('📖 [OfflineDB] Using cached metadata as fallback');
                    return cachedData;
                }
            }
            
            throw new Error('No metadata available offline and network fetch failed');
        }
    }

    /**
     * Enhanced getSongs with offline support (for full lyrics data)
     */
    async getSongs() {
        console.log('🎵 [OfflineDB] Getting full songs data...');

        // Check offline manager
        if (this.offlineManager) {
            const shouldUseOffline = this.offlineManager.shouldUseOfflineMode();
            const cachedData = this.offlineManager.getCachedFullSongs();
            
            if (shouldUseOffline && cachedData) {
                console.log('📴 [OfflineDB] Using cached full songs (offline/poor connection)');
                return cachedData;
            }
        }

        // Try to fetch fresh data
        try {
            console.log('🌐 [OfflineDB] Attempting to fetch fresh full songs...');
            const freshData = await super.getSongs();
            
            // Cache the fresh data
            if (this.offlineManager && freshData && Object.keys(freshData).length > 0) {
                await this.offlineManager.cacheFullSongs(freshData);
                console.log('💾 [OfflineDB] Fresh full songs cached for offline use');
            }
            
            return freshData;
        } catch (error) {
            console.warn('⚠️ [OfflineDB] Failed to fetch fresh full songs:', error.message);
            
            // Fallback to cached data if available
            if (this.offlineManager) {
                const cachedData = this.offlineManager.getCachedFullSongs();
                if (cachedData) {
                    console.log('📖 [OfflineDB] Using cached full songs as fallback');
                    return cachedData;
                }
            }
            
            throw new Error('No songs available offline and network fetch failed');
        }
    }

    /**
     * Enhanced getSong with offline support (for individual song)
     */
    async getSong(songId) {
        console.log(`🎵 [OfflineDB] Getting song: ${songId}...`);

        // Check offline manager for cached song
        if (this.offlineManager) {
            const shouldUseOffline = this.offlineManager.shouldUseOfflineMode();
            const cachedSong = this.offlineManager.getCachedSong(songId);
            
            if (shouldUseOffline && cachedSong) {
                console.log(`📴 [OfflineDB] Using cached song: ${songId} (offline/poor connection)`);
                return cachedSong;
            }
        }

        // Try to fetch fresh data
        try {
            console.log(`🌐 [OfflineDB] Attempting to fetch fresh song: ${songId}...`);
            const freshSong = await super.getSong(songId);
            
            // Update cache with this song
            if (this.offlineManager && freshSong) {
                const fullSongs = this.offlineManager.getCachedFullSongs() || {};
                fullSongs[songId] = freshSong;
                await this.offlineManager.cacheFullSongs(fullSongs);
                console.log(`💾 [OfflineDB] Updated cache with song: ${songId}`);
            }
            
            return freshSong;
        } catch (error) {
            console.warn(`⚠️ [OfflineDB] Failed to fetch fresh song ${songId}:`, error.message);
            
            // Fallback to cached data if available
            if (this.offlineManager) {
                const cachedSong = this.offlineManager.getCachedSong(songId);
                if (cachedSong) {
                    console.log(`📖 [OfflineDB] Using cached song as fallback: ${songId}`);
                    return cachedSong;
                }
            }
            
            throw new Error(`Song ${songId} not available offline and network fetch failed`);
        }
    }

    /**
     * Preload all songs for offline use
     */
    async preloadForOffline() {
        if (!this.offlineManager) {
            console.warn('⚠️ [OfflineDB] Offline manager not available');
            return false;
        }

        try {
            console.log('📥 [OfflineDB] Starting offline preload...');
            
            // First get metadata
            const metadata = await this.getSongsMetadata();
            console.log(`📋 [OfflineDB] Preloaded ${metadata.length} songs metadata`);
            
            // Then get full songs data
            const fullSongs = await this.getSongs();
            const songCount = Object.keys(fullSongs).length;
            console.log(`📚 [OfflineDB] Preloaded ${songCount} full songs`);
            
            console.log('✅ [OfflineDB] Offline preload complete');
            return true;
        } catch (error) {
            console.error('❌ [OfflineDB] Offline preload failed:', error);
            return false;
        }
    }

    /**
     * Check if offline data is available
     */
    isOfflineReady() {
        if (!this.offlineManager) return false;
        return this.offlineManager.isOfflineReady();
    }

    /**
     * Get offline status and info
     */
    getOfflineStatus() {
        if (!this.offlineManager) {
            return {
                ready: false,
                networkQuality: 'unknown',
                cacheInfo: {}
            };
        }

        return {
            ready: this.offlineManager.isOfflineReady(),
            networkQuality: this.offlineManager.networkQuality,
            isOnline: this.offlineManager.isOnline,
            lastSync: this.offlineManager.getLastSyncTime(),
            cacheInfo: this.offlineManager.getCacheInfo()
        };
    }

    /**
     * Force refresh cache
     */
    async refreshOfflineCache() {
        if (!this.offlineManager) {
            throw new Error('Offline manager not available');
        }

        console.log('🔄 [OfflineDB] Force refreshing offline cache...');
        
        try {
            // Clear existing cache
            this.clearCache(); // Clear Firebase cache
            
            // Fetch fresh data
            const metadata = await super.getSongsMetadata();
            const fullSongs = await super.getSongs();
            
            // Cache fresh data
            await this.offlineManager.cacheSongsMetadata(metadata);
            await this.offlineManager.cacheFullSongs(fullSongs);
            
            console.log('✅ [OfflineDB] Offline cache refreshed successfully');
            return true;
        } catch (error) {
            console.error('❌ [OfflineDB] Failed to refresh offline cache:', error);
            throw error;
        }
    }

    /**
     * Clear all offline data
     */
    clearOfflineData() {
        if (this.offlineManager) {
            this.offlineManager.clearAllCache();
            console.log('🗑️ [OfflineDB] All offline data cleared');
        }
    }
}

// Create enhanced global instance
window.RhythmFirebaseDBOffline = RhythmFirebaseDBOffline;

// Make it available globally
if (typeof window !== 'undefined') {
    window.rhythmDB = new RhythmFirebaseDBOffline();
}

export { RhythmFirebaseDBOffline };
