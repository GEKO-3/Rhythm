// Firebase Database Module - NO CSV FUNCTIONALITY
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, get, set, push, child } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

class RhythmFirebaseDB {
  constructor() {
    this.app = null;
    this.database = null;
    this.isInitialized = false;
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

  // Get songs from Firebase
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

  // Get songs metadata (for songlist display)
  async getSongsMetadata() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const songsRef = ref(this.database, 'songs');
      const snapshot = await get(songsRef);
      
      if (snapshot.exists()) {
        const songs = snapshot.val();
        // Extract metadata for list display
        return Object.keys(songs).map(key => ({
          id: key,
          title: songs[key].title || 'Unknown Title',
          artist: songs[key].artist || 'Unknown Artist',
          category: songs[key].category || 'General',
          ...songs[key]
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching songs metadata:', error);
      throw error;
    }
  }

  // Get specific song by ID
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
        return null;
      }
    } catch (error) {
      console.error('Error fetching song:', error);
      throw error;
    }
  }

  // Get showlist data
  async getShowListNames() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const showlistRef = ref(this.database, 'showlists');
      const snapshot = await get(showlistRef);
      
      if (snapshot.exists()) {
        const showlists = snapshot.val();
        return Object.keys(showlists).map(key => ({
          id: key,
          name: showlists[key].name || key,
          songs: showlists[key].songs || []
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

export { RhythmFirebaseDB };
