// Firebase Database Service for Rhythm Boduberu
// Handles all database operations for songs, lyrics, and show lists

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, set, get, push, remove, onValue, off, child } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1r1pVGc3QVmKzQOWPJkD9N87FTEnhus",
  authDomain: "rhythm-ea7a1.firebaseapp.com",
  databaseURL: "https://rhythm-ea7a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rhythm-ea7a1",
  storageBucket: "rhythm-ea7a1.firebasestorage.app",
  messagingSenderId: "776053739080",
  appId: "1:776053739080:web:bfaf1a208b117faf94927d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class RhythmFirebaseDB {
  constructor() {
    this.listeners = new Map(); // Track active listeners for cleanup
    this.cache = new Map(); // Simple caching for better performance
    this.isOnline = navigator.onLine;
    this.offlineQueue = []; // Queue operations when offline
    this.OFFLINE_STORAGE_KEY = 'rhythm-offline-data';
    this.OFFLINE_QUEUE_KEY = 'rhythm-offline-queue';
    
    // Initialize offline capabilities
    this.initOfflineMode();
    
    // Listen for online/offline events
    window.addEventListener('online', () => {
      console.log('🌐 Back online - syncing queued operations');
      this.isOnline = true;
      this.syncOfflineQueue();
    });
    
    window.addEventListener('offline', () => {
      console.log('📱 Gone offline - operations will be queued');
      this.isOnline = false;
    });
  }

  /**
   * Initialize offline mode capabilities
   */
  initOfflineMode() {
    try {
      // Load offline queue from localStorage
      const savedQueue = localStorage.getItem(this.OFFLINE_QUEUE_KEY);
      if (savedQueue) {
        this.offlineQueue = JSON.parse(savedQueue);
        console.log('📱 Loaded offline queue:', this.offlineQueue.length, 'operations');
      }
      
      // Load cached data from localStorage
      const cachedData = localStorage.getItem(this.OFFLINE_STORAGE_KEY);
      if (cachedData) {
        const data = JSON.parse(cachedData);
        console.log('📱 Loaded offline cache with', Object.keys(data).length, 'data types');
        
        // Restore cache
        Object.entries(data).forEach(([key, value]) => {
          this.cache.set(key, value);
        });
      }
    } catch (error) {
      console.warn('⚠️ Error initializing offline mode:', error);
    }
  }

  /**
   * Save data to offline storage
   */
  saveToOfflineStorage(key, data) {
    try {
      let offlineData = {};
      const existing = localStorage.getItem(this.OFFLINE_STORAGE_KEY);
      if (existing) {
        offlineData = JSON.parse(existing);
      }
      
      offlineData[key] = {
        data: data,
        timestamp: Date.now(),
        synced: this.isOnline
      };
      
      localStorage.setItem(this.OFFLINE_STORAGE_KEY, JSON.stringify(offlineData));
      console.log('💾 Saved to offline storage:', key);
    } catch (error) {
      console.warn('⚠️ Error saving to offline storage:', error);
    }
  }

  /**
   * Get data from offline storage
   */
  getFromOfflineStorage(key) {
    try {
      const offlineData = localStorage.getItem(this.OFFLINE_STORAGE_KEY);
      if (!offlineData) return null;
      
      const data = JSON.parse(offlineData);
      if (data[key]) {
        console.log('📱 Retrieved from offline storage:', key);
        return data[key].data;
      }
    } catch (error) {
      console.warn('⚠️ Error reading from offline storage:', error);
    }
    return null;
  }

  /**
   * Queue operation for when back online
   */
  queueOfflineOperation(operation, data) {
    const queueItem = {
      id: Date.now() + Math.random(),
      operation: operation,
      data: data,
      timestamp: Date.now()
    };
    
    this.offlineQueue.push(queueItem);
    localStorage.setItem(this.OFFLINE_QUEUE_KEY, JSON.stringify(this.offlineQueue));
    console.log('📱 Queued offline operation:', operation);
    
    return queueItem.id;
  }

  /**
   * Sync queued operations when back online
   */
  async syncOfflineQueue() {
    if (!this.isOnline || this.offlineQueue.length === 0) {
      return;
    }

    console.log('🔄 Syncing', this.offlineQueue.length, 'queued operations');
    const operations = [...this.offlineQueue];
    this.offlineQueue = [];

    for (const operation of operations) {
      try {
        console.log('🔄 Syncing operation:', operation.operation);
        
        switch (operation.operation) {
          case 'addSong':
            await this._addSongOnline(operation.data);
            break;
          case 'updateSong':
            await this._updateSongOnline(operation.data.songName, operation.data.updates);
            break;
          case 'deleteSong':
            await this._deleteSongOnline(operation.data.songName);
            break;
          case 'addApplication':
            await this._addApplicationOnline(operation.data);
            break;
          case 'updateApplication':
            await this._updateApplicationOnline(operation.data.id, operation.data.updates);
            break;
          default:
            console.warn('Unknown operation type:', operation.operation);
        }
        
        console.log('✅ Synced operation:', operation.operation);
      } catch (error) {
        console.error('❌ Error syncing operation:', operation.operation, error);
        // Re-queue failed operations
        this.offlineQueue.push(operation);
      }
    }

    // Update localStorage with remaining queue
    localStorage.setItem(this.OFFLINE_QUEUE_KEY, JSON.stringify(this.offlineQueue));
    
    if (this.offlineQueue.length === 0) {
      console.log('✅ All operations synced successfully');
    } else {
      console.log('⚠️', this.offlineQueue.length, 'operations failed to sync');
    }
  }

  // ===== SONG MANAGEMENT =====
  
  /**
   * Add a new song to the database (ONLINE ONLY)
   * @param {Object} songData - Song data object
   * @returns {Promise<string>} - Song name (used as ID)
   */
  async addSong(songData) {
    try {
      if (!this.isOnline) {
        throw new Error('Adding songs requires an internet connection. Please check your connection and try again.');
      }

      if (!songData.name || !songData.name.trim()) {
        throw new Error('Song name is required');
      }
      
      const songKey = songData.name.trim();
      const song = {
        ...songData,
        name: songKey,
        dateAdded: new Date().toISOString(),
        lastModified: new Date().toISOString()
      };

      // Online mode only: save to Firebase
      return await this._addSongOnline(song);
      
    } catch (error) {
      console.error('❌ Error adding song:', error);
      throw new Error('Failed to add song: ' + error.message);
    }
  }

  /**
   * Internal method to add song online (used by sync)
   */
  async _addSongOnline(songData) {
    const songKey = songData.name.trim();
    const songRef = ref(database, `songs/${songKey}`);
    
    await set(songRef, songData);
    await this.updateMetadata();
    
    // Update cache
    const allSongs = await this.getAllSongs();
    this.cache.set('allSongs', allSongs);
    this.saveToOfflineStorage('allSongs', allSongs);
    
    console.log('✅ Song added to Firebase:', songKey);
    return songKey;
  }

  /**
   * Update an existing song (ONLINE ONLY)
   * @param {string} songName - Song name (used as ID)
   * @param {Object} updates - Fields to update
   */
  async updateSong(songName, updates) {
    try {
      if (!this.isOnline) {
        throw new Error('Updating songs requires an internet connection. Please check your connection and try again.');
      }

      const songRef = ref(database, `songs/${songName}`);
      
      const updateData = {
        ...updates,
        name: songName, // Ensure name consistency
        lastModified: new Date().toISOString()
      };
      
      await set(songRef, updateData);
      await this.updateMetadata();
      
      // Update cache after successful online update
      const allSongs = await this.getAllSongs();
      this.cache.set('allSongs', allSongs);
      this.saveToOfflineStorage('allSongs', allSongs);
      
      console.log('✅ Song updated successfully:', songName);
      
    } catch (error) {
      console.error('❌ Error updating song:', error);
      throw new Error('Failed to update song: ' + error.message);
    }
  }

  /**
   * Delete a song (ONLINE ONLY)
   * @param {string} songName - Song name (used as ID) to delete
   */
  async deleteSong(songName) {
    try {
      if (!this.isOnline) {
        throw new Error('Deleting songs requires an internet connection. Please check your connection and try again.');
      }

      const songRef = ref(database, `songs/${songName}`);
      await remove(songRef);
      
      // Also remove from any show lists
      await this.removeSongFromAllShows(songName);
      await this.updateMetadata();
      
      // Update cache after successful deletion
      const allSongs = await this.getAllSongs();
      this.cache.set('allSongs', allSongs);
      this.saveToOfflineStorage('allSongs', allSongs);
      
      console.log('✅ Song deleted successfully:', songName);
      
    } catch (error) {
      console.error('❌ Error deleting song:', error);
      throw new Error('Failed to delete song: ' + error.message);
    }
  }

  /**
   * Get a single song by ID
   * @param {string} songId - Song ID
   * @returns {Promise<Object|null>} - Song data or null if not found
   */
  async getSong(songId) {
    try {
      const songRef = ref(database, `songs/${songId}`);
      const snapshot = await get(songRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
      
    } catch (error) {
      console.error('❌ Error getting song:', error);
      throw new Error('Failed to get song: ' + error.message);
    }
  }

  /**
   * Get all songs (Offline support for display only)
   * @param {boolean} allowOffline - Whether to allow offline access (default: true for songlist/lyrics)
   * @param {boolean} forceRefresh - Force refresh from Firebase, bypassing cache
   * @returns {Promise<Array>} - Array of all songs
   */
  async getAllSongs(allowOffline = true, forceRefresh = false) {
    try {
      // Check cache first (unless forcing refresh)
      if (!forceRefresh && this.cache.has('allSongs')) {
        const cachedSongs = this.cache.get('allSongs');
        console.log('📋 Returning songs from cache, count:', cachedSongs.length);
        return cachedSongs;
      }

      if (!this.isOnline) {
        if (!allowOffline) {
          throw new Error('This feature requires an internet connection. Please check your connection and try again.');
        }
        
        // Offline mode: return from offline storage (for songlist/lyrics display only)
        console.log('📱 Offline - returning songs from offline storage for display');
        const offlineSongs = this.getFromOfflineStorage('allSongs') || [];
        // Ensure we always return an array
        const validOfflineSongs = Array.isArray(offlineSongs) ? offlineSongs : [];
        this.cache.set('allSongs', validOfflineSongs);
        return validOfflineSongs;
      }

      // Online mode: fetch from Firebase
      console.log('🔥 Fetching songs from Firebase...');
      const songsRef = ref(database, 'songs');
      const snapshot = await get(songsRef);
      
      console.log('📊 Firebase snapshot exists:', snapshot.exists());
      
      let songsArray = [];
      if (snapshot.exists()) {
        const songsObject = snapshot.val();
        console.log('📊 Raw Firebase data:', Object.keys(songsObject).length, 'songs');
        console.log('📊 Sample song keys:', Object.keys(songsObject).slice(0, 3));
        // Convert object to array and sort by dateAdded
        songsArray = Object.values(songsObject).sort((a, b) => 
          new Date(b.dateAdded) - new Date(a.dateAdded)
        );
      } else {
        console.log('📊 Firebase snapshot is empty - no songs in database');
      }
      
      // Cache the results for offline access
      this.cache.set('allSongs', songsArray);
      this.saveToOfflineStorage('allSongs', songsArray);
      
      console.log('✅ Retrieved', songsArray.length, 'songs from Firebase');
      return songsArray;
      
    } catch (error) {
      console.error('❌ Error getting all songs:', error);
      
      // Only fallback to offline storage if offline access is allowed
      if (allowOffline) {
        const offlineSongs = this.getFromOfflineStorage('allSongs') || [];
        // Ensure we always return an array
        const validOfflineSongs = Array.isArray(offlineSongs) ? offlineSongs : [];
        if (validOfflineSongs.length > 0) {
          console.log('📱 Using offline fallback for display:', validOfflineSongs.length, 'songs');
          this.cache.set('allSongs', validOfflineSongs);
          return validOfflineSongs;
        }
        // Return empty array instead of throwing error for display purposes
        console.log('📱 No offline data available, returning empty array for display');
        return [];
      }
      
      throw new Error('Failed to get songs: ' + error.message);
    }
  }

  /**
   * Get songs specifically for display purposes (songlist.html, lyrics.html)
   * This method allows offline access for core music functionality
   * @returns {Promise<Array>} - Array of songs for display
   */
  async getSongsForDisplay() {
    return await this.getAllSongs(true); // Allow offline access
  }

  /**
   * Get songs for administrative purposes (editing, management)
   * This method requires online connection
   * @returns {Promise<Array>} - Array of songs for admin use
   */
  async getSongsForAdmin() {
    return await this.getAllSongs(false); // Require online access
  }

  /**
   * Check if online connection is required for current operation
   * @param {string} operation - Operation type ('display', 'admin', 'edit')
   * @returns {boolean} - Whether online connection is required
   */
  requiresOnlineConnection(operation) {
    const displayOperations = ['display', 'view', 'read'];
    return !displayOperations.includes(operation.toLowerCase());
  }

  /**
   * Validate online connection for administrative operations
   * @param {string} operation - Operation being attempted
   * @throws {Error} - If offline and operation requires online connection
   */
  validateOnlineConnection(operation) {
    if (!this.isOnline && this.requiresOnlineConnection(operation)) {
      throw new Error(`${operation} requires an internet connection. Please check your connection and try again.`);
    }
  }

  async getAllSongsAsObject(allowOffline = true) {
    try {
      // Check if offline mode is allowed and we're offline
      if (!this.isOnline && allowOffline) {
        console.log('⚡ Loading songs from offline storage...');
        const cachedSongs = this.getFromOfflineStorage('allSongs');
        if (cachedSongs && Array.isArray(cachedSongs)) {
          // Convert array to object format
          const songsObject = {};
          cachedSongs.forEach(song => {
            if (song && song.name) {
              songsObject[song.name] = song;
            }
          });
          return songsObject;
        }
      }

      // Validate online requirement for admin operations
      if (!allowOffline && !this.isOnline) {
        throw new Error('Administrative operations require an internet connection. Please check your connection and try again.');
      }

      const songsRef = ref(database, 'songs');
      const snapshot = await get(songsRef);
      
      if (snapshot.exists()) {
        const songsObject = snapshot.val();
        
        // Cache for offline use if online
        if (this.isOnline) {
          const songsArray = Object.values(songsObject);
          this.cache.set('allSongs', songsArray);
          this.saveToOfflineStorage('allSongs', songsArray);
        }
        
        return songsObject;
      }
      
      return {};
      
    } catch (error) {
      console.error('❌ Error getting all songs as object:', error);
      throw new Error('Failed to get songs: ' + error.message);
    }
  }

  /**
   * Search songs by name or lyrics
   * @param {string} query - Search query
   * @returns {Promise<Array>} - Filtered songs
   */
  async searchSongs(query) {
    try {
      const allSongs = await this.getAllSongs();
      const lowercaseQuery = query.toLowerCase();
      
      return allSongs.filter(song => 
        song.name?.toLowerCase().includes(lowercaseQuery) ||
        song.lyrics?.toLowerCase().includes(lowercaseQuery) ||
        song.englishLyrics?.toLowerCase().includes(lowercaseQuery) ||
        song.genre?.toLowerCase().includes(lowercaseQuery)
      );
      
    } catch (error) {
      console.error('❌ Error searching songs:', error);
      throw new Error('Failed to search songs: ' + error.message);
    }
  }

  // ===== SHOW LIST MANAGEMENT =====

  /**
   * Add song to show list
   * @param {string} songId - Song ID
   * @param {Object} showData - Show details (date, venue, etc.)
   * @returns {Promise<string>} - Show entry ID
   */
  async addToShowList(songId, showData = {}) {
    try {
      const showListRef = ref(database, 'showList');
      const newShowRef = push(showListRef);
      
      const showEntry = {
        id: newShowRef.key,
        songId: songId,
        dateAdded: new Date().toISOString(),
        ...showData
      };
      
      await set(newShowRef, showEntry);
      console.log('✅ Song added to show list:', songId);
      
      return showEntry.id;
      
    } catch (error) {
      console.error('❌ Error adding to show list:', error);
      throw new Error('Failed to add to show list: ' + error.message);
    }
  }

  /**
   * Remove song from show list
   * @param {string} showEntryId - Show entry ID (not song ID)
   */
  async removeFromShowList(showEntryId) {
    try {
      const showRef = ref(database, `showList/${showEntryId}`);
      await remove(showRef);
      
      console.log('✅ Removed from show list:', showEntryId);
      
    } catch (error) {
      console.error('❌ Error removing from show list:', error);
      throw new Error('Failed to remove from show list: ' + error.message);
    }
  }

  /**
   * Remove song from all shows (helper for song deletion)
   * @param {string} songId - Song ID
   */
  async removeSongFromAllShows(songId) {
    try {
      const showListRef = ref(database, 'showList');
      const snapshot = await get(showListRef);
      
      if (snapshot.exists()) {
        const showList = snapshot.val();
        const promises = [];
        
        for (const [showId, showData] of Object.entries(showList)) {
          if (showData.songId === songId) {
            promises.push(remove(ref(database, `showList/${showId}`)));
          }
        }
        
        await Promise.all(promises);
      }
      
    } catch (error) {
      console.error('❌ Error removing song from shows:', error);
    }
  }

  /**
   * Clear the entire show list
   * @returns {Promise<void>}
   */
  async clearShowList() {
    try {
      console.log('🧹 Clearing show list...');
      const showListRef = ref(database, 'showList');
      await remove(showListRef);
      console.log('✅ Show list cleared successfully');
      
    } catch (error) {
      console.error('❌ Error clearing show list:', error);
      throw new Error('Failed to clear show list: ' + error.message);
    }
  }

  /**
   * Get all show list entries with song details
   * @returns {Promise<Array>} - Show list with populated song data
   */
  async getShowList() {
    try {
      const showListRef = ref(database, 'showList');
      const snapshot = await get(showListRef);
      
      if (snapshot.exists()) {
        const showListObject = snapshot.val();
        const showListArray = Object.values(showListObject);
        
        // Get song details for each show entry
        const promises = showListArray.map(async (show) => {
          const song = await this.getSong(show.songId);
          return {
            ...show,
            song: song
          };
        });
        
        const populatedShowList = await Promise.all(promises);
        
        // Sort by dateAdded, most recent first
        return populatedShowList.sort((a, b) => 
          new Date(b.dateAdded) - new Date(a.dateAdded)
        );
      }
      
      return [];
      
    } catch (error) {
      console.error('❌ Error getting show list:', error);
      throw new Error('Failed to get show list: ' + error.message);
    }
  }

  /**
   * Save/replace the entire show list with new song names
   * @param {Array<string>} songNames - Array of song names
   * @param {Object} showData - Optional show metadata (name, date, etc.)
   * @returns {Promise<void>}
   */
  async saveShowList(songNames, showData = {}) {
    try {
      console.log('🎵 Saving show list with', songNames.length, 'songs');
      
      // Clear existing showlist first (inline)
      console.log('🧹 Clearing existing show list...');
      const showListRef = ref(database, 'showList');
      await remove(showListRef);
      console.log('✅ Show list cleared');
      
      // Add each song to the showlist
      const promises = songNames.map(async (songName, index) => {
        return this.addToShowList(songName, {
          ...showData,
          order: index + 1,
          dateAdded: new Date().toISOString()
        });
      });
      
      await Promise.all(promises);
      
      console.log('✅ Show list saved successfully with', songNames.length, 'songs');
      
    } catch (error) {
      console.error('❌ Error saving show list:', error);
      throw new Error('Failed to save show list: ' + error.message);
    }
  }

  /**
   * Get simple show list as array of song names (for compatibility)
   * @returns {Promise<Array<string>>} - Array of song names
   */
  async getShowListNames() {
    try {
      const showListRef = ref(database, 'showList');
      const snapshot = await get(showListRef);
      
      if (snapshot.exists()) {
        const showListObject = snapshot.val();
        const showListArray = Object.values(showListObject);
        
        // Sort by order or dateAdded, then extract song names
        const sortedList = showListArray.sort((a, b) => {
          if (a.order && b.order) return a.order - b.order;
          return new Date(a.dateAdded) - new Date(b.dateAdded);
        });
        
        return sortedList.map(show => show.songId);
      }
      
      return [];
      
    } catch (error) {
      console.error('❌ Error getting show list names:', error);
      throw new Error('Failed to get show list names: ' + error.message);
    }
  }

  // ===== REAL-TIME LISTENERS =====

  /**
   * Listen for real-time changes to songs
   * @param {Function} callback - Called when songs change
   * @returns {Function} - Cleanup function
   */
  onSongsChange(callback) {
    const songsRef = ref(database, 'songs');
    
    const listener = (snapshot) => {
      if (snapshot.exists()) {
        const songsObject = snapshot.val();
        const songsArray = Object.values(songsObject).sort((a, b) => 
          new Date(b.dateAdded) - new Date(a.dateAdded)
        );
        callback(songsArray);
      } else {
        callback([]);
      }
    };
    
    onValue(songsRef, listener);
    
    // Store listener for cleanup
    const listenerId = 'songs_' + Date.now();
    this.listeners.set(listenerId, { ref: songsRef, callback: listener });
    
    // Return cleanup function
    return () => {
      off(songsRef, listener);
      this.listeners.delete(listenerId);
    };
  }

  /**
   * Listen for real-time changes to show list
   * @param {Function} callback - Called when show list changes
   * @returns {Function} - Cleanup function
   */
  onShowListChange(callback) {
    const showListRef = ref(database, 'showList');
    
    const listener = async (snapshot) => {
      try {
        if (snapshot.exists()) {
          const showListObject = snapshot.val();
          const showListArray = Object.values(showListObject);
          
          // Get song details for each show entry
          const promises = showListArray.map(async (show) => {
            const song = await this.getSong(show.songId);
            return { ...show, song: song };
          });
          
          const populatedShowList = await Promise.all(promises);
          callback(populatedShowList.sort((a, b) => 
            new Date(b.dateAdded) - new Date(a.dateAdded)
          ));
        } else {
          callback([]);
        }
      } catch (error) {
        console.error('Error in showList listener:', error);
        callback([]);
      }
    };
    
    onValue(showListRef, listener);
    
    const listenerId = 'showList_' + Date.now();
    this.listeners.set(listenerId, { ref: showListRef, callback: listener });
    
    return () => {
      off(showListRef, listener);
      this.listeners.delete(listenerId);
    };
  }

  // ===== UTILITY FUNCTIONS =====

  /**
   * Update database metadata
   */
  async updateMetadata() {
    try {
      const songs = await this.getAllSongs();
      const showList = await this.getShowList();
      
      const metadata = {
        lastUpdated: new Date().toISOString(),
        totalSongs: songs.length,
        totalShowListEntries: showList.length,
        version: "2.0-firebase"
      };
      
      const metadataRef = ref(database, 'metadata');
      await set(metadataRef, metadata);
      
    } catch (error) {
      console.error('❌ Error updating metadata:', error);
    }
  }

  /**
   * Initialize database with sample data (run once)
   */
  async initializeDatabase() {
    try {
      const songsRef = ref(database, 'songs');
      const snapshot = await get(songsRef);
      
      // Only initialize if database is empty
      if (!snapshot.exists()) {
        console.log('📝 Initializing database with sample data...');
        
        const sampleSong1 = await this.addSong({
          name: "Sample Song 1",
          genre: "Traditional",
          lyrics: "ތިރީގައި ހުރި ލައިރިކްސް\nދެ ލައިން އޮތީ",
          englishLyrics: "These are sample lyrics\nWith two lines",
          showInList: true,
          artist: "Unknown"
        });
        
        const sampleSong2 = await this.addSong({
          name: "Sample Song 2",
          genre: "Modern",
          lyrics: "މިއީ ދެވަނަ މުސިކް\nއެއްވެސް ލައިރިކްސް ނެތް",
          englishLyrics: "This is the second song\nNo proper lyrics available",
          showInList: false,
          artist: "Various"
        });
        
        // Add first song to show list
        await this.addToShowList(sampleSong1, {
          showDate: "2025-02-01",
          venue: "Main Hall",
          status: "confirmed"
        });
        
        console.log('✅ Database initialized with sample data');
      }
      
    } catch (error) {
      console.error('❌ Error initializing database:', error);
    }
  }

  /**
   * Clean up all listeners (call when page unloads)
   */
  cleanup() {
    this.listeners.forEach(({ ref, callback }) => {
      off(ref, callback);
    });
    this.listeners.clear();
    this.cache.clear();
  }

  /**
   * Get database statistics
   * @returns {Promise<Object>} - Database stats
   */
  async getStats() {
    try {
      const [songs, showList, metadata] = await Promise.all([
        this.getAllSongs(),
        this.getShowList(),
        get(ref(database, 'metadata'))
      ]);
      
      const stats = {
        totalSongs: songs.length,
        songsInShowList: showList.length,
        genres: [...new Set(songs.map(s => s.genre))].length,
        lastUpdated: metadata.exists() ? metadata.val().lastUpdated : null,
        recentSongs: songs.slice(0, 5).map(s => ({ id: s.id, name: s.name }))
      };
      
      return stats;
      
    } catch (error) {
      console.error('❌ Error getting stats:', error);
      return null;
    }
  }

  // ===== APPLICATIONS MANAGEMENT =====

  /**
   * Submit a new application
   * @param {Object} applicationData - Application form data
   * @returns {Promise<string>} - Application ID
   */
  async submitApplication(applicationData) {
    try {
      console.log('📝 Submitting application...');
      
      const applicationsRef = ref(database, 'applications');
      const newApplicationRef = push(applicationsRef);
      
      const application = {
        ...applicationData,
        id: newApplicationRef.key,
        submittedAt: new Date().toISOString(),
        status: 'pending',
        lastUpdated: new Date().toISOString()
      };
      
      await set(newApplicationRef, application);
      
      console.log('✅ Application submitted successfully:', newApplicationRef.key);
      return newApplicationRef.key;
      
    } catch (error) {
      console.error('❌ Error submitting application:', error);
      throw new Error('Failed to submit application: ' + error.message);
    }
  }

  /**
   * Get all applications
   * @returns {Promise<Array>} - List of applications
   */
  async getAllApplications() {
    try {
      const applicationsRef = ref(database, 'applications');
      const snapshot = await get(applicationsRef);
      
      if (snapshot.exists()) {
        const applicationsObject = snapshot.val();
        
        // Convert object to array and include the Firebase document ID
        const applications = Object.entries(applicationsObject).map(([id, app]) => ({
          ...app,
          id: id  // Include Firebase document ID
        }));
        
        // Sort by submission date, most recent first
        return applications.sort((a, b) => 
          new Date(b.submittedAt) - new Date(a.submittedAt)
        );
      }
      
      return [];
      
    } catch (error) {
      console.error('❌ Error getting applications:', error);
      throw new Error('Failed to get applications: ' + error.message);
    }
  }

  /**
   * Update application status
   * @param {string} applicationId - Application ID
   * @param {string} status - New status (pending, approved, rejected, contacted)
   * @param {string} notes - Optional notes
   * @returns {Promise<void>}
   */
  async updateApplicationStatus(applicationId, status, notes = '') {
    try {
      const applicationRef = ref(database, `applications/${applicationId}`);
      const snapshot = await get(applicationRef);
      
      if (snapshot.exists()) {
        const currentData = snapshot.val();
        const updates = {
          ...currentData,
          status: status,
          lastUpdated: new Date().toISOString()
        };
        
        if (notes) {
          updates.notes = notes;
        }
        
        await set(applicationRef, updates);
        
        console.log('✅ Application status updated:', applicationId, status);
      } else {
        throw new Error('Application not found');
      }
      
    } catch (error) {
      console.error('❌ Error updating application status:', error);
      throw new Error('Failed to update application status: ' + error.message);
    }
  }

  /**
   * Delete an application
   * @param {string} applicationId - Application ID
   * @returns {Promise<void>}
   */
  async deleteApplication(applicationId) {
    try {
      const applicationRef = ref(database, `applications/${applicationId}`);
      await remove(applicationRef);
      
      console.log('✅ Application deleted:', applicationId);
      
    } catch (error) {
      console.error('❌ Error deleting application:', error);
      throw new Error('Failed to delete application: ' + error.message);
    }
  }

  // ===== SPONSORS MANAGEMENT =====

  /**
   * Submit a new sponsor callback request
   * @param {Object} sponsorData - Sponsor form data
   * @returns {Promise<string>} - Sponsor request ID
   */
  async submitSponsorRequest(sponsorData) {
    try {
      console.log('🤝 Submitting sponsor request...');
      
      const sponsorsRef = ref(database, 'sponsors');
      const newSponsorRef = push(sponsorsRef);
      
      const sponsor = {
        ...sponsorData,
        id: newSponsorRef.key,
        submittedAt: new Date().toISOString(),
        status: 'pending',
        lastUpdated: new Date().toISOString()
      };
      
      await set(newSponsorRef, sponsor);
      
      console.log('✅ Sponsor request submitted successfully:', newSponsorRef.key);
      return newSponsorRef.key;
      
    } catch (error) {
      console.error('❌ Error submitting sponsor request:', error);
      throw new Error('Failed to submit sponsor request: ' + error.message);
    }
  }

  /**
   * Get all sponsor requests
   * @returns {Promise<Array>} - List of sponsor requests
   */
  async getAllSponsorRequests() {
    try {
      const sponsorsRef = ref(database, 'sponsors');
      const snapshot = await get(sponsorsRef);
      
      if (snapshot.exists()) {
        const sponsorsObject = snapshot.val();
        const sponsors = Object.values(sponsorsObject);
        
        // Sort by submission date, most recent first
        return sponsors.sort((a, b) => 
          new Date(b.submittedAt) - new Date(a.submittedAt)
        );
      }
      
      return [];
      
    } catch (error) {
      console.error('❌ Error getting sponsor requests:', error);
      throw new Error('Failed to get sponsor requests: ' + error.message);
    }
  }

  /**
   * Update sponsor request status
   * @param {string} sponsorId - Sponsor request ID
   * @param {string} status - New status (pending, contacted, approved, rejected)
   * @param {string} notes - Optional notes
   * @returns {Promise<void>}
   */
  async updateSponsorStatus(sponsorId, status, notes = '') {
    try {
      const sponsorRef = ref(database, `sponsors/${sponsorId}`);
      const snapshot = await get(sponsorRef);
      
      if (snapshot.exists()) {
        const currentData = snapshot.val();
        const updates = {
          ...currentData,
          status: status,
          lastUpdated: new Date().toISOString()
        };
        
        if (notes) {
          updates.notes = notes;
        }
        
        await set(sponsorRef, updates);
        
        console.log('✅ Sponsor status updated:', sponsorId, status);
      } else {
        throw new Error('Sponsor request not found');
      }
      
    } catch (error) {
      console.error('❌ Error updating sponsor status:', error);
      throw new Error('Failed to update sponsor status: ' + error.message);
    }
  }

  /**
   * Delete a sponsor request
   * @param {string} sponsorId - Sponsor request ID
   * @returns {Promise<void>}
   */
  async deleteSponsorRequest(sponsorId) {
    try {
      const sponsorRef = ref(database, `sponsors/${sponsorId}`);
      await remove(sponsorRef);
      
      console.log('✅ Sponsor request deleted:', sponsorId);
      
    } catch (error) {
      console.error('❌ Error deleting sponsor request:', error);
      throw new Error('Failed to delete sponsor request: ' + error.message);
    }
  }
}

// Create and export global instance
const rhythmDB = new RhythmFirebaseDB();

// Auto-initialize on first use
let initialized = false;
const ensureInitialized = async () => {
  if (!initialized) {
    await rhythmDB.initializeDatabase();
    initialized = true;
  }
};

// Export both the class and instance
export { RhythmFirebaseDB, rhythmDB, ensureInitialized };

// Also make it available globally for non-module scripts
window.RhythmFirebaseDB = RhythmFirebaseDB;
window.rhythmDB = rhythmDB;
window.ensureFirebaseInitialized = ensureInitialized;

console.log('🔥 Firebase database service loaded successfully');
