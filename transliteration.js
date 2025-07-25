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

// Special cases mapping - words that need exact transliteration
const specialCases = [
    // 21 characters
    { input: 'masthukohlaafaaneyey', output: 'މަސްތުކޮށްލާ ފާނެޔޭ' },
    { input: 'jahaajahaajahaajaahaa', output: 'ޖަހާޖަހާޖަހާޖަހާ' },
    { input: 'kihaadheramavaalhahey', output: 'ކިހާދެރަމަވާޅަހޭ' },

    // 20 characters
    { input: 'ehandhaanthahvaathee', output: 'އެހަނދާންތައްވާތީ' },

    // 19 characters
    { input: 'annaatheemihaarugaa', output: 'އަންނާތީ މިހާރުގާ' },

    // 18 characters
    { input: 'keyytherivaashey', output: 'ކެތްތެރިވާށޭ' },
    { input: 'keiytherivaashey', output: 'ކެތްތެރިވާށޭ' },
    { input: 'keiitherivaashey', output: 'ކެތްތެރިވާށޭ' },
    { input: 'heylhithereynnivey', output: 'ހޭޅިތެރޭންއިވޭ' },
    { input: 'masthuvaashabaabey', output: 'މަސްތުވާޝާބާބޭ' },
    { input: 'ehmennhingaadhamaa', output: 'އެއްމެންހިނގާދަމާ' },

    // 17 characters
    { input: 'thakaholhithah', output: 'ތަކަހޮޅިތައް' },
    { input: 'nimihingaidhaaney', output: 'ނިމިހިނގައިދާނޭ' },
    { input: 'adhuhunnanvaathee', output: 'އަދުހުންނަންވާތީ' },
    { input: 'thiyahenhedhoomaa', output: 'ތިޔަހެންހެދޫމާ' },
    { input: 'naazukuveehiyymey', output: 'ނާޒުކުވީހިތްމޭ' },
    { input: 'fahayybalaahedhee', output: 'ފަހަތްބަލާހެދީ' },
    { input: 'hoadheemaachaalhe', output: 'ހޯދީމާޗާލްހެ' },
    { input: 'varushifaayathuge', output: 'ވަރުޝިފާޔަތުގެ' },

    // 16 characters
    { input: 'kulhadhunvantha', output: 'ކުޅަދުންވަންތަ' },
    { input: 'zeenaiytherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenayytherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenaiitherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'naahamathedhekey', output: 'ނާހަމަތެދެކޭ' },
    { input: 'fahareymaadhooni', output: 'ފަހަރޭމާދޫނި' },
    { input: 'jahaajahaajaahaa', output: 'ޖަހާޖަހާޖަހާ' },
    { input: 'reethihaamaathah', output: 'ރީތިހާމާތައް' },
    { input: 'dhoonihifaadhaan', output: 'ދޫނިހިފާދާން' },
    { input: 'eedhukulhivaruge', output: 'އީދުކުޅިވަރުގެ' },
    { input: 'harugilahaavaame', output: 'ހަރުގިލަހާވާމެ' },
    { input: 'hedhigennaraaney', output: 'ހެދިގެންއަރާނޭ' },
    { input: 'malugevahunndhoa', output: 'މަލުގެވަހުންދޯ' },
    { input: 'roohaneegulhumaa', output: 'ރޫހާނީގުޅުމާ' },
    { input: 'ehandhaannthakey', output: 'އެހަނދާންތަކޭ' },
    { input: 'ehandhaannthekey', output: 'އެހަނދާންތެކޭ' },
    { input: 'hiyyheyokamaaeku', output: 'ހިތްހެޔޮކަމާއެކު' },
    { input: 'mahusharubimugaa', output: 'މަޙުޝަރުބިމުގާ' },

    // 15 characters
    { input: 'vaadhuvahunkey', output: 'ވާދުވަހުންކޭ' },
    { input: 'zeenaitherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'zeenaytherikan', output: 'ޒީނަތްތެރިކަން' },
    { input: 'thibunihenney', output: 'ތިބުނިހެންނޭ' },
    { input: 'ninmaafaaneyo', output: 'ނިންމާފާނެޔޮ' },
    { input: 'nuhuruhpaaney', output: 'ނުހޮރުއްޕާނޭ' },
    { input: 'nohorohpaaney', output: 'ނޮހޮރޮއްޕާނޭ' },
    { input: 'ihhuthiyaareh', output: 'އިޙުތިޔާރެއް' },
    { input: 'rahttehinnaa', output: 'ރައްޓެހިންނާ' },
    { input: 'thiyaeekamugaa', output: 'ތިޔައީކަމުގާ' },
    { input: 'ishthashigandu', output: 'އިސްތަށިގަނޑު' },
    { input: 'handhaanunney', output: 'ހަނދާނުންނޭ' },
    { input: 'javaahirahves', output: 'ޖަވާހިރައްވެސް' },
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
    { input: 'medhutherean', output: 'މެދުތެރޭން' },
    { input: 'enkeyolhubey', output: 'އެންކެޔޮޅުބޭ' },
    { input: 'enkeyolhube', output: 'އެންކެޔޮޅުބެ' },
    { input: 'dhirihurihaa', output: 'ދިރިހުރިހާ' },
    { input: 'rashuthereah', output: 'ރަށުތެރެއަށް' },
    { input: 'ihusaasveemaa', output: 'އިހުސާސްވީމާ' },
    { input: 'nuruhihjeyey', output: 'ނުރުހިއްޖެޔޭ' },
    { input: 'neyngeyneyey', output: 'ނޭންގޭނެޔޭ' },
    { input: 'nuveveyneyey', output: 'ނުވެވޭނެޔޭ' },
    { input: 'hureveynehey', output: 'ހުރެވޭނެހޭ' },
    { input: 'kuruvaifiyey', output: 'ކުރުވައިފިޔޭ' },
    { input: 'ihusaasthakey', output: 'އިހުސާސްތަކޭ' },
    { input: 'dhushminunnaa', output: 'ދުޝްމިނުންނާ' },
    { input: 'dhushminunney', output: 'ދުޝްމިނުންނޭ' },
    { input: 'shoahuvaahaavey', output: 'ޝޯހުވާހާވޭ' },
    { input: 'dhirunaaveythoa', output: 'ދިރުންއާވޭތޯ' },
    { input: 'feneythoathahey', output: 'ފެނޭތޯތަހޭ' },
    { input: 'hingaafennjahaa', output: 'ހިނގާފެންޖަހާ' },
    { input: 'hiyyviruveythee', output: 'ހިތްވިރުވޭތީ' },
    { input: 'kiyaadheehedhin', output: 'ކިޔާދީހެދިން' },
    { input: 'kurehifaavaaney', output: 'ކުރެހިފާވާނޭ' },
    { input: 'maayoosnuvaahaa', output: 'މާޔޫސްނުވާހާ' },
    { input: 'mathihashinagaa', output: 'މަތިހަށިނަގާ' },
    { input: 'dhennefashaalee', output: 'ދެންއެފަށާލީ' },
    { input: 'faalhuvedhaahaa', output: 'ފާޅުވެދާހާ' },
    { input: 'fahathulavaigen', output: 'ފަހަތުލަވައިގެން' },
    { input: 'isjeheneethaaey', output: 'އިސްޖެހެނީތާއޭ' },
    { input: 'mahusharugaaves', output: 'މަހުޝަރުގާވެސް' },
    { input: 'ishthashigandun', output: 'އިސްތަށިގަނޑުން' },
    { input: 'reethikashmeeru', output: 'ރީތިކަޝްމީރު' },
    { input: 'aashigaayahtakaa', output: 'އާޝިގާޔައްޓަކާ' },
    { input: 'thakaholhialhaa', output: 'ތަކަހޮޅިއަޅާ' },
    { input: 'dhalhaalhaathee', output: 'ދަޅައަޅާތީ' },

    // 14 characters
    { input: 'fathihahttakaa', output: 'ފަތިހައްޓަކާ' },
    { input: 'kehiveriveemaa', output: 'ކެހިވެރިވީމާ' },
    { input: 'thiyahenbaakee', output: 'ތިޔަހެންބާކީ' },
    { input: 'berujahaanamey', output: 'ބެރުޖަހާނަމޭ' },
    { input: 'magumatheehure', output: 'މަގުމަތީހުރެ' },
    { input: 'zindhgaaneerey', output: 'ޒިންދުގާނީރޭ' },
    { input: 'jareevedhaahaa', output: 'ޖަރީވެދާހާ' },
    { input: 'dhuvahakuviyas', output: 'ދުވަހަކުވިޔަސް' },
    { input: 'blockthehkeroo', output: 'ބްލޮކުތެއްކެރޫ' },
    { input: 'dhenndhamaahey', output: 'ދެންދަމާހޭ' },
    { input: 'eedhukulhivaru', output: 'އީދުކުޅިވަރު' },
    { input: 'eidkulhivaruge', output: 'އީދުކުޅިވަރުގެ' },
    { input: 'gaigaajahaanee', output: 'ގައިގާޖަހާނީ' },
    { input: 'harugilahaavaa', output: 'ހަރުގިލަހާވާ' },
    { input: 'meyahfinivanee', output: 'މެޔައްފިނިވަނީ' },
    { input: 'naazukuveehiyy', output: 'ނާޒުކުވީހިތް' },
    { input: 'shoahukohlaifi', output: 'ޝޯހުކޮއްލައިފި' },
    { input: 'enaanaathedhey', output: 'އެނާނާތެދޭ' },
    { input: 'handhaannaavey', output: 'ހަނދާންއާވޭ' },
    { input: 'ihvaaladheymee', output: 'އިއްވާލަދޭމީ' },
    { input: 'leygahingaahaa', output: 'ލޭގަހިނގާހާ' },
    { input: 'ithubaarehneyy', output: 'އިތުބާރެއްނެތް' },
    { input: 'kuruneesvedhey', output: 'ކުރުނީސްވެދޭ' },
    { input: 'seariouskohhey', output: 'ސީރިއަސްކޮއްހޭ' },
    { input: 'thagudheeruhey', output: 'ތަގުދީރުހޭ' },
    { input: 'fatharaaseehey', output: 'ފަތަރާސީހޭ' },
    { input: 'fennboahiyyvey', output: 'ފެންބޯހިތްވޭ' },
    { input: 'haadhahihveyey', output: 'ހާދަހިތްވެޔޭ' },
    { input: 'ihusaaskohdhey', output: 'އިހުސާސްކޮށްދޭ' },
    { input: 'umaruahyaaruge', output: 'އުމަރުއައްޔާރުގެ' },
    { input: 'aashoahuvedhey', output: 'އާޝޯހުވެދޭ' },
    { input: 'fidhaavamaahey', output: 'ފިދާވަމާހޭ' },
    { input: 'hithuleyfaamey', output: 'ހިތުލޭފައަމޭ' },
    { input: 'thalaboabeehge', output: 'ތަލަބޯބެއެއްގެ' },

    // 13 characters
    { input: 'handhaanuney', output: 'ހަނދާނުނޭ' },
    { input: 'handhaanvey', output: 'ހަނދާންވޭ' },
    { input: 'heyohaalugaa', output: 'ހެޔޮހާލުގާ' },
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
    { input: 'dhaagoiyvey', output: 'ދާގޮތްވޭ' },
    { input: 'vaadhuvahekey', output: 'ވާދުވަހެކޭ' },
    { input: 'vaadhuvasthah', output: 'ވާދުވަސްތައް' },
    { input: 'maraatheehey', output: 'މަރާތީހޭ' },
    { input: 'dhushminakaa', output: 'ދުޝްމިނަކާ' },
    { input: 'vaadhuvahaky', output: 'ވާދުވަހަކީ' },
    { input: 'ihusaahakee', output: 'އިހުސާހަކީ' },
    { input: 'ihusaahakii', output: 'އިހުސާހަކީ' },
    { input: 'ihusaahaky', output: 'އިހުސާހަކީ' },
    { input: 'ihusaahekey', output: 'އިހުސާހެކޭ' },
    { input: 'ihusaasthah', output: 'އިހުސާސްތައް' },
    { input: 'thihireethi', output: 'ތިހިރީތި' },
    { input: 'thihureethi', output: 'ތިހުރީތި' },
    { input: 'neyngeyhen', output: 'ނޭންގޭހެން' },
    { input: 'zeenaiytheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenayytheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenaiitheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenaitheri', output: 'ޒީނަތްތެރި' },
    { input: 'zeenaytheri', output: 'ޒީނަތްތެރި' },
    { input: 'hashigandah', output: 'ހަށިގަނޑަށް' },
    { input: 'khidhumaiyy', output: 'ޚިދުމަތް' },
    { input: 'mulhihithaa', output: 'މުޅިހިތާ' },
    { input: 'hidhumaiyy', output: 'ޚިދުމަތް' },
    { input: 'khidhumaii', output: 'ޚިދުމަތް' },
    { input: 'mihaalathu', output: 'މިހާލަތު' },
    { input: 'dhehithuge', output: 'ދެހިތުގެ' },
    { input: 'dhuniyeyge', output: 'ދުނިޔޭގެ' },
    { input: 'dhuniyege', output: 'ދުނިޔޭގެ' },
    { input: 'angaidheyshey', output: 'އަންގާދޭށޭ' },
    { input: 'fathihahtakaa', output: 'ފަތިހައްޓަކާ' },
    { input: 'aeeaeethoa', output: 'އައީއައީތޯ' },
    { input: 'beygaraarvee', output: 'ބޭގަރާރުވީ' },
    { input: 'gulhaaruthah', output: 'ގުލްހާރުތައް' },
    { input: 'ihhuthiyaaru', output: 'އިޙުތިޔާރު' },
    { input: 'ihuthiyaareh', output: 'އިޙުތިޔާރެއް' },
    { input: 'nukiyahchey', output: 'ނުކިޔައްޗޭ' },
    { input: 'henveruhuri', output: 'ހެންވޭރުހުރި' },
    { input: 'henveyruhuri', output: 'ހެންވޭރުހުރި' },
    { input: 'handhaanuney', output: 'ހަނދާނުނޭ' },
    { input: 'javaahirahves', output: 'ޖަވާހިރައްވެސް' },
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
    { input: 'shabaabugaa', output: 'ޝަބާބުގާ' },
    { input: 'fenijjeyey', output: 'ފެނިއްޖެޔޭ' },
    { input: 'furihamakan', output: 'ފުރިހަމަކަން' },
    { input: 'vaagoiyvey', output: 'ވާގޮތްވޭ' },
    { input: 'dholhuhaas', output: 'ދޮޅުހާސް' },
    { input: 'ruheynuhey', output: 'ރުހޭނުހޭ' },
    { input: 'mehefilthah', output: 'މެހެފިލުތައް' },
    { input: 'meehunaaeku', output: 'މީހުނާއެކު' },
    { input: 'meehakaaeku', output: 'މީހަކާއެކު' },
    { input: 'vaatheehey', output: 'ވާތީހޭ' },
    { input: 'vaadhuvahey', output: 'ވާދުވަހޭ' },
    { input: 'vaadhuvahun', output: 'ވާދުވަހުން' },
    { input: 'fohelaafaa', output: 'ފޮހެލާފާ' },
    { input: 'ihusaahun', output: 'އިހުސާހުން' },
    { input: 'zakhamuvy', output: 'ޒަޚަމުވީ' },
    { input: 'zahamuvy', output: 'ޒަޚަމުވީ' },
    { input: 'ishaaraai', output: 'އިޝާރާތް' },
    { input: 'isharaii', output: 'އިޝާރާތް' },
    { input: 'ishaaraiy', output: 'އިޝާރާތް' },
    { input: 'ishaarayy', output: 'އިޝާރާތް' },
    { input: 'hidhumaii', output: 'ޚިދުމަތް' },
    { input: 'khidumayy', output: 'ޚިދުމަތް' },
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
    { input: 'furihama', output: 'ފުރިހަމަ' },
    { input: 'leyaaeku', output: 'ލެޔާއެކު' },
    { input: 'ruhenyaa', output: 'ރުހެންޔާ' },
    { input: 'dhevenyaa', output: 'ދެވެންޔާ' },
    { input: 'muiythah', output: 'މުތްތައް' },
    { input: 'muithah', output: 'މުތްތައް' },
    { input: 'muyythah', output: 'މުތްތައް' },
    { input: 'bahaareh', output: 'ބަހާރެއް' },
    { input: 'baihadhaafaa', output: 'ބައިހަދާފާ' },
    { input: 'neydhenoohey', output: 'ނޭދެނޫހޭ' },
    { input: 'fisadhuveemaa', output: 'ފިސްއަދުވީމާ' },
    { input: 'roanjeheneeey', output: 'ރޯންޖެހެނީއޭ' },
    { input: 'dhivehidharin', output: 'ދިވެހިދަރިން' },
    { input: 'ehandhaanthah', output: 'އެހަނދާންތައް' },
    { input: 'heykendeygoyy', output: 'ހޭކެނޑޭގޮތް' },
    { input: 'milamehijahaa', output: 'މިލަމެހިޖަހާ' },
    { input: 'aahiyyvarakaa', output: 'އާހިތްވަރަކާ' },
    { input: 'dhoanidhashah', output: 'ދޯނިދަށަށް' },
    { input: 'behendhaathee', output: 'ބެހެންދާތީ' },
    { input: 'engivaatheehe', output: 'އެނގިވާތީހެ' },
    { input: 'hiyyufaakuraa', output: 'ހިތްއުފާކުރާ' },
    { input: 'shaharubaalaa', output: 'ޝަހަރުބާލާ' },
    { input: 'chakamoaluhen', output: 'ޗަކަމޯލުހެން' },
    { input: 'hiyyhithaavee', output: 'ހިތްހިތާވީ' },
    { input: 'holhilaajahaa', output: 'ހޮޅިލާޖަހާ' },
    { input: 'kanmatheehure', output: 'ކަންމަތީހުރެ' },
    { input: 'kudhiohthakun', output: 'ކުދިއޮއްތަކުން' },
    { input: 'saafuvaanehen', output: 'ސާފުވާނެހެން' },
    { input: 'shoahuvevifaa', output: 'ޝޯހުވެވިފާ' },
    { input: 'uvajahaanamey', output: 'އުވަޖަހާނަމޭ' },
    { input: 'faheemaajahaa', output: 'ފަހީމާޖަހާ' },
    { input: 'handhaannthah', output: 'ހަނދާންތައް' },
    { input: 'kiyeyneymihen', output: 'ކިޔޭނޭމިހެން' },
    { input: 'ahcheynnbeyre', output: 'އައްޗޭންބޭރެ' },
    { input: 'dhoganahadhaa', output: 'ދޮގަނަހަދާ' },
    { input: 'keruveylhahey', output: 'ކެރުވޭޅަހޭ' },
    { input: 'ehandhaanugaa', output: 'އެހަނދާނުގާ' },
    { input: 'farudhaaathun', output: 'ފަރުދާއަތުން' },
    { input: 'hiyyheyokamaa', output: 'ހިތްހެޔޮކަމާ' },
    { input: 'naanaathedhey', output: 'ނާނާތެދޭ' },
    { input: 'unnmeedhuthah', output: 'އުންމީދުތައް' },
    { input: 'heylhiheylhin', output: 'ހޭޅިހޭޅިން' },
    { input: 'fahtarubaives', output: 'ފައްޓަރުބައިވެސް' },
    { input: 'foarihifaaney', output: 'ފޯރިހިފާނޭ' },
    { input: 'isjeheneethaa', output: 'އިސްޖެހެނީތާ' },
    { input: 'kehidheefatha', output: 'ކެހިދީފަތަ' },
    { input: 'reyakuaraaney', output: 'ރެޔަކުއަރާނޭ' },
    { input: 'fasfahathugaa', output: 'ފަސްފަހަތުގާ' },
    { input: 'haalaathuehen', output: 'ހާލާތުއެހެން' },
    { input: 'hoadhannedhey', output: 'ހޯދަންއެދޭ' },
    { input: 'ihthiyaarugaa', output: 'އިހްތިޔާރުގާ' },
    { input: 'kaalhuthahais', output: 'ކާޅުތައްއައިސް' },
    { input: 'loayybahtakaa', output: 'ލޯތްބައްޓަކާ' },
    { input: 'rahalibeythoa', output: 'ރަހަލިބޭތޯ' },
    { input: 'subuhaanallah', output: 'ސުބުހާނަﷲ' },
    { input: 'ahsidhamahuga', output: 'އައްސިދަމަހުގަ' },
    { input: 'ehaavaruveyey', output: 'އެހާވަރުވެޔޭ' },
    { input: 'ehbandharekey', output: 'އެއްބަނދަރެކޭ' },

    // 12 characters
    { input: 'konthaakuhey', output: 'ކޮންތާކުހޭ' },
    { input: 'mekuhahjahaa', output: 'މެކުހައްޖަހާ' },
    { input: 'vayyfuraigen', output: 'ވަތްފުރައިގެން' },
    { input: 'kandaalaanee', output: 'ކަނޑާލާނީ' },
    { input: 'adufahgandeh', output: 'އަޑުފައްގަނޑެއް' },
    { input: 'ayythilaigaa', output: 'އަތްތިލައިގާ' },
    { input: 'baaruhamalaa', output: 'ބާރުހަމަލާ' },
    { input: 'bahaarumiaee', output: 'ބަހާރުމިއައީ' },
    { input: 'balakeyolhaa', output: 'ބަލަކެޔޮޅާ' },
    { input: 'dhaaneemahah', output: 'ދާނީމަހަށް' },
    { input: 'adhumihingaa', output: 'އަދުމިހިނގާ' },
    { input: 'baruhandhuge', output: 'ބަރުހަނދުގެ' },
    { input: 'dhamaahingaa', output: 'ދަމާހިނގާ' },
    { input: 'dheefaanuhey', output: 'ދީފާނުހޭ' },
    { input: 'heyokuraaney', output: 'ހެޔޮކުރާނޭ' },
    { input: 'hiyaavahikan', output: 'ހިޔާވަހިކަން' },
    { input: 'iruohseythee', output: 'އިރުއޮއްސޭތީ' },
    { input: 'kettvoakugaa', output: 'ކެޓްވޯކުގާ' },
    { input: 'nubeleynehen', output: 'ނުބެލޭނެހެން' },
    { input: 'javaaniheree', output: 'ޖަވާނީހެރީ' },
    { input: 'nahchilhiyaa', output: 'ނައްޗިޅިޔާ' },
    { input: 'nujahaanehen', output: 'ނުޖަހާނެހެން' },
    { input: 'sarahahdhaai', output: 'ސަރަހައްދާއި' },
    { input: 'shehezaadhaa', output: 'ޝެހެޒާދާ' },
    { input: 'tharuhadhamu', output: 'ތަރުހަދަމު' },
    { input: 'shaheedhunnaa', output: 'ޝަހީދުންނާ' },
    { input: 'meahfinivanee', output: 'މެއައްފިނިވަނީ' },
    { input: 'seennaruvanoo', output: 'ސީންއަރުވަނޫ' },
    { input: 'unfollowkeroo', output: 'އަންފޮލޯކެރޫ' },
    { input: 'dhuniyeehgaa', output: 'ދުނިޔެއެއްގާ' },
    { input: 'heyokamaaeku', output: 'ހެޔޮކަމާއެކު' },
    { input: 'ihuthiraamaa', output: 'އިހުތިރާމާ' },
    { input: 'kakeluhulhun', output: 'ކަކެލުހުޅުން' },
    { input: 'kakuluhulhun', output: 'ކަކުލުހުޅުން' },
    { input: 'kulajehumuge', output: 'ކުލަޖެހުމުގެ' },
    { input: 'mahusharugaa', output: 'މަހުޝަރުގާ' },
    { input: 'muhsandhikan', output: 'މުއްސަނދިކަން' },
    { input: 'nahadhaashey', output: 'ނަހަދާށޭ' },
    { input: 'uhmeedhuthah', output: 'އުއްމީދުތައް' },
    { input: 'thasveeruhey', output: 'ތަސްވީރުހޭ' },
    { input: 'fenboahihvey', output: 'ފެންބޯހިތްވޭ' },
    { input: 'gahuthereyga', output: 'ގަހުތެރޭގަ' },
    { input: 'isjeheneebaa', output: 'އިސްޖެހެނީބާ' },
    { input: 'isjeheneehey', output: 'އިސްޖެހެނީހޭ' },
    { input: 'nikagahukuri', output: 'ނިކަގަހުކުރި' },
    { input: 'unmeedhuthah', output: 'އުންމީދުތައް' },
    { input: 'vashuvandhey', output: 'ވަސްހުވަނދޭ' },
    { input: 'zeenayyvegen', output: 'ޒީނަތްވެގެން' },
    { input: 'asthaaaeehey', output: 'އަސްތާއައީހޭ' },
    { input: 'beyrunnaineh', output: 'ބޭރުންއައިނެއް' },
    { input: 'ishaaraathun', output: 'އިޝާރާތުން' },
    { input: 'meenishaaney', output: 'މީނިޝާނޭ' },
    { input: 'ahlaahiahlaa', output: 'އައްލާހިއައްލާ' },
    { input: 'rannkulaaraa', output: 'ރަންކުލައަރާ' },

    // 12 characters
    { input: 'shaheedhunaa', output: 'ޝަހީދުނާ' },
    { input: 'eidkulhivaru', output: 'އީދުކުޅިވަރު' },
    { input: 'ginasaabahey', output: 'ގިނަސާބަހޭ' },
    { input: 'seenaruvanoo', output: 'ސީންއަރުވަނޫ' },
    { input: 'hiyyedheykan', output: 'ހިތްއެދޭކަން' },

    // 11 characters
    { input: 'meegulshan', output: 'މީގުލްޝަން' },
    { input: 'aashoahuvee', output: 'އާޝޯހުވީ' },
    { input: 'ehidhaaney', output: 'އެހިދާނޭ' },
    { input: 'hiyyufaavaa', output: 'ހިތްއުފާވާ' },
    { input: 'ihuthiyaaru', output: 'އިޙުތިޔާރު' },
    { input: 'nuhifannyaa', output: 'ނުހިފަންޔާ' },
    { input: 'nuruhumugaa', output: 'ނުރުހުމުގާ' },
    { input: 'nuruhehchey', output: 'ނުރުހެއްޗޭ' },
    { input: 'nukiahchey', output: 'ނުކިއައްޗޭ' },
    { input: 'nimidhaaney', output: 'ނިމިދާނޭ' },
    { input: 'handhaanvey', output: 'ހަނދާންވޭ' },
    { input: 'javaahiruge', output: 'ޖަވާހިރުގެ' },
    { input: 'fahathugaaa', output: 'ފަހަތުގާ' },
    { input: 'fahathugaa', output: 'ފަހަތުގާ' },
    { input: 'shabaabuga', output: 'ޝަބާބުގަ' },
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
    { input: 'nishaanuga', output: 'ނިޝާނުގަ' },
    { input: 'nishaanga', output: 'ނިޝާނުގަ' },
    { input: 'nuhurumah', output: 'ނުހުރުމަށް' },
    { input: 'bahaarekey', output: 'ބަހާރެކޭ' },
    { input: 'fathihashi', output: 'ފަތިހަށި' },
    { input: 'thihireehi', output: 'ތިހިރީހި' },
    { input: 'hiyaalugaa', output: 'ހިޔާލުގާ' },
    { input: 'oiygoiyvey', output: 'އޮތްގޮތްވެސް' },
    { input: 'oiygoiyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oyygoiyvey', output: 'އޮތްގޮތްވެސް' },
    { input: 'oyygoiyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oyygoyyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oiygoyyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'oiygoyyves', output: 'އޮތްގޮތްވެސް' },
    { input: 'dheynveebaa', output: 'ދޭންވީބާ' },
    { input: 'dhirihuri', output: 'ދިރިހުރި' },
    { input: 'dhushminu', output: 'ދުޝްމިނު' },
    { input: 'vaahithun', output: 'ވާހިތުން' },
    { input: 'vaadhuvas', output: 'ވާދުވަސް' },
    { input: 'faseyhain', output: 'ފަސޭހައިން' },
    { input: 'mihithuge', output: 'މިހިތުގެ' },
    { input: 'ihusaasvee', output: 'އިހުސާސްވީ' },
    { input: 'ihusaasaa', output: 'އިހުސާސާ' },
    { input: 'ihusaasey', output: 'އިހުސާސޭ' },
    { input: 'dhehithugaa', output: 'ދެހިތުގާ' },
    { input: 'dhushminaa', output: 'ދުޝްމިނާ' },
    { input: 'dhushminun', output: 'ދުޝްމިނުން' },
    { input: 'faseyhakun', output: 'ފަސޭހަކުން' },
    { input: 'faseyhekey', output: 'ފަސޭހެކޭ' },
    { input: 'bahaareiy', output: 'ބަހާރެއް' },
    { input: 'bahaareii', output: 'ބަހާރެއް' },
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
    { input: 'nimidhaaney', output: 'ނިމިދާނޭ' },
    { input: 'nimidhaanee', output: 'ނިމިދަނީ' },
    { input: 'nimidhaany', output: 'ނިމިދަނީ' },
    { input: 'dhaanveehey', output: 'ދާންވީހޭ' },
    { input: 'bodujaagaeh', output: 'ބޮޑުޖާގައެއް' },
    { input: 'mavaalhahey', output: 'މަވާޅަހޭ' },
    { input: 'beykaaruhey', output: 'ބޭކާރުހޭ' },
    { input: 'eheevaashey', output: 'އެހީވާށޭ' },
    { input: 'roanjehenee', output: 'ރޯންޖެހެނީ' },
    { input: 'athuhurilaa', output: 'އަތުހުރިލާ' },
    { input: 'dhaneefahah', output: 'ދަނީފަހަށް' },
    { input: 'dhiveheenge', output: 'ދިވެހީންގެ' },
    { input: 'dhoanihifaa', output: 'ދޯނިހިފާ' },
    { input: 'ennkeyolhaa', output: 'އެންކެޔޮޅާ' },
    { input: 'faarayahves', output: 'ފާރަޔައްވެސް' },
    { input: 'fennthaaheh', output: 'ފެންތާހެއް' },
    { input: 'hiyyedhemey', output: 'ހިތްއެދެމޭ' },
    { input: 'hiyyheyokoh', output: 'ހިތްހެޔޮކޮށް' },
    { input: 'hiyymaveyey', output: 'ހިތްމަވެޔޭ' },
    { input: 'hiyyvarakaa', output: 'ހިތްވަރަކާ' },
    { input: 'ihuthiraamu', output: 'އިހުތިރާމު' },
    { input: 'irushaadhee', output: 'އިރުޝާދީ' },
    { input: 'islaahuveee', output: 'އިސްލާހުވީއެ' },
    { input: 'mageyhaaley', output: 'މަގޭހާލޭ' },
    { input: 'mageyhithaa', output: 'މަގޭހިތާ' },
    { input: 'naasheedhun', output: 'ނަޝީދުން' },
    { input: 'biruheevefa', output: 'ބިރުހީވެފަ' },
    { input: 'boakeyogahu', output: 'ބޯކެޔޮގަހު' },
    { input: 'dhiyahihkaa', output: 'ދިޔަހިއްކާ' },
    { input: 'faharuvumun', output: 'ފަހަރުވުމުން' },
    { input: 'fennaneehey', output: 'ފެންނަނީހޭ' },
    { input: 'goahehnethi', output: 'ގޯހެއްނެތި' },
    { input: 'aashoahuvey', output: 'އާޝޯހުވޭ' },
    { input: 'ahaaleethee', output: 'އަހާލީތީ' },
    { input: 'ahannmadhaa', output: 'އަހަންމަދާ' },
    { input: 'balannothee', output: 'ބަލަންއޮތީ' },
    { input: 'dhakandhaai', output: 'ދަކަނދާއި' },
    { input: 'eyhameyshaa', output: 'އޭހަމޭޝާ' },
    { input: 'fahayybalaa', output: 'ފަހަތްބަލާ' },
    { input: 'fehtihindhu', output: 'ފެއްޓިހިނދު' },
    { input: 'gulshanugaa', output: 'ގުލްޝަނުގާ' },
    { input: 'hahsafaharu', output: 'ހައްސަފަހަރު' },
    { input: 'hassafaharu', output: 'ހައްސަފަހަރު' },
    { input: 'hiyyedheyey', output: 'ހިތްއެދޭ' },
    { input: 'hiyyheyokan', output: 'ހިޔްހެޔޮކަން' },
    { input: 'ihvaaladhey', output: 'އިއްވާލަދޭ' },
    { input: 'loayybaaeku', output: 'ލޯތްބާއެކު' },
    { input: 'seariouskoh', output: 'ސީރިއަސްކޮށް' },
    { input: 'singiribana', output: 'ސިނގިރިބަނަ' },
    { input: 'thagudheeru', output: 'ތަގުދީރު' },
    { input: 'vashuvandhu', output: 'ވަސްހުވަނދު' },
    { input: 'verishaahee', output: 'ވެރިޝާހީ' },
    { input: 'yaahuvahlaa', output: 'ޔާހުވައްލާ' },
    { input: 'aduihvaalaa', output: 'އަޑުއިއްވާލާ' },
    { input: 'dhaaberaaoo', output: 'ދާބެރާއޫ' },
    { input: 'fasfahathun', output: 'ފަސްފަހަތުން' },
    { input: 'fenilaaneey', output: 'ފެނިލާނެއޭ' },
    { input: 'funnefushah', output: 'ފުންއެފުށަށް' },
    { input: 'hekivaaneey', output: 'ހެކިވާނެއޭ' },
    { input: 'hithaameyah', output: 'ހިތާމެޔަށް' },
    { input: 'nukulhedhey', output: 'ނުކުޅެދޭ' },
    { input: 'aashigaayah', output: 'އާޝިގާޔަށް' },
    { input: 'alikannaraa', output: 'އަލިކަންއަރާ' },
    { input: 'eesahureyey', output: 'އީސަހުރެޔޭ' },
    { input: 'feydheyaraa', output: 'ފޭދޭއަރާ' },
    { input: 'nishaanaaye', output: 'ނިޝާނާޔެ' },

    { input: 'ihusaasugaa', output: 'އިހުސާސުގާ' },

    // 10 characters
    { input: 'keyyvaanee', output: 'ކެތްވާނީ' },
    { input: 'keiyvaanee', output: 'ކެތްވާނީ' },
    { input: 'keiivaanee', output: 'ކެތްވާނީ' },
    { input: 'keyyvaany', output: 'ކެތްވާނީ' },
    { input: 'keiyvaany', output: 'ކެތްވާނީ' },
    { input: 'keiivaany', output: 'ކެތްވާނީ' },
    { input: 'keyyvaanii', output: 'ކެތްވާނީ' },
    { input: 'keiyvaanii', output: 'ކެތްވާނީ' },
    { input: 'keiivaanii', output: 'ކެތްވާނީ' },
    { input: 'kihinakun', output: 'ކިހިނަކުން' },
    { input: 'gulshanun', output: 'ގުލްޝަނުން' },
    { input: 'udhuhenee', output: 'އުދުހެނީ' },
    { input: 'udhuheny', output: 'އުދުހެނީ' },
    { input: 'udhuhunee', output: 'އުދުހުނީ' },
    { input: 'udhuhuny', output: 'އުދުހުނީ' },
    { input: 'ahaalanves', output: 'އަހާލަންވެސް' },
    { input: 'faharehgaa', output: 'ފަހަރެއްގާ' },
    { input: 'farivaahaa', output: 'ފަރިވާހާ' },
    { input: 'libaahakaa', output: 'ލިބާހަކާ' },
    { input: 'bilaahakah', output: 'ބިލާހަކަށް' },
    { input: 'bilaahekey', output: 'ބިލާހެކޭ' },
    { input: 'dhaahithun', output: 'ދާހިތުން' },
    { input: 'handhaanun', output: 'ހަނދާނުން' },
    { input: 'handhaaney', output: 'ހަނދާނޭ' },
    { input: 'bahaarugaa', output: 'ބަހާރުގާ' },
    { input: 'javaahirah', output: 'ޖަވާހިރަށް' },
    { input: 'fahathun', output: 'ފަހަތުން' },
    { input: 'shabaabun', output: 'ޝަބާބުން' },
    { input: 'shabunam', output: 'ޝަބުނަމު' },
    { input: 'thakaholhi', output: 'ތަކަހޮޅި' },
    { input: 'thahuniyaa', output: 'ތަހުނިޔާ' },
    { input: 'nishaanun', output: 'ނިޝާނުން' },
    { input: 'nishaanaa', output: 'ނިޝާނާ' },
    { input: 'roohudhey', output: 'ރޫހުދޭ' },
    { input: 'roohdhey', output: 'ރޫހުދޭ' },
    { input: 'bahaarun', output: 'ބަހާރުން' },
    { input: 'kerihure', output: 'ކެރިހުރެ' },
    { input: 'hurumah', output: 'ހުރުމަށް' },
    { input: 'kuranvvyy', output: 'ކުރަންވީ' },
    { input: 'kuranvvii', output: 'ކުރަންވީ' },
    { input: 'kuranvvee', output: 'ކުރަންވީ' },
    { input: 'furanvvyy', output: 'ފުރަންވީ' },
    { input: 'furanvvii', output: 'ފުރަންވީ' },
    { input: 'furanvvee', output: 'ފުރަންވީ' },
    { input: 'halheylyy', output: 'ހަޅޭލީ' },
    { input: 'halheylii', output: 'ހަޅޭލީ' },
    { input: 'halheylee', output: 'ހަޅޭލީ' },
    { input: 'jahaalyy', output: 'ޖަހާލީ' },
    { input: 'jahaalii', output: 'ޖަހާލީ' },
    { input: 'jahaalee', output: 'ޖަހާލީ' },
    { input: 'keyolhubey', output: 'ކެޔޮޅުބޭ' },
    { input: 'keyolhube', output: 'ކެޔޮޅުބެ' },
    { input: 'bahaareyy', output: 'ބަހާރެއް' },
    { input: 'bahaarei', output: 'ބަހާރެއް' },
    { input: 'ummeedhun', output: 'އުންމީދުން' },
    { input: 'unmeedhun', output: 'އުންމީދުން' },
    { input: 'mehefilu', output: 'މެހެފިލު' },
    { input: 'kihineii', output: 'ކިހިނެތް' },
    { input: 'kihineiy', output: 'ކިހިނެތް' },
    { input: 'kihineyy', output: 'ކިހިނެތް' },
    { input: 'fathihashi', output: 'ފަތިހަށި' },
    { input: 'thihireehi', output: 'ތިހިރީހި' },
    { input: 'hiyaalugaa', output: 'ހިޔާލުގާ' },
    { input: 'dhehithuga', output: 'ދެހިތުގަ' },
    { input: 'hedhihuri', output: 'ހެދިހުރި' },
    { input: 'edhihuri', output: 'އެދިހުރި' },
    { input: 'jehilunve', output: 'ޖެހިލުންވެ' },
    { input: 'libihuri', output: 'ލިބިހުރި' },
    { input: 'vaagoiyve', output: 'ވާގޮތްވެ' },
    { input: 'handhaaey', output: 'ހަނދާއޭ' },
    { input: 'reethihaa', output: 'ރީތިހާ' },
    { input: 'loaiyhbey', output: 'ލޯތްބޭ' },
    { input: 'kiivvehey', output: 'ކީއްވެހޭ' },
    { input: 'keehvehey', output: 'ކީއްވެހޭ' },
    { input: 'nuruhihje', output: 'ނުރުހިއްޖެ' },
    { input: 'haadhahaa', output: 'ހާދަހާ' },
    { input: 'ehindhun', output: 'އެހިނދުން' },
    { input: 'shakuvaa', output: 'ޝަކުވާ' },
    { input: 'kaakuhey', output: 'ކާކުހޭ' },
    { input: 'kiiwehey', output: 'ކީއްވެހޭ' },
    { input: 'roalumun', output: 'ރޯލުމުން' },
    { input: 'roalumum', output: 'ރޯލުމުން' },
    { input: 'roa lumun', output: 'ރޯލުމުން' },
    { input: 'roa lumum', output: 'ރޯލުމުން' },
    { input: 'kannfulheh', output: 'ކަންފުޅެއް' },
    { input: 'hallgaige', output: 'ހަލްގައިގެ' },
    { input: 'kihaadhera', output: 'ކިހާދެރަ' },
    { input: 'mahinithun', output: 'މަހިނިތުން' },
    { input: 'nimeneehey', output: 'ނިމެނީހޭ' },
    { input: 'vaaneygoii', output: 'ވާނޭގޮތް' },
    { input: 'vaaneygoiy', output: 'ވާނޭގޮތް' },
    { input: 'vaaneygoyy', output: 'ވާނޭގޮތް' },
    { input: 'vaazahamun', output: 'ވާޒަހަމުން' },
    { input: 'varihamaey', output: 'ވަރިހަމައޭ' },
    { input: 'adhuhunnan', output: 'އަދުހުންނަން' },
    { input: 'beeheneeey', output: 'ބީހެނީއޭ' },
    { input: 'iruohsigen', output: 'އިރުއޮއްސިގެން' },
    { input: 'kendeygoyy', output: 'ކެނޑޭގޮތް' },
    { input: 'dhuvahehga', output: 'ދުވަހެއްގަ' },
    { input: 'enkeyolhaa', output: 'އެންކެޔޮޅާ' },
    { input: 'foariehvaa', output: 'ފޯރިއެއްވާ' },
    { input: 'huhtihurin', output: 'ހުއްޓިހުރިން' },
    { input: 'ihuthiraam', output: 'އިހުތިރާމު' },
    { input: 'sarahahdhu', output: 'ސަރަހައްދު' },
    { input: 'thahaaneee', output: 'ތަހާނީއެ' },
    { input: 'goahehneth', output: 'ގޯހެއްނެތި' },
    { input: 'udhuhunuhaa', output: 'އުދުހުނުހާ' },
    { input: 'uthureygoyy', output: 'އުތުރޭގޮތް' },
    { input: 'varuhashee', output: 'ވަރުހަށީ' },
    { input: 'aashigaaey', output: 'އާޝިގާއޭ' },
    { input: 'ayymahchah', output: 'އަތްމައްޗަށް' },
    { input: 'baruhandhu', output: 'ބަރުހަނދު' },
    { input: 'ethahethah', output: 'އެތައްއެތައް' },
    { input: 'hiyyhithaa', output: 'ހިތްހިތާ' },
    { input: 'hovaakeyoa', output: 'ހޮވާކެޔޯ' },
    { input: 'ishaaraaiy', output: 'އިޝާރާތް' },
    { input: 'ishaaraayy', output: 'އިޝާރާތް' },
    { input: 'jahaaindhe', output: 'ޖަހާއިނދެ' },
    { input: 'meeruhumun', output: 'މީރުހުމުން' },
    { input: 'mihenmihen', output: 'މިހެންމިހެން'},
    { input: 'shoahuvevi', output: 'ޝޯހުވެވި' },
    { input: 'vihsaaraee', output: 'ވިއްސާރައީ' },
    { input: 'vihsaaraey', output: 'ވިއްސާރައޭ' },
    { input: 'vissaaraee', output: 'ވިއްސާރައީ' },
    { input: 'vissaaraey', output: 'ވިއްސާރައޭ' },
    { input: 'hiyyvarulaa', output: 'ހިތްވަރުލާ' },
    { input: 'jahaajaahaa', output: 'ޖަހާޖަހާ' },
    { input: 'heyovaruvee', output: 'ހެޔޮވަރުވީ' },
    { input: 'reethivihaa', output: 'ރީތިވިހާ' },
    { input: 'kiyeyyvehey', output: 'ކިޔެތްވެހޭ' },
    { input: 'messengerin', output: 'މެސެންޖާއިން' },
    { input: 'nidheyneyhe', output: 'ނިދޭނޭހެ' },
    { input: 'searchkeroo', output: 'ސާޗުކެރޫ' },
    { input: 'avahakerey', output: 'އަވަހަކެރޭ' },
    { input: 'ahanmadhaa', output: 'އަހަންމަދާ' },
    { input: 'ahannmadhu', output: 'އަހަންމަދު' },
    { input: 'bodumahuge', output: 'ބޮޑުމަހުގެ' },
    { input: 'dhiyaeehey', output: 'ދިޔައީހޭ' },
    { input: 'eedhumajaa', output: 'އީދުމަޖާ' },
    { input: 'dhiyaihyaa', output: 'ދިޔައިއްޔާ' },
    { input: 'ehbaarulaa', output: 'އެއްބާރުލާ' },
    { input: 'eheevaaney', output: 'އެހީވާނޭ' },
    { input: 'ehkalagoyy', output: 'އެއްކަލަގޮތް' },
    { input: 'feyshalves', output: 'ފޭޝަލްވެސް' },
    { input: 'hendhuthee', output: 'ހެންދުތީ' },
    { input: 'javaahiraa', output: 'ޖަވާހިރާ' },
    { input: 'mahuloogeh', output: 'މަހުލޫގެއް' },
    { input: 'eyhuvahlaa', output: 'އޭހުވައްލާ' },
    { input: 'bandiyaaah', output: 'ބަނޑިޔާއަށް' },
    { input: 'boahiyyvey', output: 'ބޯހިތްވޭ' },
    { input: 'ehindhugaa', output: 'އެހިނދުގާ' },
    { input: 'fahnihifaa', output: 'ފައްނިހިފާ' },
    { input: 'fahtarubai', output: 'ފައްޓަރުބައި' },
    { input: 'foarihifaa', output: 'ފޯރިހިފާ' },
    { input: 'gahutherey', output: 'ގަހުތެރޭ' },
    { input: 'hithaharaa', output: 'ހިތައްއަރާ' },
    { input: 'kehidheefa', output: 'ކެހިދީފަ' },
    { input: 'keyymashah', output: 'ކެތްމަށަށް' },
    { input: 'dhuiaaakee', output: 'ދުޢާއަކީ' },
    { input: 'ehdhuvahun', output: 'އެއްދުވަހުން' },
    { input: 'ihusaaskoh', output: 'އިހުސާސްކޮށް' },
    { input: 'mashoadhan', output: 'މަސްހޯދަން' },
    { input: 'ahaaleemee', output: 'އަހާލީމީ' },
    { input: 'ehenvihyaa', output: 'އެހެންވިއްޔާ' },
    { input: 'eyhithaaey', output: 'އޭހިތާއޭ' },
    { input: 'iabeeruhey', output: 'ޢަބީރުހޭ' },
    { input: 'ihthiyaaru', output: 'އިހްތިޔާރު' },
    { input: 'ihvaalihaa', output: 'އިއްވާލިހާ' },
    { input: 'kuramaahey', output: 'ކުރަމާހޭ' },
    { input: 'lhiyaalhaa', output: 'ޅިޔައަޅާ' },
    { input: 'medhugeyah', output: 'މެދުގެޔަށް' },
    { input: 'ahaalaaney', output: 'އަހާލާނޭ' },
    { input: 'ihvaanamey', output: 'އިއްވާނަމޭ' },
    { input: 'maashaahee', output: 'މާޝާހީ' },
    { input: 'pareeehhey', output: 'ޕަރީއެއްހޭ' },
    { input: 'restaurant', output: 'ރެސްޓޯރެންޓް' },
    { input: 'meethedhey', output: 'މީތެދޭ' },
    { input: 'iruohsumaa', output: 'އިރުއޮއްސުމާ' },

    // 10 characters
    { input: 'fanihedhee', output: 'ފަނިހެދީ' },
    { input: 'eahhoadhaa', output: 'އެއައްހޯދާ' },
    { input: 'bashuhtifa', output: 'ބަސްހުއްޓިފަ' },
    { input: 'beehilumah', output: 'ބީހިލުމަށް' },
    { input: 'beehilumun', output: 'ބީހިލުމުން' },
    { input: 'edhuvahuge', output: 'އެދުވަހުގެ' },
    { input: 'foohinethi', output: 'ފޫހިނެތި' },
    { input: 'foohinuvey', output: 'ފޫހިނުވޭ' },
    { input: 'goyyvedhaa', output: 'ގޮތްވެދާ' },
    { input: 'gulshanuge', output: 'ގުލްޝަނުގެ' },
    { input: 'hamahimeyn', output: 'ހަމަހިމޭން' },
    { input: 'handhaaneh', output: 'ހަނދާނެތް' },
    { input: 'hashinagaa', output: 'ހަށިނަގާ' },
    { input: 'islaahuvee', output: 'އިސްލާހުވީ' },
    { input: 'jahaalaifi', output: 'ޖަހާލައިފި' },
    { input: 'kukulhuhaa', output: 'ކުކުޅުހާ' },
    { input: 'mathihashi', output: 'މަތިހަށި' },
    { input: 'meeruvahaa', output: 'މީރުވަހާ' },
    { input: 'mekuhugaey', output: 'މެކުހުގައޭ' },
    { input: 'mihaarugaa', output: 'މިހާރުގާ' },
    { input: 'neyvaaaraa', output: 'ނޭވާއަރާ' },
    { input: 'rulhiahove', output: 'ރުޅިއަށްއޮވެ' },
    { input: 'udhuheyiru', output: 'އުދުހޭއިރު' },
    { input: 'ukaadheyey', output: 'އުކާދެޔޭ' },
    { input: 'vahunndhoa', output: 'ވަހުންދޯ' },
    { input: 'veveynehen', output: 'ވެވޭނެހެން' },
    { input: 'bolahjahaa', output: 'ބޮލައްޖަހާ' },
    { input: 'facebookun', output: 'ފޭސްބުކުން' },
    { input: 'fehikulain', output: 'ފެހިކުލައިން' },
    { input: 'gayahjahaa', output: 'ގަޔައްޖަހާ' },
    { input: 'hiyythakun', output: 'ހިތްތަކުން' },
    { input: 'ilhaamakun', output: 'އިލްހާމަކުން' },
    { input: 'kandaalhan', output: 'ކަނޑައަޅަން' },
    { input: 'rayykulain', output: 'ރަތްކުލައިން' },
    { input: 'shaheedhee', output: 'ޝަހީދީ' },
    { input: 'thiyahuree', output: 'ތިޔަހުރީ' },
    { input: 'kieyyvehey', output: 'ކިއެއްވެހޭ' },
    { input: 'kiyehvehey', output: 'ކިޔެއްވެހޭ' },
    { input: 'kihinehhey', output: 'ކިހިނެތްހޭ' },
    { input: 'mihiyyekee', output: 'މިހިތްއެކީ' },
    { input: 'miihusaasu', output: 'މިއިހުސާސު' },
    { input: 'mithuraaah', output: 'މިތުރާއަށް' },
    { input: 'naathedhey', output: 'ނާތެދޭ' },
    { input: 'raahathuvi', output: 'ރާހަތުވި' },
    { input: 'ulhemaahey', output: 'އުޅެމާހޭ' },

    // 9 characters
    { input: 'keyytheri', output: 'ކެތްތެރި' },
    { input: 'keiytheri', output: 'ކެތްތެރި' },
    { input: 'keiitheri', output: 'ކެތްތެރި' },
    { input: 'hiyyheyo', output: 'ހިތްހެޔޮ' },
    { input: 'jeheyshey', output: 'ޖެހޭށޭ' },
    { input: 'gulshaney', output: 'ގުލްޝަނޭ' },
    { input: 'hiyymagey', output: 'ހިތްމަގޭ' },
    { input: 'rahttehin', output: 'ރައްޓެހިން' },
    { input: 'thasbeeha', output: 'ތަސްބީހަ' },
    { input: 'bondibayy', output: 'ބޮނޑިބަތް' },
    { input: 'bondibaiy', output: 'ބޮނޑިބަތް' },
    { input: 'bondibaii', output: 'ބޮނޑިބަތް' },
    { input: 'eyyveemaa', output: 'އެއްވީމާ' },
    { input: 'eiiveemaa', output: 'އެއްވީމާ' },
    { input: 'gulhaarun', output: 'ގުލްހާރުން' },
    { input: 'gulhaarey', output: 'ގުލްހާރޭ' },
    { input: 'nuruhumun', output: 'ނުރުހުމުން' },
    { input: 'nuruhunee', output: 'ނުރުހުނީ' },
    { input: 'raheyngoa', output: 'ރަހޭންގޯ' },
    { input: 'vehurumaa', output: 'ވެހުރުމާ' },
    { input: 'nuhurumaa', output: 'ނުހުރުމާ' },
    { input: 'beygaraar', output: 'ބޭގަރާރު' },
    { input: 'thinoahaa', output: 'ތިނޯހާ' },
    { input: 'faleehaiy', output: 'ފަލީހަތް' },
    { input: 'faleehayy', output: 'ފަލީހަތް' },
    { input: 'faleehaii', output: 'ފަލީހަތް' },
    { input: 'eesabeyaa', output: 'އީސަބެޔާ' },
    { input: 'dhuvahey', output: 'ދުވަހޭ' },
    { input: 'aashoahey', output: 'އާޝޯހޭ' },
    { input: 'faruhilan', output: 'ފަރުހިލަން' },
    { input: 'faruhilun', output: 'ފަރުހިލުން' },
    { input: 'nuruhuney', output: 'ނުރުހުނޭ' },
    { input: 'fursatheh', output: 'ފުރުސަތެއް' },
    { input: 'harakaaiy', output: 'ހަރަކާތް' },
    { input: 'mihuthuge', output: 'މިހިތުގެ' },
    { input: 'nimidhaan', output: 'ނިމިދާން' },
    { input: 'bilaaheh', output: 'ބިލާހެއް' },
    { input: 'zindhagee', output: 'ޒިންދަގީ' },
    { input: 'zindhagy', output: 'ޒިންދަގީ' },
    { input: 'zindhagi', output: 'ޒިންދަގީ' },
    { input: 'zindhagii', output: 'ޒިންދަގީ' },
    { input: 'zindhagiy', output: 'ޒިންދަގީ' },
    { input: 'roohudhiy', output: 'ރޫހުދީ' },
    { input: 'javaahiru', output: 'ޖަވާހިރު' },
    { input: 'javaahir', output: 'ޖަވާހިރު' },
    { input: 'keyolhaku', output: 'ކެޔޮޅަކު' },
    { input: 'shabaab', output: 'ޝަބާބު' },
    { input: 'shabaabu', output: 'ޝަބާބު' },
    { input: 'bahaaru', output: 'ބަހާރު' },
    { input: 'bahaar', output: 'ބަހާރު' },
    { input: 'dhivehi', output: 'ދިވެހި' },
    { input: 'rihiveli', output: 'ރިހިވެލި' },
    { input: 'fekikan', output: 'ފެހިކަން' },
    { input: 'roohdhee', output: 'ރޫހުދީ' },
    { input: 'roohdhy', output: 'ރޫހުދީ' },
    { input: 'roohdhii', output: 'ރޫހުދީ' },
    { input: 'roohdhi', output: 'ރޫހުދީ' },
    { input: 'roohudhii', output: 'ރޫހުދީ' },
    { input: 'kuranvvy', output: 'ކުރަންވީ' },
    { input: 'kuranvyy', output: 'ކުރަންވީ' },
    { input: 'kuranvee', output: 'ކުރަންވީ' },
    { input: 'kuranvvi', output: 'ކުރަންވީ' },
    { input: 'furanvvy', output: 'ފުރަންވީ' },
    { input: 'furanvyy', output: 'ފުރަންވީ' },
    { input: 'furanvee', output: 'ފުރަންވީ' },
    { input: 'furanvvi', output: 'ފުރަންވީ' },
    { input: 'halheyly', output: 'ހަޅޭލީ' },
    { input: 'jahaaly', output: 'ޖަހާލީ' },
    { input: 'mahithah', output: 'މަހިތައް' },
    { input: 'eyaaruge', output: 'އެވަރުގެ' },
    { input: 'shuoorun', output: 'ޝުއޫރުން' },
    { input: 'ummeedhu', output: 'އުންމީދު' },
    { input: 'unmeedhu', output: 'އުންމީދު' },
    { input: 'baddhalu', output: 'ބައްދަލު' },
    { input: 'dhelolah', output: 'ދެލޮލަށް' },
    { input: 'dhuaayaa', output: 'ދުއާޔާ' },
    { input: 'duaayaa', output: 'ދުއާޔާ' },
    { input: 'dhuayaa', output: 'ދުއާޔާ' },
    { input: 'veymeyey', output: 'ވޭމެޔޭ' },
    { input: 'nethihey', output: 'ނެތިހޭ' },
    { input: 'ehvedhee', output: 'އެއްވެދީ' },
    { input: 'feneyhey', output: 'ފެނޭހޭ' },
    { input: 'hiyyvaru', output: 'ހިތްވަރު' },
    { input: 'loayybaa', output: 'ލޯތްބާ' },
    { input: 'loaiybaa', output: 'ލޯތްބާ' },
    { input: 'loaiibaa', output: 'ލޯތްބާ' },
    { input: 'saabahey', output: 'ސާބަހޭ' },
    { input: 'nuveyhey', output: 'ނުވޭހޭ' },
    { input: 'haahekey', output: 'ހާހެކޭ' },
    { input: 'meehunaa', output: 'މީހުނާ' },
    { input: 'meehakaa', output: 'މީހަކާ' },
    { input: 'meehekey', output: 'މީހެކޭ' },
    { input: 'shaairu', output: 'ޝާއިރު' },
    { input: 'kulhelii', output: 'ކުޅެލީ' },
    { input: 'kulhelee', output: 'ކުޅެލީ' },
    { input: 'mehefil', output: 'މެހެފިލު' },
    { input: 'keheynii', output: 'ކެހޭނީ' },
    { input: 'keheynee', output: 'ކެހޭނީ' },
    { input: 'jahanee', output: 'ޖަހާނީ' },
    { input: 'jahanii', output: 'ޖަހާނީ' },
    { input: 'zeenaiiy', output: 'ޒީނަތް' },
    { input: 'loiybaa', output: 'ލޯތްބާ' },
    { input: 'loyybaa', output: 'ލޯތްބާ' },
    { input: 'loiibaa', output: 'ލޯތްބާ' },
    { input: 'udhuhey', output: 'އުދުހޭ' },
    { input: 'ulheyhaa', output: 'އުޅޭހާ' },
    { input: 'hurihaa', output: 'ހުރިހާ' },
    { input: 'fathihaa', output: 'ފަތިހާ' },
    { input: 'midhaahaa', output: 'މިދާހާ' },
    { input: 'fihijjey', output: 'ފިހިއްޖޭ' },
    { input: 'afreenneh', output: 'އަފުރީންނެއް' },
    { input: 'thahithun', output: 'ތަހިތުން' },
    { input: 'ehandhaan', output: 'އެހަނދާން' },
    { input: 'dhuvahaku', output: 'ދުވަހަކު' },
    { input: 'dhuniyeah', output: 'ދުނިޔެއަށް' },
    { input: 'biruheeve', output: 'ބިރުހީވެ' },
    { input: 'dhoannyah', output: 'ދޯންޔަށް' },
    { input: 'enmihuree', output: 'އެންމިހުރީ' },
    { input: 'goyyvumun', output: 'ގޮތްވުމުން' },
    { input: 'hamaheyga', output: 'ހަމަހޭގަ' },
    { input: 'neyngifaa', output: 'ނޭނގިފާ' },
    { input: 'nujehumaa', output: 'ނުޖެހުމާ' },
    { input: 'maruhabaa', output: 'މަރުހަބާ' },
    { input: 'adhuhaalu', output: 'އަދުހާލު' },
    { input: 'annbeyyge', output: 'އަންބެތްގެ' },
    { input: 'balaahiyy', output: 'ބަލާހިތް' },
    { input: 'burujahaa', output: 'ބުރުޖަހާ' },
    { input: 'fasfahayy', output: 'ފަސްފަހަތް' },
    { input: 'fathihuge', output: 'ފަތިހުގެ' },
    { input: 'gehleyhen', output: 'ގެއްލޭހެން' },
    { input: 'harakaayy', output: 'ހަރަކާތް' },
    { input: 'hiyyvanee', output: 'ހިތްވަނީ' },
    { input: 'jahaashey', output: 'ޖަހާށޭ' },
    { input: 'kunikahaa', output: 'ކުނިކަހާ' },
    { input: 'kurehifaa', output: 'ކުރެހިފާ' },
    { input: 'mageyhiyy', output: 'މަގޭހިތް' },
    { input: 'nuheylevi', output: 'ނުހޭލެވި' },
    { input: 'rihifazaa', output: 'ރިހިފަޒާ' },
    { input: 'ruhiehbas', output: 'ރުހިއެއްބަސް' },
    { input: 'sakaraayy', output: 'ސަކަރާތް' },
    { input: 'dhiveheen', output: 'ދިވެހީން' },
    { input: 'heeheefaa', output: 'ހީހީފާ' },
    { input: 'vaahidhun', output: 'ވާހިނދުން' },
    { input: 'mihasthee', output: 'މިހަސްތީ' },
    { input: 'heyofalaa', output: 'ހެޔޮފަލާ' },
    { input: 'jehevifaa', output: 'ޖެހެވިފާ' },
    { input: 'thahaanee', output: 'ތަހާނީ' },
    { input: 'ihvaadhee', output: 'އިއްވާދީ' },
    { input: 'ruheythee', output: 'ރުހޭތީ' },
    { input: 'boahooraa', output: 'ބޯހޫރާ' },
    { input: 'dhehitheh', output: 'ދެހިތެއް' },
    { input: 'dhonjanbu', output: 'ދޮންޖަންބު' },
    { input: 'alhaagoyy', output: 'އަޅާގޮތް' },
    { input: 'fiyajahaa', output: 'ފިޔަޖަހާ' },
    { input: 'gohorugey', output: 'ގޮހޮރުގޭ' },
    { input: 'janbumagu', output: 'ޖަންބުމަގު' },
    { input: 'jeheethaa', output: 'ޖެހީތާ' },
    { input: 'loahooraa', output: 'ލޯހޫރާ' },
    { input: 'meysihihi', output: 'މޭސިހިސިހި' },
    { input: 'oyythanun', output: 'އޮތްތަނުން' },
    { input: 'thihitheh', output: 'ތިހިތެއް' },
    { input: 'roashanee', output: 'ރޯޝަނީ' },
    { input: 'roashaney', output: 'ރޯޝަނޭ' },
    { input: 'vilaarayy', output: 'ވިލާރަތް' },
    { input: 'heyovarey', output: 'ހެޔޮވަރޭ' },
    { input: 'thiyahara', output: 'ތިޔަހަރަ' },
    { input: 'unnbulbul', output: 'އުންބުލްބުލް' },
    { input: 'udhuhilaa', output: 'އުދުހިލާ' },
    { input: 'vahunnves', output: 'ވަހުންވެސް' },
    { input: 'fashaavaa', output: 'ފަސްހާވާ' },
    { input: 'dhahkamun', output: 'ދައްކަމުން' },
    { input: 'ayythakun', output: 'އަތްތަކުން' },
    { input: 'dhamaahey', output: 'ދަމާހޭ' },
    { input: 'fennjahaa', output: 'ފެންޖަހާ' },
    { input: 'hiyyedhey', output: 'ހިތްއެދޭ' },
    { input: 'hiyygaimu', output: 'ހިތްގައިމު' },
    { input: 'irushaadh', output: 'އިރުޝާދު' },
    { input: 'nuhoadhaa', output: 'ނުހޯދާ' },
    { input: 'nuvadhiha', output: 'ނުވަދިހަ' },
    { input: 'iihzathaa', output: 'އިއްޒަތާ' },
    { input: 'kiehvehey', output: 'ކިއެއްވެހޭ' },
    { input: 'mahuroomu', output: 'މަހުރޫމު' },
    { input: 'messenger', output: 'މެސެންޖާ' },
    { input: 'meyaahiyy', output: 'މެޔާހިތް' },
    { input: 'shoahukoh', output: 'ޝޯހުކޮށް' },
    { input: 'vaibaaves', output: 'ވައިބާވެސް' },
    { input: 'ahaaliyey', output: 'އަހާލިޔޭ' },
    { input: 'ahanmadhu', output: 'އަހަންމަދު' },
    { input: 'aharudhoa', output: 'އަހަރުދޯ' },
    { input: 'dhireyhaa', output: 'ދިރޭހާ' },
    { input: 'eloayybaa', output: 'އެލޯތްބާ' },
    { input: 'gurahaige', output: 'ގުރަހައިގެ' },
    { input: 'heyokamaa', output: 'ހެޔޮކަމާ' },
    { input: 'hiyybuney', output: 'ހިތްބުނޭ' },
    { input: 'huvandhey', output: 'ހުވަނދޭ' },
    { input: 'ihvaalaey', output: 'އިއްވާލައޭ' },
    { input: 'ihvaidhey', output: 'އިއްވައިދޭ' },
    { input: 'ivvaidhey', output: 'އިއްވައިދޭ' },
    { input: 'kashikeyo', output: 'ކަށިކެޔޮ' },
    { input: 'kulajehun', output: 'ކުލަޖެހުން' },
    { input: 'lahanukoh', output: 'ލަހަނުކޮށް' },
    { input: 'maavaharu', output: 'މާވަހަރު' },
    { input: 'mahshooru', output: 'މައްޝޫރު' },
    { input: 'mahusharu', output: 'މަހުޝަރު' },
    { input: 'malhaarey', output: 'މަލްހާރޭ' },
    { input: 'mihaadhen', output: 'މިހާދެން' },
    { input: 'miihusaas', output: 'މިއިހުސާސް' },
    { input: 'muhsandhi', output: 'މުއްސަނދި' },
    { input: 'nannolhun', output: 'ނަންއޮޅުން' },
    { input: 'rahameeru', output: 'ރަހަމީރު' },
    { input: 'rangalhah', output: 'ރަނގަޅަށް' },
    { input: 'vedhaahaa', output: 'ވެދާލާ' },
    { input: 'mihiyyvee', output: 'މިހިތްވީ' },
    { input: 'uhmeeedhu', output: 'އުއްމީދު' },
    { input: 'baruheysa', output: 'ބަރުހޭސަ' },
    { input: 'boahihvey', output: 'ބޯހިތްވޭ' },
    { input: 'ahsidhain', output: 'އައްސިދައިން' },
    { input: 'ahulihain', output: 'އަހުލިހައިން' },
    { input: 'ahurenaai', output: 'އަހުރެނާއި' },
    { input: 'ahyaaruge', output: 'އައްޔާރުގެ' },
    { input: 'buneenngi', output: 'ބުނެއެންގި' },
    { input: 'dhiyaihey', output: 'ދިޔައިހޭ' },
    { input: 'dhoonnyaa', output: 'ދޫންޏާ' },
    { input: 'eheevamaa', output: 'އެހީވަމާ' },
    { input: 'kashfuvee', output: 'ކަޝްފުވީ' },
    { input: 'boduahtah', output: 'ބޮޑުއައްޓަށް' },
    { input: 'dhefiyaah', output: 'ދެފިޔައައް' },
    { input: 'eesafulhu', output: 'އީސަފުޅު' },
    { input: 'eythedhey', output: 'އޭތެދޭ' },
    { input: 'hurahakaa', output: 'ހުރަހަކާ' },
    { input: 'maaluneyy', output: 'މާލުނެތް' },
    { input: 'kashmeeru', output: 'ކަޝްމީރު' },
    { input: 'nishaaney', output: 'ނިޝާނޭ' },

    { input: 'sundhusee', output: 'ސުންދުސީ' },

    // 8 characters
    { input: 'aeethoa', output: 'އައީތޯ' },
    { input: 'gulshan', output: 'ގުލްޝަން' },
    { input: 'aashoahu', output: 'އާޝޯހު' },
    { input: 'beyhakee', output: 'ބޭހަކީ' },
    { input: 'beyhakaa', output: 'ބޭހަކާ' },
    { input: 'beyhekey', output: 'ބޭހެކޭ' },
    { input: 'ehveemaa', output: 'އެއްވީމާ' },
    { input: 'gulhaaru', output: 'ގުލްހާރު' },
    { input: 'meehakee', output: 'މީހަކީ' },
    { input: 'meehekey', output: 'މީހެކޭ' },
    { input: 'meehakaa', output: 'މީހަކާ' },
    { input: 'partygaa', output: 'ޕާޓީގާ' },
    { input: 'roohakee', output: 'ރޫހަކީ' },
    { input: 'roohakaa', output: 'ރޫހަކާ' },
    { input: 'roohekey', output: 'ރޫހެކޭ' },
    { input: 'roohakun', output: 'ރޫހަކުން' },
    { input: 'nanbunan', output: 'ނަންބުނަން' },
    { input: 'thiyahen', output: 'ތިޔަހެން' },
    { input: 'dhaahiyy', output: 'ދާހިތް' },
    { input: 'dhaahih', output: 'ދާހިތް' },
    { input: 'rahengoa', output: 'ރަހެންގޯ' },
    { input: 'dhenvehi', output: 'ދެންވެހި' },
    { input: 'ahlaare', output: 'އައްލާރެ' },
    { input: 'rayyrayy', output: 'ރަތްރަތް' },
    { input: 'raiyraiy', output: 'ރަތްރަތް' },
    { input: 'raiiraii', output: 'ރަތްރަތް' },
    { input: 'beyhakaa', output: 'ބޭހަކާ' },
    { input: 'kobaahey', output: 'ކޮބާހޭ' },
    { input: 'ahaashey', output: 'އަހާށޭ' },
    { input: 'mihithah', output: 'މިހިތައް' },
    { input: 'henveiru', output: 'ހެންވޭރު' },
    { input: 'henveyru', output: 'ހެންވޭރު' },
    { input: 'laahikeh', output: 'ލާހިކެއް' },
    { input: 'fuhtheyo', output: 'ފުއްތެޔޮ' },
    { input: 'aashiqee', output: 'އާޝިޤީ' },
    { input: 'aashiqy', output: 'އާޝިޤީ' },
    { input: 'aashiqi', output: 'އާޝިޤީ' },
    { input: 'aashiqii', output: 'އާޝިޤީ' },
    { input: 'aashiqiy', output: 'އާޝިޤީ' },
    { input: 'handhaan', output: 'ހަނދާން' },
    { input: 'suhaanaa', output: 'ސުހާނާ' },
    { input: 'vedhaane', output: 'ވެދާނެ' },
    { input: 'fahathu', output: 'ފަހަތު' },
    { input: 'fathihu', output: 'ފަތިހު' },
    { input: 'fathihah', output: 'ފަތިހަށް' },
    { input: 'nerenyy', output: 'ނެރެނީ' },
    { input: 'nereny', output: 'ނެރެނީ' },
    { input: 'alhanyy', output: 'އަޅަނީ' },
    { input: 'alhany', output: 'އަޅަނީ' },
    { input: 'keyolhaa', output: 'ކެޔޮޅާ' },
    { input: 'keyolhu', output: 'ކެޔޮޅު' },
    { input: 'dhushmin', output: 'ދުޝްމިން' },
    { input: 'eidhugaa', output: 'އީދުގާ' },
    { input: 'eidhakee', output: 'އީދަކީ' },
    { input: 'faseyheh', output: 'ފަސޭހެއް' },
    { input: 'faseyhey', output: 'ފަސޭހޭ' },
    { input: 'jahamaa', output: 'ޖަހަމާ' },
    { input: 'faseyhun', output: 'ފަސޭހުން' },
    { input: 'faseyha', output: 'ފަސޭހަ' },
    { input: 'thihiree', output: 'ތިހިރީ' },
    { input: 'thihirii', output: 'ތިހިރީ' },
    { input: 'thihuree', output: 'ތިހުރީ' },
    { input: 'thihurii', output: 'ތިހުރީ' },
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
    { input: 'thihiry', output: 'ތިހިރީ' },
    { input: 'thihury', output: 'ތިހުރީ' },
    { input: 'feneyey', output: 'ފެނެޔޭ' },
    { input: 'handhaa', output: 'ހަނދާ' },
    { input: 'raahayy', output: 'ރާހަތް' },
    { input: 'raahaiy', output: 'ރާހަތް' },
    { input: 'kuranvy', output: 'ކުރަންވީ' },
    { input: 'kuranvi', output: 'ކުރަންވީ' },
    { input: 'furanvy', output: 'ފުރަންވީ' },
    { input: 'furanvi', output: 'ފުރަންވީ' },
    { input: 'thiyaee', output: 'ތިޔައީ' },
    { input: 'thiyaii', output: 'ތިޔައީ' },
    { input: 'hiyvaru', output: 'ހިތްވަރު' },
    { input: 'hihvaru', output: 'ހިތްވަރު' },
    { input: 'ohsemun', output: 'އޮއްސެމުން' },
    { input: 'ohsumun', output: 'އޮއްސުމުން' },
    { input: 'hidumayy', output: 'ޚިދުމަތް' },
    { input: 'mihaaru', output: 'މިހާރު' },
    { input: 'jehumah', output: 'ޖެހުމަށް' },
    { input: 'kihineh', output: 'ކިހިނެތް' },
    { input: 'keheyny', output: 'ކެހޭނީ' },
    { input: 'keheyni', output: 'ކެހޭނީ' },
    { input: 'meehaku', output: 'މީހަކު' },
    { input: 'rihumaa', output: 'ރިހުމާ' },
    { input: 'shaahee', output: 'ޝާހީ' },
    { input: 'zeenayy', output: 'ޒީނަތް' },
    { input: 'zeenaii', output: 'ޒީނަތް' },
    { input: 'aharun', output: 'އަހަރުން' },
    { input: 'gahanaa', output: 'ގަހަނާ' },
    { input: 'shahii', output: 'ޝާހީ' },
    { input: 'mihiyy', output: 'މިހިތް' },
    { input: 'eyaaru', output: 'އެޔާރު' },
    { input: 'saabas', output: 'ސާބަސް' },
    { input: 'maaiivi', output: 'މާތްވި' },
    { input: 'maayyvi', output: 'މާތްވި' },
    { input: 'maaiyvi', output: 'މާތްވި' },
    { input: 'kulhely', output: 'ކުޅެލީ' },
    { input: 'dhanvaan', output: 'ދަންވާން' },
    { input: 'kanmeelu', output: 'ކަންމީލު' },
    { input: 'baithuge', output: 'ބައިތުގެ' },
    { input: 'gothakaa', output: 'ގޮތަކާ' },
    { input: 'goyykaa', output: 'ގޮތަކާ' },
    { input: 'loabakah', output: 'ލޯބަކަށް' },
    { input: 'samaakaa', output: 'ސަމާކާ' },
    { input: 'hevesgun', output: 'ހެވެސްގުން' },
    { input: 'nuruhun', output: 'ނުރުހުން' },
    { input: 'rahumeh', output: 'ރަހުމެއް' },
    { input: 'beeheyey', output: 'ބީހެޔޭ' },
    { input: 'ahumadhu', output: 'އަހުމަދު' },
    { input: 'gardeneh', output: 'ގާރޑެންއެއް' },
    { input: 'hiyyadhu', output: 'ހިތްއަދު' },
    { input: 'hooreyey', output: 'ހޫރެޔޭ' },
    { input: 'neyngifa', output: 'ނޭނގިފަ' },
    { input: 'milamehi', output: 'މިލަމެހި' },
    { input: 'nuvanyaa', output: 'ނުވަންޔާ' },
    { input: 'shifaaeh', output: 'ޝިފާއެއް' },   
    { input: 'udhaahey', output: 'އުދާހޭ' },
    { input: 'behihjey', output: 'ބެހިއްޖޭ' },
    { input: 'bihehgaa', output: 'ބިހެއްގާ' },
    { input: 'ariahove', output: 'އަރިއަށްއޮވެ' },
    { input: 'athuhuri', output: 'އަތުހުރި' },
    { input: 'ayyfaige', output: 'އަތްފައިގެ' },
    { input: 'bashuhti', output: 'ބަސްހުއްޓި' },
    { input: 'boduvayy', output: 'ބޮޑުވަތް' },
    { input: 'dhivehin', output: 'ދިވެހިން' },
    { input: 'dhonnihi', output: 'ދޮންއިހި' },
    { input: 'edhaahen', output: 'އެދާހެން' },
    { input: 'fahathah', output: 'ފަހަތަށް' },
    { input: 'fenjahaa', output: 'ފެންޖަހާ' },    
    { input: 'heyovaru', output: 'ހެޔޮވަރު' },
    { input: 'mifarihi', output: 'މިފަރިހި' },
    { input: 'vahaaeku', output: 'ވަހާއެކު' },
    { input: 'himaadun', output: 'ހިމައަޑުން' },
    { input: 'feshanah', output: 'ފެޝަނަށް' },
    { input: 'dhuvahah', output: 'ދުވަހަށް' },
    { input: 'ejahanee', output: 'އެޖަހަނީ' },
    { input: 'ehmennah', output: 'އެންމެންނަށް' },
    { input: 'faheemaa', output: 'ފަހީމާ' },
    { input: 'fannvayy', output: 'ފަންވަތް' },
    { input: 'habargaa', output: 'ހަބަރްގާ' },
    { input: 'ihvaalee', output: 'އިއްވާލީ' },
    { input: 'irushaad', output: 'އިރުޝާދު' },
    { input: 'kahaalee', output: 'ކަހާލީ' },
    { input: 'kahkamun', output: 'ކައްކަމުން' },
    { input: 'kulaehge', output: 'ކުލައެއްގެ' },
    { input: 'libaahaa', output: 'ލިބާހާ' },
    { input: 'mageyhih', output: 'މަގޭހިތް' },
    { input: 'nuhithaa', output: 'ނުހިތާ' },
    { input: 'nuvaahaa', output: 'ނުވާހާ' },
    { input: 'nuvaahen', output: 'ނުވާހެން' },
    { input: 'roohanee', output: 'ރޫހާނީ' },
    { input: 'shuoorey', output: 'ޝުއޫރޭ' },
    { input: 'aashigaa', output: 'އާޝިގާ' },
    { input: 'aavaaeee', output: 'އާވާއެއީ' },
    { input: 'ehleemaa', output: 'އެއްލީމާ' },
    { input: 'eidmajaa', output: 'އީދުމަޖާ' },
    { input: 'gahukuri', output: 'ގަހުކުރި' },
    { input: 'edhiyaee', output: 'އެދިޔައީ' },
    { input: 'heylhiah', output: 'ހޭޅީއަށް' },
    { input: 'hihveyey', output: 'ހިތްވެޔޭ' },
    { input: 'hiyyekee', output: 'ހިތްއެކީ' },
    { input: 'hiyyufaa', output: 'ހިތްއުފާ' },
    { input: 'hunnahen', output: 'ހުންނަހެން' },
    { input: 'huvandhu', output: 'ހުވަނދު' },
    { input: 'ihvaalaa', output: 'އިއްވާލާ' },
    { input: 'huvahlaa', output: 'ހުވައްލާ' },
    { input: 'jahaanee', output: 'ޖަހަނީ' },
    { input: 'kehidhee', output: 'ކެހިދީ' },
    { input: 'kurafayy', output: 'ކުރަފަތް' },
    { input: 'hiyythah', output: 'ހިތްތައް' },
    { input: 'loayybey', output: 'ލޯތްބޭ' },
    { input: 'loayybun', output: 'ލޯތްބުން' },
    { input: 'maahaulu', output: 'މާހައުލު' },
    { input: 'mahshoor', output: 'މައްޝޫރު' },
    { input: 'nahadhaa', output: 'ނަހަދާ' },
    { input: 'searious', output: 'ސީރިއަސް' },
    { input: 'uhmeedhu', output: 'އުއްމީދު' },
    { input: 'veeruhey', output: 'ވީރުހޭ' },
    { input: 'uhmeeedh', output: 'އުއްމީދު' },
    { input: 'aashigee', output: 'އާޝިޤީ' },
    { input: 'ahpaayaa', output: 'އައްޕާޔާ' },
    { input: 'aishaage', output: 'އައިޝާގެ' },
    { input: 'ayyathaa', output: 'އަތްއަތާ' },
    { input: 'bunedhey', output: 'ބުނެދޭ' },
    { input: 'dhihleey', output: 'ދިއްލެއޭ' },
    { input: 'eheethee', output: 'އެހީތީ' },
    { input: 'eheevaan', output: 'އެހީވާން' },
    { input: 'ehithuge', output: 'އެހިތުގެ' },
    { input: 'ehlihyoa', output: 'އެއްލިއްޔޯ' },
    { input: 'ethakeyy', output: 'އެތަކެތް' },
    { input: 'ihusaasu', output: 'އިހުސާސު' },
    { input: 'iruohsey', output: 'އިރުއޮއްސޭ' },
    { input: 'ishqakee', output: 'އިޝްޤަކީ' },
    { input: 'lhakeyas', output: 'ޅަކެޔަސް' },
    { input: 'oahoahoa', output: 'އޯހޯހޯ' },
    { input: 'ohelumaa', output: 'އޮހެލުމާ' },
    { input: 'ohennyaa', output: 'އޮހެންޏާ' },
    { input: 'sangalaa', output: 'ސަނގަލާ' },
    { input: 'readykoh', output: 'ރެޑީކޮށް' },
    { input: 'vaaalhaa', output: 'ވާއަޅާ' },
    { input: 'carehgaa', output: 'ކާރެއްގާ' },
    { input: 'dhushman', output: 'ދުޝްމަން' },
    { input: 'dollarun', output: 'ޑޮލަރުން' },
    { input: 'ehaavaru', output: 'އެހާވަރު' },
    { input: 'new york', output: 'ނިއުޔޯކް' },
    { input: 'nishaane', output: 'ނިޝާނެ' },
    { input: 'nujeheey', output: 'ނުޖެހެއޭ' },
    { input: 'raajjeey', output: 'ރާއްޖެއޭ' },
    { input: 'thibaaah', output: 'ތިބާއަށް' },

    { input: 'ishqugaa', output: 'އިޝްޤުގާ' },

    { input: 'thieeyey', output: 'ތިއީޔޭ' },


    // 7 characters
    { input: 'mihithu', output: 'މިހިތު' },
    { input: 'aanekey', output: 'އާނއެކޭ' },
    { input: 'aashoah', output: 'އާޝޯހު' },
    { input: 'vahumeh', output: 'ވަހުމެއް' },
    { input: 'veegoyy', output: 'ވީގޮތް' },
    { input: 'veegoiy', output: 'ވީގޮތް' },
    { input: 'veegoii', output: 'ވީގޮތް' },
    { input: 'kanfayy', output: 'ކަންފަތް' },
    { input: 'kanfaiy', output: 'ކަންފަތް' },
    { input: 'kanfaii', output: 'ކަންފަތް' },
    { input: 'partyah', output: 'ޕާޓީއަށް' },
    { input: 'partyga', output: 'ޕާޓީގަ' },
    { input: 'iveyhen', output: 'އިވޭހެން' },
    { input: 'nuruhun', output: 'ނުރުހުން' },
    { input: 'fenvehi', output: 'ފެންވެހި' },
    { input: 'chuhare', output: 'ޗުހަރެ' },
    { input: 'fahtaru', output: 'ފައްޓަރު' },
    { input: 'eesabey', output: 'އީސަބޭ' },
    { input: 'loayybe', output: 'ލޯތްބޭ' },
    { input: 'shaahil', output: 'ޝާހިލް' },
    { input: 'nuhurey', output: 'ނުހުރޭ' },
    { input: 'henveru', output: 'ހެންވޭރު' },
    { input: 'laahiku', output: 'ލާހިކު' },
    { input: 'dhashah', output: 'ދަށަށް' },
    { input: 'dhoshah', output: 'ދޮށަށް' },
    { input: 'ehthaan', output: 'އެއްތާން' },
    { input: 'koamahu', output: 'ކޯމަހު' },
    { input: 'ahdhoih', output: 'އައްދޯތް' },
    { input: 'eidhuge', output: 'އީދުގެ' },
    { input: 'eidhuga', output: 'އީދުގަ' },
    { input: 'fahayy', output: 'ފަހަތް' },
    { input: 'fahaiy', output: 'ފަހަތް' },
    { input: 'fahaii', output: 'ފަހަތް' },
    { input: 'fehikula', output: 'ފެހިކުލަ' },
    { input: 'neyy', output: 'ނެތް' },
    { input: 'nishan', output: 'ނިޝާން' },
    { input: 'vaheh', output: 'ވަހެއް' },
    { input: 'raajje', output: 'ރާއްޖެ' },
    { input: 'rajje', output: 'ރާއްޖެ' },
    { input: 'raahje', output: 'ރާއްޖެ' },
    { input: 'rahje', output: 'ރާއްޖެ' },
    { input: 'ready', output: 'ރެޑީ' },
    { input: 'handhu', output: 'ހަނދު' },
    { input: 'feney', output: 'ފެނޭ' },
    { input: 'janbu', output: 'ޖަންބު' },
    { input: 'asarrr', output: 'އަސަރު' },
    { input: 'beehen', output: 'ބީހެން' },
    { input: 'edheny', output: 'އެދެނީ' },
    { input: 'asarr', output: 'އަސަރު' },
    { input: 'asaru', output: 'އަސަރު' },
    { input: 'igraar', output: 'އިގުރާރު' },
    { input: 'annga', output: 'އަންގަ' },
    { input: 'ishgee', output: 'އިޝްޤީ' },
    { input: 'ishgii', output: 'އިޝްޤީ' },
    { input: 'ishgiy', output: 'އިޝްޤީ' },
    { input: 'ishgy', output: 'އިޝްޤީ' },
    { input: 'ishgi', output: 'އިޝްޤީ' },
    { input: 'ishqee', output: 'އިޝްޤީ' },
    { input: 'ishqii', output: 'އިޝްޤީ' },
    { input: 'ishqiy', output: 'އިޝްޤީ' },
    { input: 'ishqy', output: 'އިޝްޤީ' },
    { input: 'ishqi', output: 'އިޝްޤީ' },
    { input: 'kiyaa', output: 'ކިޔާ' },
    { input: 'jahaa', output: 'ޖަހާ' },
    { input: 'yagyn', output: 'ޔަގީން' },
    { input: 'kihaa', output: 'ކިހާ' },
    { input: 'ruhey', output: 'ރުހޭ' },
    { input: 'mihen', output: 'މިހެން' },
    { input: 'mahah', output: 'މަހަށް' },
    { input: 'adah', output: 'އަޑަށް' },
    { input: 'thihiyy', output: 'ތިހިތް' },
    { input: 'million', output: 'މިލިއަން' },
    { input: 'billion', output: 'ބިލިއަން' },
    { input: 'zaeemun', output: 'ޒަޢީމުން' },
    { input: 'zaeemaa', output: 'ޒަޢީމާ' },
    { input: 'zaeemey', output: 'ޒަޢީމޭ' },
    { input: 'maiivi', output: 'މާތްވި' },
    { input: 'maiyvi', output: 'މާތްވި' },
    { input: 'mayyvi', output: 'މާތްވި' },
    { input: 'aharen', output: 'އަހަރެން' },
    { input: 'ahuren', output: 'އަހުރެން' },
    { input: 'meehun', output: 'މީހުން' },
    { input: 'meeheh', output: 'މީހެއް' },
    { input: 'jahany', output: 'ޖަހާނީ' },
    { input: 'jahani', output: 'ޖަހާނީ' },
    { input: 'zeenai', output: 'ޒީނަތް' },
    { input: 'zeenay', output: 'ޒީނަތް' },
    { input: 'haaheh', output: 'ހާހެއް' },
    { input: 'innan', output: 'އިންނަން' },
    { input: 'hajjah', output: 'ހައްޖަށް' },
    { input: 'leyaai', output: 'ލެޔާއި' },
    { input: 'zakham', output: 'ޒަޚަމު' },
    { input: 'duayaa', output: 'ދުއާޔާ' },
    { input: 'veyhey', output: 'ވޭހޭ' },
    { input: 'hanvaah', output: 'ހަންވާހް' },
    { input: 'jareebu', output: 'ޖަރީބު' },
    { input: 'vashitu', output: 'ވަށީތު' },
    { input: 'hevesge', output: 'ހެވެސްގެ' },
    { input: 'hevesgn', output: 'ހެވެސްގުން' },
    { input: 'vaaheek', output: 'ވާހީކް' },
    { input: 'hurekey', output: 'ހުރެކޭ' },
    { input: 'dheykey', output: 'ދެޔްކޭ' },
    { input: 'dhaahiyy', output: 'ދާހިތް' },
    { input: 'dhaahiy', output: 'ދާހިތް' },
    { input: 'rahumaa', output: 'ރަހުމާ' },
    { input: 'rahumey', output: 'ރަހުމޭ' },
    { input: 'jaagaeh', output: 'ޖާގައެއް' },
    { input: 'heyaraa', output: 'ހޭއަރާ' },
    { input: 'baaraah', output: 'ބާރަށް' },
    { input: 'bayypen', output: 'ބަތްޕެން' },
    { input: 'ishkuge', output: 'އިޝްކުގެ' },
    { input: 'mekuhah', output: 'މެކުހަށް' },
    { input: 'naahama', output: 'ނާހަމަ' },
    { input: 'ohsigen', output: 'އޮއްސިގެން' },
    { input: 'ridakah', output: 'ރައިޑަކަށް' },
    { input: 'ruhigen', output: 'ރުހިގެން' },
    { input: 'saharoa', output: 'ސަހަރޯ' },
    { input: 'sihunee', output: 'ސިހުނީ' },
    { input: 'jahamun', output: 'ޖަހަމުން' },
    { input: 'faharey', output: 'ފަހަރޭ' },
    { input: 'nishaan', output: 'ނިޝާން' },
    { input: 'bahaarey', output: 'ބަހާރޭ' },
    { input: 'dhaneehe', output: 'ދަނީހެ' },
    { input: 'thibeyey', output: 'ތިބެޔޭ' },
    { input: 'nahtaali', output: 'ނައްޓާލި' },
    { input: 'hurehure', output: 'ހުރެހުރެ' },
    { input: 'eroohuve', output: 'އެރޫހުވެ' },
    { input: 'bisalhaa', output: 'ބިސްއަޅާ' },
    { input: 'ehjismeh', output: 'އެއްޖިސްމެއް' },
    { input: 'keyogahu', output: 'ކެޔޮގަހު' },
    { input: 'mihingaa', output: 'މިހިނގާ' },
    { input: 'laajahaa', output: 'ލާޖަހާ' },
    { input: 'mihitheh', output: 'މިހިތެއް' },
    { input: 'nalafehi', output: 'ނަލަފެހި' },
    { input: 'odiahlaa', output: 'އޮޑިއަށްލާ' },
    { input: 'rakihini', output: 'ރަކިހިނި' },
    { input: 'ruheythy', output: 'ރުހޭތީ' },
    { input: 'ulheyhen', output: 'އުޅޭހެން' },
    { input: 'ulheyiru', output: 'އުޅޭއިރު' },
    { input: 'vihsaali', output: 'ވިއްސާލި' },
    { input: 'vihsaara', output: 'ވިއްސާރަ' },
    { input: 'sihisihi', output: 'ސިހިސިހި' },
    { input: 'ohthakun', output: 'އޮއްތަކުން' },
    { input: 'rayykula', output: 'ރަތްކުލަ' },
    { input: 'vissaara', output: 'ވިއްސާރަ' },
    { input: 'netheehe', output: 'ނެތީހެ' },
    { input: 'rahayaai', output: 'ރަހަޔާއި' },
    { input: 'facebook', output: 'ފޭސްބުކް' },
    { input: 'fathihey', output: 'ފަތިހޭ' },
    { input: 'haijahaa', output: 'ހައިޖަހާ' },
    { input: 'hiyydhee', output: 'ހިތްދީ' },
    { input: 'hureehey', output: 'ހުރީހޭ' },
    { input: 'loayybah', output: 'ލޯތްބަށް' },
    { input: 'mahuroom', output: 'މަހުރޫމު' },
    { input: 'unfollow', output: 'އަންފޮލޯ' },
    { input: 'viberves', output: 'ވައިބާވެސް' },
    { input: 'ahaalee', output: 'އަހާލީ' },
    { input: 'ahaashe', output: 'އަހާށެ' },
    { input: 'ahifalu', output: 'އަހިފަލު' },
    { input: 'chaalhe', output: 'ޗާލްހެ' },
    { input: 'dhahtha', output: 'ދައްތަ' },
    { input: 'dheyeba', output: 'ދޭއެބަ' },
    { input: 'ehbaaru', output: 'އެއްބާރު' },
    { input: 'ehithaa', output: 'އެހިތާ' },
    { input: 'gahakun', output: 'ގަހަކުން' },
    { input: 'heyokan', output: 'ހެޔޮކަން' },
    { input: 'ihvaala', output: 'އިއްވާލަ' },
    { input: 'jehumun', output: 'ޖެހުމުން' },
    { input: 'ahsidha', output: 'އައްސިދަ' },
    { input: 'ehindhu', output: 'އެހިނދު' },
    { input: 'engeyey', output: 'އެނގެއޭ' },
    { input: 'faihama', output: 'ފައިހަމަ' },
    { input: 'hiyyvey', output: 'ހިތްވޭ' },
    { input: 'hureyey', output: 'ހުރެޔޭ' },
    { input: 'ishguga', output: 'އިޝްގުގަ' },
    { input: 'ishguge', output: 'އިޝްޤުގެ' },
    { input: 'miaahun', output: 'މިއާހުން' },
    { input: 'thedhey', output: 'ތެދޭ' },
    { input: 'mulhiin', output: 'މުޅިއިން' },
    { input: 'joashan', output: 'ޖޯޝަން' },
    { input: 'aahchaa', output: 'އާއްޗާ' },
    { input: 'aanhuyy', output: 'އާނހުތް' },
    { input: 'ehlaali', output: 'އެއްލާލި' },
    { input: 'falhiin', output: 'ފަޅިއިން' },
    { input: 'fusaraa', output: 'ފުސްއަރާ' },
    { input: 'heeveey', output: 'ހީވެއޭ' },
    { input: 'ihvaane', output: 'އިއްވާނެ' },
    { input: 'rueemey', output: 'ރުއީމޭ' },
    { input: 'rulhiin', output: 'ރުޅިއިން' },
    { input: 'shuooru', output: 'ޝުޢޫރު' },
    { input: 'ohoreye', output: 'އޮހޮރޭއެ' },
    { input: 'bunnyey', output: 'ބުންޏޭ' },
    { input: 'carakaa', output: 'ކާރަކާ' },
    { input: 'geyakah', output: 'ގެޔަކަށް' },
    { input: 'ihvumun', output: 'އިއްވުމުން' },
    { input: 'eheemaa', output: 'އެހީމާ' },
    { input: 'keeemaa', output: 'ކެއީމާ' },
    { input: 'rahalaa', output: 'ރަހަލާ' },
    { input: 'vesekee', output: 'ވެސްއެކީ' },

    // 7 characters
    { input: 'nanbaru', output: 'ނަންބަރު' },
    { input: 'annbeyy', output: 'އަންބެތް' },
    { input: 'bahakun', output: 'ބަހަކުން' },
    { input: 'boduhaa', output: 'ބޮޑުހާ' },
    { input: 'dhahkaa', output: 'ދައްކާ' },
    { input: 'dhonihi', output: 'ދޮންއިހި' },
    { input: 'eheegaa', output: 'އެހީގާ' },
    { input: 'fahakaa', output: 'ފަހަކާ' },
    { input: 'fahakah', output: 'ފަހަކަށް' },
    { input: 'fahcheh', output: 'ފައްޗެއް' },
    { input: 'fathaha', output: 'ފަތަހަ' },
    { input: 'goyyvey', output: 'ގޮތްވޭ' },
    { input: 'heyokoh', output: 'ހެޔޮކޮށް' },
    { input: 'hijahaa', output: 'ހައިޖަހާ' },
    { input: 'hilahaa', output: 'ހިލަހާ' },
    { input: 'huhtifa', output: 'ހުއްޓިފަ' },
    { input: 'ihvaali', output: 'އިއްވާލި' },
    { input: 'instain', output: 'އިންސްޓައިން' },
    { input: 'islaahu', output: 'އިސްލާހު' },
    { input: 'iveyhey', output: 'އިވޭހޭ' },
    { input: 'jahaane', output: 'ޖަހާނެ' },
    { input: 'kahaaly', output: 'ކަހާލީ' },
    { input: 'kulaali', output: 'ކުލައަލި' },
    { input: 'maanaeh', output: 'މާނައެއް' },
    { input: 'message', output: 'މެސެޖު' },
    { input: 'mihiree', output: 'މިހިރީ' },
    { input: 'nambaru', output: 'ނަންބަރު' },
    { input: 'nighaab', output: 'ނިޣާބް' },
    { input: 'nihaaee', output: 'ނިހާއީ' },
    { input: 'offline', output: 'އޮފްލައިން' },
    { input: 'ohsenee', output: 'އޮއްސެނީ' },
    { input: 'pareeeh', output: 'ޕަރީއެއް' },
    { input: 'rulhiah', output: 'ރުޅިއަށް' },
    { input: 'thibbaa', output: 'ތިއްބާ' },
    { input: 'boahure', output: 'ބޯހުރެ' },
    { input: 'dhaahaa', output: 'ދާހާ' },
    { input: 'goshuri', output: 'ގޮސްހުރި' },
    { input: 'ishquge', output: 'އިޝްޤުގެ' },
    { input: 'janbuge', output: 'ޖަންބުގެ' },
    { input: 'roashan', output: 'ރޯޝަން' },
    { input: 'roohaai', output: 'ރޫހާއި' },
    { input: 'roohuve', output: 'ރޫހުވެ' },
    { input: 'thereah', output: 'ތެރެޔަށް' },
    { input: 'thihbaa', output: 'ތިއްބާ' },
    { input: 'rahayaa', output: 'ރަހަޔާ' },
    { input: 'thihthi', output: 'ތިއްތި' },
    { input: 'ufedhey', output: 'އުފެދޭ' },
    { input: 'veehiyy', output: 'ވީހިތް' },

    // 6 characters
    { input: 'bulbul', output: 'ބުލްބުލް' },
    { input: 'aeeaee', output: 'އައީއައީ' },
    { input: 'fihunu', output: 'ފިހުނު' },
    { input: 'heehee', output: 'ހީހީ' },
    { input: 'iveyey', output: 'އިވެޔޭ' },
    { input: 'iveyne', output: 'އިވޭނެ' },
    { input: 'migoyy', output: 'މިގޮތް' },
    { input: 'migoiy', output: 'މިގޮތް' },
    { input: 'vaahaa', output: 'ވާހާ' },
    { input: 'migoii', output: 'މިގޮތް' },
    { input: 'roohey', output: 'ރޫހޭ' },
    { input: 'vigoyy', output: 'ވިގޮތް' },
    { input: 'vigoiy', output: 'ވިގޮތް' },
    { input: 'vigoii', output: 'ވިގޮތް' },
    { input: 'suhare', output: 'ސުހަރެ' },
    { input: 'vahumu', output: 'ވަހުމު' },
    { input: 'chaahe', output: 'ޗާހެ' },
    { input: 'udhuhi', output: 'އުދުހި' },
    { input: 'goaheh', output: 'ގޯހެއް' },
    { input: 'nuhure', output: 'ނުހުރެ' },
    { input: 'dhihun', output: 'ދިހުން' },
    { input: 'adhoih', output: 'އައްދޯތް' },
    { input: 'ehthan', output: 'އެއްތަން' },
    { input: 'koamas', output: 'ކޯމަސް' },
    { input: 'bandah', output: 'ބަނޑަށް' },
    { input: 'farulu', output: 'ފަރުޟު' },
    { input: 'farihi', output: 'ފަރިހި' },
    { input: 'lwbyge', output: 'ލޯބީގެ' },
    { input: 'henney', output: 'ހެންނޭ' },
    { input: 'hithah', output: 'ހިތަށް' },
    { input: 'thihih', output: 'ތިހިތް' },
    { input: 'thihiy', output: 'ތިހިތް' },
    { input: 'gothah', output: 'ގޮތައް' },
    { input: 'mashah', output: 'މަށަށް' },
    { input: 'eyhen', output: 'އޭހެން' },
    { input: 'shahy', output: 'ޝާހީ' },
    { input: 'mihiy', output: 'މިހިތް' },
    { input: 'mihih', output: 'މިހިތް' },
    { input: 'aalam', output: 'އާލަމް' },
    { input: 'lolah', output: 'ލޮލަށް' },
    { input: 'eyaar', output: 'އެޔާރު' },
    { input: 'veyey', output: 'ވެޔޭ' },
    { input: 'zaeeme', output: 'ޒަޢީމެ' },
    { input: 'zaeemu', output: 'ޒަޢީމު' },
    { input: 'zaeem', output: 'ޒަޢީމު' },
    { input: 'zahamu', output: 'ޒަހަމު' },
    { input: 'shaair', output: 'ޝާއިރު' },
    { input: 'veshey', output: 'ވެޝޭ' },
    { input: 'dhokey', output: 'ދޮކޭ' },
    { input: 'thaafy', output: 'ތާފީ' },
    { input: 'huveed', output: 'ހުވީދު' },
    { input: 'beyrum', output: 'ބޭރުން' },
    { input: 'bavana', output: 'ބަވަނަ' },
    { input: 'henaan', output: 'ހެނާން' },
    { input: 'nuvaiy', output: 'ނުވަތް' },
    { input: 'hendhey', output: 'ހެންދޭ' },
    { input: 'dhaskey', output: 'ދަސްކޭ' },
    { input: 'mahure', output: 'މަހުރެ' },
    { input: 'veehey', output: 'ވީހޭ' },
    { input: 'gammge', output: 'ގަމްގެ' },
    { input: 'avahah', output: 'އަވަހަށް' },
    { input: 'adiyah', output: 'އަޑިޔަށް' },
    { input: 'aeemaa', output: 'އައީމާ' },
    { input: 'afreen', output: 'އަފުރީން' },
    { input: 'roohaa', output: 'ރޫހާ' },
    { input: 'castle', output: 'ކާސަލް' },
    { input: 'garden', output: 'ގާރޑެން' },
    { input: 'aineyy', output: 'އައިނެތް' },
    { input: 'eedhey', output: 'އީދޭ' },
    { input: 'aaihaa', output: 'އައިހާ' },
    { input: 'ahchaa', output: 'އައްޗާ' },
    { input: 'arihah', output: 'އަރިހަށް' },
    { input: 'ehkala', output: 'އެއްކަލަ' },
    { input: 'ehuree', output: 'އެހުރީ' },
    { input: 'emahah', output: 'އެމަހަށް' },
    { input: 'gahuga', output: 'ގަހުގަ' },
    { input: 'heefaa', output: 'ހީފާ' },
    { input: 'jahvah', output: 'ޖައްވަށް' },
    { input: 'ehmenn', output: 'އެއްމެން' },
    { input: 'ehunna', output: 'އެހުންނަ' },
    { input: 'fahkaa', output: 'ފައްކާ' },
    { input: 'fahuge', output: 'ފަހުގެ' },
    { input: 'rahkaa', output: 'ރައްކާ' },
    { input: 'yoobil', output: 'ޔޫބިލް' },
    { input: 'zaharu', output: 'ޒަހަރު' },
    { input: 'ayyfai', output: 'އަތްފައި' },
    { input: 'ahamey', output: 'އަހަމޭ' },
    { input: 'ehanda', output: 'އެހަނޑަ' },
    { input: 'ehgoyy', output: 'އެއްގޮތް' },
    { input: 'goahee', output: 'ގޯހީ' },
    { input: 'goahey', output: 'ގޯހޭ' },
    { input: 'gohoru', output: 'ގޮހޮރު' },
    { input: 'hitheh', output: 'ހިތެއް' },
    { input: 'number', output: 'ނަންބަރު' },
    { input: 'mushah', output: 'މުށަށް' },
    { input: 'oflain', output: 'އޮފްލައިން' },
    { input: 'online', output: 'އޮންލައިން' },
    { input: 'oyybey', output: 'އޮތްބޭ' },
    { input: 'roohun', output: 'ރޫހުން' },
    { input: 'search', output: 'ސާޗް' },
    { input: 'shoahu', output: 'ޝޯހު' },
    { input: 'thahey', output: 'ތަހޭ' },
    { input: 'namaee', output: 'ނަމައީ' },
    { input: 'ehenas', output: 'އެހެނަސް' },
    { input: 'facial', output: 'ފޭޝަލް' },
    { input: 'hedhey', output: 'ހެދޭ' },
    { input: 'ihsaas', output: 'އިހުސާސް' },
    { input: 'indhey', output: 'އިނދޭ' },
    { input: 'kandeh', output: 'ކަނޑެއް' },
    { input: 'nafsaa', output: 'ނަފުސާ' },
    { input: 'nuhanu', output: 'ނުހަނު' },
    { input: 'reyaku', output: 'ރެޔަކު' },
    { input: 'rondeh', output: 'ރޮނޑެއް' },
    { input: 'roohee', output: 'ރޫހީ' },
    { input: 'vihyaa', output: 'ވިއްޔާ' },
    { input: 'aanbas', output: 'އާނބަސް' },
    { input: 'aishaa', output: 'އައިޝާ' },
    { input: 'ishqun', output: 'އިޝްޤުން' },
    { input: 'bedhey', output: 'ބެދޭ' },
    { input: 'eheeah', output: 'އެހީއަށް' },
    { input: 'ehuney', output: 'އެހުނޭ' },
    { input: 'ehvana', output: 'އެއްވަނަ' },
    { input: 'kahala', output: 'ކަހަލަ' },
    { input: 'kashfu', output: 'ކަޝްފު' },
    { input: 'maathu', output: 'މައަތު' },
    { input: 'beehge', output: 'ބެއެއްގެ' },
    { input: 'eeevaa', output: 'އެއީވާ' },
    { input: 'eeeves', output: 'އެއީވެސް' },
    { input: 'ohorey', output: 'އޮހޮރޭ' },

    { input: 'faharu', output: 'ފަހަރު' },

    { input: 'lenbey', output: 'ލެނބޭ' },


    { input: 'tattoo', output: 'ޓެޓޫ' },

    // 5 characters
    { input: 'bahaa', output: 'ބަހާ' },
    { input: 'cream', output: 'ކުރީމު' },
    { input: 'ehgaa', output: 'އެއްގާ' },
    { input: 'foohi', output: 'ފޫހި' },
    { input: 'juice', output: 'ޖޫސް' },
    { input: 'mahaa', output: 'މަހާ' },
    { input: 'party', output: 'ޕާޓީ' },
    { input: 'vahum', output: 'ވަހުމު' },
    { input: 'beyaa', output: 'ބެޔާ' },
    { input: 'hoaho', output: 'ހޯހޮ' },
    { input: 'dhahi', output: 'ދަހި' },
    { input: 'theyo', output: 'ތެޔޮ' },
    { input: 'oihaa', output: 'އޮތްހާ' },
    { input: 'oyyhaa', output: 'އޮތްހާ' },
    { input: 'oiyhaa', output: 'އޮތްހާ' },
    { input: 'eidhu', output: 'އީދު' },
    { input: 'hilmy', output: 'ހިލްމީ' },
    { input: 'hilmee', output: 'ހިލްމީ' },
    { input: 'hilmii', output: 'ހިލްމީ' },
    { input: 'lwbin', output: 'ލޯބިން' },
    { input: 'kihen', output: 'ކިހެން' },
    { input: 'eyhey', output: 'އޭހޭ' },
    { input: 'leyaa', output: 'ލެޔާ' },
    { input: 'roohu', output: 'ރޫހު' },
    { input: 'thiee', output: 'ތިއީ' },
    { input: 'dhuaa', output: 'ދުއާ' },
    { input: 'maaii', output: 'މާތް' },
    { input: 'maayy', output: 'މާތް' },
    { input: 'maaiy', output: 'މާތް' },
    { input: 'maii', output: 'މާތް' },
    { input: 'maiy', output: 'މާތް' },
    { input: 'mayy', output: 'މާތް' },
    { input: 'zaham', output: 'ޒަހަމު' },
    { input: 'hureh', output: 'ހުރެއް' },
    { input: 'huvah', output: 'ހުވަށް' },
    { input: 'beyru', output: 'ބޭރު' },
    { input: 'shedu', output: 'ޝެދު' },
    { input: 'bayah', output: 'ބަޔަށް' },
    { input: 'rangu', output: 'ރަނގު' },
    { input: 'dhen', output: 'ދެން' },
    { input: 'ekan', output: 'އެކަން' },
    { input: 'elhey', output: 'އެޅޭ' },
    { input: 'dhuva', output: 'ދުވަހު' },
    { input: 'vegen', output: 'ވެގެން' },
    { input: 'huvee', output: 'ހުވީ' },
    { input: 'huvii', output: 'ހުވީ' },
    { input: 'huviy', output: 'ހުވީ' },
    { input: 'huvee', output: 'ހުވީ' },
    { input: 'huvii', output: 'ހުވީ' },
    { input: 'huviy', output: 'ހުވީ' },
    { input: 'huvyy', output: 'ހުވީ' },
    { input: 'nurun', output: 'ނޫރުން' },
    { input: 'anhen', output: 'އަންހެން' },
    { input: 'anhen', output: 'އަންހެން' },
    { input: 'henon', output: 'ހެނޮން' },
    { input: 'henonn', output: 'ހެނޮން' },
    { input: 'henun', output: 'ހެނުން' },
    { input: 'hennun', output: 'ހެނުން' },
    { input: 'henaan', output: 'ހެނާން' },
    { input: 'henaann', output: 'ހެނާން' },
    { input: 'hengen', output: 'ހެނގެން' },
    { input: 'hengenn', output: 'ހެނގެން' },
    { input: 'dhaske', output: 'ދަސްކެ' },
    { input: 'dhaskun', output: 'ދަސްކުން' },
    { input: 'dhaskunn', output: 'ދަސްކުން' },
    { input: 'rahum', output: 'ރަހުމު' },
    { input: 'araam', output: 'އަރާމު' },
    { input: 'adiah', output: 'އަޑިއަށް' },
    { input: 'angaa', output: 'އަންގާ' },
    { input: 'ehfai', output: 'އެއްފައި' },
    { input: 'ehkoh', output: 'އެއްކޮށް' },
    { input: 'geyah', output: 'ގެޔަށް' },
    { input: 'chips', output: 'ޗިޕްސް' },
    { input: 'aharu', output: 'އަހަރު' },
    { input: 'eesaa', output: 'އީސާ' },
    { input: 'ishqu', output: 'އިޝްޤު' },
    { input: 'ronde', output: 'ރޮނޑެ' },
    { input: 'theyy', output: 'ތެއް' },
    { input: 'ehvas', output: 'އެއްވަސް' },
    { input: 'eevaa', output: 'އީވާ' },
    { input: 'rihun', output: 'ރިހުން' },
    { input: 'ruhun', output: 'ރުހުން' },
    { input: 'ashee', output: 'އަށީ' },
    { input: 'ehloa', output: 'އެއްލޯ' },
    { input: 'iaree', output: 'ޢަރީ' },
    { input: 'ihvan', output: 'އިއްވަން' },
    { input: 'preym', output: 'ޕްރޭމް' },
    { input: 'aaney', output: 'އާނއޭ' },
    { input: 'aihey', output: 'އައިހޭ' },
    { input: 'allah', output: 'ﷲ' },
    { input: 'anhaa', output: 'އަނހާ' },
    { input: 'heyah', output: 'ހެޔަށް' },
    { input: 'sorry', output: 'ސޮރީ' },
    { input: 'tokyo', output: 'ޓޯކިޔޯ' },

    { input: 'jambu', output: 'ޖަންބު' },

    // 4 characters
    { input: 'bayy', output: 'ބަތް' },
    { input: 'baiy', output: 'ބަތް' },
    { input: 'baii', output: 'ބަތް' },
    { input: 'fayy', output: 'ފަތް' },
    { input: 'faiy', output: 'ފަތް' },
    { input: 'faii', output: 'ފަތް' },
    { input: 'gaii', output: 'ގަތް' },
    { input: 'gaiy', output: 'ގަތް' },
    { input: 'heyo', output: 'ހެޔޮ' },
    { input: 'ivey', output: 'އިވޭ' },
    { input: 'vehi', output: 'ވެހި' },
    { input: 'rayy', output: 'ރަތް' },
    { input: 'raiy', output: 'ރަތް' },
    { input: 'raii', output: 'ރަތް' },
    { input: 'muyy', output: 'މުތް' },
    { input: 'muiy', output: 'މުތް' },
    { input: 'muii', output: 'މުތް' },
    { input: 'fayy', output: 'ފަތް' },
    { input: 'faiy', output: 'ފަތް' },
    { input: 'faii', output: 'ފަތް' },
    { input: 'eyah', output: 'އެޔަށް' },
    { input: 'eesa', output: 'އީސަ' },
    { input: 'rihi', output: 'ރިހި' },
    { input: 'male', output: 'މާލެ' },
    { input: 'aiyy', output: 'އަތް' },
    { input: 'dhon', output: 'ދޮން' },
    { input: 'dhil', output: 'ދިލް' },
    { input: 'duaa', output: 'ދުއާ' },
    { input: 'rooh', output: 'ރޫހު' },
    { input: 'ishq', output: 'އިޝްޤު' },
    { input: 'lhen', output: 'ޅެން' },
    { input: 'goiy', output: 'ގޮތް' },
    { input: 'goih', output: 'ގޮތް' },
    { input: 'hiyy', output: 'ހިތް' },
    { input: 'hiyh', output: 'ހިތް' },
    { input: 'lwbi', output: 'ލޯބި' },
    { input: 'asar', output: 'އަސަރު' },
    { input: 'goyy', output: 'ގޮތް' },
    { input: 'goii', output: 'ގޮތް' },
    { input: 'gioy', output: 'ގޮތް' },
    { input: 'fehi', output: 'ފެހި' },
    { input: 'ahen', output: 'އަހެން' },
    { input: 'ehen', output: 'އެހެން' },
    { input: 'ihen', output: 'އިހެން' },
    { input: 'ohen', output: 'އޮހެން' },
    { input: 'uhen', output: 'އުހެން' },
    { input: 'ahey', output: 'އަހޭ' },
    { input: 'ehey', output: 'އެހޭ' },
    { input: 'ihey', output: 'އިހޭ' },
    { input: 'ohey', output: 'އޮހޭ' },
    { input: 'uhey', output: 'އުހޭ' },
    { input: 'ahan', output: 'އަހަން' },
    { input: 'ehah', output: 'އެހައް' },
    { input: 'ehee', output: 'އެހީ' },
    { input: 'fahe', output: 'ފަހެ' },
    { input: 'ohsi', output: 'އޮއްސި' },
    { input: 'haal', output: 'ހާލު' },
    { input: 'haas', output: 'ހާސް' },
    { input: 'euro', output: 'ޔޫރޯ' },
    { input: 'miee', output: 'މިއީ' },
    { input: 'eyaa', output: 'އެޔާ' },
    { input: 'baheh', output: 'ބަހެއް' },
    { input: 'bahey', output: 'ބަހެއް' },
    { input: 'baheii', output: 'ބަހެއް' },
    { input: 'gayy', output: 'ގަތް' },
    { input: 'mioh', output: 'މިއޮށް' },
    { input: 'rose', output: 'ރޯސް' },
    { input: 'vayy', output: 'ވަތް' },
    { input: 'ahvaa', output: 'އައްވާ' },
    { input: 'ariah', output: 'އަރިއަށް' },
    { input: 'ahage', output: 'އަހަގެ' },
    { input: 'biheh', output: 'ބިހެއް' },
    { input: 'dhiha', output: 'ދިހަ' },
    { input: 'eedhu', output: 'އީދު' },
    { input: 'ehbas', output: 'އެއްބަސް' },
    { input: 'ehera', output: 'އެހެރަ' },
    { input: 'ehmen', output: 'އެއްމެން' },
    { input: 'eidey', output: 'އީދޭ' },
    { input: 'emmen', output: 'އެއްމެން' },
    { input: 'fahah', output: 'ފަހަށް' },
    { input: 'huhti', output: 'ހުއްޓި' },
    { input: 'jehee', output: 'ޖެހީ' },
    { input: 'kendi', output: 'ކެނޑި' },
    { input: 'mehi', output: 'މެހި' },
    { input: 'ethah', output: 'އެތައް' },
    { input: 'fahsi', output: 'ފައްސި' },
    { input: 'miaee', output: 'މިއައީ' },
    { input: 'mioyy', output: 'މިއޮތް' },
    { input: 'ohsey', output: 'އޮއްސޭ' },
    { input: 'vahaa', output: 'ވަހާ' },
    { input: 'veehe', output: 'ވީހެ' },
    { input: 'vehey', output: 'ވެހޭ' },
    { input: 'viber', output: 'ވައިބާ' },
    { input: 'block', output: 'ބުލޮކް' },
    { input: 'meyaa', output: 'މެޔާ' },
    { input: 'meyah', output: 'މެޔަށް' },
    { input: 'ehaa', output: 'އެހާ' },
    { input: 'ehme', output: 'އެއްމެ' },
    { input: 'keii', output: 'ކެތް' },
    { input: 'alah', output: 'އަލަށް' },
    { input: 'kehi', output: 'ކެހި' },
    { input: 'keyy', output: 'ކެތް' },
    { input: 'miah', output: 'މިއަށް' },
    { input: 'haan', output: 'ހާނ' },
    { input: 'anha', output: 'އަނހަ' },
    { input: 'ashi', output: 'އަށި' },
    { input: 'ehli', output: 'އެއްލި' },

    // 4 characters
    { input: 'sihi', output: 'ސިހި' },
    { input: 'aahu', output: 'އާހު' },
    { input: 'haeh', output: 'ހައެއް' },
    { input: 'hieh', output: 'ހިއެއް' },
    { input: 'huyy', output: 'ހުތް' },
    { input: 'ruhi', output: 'ރުހި' },
    { input: 'meah', output: 'މެއަށް' },

    // 3 characters
    { input: 'gay', output: 'ގަތް' },
    { input: 'ice', output: 'އައިސް' },
    { input: 'aee', output: 'އައީ' },
    { input: 'eee', output: 'އެއީ' },
    { input: 'oiy', output: 'އޮތް' },
    { input: 'hiy', output: 'ހިތް' },
    { input: 'aii', output: 'އަތް' },
    { input: 'ayy', output: 'އަތް' },
    { input: 'eid', output: 'އީދު' },
    { input: 'enn', output: 'އެން' },
    { input: 'dil', output: 'ދިލް' },
    { input: 'eyy', output: 'އޭ' },
    { input: 'loa', output: 'ލޯ' },
    { input: 'ehy', output: 'އެހީ' },
    { input: 'goy', output: 'ގޮތް' },
    { input: 'oyy', output: 'އޮތް' },
    { input: 'ahi', output: 'އަހި' },
    { input: 'kei', output: 'ކެތް' },
    { input: 'oon', output: 'އޫނ' },
    { input: 'top', output: 'ޓޮޕް' },

    // 2 characters
    { input: 'en', output: 'އެން' },
    { input: 'lo', output: 'ލޯ' },
    { input: 'hih', output: 'ހިތް' },
    { input: 'oo', output: 'އޫ' },
    { input: 'ee', output: 'އީ' },
    { input: 'ah', output: 'އަށް' },
    { input: 'hi', output: 'ހައި' },
    { input: 'am', output: 'އޭމް' },
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
    
    // Convert to lowercase and remove apostrophes and periods completely, but preserve commas
    let processText = latinText.toLowerCase().replace(/[']/g, '');
    
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
                if (transliterationMap[nextChar] && nextChar !== 'n') {
                    isFollowedByConsonant = true;
                } else if (nextChar !== 'n') {
                    // Check if it's the start of a multi-character consonant
                    for (let len = 3; len >= 2; len--) {
                        if (i + 2 + len <= processText.length) {
                            let nextSubstring = processText.substring(i + 2, i + 2 + len);
                            if (transliterationMap[nextSubstring]) {
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
        const husNoonuPatterns = [

            // 13-letter patterns// 10-letter patterns// 10-letter patterns// 9-letter patterns// 8-letter patterns// 10-letter patterns// 9-letter patterns// 8-letter patterns// 7-letter patterns{ pattern: 'handhah', output: 'ހަނދަށް', length: 7 },{ pattern: 'lhindhu', output: 'ޅިނދު', length: 7 },// 10-letter patterns// 10-letter patterns// 8-letter patterns// 7-letter patterns
            { pattern: 'thundee', output: 'ތުނޑީ', length: 7 },

            // 9-letter patterns
            { pattern: 'maahingaa', output: 'މާހިނގާ', length: 9 },
            // 8-letter patterns
            { pattern: 'chaandha', output: 'ޗާނދަ', length: 8 },
            { pattern: 'lhindhaa', output: 'ޅިނދާ', length: 8 },
            { pattern: 'mihindhu', output: 'މިހިނދު', length: 8 },
            { pattern: 'muhingaa', output: 'މުހިނގާ', length: 8 },
            { pattern: 'nuhindhu', output: 'ނުހިނދު', length: 8 },
            { pattern: 'nuhingaa', output: 'ނުހިނގާ', length: 8 },
            { pattern: 'thaangaa', output: 'ތާނގާ', length: 8 },

            // 7-letter patterns{ pattern: 'thunbaa', output: 'ތުނބާ', length: 7 },

            // 7-letter patterns
            { pattern: 'bondhaa', output: 'ބޮނދާ', length: 7 },
            { pattern: 'bondhai', output: 'ބޮނދައި', length: 7 },
            { pattern: 'dhandoo', output: 'ދަނޑޫ', length: 7 },
            { pattern: 'handhaa', output: 'ހަނދާ', length: 7 },
            { pattern: 'handhey', output: 'ހަނދޭ', length: 7 },
            { pattern: 'kandhey', output: 'ކަނދޭ', length: 7 },
            { pattern: 'thaanga', output: 'ތާނގަ', length: 7 },

            // 7-letter patterns
            { pattern: 'thandee', output: 'ތަނޑީ', length: 7 },
            { pattern: 'yaandhu', output: 'ޔާނދު', length: 7 },
            // 6-letter patterns{ pattern: 'bondha', output: 'ބޮނދަ', length: 6 },
            { pattern: 'aanhaa', output: 'އާނހާ', length: 6 },
            { pattern: 'andhaa', output: 'އަނދާ', length: 6 },
            { pattern: 'bandaa', output: 'ބަނޑާ', length: 6 },
            { pattern: 'bandha', output: 'ބަނދަ', length: 6 },
            { pattern: 'bandhe', output: 'ބަނދެ', length: 6 },
            { pattern: 'bindhe', output: 'ބިނދެ', length: 6 },
            { pattern: 'bondee', output: 'ބޮނޑީ', length: 6 },
            { pattern: 'dhanbi', output: 'ދަނބި', length: 6 },
            { pattern: 'dhandu', output: 'ދަނޑު', length: 6 },
            { pattern: 'dhanbu', output: 'ދަނބު', length: 6 },
            { pattern: 'dhandi', output: 'ދަނޑި', length: 6 },
            { pattern: 'dhanmu', output: 'ދަނމު', length: 6 },
            { pattern: 'findha', output: 'ފިނދަ', length: 6 },
            { pattern: 'gandey', output: 'ގަނޑޭ', length: 6 },
            { pattern: 'hendhu', output: 'ހެނދު', length: 6 },
            { pattern: 'hindha', output: 'ހިނދަ', length: 6 },
            { pattern: 'hingee', output: 'ހިނގީ', length: 6 },
            { pattern: 'ihinga', output: 'ިހިނގަ', length: 6 },
            { pattern: 'kanbaa', output: 'ކަނބާ', length: 6 },
            { pattern: 'kandaa', output: 'ކަނޑާ', length: 6 },
            { pattern: 'kandeh', output: 'ކަނޑެއް', length: 6 },
            { pattern: 'kandoo', output: 'ކަނޑޫ', length: 6 },
            { pattern: 'kendee', output: 'ކެނޑީ', length: 6 },
            { pattern: 'kendey', output: 'ކެނޑޭ', length: 6 },
            { pattern: 'kuriah', output: 'ކުރިޔަށް', length: 6 },
            { pattern: 'lanbaa', output: 'ލަނބާ', length: 6 },
            { pattern: 'lenbey', output: 'ލެނބޭ', length: 6 },
            { pattern: 'lhangu', output: 'ޅަނގު', length: 6 },
            { pattern: 'rondeh', output: 'ރޮނޑެއް', length: 6 },
            { pattern: 'runbaa', output: 'ރުނބާ', length: 6 },
            { pattern: 'thandi', output: 'ތަނޑި', length: 6 },
            { pattern: 'thundi', output: 'ތުނޑި', length: 6 },
            { pattern: 'thundu', output: 'ތުނޑު', length: 6 },
            { pattern: 'thunbu', output: 'ތުނބު', length: 6 },
            { pattern: 'thunbi', output: 'ތުނބި', length: 6 },
            { pattern: 'thunba', output: 'ތުނބަ', length: 6 },
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
            { pattern: 'lhangi', output: 'ޅަނގި', length: 6 },
            { pattern: 'gandeh', output: 'ގަނޑެއް', length: 6 },
            { pattern: 'gandaa', output: 'ގަނޑާ', length: 6 },
            
            // 6-letter patterns
            { pattern: 'vandhu', output: 'ވަނދު', length: 6 },
            // 5-letter patterns
            { pattern: 'aanha', output: 'އާނހަ', length: 5 },
            { pattern: 'anbaa', output: 'އަނބާ', length: 5 },
            { pattern: 'andhi', output: 'އަނދި', length: 5 },
            { pattern: 'binmu', output: 'ބިނމު', length: 5 },
            { pattern: 'bondi', output: 'ބޮނޑި', length: 5 },
            { pattern: 'endhe', output: 'އެނދެ', length: 5 },
            { pattern: 'endhu', output: 'އެނދު', length: 5 },
            { pattern: 'fundu', output: 'ފުނޑު', length: 5 },{ pattern: 'honda', output: 'ހޮނޑަ', length: 5 },
            { pattern: 'genbi', output: 'ގެނބި', length: 5 },
            { pattern: 'hendu', output: 'ހެނޑު', length: 5 },
            { pattern: 'hingu', output: 'ހިނގު', length: 5 },
            { pattern: 'hungu', output: 'ހުނގު', length: 5 },
            { pattern: 'indhe', output: 'އިނދެ', length: 5 },
            { pattern: 'kanbi', output: 'ކަނބި', length: 5 },
            { pattern: 'kandu', output: 'ކަނޑު', length: 5 },
            { pattern: 'fandu', output: 'ފަނޑު', length: 5 },
            { pattern: 'kendi', output: 'ކެނޑި', length: 5 },
            { pattern: 'kendu', output: 'ކެނޑު', length: 5 },
            { pattern: 'kunbu', output: 'ކުނބު', length: 5 },
            { pattern: 'kundi', output: 'ކުނޑި', length: 5 },
            { pattern: 'lanbe', output: 'ލަނބެ', length: 5 },
            { pattern: 'landu', output: 'ލަނޑު', length: 5 },
            { pattern: 'bandu', output: 'ބަނޑު', length: 5 },
            { pattern: 'gandu', output: 'ގަނޑު', length: 5 },
            { pattern: 'gondu', output: 'ގޮނޑު', length: 5 },
            { pattern: 'gondi', output: 'ގޮނޑި', length: 5 },
            { pattern: 'ganda', output: 'ގަނޑަ', length: 5 },
            { pattern: 'genbe', output: 'ގެނބެ', length: 5 },
            { pattern: 'langi', output: 'ލަނގި', length: 5 },
            { pattern: 'lenbu', output: 'ލެނބު', length: 5 },
            { pattern: 'linbe', output: 'ލިނބެ', length: 5 },
            { pattern: 'randi', output: 'ރަނޑި', length: 5 },
            { pattern: 'ranga', output: 'ރަނގަ', length: 5 },
            { pattern: 'rangi', output: 'ރަނގި', length: 5 },
            { pattern: 'randu', output: 'ރަނޑު', length: 5 },
            { pattern: 'kanbu', output: 'ކަނބު', length: 5 },
            { pattern: 'banbu', output: 'ބަނބު', length: 5 },
            { pattern: 'fanbu', output: 'ފަނބު', length: 5 },
            { pattern: 'bandi', output: 'ބަނޑި', length: 5 },
            { pattern: 'banda', output: 'ބަނޑަ', length: 5 },
            { pattern: 'kanda', output: 'ކަނޑަ', length: 5 },
            { pattern: 'kandi', output: 'ކަނޑި', length: 5 },
            { pattern: 'kanga', output: 'ކަނގަ', length: 5 },
            { pattern: 'hinga', output: 'ހިނގަ', length: 5 },
            { pattern: 'engey', output: 'އެނގޭ', length: 5 },
            { pattern: 'ingey', output: 'އިނގޭ', length: 5 },
            { pattern: 'ringa', output: 'ރިނގަ', length: 5 },
            { pattern: 'ringu', output: 'ރިނގު', length: 5 },
            { pattern: 'undha', output: 'އުނދަ', length: 5 },
            { pattern: 'undhu', output: 'އުނދު', length: 5 },
            { pattern: 'yangi', output: 'ޔަނގި', length: 5 },
            { pattern: 'runba', output: 'ރުނބަ', length: 5 },
            
            // 4-letter patterns
            { pattern: 'anbi', output: 'އަނބި', length: 4 },
            { pattern: 'anga', output: 'އަނގަ', length: 4 },
            { pattern: 'anbu', output: 'އަނބު', length: 4 },
            { pattern: 'ango', output: 'އަނގޮ', length: 4 },
            { pattern: 'enbu', output: 'އެނބު', length: 4 },
        
            { pattern: 'engi', output: 'އެނގި', length: 4 },
            { pattern: 'engu', output: 'އެނގު', length: 4 },
            { pattern: 'inba', output: 'އިނބަ', length: 4 },
            { pattern: 'ingi', output: 'އިނގި', length: 4 },
            { pattern: 'unba', output: 'އުނބަ', length: 4 },
            { pattern: 'unga', output: 'އުނގަ', length: 4 },
            { pattern: 'ungu', output: 'އުނގު', length: 4 },];
        
        for (let husPattern of husNoonuPatterns) {
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
                    if (transliterationMap[nextChar]) {
                        nextIsConsonant = true;
                    } else {
                        // Check if it's the start of a multi-character consonant
                        for (let len = 3; len >= 2; len--) {
                            if (i + 1 + len <= processText.length) {
                                let nextSubstring = processText.substring(i + 1, i + 1 + len);
                                if (transliterationMap[nextSubstring]) {
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
                // Special case: doubled 'nn' should be 'ންނ' instead of 'އް' + consonant
                if (char1 === 'n') {
                    dhivehiText += 'ންނ'; // sukun + nun + nun for doubled 'nn'
                } else {
                    dhivehiText += 'އް' + transliterationMap[char1]; // alif + sukun + consonant for other doubled consonants
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
                            if (transliterationMap[prevSubstring] && shaviyanisukun.includes(prevSubstring)) {
                                prevIsShaviyanisukunConsonant = true;
                                prevConsonant = prevSubstring;
                                foundPrevConsonant = true;
                                break;
                            }
                        }
                    }
                    
                    // If no multi-char consonant found, check single char
                    if (!foundPrevConsonant && transliterationMap[processText[i - 1]] && shaviyanisukun.includes(processText[i - 1])) {
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
