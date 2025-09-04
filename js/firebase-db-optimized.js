// Firebase Database Module - OPTIMIZED VERSION
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, get, set, push, child, update, onValue, off } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

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

  // Get songs metadata (OPTIMIZED for songlist) - NAME AND GENRE ONLY using REST API!
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
      console.log('📡 Fetching song names and genres using optimized REST API');
      
      // Use REST API to fetch only specific fields - much faster than full data
      const baseUrl = this.database.app.options.databaseURL;
      const fieldsUrl = `${baseUrl}/songs.json`;
      
      console.log('🔗 Fetching from URL:', fieldsUrl);
      const response = await fetch(fieldsUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const allData = await response.json();
      console.log('📊 Raw Firebase response received, processing...');
      
      if (allData) {
        const metadata = [];
        let processedCount = 0;
        
        for (const songKey in allData) {
          const song = allData[songKey];
          
          // Only extract name and genre, ignore heavy fields like lyrics
          metadata.push({
            id: songKey,
            name: songKey, // The key IS the song name
            genre: song.genre || 'General', // Use actual genre from database or default
            hasLyrics: !!(song.lyrics || song.dhivehi) // Check if any lyrics exist
          });
          
          processedCount++;
          if (processedCount % 50 === 0) {
            console.log(`🔄 Processed ${processedCount} songs...`);
          }
        }
        
        console.log(`✅ Successfully processed ${metadata.length} songs with genres`);
        
        // Cache the results
        this.cache.songsMetadata = metadata;
        this.cache.lastCacheTime = now;
        
        return metadata;
      } else {
        console.warn('⚠️ No data returned from Firebase');
        return [];
      }
    } catch (error) {
      console.error('❌ Error fetching songs metadata:', error);
      console.error('❌ Error stack:', error.stack);
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

  // MEMBER APPLICATION METHODS

  // Submit a new member application
  async submitApplication(applicationData) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const applicationsRef = ref(this.database, 'applications');
      const newApplicationRef = push(applicationsRef);
      
      const now = new Date();
      const applicationRecord = {
        contactNumber: applicationData.contactNumber || '',
        dateOfBirth: applicationData.dateOfBirth || '',
        email: applicationData.email || '',
        fullName: applicationData.fullName || '',
        id: newApplicationRef.key,
        lastUpdated: now.toISOString(),
        location: applicationData.location || '',
        recaptchaToken: applicationData.recaptchaToken || '',
        status: 'pending',
        submittedAt: now.toISOString(),
        timestamp: Date.now(),
        userAgent: navigator.userAgent || 'Unknown'
      };
      
      await set(newApplicationRef, applicationRecord);
      console.log('Application submitted successfully with ID:', newApplicationRef.key);
      return newApplicationRef.key;
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  }

  // Get all member applications
  async getApplications() {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const applicationsRef = ref(this.database, 'applications');
      const snapshot = await get(applicationsRef);
      
      if (snapshot.exists()) {
        const applications = snapshot.val();
        // Convert to array with IDs
        return Object.keys(applications).map(id => ({
          id,
          ...applications[id]
        }));
      } else {
        console.log('No applications found');
        return [];
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  }

  // Listen for real-time applications updates
  listenToApplications(callback) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const applicationsRef = ref(this.database, 'applications');
      
      const unsubscribe = onValue(applicationsRef, (snapshot) => {
        if (snapshot.exists()) {
          const applications = snapshot.val();
          // Convert to array with IDs
          const applicationsArray = Object.keys(applications).map(id => ({
            id,
            ...applications[id]
          }));
          console.log('🔄 Real-time applications update received:', applicationsArray.length, 'applications');
          callback(applicationsArray);
        } else {
          console.log('🔄 Real-time update: No applications found');
          callback([]);
        }
      }, (error) => {
        console.error('❌ Real-time listener error:', error);
        // Fallback to empty array on error
        callback([]);
      });

      return unsubscribe;
    } catch (error) {
      console.error('Error setting up applications listener:', error);
      throw error;
    }
  }

  // Stop listening to applications updates
  stopListeningToApplications(applicationsRef) {
    if (applicationsRef) {
      off(applicationsRef);
      console.log('🔇 Stopped listening to applications updates');
    }
  }

  // Update application status
  async updateApplicationStatus(applicationId, status) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const applicationRef = ref(this.database, `applications/${applicationId}`);
      const updates = {
        status: status,
        lastUpdated: new Date().toISOString()
      };
      
      await update(applicationRef, updates);
      console.log(`Application ${applicationId} status updated to: ${status}`);
      return true;
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  }

  // Get application by ID
  async getApplication(applicationId) {
    if (!this.isInitialized) {
      throw new Error('Firebase not initialized');
    }

    try {
      const applicationRef = ref(this.database, `applications/${applicationId}`);
      const snapshot = await get(applicationRef);
      
      if (snapshot.exists()) {
        return { id: applicationId, ...snapshot.val() };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching application:', error);
      throw error;
    }
  }
}

// Make it available globally and as module export
if (typeof window !== 'undefined') {
  window.RhythmFirebaseDB = RhythmFirebaseDB;
}

export { RhythmFirebaseDB };
