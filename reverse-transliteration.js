// Reverse transliteration map (Thaana to Latin)
const reverseTransliterationMap = {
    'ހ': 'h', 'ށ': 'sh', 'ނ': 'n', 'ރ': 'r', 'ބ': 'b', 'ޅ': 'lh', 'ކ': 'k',
    'ވ': 'v', 'މ': 'm', 'ފ': 'f', 'ދ': 'dh', 'ތ': 'th', 'ލ': 'l',
    'ގ': 'g', 'ޏ': 'gn', 'ސ': 's', 'ޑ': 'd', 'ޒ': 'z', 'ޓ': 'tt', 'ޔ': 'y',
    'ޕ': 'p', 'ޖ': 'j', 'ޗ': 'ch', 'ޝ': 'sh', 'ޙ': 'hh', 'ޚ': 'kh',
    'ޤ': 'q', 'ޣ': 'gh', 'ޒ': 'zh'
};

// Reverse vowel diacritics map
const reverseVowelDiacritics = {
    'ަ': 'a', 'ާ': 'aa', 'ި': 'i', 'ީ': 'ee', 'ު': 'u', 'ޫ': 'oo',
    'ެ': 'e', 'ޭ': 'ey', 'ޮ': 'o', 'ޯ': 'oa'
};

// Special Dhivehi characters
const specialChars = {
    'ް': '', // sukun (silent)
    'ށް': 'h', // shaviyani with sukun
    'ން': 'n', // noonu with sukun
    'ރް': 'r', // raa with sukun
    'މް': 'm', // meemu with sukun
    'ތް': 'yy', // thaalu with sukun
    'ސް': 's', // seenu with sukun
    'ލް': 'l', // laamu with sukun
    'ކް': 'k', // kaafu with sukun
    'ގް': 'g', // gaafu with sukun
    'ވް': 'v', // vaavu with sukun
    'ފް': 'f', // faafu with sukun
    'ދް': 'dh', // dhaalu with sukun
    'ބް': 'b', // baahu with sukun
    'ޅް': 'lh', // lhaviyani with sukun
    'ޖް': 'j', // javiyani with sukun
    'ޗް': 'ch', // chaviyani with sukun
    'ޔް': 'y', // yaa with sukun
    'ޕް': 'p', // paviyani with sukun
    'ޑް': 'd', // daviyani with sukun
    'ޓް': 'tt', // ttaalu with sukun
    'ޒް': 'z', // zaviyani with sukun
    'ޏް': 'gn', // gnaviyani with sukun
    'ޙް': 'hh', // hhaa with sukun
    'ޚް': 'kh', // khaa with sukun
    'ޤް': 'q', // qaafu with sukun
    'ޣް': 'gh'  // ghain with sukun
};

// Dhivehi numbers to English
const dhivehiNumbers = {
    '߀': '0', '߁': '1', '߂': '2', '߃': '3', '߄': '4',
    '߅': '5', '߆': '6', '߇': '7', '߈': '8', '߉': '9'
};

