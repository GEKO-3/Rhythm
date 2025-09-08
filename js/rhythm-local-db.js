/**
 * RHYTHM LOCAL DATABASE MANAGER
 * Smart local storage with incremental sync from Firebase
 * Stores songs metadata, lyrics, and handles offline functionality
 * @version 2.1.0
 */

class RhythmLocalDB {
    constructor() {
        this.isInitialized = false;
        this.firebaseDB = null;
        
        // Storage keys
        this.storageKeys = {
            songs: 'rhythm_local_songs',
            metadata: 'rhythm_local_metadata', 
            lastSync: 'rhythm_last_sync',
            version: 'rhythm_db_version',
            syncLog: 'rhythm_sync_log'
        };
        
        // Current database version for migration purposes
        this.dbVersion = '2.0';
        
        // Sync settings
        this.syncIntervalMs = 15 * 60 * 1000; // Check for updates every 15 minutes
        this.maxSyncAge = 24 * 60 * 60 * 1000; // Force full sync after 24 hours
        this.isOnline = navigator.onLine;
        this.syncIntervalId = null; // Store the actual interval ID
        this.lastSyncAttempt = 0; // Track last sync attempt to prevent spam
        this.minSyncInterval = 60 * 1000; // Minimum 1 minute between sync attempts
        
        this.init();
    }

    async init() {
        console.log('🔧 [LocalDB] Initializing local database...');
        console.log('📦 [LocalDB] Version: 2.1.0');
        
        // Set up network listeners
        this.setupNetworkListeners();
        
        // Check if database needs migration
        await this.checkDatabaseVersion();
        
        // Initialize Firebase connection
        await this.initializeFirebase();
        
        // Load or create local database
        await this.loadLocalDatabase();
        
        // Start background sync if online (delay it a bit to not interfere with initial load)
        if (this.isOnline) {
            setTimeout(() => {
                this.startBackgroundSync();
            }, 30000); // Start background sync after 30 seconds
        }
        
        this.isInitialized = true;
        console.log('✅ [LocalDB] Local database initialized successfully');
    }

    setupNetworkListeners() {
        window.addEventListener('online', () => {
            console.log('🌐 [LocalDB] Network restored');
            this.isOnline = true;
            // Do a single sync when network is restored, then start background sync
            setTimeout(() => {
                this.syncWithFirebase();
                this.startBackgroundSync();
            }, 5000); // Wait 5 seconds before syncing
        });

        window.addEventListener('offline', () => {
            console.log('📴 [LocalDB] Network lost - operating in offline mode');
            this.isOnline = false;
            this.stopBackgroundSync();
        });
    }

    async checkDatabaseVersion() {
        const storedVersion = localStorage.getItem(this.storageKeys.version);
        
        if (!storedVersion || storedVersion !== this.dbVersion) {
            console.log('🔄 [LocalDB] Database version mismatch, clearing old data...');
            this.clearLocalStorage();
            localStorage.setItem(this.storageKeys.version, this.dbVersion);
        }
    }

    async initializeFirebase() {
        try {
            // Import Firebase database dynamically
            const { RhythmFirebaseDB } = await import('./firebase-db-optimized.js');
            this.firebaseDB = new RhythmFirebaseDB();
            
            // Wait for Firebase to initialize
            let attempts = 0;
            while (!this.firebaseDB.isInitialized && attempts < 50) {
                await new Promise(resolve => setTimeout(resolve, 100));
                attempts++;
            }
            
            if (this.firebaseDB.isInitialized) {
                console.log('✅ [LocalDB] Firebase connection established');
            } else {
                console.warn('⚠️ [LocalDB] Firebase initialization timeout');
            }
        } catch (error) {
            console.error('❌ [LocalDB] Firebase initialization failed:', error);
            this.firebaseDB = null;
        }
    }

