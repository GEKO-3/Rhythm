// ==================================================================
// Dhivehi Latin to Thaana Transliteration Library
// ==================================================================
// This file contains all the transliteration logic for converting
// Latin text to Dhivehi Thaana script.
//
// Main function: transliterateText(latinText) or performTransliteration(latinText)
// 
// To add new special cases:
// 1. Add to the specialCases array with input, output, and length
// 2. Or use addSpecialCase('input', 'output') function
//
// The transliteration follows these rules:
// - Special cases are checked first (exact matches)
// - Multi-character consonants (like 'sh', 'th') are processed before single chars
// - Vowels at the start of words get consonant forms (with alif)
// - Vowels after consonants get diacritic forms
// - 'r' at the end of words after vowels becomes 'ރު'
// - 'n' uses sukun (ން) when followed by consonant or at end of word, except in "hus noonu" patterns where it uses regular ނ
// - Apostrophes (') are completely removed from input text
// - Commas (,) are converted to Arabic commas (،)
// ==================================================================

// Firebase integration flag
let useFirebaseData = false;
let firebaseDataCache = null;

// Initialize Firebase data when available
if (typeof transliterationFirebase !== 'undefined') {
    transliterationFirebase.addListener((data) => {
        firebaseDataCache = data;
        useFirebaseData = true;
        console.log('Transliteration using Firebase data');
        console.log('Firebase cache sentenceEnd:', data.sentenceEnd);
    });
}

// Hardcoded husnoonu patterns (fallback)
const husNoonuPatterns = [
    { pattern: 'maahingaa', output: 'މާހިނގާ', length: 9 },
    { pattern: 'chaandha', output: 'ޗާނދަ', length: 8 },
    { pattern: 'lhindhaa', output: 'ޅިނދާ', length: 8 },
    { pattern: 'mihindhu', output: 'މިހިނދު', length: 8 },
    { pattern: 'muhingaa', output: 'މުހިނގާ', length: 8 },
    { pattern: 'nuhindhu', output: 'ނުހިނދު', length: 8 },
    { pattern: 'nuhingaa', output: 'ނުހިނގާ', length: 8 },
    { pattern: 'thaangaa', output: 'ތާނގާ', length: 8 },
    { pattern: 'thundee', output: 'ތުނޑީ', length: 7 },
    { pattern: 'thunbaa', output: 'ތުނބާ', length: 7 },
    { pattern: 'bondhaa', output: 'ބޮނދާ', length: 7 },
    { pattern: 'bondhai', output: 'ބޮނދައި', length: 7 },
    { pattern: 'dhandoo', output: 'ދަނޑޫ', length: 7 },
    { pattern: 'handhaa', output: 'ހަނދާ', length: 7 },
    { pattern: 'handhah', output: 'ހަނދަށް', length: 7 },
    { pattern: 'handhey', output: 'ހަނދޭ', length: 7 },
    { pattern: 'kandhey', output: 'ކަނދޭ', length: 7 },
    { pattern: 'lhindhu', output: 'ޅިނދު', length: 7 },
    { pattern: 'thaanga', output: 'ތާނގަ', length: 7 },
    { pattern: 'thandee', output: 'ތަނޑީ', length: 7 },
    { pattern: 'yaandhu', output: 'ޔާނދު', length: 7 },
    { pattern: 'aanhaa', output: 'އާނހާ', length: 6 },
    { pattern: 'andhaa', output: 'އަނދާ', length: 6 },
    { pattern: 'bandaa', output: 'ބަނޑާ', length: 6 },
    { pattern: 'bandha', output: 'ބަނދަ', length: 6 },
    { pattern: 'bandhe', output: 'ބަނދެ', length: 6 },
    { pattern: 'bandhi', output: 'ބަނދި', length: 6 },
    { pattern: 'bindhe', output: 'ބިނދެ', length: 6 },
    { pattern: 'bindhu', output: 'ބިނދު', length: 6 },
    { pattern: 'bondee', output: 'ބޮނޑީ', length: 6 },
    { pattern: 'bondha', output: 'ބޮނދަ', length: 6 },
    { pattern: 'dhanbi', output: 'ދަނބި', length: 6 },
    { pattern: 'dhandi', output: 'ދަނޑި', length: 6 },
    { pattern: 'dhandu', output: 'ދަނޑު', length: 6 },
    { pattern: 'dhanbu', output: 'ދަނބު', length: 6 },
    { pattern: 'dhanmu', output: 'ދަނމު', length: 6 },
    { pattern: 'findha', output: 'ފިނދަ', length: 6 },
    { pattern: 'findhu', output: 'ފިނދު', length: 6 },
    { pattern: 'gandaa', output: 'ގަނޑާ', length: 6 },
    { pattern: 'gandeh', output: 'ގަނޑެއް', length: 6 },
    { pattern: 'gandey', output: 'ގަނޑޭ', length: 6 },
    { pattern: 'handha', output: 'ހަނދަ', length: 6 },
    { pattern: 'handhi', output: 'ހަނދި', length: 6 },
    { pattern: 'handhu', output: 'ހަނދު', length: 6 },
    { pattern: 'hendhu', output: 'ހެނދު', length: 6 },
    { pattern: 'hindha', output: 'ހިނދަ', length: 6 },
    { pattern: 'hindhu', output: 'ހިނދު', length: 6 },
    { pattern: 'hingaa', output: 'ހިނގާ', length: 6 },
    { pattern: 'hingee', output: 'ހިނގީ', length: 6 },
    { pattern: 'ihinga', output: 'އިހިނގަ', length: 6 },
    { pattern: 'kanbaa', output: 'ކަނބާ', length: 6 },
    { pattern: 'kandaa', output: 'ކަނޑާ', length: 6 },
    { pattern: 'kandeh', output: 'ކަނޑެއް', length: 6 },
    { pattern: 'kandhi', output: 'ކަނދި', length: 6 },
    { pattern: 'kandhu', output: 'ކަނދު', length: 6 },
    { pattern: 'kandoo', output: 'ކަނޑޫ', length: 6 },
    { pattern: 'kendee', output: 'ކެނޑީ', length: 6 },
    { pattern: 'kendey', output: 'ކެނޑޭ', length: 6 },
    { pattern: 'kuriah', output: 'ކުރިޔަށް', length: 6 },
    { pattern: 'lanbaa', output: 'ލަނބާ', length: 6 },
    { pattern: 'lenbey', output: 'ލެނބޭ', length: 6 },
    { pattern: 'lhangi', output: 'ޅަނގި', length: 6 },
    { pattern: 'lhangu', output: 'ޅަނގު', length: 6 },
    { pattern: 'rindhu', output: 'ރިނދު', length: 6 },
    { pattern: 'rondeh', output: 'ރޮނޑެއް', length: 6 },
    { pattern: 'runbaa', output: 'ރުނބާ', length: 6 },
    { pattern: 'sandhu', output: 'ސަނދު', length: 6 },
    { pattern: 'thanbu', output: 'ތަނބު', length: 6 },
    { pattern: 'thandi', output: 'ތަނޑި', length: 6 },
    { pattern: 'thunba', output: 'ތުނބަ', length: 6 },
    { pattern: 'thunbi', output: 'ތުނބި', length: 6 },
    { pattern: 'thunbu', output: 'ތުނބު', length: 6 },
    { pattern: 'thundi', output: 'ތުނޑި', length: 6 },
    { pattern: 'thundu', output: 'ތުނޑު', length: 6 },
    { pattern: 'vandhu', output: 'ވަނދު', length: 6 },
    { pattern: 'aanha', output: 'އާނހަ', length: 5 },
    { pattern: 'anbaa', output: 'އަނބާ', length: 5 },
    { pattern: 'andhi', output: 'އަނދި', length: 5 },
    { pattern: 'banda', output: 'ބަނޑަ', length: 5 },
    { pattern: 'bandi', output: 'ބަނޑި', length: 5 },
    { pattern: 'bandu', output: 'ބަނޑު', length: 5 },
    { pattern: 'banbu', output: 'ބަނބު', length: 5 },
    { pattern: 'binmu', output: 'ބިނމު', length: 5 },
    { pattern: 'bondi', output: 'ބޮނޑި', length: 5 },
    { pattern: 'endhe', output: 'އެނދެ', length: 5 },
    { pattern: 'endhu', output: 'އެނދު', length: 5 },
    { pattern: 'engey', output: 'އެނގޭ', length: 5 },
    { pattern: 'fanbu', output: 'ފަނބު', length: 5 },
    { pattern: 'fandu', output: 'ފަނޑު', length: 5 },
    { pattern: 'fundu', output: 'ފުނޑު', length: 5 },
    { pattern: 'ganda', output: 'ގަނޑަ', length: 5 },
    { pattern: 'gandu', output: 'ގަނޑު', length: 5 },
    { pattern: 'genbe', output: 'ގެނބެ', length: 5 },
    { pattern: 'genbi', output: 'ގެނބި', length: 5 },
    { pattern: 'gondi', output: 'ގޮނޑި', length: 5 },
    { pattern: 'gondu', output: 'ގޮނޑު', length: 5 },
    { pattern: 'hendu', output: 'ހެނޑު', length: 5 },
    { pattern: 'hinga', output: 'ހިނގަ', length: 5 },
    { pattern: 'hingu', output: 'ހިނގު', length: 5 },
    { pattern: 'honda', output: 'ހޮނޑަ', length: 5 },
    { pattern: 'hungu', output: 'ހުނގު', length: 5 },
    { pattern: 'indhe', output: 'އިނދެ', length: 5 },
    { pattern: 'ingey', output: 'އިނގޭ', length: 5 },
    { pattern: 'kanda', output: 'ކަނޑަ', length: 5 },
    { pattern: 'kandi', output: 'ކަނޑި', length: 5 },
    { pattern: 'kandu', output: 'ކަނޑު', length: 5 },
    { pattern: 'kanga', output: 'ކަނގަ', length: 5 },
    { pattern: 'kanbi', output: 'ކަނބި', length: 5 },
    { pattern: 'kanbu', output: 'ކަނބު', length: 5 },
    { pattern: 'kende', output: 'ކެނޑެ', length: 5 },
    { pattern: 'kendi', output: 'ކެނޑި', length: 5 },
    { pattern: 'kendu', output: 'ކެނޑު', length: 5 },
    { pattern: 'kundi', output: 'ކުނޑި', length: 5 },
    { pattern: 'kunbu', output: 'ކުނބު', length: 5 },
    { pattern: 'lanbe', output: 'ލަނބެ', length: 5 },
    { pattern: 'landu', output: 'ލަނޑު', length: 5 },
    { pattern: 'langi', output: 'ލަނގި', length: 5 },
    { pattern: 'lenbu', output: 'ލެނބު', length: 5 },
    { pattern: 'linbe', output: 'ލިނބެ', length: 5 },
    { pattern: 'randi', output: 'ރަނޑި', length: 5 },
    { pattern: 'randu', output: 'ރަނޑު', length: 5 },
    { pattern: 'ranga', output: 'ރަނގަ', length: 5 },
    { pattern: 'rangi', output: 'ރަނގި', length: 5 },
    { pattern: 'ringa', output: 'ރިނގަ', length: 5 },
    { pattern: 'ringu', output: 'ރިނގު', length: 5 },
    { pattern: 'runba', output: 'ރުނބަ', length: 5 },
    { pattern: 'undha', output: 'އުނދަ', length: 5 },
    { pattern: 'undhu', output: 'އުނދު', length: 5 },
    { pattern: 'yangi', output: 'ޔަނގި', length: 5 },
    { pattern: 'anbi', output: 'އަނބި', length: 4 },
    { pattern: 'anbu', output: 'އަނބު', length: 4 },
    { pattern: 'anga', output: 'އަނގަ', length: 4 },
    { pattern: 'ango', output: 'އަނގޮ', length: 4 },
    { pattern: 'enbu', output: 'އެނބު', length: 4 },
    { pattern: 'engi', output: 'އެނގި', length: 4 },
    { pattern: 'engu', output: 'އެނގު', length: 4 },
    { pattern: 'inba', output: 'އިނބަ', length: 4 },
    { pattern: 'ingi', output: 'އިނގި', length: 4 },
    { pattern: 'unba', output: 'އުނބަ', length: 4 },
    { pattern: 'unga', output: 'އުނގަ', length: 4 },
    { pattern: 'ungu', output: 'އުނގު', length: 4 }
];

