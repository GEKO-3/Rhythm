/**
 * FIREBASE DATABASE WITH LOCAL STORAGE INTEGRATION
 * Smart wrapper that uses local database for fast access and offline support
 * Falls back to direct Firebase access if local database is not available
 * @version 2.1.0
 */

import { RhythmFirebaseDB } from './firebase-db-optimized.js';

class RhythmFirebaseDBOffline extends RhythmFirebaseDB {
    constructor() {
        super();
        this.localDB = null;
        this.localDBReady = false;
        this.initLocalDB();
    }

    async initLocalDB() {
        // Wait for local database to be available and initialized
        let attempts = 0;
        while ((!window.rhythmLocalDB || !window.rhythmLocalDB.isInitialized) && attempts < 30) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }
        
        if (window.rhythmLocalDB?.isInitialized) {
            this.localDB = window.rhythmLocalDB;
            this.localDBReady = true;
            console.log('✅ [OfflineDB] Connected to local database');
        } else {
            console.warn('⚠️ [OfflineDB] Local database not available, using Firebase directly');
            this.localDBReady = false;
        }
    }

    /**
     * Enhanced getSongsMetadata with local database integration
     */
    async getSongsMetadata() {
        console.log('🎵 [OfflineDB] Getting songs metadata...');

        // Ensure we've tried to initialize local database
        if (!this.localDBReady) {
            await this.initLocalDB();
        }

        // Use local database if available
        if (this.localDBReady && this.localDB) {
            try {
                console.log('🚀 [OfflineDB] Using local database for metadata...');
                const metadata = await this.localDB.getSongsMetadata();
                if (metadata && metadata.length > 0) {
                    return metadata;
                }
                console.warn('⚠️ [OfflineDB] Local database returned no metadata, falling back to Firebase');
            } catch (error) {
                console.warn('⚠️ [OfflineDB] Local database error, falling back to Firebase:', error);
            }
        }

        // Fallback to direct Firebase access
        console.log('📡 [OfflineDB] Using Firebase directly for metadata...');
        try {
            return await super.getSongsMetadata();
        } catch (error) {
            console.error('❌ [OfflineDB] Failed to fetch metadata from Firebase:', error);
            return [];
        }
    }

    /**
     * Enhanced getSongs with local database integration
     */
    async getSongs() {
        console.log('🎵 [OfflineDB] Getting full songs data...');

        // Ensure we've tried to initialize local database
        if (!this.localDBReady) {
            await this.initLocalDB();
        }

        // Use local database if available
        if (this.localDBReady && this.localDB) {
            try {
                console.log('🚀 [OfflineDB] Using local database for all songs...');
                const songs = await this.localDB.getAllSongs();
                if (songs && Object.keys(songs).length > 0) {
                    return songs;
                }
                console.warn('⚠️ [OfflineDB] Local database returned no songs, falling back to Firebase');
            } catch (error) {
                console.warn('⚠️ [OfflineDB] Local database error, falling back to Firebase:', error);
            }
        }

        // Fallback to direct Firebase access
        console.log('📡 [OfflineDB] Using Firebase directly for songs...');
        try {
            return await super.getSongs();
        } catch (error) {
            console.error('❌ [OfflineDB] Failed to fetch songs from Firebase:', error);
            return {};
        }
    }

    /**
     * Enhanced getSong with local database integration
     */
    async getSong(songId) {
        console.log(`🎵 [OfflineDB] Getting song: ${songId}...`);

        // Ensure we've tried to initialize local database
        if (!this.localDBReady) {
            await this.initLocalDB();
        }

        // Use local database if available
        if (this.localDBReady && this.localDB) {
            try {
                console.log(`🚀 [OfflineDB] Using local database for song ${songId}...`);
                const song = await this.localDB.getSong(songId);
                if (song) {
                    return song;
                }
                console.warn(`⚠️ [OfflineDB] Song ${songId} not in local database, falling back to Firebase`);
            } catch (error) {
                console.warn(`⚠️ [OfflineDB] Local database error for song ${songId}, falling back to Firebase:`, error);
            }
        }

        // Fallback to direct Firebase access
        console.log(`📡 [OfflineDB] Using Firebase directly for song ${songId}...`);
        try {
            return await super.getSong(songId);
        } catch (error) {
            console.error(`❌ [OfflineDB] Failed to fetch song ${songId} from Firebase:`, error);
            return null;
        }
    }

    /**
     * Force sync with Firebase (only if local database is available)
     */
    async syncWithFirebase() {
        if (!this.localDBReady || !this.localDB) {
            console.warn('⚠️ [OfflineDB] Local database not available for sync');
            return false;
        }

        console.log('🔄 [OfflineDB] Forcing sync with Firebase...');
        try {
            return await this.localDB.syncWithFirebase();
        } catch (error) {
            console.error('❌ [OfflineDB] Sync failed:', error);
            return false;
        }
    }

    /**
     * Force refresh all local data (only if local database is available)
     */
    async refreshLocalData() {
        if (!this.localDBReady || !this.localDB) {
            console.warn('⚠️ [OfflineDB] Local database not available for refresh');
            return false;
        }

        console.log('🔄 [OfflineDB] Force refreshing all local data...');
        try {
            return await this.localDB.forceRefresh();
        } catch (error) {
            console.error('❌ [OfflineDB] Refresh failed:', error);
            return false;
        }
    }

    /**
     * Check if offline data is available
     */
    isOfflineReady() {
        if (!this.localDBReady || !this.localDB) return false;
        
        try {
            const status = this.localDB.getStatus();
            return status.songsCount > 0 && status.metadataCount > 0;
        } catch (error) {
            return false;
        }
    }

    /**
     * Get detailed status and info
     */
    getDetailedStatus() {
        if (!this.localDBReady || !this.localDB) {
            return {
                ready: false,
                localDB: false,
                isOnline: navigator.onLine,
                status: 'Local database not available'
            };
        }

        try {
            const status = this.localDB.getStatus();
            return {
                ready: this.isOfflineReady(),
                localDB: true,
                ...status
            };
        } catch (error) {
            return {
                ready: false,
                localDB: false,
                isOnline: navigator.onLine,
                status: 'Error getting status'
            };
        }
    }

    /**
     * Get offline status summary
     */
    getOfflineStatus() {
        const status = this.getDetailedStatus();
        
        return {
            ready: status.ready,
            isOnline: status.isOnline || navigator.onLine,
            songsCount: status.songsCount || 0,
            lastSync: status.lastSync,
            storageUsed: status.storageUsed || '0 MB',
            networkQuality: status.isOnline ? 'good' : 'offline'
        };
    }

    /**
     * Clear all offline data (only if local database is available)
     */
    clearOfflineData() {
        if (this.localDBReady && this.localDB) {
            this.localDB.clearLocalStorage();
            console.log('🗑️ [OfflineDB] All offline data cleared');
        } else {
            console.warn('⚠️ [OfflineDB] Local database not available to clear data');
        }
    }

    /**
     * Check if specific song is cached locally
     */
    isSongCached(songId) {
        if (!this.localDBReady || !this.localDB) {
            return false;
        }

        try {
            const localSongs = this.localDB.getLocalSongs() || {};
            return songId in localSongs;
        } catch (error) {
            return false;
        }
    }

    /**
     * Get list of locally cached songs
     */
    getCachedSongs() {
        if (!this.localDBReady || !this.localDB) {
            return [];
        }

        try {
            const localSongs = this.localDB.getLocalSongs() || {};
            return Object.keys(localSongs);
        } catch (error) {
            return [];
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
