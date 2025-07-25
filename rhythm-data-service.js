/**
 * Rhythm Boduberu Shared Data Service
 * Manages data loading, caching, and session state across pages
 */

class RhythmDataService {
  constructor() {
    this.initialized = false;
    this.songs = [];
    this.currentShowList = [];
    this.isLoading = false;
    this.cache = new Map();
    this.loadPromise = null;
    this.sessionData = null;
    this.listeners = new Map();
    
    // Configuration
    this.config = {
      CACHE_DURATION: 15 * 60 * 1000, // 15 minutes (longer cache)
      BACKGROUND_REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes (less frequent)
      MAX_RETRIES: 3,
      RETRY_DELAY: 1000,
      FAST_NAVIGATION_CACHE_DURATION: 30 * 60 * 1000, // 30 minutes for fast navigation
      LYRICS_PAGE_LAZY_REFRESH: 2 * 60 * 1000, // 2 minutes after being on lyrics page
    };
    
    this.lyricsPageStartTime = null;
    this.lazyRefreshTimeout = null;
    
    this.init();
  }
  
  async init() {
    if (this.initialized) return;
    
    // Wait for config to be available
    await this.waitForConfig();
    
    // Initialize session management
    this.initSessionManagement();
    
    // Start background refresh if we have a valid session
    this.startBackgroundRefresh();
    
    this.initialized = true;
  }
  
  async waitForConfig() {
    return new Promise((resolve) => {
      const checkConfig = () => {
        if (window.RhythmLyricsShowConfig) {
          resolve();
        } else {
          setTimeout(checkConfig, 100);
        }
      };
      checkConfig();
    });
  }
  
