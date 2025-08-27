// Show List Configuration - Firebase Integration
// This file provides compatibility and utility functions for show list management
// Show lists are now stored in Firebase database instead of static arrays

// Compatibility layer for legacy code
let showList = [];

// Firebase integration functions
const ShowListManager = {
  
  // Load current show list from Firebase
  async loadFromFirebase() {
    try {
      if (typeof window !== 'undefined' && window.rhythmDB) {
        const firebaseShowList = await window.rhythmDB.getShowList();
        showList = firebaseShowList || [];
        console.log('Loaded show list from Firebase:', showList.length, 'songs');
        return showList;
      }
      return [];
    } catch (error) {
      console.error('Failed to load show list from Firebase:', error);
      return [];
    }
  },

  // Save show list to Firebase
  async saveToFirebase(songList, metadata = {}) {
    try {
      if (typeof window !== 'undefined' && window.rhythmDB) {
        await window.rhythmDB.saveShowList(songList, {
          updatedAt: new Date().toISOString(),
          songCount: songList.length,
          ...metadata
        });
        showList = songList;
        console.log('Saved show list to Firebase:', songList.length, 'songs');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to save show list to Firebase:', error);
      return false;
    }
  },

  // Get current show list
  getShowList() {
    return showList;
  },

  // Check if Firebase is available
  isFirebaseAvailable() {
    return typeof window !== 'undefined' && 
           window.rhythmDB && 
           typeof window.rhythmDB.getShowList === 'function';
  }
};

// Auto-load from Firebase when available
if (typeof window !== 'undefined') {
  // Load show list when Firebase becomes available
  const checkFirebase = () => {
    if (ShowListManager.isFirebaseAvailable()) {
      ShowListManager.loadFromFirebase();
    } else {
      setTimeout(checkFirebase, 100);
    }
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkFirebase);
  } else {
    checkFirebase();
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { showList, ShowListManager };
} else if (typeof window !== 'undefined') {
  window.showList = showList;
  window.ShowListManager = ShowListManager;
}
