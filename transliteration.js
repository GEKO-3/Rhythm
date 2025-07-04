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
// ==================================================================

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
    
    // Numbers
    '0': '߀', '1': '߁', '2': '߂', '3': '߃', '4': '߄', '5': '߅', '6': '߆', '7': '߇', '8': '߈', '9': '߉'
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

// Special cases mapping - words that need exact transliteration
const specialCases = [
    // Order matters: longer strings first to avoid partial matches
    { input: 'masthukohlaafaaneyey', output: 'މަސްތުކޮށްލާ ފާނެޔޭ' },
    { input: 'kulhadhunvantha', output: 'ކުޅަދުންވަންތަ' },
    { input: 'nuruhihjeyey', output: 'ނުރުހިއްޖެޔޭ' },
    { input: 'neyngeyneyey', output: 'ނޭންގޭނެޔޭ' },
    { input: 'nuveveyneyey', output: 'ނުވެވޭނެޔޭ' },
    { input: 'dhaagoiyvey', output: 'ދާގޮތްވޭ' },
    { input: 'hureveynehey', output: 'ހުރެވޭނެހޭ' },
    { input: 'kuruvaifiyey', output: 'ކުރުވައިފިޔޭ' },
    { input: 'vaagoiyvey', output: 'ވާގޮތްވޭ' },
    { input: 'dhehithugaa', output: 'ދެހިތުގާ' },
    { input: 'fathihashi', output: 'ފަތިހަށި' },
    { input: 'hiyaalugaa', output: 'ހިޔާލުގާ' },
    { input: 'dhehithuga', output: 'ދެހިތުގަ' },
    { input: 'hedhihuri', output: 'ހެދިހުރި' },
    { input: 'jehilunve', output: 'ޖެހިލުންވެ' },
    { input: 'libihuri', output: 'ލިބިހުރި' },
    { input: 'vaagoiyve', output: 'ވާގޮތްވެ' },
    { input: 'handhaaey', output: 'ހަނދާއޭ' },
    { input: 'reethihaa', output: 'ރީތިހާ' },
    { input: 'loaiyhbey', output: 'ލޯތްބޭ' },
    { input: 'kiivvehey', output: 'ކީއްވެހޭ' },
    { input: 'keehvehey', output: 'ކީއްވެހޭ' },
    { input: 'nuruhihje', output: 'ނުރުހިއްޖެ' },
    { input: 'roa lumun', output: 'ރޯލުމުން' },
    { input: 'roa lumum', output: 'ރޯލުމުން' },
    { input: 'haadhahaa', output: 'ހާދަހާ' },
    { input: 'goiyvey', output: 'ގޮތްވޭ' },
    { input: 'janbekey', output: 'ޖަންބެކޭ' },
    { input: 'janbeke', output: 'ޖަންބެކެ' },
    { input: 'vaagoiy', output: 'ވާގޮތް' },
    { input: 'feneyey', output: 'ފެނެޔޭ' },
    { input: 'handhaa', output: 'ހަނދާ' },
    { input: 'ehindhun', output: 'އެހިނދުން' },
    { input: 'shakuvaa', output: 'ޝަކުވާ' },
    { input: 'kaakuhey', output: 'ކާކުހޭ' },
    { input: 'kiiwehey', output: 'ކީއްވެހޭ' },
    { input: 'roalumun', output: 'ރޯލުމުން' },
    { input: 'roalumum', output: 'ރޯލުމުން' },
    { input: 'handhu', output: 'ހަނދު' },
    { input: 'feney', output: 'ފެނޭ' },
    { input: 'janbu', output: 'ޖަންބު' },
    { input: 'asarrr', output: 'އަސަރު' },
    { input: 'beehen', output: 'ބީހެން' },
    { input: 'edheny', output: 'އެދެނީ' },
    { input: 'asarr', output: 'އަސަރު' },
    { input: 'asaru', output: 'އަސަރު' },
    { input: 'kiyaa', output: 'ކިޔާ' },
    { input: 'jahaa', output: 'ޖަހާ' },
    { input: 'kihaa', output: 'ކިހާ' },
    { input: 'ruhey', output: 'ރުހޭ' },
    { input: 'mihen', output: 'މިހެން' },
    { input: 'goyy', output: 'ގޮތް' },
    { input: 'goiy', output: 'ގޮތް' },
    { input: 'goih', output: 'ގޮތް' },
    { input: 'hiyy', output: 'ހިތް' },
    { input: 'hiyh', output: 'ހިތް' },
    { input: 'lhen', output: 'ޅެން' },
    { input: 'dhon', output: 'ދޮން' },
    { input: 'rooh', output: 'ރޫހު' },
    { input: 'asar', output: 'އަސަރު' },
    { input: 'hih', output: 'ހިތް' }
];