    async loadLocalDatabase() {
        try {
            // Load songs from local storage
            const localSongs = this.getLocalSongs();
            const localMetadata = this.getLocalMetadata();
            
            if (localSongs && localMetadata) {
                const songsCount = Object.keys(localSongs).length;
                console.log(`📖 [LocalDB] Loaded ${songsCount} songs from local storage`);
                console.log(`📊 [LocalDB] Local storage: ${songsCount} songs, ${localMetadata.length} metadata entries`);
                
                // Check if we need to sync
                const lastSync = this.getLastSyncTime();
                const needsSync = !lastSync || (Date.now() - lastSync) > this.maxSyncAge;
                
                if (needsSync && this.isOnline) {
                    console.log('🔄 [LocalDB] Local data is stale, syncing with Firebase...');
                    await this.syncWithFirebase();
                }
            } else {
                console.log('📥 [LocalDB] No local data found, performing initial sync...');
                if (this.isOnline) {
                    await this.performInitialSync();
                } else {
                    console.warn('⚠️ [LocalDB] No local data and offline - limited functionality');
                }
            }
        } catch (error) {
            console.error('❌ [LocalDB] Failed to load local database:', error);
        }
    }

    // === CORE DATA ACCESS METHODS ===

    async getSongsMetadata() {
        console.log('🎵 [LocalDB] Getting songs metadata...');
        
        const metadata = this.getLocalMetadata();
        if (metadata && metadata.length > 0) {
            console.log(`✅ [LocalDB] Returning ${metadata.length} songs metadata from local storage`);
            return metadata;
        }
        
        // If no local data and online, try to sync
        if (this.isOnline && this.firebaseDB) {
            console.log('📡 [LocalDB] No local metadata, fetching from Firebase...');
            return await this.syncAndGetMetadata();
        }
        
        // Offline with no local data
        console.warn('⚠️ [LocalDB] No metadata available offline');
        return [];
    }

    async getSong(songId) {
        console.log(`🎵 [LocalDB] Getting song: ${songId}...`);
        
        const localSongs = this.getLocalSongs();
        
        // Check if we have the song locally
        if (localSongs && localSongs[songId]) {
            console.log(`✅ [LocalDB] Returning song ${songId} from local storage`);
            return localSongs[songId];
        }
        
        // If not local and online, try to fetch and cache
        if (this.isOnline && this.firebaseDB) {
            console.log(`📡 [LocalDB] Song ${songId} not in local storage, fetching from Firebase...`);
            try {
                const song = await this.firebaseDB.getSong(songId);
                if (song) {
                    // Cache the song locally
                    await this.cacheSong(songId, song);
                    console.log(`💾 [LocalDB] Cached song ${songId} locally`);
                    return song;
                }
            } catch (error) {
                console.error(`❌ [LocalDB] Failed to fetch song ${songId}:`, error);
            }
        }
        
        // Song not available
        console.warn(`⚠️ [LocalDB] Song ${songId} not available offline`);
        return null;
    }

    async getAllSongs() {
        console.log('🎵 [LocalDB] Getting all songs...');
        
        const localSongs = this.getLocalSongs();
        if (localSongs && Object.keys(localSongs).length > 0) {
            console.log(`✅ [LocalDB] Returning ${Object.keys(localSongs).length} songs from local storage`);
            return localSongs;
        }
        
        // If no local data and online, try to sync
        if (this.isOnline && this.firebaseDB) {
            console.log('📡 [LocalDB] No local songs, performing full sync...');
            await this.syncWithFirebase();
            return this.getLocalSongs() || {};
        }
        
        // Offline with no local data
        console.warn('⚠️ [LocalDB] No songs available offline');
        return {};
    }

    // === SYNC METHODS ===

