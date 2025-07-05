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
// - Commas (,) are ignored in input text
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
    { input: 'meehunaaeku', output: 'މީހުނާއެކު' },
    { input: 'meehakaaeku', output: 'މީހަކާއެކު' },
    { input: 'zeenaiytherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenayytherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenaiitherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenaitherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenaytherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'maraatheehey', output: 'މަރާތީހޭ' },
    { input: 'vaatheehey', output: 'ވާތީހޭ' },
    { input: 'neyngeyhen', output: 'ނޭންގޭހެން' },
    { input: 'thibunihenney', output: 'ތިބުނިހެންނޭ' },
    { input: 'zeenaiytheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenayytheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenaiitheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenaitheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenaytheri', output: 'ޒީނަތްތެރި' },
    { input: 'fohelaafaa', output: 'ފޮހެލާފާ' },
    { input: 'mulhihithaa', output: 'މުޅިހިތާ' },
    { input: 'zakhamuvy', output: 'ޒަޚަމުވީ' },
    { input: 'zahamuvy', output: 'ޒަޚަމުވީ' },
    { input: 'ishaaraai', output: 'އިޝާރާތް' },
    { input: 'isharaii', output: 'އިޝާރާތް' },
    { input: 'ishaaraiy', output: 'އިޝާރާތް' },
    { input: 'ishaarayy', output: 'އިޝާރާތް' },
    { input: 'neyngenee', output: 'ނޭނގެނީ' },
    { input: 'neyngeny', output: 'ނޭނގެނީ' },
    { input: 'neyngeni', output: 'ނޭނގެނީ' },
    { input: 'neyngenii', output: 'ނޭނގެނީ' },
    { input: 'vaagothah', output: 'ވާގޮތައް' },
    { input: 'zakhamvy', output: 'ޒަޚަމުވީ' },
    { input: 'zakhamvee', output: 'ޒަޚަމުވީ' },
    { input: 'zakhamvi', output: 'ޒަޚަމުވީ' },
    { input: 'zakhamvii', output: 'ޒަޚަމުވީ' },
    { input: 'zahamvy', output: 'ޒަޚަމުވީ' },
    { input: 'zahamvee', output: 'ޒަޚަމުވީ' },
    { input: 'zahamvi', output: 'ޒަޚަމުވީ' },
    { input: 'zahamvii', output: 'ޒަޚަމުވީ' },
    { input: 'meehunaa', output: 'މީހުނާ' },
    { input: 'meehakaa', output: 'މީހަކާ' },
    { input: 'meehekey', output: 'މީހެކޭ' },
    { input: 'shaairu', output: 'ޝާއިރު' },
    { input: 'furihama', output: 'ފުރިހަމަ' },
    { input: 'leyaaeku', output: 'ލެޔާއެކު' },
    { input: 'dhehithuge', output: 'ދެހިތުގެ' },
    { input: 'ruhenyaa', output: 'ރުހެންޔާ' },
    { input: 'dhevenyaa', output: 'ދެވެންޔާ' },
    { input: 'dhuniyeyge', output: 'ދުނިޔޭގެ' },
    { input: 'dhuniyege', output: 'ދުނިޔޭގެ' },
    { input: 'kulhelii', output: 'ކުޅެލީ' },
    { input: 'kulhelee', output: 'ކުޅެލީ' },
    { input: 'kulhely', output: 'ކުޅެލީ' },
    { input: 'muiythah', output: 'މުތްތައް' },
    { input: 'muithah', output: 'މުތްތައް' },
    { input: 'muyythah', output: 'މުތްތައް' },
    { input: 'bahaareh', output: 'ބަހާރެއް' },
    { input: 'bahaareyy', output: 'ބަހާރެއް' },
    { input: 'bahaareiy', output: 'ބަހާރެއް' },
    { input: 'bahaarei', output: 'ބަހާރެއް' },
    { input: 'bahaareii', output: 'ބަހާރެއް' },
    { input: 'mahithah', output: 'މަހިތައް' },
    { input: 'eyaaruge', output: 'އެވަރުގެ' },
    { input: 'shuoorun', output: 'ޝުއޫރުން' },
    { input: 'ummeedhun', output: 'އުންމީދުން' },
    { input: 'unmeedhun', output: 'އުންމީދުން' },
    { input: 'ummeedhu', output: 'އުންމީދު' },
    { input: 'unmeedhu', output: 'އުންމީދު' },
    { input: 'baddhalu', output: 'ބައްދަލު' },
    { input: 'dhelolah', output: 'ދެލޮލަށް' },
    { input: 'veymeyey', output: 'ވޭމެޔޭ' },
    { input: 'nethihey', output: 'ނެތިހޭ' },
    { input: 'ehvedhee', output: 'އެއްވެދީ' },
    { input: 'hiyyvaru', output: 'ހިތްވަރު' },
    { input: 'hiyvaru', output: 'ހިތްވަރު' },
    { input: 'hihvaru', output: 'ހިތްވަރު' },
    { input: 'loayybaa', output: 'ލޯތްބާ' },
    { input: 'loaiybaa', output: 'ލޯތްބާ' },
    { input: 'loaiibaa', output: 'ލޯތްބާ' },
    { input: 'saabahey', output: 'ސާބަހޭ' },
    { input: 'nuveyhey', output: 'ނުވޭހޭ' },
    { input: 'ohsemun', output: 'އޮއްސެމުން' },
    { input: 'ohsumun', output: 'އޮއްސުމުން' },
    { input: 'ruheynuhey', output: 'ރުހޭނުހޭ' },
    { input: 'dholhuhaas', output: 'ދޮޅުހާސް' },
    { input: 'haqeeqayy', output: 'ހަޤީގަތް' },
    { input: 'haqeeqaiy', output: 'ހަޤީގަތް' },
    { input: 'haqeeqaii', output: 'ހަޤީގަތް' },
    { input: 'haqeegayy', output: 'ހަޤީގަތް' },
    { input: 'haqeegaiy', output: 'ހަޤީގަތް' },
    { input: 'haqeegaii', output: 'ހަޤީގަތް' },
    { input: 'hageegayy', output: 'ހަޤީގަތް' },
    { input: 'hageegaiy', output: 'ހަޤީގަތް' },
    { input: 'hageegaii', output: 'ހަޤީގަތް' },
    { input: 'hageeqayy', output: 'ހަޤީގަތް' },
    { input: 'hageeqaiy', output: 'ހަޤީގަތް' },
    { input: 'hageeqaii', output: 'ހަޤީގަތް' },
    { input: 'haahekey', output: 'ހާހެކޭ' },
    { input: 'mihaaru', output: 'މިހާރު' },
    { input: 'aharen', output: 'އަހަރެން' },
    { input: 'ahuren', output: 'އަހުރެން' },
    { input: 'million', output: 'މިލިއަން' },
    { input: 'billion', output: 'ބިލިއަން' },
    { input: 'jehumah', output: 'ޖެހުމަށް' },
    { input: 'kihineii', output: 'ކިހިނެތް' },
    { input: 'kihineiy', output: 'ކިހިނެތް' },
    { input: 'kihineyy', output: 'ކިހިނެތް' },
    { input: 'kihineh', output: 'ކިހިނެތް' },
    { input: 'keheynii', output: 'ކެހޭނީ' },
    { input: 'keheynee', output: 'ކެހޭނީ' },
    { input: 'keheyny', output: 'ކެހޭނީ' },
    { input: 'keheyni', output: 'ކެހޭނީ' },
    { input: 'meehaku', output: 'މީހަކު' },
    { input: 'shaair', output: 'ޝާއިރު' },
    { input: 'meehun', output: 'މީހުން' },
    { input: 'meeheh', output: 'މީހެއް' },
    { input: 'rihumaa', output: 'ރިހުމާ' },
    { input: 'shaahee', output: 'ޝާހީ' },
    { input: 'jahany', output: 'ޖަހާނީ' },
    { input: 'jahani', output: 'ޖަހާނީ' },
    { input: 'jahanee', output: 'ޖަހާނީ' },
    { input: 'jahanii', output: 'ޖަހާނީ' },
    { input: 'zeenaiiy', output: 'ޒީނަތް' },
    { input: 'zeenayy', output: 'ޒީނަތް' },
    { input: 'zeenaii', output: 'ޒީނަތް' },
    { input: 'zeenai', output: 'ޒީނަތް' },
    { input: 'zeenay', output: 'ޒީނަތް' },
    { input: 'haaheh', output: 'ހާހެއް' },
    { input: 'innan', output: 'އިންނަން' },
    { input: 'hajjah', output: 'ހައްޖަށް' },
    { input: 'aharun', output: 'އަހަރުން' },
    { input: 'leyaai', output: 'ލެޔާއި' },
    { input: 'haas', output: 'ހާސް' },
    { input: 'euro', output: 'ޔޫރޯ' },
    { input: 'miee', output: 'މިއީ' },
    { input: 'zakham', output: 'ޒަޚަމު' },
    { input: 'gahanaa', output: 'ގަހަނާ' },
    { input: 'udhuhey', output: 'އުދުހޭ' },
    { input: 'hurihaa', output: 'ހުރިހާ' },
    { input: 'loiybaa', output: 'ލޯތްބާ' },
    { input: 'loyybaa', output: 'ލޯތްބާ' },
    { input: 'loiibaa', output: 'ލޯތްބާ' },
    { input: 'shahii', output: 'ޝާހީ' },
    { input: 'mihiyy', output: 'މިހިތް' },
    { input: 'eyaaru', output: 'އެޔާރު' },
    { input: 'saabas', output: 'ސާބަސް' },
    { input: 'veyhey', output: 'ވޭހޭ' },
    { input: 'henney', output: 'ހެންނޭ' },
    { input: 'thihih', output: 'ތިހިތް' },
    { input: 'thihiy', output: 'ތިހިތް' },
    { input: 'thihiyy', output: 'ތިހިތް' },
    { input: 'gothah', output: 'ގޮތައް' },
    { input: 'mashah', output: 'މަށަށް' },
    { input: 'kihen', output: 'ކިހެން' },
    { input: 'ahen', output: 'އަހެން' },
    { input: 'ehen', output: 'އެހެން' },
    { input: 'ihen', output: 'އިހެން' },
    { input: 'ohen', output: 'އޮހެން' },
    { input: 'uhen', output: 'އުހެން' },
    { input: 'eyhen', output: 'އޭހެން' },
    { input: 'eyhey', output: 'އޭހޭ' },
    { input: 'ahey', output: 'އަހޭ' },
    { input: 'ehey', output: 'އެހޭ' },
    { input: 'ihey', output: 'އިހޭ' },
    { input: 'ohey', output: 'އޮހޭ' },
    { input: 'uhey', output: 'އުހޭ' },
    { input: 'shahy', output: 'ޝާހީ' },
    { input: 'mihiy', output: 'މިހިތް' },
    { input: 'mihih', output: 'މިހިތް' },
    { input: 'aalam', output: 'އާލަމް' },
    { input: 'lolah', output: 'ލޮލަށް' },
    { input: 'eyaar', output: 'އެޔާރު' },
    { input: 'veyey', output: 'ވެޔޭ' },
    { input: 'leyaa', output: 'ލެޔާ' },
    { input: 'thiee', output: 'ތިއީ' },
    { input: 'ahan', output: 'އަހަން' },
    { input: 'ehah', output: 'އެހައް' },
    { input: 'ehee', output: 'އެހީ' },
    { input: 'fahe', output: 'ފަހެ' },
    { input: 'ohsi', output: 'އޮއްސި' },
    { input: 'haal', output: 'ހާލު' },
    { input: 'masthukohlaafaaneyey', output: 'މަސްތުކޮށްލާ ފާނެޔޭ' },
    { input: 'kulhadhunvantha', output: 'ކުޅަދުންވަންތަ' },
    { input: 'medhutherean', output: 'މެދުތެރޭން' },
    { input: 'enkeyolhubey', output: 'އެންކެޔޮޅުބޭ' },
    { input: 'enkeyolhube', output: 'އެންކެޔޮޅުބެ' },
    { input: 'dhirihurihaa', output: 'ދިރިހުރިހާ' },
    { input: 'ihusaasveemaa', output: 'އިހުސާސްވީމާ' },
    { input: 'kuranvvyy', output: 'ކުރަންވީ' },
    { input: 'kuranvvy', output: 'ކުރަންވީ' },
    { input: 'kuranvyy', output: 'ކުރަންވީ' },
    { input: 'kuranvvii', output: 'ކުރަންވީ' },
    { input: 'kuranvvee', output: 'ކުރަންވީ' },
    { input: 'kuranvee', output: 'ކުރަންވީ' },
    { input: 'kuranvvi', output: 'ކުރަންވީ' },
    { input: 'kuranvy', output: 'ކުރަންވީ' },
    { input: 'kuranvi', output: 'ކުރަންވީ' },
    { input: 'furanvvyy', output: 'ފުރަންވީ' },
    { input: 'furanvvy', output: 'ފުރަންވީ' },
    { input: 'furanvyy', output: 'ފުރަންވީ' },
    { input: 'furanvvii', output: 'ފުރަންވީ' },
    { input: 'furanvvee', output: 'ފުރަންވީ' },
    { input: 'furanvee', output: 'ފުރަންވީ' },
    { input: 'furanvvi', output: 'ފުރަންވީ' },
    { input: 'furanvy', output: 'ފުރަންވީ' },
    { input: 'furanvi', output: 'ފުރަންވީ' },
    { input: 'halheylyy', output: 'ހަޅޭލީ' },
    { input: 'halheylii', output: 'ހަޅޭލީ' },
    { input: 'halheylee', output: 'ހަޅޭލީ' },
    { input: 'halheyly', output: 'ހަޅޭލީ' },
    { input: 'jahaalyy', output: 'ޖަހާލީ' },
    { input: 'jahaalii', output: 'ޖަހާލީ' },
    { input: 'jahaalee', output: 'ޖަހާލީ' },
    { input: 'jahaaly', output: 'ޖަހާލީ' },
    { input: 'keyolhubey', output: 'ކެޔޮޅުބޭ' },
    { input: 'keyolhube', output: 'ކެޔޮޅުބެ' },
    { input: 'oiygoiyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oyygoiyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oyygoyyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oiygoyyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'dheynveebaa', output: 'ދޭންވީބާ' },
    { input: 'nuruhihjeyey', output: 'ނުރުހިއްޖެޔޭ' },
    { input: 'fenijjeyey', output: 'ފެނިއްޖެޔޭ' },
    { input: 'neyngeyneyey', output: 'ނޭންގޭނެޔޭ' },
    { input: 'nuveveyneyey', output: 'ނުވެވޭނެޔޭ' },
    { input: 'dhaagoiyvey', output: 'ދާގޮތްވޭ' },
    { input: 'hureveynehey', output: 'ހުރެވޭނެހޭ' },
    { input: 'kuruvaifiyey', output: 'ކުރުވައިފިޔޭ' },
    { input: 'dhirihuri', output: 'ދިރިހުރި' },
    { input: 'vaahithun', output: 'ވާހިތުން' },
    { input: 'mihithuge', output: 'މިހިތުގެ' },
    { input: 'ihusaasvee', output: 'އިހުސާސްވީ' },
    { input: 'vaagoiyvey', output: 'ވާގޮތްވޭ' },
    { input: 'dhehithugaa', output: 'ދެހިތުގާ' },
    { input: 'fathihashi', output: 'ފަތިހަށި' },
    { input: 'hiyaalugaa', output: 'ހިޔާލުގާ' },
    { input: 'dhehithuga', output: 'ދެހިތުގަ' },
    { input: 'hedhihuri', output: 'ހެދިހުރި' },
    { input: 'edhihuri', output: 'އެދިހުރި' },
    { input: 'jehilunve', output: 'ޖެހިލުންވެ' },
    { input: 'libihuri', output: 'ލިބިހުރި' },
    { input: 'vaagoiyve', output: 'ވާގޮތްވެ' },
    { input: 'handhaaey', output: 'ހަނދާއޭ' },
    { input: 'reethihaa', output: 'ރީތިހާ' },
    { input: 'nerenyy', output: 'ނެރެނީ' },
    { input: 'nereny', output: 'ނެރެނީ' },
    { input: 'alhanyy', output: 'އަޅަނީ' },
    { input: 'alhany', output: 'އަޅަނީ' },
    { input: 'keyolhaa', output: 'ކެޔޮޅާ' },
    { input: 'keyolhu', output: 'ކެޔޮޅު' },
    { input: 'fathihu', output: 'ފަތިހު' },
    { input: 'loaiyhbey', output: 'ލޯތްބޭ' },
    { input: 'kiivvehey', output: 'ކީއްވެހޭ' },
    { input: 'keehvehey', output: 'ކީއްވެހޭ' },
    { input: 'nuruhihje', output: 'ނުރުހިއްޖެ' },
    { input: 'roa lumun', output: 'ރޯލުމުން' },
    { input: 'roa lumum', output: 'ރޯލުމުން' },
    { input: 'haadhahaa', output: 'ހާދަހާ' },
    { input: 'ihusaas', output: 'އިހުސާސް' },
    { input: 'goiyvey', output: 'ގޮތްވޭ' },
    { input: 'janbekey', output: 'ޖަންބެކޭ' },
    { input: 'janbeke', output: 'ޖަންބެކެ' },
    { input: 'vaagoiy', output: 'ވާގޮތް' },
    { input: 'oiygoiy', output: 'އޮތްގޮތް' },
    { input: 'oiygoyy', output: 'އޮތްގޮތް' },
    { input: 'oyygoiy', output: 'އޮތްގޮތް' },
    { input: 'oyygoyy', output: 'އޮތްގޮތް' },
    { input: 'raahathu', output: 'ރާހަތު' },
    { input: 'raahath', output: 'ރާހަތު' },
    { input: 'feneyey', output: 'ފެނެޔޭ' },
    { input: 'handhaa', output: 'ހަނދާ' },
    { input: 'ehindhun', output: 'އެހިނދުން' },
    { input: 'shakuvaa', output: 'ޝަކުވާ' },
    { input: 'kaakuhey', output: 'ކާކުހޭ' },
    { input: 'kiiwehey', output: 'ކީއްވެހޭ' },
    { input: 'roalumun', output: 'ރޯލުމުން' },
    { input: 'roalumum', output: 'ރޯލުމުން' },
    { input: 'raahayy', output: 'ރާހަތް' },
    { input: 'raahaiy', output: 'ރާހަތް' },
    { input: 'handhu', output: 'ހަނދު' },
    { input: 'feney', output: 'ފެނޭ' },
    { input: 'janbu', output: 'ޖަންބު' },
    { input: 'asarrr', output: 'އަސަރު' },
    { input: 'beehen', output: 'ބީހެން' },
    { input: 'edheny', output: 'އެދެނީ' },
    { input: 'asarr', output: 'އަސަރު' },
    { input: 'asaru', output: 'އަސަރު' },
    { input: 'igraar', output: 'އިގުރާރު' },
    { input: 'kiyaa', output: 'ކިޔާ' },
    { input: 'jahaa', output: 'ޖަހާ' },
    { input: 'yagyn', output: 'ޔަގީން' },
    { input: 'kihaa', output: 'ކިހާ' },
    { input: 'ruhey', output: 'ރުހޭ' },
    { input: 'mihen', output: 'މިހެން' },
    { input: 'mahah', output: 'މަހަށް' },
    { input: 'adah', output: 'އަޑަށް' },
    { input: 'goyy', output: 'ގޮތް' },
    { input: 'goiy', output: 'ގޮތް' },
    { input: 'goih', output: 'ގޮތް' },
    { input: 'hiyy', output: 'ހިތް' },
    { input: 'hiyh', output: 'ހިތް' },
    { input: 'lhen', output: 'ޅެން' },
    { input: 'enn', output: 'އެން' },
    { input: 'en', output: 'އެން' },
    { input: 'dhon', output: 'ދޮން' },
    { input: 'rooh', output: 'ރޫހު' },
    { input: 'ishq', output: 'އިޝްޤު' },
    { input: 'javaahirahves', output: 'ޖަވާހިރައްވެސް' },
    { input: 'javaahirah', output: 'ޖަވާހިރަށް' },
    { input: 'javaahiruge', output: 'ޖަވާހިރުގެ' },
    { input: 'fahathugaaa', output: 'ފަހަތުގާ' },
    { input: 'fahathugaa', output: 'ފަހަތުގާ' },
    { input: 'javaahiru', output: 'ޖަވާހިރު' },
    { input: 'javaahir', output: 'ޖަވާހިރު' },
    { input: 'fahathun', output: 'ފަހަތުން' },
    { input: 'lwbyge', output: 'ލޯބީގެ' },
    { input: 'fahathu', output: 'ފަހަތު' },
    { input: 'lwbin', output: 'ލޯބިން' },
    { input: 'fahayy', output: 'ފަހަތް' },
    { input: 'fahaiy', output: 'ފަހަތް' },
    { input: 'fahaii', output: 'ފަހަތް' },
    { input: 'lwbi', output: 'ލޯބި' },
    { input: 'asar', output: 'އަސަރު' },
    { input: 'goyy', output: 'ގޮތް' },
    { input: 'goii', output: 'ގޮތް' },
    { input: 'gioy', output: 'ގޮތް' },
    { input: 'loa', output: 'ލޯ' },
    { input: 'ehy', output: 'އެހީ' },
    { input: 'goy', output: 'ގޮތް' },
    { input: 'lo', output: 'ލޯ' },
    { input: 'hih', output: 'ހިތް' },
    { input: 'kerihure', output: 'ކެރިހުރެ' },
    { input: 'bahaarekey', output: 'ބަހާރެކޭ' },
    { input: 'bahaarun', output: 'ބަހާރުން' },
    { input: 'bahaaru', output: 'ބަހާރު' },
    { input: 'bahaar', output: 'ބަހާރު' },
    { input: 'dhivehi', output: 'ދިވެހި' },
    { input: 'raajje', output: 'ރާއްޖެ' },
    { input: 'rajje', output: 'ރާއްޖެ' },
    { input: 'raahje', output: 'ރާއްޖެ' },
    { input: 'rahje', output: 'ރާއްޖެ' },
    { input: 'rihiveli', output: 'ރިހިވެލި' },
    { input: 'fekikan', output: 'ފެހިކަން' },
    { input: 'fehikula', output: 'ފެހިކުލަ' },
    { input: 'fehi', output: 'ފެހި' },
    { input: 'hurumah', output: 'ހުރުމަށް' },
    { input: 'shabaabugaa', output: 'ޝަބާބުގާ' },
    { input: 'shabaabuga', output: 'ޝަބާބުގަ' },
    { input: 'shabaabun', output: 'ޝަބާބުން' },
    { input: 'shabunam', output: 'ޝަބުނަމު' },
    { input: 'shabaab', output: 'ޝަބާބު' },
    { input: 'shabaabu', output: 'ޝަބާބު' },
    { input: 'nuhurumah', output: 'ނުހުރުމަށް' },
    { input: 'nishaanuga', output: 'ނިޝާނުގަ' },
    { input: 'nishaanga', output: 'ނިޝާނުގަ' },
    { input: 'nishaanun', output: 'ނިޝާނުން' },
    { input: 'nishaanaa', output: 'ނިޝާނާ' },
    { input: 'nishan', output: 'ނިޝާން' },
    { input: 'vaheh', output: 'ވަހެއް' },
    { input: 'roohudhey', output: 'ރޫހުދޭ' },
    { input: 'roohdhey', output: 'ރޫހުދޭ' },
    { input: 'aashiqeegaa', output: 'އާޝިޤީގާ' },
    { input: 'aashiqygaa', output: 'އާޝިޤީގާ' },
    { input: 'aashiqigaa', output: 'އާޝިޤީގާ' },
    { input: 'aashiqiigaa', output: 'އާޝިޤީގާ' },
    { input: 'aashiqiygaa', output: 'އާޝިޤީގާ' },
    { input: 'ashiqeegaa', output: 'އާޝިޤީގާ' },
    { input: 'ashiqygaa', output: 'އާޝިޤީގާ' },
    { input: 'ashiqigaa', output: 'އާޝިޤީގާ' },
    { input: 'ashiqiigaa', output: 'އާޝިޤީގާ' },
    { input: 'ashiqiygaa', output: 'އާޝިޤީގާ' },
    { input: 'zindhageegaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhagygaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhagigaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhagiigaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhagiygaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhaqeegaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhaqygaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhaqigaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhaqiigaa', output: 'ޒިންދަގީގާ' },
    { input: 'zindhaqiygaa', output: 'ޒިންދަގީގާ' },
    { input: 'aashiqeega', output: 'އާޝިޤީގަ' },
    { input: 'aashiqyga', output: 'އާޝިޤީގަ' },
    { input: 'aashiqiga', output: 'އާޝިޤީގަ' },
    { input: 'aashiqiiga', output: 'އާޝިޤީގަ' },
    { input: 'aashiqiyga', output: 'އާޝިޤީގަ' },
    { input: 'ashiqeega', output: 'އާޝިޤީގަ' },
    { input: 'ashiqyga', output: 'އާޝިޤީގަ' },
    { input: 'ashiqiga', output: 'އާޝިޤީގަ' },
    { input: 'ashiqiiga', output: 'އާޝިޤީގަ' },
    { input: 'ashiqiyga', output: 'އާޝިޤީގަ' },
    { input: 'zindhageega', output: 'ޒިންދަގީގަ' },
    { input: 'zindhagyga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhagiga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhagiiga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhagiyga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhaqeega', output: 'ޒިންދަގީގަ' },
    { input: 'zindhaqyga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhaqiga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhaqiiga', output: 'ޒިންދަގީގަ' },
    { input: 'zindhaqiyga', output: 'ޒިންދަގީގަ' },
    { input: 'roohdhee', output: 'ރޫހުދީ' },
    { input: 'roohdhy', output: 'ރޫހުދީ' },
    { input: 'roohdhii', output: 'ރޫހުދީ' },
    { input: 'roohdhi', output: 'ރޫހުދީ' },
    { input: 'roohudhii', output: 'ރޫހުދީ' },
    { input: 'roohudhi', output: 'ރޫހުދީ' },
    { input: 'roohudhiy', output: 'ރޫހުދީ' },
    { input: 'aashiqee', output: 'އާޝިޤީ' },
    { input: 'aashiqy', output: 'އާޝިޤީ' },
    { input: 'aashiqi', output: 'އާޝިޤީ' },
    { input: 'aashiqii', output: 'އާޝިޤީ' },
    { input: 'aashiqiy', output: 'އާޝިޤީ' },
    { input: 'zindhagee', output: 'ޒިންދަގީ' },
    { input: 'zindhagy', output: 'ޒިންދަގީ' },
    { input: 'zindhagi', output: 'ޒިންދަގީ' },
    { input: 'zindhagii', output: 'ޒިންދަގީ' },
    { input: 'zindhagiy', output: 'ޒިންދަގީ' },
    { input: 'handhaanunney', output: 'ހަނދާނުންނޭ' },
    { input: 'handhaanuney', output: 'ހަނދާނުނޭ' },
    { input: 'handhaanvey', output: 'ހަނދާންވޭ' },
    { input: 'handhaanun', output: 'ހަނދާނުން' },
    { input: 'handhaaney', output: 'ހަނދާނޭ' },
    { input: 'vedhaane', output: 'ވެދާނެ' },
    { input: 'farihi', output: 'ފަރިހި' },
    { input: 'handhaan', output: 'ހަނދާން' },
    { input: 'bahaarugaa', output: 'ބަހާރުގާ' },
    { input: 'suhaanaa', output: 'ސުހާނާ' },
    { input: 'ah', output: 'އަށް' },
    { input: 'eyy', output: 'އޭ' }
];

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
    
    // Convert to lowercase and remove all apostrophes and periods completely
    let processText = latinText.toLowerCase().replace(/['.]/g, '');
    
    let dhivehiText = '';
    let i = 0;
    
    while (i < processText.length) {
        let matched = false;
        
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
        
        // Skip spaces, line breaks, punctuation, asterisks, commas, numbers, and #
        if (processText[i] === ' ' || processText[i] === '\n' || processText[i] === '\r' || /[.,!?;:]/.test(processText[i]) || processText[i] === '*' || processText[i] === ',' || /[0-9]/.test(processText[i]) || processText[i] === '#') {
            // Skip asterisks, commas, numbers, and # entirely, but include other characters
            if (processText[i] !== '*' && processText[i] !== ',' && !/[0-9]/.test(processText[i]) && processText[i] !== '#') {
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
                        charBefore !== '\r' && charBefore !== '*' && 
                        charBefore !== ',' && charBefore !== '#' && !/[0-9]/.test(charBefore) && !/[.,!?;:]/.test(charBefore)) {
                        isWholeWord = false;
                    }
                }
                
                // Check character after (should be word boundary or end of string)
                if (isWholeWord && i + specialCase.input.length < processText.length) {
                    const charAfter = processText[i + specialCase.input.length];
                    if (charAfter !== ' ' && charAfter !== '\t' && charAfter !== '\n' && 
                        charAfter !== '\r' && charAfter !== '*' && 
                        charAfter !== ',' && charAfter !== '#' && !/[0-9]/.test(charAfter) && !/[.,!?;:]/.test(charAfter)) {
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
        
        // Special case: "hus noonu" patterns - n without sukun in specific combinations
        const husNoonuPatterns = [
            // 7-letter patterns
            { pattern: 'lhindhu', output: 'ޅިނދު', length: 7 },
            
            // 6-letter patterns
            { pattern: 'dhandu', output: 'ދަނޑު', length: 6 },
            { pattern: 'dhanbu', output: 'ދަނބު', length: 6 },
            { pattern: 'dhandi', output: 'ދަނޑި', length: 6 },
            { pattern: 'thandi', output: 'ތަނޑި', length: 6 },
            { pattern: 'thundi', output: 'ތުނޑި', length: 6 },
            { pattern: 'thundu', output: 'ތުނޑު', length: 6 },
            { pattern: 'thanbu', output: 'ތަނބު', length: 6 },
            { pattern: 'kandhi', output: 'ކަނދި', length: 6 },
            { pattern: 'bandhi', output: 'ބަނދި', length: 6 },
            { pattern: 'handhi', output: 'ހަނދި', length: 6 },
            { pattern: 'handhu', output: 'ހަނދު', length: 6 },
            { pattern: 'handha', output: 'ހަނދަ', length: 6 },
            { pattern: 'sandhu', output: 'ސަނދު', length: 6 },
            { pattern: 'kandhu', output: 'ކަނދު', length: 6 },
            { pattern: 'hindhu', output: 'ހިނދު', length: 6 },
            { pattern: 'rindhu', output: 'ރިނދު', length: 6 },
            { pattern: 'bindhu', output: 'ބިނދު', length: 6 },
            { pattern: 'findhu', output: 'ފިނދު', length: 6 },
            { pattern: 'hingaa', output: 'ހިނގާ', length: 6 },
            { pattern: 'gandeh', output: 'ގަނޑެއް', length: 6 },
            
            // 5-letter patterns
            { pattern: 'kandu', output: 'ކަނޑު', length: 5 },
            { pattern: 'fandu', output: 'ފަނޑު', length: 5 },
            { pattern: 'landu', output: 'ލަނޑު', length: 5 },
            { pattern: 'bandu', output: 'ބަނޑު', length: 5 },
            { pattern: 'gandu', output: 'ގަނޑު', length: 5 },
            { pattern: 'gondu', output: 'ގޮނޑު', length: 5 },
            { pattern: 'ganda', output: 'ގަނޑަ', length: 5 },
            { pattern: 'randu', output: 'ރަނޑު', length: 5 },
            { pattern: 'kanbu', output: 'ކަނބު', length: 5 },
            { pattern: 'banbu', output: 'ބަނބު', length: 5 },
            { pattern: 'fanbu', output: 'ފަނބު', length: 5 },
            { pattern: 'bandi', output: 'ބަނޑި', length: 5 },
            { pattern: 'kandi', output: 'ކަނޑި', length: 5 },
            { pattern: 'hinga', output: 'ހިނގަ', length: 5 },
            { pattern: 'engey', output: 'އެނގޭ', length: 5 },
            { pattern: 'ingey', output: 'އިނގޭ', length: 5 },
            
            // 4-letter patterns
            { pattern: 'anbu', output: 'އަނބު', length: 4 }
        ];
        
        for (let husPattern of husNoonuPatterns) {
            if (processText.substring(i, i + husPattern.pattern.length) === husPattern.pattern) {
                dhivehiText += husPattern.output;
                i += husPattern.pattern.length;
                matched = true;
                break;
            }
        }
        
        if (matched) continue;
        
        // Now check for regular multi-character consonants (sh, th, dh, etc.)
        for (let len = 3; len >= 2; len--) {
            if (i + len <= processText.length) {
                let substring = processText.substring(i, i + len);
                if (transliterationMap[substring]) {
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
                            dhivehiText += transliterationMap[substring]; // regular seenu
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
            
            i += skipLength; // Use skipLength instead of vowelSound.length
            matched = true;
            continue;
        }
        
        // Check single character consonants
        if (transliterationMap[processText[i]]) {
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
                    dhivehiText += transliterationMap[processText[i]]; // regular seenu
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
                
                if (isEndOfWord || isFollowedByConsonant) {
                    dhivehiText += 'ން'; // sukun + nun when at end of word or followed by consonant
                } else {
                    dhivehiText += transliterationMap[processText[i]]; // regular nun when followed by vowel
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
                    dhivehiText += transliterationMap[processText[i]]; // regular raa
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
                
                if (isEndOfWord || isFollowedByConsonant) {
                    dhivehiText += 'މް'; // meem + sukun when at end of word or followed by consonant (no vowel)
                } else {
                    dhivehiText += transliterationMap[processText[i]]; // regular meem when followed by vowel
                }
            }
            else {
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