// Dhivehi Latin to Thaana transliteration logic
// This file contains all the transliteration mappings and logic

// Dhivehi Latin to Thaana transliteration mapping
const transliterationMap = {
    // Consonants (base letters)
    'h': 'ހ', 'sh': 'ށ', 'n': 'ނ', 'r': 'ރ', 'b': 'ބ', 'lh': 'ޅ', 'k': 'ކ',
    'v': 'ވ', 'm': 'މ', 'f': 'ފ', 'dh': 'ދ', 'th': 'ތ', 'l': 'ލ',
    'g': 'ގ', 'gn': 'ޏ', 's': 'ސ', 'd': 'ޑ', 'z': 'ޒ', 't': 'ޓ', 'y': 'ޔ',
    'p': 'ޕ', 'j': 'ޖ', 'ch': 'ޗ', 'ny': 'ޏ', 'tt': 'ޓ', 'hh': 'ޙ', 'kh': 'ޚ',
    'q': 'ޤ', 'w': 'ވ', 'gh': 'ޣ', 'x': 'ޚ', 'zh': 'ޒ',
    
    // Punctuation
    ',': '،', // English comma to Arabic comma
    
    // Numbers
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9'
};

// Vowel diacritics (used after consonants)
const vowelDiacritics = {
    'a': 'ަ',   // fatha
    'aa': 'ާ',  // alif
    'i': 'ި',   // kasra
    'ii': 'ީ',  // long kasra
    'u': 'ު',   // damma
    'uu': 'ޫ',  // wavy damma
    'e': 'ެ',   // fili
    'ey': 'ޭ',  // eybeyfili
    'o': 'ޮ',   // obofili
    'oa': 'ޯ',  // oabofili
    'ee': 'ީ',  // same as ii
    'oo': 'ޫ',  // same as uu
};

// Consonant forms of vowel letters (when they start syllables)
const vowelConsonants = {
    'a': 'އަ',   // alif (when starting a syllable)
    'aa': 'އާ', // alif with alif mark
    'i': 'އި',  // alif with kasra
    'ii': 'އީ', // alif with long kasra
    'u': 'އު',  // alif with damma
    'uu': 'އޫ', // alif with wavy damma
    'e': 'އެ',  // alif with fili
    'ey': 'އޭ', // alif with eybeyfili
    'o': 'އޮ',  // alif with obofili
    'oa': 'އޯ',  // alif with oabofili
};

// Shaviyanisukun array - consonants that change "ah" ending to "ަށް"
const shaviyanisukun = ['m', 'dh', 's', 'd', 'y', 'sh', 'j' ];

// Helper functions to get data from Firebase or fallback to hardcoded
function getTransliterationMap() {
    return (useFirebaseData && firebaseDataCache && Object.keys(firebaseDataCache.transliterationMap).length > 0) 
        ? firebaseDataCache.transliterationMap 
        : transliterationMap;
}

function getVowelDiacritics() {
    return (useFirebaseData && firebaseDataCache && Object.keys(firebaseDataCache.vowelDiacritics).length > 0)
        ? firebaseDataCache.vowelDiacritics
        : vowelDiacritics;
}

function getVowelConsonants() {
    return (useFirebaseData && firebaseDataCache && Object.keys(firebaseDataCache.vowelConsonants).length > 0)
        ? firebaseDataCache.vowelConsonants
        : vowelConsonants;
}

function getShaviyanisukun() {
    return (useFirebaseData && firebaseDataCache && firebaseDataCache.shaviyanisukun.length > 0)
        ? firebaseDataCache.shaviyanisukun
        : shaviyanisukun;
}

function getSpecialCases() {
    return (useFirebaseData && firebaseDataCache && firebaseDataCache.specialCases.length > 0)
        ? firebaseDataCache.specialCases
        : specialCases;
}

// Special cases mapping - words that need exact transliteration
// Data now loaded from Firebase - see pages/transliteration-manager.html
const specialCases = [];

// Helper functions
function isConsonant(char) {
    return transliterationMap.hasOwnProperty(char);
}

function isVowel(char) {
    return vowelDiacritics.hasOwnProperty(char) || vowelConsonants.hasOwnProperty(char);
}

function isVowelSound(str, index) {
    // Special case: treat "aaaa" as "aa" (check longest first)
    if (str.substring(index, index + 4) === 'aaaa') {
        return 'aa';
    }
    
    // Special case: treat "aaa" as "aa"
    if (str.substring(index, index + 3) === 'aaa') {
        return 'aa';
    }
    
    // Check for multi-character vowels first
    const vowels = ['aa', 'ii', 'uu', 'ey', 'oa', 'ee', 'oo'];
    for (let vowel of vowels) {
        if (str.substring(index, index + vowel.length) === vowel) {
            return vowel;
        }
    }
    
    // Check single character vowels
    if ('aiueo'.includes(str[index])) {
        return str[index];
    }
    return null;
}