    async syncWithFirebase() {
        if (!this.firebaseDB || !this.isOnline) {
            console.log('⚠️ [LocalDB] Cannot sync - Firebase not available or offline');
            return false;
        }

        // Check if we're syncing too frequently
        const now = Date.now();
        if (now - this.lastSyncAttempt < this.minSyncInterval) {
            console.log('🕐 [LocalDB] Sync skipped - too soon since last attempt');
            return true; // Return true to avoid error logging
        }
        
        this.lastSyncAttempt = now;

        try {
            console.log('🔄 [LocalDB] Starting sync with Firebase...');
            
            const startTime = Date.now();
            
            // Get remote metadata to check for changes
            const remoteMetadata = await this.firebaseDB.getSongsMetadata();
            const localMetadata = this.getLocalMetadata() || [];
            
            // Compare and find changes
            const changes = this.findChanges(localMetadata, remoteMetadata);
            
            if (changes.added.length === 0 && changes.updated.length === 0 && changes.removed.length === 0) {
                // Only log "no changes" occasionally to reduce console spam
                if (Math.random() < 0.1) { // 10% chance to log
                    console.log('✅ [LocalDB] No changes detected - local data is up to date');
                }
                this.updateLastSyncTime();
                return true;
            }
            
            console.log(`🔄 [LocalDB] Changes detected: ${changes.added.length} added, ${changes.updated.length} updated, ${changes.removed.length} removed`);
            
            // Apply changes
            await this.applyChanges(changes);
            
            // Update metadata
            this.saveLocalMetadata(remoteMetadata);
            this.updateLastSyncTime();
            
            const syncTime = Date.now() - startTime;
            console.log(`✅ [LocalDB] Sync completed in ${syncTime}ms`);
            
            // Log sync for debugging
            this.logSync({
                timestamp: Date.now(),
                duration: syncTime,
                changes: changes,
                success: true
            });
            
            return true;
        } catch (error) {
            console.error('❌ [LocalDB] Sync failed:', error);
            this.logSync({
                timestamp: Date.now(),
                error: error.message,
                success: false
            });
            return false;
        }
    }

    async performInitialSync() {
        if (!this.firebaseDB || !this.isOnline) {
            console.log('⚠️ [LocalDB] Cannot perform initial sync - Firebase not available or offline');
            return false;
        }

        try {
            console.log('📥 [LocalDB] Performing initial sync...');
            
            // Get all metadata first
            const metadata = await this.firebaseDB.getSongsMetadata();
            this.saveLocalMetadata(metadata);
            
            console.log(`📋 [LocalDB] Downloaded ${metadata.length} songs metadata`);
            
            // Download top 50 songs for immediate offline access
            const topSongs = metadata.slice(0, 50);
            const songPromises = topSongs.map(song => this.downloadAndCacheSong(song.id));
            
            const results = await Promise.allSettled(songPromises);
            const successful = results.filter(r => r.status === 'fulfilled').length;
            
            console.log(`💾 [LocalDB] Cached ${successful}/${topSongs.length} popular songs for offline access`);
            
            this.updateLastSyncTime();
            
            // Continue downloading remaining songs in background more aggressively
            if (topSongs.length < metadata.length) {
                this.backgroundDownloadSongs(metadata.slice(50));
            }
            
            return true;
        } catch (error) {
            console.error('❌ [LocalDB] Initial sync failed:', error);
            return false;
        }
    }

    async downloadAndCacheSong(songId) {
        try {
            const song = await this.firebaseDB.getSong(songId);
            if (song) {
                await this.cacheSong(songId, song);
                return true;
            }
        } catch (error) {
            console.warn(`⚠️ [LocalDB] Failed to download song ${songId}:`, error.message);
        }
        return false;
    }

