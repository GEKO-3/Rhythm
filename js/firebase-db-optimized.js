// Firebase Database Module - OPTIMIZED VERSION
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, get, set, push, child } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

class RhythmFirebaseDB {
  constructor() {
    this.app = null;
    this.database = null;
    this.isInitialized = false;
    this.cache = {
      songsMetadata: null,
      lastCacheTime: 0,
      cacheTimeout: 5 * 60 * 1000 // 5 minutes cache
    };
    this.init();
  }

  init() {
    try {
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
      this.app = initializeApp(firebaseConfig);
      this.database = getDatabase(this.app);
      this.isInitialized = true;
      console.log('Firebase initialized successfully');
    } catch (error) {
      console.error('Firebase initialization failed:', error);
      this.isInitialized = false;
    }
  }

  // Clear cache method for debugging
  clearCache() {
    this.cache.songsMetadata = null;
    this.cache.lastCacheTime = 0;
    console.log('🗑️ Firebase cache cleared');
  }

  // Get songs from Firebase (full data)
  async getSongs() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const songsRef = ref(this.database, 'songs');
      const snapshot = await get(songsRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No songs data found');
        return {};
      }
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw error;
    }
  }

  // Get songs metadata (OPTIMIZED for songlist) - KEYS ONLY!
  async getSongsMetadata() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    // Check cache first
    const now = Date.now();
    if (this.cache.songsMetadata && (now - this.cache.lastCacheTime) < this.cache.cacheTimeout) {
      console.log('🚀 Using cached songs metadata');
      return this.cache.songsMetadata;
    }

    try {
      console.log('📡 Fetching song names only from Firebase (OPTIMIZED)');
      
      // Use shallow=true to get ONLY keys, not the data - MUCH faster
      const shallowUrl = `${this.database.app.options.databaseURL}/songs.json?shallow=true`;
      const response = await fetch(shallowUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const shallowData = await response.json();
      
      if (shallowData) {
        // shallowData is just the keys with true values: {"song1": true, "song2": true, ...}
        const songKeys = Object.keys(shallowData);
        console.log(`🎵 Found ${songKeys.length} songs (keys only)`);
        
        // Convert keys to metadata format
        const metadata = songKeys.map(songKey => ({
          id: songKey,
          name: songKey, // The key IS the song name
          genre: 'General', // Default genre - will be loaded on demand
          hasLyrics: true // Assume all songs have lyrics
        }));
        
        // Cache the results
        this.cache.songsMetadata = metadata;
        this.cache.lastCacheTime = now;
        
        return metadata;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching songs metadata:', error);
      throw error;
    }
  }

  // Get specific song by ID (for lyrics page)
  async getSong(songId) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const songRef = ref(this.database, `songs/${songId}`);
      const snapshot = await get(songRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('Song not found:', songId);
        return null;
      }
    } catch (error) {
      console.error('Error fetching song:', error);
      throw error;
    }
  }

  // Get showlist names (optimized)
  async getShowListNames() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const showlistRef = ref(this.database, 'showlist');
      const snapshot = await get(showlistRef);
      
      if (snapshot.exists()) {
        const showlistData = snapshot.val();
        return Object.keys(showlistData).map(key => ({
          id: key,
          name: key
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching showlist names:', error);
      throw error;
    }
  }

  // Get user access data
  async getUserAccess() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const usersRef = ref(this.database, 'approvedUsers');
      const snapshot = await get(usersRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    } catch (error) {
      console.error('Error fetching user access:', error);
      throw error;
    }
  }

  // Set user access
  async setUserAccess(phoneNumber, userData) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const userRef = ref(this.database, `approvedUsers/${phoneNumber}`);
      await set(userRef, userData);
      return true;
    } catch (error) {
      console.error('Error setting user access:', error);
      throw error;
    }
  }

  // Get specific user by access code
  async getApprovedUser(accessCode) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const userRef = ref(this.database, `approvedUsers/${accessCode}`);
      const snapshot = await get(userRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching approved user:', error);
      throw error;
    }
  }

  // Validate user by phone number
  async validateUser(phoneNumber) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const userRef = ref(this.database, `approvedUsers/${phoneNumber}`);
      const snapshot = await get(userRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error validating user:', error);
      throw error;
    }
  }

  // Get lyrics for a song
  async getLyrics(songId) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const lyricsRef = ref(this.database, `lyrics/${songId}`);
      const snapshot = await get(lyricsRef);
      
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        // Try to get lyrics from the song object itself
        const songRef = ref(this.database, `songs/${songId}`);
        const songSnapshot = await get(songRef);
        
        if (songSnapshot.exists()) {
          const song = songSnapshot.val();
          return {
            dhivehi: song.lyrics_dhivehi || '',
            english: song.lyrics_english || ''
          };
        }
        return { dhivehi: '', english: '' };
      }
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      throw error;
    }
  }

  // Set lyrics for a song
  async setLyrics(songId, lyrics) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const lyricsRef = ref(this.database, `lyrics/${songId}`);
      await set(lyricsRef, {
        dhivehi: lyrics.dhivehi || '',
        english: lyrics.english || '',
        lastUpdated: Date.now()
      });
      return true;
    } catch (error) {
      console.error('Error setting lyrics:', error);
      throw error;
    }
  }
}

// Make it available globally and as module export
if (typeof window !== 'undefined') {
  window.RhythmFirebaseDB = RhythmFirebaseDB;
}

export { RhythmFirebaseDB };
