// ==================================================================
// Firebase Transliteration Data Manager
// ==================================================================
// This module manages transliteration data stored in Firebase
// It provides functions to load, cache, and sync transliteration data
// ==================================================================

class TransliterationFirebaseManager {
    constructor() {
        this.dbRef = null;
        this.cache = {
            specialCases: [],
            transliterationMap: {},
            vowelDiacritics: {},
            vowelConsonants: {},
            shaviyanisukun: [],
            husNoonuPatterns: [],
            reverseSpecialCases: [],
            englishWords: [],
            sentenceEnd: []
        };
        this.isLoaded = false;
        this.listeners = [];
        this.listenersActive = false;
        this.CACHE_KEY = 'transliteration_cache_v1';
        this.CACHE_TIMESTAMP_KEY = 'transliteration_cache_timestamp';
        this.CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    }

    /**
     * Initialize the Firebase connection with caching
     */
    async initialize(forceRefresh = false) {
        if (!firebase || !firebase.database) {
            console.error('Firebase is not initialized');
            return false;
        }

        this.dbRef = firebase.database().ref('transliteration');
        
        // Try to load from localStorage cache first
        if (!forceRefresh && this.loadFromCache()) {
            console.log('Loaded transliteration data from cache');
            this.setupRealtimeListeners();
            return true;
        }
        
        // If cache miss or force refresh, load from Firebase
        await this.loadAllData();
        this.setupRealtimeListeners();
        return true;
    }

    /**
     * Load data from localStorage cache
     */
    loadFromCache() {
        try {
            const cachedData = localStorage.getItem(this.CACHE_KEY);
            const timestamp = localStorage.getItem(this.CACHE_TIMESTAMP_KEY);
            
            if (!cachedData || !timestamp) {
                return false;
            }
            
            const cacheAge = Date.now() - parseInt(timestamp);
            if (cacheAge > this.CACHE_DURATION) {
                // Cache expired
                return false;
            }
            
            this.cache = JSON.parse(cachedData);
            this.isLoaded = true;
            console.log('Loaded from cache - sentenceEnd:', this.cache.sentenceEnd ? this.cache.sentenceEnd.length : 0);
            this.notifyListeners();
            return true;
        } catch (error) {
            console.warn('Error loading from cache:', error);
            return false;
        }
    }

    /**
     * Save data to localStorage cache
     */
    saveToCache() {
        try {
            localStorage.setItem(this.CACHE_KEY, JSON.stringify(this.cache));
            localStorage.setItem(this.CACHE_TIMESTAMP_KEY, Date.now().toString());
        } catch (error) {
            console.warn('Error saving to cache:', error);
        }
    }

    /**
     * Load all transliteration data from Firebase
     */
    async loadAllData() {
        try {
            const snapshot = await this.dbRef.once('value');
            const data = snapshot.val();

            if (data) {
                // Load special cases
                if (data.specialCases) {
                    this.cache.specialCases = Object.values(data.specialCases)
                        .sort((a, b) => b.input.length - a.input.length);
                }

                // Load maps
                this.cache.transliterationMap = data.transliterationMap || {};
                this.cache.vowelDiacritics = data.vowelDiacritics || {};
                this.cache.vowelConsonants = data.vowelConsonants || {};
                
                // Load shaviyanisukun array
                if (data.shaviyanisukun) {
                    this.cache.shaviyanisukun = Object.values(data.shaviyanisukun);
                }
                
                // Load husnoonu patterns
                if (data.husNoonuPatterns) {
                    this.cache.husNoonuPatterns = Object.values(data.husNoonuPatterns)
                        .sort((a, b) => b.length - a.length);
                }
                
                // Load reverse special cases
                if (data.reverseSpecialCases) {
                    this.cache.reverseSpecialCases = Object.values(data.reverseSpecialCases)
                        .sort((a, b) => b.input.length - a.input.length);
                }
                
                // Load English words
                if (data.englishWords) {
                    this.cache.englishWords = Object.values(data.englishWords)
                        .sort((a, b) => b.input.length - a.input.length);
                }
                
                // Load sentence end patterns
                if (data.sentenceEnd) {
                    this.cache.sentenceEnd = Object.values(data.sentenceEnd)
                        .sort((a, b) => b.input.length - a.input.length);
                }

                this.isLoaded = true;
                this.saveToCache();
                this.notifyListeners();
                console.log('Transliteration data loaded from Firebase');
            }
        } catch (error) {
            console.error('Error loading transliteration data:', error);
        }
    }

