/**
 * Rhythm Boduberu Page Transition Manager
 * Handles seamless navigation between pages with preloading and state management
 */

class RhythmPageTransition {
  constructor() {
    this.currentPage = this.getCurrentPageType();
    this.isTransitioning = false;
    this.preloadCache = new Map();
    
    this.init();
  }
  
  init() {
    this.setupNavigationInterception();
    this.setupPreloading();
    this.setupStateManagement();
  }
  
  getCurrentPageType() {
    const path = window.location.pathname;
    if (path.includes('songlist') || path.endsWith('/') || path.endsWith('/index.html')) {
      return 'songlist';
    }
    if (path.includes('lyrics')) {
      return 'lyrics';
    }
    return 'unknown';
  }
  
  setupNavigationInterception() {
    // Intercept back button navigation
    document.addEventListener('click', (e) => {
      const backButton = e.target.closest('.back-button');
      if (backButton) {
        e.preventDefault();
        this.navigateToSonglist();
      }
      
      // Intercept song clicks on songlist
      const songItem = e.target.closest('[data-song-id]');
      if (songItem) {
        e.preventDefault();
        const songId = songItem.dataset.songId;
        this.navigateToLyrics(songId);
      }
    });
  }
  
  setupPreloading() {
    // Preload lyrics page when hovering over songs
    if (this.currentPage === 'songlist') {
      document.addEventListener('mouseenter', (e) => {
        const songItem = e.target.closest('[data-song-id]');
        if (songItem) {
          const songId = songItem.dataset.songId;
          this.preloadLyricsPage(songId);
        }
      }, true);
      
      // Preload on touch start for mobile
      document.addEventListener('touchstart', (e) => {
        const songItem = e.target.closest('[data-song-id]');
        if (songItem) {
          const songId = songItem.dataset.songId;
          this.preloadLyricsPage(songId);
        }
      }, { passive: true });
    }
  }
  