    backgroundDownloadSongs(songsMetadata) {
        console.log(`🔄 [LocalDB] Starting background download of ${songsMetadata.length} remaining songs...`);
        
        // Download songs in batches to improve speed
        let index = 0;
        const batchSize = 5; // Download 5 songs at once
        
        const downloadBatch = async () => {
            if (index >= songsMetadata.length || !this.isOnline) {
                console.log('✅ [LocalDB] Background download completed');
                return;
            }
            
            // Get the next batch
            const batch = songsMetadata.slice(index, index + batchSize);
            const downloadPromises = batch.map(song => this.downloadAndCacheSong(song.id));
            
            try {
                await Promise.allSettled(downloadPromises);
                index += batch.length;
                
                // Log progress
                if (index % 20 === 0 || index >= songsMetadata.length) {
                    console.log(`📥 [LocalDB] Downloaded ${index}/${songsMetadata.length} songs (${Math.round(index/songsMetadata.length*100)}%)`);
                }
                
                // Small delay between batches
                setTimeout(downloadBatch, 200);
            } catch (error) {
                console.warn('⚠️ [LocalDB] Batch download error:', error);
                setTimeout(downloadBatch, 1000); // Longer delay on error
            }
        };
        
        // Start downloading after 2 seconds (reduced from 5)
        setTimeout(downloadBatch, 2000);
    }

    findChanges(localMetadata, remoteMetadata) {
        const localMap = new Map(localMetadata.map(song => [song.id, song]));
        const remoteMap = new Map(remoteMetadata.map(song => [song.id, song]));
        
        const changes = {
            added: [],
            updated: [],
            removed: []
        };
        
        // Find added and updated songs
        for (const [id, remoteSong] of remoteMap) {
            const localSong = localMap.get(id);
            
            if (!localSong) {
                changes.added.push(remoteSong);
            } else if (this.hasChanged(localSong, remoteSong)) {
                changes.updated.push(remoteSong);
            }
        }
        
        // Find removed songs
        for (const [id, localSong] of localMap) {
            if (!remoteMap.has(id)) {
                changes.removed.push(localSong);
            }
        }
        
        return changes;
    }

    hasChanged(localSong, remoteSong) {
        // Compare relevant fields to detect changes
        return (
            localSong.name !== remoteSong.name ||
            localSong.genre !== remoteSong.genre ||
            localSong.hasLyrics !== remoteSong.hasLyrics ||
            localSong.lastModified !== remoteSong.lastModified
        );
    }

    async applyChanges(changes) {
        const localSongs = this.getLocalSongs() || {};
        
        // Remove deleted songs
        for (const song of changes.removed) {
            delete localSongs[song.id];
            console.log(`🗑️ [LocalDB] Removed song: ${song.name}`);
        }
        
        // Download new and updated songs
        const downloadPromises = [...changes.added, ...changes.updated].map(async (song) => {
            try {
                const fullSong = await this.firebaseDB.getSong(song.id);
                if (fullSong) {
                    localSongs[song.id] = fullSong;
                    console.log(`💾 [LocalDB] ${changes.added.includes(song) ? 'Added' : 'Updated'} song: ${song.name}`);
                }
            } catch (error) {
                console.error(`❌ [LocalDB] Failed to download song ${song.id}:`, error);
            }
        });
        
        await Promise.allSettled(downloadPromises);
        
        // Save updated songs
        this.saveLocalSongs(localSongs);
    }

    // === BACKGROUND SYNC ===

    startBackgroundSync() {
        // Stop existing sync
        this.stopBackgroundSync();
        
        // Start periodic sync with correct interval
        this.syncIntervalId = setInterval(() => {
            console.log('🔄 [LocalDB] Background sync check...');
            this.syncWithFirebase();
        }, this.syncIntervalMs);
        
        console.log(`✅ [LocalDB] Background sync started (every ${this.syncIntervalMs / 1000 / 60} minutes)`);
    }

    stopBackgroundSync() {
        if (this.syncIntervalId) {
            clearInterval(this.syncIntervalId);
            this.syncIntervalId = null;
            console.log('⏹️ [LocalDB] Background sync stopped');
        }
    }

    // === LOCAL STORAGE METHODS ===

    getLocalSongs() {
        try {
            const stored = localStorage.getItem(this.storageKeys.songs);
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('❌ [LocalDB] Failed to get local songs:', error);
            return null;
        }
    }

    saveLocalSongs(songs) {
        try {
            localStorage.setItem(this.storageKeys.songs, JSON.stringify(songs));
            console.log(`💾 [LocalDB] Saved ${Object.keys(songs).length} songs to local storage`);
            return true;
        } catch (error) {
            console.error('❌ [LocalDB] Failed to save songs:', error);
            return false;
        }
    }