// Reverse special cases mapping - most common Thaana to Latin special cases
const reverseSpecialCases = [
    { input: 'މަސްތުކޮށްލާ ފާނެޔޭ', output: 'masthukohlaafaaneyey' },
    { input: 'ތަކަހޮޅިތައް', output: 'thakaholhithah' },
    { input: 'ނިމިހިނގައިދާނޭ', output: 'nimihingaidhaaney' },
    { input: 'ކުޅަދުންވަންތަ', output: 'kulhadhunvantha' },
    { input: 'ޒީނަތްތެރިކަން', output: 'zeenaitherikan' },
    { input: 'ވާދުވަހުންކޭ', output: 'vaadhuvahunkey' },
    { input: 'ތިބުނިހެންނޭ', output: 'thibunihenney' },
    { input: 'ނިންމާފާނެޔޮ', output: 'ninmaafaaneyo' },
    { input: 'ނުހޮރުއްޕާނޭ', output: 'nuhuruhpaaney' },
    { input: 'ނޮހޮރޮއްޕާނޭ', output: 'nohorohpaaney' },
    { input: 'އިސްތަށިގަނޑު', output: 'ishthashigandu' },
    { input: 'ހަނދާނުންނޭ', output: 'handhaanunney' },
    { input: 'ޖަވާހިރައްވެސް', output: 'javaahirahves' },
    { input: 'ޒިންދަގީގާ', output: 'zindhageegaa' },
    { input: 'މެދުތެރޭން', output: 'medhutherean' },
    { input: 'އެންކެޔޮޅުބޭ', output: 'enkeyolhubey' },
    { input: 'ދިރިހުރިހާ', output: 'dhirihurihaa' },
    { input: 'ރަށުތެރެއަށް', output: 'rashuthereah' },
    { input: 'އިހުސާސްވީމާ', output: 'ihusaasveemaa' },
    { input: 'ނުރުހިއްޖެޔޭ', output: 'nuruhihjeyey' },
    { input: 'ނޭންގޭނެޔޭ', output: 'neyngeyneyey' },
    { input: 'ނުވެވޭނެޔޭ', output: 'nuveveyneyey' },
    { input: 'ހުރެވޭނެހޭ', output: 'hureveynehey' },
    { input: 'ކުރުވައިފިޔޭ', output: 'kuruvaifiyey' },
    { input: 'އިހުސާސްތަކޭ', output: 'ihusaasthakey' },
    { input: 'ދުޝްމިނުންނާ', output: 'dhushminunnaa' },
    { input: 'ދުޝްމިނުންނޭ', output: 'dhushminunney' },
    { input: 'ހަނދާނުނޭ', output: 'handhaanuney' },
    { input: 'ހަނދާންވޭ', output: 'handhaanvey' },
    { input: 'ދާގޮތްވޭ', output: 'dhaagoiyvey' },
    { input: 'ވާދުވަހެކޭ', output: 'vaadhuvahekey' },
    { input: 'ވާދުވަސްތައް', output: 'vaadhuvasthah' },
    { input: 'މަރާތީހޭ', output: 'maraatheehey' },
    { input: 'ދުޝްމިނަކާ', output: 'dhushminakaa' },
    { input: 'ވާދުވަހަކީ', output: 'vaadhuvahaky' },
    { input: 'އިހުސާހަކީ', output: 'ihusaahakii' },
    { input: 'އިހުސާހެކޭ', output: 'ihusaahekey' },
    { input: 'އިހުސާސްތައް', output: 'ihusaasthah' },
    { input: 'ތިހިރީތި', output: 'thihireethi' },
    { input: 'ތިހުރީތި', output: 'thihureethi' },
    { input: 'ނޭންގޭހެން', output: 'neyngeyhen' },
    { input: 'ހެން', output: 'hen' },
    { input: 'ހޭ', output: 'hey' },
    { input: 'ނަ', output: 'na' },
    { input: 'ނެޔޭ', output: 'neyey' },
    { input: 'ޖެހޭ', output: 'jehey' },
    { input: 'ޖެޔޭ', output: 'jeyey' },
    { input: 'ނުވާ', output: 'nuvaa' },
    { input: 'ޖެހިއްޖޭ', output: 'jehihjey' },
    { input: 'ންނުވާ', output: 'nnuvaa' }
];