    /**
     * Setup real-time listeners for data changes
     */
    setupRealtimeListeners() {
        if (this.listenersActive) return;
        this.listenersActive = true;
        
        // Listen for special cases changes
        this.dbRef.child('specialCases').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.specialCases = Object.values(snapshot.val())
                    .sort((a, b) => b.input.length - a.input.length);
                this.saveToCache();
                this.notifyListeners();
            }
        });

        // Listen for transliteration map changes
        this.dbRef.child('transliterationMap').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.transliterationMap = snapshot.val();
                this.saveToCache();
                this.notifyListeners();
            }
        });

        // Listen for vowel diacritics changes
        this.dbRef.child('vowelDiacritics').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.vowelDiacritics = snapshot.val();
                this.saveToCache();
                this.notifyListeners();
            }
        });

        // Listen for vowel consonants changes
        this.dbRef.child('vowelConsonants').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.vowelConsonants = snapshot.val();
                this.saveToCache();
                this.notifyListeners();
            }
        });

        // Listen for shaviyanisukun changes
        this.dbRef.child('shaviyanisukun').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.shaviyanisukun = Object.values(snapshot.val());
                this.saveToCache();
                this.notifyListeners();
            }
        });
        
        // Listen for husnoonu patterns changes
        this.dbRef.child('husNoonuPatterns').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.husNoonuPatterns = Object.values(snapshot.val())
                    .sort((a, b) => b.length - a.length);
                this.saveToCache();
                this.notifyListeners();
            }
        });
        
        // Listen for reverse special cases changes
        this.dbRef.child('reverseSpecialCases').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.reverseSpecialCases = Object.values(snapshot.val())
                    .sort((a, b) => b.input.length - a.input.length);
                this.saveToCache();
                this.notifyListeners();
            }
        });
        
        // Listen for English words changes
        this.dbRef.child('englishWords').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.englishWords = Object.values(snapshot.val())
                    .sort((a, b) => b.input.length - a.input.length);
                this.saveToCache();
                this.notifyListeners();
            }
        });
        
        // Listen for sentence end changes
        this.dbRef.child('sentenceEnd').on('value', (snapshot) => {
            if (snapshot.exists()) {
                this.cache.sentenceEnd = Object.values(snapshot.val())
                    .sort((a, b) => b.input.length - a.input.length);
                console.log('Sentence end patterns loaded from Firebase:', this.cache.sentenceEnd.length, this.cache.sentenceEnd);
                this.saveToCache();
                this.notifyListeners();
            }
        });
    }

    /**
     * Add a listener for data changes
     */
    addListener(callback) {
        this.listeners.push(callback);
    }

    /**
     * Notify all listeners of data changes
     */
    notifyListeners() {
        this.listeners.forEach(callback => callback(this.cache));
    }

    /**
     * Get all cached data
     */
    getData() {
        return this.cache;
    }

    /**
     * Clear the cache and force refresh from Firebase
     */
    clearCache() {
        try {
            localStorage.removeItem(this.CACHE_KEY);
            localStorage.removeItem(this.CACHE_TIMESTAMP_KEY);
            console.log('Cache cleared');
        } catch (error) {
            console.warn('Error clearing cache:', error);
        }
    }

    /**
     * Add a special case
     */
    async addSpecialCase(input, output) {
        try {
            const newRef = this.dbRef.child('specialCases').push();
            await newRef.set({
                input: input.toLowerCase(),
                output: output
            });
            return true;
        } catch (error) {
            console.error('Error adding special case:', error);
            return false;
        }
    }

    /**
     * Update a special case
     */
    async updateSpecialCase(caseId, input, output) {
        try {
            await this.dbRef.child('specialCases').child(caseId).update({
                input: input.toLowerCase(),
                output: output
            });
            return true;
        } catch (error) {
            console.error('Error updating special case:', error);
            return false;
        }
    }

    /**
     * Delete a special case
     */
    async deleteSpecialCase(caseId) {
        try {
            await this.dbRef.child('specialCases').child(caseId).remove();
            return true;
        } catch (error) {
            console.error('Error deleting special case:', error);
            return false;
        }
    }

    /**
     * Update transliteration map
     */
    async updateTransliterationMap(key, value) {
        try {
            await this.dbRef.child('transliterationMap').child(key).set(value);
            return true;
        } catch (error) {
            console.error('Error updating transliteration map:', error);
            return false;
        }
    }

    /**
     * Delete from transliteration map
     */
    async deleteFromTransliterationMap(key) {
        try {
            await this.dbRef.child('transliterationMap').child(key).remove();
            return true;
        } catch (error) {
            console.error('Error deleting from transliteration map:', error);
            return false;
        }
    }

    /**
     * Update vowel diacritics
     */
    async updateVowelDiacritic(key, value) {
        try {
            await this.dbRef.child('vowelDiacritics').child(key).set(value);
            return true;
        } catch (error) {
            console.error('Error updating vowel diacritic:', error);
            return false;
        }
    }

    /**
     * Delete from vowel diacritics
     */
    async deleteVowelDiacritic(key) {
        try {
            await this.dbRef.child('vowelDiacritics').child(key).remove();
            return true;
        } catch (error) {
            console.error('Error deleting vowel diacritic:', error);
            return false;
        }
    }

    /**
     * Update vowel consonants
     */
    async updateVowelConsonant(key, value) {
        try {
            await this.dbRef.child('vowelConsonants').child(key).set(value);
            return true;
        } catch (error) {
            console.error('Error updating vowel consonant:', error);
            return false;
        }
    }

    /**
     * Delete from vowel consonants
     */
    async deleteVowelConsonant(key) {
        try {
            await this.dbRef.child('vowelConsonants').child(key).remove();
            return true;
        } catch (error) {
            console.error('Error deleting vowel consonant:', error);
            return false;
        }
    }

    /**
     * Add to shaviyanisukun array
     */
    async addShaviyanisukun(value) {
        try {
            await this.dbRef.child('shaviyanisukun').push(value);
            return true;
        } catch (error) {
            console.error('Error adding shaviyanisukun:', error);
            return false;
        }
    }

    /**
     * Remove from shaviyanisukun array
     */
    async removeShaviyanisukun(value) {
        try {
            const snapshot = await this.dbRef.child('shaviyanisukun').once('value');
            const data = snapshot.val();
            
            if (data) {
                for (const key in data) {
                    if (data[key] === value) {
                        await this.dbRef.child('shaviyanisukun').child(key).remove();
                        return true;
                    }
                }
            }
            return false;
        } catch (error) {
            console.error('Error removing shaviyanisukun:', error);
            return false;
        }
    }

    /**
     * Bulk upload data (for migration)
     */
    async bulkUpload(data) {
        try {
            // Upload special cases
            if (data.specialCases && Array.isArray(data.specialCases)) {
                const specialCasesRef = this.dbRef.child('specialCases');
                await specialCasesRef.remove(); // Clear existing
                
                for (const specialCase of data.specialCases) {
                    await specialCasesRef.push({
                        input: specialCase.input,
                        output: specialCase.output
                    });
                }
            }

            // Upload maps
            if (data.transliterationMap) {
                await this.dbRef.child('transliterationMap').set(data.transliterationMap);
            }

            if (data.vowelDiacritics) {
                await this.dbRef.child('vowelDiacritics').set(data.vowelDiacritics);
            }

            if (data.vowelConsonants) {
                await this.dbRef.child('vowelConsonants').set(data.vowelConsonants);
            }

            // Upload shaviyanisukun array
            if (data.shaviyanisukun && Array.isArray(data.shaviyanisukun)) {
                const shaviyaniskunRef = this.dbRef.child('shaviyanisukun');
                await shaviyaniskunRef.remove(); // Clear existing
                
                for (const item of data.shaviyanisukun) {
                    await shaviyaniskunRef.push(item);
                }
            }

            console.log('Bulk upload completed successfully');
            return true;
        } catch (error) {
            console.error('Error during bulk upload:', error);
            return false;
        }
    }

    /**
     * Get special cases as array with Firebase keys
     */
    async getSpecialCasesWithKeys() {
        try {
            const snapshot = await this.dbRef.child('specialCases').once('value');
            const data = snapshot.val();
            
            if (!data) return [];
            
            return Object.keys(data).map(key => ({
                id: key,
                input: data[key].input,
                output: data[key].output
            })).sort((a, b) => b.input.length - a.input.length);
        } catch (error) {
            console.error('Error getting special cases with keys:', error);
            return [];
        }
    }
}

// Create global instance
const transliterationFirebase = new TransliterationFirebaseManager();

// Auto-initialize when Firebase is ready
if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
    transliterationFirebase.initialize();
} else {
    // Wait for Firebase to be ready
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
            transliterationFirebase.initialize();
        }
    });
}