    async cacheSong(songId, songData) {
        const localSongs = this.getLocalSongs() || {};
        localSongs[songId] = songData;
        return this.saveLocalSongs(localSongs);
    }

    getLocalMetadata() {
        try {
            const stored = localStorage.getItem(this.storageKeys.metadata);
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('❌ [LocalDB] Failed to get local metadata:', error);
            return null;
        }
    }

    saveLocalMetadata(metadata) {
        try {
            localStorage.setItem(this.storageKeys.metadata, JSON.stringify(metadata));
            console.log(`💾 [LocalDB] Saved ${metadata.length} songs metadata to local storage`);
            return true;
        } catch (error) {
            console.error('❌ [LocalDB] Failed to save metadata:', error);
            return false;
        }
    }

    // === UTILITY METHODS ===

    getLastSyncTime() {
        const timestamp = localStorage.getItem(this.storageKeys.lastSync);
        return timestamp ? parseInt(timestamp) : null;
    }

    updateLastSyncTime() {
        localStorage.setItem(this.storageKeys.lastSync, Date.now().toString());
    }

    logSync(syncData) {
        try {
            const logs = JSON.parse(localStorage.getItem(this.storageKeys.syncLog) || '[]');
            logs.push(syncData);
            
            // Keep only last 10 sync logs
            if (logs.length > 10) {
                logs.splice(0, logs.length - 10);
            }
            
            localStorage.setItem(this.storageKeys.syncLog, JSON.stringify(logs));
        } catch (error) {
            console.error('❌ [LocalDB] Failed to log sync:', error);
        }
    }

    // === STATUS AND DEBUGGING ===

    getStatus() {
        const localSongs = this.getLocalSongs() || {};
        const localMetadata = this.getLocalMetadata() || [];
        const lastSync = this.getLastSyncTime();
        
        return {
            isInitialized: this.isInitialized,
            isOnline: this.isOnline,
            songsCount: Object.keys(localSongs).length,
            metadataCount: localMetadata.length,
            lastSync: lastSync ? new Date(lastSync) : null,
            storageUsed: this.getStorageUsage(),
            dbVersion: this.dbVersion
        };
    }

    getStorageUsage() {
        try {
            let totalSize = 0;
            for (const key of Object.values(this.storageKeys)) {
                const item = localStorage.getItem(key);
                if (item) {
                    totalSize += new Blob([item]).size;
                }
            }
            return `${(totalSize / 1024 / 1024).toFixed(2)} MB`;
        } catch (error) {
            return 'Unknown';
        }
    }

    async syncAndGetMetadata() {
        try {
            const metadata = await this.firebaseDB.getSongsMetadata();
            this.saveLocalMetadata(metadata);
            this.updateLastSyncTime();
            return metadata;
        } catch (error) {
            console.error('❌ [LocalDB] Failed to sync metadata:', error);
            return [];
        }
    }

    clearLocalStorage() {
        Object.values(this.storageKeys).forEach(key => {
            localStorage.removeItem(key);
        });
        console.log('🗑️ [LocalDB] Cleared all local storage');
    }

    // Force refresh all data
    async forceRefresh() {
        console.log('🔄 [LocalDB] Force refreshing all data...');
        this.clearLocalStorage();
        localStorage.setItem(this.storageKeys.version, this.dbVersion);
        
        if (this.isOnline) {
            await this.performInitialSync();
            console.log('✅ [LocalDB] Force refresh completed');
        } else {
            console.warn('⚠️ [LocalDB] Cannot refresh while offline');
        }
    }

    // Cleanup on page unload
    cleanup() {
        this.stopBackgroundSync();
    }
}

// Create global instance
window.rhythmLocalDB = new RhythmLocalDB();

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.rhythmLocalDB) {
        window.rhythmLocalDB.cleanup();
    }
});

// Export for modules
export default RhythmLocalDB;