// Main reverse transliteration function
function reverseTransliterate(dhivehiText) {
    if (!dhivehiText || dhivehiText.trim() === '') {
        return '';
    }

    let result = dhivehiText;
    
    // First, handle special cases
    for (const specialCase of reverseSpecialCases) {
        const regex = new RegExp(specialCase.input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        result = result.replace(regex, specialCase.output);
    }
    
    // Now process character by character for remaining text
    let finalResult = '';
    let i = 0;
    
    while (i < result.length) {
        const char = result[i];
        const nextChar = i + 1 < result.length ? result[i + 1] : '';
        const twoChar = char + nextChar;
        
        // Check for numbers first
        if (dhivehiNumbers[char]) {
            finalResult += dhivehiNumbers[char];
            i++;
            continue;
        }
        
        // Check for consonant + sukun combinations
        if (specialChars[twoChar]) {
            finalResult += specialChars[twoChar];
            i += 2;
            continue;
        }
        
        // Check for standalone sukun
        if (char === 'ް') {
            // Skip sukun when standalone
            i++;
            continue;
        }
        
        // Check for consonant + vowel diacritic
        if (reverseTransliterationMap[char] && reverseVowelDiacritics[nextChar]) {
            finalResult += reverseTransliterationMap[char] + reverseVowelDiacritics[nextChar];
            i += 2;
            continue;
        }
        
        // Check for standalone consonants
        if (reverseTransliterationMap[char]) {
            finalResult += reverseTransliterationMap[char];
            // Add default 'a' vowel for standalone consonants (except at end of word)
            if (i + 1 < result.length && 
                result[i + 1] !== ' ' && 
                result[i + 1] !== '\n' && 
                result[i + 1] !== '\t' &&
                !reverseVowelDiacritics[result[i + 1]] &&
                result[i + 1] !== 'ް') {
                finalResult += 'a';
            }
            i++;
            continue;
        }
        
        // Check for vowel diacritics (shouldn't happen in normal text, but just in case)
        if (reverseVowelDiacritics[char]) {
            finalResult += reverseVowelDiacritics[char];
            i++;
            continue;
        }
        
        // Check for Alif (އ) + vowel combinations
        if (char === 'އ' && reverseVowelDiacritics[nextChar]) {
            finalResult += reverseVowelDiacritics[nextChar];
            i += 2;
            continue;
        }
        
        // Handle standalone Alif
        if (char === 'އ') {
            finalResult += 'a'; // Default vowel for standalone alif
            i++;
            continue;
        }
        
        // Handle spaces, punctuation, and other characters
        if (char === ' ' || char === '\n' || char === '\t' || char === ',' || char === '.' || char === '!' || char === '?') {
            finalResult += char;
            i++;
            continue;
        }
        
        // Unknown character - just copy it
        finalResult += char;
        i++;
    }
    
    return finalResult;
}

// Dhivehi input transliteration feature
function transliterateToThaana(text) {
    const map = {
        'A': 'ާ', 'B': 'ޞ', 'C': 'ޝ', 'D': 'ޑ', 'E': 'ޭ', 'F': 'ﷲ', 'G': 'ޣ', 'H': 'ޙ', 'I': 'ީ', 'J': 'ޛ', 'K': 'ޚ', 'L': 'ޅ', 'M': 'ޟ', 'N': 'ޏ', 'O': 'ޯ', 'P': '÷', 'Q': 'ޤ', 'R': 'ޜ', 'S': 'ށ', 'T': 'ޓ', 'U': 'ޫ', 'V': 'ޥ', 'W': 'ޢ', 'X': 'ޘ', 'Y': 'ޠ', 'Z': 'ޡ',
        'a': 'ަ', 'b': 'ބ', 'c': 'ޗ', 'd': 'ދ', 'e': 'ެ', 'f': 'ފ', 'g': 'ގ', 'h': 'ހ', 'i': 'ި', 'j': 'ޖ', 'k': 'ކ', 'l': 'ލ', 'm': 'މ', 'n': 'ނ', 'o': 'ޮ', 'p': 'ޕ', 'q': 'ް', 'r': 'ރ', 's': 'ސ', 't': 'ތ', 'u': 'ު', 'v': 'ވ', 'w': 'އ', 'x': '×', 'y': 'ޔ', 'z': 'ޒ',
        '0': '߀', '1': '߁', '2': '߂', '3': '߃', '4': '߄', '5': '߅', '6': '߆', '7': '߇', '8': '߈', '9': '߉'
    };
    
    let thaana = text.split('').map(ch => map[ch] || ch).join('');
    
    // Remove forbidden Thaana characters if directly after any forbidden
    const forbidden = ['ާ','ަ','ް','ޭ','ެ','ޯ','ޮ','ީ','ި','ޫ','ު'];
    let result = '';
    for (let i = 0; i < thaana.length; i++) {
        if (forbidden.includes(thaana[i]) && i > 0 && forbidden.includes(thaana[i-1])) {
            continue; // Skip this forbidden character
        }
        result += thaana[i];
    }
    return result;
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        reverseTransliterate,
        transliterateToThaana,
        reverseTransliterationMap,
        reverseVowelDiacritics,
        specialChars,
        dhivehiNumbers,
        reverseSpecialCases
    };
} else {
    // For browser usage, attach to global scope
    window.reverseTransliterate = reverseTransliterate;
    window.transliterateToThaana = transliterateToThaana;
}