  initSessionManagement() {
    // Listen for session changes across tabs/windows
    window.addEventListener('storage', (e) => {
      if (e.key === 'pinSession') {
        this.handleSessionChange(e.newValue);
      }
    });
    
    // Listen for visibility changes to refresh data when page becomes visible
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.isSessionValid()) {
        this.refreshDataIfStale();
      }
    });
  }
  
  handleSessionChange(sessionValue) {
    if (!sessionValue) {
      // Session was cleared
      this.clearData();
      this.emit('sessionExpired');
    } else {
      try {
        const session = JSON.parse(sessionValue);
        if (session.authenticated && !this.sessionData) {
          // New session authenticated
          this.sessionData = session;
          this.emit('sessionAuthenticated', session);
        }
      } catch (e) {
        console.error('Invalid session data:', e);
      }
    }
  }
  
  isSessionValid() {
    const sessionData = sessionStorage.getItem('pinSession');
    if (!sessionData) return false;
    
    try {
      const session = JSON.parse(sessionData);
      const sessionAge = Date.now() - session.timestamp;
      return session.authenticated && sessionAge < (30 * 60 * 1000); // 30 minutes max
    } catch (e) {
      return false;
    }
  }
  
  async loadSongsData(force = false, skipLoadingEvents = false) {
    // If already loading, return the existing promise
    if (this.loadPromise && !force) {
      return this.loadPromise;
    }
    
    // If we have songs in memory and cache is valid, return immediately
    if (!force && this.songs.length > 0 && this.isCacheValid('songs')) {
      return this.songs;
    }
    
    // Check if we have data in memory that's reasonably fresh (for fast navigation)
    if (!force && this.songs.length > 0 && this.isFastNavigationCacheValid()) {
      return this.songs;
    }
    
    // Only emit loading events if we don't have any data and not skipping events
    if (this.songs.length === 0 && !skipLoadingEvents) {
      this.isLoading = true;
      this.emit('loadingStart', 'songs');
    }
    
    this.loadPromise = this._fetchSongsData()
      .then((songs) => {
        this.songs = songs;
        this.cache.set('songs', {
          data: songs,
          timestamp: Date.now()
        });
        this.isLoading = false;
        if (this.songs.length === 0 && !skipLoadingEvents) {
          this.emit('loadingComplete', 'songs', songs);
        }
        return songs;
      })
      .catch((error) => {
        this.isLoading = false;
        
        // If we have cached data in memory, use it
        if (this.songs.length > 0) {
          console.warn('Using existing songs data due to fetch error:', error);
          return this.songs;
        }
        
        // Return cached data if available
        const cached = this.cache.get('songs');
        if (cached) {
          console.warn('Using cached songs data due to fetch error:', error);
          this.songs = cached.data;
          return cached.data;
        }
        
        if (!skipLoadingEvents) {
          this.emit('loadingError', 'songs', error);
        }
        throw error;
      })
      .finally(() => {
        this.loadPromise = null;
      });
    
    return this.loadPromise;
  }
  
  async _fetchSongsData() {
    const maxRetries = this.config.MAX_RETRIES;
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.emit('loadingProgress', `Fetching songs data... (attempt ${attempt}/${maxRetries})`);
        
        const response = await fetch(window.RhythmLyricsShowConfig.lyricsSheet);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const csvText = await response.text();
        this.emit('loadingProgress', 'Processing song data...');
        
        const songs = this.parseCSVData(csvText);
        console.log(`Successfully loaded ${songs.length} songs`);
        return songs;
        
      } catch (error) {
        lastError = error;
        console.error(`Attempt ${attempt} failed:`, error);
        
        if (attempt < maxRetries) {
          this.emit('loadingProgress', `Retrying in ${this.config.RETRY_DELAY / 1000}s...`);
          await new Promise(resolve => setTimeout(resolve, this.config.RETRY_DELAY * attempt));
        }
      }
    }
    
    throw lastError;
  }
  
  parseCSVData(csvText) {
    const rows = [];
    let currentRow = [];
    let currentField = '';
    let inQuotes = false;
    let i = 0;
    
    while (i < csvText.length) {
      const char = csvText[i];
      const nextChar = i + 1 < csvText.length ? csvText[i + 1] : null;
      
      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          currentField += '"';
          i += 2;
        } else {
          inQuotes = !inQuotes;
          i++;
        }
      } else if (char === ',' && !inQuotes) {
        currentRow.push(currentField);
        currentField = '';
        i++;
      } else if ((char === '\n' || char === '\r') && !inQuotes) {
        if (currentField || currentRow.length > 0) {
          currentRow.push(currentField);
          if (currentRow.length > 0) {
            rows.push(currentRow);
          }
          currentRow = [];
          currentField = '';
        }
        if (char === '\r' && nextChar === '\n') {
          i += 2;
        } else {
          i++;
        }
      } else {
        currentField += char;
        i++;
      }
    }
    
    if (currentField || currentRow.length > 0) {
      currentRow.push(currentField);
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
    }
    
    // Process data rows and deduplicate by ID
    const songMap = new Map();
    
    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i];
      if (columns.length >= 5) {
        const timestamp = columns[0] ? columns[0].trim() : '';
        const id = parseInt(columns[1] ? columns[1].trim() : '0', 10);
        const name = columns[2] ? columns[2].trim() : '';
        const genre = columns[3] ? columns[3].trim() : '';
        const lyrics = columns[4] ? columns[4].trim() : '';
        
        if (!isNaN(id) && name && genre && lyrics) {
          const song = { id, timestamp, name, genre, lyrics };
          
          if (!songMap.has(id) || new Date(timestamp) > new Date(songMap.get(id).timestamp)) {
            songMap.set(id, song);
          }
        }
      }
    }
    
    return Array.from(songMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
  
  async getSongById(id) {
    // Try to find the song in existing data first
    if (this.songs.length > 0) {
      const song = this.songs.find(song => String(song.id) === String(id));
      if (song) return song;
    }
    
    // Only load data if we don't have it
    const songs = await this.loadSongsData();
    return songs.find(song => String(song.id) === String(id));
  }
  
  async getAllSongs() {
    if (this.songs.length > 0) {
      return this.songs;
    }
    return await this.loadSongsData();
  }
  
  isCacheValid(key) {
    const cached = this.cache.get(key);
    if (!cached) return false;
    
    const age = Date.now() - cached.timestamp;
    return age < this.config.CACHE_DURATION;
  }
  
  isFastNavigationCacheValid() {
    const cached = this.cache.get('songs');
    if (!cached) return false;
    
    const age = Date.now() - cached.timestamp;
    return age < this.config.FAST_NAVIGATION_CACHE_DURATION;
  }
  
  async refreshDataIfStale() {
    if (!this.isCacheValid('songs') && this.isSessionValid()) {
      try {
        await this.loadSongsData(true);
      } catch (error) {
        console.warn('Background refresh failed:', error);
      }
    }
  }
  
  startBackgroundRefresh() {
    // Only start background refresh if we have a valid session
    if (!this.isSessionValid()) return;
    
    setInterval(() => {
      if (this.isSessionValid() && !document.hidden) {
        this.refreshDataIfStale();
      }
    }, this.config.BACKGROUND_REFRESH_INTERVAL);
  }
  
  clearData() {
    this.songs = [];
    this.currentShowList = [];
    this.cache.clear();
    this.sessionData = null;
    this.clearLazyRefresh();
  }
  
  // Methods for handling lyrics page lazy refresh
  startLyricsPageTimer() {
    this.lyricsPageStartTime = Date.now();
    this.clearLazyRefresh();
    
    this.lazyRefreshTimeout = setTimeout(() => {
      this.performLazyRefresh();
    }, this.config.LYRICS_PAGE_LAZY_REFRESH);
  }
  
  clearLyricsPageTimer() {
    this.lyricsPageStartTime = null;
    this.clearLazyRefresh();
  }
  
  clearLazyRefresh() {
    if (this.lazyRefreshTimeout) {
      clearTimeout(this.lazyRefreshTimeout);
      this.lazyRefreshTimeout = null;
    }
  }
  
  async performLazyRefresh() {
    try {
      console.log('Performing lazy refresh of song data...');
      await this.loadSongsData(false, true); // Skip loading events for background refresh
      this.emit('lazyRefreshComplete');
    } catch (error) {
      console.warn('Lazy refresh failed:', error);
    }
  }
  
  // Check if data should be refreshed based on page type
  shouldRefreshForNavigation(targetPage) {
    if (targetPage === 'songlist') {
      // Always use cached data for fast songlist navigation
      return this.songs.length === 0;
    }
    return false;
  }
  
  // Event system for communication between pages
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }
  
  off(event, callback) {
    if (this.listeners.has(event)) {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }
  
  emit(event, ...args) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => {
        try {
          callback(...args);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      });
    }
  }
  
  // Preload data for faster navigation
  async preloadLyricsData(songId) {
    try {
      const song = await this.getSongById(songId);
      if (song) {
        // Cache the song data for instant access
        this.cache.set(`song_${songId}`, {
          data: song,
          timestamp: Date.now()
        });
      }
    } catch (error) {
      console.warn('Failed to preload song data:', error);
    }
  }
}

// Create global instance
window.RhythmData = new RhythmDataService();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RhythmDataService;
}