  setupStateManagement() {
    // Listen for popstate (back/forward button)
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.pageType) {
        this.handlePopState(e.state);
      }
    });
    
    // Push initial state
    const initialState = {
      pageType: this.currentPage,
      timestamp: Date.now()
    };
    
    if (this.currentPage === 'lyrics') {
      initialState.songId = localStorage.getItem('selectedSongId');
    }
    
    history.replaceState(initialState, '', window.location.href);
  }
  
  async navigateToSonglist() {
    if (this.isTransitioning || this.currentPage === 'songlist') return;
    
    this.isTransitioning = true;
    
    try {
      // Clear lyrics page timer if coming from lyrics
      if (window.RhythmData && typeof window.RhythmData.clearLyricsPageTimer === 'function') {
        window.RhythmData.clearLyricsPageTimer();
      }
      
      // Show loading screen immediately for fast feedback
      this.showLoadingScreen('Loading song list...');
      
      // Use cached data for fast navigation - don't force reload
      if (window.RhythmData && window.RhythmData.shouldRefreshForNavigation('songlist')) {
        await window.RhythmData.loadSongsData(false, true); // Skip loading events
      }
      
      // Navigate immediately
      const state = {
        pageType: 'songlist',
        timestamp: Date.now()
      };
      
      history.pushState(state, 'Songs - Rhythm Boduberu', 'songlist.html');
      window.location.href = 'songlist.html';
      
    } catch (error) {
      console.error('Navigation failed:', error);
      this.hideLoadingScreen();
      this.isTransitioning = false;
    }
  }
  
  // Helper methods for better UX
  clearActiveSongStyling() {
    // Remove active styling from any selected songs
    const activeSongs = document.querySelectorAll('ul#song-list li.active, ul#song-list li[data-active="true"]');
    activeSongs.forEach(song => {
      song.classList.remove('active');
      song.removeAttribute('data-active');
      song.style.background = '';
      song.style.color = '';
      song.style.transform = '';
    });
  }
  
  showLoadingScreen(message = 'Loading...') {
    if (window.LoadingScreen) {
      window.LoadingScreen.show(message);
    } else if (window.RhythmSongList && window.RhythmSongList.LoadingScreen) {
      window.RhythmSongList.LoadingScreen.show(message);
    } else if (window.RhythmLyrics && window.RhythmLyrics.LoadingScreen) {
      window.RhythmLyrics.LoadingScreen.show(message);
    }
  }
  
  hideLoadingScreen() {
    if (window.LoadingScreen) {
      window.LoadingScreen.hide();
    } else if (window.RhythmSongList && window.RhythmSongList.LoadingScreen) {
      window.RhythmSongList.LoadingScreen.hide();
    } else if (window.RhythmLyrics && window.RhythmLyrics.LoadingScreen) {
      window.RhythmLyrics.LoadingScreen.hide();
    }
  }
  
  async navigateToLyrics(songId) {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    
    try {
      // Clear any active song styling immediately
      this.clearActiveSongStyling();
      
      // Don't show loading screen here - it should already be shown by songlist
      // The loading screen will continue until the lyrics page is fully loaded
      
      // Store selected song ID
      localStorage.setItem('selectedSongId', songId);
      
      // Preload song data to ensure it's available on the new page
      if (window.RhythmData) {
        // Use existing cached data - don't force reload for navigation
        if (!window.RhythmData.songs.length) {
          await window.RhythmData.loadSongsData(false, true); // Skip loading events
        }
        // Ensure the specific song is available
        const song = await window.RhythmData.getSongById(songId);
        if (song) {
          // Store the song data in sessionStorage for instant access
          sessionStorage.setItem('preloadedSong', JSON.stringify(song));
          sessionStorage.setItem('preloadedSongTimestamp', Date.now().toString());
        }
      }
      
      // Navigate immediately - don't wait for any additional loading
      const state = {
        pageType: 'lyrics',
        songId: songId,
        timestamp: Date.now()
      };
      
      history.pushState(state, 'Lyrics - Rhythm Boduberu', 'lyrics-csv.html');
      window.location.href = 'lyrics-csv.html';
      
    } catch (error) {
      console.error('Navigation failed:', error);
      this.hideLoadingScreen();
      this.isTransitioning = false;
    }
  }
  
  async preloadLyricsPage(songId) {
    if (this.preloadCache.has(songId)) return;
    
    this.preloadCache.set(songId, true);
    
    try {
      // Preload the lyrics page HTML
      const response = await fetch('lyrics-csv.html');
      if (response.ok) {
        const html = await response.text();
        // Cache the HTML content
        if ('caches' in window) {
          const cache = await caches.open('rhythm-boduberu-v1');
          cache.put('lyrics-csv.html', new Response(html));
        }
      }
      
      // Preload song data
      if (window.RhythmData) {
        await window.RhythmData.preloadLyricsData(songId);
      }
      
    } catch (error) {
      console.warn('Failed to preload lyrics page:', error);
      this.preloadCache.delete(songId);
    }
  }
  
  handlePopState(state) {
    if (state.pageType === 'songlist' && this.currentPage === 'lyrics') {
      this.navigateToSonglist();
    } else if (state.pageType === 'lyrics' && state.songId) {
      this.navigateToLyrics(state.songId);
    }
  }
  
  // Enhanced navigation methods that work with the shared data service
  async smartNavigateToLyrics(songId) {
    // Check if we already have the song data
    let song = null;
    if (window.RhythmData) {
      try {
        song = await window.RhythmData.getSongById(songId);
      } catch (error) {
        console.warn('Could not preload song data:', error);
      }
    }
    
    if (song) {
      // We have the data, navigate immediately
      this.navigateToLyrics(songId);
    } else {
      // Load data first, then navigate
      this.showTransitionOverlay('Loading song data...');
      
      try {
        if (window.RhythmData) {
          await window.RhythmData.loadSongsData();
          song = await window.RhythmData.getSongById(songId);
        }
        
        this.navigateToLyrics(songId);
      } catch (error) {
        console.error('Failed to load song data:', error);
        this.hideTransitionOverlay();
        // Navigate anyway, let the lyrics page handle the error
        this.navigateToLyrics(songId);
      }
    }
  }
}

// Initialize page transition manager
window.RhythmPageTransition = new RhythmPageTransition();

// Global navigation functions for backward compatibility
window.navigateToSonglist = () => window.RhythmPageTransition.navigateToSonglist();
window.navigateToLyrics = (songId) => window.RhythmPageTransition.smartNavigateToLyrics(songId);

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RhythmPageTransition;
}