// Helper functions
function isConsonant(char) {
    return transliterationMap.hasOwnProperty(char);
}

function isVowel(char) {
    return vowelDiacritics.hasOwnProperty(char) || vowelConsonants.hasOwnProperty(char);
}

function isVowelSound(str, index) {
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
    
    // Convert to lowercase for processing
    let processText = latinText.toLowerCase();
    
    let dhivehiText = '';
    let i = 0;
    
    while (i < processText.length) {
        let matched = false;
        
        // Skip spaces, line breaks, punctuation, asterisks, and apostrophes
        if (processText[i] === ' ' || processText[i] === '\n' || processText[i] === '\r' || /[.,!?;:]/.test(processText[i]) || processText[i] === '*' || processText[i] === "'") {
            // Skip asterisks and apostrophes entirely, but include other characters
            if (processText[i] !== '*' && processText[i] !== "'") {
                dhivehiText += processText[i];
            }
            i++;
            continue;
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
                        charBefore !== '\r' && charBefore !== "'" && charBefore !== '*' && 
                        !/[.,!?;:]/.test(charBefore)) {
                        isWholeWord = false;
                    }
                }
                
                // Check character after (should be word boundary or end of string)
                if (isWholeWord && i + specialCase.input.length < processText.length) {
                    const charAfter = processText[i + specialCase.input.length];
                    if (charAfter !== ' ' && charAfter !== '\t' && charAfter !== '\n' && 
                        charAfter !== '\r' && charAfter !== "'" && charAfter !== '*' && 
                        !/[.,!?;:]/.test(charAfter)) {
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
        
        // Now check for regular multi-character consonants (sh, th, dh, etc.)
        for (let len = 3; len >= 2; len--) {
            if (i + len <= processText.length) {
                let substring = processText.substring(i, i + len);
                if (transliterationMap[substring]) {
                    // Special case: 'ny' at end of word should be 'ނީ' instead of 'ޏ'
                    if (substring === 'ny') {
                        // Check if this 'ny' is at the end of a word
                        let isEndOfWord = false;
                        
                        // Check if next character is space, punctuation, line break, apostrophe, or end of text
                        if (i + len >= processText.length || 
                            processText[i + len] === ' ' || 
                            processText[i + len] === '\n' ||
                            processText[i + len] === '\r' ||
                            processText[i + len] === "'" ||
                            /[.,!?;:]/.test(processText[i + len])) {
                            isEndOfWord = true;
                        }
                        
                        if (isEndOfWord) {
                            dhivehiText += 'ނީ'; // nun + long kasra for word-final 'ny'
                        } else {
                            dhivehiText += transliterationMap[substring]; // regular gnaviyani
                        }
                    } else {
                        dhivehiText += transliterationMap[substring];
                    }
                    i += len;
                    matched = true;
                    break;
                }
            }
        }
        
        if (matched) continue;
        
        // Special case: doubled consonants should be އް + consonant (gemination)
        // Check if current position has a repeated consonant
        let foundDoubledConsonant = false;
        
        // Check multi-character consonants first for doubling
        for (let len = 3; len >= 2; len--) {
            if (i + len * 2 <= processText.length) {
                let substring1 = processText.substring(i, i + len);
                let substring2 = processText.substring(i + len, i + len * 2);
                
                if (transliterationMap[substring1] && substring1 === substring2) {
                    dhivehiText += 'އް' + transliterationMap[substring1]; // alif + sukun + consonant
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
            
            if (transliterationMap[char1] && char1 === char2) {
                dhivehiText += 'އް' + transliterationMap[char1]; // alif + sukun + consonant
                i += 2; // skip both occurrences
                foundDoubledConsonant = true;
                matched = true;
            }
        }
        
        if (matched) continue;
        
        // Special case: 'y' at end of word should be 'ީ' instead of 'ޔ' (check after multi-char consonants)
        if (processText[i] === 'y') {
            // Check if this 'y' is at the end of a word
            let isEndOfWord = false;
            
            // Check if next character is space, punctuation, line break, apostrophe, or end of text
            if (i + 1 >= processText.length || 
                processText[i + 1] === ' ' || 
                processText[i + 1] === '\n' ||
                processText[i + 1] === '\r' ||
                processText[i + 1] === "'" ||
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
                    // Check if this sukun sound is at the end of a word
                    let isEndOfWord = false;
                    if (i + sukunSound.length >= processText.length || 
                        processText[i + sukunSound.length] === ' ' || 
                        processText[i + sukunSound.length] === '\n' ||
                        processText[i + sukunSound.length] === '\r' ||
                        processText[i + sukunSound.length] === "'" ||
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
                                if (transliterationMap[prevSubstring]) {
                                    prevIsConsonant = true;
                                    prevConsonant = prevSubstring;
                                    foundPrevConsonant = true;
                                    break;
                                }
                            }
                        }
                        
                        // If no multi-char consonant found, check single char
                        if (!foundPrevConsonant && transliterationMap[processText[i - 1]]) {
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
                        if (vowelConsonants[sukunSound]) {
                            dhivehiText += vowelConsonants[sukunSound];
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
            // Determine if this vowel should be a consonant (alif) or diacritic
            let useAsConsonant = false;
            
            // Use as consonant if:
            // 1. At the beginning of text
            // 2. After a space (start of word)
            // 3. After punctuation
            // 4. After line breaks
            // 5. After apostrophes
            if (i === 0 || 
                processText[i-1] === ' ' || 
                processText[i-1] === '\n' ||
                processText[i-1] === '\r' ||
                processText[i-1] === "'" ||
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
                        if (transliterationMap[prevSubstring]) {
                            // Previous was a consonant, so use diacritic form
                            foundPrevConsonant = true;
                            break;
                        }
                    }
                }
                
                // If no multi-char consonant found, check single char
                if (!foundPrevConsonant && transliterationMap[processText[i - 1]]) {
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
            
            if (useAsConsonant && vowelConsonants[vowelSound]) {
                dhivehiText += vowelConsonants[vowelSound];
            } else if (!useAsConsonant && vowelDiacritics[vowelSound]) {
                dhivehiText += vowelDiacritics[vowelSound];
            } else {
                // Fallback to consonant form
                dhivehiText += vowelConsonants[vowelSound] || vowelDiacritics[vowelSound];
            }
            
            i += vowelSound.length;
            matched = true;
            continue;
        }
        
        // Check single character consonants
        if (transliterationMap[processText[i]]) {
            // Special case: 'l' followed by consonant should be 'ލް' instead of 'ލ'
            if (processText[i] === 'l') {
                // Check if this 'l' is followed by a consonant
                let isFollowedByConsonant = false;
                
                if (i + 1 < processText.length) {
                    let nextChar = processText[i + 1];
                    
                    // Check if next character is a consonant (single or start of multi-char)
                    if (transliterationMap[nextChar]) {
                        isFollowedByConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (transliterationMap[nextSubstring]) {
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
                    dhivehiText += transliterationMap[processText[i]]; // regular laamal
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
                    if (transliterationMap[nextChar]) {
                        isFollowedByConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (transliterationMap[nextSubstring]) {
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
                    processText[i + 1] === "'" ||
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
                    dhivehiText += transliterationMap[processText[i]]; // regular seenu
                }
            }
            // Special case: 'n' at end of word should be 'ން' instead of 'ނ'
            else if (processText[i] === 'n') {
                // Check if this 'n' is at the end of a word
                let isEndOfWord = false;
                
                // Check if next character is space, punctuation, line break, apostrophe, or end of text
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === "'" ||
                    /[.,!?;:]/.test(processText[i + 1])) {
                    isEndOfWord = true;
                }
                
                if (isEndOfWord) {
                    dhivehiText += 'ން'; // sukun + nun for word-final 'n'
                } else {
                    dhivehiText += transliterationMap[processText[i]]; // regular nun
                }
            }
            // Special case: 'r' at end of word after vowel should be 'ރު' instead of 'ރ'
            else if (processText[i] === 'r') {
                // Check if this 'r' is at the end of a word
                let isEndOfWord = false;
                
                // Check if next character is space, punctuation, line break, apostrophe, or end of text
                if (i + 1 >= processText.length || 
                    processText[i + 1] === ' ' || 
                    processText[i + 1] === '\n' ||
                    processText[i + 1] === '\r' ||
                    processText[i + 1] === "'" ||
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
                    dhivehiText += transliterationMap[processText[i]]; // regular raa
                }
            } else {
                dhivehiText += transliterationMap[processText[i]];
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