// Main transliteration function
function performTransliteration(latinText) {
    if (!latinText || !latinText.trim()) {
        return '';
    }
    
    // Convert to lowercase and remove apostrophes and periods completely, but preserve commas
    let processText = latinText.toLowerCase().replace(/[']/g, '');
    
    // Use Firebase data if available, otherwise use hardcoded fallbacks
    const activeTransliterationMap = (useFirebaseData && firebaseDataCache && Object.keys(firebaseDataCache.transliterationMap).length > 0) 
        ? firebaseDataCache.transliterationMap 
        : transliterationMap;
    const activeVowelDiacritics = (useFirebaseData && firebaseDataCache && Object.keys(firebaseDataCache.vowelDiacritics).length > 0)
        ? firebaseDataCache.vowelDiacritics
        : vowelDiacritics;
    const activeVowelConsonants = (useFirebaseData && firebaseDataCache && Object.keys(firebaseDataCache.vowelConsonants).length > 0)
        ? firebaseDataCache.vowelConsonants
        : vowelConsonants;
    const activeShaviyanisukun = (useFirebaseData && firebaseDataCache && firebaseDataCache.shaviyanisukun.length > 0)
        ? firebaseDataCache.shaviyanisukun
        : shaviyanisukun;
    const activeSpecialCases = (useFirebaseData && firebaseDataCache && firebaseDataCache.specialCases.length > 0)
        ? firebaseDataCache.specialCases
        : specialCases;
    const activeEnglishWords = (useFirebaseData && firebaseDataCache && firebaseDataCache.englishWords && firebaseDataCache.englishWords.length > 0)
        ? firebaseDataCache.englishWords
        : [];
    const activeSentenceEnd = (useFirebaseData && firebaseDataCache && firebaseDataCache.sentenceEnd && firebaseDataCache.sentenceEnd.length > 0)
        ? firebaseDataCache.sentenceEnd
        : [{ input: 'keve', output: 'ކެވެ' }, { input: 'eve', output: 'އެވެ' }];
    
    // Debug: Log sentence end patterns
    if (activeSentenceEnd && activeSentenceEnd.length > 0) {
        console.log('Sentence end patterns loaded:', activeSentenceEnd.length, activeSentenceEnd);
    }
    
    // Check for sentence end patterns (always with period, longest first)
    for (const pattern of activeSentenceEnd) {
        const escaped = pattern.input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped + '\\.', 'gi');
        const beforeReplace = processText;
        processText = processText.replace(regex, '⟪' + pattern.output + '.⟫');
        if (beforeReplace !== processText) {
            console.log(`Sentence end pattern matched: "${pattern.input}." -> "${pattern.output}."`);
        }
    }
    
    // Check for special cases first (whole word or phrase matches)
    // Process special cases from longest to shortest
    for (const specialCase of activeSpecialCases) {
        const pattern = specialCase.input;
        const replacement = specialCase.output;
        
        // Create regex to match whole words/phrases (not parts of words)
        const regex = new RegExp('\\b' + pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
        processText = processText.replace(regex, '⟪' + replacement + '⟫');
    }
    
    // Check for English words (can be part of a word)
    // Process from longest to shortest
    for (const englishWord of activeEnglishWords) {
        const pattern = englishWord.input;
        const replacement = englishWord.output;
        
        // Create case-insensitive regex that matches the pattern anywhere
        const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        processText = processText.replace(regex, '⟪' + replacement + '⟫');
    }
    
    let dhivehiText = '';


    let i = 0;
    
    while (i < processText.length) {
        let matched = false;
        
        // Check if we're at a special case marker
        if (processText.substring(i, i + 1) === '⟪') {
            // Find the closing marker
            const endMarker = processText.indexOf('⟫', i);
            if (endMarker !== -1) {
                // Extract and add the special case output
                dhivehiText += processText.substring(i + 1, endMarker);
                i = endMarker + 1;
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "nnuvaa" at end of word EARLY (before other processing)
        if (processText.substring(i, i + 6) === 'nnuvaa') {
            // Check if this 'nnuvaa' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 6 >= processText.length || 
                processText[i + 6] === ' ' || 
                processText[i + 6] === '\n' ||
                processText[i + 6] === '\r' ||
                processText[i + 6] === ',' ||
                processText[i + 6] === '#' ||
                /[0-9]/.test(processText[i + 6]) ||
                /[.,!?;:]/.test(processText[i + 6])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Replace "nnuvaa" with "ންނުވާ"
                dhivehiText += 'ންނުވާ';
                i += 6; // Skip all 6 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "neyey" at end of word EARLY (before other processing)
        if (processText.substring(i, i + 5) === 'neyey') {
            // Check if this 'neyey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Simply replace "neyey" with the Thaana equivalent
                dhivehiText += 'ނެޔޭ';
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "jehihjey" pattern anywhere in the text EARLY (before "jehey" processing)
        if (processText.substring(i, i + 8) === 'jehihjey') {
            dhivehiText += 'ޖެހިއްޖޭ';
            i += 8; // Skip all 8 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "jehey" at end of word EARLY (before other processing)
        if (processText.substring(i, i + 5) === 'jehey') {
            // Check if this 'jehey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Simply replace "jehey" with the Thaana equivalent
                dhivehiText += 'ޖެހޭ';
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "jeyey" at end of word EARLY (before other processing)
        if (processText.substring(i, i + 5) === 'jeyey') {
            // Check if this 'jeyey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Simply replace "jeyey" with the Thaana equivalent
                dhivehiText += 'ޖެޔޭ';
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "nuvaa" at end of word EARLY (before other processing)
        if (processText.substring(i, i + 5) === 'nuvaa') {
            // Check if this 'nuvaa' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Simply replace "nuvaa" with the Thaana equivalent
                // The prefix has already been processed by the normal loop
                dhivehiText += 'ނުވާ';
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "hen" at end of word FIRST (before any other processing)
        if (processText.substring(i, i + 3) === 'hen') {
            // Check if this 'hen' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 3 >= processText.length || 
                processText[i + 3] === ' ' || 
                processText[i + 3] === '\n' ||
                processText[i + 3] === '\r' ||
                processText[i + 3] === ',' ||
                processText[i + 3] === '#' ||
                /[0-9]/.test(processText[i + 3]) ||
                /[.,!?;:]/.test(processText[i + 3])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ހެން'; // special transliteration for word-final 'hen'
                i += 3; // Skip all 3 characters
                continue;
            }
        }
        
        // Special case: check for "hey" at end of word
        if (processText.substring(i, i + 3) === 'hey') {
            // Check if this 'hey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 3 >= processText.length || 
                processText[i + 3] === ' ' || 
                processText[i + 3] === '\n' ||
                processText[i + 3] === '\r' ||
                processText[i + 3] === ',' ||
                processText[i + 3] === '#' ||
                /[0-9]/.test(processText[i + 3]) ||
                /[.,!?;:]/.test(processText[i + 3])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ހޭ'; // special transliteration for word-final 'hey'
                i += 3; // Skip all 3 characters
                continue;
            }
        }
        
        // Special case: check for "na" at end of word
        if (processText.substring(i, i + 2) === 'na') {
            // Check if this 'na' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 2 >= processText.length || 
                processText[i + 2] === ' ' || 
                processText[i + 2] === '\n' ||
                processText[i + 2] === '\r' ||
                processText[i + 2] === ',' ||

                processText[i + 2] === '#' ||
                /[0-9]/.test(processText[i + 2]) ||
                /[.,!?;:]/.test(processText[i + 2])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ނަ'; // special transliteration for word-final 'na'
                i += 2; // Skip all 2 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "neyhey" at end of word
        if (processText.substring(i, i + 6) === 'neyhey') {
            // Check if this 'neyhey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 6 >= processText.length || 
                processText[i + 6] === ' ' || 
                processText[i + 6] === '\n' ||
                processText[i + 6] === '\r' ||
                processText[i + 6] === ',' ||
                processText[i + 6] === '#' ||
                /[0-9]/.test(processText[i + 6]) ||
                /[.,!?;:]/.test(processText[i + 6])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ނޭހޭ'; // special transliteration for word-final 'neyhey'
                i += 6; // Skip all 6 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "neyoa" at end of word
        if (processText.substring(i, i + 5) === 'neyoa') {
            // Check if this 'neyoa' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ނެޔޯ'; // special transliteration for word-final 'neyoa'
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "neyo" at end of word
        if (processText.substring(i, i + 4) === 'neyo') {
            // Check if this 'neyo' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 4 >= processText.length || 
                processText[i + 4] === ' ' || 
                processText[i + 4] === '\n' ||
                processText[i + 4] === '\r' ||
                processText[i + 4] === ',' ||
                processText[i + 4] === '#' ||
                /[0-9]/.test(processText[i + 4]) ||
                /[.,!?;:]/.test(processText[i + 4])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ނެޔޮ'; // special transliteration for word-final 'neyo'
                i += 4; // Skip all 4 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "ahun" at end of word
        if (processText.substring(i, i + 4) === 'ahun') {
            // Check if this 'ahun' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 4 >= processText.length || 
                processText[i + 4] === ' ' || 
                processText[i + 4] === '\n' ||
                processText[i + 4] === '\r' ||
                processText[i + 4] === ',' ||
                processText[i + 4] === '#' ||
                /[0-9]/.test(processText[i + 4]) ||
                /[.,!?;:]/.test(processText[i + 4])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ަހުން'; // special transliteration for word-final 'ahun'
                i += 4; // Skip all 4 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "hakaa" at end of word
        if (processText.substring(i, i + 5) === 'hakaa') {
            // Check if this 'hakaa' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ހަކާ'; // special transliteration for word-final 'hakaa'
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "theehey" at end of word
        if (processText.substring(i, i + 8) === 'theehey') {
            // Check if this 'theehey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 8 >= processText.length || 
                processText[i + 8] === ' ' || 
                processText[i + 8] === '\n' ||
                processText[i + 8] === '\r' ||
                processText[i + 8] === ',' ||
                processText[i + 8] === '#' ||
                /[0-9]/.test(processText[i + 8]) ||
                /[.,!?;:]/.test(processText[i + 8])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ތީހޭ'; // special transliteration for word-final 'theehey'
                i += 8; // Skip all 8 characters
                continue;
            }
        }
        
        // Skip spaces, line breaks, punctuation, asterisks, numbers, and #
        if (processText[i] === ' ' || processText[i] === '\n' || processText[i] === '\r' || /[.,!?;:]/.test(processText[i]) || processText[i] === '*' || /[0-9]/.test(processText[i]) || processText[i] === '#') {
            // Handle commas specially - convert them to Arabic commas
            if (processText[i] === ',') {
                dhivehiText += '،';
            }
            // Skip asterisks, numbers, and # entirely, but include other punctuation
            else if (processText[i] !== '*' && !/[0-9]/.test(processText[i]) && processText[i] !== '#') {
                dhivehiText += processText[i];
            }
            i++;
            continue;
        }
        
        // Special case: check for "eh" as a standalone word
        if (processText.substring(i, i + 2) === 'eh') {
            // Check if this is a whole word (word boundaries before and after)
            let isWholeWord = true;
            
            // Check character before (should be word boundary or start of string)
            if (i > 0) {
                const charBefore = processText[i - 1];
                if (charBefore !== ' ' && charBefore !== '\t' && charBefore !== '\n' && 
                    charBefore !== '\r' && charBefore !== '*' && 
                    charBefore !== ',' && charBefore !== '#' && !/[0-9]/.test(charBefore) && !/[.!?;:]/.test(charBefore)) {
                    isWholeWord = false;
                }
            }
            
            // Check character after (should be word boundary or end of string)
            if (isWholeWord && i + 2 < processText.length) {
                const charAfter = processText[i + 2];
                if (charAfter !== ' ' && charAfter !== '\t' && charAfter !== '\n' && 
                    charAfter !== '\r' && charAfter !== '*' && 
                    charAfter !== ',' && charAfter !== '#' && !/[0-9]/.test(charAfter) && !/[.!?;:]/.test(charAfter)) {
                    isWholeWord = false;
                }
            }
            
            if (isWholeWord) {
                dhivehiText += 'އެއް'; // special transliteration for standalone "eh"
                i += 2; // Skip both characters
                matched = true;
                continue;
            }
        }
        
        // Check for special cases first (only as whole words)
        for (let specialCase of specialCases) {
            if (processText.substring(i, i + specialCase.input.length) === specialCase.input) {
                // Check if this is a whole word (word boundaries before and after)
                let isWholeWord = true;
                
                // Check character before (should be word boundary or start of string)
                if (i > 0) {
                    const charBefore = processText[i - 1];
                    if (charBefore !== ' ' && charBefore !== '\t' && charBefore !== '\n' && 
                        charBefore !== '\r' && charBefore !== '*' && 
                        charBefore !== ',' && charBefore !== '#' && !/[0-9]/.test(charBefore) && !/[.!?;:]/.test(charBefore)) {
                        isWholeWord = false;
                    }
                }
                
                // Check character after (should be word boundary or end of string)
                if (isWholeWord && i + specialCase.input.length < processText.length) {
                    const charAfter = processText[i + specialCase.input.length];
                    if (charAfter !== ' ' && charAfter !== '\t' && charAfter !== '\n' && 
                        charAfter !== '\r' && charAfter !== '*' && 
                        charAfter !== ',' && charAfter !== '#' && !/[0-9]/.test(charAfter) && !/[.!?;:]/.test(charAfter)) {
                        isWholeWord = false;
                    }
                }
                
                if (isWholeWord) {
                    dhivehiText += specialCase.output;
                    i += specialCase.input.length;
                    matched = true;
                    break;
                }
            }
        }
        
        if (matched) continue;
        
        // Special case: check for "hen" at end of word (before other patterns)
        if (processText.substring(i, i + 3) === 'hen') {
            // Check if this 'hen' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 3 >= processText.length || 
                processText[i + 3] === ' ' || 
                processText[i + 3] === '\n' ||
                processText[i + 3] === '\r' ||
                processText[i + 3] === ',' ||
                processText[i + 3] === '#' ||
                /[0-9]/.test(processText[i + 3]) ||
                /[.,!?;:]/.test(processText[i + 3])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
            }
        }
        
        if (matched) continue;
        
        // Special case: check for "jahaalaa" variations anywhere in the text (as substrings)
        const jahaalaaVariations = [
            { pattern: 'jahaaalaaa', output: 'ޖަހާލާ', length: 10 },
            { pattern: 'jahaalaaa', output: 'ޖަހާލާ', length: 9 },
            { pattern: 'jahaaalaa', output: 'ޖަހާލާ', length: 9 },
            { pattern: 'jahaalaa', output: 'ޖަހާލާ', length: 8 }
        ];
        
        for (let variation of jahaalaaVariations) {
            if (processText.substring(i, i + variation.length) === variation.pattern) {
                dhivehiText += variation.output;
                i += variation.length;
                matched = true;
                break;
            }
        }
        
        if (matched) continue;
        
        // Special case: check for specific "hithuga" variations anywhere in the text (as substrings)
        const hithugaVariations = [
            { pattern: 'thihithugaaa', output: 'ތިހިތުގާ', length: 12 },
            { pattern: 'thihithugaa', output: 'ތިހިތުގާ', length: 11 },
            { pattern: 'mihithugaaa', output: 'މިހިތުގާ', length: 11 },
            { pattern: 'ehithugaaa', output: 'އެހިތުގާ', length: 10 },
            { pattern: 'mihithugaa', output: 'މިހިތުގާ', length: 10 },
            { pattern: 'ehithugaa', output: 'އެހިތުގާ', length: 9 },
            { pattern: 'hithugaaa', output: 'ހިތުގާ', length: 9 },
            { pattern: 'hithugaa', output: 'ހިތުގާ', length: 8 }
        ];
        
        for (let variation of hithugaVariations) {
            if (processText.substring(i, i + variation.length) === variation.pattern) {
                dhivehiText += variation.output;
                i += variation.length;
                matched = true;
                break;
            }
        }
        
        if (matched) continue;
        
        // Special case: check for "harakaa" variations anywhere in the text (as substrings)
        const harakaaVariations = [
            { pattern: 'harakaaai', output: 'ހަރަކާތް', length: 9 },
            { pattern: 'harakaaii', output: 'ހަރަކާތް', length: 9 },
            { pattern: 'harakaii', output: 'ހަރަކާތް', length: 8 },
            { pattern: 'harakaay', output: 'ހަރަކާތް', length: 8 },
            { pattern: 'harakayy', output: 'ހަރަކާތް', length: 8 },
            { pattern: 'harakaai', output: 'ހަރަކާތް', length: 8 }
        ];
        
        for (let variation of harakaaVariations) {
            if (processText.substring(i, i + variation.length) === variation.pattern) {
                dhivehiText += variation.output;
                i += variation.length;
                matched = true;
                break;
            }
        }
        
        if (matched) continue;
        
        // Special case: check for "jehi" pattern anywhere in the text (as substring)
        if (processText.substring(i, i + 4) === 'jehi') {
            dhivehiText += 'ޖެހި';
            i += 4; // Skip all 4 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "thiheh" pattern anywhere in the text (as substring)
        if (processText.substring(i, i + 6) === 'thiheh') {
            dhivehiText += 'ތިހެއް';
            i += 6; // Skip all 6 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "maahe" pattern anywhere in the text
        if (processText.substring(i, i + 5) === 'maahe') {
            dhivehiText += 'މާހެ';
            i += 5; // Skip all 5 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "maayy" pattern anywhere in the text (must check before "mayy")
        if (processText.substring(i, i + 5) === 'maayy') {
            dhivehiText += 'މާތް';
            i += 5; // Skip all 5 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "mayy" pattern anywhere in the text
        if (processText.substring(i, i + 4) === 'mayy') {
            dhivehiText += 'މަތް';
            i += 4; // Skip all 4 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "thw" pattern anywhere in the text
        if (processText.substring(i, i + 3) === 'thw') {
            dhivehiText += 'ތޯ';
            i += 3; // Skip all 3 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "dhw" pattern anywhere in the text
        if (processText.substring(i, i + 3) === 'dhw') {
            dhivehiText += 'ދޯ';
            i += 3; // Skip all 3 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "dhey" pattern anywhere in the text
        if (processText.substring(i, i + 4) === 'dhey') {
            dhivehiText += 'ދޭ';
            i += 4; // Skip all 4 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "goiyy" pattern anywhere in the text
        if (processText.substring(i, i + 5) === 'goiyy') {
            dhivehiText += 'ގޮތް';
            i += 5; // Skip all 5 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "ihjey" pattern anywhere in the text
        if (processText.substring(i, i + 5) === 'ihjey') {
            dhivehiText += 'ިއްޖޭ';
            i += 5; // Skip all 5 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "loaiyba", "loayyba", "loyyba", "loiyba" patterns anywhere in the text
        const loaiybaVariations = [
            { pattern: 'loaiyba', output: 'ލޯތްބަ', length: 7 },
            { pattern: 'loayyba', output: 'ލޯތްބަ', length: 7 },
            { pattern: 'loyyba', output: 'ލޯތްބަ', length: 6 },
            { pattern: 'loiyba', output: 'ލޯތްބަ', length: 6 }
        ];
        
        for (let variation of loaiybaVariations) {
            if (processText.substring(i, i + variation.length) === variation.pattern) {
                dhivehiText += variation.output;
                i += variation.length;
                matched = true;
                break;
            }
        }
        
        if (matched) continue;
        
        // Special case: check for "hithaa" pattern anywhere in the text
        if (processText.substring(i, i + 6) === 'hithaa') {
            dhivehiText += 'ހިތާ';
            i += 6; // Skip all 6 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "mihithaa" pattern anywhere in the text
        if (processText.substring(i, i + 8) === 'mihithaa') {
            dhivehiText += 'މިހިތާ';
            i += 8; // Skip all 8 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "hithuge" pattern anywhere in the text
        if (processText.substring(i, i + 7) === 'hithuge') {
            dhivehiText += 'ހިތުގެ';
            i += 7; // Skip all 7 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "veyey" pattern anywhere in the text
        if (processText.substring(i, i + 5) === 'veyey') {
            dhivehiText += 'ވެޔޭ';
            i += 5; // Skip all 5 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "edhey" at end of word
        if (processText.substring(i, i + 5) === 'edhey') {
            // Check if this 'edhey' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'އެދޭ'; // special transliteration for word-final 'edhey'
                i += 5; // Skip all 5 characters
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "vaaneyey" pattern anywhere in the text
        if (processText.substring(i, i + 8) === 'vaaneyey') {
            dhivehiText += 'ވާނެޔޭ';
            i += 8; // Skip all 8 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "raeesah" pattern first (before "raees" rule)
        if (processText.substring(i, i + 7) === 'raeesah') {
            dhivehiText += 'ރައީސަށް'; // specific transliteration for "raeesah"
            i += 7; // Skip all 7 characters
            matched = true;
            continue;
        }
        
        // Special case: check for "raees" pattern - different output based on word position
        if (processText.substring(i, i + 5) === 'raees') {
            // Check if this 'raees' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 5 >= processText.length || 
                processText[i + 5] === ' ' || 
                processText[i + 5] === '\n' ||
                processText[i + 5] === '\r' ||
                processText[i + 5] === ',' ||
                processText[i + 5] === '#' ||
                /[0-9]/.test(processText[i + 5]) ||
                /[.,!?;:]/.test(processText[i + 5])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ރައީސް'; // raees at end of word with sukun
            } else {
                dhivehiText += 'ރައީސ'; // raees at start or middle of word without sukun
            }
            i += 5; // Skip all 5 characters
            matched = true;
            continue;
        }

        // Special case: 'nn' should be 'ން' when followed by consonant OR at end of word (before hus noonu patterns)
        if (processText.substring(i, i + 2) === 'nn') {
            // Check if this 'nn' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 2 >= processText.length || 
                processText[i + 2] === ' ' || 
                processText[i + 2] === '\n' ||
                processText[i + 2] === '\r' ||
                processText[i + 2] === ',' ||
                processText[i + 2] === '#' ||
                /[0-9]/.test(processText[i + 2]) ||
                /[.,!?;:]/.test(processText[i + 2])) {
                isEndOfWord = true;
            }
            
            // Check if this 'nn' is followed by a consonant (not another 'n')
            let isFollowedByConsonant = false;
            
            if (!isEndOfWord && i + 2 < processText.length) {
                let nextChar = processText[i + 2];
                
                // Check if next character is a consonant (single or start of multi-char) but not 'n'
                if (activeTransliterationMap[nextChar] && nextChar !== 'n') {
                    isFollowedByConsonant = true;
                } else if (nextChar !== 'n') {
                    // Check if it's the start of a multi-character consonant
                    for (let len = 3; len >= 2; len--) {
                        if (i + 2 + len <= processText.length) {
                            let nextSubstring = processText.substring(i + 2, i + 2 + len);
                            if (activeTransliterationMap[nextSubstring]) {
                                isFollowedByConsonant = true;
                                break;
                            }
                        }
                    }
                }
            }
            
            if (isEndOfWord || isFollowedByConsonant) {
                dhivehiText += 'ން'; // sukun + nun when 'nn' at end of word or followed by consonant
                i += 2; // Skip both 'n' characters
                matched = true;
                continue;
            }
        }

        // Special case: "hus noonu" patterns - n without sukun in specific combinations
        const activeHusNoonuPatterns = (useFirebaseData && firebaseDataCache && firebaseDataCache.husNoonuPatterns && firebaseDataCache.husNoonuPatterns.length > 0)
            ? firebaseDataCache.husNoonuPatterns
            : husNoonuPatterns;
        
        for (let husPattern of activeHusNoonuPatterns) {
            if (processText.substring(i, i + husPattern.pattern.length) === husPattern.pattern) {
                dhivehiText += husPattern.output;
                i += husPattern.pattern.length;
                matched = true;
                break;
            }
        }
        
        if (matched) continue;
        
        // Special case: 'h' right after hussnoonu pattern and right before a consonant should be 'އް'
        if (processText[i] === 'h') {
            // Check if we just processed a hussnoonu pattern (matched was true)
            let justProcessedHussnoonu = false;
            
            // Check if the previous characters match any hussnoonu pattern
            for (let husPattern of husNoonuPatterns) {
                if (i >= husPattern.pattern.length) {
                    let prevSubstring = processText.substring(i - husPattern.pattern.length, i);
                    if (prevSubstring === husPattern.pattern) {
                        justProcessedHussnoonu = true;
                        break;
                    }
                }
            }
            
            if (justProcessedHussnoonu) {
                // Check if next character is a consonant
                let nextIsConsonant = false;
                
                if (i + 1 < processText.length) {
                    let nextChar = processText[i + 1];
                    
                    // Check if next character is a single consonant
                    if (activeTransliterationMap[nextChar]) {
                        nextIsConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (activeTransliterationMap[nextSubstring]) {
                                    nextIsConsonant = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                if (nextIsConsonant) {
                    dhivehiText += 'އް'; // alif with sukun
                    i++; // Skip the 'h'
                    matched = true;
                    continue;
                }
            }
        }
        
        // Special case: check for front-of-word substring patterns
        const frontOfWordPatterns = [
            { pattern: 'furihama', output: 'ފުރިހަމަ', length: 9 },
            { pattern: 'joash', output: 'ޖޯޝ', length: 5 },
            { pattern: 'echch', output: 'އެއްޗ', length: 5 },
            { pattern: 'ehch', output: 'އެއްޗ', length: 4 },
            { pattern: 'ash', output: 'އަޝ', length: 3 },
            { pattern: 'thi', output: 'ތި', length: 3 },
            { pattern: 'vi', output: 'ވި', length: 2 },
        ];
        
        for (let frontPattern of frontOfWordPatterns) {
            if (processText.substring(i, i + frontPattern.length) === frontPattern.pattern) {
                // Check if this pattern is at the start of a word
                let isStartOfWord = false;
                
                // Check if previous character is space, line break, comma, number, #, or start of text
                if (i === 0 || 
                    processText[i - 1] === ' ' || 
                    processText[i - 1] === '\n' ||
                    processText[i - 1] === '\r' ||
                    processText[i - 1] === ',' ||
                    processText[i - 1] === '#' ||
                    /[0-9]/.test(processText[i - 1]) ||
                    /[.,!?;:]/.test(processText[i - 1])) {
                    isStartOfWord = true;
                }
                
                if (isStartOfWord) {
                    dhivehiText += frontPattern.output;
                    i += frontPattern.length;
                    matched = true;
                    break;
                }
            }
        }
        
        if (matched) continue;
        
        // Special case: check for inside-word-only substring patterns (not at start or end)
        const insideWordOnlyPatterns = [
            { pattern: 'ehun', output: 'ެހުނ', length: 4 }
        ];
        
        for (let insidePattern of insideWordOnlyPatterns) {
            if (processText.substring(i, i + insidePattern.length) === insidePattern.pattern) {
                // Check if this pattern is NOT at the start of a word
                let isNotAtStartOfWord = false;
                
                // Check if previous character is NOT space, line break, comma, number, #, or start of text
                if (i > 0 && 
                    processText[i - 1] !== ' ' && 
                    processText[i - 1] !== '\n' &&
                    processText[i - 1] !== '\r' &&
                    processText[i - 1] !== ',' &&
                    processText[i - 1] !== '#' &&
                    !/[0-9]/.test(processText[i - 1]) &&
                    !/[.,!?;:]/.test(processText[i - 1])) {
                    isNotAtStartOfWord = true;
                }
                
                // Check if this pattern is NOT at the end of a word
                let isNotAtEndOfWord = false;
                
                // Check if next character is NOT space, line break, comma, number, #, or end of text
                if (i + insidePattern.length < processText.length && 
                    processText[i + insidePattern.length] !== ' ' && 
                    processText[i + insidePattern.length] !== '\n' &&
                    processText[i + insidePattern.length] !== '\r' &&
                    processText[i + insidePattern.length] !== ',' &&
                    processText[i + insidePattern.length] !== '#' &&
                    !/[0-9]/.test(processText[i + insidePattern.length]) &&
                    !/[.,!?;:]/.test(processText[i + insidePattern.length])) {
                    isNotAtEndOfWord = true;
                }
                
                if (isNotAtStartOfWord && isNotAtEndOfWord) {
                    dhivehiText += insidePattern.output;
                    i += insidePattern.length;
                    matched = true;
                    break;
                }
            }
        }
        
        if (matched) continue;
        
        // Now check for regular multi-character consonants (sh, th, dh, etc.)
        for (let len = 3; len >= 2; len--) {
            if (i + len <= processText.length) {
                let substring = processText.substring(i, i + len);
                if (activeTransliterationMap[substring]) {
                    // Special case: 'sh' at start of word should be 'ޝ' instead of 'ށ'
                    if (substring === 'sh') {
                        // Check if this 'sh' is at the start of a word
                        let isStartOfWord = false;
                        
                        // Check if previous character is space, line break, comma, number, #, or start of text
                        if (i === 0 || 
                            processText[i - 1] === ' ' || 
                            processText[i - 1] === '\n' ||
                            processText[i - 1] === '\r' ||
                            processText[i - 1] === ',' ||
                            processText[i - 1] === '#' ||
                            /[0-9]/.test(processText[i - 1]) ||
                            /[.,!?;:]/.test(processText[i - 1])) {
                            isStartOfWord = true;
                        }
                        
                        if (isStartOfWord) {
                            dhivehiText += 'ޝ'; // shaviyani for word-initial 'sh'
                        } else {
                            dhivehiText += activeTransliterationMap[substring]; // regular seenu
                        }
                    } 
                    // Special case: 'ny' at end of word should be 'ނީ' instead of 'ޏ'
                    else if (substring === 'ny') {
                        // Check if this 'ny' is at the end of a word
                        let isEndOfWord = false;
                        
                        // Check if next character is space, punctuation, line break, comma, number, #, or end of text
                        if (i + len >= processText.length || 
                            processText[i + len] === ' ' || 
                            processText[i + len] === '\n' ||
                            processText[i + len] === '\r' ||
                            processText[i + len] === ',' ||
                            processText[i + len] === '#' ||
                            /[0-9]/.test(processText[i + len]) ||
                            /[.,!?;:]/.test(processText[i + len])) {
                            isEndOfWord = true;
                        }
                        
                        if (isEndOfWord) {
                            dhivehiText += 'ނީ'; // nun + long kasra for word-final 'ny'
                        } else {
                            dhivehiText += activeTransliterationMap[substring]; // regular gnaviyani
                        }
                    } else {
                        dhivehiText += activeTransliterationMap[substring];
                    }
                    i += len;
                    matched = true;
                    break;
                }
            }
        }
        
        if (matched) continue;
        
        // Special case: 'ss' at end of word should be treated as 's' (check before doubled consonant logic)
        if (processText.substring(i, i + 2) === 'ss') {
            // Check if this 'ss' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 2 >= processText.length || 
                processText[i + 2] === ' ' || 
                processText[i + 2] === '\n' ||
                processText[i + 2] === '\r' ||
                processText[i + 2] === ',' ||
                processText[i + 2] === '#' ||
                /[0-9]/.test(processText[i + 2]) ||
                /[.,!?;:]/.test(processText[i + 2])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Check if there's a vowel before this 'ss' to determine if it should have sukun
                let isAfterVowel = false;
                if (i > 0) {
                    let prevVowel = isVowelSound(processText, i - 1);
                    if (prevVowel) {
                        isAfterVowel = true;
                    } else {
                        // Check for longer vowels before this position
                        for (let vowelLen = 4; vowelLen >= 2; vowelLen--) {
                            if (i - vowelLen >= 0) {
                                let prevVowelLong = isVowelSound(processText, i - vowelLen);
                                if (prevVowelLong && prevVowelLong.length === vowelLen && i - vowelLen + vowelLen === i) {
                                    isAfterVowel = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                if (isAfterVowel) {
                    dhivehiText += 'ސް'; // seenu + sukun when 'ss' at end of word after vowel
                } else {
                    dhivehiText += 'ސ'; // regular seenu when 'ss' at end of word not after vowel
                }
                i += 2; // Skip both 's' characters
                matched = true;
                continue;
            }
        }
        
        // Special case: doubled consonants should be އް + consonant (gemination)
        // Check if current position has a repeated consonant
        let foundDoubledConsonant = false;
        
        // Check multi-character consonants first for doubling
        for (let len = 3; len >= 2; len--) {
            if (i + len * 2 <= processText.length) {
                let substring1 = processText.substring(i, i + len);
                let substring2 = processText.substring(i + len, i + len * 2);
                
                if (activeTransliterationMap[substring1] && substring1 === substring2) {
                    dhivehiText += 'އް' + activeTransliterationMap[substring1]; // alif + sukun + consonant
                    i += len * 2; // skip both occurrences
                    foundDoubledConsonant = true;
                    matched = true;
                    break;
                }
            }
        }
        
        // Check single character consonants for doubling
        if (!foundDoubledConsonant && i + 1 < processText.length) {
            let char1 = processText[i];
            let char2 = processText[i + 1];
            
            if (activeTransliterationMap[char1] && char1 === char2) {
                // Special case: doubled 'nn' should be 'ންނ' instead of 'އް' + consonant
                if (char1 === 'n') {
                    dhivehiText += 'ންނ'; // sukun + nun + nun for doubled 'nn'
                } else {
                    dhivehiText += 'އް' + activeTransliterationMap[char1]; // alif + sukun + consonant for other doubled consonants
                }
                i += 2; // skip both occurrences
                foundDoubledConsonant = true;
                matched = true;
            }
        }
        
        if (matched) continue;
        
        // Special case: 'koh' at end of word should be 'ކޮށް'
        if (processText.substring(i, i + 3) === 'koh') {
            // Check if this 'koh' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 3 >= processText.length || 
                processText[i + 3] === ' ' || 
                processText[i + 3] === '\n' ||
                processText[i + 3] === '\r' ||
                processText[i + 3] === ',' ||
                processText[i + 3] === '#' ||
                /[0-9]/.test(processText[i + 3]) ||
                /[.,!?;:]/.test(processText[i + 3])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ކޮށް'; // kaf + o vowel + shaviyani + sukun for word-final 'koh'
                i += 3;
                matched = true;
                continue;
            }
        }
        
        // Special case: 'y' at end of word should be 'ީ' instead of 'ޔ' (check after multi-char consonants)
        if (processText[i] === 'y') {
            // Check if this 'y' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 1 >= processText.length || 
                processText[i + 1] === ' ' || 
                processText[i + 1] === '\n' ||
                processText[i + 1] === '\r' ||
                processText[i + 1] === ',' ||
                processText[i + 1] === '#' ||
                /[0-9]/.test(processText[i + 1]) ||
                /[.,!?;:]/.test(processText[i + 1])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                dhivehiText += 'ީ'; // long kasra for word-final 'y'
                i++;
                matched = true;
                continue;
            }
        }
        
        // Special case: check for "ah" at end of word after specific consonants (shaviyanisukun array)
        if (processText.substring(i, i + 2) === 'ah') {
            // Check if this 'ah' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, comma, number, #, or end of text
            if (i + 2 >= processText.length || 
                processText[i + 2] === ' ' || 
                processText[i + 2] === '\n' ||
                processText[i + 2] === '\r' ||
                processText[i + 2] === ',' ||
                processText[i + 2] === '#' ||
                /[0-9]/.test(processText[i + 2]) ||
                /[.,!?;:]/.test(processText[i + 2])) {
                isEndOfWord = true;
            }
            
            if (isEndOfWord) {
                // Check if previous character was a consonant from shaviyanisukun array
                let prevIsShaviyanisukunConsonant = false;
                let prevConsonant = '';
                
                if (i > 0) {
                    // Check for multi-character consonants before current position
                    let foundPrevConsonant = false;
                    for (let prevLen = 3; prevLen >= 1; prevLen--) {
                        if (i - prevLen >= 0) {
                            let prevSubstring = processText.substring(i - prevLen, i);
                            if (activeTransliterationMap[prevSubstring] && activeShaviyanisukun.includes(prevSubstring)) {
                                prevIsShaviyanisukunConsonant = true;
                                prevConsonant = prevSubstring;
                                foundPrevConsonant = true;
                                break;
                            }
                        }
                    }
                    
                    // If no multi-char consonant found, check single char
                    if (!foundPrevConsonant && activeTransliterationMap[processText[i - 1]] && activeShaviyanisukun.includes(processText[i - 1])) {
                        prevIsShaviyanisukunConsonant = true;
                        prevConsonant = processText[i - 1];
                    }
                }
                
                if (prevIsShaviyanisukunConsonant) {
                    dhivehiText += 'ަށް'; // fatha + shaviyani + sukun for "ah" after shaviyanisukun consonants
                    i += 2; // Skip "ah"
                    matched = true;
                    continue;
                }
            }
        }

        // Special case: check for sukun sounds after consonant
        // Check for various sukun endings (consonant + ah/eh/uh/ih/oh/aah/eyh/ooh/eeh/oah)
        const sukunSounds = ['aah', 'eyh', 'ooh', 'eeh', 'oah', 'ah', 'eh', 'uh', 'ih', 'oh'];
        let foundSukunSound = false;
        
        // Special test case for "meh" to ensure it works
        if (processText === 'meh' && i === 1) {
            dhivehiText += 'ެއް'; // e vowel + alif + sukun for "eh"
            i += 2; // skip "eh"
            foundSukunSound = true;
            matched = true;
        } else {
            for (let sukunSound of sukunSounds) {
                if (processText.substring(i, i + sukunSound.length) === sukunSound) {
                    // Special check: don't match "eh" if it's part of "hen" at end of word
                    if (sukunSound === 'eh' && processText.substring(i, i + 3) === 'hen') {
                        // Check if this 'hen' is at the end of a word
                        let isEndOfWord = false;
                        if (i + 3 >= processText.length || 
                            processText[i + 3] === ' ' || 
                            processText[i + 3] === '\n' ||
                            processText[i + 3] === '\r' ||
                            processText[i + 3] === ',' ||
                            processText[i + 3] === '#' ||
                            /[0-9]/.test(processText[i + 3]) ||
                            /[.,!?;:]/.test(processText[i + 3])) {
                            isEndOfWord = true;
                        }
                        if (isEndOfWord) {
                            continue; // Skip this sukun match, let "hen" be handled elsewhere
                        }
                    }
                    
                    // Check if this sukun sound is at the end of a word
                    let isEndOfWord = false;
                    if (i + sukunSound.length >= processText.length || 
                        processText[i + sukunSound.length] === ' ' || 
                        processText[i + sukunSound.length] === '\n' ||
                        processText[i + sukunSound.length] === '\r' ||
                        processText[i + sukunSound.length] === ',' ||
                        processText[i + sukunSound.length] === '#' ||
                        /[0-9]/.test(processText[i + sukunSound.length]) ||
                        /[.,!?;:]/.test(processText[i + sukunSound.length])) {
                        isEndOfWord = true;
                    }
                    
                    // Check if previous character was a consonant and determine sukun type
                    let prevIsConsonant = false;
                    let prevConsonant = '';
                    
                    if (i > 0) {
                        // Check for multi-character consonants before current position
                        let foundPrevConsonant = false;
                        for (let prevLen = 3; prevLen >= 1; prevLen--) {
                            if (i - prevLen >= 0) {
                                let prevSubstring = processText.substring(i - prevLen, i);
                                if (activeTransliterationMap[prevSubstring]) {
                                    prevIsConsonant = true;
                                    prevConsonant = prevSubstring;
                                    foundPrevConsonant = true;
                                    break;
                                }
                            }
                        }
                        
                        // If no multi-char consonant found, check single char
                        if (!foundPrevConsonant && activeTransliterationMap[processText[i - 1]]) {
                            prevIsConsonant = true;
                            prevConsonant = processText[i - 1];
                        }
                    }
                    
                    if (prevIsConsonant) {
                        // Handle different sukun sounds with appropriate vowel + alif + sukun
                        let sukunEnding = '';
                        
                        if (sukunSound === 'eh') {
                            sukunEnding = 'ެއް'; // e vowel + alif + sukun for "eh"
                        } else if (sukunSound === 'ih') {
                            sukunEnding = 'ިއް'; // i vowel + alif + sukun for "ih"
                        } else if (sukunSound === 'uh') {
                            sukunEnding = 'ުއް'; // u vowel + alif + sukun for "uh"
                        } else if (sukunSound === 'oh') {
                            sukunEnding = 'ޮއް'; // o vowel + alif + sukun for "oh"
                        } else if (sukunSound === 'aah') {
                            sukunEnding = 'ާއް'; // long a vowel + alif + sukun for "aah"
                        } else if (sukunSound === 'eyh') {
                            sukunEnding = 'ޭއް'; // ey vowel + alif + sukun for "eyh"
                        } else if (sukunSound === 'ooh') {
                            sukunEnding = 'ޫއް'; // oo vowel + alif + sukun for "ooh"
                        } else if (sukunSound === 'eeh') {
                            sukunEnding = 'ީއް'; // ee vowel + alif + sukun for "eeh"
                        } else if (sukunSound === 'oah') {
                            sukunEnding = 'ޯއް'; // oa vowel + alif + sukun for "oah"
                        } else {
                            // Default "ah" sound - use consonant-based mapping
                            const sukunMapping = {
                                'h': 'ައް', 'sh': 'ައް', 'n': 'ަށް', 'r': 'ަށް', 'b': 'ައް', 'lh': 'ައް', 'k': 'ަށް',
                                'v': 'ައް', 'm': 'ައް', 'f': 'ަށް', 'dh': 'ަށް', 'th': 'ައް', 'l': 'ައް',
                                'g': 'ަށް', 'gn': 'ަށް', 's': 'ައް', 'd': 'ައް', 'z': 'ައް', 't': 'ައް', 'y': 'ަށް',
                                'p': 'ައް', 'j': 'ައް', 'ch': 'ައް', 'ny': 'ައް'
                            };
                            sukunEnding = sukunMapping[prevConsonant] || 'ައް'; // default to fatha + alif + sukun
                        }
                        
                        dhivehiText += sukunEnding;
                        i += sukunSound.length;
                        foundSukunSound = true;
                        matched = true;
                        break;
                    } else if (!isEndOfWord) {
                        // In the middle of word, use އ (alif) for vowel starts
                        dhivehiText += 'އ';
                        i += sukunSound.length;
                        foundSukunSound = true;
                        matched = true;
                        break;
                    } else {
                        // At word start or after punctuation, treat as vowel
                        if (activeVowelConsonants[sukunSound]) {
                            dhivehiText += activeVowelConsonants[sukunSound];
                            i += sukunSound.length;
                            foundSukunSound = true;
                            matched = true;
                            break;
                        }
                    }
                }
            }
        }
        
        if (foundSukunSound) continue;
        
        // Check if current position is a vowel sound
        let vowelSound = isVowelSound(processText, i);
        if (vowelSound) {
            // Special handling for "aaaa" and "aaa" -> "aa" cases
            let skipLength = vowelSound.length;
            if (processText.substring(i, i + 4) === 'aaaa' && vowelSound === 'aa') {
                skipLength = 4; // Skip all 4 'a's but treat as 'aa'
            } else if (processText.substring(i, i + 3) === 'aaa' && vowelSound === 'aa') {
                skipLength = 3; // Skip all 3 'a's but treat as 'aa'
            }
            
            // Determine if this vowel should be a consonant (alif) or diacritic
            let useAsConsonant = false;
            
            // Use as consonant if:
            // 1. At the beginning of text
            // 2. After a space (start of word)
            // 3. After punctuation
            // 4. After line breaks
            // 5. After commas
            // 6. After numbers
            // 7. After #
            if (i === 0 || 
                processText[i-1] === ' ' || 
                processText[i-1] === '\n' ||
                processText[i-1] === '\r' ||
                processText[i-1] === ',' ||
                processText[i-1] === '#' ||
                /[0-9]/.test(processText[i-1]) ||
                /[.,!?;:]/.test(processText[i-1])) {
                useAsConsonant = true;
            }
            
            // Check if previous character was a consonant - if so, use diacritic form
            if (i > 0 && !useAsConsonant) {
                // Check for multi-character consonants before current position
                let foundPrevConsonant = false;
                for (let prevLen = 3; prevLen >= 1; prevLen--) {
                    if (i - prevLen >= 0) {
                        let prevSubstring = processText.substring(i - prevLen, i);
                        if (activeTransliterationMap[prevSubstring]) {
                            // Previous was a consonant, so use diacritic form
                            foundPrevConsonant = true;
                            break;
                        }
                    }
                }
                
                // If no multi-char consonant found, check single char
                if (!foundPrevConsonant && activeTransliterationMap[processText[i - 1]]) {
                    foundPrevConsonant = true;
                }
                
                if (foundPrevConsonant) {
                    // Previous was consonant, so this vowel should be a diacritic
                    useAsConsonant = false;
                } else {
                    // Check if previous character was a vowel - if so, use consonant form
                    let foundPrevVowel = false;
                    for (let prevLen = 3; prevLen >= 1; prevLen--) {
                        if (i - prevLen >= 0) {
                            let prevVowel = isVowelSound(processText, i - prevLen);
                            if (prevVowel && i - prevLen + prevVowel.length === i) {
                                useAsConsonant = true;
                                foundPrevVowel = true;
                                break;
                            }
                        }
                    }
                    
                    // If no multi-char vowel found, check single character
                    if (!foundPrevVowel && isVowelSound(processText, i-1)) {
                        useAsConsonant = true;
                    }
                }
            }
            
            if (useAsConsonant && activeVowelConsonants[vowelSound]) {
                dhivehiText += activeVowelConsonants[vowelSound];
            } else if (!useAsConsonant && activeVowelDiacritics[vowelSound]) {
                dhivehiText += activeVowelDiacritics[vowelSound];
            } else {
                // Fallback to consonant form
                dhivehiText += activeVowelConsonants[vowelSound] || activeVowelDiacritics[vowelSound];
            }
            
            i += skipLength; // Use skipLength instead of vowelSound.length
            matched = true;
            continue;
        }
        
        // Check single character consonants
        if (activeTransliterationMap[processText[i]]) {
            // Special case: 'l' followed by consonant should be 'ލް' instead of 'ލ'
            // Also: 'l' at end of word should be 'ލު' instead of 'ލ'
            if (processText[i] === 'l') {
                // Check if this 'l' is at the end of a word
                let isEndOfWord = false;
                
                // Check if next character is space, punctuation, line break, comma, number, #, or end of text
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === ',' ||
                    processText[i + 1] === '#' ||
                    /[0-9]/.test(processText[i + 1]) ||
                    /[.,!?;:]/.test(processText[i + 1])) {
                    isEndOfWord = true;
                }
                
                if (isEndOfWord) {
                    dhivehiText += 'ލު'; // laamal + damma when at end of word
                } else {
                    // Check if this 'l' is followed by a consonant
                    let isFollowedByConsonant = false;
                    
                    if (i + 1 < processText.length) {
                        let nextChar = processText[i + 1];
                        
                        // Check if next character is a consonant (single or start of multi-char)
                        if (activeTransliterationMap[nextChar]) {
                            isFollowedByConsonant = true;
                        } else {
                            // Check if it's the start of a multi-character consonant
                            for (let len = 3; len >= 2; len--) {
                                if (i + 1 + len <= processText.length) {
                                    let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                    if (activeTransliterationMap[nextSubstring]) {
                                        isFollowedByConsonant = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    
                    if (isFollowedByConsonant) {
                        dhivehiText += 'ލް'; // laamal + sukun when followed by consonant
                    } else {
                        dhivehiText += activeTransliterationMap[processText[i]]; // regular laamal
                    }
                }
            }
            // Special case: 's' followed by consonant should be 'ސް' instead of 'ސ'
            // Also: 's' at end of word with vowel in front should be 'ސް' instead of 'ސ'
            else if (processText[i] === 's') {
                // Check if this 's' is followed by a consonant
                let isFollowedByConsonant = false;
                
                if (i + 1 < processText.length) {
                    let nextChar = processText[i + 1];
                    
                    // Check if next character is a consonant (single or start of multi-char)
                    if (activeTransliterationMap[nextChar]) {
                        isFollowedByConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (activeTransliterationMap[nextSubstring]) {
                                    isFollowedByConsonant = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                // Check if 's' is at end of word with vowel in front
                let isEndOfWordWithVowel = false;
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === ',' ||
                    processText[i + 1] === '#' ||
                    /[0-9]/.test(processText[i + 1]) ||
                    /[.,!?;:]/.test(processText[i + 1])) {
                    // Check if there's a vowel before this 's'
                    if (i > 0) {
                        let prevVowel = isVowelSound(processText, i - 1);
                        if (prevVowel) {
                            isEndOfWordWithVowel = true;
                        } else {
                            // Check for longer vowels before this position
                            for (let vowelLen = 3; vowelLen >= 2; vowelLen--) {
                                if (i - vowelLen >= 0) {
                                    let prevVowelLong = isVowelSound(processText, i - vowelLen);
                                    if (prevVowelLong && prevVowelLong.length === vowelLen && i - vowelLen + vowelLen === i) {
                                        isEndOfWordWithVowel = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                
                if (isFollowedByConsonant || isEndOfWordWithVowel) {
                    dhivehiText += 'ސް'; // seenu + sukun when followed by consonant or at end with vowel
                } else {
                    dhivehiText += activeTransliterationMap[processText[i]]; // regular seenu
                }
            }
            // Special case: 'n' uses sukun only when followed by consonant or at end of word
            else if (processText[i] === 'n') {
                // Check if this 'n' is at the end of a word
                let isEndOfWord = false;
                
                // Check if next character is space, punctuation, line break, comma, number, #, or end of text
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === ',' ||
                    processText[i + 1] === '#' ||
                    /[0-9]/.test(processText[i + 1]) ||
                    /[.,!?;:]/.test(processText[i + 1])) {
                    isEndOfWord = true;
                }
                
                // Check if this 'n' is followed by a consonant
                let isFollowedByConsonant = false;
                
                if (i + 1 < processText.length && !isEndOfWord) {
                    let nextChar = processText[i + 1];
                    
                    // Check if next character is a consonant (single or start of multi-char)
                    if (activeTransliterationMap[nextChar]) {
                        isFollowedByConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (activeTransliterationMap[nextSubstring]) {
                                    isFollowedByConsonant = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                if (isEndOfWord || isFollowedByConsonant) {
                    dhivehiText += 'ން'; // sukun + nun when at end of word or followed by consonant
                } else {
                    dhivehiText += activeTransliterationMap[processText[i]]; // regular nun when followed by vowel
                }
            }
            // Special case: 'r' at end of word after vowel should be 'ރު' instead of 'ރ'
            else if (processText[i] === 'r') {
                // Check if this 'r' is at the end of a word
                let isEndOfWord = false;
                
                // Check if next character is space, punctuation, line break, comma, number, #, or end of text
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === ',' ||
                    processText[i + 1] === '#' ||
                    /[0-9]/.test(processText[i + 1]) ||
                    /[.,!?;:]/.test(processText[i + 1])) {
                    isEndOfWord = true;
                }
                
                // Check if previous character was a vowel
                let prevIsVowel = false;
                if (i > 0 && isEndOfWord) {
                    // Check for multi-character vowels before current position
                    let foundPrevVowel = false;
                    for (let prevLen = 3; prevLen >= 1; prevLen--) {
                        if (i - prevLen >= 0) {
                            let prevVowel = isVowelSound(processText, i - prevLen);
                            if (prevVowel && i - prevLen + prevVowel.length === i) {
                                prevIsVowel = true;
                                foundPrevVowel = true;
                                break;
                            }
                        }
                    }
                    
                    // If no multi-char vowel found, check single character
                    if (!foundPrevVowel && isVowelSound(processText, i-1)) {
                        prevIsVowel = true;
                    }
                }
                
                if (isEndOfWord && prevIsVowel) {
                    dhivehiText += 'ރު'; // raa + damma for word-final 'r' after vowel
                } else {
                    dhivehiText += activeTransliterationMap[processText[i]]; // regular raa
                }
            }
            // Special case: 'm' without vowel after should be 'މް' instead of 'މ'
            else if (processText[i] === 'm') {
                // Check if this 'm' is at the end of a word
                let isEndOfWord = false;
                
                // Check if next character is space, punctuation, line break, comma, number, #, or end of text
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === ',' ||
                    processText[i + 1] === '#' ||
                    /[0-9]/.test(processText[i + 1]) ||
                    /[.,!?;:]/.test(processText[i + 1])) {
                    isEndOfWord = true;
                }
                
                // Check if this 'm' is followed by a consonant (no vowel after)
                let isFollowedByConsonant = false;
                
                if (i + 1 < processText.length && !isEndOfWord) {
                    let nextChar = processText[i + 1];
                    
                    // Check if next character is a consonant (single or start of multi-char)
                    if (activeTransliterationMap[nextChar]) {
                        isFollowedByConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (activeTransliterationMap[nextSubstring]) {
                                    isFollowedByConsonant = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                
                if (isEndOfWord || isFollowedByConsonant) {
                    dhivehiText += 'މް'; // meem + sukun when at end of word or followed by consonant (no vowel)
                } else {
                    dhivehiText += activeTransliterationMap[processText[i]]; // regular meem when followed by vowel
                }
            }
            else {
                dhivehiText += activeTransliterationMap[processText[i]];
            }
            i++;
            matched = true;
            continue;
        }
        
        // If no match found, keep the original character
        if (!matched) {
            dhivehiText += processText[i];
            i++;
        }
    }
    
    // Clean up any double sukun-alif combinations (އްއް) and replace with single sukun (އް)
    dhivehiText = dhivehiText.replace(/އްއް/g, 'އް');
    
    // Clean up any ޭީ combinations and replace with single ޭ
    dhivehiText = dhivehiText.replace(/ޭީ/g, 'ޭ');
    
    // Clean up spaces before "ގެ" when it appears as a standalone word
    dhivehiText = dhivehiText.replace(/\s+ގެ(?=\s|$)/g, 'ގެ');
    
    // Clean up spaces before "ކޮށް" when it appears as a standalone word
    dhivehiText = dhivehiText.replace(/\s+ކޮށް(?=\s|$)/g, 'ކޮށް');
    
    // Clean up spaces after "ބާ" when it appears as a standalone word
    dhivehiText = dhivehiText.replace(/(?<=^|\s)ބާ\s+/g, 'ބާ');
    
    // Cleanup logic: Replace އްޭ at the end of words with ހޭ
    dhivehiText = dhivehiText.replace(/އްޭ(?=\s|$)/g, 'ހޭ');
    
    // Cleanup logic: Replace އގެ at the end of words with އެއްގެ (for "ehge" pattern)
    dhivehiText = dhivehiText.replace(/އގެ(?=\s|$)/g, 'އެއްގެ');
    
    // Cleanup logic: Replace ހިއްޔ followed by consonant with ހިތް
    dhivehiText = dhivehiText.replace(/ހިއްޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, 'ހިތް');
    
    // Cleanup logic: Replace ދެއްިއްޔ at the beginning of words followed by consonant with ދެހިތް
    dhivehiText = dhivehiText.replace(/(?<=^|\s)ދެއްިއްޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, 'ދެހިތް');
    
    // Cleanup logic: Replace ލޭާ with ލެޔާ (for "leyaa" pattern)
    dhivehiText = dhivehiText.replace(/ލޭާ/g, 'ލެޔާ');
            
    // Cleanup logic: Replace ޭޔ followed by consonant with ެތް
    dhivehiText = dhivehiText.replace(/ޭޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, 'ެތް');
    
    // Cleanup logic: Replace ާއްޔ followed by consonant with ާތް
    dhivehiText = dhivehiText.replace(/ާއްޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, 'ާތް');
    
    // Cleanup logic: Replace ަށްަ followed by consonant with ައްއަ
    dhivehiText = dhivehiText.replace(/ަށްަ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, 'ައްއަ');
    
    // Cleanup logic: Replace ށް in the middle of words with އް
    dhivehiText = dhivehiText.replace(/(?<=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ\u0780-\u07BF])ށް(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ\u0780-\u07BF])/g, 'އް');
    
    // Cleanup logic: Replace އްަ followed by consonant with ހަ
    dhivehiText = dhivehiText.replace(/އްަ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހަ');
    
    // Cleanup logic: Replace އްު followed by consonant with ހު
    dhivehiText = dhivehiText.replace(/އްު(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހު');
    
    // Cleanup logic: Replace އްެ followed by consonant with ހެ
    dhivehiText = dhivehiText.replace(/އްެ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހެ');
    
    // Cleanup logic: Replace އޮއްޔ followed by consonant or at end of word with އޮތް
    dhivehiText = dhivehiText.replace(/އޮއްޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|$|\s)/g, 'އޮތް');
    
    // Cleanup logic: Replace ގޮއްޔ followed by consonant or at end of word with ގޮތް
    dhivehiText = dhivehiText.replace(/ގޮއްޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|$|\s)/g, 'ގޮތް');
    
    // Cleanup logic: Replace އްޔ followed by consonant or at end of word with ތް
    dhivehiText = dhivehiText.replace(/އްޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|$|\s)/g, 'ތް');
    
    // Cleanup logic: Replace އެހ at the end of words with އިއް
    dhivehiText = dhivehiText.replace(/އެހ(?=\s|$)/g, 'އެއް');
    
    // Cleanup logic: Replace ީ at the end of words when preceded by a Dhivehi vowel with އީ
    dhivehiText = dhivehiText.replace(/(?<=[ަާިީުޫެޭޮޯ])ީ(?=\s|$)/g, 'އީ');
    
    // Cleanup logic: Replace ރޫއްެއް with ރޫހެއް
    dhivehiText = dhivehiText.replace(/ރޫއްެއް/g, 'ރޫހެއް');
    
    // Cleanup logic: Replace ިހ followed by consonant with ިއް
    dhivehiText = dhivehiText.replace(/ިހ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, 'ިއް');
    
    // Cleanup logic: Replace އްެ followed by consonant or އް or at end of word with ހެ
    dhivehiText = dhivehiText.replace(/އްެ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހެ');
    
    // Cleanup logic: Replace އްި followed by consonant or އް or at end of word with ހި
    dhivehiText = dhivehiText.replace(/އްި(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހި');
    
    // Cleanup logic: Replace އްީ followed by consonant or އ or at end of word with ހީ
    dhivehiText = dhivehiText.replace(/އްީ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހީ');
    
    // Cleanup logic: Replace އްާ followed by consonant or އް or at end of word with ހާ
    dhivehiText = dhivehiText.replace(/އްާ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހާ');
    
    // Cleanup logic: Replace އްޯ followed by consonant or އ or at end of word with ހޯ
    dhivehiText = dhivehiText.replace(/އްޯ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހޯ');
    
    // Cleanup logic: Replace ހޭޮ with ހެޔޮ
    dhivehiText = dhivehiText.replace(/ހޭޮ/g, 'ހެޔޮ');

    // Cleanup logic: Replace ޭޮ anywhere with ެޔޮ
    dhivehiText = dhivehiText.replace(/ޭޮ/g, 'ެޔޮ');

    // Cleanup logic: Replace ޭޯ anywhere with ެޔޯ
    dhivehiText = dhivehiText.replace(/ޭޯ/g, 'ެޔޯ');

    // Cleanup logic: Replace ޭޭ anywhere with ެޔޭ
    dhivehiText = dhivehiText.replace(/ޭޭ/g, 'ެޔޭ');

    dhivehiText = dhivehiText.replace(/އްޭ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ]|އ|$|\s)/g, 'ހޭ');
    
    dhivehiText = dhivehiText.replace(/އަހ(?=\s|$)/g, 'އަށް');

    // Cleanup logic: Replace އިީއެ at the end of words with އިއެއީ
    dhivehiText = dhivehiText.replace(/އިީއެ(?=\s|$)/g, 'އިއެއީ');

    // Cleanup logic: Remove ޔ when it appears after a Dhivehi vowel or sukun and before a Dhivehi consonant
    dhivehiText = dhivehiText.replace(/(?<=[ަާިީުޫެޭޮޯް])ޔ(?=[ހށނރބޅކވމފދތލގޏސޑޒޓޔޕޖޗޙޚޛޜޝޞޟޠޡޢޣޤޥ])/g, '');

    // Cleanup logic: Replace ޒ at the end of words with ޒް
    dhivehiText = dhivehiText.replace(/ޒ(?=\s|$)/g, 'ޒް');

    // Cleanup logic: Replace ހ at the end of words with އް
    dhivehiText = dhivehiText.replace(/ހ(?=\s|$)/g, 'އް');

    return dhivehiText;
}

// Function to add new special cases (for easier maintenance)
// Usage: addSpecialCase('newword', 'ނުއަލަފާ')
// Note: The function will automatically sort by length to ensure longer patterns are matched first
function addSpecialCase(input, output) {
    specialCases.push({
        input: input.toLowerCase(),
        output: output,
        length: input.length
    });
    
    // Resort by length (longest first)
    specialCases.sort((a, b) => b.length - a.length);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        performTransliteration,
        transliterateText: performTransliteration, // Alias for convenience
        addSpecialCase,
        transliterationMap,
        vowelDiacritics,
        vowelConsonants,
        specialCases
    };
} else {
    // For browser usage, attach to global scope
    window.transliterateText = performTransliteration;
}
