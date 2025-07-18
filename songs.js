const songs = [
{
  id: 1,
  name: `Hiyy Gudugudu`,
  genre: 'Taki',
  lyrics: `#M
އަތިރިމަތިން ފަރިހިނގަމުން ދާތީ
*އަކިރި މަތީ ފައި ބީއްސާލާތީ
މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*ބާރަށް ހިތް ގުޑުގުޑު ލާތީ

#1
ފުރަތަމަ މި ރަށައް ލެފި އިރު މާ ދުރުގާ ހުރެ ބެލުނޭ
*ގާތައް ދާން ހިތް އެދުނޭ
ފުރިހަމަ ދެ ލޮލާ ކަޅިރަވަ ޗާލުކަމަށް ހިތް ލެނބުނޭ
*ހިތުގާ ބިންވަޅު ނެގުނޭ
މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*ބާރަށް ހިތް ގުޑުގުޑު ލާތީ ލާތީ

#2
މާވަރަކަށް މަ ބަލާތީ ލަދުރަކި ވާކަން އެނގުނޭ
*ކަޅި އެޅި މަންޒަރު ފެނުނޭ
މާ ނޫން ގޮތަކަށް ބެލުމުގެ މާނަ މަށައްވެސް އެނގުނޭ
*އުފަލުން ގޮސް ހީލެވުނޭ
މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*ބާރަށް ހިތް ގުޑުގުޑު ލާތީ ލާތީ

#3
އަތިރިމަގުން އަސުރު ފަހުން ދާތީ ފަހަތުން ދެވުނޭ
*އެދިހުރި ފުރުސަތު ލިބުނޭ
މަތިރިވެލާ އަތް ދިއްކޮށް ލޯތްބަށް އެދި ހުށަހެޅުނޭ
*ހިތު އެޅި ކަމަނާ ލިބުނޭ
މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*މަންޖޭ ބެލެޔޭ ފަހަތުން ދެވޭ
*ބާރަށް ހިތް ގުޑުގުޑު ލާތީ ލާތީ`,

  englishLyrics: `#M
Athirimathin farihingamun dhaathee
*Akiri mathee fai beehsaalaathee
Mannjey beleyey fahathun dhevey
*Baarah hiyy gudugudu laathee
#1
Furathama mi rashah lefi iru maa dhurugaa hure beluney
*Gaathah dhaan hiyy edhuney
Furihama dhe lolaa kalhirava chaalukamah hiyy lenbuney
*Hithugaa binnvalhu neguney
Mannjey beleyey fahathun dhevey
*Mannjey beleyey fahathun dhevey
*Baarah hiyy gudugudu laathee laathee
#2
Maavarakah ma balaathee ladhuraki vaakan enguney
*Kalhi elhi mannzaru fenuney
Maa noon gothakah belumuge maana mashahves enguney
*Ufalun gos heelevuney
Mannjey beleyey fahathun dhevey
*Mannjey beleyey fahathun dhevey
*Baarah hiyy gudugudu laathee laathee
#3
Athirimagun asuru fahun dhaathee fahathun dhevuney
*Edhihuri furusathu libuney
Mathirivelaa ayy dhihkoh loayybah edhi hushahelhuney
*Hithu elhi kamanaa libuney
Mannjey beleyey fahathun dhevey
*Mannjey beleyey fahathun dhevey
*Baarah hiyy gudugudu laathee laathee`,
},
{
  id: 2,
  name: 'Fathis',
  genre: 'Kaasi',
  lyrics: `#M
ފަތިހުގެ ފިނި ވައިރޯޅި ނަޔާ
*ބީހިލުމުން ރުއްގަސް ވެއްޖެ ގަޔާ
ހިތްގައިމު ނަލަނަލަ އަޑުން ގޮވާ
*ކާޅާއި ކޮވެލީގެ ރާގުލާ
#1
އަސްތާ އެނަގާ ހަޅޭލީ
*ރަސްރުކު އެބޭގެ ބޮޑުހާ
ދިގުމަގު ކޮޅުން އޮބާލީ
*ބަދިފަތި ހިފާ ނަކަލުބޭ
#2
ފައްޗެއް މުށަށް ހެޔޮވަރުވީ
*ފާތުމަ އަރުވ އެޖަހަނީ
ފަތިހުގެ ފިނީގަ ދޮރުމަތީ
*ބަސްބުނި ހިނދުން ކަހާލީ
-
$M
ފަތިހާ ވަލު ހިނގަމުން މާމަދޮން
*ލާން ދަރު ކާއްޓާ ކާން ހަމަކުރީ
ގުގުމާ ރައިވަރު އިވި ރުއްބުޑުން
*ރައިވަރު ރުކު އޮތްބޭ ފަރިއެޅީ
$1
ސޮއްސާލާ އެތުން ރާބަދި ދޫވެއްޖެތާ
*ރަސްރުކުބޭ ލޯ ބޯދީ ބަލަމުން ކަޅިއެޅީ
$2
ފަސްހާވާ ނިކަން ފަނި ކެއުމަށް ކުކުޅުތައް
*އެއް ފަންޏާ ބައިގަނޑު ތެޅިތެޅިފާ މޮޔަވަނީ
$N
އާޅަ އެތެއް ކޮށާ ފަންވަތް ބަންނާނަމޭ
*ފައްކާ ވެއްޖެއްޔާ ބަދިވެސް އަޅުވާނަމޭ`,

  englishLyrics: `#M
Fathihuge fini vairoalhi nayaa
*Beehilumun ruhgas vehje gayaa
Hiyygaimu nalanala adun govaa
*Kaalhaai koveleege raagulaa
#1
Asthaa enagaa halheylee
*Rasruku ebeyge boduhaa
Dhigumagu kolhun obaalee
*Badhifathi hifaa nakalubey
#2
Fahcheh mushah heyovaruvee
*Faathuma aruvaa ejahanee
Fathihuge fineega dhorumathee
*Basbuni hindhun kahaalee
-
$M
Fathihaa valu hingamun maamadhon
*Laan dharu kaahtaa kaan hamakuree
Gugumaa raivaru ivi ruhbudun
*Raivaru ruku oyybey farielhee
$1
Sohsaalaa ethun raabadhi dhoovehjethaa
*Rasrukubey loa boadhee balamun kalhielhee
$2
Fashaavaa nikan fani keumah kukulhuthah
*Eh fannyaa baigandu thelhithelhifaa moyavanee
$3
Aalha etheh koshaa fannvayy bannaanamey
*Fahkaa vehjehyaa badhives alhuvaanamey`,
},
{
  id: 3,
  name: `Ishqee Haalathu`,
  genre: 'Nala',
  lyrics: `#M
އިޝްޤީ ހާލަތުގާ ޔާރާދޭ ހަނދާނޭ މިތާނގާ މި އާވާ ހިޔާލުން ސަޒާދޭ
*ލޯބީގާ ބޭގަރާރު ވާންހެވީ ލޯބީގާ ބޭގަރާރު ވާން

#1
ދީވާނާވެ ވާދީގާ މި ހުރީ އިންތިޒާރެއްގާ
*ދީވާނާވެ ވާދީގާ މި ހުރީ އިންތިޒާރެއްގާ
ނޫންހޭ އުންމީދު ގެއްލިދާ ޝަރަފެއް ކަމަށް
*ވީހޭ އުންމީދު ގެއްލި ދާ ޝަރަފެއް ކަމަށް ދޯ

#2
ގުޅިގެންވީ ހަގީގަތްމީ މުޅިއިން ގެއްލުނީހޭމީ
*ގުޅިގެންވީ ހަގީގަތްމީ މުޅިއިން ގެއްލުނީހޭމީ
ނޫންހޭ ދޭނޭ އަރާމު ނެތި އުފަލާ ހިޔާރު
*ނޫންހޭ ދޭނޭ އަރާމު ނެތި އުފަލާ ހިޔާރު ދޯ`,

  englishLyrics: `#M
Ishgee haalathugaa yaaraadhey handhaaney mithaangaa mi aavaa hiyaalun sazaadhey
*Loabeegaa beygaraaru vaannhevee loabeegaa beygaraaru vaan
#1
Dheevaanaave vaadheegaa mi huree innthizaarehgaa
*Dheevaanaave vaadheegaa mi huree innthizaarehgaa
Noonhey unnmeedhu gehlidhaa sharafeh kamah
*Veehey unnmeedhu gehli dhaa sharafeh kamah dhoa
#2
Gulhigennvee hageegayymee mulhiin gehluneeheymee
*Gulhigennvee hageegayymee mulhiin gehluneeheymee
Noonhey dheyney araamu nethi ufalaa hiyaaru
*Noonhey dheyney araamu nethi ufalaa hiyaaru dhoa`,
},
{
  id: 4,
  name: 'Aalaa Sakeeree',
  genre: 'Kaasi',
  lyrics: `#M
އާލާ ސަކީރީ
*ޗަނދަރާބާ ޖަނަތީރެ ޖޯ
#1
އާލާ ކުމްސާޔާ
*ބަނާނަސީ ޔަނގިޔާ
ކަނގަނާމާ ކަނގަނާމަޔޯ
*ކަނގަނާމާ ކަނގަނާމަޔޯ
ފަލަތީރެ ފަލަތީރެ ޖޯ
*ފަލަތީރެ ފަލަތީރެ ޖޯ
-
$M
ނޫރާނީ އަލީގާ ޤައުމަށް އުޖާލާ
*ޖޯށޭމީ ދެނީ ފުރާނައިން ދިރޭ
ހާ އުފާ
*ޖޯށޭމީ ދެނީ ފުރާނައިން ދިރޭ
$1
މި ގައުމުގާ އާޒާދީ
*އަރާމުގާ ތާޒާވީ
މަލުން ގެތީ ހިލްމީ
*ފޮޅުން މަލޭ ކޮއްލީޯ
އާ ރޫހް ތަކަށް އެދޭ
*ޖާނާ ހިތާ ދެވޭ، ޖޯށޭމީ ދެނީ ފުރާނައިން ދިރޭ
$2
މި ރޫހް ދިރުވާ ދާނީ
*މި ޖޯށު ކުރިހޯދާނީ
މަލުން ގެތޭ ހާރޭ
*އުފާ މިދޭ ޒާރޭ
އާ ރޫހް ތަކަށް އެދޭ
*ޖާނާ ހިތާ ދެވޭ، ޖޯށޭމީ ދެނީ ފުރާނައިން ދިރޭ
$N
ގުލްޒާރޭ ފަރިވަނީ
*އަނހާ ރޫހް ދިރޭ`,

  englishLyrics: `#M
Aalaa sakeeree
*Chandharaabaa jana theere joa
#1
Aalaa kumsaayaa
*Banaanasee yangiyaa
Kanganaamaa kanganaamaayoa
*Kanganaamaa kanganaamaayoa
Falatheere falatheerejoa
*Falatheere falatheerejoa
-
$M
Nooraanee aleegaa gaumah ujaaalaa
*Joashey mi dheny furaanain dhirey
Haa ufaa
*Joashey mi dheny furaanain dhirey
$1
Mi gaumugaa aazaadhee
*Araamugaa thaazaa vee
Malun gethey hilmy
*Folhun maley kolly
Aa rooh thakah edhey
*Jaanaa hithaa dhevey Joashey mi dheny furaanain dhirey
$2
Mi rooh dhiruvaa dhaanee
*Mi joashu kuri hoadhaanee
Malun gethey Haarey
*Ufaa midhey zaarey
Aa rooh thakah edhey
*Jaanaa hithaa dhevey Joashey mi dheny furaanain dhirey
$N
Gulzaarey fari vanee
*Aanhaa Rooh dhirey`,
},
{
  id: 5,
  name: `Ajaibeh`,
  genre: 'Thinberu',
  lyrics: `#M
ރީތި ގުދުރަތީ މި މަންޒަރު
*ޗާލު ލޮލަށް ފެންނައިރު އަޖައިބެއް ފަދައޭ
ސާފު ދޮންވެލި ތުނޑިމަތީ
*ރާޅު ބަލަން އިންނައިރު އަޖައިބެއް ފަދައޭ

#1
އިރުއަރާ ދޯދިތައް އަލިވެޔޭ
*މުޅި ފަޒާ ރަންކުލައިން ދިއްލައޭ
ސާފު ވައި އައިސް ހަމުގަ ބީހެޔޭ
*ސާފު ޖައްވުން މިހިތް ފިނިވެޔޭ
ޝޯހުވާހާވޭ
*ޝޯހުވާހާވޭ އިނގޭ

#2
އުޑުމަތިންދާ ދޫނި ފެނިލައޭ
*ބައިހަދާފާ އުދުހި ހޫރެޔޭ
ރާގުރާގަށް ގޮވާ އަޑުއިވޭ
*ރާގު އިވުމުން މިހިތް ފުރިދޭޭ
ޝޯހުވާހާވޭ
*ޝޯހުވާހާވޭ އިނގޭ

#3
މާކަނޑުން ދޯނިތައް ދުއްވައޭ
*ޗާލު މަންޒަރު ދުރުން ސިފަވެޔޭ
ވާތި ހިތްވަރު މަހިނިތުން ވަމޭ
*ވާ މިރިޒުގަށް ޝުކުރުވެރި ވަމޭ
ޝޯހުވާހާވޭ
*ޝޯހުވާހާވޭ އިނގޭ

#4
ޗާލު ލޮލަށް ފެންނައިރު
*އަޖައިބެއް ފަދައޭ
ރާޅު ބަލަން އިންނައިރު
*އަޖައިބެއް ފަދައޭ`,

  englishLyrics: `#M
Reethi gudhurathee mi manzaru
*Chaalu lolah fennairu ajaibeh fadhaey
Saafu dhonveli thundimathee
*Raalhu balan innairu ajaibeh fadhaey
#1
Iruaraa dhoadhithah aliveyey
*Mulhi fazaa rankulain dhihlaey
Saafu vai ais hamuga beeheyey
*Saafu jahvun mihiyy finiveyey
Shoahuvaahaavey
*Shoahuvaahaavey ingey
#2
Udumathindhaa dhooni fenilaey
*Baihadhaafaa udhuhi hooreyey
Raaguraagah govaa aduivey
*Raagu ivumun mihiyy furidheyey
Shoahuvaahaavey
*Shoahuvaahaavey ingey
#3
Maakandun dhoanithah dhuhvaey
*Chaalu manzaru dhurun sifaveyey
Vaathi hiyyvaru mahinithun vamey
*Vaa mirizugah shukuruveri vamey
Shoahuvaahaavey
*Shoahuvaahaavey ingey
#4
Chaalu lolah fennairu
*Ajaibeh fadhaey
Raalhu balan innairu
*Ajaibeh fadhaey`,
},
{
  id: 6,
  name: `Fahathah Balaalaifi`,
  genre: 'Nala',
  lyrics: `#M
ފަހަތަށް ބަލާލައިފި ކަތިފައި އަޅާލައިފި އަރިއަށް ޖަހާލައިފި ފަރި ކަމަނާ
*ކަޅިވެސް އަޅާލައިފި ރަކިކޮށް އެ ހީލައިފި ބާރަށް ހިނގާލައިފި ރަނި ކަމަނާ

#1
ފަހަތުން މަދާއިރު ތުނބުން ފުމެލުމުން ހީވެ ހުއްޓެން އުޅޭހެން ތި ދޮންކަމަނާ
*އެނަސް ފަޔަށް ބާރުލާފާ އަނެއްކާ ތި ބާރޭ ކުރީ ފަރި ހިންގުން ކަމަނާ
*މަޑުކޮށް ބަލާށޭ ބުނަން ކަމަނާ

#2
ދަތިކަން ހިތައްވޭ ލޮލާލޯ ދިމާވެސް ނުކޮށް ޒާތަކަށް ކަޅިއަޅާތީ ކަލާ
*ލަދުވެސް ހަނދާނެތް ނެތޭ މަގުމަތިން ފާރަލައިގެން ދެވޭ ފަސްފަހަތް ނުބަލާ
*މަޑުކޮށް ބަލާށޭ ބުނަންހޭ ކަލާ

#3
ފަހަކަށް ނުދަން ފާރަޔައްވެސް ހުރިން ގޯތި ބޭރުން ފެނޭތޯ ފަހުން ކަމަނާ
*ފަހަކާ ހައެއް ގަޑި ބަލައިގެން ހުރީ ތިއްތި ވޭތޯ ހަވީރަށް ބަލަން ކަމަނާ
*މަޑަކުން މިހިތް ނޯވެޔޭ ކަމަނާ

#4
ފަރިކަން އަޖައިބުން މިހިތް ފުރިދަނީއޭ ބަލަން ހުރެވެނީ ލޯމަރާވެސް ނުލާ
*ފަރިކަން ވެޔޭ ޖައްވުގާ ހުވަނދުލާފާ ވަހުންވެސް ތިދާއިރު މަގުން ފަރިމަލާ
*މަޑު އަތްތިލައިގާ ހިފަންހޭ ކަލާ`,

  englishLyrics: `#M
Fahathah balaalaifi kathifai alhaalaifi ariah jahaalaifi fari kamanaa
*Kalhives alhaalaifi rakikoh e heelaifi baarah hingaalaifi rani kamanaa
#1
Fahathun madhaairu thunbun fumelumun heeve huhten ulheyhen thi dhonnkamanaa
*Ehenas fayah baarulaafaa anehkaa thi baarey kuree fari hingun kamanaa
*Madukoh balaashey bunan kamanaa
#2
Dhathikan hithahvey lolaaloa dhimaaves nukoh zaathakah kalhialhaathee kalaa
*Ladhuves handhaaneh nethey magumathin faaralaigen dhevey fasfahayy nubalaa
*Madukoh balaashey bunanhey kalaa
#3
Fahakah nudhan faarayahves hurin goathi beyrun feneythoa fahun kamanaa
*Fahakaa haeh gadi balaigen huree thihthi veythoa haveerah balan kamanaa
*Madakun mihiyy noaveyey kamanaa
#4
Farikan ajaibun mihiyy furidhaneeey balan hurevenee loamaraaves nulaa
*Farikan veyey jahvugaa huvandhulaafaa vahunnves thidhaairu magun farimalaa
*Madu ayythilaigaa hifanhey kalaa`,
},
{
  id: 7,
  name: 'Dhaanvithan',
  genre: 'Nala',
  lyrics: `#M
ދާންވިތަން ބުނެލާ ކަލާ ހޯދަން
*ހޯދޭތޯ އަހަރެން ދުވެފަދާނަމޭ މަޑިއުކާނަމޭ ބެރުޖަހާނަމޭ
ކީއްކުރަންހޭ ހޯދަނީ
*ސިއްރު ސިއްރުން ބަލާ
ލާމުގާ ތިބެޔޭ މަގޭ ދެބިޓުން
*އަންނާށޭ ލޯބިން ބަގުތަޅާނަމޭ އަނބުތަޅާނަމޭ ބަކަތަޅާނަމޭ
#1
ހަނަފަސް ތަނެއްގާ ހިތް ރައްކާ ކުރީމޭ
*ދަބަރާ ލޮނާ ނުޖަހާނެހެން
އަލަކަސް ތިލޯބީގާ ހިތް ދީވާނަ ވެއްޖޭ
*ބިޓަކާ ދިމާ ނުބެލޭނެހެން
ބުނަންބޭނުން ކަމެއް ލޯބިން
*ބުނިއްޔާ އަޑު އަހާނަންހޭ
ފާފުގާ އޮވެޔޭ މަގޭ ގޯއްޗެއް
*ބުނާށޭ އޭރުން ވިނަ ނޮޅާނަމޭ ޓިނުއަޅާނަމޭ އުވަޖަހާނަމޭ
#2
ފީނާފާ ލޯބިން ޓައިޓޭނިކު ނަގަންހޭ
*ހޮރުންނަގާ ޗަކަމޯލުހެން
މީޓަރުގެ ނަމްބަރު މިހިތުގެ މަދެންހޭ
*ރީޑިން ނެގީމާ ސާފުވާނެހެން
ބުނަންބޭނުން ކަމެއް ލޯބިން
*ބުނިއްޔާ އަޑު އަހާނަންހޭ
ކާށިދޫ ބިމުގާ އެއާޕޯޓެއް
*އަޅާލަން ހިލަތާރު ދޭނަމޭ ލާރިދޭނަމޭ ބާރުދޭނަމޭ`,
       
  englishLyrics: `#M
Dhaanvithan bunelaa kalaa hoadhan
*Hoadheythoa aharen dhuvefadhaanamey madiukaanamey berujahaanamey
Keehkuranhey hoadhanee
*Sihru sihrun balaa
Laamugaa thibeyey magey dhebitun
*Annaashey loabin baguthalhaanamey anbuthalhaanamey bakathalhaanamey
#1
Hanafas thanehgaa hiyy rahkaa kureemey
*Dhabaraa lonaa nujahaanehen
Alakas thiloabeegaa hiyy dheevaana vehjey
*Bitakaa dhimaa nubeleynehen
Bunanbeynun kameh loabin
*Bunihyaa adu ahaananhey
Faafugaa oveyey magey goahcheh
*Bunaashey eyrun vinanolhaanamey tinualhaanamey uvajahaanamey
#2
Feenaafaa loabin taiteyniku naganhey
*Horunnagaa chakamoaluhen
Meetaruge nanbaru mihithuge madhenhey
*Reedin negeemaa saafuvaanehen
Bunanbeynun kameh loabin
*Bunihyaa adu ahaananhey
Kaashidhoo bimugaa eaapoateh
*Alhaalan hila thaarudheynamey laaridheynamey baarudheynamey`,
},
{
  id: 8,
  name: `Haarey`,
  genre: 'Taki',
  lyrics: `#S
މީރުވަސްދޭ މާމަލުގެވާ
ރީތިކަންވާ ޗާލު ހާރޭ
ވެދުމަކަށް އަޅުވާލަދޭމީ
ގެތިމި އަމުނާ ހާރޭ
ވެދުންމި ކުރަނީ

#M
ފިނިފެންމަލުން އެކުލަ ހާރޭ
*ހާރޭ ގަތާލި އަޅުވައިދޭ
ފިނިފިނި ރަބީއުގެ ހަވީރޭ
*ހާރޭ ގަތާލި އަޅުވައިދޭ

#1
ޖައްވުގާ ފަތުރާލި ވަހަކުން
*ތަން އެއްވަސް ކޮއްލައިފިއޭ
ރީތިހާ ކުލައިން ޖަރީކޮށް
*މުޅިފަޒާ ދިއްލާލިއޭ
ހިންމަތް ކުރީތި ދެވޭ ހާރޭ
*ހިދުމަތުގެ މީއެ މަލްހާރޭ

#2
ޖޯޝުގާ ހިތުގާވި ޝުކުރުން
*ހިތް މުޅިން ކުރުނީސްވެދޭ
ލޭފަ ވެތިކަންވާ މިހިތްތައް
*ރޫހަކުން ގުޅިލާމެހޭ
ހިންމަތް ކުރީތި ދެވޭ ހާރޭ
*މިތުރުންގެ މީއެ މަލްހާރޭ

#N
ހާރޭ ގަތާލި އަޅުވައިދޭ
*ހާރޭ ގަތާލި އަޅުވައިދޭ`,

  englishLyrics: `#S
Meeruvasdhey maamalugevaa
Reethikannvaa chaalu haarey
Vedhumakah alhuvaaladheymee
Gethimi amunaa haarey
Vedhunnmi kuranee
#M
Finifennmalun ekula haarey
*Haarey gathaali alhuvaidhey
Finifini rabeeuge haveerey
*Haarey gathaali alhuvaidhey
#1
Jahvugaa fathuraali vahakun
*Than ehvas kohlaifiey
Reethihaa kulain jareekoh
*Mulhifazaa dhihlaaliey
Hinnmayy kureethi dhevey haarey
*Hidhumathuge meee malhaarey
#2
Joashugaa hithugaavi shukurun
*Hiyy mulhin kuruneesvedhey
Leyfa vethikannvaa mihiyythah
*Roohakun gulhilaamehey
Hinnmayy kureethi dhevey haarey
*Mithurunnge meee malhaarey
#N
Haarey gathaali alhuvaidhey
*Haarey gathaali alhuvaidhey`,
},
{
  id: 9,
  name: 'Mee Rhythm',
  genre: 'Zamaanee',
  lyrics: `#1
ފަވާލާނީ ރިދަމް ރަނުން
*ލޭ ކައްކުވާލާނީ ބޮޑުބެރު އަޑުން
ކިޔާލާނީ ރިދަމް ނަމުން
*އިއްވާނަމޭ ރާގު ނަލަ ނަލަ އަޑުން
#2
މީ ރިދަމް
*ހިތް ގައިމު ރާގެއްގާ
މީ ރިދަމް
*ލަވަތަށް ކިޔާލާނީ
މީ ރިދަމް
*ބެރުތައް ޖަހާލާނީ
މީ ރިދަމް
*އެންމެން ނަށާލާށޭ
$1
ލާމު އަތޮޅުގެ ނަން އިވޭހެން ސާފުވާ ޅެން ބައިތަކުން
*ޗާލު ހައްދުންމަތި ކިޔާހެން ރާގުގާ މިކިޔައިދެނީ
ނަލަ ރީތި ރާގުން ފަރި ރީތި ނެށުމުން ބެރުގާ ކަނޑާލާ ފުނަތައް އަޑުން
*ނަލަ ރީތި ރާގުން ފަރި ރީތި ނެށުމުން ބެރުގާ ކަނޑާލާ ފުނަތައް އަޑުން
$2
ވާ ހުނަރު ޖީލެއް މިއީ
*މާ އުކުޅުތައް ކޮށް ޖަރީ
އާ ދުވަހަކަށް ފަރިވަނީ
*ލާ މި ހިތްވަރު ކެރި ތިބީ
ނަލަ ރީތި ރާގުން ފަރި ރީތި ނެށުމުން ބެރުގާ ކަނޑާލާ ފުނަތައް އަޑުން
*ނަލަ ރީތި ރާގުން ފަރި ރީތި ނެށުމުން ބެރުގާ ކަނޑާލާ ފުނަތައް އަޑުން
$3
ކާބަފައިން އެގެނައި ސަގާފަތް ތާ އަބަދު ދަމަހައްޓަމުން
*އާދަކާދައިން ގުޅިފަވާހެން ވާ މިކުޅިވަރު ދިރުވަމުން
ގުޅިގެން އެކު ވާން ހިނގާށެ، ކެރިގެން އުޅެމާ ހިނގާށެ، އެދިގެން މިކަމާ މިފޯރި ޖޯޝާ އެކީ
*ގުޅިގެން އެކު ވާން ހިނގާށެ، ކެރިގެން އުޅެމާ ހިނގާށެ، އެދިގެން މިކަމާ މިފޯރި ޖޯޝާ އެކީ`,

  englishLyrics: `#1
Favaalaanee ridham ranun
*Ley kahkuvaalaanee boduberu adun
Kiyaalaanee ridham namun
*Ihvaanamey raagu nala nala adun
#2
*Mee ridham
Hiyy gaimu raagehgaa
*Mee ridham
Lavathah kiyaalaanee
*Mee ridham
Beruthah jahaalaanee
*Mee ridham
Ennmen nashaalaashey
$1
Laamu atholhuge nan iveyhen saafuvaa lhen baithakun
*Chaalu hahdhunnmathi kiyaahen raagugaa mikiyaidhenee
Nala reethi raagun fari reethi neshumun berugaa kandaalaa funathah adun
*Nala reethi raagun fari reethi neshumun berugaa kandaalaa funathah adun
$2
Vaa hunaru jeeleh miee
*Maa ukulhuthah koh jaree
Aa dhuvahakah farivanee
*Laa mi hiyyvaru keri thibee
Nala reethi raagun fari reethi neshumun berugaa kandaalaa funathah adun
*Nala reethi raagun fari reethi neshumun berugaa kandaalaa funathah adun
$3
Kaabafain egenai sagaafayy thaa abadhu dhamahahtamun
*Aadhakaadhain gulhifavaahen vaa mikulhivaru dhiruvamun
Gulhigen eku vaan hingaashe kerigen ulhemaa hingaashe edhigen mikamaa mifoari joashaa ekee
*Gulhigen eku vaan hingaashe kerigen ulhemaa hingaashe edhigen mikamaa mifoari joashaa ekee`,
},
{
  id: 10,
  name: `Iruvaru Jehumun`,
  genre: 'Kaasi',
  lyrics: `#M
ވާނޭވާނޭ އޮޑި މަހާ
*ވާނޭވާނޭ އޮޑި މަހާ
*ހޭޔަންބޯ

#1
އިރުވަރު ޖެހުމުން އޮޑިބާލާ
*އިރުވައި މޫސުމުގާ ހޭލާ
އިރުއެއަރާ އަލިކަން ނުވަނީސް
*ތަކުރު އޮޑި އެބުނި ބާލާށޭ

#2
ދުންބުރުވާ ކިޔެވެލި ކިޔަވާ
*ދޮންދަނބު ރުކަކުން ކާށި އަޅާ
ދޮންފަންވަތުގާ މަސްކުރަހާ
*ތަކުރު އޮޑި އެބުނި ބާލާށޭ

#3
ފެން ރުނބައެއް ކިޔަވާ މަތުރާ
*ފެން އަޅަމުން ހުރެ އެންވަތުގާ
ހިތްވަރުލާ ތިބިހާ ކަތުނޭ
*ތަކުރު އޮޑި އެބުނި ބާލާށޭ

-
$M
ފަޅުވެރިން ބުނޭ
*ބޭރުންއައިނެއް އޮވެ އާދޭ
ކެޔޮޅުބޭ ބުނޭ
*ބޭރުންއައިނެއް އޮވެ އާދޭ

$1
ކެޔޮޅު ގޮވާނަގައޭ
*ދެރިޔާނާގާ ދޭށޭ
ބާރުލާ ހިތްވަރުލާ ފަލިތައް ބާލާމާ ހިނގާ
*ބާރުލާ ހިތްވަރުލާ ފަލިތައް ބާލާމާ ހިނގާ

$2
އާން އޮޑީ ކުރިޔާ ދިމާލުގާ
*އައިނެތް އެބޯތޭ ތަޅާފޮޅާ
އާން ނިކަން މިދިމާލުން ބޭރުގާ
*އައިނެތް އެބޯތޭ ތަޅާފޮޅާ

$3
އިންޖީނާ ރިޔަލާއެކީގާ
*އިންޖީނާ ރިޔަލާއެކީގާ
ދުއްވާށޭ މެކުހަށް ޖަހާލާ
*ދުއްވާށޭ މެކުހަށް ޖަހާލާ

$N
ދާނެތެލެއްނެތޭ މިއަދު ފެލިވަރަކަށް
*ދާނެތެލެއްނެތޭ މިއަދު`,

  englishLyrics: `#M
Vaaneyvaaney odi mahaa
*Vaaneyvaaney odi mahaa
*Heyyannboa
#1
Iruvaru jehumun odibaalaa
*Iruvai moosumugaa heylaa
Iruearaa alikan nuvanees
*Thakuru odi ebuni baalaashey
#2
Dhunnburuvaa kiyeveli kiyavaa
*Dhonndhanbu rukakun kaashi alhaa
Dhonnfannvathugaa maskurahaa
*Thakuru odi ebuni baalaashey
#3
Fen runbaeh kiyavaa mathuraa
*Fen alhamun hure ennvathugaa
Hiyyvarulaa thibihaa kathuney
*Thakuru odi ebuni baalaashey
-
$M
Falhuverin buney
*Beyrunnaineh ove aadhey
Keyolhubey buney
*Beyrunnaineh ove aadhey
$1
Keyolhu govaanagaey
*Dheriyaanaagaa dheyshey
Baarulaa hiyyvarulaa falithah baalaamaa hingaa
*Baarulaa hiyyvarulaa falithah baalaamaa hingaa
$2
Aan odee kuriyaa dhimaalugaa
*Aineyy eboathey thalhaafolhaa
Aan nikan midhimaalun beyrugaa
*Aineyy eboathey thalhaafolhaa
$3
Innjeenaa riyalaaekeegaa
*Innjeenaa riyalaaekeegaa
Dhuhvaashey mekuhah jahaalaa
*Dhuhvaashey mekuhah jahaalaa
$4
Dhaanethelehnethey miadhu felivarakah
*Dhaanethelehnethey miadhu`,
},
{
  id: 11,
  name: 'Kos Govaaney',
  genre: 'Kaasi',
  lyrics: `#M
ކޮސް ގޮވާނޭ ހޮޅުއަށީގާ ތާ ހަސަންބޭ އިނދެ މަޑިއްޕާ
*މެންދުރުން އިރު ނެއްޓި ދިޔަކަން ނެތި ހަނދާން އިނދެގެން ދުފާލާ
ފޫހި މަވަނީ ބޯ މަގޮވަނީ
*ފައި ދޮށަށް އިނދެގެން ތަޅާތީ ކުޅު ރަތް ކުޅު
#1
ހެނދުނު ހެނދުނާ ފޫގަޅާލާ އެރި އަށީގާ ތަން އަޅާނޭ
*ކާނެ އެއްޗެއް ގޭގަ ނެތަކަސް އިނދެ ހަސަންބޭ ފޮނި ކަނޑާނޭ
އިރު އިރު ކޮޅުން މީހަކާ ގެޅި ބޮޑު ޒުވާބެއް އިނދެ ފަށާނޭ
*ބަސްބުނާނޭ ރޭދުވާވެސް ނޭނގި އިނދެގެން ތާ ހަސަންބޭ
#2
މާލި އައްޕާޔާ ހަސަންބޭ އަށި ދެކޮޅުތިބެ އަތް އުކާނޭ
*ކުދި ގޮލައިންތައް ނަކަލު ކުރަމުން އަށި ނިވަލު ތިބެ ހީނަގާނޭ
އަންނަ ރުޅިއިން ހަށި ފޮޅާލާފާ ހަސަންބޭ ތެދުވެދާނޭ
*ފޫގަޅާލާ މުންޑު ކޮށިކޮށް ހުރެ ހަޅޭލާ ދުވެ ނަގާނޭ
#3
އަސުރު ވިޔަކަސް ގޭދޮށަށް މަތު ނުވެ އަށިގާ އޮވެ ނިދާނޭ
*ބަނޑު އެ ފުއްޕާ ދަތިވެ ނޭވާ ބަރު އަޑުން އޮވެ ގުގުރި ދަމައޭ
އިރު ލޮނުންތިރި އަނދިރިކަން ވެރި ވީކަމއްވެސް ނޭނގުނޭދޯ
*ގެއްލި މިދުނިޔެ ނަލަވެ އެދުނިޔެ ގެއްލި ތިދަނީ ތާ ހަސަންބޭ
-
$M
*ދިޔަތަނާ ގޭދޮށަށް ހަސަންބޭ
ފައިގާއިން މަރަވަޅީގެ ގޮބު ވީތަން ނޭނގިފަ ހުރެ
*ކޮސް ގޮވާ ނުރުހިފާ ހަސަންބޭ
ސަންޕާފުޅު ދުމަށި ދޮށުގަ ވީނުވިއެއް ނޭނގިފަ ހުރެ
*ދިޔަތަނާ ގޭދޮށަށް ހަސަންބޭ
$1
ނިވާނަގާ އެތެރެ ގެއަށް ވަން ހިނދުގާ ފެނުނިއްޔޯ
*ފުޅައްމަތިން އަރާ ޣައިބު ވިއްޔޯ
ހައި ބަނޑުގާ ހުރެ ރުނބަޔަށް ދެކަޅި އެކީ އެއްލިއްޔޯ
*ދަނޑު ފަނޑު ހިކި ބޭނުން ކެނޑުނިއްޔޯ
$2
ރާބެ އަލީ ކަރަށް ބާރުލާފާ އައިސް ހަޅޭލަޔޯ
*މިރަށް މަތިން އުދުހުނު ބައްތެއްޔޯ
ބޯހޫރާ ދެކޮޅު ބަލާ ހަސަންބެއައް ނިކުމެވުނޯ
*ވީ އުފަލުން އެ މަގުމަތީ ނެއްޓޯ
$N
ހާތަކުރާ މުދިންބެއާ
*ނައިބު ކަލޭ ވަޑައިގަތޯ
އަންބާ އާނހުތް ކިޔަމުން
*އެއް ކޮރަކަށް ނަށައިގަތޯ`,

  englishLyrics: `#M
Kos govaaney holhuasheegaa thaa hasannbey indhe madihpaa
*Menndhurun iru nehti dhiyakan nethi handhaan indhegen dhufaalaa
Foohi mavanee boa magovanee
*Fai dhoshah indhegen thalhaathee kulhu rayy kulhu
#1
Hendhunu hendhunaa foogalhaalaa eri asheegaa than alhaaney
*Kaane ehcheh geyga nethakas indhe hasannbey foni kandaaney
Iru iru kolhun meehakaa gelhi bodu zuvaabeh indhe fashaaney
*Basbunaaney reydhuvaaves neyngi indhegen thaa hasannbey
#2
Maali ahpaayaa hasannbey ashi dhekolhuthibe ayy ukaaney
*Kudhi golainnthah nakalu kuramun ashi nivalu thibe heenagaaney
Anna rulhiin hashi folhaalaafaa hasannbey thedhuvedhaaney
*Foogalhaalaa munndu koshikoh hure halheylaa dhuve nagaaney
#3
Asuru viyakas geydhoshah mathu nuve ashigaa ove nidhaaney
*Bandu e fuhpaa dhathive neyvaa baru adun ove guguri dhamaey
Iru lonunnthiri andhirikan veri veekamahves neynguneydhoa
*Gehli midhuniye nalave edhuniye gehli thidhanee thaa hasannbey
-
$M
*Dhiyathanaa geydhoshah hasannbey
Faigaain maravalheege gobu veethan neyngifa hure
*Kos govaa nuruhifaa hasannbey
Sannpaafulhu dhumashi dhoshuga veenuvieh neyngifa hure
*Dhiyathanaa geydhoshah hasannbey
$1
Nivaanagaa ethere geah van hindhugaa fenunihyoa
*Fulhahmathin araa ghaibu vihyoa
Hai bandugaa hure runbayah dhekalhi ekee ehlihyoa
*Dhandu fandu hiki beynun kendunihyoa
$2
Raabe alee karah baarulaafaa ais halheylayoa
*Mirah mathin udhuhunu bahthehyoa
Boahooraa dhekolhu balaa hasannbeah nikumevunoa
*Vee ufalun e magumathee nehtoa
$3
Haathakuraa mudhinnbeaa
*Naibu kaley vadaigathoa
Annbaa aanhuyy kiyamun
*Eh korakah nashaigathoa`,
},
{
  id: 12,
  name: 'Saavan',
  genre: 'Kaasi',
  lyrics: `#M
ސާވަންގާ ރާހަތު ދޭހާމާ
*ފޯދޭ ވާރީޔާ
ފޯދޭ ވާރީޔާ ހާރޭ
*ފޯދޭ ވާރީޔާ
#1
ނާޒުކީ ރޭ ދޭށޭ
*ވާގު އަރާމުންނޭ
ނާދިރި ފަރިވާ އެ ތާޒާ
*ތާޒާ ނޫރާ ނޫރާނީ މާ
-
$M
ފޮޅުވާ އެއުފާ ސާފުމަލުން ރޫޙުދިރޭ ޗާލު ހަޒާރޭ މަލުންމީ
*ފަރިވާ ފަރިވާ އެއިނީ އަލުން ފޮޅޭތާ ނަލަ ނަލަ އަލުން ފޮޅޭތާ

$1
ފަތިހައްވެ އުޖާލާ އެ އަލީގާ ފަރި ނާޒޫ
*ފަތިހައްވެ އުޖާލާ އެ އަލީގާ ފަރި ނާޒޫ
*އެ އަލީގާ ފަރި ނާޒޫ
ފަރިޔާދުގައޭ ދިއްލޭމީ ރޫޙުދިރޭ ޗާލު ހަޒާރޭ މަލުންމީ
*ފަރިވާ ފަރިވާ އެއިނީ އަލުން ފޮޅޭތާ ނަލަ ނަލަ އަލުން ފޮޅޭތާ

$M
ދީރޭނޭ ރޫޙާއި ޖާނާ
*އިލްމު ދިރޭ ގުލްޒާރޭ ދިއްލެނީ

$1
މިހާރު އާވީ
*ދިލްފަރި މިއުޅޭހާ`,

  englishLyrics: `#M
Saavan gaa raahathu dhey haa maa
*Foadhey vaari yaa
Foadhey vaari yaa haarey
*Foadhey vaari yaa
#1
Naazukee rey dheyshey
*Vaaqu araamunney
Naadhiri farivaa e thaazaa
*Thaazaa nooraa nooraanee maa
-
$M
Folhuvaa e ufaa saafu malun roohu dhirey chaalu hazaarey malun mee
*Farivaa farivaa e inee alun folhey thaa nala nala alun folhey thaa
$1
Fathihah ve ujaalaa e aleegaa fari naazoo
*Fathihah ve ujaalaa e aleegaa fari naazoo
*E aleegaa fari naazoo
Fariyaadhu ga ey dhillee mee roohu dhirey chaalu hazaarey alun mee
*Farivaa farivaa e inee alun folhey thaa nala nala alun folhey thaa
#M
Dheereyney roohaai jaanaa
*llmu dhirey qulzaarey dhilleny
#1
Mihaaru aa vee
*Dhilfari mi ulheyhaa`,
},
{
  id: 13,
  name: `Aaberu Toh Toh`,
  genre: 'Nala',
  lyrics: `#M
އާބެރު ޓޮއް ޓޮއް
*ބާބެރު ޑަން ޑަން
އާބެރު ޓޮއް ޓޮއް ޓޮއް ޓޮއް ބާބެރު ޑަން ޑަން ބާރުކޮށް އަހާށޭ
*އާބެރު ޓޮއް ޓޮއް ޓޮއް ޓޮއް ބާބެރު ޑަން ޑަން ބާރުކޮށް ކިޔާށޭ

#1
މަސަލަހުން ހަރުބީ އެފެށީމާ
*ތަގުޑިޔަށް އަޑު ބަދަލުކުރީމާ
ލަސްލަހުން އަޑުތައް އެކުވީމާ
*ހަތަރު ބެރު ބުން ފާޅުކުރީމާ

#2
ދެ ހަމަޔަށް އަޑުތައް ވަކިކޮއްފާ
*ދެކުޅި އެކުގާ ދާނުވެލީމާ
ދެކަކުލުން ފަށްަތައް ސޮއްސާލާ
*ހެވިކަމުގެ ހުނަރެއް ދެއްކީތާ

#3
ގިގުނިއާ ތަކަހޮޅިތައް އަޅުވާ
*އެމުނި މާފަތިތައް ކަރު އަޅުވާ
ދެބުމަޔަށް ހިމަ ކޫރު ދެމީމާ
*އެކި ނެށުމުގާ ފަރިވެލަނީތާ

#4
ރާވެރިން ރުކުގާތިބެ ބަލަނީ
*ފަރުހިލަން ހުރެ ގޮއްޔެ އެނަށަނީ
ޅިސްކޮށަން މާވަޑި ހުރެ ހެލެނީ
*ދެބެރު ފުނަ އަޑު ރީތިވީމާ`,

  englishLyrics: `#M
Aaberu toh toh
*Baaberu dan dan
Aaberu toh toh toh toh baaberu dan dan baarukoh ahaashey
*Aaberu toh toh toh toh baaberu dan dan baarukoh kiyaashey
#1
Masalahun harubee efesheemaa
*Thagudiyah adu badhalukureemaa
Laslahun aduthah ekuveemaa
*Hatharu beru bun faalhukureemaa
#2
Dhe hamayah aduthah vakikohfaa
*Dhekulhi ekugaa dhaanuveleemaa
Dhekakulun fahathah sossaalaa
*Hevikamuge hunareh dhehkeethaa
#3
Giguniaa thakaholhithah alhuvaa
*Emuni maafathithah karu alhuvaa
Dhebumayah hima kooru dhemeemaa
*Eki neshumugaa farivelaneethaa
#4
Raaverin rukugaathibe balanee
*Faruhilan hure gohye enashanee
Lhiskoshan maavadi hure helenee
*Dheberu funa adu reethiveemaa`,
},
{
  id: 14,
  name: `Hoadhaadheyshey`,
  genre: 'Thinberu',
  lyrics: `#M
ހޯދާދޭށޭ ޔާރާ ނަލަ ރޯޅިޔާއޭ
*ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ

#1
ފަރި ހަނދުވަރުގެ ތެރޭގާ އޭނާ ހީލިގޮތުން
*ފަރި ޖައުޒާގެ އެރީޔޭ ހީލިޔެ ޗާލުކަމުން
ބުނެދޭށޭ މިހިތާރޫހު އެރޭ ދެ ވުނީޔޭ
*ދެކިފާ ހިތުގެ ރިހުން ލުއިވޭތޯ ދެވެނީޔޭ
ހިޔާލޭމީ ދުރު ނުވެވޭ ހަނދާން ވާނީ ޔޭ
*ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ

#2
ރާސްތާ ނޭންގި ދަނީ އިސުކުގެ ތޫފާން ޖެހިފާ
*ގަދަ ހަނދުވަރުގެ ތެރޭ ލޯބިކިނާރާ އޮޅިފާ
ލޭގެ ހިނގުމާއި ތަބީއަތު އަދު ބަދަލޭވާނީ
*މޭގެ ރިހުމާއި ތަދަށް ހޫނު މިއިހުސާސު ވަނީ
އެހީވާނޭ ޔާރޭއް ނެތުމުން ވަޔާއޭ
*ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ

#3
އޮތިމީ ރީތިވި ހިތްގައިމު އަސަރު މޫނެކޭ
*ދާއިމީ ލޯތްބާއެކު ފިރުމާދޭނޭ އަތެކޭ
ތިޔަލޯބީގެ ހީޔާލާއި އަސަރުގާ ވަމޭ
*ކަރުނޭ އެންމެ ފުރާނާގެ ދިރުން ހަމަތެދެކޭ
ނަޒަރުވީ އަދުގުޅިފާ ނަލަސޫރަޔާ އޭ
*ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ ގުޅިފާވަނީ އޭނާ މިހިތާ ލެޔާއޭ

#N
ގުޅިފާވަނީ އޭނާ
*މިހިތާ ލެޔާއޭ`,

  englishLyrics: `#M
Hoadhaadheyshey yaaraa nala roalhiyaaey
*Gulhifaavanee eynaa mihithaa leyaaey gulhifaavanee eynaa mihithaa leyaaey
#1
Fari handhuvaruge thereygaa eynaa heeligothun
*Fari jauzaage ereeyey heeliye chaalukamun
Bunedheyshey mihithaaroohu erey dhe vuneeyey
*Dhekifaa hithuge rihun luiveythoa dheveneeyey
Hiyaaleymee dhuru nuvevey handhaan vaanee yey
*Gulhifaavanee eynaa mihithaa leyaaey gulhifaavanee eynaa mihithaa leyaaey
#2
Raasthaa neynngi dhanee isukuge thoofaan jehifaa
*Gadha handhuvaruge therey loabikinaaraa olhifaa
Leyge hingumaai thabeeathu adhu badhaleyvaanee
*Meyge rihumaai thadhah hoonu miihusaasu vanee
Eheevaaney yaareyh nethumun vayaaey
*Gulhifaavanee eynaa mihithaa leyaaey gulhifaavanee eynaa mihithaa leyaaey
#3
Othimee reethivi hiyygaimu asaru moonekey
*Dhaaimee loayybaaeku firumaadheyney athekey
Thiyaloabeege heeyaalaai asarugaa vamey
*Karuney ennme furaanaa ge dhirun hamathedhekey
Nazaruvee adhugulhifaa nalasoorayaa ey
*Gulhifaavanee eynaa mihithaa leyaaey gulhifaavanee eynaa mihithaa leyaaey
#4
Gulhifaavanee eynaa
*Mihithaa leyaaey`,
},
{
  id: 15,
  name: `Adhabee Salaam`,
  genre: 'Kaasi',
  lyrics: `#M
ފަރިވާހާ
*ގުލްޒާރުން މާމަލުން އަދަބީ ސަލަމުގާ ވެދުމޭ ކުރާނީ

#1
އެކިވައްތަރު މާމަލުން
*އެކިއެކި ގުލްހާރުތައް އަމުނާމަލުން

-
$M
ފަރިވާ އުފާވެ ދާ މަލޭތާ
*ކޯޅީގާ ނޫރާނީ ފޯދޭނެޔޭ

$1
ގުލޭޒާރުންނޭ އާވާ އެއީ
*ރޫހޭ ދިރޭ

$2
ދެކޭ ފިނިރޯޅި ވައިގާ އައީ
*މޫސުން ދިރޭ

$3
ކޯޅީގާ ނޫރާނީ
*ފޯދޭނީީ`,

  englishLyrics: `#M
Farivaahaa
*Gulzaarun maamalun adhabee salamugaa vedhumey kuraanee
#1
Ekivahtharu maamalun
*Ekieki gulhaaruthah amunaamalun
-
$M
Farivaa ufaave dhaa maleythaa
*Koalheegaa nooraanee foadheyneyey
$1
Guleyzaarunney aavaa eee
*Roohey dhirey
$2
Dhekey finiroalhi vaigaa aee
*Moosun dhirey
$3
Koalheegaa nooraanee
*Foadheyneey`,
},
{
  id: 16,
  name: 'Adhumikuree',
  genre: 'Nala',
  lyrics: `#M
އަދުމިކުރީ ސާފު އިބާރާ ތުން
*ހިތޭ ހަދިޔާ
މިހިތާ އޭގާ ވާހާބާރާ
*ކުރީ ހަދިޔާ
#1
ފަރުވާ އެއް ލިބޭނޭ ބޭހަކީ
*ދިރުމެއް ދެން ދެވޭނޭ ރޫހަކީ
ފިރުމައިދީ ހެދޭނޭ މީހަކީ
*ފިރުމައިދީ ހެދޭނޭ މީހަކީ
ތިޔައީކަމުގާ ވާތީ މިކުރީ
*ހިތޭ ހަދިޔާ
#2
ނުގަބޫލަސް ބުނާށޭ އާނއެކޭ
*ނުބުނަށޭ އިވޭ ހެން ނޫނެކޭ
ބުނުމުން ވާން އޮތީ ބަރުބާދެކޭ
*ބުނުމުން ވާން އޮތީ ބަރުބާދެކޭ
އުންމީދުތަކާ އެކުގާ ކުރަނީ
*ހިތޭ ހަދިޔާ
#3
ނުރުހުމުގާ ކުރާ އިންކާރަކީ
*ނުހިފަންޏާ ވެދާ ބަރުބާދަކީ
މަރުކަމުގާ ވެޔޭ އިންސާފަކީ
*މަރުކަމުގާ ވެޔޭ އިންސާފަކީ
ފޮރުވާފަ ނުބާއްވާށޭ މިކުރީ
*ހިތޭ ހަދިޔާ
#N
ހިތޭ ހަދިޔާ
*ކުރީ ހަދިޔާ`,

  englishLyrics: `#M
Adhumikuree saafu ibaaraathun
*Hithey hadhiyaa
Mihithaa eygaa vaahaa baaraa
*Kuree hadhiyaa
#1
Faruvaa eh libeyney beyhakee
*Dhirumeh dhen dheveyney roohakee
Firumaidhee hedheyney meehakee
*Firumaidhee hedheyney meehakee
Thiyaeekamugaa vaathee mikuree
*Hithey hadhiyaa
#2
Nugaboolas bunaashey aanekey
*Nubunashey iveyhen noonekey
Bunumun vaan othee barubaadhekey
*Bunumun vaan othee barubaadhekey
Unmeedhuthakaa ekugaa kuranee
*Hithey hadhiyaa
#3
Nuruhumugaa kuraa inkaarakee
*Nuhifannyaa vedhaa barubaadhakee
Marukamugaa veyey insaafakee
*Marukamugaa veyey insaafakee
Foruvaafa nubaahvaashey mikuree
*Hithey hadhiyaa
#4
Hithey hadhiyaa
*Kuree hadhiyaa`,
},
{
  id: 17,
  name: `Libeytho Duaa Kuri Asheeqa`,
  genre: 'Taki',
  lyrics: `#M
ލިބޭތޯ ދުއާކުރި އަޝީގާ
*ނުދޭތީ އެ އިޝްޤީ އިޝާރާތް
މި ކިސްމަތު އެކީ ފަރިވާތީ ދުށީ
*މިބޭނުން ވެގެން ލޯބި ޔާރާ
*ލިބޭތޮ ދުއާ ކުރި އަޝީގާ

#1
ކިޔާދޭށަ ލޯތްބާ ހުވާކޮށް
*ޒަމާނީ އަޝީގީ ޒުވާނާ
ދިރޭ ރަމްޒު އުލްފަތުގެ ޖޯޝުން
*ކިޔައިދިން ހެމުން ރީތި ނާނާ
ގެނައި ހިތި އަސަރު އެ ޝޯޚީ ނަޒަރު
*މަކަރުގާ ހެދެންވީ ސަހާރާ

#2
ކުރާތީ ހިތަށް ސޫރަ މަންޒިލު
*އެ ޗާލޫވި ރޯޝަން އަބީރާ
ވެ ބަރުބާދުއެ ރީތިވި އެ މަންޒަރު
*މި ހީކުރި ދެކޭނޭ ހަވީރާ
މިތޯ އާޝިޤީ އެހާ ތާޒާގީ
*ހިތަށް އޭގެ ވޭންދިން ޒަމީރާ

#3
ޚަބަރު އޭރު ދީފާ ދިޔައިހޭ
*އަސަރުގާ މިވީ ރޮއެ ހަދާންހޭ
އެދޭ ކުރުވި ބޭކާރުއެ ޒާލިމް
*އަޝީގާ ނުލިބި ޝޯޚުވާންހޭ
މި ދަރުދުން ލިބޭ މި ދުކުގާ ތެދޭ
*ދޭކޭނޭ ހެ މޫސުން ބަހާރާ`,

  englishLyrics: `#M
Libeythoa dhuaakuri asheegaa
*Nudheythee e ishqee ishaaraayy
Mi kismathu ekee farivaathee dhushee
*Mibeynun vegen loabi yaaraa
*Libeytho dhuaa kuri asheegaa
#1
Kiyaadheysha loayybaa huvaakoh
*Zamaanee asheegee zuvaanaa
Dhirey ramzu ulfathuge joashun
*Kiyaidhin hemun reethi naanaa
Genai hithi asaru e shoakhee nazaru
*Makarugaa hedhennvee sahaaraa
#2
Kuraathee hithah soora mannzilu
*E chaaloovi roashan abeeraa
Ve barubaadhue reethivi e mannzaru
*Mi heekuri dhekeyney haveeraa
Mithoa aashiqee ehaa thaazaagee
*Hithah eyge veynndhin zameeraa
#3
Khabaru eyru dheefaa dhiyaihey
*Asarugaa mivee roe hadhaanhey
Edhey kuruvi beykaarue zaalim
*Asheegaa nulibi shoakhuvaanhey
Mi dharudhun libey mi dhukugaa thedhey
*Dheykeyney he moosun bahaaraa`,
},
{
  id: 18,
  name: `Bahtheli Gandehgaa`,
  genre: 'Kaasi',
  lyrics: `#M
ބައްތެލިގަނޑެއްގާ މަނިކުތިން ވަދު އަޅަން ކަނޑުތެރަށް
*މިލަމެހި ޖަހާ ވަތް ފުރައިގެން ނެރު މަތީ ދުއްވާލީ

#1
ފަރުމާނުގާ ފޮތިރިޔާ ބަނދެލައިގެނޭ ދުއްވާލީ
*ފަރުމާނުގާ ފޮތި ރިޔާ ބަނދެލައިގެނޭ ދުއްވާލީ
ދިރުނބާ ކޮޅުން ނެގި އެރާޅުން އޮޑިއެކީ ތެންމާލީ
*ދިރުނބާ ކޮޅުން ނެގި އެރާޅުން އޮޑިއެކީ ތެންމާލީ
އިރު އޮއްސިގެން ކަނުއަނދިރިކަން ދުނިޔެއަށް ވެރިވަނީ
*އިރު އޮއްސިގެން ކަނުއަނދިރިކަން ދުނިޔެއަށް ވެރިވަނީ

#2
އަސްތާ މަގޭ ސިއްސުވާލީ ފެނުނު މަންޒަރު ތަކުން
*އަސްތާ މަގޭ ސިއްސުވާލީ ފެނުނު މަންޒަރު ތަކުން
މަސްކަނޑު މަތީ ފެނުޕަރީފެނި ހޭކެނޑޭގޮތް ވުމުން
*މަސްކަނޑު މަތީ ފެނުޕަރީފެނި ހޭކެނޑޭގޮތް ވުމުން
މަސްކާށިކާން ހުރި ކެޔޮޅުބޭ އެނބުރިގެން ވެއްޓުމުން
*މަސްކާށި ކާން ހުރި ކެޔޮޅުބޭ އެނބުރިގެން ވެއްޓުމުން

#3
ގުގުރާ ވިދާތީ
*ބިރުހީވެ ސިހުނީ
މަތުރާލި ފެނަކުން
*ހަމަހޭގަ ޖެހުނީ
ފަޅުވެރި ކުދީންނޭ
*ދެން ހޭަރާށޭ
ކަރުތާފެނަށް އައިސް
*އޮޑި ބީހެނީއޭ

-
$M
ހޭލާނޭ މަސްވެރިކާމޭ ދުވަސްވީ
*ދިވެހިދަރިން ލޭކަމުގާ ގައުމު ގޮވާލާނީ

$1
ފަތިހަށް ގޮވާ ހާ ގޮއުމުގެ ކުރީގާ
*ފަޅުވެރި ކުދިން ހޭލައްވާ ހަދާފާ
އެންފަޅު ހިފަންދެން ފުރާ ފިނީގާ
*އެންމިހުރީ ކަނޑުތަކުގާ ގަދަވެ ނަގާލާފާ

$2
ދޯންޔަށް އަރާފާ އިސްޓާޓު ކޮއްލާ
*މެކުހައްޖަހާ ދޯނި ބާރަށް މިދުއްވާ
ހީވާގި ހުރިމޮޅު ކުދިން ކެޔޮޅުބޭ
*ދެން މިކުރި މޮޅުތަކުގާ ނަގިލި ކަނޑާލާނީ

$3
އެއޮތީ މަސައިނެއް އެންކެޔޮޅާ އެން އުކާ
*އެއޮތީ މަސައިނެއް
ފަސްފުޅަނގިން ފެންޖަހާ
*އެއޮތީ މަސައިނެއް`,

  englishLyrics: `#M
Bahtheligandehgaa manikuthin vadhu alhan kandutherah
*Milamehi jahaa vayy furaigen neru mathee dhuhvaalee
#1
Farumaanugaa fothiriyaa bandhelaigeney dhuhvaalee
*Farumaanugaa fothi riyaa bandhelaigeney dhuhvaalee
Dhirunbaa kolhun negi eraalhun odiekee thenmaalee
*Dhirunbaa kolhun negi eraalhun odiekee thenmaalee
Iru ohsigen kanuandhirikan dhuniyeah verivanee
*Iru ohsigen kanuandhirikan dhuniyeah verivanee
#2
Asthaa magey sihsuvaalee fenunu manzaru thakun
*Asthaa magey sihsuvaalee fenunu manzaru thakun
Maskandu mathee fenupareefeni heykendeygoyy vumun
*Maskandu mathee fenupareefeni heykendeygoyy vumun
Maskaashikaan huri keyolhubey enburigen vehtumun
*Maskaashi kaan huri keyolhubey enburigen vehtumun
#3
Guguraa vidhaathee
*Biruheeve sihunee
Mathuraali fenakun
*Hamaheyga jehunee
Falhuveri kudheenney
*Dhen heyaraashey
Karuthaafenah ais
*Odi beeheneeey
-
$M
Heylaaney masverikaamey dhuvasvee
*Dhivehidharin leykamugaa gaumu govaalaanee
$1
Fathihah govaa haa goumuge kureegaa
*Falhuveri kudhin heylahvaa hadhaafaa
Enfalhu hifandhen furaa fineegaa
*Enmihuree kanduthakugaa gadhave nagaalaafaa
$2
Dhoannyah araafaa istaatu kohlaa
*Mekuhahjahaa dhoani baaraah midhuhvaa
Heevaagi hurimolhu kudhin keyolhubey
*Dhen mikuri molhuthakugaa nagili kandaalaanee
$3
Eothee masaineh enkeyolhaa en ukaa
*Eothee masaineh
Fasfulhangin fenjahaa
*Eothee masaineh`,
},
{
  id: 19,
  name: `Beyrun Hoadhaani`,
  genre: 'Kaasi',
  lyrics: `#M
އައިނެން ހިނގާ ކެޔޮޅާ
*ބޭރުން ހޯދާނީ

#1
ގާދޫނި ހޯރަ ނިކަން
*ފެނެތިރިވާ
އަލިރީތި ވިހާ ދުވަހެއްގަ ދެކޭ
*ފަހަރޭމާދޫނި ގައިމު ފަރިވާނޭ ބޭރުން ހޯދާނީ

-
$M
ބޭރުން އައިނެން އޮވެއާދޭ
*ފަޅުވެރިން ބުނޭ
*ބޭރުން އައިނެން އޮވެއާދޭ

$1
ކެޔޮޅު ގޮވާ ނަގައޭ
*ދެރިޔާ ނަގާދޭށޭ
ބާރުލާ ހިއްވަރުލާ ފަލިތައް ބާލަމާ ހިނގާ
*ބާރުލާ ހިއްވަރުލާ ފަލިތައް ބާލަމާ ހިނގާ

$2
އާން އޮޑީ ކުރިޔާ ދިމާލުގާ
*އައިނެތް އެބޯތޭ ތަޅާފޮޅާ
އާން ނިކަން މިދިމާލުން ބޭރުގާ
*އައިނެތް އެބޯތޭ ތަޅާފޮޅާ

$3
އިންޖީނާ ރިޔަލާއެކީގާ
*އިންޖީނާ ރިޔަލާއެކީގާ
ދުއްވާށޭ މެކުހަށް ޖަހާލާ
*ދުއްވާށޭ މެކުހަށް ޖަހާލާ

$4
ދާނެތެލެއްނެތޭ މިއަދު ފެލިވަރަކަށް
*ދާނެތެލެއްނެތޭ މިއަދު`,

  englishLyrics: `#M
Ainen hingaa keyolhaa
*Beyrun hoadhaanee
#1
Gaadhooni hoara nikan
*Fenethirivaa
Alireethi vihaa dhuvahehga dhekey
*Fahareymaadhooni gaimu farivaaney beyrun hoadhaanee
-
$M
Beyrun ainen oveaadhey
*Falhuverin buney
*Beyrun ainen oveaadhey
$1
Keyolhu govaa nagaey
*Dheriyaa nagaadheyshey
Baarulaa hihvarulaa falithah baalamaa hingaa
*Baarulaa hihvarulaa falithah baalamaa hingaa
$2
Aan odee kuriyaa dhimaalugaa
*Aineyy eboathey thalhaafolhaa
Aan nikan midhimaalun beyrugaa
*Aineyy eboathey thalhaafolhaa
$3
Injeenaa riyalaaekeegaa
*Injeenaa riyalaaekeegaa
Dhuhvaashey mekuhah jahaalaa
*Dhuhvaashey mekuhah jahaalaa
$4
Dhaanethelehnethey miadhu felivarakah
*Dhaanethelehnethey miadhu`,
},
{
  id: 20,
  name: `Bodu Baburu`,
  genre: 'Baburu',
  lyrics: `#M
ބޮޑު ބަބުރު ކޮނެލި ތަނުވަ
*މައިނަ ގިރިޒާ
ކީއްވެގެން ބާވައޭ
*ކީއްވެގެން ބާވައޭ
ކީއްވެގެން ތޯއްޗޭ ބިންބިން ވައްކަން ކުރުވީ
*ބޮޑުބަބުރު ކޮނެލި ތަނުވަ މައިނަ ގިރިޒާ

#1
*ފޯރިއެއްވާ ނައޭދޯ
މިލަވަ ބަބުރު ފެށީމާ
ބަލަ އެއްކަލަ ބަބުރު ފެށީމާ
ބަލަ ނައޭދޯ ނައޭދޯ

#2
*ފޯރި އަރާ
ބޮޑު ބަބުރު
އެއްކަލަ ބަބުރު
ނަލަ ބަބުރު
އެކަނި ހުރެ
ފޯރިދީ`, 

  englishLyrics: `#M
Bodu baburu koneli thanuva
*Maina girizaa
Keehvegen baavaey
*Keehvegen baavaey
Keehvegen thoahchey binbin vahkan kuruvee
*Bodubaburu koneli thanuva maina girizaa
#1
*Foariehvaa naeydhoa
Milava baburu fesheemaa
Bala ehkala baburu fesheemaa
Bala naeydhoa naeydhoa
#2
*Foari araa
Bodu baburu
Ehkala baburu
Nala baburu
Ekani hure
Foaridhee`,
},
{
  id: 21,
  name: `Dhaaruofu`,
  genre: 'Thinberu',
  lyrics: `#M
ދާރުއޮފު މާތްވި ޅަމުރާލިޔެފުޅު ބިރާގަމީ
*ހާނުޖަލުގާ ޖެހެވިފާ އިނީ

#1
ތުންފަސުލާ ނަމޭ ފަށާ
*ދޮން އަނބު މަގޭ މިތުރާ
ފުރުސަ ކައިރީ ނެތިގެނީ ދުން މަޑުވެ މަޑުން ރޮވެނީ
*ފުރުސަ ކައިރީ ނެތިގެނީ ދުން މަޑުވެ މަޑުން ރޮވެނީ
*ހާނުޖަލުގާ ޖެހެވިފާ އިނީ

#2
ގޯހެއްނެތި ދަންނަވަމޭ
*ލޯ ދެފަދަވީ މިތުރާ
ގޯލަރަނު ކުލަ އެއަރާ ކޯފުޅުނަލަ ބިރާގަމީ
*ގޯލަރަނު ކުލަ އެއަރާ ކޯފުޅުނަލަ ބިރާގަމީ
*ހާނުޖަލުގާ ޖެހެވިފާ އިނީ

#3
ވަރުހަށީ ނެތި މަގޮވާ
*ތަރުހަދަމު އިނދެ މިތުރާ
ހަރުފަމޯރާކުލަވާ ކަރުފުޅުނަލަ ބިރާގަމީ
*ހަރުފަމޯރާކުލަވާ ކަރުފުޅުނަލަ ބިރާގަމީ
*ހާނުޖަލުގާ ޖެހެވިފާ އިނީ`,
       
  englishLyrics: `#M
Dhaaruofu maayyvi lhamuraaliyefulhu biraagamee
*Haanujalugaa jehevifaa inee
#1
Thunfasulaa namey fashaa
*Dhon anbu magey mithuraa
Furusa kairee nethigenee dhun maduve madun rovenee
*Furusa kairee nethigenee dhun maduve madun rovenee
*Haanujalugaa jehevifaa inee
#2
Goahehnethi dhannavamey
*Loa dhefadhavee mithuraa
Goalaranu kula earaa koafulhunala biraagamee
*Goalaranu kula earaa koafulhunala biraagamee
*Haanujalugaa jehevifaa inee
#3
Varuhashee nethi magovaa
*Tharuhadhamu indhe mithuraa
Harufamoaraakulavaa karufulhunala biraagamee
*Harufamoaraakulavaa karufulhunala biraagamee
*Haanujalugaa jehevifaa inee`,
},
{
  id: 22,
  name: `Dhaneehe Aisbalaa`,
  genre: 'Nala',
  lyrics: `#M
ދަނީހެ އައިސްބަލާ ބުނެލަދީބަލާ އަނގައިން
*ވީމެނުކެރިފާ ވެވުނު ނަފުރަތުން އިނގޭ

#1
އެ އީ ކީއްވެގެންހޭ ވަކިން ކީއްވެގެންހޭޭ
*ތިބުނަނީ ފަހެ ނުދާށޭ
ބުނަމޭ އުފާދޭ މިހިތުގެ ދިރުންދޭ
*ރީތި ނާޒުކު ބަހާރޭ
އިއްވާދީ އާނއެކޭ ނުބުނެ ނޫނެކޭ އަނގައިން
*ވީމެނުކެރިފާ ވެވުނު ނަފުރަތުން އިނގޭ

#2
ހުންނަ ގޮތަކުންވެސް މަ ހުންނަ ގޮތަނުންވެސް
*ފެންނަނީހޭ ރުހޭތީ
އުފާދެއްވި ސޫރައިން ތިފާޅުވީ އިޝާރާތް
*ހިތުގެ ކާނާ ލިބޭތީ
އާދޭހުން ފޯވެގެން ދާންވީހޭ ނުބުނެގެން އަނގައިން
*ވީމެނުކެރިފާ ވެވުނު ނަފުރަތުން އިނގޭ`,
       
  englishLyrics: `#M
Dhaneehe aisbalaa buneladheebalaa angain
*Veemenukerifaa vevunu nafurathun ingey
#1
E ee keehvegenhey vakin keehvegenheyey
*Thibunanee fahe nudhaashey
Bunamey ufaadhey mihithuge dhirundhey
*Reethi naazuku bahaarey
Ihvaadhee aanekey nubune noonekey angain
*Veemenukerifaa vevunu nafurathun ingey
#2
Hunna gothakunves ma hunna gothanunves
*Fennaneehey ruheythee
Ufaadhehvi soorain thifaalhuvee ishaaraayy
*Hithuge kaanaa libeythee
Aadheyhun foavegen dhaanveehey nubunegen angain
*Veemenukerifaa vevunu nafurathun ingey`,
},
{
  id: 23,
  name: 'Muniyaage Loabin',
  genre: 'Nala',
  lyrics: `#M
މުނިޔާގެ ލޯބިން މަ ވެއްޖޭ ދީވާނާ
*މި ހިތްވޭ މަސްތާނާ މި ހިތްވޭ މަސްތާނާ
#1
ރީތީގެ ދުނިޔޭގެ ހަނދަކީ ކަލާއޭ
*ރީތީގެ ދުނިޔޭގެ ހަނދަކީ ކަލާއޭ
މި ދުޝްމަން ޒަމާނަށް ފިލާށޭ ހަނއޭ
*މި ދުޝްމަން ޒަމާނަށް ފިލާށޭ ހަނދާއޭ  ފިލާށޭ ހަނދާއޭ 
ހޯ އަންނާށެ ޔާރާ އަހާށޭ ތަރާނާ
*މި ހިތްވޭ މަސްތާނާ މި ހިތްވޭ މަސްތާނާ
#2
ތާޒާ މަލޭތީ ގުލްޒާރުގާވާ
*ތާޒާ މަލޭތީ ގުލްޒާރުގާވާ
ކުލަރީތި ވަސްމީރު އާޝޯހު ވާހާ
*ކުލަރީތި ވަސްމީރު އާޝޯހު ވާހާ އާޝޯހު ވާހާ
ހޯ ފިދާވާން ހުރީމޭ މަލާއޭ ޒުވާނާ
*މި ހިތްވޭ މަސްތާނާ މި ހިތްވޭ މަސްތާނާ
#3
ވޭނާއި ރިހުމާ ފިލުވާލަ ދޭށޭ
*ވޭނާއި ރިހުމާ ފިލުވާލަ ދޭށޭ
އޯގާވެ މޭގާ ފިރުމާލަ ދޭށޭ
*އޯގާވެ މޭގާ ފިރުމާލަ ދޭށޭ ފިރުމާލަ ދޭށޭ
ހޯ ލޯބީގެ ރަންމުތުގެ ދޭނަން ޚަޒާނާ
*މި ހިތްވޭ މަސްތާނާ މި ހިތްވޭ މަސްތާނާ`,

  englishLyrics: `#M
Muniyaage loabin ma vehjey dheevaanaa
*Mi hiyyvey masthaanaa mi hiyyvey masthaanaa
#1
Reetheege dhuniyeyge handhakee kalaaey
*Reetheege dhuniyeyge handhakee kalaaey
Mi dhushman zamaanah filaashey hanaey
*Mi dhushman zamaanah filaashey handhaaey filaashey handhaaey
Hoa annaashe yaaraa ahaashey tharaanaa
*Mi hiyyvey masthaanaa mi hiyyvey masthaanaa
#2
Thaazaa maleythee gulzaarugaavaa
*Thaazaa maleythee gulzaarugaavaa
Kulareethi vasmeeru aashoahu vaahaa
*Kulareethi vasmeeru aashoahu vaahaa aashoahu vaahaa
Hoa fidhaavaan hureemey malaaey zuvaanaa
*Mi hiyyvey masthaanaa mi hiyyvey masthaanaa
#3
Veynaai rihumaa filuvaala dheyshey
*Veynaai rihumaa filuvaala dheyshey
Oagaave meygaa firumaala dheyshey
*Oagaave meygaa firumaala dheyshey firumaala dheyshey
Hoa loabeege rannmuthuge dheynan khazaanaa
*Mi hiyyvey masthaanaa mi hiyyvey masthaanaa`,
},
{
  id: 24,
  name: `Foanu Miothi`,
  genre: 'Nala',
  lyrics: `#M
ފޯނު މިއޮތީ ކާޑު ނެތިގެން ނުގުޅިފާ ދެރަ ވާނެޔޭ
*ފޯނު މިއޮތީ ކާޑު ނެތިގެން ނުގުޅިފާ ދެރަ ވާނެޔޭ
ބޯ ސަލާމަތް ނުވިޔަކަސް މިކަމެއް ދުލެއް ނުވެވޭނެޔޭ
*ބޯ ސަލާމަތް ނުވިޔަކަސް މިކަމެއް ދުލެއް ނުވެވޭނެޔޭ

#1
ހުން އަޔަސް އަދި ކެއްސިޔަސް ބޮލު
*ގާ ރިހުން މާގަދަވެޔޭ
ރިންގުވާ އަޑު އިވިލިޔަސް ލުއިވާ ވާރެއް ނޭންގޭނެޔޭ
*ފޯނު މިއޮތީ ކާޑު ނެތިގެން ނުގުޅިފާ ދެރަ ވާނެޔޭ

#2
ރީތި ނޯކިޔާ ފޯނަކުން ނުވެ ވޭކަމެއް މިއަދަކު ނެތޭ
*ވޭކަމެއް މިއަދަކު ނެތޭ
ރީތި ތުނިތުނި ބާޑު ފޯނެއްވެސް ފަހުން ގެންނާނެޔޭ
*ފޯނު މިއޮތީ ކާޑު ނެތިގެން ނުގުޅިފާ ދެރަ ވާނެޔޭ

#3
ދައްތަ ފޯނަށް ރިންގު މިއެޅީ
*މީދަލުގެ އަޑު ރީތިދޯ
ދައްތަ ބޭބެ ގެނައި ފޯނަށް ސިމެއް ލައްވާނެޔޭ
*ފޯނު މިއޮތީ ކާޑު ނެތިގެން ނުގުޅިފާ ދެރަ ވާނެޔޭ`,

  englishLyrics: `#M
Foanu miothee kaadu nethigen nugulhifaa dhera vaaneyey
*Foanu miothee kaadu nethigen nugulhifaa dhera vaaneyey
Boa salaamayy nuviyakas mikameh dhuleh nuveveyneyey
*Boa salaamayy nuviyakas mikameh dhuleh nuveveyneyey
#1
Hun ayas adhi kehsiyas bolu
*Gaa rihun maagadhaveyey
Rinnguvaa adu iviliyas luivaa vaareh neyngeyneyey
*Foanu miothee kaadu nethigen nugulhifaa dhera vaaneyey
#2
Reethi noakiyaa foanakun nuve veykameh miadhaku nethey
*Veykameh miadhaku nethey
Reethi thunithuni baadu foanehves fahun gennaaneyey
*Foanu miothee kaadu nethigen nugulhifaa dhera vaaneyey
#3
Dhahtha foanah rinngu mielhee
*Meedhaluge adu reethidhoa
Dhahtha beybe genai foanah simeh lahvaaneyey
*Foanu miothee kaadu nethigen nugulhifaa dhera vaaneyey`,
},
{
  id: 25,
  name: `Aadhanaa`,
  genre: 'Kaasi',
  lyrics: `#M
އާދަނާ އެކަނިވެ ނިދީގާ
*ހާދަ ކަނު ކަޅުފޮއެ ރެއެއްގާ
ފާތުމާފުޅު ނެތް އެނދެއްގާ
*ގާތު ތިއޮތީ ކޮންއަތެއް ބާ

#1
ތޫލި އަޑަކުން ބާރުބާރަށް އާދަނަށް ގޮވަނީ
*ހޭލި ވަގުތަށް ގަޑިބަލާލީ ހުއްޓިފާ އެވަނީ
މަންޒަރެއް ނެތް އަޑުތަކެއްތާ އާދަނަށް އިވެނީ
*ކަންފަތަށް ކުޅަދާނަ ނުވުމުން ގަތް ބިރުން ރޮވެނީ

#2
ދޫވެ ބާރާ އިޙްތިޔާރެއް ނެތް ކަމަށް ވާތީ
*ހޫތަކާ މުޅި ހަށިގަނޑާ އެކު ގަނޑުވެފާ ވާތީ
ހީވި އަޖަލޭ އާދަނަށް ލޯ ފުސްވެގެން ދާތީ
*ބީވި މާޒީ ބޮލުތެރޭގައި ބަބުޅަމުން ދާތީ

-
$M
ހުވަފެނެކޭ ހުވަފެނެކޭ ވަހުމެއް މަސްތެއްނުވާ
*ހުޅުވިދެލޯ އެދެލޯ އާދަނުވީ ވާނުވާ

$1
ޒިކުރާ ތަސްބީހަ ކިޔާ އުފަލުންނޭ ތެދުވީ
*ހޭލެވި ހެޔޮހާލުގާ ވީމާ އާޝޯހްވީ
ޝުކުރާ ހަމްދާއި ސަނާ ކިޔަމުން އާދަނު ދުވީ
*މަ ސަލާމަތް ވެއްޖެއޭ މަ ސަލާމަތް ވެއްޖެއޭ
އުފަލުން ހަމަ ހުރިވަރުން
*ރަށު އެންމެނަށް ގޮވީ
ކުކުޅު މަހާ ފިހުނު މަހާ ބޮނޑިބަތް ރަށުގާ ބަހާ
*ހުޅުވިދެލޯ އެދެލޯ އާދަނުވީ ވާނުވާ

$2
ވީގޮތް އެންމެންގެ ތެރޭ އާދަނު އެކިޔާދިނީ
*ކަނުލާ އެންމެން އެކަމަށް ކަންފަތް ދީގެން ތިބީ
ނިމުމުން ގިނަ ރައްޓެހިން ބުނި އާދަނު މޮޔަގޮވީ
*އެނގުމުންނޭ ފާތުމަވެސް ހީހީ ހުއްޓުން ނުވީ
އަސްލައްވެސް ހުރެފާ ހަމަ
*އާދަނުތާ މޮޔަގޮވީ
އަސްލު ވިގޮތް އަސްލު ވިގޮތް ފެންނަން ހެއްކެއްނުވާ
*ހުޅުވިދެލޯ އެދެލޯ އާދަނުވީ ވާނުވާ

$N
އާދަނު ބެލި ހުވަފެނަކުން އާދަނު މޮޔަވެއްޖެތާ
*އާދަނުބެލި ހުވަފެނަކުން
ބުއްދި ފިލާ ގޮއްސިތާ
*އާދަނުބެލި ހުވަފެނަކުން`,

  englishLyrics: `#M
Aadhanaa ekanive nidheegaa
*Haadha kanu kalhufoe re ehgaa
Faathumaafulhu neyy endhehgaa
*Gaathu thiothee kon athehbaa
#1
Thooli adakun baarubaarah aadhanah govanee
*Heyli vaguthah gadibalaalee huhttifaa evanee
Manzareh neyy aduthakehthaa aadhanah ivenee
*Kanfathah kulhadhaana nuvumun gayy birun rovenee
#2
Dhoove baaraa ihhuthiyaareh neyy kamah vaathee
*Hoothakaa mulhi hashigandaa eku ganduvefaa vaathee
Heevi ajaley aadhanah loa fusvegen dhaathee
*Beevi maazee boluthereygai babulhamun dhaathee
-
$M
Huvafenekey huvafenekey vahumeh masthehnuvaa
*Hulhuvidheloa edheloa aadhanuvee vaanuvaa
$1
Zikuraa thasbeeha kiyaa ufalunney thedhuvee
*Heylevi heyohaalugaa veemaa aashoahuvee
Shukuraa hamdhaai sanaa kiyamun aadhanu dhuvee
*Ma salaamayy vehje ey ma salaamayy vehje ey
Ufalun hama hurivarun
*Rashu enmenah govee
Kukulhu mahaa fihunu mahaa bondibayy rashugaa bahaa
*Hulhuvidheloa edheloa aadhanuvee vaanuvaa
$2
Veegoyy enmenge therey aadhanu ekiyaadhinee
*Kanulaa enmen ekamah kanfayy dheegen thibee
Nimumun gina rahttehin buni aadhanu moyagovee
*Engumunney faathumaves heehee huhttun nuvee
Aslahves hurefaa hama
*Aadhanuthaa moyagovee
Aslu vigoyy aslu vigoyy fennan hehkehnuvaa
*Hulhuvidheloa edheloa aadhanuvee vaanuvaa
$3
Aadhanu beli huvafenakun aadhanu moyavehjethaa
*Aadhanubeli huvafenakun
Buhdhi filaa gohsithaa
*Aadhanubeli huvafenakun`,
},
{
  id: 26,
  name: `Thiya Goma Feni`,
  genre: 'Nala',
  lyrics: `#M
ތިޔަ ގޮމާ ފެނި އާޝޯހޭ ވެވެނީ ހައެ
*މިގޭ ދަށުން މަގުން ހިނގާތީ މަގޭހިތައް ކެތް ނުވާތީ

#1
ބަލާ ބަލާ ފޫޢްސެއް ނުވިޔޭ ބިލާހަކަށްް މީދެން ވެއްޖޭ
*ބަލާ ބަލާ ފޫޢްސެއް ނުވިޔޭ ބިލާހަކަށްް މީދެން ވެއްޖޭ
ހަލާލު ހިތް ނުލިބޭނޭތީ ބަލާ މަށަށް ދޯޅޭ ވެވެނީ
*ހަލާލު ހިތް ނުލިބޭނޭތީ ބަލާ މަށަށް ދޯޅޭ ވެވެނީ

#2
ޒިޔާރަތައް ނަދުރެއް ބުނެފާ އެއާދުރަށް ދާހިތް ނެތިފާ
*ޒިޔާރަތައް ނަދުރެއް ބުނެފާ އެއާދުރަށް ދާހިތް ނެތިފާ
ޒިޔާރަތައް ނަދުރެއް ބުނެފާ އެއާދުރަށް ދާހިތް ނެތިފާ
*ޒިޔާރަތައް ނަދުރެއް ބުނެފާ އެއާދުރަށް ދާހިތް ނެތިފާ

#3
މަލާމަތުގަ ބަސްތައް އިއްވާ ބަލާނިކަން ހިތުގާ ޖައްސާ
*މަލާމަތުގަ ބަސްތައް އިއްވާ ބަލާނިކަން ހިތުގާ ޖައްސާ
ކަލާ ތިހެން ނުރުހުން ވީމާ ވަޅޯވެގެން މާތައް މިލަނީ
*ކަލާ ތިހެން ނުރުހުން ވީމާ ވަޅޯވެގެން މާތައް މިލަނީ`,
      
  englishLyrics: `#M
Thiya goma feni
Thiya goma feni aashoahey vevenee hai
*Migey dhashun magun hingaathee magey hithah keiy nuvaathee
#1
Balaa balaa foohseh nuviyey bilaahakah mee dhen vehjey
*Halaalu hiyy nulibeyneythee balaa mashah dhoalhey vevenee
#2
Ziyaarathah nadhureh bunefaa eyaa dhurah dhaahiyy nethifaa
*Dheloafulhaa dhon dhon kanbuloa baheh nubune dhaathee rovenee
#3
Malaamathuga basthah ivvaa balaa nikan hithugaa jassaa
*Kalaa thihen nuruhun veemaa valhoa vegen maathah milanee`,
},
{
  id: 27,
  name: `Reethi Gudhurathi`,
  genre: 'Thinberu',
  lyrics: `#M
ރީތި ގުދުރަތީ މި މަންޒަރު
*ޗާލު ލޮލަށް ފެންނަ އިރު އަޖައިބެއް ފަދައޭ
ސާފު ދޮންވެލީ ތުނޑިމަތީ
*ރާޅު ބަލަން އިންނަ އިރު އަޖައިބެއް ފަދައޭ

#1
އިރު އަރާ ދޯދިތައް އަލިވެޔޭ
*މުޅިފަޒާ ރަންކުލައިން ދިއްލެއޭ
ސާފު ވައި އައިސް ހަމުގަ ބީހެޔޭ
*ސާފު ޖައްވުން މިހިތް ފިނިވެޔޭ
ޝޯހުވާހާވޭ
*ޝޯހުވާހާވޭ އިނގޭ

#2
އުޑު މަތިންދާ ދޫނި ފެނިލަޔޭ
*ބައި ހަދާފާ އުދުހި ހޫރެޔޭ
ރާގު ރާގަށް ގޮވާ އަޑުއިވޭ
*ރާގު އިވުމުން މިހިތް ފުރިދެޔޭ
ޝޯހުވާހާވޭ
*ޝޯހުވާހާވޭ އިނގޭ

#3
މާކަނޑުން ދޯނިތައް ދުއްވައޭ
*ޗާލު މަންޒަރު ދުރުން ސިފަވެޔޭ
ވާތި ހިއްވަރު މަ ހިނިތުން ވަމޭ
*ވާމި ރިޒުގަށް ޝުކުރުވެރި ވަމޭ
ޝޯހުވާހާވޭ
*ޝޯހުވާހާވޭ އިނގޭ`,

  englishLyrics: `#M
Reethi gudhurathee mi mannzaru
*Chaalu lolah fenna iru ajaibeh fadhaey
Saafu dhonnvelee thundimathee
*Raalhu balan inna iru ajaibeh fadhaey
#1
Iru araa dhoadhithah aliveyey
*Mulhifazaa rannkulain dhihleey
Saafu vai ais hamuga beeheyey
*Saafu jahvun mihiyy finiveyey
Shoahuvaahaavey
*Shoahuvaahaavey ingey
#2
Udu mathinndhaa dhooni fenilayey
*Bai hadhaafaa udhuhi hooreyey
Raagu raagah govaa aduivey
*Raagu ivumun mihiyy furidheyey
Shoahuvaahaavey
*Shoahuvaahaavey ingey
#3
Maakandun dhoanithah dhuhvaey
*Chaalu mannzaru dhurun sifaveyey
Vaathi hihvaru ma hinithun vamey
*Vaami rizugah shukuruveri vamey
Shoahuvaahaavey
*Shoahuvaahaavey ingey`,
},
{
  id: 28,
  name: `Kalaa Fenuneemaa`,
  genre: 'Kaasi',
  lyrics: `#M
ކަލާ ފެނުނީމާ ސަމާސާ ކުރެވޭ ހީލާތީ
*ގާތުގާ ލޯބިން ހުރޭތޯ އެދެމޭ ހީލާތީ

#1
އުދުހިލާ ރީތި ކޮކާ ގައިމެ ކަލާ ހޯދާނޭ
*އުުޑުވާހާ ތަރިތައް ރީތިދެލޯ ހޯދާނޭ
ހާދަހާ ޗާލޭ ބުނާނޭ ފެނިފާ ހީލާތީ
*ގާތުގާ ލޯބިން ހުރޭތޯ އެދެމޭ ހީލާތީ

#2
އެކިއެކި ރާގުގާ ލޯބީގެ ޣަޒަލުތައް އިއްވަން
*އެކަމަކު ގާތުގާ ވާ ލޯބި ނުބުނެވޭތީ ރޯން
ހާލު ބުނެދޭ ހިތް ވަނީއޭ ފެނިފާ ހީލާތީ
*ގާތުގާ ލޯބިން ހުރޭތޯ އެދެމޭ ހީލާތީ

#3
ގުދުރަތީ ރީތިކަން ލިބިފާވި މިސާލޭ ތިޔައީ
*ފޮރުވިފާވާ ހިތޭ ތައުރީފު ކަލާޔަށް ކުރަނީ
އެހީއަށް އެދި ހިތް ރޮނީއޭ ފެނިފާ ހީލާތީ
*ގާތުގާ ލޯބިން ހުރޭތޯ އެދެމޭ ހީލާތީ

-
$M
ލޯބިވަމޭ ބުނެލީމާ އެއީ ކާކުކަން
*ނޭނގި މުޅިން ހިތްދީގެން ވާނީ ހައިޖާން

$1
ހެދޭ ގޯހޭމީ ތިމާ އެކަން ވިސްނާ ހުރޭ
*ބެދޭ މަޅިއޭމީ ސަލާމަތުން ދުރުގާ ހުރޭ
ނިއްވާލައޭލޯ ހިތާއޭގެ ބާރު
*ވިންދާ ލޭގާވާ ނިހާއީ ޝުޢޫރު

$2
ކިޔަމަންވާވަރު ދައްކާނޭ ހިތް ފުރިއުތުރޭ
*މިއަދަށުގާ އުދުހޭނޭ އޮވެ މާމުއިގެ ތެރޭ
ނިޔަތާކުޅެލައެ ތީރުން ދަޅަދައްކާލި ހެރޭ
*މޮޔަކޮއްލާނެ ޒަމީރާއި ހިޔާލާއެނބުރޭ

$3
ޖެހުމުން ޖާދޫގާ ހިތުގެ ލަގަން ދޫވެދެޔޭ
*ކެހުމުން މަސްތުވި ފަރުދާގެ ތެރޭ ހިތް ގެނބެޔޭ
ބެހުމުން އޮއެވަރުގާ ވާވަދެ ގެއްލޭނެޔޭ
*ވެހުމުން ހިމަފޮދު ވާރޭގެތެރޭ މޭ ތެޅެޔޭ

$4
ކުރާ ކައިވެންޏެއް މިގޮތް މަތިން ބުރިބުރިވެޔޭ
*މުރާދެއްނެތި ނާދޫވުމުން ފުނޑުފުނޑުވެޔޭ
ކައްޗާވެއްޖެއްޔާ ނަސީބޭ ނެތީ
*ދައްޗާ ރުގުސާނާ ހަލާކޭ އޮތީ`,

  englishLyrics: `#M
Kalaa fenuneemaa samaasaa kurevey heelaathee
*Gaathugaa loabin hureythoa edhemey heelaathee
#1
Udhuhilaa reethi kokaa gaime kalaa hoadhaaney
*Uuduvaahaa tharithah reethidheloa hoadhaaney
Haadhahaa chaaley bunaaney fenifaa heelaathee
*Gaathugaa loabin hureythoa edhemey heelaathee
#2
Ekieki raagugaa loabeege ghazaluthah ihvan
*Ekamaku gaathugaa vaa loabi nubuneveythee roan
Haalu bunedhey hiyy vaneeey fenifaa heelaathee
*Gaathugaa loabin hureythoa edhemey heelaathee
#3
Gudhurathee reethikan libifaavi misaaley thiyaee
*Foruvifaavaa hithey thaureefu kalaayah kuranee
Eheeah edhi hiyy roneeey fenifaa heelaathee
*Gaathugaa loabin hureythoa edhemey heelaathee
-
$M
Loabivamey buneleemaa eee kaakukan
*Neyngi mulhin hiyydheegen vaanee haijaan
$1
Hedhey goaheymee thimaa ekan visnaa hurey
*Bedhey malhieymee salaamathun dhurugaa hurey
Nihvaalaeyloa hithaaeyge baaru
*Vinndhaa leygaavaa nihaaee shuooru
$2
Kiyamannvaavaru dhahkaaney hiyy furiuthurey
*Miadhashugaa udhuheyney ove maamuige therey
Niyathaakulhelae theerun dhalhadhahkaali herey
*Moyakohlaane zameeraai hiyaalaaenburey
$3
Jehumun jaadhoogaa hithuge lagan dhoovedheyey
*Kehumun masthuvi farudhaage therey hiyy genbeyey
Behumun oevarugaa vaavadhe gehleyneyey
*Vehumun himafodhu vaareygetherey mey thelheyey
$4
Kuraa kaivennyeh migoyy mathin buriburiveyey
*Muraadhehnethi naadhoovumun fundufunduveyey
Kahchaavehjehyaa naseebey nethee
*Dhahchaa rugusaanaa halaakey othee`,
},
{
  id: 29,
  name: `Dhunfinirey`,
  genre: 'Baburu',
  lyrics: `#M
ދުންފިނިރޭ އަނދިރީގާ ސަކަރާތް ގަދަ ޖެހީ
*މުޅީރަށް ނިދާފަ ހިނމޭންވާ ވަގުތައް ފަނިހެދީ

#1
ދާނޭ ވަލުތެރެޔަށް ކުޑަވެސް ބިރެއް ނުގަނޭބާ
*ދާނޭ ވަލުތެރެޔަށް ކުޑަވެސް ބިރެއް ނުގަނޭބާ
ވަންނާނެ ފަޅުގޯތި ތެރަށް އަސްތާ ޖެހިލުން ނުވަނީބާ
*ވަންނާނެ ފަޅުގޯތި ތެރަށް އަސްތާ ޖެހިލުން ނުވަނީބާ

#2
ގޮވާނޭ ބަޑިއެދުރަށް ގަދަޔަށް ބާރަށް ހީހީފާ
*ގޮވާނޭ ބަޑިއެދުރަށް ގަދަޔަށް ބާރަށް ހީހީފާ
އަޅާނޭ ވަގުރުކު ކުރުނބާ ކަށިމާ ގަހުގަ ރޯކޮށްފާ
*އަޅާނޭ ވަގުރުކު ކުރުނބާ ކަށިމާ ގަހުގަ ރޯކޮށްފާ

#3
ދުރުން ފެނިފަ އަލިފާން ރޮނގެއް
*ސިއްސައިން އެސޮރު އަސްތާ ދިޔާ
ބިރުން ތެޅިފަ ފުމެންފެށީ
*ބާރަށް ދެފަޔަށް ވަރުލާ ދުވީ
އިވެނީ އަޑުފައްގަނޑެއް ބާރަށް ގުގުމާ
*އިވެނީ އަޑުފައްގަނޑެއް
ހޭ އަޑަކުންނޭ
ނާމާން ކުރުވާ

#4
ދުމުން ފުރާ މުޅީވާ އެކީ
*ކާޅާ ކަނބިލި ގޮވާން ފެށީ
ގަސްތައް ވަޔާ ހެލެން ފަށާ
*ވިދުވަރު އަލިކޮށް ވިދަން ފެށީ
އިވެނީ އަޑުފައްގަނޑެއް ބާރަށް ގުގުމާ
*އިވެނީ އަޑުފައްގަނޑެއް
ހޭ އަޑަކުންނޭ
ނާމާން ކުރުވާ

#5
އަނގައިން ގަދަޔަށް ފޮނުތަށް އަރާ
*މުދުނަށް އެސޮރު ދެލޯއެރީ
ބަހަކުން ބަހެއް ބޭރެއް ނުވޭ
*ތުރުތުރު އަޅާ ތެޅެން ފެށީ
އަސްތާ މުދިންބޭ ކިޔެވެލި ކިޔަވާ
*އަސްތާ މުދިންބޭ
ފެންތައްޓެއް ކިޔަވާ
ދުންބުރުވާ ކިޔަވާ
ދުންބުރުވާ މަތުރާ

#N
*މޮޔަގޮވާފަޔޯ
އެސޮރު އެ ދުވަނީ
އަތްފައި ބުޅިކުރީ
މުޅިގައި ވަކި އެޅީ`,
       
  englishLyrics: `#M
Dhunfinirey andhireegaa sakaraayy gadha jehee
*Mulheerah nidhaafa hinmeynvaa vaguthah fanihedhee
#1
Dhaaney valuthereyah kudaves bireh nuganeybaa
*Dhaaney valuthereyah kudaves bireh nuganeybaa
Vannaane falhugoathi therah asthaa jehilun nuvaneebaa
*Vannaane falhugoathi therah asthaa jehilun nuvaneebaa
#2
Govaaney badiedhurah gadhayah baarah heeheefaa
*Govaaney badiedhurah gadhayah baarah heeheefaa
Alhaaney vaguruku kurunbaa kashimaa gahuga roakohfaa
*Alhaaney vaguruku kurunbaa kashimaa gahuga roakohfaa
#3
Dhurun fenifa alifaan rongeh
*Sihsain esoru asthaa dhiyaa
Birun thelhifa fumenfeshee
*Baarah dhefayah varulaa dhuvee
Ivenee adufahgandeh baarah gugumaa
*Ivenee adufahgandeh
Hey adakunney
*Naamaan kuruvaa
#4
Dhumun furaa mulheevaa ekee
*Kaalhaa kanbili govaan feshee
Gasthah vayaa helen fashaa
*Vidhuvaru alikoh vidhan feshee
Ivenee adufahgandeh baarah gugumaa
*Ivenee adufahgandeh
Hey adakunney
*Naamaan kuruvaa
#5
Angain gadhayah fonuthah araa
*Mudhunah esoru dheloaeree
Bahakun baheh beyreh nuvey
*Thuruthuru alhaa thelhen feshee
Asthaa mudhinbey kiyeveli kiyavaa
*Asthaa mudhinbey
Fenthahteh kiyavaa
Dhunburuvaa kiyavaa
Dhunburuvaa mathuraa
#6
*Moyagovaafayoa
Esoru e dhuvanee
Ayyfai bulhikuree
Mulhigai vaki elhee`,
},
{
  id: 30,
  name: `Fen Bandiyaa`,
  genre: 'Nala',
  lyrics: `#M
ފެންބަނޑިޔާ ބޯމައްޗައްލާ ފަރި ހިނގުމެއްގާ ދާތީ ދޮންގޮމަ
*ފެނިފަ އެހިނދުން ލޯބިމަގޭ
ބަނޑި ބަނޑި ލައްވާލާ ހިނިތުންވުން ދީފާ ފަސްދާތީ ފަރިގޮމަ
*ހިތް ކަލާޔަށް މިލްކު އަމޭ

#1
ބަޅިނދާ މާބުރު ފޮނިކަން އެދިގެން
*ތިރިކުރާނޭ ތިމަލުގަ ބީހެން
ފަރިވި މަލާމެލި އޭގެ ނަލަކަން
*ލިބި އެތިބީ ގޮމަފުޅުގެ އަތުން

#2
ސާދަ ފަނަރައިން ހަނދުވަރުދޭރޭ
*ހަނދުހުރޭ ފެނިފާ މެލަދުން
ހޫރެއް ކުޅާ ފަރުލީނުގެ ނަމުގާ
*އެދިގެން ކިޔާ ޅެންބައިތެކެމީ
ނަދުރެއް މަ ގެންފީމޭ
*ނަދުރެއް މަ ގެންފީމެ ދޮންގޮމަ ލިބިއްޖެއްޔާ ސައްތަ ހަމަވާ ދެން ކުކުޅުދޭން

#3
ހިތް ފުރިދާފަދަ ލޯބި ބަލާލުން
*ދޮން ގޮމަޔަށް ލިބިފާވެ ބިމުން
ރީތިވިހާ ސިފަ ހުސްކުރި ތިގޮމާ
*ދެކެފަވާ ލޯތައް ހެކިވާ`,

  englishLyrics: `#M
Fennbandiyaa boamahchahlaa fari hingumehgaa dhaathee dhonngoma
*Fenifa ehindhun loabimagey
Bandi bandi lahvaalaa hinithunnvun dheefaa fasdhaathee farigoma
*Hiyy kalaayah milku amey
#1
Balhindhaa maaburu fonikan edhigen
*Thirikuraaney thimaluga beehen
Farivi malaameli eyge nalakan
*Libi ethibee gomafulhuge athun
#2
Saadha fanarain handhuvarudheyrey
*Handhuhurey fenifaa meladhun
Hooreh kulhaa faruleenuge namugaa
*Edhigen kiyaa lhennbaithekemee
Nadhureh ma gennfeemey
*Nadhureh ma gennfeeme dhonngoma libihjehyaa sahtha hamavaa dhen kukulhudheyn
#3
Hiyy furidhaafadha loabi balaalun
*Dhon gomayah libifaave bimun
Reethivihaa sifa huskuri thigomaa
*Dhekefavaa loathah hekivaa`,
},
{
  id: 31,
  name: `Maakunbe`,
  genre: 'Baburu',
  lyrics: `#M
ރަށް ގުޑުވާ ދެއަތަށް ބަނޑުހަލަމުން ހެވިފާ އަންނާނޭ މާކުންބޭ
*ރަށް ގުޑުވާ ދެއަތަށް ބަނޑުހަލަމުން ހެވިފާ އަންނާނޭ މާކުންބޭ
ދަންނަ އެތައް ގެޔަކަށް ކަޅިއަޅަމުން ލެފިފާ ވަންނާނޭ މާކުންބޭ
*ދަންނަ އެތައް ގެޔަކަށް ކަޅިއަޅަމުން ލެފިފާ ވަންނާނޭ މާކުންބޭ
ހާވާ ބަދިގެ ކާގެ ބަލާނެ
*ހާވާ ބަދިގެ ކާގެ ބަލާނެ
ދޭށޭ ގޮވާނޭ ދޭށޭ ކިޔާނޭ
*ދޭށޭ ގޮވާނޭ ދޭށޭ ކިޔާނޭ
ދޭށޭ ގޮވާނޭ ދޭށޭ ކިޔާނޭ
ކާނޭ, ކާނޭ

#1
*ބޮޑުއައްޓަށް އަރާ މާކުންބެ އިނޯ
ރިހަ ތެލި ހިފައިން އިނ
ބަތް ދޮނލަގެއް ހިފައިން އިނޯ
ކުރުނބާ ބޯން އިނޯ
ފިހުނު ދެމަސް ކާން އިނޯ
ރަތް ގަރުދިޔަ ބޯން އިނޯ
ގަދަޔަށް ކާން އިނޯ
ފިހުނު ކުކުޅު ކާން އިނޯ

#2
*ހުއްޓާލާ
ހެޔޮނުވާނެ
ބަނޑުފެޅެނީ
މާކުންބޭ`,

  englishLyrics: `#M
Rah guduvaa dheathah banduhalamun hevifaa annaaney maakunnbey
*Rah guduvaa dheathah banduhalamun hevifaa annaaney maakunnbey
Dhanna ethah geyakah kalhialhamun lefifaa vannaaney maakunnbey
*Dhanna ethah geyakah kalhialhamun lefifaa vannaaney maakunnbey
Haavaa badhige kaage balaane
*Haavaa badhige kaage balaane
Dheyshey govaaney dheyshey kiyaaney
*Dheyshey govaaney dheyshey kiyaaney
Dheyshey govaaney dheyshey kiyaaney
*Kaaney, kaaney
#1
*Boduahtah araa maakunnbe inoa
Riha theli hifain inoa
Bayy dhonlageh hifain inoa
Kurunbaa boan inoa
Fihunu dhemas kaan inoa
Rayy garudhiya boan inoa
Gadhayah kaan inoa
Fihunu kukulhu kaan inoa
#2
*Huhtaalaa
Heyonuvaane
Bandufelhenee
Maakunnbey`,
},
{
  id: 32,
  name: `Vaathee Hithaama`,
  genre: 'Nala',
  lyrics: `#M
ވާތީ ހިތާމަ ގިލަނނުގާ މިހިތުގެ ލަގަނުގާ
*މަހުރެ ނިމިދާންވީހޭ
ޒާތީ ޚިޔާލިގެ އަނިޔާތައް ހިތުގެ ހިޔަނިވާ
*ދީވާނާ ފަރުދާވީހޭ
*ދާންވީހޭ ނަނާ

#1
ނެއްތަ ރަހުމެއް ހިތުގާ ކަލޭނޭ
*އެންމެ މިސްޤާލެއް
ވެއްޖެކަމުގާ ހީވޭ ރޮވޭނޭ
*ވެއްޖެކަމުގާ ހީވޭ ރޮވޭނޭ
ވެއްޖެކަމުގާ ހީވޭ ރޮވޭނޭ
*ފެންނަނިވި ހާލޭ
ތެއްކަން ފުޅެއްނެތި އަރުގާ އަބަދު މިއަސަރުގާ
*ޚަބަރު ނެތި ދާންވީހޭ

#2
ކޯރުހެދިފާ ކަރުނައިގެ ރާޅުން
*ލޯ ދެ މެރި އަދުގާ
ރޯލަ ރޯލާ ކުރުވާ ހަނދާނުން
*ރޯލަ ރޯލާ ކުރުވާ ހަނދާނުން
ރޯލަ ރޯލާ ކުރުވާ ހަނދާނުން
*ފޯވެ ކަރުނައިގާ
ލޯބީގެ ޗާލު ރަސަމުގާ އެކަމުގެ ސަރަނމުގާ
*އަރާމު ނެތިދާންވީހޭ

#3
ދޮޅިއެޅިއްޖޭ އަނިޔާގެ ސަބަބުން
*އޮޅި މިހިޖުރަ މުޅިން
ހޮޅި ފިހިއްޖޭ ހަލްގައިގެ ހޫނުން
*ހޮޅި ފިހިއްޖޭ ހަލްގައިގެ ހޫނުން
ހޮޅި ފިހިއްޖޭ ހަލްގައިގެ ހޫނުން
*ހޮޅިވެ ލަގޮނޑި މުޅިން
މޮޅިއިން ލިބޭ ގިނަ އަދުގާ މިކަށަ މިއަބަދުގާ
*އަދަދު ނުވެދާންވީހޭ

#4
ރަންގު ލޯބިން ދާތީ ފިލައިގެން
*ނަމުގެ ބާވަތަކުން
ޖަންގު ހިތުގާ ވާތީ ފަށައިގެން
*ޖަންގު ހިތުގާ ވާތީ ފަށައިގެން
ޖަންގު ހިތުގާ ވާތީ ފަށައިގެން
*ގަމްގެ ތޫފާނުން
ޖަންގަލް ޚަރީފުގެ ވަލުގާ އެކަނިވެރި ޖަލުގާ
*އަޖަލު ޖެހި ދާންވީހޭ

#5
ދާތި ލަގަނުން ދޫވެވި ދުވެލިއޭ
*ޒާތަކަށް ދެމިގެން
ވާތި ގިލަނެއް ހިތުގާ ނުފިލުވޭ
*ވާތި ގިލަނެއް ހިތުގާ ނުފިލުވޭ
ވާތި ގިލަނެއް ހިތުގާ ނުފިލުވޭ
*ނާ ތެދު މަޖެހިގެން
ޒާތީ ޚިޔާލިގެ އަނިޔާތައް ހިތުގެ ހިޔަނިވާ
*ދީވާނާ ފަރުދާވީހޭ`, 

  englishLyrics: `#M
Vathee hithaama gilanuga mihuthuge laganugaa
*Mahure nimidhaan veehey
Zaathee khiyaalu ge aniyaathah hithuge hiyanivaa
*Dheevaanaa farudhaa veehey
#1
Nehtha rahumeh hithugaa kaleyney
*Ennme miskaaleh
Vejje kamugaa heevey roveyney
*Vejje kamugaa heevey roveyney
Vejje kamugaa heevey roveyney
*Fennanivi haaley
Theh kannfulheh nethi arugaa abadhu miasarugaa
*Khabaru nethi dhaan veehey
#2
Koaru hedhifaa karunaige raalhun
*Loadhemeri adhuga
Roala roalaa kuruvaa handhaanun
*Roala roalaa kuruvaa handhaanun
Roala roalaa kuruvaa handhaanun
*Foave karunaiga
Loabeege chaalu rasamugaa ekamuge saramugaa
*Araamu nethi dhaan veehey
#3
Dholhi elhijjey aniyaage sababun
*Olhi mihijura mulhinn
Holhi fihijjey hallgaige hoonun
*Holhi fihijjey hallgaige hoonun
Holhi fihijjey hallgaige hoonun
*Holhive lagondi mulhinn
Molhi inn libey gina adhugaa mikasha mi abadhugaa
*Adhadhu nuve dhaan veehey
#4
Ranngu loabin dhaathee filaigen
*Namuge baavathakun
Janngu hithugaa vaathee fashaigen
*Janngu hithugaa vaathee fashaigen
Janngu hithugaa vaathee fashaigen
*Gammge thoofaanunn
Janngal khareefuge valuga ekaniveri jalugaa
*Ajalu jehi dhaan veehey
#5
Dhaathi laganunn dhoovevi dhuveliey
*Zaathakah dhemigen
Vaathi gilaneh hithugaa nufiluvey
*Vaathi gilaneh hithugaa nufiluvey
Vaathi gilaneh hithugaa nufiluvey
*Naa thedhu ma jehigenn
Zaathee khiyaaluge aniyaa thah hithuge hiyanivaa
*Dhivaana farudhaa veehey`,
},
{
  id: 33,
  name: `Dhathuru Fesheemey`,
  genre: 'Nala',
  lyrics: `#M
ދަތުރުފެށީމޭ ކަމަނަ ލިބޭތޯ ލޯބި ލިބޭތޯ
*އާނ އާނ އާނ އާނ ލޯބިލިބޭތޯ

#1
ދަރާފެނާ ކޮއްތާ ހޯދާ ބަރާ ކުރީމޭ އޮޑިއައްލާ
*ދަރާފެނާ ކޮއްތާ ހޯދާ ބަރާ ކުރީމޭ އޮޑިއައްލާ
ބަރާބަރަށް ފައްސި އެވައިގައި ތުރާކުނަށް ދެން ދެވޭތޯ
*ބަރާބަރަށް ފައްސި އެވައިގައި ތުރާކުނަށް ދެން ދެވޭތޯ

#2
މުރާލިވެތި މަންޒަރު ހަދަމުން ފުރާނާ އަތްމައްޗައް ލައިގެން
*މުރާލިވެތި މަންޒަރު ހަދަމުން ފުރާނާ އަތްމައްޗައް ލައިގެން
ތުރާތަކާ ވޭނާ ލިބިގެން މުރާދު ހާސިލް ވެވޭތޯ
*ތުރާތަކާ ވޭނާ ލިބިގެން މުރާދު ހާސިލް ވެވޭތޯ`,
       
  englishLyrics: `#M
Dhathurufesheemey kamana libeythoa loabi libeythoa
*Aan aan aan aan loabilibeythoa
#1
Dharaafenaa kohthaa hoadhaa baraa kureemey odiahlaa
*Dharaafenaa kohthaa hoadhaa baraa kureemey odiahlaa
Baraabarah fahsi evaigai thuraakunah dhen dheveythoa
*Baraabarah fahsi evaigai thuraakunah dhen dheveythoa
#2
Muraalivethi manzaru hadhamun furaanaa ayymahchah laigen
*Muraalivethi manzaru hadhamun furaanaa ayymahchah laigen
Thuraathakaa veynaa libigen muraadhu haasil veveythoa
*Thuraathakaa veynaa libigen muraadhu haasil veveythoa`,
},
{
  id: 34,
  name: `Dhefah Kanbili`,
  genre: 'Thinberu',
  lyrics: `#M
ކުރެދި ފަލުގަ ނުދެވި ފިތިފަ އިންދެ ކަނބިއްޔޯ
*ލޯހޫރާ ބޯހޫރާ އިންދެ ކަނބިއްޔޯ
ތުރުތުރު އަޅަ މޭސިހިހި އިންދެ ކަނބިއްޔޯ
*ފިޔަވާޅުވެ ބިރުހީވެފަ އިންދެ ކަނބިއްޔޯ

#1
ފިޔަގަނޑު ހުޅުވާ
*ސައްލާ ކޮއްލާ
ދާނޭގޮތަކަށް
*މެދުގައި ވިސްނާ
ކޮޅުކޮޅު ބަލަމުން
*ދެއަތައް ހިރިލާ
އިނދެ އިނދެ ގާނާބޯ
*ހުރި ހާސްކަން ބޮޑުވިއްޔޯ އިންދެ ކަނބިއްޔޯ

#2
ތޮށިމާ އައުމުން
*ބާރަށް ރޮއެލާ
ރަކިހިނި ގޮތަކަށް
*ތޮށިމާ ހެވިލާ
ކުރުނީސް ކޮށްލާ
*އެދެބޭން ނެރެލާ
ހުރެހުރެ ހެވިލާދޯ
*ބޯކެޔޮގަހު މަތިން ދިޔޯ ދެފަށް ކަނބިއްޔޯ

#3
ލިބިދިން އުފަލުން
*ތުނޑިޔަށް ޖެހިލާ
ހިތް ހަމަޖެހިލާ
*ބޯހުރެ ހޫރާ
ތުންގަނޑު ހަރަމުން
*ބިމުއަޑި ތެރެއަށް
ހިނިފުޅު ވަޑުވާދޯ
*ފަނި ކުދިކުދި ހޮވާކެޔޯ ދެފަށް ކަނބިއްޔޯ`,
       
  englishLyrics: `#M
Kuredhi faluga nudhevi fithifa inndhe kanbihyoa
*Loahooraa boahooraa indhe kanbihyoa
Thuruthuru alha meysihihi indhe kanbihyoa
*Fiyavaalhuve biruheevefa inndhe kanbihyoa
#1
Fiyagandu hulhuvaa
*Sahlaa kohlaa
Dhaaneygothakah
*Medhugai visnaa
Kolhukolhu balamun
*Dheathah hirilaa
Indhe indhe gaanaaboa
*Huri haaskan boduvihyoa indhe kanbihyoa
#2
Thoshimaa aumun
*Baarah roelaa
Rakihini gothakah
*Thoshimaa hevilaa
Kurunees kohlaa
*Edhebeyn nerelaa
Hurehure hevilaadhoa
*Boakeyogahu mathin dhiyoa dhefah kanbihyoa
#3
Libidhin ufalun
*Thundiyah jehilaa
Hiyy hamajehilaa
*Boahure hooraa
Thungandu haramun
*Bimuadi thereah
Hinifulhu vaduvaadhoa
*Fani kudhikudhi hovaakeyoa dhefah kanbihyoa`,
},
{
  id: 35,
  name: `Dhon Janbu`,
  genre: 'Nala',
  lyrics: `#M
ޖަންބުމަގު ޖަންބުގެ ދޮންޖަންބު ފެނި ހިތް ހައިރާން ވެޔޭ
*ޖަންބުމަގު ޖަންބުގެ ދޮންޖަންބު ފެނި ހިތް ހައިރާން ވެޔޭ
ހުވަފެނެއްހޭ އާޝިގާއޭ
*ތަރިތައް ވިދާ ބަބުޅަނީއޭ

#1
މަގުމަތިން ފެނި ކޮސް ގޮވީމޭ
*ޝޯހުވެވި މަގު އޮޅިއްޖޭ
ލޯބިވާއޭ އާޝިގާއޭ
*ހިތް މި ފުނޑުފުނޑު ވަނީއޭ
ފާރަލެވުނޭ ކަންމަތީހުރެ
*ތުރުތުރު އަޅާގޮތް ވަނީއޭ

#2
އަސްތައަސްތާ ހާދަ ސަޅިއޭ
*ސިއްސަ ސިއްސައިން ދަނީއޭ
ފިރި ދެލޯމެރި ފުސް ވަނީޔޭ
*އޮޅި ދެފައި ރަކިވަނީއޭ
ހިތް މިތެޅިތެޅީ ހިތް މިރޮއެރޮއެ
*ފުނޑު ފުނޑު މިވާ ގޮތް ވަނީއޭ`,
       
  englishLyrics: `#M
Janbumagu janbuge dhonjanbu feni hiyy hairaan veyey
*Janbumagu janbuge dhonjanbu feni hiyy hairaan veyey
Huvafenehhey aashigaaey
*Tharithah vidhaa babulhaneeey
#1
Magumathin feni kos goveemey
*Shoahuvevi magu olhihjey
Loabivaaey aashigaaey
*Hiyy mi fundufundu vaneeey
Faaralevuney kanmatheehure
*Thuruthuru alhaagoyy vaneeey
#2
Asthaasthaa haadha salhiey
*Sihsa sihsain dhaneeey
Firi dheloameri fus vaneeyey
*Olhi dhefai rakivaneeey
Hiyy mithelhithelhee hiyy miroeroe
*Fundu fundu mivaa goyy vaneeey`,
},
{
  id: 36,
  name: `Araaamagu Dhonkamana`,
  genre: 'Kaasi',
  lyrics: `#M
ރައިވަރު ކިޔަމުން ހޯދި އަރާމަގު
*ދޮންކަމަނާގެ އަޖައިބުން އަހުމަދު އާޝޯހުވީ

#1
ލައިގެންކާނޭ ތަކެއްޗާ
*ކާނާ ހޯދަން ނުޖެހުމާ
ގޮދަޔާ ކަންނެލި ދިރުއްވާ
*ގޮދަޔާ ކަންނެލި ދިރުއްވާ
*ގިފިލިވަޅުން އެނެގިތާ އެކަމާ ތުރުތުރުއެޅީ

#2
ދަރުނެތިއެ އަނދާ އުނދުނުގާ
*ކަމަނަގެ އެއްފައި އޮތީމާ
އެގޮތައް އެއުނދުން މަތީގާ
*އެގޮތައް އެއުނދުން މަތީގާ
*ކަނާ ރޯފިލުވީމާ މޭގަނޑު އަނގަޔަށް އައީ

#3
ކަންވެރިބޭ ގެޔަށް އައީމާ
*ކަމަނާ ބޭޒާރުވީމާ
އެކަމާ އައި ގަދަރުޅީގައި
*އެކަމާ އައި ގަދަރުޅީގައި
*ކަމަނާ ވަރިކޮއްލީމާ އެކަމާ ރުޅިގަދަވަނީ

-
$M
ކަމަނާޔަށް ދަނބިކޮއެ ރީތިވީ
*އޫ ޖަރުމަނު މުންޑުއަނީމާ

$1
ޗާލޭ ޗާލޭ ދަނބިކޮއެވާ ޗާލޭ
*ރީއްޗޭ ރީއްޗޭ ދަނބިކޮއެވާ ރީއްޗޭ
ވާވާ ނަލައޭ ދަނބިކޮއެވާ ނަލައޭ
*ވާވާ ރީއްޗޭ ދަނބިކޮއެވާ ރީއްޗޭ

$2
*ރީތިވީ
ކަމަނާޔަށް
މުންޑު އަނީ
ދަނބިކޮއެ ފަހެ`,

  englishLyrics: `#M
Raivaru kiyamun hoadhi araamagu
*Dhonkamanaage ajaibun ahumadhu aashoahuvee
#1
Laigenkaaney thakehchaa
*Kaanaa hoadhan nujehumaa
Godhayaa kanneli dhiruhvaa
*Godhayaa kanneli dhiruhvaa
*Gifilivalhun enegithaa ekamaa thuruthuruelhee
#2
Dharunethie andhaa undhunugaa
*Kamanage ehfai otheemaa
Egothah eundhun matheegaa
*Egothah eundhun matheegaa
*Kanaa roafiluveemaa meygandu angayah aee
#3
Kanveribey geyah aeemaa
*Kamanaa beyzaaruveemaa
Ekamaa ai gadharulheegai
*Ekamaa ai gadharulheegai
*Kamanaa varikohleemaa ekamaa rulhigadhavanee
-
$M
Kamanaayah dhanbikoe reethivee
*Oo jarumanu munduaneemaa
$1
Chaaley chaaley dhanbikoevaa chaaley
*Reehchey reehchey dhanbikoevaa reehchey
Vaavaa nalaey dhanbikoevaa nalaey
*Vaavaa reehchey dhanbikoevaa reehchey
$2
*Reethivee
Kamanaayah
Mundu anee
Dhanbikoe fahe`,
},
{
  id: 37,
  name: `Dhurakah Dhuhvaa`,
  genre: 'Kaasi',
  lyrics: `#M
ދުރަކަށް ދުއްވާ އޮޑި އެމަހަށް ގޮސް
*ކަނޑުމަތި ޖެހި ރަށްގެއްލިދަނީ ރަށްގެއްލިދަނީ

#1
ފުސްކޮޅު ހުރެގެން އުފުލި އެދާހެން
*ބަނަކަން ހަފަރާތައްށޭ ވެރިވީ
ކަނޑުމަތި ޖެހި ރަށްގެއްލިދަނީ
*ރަށްގެއްލިދަނީ ރަށްގެއްލިދަނީ

#2
އިރުއޮއްސޭތީ ދަޅަޔަށްބަލަމުން
*ހުރިމިސްރާބުން އޮޑި އަނބުރާލާ
ކަނޑުމަތި ޖެހި ރަށްގެއްލިދަނީ
*ރަށްގެއްލިދަނީ ރަށްގެއްލިދަނީ

-
$M
ހަޒާނާ ހަޒާނާ ކަނޑުން ލިބޭ ހަޒާނާ
*ހަޒާނާ ހަޒާނާ ކަނޑުން ލިބޭ ހަޒާނާ
މަސްމީ ދިވެހީންގެ ކަނޑުން ބާނާ ފައިދާ އެއައްހޯދާ
*ހަޒާނާ ހަޒާނާ ކަނޑުން ލިބޭ ހަޒާނާ

$1
އައްވާ ފިންޔާ ތެރޭ ހީވާގީ މަސްވެރިން
*ހީވާގީ މަސްވެރިން

$2
ރޯއްޖޭ ހޯދާލަނީ ހީވާގި މަސްވެރިން
*ހީވާގީ މަސްވެރިން`,
       
  englishLyrics: `#M
Dhurakah dhuhvaa odi emahah gos
*Kandumathi jehi rahgehlidhanee rahgehlidhanee
#1
Fuskolhu huregen ufuli edhaahen
*Banakan hafaraathahshey verivee
Kandumathi jehi rahgehlidhanee
*Rahgehlidhanee rahgehlidhanee
#2
Iruohseythee dhalhayahbalamun
*Hurimisraabun odi anburaalaa
Kandumathi jehi rahgehlidhanee
*Rahgehlidhanee rahgehlidhanee
-
$M
Hazaanaa hazaanaa kandun libey hazaanaa
*Hazaanaa hazaanaa kandun libey hazaanaa
Masmee dhiveheenge kandun baanaa faidhaa eahhoadhaa
*Hazaanaa hazaanaa kandun libey hazaanaa
$1
Ahvaa finnyaa therey heevaagee masverin
*Heevaagee masverin
$2
Roahjey hoadhaalanee heevaagi masverin
*Heevaagee masverin`,
},
{
  id: 38,
  name: `Dhuhvaa Odi`,
  genre: 'Kaasi',
  lyrics: `#S
އައިނެކޭ އޮޑި ކުރީ
ލާމިގޮދަޔާ ކަންނެލީ
ތަކުރު ހުރެ ގޮތް ހުސް ވަނީ
ވާ މިގަދަ ވީއްސާރައީ

#M
ދުއްވާ އޮޑި ބާރުލާ ކެޔޮޅާ
*ހިކިފަސް މަގެ ގޯތި އަތުވޭތޯ
ހަދަނީ ވިއްސާރައޭ
*ހަދަނީ ވިއްސާރައޭ

#1
ދުއްވާ އޮޑި ބާރުލާ ކުރިއައް
*ދެރިޔާ ކުނބު ކުރިޖައްސާ
ކަނޑު އޮޅިއާ ސީދާކޮއް
*ދެފަރާތުން ދިޔަހިއްކާ
ފަލިތައް ބާލާ ފެނު އަޅުވާލާ
*އާނ ހުތް

#2
ދަންވޭ އަނދިރި ރެދަންލާ
*މުޅި ކަނޑުއޮޅި އަލިކޮއްލީ
ހޭމަތީ ބަލަ ދަރިންނޭ
*ނާމާން ކަން ވެރިވެއްޖޭ
ފަލިތައް ބާލާ ފެނު އަޅުވާލާ
*އާނ ހުތް

-
$M
އޮޑިދުއްވާ ކަނޑުތަކުގާ ރާޅު ތަކުތެރޭގާ
*ހިތްވަރުލާ ފޯރީގާ ބާނިތަކު ތެރޭގާ

$1
މެންދަމެއް ރޭގަނޑެއް ފަތިހެއް ހަމަ ނުބަލައޭ
ދަތުރައް ހެޔޮވަރޭ ކޮންމެ ވަގުތަކަސް ހެވޭ

$2
ފަތިހާ ތެދުވެގެން ތަކުރޭ ދަތުރައް ހެދީ
އޮޑިޔަށް ބޯފެނާ ކޮއްތާ ދަރުލާ ހެދީ

$M
ޖަހާޖަހާޖަހާޖާހާ ބެރުގަ ޖަހާލާ ބެރުގަޖަހާލާ ނަށާލާ
*ޖަހާޖަހާޖަހާޖާހާ ބެރުގަ ޖަހާލާ ބެރުގަޖަހާލާ ނަށާލާ

$1
ރާގުކިޔާލާ ނަލަނަލަ ރަގުކިޔާލާ
ރާގުކިޔާލާ ނަލަނަލަ ރަގުކިޔާލާ

$N
ބެރުޖަހާލާ
*ނަށާލާ`,
       
  englishLyrics: `#M
Ainekey odi kuree
*Laamigodhayaa kannelee
Thakuru hure goyy hus vanee
*Vaa migadha vihsaaraee
#1
Dhuhvaa odi baarulaa keyolhaa
*Hikifas mage goathi athuveythoa
Hadhanee vihsaaraey
*Hadhanee vihsaaraey
#2
Dhuhvaa odi baarulaa kuriah
*Dheriyaa kunbu kurijahsaa
Kandu olhiaa seedhaakoh
*Dhefaraathun dhiyahihkaa
Falithah baalaa fenu alhuvaalaa
*Aan huyy
#3
Dhanvey andhiri redhanlaa
*Mulhi kanduolhi alikohlee
Heymathee bala dharinney
*Naamaan kan verivehjey
Falithah baalaa fenu alhuvaalaa
*Aan huyy
-
$M
Odidhuhvaa kanduthakugaa raalhu thakuthereygaa
*Hiyyvarulaa foareegaa baanithaku thereygaa
$1
Mendhameh reygandeh fathiheh hama nubalaey
*Dhathurah heyovarey konme vaguthakas hevey
$2
Fathihaa thedhuvegen thakurey dhathurah hedhee
*Odiyah boafenaa kohthaa dharulaa hedhee
$3
Jahaa jahaa jahaa jahaa beruga jahaalaa berugajahaalaa nashaalaa
*Jahaa jahaa jahaa jahaa beruga jahaalaa berugajahaalaa nashaalaa
$4
Raagukiyaalaa nalanala ragukiyaalaa
*Raagukiyaalaa nalanala ragukiyaalaa
$5
Berujahaalaa
*Nashaalaa`,
},
{
  id: 39,
  name: `Kanzu Dhonkamana`,
  genre: 'Thinberu',
  lyrics: `#M
ގޭތެރޭން ތަކުރު ނުވާތީ
*ހާދަހާ މޭއެބަ ތެޅެޔޭ
ކަންޒު ދޮންކަމަނަ ނިދީގާ
*ތަންމަތީ ފުރޮޅިފަ ގޮވައޭ

#1
ވައިގަދަވެ ވާރެ އަރީއޭ
*ގުގުރި އަޑު މާގަދަވީއޭ
ވިދުވަރުން ލޯމެރެނީއޭ
*ރަށް މަތިން ކަނބިލި ގޮވީއޭ

#2
ރޭދެބައި ވީރުވެސްތާ
*ނާދެޔޭ ތަކުރު މިގެއަކަށް
މެދުގެޔަށް ވާރެ ވެހޭތީ
*ގޭތެރޭ ފެން ބޮޑުވީއޭ

#3
ދާނުގާ އެކަނި މިރޭގާ
*ހާލުގާ ވޭތު ވަނީއޭ
ވާނުވާ ނޭނގި މިހެން ގޮސް
*ލޯނުމެރި އިރު އަރަނީއޭ`,

  englishLyrics: `#M
Geythereyn thakuru nuvaathee
*Haadhahaa meyeba thelheyey
Kannzu dhonnkamana nidheegaa
*Thannmathee furolhifa govaey
#1
Vaigadhave vaare areeey
*Guguri adu maagadhaveeey
Vidhuvarun loamereneeey
*Rah mathin kanbili goveeey
#2
Reydhebai veeruvesthaa
*Naadheyey thakuru migeakah
Medhugeyah vaare veheythee
*Geytherey fen boduveeey
#3
Dhaanugaa ekani mireygaa
*Haalugaa veythu vaneeey
Vaanuvaa neyngi mihen gos
*Loanumeri iru araneeey`,
},
{
  id: 40,
  name: `Dhondhaitha Dhari`,
  genre: 'Kaasi',
  lyrics: `#M
ދޮންދައިތަ ދަރި ދޮން ކަނބުލޯވާ
*އޮންނާނެ ގޭގާ ނުނިދާ
ދޮންދައިތަ ދަރި ތުތު ކަނބުލޯވާ
*އޮންނާނެ ހިތުގާނުފިލާ

#1
ވޮއްނެއް މިތަންތަން އަލިވާ
*ބޮންތީގެ ފަނޑުކުލަ އެއަރާ
ނަލަފެހި އެދިން ހަނދުވަރު އަލިވާ
*މަލަކާއެކޯނީ އިންދާ

#2
އޮއްސޭ ވިލާތަކު ތެރެވާ
*ގޮސްހުރި ވިލާރަތް އޮބިވާ
ބަރުހަނދުގެ އަލިކަން ފަޅިމެދުގާ
*ކަޅުފޮއެ އަނދިރި ވިލިރޭރޭ

-
$M
ކަނބިއްޔާ ކަނބިއްޔަށޭ މަމިގޮވަނީ
*ކަނބިލިވަލުގަ ބޮނދާފިލާ ވާތީ

$1
މަގޫ ދަނޑުގަ ނިދާނޭ ކަނޑޫފަލުގަ ހިނގާނޭ
*މަގޫ ދަނޑުގަ ނިދާނޭ ކަނޑޫފަލުގަ ހިނގާނޭ
މަގުންހިނގާ ދެކޮޅުބަލާ ހޮވާކަމުން ދާނޭ
*މަގުންހިނގާ ދެކޮޅުބަލާ ހޮވާކަމުން ދާނޭ

$2
ރޯނުވަލުން ކުދިފިޔޮށް ބޯނެފެނެއް ނުލިބުމުން
*ރޯނުވަލުން ކުދިފިޔޮށް ބޯނެފެނެއް ނުލިބުމުން
ހޯދިފަހުން ނުފެނުމުން ރޯނެވަލުގަ ހިމައަޑުން
*ހޯދިފަހުން ނުފެނުމުން ރޯނެވަލުގަ ހިމައަޑުން`,
       
  englishLyrics: `#M
Dhondhaitha dhari dhon kanbuloavaa
*Onnaane geygaa nunidhaa
Dhondhaitha dhari thuthu kanbuloavaa
*Onnaane hithugaanufilaa
#1
Vohneh mithanthan alivaa
*Bontheege fandukula earaa
Nalafehi edhin handhuvaru alivaa
*Malakaaekoanee indhaa
#2
Ohsey vilaathaku therevaa
*Goshuri vilaarayy obivaa
Baruhandhuge alikan falhimedhugaa
*Kalhufoe andhiri vilireyrey
-
$M
Kanbihyaa kanbihyashey mamigovanee
*Kanbilivaluga bondhaafilaa vaathee
$1
Magoo dhanduga nidhaaney kandoofaluga hingaaney
*Magoo dhanduga nidhaaney kandoofaluga hingaaney
Magunhingaa dhekolhubalaa hovaakamun dhaaney
*Magunhingaa dhekolhubalaa hovaakamun dhaaney
$2
Roanuvalun kudhifiyoh boanefeneh nulibumun
*Roanuvalun kudhifiyoh boanefeneh nulibumun
Hoadhifahun nufenumun roanevaluga himaadun
*Hoadhifahun nufenumun roanevaluga himaadun`,
},
{
  id: 41,
  name: `Dhonveli Thundi`,
  genre: 'Kaasi',
  lyrics: `#M
ދޮންވެލި ތުނޑި ކޮޅުމަތީން
*ދެފައް ރާޅު ހޮޅި ލާޖަހާ
ދޮންފަސް އަރުވާ ތުނޑީން
*އިތުރަށް ތުނޑި ބޮޑު ވެލާ

#1
އަކިރިޔާ ވެއްޔާ ގަލާ އެކުވެރާޅާ ވޮޑުވެލާ
*އެކުވެރާއްޅާ ވޮޑުވެލާ
ލައްގުވާ ކުދިއޮއްތަކުން އެކުވެ ވެއްޔާ ގަސްފަޅާ
*އެކުވެ ވެއްޔާ ގަސްފަޅާ އެކުވެ ވެއްޔާ ގަސްފަޅާ

#2
ވޮޑިވި ދާ ތުނޑި ކޮޅު މަތީ ކުރަނގި ވައްލާ ހޯރަޔާ
*ކުރަނގި ވައްލާ ހޯރަޔާ
ބިސް އަޅާ ކިރު ދޫނިތައް ހާލި ހާލިން ތުނޑި ފުރާ
*ހާލި ހާލިން ތުނޑި ފުރާ ހާލި ހާލިން ތުނޑި ފުރާ

#3
ފަސް އަރާ ތުނޑި ކޮޅު މަތީ ލަސްތަކެއް ނުވެ ބޮޑުވެލާ
*ލަސްތަކެއް ނުވެ ބޮޑުވެލާ
ގަސްތަކާ އެކި ގާކޮޅުން މުޅި ތުނޑީ ޒީނަތް ވެލާ
*މުޅި ތުނޑީ ޒީނަތް ވެލާ މުޅި ތުނޑީ ޒީނަތް ވެލާ

-
$M
އަލަކަބޮނޑަނަ ތޯތާކުދި ވައްލަކުރަނގި ދުވެލާ
*ސިއްބުރޭރު ރަތަފައިން މުޅި ތުނޑިއެކީ ފުރާލާ
އެހަނޑަ އުޅޭ ބޯމަތިން
*ވައްލަ ދުވޭ ތުނޑިމަތިން

$M
މާކަނާ ކަލޯތާ
*މަގައިގާ ޖެހީތާ
ޖަހާއިނދެ ފިލީތާ
*ފިލާއިނދެ ރޮނީތާ
މަތިން ދަމުން ބޯޖެއްސޯ
*ތިރިން ދަމުން ކޮއްޖެއްސޯ

$1
ބުލްބުލާ އަގުލަބީ އާހު ކަނބިލި މައިނާ
*އާހު ކަނބިލި މައިނާ
ޒުރުވުތީ ތަކުތުވާ ގިނިކާމާ ދޫނިތައް
*ގިނިކާމާ ދޫނިތައް ގިނިކާމާ ދޫނިތައް

$2
ފުރުއްލާ އިލޮޅިއާ އަލަކަވައްލަ ބިސްއަޅާ
*އަލަކަވައްލަ ބިސްއަޅާ
މިޔަރެވޫ ގޮހޮރުގޭ ބޮޑުގާމާ އަޑުލަވާ
*ބޮޑުގާމާ އަޑުލަވާ ބޮޑުގާމާ އަޑުލަވާ

$3
ބިލެއްމާ ކަނޑުކަނބާ ކަނދުވަލު މާ ފޮނިވެލާ
*ކަނދުވަލު މާ ފޮނިވެލާ
ގުޑުގުޑާ ވުދުވުދޫ ކަނިފުޅުމާ ފިޔަޖަހާ
*ކަނިފުޅުމާ ފިޔަޖަހާ ކަނިފުޅުމާ ފިޔަޖަހާ`,
       
  englishLyrics: `#M
Dhonveli thundi kolhumatheen
*Dhefah raalhu holhi laajahaa
Dhonfas aruvaa thundeen
*Ithurah thundi bodu velaa
#1
Akiriyaa vehyaa galaa ekuveraalhaa voduvelaa
*Ekuveraalhaa voduvelaa
Lahguvaa kudhiohthakun ekuve vehyaa gasfalhaa
*Ekuve vehyaa gasfalhaa ekuve vehyaa gasfalhaa
#2
Vodivi dhaa thundi kolhu mathee kurangi vahlaa hoarayaa
*Kurangi vahlaa hoarayaa
Bis alhaa kiru dhoonithah haali haalin thundi furaa
*Haali haalin thundi furaa haali haalin thundi furaa
#3
Fas araa thundi kolhu mathee lasthakeh nuve boduvelaa
*Lasthakeh nuve boduvelaa
Gasthakaa eki gaakolhun mulhi thundee zeenayy velaa
*Mulhi thundee zeenayy velaa mulhi thundee zeenayy velaa
-
$M
Alakabondana thoathaakudhi vahlakurangi dhuvelaa
*Sihbureyru rathafain mulhi thundiekee furaalaa
Ehanda ulhey boamathin
*Vahla dhuvey thundimathin
$1
Maakanaa kaloathaa
*Magaigaa jeheethaa
Jahaaindhe fileethaa
*Filaaindhe roneethaa
Mathin dhamun boajehsoa
*Thirin dhamun kohjehsoa
$2
Bulbulaa agulabee aahu kanbili mainaa
*Aahu kanbili mainaa
Zuruvuthee thakuthuvaa ginikaamaa dhoonithah
*Ginikaamaa dhoonithah ginikaamaa dhoonithah
$3
Furuhlaa ilolhiaa alakavahla bisalhaa
*Alakavahla bisalhaa
Miyarevoo gohorugey bodugaamaa adulavaa
*Bodugaamaa adulavaa bodugaamaa adulavaa
$4
Bilehmaa kandukanbaa kandhuvalu maa fonivelaa
*Kandhuvalu maa fonivelaa
Gudugudaa vudhuvudhoo kanifulhumaa fiyajahaa
*Kanifulhumaa fiyajahaa kanifulhumaa fiyajahaa`,
},
{
  id: 42,
  name: `Farivaairu`,
  genre: 'Nala',
  lyrics: `#M
ފަރިވާއިރު ގުލްސަން މަލުގެވަހުންދޯ
*އަސަރުކުރާ މީޗާނދަނީ ދޯ އަސަރުކުރާ މީޗާނދަނީ

#1
ފަރިވާމިނަޔާމާ ހިތުގެވަޔާ
*އާލާކުރާނާ ރާލިޔާ
ފަރިވާމި ދޭލިޔާ ތަރުތީބުގޮތުން އާއިހާ މުނިޔާ
*އާޒާދުކުރާމީ ގުލްޒާރެކޭ

$M
އެންމެން އެކުގާ އަބަދުއުޅޭ
މިއޮތީ އުފާދޭ ގުލްޒާރެކޭ މިއޮތީ އުފާދޭ ގުލްޒާރެކޭ

$1
ނަންވާ ކަރަންކާ ފަރިވެފޮޅޭނޭ
*ޗާލްވާ ނަފުސާ މާލިބޭނޭ
ނަރުގިސްޗަބޭލީ ހެދިގެންއަރާނޭ އޯއޯއޯ
*ނަރުގިސްޗަބޭލީ ހެދިގެންއަރާނޭ
މާތައްފަރިވާ ބަހާރެކޭ
*މިއޮތީ އުފާދޭ ގުލްޒާރެކޭ މިއޮތީ އުފާދޭ ގުލްޒާރެކޭ

#M
ގުލްޒާރީ ބަހާރުގާ ހީލީމާތޯ ޕިޔާރުގާ
*އައްޗާ އައްޗާ ވާވަރޭ އައްޗާ އައްޗާ ވާވަރޭ ތޯ އައްޗާ

#1
ގުލްސަނޭމީ މަލުގެފަރިވާ
*ބުލްބުލާ މުނިޔާގެ ހިތުގާ
އަންނާތީމިހާރުގާ ހީލާފާތާ ޒާރުގާ
*އައްޗާ އައްޗާ ވާވަރޭ އައްޗާ އައްޗާ ވާވަރޭ ތޯ އައްޗާ`,

  englishLyrics: `#M
Farivaairu gulsan malugevahunndhoa
*Asarukuraa meechaandhanee dhoa asarukuraa meechaandhanee
#1
Farivaaminayaamaa hithugevayaa
*Aalaakuraanaa raaliyaa
Farivaami dheyliyaa tharutheebu gothun aaihaa muniyaa
*Aazaadhukuraamee gulzaarekey
-
$M
Ennmen ekugaa abadhuulhey
*Miothee ufaadhey gulzaarekey miothee ufaadhey gulzaarekey
$1
Nannvaa karannkaa farivefolheyney
*Chaalvaa nafusaa maalibeyney
Narugischabeylee hedhigennaraaney oaoaoa
*Narugischabeylee hedhigennaraaney
Maathahfarivaa bahaarekey
*Miothee ufaadhey gulzaarekey miothee ufaadhey gulzaarekey
-
#M
Gulzaaree bahaarugaa heeleemaathoa piyaarugaa
*Ahchaa ahchaa vaavarey ahchaa ahchaa vaavarey thoa ahchaa
#1
Gulsaneymee malugefarivaa
*Bulbulaa muniyaage hithugaa
Annaathee mihaarugaa heelaafaathaa zaarugaa
*Ahchaa ahchaa vaavarey ahchaa ahchaa vaavarey thoa ahchaa`,
},
{
  id: 43,
  name: `Edhigen Kurevey`,
  genre: 'Kaasi',
  lyrics: `#M
އެދިގެން ކުރެވޭ އަލުންނާވެ ފޯރީ
*ގައުމީ ގުލްޒާރު ތާޒާވަނޭ ހަޒާރުން

#1
މަޒީނަން ހޯދާލާ
*އާހިތްވަރަކާ ދެމުންދާށެ ފޯރީ
މަޒީނަން ހޯދާލާ
*އާހިތްވަރަކާ ދެމުންދާށެ ފޯރީ ގައުމީ ގުލްޒާރު ތަޒާވާނޭ ހަޒާރުން

-
$M
ދޮންވާމީ ޗާންދަނީގެ އާރާމާ މީރުވަހާ
*ތިޔަހަރަ ލޯބި ނަޔާ ކިޔާށެދެން ޗާލުނަޔާ

$1
ނެތީހެ ނުނީ އަދުގައި އަނިޔާ
*ކޮއްލަން ވީހެ ދިވާނާ
ހިތުން ދަނޭހޭ ރަންގުލޯބި މަތުލަބުތޯ ލޯ
*ހިތުން ދަނޭހޭ ރަންގުލޯބި މަތުލަބުތޯ ލޯ
ނަޔާ އާރާމާ މީރުވަހާ
*ތިޔަހަރަ ލޯބި ނަޔާ ކިޔާށެދެން ޗާލުނަޔާ

$2
ބިންނަން ބިނަންމާ
*ޖަންބާ ދޭލިޔާ
އައިޒާދު ރޯޅިޔާ
*އައި މިވައިރޯޅިޔާ

$3
މިވަނީމާ އަދުބިންނާށެވަނީ ޒާރުގާ
*މިވަނީމާ އަދުބިންނާށެވަނީ ޒާރުގާ
ކޯނިތައްމާ
*ފަރިވެލީމާ
އޭބަޅިނދާ މާބުރާ
*ފޫހިނެތި އުޅޭ ގުރާ
އޭރުން އުންބުލްބުލް މައިނާތައް އައިސް ހިތްއުފާކުރާ
*އޭރުން އުންބުލްބުލް މައިނާތައް އައިސް ހިތްއުފާކުރާ

$4
ދިރުވައި ދޭށެ އަލުން
*އެމާބުލާސާރު
ކުލަޔާ ރަހަޔާއި ވަހާ
*ދިރުވައިދޭ އެންމެ ނަޔާ`,
       
  englishLyrics: `#M
Edhigen kurevey alunnaave foaree
*Gaumee gulzaaru thaazaavaney hazaarun
#1
Mazeenan hoadhaalaa
*Aahiyyvarakaa dhemunndhaashe foaree
Mazeenan hoadhaalaa
*Aahiyyvarakaa dhemunndhaashe foaree gaumee gulzaaru thazaavaaney hazaarun
-
$M
Dhonnvaamee chaandhaneege aaraamaa meeruvahaa
*Thiyahara loabi nayaa kiyaashedhen chaalunayaa
$1
Netheehe nunee adhugai aniyaa
*Kohlan veehe dhivaanaa
Hithun dhaneyhey rannguloabi mathulabuthoa loa
*Hithun dhaneyhey rannguloabi mathulabuthoa loa
Nayaa aaraamaa meeruvahaa
*Thiyahara loabi nayaa kiyaashedhen chaalunayaa
$2
Binnan binannmaa
*Jannbaa dheyliyaa
Aizaadhu roalhiyaa
*Ai mivairoalhiyaa
$3
Mivaneemaa adhubinnaashevanee zaarugaa
*Mivaneemaa adhubinnaashevanee zaarugaa
Koanithahmaa
*Fariveleemaa
Eybalhindhaa maaburaa
*Foohinethi ulhey guraa
Eyrun unnbulbul mainaathah ais hiyyufaakuraa
*Eyrun unnbulbul mainaathah ais hiyyufaakuraa
$4
Dhiruvai dheyshe alun
*Emaabulaasaaru
Kulayaa rahayaai vahaa
*Dhiruvaidhey ennme nayaa`,
},
{
  id: 44,
  name: `Anhaa Aee Eedhey`,
  genre: 'Thinberu',
  lyrics: `#M
އަންހާ އައީ އީދޭ ހާން އުފާ ފުރާލާ
*ބަހާރުމިއައީ އުފަލުން ހެމުން ނަށާލާ
ފަޒާތެރޭ އުދުހޭ ދޫނިތައް ގޮވާލާ
*ބަހާރުމިއައީ އުފަލުން ހެމުން ނަށާލާ

#1
ފަތިހު ހަމަހިމޭން ކަމުގާ ޝަބުނަމުން އެދިން ފިނިކަން
*ފަތިހު ހަމަހިމޭން ކަމުގާ ޝަބުނަމުން އެދިން ފިނިކަން
ދަތިކަމެއް ކަމަށް ނުހިތާ ފޮޅިލި ރީތިހާމާތައް
*ދަތިކަމެއް ކަމަށް ނުހިތާ ފޮޅިލި ރީތިހާމާތައް
ފަތުރުވާ ހުވަނދު ހީލާ ރޯޅި އައިސް ކިޔާލާ
*ބަހާރުމިއައީ އުފަލުން ހެމުން ނަށާލާ

#2
އަދުވަމާހެ ހިތް ހެޔޮކޮށް މިތުރުނޭ އަބަދުއެކުގާ
*އަދުވަމާހެ ހިތް ހެޔޮކޮށް މިތުރުނޭ އަބަދުއެކުގާ
ގިނަޒަމާން ތަކަށް ދެމިވާ އެކުވެރިން ތަކެއް ކަމުގާ
*ގިނަޒަމާން ތަކަށް ދެމިވާ އެކުވެރިން ތަކެއް ކަމުގާ
މީއަމާން ކަމޭބުނަމުން މަރުހަބާ ކިޔާލާ
*ބަހާރުމިއައީ އުފަލުން ހެމުން ނަށާލާ

#3
އުދަވި އިރުގެ ރަންދޯދިން ރިހިފަޒާ ޖަރީކުރަމުން
*އުދަވި އިރުގެ ރަންދޯދިން ރިހިފަޒާ ޖަރީކުރަމުން
އަނދިރިކަން ފިލާނެތިގޮސް ބިރުތަކުން އުފާލިބުމުން
*އަނދިރިކަން ފިލާނެތިގޮސް ބިރުތަކުން އުފާލިބުމުން
ނިދިފިލާ ކޮވެލި ހާލާ ރާގުގާކިޔާލާ
*ބަހާރުމިއައީ އުފަލުން ހެމުން ނަށާލާ`,
       
  englishLyrics: `#M
Anhaa aee eedhey haan ufaa furaalaa
*Bahaarumiaee ufalun hemun nashaalaa
Fazaatherey udhuhey dhoonithah govaalaa
*Bahaaru miaee ufalun hemun nashaalaa
#1
Fathihu hamahimeyn kamugaa shabunamun edhin finikan
*Fathihu hamahimeyn kamugaa shabunamun edhin finikan
Dhathikameh kamah nuhithaa folhili reethihaa maathah
*Dhathikameh kamah nuhithaa folhili reethihaa maathah
Fathuruvaa huvandhu heelaa roalhi ais kiyaalaa
*Bahaaru miaee ufalun hemun nashaalaa
#2
Adhuvamaahe hiyy heyokoh mithuruney abadhuekugaa
*Adhuvamaahe hiyy heyokoh mithuruney abadhuekugaa
Ginazamaan thakah dhemivaa ekuverin thakeh kamugaa
*Ginazamaan thakah dhemivaa ekuverin thakeh kamugaa
Meeamaan kameybunamun maruhabaa kiyaalaa
*Bahaaru miaee ufalun hemun nashaalaa
#3
Udhavi iruge ranndhoadhin rihifazaa jareekuramun
*Udhavi iruge ranndhoadhin rihifazaa jareekuramun
Andhirikan filaanethigos biruthakun ufaalibumun
*Andhirikan filaanethigos biruthakun ufaalibumun
Nidhifilaa koveli haalaa raagugaakiyaalaa
*Bahaaru miaee ufalun hemun nashaalaa`,
},
{
  id: 45,
  name: `Engi Faalhuga`,
  genre: 'Nala',
  lyrics: `#M
އެނގިފާޅުގަ ކުރި ލޯބީގަ އަނިޔާ
*ނިމިޖާނުގެ ދާނީ ނޭވާއަރާ
އަދުހާލު އެނގިވާތީހެ މުނިޔާ
*ތިޔަ ފާޅުގަދޭނީ ވޭނާ ޝަޒާ

#1
ހިތި އަސަރު ހިނގާދާ ކަމެކޭ ނެތި ވިންދު ހިތުގެދާ ކަމެކޭ
*ދަތި ހިތްވިރުވޭތީ ކަމެކޭ ނިދިގެއްލި ފިލާދާ ކަމެކޭ
މަދަދެއްނެތި ލިބުމުން ވޭނީއަސަރުގާ ނިމިޖާނުގެ ދާނީ ނޭވާއަރާ
*އެނގިފާޅުގަ ކުރި ލޯބީގަ އަނިޔާ ނިމިޖާނުގެ ދާނީ ނޭވާއަރާ

#2
ފިކުރާވެ ހިޔާލާގުޅުފާ ގުޅިއޭރު މިލޯބިން އެކުގާ
*މުޅި ރޫހް އުފާ ކޮއްދީފާ ކުރިއޭރު ހޫވާތައް ވައުދާ
ތަޅުވައިފި މަގޭހިއް ނޭންގޭ ނަޒަރުގާ ނިމިޖާނުގެ ދާނީ ނޭވާއަރާ
*އެނގިފާޅުގަ ކުރި ލޯބީގަ އަނިޔާ ތިޔަ ފާޅުގަދޭނީ ވޭނާ ސަޒާ`,

  englishLyrics: `#M
Engifaalhuga kuri loabeega aniyaa
*Nimijaanuge dhaanee neyvaaaraa
Adhuhaalu engivaatheehe muniyaa
*Thiya faalhugadheynee veynaa shazaa
#1
Hithi asaru hingaadhaa kamekey nethi vinndhu hithugedhaa kamekey
*Dhathi hiyyviruveythee kamekey nidhigehli filaadhaa kamekey
Madhadhehnethi libumun veyneeasarugaa nimijaanuge dhaanee neyvaaaraa
*Engifaalhuga kuri loabeega aniyaa nimijaanuge dhaanee neyvaaaraa
#2
Fikuraave hiyaalaagulhufaa gulhieyru miloabin ekugaa
*Mulhi rooh ufaa kohdheefaa kurieyru hoovaathah vaudhaa
Thalhuvaifi mageyhih neynngey nazarugaa nimijaanuge dhaanee neyvaaaraa
*Engifaalhuga kuri loabeega aniyaa thiya faalhugadheynee veynaa sazaa`,
},
{
  id: 46,
  name: `Ey Balhindhaa`,
  genre: 'Taki',
  lyrics: `#M
އޭބަޅިނދާ މާބުރާ ކޮކާލާ
*މަލައް އަނިޔާތަކޭ ތިޔަދެނީ
އޭގަވިނާޒުކު ކަރާ ފިޔަތަކޭ
*ބިމައް ރޫޅާ އަޅާ ތިޔަލަނީ

#1
އިރުދޯދިތައް ޖައްވައް އަލިކަން ނުދެނީސް
*ބިރުނެތިގެން މާދުރުން އަޑު އަޑު ލަމުން އައިސް
ތިރިކޮއްލާރީތި އަވަސް ހަރަކާތް ތަކެއްގާ
*އޭބަޅިނދާ މާބުރާ ކޮކާލާ މަލައް އަނިޔާތަކޭ ތިޔަދެނީ

#2
އުދުހޭއިރު ދުނިޔޭގެ ފަޒާތެރޭގާ
*ދުރުމި އަޅައިގެން ހޯދާބަލާފާ
ދުނިޔޭގެ ބިމުން ފަރިވާ ކޮންމެ މަލެއް ދެކެފާ
*އޭބަޅިނދާ މާބުރާ ކޮކާލާ މަލައް އަނިޔާތަކޭ ތިޔަދެނީ

#3
ވަސްމީރުވި ރީތިއެތައް ކުލައެއްގެ މަލާ
*ވަސް ހިތި ވިހަވީ ނުބައި އެތަކެއްމަލާމާ
އަސްތާ ރަހުމެއް އުފަލެއް މަލަކައް ނެތޭތާ
*އޭބަޅިނދާ މާބުރާ ކޮކާލާ މަލައް އަނިޔާތަކޭ ތިޔަދެނީ`,

  englishLyrics: `#M
Eybalhindhaa maaburaa kokaalaa
*Malah aniyaathakey thiyadhenee
Eygavinaazuku karaa fiyathakey
*Bimah roolhaa alhaa thiyalanee
#1
Irudhoadhithah jahvah alikan nudhenees
*Birunethigen maadhurun adu adu lamun ais
Thirikohlaareethi avas harakaayy thakehgaa
*Eybalhindhaa maaburaa kokaalaa malah aniyaathakey thiyadhenee
#2
Udhuheyiru dhuniyeyge fazaathereygaa
*Dhurumi alhaigen hoadhaabalaafaa
Dhuniyeyge bimun farivaa konnme maleh dhekefaa
*Eybalhindhaa maaburaa kokaalaa malah aniyaathakey thiyadhenee
#3
Vasmeeruvi reethiethah kulaehge malaa
*Vas hithi vihavee nubai ethakehmalaamaa
Asthaa rahumeh ufaleh malakah netheythaa
*Eybalhindhaa maaburaa kokaalaa malah aniyaathakey thiyadhenee`,
},
{
  id: 47,
  name: `Faalhugaa Dhin Aniyaa`,
  genre: 'Kaasi',
  lyrics: `#S
އައީ ލޯފުރާ ލާ
މިހިތު ކަރުނައޭ
ވަނީއޭ މިނޭވާ
ދަތިވެ ޔާރު ތެރޭން

#M
ފާޅުގާ ދިން އަނިޔައިގާ ފާރުވީ ލޯކަރުނައިގާ
*ހިތްވަނީ މާޔޫސް ނުވާހާ ވޭނީ ހަނދުމައިގާ

#1
ނުވީތި އޯގާ ހާލުގާ ޖައްސާ ނަގާލާފާ
*ނުވީތި އޯގާ ހާލުގާ ޖައްސާ ނަގާލާފާ
ޒަހަމު ކުރީމާ އޭރުގާ
*މަގޭހިތާ ޖާނާ
ބެހެންދާތީ މަގޭ ނޭވާ
*އޮޔާ ރާޅާ
ނޫރު މިދެލޮލުން ކެނޑުނީމާ މޫނުވެ ކަފުނުން ފޮރުވީމާ
*ކާކުހޭ ދެން މިކަން ކުރާނީ ޔާނާ ބުނެލީމާ

#2
އާޅާ ހުރީމެން ނޫންތޯ ލޯބިން ބީއްސައިގާ
*އާޅާ ހުރީމެން ނޫންތޯ ލޯބިން ބީއްސައިގާ
ވަނީ ދުވާލާ ރޭތާކޭ
*މޭގެ ހިތާމާއިގާ
މަގޭހާލޭ އާލާށޭ
*މިހިތުގާ ވާހާ
ނާޒުކު ވީހިތް މޭތެރޭ ވިޔެ ނާރުތައް ކެނޑި މުޅި އުފާ
*ލޯމަތީ ހިތް ފަރިވެފާވާ ޗާލެއްކަމުގާވާ

-
$M
ހާދަހާ މަގޭ ހިތް ތެޅޭޭ ބަލާލުމުން
*ހާދަހާ މަންޖެ މަށަށް ލިބިދާނޭބާ

$1
ކުރަނގި ދެލޯފަދަ ތިޔަފަރި ދެލޮލާ
*ހިތިފަތު ބުމަޔާ ދޮންއިހި ކަނދުރާ ދޮންއިހި ކަނދުރާ
ހާދަ ބަލާހިތް މަވެޔޭ
*ހާދަ ބަލާހިތް މަވެޔޭ ފޫހިނުވޭ ގައިމޭ ބަލަ އޭދޮންދޮން ކަމަނާއޭ

$2
ސާދަވިލޭރޭ ހަނދުފަދަ މޫނޭ
*ހޫރުޕަރީން ފަދަ ރީތި ޕަރީއެއް ރީތި ޕަރީއެއް
ޖަންބު ތިކޯތާފަތުގާ
*ޖަންބު ތިކޯތާފަތުގާ ބީހިލުމަށް ހިތްއެދެމޭ

$3
ލީމަ ލިބާހާ ފޭލި އެކަމާ
*ރީތިކަމުން މުޅި ކައުނު ވިދާލާ ކައުނު ވިދާލާ
ތަރިތަކުގާ ވާ އަލިކަން
*ތަރިތަކުގާ ވާ އަލިކަން ގައިމޭ ފަނޑުކޮއްލާނޭ`,

  englishLyrics: `#S
Aee loafuraa laa
Mihithu karunaey
Vaneeey mineyvaa
Dhathive yaaru thereyn
#M
Faalhugaa dhin aniyaigaa faaruvee loakarunaigaa
*Hiyyvanee maayoos nuvaahaa veynee handhumaigaa
#1
Nuveethi oagaa haalugaa jahsaa nagaalaafaa
*Nuveethi oagaa haalugaa jahsaa nagaalaafaa
Zaham kureemaa eyrugaa
*Mageyhithaa jaanaa
Behendhaathee magey neyvaa
*Oyaa raalhaa
Nooru midhelolun kenduneemaa moonuve kafunun foruveemaa
*Kaakuhey dhen mikan kuraanee yaanaa buneleemaa
#2
Aalhaa hureemen noonnthoa loabin beehsaigaa
*Aalhaa hureemen noonnthoa loabin beehsaigaa
Vanee dhuvaalaa reythaakey
*Meyge hithaamaaigaa
Mageyhaaley ahaalaashey
*Mihithugaa vaahaa
Naazuku veehiyy meytherey viye naaruthah kendi mulhi ufaa
*Loamathee hiyy farivefaavaa chaalehkamugaavaa
-
$M
Haadhahaa magey hiyy thelheyey balaalumun
*Haadhahaa mannje mashah libidhaaneybaa
$1
Kurangi dheloafadha thiyafari dhelolaa
*Hithifathu bumayaa dhonnihi kandhuraa dhonnihi kandhuraa
Haadha balaahiyy maveyey
*Haadha balaahiyy maveyey foohinuvey gaimey bala eydhonndhon kamanaaey
$2
Saadhavileyrey handhufadha mooney
*Hoorupareen fadha reethi pareeeh reethi pareeeh
Jannbu thikoathaafathugaa
*Jannbu thikoathaafathugaa beehilumah hiyyedhemey
$3
Leema libaahaa feyli ekamaa
*Reethikamun mulhi kaunu vidhaalaa kaunu vidhaalaa
Tharithakugaa vaa alikan
*Tharithakugaa vaa alikan gaimey fandukohlaaney`,
},
{
  id: 48,
  name: `Fanriyaluga`,
  genre: 'Nala',
  lyrics: `#M
ފަން ރިޔަލުގާ މަހަށް ދުއްވާކަށެއް
*އެންމެ ދުވަހަކުވިޔަސް ނުފުރޭނެޔޭ

#1
އަޅުގަނޑޭ އެކަނި މިހިރީ ކޮސްވެފާ
*ފަޅުވެރިންކޮޅު ތިބީ ބައިބައި ވެފާ
ފަޅުތެރޭގާ މިއޮވެ ، ފަޅުތެރޭގާ މިއޮވެ ފެހި ބޯވިޔަސް
*ފަޅުމަތީގާ ތިބެން މަނުދާނަމޭ

#2
އަތް ހަލާކުވެ ދަނީ މިރިޔާ ނަގާ
*ވަތް ވަތުން އުނގުރި ލުއްސާ ދިޔަ ހަލާ
ބަތް ތަގަރިފަޅި ހިފައިގެން ބަތް ތަގަރިފަޅި ހިފައިގެން ދުއްވާކަށެއް
*އެންމެ ދުވަހަކު ވިޔަސް ނުފުރޭ ނެޔޭ`,

  englishLyrics: `#M
Fan riyalugaa mahah dhuhvaakasheh
*Ennme dhuvahakuviyas nufureyneyey
#1
Alhugandey ekani mihiree kosvefaa
*Falhuverinnkolhu thibee baibai vefaa
Falhuthereygaa miove falhuthereygaa miove fehi boaviyas
*Falhumatheegaa thiben manudhaanamey
#2
Ayy halaakuve dhanee miriyaa nagaa
*Vayy vathun unguri luhsaa dhiya halaa
Bayy thagarifalhi hifaigen bayy thagarifalhi hifaigen dhuhvaakasheh
*Ennme dhuvahaku viyas nufurey neyey`,
},
{
  id: 49,
  name: `Farikohli`,
  genre: 'Kaasi',
  lyrics: `#M
ފަރިކޮއްލީމާތައް ނޫރާނީ
*ފަތިހުގެ އަލިން

#1
އެކިއެކި ކިރުދޫނިތަކާ
*ދުރުދުރުގައި ހޯރައަޅާ
އެކިރާގުން މިކިޔާ އިއްވާލީ
*ފަތިހުގެ އަލިން

-
$M
އާދެ ހިނގާދާން އުދުހިލާ
*ދޫނިހިފާދާން ވިލާތަކުތެރޭ

$1
އޭރުއެކީ ވަލުތެރޭގައި
*ގޮވާއަޑު އިވޭހޭ
ދާންވީތާ ތުނޑި މައްޗައް
*ދާންވީތާ ތުނޑި މައްޗައް
ދާން އުދުހިލާ ދޫނިހިފާދާން ވިލާތަކުތެރޭ
*ދާން އުދުހިލާ ދޫނިހިފާދާން ވިލާތަކުތެރޭ

#N
*ހޭޅިތެރޭންއިވޭ ގޮވާ
ތޭރަވާ
ކުކުޅުހާ
ދޫނިތައް`,

  englishLyrics: `#M
Farikohleemaathah nooraanee
*Fathihuge alin
#1
Ekieki kirudhoonithakaa
*Dhurudhurugai hoaraalhaa
Ekiraagun mikiyaa ihvaalee
*Fathihuge alin
-
$M
Aadhe hingaadhaan udhuhilaa
*Dhoonihifaadhaan vilaathakutherey
$1
Eyruekee valuthereygai
*Govaaadu iveyhey
Dhaannveethaa thundi mahchah
*Dhaannveethaa thundi mahchah
Dhaan udhuhilaa dhoonihifaadhaan vilaathakutherey
*Dhaan udhuhilaa dhoonihifaadhaan vilaathakutherey
$2
*Heylhithereynnivey govaa
Theyravaa
Kukulhuhaa
Dhoonithah`,
},
{
  id: 50,
  name: `Fathihuge Finikan`,
  genre: 'Kaasi',
  lyrics: `#M
ފަތިހުގެ ފިނިކަންމަތީ
*ކަޅު ރަތްކުލަ ހުރީމާ
ފަރިވެއްޖެ ބަލާލުމަށް
*އުދުހުނުހާ ލޭކޮކާ

#1
ހެނދުނާއި ހަވީރާ
*ބޮސްދޭނަމެ ހިތުލާ
މެދުވެރި ކޮއް ނޫނީޔާ
*ފޮނުވީމި އުފާވާ
ތެދުވެރި ތިޔަ އާރީންނާ
*ވައިރޯޅިދިޔައިމާ
އެދުވަހުގެ ހަބަރްގާ
*ހޯދީމެ ގުޅާލާ

#2
ގުލްޝަނުގެ ތެރޭގާ
*ފެނިފާވެ ދިވާނާ
ބުލްބުލްގެ އެހީގާ
*ކޮއްލީމެ ސަމާސާ
ކުރު ރީތިވި ފިޔައިގާ
*ކަރުގަނޑުގެ ވަށާލާ
ހުދު ނޫގެ އެހީގާ
*ތޮޅެލީމެ އަރާމުގާ

#3
ހަނދުވަރުގެ ތެރޭގާ
*ނަށަމުންދާ ތަރިތައް
ލަދުވެތިވީ ދޯދިން
*އަލިކޮއްލި ބަލާލުން
ޝަބުނަމުގެ މުތީތައް
*އޮހޮރޭ ހިނދު ފަރިކަން
އަޑު ރީތިވި މާބުރު
*ހެކިވާނެ ޔަގީނުން

-
$M
ފެހި ފެހި އާޒާދީ
*ނޫރޭ އާވާނީ

$1
އުންމަތް ވެގެން ޖަރީ ޤައުމީ ރޫޙުން
*ހަމްދަން ވެވޭނެހެން އަޚުނާ އުޚުތުން
ދެއްވެވި ޢިރުޝާދީ
*ނޫރޭ އާވާނީ

$2
ވަޠަނުގެ ޝަހީދުންނާ ޤައުމީ ބަޠަލުން
*އަރިހަށް ވެދުންވެވޭ ދަސްތާ ގަތަމުން
ފަރިވާތީ ވާދީ
*ނޫރޭ އާވާނީ

$3
ޤައުމުގެ ރިޔާސަތަށް ޝުކުރުން އުފެދޭ
*ރައުނަޤު ޢިބާރަތުން ބަރުތީލަ ވެވޭ
ޝަރަފުންދޭ ޔާދީ
*ނޫރޭ އާވާނީ`,

  englishLyrics: `#M
Fathihuge finikannmathee
*Kalhu rayykula hureemaa
Farivehje balaalumah
*Udhuhunuhaa leykokaa
#1
Hendhunaai haveeraa
*Bosdheyname hithulaa
Medhuveri koh nooneeyaa
*Fonuveemi ufaavaa
Thedhuveri thiya aareennaa
*Vairoalhidhiyaimaa
Edhuvahuge habargaa
*Hoadheeme gulhaalaa
#2
Gulshanuge thereygaa
*Fenifaave dhivaanaa
Bulbulge eheegaa
*Kohleeme samaasaa
Kuru reethivi fiyaigaa
*Karuganduge vashaalaa
Hudhu nooge eheegaa
*Tholheleeme araamugaa
#3
Handhuvaruge thereygaa
*Nashamunndhaa tharithah
Ladhuvethivee dhoadhin
*Alikohli balaalun
Shabunamuge mutheethah
*Ohorey hindhu farikan
Adu reethivi maaburu
*Hekivaane yageenun
-
$M
Fehi fehi aazaadhee
*Noorey aavaanee
$1
Unnmayy vegen jaree qaumee roohun
*Hamdhan veveynehen akhunaa ukhuthun
Dhehvevi iirushaadhee
*Noorey aavaanee
$2
Vathanuge shaheedhunnaa qaumee bathalun
*Arihah vedhunnvevey dhasthaa gathamun
Farivaathee vaadhee
*Noorey aavaanee
$3
Qaumuge riyaasathah shukurun ufedhey
*Raunaqu iibaarathun barutheela vevey
Sharafunndhey yaadhee
*Noorey aavaanee`,
},
{
  id: 51,
  name: `Fathihuge Mudhimaa`,
  genre: 'Nala',
  lyrics: `#M
ފަތިހުގެ މުދިމާ ބަންގި ދިނީމާ
*ހާލާ ކާޅުގެ އަޑުއިވުނީމާ
ދޫކޮށް ނިދި އިނބަމެން ތެދުވަންޔާ
*ދަރިވަރުނޭ ގިނަސާބަހޭ ދަރިވަރުނޭ ގިނަސާބަހޭ

#1
އުނގުމުން އުދަވާ އެހެރަ އުޖާލާ
*އުނގުމުން އުދަވާ އެހެރަ އުޖާލާ
ތަރިތައް ދައްކާ ރީތި މިސާލާ
*ތަރިތައް ދައްކާ ރީތި މިސާލާ
ނުވަދިހަ ދެވަނަ އަހަރުން ފަވާލާ
*ރީއްޗޭވާ ނަލަ ސާބަހޭ ރީއްޗޭވާ ނަލަ ސާބަހޭ

#2
ކާބަފައިންނާ އުސްތާޒުންނާ
*ކާބަފައިންނާ އުސްތާޒުންނާ
ކާބަފައިންގެ ހަނދާންތައް ދިރުވާ
*ކާބަފައިންގެ ހަނދާންތައް ދިރުވާ
ކާކުތަ ފޮރުވީ ކާކުތަ ވަޅުލީ
*ކާކު ނުހޯދާ ކާކުތަ ފޮރުވީ ކާކު ނުހޯދާ ކާކުތަ ފޮރުވީ`,

  englishLyrics: `#M
Fathihuge mudhimaa banngi dhineemaa
*Haalaa kaalhuge aduivuneemaa
Dhookoh nidhi inbamen thedhuvannyaa
*Dharivaruney ginasaabahey dharivaruney ginasaabahey
#1
Ungumun udhavaa ehera ujaalaa
*Ungumun udhavaa ehera ujaalaa
Tharithah dhahkaa reethi misaalaa
*Tharithah dhahkaa reethi misaalaa
Nuvadhiha dhevana aharun favaalaa
*Reehcheyvaa nala saabahey reehcheyvaa nala saabahey
#2
Kaabafainnaa usthaazunnaa
*Kaabafainnaa usthaazunnaa
Kaabafainnge handhaannthah dhiruvaa
*Kaabafainnge handhaannthah dhiruvaa
Kaakutha foruvee kaakutha valhulee
*Kaaku nuhoadhaa kaakutha foruvee kaaku nuhoadhaa kaakutha foruvee`,
},
{
  id: 52,
  name: `Finireyge Fathihey`,
  genre: 'Taki',
  lyrics: `#M
ފިނިރޭގެ ފަތިހޭ ހުރީހޭ ބަލަން
*އަރާމާއި މީރު ވަނީ މަޙުރޫމު
ލޯބީގެ ހަދިޔާ އޮތީއޭ ފަހުން
*ލިބޭނޭ އަރާމު ނުވޭ މަޙުރޫމު

#1
ކިތައްރޭ ވެލީމާ މެއަށްފިނިވަނީ
*ކިޔައިދޭނަމޭ ކީއްވެހޭ ދެރަވަނީ
ރޭގެ ގަޑިއޭ ދަނީ މޫނު އަލިކަންވަނީ
*ވިންދު ހުރިހާ ހިނދަކު ލޭ ހިލޭ ދޭނަމޭ
*ލިބޭނޭ އަރާމު ނުވޭ މަޙުރޫމު

#2
އޭ މީ ނިހާއީ
*ނިހާއީ
މިހިތުގެ ޝުއޫރޭ ނޭނގޭ
*ނޭނގޭ
ތީ ލޯބީގާ
*ފީނަންވީމާ ދަނީ ބާރޭ
ކީއްވެހޭ ލޯމަރާލީ އުފާވޭ ބުނޭ
*މީ ޖަވާބޭ ކަރުނަ ފޫދި ލޮލުގާ ވަނީ
*އަރާމާއި މީރު ވަނީ މަޙުރޫމު

#3
މިރޭ ދެންދަމާހޭ ހަނދޭ އޮއްސެނީ
*ދިޔައިމާ ނިދޭނޭހެ ފޫއްސޭވަނީ
އަލިވިލޭތީ ބިރުން މޭ އެ ރޫރޫލަނީ
*ހިތްއެދޭކަން އެދޭތީދެން މިރޭ ދާންވަނީ
*ލިބޭނޭ އަރާމު ނުވޭ މަޙުރޫމު`,

  englishLyrics: `#M
Finireyge fathihey hureehey balan
*Araamaai meeru vanee mahuroomu
Loabeege hadhiyaa otheeey fahun
*Libeyney araamu nuvey mahuroomu
#1
Kithahrey veleemaa meyah finivanee
*Kiyaidheynamey keehvehey dheravanee
Reyge gadiey dhanee moonu alikannvanee
*Vinndhu hurihaa hindhaku ley hiley dheynamey
*Libeyney araamu nuvey mahuroomu
#2
Eyey mee nihaaee
*Nihaaee
Mihithuge shuoorey neyngey
*Neyngey
Thee loabeegaa
*Feenannveemaa dhanee baarey
Keehvehey loamaraalee ufaavey buney
*Mee javaabey karuna foodhi lolugaa vanee
*Araamaai meeru vanee mahuroomu
#3
Mirey dhenn dhamaahey handhey ohsenee
*Dhiyaimaa nidheyneyhe foohseyvanee
Alivileythee birun mey e rooroolanee
*Hiyy edheykan edheytheedhen mirey dhaannvanee
*Libeyney araamu nuvey mahuroomu`,
},
{
  id: 53,
  name: `Furadhan`,
  genre: 'Thinberu',
  lyrics: `#M
ފުރަދަން ދެބައިވެ އަނދިރިވީ
*ފެންތިކި އަޑަށް މަ ސިހިއޮތީ
ގަނޑުވަރުތެރޭގަ އެކަނިވީ
*ކަނުއަނދިރިވީމަ ބިރުގަތީ
ފަރާނިމަވެ ހެންދުތީ
*ނާމާންކަމުން ގުޑިނުލީ

#1
ގަދަ އަޑުތަކެއް އިވެންފެށީ
*ރަނގަޅަށް ބަލަން ނުކެރި އޮތީ
ގަމަކަށް ސިކުނޑިމާ ހުއްޓުނީ
*ރަނގަޅަށް ލޮލަށް މާފެންނަނީ
މުޅި އެދުވަށާ ހިނގަންފެށީ
*ގުޑިލަންނުކެރި ބަލަންއޮތީ

#2
ރުހޭކަމަށް ޔަގީން ވަނީ
*ހޫރެއް ފަދަތަ އަލިހުރީ
އިރުގަނޑަކުހުރެ ގެއްލުނީ
*ހިނދުކޮޅަކު ނެތި ފެންނަނީ
ހިނދުކޮޅަކު ނެތި ފެންނަނީ
*ގަދަރަތް ކުލައިގަ ވިދަވިދާ ބެރުބެއްދި މަލެއްގެ ސޫރަވާ
ގަދަރަތް ކުލައިގަ ވިދަވިދާ
*ބެރުބެއްދި މަލެއްގެ ސޫރަވާ

#3
އިބަ الله އަށް ރޯލަމުން އިބަ الله އަށް ރޯލަމުން
*ކިޔަންފަށާ ހިތާދުލުން
ނެތޭރަނގަޅު މި ސިކުނޑިއަށް
*ފެންތިއަޑަށް ނުސިހި ވުމަށް`,

  englishLyrics: `#M
Furadhan dhebaive andhirivee
*Fennthiki adah ma sihiothee
Ganduvaruthereyga ekanivee
*Kanuandhiriveema birugathee
Faraanimave hendhuthee
*Naamaannkamun gudinulee
#1
Gadha aduthakeh ivennfeshee
*Rangalhah balan nukeri othee
Gamakah sikundimaa huhtunee
*Rangalhah lolah maafennanee
Mulhi endhuvashaa hingannfeshee
*Gudilannukeri balannothee
#2
Ruheykamah yageen vanee
*Hooreh fadhatha alihuree
Irugandakuhure gehlunee
*Hindhukolhaku nethi fennanee
Hindhukolhaku nethi fennanee
*Gadharayy kulaiga vidhavidhaa berubehdhi malehge sooravaa
Gadharayy kulaiga vidhavidhaa
*Berubehdhi malehge sooravaa
#3
Iba الله ah roalamun iba الله ah roalamun
*Kiyannfashaa hithaadhulun
Netheyrangalhu mi sikundiah
*Fennthiadah nusihi vumah`,
},
{
  id: 54,
  name: `Furusathu Dheynan`,
  genre: 'Kaasi',
  lyrics: `#M
ފުރުސަތުދޭނަން ހުންނާށޭ
*ހުންނާށޭ ހަމަ ހުންނާށޭ
ފޯދުނު އިރަކުން ބިންނާށޭ
*ގެންދާށޭ ހަމަ ގެންދާށޭ
ކެތްނުވެވޭހާ ވަރުވަނީ
*ތިޔަ ރީތި ޒުވާންކަން ގެއްލެނީ

#1
ދުރުދުރުގާ އަދު ތިބެވޭހޭ ތިޔަހިޔާލް
*ދެންޔާދޭށޭ ލޭގަހިނގާހާ ޕިޔާރް
އާދޭ ހެމުން
*ދެން ޖައްވުގާ
ލޯބިން އަލުން
*ދައްކައިދެމުން
ބަލަ ނޭނގި ސާމާސާ ވިހަވަނީ
*ތިޔަ ރީތި ޒުވާންކަން ގެއްލެނީ

#2
ހާދަ މައެދެމޭ ބޭޒާރެއް ނުމެވާން
*ނުވެވޭތޯ ލޯބީގާ ނުވެ ބަދުނާމް
އާދޭ ހެމުން
*ދެން ޖައްވުގާ
ލޯބިން އަލުން
*ދައްކައިދެމުން
ބަލަ ނޭނގި ސާމާސާ ވިހަވަނީ
*ތިޔަ ރީތި ޒުވާންކަން ގެއްލެނީ

-
$M
މުށުން ދެމިގެން ފިޔޭ އަތަށް ފުއްކޮޅު ދީފާ
*މަގޭ ތުނި ރަންކޮކާ ދެލޯފަދަ ރަންކޮކާ
މުށުން ބޭނުން ވެގެން މަށައް އޮޅުކުރިފަހުން
*އަތުން ދޫވީކޮކާ މަގޭ ތުނި ރަންކޮކާ

$1
ފުރުމާލާ ދެފިޔައިގާ ބޮސްދީ ހެދިން
*އިރު އިރުކޮޅުން ހާދަ ޗާލޭބުނިން
ދިރުން ލިބިފާ ވިޔަސް ހިތައް އަސަރެއް ނުކޮށް
*ފިލީ ތުނި ރަންކޮކާ ދެލޯފަދަ ރަންކޮކާ

$2
ފޮނިބޯންދީ ބަނޑުހައިކަން ފިލުވައި ދިނިން
*ފޮނިކަން ގަޔާވާނެ ހޯދައި ދިނިން
ފިނިން ރައްކާކުރަން އުނގައްލާ ފޮރުވިޔަސް
*ފިލީ ތުނި ރަންކޮކާ މަލެއްފަދަ ރަންކޮކާ

$3
ރާނީ ކަމައް ހިތުގެ އަންގައި ދިނިން
*ލޯބީގެ ގަނޑުވަރު ބިނާ ކޮއްދިނިން
އެހެން ނަމަވެސް ފިލީ އެކަން ވިސްނާ ނުލާ
*މާގޭ ތުނި ރަން ކޮޅާ މުތެއްފަދަ ރަންކޮކާ`,

  englishLyrics: `#M
Furusathudheynan hunnaashey
*Hunnaashey hama hunnaashey
Foadhunu irakun binnaashey
*Genndhaashey hama genndhaashey
Keyynuveveyhaa varuvanee
*Thiya reethi zuvaannkan gehlenee
#1
Dhurudhurugaa adhu thibeveyhey thiyahiyaal
*Dhennyaadheyshey leygahingaahaa piyaar
Aadhey hemun
*Dhen jahvugaa
Loabin alun
*Dhahkaidhemun
Bala neyngi saamaasaa vihavanee
*Thiya reethi zuvaannkan gehlenee
#2
Haadha maedhemey beyzaareh numevaan
*Nuveveythoa loabeegaa nuve badhunaam
Aadhey hemun
*Dhen jahvugaa
Loabin alun
*Dhahkaidhemun
Bala neyngi saamaasaa vihavanee
*Thiya reethi zuvaannkan gehlenee
-
$M
Mushun dhemigen fiyey athah fuhkolhu dheefaa
*Magey thuni rannkokaa dheloafadha rannkokaa
Mushun beynun vegen mashah olhukurifahun
*Athun dhooveekokaa magey thuni rannkokaa
$1
Firumaalaa dhefiyaigaa bosdhee hedhin
*Iru irukolhun haadha chaaleybunin
Dhirun libifaa viyas hithah asareh nukoh
*Filee thuni rannkokaa dheloafadha rannkokaa
$2
Foniboanndhee banduhaikan filuvai dhinin
*Fonikan gayaavaane hoadhai dhinin
Finin rahkaakuran ungahlaa foruviyas
*Filee thuni rannkokaa malehfadha rannkokaa
$3
Raanee kamah hithuge anngai dhinin
*Loabeege ganduvaru binaa kohdhinin
Ehen namaves filee ekan visnaa nulaa
*Maagey thuni ran kolhaa muthehfadha rannkokaa`,
},
{
  id: 55,
  name: `Gaidhuru Nukiyaa`,
  genre: 'Nala',
  lyrics: `#M
ގައިދުރު ނުކިޔާ އެއްލީމާ ގާކޮޅު
ނުފެނި ކޮޅާކޮޅު ދިޔަގޮތަކުން މޮޅު މީޒާންވެ ގާކޮޅު

#1
އިޝްގުގަ ވަރުލީ ވެއްޓި ހަތާގަނޑު
*ދިއުމުން ކުޅަނދުރު އަންނާނޭ ރުޅިގަނޑު
އިޝްގުގެ ކަޅު ކަޅި ހޯދާ ޖަހަންކަށި
*މިސްރާބުން ކުޅަދުރު ހިފާނޭ ދެކަންކަށި
*ވިސްނާށޭ ކުޅަދުރު ޖަހާފާވެޔޭ ކަށި

#2
ކަށިކެޔޮ ފަލާ ދޮން ދުބުރިފަލު ތެރޭގާ
*ހަށިދުރަ ހަދާއިރުގަ އަހިފަލު ތެރޭގާ
ކަށިހެރި ނުދާ ދޮން މަގޫފަލު ތެރޭގާ
*ކަށި ނެތުނު ދަކަނދާއި އުނިފަލުތެރޭގާ
ކަށި ނެތުނު ދަކަނދާއި އުނިފަލުތެރޭގާ
*ވަށި އެންގަނޑެއްހެން ހެދޭ ބޮޑު ހަސަދަކާ

#3
ބުރައެއް ކަމަށްނުވެ ކަނޑުގެ ރާޅުފޮނުލާ
*ދުރައެއް ހަދަން ފެއްޓިހިނދު ގޮސް އުދުހިލާ
ފުރަމެންދަމާ އިރުގެ އަލިކަން ނަގާލާ
*ހުރަހައް އެޅޭދުއްތުރާތައް އުކާލާ
ހުރަހައް އެޅޭ ދުއްތުރާތައް އުކާލާ
*ކުރަމުން އުފާހެދި މިވަރު ބޮޑު ހަތަލަކަށް`,

  englishLyrics: `#M
Gaidhuru nukiyaa ehleemaa gaakolhu
*Nufeni kolhaakolhu dhiyagothakun molhu meezaannve gaakolhu
#1
Ishguga varulee vehti hathaagandu
*Dhiumun kulhandhuru annaaney rulhigandu
Ishguge kalhu kalhi hoadhaa jahannkashi
*Misraabun kulhadhuru hifaaney dhekannkashi
*Visnaashey kulhadhuru jahaafaaveyey kashi
#2
Kashikeyo falaa dhon dhuburifalu thereygaa
*Hashidhura hadhaairuga ahifalu thereygaa
Kashiheri nudhaa dhon magoofalu thereygaa
*Kashi nethunu dhakandhaai unifaluthereygaa
Kashi nethunu dhakandhaai unifaluthereygaa
*Vashi enngandehhen hedhey bodu hasadhakaa
#3
Buraeh kamahnuve kanduge raalhufonulaa
*Dhuraeh hadhan fehtihindhu gos udhuhilaa
Furamenndhamaa iruge alikan nagaalaa
*Hurahah elhey dhuhthuraathah ukaalaa
Hurahah elhey dhuhthuraathah ukaalaa
*Kuramun ufaahedhi mivaru bodu hathalakah`,
},
{
  id: 56,
  name: `Genuvi Manzaru`,
  genre: 'Nala',
  lyrics: `#M
ގެނުވި މަންޒަރުގެ ފުރިހަމަ ކަމުން
*ދެވުނުގަދަރެއް ނުއެގުނޭ ނިދީގާ
ފެނުނު ނާޒުކުއެ ހަރަކާތް ތަކުން
*ވީއިރެއް ނޭގުނެ މުޅި ނިދިގާ

#1
އަތުގުޅައިގެން ހިނގާލަން ދަނީ
*ދަންވަރުގެ ހަމަހިމޭންކަން މާތީ
މަޑުމަޑުން ގޮސް އެދޮންވެލި ތުނޑީގާ
*މަޑުމިކޮއްލީތި އަހަރެން ދުށީމޭ

#2
ހޭލެވިއްޖޭ އުފާވެރިނިދިން
*ހޭލެވުނުއިރު އޮތީތަންމާތީ
ހޭލެވުނުވަގުތު ފޯނުން ގުޅާފާ
*ފެނުނު މަންޒަރު މަސިފަ ކޮއްދިނިމޭ

#3
ހަނދުގެ ހަނދުވަރު ޖަރީ ކުރުވިޔޭ
*ހަނދުގެ އަލިކަން އެކަނި ފިލުވައޭ
އަތުގަބާރަށް އަނގޮޓި އިންތަނެއްދެން
*އަދު މަނުދެކެން ޔަގީނޭ ނިދީގާ

#4
އޮވެ ލަދުން މަޑުމަޑުން އުނގުމަތީ
*ބޯއަޅާލައިގެނޭ އޮވެވުނީ
އުރެދުމެއް ހަމަނުވާނަން ކަލާޔަށް
*ހަނދުގެ ހަނދުވަރު މިގަންދިބުނީމޭ`,

  englishLyrics: `#M
Genuvi mannzaruge furihama kamun
*Dhevunugadhareh nueguney nidheegaa
Fenunu naazukue harakaayy thakun
*Veeireh neygune mulhi nidhigaa
#1
Athugulhaigen hingaalan dhanee
*Dhannvaruge hamahimeynnkan maathee
Madumadun gos edhonnveli thundeegaa
*Madumikohleethi aharen dhusheemey
#2
Heylevihjey ufaaverinidhin
*Heylevunuiru otheethannmaathee
Heylevunuvaguthu foanun gulhaafaa
*Fenunu mannzaru masifa kohdhinimey
#3
Handhuge handhuvaru jaree kuruviyey
*Handhuge alikan ekani filuvaey
Athugabaarah angoti innthanehdhen
*Adhu manudheken yageeney nidheegaa
#4
Ove ladhun madumadun ungumathee
*Boaalhaalaigeney ovevunee
Uredhumeh hamanuvaanan kalaayah
*Handhuge handhuvaru miganndhibuneemey`,
},
{
  id: 57,
  name: `Guley Insaaf`,
  genre: 'Kaasi',
  lyrics: `#M
ގޫލޭ އިންސާފު ރޫހޭ
*ފޮޅުވައިދޭހާ ޖޯށޭ
ރަންގޭ ރަބީއުދޭތޯ
*ހިތްމަތުގައި ޖާނުސީދާ ވަރުވަރު ދޭހާ ނަޔާ

#1
ދިރުވާ ބަހާރީ
*ނާޒުންދޭ ޖާރީ
ދެގެރޭ ނޫރަންގުލޭލާ
*ވަސްލީނަން ހޯދޭހާ
އުދުހޭބުލްބުލް އުފާވާ
*ހިތްމަތުގައި ޖާނުސީދާ ވަރުވަރު ދޭހާ ނަޔާ

#2
ގެނުވާ ހަޒާރުން
*ގުލްޝަން ތެރޭގާ
އުދުހޭ މުނިޔާ ކޮކާލާ
*ވަސްދޭހާ މީރުމަލުގައި
އުދުހޭބުލްބުލް އުފާވާ
*ހިތްމަތުގައި ޖާނުސީދާ ވަރުވަރު ދޭހާ ނަޔާ

-
$M
ފަރިވާ އުފާވެދާ މަލޭތާ
*ކޯޅީގާ ނޫރާނީ ފޯދޭނެޔޭ

$1
ގުލޭޒާރުންނޭ އަވާއެއީ
*ރޫހޭދިރޭ

$2
ދެކޭ ފިނިރޯޅި ވައިގައިއެއީ
*މޫސުންދިރޭ`,

  englishLyrics: `#M
Gooley innsaafu roohey
*Folhuvaidheyhaa joashey
Ranngey rabeeudheythoa
*Hiyymathugai jaanuseedhaa varuvaru dheyhaa nayaa
#1
Dhiruvaa bahaaree
*Naazunndhey jaaree
Dhegerey noorannguleylaa
*Vasleenan hoadheyhaa
Udhuhey bulbul ufaavaa
*Hiyymathugai jaanuseedhaa varuvaru dheyhaa nayaa
#2
Genuvaa hazaarun
*Gulshan thereygaa
Udhuhey muniyaa kokaalaa
*Vasdheyhaa meerumalugai
Udhuheybulbul ufaavaa
*Hiyymathugai jaanuseedhaa varuvaru dheyhaa nayaa
-
$M
Farivaa ufaavedhaa maleythaa
*Koalheegaa nooraanee foadheyneyey
$1
Guleyzaarunney aavaaeee
*Rooheydhirey
$2
Dhekey finiroalhi vaigaieee
*Moosunndhirey`,
},
{
  id: 58,
  name: `Baburu Jinni`,
  genre: 'Nala',
  lyrics: `#M
ނިކުމޭ ދުފާލަން
*ބަބުރު ޖިންނީ
ނޫނީ މެޓާކާން
*ބަބުރު ޖިންނީ
ޗިޕްސް ދަޅު ދޭނަން ކަނޑައަފާ
*ބަބުރު ޖިންނީ
ޗަންކީ ޗޮކު ވެސް އަޅާފާ
*ބަބުރު ޖިންނީ

#1
*ބަބުރާ
ގަރުދިޔަލައިގެން
ބަތްޕެން ބޯލަން
ދެން ނުކުމޭ ނުކުމޭ
ދެން އާދޭ އާދޭ

#2
ދެން ނޯންނާށެ އަންނާށެ އަވަހަށް ދެން
*ބަބުރު ޖިންނީ ބަބުރު ޖިންނީ ބަބުރު ޖިންނީއޭ`, 
      englishLyrics: `#M
Nikumey dhufaalan
*Baburu jinnee
Noonee metaakaan
*Baburu jinnee
Chips dhalhu dheynan kandaafaa
*Baburu jinnee
Chankee choku ves alhaafaa
*Baburu jinnee
#1
*Baburaa
Garudhiyalaigen
Bayypen boalan
Dhen nukumey nukumey
Dhen aadhey aadhey
#2
Dhen noannaashe annaashe avahah dhen
*Baburu jinnee baburu jinnee baburu jinneeey`,
},
{
  id: 59,
  name: `Hoadheema Chaalu`,
  genre: 'Nala',
  lyrics: `#M
ހޯދީމާ ޗާލު ހެ ފަރި ގުލްޒާރު
*ހުންނާނީ ބަލަން މިރޭ މެންދަން ވިޔަސް މިހާރު
ކުރާތީ ހިތްއުފާ ބުނާހިތްވޭ މިހާރު
*ތީއޭ މިހިތައް އުފާދޭ ލައްޒަތޭ ބާހާރު

#1
މަލުގެ ތިރަހަ ލިބިދާނޭހޭ
*ދެވިދާނޭހޭ
އަދަދު ނުވާހާ އަނިޔާ ތިޔަދެނީ
*އެ އުފާ ދީފާ
އަނިޔާނުދީ
*ހެއް ހޭ
އަނިޔާ ނުދީ ތިޔަ ލައްޒަތު ދޭށޭ ލޯބީގާ ބަހާރު
*ހޯދީމާ ޗާލު ހެ ފަރި ގުލްޒާރު ހުންނާނީ ބަލަން މިރޭ މެންދަންވިޔަސް މިހާރު

#2
ނިދުނަސް މަށަށް މިހާރު ހަމަ ފެންނަނީ ތިޔަޗާލު
*ހޯ އޯއޯއޯ
ނިދުނަސް މަށަށް މިހާރު ހަމަ ފެންނަނީ ތިޔަޗާލު
*ނާޒުތީމަލޭ ނާޒުތީމަލޭ
އަދުޖާނުދީ
*ހެއް ހޭ
އަދުޖާނުދި ދެން ބިނދެލަން ބޭނުންވާ މާތީ މިހާރު
*ހޯދީމާ ޗާލު ހެ ފަރި ގުލްޒާރު ހުންނާނީ ބަލަން މިރޭ މެންދަންވިޔަސް މިހާރު

#3
ނުލިބި ތިރަހަ ހަމަ ރޯންވިހޭ
*މަރުވާން ވިހޭ
މިތުރުގެ ހަނދުމައިގަ ރޯނީހޭ
*ނިމިދާނީހޭ
ތި އަރާމުދީ
*ހެއް ހޭ
ތި އަރާމުދީ ދެން ފިނިކަން ދޭށޭ މިހިތައް ހަމަމިހާރު
*ހޯދީމާ ޗާލު ހެ ފަރި ގުލްޒާރު ހުންނާނީ ބަލަން މިރޭ މެންދަންވިޔަސް މިހާރު`,

  englishLyrics: `#M
Hoadheemaa chaal he fari gulzaaru
*Hunnaanee balan mirey menndhan viyas mihaaru
Kuraathee hiyyufaa bunaahiyyvey mihaaru
*Theeey mihithah ufaadhey lahzathey baahaar
#1
Maluge thiraha libidhaaneyhey
*Dhevidhaaneyhey
Adhadhu nuvaahaa aniyaa thiyadhenee
*E ufaa dheefaa
Aniyaanudhee
*Heh hey
Aniyaa nudhee thiya lahzathu dheyshey loabeegaa bahaar
*Hoadheemaa chaal he fari gulzaaru hunnaanee balan mirey menndhannviyas mihaaru
#2
Nidhunas mashah mihaaru hama fennanee thiyachaal
*Hoa oaoaoa
Nidhunas mashah mihaaru hama fennanee thiyachaal
*Naazutheemaley naazutheemaley
Adhujaanudhee
*Heh hey
Adhujaanudhi dhen bindhelan beynunnvaa maathee mihaaru
*Hoadheemaa chaal he fari gulzaaru hunnaanee balan mirey menndhannviyas mihaaru
#3
Nulibi thiraha hama roannvihey
*Maruvaan vihey
Mithuruge handhumaiga roaneehey
*Nimidhaaneehey
Thi araamudhee
*Heh hey
Thi araamudhee dhen finikan dheyshey mihithah hamamihaaru
*Hoadheemaa chaal he fari gulzaaru hunnaanee balan mirey menndhannviyas mihaaru`,
},
{
  id: 60,
  name: `Hoadheyey`,
  genre: 'Nala',
  lyrics: `#M
ހޯދެޔޭ އެދި ހިތުގާވާތީ ރޯވެ ހިތް އަނދާތީ
*ފުރުސަތު ދޭނުތޯއޭ އިޝްގީ މިރޭ
އާނއެކޭ ބުނެ ތިޔަފަރިރާނީ ޖަވާބެއް ނުދޭތީ
*ވޭނާ ހޫނުގެނުވާ މިއާހުން ގުނޭ

#1
ޖަވާހިރުން ލޯދިއްލާލީމާ ވިންދުޖަހާ މޭރޫޅޭނޭ
*ދީވާނާވާ ޗުލޫކަންވާ ޖާދޫ ދިރުވާ ތީމޫނޭ
ޖާޒުބީ ސިހުރުވާ ކަތި ނަޒަރުން އާވާރާވޭތާ
*ހޯދެޔޭ ތިހިތުގާވާތީ ރޯވެ ހިތް އަނދާތީ ފުރުސަތު ދޭނުތޯއޭ އިޝްގީ މިރޭ

#2
ނަޔާމަލޭތީ ހޭލަންވީމާ ޖައްވުން ރާގުޖަހާލާނޭ
*ގަޔާވެ ފިޔަތައް ހުޅުވާލީމާ މަސްތުން ޒާރު ފުރާލާނޭ
ތޫނުތޫނު ކަށިހެރެން މިހެރެނީ ގާތުންތާ އެހިތާ
*ހޯދެޔޭ ތިހިތުގާވާތީ ރޯވެ ހިތް އަނދާތީ ފުރުސަތު ދޭނުތޯއޭ އިޝްގީ މިރޭ

#3
މޫރިތިކަމުގާ މަލަކާއޭތީ ސޫރަޒަމާނައް ކުރަހާނޭ
*ހޫރެކެ ބިނމުގާ ފެނިފާވީތީ ނޫރުގެ ތާޖެއް އަޅުވާނޭ
ކޫރޫކޫރު މިދެހިތުން ދެހިތުގާ އަޅުވަން ބޭނުންތާ
*ހޯދެޔޭ ތިހިތުގާވާތީ ރޯވެ ހިތް އަނދާތީ ފުރުސަތު ދޭނުތޯއޭ އިޝްގީ މިރޭ`,

  englishLyrics: `#M
Hoadheyey edhi hithugaavaathee roave hiyy andhaathee
*Furusathu dheynuthoaey ishgee mirey
Aanekey bune thiyafariraanee javaabeh nudheythee
*Veynaa hoonugenuvaa miaahun guney
#1
Javaahirun loa dhihlaaleemaa vinndhujahaa meyroolheyney
*Dheevaanaavaa chulookannvaa jaadhoo dhiruvaa theemooney
Jaazubee sihuruvaa kathi nazarun aavaaraaveythaa
*Hoadheyey thihithugaavaathee roave hiyy andhaathee furusathu dheynuthoaey ishgee mirey
#2
Nayaamaleythee heylannveemaa jahvun raagujahaalaaney
*Gayaave fiyathah hulhuvaaleemaa masthun zaaru furaalaaney
Thoonuthoonu kashiheren miherenee gaathunnthaa ehithaa
*Hoadheyey thihithugaavaathee roave hiyy andhaathee furusathu dheynuthoaey ishgee mirey
#3
Moorithikamugaa malakaaeythee soorazamaanah kurahaaney
*Hooreke binmugaa fenifaaveethee nooruge thaajeh alhuvaaney
Koorookooru midhehithun dhehithugaa alhuvan beynunnthaa
*Hoadheyey thihithugaavaathee roave hiyy andhaathee furusathu dheynuthoaey ishgee mirey`,
},
{
  id: 61,
  name: `Hoadhima Kularan`,
  genre: 'Kaasi',
  lyrics: `#M
ހޯދިމަ ކުލަރަން ވިދާ ތޯތާ ހުޅަނގުގެ ވައިގާ އުދުހި އެދިޔާ
*ލޯބި ނުވާތީ މަށާ
*ފޫހިވެގެންތާ ދިޔާ

#1
އަތުގާ ހެވިފާ ހިފާލާ މިތުރެއް ކަމުގާވެ އުޅެފާ
*އަތުގާ ހެވިފާ ހިފާލާ މިތުރެއް ކަމުގާވެ އުޅެފާ
އިތުބާރެއްނެތް ކަމަށް މުނިޔާ ހަތުރެއް ކަމުގާ ވެގެން އެދިޔާ
*ލޯބި ނުވާތީ މަށާ

#2
ހިތުގާ އަޅު ޖައްސުވާފާ ކަރުނައިން މިދެލޯ ފުރާފާ
*ހިތުގާ އަޅު ޖައްސުވާފާ ކަރުނައިން މިދެލޯ ފުރާފާ
ހިތުގާ ގިނަ ލައްތަކެއް ޖައްސާ އަތުނުޖެހޭހާ ދުރަށް އެދިޔާ
*ލޯބި ނުވާތީ މަށާ

#3
މުއްސަނދިކަން ނެތި ދިޔައިމާ ދުއްކާންތައް ބަންދުވީމާ
*މުއްސަނދިކަން ނެތި ދިޔައިމާ ދުއްކާންތައް ބަންދުވީމާ
ފުސްމޫނައިގެން ރުޅިން އުޅެފާ މުސްކުޅިކަމުގާ ހަދާފަ ދިޔާ
*ލޯބި ނުވާތީ މަށާ

-
$M
ޗަލިރަނގަރީތޯ
*ހަމާރާ ސާލުނާ

$1
ސާލުހޭ ރަނގަރީތޯ
*ސާލުހޭ ރަނގަރީތޯ
އައްޗާ ރަނގަރީތޯ
*ހަމާރާ ސާލުނާ

#M
ރަތް ހަރުވާޅު ދައްކާލާ ބަލަ އަހަންމަދާ
*ރަތް ހަރުވާޅު ދައްކާލާ
އޭ އަހަންމަދާ
*ރަތް ހަރުވާޅު ދައްކާލާ

#1
އީސާ އަހަންމަދު ތުނބުޅީގާ ދެތިން ނުރަ އިނޯ
*އީސާ އަހަންމަދު ތުނބުޅީގާ ދެތިން ނުރަ އިނޯ
ކާފާ އަހަންމަދު ތުނބުޅީގާ ދެތިން ނުރަ އިނޯ
*ކާފާ އަހަންމަދު ތުނބުޅީގާ ދެތިން ނުރަ އިނޯ
ހަލީމަ ގޮސް ބުނީމަދޯ
*ރަތް ހަރުވާޅު ދައްކާލާ`,

  englishLyrics: `#M
Hoadhima kularan vidhaa thoathaa hulhanguge vaigaa udhuhi edhiyaa
*Loabi nuvaathee mashaa
*Foohivegennthaa dhiyaa
#1
Athugaa hevifaa hifaalaa mithureh kamugaave ulhefaa
*Athugaa hevifaa hifaalaa mithureh kamugaave ulhefaa
Ithubaarehneyy kamah muniyaa hathureh kamugaa vegen edhiyaa
*Loabi nuvaathee mashaa
#2
Hithugaa alhu jahsuvaafaa karunain midheloa furaafaa
*Hithugaa alhu jahsuvaafaa karunain midheloa furaafaa
Hithugaa gina lahthakeh jahsaa athunujeheyhaa dhurah edhiyaa
*Loabi nuvaathee mashaa
#3
Muhsandhikan nethi dhiyaimaa dhuhkaannthah banndhuveemaa
*Muhsandhikan nethi dhiyaimaa dhuhkaannthah banndhuveemaa
Fusmoonaigen rulhin ulhefaa muskulhikamugaa hadhaafa dhiyaa
*Loabi nuvaathee mashaa
-
$M
Chali rangareethoa
*Hamaaraa saalunaa
$1
Saaluhey rangareethoa
*Saaluhey rangareethoa
Ahchaa rangareethoa
*Hamaaraa saalunaa
$2
Rayy haruvaalhu dhahkaalaa bala ahannmadhaa
*Rayy haruvaalhu dhahkaalaa
Ey ahannmadhaa
*Rayy haruvaalhu dhahkaalaa
$3
Eesaa ahannmadhu thunbulheegaa dhethin nura inoa
*Eesaa ahannmadhu thunbulheegaa dhethin nura inoa
Kaafaa ahannmadhu thunbulheegaa dhethin nura inoa
*Kaafaa ahannmadhu thunbulheegaa dhethin nura inoa
Haleema gos buneemadhoa
*Rayy haruvaalhu dhahkaalaa`,
},
{
  id: 62,
  name: `Iru Fenun`,
  genre: 'Kaasi',
  lyrics: `#M
އިރުފެނުން ނަލަ ރީތި ހިއްލާލާ
*އޮޑިފުރާށެ ދުވެލީ އެ ހަރުކޮށްލާ
އެންނަގާ ބަރުކޮށް މިއޮޑިއަށް
*ހަރު ދުވެލި ދައްކާށެ މަސްހޯދަން

#1
ހާމަ ކަނޑުތެރޭ ހޯދަމުން
*ކަނޑު ކަފާލާ އޮޑި ދުއްވާލާ
ފޫހިކަން ނެތި ދިއްލަމުން
*މަހާވޭތޯ ބަލާ ނަގަނީ މަހާވޭތޯ ބަލާ ނަގަނީ

#2
ކެޔޮޅުބޭ ހުރެ ހަރުއަޑުން
*ފަޅުވެރިންނަށް އަންގާލައްޕޭ
އައިނެކޭ އޮވެ ކުރިމަތީ
*ރާޅު ފޮނުލާ ތަޅާނަގަނީ ރާޅު ފޮނުލާ ތަޅާނަގަނީ

#3
އިރުމެދުން އަލި ކޮއްލުމުން
*ގަދަ އަވީގާ ހިތްވަރު ލާފާ
އައިން ތެރޭގާ ފަލަ ގޮދާ
*ކުރުދޮށީގާ ތަޅާނަގަނީ ކުރުދޮށީގާ ތަޅާނަގަނީ
-
$M
ތެޔޮބާނިލާ މުޅި ކަނޑުތެރޭން
*ދުއްވާނަގާ މެކުހައްޖަހާ
ހޯރައަޅާ ބޯކޮށް ދޫނިއަރާ ފައިބާ
*މަސްދަނޑިއެކޭމީ ކެޔޮޅުބޭ މަސްއައިނެކޭ މީ ކެޔޮޅުބޭ

$1
ބޮޑުރާޅު ތެރެއިން ފޮނުގަނޑު ކަފާލާ
*މަސްއައިން އެކީގާ އޮޑިއަށް ހިފާލާ
ހުރިބާރުލާ ތިބެ އެންމެން އެކީ
*ހުރިބާރުލާ ތިބެ އެންމެން އެކީ
*މަސްދަނޑިއެކޭމީ ކެޔޮޅުބޭ މަސްއައިނެކޭ މީ ކެޔޮޅުބޭ

$2
އެންވަށިފުރާ ނެގި އެންތައް އުކާލާ
*މަސްއައިން ތެރޭގާ އަންބާ ކިޔާލާ
އަރުވާޖަހާ ތިބެ އެންމެން އެކީ
*އަރުވާޖަހާ ތިބެ އެންމެން އެކީ
*މަސްދަނޑިއެކޭމީ ކެޔޮޅުބޭ މަސްއައިނެކޭ މީ ކެޔޮޅުބޭ

$N
*އެއޮތީ މަސްއައިނެއް
އެންކެޔޮޅާ އެންއުކާ
ކުރު ދޮށިތައް ދެންނަގާ`,

  englishLyrics: `#M
Irufenun nala reethi hihlaalaa
*Odifuraashe dhuvelee e harukohlaa
Ennagaa barukoh miodiah
*Haru dhuveli dhahkaashe mashoadhan
#1
Haama kandutherey hoadhamun
*Kandu kafaalaa odi dhuhvaalaa
Foohikan nethi dhihlamun
*Mahaaveythoa balaa naganee mahaaveythoa balaa naganee
#2
Keyolhubey hure haruadun
*Falhuverinnah anngaalahpey
Ainekey ove kurimathee
*Raalhu fonulaa thalhaanaganee raalhu fonulaa thalhaanaganee
#3
Irumedhun ali kohlumun
*Gadha aveegaa hiyyvaru laafaa
Ain thereygaa fala godhaa
*Kurudhosheegaa thalhaanaganee kurudhosheegaa thalhaanaganee
-
$M
Theyobaanilaa mulhi kanduthereyn
*Dhuhvaanagaa mekuhahjahaa
Hoaraalhaa boakoh dhooniaraa faibaa
*Masdhandiekeymee keyolhubey masainekey mee keyolhubey
$1
Boduraalhu therein fonugandu kafaalaa
*Masain ekeegaa odiah hifaalaa
Huribaarulaa thibe ennmen ekee
*Huribaarulaa thibe ennmen ekee
*Masdhandiekeymee keyolhubey masainekey mee keyolhubey
$2
Ennvashifuraa negi ennthah ukaalaa
*Masain thereygaa annbaa kiyaalaa
Aruvaajahaa thibe ennmen ekee
*Aruvaajahaa thibe ennmen ekee
*Masdhandiekeymee keyolhubey masainekey mee keyolhubey
$N
*Eothee masaineh
Ennkeyolhaa ennukaa
Kuru dhoshithah dhennagaa`,
},
{
  id: 63,
  name: `Kaaku Aimaa`,
  genre: 'Taki',
  lyrics: `#M
ކާކު އައިމާހެ މިރޯނާވެ ހިތަކު ބާރުނެތީ
*ގެއްލިތާޒާ ނިދި ހޯދޭނެ ލޮލަކު ބާރުނެތީ
*ކާކު އައިމާ

#1
އަންނަ އޭނާގެ ހަބަރު ވައިގެތެރޭގާ ވާތީ
*އަންނަ އޭނާގެ ހަބަރު ވައިގެތެރޭގާ ވާތީ
އެންމެ ނާރެއްމެ ނުދެކެމޭ ހިމޭނުން ވާތީ
*އެންމެ ނާރެއްމެ ނުދެކެމޭ ހިމޭނުން ވާތީ
ރޫހުގުޅި ދާންފެށީ
*ރޫހުގުޅި ދާންފެށި ނޭވާގެ ކޮޅަކު ބާރުނެތީ ގެއްލިތާޒާ ނިދި ހޯދޭނެ ލޮލަކު ބާރުނެތީ

#2
މަސްތުގާ ސޫރަ އެދެކިލާށެ ހިނގުންވީ ބޮސްދީ
*މަސްތުގާ ސޫރަ އެދެކިލާށެ ހިނގުންވީ ބޮސްދީ
އޭގެ ޖަޒުބާތު ފޭނޭތޯއެ ބެލަންވީ ލޯދީ
*އޭގެ ޖަޒުބާތު ފޭނޭތޯއެ ބެލަންވީ ލޯދީ
މެމިތެޅިދާންފެށީ
*މެމިތެޅިދާންފެށި ވާނޭ މިހިތަކު ބާރުނެތީ ގެއްލިތާޒާ ނިދި ހޯދޭނެ ލޮލަކު ބާރުނެތީ

#3
އަތްއަތާ ނޯޅި ސަލާން ކޮއްލަދެނިވި ރޭތާއޭ
*އަތްއަތާ ނޯޅި ސަލާން ކޮއްލަދެނިވި ރޭތާއޭ
އަތްމަތީ ހިތްމިނިދާލާނޭ ފިނިރޭތާއޭ
*އަތްމަތީ ހިތްމިނިދާލާނޭ ފިނިރޭތާއޭ
ހާދަ އުފަލޭބުނޭ
*ހާދަ އުފަލޭބުނެ އިއްވާނެ ލޮލަކު ބާރުނެތީ ގެއްލިތާޒާ ނިދި ހޯދޭނެ ލޮލަކު ބާރުނެތީ`,

  englishLyrics: `#M
Kaaku aimaahe miroanaave hithaku baarunethee
*Gehlithaazaa nidhi hoadheyne lolaku baarunethee
*Kaaku aimaa
#1
Anna eynaage habaru vaigethereygaa vaathee
*Anna eynaage habaru vaigethereygaa vaathee
Ennme naarehme nudhekemey himeynun vaathee
*Ennme naarehme nudhekemey himeynun vaathee
Roohugulhi dhaannfeshee
*Roohugulhi dhaannfeshi neyvaage kolhaku baarunethee gehlithaazaa nidhi hoadheyne lolaku baarunethee
#2
Masthugaa soora edhekilaashe hingunnvee bosdhee
*Masthugaa soora edhekilaashe hingunnvee bosdhee
Eyge jazubaathu feyneythoae belannvee loadhee
*Eyge jazubaathu feyneythoae belannvee loadhee
Memithelhidhaannfeshee
*Memithelhidhaannfeshi vaaney mihithaku baarunethee gehlithaazaa nidhi hoadheyne lolaku baarunethee
#3
Ayyathaa noalhi salaan kohladhenivi reythaaey
*Ayyathaa noalhi salaan kohladhenivi reythaaey
Ayymathee hiyyminidhaalaaney finireythaaey
*Ayymathee hiyyminidhaalaaney finireythaaey
Haadha ufaleybuney
*Haadha ufaleybune ihvaane lolaku baarunethee gehlithaazaa nidhi hoadheyne lolaku baarunethee`,
},
{
  id: 64,
  name: `Kasabun`,
  genre: 'Kaasi',
  lyrics: `#M
ކަސަބުން ބޯވަޅު ކުރި ޖަރީހެދުން އަޅަމުން އަންނާށޭ
*އަސަރީ ލޯބިން މާ ގަޔާވެޔޭ އަވަހަށް އަންނާށޭ
ހަސަނާތު ތަރި ފަދައިން
*ބެބުޅުން ތަކުން ފެނޭ

#1
މަގުގާ ހިނގާފާދާއިރު ފޭލީގެ ކަންގަނޑުގެ ހަމައިން
*އަޑުރީތި ފައްޓަރުބަޔަކާ ދެއުޅާގަނޑުން ކީ ރާގުން
*ދެއުޅާގަނޑުން ކީ ރާގުން
އެކުގާ ފަރިހި ބަޅިނދާ ކޮކާ ކިޔަމުން ދެޔޭ ނަށަމުން

#2
ފަރިކަން އެވާ އިސްތަށިތައް ފަޅިއިން ރުމާ ބަނދެލާފާ
*އަލި ރަންމުތީގެ ވިދުންތައް ތުނި ކަންފަތުން ފެނިލީމާ
*ތުނި ކަންފަތުން ފެނިލީމާ
ދަތިހިތް މަދެން ކުރުވާ ގޮތުން ދެވިދާނެ ހިތް މިނަގާ

#3
ބަނޑިޔާ ކިހިލިލާ ދާއިރު ސޫރަވި ނަމޫނާ ތެދެކޭ
*ބަގިޔާގެ ފަންނީ ހުނަރުން ސިހުމެއް ލިބުން މީކަމެކޭ
*ސިހުމެއް ލިބުން މީކަމެކޭ
ބަނދި ރައިވަރުން ލިޔެ ޝާއިރުން ފުރިދާ ޚަޒާނާއޭ`,

  englishLyrics: `#M
Kasabun boavalhu kuri jareehedhun alhamun annaashey
*Asaree loabin maa gayaaveyey avahah annaashey
Hasanaathu thari fadhain
*Bebulhun thakun feney
#1
Magugaa hingaafaadhaairu feyleege kannganduge hamain
*Adureethi fahtarubayakaa dheulhaagandun kee raagun
Dheulhaagandun kee raagun
*Ekugaa farihi balhindhaa kokaa kiyamun dheyey nashamun
#2
Farikan evaa isthashithah falhiin rumaa bandhelaafaa
*Ali rannmutheege vidhunnthah thuni kannfathun fenileemaa
Thuni kannfathun fenileemaa
*Dhathihiyy madhen kuruvaa gothun dhevidhaane hiyy minagaa
#3
Bandiyaa kihililaa dhaairu sooravi namoonaa thedhekey
*Bagiyaage fannee hunarun sihumeh libun meekamekey
Sihumeh libun meekamekey
*Bandhi raivarun liye shaairun furidhaa khazaanaaey`,
},
{
  id: 65,
  name: `Husnooran`,
  genre: 'Nala',
  lyrics: `#M
ހުސްނޫރަން ފަރުދާވެލީމާ ހަނދުގެ ނޫރުންދޭ މިސާލް
*ހުސްނުނޫރުން ދިއްލޭ ނޫރުންތާ ދެނީރޫހީ އަރާމް

#1
ސާފުރޭރޭ ނާޒުގާ ރިހިދޫލައެއް ފަތުރާލުމުން
*ސާފުރޭރޭ ނާޒުގާ ރިހިދޫލައެއް ފަތުރާލުމުން
ވާވިލާތައް އުދުހެމުން އެކިފުއްފުށަށް ހެލިލާގޮތުން
*އާ އާ އާ އާ އާ
ފެންނަމުންދާ މާތްކަރާމުން ޖަދުލު ކުރަމުންދޭ ޒަމާން
*ހުސްނުނޫރުން ދިއްލޭ ނޫރުންތާ ދެނީރޫހީ އަރާމް

#2
ކަޝްފުވީ މޫރިތިވި ސަހުސޭތޫނު ރިހިއަލިތަކުތެރޭ
*ކަޝްފުވީ މޫރިތިވި ސަހުސޭތޫނު ރިހިއަލިތަކުތެރޭ
އަދުހެމުން ހުދު ކަބަވިލާތައް ޖައްވުގާ ފަރުދާވުމުން
*އާ އާ އާ އާ އާ
ގުދުރަތުން ގުޅުވާލި ގުލްސަން ދެއްވި ފަތިހަށް އަލީވިލޭ
*ހުސްނުނޫރުން ދިއްލޭ ނޫރުންތާ ދެނީރޫހީ އަރާމް

#3
ފެންނަނީ ކޮންފަދަ ޝިޔާރެއްތޯއެ އަލިވި ފަޒާތެރޭ
*ފެންނަނީ ކޮންފަދަ ޝިޔާރެއްތޯއެ އަލިވި ފަޒާތެރޭ
މާނަފުން ގޮތަކަށް މިއާލަމް ނޫރަކުން ފަރިކޮއްލުމުން
*އާ އާ އާ އާ އާ
ރޭގަނޑައް ދިންޗާލު ހަނދުވަރު ރަތްވިލާތައް އޮއްސުމުން
*ހުސްނުނޫރުން ދިއްލޭ ނޫރުންތާ ދެނީރޫހީ އަރާމް`,

  englishLyrics: `#M
Husnooran farudhaaveleemaa handhuge noorunndhey misaal
*Husnunoorun dhihley noorunnthaa dheneeroohee araam
#1
Saafureyrey naazugaa rihidhoolaeh fathuraalumun
*Saafureyrey naazugaa rihidhoolaeh fathuraalumun
Vaavilaathah udhuhemun ekifuhfushah helilaagothun
*Aa aa aa aa aa
Fennamunndhaa maayykaraamun jadhulu kuramunndhey zamaan
*Husnunoorun dhihley noorunnthaa dheneeroohee araam
#2
Kashfuvee moorithivi sahuseythoonu rihialithakutherey
*Kashfuvee moorithivi sahuseythoonu rihialithakutherey
Adhuhemun hudhu kabavilaathah jahvugaa farudhaavumun
*Aa aa aa aa aa
Gudhurathun gulhuvaali gulsan dhehvi fathihah aleeviley
*Husnunoorun dhihley noorunnthaa dheneeroohee araam
#3
Fennanee konnfadha shiyaarehthoae alivi fazaatherey
*Fennanee konnfadha shiyaarehthoae alivi fazaatherey
Maanafun gothakah miaalam noorakun farikohlumun
*Aa aa aa aa aa
Reygandah dhinnchaalu handhuvaru rayyvilaathah ohsumun
*Husnunoorun dhihley noorunnthaa dheneeroohee araam`,
},
{
  id: 66,
  name: `Hunnanthavi`,
  genre: 'Nala',
  lyrics: `#M
ހުންނަންތަވީ އުމުރައް މިހެން
ހިތުގާ އެދުންވާ ނުފުދިފާ
އިންނަންތަވީ ކަރުނުގެތެރޭ
ތެމިފޯވެގެންގޮސް ފޫދިފާ

#1
ފަހެދެން ނެތީހޭ މޮޅު ހަކީމީ
*ބޭހަކުން ފަރުވާއަކުން
ފޮހެލާ ދެވޭފަދަ ޑޮކުޓަރެއް
*ވާ ހިތުގެ ބައްޔަށް އުފެދިފާ

#2
އޭ މާމެލާމެލި ތަކުތެރޭ
*ފަރިވާ ވަގުތުގާ ދެކިލުމަށް
އެމާ ބުލާކަން ފަހެވަނީ
*ކޮންތާކުގާހޭ ފޯދިފާ

#3
ކިތަކައް އަހަރުދޯ ތިޔަމަލައް
*ފަރިވީފަހުން މިއަދަށް މިވީ
ހިތަކައް ލިބެން އޮތް އިރުއެތަން
*މިތަނުން އެޔަށް ހިތް ނުއެނގިފާ`,

  englishLyrics: `#M
Hunnannthavee umurah mihen
*Hithugaa edhunnvaa nufudhifaa
Innannthavee karunugetherey
*Themifoavegenngos foodhifaa
#1
Fahedhen netheehey molhu hakeemee
*Beyhakun faruvaaakun
Fohelaa dheveyfadha dokutareh
*Vaa hithuge bahyah ufedhifaa
#2
Ey maamelaameli thakutherey
*Farivaa vaguthugaa dhekilumah
Emaa bulaakan fahevanee
*Konnthaakugaahey foadhifaa
#3
Kithakah aharudhoa thiyamalah
*Fariveefahun miadhah mivee
Hithakah liben oyy iruethan
*Mithanun eyah hiyy nuengifaa`,
},
{
  id: 67,
  name: `Jaazubee`,
  genre: 'Nala',
  lyrics: `#M
ޖާޒުބީ އަސަރުގަދަ ފަރިނަޔާމަލުގެ ރާނީ
*ޖާނުދީ މިހާރުގޮސް މަޑުމަޑުންނެ ބިދެލާނީ

#1
އެދެމޭ ތިޔަ ގުލްޒާރުގާ ފަރުވާޔަކަށް
*ތެދެކޭލިބުމަށް ހިނދުކޮޅެއްގެ ޝިފާޔަކަށް
ނިޔަނެތި ތިޔަފަރި މަލުގެ ލޯބިލާސާނީ
*ޖާނުދީ މިހާރުގޮސް މަޑުމަޑުންނެ ބިދެލާނީ

#2
ވެދުމާއި ސަލާމާއެކީ ފޮނުވާލަނީ
*ތެދުވެރިވެވި ލޯބީގެނަރު ގުޅުވާލަނީ
އެދުމުގެ އަބަދާ އަބަދުގާ މަހުންނާނީ
*ޖާނުދީ މިހާރުގޮސް މަޑުމަޑުންނެ ބިދެލާނީ

#3
އަހުރެން މިކިޔާހާ ސަނާ ތައުރީފަކީ
*ރަހުމަތް އެދެމުން ތާއަބަދުގެ ދުޢާއަކީ
މަޙުޝަރުބިމުގާ އަހުރެނާއި އެކުވާނީ
*ޖާނުދީ މިހާރުގޮސް މަޑުމަޑުންނެ ބިދެލާނީ`,

  englishLyrics: `#M
Jaazubee asarugadha farinayaamaluge raanee
*Jaanudhee mihaarugos madumadunne bidhelaanee
#1
Edhemey thiya gulzaarugaa faruvaayakah
*Thedhekeylibumah hindhukolhehge shifaayakah
Niyanethi thiyafari maluge loabilaasaanee
*Jaanudhee mihaarugos madumadunne bidhelaanee
#2
Vedhumaai salaamaaekee fonuvaalanee
*Thedhuverivevi loabeegenaru gulhuvaalanee
Edhumuge abadhaa abadhugaa mahunnaanee
*Jaanudhee mihaarugos madumadunne bidhelaanee
#3
Ahuren mikiyaahaa sanaa thaureefakee
*Rahumayy edhemun thaaabadhuge dhuiaaakee
Mahusharubimugaa ahurenaai ekuvaanee
*Jaanudhee mihaarugos madumadunne bidhelaanee`,
},
{
  id: 68,
  name: `Kinkirimaa`,
  genre: 'Baburu',
  lyrics: `#1
މަޑުމަޑުން ގޮސް
*ފަނޑުވަމުން
އުޑު މަތީގައި
*އެހެރަ އަލިކަން ގޮސް ނެތުނީމާ
ކޮންމެ ރެއަކުމެ ހަނދު އޮއްސި ކަޅުފޮއެވެ
*އަނދިރީވެ ދަނވަރައް ފަރިވެ ފޮޅޭ ބޯޅަ ކިންކިރިމާ
ތަންގަނޑު އެންމެނައް އެނގޭ
*ބޯޅަކިންކިރިމާ
ނަންބަރު އެއްވަނަ ދެވޭ
*ބޯޅަކިންކިރިމާ

#2
އަނދިރިބަނަ ދުނިޔެ ވީއެ
*ވިއްސާރަގަދަވެ ގުގުރަނީއެ
ކަނޑުގެ ކުލަ މިފަނޑުވެ މުޅިން
*ޖެހޭރޯޅި ވައިގާ

#3
*ކިންކިރިމާ
ބިންދާލި ބޯޅަ
ނަންބަރު ސޯޅަ
އެއްލާލި ބޯޅަ
އެންމެންގެ ބޯޅަ

#4
*ކިންކިރިމާ
އަނދިރިބަނަ ދުނިޔެ ވީއެ
ވިއްސާރަގަދަވެ ގުގުރަނީއެ
ކަނޑުގެ ކުލަ މިފަނޑުވެ މުޅިން
ޖެހޭރޯޅި ވައިގާ

#5
*ހޮނޑަލިދެމޭ
ދާންމަތިން`,

  englishLyrics: `#M
Madumadun gos
*Fanduvamun
Udu matheegai
*Ehera alikan gos nethuneemaa
Konnme reakume handhu ohsi kalhufoeve
*Andhireeve dhanvarah farive folhey boalha kinnkirimaa
Thanngandu ennmenah engey
*Boalhakinnkirimaa
Nannbaru ehvana dhevey
*Boalhakinnkirimaa
#1
Andhiribana dhuniye veee
Vihsaaragadhave guguraneee
Kanduge kula mifanduve mulhin
Jeheyroalhi vaigaa
#2
*Kinnkirimaa
Binndhaali boalha
Nannbaru soalha
Ehlaali boalha
Ennmennge boalha
#3
*Kinnkirimaa
Andhiribana dhuniye veee
Vihsaaragadhave guguraneee
Kanduge kula mifanduve mulhin
Jeheyroalhi vaigaa
#4
*Hondalidhemey
Dhaannmathin`,
},
{
  id: 69,
  name: `Kohli Samaasa`,
  genre: 'Nala',
  lyrics: `#M
ކޮއްލީ ސަމާސާ އެރޭގާ
*ހިތް ދޫވިއޭ އިހްތިޔާރުގާ
ޝަބުނަމްގެ ތިކިތައް މަތީގާ
*ފަނޑު ހަނދުވަރެއްގާ އެދިންހާ

#1
މޭތެރޭގާ ހިތް އެބަ ތެޅޭހެން
*ހީވެޔޭ އޮވެ ދާނުގާ
އޭގެ އަސަރާ އިހުސާސު މޭގާ
*ލާމެހިއްޖޭ މިގޮތުގާ
އޭހިތާއޭ ސާހިބާއޭ
*މިވަރައް ކަލާގެ ހަނދާނުގާ

#2
ކިހިނަކުންހޭ އިތުބާރު ކުރާނީ
*ވެއްޖެ ހައިރާން އާޝިގާ
މައަތު މުދަލާ ފައިސާ ނެތީމާ
*ދެއްކި ދަޅައޭ ބާރުލާ
އޭހިތާއޭ ސާހިބާއޭ
*މިވަރައް ކަލާގެ ހަނދާނުގާ`,

  englishLyrics: `#M
Kohlee samaasaa ereygaa
*Hiyy dhooviey ihthiyaarugaa
Shabunamge thikithah matheegaa
*Fandu handhuvarehgaa edhinnhaa
#1
Meythereygaa hiyy eba thelheyhen
*Heeveyey ove dhaanugaa
Eyge asaraa ihusaasu meygaa
*Laamehihjey migothugaa
Eyhithaaey saahibaaey
*Mivarah kalaage handhaanugaa
#2
Kihinakunhey ithubaaru kuraanee
*Vehje hairaan aashigaa
Maathu mudhalaa faisaa netheemaa
*Dhehki dhalhaey baarulaa
Eyhithaaey saahibaaey
*Mivarah kalaage handhaanugaa`,
},
{
  id: 70,
  name: `Kolhigandu`,
  genre: 'Nala',
  lyrics: `#M
ގަދަގަދަ ވިއްސާރަޔާ އެކު އޮޑި ރާޅާލުމުން
*ގަދަފަދަ އަޑުފަށްގަނޑާއެކު ގުޑުގުޑު ލީހިތޭ
ގަދަކަނޑު ރާޅާތެރޭ ވިއްސާ ހުދުފޮނު ލޮނޫން
*އޮހިގެންދާ ފެންތިކީން ތެމިލާ ގުޑު ލީހިތޭ

#1
ވިދުމާ ގުގުރާލުމާ އެކު ގިނަކެރި އޮހެލުމާ
*ދިރުނބާކޮޅު ހިތްމިތާ ދޫދޫވެވި ދިޔަވުމާ
ބިޔަބިޔަކޮށް ރާޅުލާ އޮޑި ދެއަތަށް ހެލިލުމާ
*އިތުރަށް ވިދުމާއެކީ އިތުރަށް ބިރުހީވިޔޭ

#2
ކޮޅުފަސްކޮޅު ދޫވުމުން އޮޑި މުޅިއެކު ދިޔަވުމުން
*ކަޅުފޮއެ އަނދިރީތެރޭ އޮޑި އަޑިޔަށް ދާންފެށީ
ދިޔަދިޔަ ހިއްކާ ފަތުން ހިއްކާ ދިޔަ ގިނަވުމުން
*އެކުއެންމެން ގުޅިއެކީ ދިޔަގަނޑު ބޭރޭކުރީ

#3
ނަގަމުން ބިޔަރާޅުތައް ދިޔުމާއެކު ކެޔޮޅުބޭ
*ބިރުވެރިކަން ވަދެ ހިތައް އޮޑި އަނބުރާ ހިތްވުމުން
ކިރިކިރިޔާ ރާޅުލާ ފުންއެފުށަށް ނުމެދިޔާ
*އަވަހަށް އެންމެންއެކީ އޮޑި ގުލްށަން ބޮޑުޖެހީ`,

  englishLyrics: `#M
Gadhagadha vihsaarayaa eku odi raalhaalumun
*Gadhafadha adufahgandaaeku gudugudu leehithey
Gadhakandu raalhaatherey vihsaa hudhufonu lonoon
*Ohigenndhaa fennthikeen themilaa gudu leehithey
#1
Vidhumaa guguraalumaa eku ginakeri ohelumaa
*Dhirunbaakolhu hiyymithaa dhoodhoovevi dhiyavumaa
Biyabiyakoh raalhulaa odi dheathah helilumaa
*Ithurah vidhumaaekee ithurah biruheeviyey
#2
Kolhufaskolhu dhoovumun odi mulhieku dhiyavumun
*Kalhufoe andhireetherey odi adiyah dhaannfeshee
Dhiyadhiya hihkaa fathun hihkaa dhiya ginavumun
*Ekuennmen gulhiekee dhiyagandu beyreykuree
#3
Nagamun biyaraalhuthah dhiyumaaeku keyolhubey
*Biruverikan vadhe hithah odi anburaa hiyyvumun
Kirikiriyaa raalhulaa funnefushah numedhiyaa
*Avahah ennmennekee odi gulshan bodujehee`,
},
{
  id: 71,
  name: `Lolun Ohorey`,
  genre: 'Nala',
  lyrics: `#M
ލޮލުން އޮހޮރޭއެ ކޯރު ލިބުމުން އުފަލާ ވޭނާ ހޫނު
*އެކި ޒަމާންތައް އެހާ ދެކިފާވެޔޭ އަސަރާއެކީ
*އަސަރާއެކީ

#1
އެތަށް އަނިޔާތަކެއް ލިބުނީމައޭ
*ހިތަށް ކުޅަދާނަވަރު ނުބެލީމައޭ
ކެތެއް އަމުދުން ނުވާނެ އެއަކަށް ނުބެލޭ އިހްތިޔާރު
*އެކި ޒަމާންތައް އެހާ ދެކިފާވެޔޭ އަސަރާއެކީ

#2
އުފާވާނޭ ވަގުތު ޖެހުނީމައޭ
*ހަމަ ލިބިގެން ހިތަށް ފިނިވީމައޭ
ދިރުން ލިބިފާވާ ޖާނު އަލުން ދެކޭނޭ ބަހާރު
*އެކި ޒަމާންތައް އެހާ ދެކިފާވެޔޭ އަސަރާއެކީ

#3
ލޮލުން އޮހޮރޭ ކަރުނަ ލިބިދޭނެޔޭ
*މިހިތަށް ވަގުތީ ޝިފާ ގެނުވާނެޔޭ
ވަފާތެރިޔާ ބޭނުންވީމަ އެތަކެއް ދުވަހެއްފަހު މިހާރު
*އެކި ޒަމާންތައް އެހާ ދެކިފާވެޔޭ އަސަރާއެކީ`,

  englishLyrics: `#M
Lolun ohoreye koaru libumun ufalaa veynaa hoonu
*Eki zamaannthah ehaa dhekifaaveyey asaraaekee
*Asaraaekee
#1
Ethah aniyaathakeh libuneemaey
*Hithah kulhadhaanavaru nubeleemaey
Ketheh amudhun nuvaane eakah nubeley ihthiyaaru
*Eki zamaannthah ehaa dhekifaaveyey asaraaekee
#2
Ufaavaaney vaguthu jehuneemaey
*Hama libigen hithah finiveemaey
Dhirun libifaavaa jaanu alun dhekeyney bahaaru
*Eki zamaannthah ehaa dhekifaaveyey asaraaekee
#3
Lolun ohorey karuna libidheyneyey
*Mihithah vaguthee shifaa genuvaaneyey
Vafaatheriyaa beynunnveema ethakeh dhuvahehfahu mihaaru
*Eki zamaannthah ehaa dhekifaaveyey asaraaekee`,
},
{
  id: 72,
  name: `Medhu Raajjeakun`,
  genre: 'Nala',
  lyrics: `#M
މެދުރާއްޖެއަކުން ދެކެފާ މަނަނެތޭ
*ފަހެ ފުރިހަމަ އެވަރުގެ އަންހެނެއް
ސޮނިވެއްޓި ތަލިން ކުޅުހިކި އަހުރެން
*ކޮސްވެއްޖެ އެއީވާ އަންހެނެއް

#1
ގޭދޮށުން ކުރު ކާލި ކަނޑަމޭ ނޭނގުނަސް ދެކިލާހިތުން
*ގޭދޮށުން ކުރު ކާލި ކަނޑަމޭ ނޭނގުނަސް ދެކިލާހިތުން
އޭ ހިތުގެ އޮއެވަރް ބަހާފަދަ ކައްބަދަލުކުރި އަންހެނެއް
*އޭ ހިތުގެ އޮއެވަރް ބަހާފަދަ ކައްބަދަލުކުރި އަންހެނެއް

#2
ހިތުގެ ހިމަނާ ރަން އިސާރާތް ކޮއްފިޔޭ ރަހަލާ ވަރަށް
*ހިތުގެ ހިމަނާ ރަން އިސާރާތް ކޮއްފިޔޭ ރަހަލާ ވަރަށް
ރީތީކޮށް މީހަކު މުޅިން މޮޔަ ކޮއްލުވާވަރު އަންހެނެއް
*ރީތީކޮށް މީހަކު މުޅިން މޮޔަ ކޮއްލުވާވަރު އަންހެނެއް

#3
އިންތިޒާރު ކުރުން އެއީވެސް ހިތްއެދޭ ގޮތަކައް ވެޔޭ
*އިންތިޒާރު ކުރުން އެއީވެސް ހިތްއެދޭ ގޮތަކައް ވެޔޭ
ކުއް އިރާދަފުޅާއެކީ އުންމީދުކުރެވޭ އަންހެނެއް
*ކުއް އިރާދަފުޅާއެކީ އުންމީދުކުރެވޭ އަންހެނެއް`,

  englishLyrics: `#M
Medhuraajjeakun dhekefaa mananethey
*Fahe furihama evaruge annheneh
Sonivehti thalin kulhuhiki ahuren
*Kosvehje eeevaa annheneh
#1
Geydhoshun kuru kaali kandamey neyngunas dhekilaahithun
*Geydhoshun kuru kaali kandamey neyngunas dhekilaahithun
Ey hithuge oevar bahaafadha kahbadhalukuri annheneh
*Ey hithuge oevar bahaafadha kahbadhalukuri annheneh
#2
Hithuge himanaa ran isaaraayy kohfiyey rahalaa varah
*Hithuge himanaa ran isaaraayy kohfiyey rahalaa varah
Reetheekoh meehaku mulhin moya kohluvaavaru annheneh
*Reetheekoh meehaku mulhin moya kohluvaavaru annheneh
#3
Innthizaaru kurun eeeves hiyyedhey gothakah veyey
*Innthizaaru kurun eeeves hiyyedhey gothakah veyey
Kuh iraadhafulhaaekee unnmeedhukurevey annheneh
*Kuh iraadhafulhaaekee unnmeedhukurevey annheneh`,
},
{
  id: 73,
  name: `Merey Loa`,
  genre: 'Kaasi',
  lyrics: `#M
މެރޭ ލޯދެކޭ ހޫނާ ވޭނީހަނދާނާ
*އެދޭލޯބިޔާރާ ދަނިއޭފުރާނާ
ވެތުވިއެމާޒީގާ ދީފާއަރާމާ
*ބަދަލުވީ ތިޔާރާ ދަނިއޭފުރާނާ

#1
އުފާކުރުވި މަންޒަރު ނުދާނެހިތީމޭ
*އުފާކުރުވި މަންޒަރު ނުދާނެހިތީމޭ
ލިބޭތީއުފާ ހީލަހީލާ ހުރިމޭ
*ތެދޭ ބޭވަފާވީމާ އުޅުނީ ޒަމާނާ އެދޭލޯބިޔާރާ ދަނިއޭފުރާނާ

#2
ދެލޯނޭދި އެދުނީމޭ ލޯބިން ފުރީމޭ
*ދެލޯނޭދި އެދުނީމޭ ލޯބިން ފުރީމޭ
ނުވާނޭ ތަފާތެއް ޔަގީންކޮށް ހުރީމޭ
*އަވާމެންދުރޭ ދެއްކީ ބަހަނާ ޔަކީނާ އެދޭލޯބިޔާރާ ދަނިއޭފުރާނާ

-
$M
ގުނބޭދާލަމަތީ އާތާސޭބާނިލާ
*ޝޭމާންބޭ

$1
ޔާއްޖާ މޭރާސައީ
*ދޭކޯމާންބިބީ
ސައްޔާޖާ މޭރާސަ
*ދޭކޯމަންބިބީ
ސައްޔާ ސާރަސަގަރެވާ
*އާތާސޭބާނިލާ ސޭމާންބޭ

#M
މީލިބޭ އެމާ މަނޫރޭތޯ ލައްޔާ ލިޖާ
*މީލިބޭ އެމާ މަނޫރޭތޯ ލައްޔާ ލިޖާ

#1
ހަސްތީބާޒާރުމޭ ލީޖާ
*ހަސްތީބާޒާރުމޭ ލީޖާ

#N
މީލިބޭ އެމާ
*މަނޫރޭތޯ ލައްޔާ ލިޖާ`,

  englishLyrics: `#M
Merey loadhekey hoonaa veyneehandhaanaa
*Edheyloabiyaaraa dhanieyfuraanaa
Vethuviemaazeegaa dheefaaaraamaa
*Badhaluvee thiyaaraa dhanieyfuraanaa
#1
Ufaakuruvi mannzaru nudhaanehitheemey
*Ufaakuruvi mannzaru nudhaanehitheemey
Libeytheeufaa heelaheelaa hurimey
*Thedhey beyvafaaveemaa ulhunee zamaanaa edheyloabiyaaraa dhanieyfuraanaa
#2
Dheloaneydhi edhuneemey loabin fureemey
*Dheloaneydhi edhuneemey loabin fureemey
Nuvaaney thafaatheh yageennkoh hureemey
*Avaamenndhurey dhehkee bahanaa yakeenaa edheyloabiyaaraa dhanieyfuraanaa
-
$M
Gunbeydhaalamathee aathaaseybaanilaa
*Sheymaannbey
$1
Yaahjaa meyraasaee
*Dheykoamaannbibee
Sahyaajaa meyraasa
*Dheykoamannbibee
Sahyaa saarasagarevaa
*Aathaaseybaanilaa seymaannbey
$2
Meelibey emaa nooreythoa lahyaa lijaa
*Meelibey emaa nooreythoa lahyaa lijaa
$3
Hastheebaazaarumey leejaa
*Hastheebaazaarumey leejaa
$4
Meelibey emaa
*Manooreythoa lahyaa lijaa`,
},
{
  id: 74,
  name: `Mihaaru Loabin`,
  genre: 'Thinberu',
  lyrics: `#M
މިހާރު ލޯބިން މާގަތާލާ ވެދުންކުރާ
*ގައުމައްޓަކާ މާތް
ފިދާވަމާހޭ އަޒުމުގައި މާތް ޖިހާދުގާ
*ގައުމައްޓަކާ މާތް

#1
ހެޔޮހިތުން ދިވެހި ދަރިންނޭމިތާ ފާޅުގާ
*ހެޔޮހިތުން ދިވެހި ދަރިންނޭމިތާ ފާޅުގާ
*ޖިހާދުގާ

#2
ކާބަފައިން ގެނުވިމަގުންދާން އަޒުމްއާކުރޭ
*ކާބަފައިން ގެނުވިމަގުންދާން އަޒުމްއާކުރޭ
*ޖިހާދުގާ

#3
ދައުލަތައް ބޯލަނބާށޭ ދިވެހި އާރުނޭ
*ދައުލަތައް ބޯލަނބާށޭ ދިވެހި އާރުނޭ
*ޖިހާދުގާ`,

  englishLyrics: `#M
Mihaaru loabin maagathaalaa vedhunnkuraa
*Gaumahtakaa maayy
Fidhaavamaahey azumugai maayy jihaadhugaa
*Gaumahtakaa maayy
#1
Heyohithun dhivehi dharinneymithaa faalhugaa
*Heyohithun dhivehi dharinneymithaa faalhugaa
*Jihaadhugaa
#2
Kaabafain genuvi magunndhaan azumaakurey
*Kaabafain genuvi magunndhaan azumaakurey
*Jihaadhugaa
#3
Dhaulathah boalanbaashey dhivehi aaruney
*Dhaulathah boalanbaashey dhivehi aaruney
*Jihaadhugaa`,
},
{
  id: 75,
  name: `Mila Mila`,
  genre: 'Nala',
  lyrics: `#M
މިލަމިލަ ހަނދުވަރުދޭ ރޭރޭގާ
*ތިމަލައް ނުބެލޭހެ ފެނުނީމާ
ތުނިތުނި ވާރޭގަ ތެމުނީމާ
*އަސަރުން ނުބެލޭހެ ފޮޅުނީމާ

#1
ވައިރޯޅި ނުވާ ތަނަކުން ފޮޅިފާ
*ގަދަ ހޫނު އަވިން ތެމި ފޯވީމާ
މަޑަކުން ހުރެވޭހޭ އެނގުނީމާ
*ތިޗާލުވި ކުލަޔާ ގުޅުނީމާ

#2
އާޝޯހުވެދޭ ހޭޅިން ފެނިފާ
*ވައިބާރުވެ ރާޅުން ތެމުނީމާ
އޯގާވެރިކަންވެސް ނުދެވޭނޭ
*ބޯދާވެރި ބަސްތައް ނޭންގޭހޭ`,

  englishLyrics: `#M
Milamila handhuvarudhey reyreygaa
*Thimalah nubeleyhe fenuneemaa
Thunithuni vaareyga themuneemaa
*Asarun nubeleyhe folhuneemaa
#1
Vairoalhi nuvaa thanakun folhifaa
*Gadha hoonu avin themi foaveemaa
Madakun hureveyhey enguneemaa
*Thichaaluvi kulayaa gulhuneemaa
#2
Aashoahuvedhey heylhin fenifaa
*Vaibaaruve raalhun themuneemaa
Oagaaverikannves nudheveyney
*Boadhaaveri basthah neynngeyhey`,
},
{
  id: 76,
  name: `Minivan Vayaa`,
  genre: 'Kaasi',
  lyrics: `#M
މިނިވަންވަޔާ ކުޅެލާށެ ތާޒާ
*މީ ނިޝާނޭ އުޖާލާ

#1
ޖާން ފިދާވީ ބަތަލުން
*ސާފުވެ ސީދާ އަޒުމާ ރޫހުން
ރަމްޒުން ދިރޭ އެހަނދާން ފަޒާގާ
*މީ ނިޝާނޭ އުޖާލާ

#2
ރޫހުދެވޭ މީ ވަތަނަށް
*ލޯބި ދެވޭނީ ގައުމާ ދީނަށް
މިންނަތް ޝުއޫރު ދިދައިން ފަވާލާ
*މީ ނިޝާނޭ އުޖާލާ

-
$M
ކިނާރީއާ ބޯވަޅާ އުޖާލާވާތީ
*ކިނާރީއާ ބޯވަޅާ އުޖާލާވާތީ
އޭތެދޭ ބަލާލުމައް މާރީއްޗޭ
*ބަލާލުމައް ދަޅައަޅައޭ ފަރިއޭ ޗާލޭ
މީތެދޭ ރާއްޖޭގާ އަންހެނުން މާރީއްޗޭ
*އޭރުލީ ސާދާ ހެދުންތައް ޗާލޭ

$2
ފޭރާމޭމީ ދިވެހިމި ބިމުގާ
*ދިވެހިންކަން އަންގާދޭނީ
ކަސަބުގެ ވިދުމާ އިރުވައި ހެދުމާ
*މާރީއްޗޭ ފަނޑުނުވެ ވާނޭ ބަލަން

$3
ފޭލީގާވާ ޗާލޫ ބައިތައް
*އަންގާދޭން ބޭނުންވީބާ
މީގާ ވާއިރަ ހޮޅުވައި އަތްތުން
*ހޮޅުވައިފި ކޮޅުތައް ޗާލޭ ބަލަން

$4
ފުރިހަމަވާނީ އަތުއޮތް ފައުނުލާ
*ފައްޓަރުބައި އެޅުމުން ކަރުގާ
ނޭންގޭނޭ ބުނަން ހެދުމުގެ ރީތިކަން
*ބޭނުންވާ ފަރިކަން އޭގާ ބަލަން

$N
ކިނާރީއާ
*ބޯވަޅާ އުޖާލާވާތީ`,

  englishLyrics: `#M
Minivannvayaa kulhelaashe thaazaa
*Mee nishaaney ujaalaa
#1
Jaan fidhaavee bathalun
*Saafuve seedhaa azumaa roohun
Ramzun dhirey ehandhaan fazaagaa
*Mee nishaaney ujaalaa
#2
Roohudhevey mee vathanah
*Loabi dheveynee gaumaa dheenah
Minnayy shuooru dhidhain favaalaa
*Mee nishaaney ujaalaa
-
$M
Kinaareeaa boavalhaa ujaalaavaathee
*Kinaareeaa boavalhaa ujaalaavaathee
Eythedhey balaalumah maareehchey
*Balaalumah dhalhaalhaey fariey chaaley
Meethedhey raahjeygaa annhenun maareehchey
*Eyrulee saadhaa hedhunnthah chaaley
$1
Feyraameymee dhivehimi bimugaa
*Dhivehinnkan anngaadheynee
Kasabuge vidhumaa iruvai hedhumaa
*Maareehchey fandunuve vaaney balan
$2
Feyleegaavaa chaaloo baithah
*Anngaadheyn beynunnveebaa
Meegaa vaaira holhuvai ayythun
*Holhuvaifi kolhuthah chaaley balan
$3
Furihamavaanee athuoyy faunulaa
*Fahtarubai elhumun karugaa
Neynngeyney bunan hedhumuge reethikan
*Beynunnvaa farikan eygaa balan
$4
Kinaareeaa
*Boavalhaa ujaalaavaathee`,
},
{
  id: 77,
  name: `Moonuburugaa`,
  genre: 'Thinberu',
  lyrics: `#M
ތޫނު ހަނދުފާޅުވީހެން ހީވޭ ވިލާތެރޭ
*މޫނު ބުރުގާ ނެގީމާ މިރޭ

#1
ނިއުމަތެއްމީ އިނގޭ
*ލިއުމަކުން ސިފަ ނުވެވޭ
ގިއުޅު އަތުކުރި ފެނިފާ ހިތް އުދުހުނެ ފަޒާތެރޭ
*ގިއުޅު އަތުކުރި ފެނިފާ ހިތް އުދުހުނެ ފަޒާތެރޭ
*މޫނު ބުރުގާ ނެގީމާ މިރޭ

#2
ބުނި ބަހެއްމީ ތެދޭ
*އުނިކަމެއް ހިލާނުވޭ
ތުނިއެ ނިޔަފަތި ފެނިފާ ފިނިކުރުވިޔެ މިމޭތެރޭ
*ތުނިއެ ނިޔަފަތި ފެނިފާ ފިނިކުރުވިޔެ މިމޭތެރޭ
*މޫނު ބުރުގާ ނެގީމާ މިރޭ

#3
ހުރަހަކާ ނުލާ މަގޭ
*ކުރިމަތިން ސޫރަވެވޭ
ކުރަނގިފަދަ ލޯ ފެނިފާ ކުޅުހިކުނީ އަނގައިތެރޭ
*ކުރަނގިފަދަ ލޯ ފެނިފާ ކުޅުހިކުނީ އަނގައިތެރޭ
*މޫނު ބުރުގާ ނެގީމާ މިރޭ

#4
މާލުނެތް ފަޤީރެކޭ
*ފާލު ހިތު ނެއްޓި ރޮވޭ
ސާލުމޮޅި ލާންޖެހުނީ ހާލުދެރަވެ މިކަނޑު ތެރޭ
*ސާލުމޮޅި ލާންޖެހުނީ ހާލުދެރަވެ މިކަނޑު ތެރޭ
*މޫނު ބުރުގާ ނެގީމާ މިރޭ`,

  englishLyrics: `#M
Thoonu handhufaalhuveehen heevey vilaatherey
*Moonu burugaa negeemaa mirey
#1
Niumathehmee ingey
*Liumakun sifa nuvevey
Giulhu athukuri fenifaa hiyy udhuhune fazaatherey
*Giulhu athukuri fenifaa hiyy udhuhune fazaatherey
*Moonu burugaa negeemaa mirey
#2
Buni bahehmee thedhey
*Unikameh hilaanuvey
Thunie niyafathi fenifaa finikuruviye mimeytherey
*Thunie niyafathi fenifaa finikuruviye mimeytherey
*Moonu burugaa negeemaa mirey
#3
Hurahakaa nulaa magey
*Kurimathin sooravevey
Kurangifadha loa fenifaa kulhuhikunee angaitherey
*Kurangifadha loa fenifaa kulhuhikunee angaitherey
*Moonu burugaa negeemaa mirey
#4
Maaluneyy faqeerekey
*Faalu hithu nehti rovey
Saalumolhi laannjehunee haaludherave mikandu therey
*Saalumolhi laannjehunee haaludherave mikandu therey
*Moonu burugaa negeemaa mirey`,
},
{
  id: 78,
  name: `Naamaan`,
  genre: 'Thinberu',
  lyrics: `#S
ކަޅު އަނދިރި ކަޅު ކަންމަތީން ކަޅުމަން ބިޔަ ހިޔަނި ވެލާ
ފަޅުގޯޅި ތަކު ވަޅުތަން އެދި ދޮޅު ހާސް ކަތު ބިރު އުތުރި އަރާ
*މުޅި ރަށު ތެރެ ނާމާން ވެލާ
މުޅި ރަށު ތެރެ ނާމާން ވެލާ

#M
ރަށުތެރެ ބަލަ އަނދިރިވަނީ ކަޅުފޮއެރޭ ކަޅުވެލަނީ
*މަގުތައް މަތީ ދަމުހިނގާ ބޮޑުއަށި މަތީ ސޮލަވާތް ކިޔަވާ
*ހިތްތައް ބިރު އުތުރި އަރާދަނީ ހޭ

#1
ރަށުތެރޭ މުޅިން ދޮން ވެލިލާ ވަލުތެރޭގަ ދުން ޖަހާ
*ވަލުތެރޭގަ ދުން ޖަހާ
ކިޔެވެލި މޮޅު ކިޔެވުމާ މުޅި ރަށްވަށާ ހަނުހިނގާ
*މުޅި ރަށްވަށާ ހަނުހިނގާ
*އެންމެން އެކުވެ ހޭބޯނާރާ ހިތްތައް ބިރު އުތުރި އަރަދަނީ ހޭ

#2
މުޅި ރަށުއެކީ ދުންދަނޑިޖަހާ ކަންކަނުގާ ބިގަރުލާ
*ކަންކަނުގާ ބިގަރުލާ
ކަންވެރިބޭބެ އަރިހުގާއި މަގުތައްމަތީ ފެންމަތުރާ
*މަގުތައްމަތީ ފެންމަތުރާ
*އެންމެން އެކުވެ ހޭބޯނާރާ ހިތްތައް ބިރު އުތުރި އަރަދަނީ ހޭ

#3
ރަށުތެރެ މުޅިން ހިމޭންވެލާ ހިތްތައް މުޅިން ބިރުންފިލާ
*ހިތްތައް މުޅިން ބިރުން ފިލާ
ބޮޑުމާލޫދަށް ސޮލަވާތްކިޔަވާ ވެރީންގެ މެދު ބޮނޑިބަތް ބަހާ
*ވެރީންގެ މެދު ބޮނޑިބަތް ބަހާ
*އެންމެން އެކުވެ އުފާނަގާ ހިތްތައް ބިރު މުޅިން ފިލާދަނީ ހޭ`,

  englishLyrics: `#S
Kalhu andhiri kalhu kannmatheen kalhuman biya hiyani velaa
*Falhugoalhi thaku valhuthan edhi dholhu haas kathu biru uthuri araa
Mulhi rashu there naamaan velaa
*Mulhi rashu there naamaan velaa
#M
Rashuthere bala andhirivanee kalhufoerey kalhuvelanee
*Maguthah mathee dhamuhingaa boduashi mathee solavaayy kiyavaa
*Hiyythah biru uthuri araadhanee hey
#1
Rashuthere mulhin dhon velilaa valuthereyga dhun jahaa
*Valuthereyga dhun jahaa
Kiyeveli molhu kiyevumaa mulhi rahvashaa hanuhingaa
*Mulhi rahvashaa hanuhingaa
*Ennmen ekuve heyboanaaraa hiyythah biru uthuri aradhanee hey
#2
Mulhi rashueki dhunndhandijahaa kannkanugaa bigarulaa
*Kannkanugaa bigarulaa
Kannveribeybe arihugaai maguthahmathee fennmathuraa
*Maguthahmathee fennmathuraa
*Ennmen ekuve heyboanaaraa hiyythah biru uthuri aradhanee hey
#3
Rashuthere mulhin himeynnvelaa hiyythah mulhin birunnfilaa
*Hiyythah mulhin birun filaa
Bodumaaloodhah solavaayykiyavaa vereennge medhu bondibayy bahaa
*Vereennge medhu bondibayy bahaa
*Ennmen ekuve ufaanagaa hiyythah biru mulhin filaadhanee hey`,
},
{
  id: 79,
  name: `Namuru Annaanethi`,
  genre: 'Thinberu',
  lyrics: `#M
ރަށުގެވާއެންމެ ކަތުން ހަމްދުސަނާ ގޮވާދުލުން
*ނަމުރުއަންނާނެތީ ހޭރެނީ

#1
ހުޅަނގު ވައިގާ އަރާ
*ހުވަ ބަބުރު ދޮންބަފާ
ބުޅަލު ދަތްދޮޅި ހަލުވާލެއްވިގޮތުން ބިރުން ރޮނީ
*ބުޅަލު ދަތްދޮޅި ހަލުވާލެއްވިގޮތުން ބިރުން ރޮނީ
*ނަމުރުއަންނާނެތީ ހޭރެނީ

#2
ފޯވެނަމުރުގެ ދެލޯ
*ފޯޅަތުން ހިތްކިޔާ
ފޯވެ ކިރިކީ ދަށުން ހިނިގުދު ފެނިފައޭ ރޮނީ
*ފޯވެ ކިރިކީ ދަށުން ހިނިގުދު ފެނިފައޭ ރޮނީ
*ނަމުރުއަންނާނެތީ ހޭރެނީ`,

  englishLyrics: `#M
Rashugevaaennme kathun hamdhusanaa govaadhulun
*Namuruannaanethee heyrenee
#1
Hulhangu vaigaa araa
*Huva baburu dhonnbafaa
Bulhalu dhayydholhi haluvaalehvigothun birun ronee
*Bulhalu dhayydholhi haluvaalehvigothun birun ronee
*Namuruannaanethee heyrenee
#2
Foavenamuruge dheloa
*Foalhathun hiyykiyaa
Foave kirikee dhashun hinigudhu fenifaey ronee
*Foave kirikee dhashun hinigudhu fenifaey ronee
*Namuruannaanethee heyrenee`,
},
{
  id: 80,
  name: `Neylhey Biskukulhey`,
  genre: 'Kaasi',
  lyrics: `#M
ނާނާ ދެކޭށޭ
*ނޭޅޭ ބިސްކުކުޅޭ މިތާއުޅެނީ

#1
ހާވާ ކުކުޅޭ މީބުނޭ
*ހާވާތީ ކެއްވާ ވަރެއް ނޫނޭ

#2
ހާމުޑި ކުކުޅޭ މީބުނޭ
*ހާލާ ފިޔޮކާ ކައި ހަދާއުޅެޔޭ

-
$M
ކަލޯމެން ކުކުޅާ ބިސްބަނޑު ގައި ތާށިވަނީހޭ
*ކަލޯމެން ކުކުޅާ ބިސްބަނޑު ގައި ތާށިވަނީހޭ

$1
ނޭނގި ބިހެއް ބޭރުވިޔަސް ހޭރިނަގާނޭ
*އަނހާ ނޭނގިބިހެއް
*ނޭނގި ބިހެއް ބޭރުވިޔަސް ހޭރިނަގާނޭ
ކަލޯ ކުކުޅާއެކަނި ފުފެން ގޮނޑުގަ އިނީހޭ
*ކަލޯމެން ކުކުޅާ ބިސްބަނޑު ގައި ތާށިވަނީހޭ

$2
ހުދުކުކުޅެއް ހަތް ބިހުގައި ހާލި ހަދާތްޕޭ
*އަނހާ ހުދުކުކުޅެއް
*ހުދުކުކުޅެއް ހަތް ބިހުގައި ހާލި ހަދާތްޕޭ
ކަލޯ ކުކުޅާއެކަނި ފުފެން ގޮނޑުގަ އިިނީހޭ
*ކަލޯމެން ކުކުޅާ ބިސްބަނޑު ގައި ތާށިވަނީހޭ`,

  englishLyrics: `#M
Naanaa dhekeyshey
*Neylhey biskukulhey mithaaulhenee
#1
Haavaa kukulhey meebuney
*Haavaathee kehvaa vareh nooney
#2
Haamudi kukulhey meebuney
*Haalaa fiyokaa kai hadhaaulheyey
-
$M
Kaloamen kukulhaa bisbandu gai thaashivaneehey
*Kaloamen kukulhaa bisbandu gai thaashivaneehey
$1
Neyngi biheh beyruviyas heyrinagaaney
*Anhaa neyngibiheh
*Neyngi biheh beyruviyas heyrinagaaney
Kaloa kukulhaaekani fufen gonduga ineehey
*Kaloamen kukulhaa bisbandu gai thaashivaneehey
$2
Hudhukukulheh hayy bihugai haali hadhaayypey
*Anhaa hudhukukulheh
*Hudhukukulheh hayy bihugai haali hadhaayypey
Kaloa kukulhaaekani fufen gonduga ineehey
*Kaloamen kukulhaa bisbandu gai thaashivaneehey`,
},
{
  id: 81,
  name: `Nidhaalumun`,
  genre: 'Taki',
  lyrics: `#M
ނިދާލުމުން ހީވިޔޭ މަށައް ގޮވާލައިފިޔޭ
*މަދާހިތުން އޮތްކަމުން އެނދުން ނަގައިވެސްފިޔޭ
ހިލާބުނަން ނޭންގެޔޭ އުޅޭ މިހުވަފެންތެރޭ
*ބިލާހަކަސް ބިރުތަކުން މިހިތް ފުރާލައިފިޔޭ
*މިހިތް ފުރާލައިފިޔޭ

#1
ބޯވަޅުއެޅި ރަތްލިބާސް ލައިގެން ތަކަހޮޅިއަޅާ
*ފައިގެ ދެފުންނާބުގާ ވާ ދެކަށިންވެސް ހިނގާ
ދުރުމިއަޅާ ބެލިޔަކަސް ފައިބިނމުގާ ނުޖެހެއޭ
*ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ
ބިރުވެރި ގޮތަކައް ހެމުން ސިފައެ ބަދަލުކޮއްލަމުން
*އަރުވަންފެށި ދުންތަކާ އެކުގާ ގެއްލިއްޖެޔޭ

#2
ހަނދުވަރުދޭ މޫސުމާ ގުޅިގެން އިރުއޮއްސުމާ
*އަތިރިމަތީ ގޮނޑުދޮށުން ފެނިންގެއްލޭ ގޮތްވުމާ
މިހިރަމިހިރަ ކަންތަކުން ހިތްވެސް ބިރުގެނަފިޔޭ
*ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ
ތަކުރުގެ ދޮންސަންޕަޔާ އެހެނަސް ގުޅެވިއްޖެޔޭ
*ހުކުރުވިލޭރޭ މަށާ ކައިވެނިވެސް ވެއްޖެޔޭ

#3
ދަންވަރުވިކަސް ހެވޭ ނިންޖެއްހަމަ ނާދެޔޭ
*ފެންވެރުމާ ނަލަވެގެން ބޭރައްގޮސް އާދެޔޭ
ހިތްވަރުއެލި މިކަމުގާ ބޯހާސްވާގޮތް ވެޔޭ
*ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ
ދަންބެރު ޖެހުމާއެކީ ފަޖުރުލުމާވެސްއެކީ
*ނަންކުރި ސަންޕާމަގޭ ގޯތިފަލައް ދާނެޔޭ

#4
ސަހަރޯވެސް ހީވެޔޭ އަހަރެން މޮޔަވެއްޖެޔޭ
*މަހަކަށްވުރެ ގިނަދުވަސް ވާނެކަމެއް ނޭނގެޔޭ
ހުހަކަށް މިބުނާމިކަން ދާނެކަމެއް ނޭނގެޔޭ
*ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ ބަލަ`,

  englishLyrics: `#M
Nidhaalumun heeviyey mashah govaalaifiyey
*Madhaahithun oyykamun endhun nagaivesfiyey
Hilaabunan neynngeyey ulhey mihuvafenntherey
*Bilaahakas biruthakun mihiyy furaalaifiyey
*Mihiyy furaalaifiyey
#1
Boavalhuelhi rayylibaas laigen thakaholhialhaa
*Faige dhefunnaabugaa vaa dhekashinnves hingaa
Dhurumialhaa beliyakas faibinmugaa nujeheey
*Bala bala bala bala bala bala
Biruveri gothakah hemun sifae badhalukohlamun
*Aruvannfeshi dhunnthakaa ekugaa gehlihjeyey
#2
Handhuvarudhey moosumaa gulhigen iruohsumaa
*Athirimathee gondudhoshun feninngehley goyyvumaa
Mihiramihira kannthakun hiyyves birugenafiyey
*Bala bala bala bala bala bala
Thakuruge dhonnsannpayaa ehenas gulhevihjeyey
*Hukuruvileyrey mashaa kaivenives vehjeyey
#3
Dhannvaruvikas hevey ninnjehhama naadheyey
*Fennverumaa nalavegen beyrahgos aadheyey
Hiyyvarueli mikamugaa boahaasvaagoyy veyey
*Bala bala bala bala bala bala
Dhannberu jehumaaekee fajurulumaa vesekee
*Nannkuri sannpaamagey goathifalah dhaaneyey
#4
Saharoaves heeveyey aharen moyavehjeyey
*Mahakahvure ginadhuvas vaanekameh neyngeyey
Huhakah mibunaamikan dhaanekameh neyngeyey
*Bala bala bala bala bala bala`,
},
{
  id: 82,
  name: `Nookokaa`,
  genre: 'Kaasi',
  lyrics: `#S
ބޭނުމީނޫކޮކާ
މާފޮޅޭބަގީޗާގާ

#M
ބަބުޅާފިޔަގަނޑޫގެ ކުލަވަރު ތަރިއެއް ފަދަ ރަންކޮކާ
*ނަފުސާރޫހައް އުފާދީ ފިނިކަން ގެނުވާނޭބާ
މަތިވެރިތުނި ލާލުފަދަ ދީލަތިވީ ތުނި ނޫކޮކާ
*ފަތިހުގެ ހަނދުވަރު މަތިން ފެނި ދަތިކަން ފިލުވޭނޭބާ

#1
މަޑުމަޑު ލުއި އުދުހުމުގާ
*ހިތްގައިމު ފަޒާގެތެރޭ
ނަލަރިހިއަލި ހަނދުވަރުގާ
*ބަނަކަން ނެތް ޖައްވުތެރޭ
ކަނޑު ނީލަންކުލަ ދެފިޔައައް ލިބިގެންވީ ނޫކޮކާ
*ނަލަނަލަ ފަރިޗާލު ހަރަކާތް ކުރަމުން އައިރަންކޮކާ
*ނާޒުކު އުފަލެއް ކަމައްދެކި ފިނިކަން ދީފާނޭބާ

#2
މާމަލުގެ ވަހާއިކުނިން
*ހާހެއް ހާސިލްވޭތޯ
މާއެތަކެއް ޗާލުބެލުން
*ކުލަރަން ވިދުމެއްވޭތޯ
މަސްތުވެ ހިތައް ދިވާނާ ކޮއްލާފަދަ ރަންކޮކާ
*ޔާގޫތުގެ ކުލަ އެދެލޮލައް ލިބިގެންވީ ނޫކޮކާ
*ރުހިގެން ގުޅެންއެކީއެކީގާ ލޯބިން އަންނާނޭބާ

-
$M
އަލީލާން ބަލީލާން ހަތްދަގޮބަޅި ފަތީލާން
އަރިގެންގޮސް މުދުލާން
އަރިއަދޫ ގަހުއިންމާ
އަދި ނުފޮޅޭ ކުދިރަތްމާ
މާލެމަތީ ގޮވާލިހާ
ރަތްދަނޑީ ރަތްކޮކާއްކޯ ރަތްދަނޑީ ރަތްކޮކާއްކޯ

$1
އެލޯވަޅިޔަ މިލޯވަޅިޔަ
*މެދުގައޮތީ ރަންދެވަޅިޔަ
ކެލާކަތަކަ ބޯވަޅިޔަ
*ކުކުޅުވެރޭ ގޮބަޅިވެރޭ
ސާންސާން ތިންއިހާ
*ކިހާއް ކިހާއް ނާކަބޯ
ޕަންޖާގެރި ހަބީބޯ
*ކާޅުކަކުނި ރަންކަންބޯ
ކަރުކަތިލާ ތިނޯހުލާ
*ފަލާމުގުރާ ކާންކަމައްޕީސް
ތެލަކަ ތެލަކަ ތެލަ މޫންޖޯ ބިސް ކޮށިތާލޯ މޫންޖޯ
*ކަލޭކާން މަދޭމާ އެންމެން މުއްކަވާ ކޮށާ
ރޯދަޔާއި ބޯދަޔާއި ނިޔަތް ތަޅާނީޅަޅޯ
*ނިޔަތް ތަޅާނީޅަޅޯ ނިޔަތް ތަޅާނީޅަޅޯ

$2
އެލަގަލަ މިލަގަލަ ސުލުގިލަ ފައަގަލަ
އައްސިދަމަހުގަ ލަނޑާހިފާ
ގުޅުބިލަވަލުގަ ބޮނދާފިލަން ދާންދާންދާން
ތެލަކަ ތެލަކަ ތެލަ މޫންޖޯ ބިސް ކޮށިތާލޯ މޫންޖޯ
*ކަލޭކާން މަދޭމާ އެންމެން މުއްކަވާ ކޮށާ
ރޯދަޔާއި ބޯދަޔާއި ނިޔަތް ތަޅާނީޅަޅޯ
*ނިޔަތް ތަޅާނީޅަޅޯ ނިޔަތް ތަޅާނީޅަޅޯ`,

  englishLyrics: `#M
Beynumeenookokaa
*Maafolheybageechaagaa
#1
Babulhaafiyagandooge kulavaru tharieh fadha rannkokaa
*Nafusaaroohah ufaadhee finikan genuvaaneybaa
Mathiverithuni laalufadha dheelathivee thuni nookokaa
*Fathihuge handhuvarumathin feni dhathikan filuveyneybaa
#2
Madumadu lui udhuhumugaa
*Hiyygaimu fazaagetherey
Nalarihiali handhuvarugaa
*Banakan neyy jahvutherey
Kandu neelannkula dhefiyaah libigennvee nookokaa
Nalanala farichaalu harakaayy kuramun airannkokaa
*Naazuku ufaleh kamahdheki finikan dheefaaneybaa
#3
Maamaluge vahaaikunin
*Haaheh haasilveythoa
Maaethakeh chaalubelun
*Kularan vidhumehveythoa
Masthuve hithah dhivaanaa kohlaafadha rannkokaa
Yaagoothuge kula edhelolah libigennvee nookokaa
*Ruhigen gulhennekeeekeegaa loabin annaaneybaa
-
$M
Aleelaan baleelaan hayydhagobalhi fatheelaan
*Arigenngos mudhulaan
Ariadhoo gahuinnmaa
*Adhi nufolhey kudhirayymaa
Maalemathee govaalihaa
*Rayydhandee rayykokaahkoa rayydhandee rayykokaahkoa
$1
Eloavalhiya miloavalhiya
*Medhugaothee ranndhevalhiya
Kelaakathaka boavalhiya
*Kukulhuverey gobalhiverey
Saannsaan thinnihaa
*Kihaah kihaah naakaboa
Pannjaageri habeeboa
*Kaalhukakuni rannkannboa
Karukathilaa thinoahulaa
*Falaamuguraa kaannkamahpees
Thelaka thelaka thela moonnjoa bis koshithaaloa moonnjoa
*Kaleykaan madheymaa ennmen muhkavaa koshaa
Roadhayaai boadhayaai niyayy thalhaaneelhalhoa
*Niyayy thalhaaneelhalhoa niyayy thalhaaneelhalhoa
$2
Elagalamilagala sulugilafaagala
Ahsidhamahuga landaahifaa
Gulhubilavaluga bondhaafilan dhaanndhaanndhaan
Thelakathelaka moonnjoa bis koshithaaloa moonnjoa
*Kaleykaan madheymaa ennmen muhkavaakoshaa
Roadhayaai boadhayaai niyayy thalhaaneelhalhoa
*Niyayy thalhaaneelhalhoa niyayy thalhaaneelhalhoa`,
},
{
  id: 83,
  name: `Numibilloori`,
  genre: 'Thinberu',
  lyrics: `#M
ނުމި ބިއްލޫރި ނަންކީ މަގުގައި
*ނުނިދިއްޖޭ މިތެރި ހޯރަ ޒަމާން

#1
ރަތަ ހިލޮޅި ފައި ފިނދަނަ ހުރި ބޮޑަނާ
*ރަތަ ހިލޮޅި ފައި ފިނދަނަ ހުރި ބޮޑަނާ
އަތަކު ނުޖެހޭ ލޮލަށް ފެނިފެނިފާ
*އަތަކު ނުޖެހޭ ލޮލަށް ފެނިފެނިފާ

#2
އަލަކަ ދުށިމާ ދެކުނު ދޮންދޫންޏާ
*އަލަކަ ދުށިމާ ދެކުނު ދޮންދޫންޏާ
ނަލަކަމެއް ވާނެ މިކަން ލިބިލިބިފާ
*ނަލަކަމެއް ވާނެ މިކަން ލިބިލިބިފާ

#3
ކަނަ ދެތިން ގަހުގަ އެތިބަ މާކަނަޔާ
*ކަނަ ދެތިން ގަހުގަ އެތިބަ މާކަނަޔާ
މަތަމެނުހިފޭ ހިތުން ސިހިސިހިފާ
*މަތަމެނުހިފޭ ހިތުން ސިހިސިހިފާ

#N
ޗިކުޅިވާ ބަނޑާ މެރާ ޗިކުޅީމާ
*ޗިކުޅިވާ ހޯމެރާ ޗިކުޅީމާ
ޗިކުޅިވާ ނާމޭ މެރާ ޗިކުޅިމާ
*ޗިކުޅިވާ ހޯމެރާ ޗިކުޅީމާ

#N
ގޭގޭ ވާރެވާ ގޭގޭ
*ވާރެވާ
ގޭގޭ
*ވާރެވާ`,

  englishLyrics: `#M
Numi bihloori nannkee magugai
*Nunidhihjey mitheri hoara zamaan
#1
Ratha hilolhi fai findhana huri bodanaa
*Ratha hilolhi fai findhana huri bodanaa
Athaku nujehey lolah fenifenifaa
*Athaku nujehey lolah fenifenifaa
#2
Alaka dhushimaa dhekunu dhonndhoonnyaa
*Alaka dhushimaa dhekunu dhonndhoonnyaa
Nalakameh vaane mikan libilibifaa
*Nalakameh vaane mikan libilibifaa
#3
Kana dhethin gahuga ethiba maakanayaa
*Kana dhethin gahuga ethiba maakanayaa
Mathamenuhifey hithun sihisihifaa
*Mathamenuhifey hithun sihisihifaa
#4
Chikulhivaa bandaa meraa chikulheemaa
*Chikulhivaa hoameraa chikulheemaa
Chikulhivaa naamey meraa chikulhimaa
*Chikulhivaa hoameraa chikulheemaa
#5
Geygey vaarevaa geygey
*Vaarevaa
Geygey
*Vaarevaa`,
},
{
  id: 84,
  name: `Odi Beehsaalaa`,
  genre: 'Kaasi',
  lyrics: `#M
އޮޑިބީއްސާލާ އޮޑިކަނދުމަތިކޮށް ފަންވަތު ކުރިލާ ދެވަލައް ހިފަމާ
*އާނ ހުތް
ހިފާލާ
*އާނ ހުތް

#1
އޮޑިގަނޑުގާ ފޮރި ޖަހާ
*ބުރަހެލިކަން ވެރިވުމުން
ބަނޑު ފިލަޔަށް ފެހި އަރާ
*ބޯހާސްވާ ގޮތް ވުމުން
ފަންވަތުކުރިލާ ދެވަލައްހިފަމާ ފަންވަތުކުރިލާ ދެވަލައްހިފަމާ
*އާނ ހުތް
ހިފާލާ
*އާނ ހުތް

#2
ދިގުއަރިޔަށް އޮޑިއަޅާ
*މާމަގުލާ ވަސްޖަހާ
ރުއްބުޑުގާ ވާޖަހާ
*ބެރިވިއްދާލާ ހިފާ
ފަންވަތުކުރިލާ ދެވަލައްހިފަމާ ފަންވަތުކުރިލާ ދެވަލައްހިފަމާ
*އާނ ހުތް
ހިފާލާ
*އާނ ހުތް

#3
ރަށުއެންމޭނަށް ގޮވާ
*ބޮޑުމަގުލާ ވާ އަޅާ
އަންބާމޮޅު އިއްވުމުން
*ތިންރުކުލާ ބަނދެލަމުން
ފަންވަތުކުރިލާ ދެވަލައްހިފަމާ ފަންވަތުކުރިލާ ދެވަލައްހިފަމާ
*އާނ ހުތް
ހިފާލާ
*އާނ ހުތް

-
$M
މިއޮޑި ދުރާލާން އަނހަ ވާނެ ރިޔާލާން
*ވާނޭ ވާނޭ މިއޮޑި މަހަށް ފުރާލާން
އޮޑި މިކަނދު ގަނޑުން ނަގާ ބަނޑުފިލަ ފެނުލާ
*ވާނޭ ވާނޭ މިއޮޑި މަހަށް ފުރާލާން

$1
ފިޔަވަތް އޮޑިގެޔޮކުރާ އޮޑިޔާ މުޅިފެނުޖަހާ
*އޮޑިޔާ މުޅިފެނުޖަހާ
ކިޔަ ހަރަ ހުރިހިތް މިތާ ރޯނުން ބައްދާ އަޅަ ކަކަ
*ރޯނުން ބައްދާ އަޅާ
އޮޑި ހުރެ ފެނުލާ
*ވާނޭ ވާނޭ މިއޮޑި މަހަށް ފުރާލާ

$2
އިރުވަރު މޮޅުމޫސުމާ އިސްމަތް ކިޔަވާ ހަދަ ކަކަ
*އިސްމަތް ކިޔަވާ ހަދާ
ހައްސަ ހަގުން ވަތްފުރާ ފަންވަތުލާ ރުއްކުރާން
*ފަންވަތުލާ ރުއްކުރާން
އޮޑި ހުރެ ފެނުލާ
*ވާނޭ ވާނޭ މިއޮޑި މަހަށް ފުރާލާ

$3
ދެވަލައްލާ އޮޑިދަށުން ބާލަން މަތި ކަނދު އަޅާ
*ބާލަން މަތި ކަނދު އަޅާ
ރަށު ކުދިބޮޑު އެންމެނަށް ވަލުގާ ހިފުމަށް ގޮވާ
*ވަލުގާ ހިފުމަށް ގޮވާ
އޮޑި ހުރެ ފެނުލާ
*ވާނޭ ވާނޭ މިއޮޑި މަހަށް ފުރާލާ

$4
މިއޮޑި ފުރާލާނަމޭ
*މަށަށް މަހަށް ދެވުނިއްޔާ
މަސްގަނޑުގާ ލޮނު ވިއްޔާ
*މަށަށް މިތާ ހުރެވެންޔާ`,

  englishLyrics: `#M
Odibeehsaalaa odikandhumathikoh fannvathu kurilaa dhevalah hifamaa
*Aan huyy
Hifaalaa
*Aan huyy
#1
Odigandugaa fori jahaa
*Burahelikan verivumun
Bandu filayah fehi araa
*Boahaasvaa goyy vumun
Fannvathukurilaa dhevalahhifamaa fannvathukurilaa dhevalahhifamaa
*Aan huyy
Hifaalaa
*Aan huyy
#2
Dhiguariyah odialhaa
*Maamagulaa vasjahaa
Ruhbudugaa vaajahaa
*Berivihdhaalaa hifaa
Fannvathukurilaa dhevalahhifamaa fannvathukurilaa dhevalahhifamaa
*Aan huyy
Hifaalaa
*Aan huyy
#3
Rashuennmeynah govaa
*Bodumagulaa vaa alhaa
Annbaamolhu ihvumun
*Thinnrukulaa bandhelamun
Fannvathukurilaa dhevalahhifamaa fannvathukurilaa dhevalahhifamaa
*Aan huyy
Hifaalaa
*Aan huyy
-
$M
Miodi dhuraalaan anha vaane riyaalaan
*Vaaney vaaney miodi mahah furaalaan
Odi mikandhu gandun nagaa bandufila fenulaa
*Vaaney vaaney miodi mahah furaalaan
$1
Fiyavayy odigeyokuraa odiyaa mulhifenujahaa
*Odiyaa mulhifenujahaa
Kiya hara hurihiyy mithaa roanun bahdhaa alha kaka
*Roanun bahdhaa alhaa
Odi hure fenulaa
*Vaaney vaaney miodi mahah furaalaa
$2
Iruvaru molhumoosumaa ismayy kiyavaa hadha kaka
*Ismayy kiyavaa hadhaa
Hahsa hagun vayyfuraa fannvathulaa ruhkuraan
*Fannvathulaa ruhkuraan
Odi hure fenulaa
*Vaaney vaaney miodi mahah furaalaa
$3
Dhevalahlaa odidhashun baalan mathi kandhu alhaa
*Baalan mathi kandhu alhaa
Rashu kudhibodu ennmenah valugaa hifumah govaa
*Valugaa hifumah govaa
Odi hure fenulaa
*Vaaney vaaney miodi mahah furaalaa
$4
Miodi furaalaanamey
*Mashah mahah dhevunihyaa
Masgandugaa lonu vihyaa
*Mashah mithaa hurevennyaa`,
},
{
  id: 85,
  name: `Raja Rani`,
  genre: 'Taki',
  lyrics: `#M
ރާޖަ ރާނީ ބަގީޗާ ދުށީމުހޭ
*ދާދިކާއިރިން ފެނޭތޯ ނުދާނުހޭ

#1
ދާބެރާއޫ ސިތާރާ ނަގާ ރާޖަހާ
ދާބެރާއޫ
ދާބެރާއޫ ސިތާރާ ނަގާ ރާޖަހާ
*ރާބެލިއްޔާ ކިޔާހާބޭ ވާހުވާ

#2
ޢަރީ ބުނާޗުކުރާ ރަންގިޔާ އެތާގެ ޖޯޝަން
ޖަރީގެ ކަމަރުތަކުއްޅާ އަދަޅަތަކާ އަލިކަން
ޕަރީންގެ ޒަރުބަހަތަކުގެ ކޯރިޔާގެ ބަލާހުޅިކަން
*ދަރީން ގޮވާނަގަނީ އާތް ޕަރީ މަގޭ މޮޔަކަން`,

  englishLyrics: `#M
Raaja raanee bageechaa dhusheemuhey
*Dhaadhikaairin feneythoa nudhaanuhey
#1
Dhaaberaaoo sithaaraa nagaa raajahaa
*Dhaaberaaoo
Dhaaberaaoo sithaaraa nagaa raajahaa
*Raabelihyaa kiyaahaabey vaahuvaa
#2
Iaree bunaachukuraa ranngiyaa ethaage joashan
*Jareege kamaruthakuhlhaa adhalhathakaa alikan
Pareennge zarubahathakuge koariyaage balaahulhikan
*Dhareen govaanaganee aayy paree magey moyakan`,
},
{
  id: 86,
  name: `Raivareh Hedheema`,
  genre: 'Thinberu',
  lyrics: `#M
ރައިވަރެއް ހެދީމާ
*ތާރުޅި ވެއްޖައިމުތާ
ތަކު ހުއްޓަސް ތިމާ
*ބާރު ނިކަން ކޫޑަކަސް
ޅަކެޔަސް ބަނޑުފުރާ
*ކާހަސަނާ ފަރުމަސްނޫން

#1
އަނހަ އަޑުބޭ ބުނޭ
*ބަހާ ދިން ހަނޑުލަކޫ ތެރޭ
އަނހަ ކަފުޅޭ މަނިކެގެ
*ބަފާކަން ކެނޑީ ހިނގައްޖޭ
އަނހަ ސަހަރޯ ދަރުމައޭ
*އަނހަ ސަހަރޯ ދަރުމައޭ
#2
ކަމާ ހަމަ ކަންފަށާ
*ކުކުޅު ކަތިލާހަދާ
ކަމާ އެންމެން އެކީ
*ޒަމާނޭމީ އުފާވާ
އަނހަ ސަހަރޯ ދަރުމައޭ
*އަނހަ ސަހަރޯ ދަރުމައޭ
#3
ނުވަތަ ނުބުނާނުހޭ
*ނުވަތަވީ ހުންނަންހޭ
ނުވަތަ މަށަ ރުޅިވީހޭ
*ނުވަތަ ގަދަ ލޯބިވިހޭ
އަނހަ ސަހަރޯ ދަރުމައޭ
*އަނހަ ސަހަރޯ ދަރުމައޭ
#N
*ތާރުޅި ވެއްޖައިމުތާ
ރައިވަރެއް ހެދީމާ
ރައިވަރެއް ލިޔުނީމާ
ރައިވަރެއް ކިއީމާ`,

  englishLyrics: `#M
Raivareh hedheemaa
*Thaarulhi vehjaimuthaa
Thaku huhtas thimaa
*Baaru nikan koodakas
Lhakeyas bandufuraa
*Kaahasanaa farumasnoon
#1
Anha adubey buney
*Bahaa dhin handulakoo therey
Anha kafulhey manikege
*Bafaakan kendee hingahjey
Anha saharoa dharumaey
*Anha saharoa dharumaey
#2
Kamaa hama kannfashaa
*Kukulhu kathilaahadhaa
Kamaa ennmen ekee
*Zamaaneymee ufaavaa
Anha saharoa dharumaey
*Anha saharoa dharumaey
#3
Nuvatha nubunaanuhey
*Nuvathavee hunnanhey
Nuvatha masha rulhiveehey
*Nuvatha gadha loabivihey
Anha saharoa dharumaey
*Anha saharoa dharumaey
#4
*Thaarulhi vehjaimuthaa
Raivareh hedheemaa
Raivareh liyuneemaa
Raivareh kieemaa`,
},
{
  id: 87,
  name: `Rey Vissaara`,
  genre: 'Baburu',
  lyrics: `#M
*އައްޗާ ރޭވިއްސާރޭ
އައްޗޭންބޭރެ އައްޗޭންބޭރެ މައްޗައް ސިދިޔޯން ވަރިޒުވަޔޯ
ރޭ ވިއްސާރަޔޯ
ވެހި ސިއްސާލީއްޔޯ

#1
*ވިއްސާލަޔޯ ވިއްސާ
ފެން ނުވިއްވިއްސާ ވިއްސާލަޔޯ ވިއްސާ ސިނގިރިބަނަ
ވެރިވެ ބަނަ
އަނދިރި ބަނަ
މަހުރުޖޫ
ރަޖަލަރާ
ބަނަވެ ބަނަ

#2
*ވެނުވެހި ވެހިދޭ
ބަލަމިތާ
ބޮޑު އެއްޗިކި
ހުރެމިތާ
ބަލަމިތާ`,

  englishLyrics: `#M
*Ahchaa reyvihsaarey
Ahcheynnbeyre ahcheynnbeyre mahchah sidhiyoan varizuvayoa
Rey vihsaarayoa
Vehi sihsaaleehyoa
#1
*Vihsaalayoa vihsaa
Fen nuvihvihsaa vihsaalayoa vihsaa singiribana
Verive bana
Andhiri bana
Mahurujoo
Rajalaraa
Banave bana
#2
*Venuvehi vehidhey
Balamithaa
Bodu ehchiki
Huremithaa
Balamithaa`,
},
{
  id: 88,
  name: `Roasheyvi Hithaamain`,
  genre: 'Nala',
  lyrics: `#M
ރޯށޭވީ ހިތާމައިން ދޫވީތި ތާއޭ
*އަތުވާނޭބާއޭ ތޭރަވާ
ފަރުވާވެ ހުރީމޭ އަތިރިމަތީ ގައި
*ފައިތިލަތައް ފެނުގައި ރޮދިޖަހާ
*ރޯށޭވީ ހިތާމައިން

#1
ގަސްތަކު ތެރޭގަ ފިލާމައޮތިމޭ
*މަޅި ފަތިޖަހައިގެން ހިފޭތޯ ބެލީމޭ
ނަމަވެސް ނުހިފުނޭ ރީތި ތޭރަވާ

#2
ހޭލާމަ އިނދެ ރޭގަނޑާއި ދުވާލާ
*ނޭވާ ކަމައްވި މަގޭތޭރަވާތާ
ފޭރާކަމައް ފަތްތަކުންވޭނިވާ

#3
ތޮށިގަނޑު މަތީގަ ފެނޭތޯ ދުވީމޭ
*ބާވާ ކަނޑޫވެސް ބޮނދާއޮވެ ބެލީމޭ
ގިސްލާ ރޮވިއްޖޭ މަށައް ވީދެރައިން`,

  englishLyrics: `#M
Roasheyvee hithaamain dhooveethi thaaey
*Athuvaaneybaaey theyravaa
Faruvaave hureemey athirimatheegai
*Faithilathah fenugai rodhijahaa
*Roasheyvee hithaamain
#1
Gasthaku thereyga filaamaothimey
*Malhi fathijahaigen hifeythoa beleemey
*Namaves nuhifuney reethi theyravaa
#2
Heylaama indhe reygandaai dhuvaalaa
*Neyvaa kamahvi mageytheyravaathaa
*Feyraakamah fayythakunnveynivaa
#3
Thoshigandu matheega feneythoa dhuveemey
*Baavaa kandooves bondhaaove beleemey
*Gislaa rovihjey mashah veedherain`,
},
{
  id: 89,
  name: `Saafu Loayybeh`,
  genre: 'Taki',
  lyrics: `#M
ސާފު ލޯތްބެއް ހިނގާނޭގޮތް ވިއްޔާ
*ލޯތްބެއް ހިނގާނޭގޮތް ވިއްޔާ
މިހާލޯބީގާ ކުރާނޭތޯ ހަދިޔާ
*ލޯބީގާ ކުރާނޭތޯ ހަދިޔާ

#1
ވީތަނަކުން ގެންނަން އަދިމާ ބިންނަން ވާނޭ
*ވީތަނަކާ ވާހާތަނެއް ހޯދަންވާނޭ
ރީތިމާތައް ފޮޅޭނޭ ގޮތްވިއްޔާ
*މާތައް ފޮޅޭނޭ ގޮތްވިއްޔާ

#2
ހޯދޭހާތާކުން އެއްމެން ހޯދަން ގޮސްގެން
*ހޯދުނުހާތާކުން ގެނެސް އިންދައިދީގެން
ލޯބިގަސްތައް ހެދޭނޭ ގޮތްވިއްޔާ
*ގަސްތައް ހެދޭނޭ ގޮތްވިއްޔާ

#3
ރޯކުރެވޭނޭތޯ މަލުގާ ހުއްޓާވަހެއް
*ނުކުރެހުން ތަކާ އެތައް ޒާތީގޮތެއް
ރޫހުއެމަލައް ގުޅޭނޭ ގޮތްވިއްޔާ
*އެމަލައް ގުޅޭނޭ ގޮތްވިއްޔާ

#4
އިންސާނީހިތެއް ފިސްފިސް ވާތަންދެކެން
*އިންސާފެއް ނުކޮއް ބަލަންވީހޭ ތިބެން
ވިސްނުމުން ކަންވެވޭނޭ ގޮތްވިއްޔާ
*ވިސްނުމުން ކަންވެވޭނޭ ގޮތްވިއްޔާ`,

  englishLyrics: `#M
Saafu loayybeh hingaaneygoyy vihyaa
*Loayybeh hingaaneygoyy vihyaa
Mihaaloabeegaa kuraaneythoa hadhiyaa
*Loabeegaa kuraaneythoa hadhiyaa
#1
Veethanakun gennan adhimaa binnan vaaney
*Veethanakaa vaahaathaneh hoadhannvaaney
Reethimaathah folheyney goyyvihyaa
*Maathah folheyney goyyvihyaa
#2
Hoadheyhaathaakun ehmen hoadhan gosgen
*Hoadhunuhaathaakun genes inndhaidheegen
Loabigasthah hedheyney goyyvihyaa
*Gasthah hedheyney goyyvihyaa
#3
Roakureveyneythoa malugaa huhtaavaheh
*Nukurehun thakaa ethah zaatheegotheh
Roohuemalah gulheyney goyyvihyaa
*Emalah gulheyney goyyvihyaa
#4
Innsaaneehitheh fisfis vaathanndheken
*Innsaafeh nukoh balannveehey thiben
Visnumun kannveveyney goyyvihyaa
*Visnumun kannveveyney goyyvihyaa`,
},
{
  id: 90,
  name: `Thagudheerugaa`,
  genre: 'Kaasi',
  lyrics: `#M
ތަގުދީރުގާ މިހިނގާ ނަޔާވީ
*ގުޅިފާ ނަސީބާ ގަޔާވާ
އަގުބޮޑު ޖަވާހިރު ފަދައިން އަރާމީ
*ރާނީގެ ލޯބިލިބޭތީ

#1
އަރިޔައް ހިނގާލާ
*އަދަދުން ފުރޭހާ
އަރިޔައް ހަދާލާ
*އާޒާދަކުންހީ
ފުރިއުތުރިގެން ހިތް އުފާ ވެދާތީ
*ދުރުގާ ހުރުމުން ކެތްނުވާތީ

#2
އުފަލުން ފުރޭހާ
*ހިނިތުން ވެލާފާ
ތިމަލުން އަރާމާ
*ފޮނި މީރުކަންވާ
ތިޔަރީތިވާ މާވާތާ އެޗާލޫ
*ތިހިތުން އުފާ އަދު ލިބެތީ

#3
ހިނިތުން ވެލާފާ
*މިހިތައް ޝިފާދީ
ފިނިކަން ހިތައްދީ
*އުފަލުން ފުރޭހާ
މިނިވަން ކަމާއެކު ހަޔާތްގާ މާޒީ
*ހިނިތުންވެލާ އެކު ބަލާތީ

-
$M
ރައިވަރަކުން އަޑުލައްވާ ދުވެނަގާ
*ހައިކަން ފިލުވާ ކޯފާ ރުކައްއަރާ
މާރީތިވި ރަނިކަމަނާ ދުވެނަގާ
*ބާރައްހުރެ ހާޅޭއްލަވާ ހިފާނަގާ

$1
ހިތުގާ ބިރުވެރިކަމެއް އުފެދޭހެން މާދުރުން
*ހިތު ވިންދޭ އަވަސްވެގެން ތެޅިގަތީ މުޅިހަށީ
ހުރެގެން ތެޅިވެސްނުލާ
*ހިތުގާހުރެ ބިންވަޅުން

$2
މާރުކު މާފަންމަތީ ފަރިޔައް ހެލިލާ އިނީ
*ހާރުއަޅާ ނަލަވެފާ ރީތިކަމުން ޝޯހުވެފާ
ދުރުގާ ތެޅިވެސްނުލާ
*ހުރެގެން ލޯބިންބަލާ

$3
ވަދެގެން ގަސްތަކުތެރޭން ދިޔަގޮތަކުން ގެއްލުމުން
*ވަލަކުން ހޯދާކަށެއް ދާކައް ހިތްނޭދުމުން
ފަހަތުން ދުވެއަންނަހެން
*އިއްވާލީ ފަހަތްބަލާ

$N
*ފާރަލާ
ދުރުގާހުރެ
އަރިއަށް ހުރެ`,

  englishLyrics: `#M
Thagudheerugaa mihingaa nayaavee
*Gulhifaa naseebaa gayaavaa
Agubodu javaahiru fadhain araamee
*Raaneege loabilibeythee
#1
Ariyah hingaalaa
*Adhadhun fureyhaa
Ariyah hadhaalaa
*Aazaadhakunnhee
Furiuthurigen hiyy ufaa vedhaathee
*Dhurugaa hurumun keyynuvaathee
#2
Ufalun fureyhaa
*Hinithun velaafaa
Thimalun araamaa
*Foni meerukannvaa
Thiyareethivaa maavaathaa echaaloo
*Thihithun ufaa adhu libethee
#3
Hinithun velaafaa
*Mihithah shifaadhee
Finikan hithahdhee
*Ufalun fureyhaa
Minivan kamaaeku hayaayygaa maazee
*Hinithunnvelaa eku balaathee
-
$M
Raivarakun adulahvaa dhuvenagaa
*Haikan filuvaa koafaa rukaharaa
Maareethivi ranikamanaa dhuvenagaa
*Baarahhure haalheyhlavaa hifaanagaa
$1
Hithugaa biruverikameh ufedheyhen maadhurun
*Hithu vinndhey avasvegen thelhigathee mulhihashee
Huregen thelhivesnulaa
*Hithugaahure binnvalhun
$2
Maaruku maafannmathee fariyah helilaa inee
*Haarualhaa nalavefaa reethikamun shoahuvefaa
Dhurugaa thelhivesnulaa
*Huregen loabinnbalaa
$3
Vadhegen gasthakuthereyn dhiyagothakun gehlumun
*Valakun hoadhaakasheh dhaakah hiyyneydhumun
Fahathun dhuveannahen
*Ihvaalee fahayybalaa
$4
*Faaralaa
Dhurugaahure
Ariah hure`,
},
{
  id: 91,
  name: `Kathi Kathi Vey`,
  genre: 'Nala',
  lyrics: `#M
ކަތިކަތި
*ވޭބަލަ
ދަހިދަހި
*ވޭހިތް
ފެނުމުން އިސްޤުމަލާ
*ފެނުމުން އިސްޤުމަލާ
ދެކިދެކި
*ހިތް މުޅި
އެދިއެދި
*ހިތް އެކު
ފެނުމުން އިސްކުމަލާ
*ފެނުމުން އިސްކުމަލާ

#1
ގުލްސަނުގާ ފޮޅި
*ފަރިވި ތާޒާ
ތިމަލައް އެދި ކުރެވޭ
*ތިމަލައް އެދި ކުރެވޭ
އުމުރުގާ ހިތް އެދިގެން އާދޭސް
*ކުރެވޭ ތިޔައީ ފަރިމަލާއޭ

#2
ނަލަކޮށް އެގޮވާ
*މުނިޔާ ރާގަށް
ފަރިކަމާއެކުގައި
*ފަރިކަމާއެކުގައި
ނަލަ ކަމާއެކު ފަރި ހަރަކާތުން
*ހިތް ޒަހަމްކުރި ފަރިމަލާއޭ

#3
ހިތުގެ އުދާސްތައް
*އުތުރި އަރާއިރު
އިސްކުގެ ލައްޒަތަކާ
*އިސްކުގެ ލައްޒަތަކާ
ހިތުގެ އަޑިން އެދި އަބަދު ގޮވޭފަދަ
*ޗާލު ނަލަވީ ފަރިމަލާއޭ`,

  englishLyrics: `#M
Kathikathi
*Veybala
Dhahidhahi
*Veyhiyy
Fenumun isqumalaa
*Fenumun isqumalaa
Dhekidheki
*Hiyy mulhi
Edhiedhi
*Hiyy eku
Fenumun iskumalaa
*Fenumun iskumalaa
#1
Gulsanugaa folhi
*Farivi thaazaa
Thimalah edhi kurevey
*Thimalah edhi kurevey
Umurugaa hiyy edhigen aadheys
*Kurevey thiyaee farimalaaey
#2
Nalakoh egovaa
*Muniyaa raagah
Farikamaaekugai
*Farikamaaekugai
Nala kamaaeku fari harakaathun
*Hiyy zahamkuri farimalaaey
#3
Hithuge udhaasthah
*Uthuri araairu
Iskuge lahzathakaa
*Iskuge lahzathakaa
Hithuge adin edhi abadhu goveyfadha
*Chaalu nalavee farimalaaey`,
},
{
  id: 92,
  name: `Vidhaa Gurahaige`,
  genre: 'Nala',
  lyrics: `#M
ވިދާ ގުރަހައިގެ ތަރިތައްވެސް
*ތިބާފެނިފާ ސަޖިދަ ކުރެޔޭ
ފިދާނުމެވާނެ މަހުލޫގެއް
*އުޑާބިނމުގާ ހިލާނުވެޔޭ
*ވިދާ ގުރަހައިގެ ތަރިތައްވެސް

#1
ސަލާމޭ އާޝިގާއޭ ލޯތްބަކީ ތިޔައޭ މަގޭ ރޫހީ
*ސަލާމޭ އާޝިގާއޭ ލޯތްބަކީ ތިޔައޭ މަގޭ ރޫހީ
ކަލާތީ ހޫރެކޭ ރޯޝަން އުޖާލާ މޫނުގެ ވެރިޝާހީ
*ބަލާށޭ ފަހެ ހަނދައްވެސް އަލިކަމެއް ލިބިފާ ތިހާނުވެޔޭ

#2
ޔަގީނޭ މީރުވަސް ފިނިފެން މަލައް ލިބުނީ ކަލާގެ ވަހުން
*ޔަގީނޭ މީރުވަސް ފިނިފެން މަލައް ލިބުނީ ކަލާގެ ވަހުން
ހަގީގީ ރީތިކަން ހުރިހާ މަލައް ލިބުނީ ތިޔަ ރީތިކަމުން
*ބަގީޗާގާ ތިހާ ފުރިހަމަ މަލެއް ތާޒާ ފޮޅުން ނުވެޔޭ

#3
ތެދޭ ނުމެވޭ ކެތެއް ޅަޒުވާން ހިތައް ތިޔާރީތިކަން ފެނުމުން
*ތެދޭ ނުމެވޭ ކެތެއް ޅަޒުވާން ހިތައް ތިޔާރީތިކަން ފެނުމުން
އެދޭތިޔަ ޗާލު ހަށިގަނޑުގާ ވި އަސަރާ ޖާދޫގާ ޖެހުމުން
*ނެތޭ ޔާރެއް ތިބާމެނުވީ މިދުނިޔޭގާ ހިލާނުވެޔޭ`,

  englishLyrics: `#M
Vidhaa gurahaige tharithahves
*Thibaafenifaa sajidha kureyey
Fidhaanumevaane mahuloogeh
*Udaabinmugaa hilaanuveyey
*Vidhaa gurahaige tharithahves
#1
Salaamey aashigaaey loayybakee thiyaey magey roohee
*Salaamey aashigaaey loayybakee thiyaey magey roohee
Kalaathee hoorekey roashan ujaalaa moonugeveri shaahee
*Balaashey fahe handhahves alikameh libifaa thihaanuveyey
#2
Yageeney meeruvas finifen malah libunee kalaage vahun
*Yageeney meeruvas finifen malah libunee kalaage vahun
Hageegee reethikan hurihaa malah libunee thiya reethikamun
*Bageechaagaa thihaa furihama maleh thaazaa folhun nuveyey
#3
Thedhey numevey ketheh lhazuvaan hithah thiyaareethikan fenumun
*Thedhey numevey ketheh lhazuvaan hithah thiyaareethikan fenumun
Edheythiya chaalu hashigandugaa vi asaraa jaadhoogaa jehumun
*Nethey yaareh thibaamenuvee midhuniyeygaa hilaanuveyey`,
},
{
  id: 93,
  name: `Aee Aeethoa`,
  genre: 'Kaasi',
  lyrics: `#M
އައީ އައީތޯ މައިނާ މީ ގުލްޝަން ނޫރީ ނޫގުރާ
*އައީ އައީތޯ މައިނާ މީ
ގުލްޝަން މަނޫރީ ނޫގުރާ
*އައީ އައީތޯ މައިނާ މީ

#1
އަލުން ހިތެއް ދިރުވައިދޭ
*އަލުން ގޮތެއް ހޯދައިދޭ
މަލުން މަލުން ފޮނި ބޯން އުދުހޭ މީ ބުލްބުލް ކެނެރީ މާބުރާ
*އައީ އައީތޯ މައިނާ މީގުލްޝަން ނޫރީ ނޫގުރާ

-
$M
ސޯސަން ގުލްމާ ފަރިވާ އިރަށް
*ތޯތާ މުނިޔާ ކުދި ދޫނިތަކޭ އުދުހެނީ

$1
ފިޔަތައް ވާޅު ވެގެން އުދުހޭ ކުދި ދޫނިތައް
*ފިޔަތައް ވާޅު ވެގެން އުދުހޭ ކުދި ދޫނިތައް
ޒާރެއް މަލުގާ ފިޔަފޮޅުވައިންގެން އުދުހެނީ
*ޒާރެއް މަލުގާ ފިޔަފޮޅުވައިންގެން އުދުހެނީ`, 
      englishLyrics: `#M
Aee aeethoa mainaa mee gulshan nooree nooguraa
*Aee aeethoa mainaa mee
Gulshan manooree nooguraa
*Aee aeethoa mainaa mee
#1
Alun hitheh dhiruvaidhey
*Alun gotheh hoadhaidhey
Malun malun foni boan udhuhey mee bulbul keneree maaburaa
*Aee aeethoa mainaa meegulshan nooree nooguraa
-
$M
Soasan gulmaa farivaa irah
*Thoathaa muniyaa kudhi dhoonithakey udhuhenee
$1
Fiyathah vaalhu vegen udhuhey kudhi dhoonithah
*Fiyathah vaalhu vegen udhuhey kudhi dhoonithah
Zaareh malugaa fiyafolhuvaingen udhuhenee
*Zaareh malugaa fiyafolhuvaingen udhuhenee`,
},
{
  id: 94,
  name: `Aissele`,
  genre: 'Taki',
  lyrics: `#M
ތައައިސްސެލޭ އަވަހަށް އައިއްސެލޭ
*ތައައިސްސެލޭ އަވަހަށް އައިއްސެލޭ
ތަކޮންތާކަށްހޭ ތިޔަދަނޫ
*ތަކޮންތާކަށްހޭ ތިޔަދަނޫ

#1
ތިވަރުގެ ފޮނިކަމެއް އަފްރީންނެއް ނުދެކެމޭ
*ތިޔަހެންތިޔަދަނޫ އާދޭސްކުރުވަން އަހޭ
ތިޔަހެންހެދޫ މާ ކިހާދެރަމަވާޅަހޭ
*ތަ ތިޔާދަނޫ ހޭ އަހާވެސް ނުލާންހޭ

#2
މިވަރުން މިއުޅެނޫ ހިތުގާ ރިއްސާވަރުން
*ބޭނުންހަމަވަނޫ ތަހިތުން ބޮޑުޖާގައެއް
މިހިތައް ޝިފާއެއް ލިބެން ނޭދެނޫހޭ
*ރުހިގެން މަށާއެކުގަ އުމުރަށް އުޅޭންހޭ

#3
ބުނެފުއްވާ ޔަގީން އެރިގެންވެސް ދާނިމޭ
*ތެމުނަސް ވަރިހަމައޭ ރުހިގެން އަދު ދާނިމޭ
އަފްރީން ތަދެކެ މާބޮޑަށް ލޯބިމިވަނޫ
*ބުނެފުއްވާ ގައިގާ މަ ޅިޔަވެސް އަޅާމޭ`, 
      englishLyrics: `#M
Tha aiseley avahah aiseley
*Tha aiseley avahah aiseley
Thakonthaakahhey thiyadhanoo
*Thakonthaakahhey thiyadhanoo
#1
Thivaruge fonikameh afreenneh nudhekemey
*Thiyahen thiyadhanoo aadheyskuruvan ahey
Thiyahenhedhoomaa kihaadhera mavaalhahey
*Tha thiyaadhanoo hey ahaaves nulaanhey
#2
Mivarun miulhenoo hithugaa rihsaavarun
*Beynunhamavanoo thahithun bodujaagaeh
Mihithah shifaaeh liben neydhenoohey
*Ruhigen mashaaekuga umurah ulheynhey
#3
Bunefuhvaa yageen erigenves dhaanimey
*Themunas varihamaey ruhigen adhu dhaanimey
Afreen thadheke maabodah loabimivanoo
*Bunefuhvaa gaigaa ma lhiyaves alhaamey`,
},
{
  id: 95,
  name: `Andhiree Thereyn`,
  genre: 'Baburu',
  lyrics: `#M
އަނދިރީ ތެރޭން ހާގޮވަ އަޑުއިވިލައެ ފަތިހައްޓަކާ
*އަނދިރީ ތެރޭން ހާގޮވަ އަޑުއިވިލައެ ފަތިހައްޓަކާ
އެސޮރުމެން ހޭއަރާ ފަޅުވެރި ކުދީން ނަށް ގޮވާ
*އެސޮރުމެން ހޭއަރާ ފަޅުވެރި ކުދީން ނަށް ގޮވާ
ކެޔޮޅުބެ ހޭވެރިކަންވެ ފަޅުވެރި ކުދީން ނަށް ގޮވާ
*ކެޔޮޅުބެ ހޭވެރިކަންވެ ފަޅުވެރި ކުދީން ނަށް ގޮވާ

#1
ނާމާން ބިޔަ ކަނޑުތެރޭ
*ވާނޭގޮތް ނޭނގިފާ
ޖެހި ރާޅާއެކު ކުދީން
*ގަތް ބިރު ބޮޑުވީތާ
މިސްރާބެއް ނޭނގި މިތާ
*ދަތުރެއް ފެށުނީބާ
އޮޑި އެއްކޮށް މިއޮށް މުޅިން
*އަޑިއަށް ގެނބެނީބާ

#2
*ހޭވައްލާ
ކެޔޮޅުބޭ
ފަޅުވެރިން`, 
      englishLyrics: `#M
Andhiree thereyn haagova aduivilae fathihahttakaa
*Andhiree thereyn haagova aduivilae fathihahttakaa
Esorumen heyaraa falhuveri kudheen nah govaa
*Esorumen heyaraa falhuveri kudheen nah govaa
Keyolhube heyverikanve falhuveri kudheen nah govaa
*Keyolhube heyverikanve falhuveri kudheen nah govaa
#1
Naamaan biya kandutherey
*Vaaneygoyy neyngifaa
Jehi raalhaaeku kudheen
*Gayy biru boduveethaa
Misraabeh neyngi mithaa
*Dhathureh feshuneebaa
Odi ehkoh mioh mulhin
*Adiah genbeneebaa
#2
*Heyvahlaa
Keyolhubey
Falhuverin`,
},
{
  id: 96,
  name: `Beeve Athun`,
  genre: 'Nala',
  lyrics: `#M
ބީވެއަތުން ދީޔާ ހީރާ މުތުރަނު ކުލަވާ
*މުޖުރާއޭ ފުޅުނާޔާ

#1
ކިޔަމޭ މިފަރިހި ދެންފަށާ
*ލިޔޭ އާނާކޮށް ރީފުތާ
ކިޔަމަނު ކުލަރަނުފުޅުވީ ދުވަގީ ނިޔަނެތި ވީފުޅު މުޖުރާ
*މުޖުރާއޭ ފުޅުނާޔާ

#2
ފާރިސީންނާ ޖަރުމަނާ
*ނާއި އަދަބުންވާ ހޯދާ
ލާނުމެރި އެބިލާތުގާވާ މާބަގީޗާ ބެލުމާ
*މުޖުރާއޭ ފުޅުނާޔާ

#3
ގަންނަން ނޫރު ޝަހަރުބާލާ
*ބައްލަވާ ތިރިސީނޫނާ
އަންޒަމާނު ހިޖާޒުކަރަބެލުމާ ރިވެތިފުޅު މުޖުރާ
*މުޖުރާއޭ ފުޅުނާޔާ`, 
      englishLyrics: `#M
Beeveathun dheeyaa heeraa muthuranu kulavaa
*Mujuraaey fulhunaayaa
#1
Kiyamey mifarihi dhenfashaa
*Liye aanaakoh reefuthaa
Kiyamanu kularanufulhuvee dhuvagee niyanethi veefulhu mujuraa
*Mujuraaey fulhunaayaa
#2
Faariseennaa jarumanaa
*Naai adhabunvaa hoadhaa
Laanumeri ebilaathugaavaa maabageechaa belumaa
*Mujuraaey fulhunaayaa
#3
Gannan nooru shaharubaalaa
*Bahlavaa thiriseenoonaa
Anzamaanu hijaazukara belumaa rivethifulhu mujuraa
*Mujuraaey fulhunaayaa`,
},
{
  id: 97,
  name: `Beynumey Beynumey`,
  genre: 'Nala',
  lyrics: `#M
ފިޔަ ރީތިކަމުންނޭ ނަމުން ގޮވާލީ އޭމަލާ
*ވަސް މީރުކަމުންނޭ ދުރަށް ނުދެވުނީ ބޭނުމޭ ބޭނުމޭ

#1
ފިޔަތަކުގެ ހިޔާވަހިކަން އެދެމޭ
*ކަރުގަނޑުގެ ވަހާއެކު މޯޅިނުވާން
އަނދިރީގެ ތެރޭން އަލިކަން ލިބުނޭ
*ފެނުނީމަ ތިމާ ބިންނަން ބޭނުމޭ ބޭނުމޭ

#2
ނިޔަނެތި ފިޔަތައް ފަރިވީމަ ފޮޅޭ
*އެދެމޭ އިންނަން ވަސްބަލަބަލާ
ކަތިފިޔަ ނުމެވާ ހޫރެއްފަދަމާ
*ފިރުކިފަ ނަމަވެސް ބިންނަން ބޭނުމޭ ބޭނުމޭ

#3
ގަސްތަކުގެ ތެރޭން އަލިކަންވި މަލާ
*އަރިއަރިވެ ބެލިން އެދިގެން މަ ކަލާ
ކަޅި ހުއްޓިހުރިން ރުހިގެން މަ ކަލާ
*ހިތުލީމަ ތިމާބިންދެލަން ބޭނުމޭ ބޭނުމޭ`,

  englishLyrics: `#M
Fiya reethikamunney namun govaalee eymalaa
*Vas meerukamunney dhurah nudhevunee beynumey beynumey
#1
Fiyathakuge hiyaavahikan edhemey
*Karuganduge vahaaeku moalhinuvaan
Andhireege thereyn alikan libuney
*Fenuneema thimaa binnan beynumey beynumey
#2
Niyanethi fiyathah fariveema folhey
*Edhemey innan vasbalabalaa
Kathifiya numevaa hoorehfadhamaa
*Firukifa namaves binnan beynumey beynumey
#3
Gasthakuge thereyn alikanvi malaa
*Ariarive belin edhigen ma kalaa
Kalhi huhtihurin ruhigen ma kalaa
*Hithuleema thimaabindhelan beynumey beynumey`,
},
{
  id: 98,
  name: `Chaaloo Jazeeraa`,
  genre: 'Nala',
  lyrics: `#M
ޗާލޫ ޖަޒީރާމީ މޫސުންވި ތާޒާމީ ދިވެހިން އުފާވާމީ
*ނޫރާނީ ރީތި ސާފު ރާއްޖެ އާއި މިމާލެއާއި ހޯ
ނޫރާނީ ރީތި ސާފު ރާއްޖެ
*އާއި މިމާލެއާއި ހޯ

#1
ރީތި ނޫއުޑާ ކަނޑުގާވީ ބަހާރު
*ރީތި ނޫއުޑާ ކަނޑުގާވީ ބަހާރު
ރޯޅިވައި ހިނގާ ބިމުގާ ވީ ބަހާރު
*ރޯޅިވައި ހިނގާ ބިމުގާ ވީ ބަހާރު
އިރާއޭ ހަނދާއޭ ފަޒާއޭ
*ނޫރުންދޭ ދޯދިންދޭ ހޫނުންދޭ
އާބާދުވީ އަތޮޅާއި ރާއްޖެ
*އާއި މިމާލެއާއި ހޯ

#2
ވާހިނދުން މިތާ ހޯދޭނޭ އަރާމު
*ވާހިނދުން މިތާ ހޯދޭނޭ އަރާމު
އާވެ ރޫހާނީގުޅުމާ އިހުތިރާމު
*އާވެ ރޫހާނީގުޅުމާ އިހުތިރާމު
ޝުއޫރޭ ނަޒާރޭ ޤަރާރޭ
*މަލުގާވީ ވަލުގާވީ ފަޅުގާވީ
ފަރިކަމޭ ނަން ދިރޭނެ ރާއްޖެ
*އާއި މިމާލެއާއި ހޯ

#3
މޫސުމުން އަސަރު ލިއްބައިދޭ އަމާން
*މޫސުމުން އަސަރު ލިއްބައިދޭ އަމާން
ހާމަވީ ގެނައި އާޒާދީ ނިޝާން
*ހާމަވީ ގެނައި އާޒާދީ ނިޝާން
މިބަސްދީ މިމަސްތީ މިހަސްތީ
*ހޯދާށޭ އަންނާށޭ ބޯދޭށޭ
ނޫކުލަދޭ ސަރަހައްދާއި ރާއްޖެ
*އާއި މިމާލެއާއި ހޯ`,

  englishLyrics: `#M
Chaaloo jazeeraamee moosunvi thaazaamee dhivehin ufaavaamee
*Nooraanee reethi saafu raahje aai mimaaleaai hoa
Nooraanee reethi saafu raahje
*Aai mimaaleaai hoa
#1
Reethi nooudaa kandugaavee bahaaru
*Reethi nooudaa kandugaavee bahaaru
Roalhivai hingaa bimugaa vee bahaaru
*Roalhivai hingaa bimugaa vee bahaaru
Iraaey handhaaey fazaaey
*Noorundhey dhoadhindhey hoonundhey
Aabaadhuvee atholhaai raahje
*Aai mimaaleaai hoa
#2
Vaahidhun mithaa hoadheyney araamu
*Vaahidhun mithaa hoadheyney araamu
Aave roohaneegulhumaa ihuthiraamu
*Aave roohaneegulhumaa ihuthiraamu
Shuoorey nazaarey qaraarey
*Malugaavee valugaavee falhugaavee
Farikamey nan dhireyne raahje
*Aai mimaaleaai hoa
#3
Moosumun asaru lihbaidhey amaan
*Moosumun asaru lihbaidhey amaan
Haamavee genai aazaadhee nishaan
*Haamavee genai aazaadhee nishaan
Mibasdhee mimasthee mihasthee
*Hoadhaashey annaashey boadheyshey
Nookuladhey sarahahdhaai raahje
*Aai mimaaleaai hoa`,
},
{
  id: 99,
  name: `Chaandhanee Maa`,
  genre: 'Baburu',
  lyrics: `#1
ޗާންދަނީ މާ ފަރިވާ ޗާންދަނީ
*ޗާންދަނީ މާ ފަރިވާ ޗާންދަނީ
ޗާންދަނީ މާ ފަރިވާ
*ޗާންދާދޭ ހޫ މަލޭ ޗާންދަނީ
ފަރިކޮށްލިނަޔާ
*ޗާންދަނީ އުފާ
ފޮޅުވާލި ވަޔާ
*ޗާންދަނީ އުފާ
ހިއްލާލި ނަޔާ
*ޗާންދަނީ އުފާ

#2
*ދިރުން އާވޭތޯ
ޒަހަރު އަތަރު ގައިގަ ދަމާލީ
ކެލާބޮކަރު ބޮލުގަ ވަށާލީ
ޒަހަރު އަތަރު ގައިގަ ދަމާލީ

#3
*އުނގުޅާށޭ
މަޑުމަޑުން
ކަނފަތުގަ
ވަގުވަގަށް
ލަސްލަހުން`,

  englishLyrics: `#M
Chaandhanee maa farivaa chaandhanee
*Chaandhanee maa farivaa chaandhanee
Chaandhanee maa farivaa
*Chaandhaadhey hoo maley chaandhanee
Farikohlinayaa
*Chaandhanee ufaa
Folhuvaali vayaa
*Chaandhanee ufaa
Hihlaali nayaa
*Chaandhanee ufaa
#1
*Dhirun aaveythoa
Zaharu atharu gaiga dhamaalee
Kelaabokaru boluga vashaalee
Zaharu atharu gaiga dhamaalee
#2
*Ungulhaashey
Madumadun
Kanfathuga
Vaguvagah
Laslahun`,
},
{
  id: 100,
  name: `Dhehitheh Gulheyney`,
  genre: 'Taki',
  lyrics: `#M
ދެހިތެއް ގުޅޭނޭ ދެހިތެއް ނެތޭނޭ
*ހޯދަންވީ ނޫރު ވިދާލީ
ދުނިޔޭގެ ތެރެއިން ރޫހާއި ގުޅިގެން
*ހޯދާށެ މީރު އުފާވީ

#1
މިހެންމިހެން ފެށެންވުމުން ދިރޭށެ ވީ ޖާން
*އަދުގާމިވީ ހިނގާށެ ހޯދާ
އަސަރުއަސަރު ހިތައްވުމުން ނުވާނެ ހައިރާން
*ފެނުމާއެކީ މިވީ އިރާދާން
އަދު ހިތުގާ ކިޔައިދިން ރޫހޭ
*އަދުބުނަމޭ މިގޮތޭ ވާނީ

#2
މިހެންމިހެން ނިމެންވުމުން ހިތާއި ގުރުބާން
*އަދުގާ މިވީ ފުރާނަ ރޯލާ
އެތައްއެތައް ފަހަރުވުމުން ނުވާނެ ހައިރާން
*ނިމުމާއެކީ މިވީއެ ބަދުނާމު
އަދުމިހިނގާ ދުނިޔެ ހަމައިން
*އަދުބުނަމޭ މިގޮތޭ ވާނީ`,
       
  englishLyrics: `#M
Dhehitheh gulheyney dhehitheh netheyney
*Hoadhanvee nooru vidhaalee
Dhuniyeyge therein roohaai gulhigen
*Hoadhaashe meeru ufaavee
#1
Mihenmihen feshenvumun dhireyshe vee jaan
*Adhugaamivee hingaashe hoadhaa
Asaruasaru hithahvumun nuvaane hairaan
*Fenumaaekee mivee iraadhaan
Adhu hithugaa kiyaidhin roohey
*Adhubunamey migothey vaanee
#2
Mihenmihen nimenvumun hithaai gurubaan
*Adhugaa mivee furaana roalaa
Ethahethah faharuvumun nuvaane hairaan
*Nimumaaekee miveee badhunaamu
Adhumihingaa dhuniye hamain
*Adhubunamey migothey vaanee`,
},
{
  id: 101,
  name: `Dheythee Hiley`,
  genre: 'Nala',
  lyrics: `#M
ދޭތީ ހިލޭ ޒިންދުގާނީރޭ ތީރުދެންވީ ޖަވާނީހެރީ
*ތޯއެ ރޭ އާއެ އަމްބީ މިތާ އެހުރީ

#1
ހާލުވަނީއޭ ލޯބި ވިރާނާ
*އަދުތަ ނަފުސު ބަދަލު ކުރިޖާނާ މަލުގެ ޕަރުވާނާ
ދާހާ އެރޫހުވެ ލޮބުވެތި ޖާނާ
*ލޮބުވެތި ޖާނާ

#2
ސާމިލުވީ އަދު ރޫހާ ޖާނޭ
*ހެކިވެ މިލޯބި ތެރޭގާ ހާލެމި ދެން މިތުރާއޭ
ވާލޯބި ނުދެކޭ ހިތުގެ ހަޒާނާ
*ހިތުގެ ހަޒާނާ`,
       
  englishLyrics: `#M
Dheythee hiley zindhgaaneerey theerudhenvee javaaniheree
*Thoae rey aae ambee mithaa ehuree
#1
Haaluvaneeey loabi viraanaa
*Adhutha nafusu badhalu kurijaanaa maluge paruvaanaa
Dhaahaa eroohuve lobuvethi jaanaa
*Lobuvethi jaanaa
#2
Saamiluvee adhu roohaa jaaney
*Hekive miloabi thereygaa haalemi dhen mithuraaey
Vaaloabi nudhekey hithuge hazaanaa
*Hithuge hazaanaa`,
},
{
  id: 102,
  name: `Dhonhiyalaa Alifulhu`,
  genre: 'Kaasi',
  lyrics: `#M
އަޑު އަހަމޭ މީފަސާނާ ލޮބުވެތި އަލިފުޅު ދޮންހިޔަލާ
*ގުޅި ލޯބިން ހިތްހިތާވީ އަބަދައްތާ

#1
އަލިފުޅުމީ ނެތް މިސާލޭ އިޝްޤުގެ ބަތޮލޭ
*އަލިފުޅުމީ ނެތް މިސާލޭ އިޝްޤުގެ ބަތޮލޭ
އަލިފުޅު އަދި ދޮންހިޔަލާ އެއްޖިސްމެއް އެއްގޮތް މިސާލޭ
*ގުޅި ލޯބިން ހިތްހިތާވީ އަބަދައްތާ

#2
ހަނދުފަދަ ދޮންހިޔަލަ ޗާލޭ އެދުވެރި ލޯބީވެރިޔެއް
*ހަނދުފަދަ ދޮންހިޔަލަ ޗާލޭ އެދުވެރި ލޯބީވެރިޔެއް
ދަތިތައް ކުރިމަތިވީމާ ގޯހީ މީރުހުމުން ވަރާއޭ
*ގުޅި ލޯބިން ހިތްހިތާވީ އަބަދައްތާ

-
$M
ވާމުޅިން އުޖާލާ
*ލޯބީގެ ޒަމާނުގާ ރޯޝާނީ ބަހާރެކޭ

$1
މާކު އުފާތާ ޕާކުތެރޭގާ
*މާކު އުފާތާ ޕާކުތެރޭގާ
ނައްޗިޅިޔާ ކިޔަނީ އުފަލުގާ ނާ
*ނައްޗިޅިޔާ ކިޔަނީ އުފަލުގާ ނާ
*ލޯބީގެ ޒަމާނުގާ ރޯޝާނީ ބަހާރެކޭ

$N
*ފެންމަތިވާ ގަބުރެއްފެނެޔޭ
ނިކަންދެންބަލާ
މިއޮށް ފެންނަނީ
މިއޮށް ގެންދަނީ
އަޅޭ ދެންބަލާ`,
       
  englishLyrics: `#M
Adu ahamey meefasaanaa lobuvethi alifulhu dhonhiyalaa
*Gulhi loabin hiyyhithaavee abadhahthaa
#1
Alifulhumee neyy misaaley ishquge batholey
*Alifulhumee neyy misaaley ishquge batholey
Alifulhu adhi dhonhiyalaa ehjismeh ehgoyy misaaley
*Gulhi loabin hiyyhithaavee abadhahthaa
#2
Handhufadha dhonhiyala chaaley thedhuveri loabeeveriyeh
*Handhufadha dhonhiyala chaaley thedhuveri loabeeveriyeh
Dhathithah kurimathiveemaa goahee meeruhumun varaaey
*Gulhi loabin hiyyhithaavee abadhahthaa
-
$M
Vaamulhin ujaalaa
*Loabeege zamaanugaa roashanee bahaarekey
$1
Maaku ufaathaa paakuthereygaa
*Maaku ufaathaa paakuthereygaa
Nahchilhiyaa kiyanee ufalugaa naa
*Nahchilhiyaa kiyanee ufalugaa naa
*Loabeege zamaanugaa roashaanee bahaarekey
$2
*Fenmathivaa gaburehfeneyey
Nikandhenbalaa
Mioh fennanee
Mioh gendhanee
Alhey dhenbalaa`,
},
{
  id: 103,
  name: `Ey Haadha Edhen`,
  genre: 'Nala',
  lyrics: `#M
އޭ ހާދައެދެން ތިޔަ މޫނުދެކެން
*ފަހެ ހިއްލާލަދީ ނިޣާބް
އާލަމް ޖަރީވެދާހާ
*ވިދާލައޭ ނޫރާ ޝަބާބު

#1
ބުލްބުލްގެ މަސްތު ނަގުމާހެން
*ރާނީގެ ހިމައަޑުން
އިއްވާލި ރީތި ރާގުންނޭ
*ހައިރާންވެ ވީ އަޖައިބު

#2
ޖަންނަތުގެ ހޫރެކޭ ތިއީ
*ނޫނީ ޕަރީއެކޭ
ފެނިފާ ތިބާ ހަނދޭ ލަދުން
*މޫނޭ ކުރީ ހިޖާބު

#3
ފިނިފެން މަލުންހެ ތާޒާވީ
*ފަހެ ހެއްދެވީ ކަލާ
ވަސްމީރު ކޮށްފިއޭ ފަޒާ
*ދީފާނުހޭ ޖަވާބު`,

  englishLyrics: `#M
Ey haadhaedhen thiya moonudheken
*Fahe hihlaaladhee nighaab
Aalam jareevedhaahaa
*Vidhaalaey nooraa shabaabu
#1
Bulbulge masthu nagumaahen
*Raaneege himaadun
Ihvaali reethi raagunney
*Hairaannve vee ajaibu
#2
Jannathuge hoorekey thiee
*Noonee pareeekey
Fenifaa thibaa handhey ladhun
*Mooney kuree hijaabu
#3
Finifen malunnhe thaazaavee
*Fahe hehdhevee kalaa
Vasmeeru kohfiey fazaa
*Dheefaanuhey javaabu`,
},
{
  id: 104,
  name: `Farisoru`,
  genre: 'Kaasi',
  lyrics: `#M
ފަރިސޮރު އޮވެ ފަރިވެލާ އަރިއަށްއޮވެ ބީވެދާ
*އަރިއަށްއޮވެ ބީވެދާ
ފިނިފިނި އެރޭގެ ދަންވަރު ގިނި އުތުރޭގޮތް ވެލާ
*ގިނި އުތުރޭގޮތް ވެލާ

#1
ތަކުރަށް އުނދަގޫ ނުވާހެން
*އަތުހުރިލާ ބާރުލާ
ކަޅުފޮއެ އަނދިރީގެ ތެރެއިން ކަޅުސޮރު އޮވެ ފަރިވެލާ
*ކަޅުސޮރު އޮވެ ފަރިވެލާ

#2
ވަރުވަރުގެ ތުރާތަކުން ހިތް
*ކަރުނުން މުޅިލޯފުރާ
ބަރުއަޑަކުން ހޯއްގޮވާލާ ކަރުބުޑުގާ ނާރުލާ
*ކަރުބުޑުގާ ނާރުލާ

#3
ހަރުގިލަހާވާމެ ހަރުވަރު
*ބަރުވަރު ހިލަހާ ނުވާވަރު
ދަނޑިފަދަ ދަނޑިދޮންވެދާ ފުރިއުތުރޭ ގޮތްވެދާ
*ފުރިއުތުރޭ ގޮތްވެދާ

-
$M
ކަޅުވަކަރު މަތިން ދުވޭ ނަގޫނަގާ މީދާ
*މަޅުތަކުގެ ދަށުން ދުވޭ ރުޅިއަރިވާ ބީދައިން
ކަޅުސޮރުއޮވެ ވަގަށް ބަލާ ދަނޑިވަޅަކަށް ހޯދީ
*މޮޅު ގޮތަކަށް ފަރިކުރޭ ރުޅިއަރުވާ ބީދައިން

$1
ފަތިހާ ތޮޅޭއަޑު އިވޭތީވެ ނުނިދާ
*މަތިހަށިނަގާ ދުވެ ތުރާތައްމެރީތީ
ފަތިފައްޗައްދުވެ ނަގާ
*އަޑުއަޑު ގިނަ ލައްވަމުން
ކަތިކައްޗައް ދުވެނަގާ
*ރުޅިއަރުވާ ބީދައިން

$2
އަސުރަށް ނުހޭލެވި ނިދީމާ ނިދީގާ
*ފަސްތޮޅުމަތިން ދިޔަ ބޮނޑީން ބާރުހަމަލާ
ބަސްހުއްޓި ހުރެބަލާ
*ނިދިފިލުވާ ހުރެލޮލުން
ގަސްތުގަ ހުރެ ދުވެނަގާ
*ރުޅިއަރުވާ ބީދައިން

$3
ރުޅިގަދަވެ ބާރަށް ތަކުރު އޮވެ ހަޅޭލާ
*ރުޅިއަށްއޮވެ އަޑުލައްވާ ދުރުދުރުން ބަލާލާ
މޮޅުގޮތަކަށް ބުރުޖަހާ
*ކުރިމައްޗައް އަރާލާ
މުޅިތަނުގާ ދުވެނަގާ
*ރުޅިއަރުވާ ބީދައިން

$N
މީދާދެން މީދާދެން ތަކުރަށް ހިތި އަނިޔާދީ
*މީދާދެން މީދާދެން
ތަކުރަށް ހިތި އަނިޔާދީ
*މީދާދެން މީދާދެން`,

  englishLyrics: `#M
Farisoru ove farivelaa ariahove beevedhaa
*Ariahove beevedhaa
Finifini ereyge dhannvaru gini uthureygoyy velaa
*Gini uthureygoyy velaa
#1
Thakurah undhagoo nuvaahen
*Athuhurilaa baarulaa
Kalhufoe andhireege therein kalhusoru ove farivelaa
*Kalhusoru ove farivelaa
#2
Varuvaruge thuraathakun hiyy
*Karunun mulhiloafuraa
Baruadakun hoahgovaalaa karubudugaa naarulaa
*Karubudugaa naarulaa
#3
Harugilahaavaame haruvaru
*Baruvaru hilahaa nuvaavaru
Dhandifadha dhandidhonnvedhaa furiuthurey goyyvedhaa
*Furiuthurey goyyvedhaa
-
$M
Kalhuvakaru mathin dhuvey nagoonagaa meedhaa
*Malhuthakuge dhashun dhuvey rulhiarivaa beedhain
Kalhusoruove vagah balaa dhandivalhakah hoadhee
*Molhu gothakah farikurey rulhiaruvaa beedhain
$1
Fathihaa tholheyadu iveytheeve nunidhaa
*Mathihashinagaa dhuve thuraathahmereethee
Fathifahchahdhuve nagaa
*Aduadu gina lahvamun
Kathikahchah dhuvenagaa
*Rulhiaruvaa beedhain
$2
Asurah nuheylevi nidheemaa nidheegaa
*Fastholhumathin dhiya bondeen baaruhamalaa
Bashuhtifa hurebalaa
*Nidhifiluvaa hurelolun
Gasthuga hure dhuvenagaa
*Rulhiaruvaa beedhain
$3
Rulhigadhave baarah thakuru ove halheylaa
*Rulhiah ove adulahvaa dhurudhurun balaalaa
Molhugothakah burujahaa
*Kurimahchah araalaa
Mulhithanugaa dhuvenagaa
*Rulhiaruvaa beedhain
$N
Meedhaadhen meedhaadhen thakurah hithi aniyaadhee
*Meedhaadhen meedhaadhen
Thakurah hithi aniyaadhee
*Meedhaadhen meedhaadhen`,
},
{
  id: 105,
  name: `Fun Loaibeh`,
  genre: 'Nala',
  lyrics: `#M
ފުން ލޯތްބެއް އެބަ އާލާވޭ
*މޭގާ އަސަރު ތާޒާވޭ
ލޯބިވާ ޒުވާނާ ހިތުގެ ޖަޒުބާތަ
*ކުޅެލިގޮތާ ހަނދާންއާވޭ

#1
ސާފު ތިނާޒުކު މޫނުގެ ޖާދުވީ
*ލޯބި އަސަރުގާ ދޭއެބަ އަނިޔާ
ޅަޒުވާން މޫރިތި ހީލުން ޗާލޭ
*ކޮންފަދަބާއޭ ބަސްބުނެލައި ފިޔާ

#2
އައިސްދޭށޭ އަދު ލޯބިން ޝާހީ
*ފޮނި ހަދިޔާދޭ ލޮބުވެތި ރާނީ
ތިއުފާ ނޫނީ ނަފުސު މިނޭދޭ
*ދެން އަހަރެންވަކި ކީއްހެ ކުރާނީ`,

  englishLyrics: `#M
Fun loayybeh eba aalaavey
*Meygaa asaru thaazaavey
Loabivaa zuvaanaa hithuge jazubaatha
*Kulheligothaa handhaannaavey
#1
Saafu thinaazuku moonuge jaadhuvee
*Loabi asarugaa dheyeba aniyaa
Lhazuvaan moorithi heelun chaaley
*Konnfadhabaaey basbunelai fiyaa
#2
Aisdheyshey adhu loabin shaahee
*Foni hadhiyaadhey lobuvethi raanee
Thiufaa noonee nafusu mineydhey
*Dhen aharennvaki keehhe kuraanee`,
},
{
  id: 106,
  name: `Kandhi Mudaloa`,
  genre: 'Zamaanee',
  lyrics: `#M
އާން ކަލޭ ނުހޮރުއްޕާނޭ ތިމަރަ ވަޅިން &ކަނދި މުޑަލޯ&
އައްދޯތް ކަލޭ ނުހޮރުއްޕާނޭ ތިމަރަ ވަޅިން &ކަނދި މުޑަލޯ&
އާނހާ ކަލޭ ނުހޮރުއްޕާނޭ ތިމަރަ ވަޅިން &ކަނދި މުޑަލޯ&

#1
ހެންވޭރު ހަރުގެ ވެއްޓުނީޔާ ގެއިން މީހަކު ބުނި ނަދުރަކީ ކަޅުބޭބެ ކިރާން ކަނދިމުންޑަލޯ

#2
ކަޅު ބޭބެ ތުނބުޅި ދެކެ ދެކެފާ ހެންވޭރު ކުދިން ބިރުން ދުވަނީ ވިލޭރެއަކު ބަނޑަށް ކެރި ބާލާ ހެނޮލަ  ކަނދި މުޑަލޯ

#3
ހެންވޭރުހުރި މުސްކުޅި ލޯޑަކު މުނާރު ތެރަށް ކޮއްޕާވައްދައިގެން ނިންމާލައިފިޔޯ ކަނދި މުޑަލޯ

#4
ހެންވޭރަށް އަރާކަށް ލާހިކެއް ނޫނޭ ހެންވޭރު ކުދިން ރައިވަރު ހަދާ ނިންމާފާނެޔޮ ކަނދި މުޑަލޯ

#5
ކަދި ރުނބަޔާ ތެދަ ދަނޑިޔާ މުންނާރު ދޮށަށް އެއްތާން ކޮއްފާ ކަޅު ބޭބެ ހޯދާން ދިޔަ ކުއްޖަކު އައިއްސާ ބުންނޭ ކަޅު ބޭބެ އެބޯތެ އީދު މިސްކިއްދޮށު ބޮޑު ދިގާ ގަސްދޮށު ބޮޑު އުންދޯލީގާ ކޯމަހު ތުނބާ ތުން ފުރޮޅިފައެ ދުންބޮޔެ ނަގާން ކަނދި މުޑަލޯ

#6
ކަޅުބޭބެ ހޯދާން ދިޔަ ކުއްޖަކު އައިއްސާ ބުޏޭ ކަޅުބޭބެ އެބޯތޭ މައްޗަން ގޯޅީ މާވެވުގޭ ފެން ހުސްކޮށް ބޯލައިގެން ކަނދި މުޑަލޯ

#7
ފުއްތެޔޮ ފަޅަން އުރުނު ނަވުގެ އޮތްހާ ކާފައިން މާލެ ބޮޑު ބައްތީގެފުކަށް ތުން އަނބުރާ އަޑި ނިމާލާފިޔޮ ކަނދި މުޑަލޯ

#8
ކަޅުބޭބެ ހޯދާން ދިޔަ ކުއްޖަކު އައިއްސާ ބުޏޭ ކަޅުބޭބެ ހޯދަ ހޯދަ ހޯދަ ނުފެނުނޮލަ ކަނދި މުޑަލޯ`, 
      englishLyrics: `#M
Aan kaley nuhuruhpaaney thimara valhin &kandhi mudaloa&
Ahdhoih kaley nuhuruhpaaney thimara valhin &kandhi mudaloa&
Aanhaa kaley nuhuruhpaaney thimara valhin &kandhi mudaloa&
#1
Henveyru haruge vehtuneeyaa gein meehaku buni nadhurakee kalhubeybe kiraan kandhimundaloa
#2
Kalhu beybe thunbulhi dheke dhekefaa henveyru kudhin birun dhuvanee vileyreaku bandah keri baalaa henola  kandhi mudaloa
#3
Henveruhuri muskulhi loadaku munaaru therah kohpaavahdhaigen ninmaalaifiyoa kandhi mudaloa
#4
Henveyrah araakah laahikeh nooney henveyru kudhin raivaru hadhaa ninmaafaaneyo kandhi mudaloa
#5
Kadhi runbayaa thedha dhandiyaa munnaaru dhoshah ehthaan kohfaa kalhu beybe hoadhaan dhiya kujjaku aissaa bunney kalhu beybe eboathe eid miskihdhoshu bodu dhigaa gasdhoshu bodu undhoaleegaa koamahu thunbaa thun furolhifae dhunboye nagaan kandhi mudaloa
#6
Kalhubeybe hoadhaan dhiya kujjaku aissaa bunyey kalhubeybe eboathey mahchan goalhee maavevugey fen hus koh boalaigen kandhi mudaloa
#7
Fuhtheyo falhan urunu navuge oihaa kaafain male bodu bahtheegefukah thun anburaa adi nimaalaafiyo kandhi mudaloa
#8
Kalhubeybe hoadhaan dhiya kujjaku aissaa bunyey kalhubeybe hoadha hoadha hoadha nufenunola kandhi mudaloa`,
},
{
  id: 107,
  name: `Malaa Fenifa`,
  genre: 'Thinberu',
  lyrics: `#M
މަލާ ފެނިފަ މަގެ މިހިތުގެ ވިންދުން ގަދަ ރާޅު ނަގާ
*ފިލާ ނުހުރެ ނުކުމެ ތިފަރި މޫނުން އަދި ހީލަ ބަލާ
ފަލަކުން ތަރި ޖާގަ ހަދާ ގޮވާނެ ތިބެ ހަނާ އަޅާ
*ފަލަކުން ތަރި ޖާގަ ހަދާ ގޮވާނެ ތިބެ ހަނާ އަޅާ

#1
ލޮލުގާ ވާ ނަޒަރުން ފުން ކަނޑުހާ ފުން ވެފާ
*ލޮލުގާ ވާ ނަޒަރުން ފުން ކަނޑުހާ ފުން ވެފާ
ބޮލުގެ ފަށުވި އިސްތަށި ގަނޑު މޫނު ވަށާ ބާނި ނަގާ
*ބޮލުގެ ފަށުވި އިސްތަށި ގަނޑު މޫނު ވަށާ ބާނި ނަގާ

#2
ތުންފަތުގާ ވާ އަސަރުން ޖާދޫ ފަހެ ފާޅުވާ
*ތުންފަތުގާ ވާ އަސަރުން ޖާދޫ ފަހެ ފާޅުވާ
ދޮންވެ ދިހުން ހުރި ފޮނި ފޮނި މޭވަ އެކޭ ހީވެ މިތާ
*ދޮންވެ ދިހުން ހުރި ފޮނި ފޮނި މޭވަ އެކޭ ހީވެ މިތާ

#3
ބުނެލާ ތޯ ބަހެއް ހިތް ތެޅެނީ ދަހި ވެފާ
*ބުނެލާ ތޯ ބަހެއް ހިތް ތެޅެނީ ދަހި ވެފާ
ގިނި މި ހިތުން ފިލުވައިދީ ކަމަނަ ނިކަން ހީލަ ބަލާ
*ގިނި މި ހިތުން ފިލުވައިދީ ކަމަނަ ނިކަން ހީލަ ބަލާ`,

  englishLyrics: `#M
Malaa fenifa mage mihithuge vindhun gadha raalhu nagaa
*Filaa nuhure nukume thifari moonun adhi heela balaa
Falakun thari jaaga hadhaa govaane thibe hanaa alhaa
*Falakun thari jaaga hadhaa govaane thibe hanaa alhaa
#1
Lolugaa vaa nazarun fun kanduhaa fun vefaa
*Lolugaa vaa nazarun fun kanduhaa fun vefaa
Boluge fashuvi isthashi gandu moonu vashaa baani nagaa
*Boluge fashuvi isthashi gandu moonu vashaa baani nagaa
#2
Thunfathugaa vaa asarun jaadhoo fahe faalhuvaa
*Thunfathugaa vaa asarun jaadhoo fahe faalhuvaa
Dhonve dhihun huri foni foni meyva ekey heeve mithaa
*Dhonve dhihun huri foni foni meyva ekey heeve mithaa
#3
Bunelaa thoa baheh hiy thelheny dhahi vefaa
*Bunelaa thoa baheh hiy thelheny dhahi vefaa
Gini mi hithun filuvaidhee kamana nikan heela balaa
*Gini mi hithun filuvaidhee kamana nikan heela balaa`,
},
{
  id: 108,
  name: `Fini Fini Mastheevayaa`,
  genre: 'Nala',
  lyrics: `#M
ފިނި ފިނި މަސްތީ ވަޔާ
*ތުނިތުނި ނުކުޅޭ ހިތާ
ލޯބިންވޭ ދިވާނާ ދިވާނާ ދިވާނާ
*ލޯބިންވޭ ދިވާނާ ދިވާނާ ދިވާނާ
ރީއްޗޭ ރީއްޗޭ މާ ލޯތްބޭ ޔާރު
*ހިތާ ހިތޭވީ ބޭގަރާރު
ލޯބިންނޭ ދީވާނާ ދީވާނާ ދީވާނާ
*ލޯބިންނޭ ދީވާނާ ދީވާނާ ދީވާނާ
*ފިނި ފިނި މަސްތީވަޔާ

#1
އަންނާށޭ އަންނާށޭ މޫސުން ރީއްޗޭ ދެކޭށޭ
*އަންނާށޭ އަންނާށޭ މޫސުން ރީއްޗޭ ދެކޭށޭ
ގައިމޭ ހަނދަށް ވުރެ ރީތީ ކަލާއޭ
*ނޫ އުޑު ގާވާ ތަރިތައް ރޯށަން ޗާލޭ ބަލާށޭ
އިޝްޤީ ޒުވާން ތި މޫނަށް ބެލުމަށް ބުނާށޭ
އާލަމް މި ލޯބީގެ
*ނޫރުން ވިދާތީ އޭ
މިހިތައް ވާ އިހުސާސް
*ތި ހިތަށް ނުވޭ ހޭ ތި ހިތަށް ނުވޭ ހޭ
ނޫނޭ މޫނޭ ޔާރާ ވެޔޭ
*ވާމޭ މިރޭ ވާމެ މަ ފިދާ

#2
ގުލްޒާރުން ގުލްޒާރުން ފަރިވާ މާތައް ފެނޭހޭ
*ގުލްޒާރުން ގުލްޒާރުން ފަރިވާ މާތައް ފެނޭހޭ
ފިނިފެންމަލައް ވުރެ ރީތީ ކަލާއޭ
*ހިތުވިންދުން މި ޖަހާލާ ގިގުނިން ރާގެއް އިވޭއްޭ
ލޯބި ލޯބި ގިނުނީގެ އަޑަކީ ތިބާ އޭ
މޫރިތިމި ޝާހިލް
*މި ލޯބީގެ މަންޒިލު
ޔާރާއޭ މަސްތުން
*ފުރިފާ ނުވޭހޭ ފުރިފާ ނުވޭހޭ
ފަރިފަރި އިޝްޤީ އަދާ
*ދެކޭ ހިތް ވެޔޭ ތިޔަ ލޮލާ`,

  englishLyrics: `#M
Fini fini masthee vayaa
*Thunithuni nukulhey hithaa
Loabinvey dhivaanaa dhivaanaa dhivaanaa
*Loabinvey dhivaanaa dhivaanaa dhivaanaa
Reehchey reehchey maa loayybe yaaru
*Hithaa hitheyvee beygaraaru
Loabinney dheevaanaa dheevaanaa dheevaanaa
*Loabinney dheevaanaa dheevaanaa dheevaanaa
*Fini fini mastheevayaa
#1
Annaashey annaashey moosun reehchey dhekeyshey
*Annaashey annaashey moosun reehchey dhekeyshey
Gaimey handhah vure reethee kalaaey
*Noo udu gaavaa tharithah roashan chaaley balaashey
Ishqee zuvaan thi moonah belumah bunaashey
Aalam mi loabeege
*Noorun vidhaathee ey
Mihithah vaa ihusaas
*Thi hithah nuvey hey thi hithah nuvey hey
Nooney mooney yaaraa veyey
*Vaamey mirey vaame ma fidhaa
#2
Gulzaarun gulzaarun farivaa maathah feneyhey
*Gulzaarun gulzaarun farivaa maathah feneyhey
Finifenmalah vure reethee kalaaey
*Hithuvindhun mi jahaalaa gigunin raageh iveyhey
Loabi loabi ginuneege adakee thibaa ey
Moorithimi shaahil
*Mi loabeege manzil
Yaaraaey masthun
*Furifaa nuveyhey furifaa nuveyhey
Farifari ishqee adhaa
*Dhekey hiyy veyey thiya lolaa`,
},
{
  id: 109,
  name: `Gina Keriyaa`,
  genre: 'Kaasi',
  lyrics: `#S
ތޫނު އަވީގާ ކުރިޔަސް ދަތުރެއް އަމަނުން
މޫދު މަތީގާ އެޅިހާ އޮއެވަރު ނޭންގޭ
ދޫނުކުރަން ހިއްވަރު އޮތަކަސް ހިތުގާ
މޫނުނިވާ ވާހާ ހިޔަލެއް އޮތަކަސް
*ހިޔަލެއް އޮތަކަސް
#M
ގިނަކެރިޔާ ވާރޭގާ &އާނހާ&
ދިޔަގޮތަކުން ދުވެލީ ހަރުވީ &އާނހާ&
އިނންނަފަތުގަ އިނދެ އެޖެހިފަލި &އާނހާ&
ޖެހި ގޮތަކުން ދުވެލީ ހަރުވީ &އާނހާ&
ބާނިތަކުން އޮޑި އުފުއްލާ &އާނހާ&
ދިޔަގޮތަކުން ދުވެލީ ފަލިޖަހަމުން
*ހެއް ހެއް ހެއް ހެއް ހޭ ފަލި ޖަހަމުން
ފަލިޖަހަމުން
*ފަލިޖަހަމުން

#1
ރާޅުތަކުގެ ނަލަނަލަ ހުދުފޮނު
*އައިނުތަކުން ކޯމަސް ދިޔައިރު
ރާގުކިޔާލާ ވާރޭ ކަނިކަނި
ބާރުގަ ކެފިފެން ދިރުނބާކޮޅު މައްޔާލުން
*މައްޔާލުން މައްޔާލުން

#2
ހުޅަނގުގެ މިޔަ ހިޔަލީ ފިނިކަން
*އުދަރެސްތައް ވިލައިން ބައްދާ
ތުރަޔާއެކީ ދެއަތަށް ހެލިހެލި
އުތުރަށް ދުއްވާ ގަދަފަދަ ބާރެއްލާ
*ދުއްވަމުން ދުއްވަމުން

-
$M
ވައިސޫރި ދުއްވާ ކުދިންނަށް ފިލައިގެން
*ދާނީ މަ ރުއްގަނޑު ތެރޭގާ ބޮނދައިގެން
ރަންދޯދި އިރުދިން އުޖާލާ
*އުޖާލާ ބުންވަރު މަގުންތާ އުތުރަށް ހިނގާލާން

$1
ނަލަރީތި މަންޒަރު ނަގަމުން ފޮޓޯތައް
*ނަލަރީތި ކުއްޖެއް އެދަނީ ހިނގާލާން
ބައިބައި ވެލާފާ އުދުހިފަ އެދާއިރު
*އަހަރެން ހިތައްވާ އަސަރެއްކުރާނޭ

$2
ރަތަފާ ބޮޑަނަތައް ފެނެޔޭ ދުވާތަން
*ރަތަފާ އިލޮޅިޔާ ފެނެޔޭ ހޮވަތަން
ބައިބައި ވެލާފާ އުދުހިފަ އެދާއިރު
*އަހަރެން ހިތައްވާ އަސަރެއްކުރާނޭ`,

  englishLyrics: `#M
Thoonu aveegaa kuriyas dhathureh amanun
Moodhu matheegaa elhihaa oevaru neynngey
Dhoonukuran hihvaru othakas hithugaa
Moonunivaa vaahaa hiyaleh othakas
Hiyaleh othakas
#1
Ginakeriyaa vaareygaa $aanhaa$
Dhiyagothakun dhuvelee haruvee $aanhaa$
Innafathuga indhe ejehifali $aanhaa$
Jehi gothakun dhuvelee haruvee $aanhaa$
Baanithakun odi ufuhlaa $aanhaa$
Dhiyagothakun dhuvelee falijahamun
*Heh heh heh heh hey fali jahamun
Falijahamun
*Falijahamun
#2
Raalhuthakuge nalanala hudhufonu
*Ainuthakun koamas dhiyairu
Raagukiyaalaa vaarey kanikani
Baaruga kefifen dhirunbaakolhu mahyaalun
*Mahyaalun mahyaalun
#3
Hulhanguge miya hiyalee finikan
*Udharesthah vilain bahdhaa
Thurayaaekee dheathah heliheli
Uthurah dhuhvaa gadhafadha baarehlaa
*Dhuhvamun dhuhvamun
-
$M
Vaisoori dhuhvaa kudhinnah filaigen
*Dhaanee ma ruhgandu thereygaa bondhaigen
Ranndhoadhi irudhin ujaalaa
*Ujaalaa bunnvaru magunnthaa uthurah hingaalaan
$1
Nalareethi mannzaru nagamun fotoathah
*Nalareethi kuhjeh edhanee hingaalaan
Baibai velaafaa udhuhifa edhaairu
*Aharen hithahvaa asarehkuraaney
$2
Rathafaa bodanathah feneyey dhuvaathan
*Rathafaa ilolhiyaa feneyey hovaathan
Baibai velaafaa udhuhifa edhaairu
*Aharen hithahvaa asarehkuraaney`,
},
{
  id: 110,
  name: `Haarey Piya`,
  genre: 'Kaasi',
  lyrics: `#M
ހާރޭ ޕިޔަލާލޫ ބާލާމޭ އުސާޔާ
*ހާރޭ ޕިޔަލާލޫ ބާލާމޭ އުސާޔާ

#1
މޯރާ ޗިޅިޔާ ދޭހިޔާއޭތޯ ބާލޫމާ
*މޯރާ ޗިޅިޔާ ދޭހިޔާއޭތޯ ބާލޫމާ
ލޫމާ ދިލްކާ ސަހާރީ
*އޭހަމޭޝާ
ދިލްކާ ސަހާރީ
*އޭހަމޭޝާ

-
$M
ތުމަކަރެ ބައޭފުމޯ
*ތިޔޮކުނަ ސީނަލިޔާ

$1
ދޯސްތުބޯއެ ކަރިކެތުބޯއެ ޔޯގެ މުޓާ ދިލްސެހުވާ
*ދޯސްތުބޯއެ ކަރިކެތުބޯއެ ޔޯގެ މުޓާ ދިލްސެހުވާ
ޔަޗަދަލް މެޔެލާ ދިލްކެމުޓާ ދިލްކަހުވާ
*ޔަޗަދަލް މެޔެލާ ދިލްކެމުޓާ ދިލްކަހުވާ

$N
*ބޭލިސަހޯ ބޭލިސަޔާ
ބޭލިސަހޯ ބޭލިސަޔާ
ޓާކުނަޑަރު ސީނާ ވަޑައިގަތީ ސާރަސަޔާ
ޕެއްޕެލެޕޭ ލެއްޕޭ ލެޕޭލެޕޭ ސާރަސަޔާ`,

  englishLyrics: `#M
Haarey piyalaaloo baalaamey usaayaa
*Haarey piyalaaloo baalaamey usaayaa
#1
Moaraa chilhiyaa dheyhiyaaeythoa baaloomaa
*Moaraa chilhiyaa dheyhiyaaeythoa baaloomaa
Loomaa dhilkaa sahaaree
*Eyhameyshaa
Dhilkaa sahaaree
*Eyhameyshaa
-
$M
Thumakare baeyfumoa
*Thiyokuna seenaliyaa
$1
Dhoasthuboae karikethuboae yoage mutaa dhilsehuvaa
*Dhoasthuboae karikethuboae yoage mutaa dhilsehuvaa
Yachadhal meyelaa dhilkemutaa dhilkahuvaa
*Yachadhal meyelaa dhilkemutaa dhilkahuvaa
$2
Beylisahoa beylisayaa
*Beylisahoa beylisayaa
Taakunadaru seenaa vadaigathee saarasayaa
*Pehpelepey lehpey lepeylepey saarasayaa`,
},
{
  id: 111,
  name: `Heydhavaa Iru`,
  genre: 'Nala',
  lyrics: `#M
ހޭދަވާއިރު ރޭދުވާ
*ދެހިތައް އުފާ ލިބިދާނެތޯ
ހެހަށީ ހުރިހާ ހިނދަކު
*ދެގޮތެއް ސަފުން ވެވިދާނެތޯ
*ހޭދަވާއިރު ރޭދުވާ

#1
ހިޔަލަޔާ އަދި އަލިފުޅާތިބެ
*ވަކިނުވާން ކުރިޔޭ ހުވާ
ހިޔަ މިތުރު ގެންދަން ފެށީމާ
*އަލިފުޅަށް ހުރެވޭނެތޯ

#2
ތާޖުގާވާ ހައިބަތާއެކު
*ތާކުއިން ފަތްމިންޔަކަށް
ބާރުގާ މަޖުބޫރު ކުރިޔަސް
*ހާއުފާ ލިބިދާނެތޯ

#3
މާނައެއް ނެތް ދުނިޔެއެއްގާ
*ނޭދެޔޭ އަލަކުން އުޅެން
މާވަރެއްގާ މަރުމުމަށް ވުރެ
*ހެޔޮގޮތެއް އޮންނާނެތޯ`,

  englishLyrics: `#M
Heydhavaairu reydhuvaa
*Dhehithah ufaa libidhaanethoa
Hehashee hurihaa hindhaku
*Dhegotheh safun vevidhaanethoa
*Heydhavaairu reydhuvaa
#1
Hiyalayaa adhi alifulhaathibe
*Vakinuvaan kuriyey huvaa
Hiya mithuru genndhan fesheemaa
*Alifulhah hureveynethoa
#2
Thaajugaavaa haibathaaeku
*Thaakuin fayyminnyakah
Baarugaa majubooru kuriyas
*Haaufaa libidhaanethoa
#3
Maanaeh neyy dhuniyeehgaa
*Neydheyey alakun ulhen
Maavarehgaa marumumah vure
*Heyogotheh onnaanethoa`,
},
{
  id: 112,
  name: `Hiyy Miothy`,
  genre: 'Taki',
  lyrics: `#M
ހިތްމިއޮތީ ދޭހިތުން ނަގާފާ ކަލާޔަށް
*ހިތްމިދެނީ ހިބަ ކޮއްފާ އެކީގާ ކަލާޔަށް
ދާން މިހިތް އެދޭތީ
*ދާން މިހިތް އެދޭތީ ދާން މިހިތް އެދޭތީ

#1
ޝަކުވާއޭ މިހިތްކުރީ ހެނދުނާ ހަވީރާ
*ފަރުވާއެއް ނެތި ހިތައް އަނިޔާ ލިބޭތީ
ދާން މިހިތް އެދޭތީ
*ދާން މިހިތް އެދޭތީ ދާން މިހިތް އެދޭތީ

#2
ރިހުމެއް ހަމަ ހިތައްވެޔޭ ތިޔަނަން އިވޭތީ
*ފިރުމާލަން ހިތްއެދޭ ހިނިތުންވެލާތީ
ދާން މިހިތް އެދޭތީ
*ދާން މިހިތް އެދޭތީ ދާން މިހިތް އެދޭތީ

#3
ހިތުގާވާ ޙިޔާލުތައް އަންގާލަދޭނީ
*މިތުރާއަށް ހިތްއެކީ ދީފާ ބުނާނި
ދާން މިހިތް އެދޭތީ
*ދާން މިހިތް އެދޭތީ ދާން މިހިތް އެދޭތީ`,

  englishLyrics: `#M
Hiyymiothee dheyhithun nagaafaa kalaayah
*Hiyymidhenee hiba kohfaa ekeegaa kalaayah
Dhaan mihiyy edheythee
*Dhaan mihiyy edheythee dhaan mihiyy edheythee
#1
Shakuvaaey mihiyykuree hendhunaa haveeraa
*Faruvaaeh nethi hithah aniyaa libeythee
Dhaan mihiyy edheythee
*Dhaan mihiyy edheythee dhaan mihiyy edheythee
#2
Rihumeh hama hithahveyey thiyanan iveythee
*Firumaalan hiyyedhey hinithunnvelaathee
Dhaan mihiyy edheythee
*Dhaan mihiyy edheythee dhaan mihiyy edheythee
#3
Hithugaavaa hiyaaluthah anngaaladheynee
*Mithuraaah hiyyekee dheefaa bunaani
Dhaan mihiyy edheythee
*Dhaan mihiyy edheythee dhaan mihiyy edheythee`,
},
{
  id: 113,
  name: `Jahaa Thaara`,
  genre: 'Taki',
  lyrics: `#M
ޖަހާ ތާރަ ދެކިލަބަލާ
*ޖަހާ ތާރަ ދެކިލަބަލާ
ކަމަނަ ފައިގެ ގިގުނި ބަލާ
*އިކި ފެނިފާ އެތަން ބަލާ
*ޖަހާ ތާރަ ދެކިލަބަލާ

#1
ޗުއްޓިތެރޭ ގޮސް ހުރާގަ މަހުއްޓާ
*ލަނގިރި ޖެހި އެތާނގަ ހުއްޓާ
އެދުރުބެގެ ދޮންމަންޖެ ހީލިޔެ
*ޅަދުވަހައް ވީނަމައެ ހީވިޔެ
މުދިމުގެ މެދު ފުޅަލި ހިއްލާ
*ޖަހާ ތާރަ ދެކިލަބަލާ ޖަހާ ތާރަ ދެކިލަބަލާ

#2
އިރުކޮޅަކުން ރާގޭ ފެށީ
*އަރިއަރިއަށް ދާށެފެށީ
ފައްޓަރުބައިގެ ފައިގެ ގިގުނިން
*ފައި ހަމަކޮއްލައިފިޔެ ގިގުނިން
އާދެ މީގެ ކުރިން ނުބަލާ
*ޖަހާ ތާރަ ދެކިލަބަލާ ޖަހާ ތާރަ ދެކިލަބަލާ`,

  englishLyrics: `#M
Jahaa thaara dhekilabalaa
*Jahaa thaara dhekilabalaa
Kamana faige giguni balaa
*Iki fenifaa ethan balaa
*Jahaa thaara dhekilabalaa
#1
Chuhtitherey gos huraaga mahuhtaa
*Langiri jehi ethaanga huhtaa
Edhurubege dhonnmannje heeliye
*Lhadhuvahah veenamae heeviye
Mudhimuge medhu fulhali hihlaa
*Jahaa thaara dhekilabalaa jahaa thaara dhekilabalaa
#2
Irukolhakun raagey feshee
*Ariariah dhaashefeshee
Fahtarubaige faige gigunin
*Fai hamakohlaifiye gigunin
Aadhe meege kurin nubalaa
*Jahaa thaara dhekilabalaa jahaa thaara dhekilabalaa`,
},
{
  id: 114,
  name: `Ishqakee Mulhi Zindhagee`,
  genre: 'Nala',
  lyrics: `#M
އިޝްޤަކީ މުޅި ޒިންދަގީ
*ބަރުބާދު ކޮއްލާ ވޭނެކޭ
ގިސްލުމާ ލޭ ކަރުނަ އޮރާލަން
*ޖެހޭ އަފުސޫސްކޭ

#1
ވިސްނުމެއްނެތި އޭގެ އަސްލާ ބޯލަނބާ ކިޔަމަން ވުމުން
*ބޯލަނބާ ކިޔަމަން ވުމުން
ފިސްވެ ހިތް ކުދިކުދިވެގެންދާހާ
*އެއީ ހިތި ޒަހަރެކޭ

#2
ކޮންމެ ހާލެއްގާވިޔަސް މިންޖެއް ނެތޭ އެއަކުންވެވޭ
*މިންޖެއް ނެތޭ އެއަކުންވެވޭ
ކޮންމެ އިންސާނެއްގެ މައްޗައް
*މީ ޖެހޭނެ ވަބާއެކޭ

#3
އެކި ކަހަލަ އެކި ލޯބިތައް އެކިވަރުވަރުން މީޒާން ވިޔަސް
*އެކިވަރުވަރުން މީޒާން ވިޔަސް
ރެކި ނުދާނޭ އިޝްޤަކީ މީޒާނުގާ
*ބުރަ އެއްޗެކޭ

#4
ނަފުރަތުން އިޝްޤުން ލިބޭ ހައިރާންވެ ހިތް ގަބަރާ ވިޔަސް
*ހައިރާންވެ ހިތް ގަބަރާ ވިޔަސް
ޑަކުޓަރުންނަށް ވެސް އެއީ ބޭހެއް
*ނުވާ ހަމަ ބައްޔެކޭ

#5
ނަފުސު ރައްކާތެރި ވުމަށް އިޝްޤުން ސަލާމަތް ހޯދުމަށް
*އިޝްޤުން ސަލާމަތް ހޯދުމަށް
ކަފުނަކާ އެކުގާ މިހޯދަން
*ގައިމުވީ ސަންދޯކެކޭ

#6
އިޝްޤަކީ އަބަދައްމެ ވޭނާ ހިތުގެ ޝަކުވާޔާ އެކީ
*ހިތުގެ ޝަކުވާޔާ އެކީ
ގިސްލުމެއްގާ ދުނިޔެ ނިންމައިދޭ
*މުޅިންމެ އަޒާބެކޭ`,

  englishLyrics: `#M
Ishqakee mulhi zinndhagee
*Barubaadhu kohlaa veynekey
Gislumaa ley karuna ohoraalan
*Jehey afusooskey
#1
Visnumehnethi eyge aslaa boalanbaa kiyaman vumun
*Boalanbaa kiyaman vumun
Fisve hiyy kudhikudhivegenndhaahaa
*Eee hithi zaharekey
#2
Konnme haalehgaaviyas minnjeh nethey eakunnvevey
*Minnjeh nethey eakunnvevey
Konnme innsaanehge mahchah
*Mee jeheyne vabaaekey
#3
Eki kahala eki loabithah ekivaruvarun meezaan viyas
*Ekivaruvarun meezaan viyas
Reki nudhaaney ishqakee meezaanugaa
*Bura ehchekey
#4
Nafurathun ishqun libey hairaannve hiyy gabaraa viyas
*Hairaannve hiyy gabaraa viyas
Dakutarunnah ves eee beyheh
*Nuvaa hama bahyekey
#5
Nafusu rahkaatheri vumah ishqun salaamayy hoadhumah
*Ishqun salaamayy hoadhumah
Kafunakaa ekugaa mihoadhan
*Gaimuvee sanndhoakekey
#6
Ishqakee abadhahme veynaa hithuge shakuvaayaa ekee
*Hithuge shakuvaayaa ekee
Gislumehgaa dhuniye ninnmaidhey
*Mulhinnme azaabekey`,
},
{
  id: 115,
  name: `Kehidheynamey`,
  genre: 'Nala',
  lyrics: `#M
ކެހިދޭނަމޭ ރާވާހިތުން
*ގެންދޭމިރޭ ހާދަ ހީވޭ
ތިލޯބީގެ ފާޑުން ކުރާ އިންތިޒާރުން
*ހުރީމާ ދިމާ ވޭހޭ

#1
ލޯބީގާ ގޮތްނޭނގި ނުރުހުންވީ ތާއޭ
*ރޭގާ ދިމާވީތާކުން ގޮވުނީމަތާއޭ
ލޯބީގެ ގޯހެއްމީގާ އަސްތާ ހިނގާނޭ
*މޫނެއްގެ ޖާދޫ ރޫހާލާވެސް މެހޭނޭ
ހުރެފާނަން ރޯލަފާނަން އޭގެ ފަހުގާ
*އަޅެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވި

#2
ލޯބީގާ ޖެއްސީމާ ރުހިގެން އުޅޭނޭ
*ހަސްތީ ވުމުންނޭ ޔާރާ ހީވެސް ކުރާނޭ
ލޯބީގެ ފާޑުން ނޫންހޭ ޝައްކެއް ކުރާނީ
*ކޫރެއްމި ލޯބީގާ ނާޅާ ނުދާނޭ
ހުރެފާނަން ރޯލަފާނަން އޭގެ ފަހުގާ
*އަޅެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވީއެ ނުވި`,

  englishLyrics: `#M
Kehidheynamey raavaahithun
*Genndheymirey haadha heevey
Thiloabeege faadun kuraa innthizaarun
*Hureemaa dhimaa veyhey
#1
Loabeegaa goyyneyngi nuruhunnvee thaaey
*Reygaa dhimaaveethaakun govuneemathaaey
Loabeege goahehmeegaa asthaa hingaaney
*Moonehge jaadhoo roohaalaaves meheyney
Hurefaanan roalafaanan eyge fahugaa
*Alhe nuveee nuveee nuveee nuveee nuveee nuveee nuvi
#2
Loabeegaa jehseemaa ruhigen ulheyney
*Hasthee vumunney yaaraa heeves kuraaney
Loabeege faadun noonhey shahkeh kuraanee
*Koorehmi loabeegaa naalhaa nudhaaney
Hurefaanan roalafaanan eyge fahugaa
*Alhe nuveee nuveee nuveee nuveee nuveee nuveee nuvi`,
},
{
  id: 116,
  name: `Kehnuvaaney`,
  genre: 'Nala',
  lyrics: `#M
ކެތްނުވާނޭ ކެތްނުވާނޭ މިވޭނާއި ހޫނުގާ
*ކެތްނުވާނޭ ކެތްނުވާނޭ މިވޭނާއި ހޫނުގާ
ފިސްވެ ލޯބިން އޮޔާލީ މި ކޯރުގާ
*ފިސްވެ ލޯބިން އޮޔާލީ މި ކޯރުގާ ވޭނާއި ހޫނުގާ

#1
ކޮންމެ ރެޔަކުމެ ކަރާކަރު މަހާލާ
*ކޮންމެ ރެޔަކުމެ ކަރާކަރު މަހާލާ
ކޮންމެހެންވެސް ދެނޭވާ ގުޅާލާ
*ކޮންމެހެންވެސް ދެނޭވާ ގުޅާލާ
ނަން ހިނގާފާ އެކަންނުވެ އުދާހުގާ
*ނަން ހިނގާފާ އެކަންނުވެ އުދާހުގާ ވޭނާއި ހޫނުގާ

#2
ދެއްވި ޝަރުބަތުގެ ފޮނިކަން ބަލާލާ
*ދެއްވި ޝަރުބަތުގެ ފޮނިކަން ބަލާލާ
ދޮންވެ ފައްކާވި މޭވާ ހޮވާލާ
*ދޮންވެ ފައްކާވި މޭވާ ހޮވާލާ
ކޮއްލި ހަދިޔާ އަތުން ބީވި ބާރުގާ
*ކޮއްލި ހަދިޔާ އަތުން ބީވި ބާރުގާ ވޭނާއި ހޫނުގާ

#3
އަތު ގުޅައިގެން އިރާކޮޅު ހިނގާލާ
*އަތު ގުޅައިގެން އިރާކޮޅު ހިނގާލާ
ފަތިހު ދޮންވެލި ތުނޑީގާ ނިދާލާ
*ފަތިހު ދޮންވެލި ތުނޑީގާ ނިދާލާ
ކަތިލުމުން ހިތް އަޅާ ޖެއްސި ހާލުގާ
*ކަތިލުމުން ހިތް އަޅާ ޖެއްސި ހާލުގާ ވޭނާއި ހޫނުގާ

#4
ހަނދުވަރީ ރިހި އަލިން ފެންވަރާލާ
*ހަނދުވަރީ ރިހި އަލިން ފެންވަރާލާ
އުދުހެމުން ރާގު ރާގަށް ނަށާލާ
*އުދުހެމުން ރާގު ރާގަށް ނަށާލާ
އުޅުނު އެދުވަސްވެ މާޒީ ހަނދާނުގާ
*އުޅުނު އެދުވަސްވެ މާޒީ ހަނދާނުގާ ވޭނާއި ހޫނުގާ`,

  englishLyrics: `#M
Keyynuvaaney keyynuvaaney miveynaai hoonugaa
*Keyynuvaaney keyynuvaaney miveynaai hoonugaa
Fisve loabin oyaalee mi koarugaa
*Fisve loabin oyaalee mi koarugaa veynaai hoonugaa
#1
Konnme reyakume karaakaru mahaalaa
*Konnme reyakume karaakaru mahaalaa
Konnmehenves dheneyvaa gulhaalaa
*Konnmehenves dheneyvaa gulhaalaa
Nan hingaafaa ekannuve udhaahugaa
*Nan hingaafaa ekannuve udhaahugaa veynaai hoonugaa
#2
Dhehvi sharubathuge fonikan balaalaa
*Dhehvi sharubathuge fonikan balaalaa
Dhonnve fahkaavi meyvaa hovaalaa
*Dhonnve fahkaavi meyvaa hovaalaa
Kohli hadhiyaa athun beevi baarugaa
*Kohli hadhiyaa athun beevi baarugaa veynaai hoonugaa
#3
Athu gulhaigen iraakolhu hingaalaa
*Athu gulhaigen iraakolhu hingaalaa
Fathihu dhonnveli thundeegaa nidhaalaa
*Fathihu dhonnveli thundeegaa nidhaalaa
Kathilumun hiyy alhaa jehsi haalugaa
*Kathilumun hiyy alhaa jehsi haalugaa veynaai hoonugaa
#4
Handhuvaree rihi alin fennvaraalaa
*Handhuvaree rihi alin fennvaraalaa
Udhuhemun raagu raagah nashaalaa
*Udhuhemun raagu raagah nashaalaa
Ulhunu edhuvasve maazee handhaanugaa
*Ulhunu edhuvasve maazee handhaanugaa veynaai hoonugaa`,
},
{
  id: 117,
  name: `Kurangi Dheloa`,
  genre: 'Nala',
  lyrics: `#M
ކުރަނގި ދެލޯ ފެނިސިހިފާ
*ހައިރާންވެ ހުރީމޭ މަގު އޮޅިފާ
އާނ އާއާއާއާނ
*އާއާއާއާނ އާއާއާއާނ

#1
ފާރުވީ ހިތޭ ނުބުނެވުނީ
*މޫނު ފެނި ލަދުވެތިވެވި ހުރެފާ
ކީއްވެހޭ ލަދުން އިސްޖެހީ މަލާ
*ލޯބިންނޭ އަހާލީމީ ޖަވާބެއްދީ ކަލާ
ނެނގެބުނަން ވާނުވާ މިރޭ
*ވަރުނެތި ވާޅުވީ ހިތާއި މޭ ދުލާ

#2
ދާއިމީ އުފާދޭށެ ހިލޭ
*ލޯބިވާ ބުނާށެ ތިޔަ ހިތުގެ ހަނދޭ
ޝާއްބަ ހަނދޭ އޭގަވާ އަލިން
*ފާޅުވީ އިޝާރާތުން ފިލާފާވީ ތަދޭ
ފާރުވީ ހިތޭ ނުބުނެވުނީ
*މޫނުފެނި ލަދުވެތިވެވި ހުރެފާ

#3
ސޫރައިގާ ވަނީ ރީތިހާ އަދާ
*ނޭވާގެ ވަހުންނޭ ތިޔާ މީރުވަސްދެނީ
ދީފާވި ހަނދާން ލޭގާ ފެވުނީ
*މޭގާމޭގާ އަތްލީމާ އަރާމޭވަނީ`,

  englishLyrics: `#M
Kurangi dheloa fenisihifaa
*Hairaannve hureemey magu olhifaa
Aan aaaaaaaan
*Aaaaaaaan aaaaaaaan
#1
Faaruvee hithey nubunevunee
*Moonu feni ladhuvethivevi hurefaa
Keehvehey ladhun isjehee malaa
*Loabinney ahaaleemee javaabehdhee kalaa
Neyngebunan vaanuvaa mirey
*Varunethi vaalhuvee hithaai mey dhulaa
#2
Dhaaimee ufaadheyshe hiley
*Loabivaa bunaashe thiya hithuge handhey
Shaahba handhey eygavaa alin
*Faalhuvee ishaaraathun filaafaavee thadhey
Faaruvee hithey nubunevunee
*Moonufeni ladhuvethivevi hurefaa
#3
Sooraigaa vanee reethihaa adhaa
*Neyvaage vahunney thiyaa meeruvasdhenee
Dheefaavi handhaan leygaa fevunee
*Meygaameygaa ayyleemaa araameyvanee`,
},
{
  id: 118,
  name: `Lharivethi`,
  genre: 'Kaasi',
  lyrics: `#M
ޅަރިވެތި މަގެ ފިރިކަލުން ގާތުގަ ހަށިފިސަޔަށް އިނދެ ރޮއެރޮއެ
*ފާ ގޮވަނީމަ ވަރިކުރޭ

#1
ކައްޗައް މަ އޮޅާލި ރުމާލާ
*އާއްޗާ ރަންފަގަލި ތިނޯހާ
ދައްޗެއް ނެތި ހޯދަން ނުދެންޔާމަ މަރުވެގެން ނުދަނީސް މަރޮއެ ރޮއެ
*ފާ ގޮވަނީމަ ވަރިކުރޭ

#2
މާލޭ ބާޒާރުގާވާ
*މާޖެހި ބުރުގާ ހުރިއްޔާ
މާދަމާ އެފުރާ ތެލިންބައް ގަނެފަ ނުދެންޔާ މަ ރޮއެ ރޮއެ
*ފާ ގޮވަނީމަ ވަރިކުރޭ

#3
ހުޅުދެލި މީހުން އައިމާ
*ހުރިވަރުލާ ގާތުގާ އިނދެފާ
ރިހި ގިގުނިލި އުޅާބައެއް ހަމަ ގަނެފަ ނުދެންޏާ މަރޮއެ ރޮއެ
*ފާ ގޮވަނީމަ ވަރިކުރޭ

-
$M
ދޭ ހަނދުވަރުހެން ވިދާ
*ރޭ އަލިކޮއްލާ މިދަނީ ބުލްބުލާ

$1
ނަފުސުން މޫރިތި ނަޔާ
*ޅަފުރާ އިނދެ ފޯދިފާ
އަޅެލާލުހާ ރަން ކުލައިން
*ރޭ އަލިކޮއްލާ މިދަނީ ބުލްބުލާ

$N
*ހޭއަރާ
ލޯބީގާ
ފައިސާޔާ
ފޯރީގާ
ފޯރިއަރާ`,

  englishLyrics: `#M
Lharivethi mage firikalun gaathuga hashifisayah indhe roeroe
*Faa govaneema varikurey
#1
Kahchah ma olhaali rumaalaa
*Aahchaa rannfagali thinoahaa
Dhahcheh nethi hoadhan nudhennyaama maruvegen nudhanees maroe roe
*Faa govaneema varikurey
#2
Maaley baazaarugaavaa
*Maajehi burugaa hurihyaa
Maadhamaa efuraa thelinnbah ganefa nudhennyaa ma roe roe
*Faa govaneema varikurey
#3
Hulhudheli meehun aimaa
*Hurivarulaa gaathugaa indhefaa
Rihi gigunili ulhaabaeh hama ganefa nudhennyaa maroe roe
*Faa govaneema varikurey
-
$M
Dhey handhuvaruhen vidhaa
*Rey alikohlaa midhanee bulbulaa
$1
Nafusun moorithi nayaa
*Lhafuraa indhe foadhifaa
Alhelaaluhaa ran kulain
*Rey alikohlaa midhanee bulbulaa
$2
*Heyaraa
Loabeegaa
Faisaayaa
Foareegaa
Foariaraa`,
},
{
  id: 119,
  name: `Loabin Balaaliyas`,
  genre: 'Nala',
  lyrics: `#M
ލޯބިން ބަލާލިޔަސް ހެޔޮ އެއްލޯ މަރާލިޔަސް ހެޔޮ
*ހިތް ފުރިއަރާ ދާނެހެން ހީވެއޭ
ކަތި ބަސްބަހުން މަލާމަތް ތަކުރާރުކޮށް ހަދާތީ
*އަދު ހިތް ފަޅައިން ދާވަރަށް ތަދުވެޔޭ

#1
ލޯބީގެ މާފޮޅޭ ވަކި ގުލްސަނެއް ނޭގޭ ކަމުން
*ލޯބީގެ މާފޮޅޭ ވަކި ގުލްސަނެއް ނޭގޭ ކަމުން
ހޯދަންއެދޭ އެތައް ފުރުސަތުތަކެއް ނުލިބޭ ކަމުން
*ހޯދަންއެދޭ އެތައް ފުރުސަތުތަކެއް ނުލިބޭ ކަމުން
ގޯހެއްހަދާލާނަމޭ ހީވެޔޭ
*ލޯބިން ބަލާލިޔަސް ހެޔޮ އެއްލޯ މަރާލިޔަސް ހެޔޮ ހިތް ފުރިއަރާ ދާނެހެން ހީވެއޭ

#2
ކެއްކުރުމަކަށް މަގޭ މޮޔަ ހިތްގަނޑެއް ނުރުހޭ މެޔޭ
*ކެއްކުރުމަކަށް މަގޭ މޮޔަ ހިތްގަނޑެއް ނުރުހޭ މެޔޭ
ހެއްކެއް ނެތޭ މިކަން ދަންނާނެ ދުނިޔޭން ހެޔޮއެދޭ
*ހެއްކެއް ނެތޭ މިކަން ދަންނާނެ ދުނިޔޭން ހެޔޮއެދޭ
ހެކިވާނެ މިކަމަށްދުނިޔެ ހީވެޔޭ
*ލޯބިން ބަލާލިޔަސް ހެޔޮ އެއްލޯ މަރާލިޔަސް ހެޔޮ ހިތް ފުރިއަރާ ދާނެހެން ހީވެއޭ

#3
ދަތިކަން ހިތާމެޔަށް އައިކަން މުޅިން ކަށަވަރުވިޔޭ
*ދަތިކަން ހިތާމެޔަށް އައިކަން މުޅިން ކަށަވަރުވިޔޭ
ދުނިޔޭގެ އާދައޭ މީވެސް އުސޫލޭ ހީވެޔޭ
*ދުނިޔޭގެ އާދައޭ މީވެސް އުސޫލޭ ހީވެޔޭ
އުފަލުން ރޮމުންގޮސް ހެވޭހާވެޔޭ
*ލޯބިން ބަލާލިޔަސް ހެޔޮ އެއްލޯ މަރާލިޔަސް ހެޔޮ ހިތް ފުރިއަރާ ދާނެހެން ހީވެއޭ`,

  englishLyrics: `#M
Loabin balaaliyas heyo ehloa maraaliyas heyo
*Hiyy furiaraa dhaanehen heeveey
Kathi basbahun malaamayy thakuraarukoh hadhaathee
*Adhu hiyy falhain dhaavarah thadhuveyey
#1
Loabeege maafolhey vaki gulsaneh neygey kamun
*Loabeege maafolhey vaki gulsaneh neygey kamun
Hoadhannedhey ethah furusathuthakeh nulibey kamun
*Hoadhannedhey ethah furusathuthakeh nulibey kamun
Goahehhadhaalaanamey heeveyey
*Loabin balaaliyas heyo ehloa maraaliyas heyo hiyy furiaraa dhaanehen heeveey
#2
Kehkurumakah magey moya hiyygandeh nuruhey meyey
*Kehkurumakah magey moya hiyygandeh nuruhey meyey
Hehkeh nethey mikan dhannaane dhuniyeyn heyoedhey
*Hehkeh nethey mikan dhannaane dhuniyeyn heyoedhey
Hekivaane mikamahdhuniye heeveyey
*Loabin balaaliyas heyo ehloa maraaliyas heyo hiyy furiaraa dhaanehen heeveey
#3
Dhathikan hithaameyah aikan mulhin kashavaruviyey
*Dhathikan hithaameyah aikan mulhin kashavaruviyey
Dhuniyeyge aadhaey meeves usooley heeveyey
*Dhuniyeyge aadhaey meeves usooley heeveyey
Ufalun romunngos heveyhaaveyey
*Loabin balaaliyas heyo ehloa maraaliyas heyo hiyy furiaraa dhaanehen heeveey`,
},
{
  id: 120,
  name: `Lolaa Moona`,
  genre: 'Taki',
  lyrics: `#M
ލޮލާ މޫނާ ކަނދުރާފެނި ޝޯހުވޭ
*ޖާނު ލޯބިން ދެވިދާނެޔޭ
މިހިތް އުތުރި އަރާނޭ
*މިހިތް ނުފުރި ނުދާނޭ
ހިތުގެ އެދުމޭތީ &ހޭ&
ހިތުގެ އެދުމޭތީ &ހޭ ހޭ&
ހިތުގެ އެދުމޭތީ ފުރާނައޭ
*ހިތުގެ އެދުމޭތީ ފުރާނައޭ

#1
ކޯތާފަތުން ޖަންބު ކުލަވަރު އަރާ
*އިސްތަށިގަނޑުން މަޑު ރަންކުލަ އަރާ
އަސުރަށް ފޮޅޭ ފަރި މަލެކޭ ތިއީ
*މޯޅީކަން ލިބިނުދާވަރު މަލެކޭ ތިއީ

#2
ހެނދުނާ ހަވީރާ ފެނިލާނެއޭ
*މިސްކިތު ވަޅުން ފެންބަލާދާނެޔޭ
އަސްދޫނި ހިނގުމެއް ދައްކާލަޔޭ
*ފަސްފަހަތުގާ ބޮނދާ ފާރަލާތަން ފެނޭ`,

  englishLyrics: `#M
Lolaa moonaa kandhuraafeni shoahuvey
*Jaanu loabin dhevidhaaneyey
Mihiyy uthuri araaney
*Mihiyy nufuri nudhaaney
Hithuge edhumeythee hey
*Hithuge edhumeythee hey hey
Hithuge edhumeythee furaanaey
*Hithuge edhumeythee furaanaey
#1
Koathaafathun jannbu kulavaru araa
*Ishthashigandun madu rannkula araa
Asurah folhey fari malekey thiee
*Moalheekan libinudhaavaru malekey thiee
#2
Hendhunaa haveeraa fenilaaneey
*Miskithu valhun fennbalaadhaaneyey
Asdhooni hingumeh dhahkaalayey
*Fasfahathugaa bondhaa faaralaathan feney`,
},
{
  id: 121,
  name: `Kasabu Libaas`,
  genre: 'Taki',
  lyrics: `#M
އީދު ޒީނާތްވެލަން ހައްވަ އެފެހި ކަސަބު ލިބާސް
*އޮންނަންވާނެ އަށީ މެދު އެލުވާ ހަރުގަނޑުގާ
އަމުދުން ކަސަބު ރޮދިން ކޮށްމަޖަރީކުރި އެ ލިބާސް
*އޮންނަންވާނެ އަށީ މެދު އެލުވާ ހަރުގަނޑުގާ

#1
ކެޔޮޅު ގޯތީ އާދަން ސޮރުމެން ހޭތަން ފެނެޔޭ
*ކެޔޮޅު ގޯތީ އާދަން ސޮރުމެން ހޭތަން ފެނެޔޭ
ޒާތަކަށް ކުދިކިޔަމުން އަތިރިން އައިތަން ފެނެޔޭ
*ޒާތަކަށް ކުދިކިޔަމުން އަތިރިން އައިތަން ފެނެޔޭ
މާ ޔަގީންތާ މަށަށް ކޮއްލިކަމެއް ނޫންވިއްޔާ
*އޮންނަންވާނެ އަށީ މެދު އެލުވާ ހަރުގަނޑުގާ

#2
މާދުރުން ފަސްފަހަތުން ފަރިބަލަމުން ހުރެ އައިތާ
*މާދުރުން ފަސްފަހަތުން ފަރިބަލަމުން ހުރެ އައިތާ
ފެންނަފަށު ހީލާ ރަކިގޮތަކަށް އެއްލޯ މެރިތާ
*ފެންނަފަށު ހީލާ ރަކިގޮތަކަށް އެއްލޯ މެރިތާ
މާ ޔަގީންތާ މަށަށް ކޮއްލިކަމެއް ނޫންވިއްޔާ
*އޮންނަންވާނެ އަށީ މެދު އެލުވާ ހަރުގަނޑުގާ

#3
ނާތެދޭ ފާޅުކުރަން ހުރެ އަރިހަށް ފޮނުވިއްޔާ
*ނާތެދޭ ފާޅުކުރަން ހުރެ އަރިހަށް ފޮނުވިއްޔާ
މަ ބުނަން ރުހިމަ ބަފާ ހިބަ މަކުރަން އެންގީތާ
*މަ ބުނަން ރުހިމަ ބަފާ ހިބަ މަކުރަން އެންގީތާ
މާ ޔަގީންތާ މަށަށް ކޮއްލިކަމެއް ނޫންވިއްޔާ
*އޮންނަންވާނެ އަށީ މެދު އެލުވާ ހަރުގަނޑުގާ`,

  englishLyrics: `#M
Eedhu zeenaayyvelan hahva efehi kasabu libaas
*Onnannvaane ashee medhu eluvaa harugandugaa
Amudhun kasabu rodhin kohmajareekuri e libaas
*Onnannvaane ashee medhu eluvaa harugandugaa
#1
Keyolhu goathee aadhan sorumen heythan feneyey
*Keyolhu goathee aadhan sorumen heythan feneyey
Zaathakah kudhikiyamun athirin aithan feneyey
*Zaathakah kudhikiyamun athirin aithan feneyey
Maa yageennthaa mashah kohlikameh noonnvihyaa
*Onnannvaane ashee medhu eluvaa harugandugaa
#2
Maadhurun fasfahathun faribalamun hure aithaa
*Maadhurun fasfahathun faribalamun hure aithaa
Fennafashu heelaa rakigothakah ehloa merithaa
*Fennafashu heelaa rakigothakah ehloa merithaa
Maa yageennthaa mashah kohlikameh noonnvihyaa
*Onnannvaane ashee medhu eluvaa harugandugaa
#3
Naathedhey faalhukuran hure arihah fonuvihyaa
*Naathedhey faalhukuran hure arihah fonuvihyaa
Ma bunan ruhima bafaa hiba makuran enngeethaa
*Ma bunan ruhima bafaa hiba makuran enngeethaa
Maa yageennthaa mashah kohlikameh noonnvihyaa
*Onnannvaane ashee medhu eluvaa harugandugaa`,
},
{
  id: 122,
  name: `Moonu Nuforuvaashe`,
  genre: 'Taki',
  lyrics: `#M
މޫނު ނުފޮރުވާށެ މަގޭ ރީތިވި ރާނީ
*ކިހާ ދެން އުޖާލާ ކަމެއް ވޭހޭ
މަސްތު މަސްތު ލޯ ތިޔަ ޗާލޭ ބަލަ މިތުރާ
*ބަލާ ފޫއްސެއް ނުވާނޭ އެހާ ރީއްޗޭ

#1
ހިތްމިއެދި ގޮވާވަރުންނޭ އެދެމެ އުރާލަން
*އިޒުނަދޭށޭ ދެން ނޫނީ އަތުގަ ހިފާލަން
ބަންދުވެ ލޯބީގާ ހައްޔަރުމަ ވެވިއްޖޭ
*ތިހާ ޝާހީ އަދާތަކުގަ ބަނދެވިއްޖޭ

#2
ލޯބި އެހާ ވާނެކަމެއް ނުމެ އެނގޭ މެޔޭ
*ފެނިފަ ތިހެން އެންމެންވެސް ބުނެ އުޅޭނެޔޭ
އޭގަ އެވާ ކެހިވެރިކަން ދަސްވެސްވެއްޖޭ
*ހުޝާމަދުކަން ތިއީ ހަމަ ޔަޤީންވެއްޖޭ`,

  englishLyrics: `#M
Moonu nuforuvaashe magey reethivi raanee
*Kihaa dhen ujaalaa kameh veyhey
Masthu masthu loa thiya chaaley bala mithuraa
*Balaa foohseh nuvaaney ehaa reehchey
#1
Hiyy miedhi govaavarunney edheme uraalan
*Izunadheyshey dhen noonee athuga hifaalan
Banndhuve loabeegaa hahyaruma vevihjey
*Thihaa shaahee adhaathakuga bandhevihjey
#2
Loabi ehaa vaanekameh nume engey meyey
*Fenifa thihen ennmennves bune ulheyneyey
Eyga evaa kehiverikan dhasvesvehjey
*Hushaamadhukan thiee hama yaqeennvehjey`,
},
{
  id: 123,
  name: `Ahaashey Zuvaana`,
  genre: 'Taki',
  lyrics: `#M
އަހާށޭ ޒުވާނާ ބުނާށެ ލޯބިވާ
*އަހާށޭ ޒުވާނާ ބުނާށެ ލޯބިވާ
ވަރަށް ރީތި ރެއެކޭ ހިނގާލަމާ ހިނގާ
*ވަރަށް ރީތި ރެއެކޭ ހިނގާލަމާ ހިނގާ

#1
ހޫނުން ޔާރާގެ ހަށީގާވާ
*މޭގާ އުތުރޭ ފިނިކަން ފިލުވާލަންހޭ
އޭރުން ހިތަށްތި ކުރުވާނޭ
*އަރާމު ނިކަން ލޯބިން ބަޔާންކޮށްދެންހޭ
ތިހެންނޫޅޭ މިތުރާ ނިދަން ހިނގާ މިރޭ
*ތިހެންނޫޅޭ މިތުރާ ނިދަން ހިނގާ މިރޭ

#2
މިތުރާއޭ ދަންވަރޭ ހިނމޭންވޭ
*ސިޔާސަ ވެގެން ނޫޅޭށޭ ކެތްތެރިވާށޭ
ކިޔާދޭނަމޭ މިހިތު ތެރޭވާ
*ޙިޔާލު ނިކަން ލޯބިން އަޑުދެން އަހާށޭ
ތިހެންނޫޅޭ ގާތަށް ޖެހޭށޭ ދެންމިރޭ
*ތިހެންނޫޅޭ ގާތަށް ޖެހޭށޭ ދެންމިރޭ

#3
ނާދޭމިރޭ މަ ހިލާ ނިންޖެއް
*ލޯބީގާވެދާ ގޮތެކޭމީ ހިތްހެޔޮ ކުރާތީ
ކެތްވާނީ ކިހިނަކުން ޒުވާނާ
*ނަގާ މިރާޅު މޭގާ ދެން އޮބިގެން ނުދާތީ
ތިއީ ހާދަ މަސްތީ މިޒާޖެހޭ މިރޭ
*ތިއީ ހާދަ މަސްތީ މިޒާޖެހޭ މިރޭ`, 
      englishLyrics: `#M
Ahaashey zuvaanaa bunaashe loabivaa
*Ahaashey zuvaanaa bunaashe loabivaa
Varah reethi reekey hingaalamaa hingaa
*Varah reethi reekey hingaalamaa hingaa
#1
Hoonun yaaraage hasheegaavaa
*Meygaa uthurey finikan filuvaalanhey
Eyrun hithahthi kuruvaaney
*Araamu nikan loabin bayaankohdhenhey
Thihennoolhey mithuraa nidhan hingaa mirey
*Thihennoolhey mithuraa nidhan hingaa mirey
#2
Mithuraaey dhanvarey himeynvey
*Siyaasa vegen noolheyshey keyytherivaashey
Kiyaadheynamey mihithu thereyvaa
*Hiyaalu nikan loabin adudhen ahaashey
Thihennoolhey gaathah jeheyshey dhenmirey
*Thihennoolhey gaathah jeheyshey dhenmirey
#3
Naadheymirey ma hilaa ninjeh
*Loabeegaavedhaa gothekeymee hiyyheyo kuraathee
Keyyvaanee kihinakun zuvaanaa
*Nagaa miraalhu meygaa dhen obigen nudhaathee
Thiee haadha masthee mizaajehey mirey
*Thiee haadha masthee mizaajehey mirey`,
},
{
  id: 124,
  name: `Araigen Ai Iraaekee`,
  genre: 'Nala',
  lyrics: `#M
އަރައިގެން އައި އިރާއެކީ އައިމޭ
*ކަލާޔަށް ދޭން ފިނިފެންމާ ހިފައިގެން
މިސްޓައިލުގާ ބުނީމާ ދެން ހިފާށޭ
*އާނހަ ތިޔަދަނީ ހަމަ ރުޅިންހޭ
*އަރައިގެން އައި އިރާއެކީ އައިމޭ

#1
ރީތި ދޮންވެލި ތުނޑިޔެއްގާ އަޅާދޭނަން
*ދޮންވެލީގެ ކާސަލް
އޭގެބޭރުގަ ރޯސް ގާރޑެންއެއް މައިންދާނަން
*ކޮންމެ ދުވަހަކު މަބިންދެދޭނަން
މިވަރުންވެސް ނުވަންޔާ މަގޭ ޖާނުދޭން
*އަރައިގެން އައި އިރާއެކީ އައިމޭ ކަލާޔަށް ދޭން ފިނިފެންމާ ހިފައިގެން

#2
ވީމަ ބައްދަލު އަދުމިގޮތައް ހިނގާށޭ
*އެކުގަ ރައިޑަކަށް ދާން
ރީތި ގާތުގަ ލޯބިންދެން ބެލޭތީ
*ޝައްކުވާން ފެށީބާ
ބިރުވެސް ގަންނަނީ ލޯބި ހިއްސާކުރަން
*އަރައިގެން އައި އިރާއެކީ އައިމޭ ކަލާޔަށް ދޭން ފިނިފެންމާ ހިފައިގެން`, 
      englishLyrics: `#M
Araigen ai iraaekee aimey
*Kalaayah dheyn finifenmaa hifaigen
Misttailugaa buneemaa dhen hifaashey
*Aanha thiyadhanee hama rulhinhey
*Araigen ai iraaekee aimey
#1
Reethi dhonveli thundiyehgaa alhaadheynan
*Dhonveleege castle
Eygebeyruga rose gardeneh maindhaanan
*Konme dhuvahaku mabindhedheynan
Mivarunves nuvanyaa magey jaanudheyn
*Araigen ai iraaekee aimey kalaayah dheyn finifenmaa hifaigen
#2
Veema bahdhal adhumigothah hingaashey
*Ekuga raidakah dhaan
Reethi gaathuga loabindhen beleythee
*Shahkuvaan fesheebaa
Biruves gannanee loabi hihsaakuran
*Araigen ai iraaekee aimey kalaayah dheyn finifenmaa hifaigen`,
},
{
  id: 125,
  name: `Chaalu Chaalu Gaumee`,
  genre: 'Taki',
  lyrics: `#M
ހެމުންވާށެ ފިދާ ފިދާ
*ހިތުން ޝައުގު ވެދީއެކީ
އެދެންވާނެ ނަސްރުއެކީ ގައުމު ހެޔޮފަލާ
*އެދެންވާނެ ނަސްރުއެކީ ގައުމު ހެޔޮފަލާ
ހެމުންވާށެ ފިދާ ފިދާ
*ހިތުން ޝައުގު ވެދީއެކީ
ގައުމީ ގައުމީ ޗާލުޗާލު ގައުމީ
*ގައުމީ ގައުމީ ޗާލުޗާލު ގައުމީ

#1
ނަލަރީތި ޒާމާނެއްގެ ނަޔާ ސޫރަދޭތި ޖޯޝީ
*ނަލަރީތި ޒާމާނެއްގެ ނަޔާ ސޫރަދޭތި ޖޯޝީ
އަމަލުން ތަބާވެ ސީދާ ޔޫބިލް ނަސީބުގާ
*އަމަލުން ތަބާވެ ސީދާ ޔޫބިލް ނަސީބުގާ

#2
ޝުކުރާއި ތަހާނީއެ ކިޔާ ޗާލުޗާލު ރާގުން
*ޝުކުރާއި ތަހާނީއެ ކިޔާ ޗާލުޗާލު ރާގުން
އަމުނާލެވޭ ނާޝީދުން ތައުޒީމުގާ ކިޔާ
*އަމުނާލެވޭ ނާޝީދުން ތައުޒީމުގާ ކިޔާ

#N
ގައުމީ ގައުމީ
*ޗާލުޗާލު ގައުމީ`, 
  englishLyrics: `#M
Hemunvaashe fidhaa fidhaa
*Hithun shaugu vedheeekee
Edhenvaane nasruekee gaumu heyofalaa
*Edhenvaane nasruekee gaumu heyofalaa
Hemunvaashe fidhaa fidhaa
*Hithun shaugu vedheeekee
Gaumee gaumee chaaluchaalu gaumee
*Gaumee gaumee chaaluchaalu gaumee
#1
Nalareethi zaamaanehge nayaa sooradheythi joashee
*Nalareethi zaamaanehge nayaa sooradheythi joashee
Amalun thabaave seedhaa yoobil naseebugaa
*Amalun thabaave seedhaa yoobil naseebugaa
#2
Shukuraai thahaaneee kiyaa chaaluchaalu raagun
*Shukuraai thahaaneee kiyaa chaaluchaalu raagun
Amunaalevey naasheedhun thauzeemugaa kiyaa
*Amunaalevey naasheedhun thauzeemugaa kiyaa
#3
Gaumee gaumee
*Chaaluchaalu gaumee`,
},
{
  id: 126,
  name: `Farivaa`,
  genre: 'Nala',
  lyrics: `#M
ފަރިވާ މަލޭތީލޯބިން ފަރިވާ
*މަސްތުވާޝަބާބޭ ތިއެފަރިވާ މަސްތުވާޝަބާބޭ ތިއެފަރިވާ
ތިޔައަސަރުގަ ނުޖެހި ދެވޭނެހޭ
*ޖާޒުބީ އުފާދޭ ތިއަދާތަކުން ޖާޒުބީ އުފާދޭ ތިއަދާތަކުން

#1
ފެނުމުންހިތަށް ގޮތްވޭ
*ތީފޮނިފޮނި އަރާމެއްހޭ
ހިތުގާ ތިޔަސޫރަމަގޭ
*އަބަދަށް ކުރެހިފާވާނޭ

#2
ކައިވެނި މަށާ ކުރުމަށް
*ރުހިއެއްބަސް ވެދާނަންހޭ
އަންބެތްގެ ޖާގަފުރާ
*ކެރި އަތުގާ ހިފާނަންހޭ`,

  englishLyrics: `#M
Farivaa maleytheeloabin farivaa
*Masthuvaashabaabey thiefarivaa masthuvaashabaabey thiefarivaa
Thiyaasaruga nujehi dheveynehey
*Jaazubee ufaadhey thiadhaathakun jaazubee ufaadhey thiadhaathakun
#1
Fenumunnhithah goyyvey
*Theefonifoni araamehhey
Hithugaa thiyasooramagey
*Abadhah kurehifaavaaney
#2
Kaiveni mashaa kurumah
*Ruhiehbas vedhaananhey
Annbeyyge jaagafuraa
*Keri athugaa hifaananhey`,
},
{
  id: 127,
  name: `Munifoohi Thibaa`,
  genre: 'Nala',
  lyrics: `#M
މުނިފޫހި ތިބާ އެރިތަން ފެނިފާ
*ދުނިޔޭގެ ނުދާނެހެ ދެން ތިބާ
މުނިޔާގެ ފޮޓޯ ދުރުގާ
*ހުރެގެން ދައްކާ ގޮތަކުން ދެން ސާހިލާ

#1
އުދުހި އުޑުގާ ގޮސް އޮބާއިރު
*ހުދު އެ ފޮތި ފޮތިހާ ވިލާ
ޤުދުރަތީ ފަރި ގޮތްތަކެއް ދުށުމުން ދިލޭނޭ ހެން ފިލާ
*ޤުދުރަތީ ފަރި ގޮތްތަކެއް ދުށުމުން ދިލޭނޭ ހެން ފިލާ

#2
ހާރުދަމުގާ އޮންނަ ނިޔަނެތި
*ބާރު ނުވި މަޑު ރޯޅިޔާ
ނާރުތައް ފަހިވާ އެ މަންޒަރަކުން ދަނީއޭ އަދު ފިލާ
*ނާރުތައް ފަހިވާ އެ މަންޒަރަކުން ދަނީއޭ އަދު ފިލާ

#3
ނަލަ އެ ސީނުގެ އަސުރުމާ ފެނި
*އަލަބު ނުވި ޅަފުރާ އަރާ
ބަލަގަ މީ ހިނިތުންވެގެން އުފަލުން އަރައިގެން އުދުހިލާ
*ބަލަގަ މީ ހިނިތުންވެގެން އުފަލުން އަރައިގެން އުދުހިލާ`,

  englishLyrics: `#M
Munifoohi thibaa erithan fenifaa
*Dhuniyeyge nudhaanehe dhen thibaa
Muniyaage fotoa dhurugaa
*Huregen dhahkaa gothakun dhen saahilaa
#1
Udhuhi udugaa gos obaairu
*Hudhu e fothi fothihaa vilaa
Qudhurathee fari goyythakeh dhushumun dhileyney hen filaa
*Qudhurathee fari goyythakeh dhushumun dhileyney hen filaa
#2
Haarudhamugaa onna niyanethi
*Baaru nuvi madu roalhiyaa
Naaruthah fahivaa e mannzarakun dhaneeey adhu filaa
*Naaruthah fahivaa e mannzarakun dhaneeey adhu filaa
#3
Nala e seenuge asurumaa feni
*Alabu nuvi lhafuraa araa
Balaga mee hinithunnvegen ufalun araigen udhuhilaa
*Balaga mee hinithunnvegen ufalun araigen udhuhilaa`,
},
{
  id: 128,
  name: `Fiyareethi Nalavi`,
  genre: 'Taki',
  lyrics: `#M
ފިޔަރީތި ނަލަވި މުނިޔާ ދިޔަތަން ނުބުނެ ދިޔައީހޭ
*ތިޔަ ވާނެ ފިކުރު ހިންގަން ލިޔަލެއް މިނޫން ކޮބާހޭ
ނިޔަނެތި ތިބާގެ ނަމުގާ
*ކިޔަމޭ މިހެން ތަރާނާ

#1
މިޔަތޫނު ހަނޖަރެއްފަދަ ތިޔަ ކަޅިރަވައިގެ ޖާދޫ
*ހިޔަ ސައްތައިން ކަފާލާ ޅިޔަ ނާޅަނީސް ރުޖޫއަވޭ
*ޅިޔަ ނާޅަނީސް ރުޖޫއަވޭ

#2
އަގުމޮޅު ހުވަނދު ކަވައިގެން މަގުތައް މަތީ ހިނގާއިރު
*ހުނގު މާވަހަރު ނުއޮޅުވާ ދަގުޔަށް ނުވާށެ އާދޭ
*ދަގުޔަށް ނުވާށެ އާދޭ

#3
ބުރުސޫރަ ރީތި މުނިޔާ އުރުފަޅު ފިލާނެ ސަންފާ
*ނިރު އަލަގަހުން ނުފަޅަނީސް ބިރުވެތިވެ އެނބުރި އާދޭ
*ބިރުވެތިވެ އެނބުރި އާދޭ`,

  englishLyrics: `#M
Fiyareethi nalavi muniyaa dhiyathan nubune dhiyaeehey
*Thiya vaane fikuru hinngan liyaleh minoon kobaahey
Niyanethi thibaage namugaa
*Kiyamey mihen tharaanaa
#1
Miyathoonu hanjarehfadha thiya kalhiravaige jaadhoo
*Hiya sahthain kafaalaa lhiya naalhanees rujooavey
*Lhiya naalhanees rujooavey
#2
Agumolhu huvandhu kavaigen maguthah mathee hingaairu
*Hungu maavaharu nuolhuvaa dhaguyah nuvaashe aadhey
*Dhaguyah nuvaashe aadhey
#3
Burusoora reethi muniyaa urufalhu filaane sannfaa
*Niru alagahun nufalhanees biruvethive enburi aadhey
*Biruvethive enburi aadhey`,
},
{
  id: 129,
  name: `Giritee Loabin`,
  genre: 'Nala',
  lyrics: `#M
ގިރިޓީ ލޯބިން ދައްކާދަޅައިން
*ބަލި ބަލި ހިތްތައް ބުރުއްސައިފިޔޭ

#1
އިޝްގީ ޕިސްޓޯލު މެޔަށް މީޒާވުމުން
*އިޝްގީ ޕިސްޓޯލު މެޔަށް މީޒާވުމުން
މިސްރާބުން އޭގެ ވަޒަން ސީދާވުމުން
*މިސްރާބުން އޭގެ ވަޒަން ސީދާވުމުން ވަޒަން ސީދާވުމުން
ވިސްނުން ލޯތްބާއި މެދަށް ދޫކޮއްލުމުން
*މެދަށް ދޫކޮއްލުމުން
ގިސްލާ ރޮއެރޮއެ ހުއްޓާ މިހެން
*އެކިއެކި ގުނަވަންތައް ތޮރުފައިފިޔޭ

#2
އަދުގާ ނެތޭ އުފަލެއް ލިބުމެއް މަށަށް
*އަދުގާ ނެތޭ އުފަލެއް ލިބުމެއް މަށަށް
ތަދުކޮށް ލޯބީގެ އަތުން ގުނަވަންތަކަށް
*ތަދުކޮށް ލޯބީގެ އަތުން ގުނަވަންތަކަށް އަތުން ގުނަވަންތަކަށް
ކަނދުރާ ނުދާވަރުހޭ ލެނބިގެން ވަތަށް
*ލެނބިގެން ވަތަށް
ލަދުގާ ދުނިޔޭން ބީވާވަރަށް
*ކުދިކުދި އަނިޔާކޮށް ރޮއްވައިފިއޭ

#3
ރޭގާ އޭނާގެބަޔާން އަންގައިފިއޭ
*ރޭގާ އޭނާގެބަޔާން އަންގައިފިއޭ
އޭގާ ލޭނާރު ލޮލުން ހިލުވައިފިއޭ
*އޭގާ ލޭނާރު ލޮލުން ހިލުވައިފިޔޭ ލޮލުން ހިލުވައިފިއޭ
މޭގާވޭނީ އަލިފާން ރޯކޮއްފިއޭ
*އާނ ރޯކޮއްފިއޭ
ގޭގާ ހުއްޓާ ދުނިޔޭ ތެރޭން
*ހެލިފެލިވިން މުޅިހިތް ނައްތައިފިއޭ

#4
އަހުރެން މިދެން ދުނިޔޭން ވަކިވެސްވަނީ
*އަހުރެން މިދެން ދުނިޔޭން ވަކިވެސްވަނީ
ވަހުމުން ހިތައްއަނިޔާ ލިބިގެންދަނީ
*ވަހުމުން ހިތައްއަނިޔާ ލިބިގެންދަނީ އަނިޔާ ލިބިގެންދަނީ
ފަހުގާއޮތް އެއްމެ ހިމޭން ނޭވާލަނީ
*ހިމޭން ނޭވާލަނީ
މަހުޝަރުގާވެސް ނުފިލާނެހާ
*ހިތިހިތި ވޭނެއްގަ ޖާއްސައިފިޔޭ`,

  englishLyrics: `#M
Giritee loabin dhahkaadhalhain
*Bali bali hiyythah buruhsaifiyey
#1
Ishgee pistoalu meyah meezaavumun
*Ishgee pistoalu meyah meezaavumun
Misraabun eyge vazan seedhaavumun
*Misraabun eyge vazan seedhaavumun vazan seedhaavumun
Visnun loayybaai medhah dhookohlumun
*Medhah dhookohlumun
Gislaa roeroe huhtaa mihen
*Ekieki gunavannthah thorufaifiyey
#2
Adhugaa nethey ufaleh libumeh mashah
*Adhugaa nethey ufaleh libumeh mashah
Thadhukoh loabeege athun gunavannthakah
*Thadhukoh loabeege athun gunavannthakah athun gunavannthakah
Kandhuraa nudhaavaruhey lenbigen vathah
*Lenbigen vathah
Ladhugaa dhuniyeyn beevaavarah
*Kudhikudhi aniyaakoh rohvaifiey
#3
Reygaa eynaagebayaan anngaifiey
*Reygaa eynaagebayaan anngaifiey
Eygaa leynaaru lolun hiluvaifiey
*Eygaa leynaaru lolun hiluvaifiyey lolun hiluvaifiey
Meygaaveynee alifaan roakohfiey
*Aan roakohfiey
Geygaa huhtaa dhuniyey thereyn
*Helifelivin mulhihiyy nahthaifiey
#4
Ahuren midhen dhuniyeyn vakivesvanee
*Ahuren midhen dhuniyeyn vakivesvanee
Vahumun hithahaniyaa libigenndhanee
*Vahumun hithahaniyaa libigenndhanee aniyaa libigenndhanee
Fahugaaoyy ehme himeyn neyvaalanee
*Himeyn neyvaalanee
Mahusharugaaves nufilaanehaa
*Hithihithi veynehga jaahsaifiyey`,
},
{
  id: 130,
  name: `Handhu Naaraanama`,
  genre: 'Nala',
  lyrics: `#M
ހަނދުނާރާނަމަ ހަނދު އެކުރާ ނަލަ
*ނަލަ އަލި ކޮންގޮތަކުންތަ ކުރާނީ
ނޫރުން އުޖާލާ ވީމާ ދުރާލާ
*މަގުމަގުގާ ރިހިދޫލަ އެއަޅާލީ

#1
އަނދިރިވާ ހިނދަކު ރޭއެނގިދާނީ
*ނެތިމަ ހަނދުވަރު ކަންދަތިވާނީ
ހިތުގާ އުފާ އޭރުން ހިޔާލީ
*ހިތުގާ އުފާ އޭރުން ހިޔާލީ
ހަނދު އެރުމުންނޭ ފޫހި ފިލާނީ
*ހަނދުނާރާނަމަ ހަނދު އެކުރާ ނަލަ ނަލަ އަލި ކޮންގޮތަކުންތަ ކުރާނީ

#2
ޖާނަށާ ހިތަށް ވާމިއުދާހުން
*ވާދަތިކަން ލިބިފާ ހުރި ގާތުން
ހަނދުވަރުގާ ހުރި އަސަރުންނެ އަލުން
*ހަނދުވަރުގާ ހުރި އަސަރުންނެ އަލުން
އާރޯކަން ލިބި ތާޒާވާނީ
*ހަނދުނާރާނަމަ ހަނދު އެކުރާ ނަލަ ނަލަ އަލި ކޮންގޮތަކުންތަ ކުރާނީ

#3
ފޯރާތީއޭ ނޫރުގެ އަލިކަން
*އާލާވީ މަގުގާ ހުރި ނަލަކަން
ރިހިފޭރާމުން ޒީނަތްވެ ނިކަން
*ރިހިފޭރާމުން ޒީނަތްވެ ނިކަން
ހިނިތުންވާށޭ ދެންއެފަށާލީ
*ހަނދުނާރާނަމަ ހަނދު އެކުރާ ނަލަ ނަލަ އަލި ކޮންގޮތަކުންތަ ކުރާނީ`,

  englishLyrics: `#M
Handhunaaraanama handhu ekuraa nala
*Nala ali konngothakunntha kuraanee
Noorun ujaalaa veemaa dhuraalaa
*Magumagugaa rihidhoola ealhaalee
#1
Andhirivaa hindhaku reyengidhaanee
*Nethima handhuvaru kanndhathivaanee
Hithugaa ufaa eyrun hiyaalee
*Hithugaa ufaa eyrun hiyaalee
Handhu erumunney foohi filaanee
*Handhunaaraanama handhu ekuraa nala nala ali konngothakunntha kuraanee
#2
Jaanashaa hithah vaamiudhaahun
*Vaadhathikan libifaa huri gaathun
Handhuvarugaa huri asarunne alun
*Handhuvarugaa huri asarunne alun
Aaroakan libi thaazaavaanee
*Handhunaaraanama handhu ekuraa nala nala ali konngothakunntha kuraanee
#3
Foaraatheeey nooruge alikan
*Aalaavee magugaa huri nalakan
Rihifeyraamun zeenayyve nikan
*Rihifeyraamun zeenayyve nikan
Hinithunnvaashey dhennefashaalee
*Handhunaaraanama handhu ekuraa nala nala ali konngothakunntha kuraanee`,
},
{
  id: 131,
  name: `Hasanbey Gudhu`,
  genre: 'Kaasi',
  lyrics: `#M
ހަސަންބޭ ގުދު އާދެޔޯ
*ވައިނޮޅި ދަމާލާފާ
ބޭބޭ ގުދު އާދެޔޯ
*ވައިނޮޅި ދަމާލާފާ

#1
މާބިއްދަށު ވަލުތެރޭ
*ކޭލޭ ބަނބުކޭލެކޭ
ރާދަނޑިގަނޑާ މަހަ ބޭބޭ ގުދު އާދެޔޯ
*ރާދަނޑިގަނޑާ މަހަ ބޭބޭ ގުދު އާދެޔޯ
*ވައިނޮޅި ދަމާލާފާ

-
$M
ވަލުންގެނައި ކޭލެކޭ ކޮއެ ކަނީ
*ރޯކޭލާ ކައިގެނެ ތަލިތަތްލަނީ

$1
ވާނޭ މޮޔަވާނޭ
*ވާނެމިހެން އުޅެންޏާ

$2
*ކެޔޮކާން އަވަހަށް ހިނގާ
ނިކަން ތެއްލައިގެން
މިތިބަ ޒުވާނުނޭ
ނިކަން ފޯރީގާ`,

  englishLyrics: `#M
Hasannbey gudhu aadheyoa
*Vainolhi dhamaalaafaa
Beybey gudhu aadheyoa
*Vainolhi dhamaalaafaa
#1
Maabihdhashu valutherey
*Keyley banbukeylekey
Raadhandigandaa maha beybey gudhu aadheyoa
*Raadhandigandaa maha beybey gudhu aadheyoa
*Vainolhi dhamaalaafaa
-
$M
Valunngenai keylekey koe kanee
*Roakeylaa kaigene thalithayylanee
$1
Vaaney moyavaaney
*Vaanemihen ulhennyaa
$2
*Keyokaan avahah hingaa
Nikan thehlaigen
Mithiba zuvaanuney
Nikan foareegaa`,
},
{
  id: 132,
  name: `Hendhunaa Haveeru`,
  genre: 'Kaasi',
  lyrics: `#M
ހެނދުނާ ހަވީރު ފިންޏަށް
*ސަހަރޯ ހަވީރު ފިންޏަށް
ދާށޭ ކުޑަ ދަރިފުޅާ
*މައިޒާން ދޮށަށް ފެންބަލާ
މަގެ ދަރިފުޅާ
*މައިޒާން ދޮށައް ފެންބަލާ

#1
އެކުގައި އުޅޭހަކުދިން ފަހަތުލަވައިގެން
*އެކުގައި އުޅޭހަކުދިން ފަހަތުލަވައިގެން
ރަން ދަރިފުޅު ވެރިއަކު ކަމުގަތްޔޯ
*ރަން ދަރިފުޅު ވެރިއަކު ކަމުގަތްޔޯ
ރަންދަރިފުޅޭ
*މައިޒާން ދޮށައް ފެންބަލާ

-
$M
ރޭން ފިނިދޭ ކަސަބާބަ ދަލާ ކަނުލިޔަސްމާ
*ހިތްރުހޭ ޒާނެއް ނެތޭ ރަކުމިހާ
ހިތްރުހޭ
*ޒާނެއް ނެތޭ ރަކުމިހާ

$1
އޭދަފުށި ކޮޅުމަތިޖެހި ފޭލިދެފަން ހިރު އެލިބާސް
*އޭދަފުށި ކޮޅުމަތިޖެހި ފޭލިދެފަން ހިރު އެލިބާސް
ފޭރަ ހިޔަ ފައުނުގަ ހެދި ލޭގެ އެރަން ފައްޓަރުބައި
*ފޭރަ ހިޔަ ފައުނުގަ ހެދި ލޭގެ އެރަން ފައްޓަރުބައި
އޭ ދެފޮށި ހުއްޓަސް ފުރި އަރާ ގަންނަވާފާ
*ހިތްރުހޭ ޒާނެއް ނެތޭ ރަކުމިހާ

$2
ނާނަ ފުޅު ފިއްލެވުމާ ޤާބިލިޔާ ފެންފުރުމާ
*ނާނަ ފުޅު ފިއްލެވުމާ ޤާބިލިޔާ ފެންފުރުމާ
ލާލިބާސް ފޭލިކަލަރު ފައިދޮވެ އިސްތިރިކުރުމާ
*ލާލިބާސް ފޭލިކަލަރު ފައިދޮވެ އިސްތިރިކުރުމާ
ދާދޮ ކަޗަކު މުތިޔާ ގެންގުޅެން ގެނެސް ބައިންދާ
*ހިތްރުހޭ ޒާނެއް ނެތޭ ރަކުމިހާ

$3
ކަރުވާށާ އަޅާ އަމަޖާ ފަށުވި ކަލަރު ފެހި ބުރުގާ
*ކަރުވާށާ އަޅާ އަމަޖާ ފަށުވި ކަލަރު ފެހި ބުރުގާ
ހަރުސަބަން ރާޅުމަޖާ ކަރުބޮ އަތަރު ބޯނިސާ
*ހަރުސަބަން ރާޅުމަޖާ ކަރުބޮ އަތަރު ބޯނިސާ
ދަރުހަފޮށި ގެގާ ވަރުވެފާ ހުއްޓަކަސް ފުރާ
*ހިތްރުހޭ ޒާނެއް ނެތޭ ރަކުމިހާ

#M
*ނެށުމަކުން މެހޭ
ހާނާލީ ބަނޑި ބަނޑި އަޅުވާ
ޝާމިލުކޮށްލާ ހެން މިތުރުން
ޗާނދަރު ދެއަތުން ދެން ނެތެމުން
މާބޮޑު ހިއްގައިމެއް ކުރަމުން

#1
ގަދަވެ މަޖާ ގޮވައޭ
*ދަރިޔާ ނަށައިދޭށޭ
ޔާރުންނޭ ހިއްވަރުގާ ގަދަޔައްބާރުލާ ނަށާ
*ޔާރުންނޭ ހިއްވަރުގާ ގަދަޔައްބާރުލާ ނަށާ`,

  englishLyrics: `#M
Hendhunaa haveeru finnyah
*Saharoa haveeru finnyah
Dhaashey kuda dharifulhaa
*Maizaan dhoshah fennbalaa
Mage dharifulhaa
*Maizaan dhoshah fennbalaa
#1
Ekugai ulheyhakudhin fahathulavaigen
*Ekugai ulheyhakudhin fahathulavaigen
Ran dharifulhu veriaku kamugayyyoa
*Ran dharifulhu veriaku kamugayyyoa
Ranndharifulhey
*Maizaan dhoshah fennbalaa
-
$M
Reyn finidhey kasabaaba dhalaa kanuliyasmaa
*Hiyyruhey zaaneh nethey rakumihaa
Hiyyruhey
*Zaaneh nethey rakumihaa
$1
Eydhafushi kolhumathijehi feylidhefan hiru elibaas
*Eydhafushi kolhumathijehi feylidhefan hiru elibaas
Feyra hiya faunuga hedhi leyge eran fahtarubai
*Feyra hiya faunuga hedhi leyge eran fahtarubai
Ey dhefoshi huhtas furi araa gannavaafaa
*Hiyyruhey zaaneh nethey rakumihaa
$2
Naana fulhu fihlevumaa qaabiliyaa fennfurumaa
*Naana fulhu fihlevumaa qaabiliyaa fennfurumaa
Laalibaas feylikalaru faidhove isthirikurumaa
*Laalibaas feylikalaru faidhove isthirikurumaa
Dhaadho kachaku muthiyaa genngulhen genes bainndhaa
*Hiyyruhey zaaneh nethey rakumihaa
$3
Karuvaashaa alhaa amajaa fashuvi kalaru fehi burugaa
*Karuvaashaa alhaa amajaa fashuvi kalaru fehi burugaa
Harusaban raalhumajaa karubo atharu boanisaa
*Harusaban raalhumajaa karubo atharu boanisaa
Dharuhafoshi gegaa varuvefaa huhtakas furaa
*Hiyyruhey zaaneh nethey rakumihaa
#M
*Neshumakun mehey
Haanaalee bandi bandi alhuvaa
Shaamilukohlaa hen mithurun
Chaandharu dheathun dhen nethemun
Maabodu hiyygaimeh kuramun
#1
Gadhave majaa govaey
*Dhariyaa nashaidheyshey
Yaarunney hihvarugaa gadhayah baarulaa nashaa
*Yaarunney hihvarugaa gadhayah baarulaa nashaa`,
},
{
  id: 133,
  name: `Hithun Filuveykasheh`,
  genre: 'Nala',
  lyrics: `#M
ހިތުން ފިލުވޭކަށެއް ދެން ނެތޭ ތިޔަ ކަމެއް
*ނިކަން ލޯބިން ދެކޭހިތްވެޔޭ
އަތުން ދީފާ ޝަރާބެއް ވެޔޭ އާޝިގާ
*އެހެން ވީމާ ހަނދާނެއް ވެޔޭ

#1
ފުރަތަމަ ނަޒަރު އެންމެ އިޝްޤީ އަސަރު
*ކުރަހާލި ތަސްވީރު ހިތުގާ މިތުރު
ގުރަހައިގެ ތަރިހެން މަށަށް ހީވިޔޭ
*ހިތުން ފިލުވޭކަށެއް ދެން ނެތޭ ތިޔަ ކަމެއް ނިކަން ލޯބިން ދެކޭހިތްވެޔޭ

#2
އިޝްޤީ މި ލޯބީގެ ޖަޒުބާތަކުން
*މަސްތޭވަނީ ލޯބި ޙަރަކާތްތަކުން
އަސްތާ އެރޭ ހާދަ އުފަލެއްވިޔޭ
*ހިތުން ފިލުވޭކަށެއް ދެން ނެތޭ ތިޔަ ކަމެއް ނިކަން ލޯބިން ދެކޭހިތްވެޔޭ

#3
ގަހަކުން ފަތެއް ހެލިލިޔަސް ހީވެޔޭ
*ފަހަތުން މަގޭ އަންނަހެން ހީވެޔޭ
އެހަނދާނުގާ މޭތެޅޭގޮތް ވިޔޭ
*ހިތުން ފިލުވޭކަށެއް ދެން ނެތޭ ތިޔަ ކަމެއް ނިކަން ލޯބިން ދެކޭހިތްވެޔޭ

#4
ހިއްލާލި ރޭ ލޯބި ފަރުދާއަތުން
*ކިއްލާތެރޭން މޫނު ފެނިލީގޮތުން
ދިއްލާލި ހަނދުހެން މަށަށް ހީވިޔޭ
*ހިތުން ފިލުވޭކަށެއް ދެން ނެތޭ ތިޔަ ކަމެއް ނިކަން ލޯބިން ދެކޭހިތްވެޔޭ`,

  englishLyrics: `#M
Hithun filuveykasheh dhen nethey thiya kameh
*Nikan loabin dhekeyhiyyveyey
Athun dheefaa sharaabeh veyey aashigaa
*Ehen veemaa handhaaneh veyey
#1
Furathama nazaru ennme ishqee asaru
*Kurahaali thasveeru hithugaa mithuru
Gurahaige tharihen mashah heeviyey
*Hithun filuveykasheh dhen nethey thiya kameh nikan loabin dhekeyhiyyveyey
#2
Ishqee mi loabeege jazubaathakun
*Mastheyvanee loabi harakaayythakun
Asthaa erey haadha ufalehviyey
*Hithun filuveykasheh dhen nethey thiya kameh nikan loabin dhekeyhiyyveyey
#3
Gahakun fatheh heliliyas heeveyey
*Fahathun magey annahen heeveyey
Ehandhaanugaa meythelheygoyy viyey
*Hithun filuveykasheh dhen nethey thiya kameh nikan loabin dhekeyhiyyveyey
#4
Hihlaali rey loabi farudhaaathun
*Kihlaathereyn moonu fenileegothun
Dhihlaali handhuhen mashah heeviyey
*Hithun filuveykasheh dhen nethey thiya kameh nikan loabin dhekeyhiyyveyey`,
},
{
  id: 134,
  name: `Hiyy Thelheyey`,
  genre: 'Taki',
  lyrics: `#M
ހާދަހާ މަގޭ ހިތް ތެޅެޔޭ ބަލާލުމުން
*ހާދަހާ މަންޖެ މަށައް ލިބިދާނޭބާ

#1
ކުރަނގި ދެލޯފަދަ ތިޔަފަރި ދެލޮލާ
*ހިތިފަތު ބުމަޔާ ދޮންއިހި ކަނދުރާ ދޮންއިހި ކަނދުރާ
ހާދަބާލާ ހިތްމަވެޔޭ
*ހާދަބަލާ ހިތްމަވެޔޭ ފޫހިނުވޭ ގައިމު ބަލަ އޭ ދޮންދޮން ކަމަނާއޭ

#2
ސާދަވިލޭރޭ ހަނދުފަދަ މޫނޭ
*ހޫރުޕަރީން ފަދަ ރީތި ޕަރީއެއް ރީތި ޕަރީއެއް
ޖަންބު ތިކޯތާފަތުގާ
*ޖަންބު ތިކޯތާފަތުގާ ބީހިލުމަށް ހިތްއެދެމޭ

#3
ލީމަ ލިބާހާ ފޭލި އެކަމާ
*ރީތިކަމުން މުޅި ކައުނު ވިދާލާ ކައުނު ވިދާލާ
ތަރިތަކުގާ ވާ އަލިކަން
*ތަރިތަކުގާ ވާ އަލިކަން ގައިމޭ ފަނޑުކޮށްލާނޭ`,

  englishLyrics: `#M
Haadhahaa magey hiyy thelheyey balaalumun
*Haadhahaa mannje mashah libidhaaneybaa
#1
Kurangi dheloafadha thiyafari dhelolaa
*Hithifathu bumayaa dhonnihi kandhuraa dhonnihi kandhuraa
Haadhabaalaa hiyymaveyey
*Haadhabalaa hiyymaveyey foohinuvey gaimu bala ey dhonndhon kamanaaey
#2
Saadhavileyrey handhufadha mooney
*Hoorupareen fadha reethi pareeeh reethi pareeeh
Jannbu thikoathaafathugaa
*Jannbu thikoathaafathugaa beehilumah hiyyedhemey
#3
Leema libaahaa feyli ekamaa
*Reethikamun mulhi kaunu vidhaalaa kaunu vidhaalaa
Tharithakugaa vaa alikan
*Tharithakugaa vaa alikan gaimey fandukohlaaney`,
},
{
  id: 135,
  name: `Iguraaru Kobahey`,
  genre: 'Nala',
  lyrics: `#M
އިޤުރާރު ކޮބާހޭ ވީ އެކި ރޭ
*އެކި ދަންވަރުގާ އެކި ހިޔަނީގާ
އެދެނީ އެދެނީ ބައްދަލު ވެލުމޭ
*އެކި ހަނދުވަރުގާ އެކި ހިޔަނީގާ
*އިޤުރާރު ކޮބާހޭ ވީ އެކި ރޭ

#1
ބަދަލެއް މަ ނުވާނަމެ ބުނެފާދެން
*ޚަބަރެއް ހިލަމެއް ނެތުނީ ކީއްހޭ
ދަތުރެއްގެ ތެރޭގާ މަޖުބޫރީ
*ރުހުމާ ދެކޮޅަށްވެސް ދާންޖެހުނީ ރުހުމާ ދެކޮޅަށްވެސް ދާންޖެހުނީ

#2
މަހުރޫމުވުމެއް ހަމަ ނޭދޭނަން
*ޔާރާއޭ ރޫހާ ވިންދާއޭ
ހާލާތުއެހެން ވިޔަކަސް ގައިމޭ
*މިހުރީ ދުނިޔެއިން އެކުގާ ވާށޭ މިހުރީ ދުނިޔެއިން އެކުގާ ވާށޭ`,

  englishLyrics: `#M
Iquraaru kobaahey vee eki rey
*Eki dhannvarugaa eki hiyaneegaa
Edhenee edhenee bahdhalu velumey
*Eki handhuvarugaa eki hiyaneegaa
*Iquraaru kobaahey vee eki rey
#1
Badhaleh ma nuvaaname bunefaadhen
*Khabareh hilameh nethunee keehhey
Dhathurehge thereygaa majubooree
*Ruhumaa dhekolhahves dhaannjehunee ruhumaa dhekolhahves dhaannjehunee
#2
Mahuroomuvumeh hama neydheynan
*Yaaraaey roohaa vinndhaaey
Haalaathuehen viyakas gaimey
*Mihuree dhuniyein ekugaa vaashey mihuree dhuniyein ekugaa vaashey`,
},
{
  id: 136,
  name: `Kaaku Tho`,
  genre: 'Nala',
  lyrics: `#M
ކާކު ތޯ މިހުރީ ނޭނގިފާ
*ދުނިޔޭގަ ނެތޭ ހީވެފާ
ދަތުރު އޮޅި މާޔޫސް ވެފާ
*މިފުރާނަ ދިޔުން ލަސްވެފާ
ފަހެ ތީއީދެން ކާކުތޯ
*ކާކު ތޯ މިހުރީ ނޭނގިފާ

#1
ހިލަމަކަށް އެދި އެދި މަ ގޮވީމޭ
*ގިލަނުގާ ލޯބިން މަ ރުއީމޭ
ޅިޔައަޅާ ޒަހަމުކޮށް ފިޔެ މަގޭހިތް
*ކާކު ތޯ މިހުރީ ނޭނގިފާ ދުނިޔޭގަ ނެތޭ ހީވެފާ

#2
ރާޅު ބިޔަ މާކަނޑުގެ ތެރޭން ކަޅު
*ކާޅުތައްއައިސް ތިބެ އެބަ ގޮވައޭ
ކާޅު ތެޔޮނާށި ގެންގޮއްސި ޔޯލަޔޯލަ
*ކާކު ތޯ މިހުރީ ނޭނގިފާ ދުނިޔޭގަ ނެތޭ ހީވެފާ`,

  englishLyrics: `#M
Kaaku thoa mihuree neyngifaa
*Dhuniyeyga nethey heevefaa
Dhathuru olhi maayoos vefaa
*Mifuraana dhiyun lasvefaa
Fahe theeeedhen kaakuthoa
*Kaaku thoa mihuree neyngifaa
#1
Hilamakah edhi edhi ma goveemey
*Gilanugaa loabin ma rueemey
Lhiyaalhaa zahamukoh fiye mageyhiyy
*Kaaku thoa mihuree neyngifaa dhuniyeyga nethey heevefaa
#2
Raalhu biya maakanduge thereyn kalhu
*Kaalhuthah ais thibe eba govaey
Kaalhu theyonaashi genngohsi yoalayoala
*Kaaku thoa mihuree neyngifaa dhuniyeyga nethey heevefaa`,
},
{
  id: 137,
  name: `Karunun Midheloa`,
  genre: 'Nala',
  lyrics: `#M
ކަރުނުން މިދެލޯ ތެމި އާޚުގާ މަރުގައިމު ވިއޭ ހިތި
*ހާލުގާ ބަރުދާސްތު ނުވީމާ
ރުއިމުގާ ބަރުބާދު މިހިތް ވިއެ
*ވޭނުގާ ކަރުނުން މިދެ ލޯ ތެމި

#1
އެތަކެތް ދުވަހު އެކީ އުޅެވިފާ
*ހިތަކަން މަގޭ އުނގުގާ ވެފާ
ނެތަތީވެ ރަހުމު އަދު ވަކިވެފާ މި ތަދާއި ރިހުންލިބި
*ވޭނުގާ ކަރުނުން މިދެ ލޯ ތެމި

#2
ދިއްލާލި ހަނދު ހެކީކޮށް މަށަށް
*އިއްވާލިހާ ފޮނި ލަފުޒުތައް
ބިއްލާހި ތެދޭބުނެ މާދުރަށް އެއްލާލި ގޮތުން ގެނބި
*ވޭނުގާ ކަރުނުން މިދެ ލޯ ތެމި

#3
ފިޔަތައް އެނާޒުކު ހުޅުވުމުން
*ދިޔަ ހާސްފަށުން ފިރުމާލުމުން
ކިޔަމަންވި އެރޭރޭ ފަނުފުލުން ދިޔަތަން ފެނުމުން ހިތި
*ވޭނުގާ ކަރުނުން މިދެ ލޯ ތެމި`,

  englishLyrics: `#M
Karunun midheloa themi aakhugaa marugaimu viey hithi
*Haalugaa barudhaasthu nuveemaa
Ruimugaa barubaadhu mihiyy vie
*Veynugaa karunun midhe loa themi
#1
Ethakeyy dhuvahu ekee ulhevifaa
*Hithakan magey ungugaa vefaa
Nethatheeve rahumu adhu vakivefaa mi thadhaai rihunnlibi
*Veynugaa karunun midhe loa themi
#2
Dhihlaali handhu hekeekoh mashah
*Ihvaalihaa foni lafuzuthah
Bihlaahi thedheybune maadhurah ehlaali gothun genbi
*Veynugaa karunun midhe loa themi
#3
Fiyathah enaazuku hulhuvumun
*Dhiya haasfashun firumaalumun
Kiyamannvi ereyrey fanufulun dhiyathan fenumun hithi
*Veynugaa karunun midhe loa themi`,
},
{
  id: 138,
  name: `Loabi Libeytho`,
  genre: 'Nala',
  lyrics: `#M
ލޯބި ލިބޭތޯ ޖެހީމެ ސަލާން
*ލޯބި ލިބޭތޯ ޖެހީމެ ސަލާން
ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން
*ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން

#1
ފެނުމުން މިތުރާ ވެވުމުން ފިކުރާ
*ދެވުނޭ ލޯތްބާ ގަދަރާ
އެހިނދުން ފެށިގެން ޖެހިލުންވެނިކަން
*އެހުނޭ ހާލާ ހަބަރާ
ދޭށެ ހިލޭ  ދޭށެ ހިލޭ މިހިރީ މުޅިޖާން
*ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން

#2
ތިޔަފަރި ހިނގުމާ ނިޔަނެތި ބެލުމާ
*ކިޔަމަންތެރި ހަނުހުރުމާ
ފެނުމުން މިހިތައް އެހިތުގެ ނިޔަތާ
*ވެއްޖެ ބަދަލު ދިރިއުޅުމަށް
ލޯތްބައްޓަކާ ލޯތްބައްޓަކާ މިވަނީ ގުރުބާން
*ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން

#3
އިޝްގުގެ ނަމުގާ މަސްތުވެ އަދުގާ
*މިހިރަ ފުރާނަ ދަނީއޭ
ގިސްމު މިގޮތުގާ ފިސްވެ އަސަރުގާ
*އަސްލު ޝަހީދުވަނީއޭ
ހެކިވާނެއޭ ހެކިވާނެއޭ ހަމަގައިމު ޒަމާން
*ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން ހާދަހާ ރީޢްޗޭ ތިބާ ފަރި ޒުވާން`,

  englishLyrics: `#M
Loabi libeythoa jeheeme salaan
*Loabi libeythoa jeheeme salaan
Haadhahaa reehchey thibaa fari zuvaan
*Haadhahaa reehchey thibaa fari zuvaan
#1
Fenumun mithuraa vevumun fikuraa
*Dhevuney loayybaa gadharaa
Ehindhun feshigen jehilunnvenikan
*Ehuney haalaa habaraa
Dheyshe hiley  dheyshe hiley mihiree mulhijaan
*Haadhahaa reehchey thibaa fari zuvaan haadhahaa reehchey thibaa fari zuvaan
#2
Thiyafari hingumaa niyanethi belumaa
*Kiyamanntheri hanuhurumaa
Fenumun mihithah ehithuge niyathaa
*Vehje badhalu dhiriulhumah
Loayybahtakaa loayybahtakaa mivanee gurubaan
*Haadhahaa reehchey thibaa fari zuvaan haadhahaa reehchey thibaa fari zuvaan
#3
Ishguge namugaa masthuve adhugaa
*Mihira furaana dhaneeey
Gismu migothugaa fisve asarugaa
*Aslu shaheedhuvaneeey
Hekivaaneey hekivaaneey hamagaimu zamaan
*Haadhahaa reehchey thibaa fari zuvaan haadhahaa reehchey thibaa fari zuvaan`,
},
{
  id: 139,
  name: `Mage Loayybaa`,
  genre: 'Nala',
  lyrics: `#S
އޭ މަކޮއެ ރަންކޮޅާ
ތީމަލޭ ބޭނުންމަވާ
މަލުގެ ފޮނި ރަހަލިބޭތޯ
ހޯދަމޭ މުޅި އުމުރުގާ

#M
ފޮނި ފޮނި މީރުވަހާއޭ ލަތީފި މަލާއޭ
*ތިޔަ ރަކި ރަކި ހީލަބަލާށޭ
ފިނި ފިނި ރޯޅިވަޔާއޭ ވަނީހިތްގަޔާއޭ
*ތިޔަ ރަކި ރަކި ހީލަބަލާށޭ
މަގެ ލޯތްބާ މަގެ ޔާރު
*މަގެ ލޯތްބާ މަގެ ޔާރު

#1
ތުންފަތޭ ވެވޭ ތައުބާ
*ރީތިކަމޭ ސުބުހާނަﷲ
ނޫންބާވައޭމީ ހަގީގަތް މިހާރު
*ނޫންބާވައޭމީ ހަގީގަތް މިހާރު
ދުނިޔެމަތީ ނޫރާއޭ ހަގީގީރާއޭ
*ތިޔަ ރަކި ރަކި ހީލަބަލާށޭ

#2
ހޯދުމަށް ބޭނުން އަހަރެން
*ނޭދެވުނޭ ތިޔަނޫނީ މަލެއް
ލޯތްބެއް ވެވިއްޖޭ ނުއެނގި ހުރި ހާލު
*ލޯތްބެއް ވެވިއްޖޭ ނުއެނގި ހުރި ހާލު
ސިފަދުލަކުން ނުވެވޭނޭ ހަގީގީރާއޭ
*ތިޔަ ރަކި ރަކި ހީލަބަލާށޭ`,

  englishLyrics: `#S
Ey makoe rannkolhaa
*Theemaley beynunnmavaa
Maluge foni rahalibeythoa
*Hoadhamey mulhi umurugaa
#M
Foni foni meeruvahaaey latheefi malaaey
*Thiya raki raki heelabalaashey
Fini fini roalhivayaaey vaneehiyygayaaey
*Thiya raki raki heelabalaashey
Mage loayybaa mage yaaru
*Mage loayybaa mage yaaru
#1
Thunnfathey vevey thaubaa
*Reethikamey subuhaanaallah
Noonnbaavaeymee hageegayy mihaaru
*Noonnbaavaeymee hageegayy mihaaru
Dhuniyemathee nooraaey hageegeeraaey
*Thiya raki raki heelabalaashey
#2
Hoadhumah beynun aharen
*Neydhevuney thiyanoonee maleh
Loayybeh vevihjey nuengi huri haalu
*Loayybeh vevihjey nuengi huri haalu
Sifadhulakun nuveveyney hageegeeraaey
*Thiya raki raki heelabalaashey`,
},
{
  id: 140,
  name: `Malaa Thiya Maluge`,
  genre: 'Nala',
  lyrics: `#M
މަލާތިޔަ މަލުގެ ޝަރަފުގައޭ
*ހިތާ ހަށިގަނޑު ވެދުން ކުރަނީ
ޝަރާބޭ ކަރުގަނޑުން ތިޔަ ނާ
*ޒުކީ އެދިގެންނެ އާދެވުނީ

#1
އުދުހިފާ މާދުރުން އަދި މާމަތިން ޖައްވުގެ ތެރޭން ދަނިކޮށް
*އުދުހިފާ މާދުރުން އަދި މާމަތިން ޖައްވުގެ ތެރޭން ދަނިކޮށް
އުތުރި ތިޔަ ކަރުގަނޑުން ފޮނުވާ
*ޢަބީރުންނޭ ބަލާލެވުނީ

#2
ގަހެއްގެ ލަތީފު އޮފިކޮޅަކުން އުފެދިފާ ރީތި ތަނޑިޔެއްގާ
*ގަހެއްގެ ލަތީފު އޮފިކޮޅަކުން އުފެދިފާ ރީތި ތަނޑިޔެއްގާ
ވަހެއް ދުވަހަކު ހިތުން ނުފިލާނެ
*ފަދަ ފޮރުވައިގެނޭ ތިއިނީ

#3
ވަށައިގެން ފަހުރުވެރިވާ ޖާޒުބީ ކަރުގަނޑު މެދަށް ލާފާ
*ވަށައިގެން ފަހުރުވެރިވާ ޖާޒުބީ ކަރުގަނޑު މެދަށް ލާފާ
ވަށައިގެން ބަރިޔަކަށް ފިޔަތަކުގެ
*ލަސްކަރު އެތުރިގެން އެދަނީ

#4
ލިބޭނޭ ކަމުގެ އުންމީދެއް ނެތަސް އަދި ނުލިބުނަސް އަމުދުން
*ލިބޭނޭ ކަމުގެ އުންމީދެއް ނެތަސް އަދި ނުލިބުނަސް އަމުދުން
ލިބޭތޯ ތިޔަމަލުން ވަސްލެއްގެ
*ފިޔަވެސް މޯޅި ކޮއްލެވުނީ`,

  englishLyrics: `#M
Malaathiya maluge sharafugaey
*Hithaa hashigandu vedhun kuranee
Sharaabey karugandun thiya naa
*Zukee edhigenne aadhevunee
#1
Udhuhifaa maadhurun adhi maamathin jahvuge thereyn dhanikoh
*Udhuhifaa maadhurun adhi maamathin jahvuge thereyn dhanikoh
Uthuri thiya karugandun fonuvaa
*Abeerunney balaalevunee
#2
Gahehge latheefu ofikolhakun ufedhifaa reethi thandiyehgaa
*Gahehge latheefu ofikolhakun ufedhifaa reethi thandiyehgaa
Vaheh dhuvahaku hithun nufilaane
*Fadha foruvaigeney thiinee
#3
Vashaigen fahuruverivaa jaazubee karugandu medhah laafaa
*Vashaigen fahuruverivaa jaazubee karugandu medhah laafaa
Vashaigen bariyakah fiyathakuge
*Laskaru ethurigen edhanee
#4
Libeyney kamuge unnmeedheh nethas adhi nulibunas amudhun
*Libeyney kamuge unnmeedheh nethas adhi nulibunas amudhun
Libeythoa thiyamalun vaslehge
*Fiyaves moalhi kohlevunee`,
},
{
  id: 141,
  name: `Ma Heynethidhaane`,
  genre: 'Nala',
  lyrics: `#M
މަ ހޭނެތިދާނޭ ވެލޯބިން ދިވާނާ
*ތި ފަރިފަރި މޫނު އުޖާލާ ތި ފަރިފަރި މޫނު އުޖާލާ
ބަސް އޭރުނުބުނެ ހުރެ ފާޅުކުރީމާ
*މަ ލަދުވެތި ވީމެ އަހާފާ މަ ލަދުވެތި ވީމެ އަހާފާ

#1
ދުނިޔޭގެ އުޖާލާ ރީތިކަމޭ
*ތަސްވީރު ކުރާނީ މޫނުންނޭ ތިޔަރީތި ނަޔާފަރި މޫނުންނޭ
އާނހާ ހާ &އޯ ހޯ ހޯ&
ނޫއުޑުގަ އެވާފަދަ ނޫކަމެކޭ
*ތިޔަރީތި ޒުވާނާ ހީލުމަކީ އަދި ރީތިވެގެންދާ ހީލުމަކީ
ގެ ހިއްވަރު ލިބޭހާ ވަރެއްނެތް އާވާރާ
*ތި ފަރިފަރި މޫނު އުޖާލާ ތި ފަރިފަރި މޫނު އުޖާލާ

#2
މާޒީގެ އުފާވެރި ރޭރޭހެން
*ހިތުގާ އުކޭމީ ސޮފުހާއޭ ހިތުގާ އުކޭމީ ސޮފުހާއޭ
އާނހާ ހާ &އޯ ހޯ ހޯ&
ތީ ފޮނިފޮނި ރީތި ހިޔާލެއްހޭ
*ހައިރާން މަވީމެ މިރޭރޭގާ ހައިރާން މަވީމެ މިރޭރޭގާ
އެ ތަރިތައް ވިދާލާ އަލިންނޭ ތިމޫނަށް
*ތި ފަރިފަރި މޫނު އުޖާލާ ތި ފަރިފަރި މޫނު އުޖާލާ

#3
މިއުޑާއި ބިމާ ތަރިތައްވި ފަދައިން
*ހަމަގައިމު ކަލާދެކެ ލޯބިވެޔޭ ހަމަގައިމު ކަލާދެކެ ލޯބިވެޔޭ
އާނހާ ހާ &އޯ ހޯ ހޯ&
މަރު ގައިމުވަމުންދާ ވަގުތުގަވެސް
*އެދެނީ ކަލާ ހަމަ ދެކިލުމަށޭ އެދެނީ ކަލާ ހަމަ ދެކިލުމަށޭ
ހިތުގާ ޖެހިދާނޭ މަރުގައިމު ނުވާނޭ
*ތި ފަރިފަރި މޫނު އުޖާލާ ތި ފަރިފަރި މޫނު އުޖާލާ`,

  englishLyrics: `#M
Ma heynethidhaaney veloabin dhivaanaa
*Thi farifari moonu ujaalaa thi farifari moonu ujaalaa
Bas eyrunubune hure faalhukureemaa
*Ma ladhuvethi veeme ahaafaa ma ladhuvethi veeme ahaafaa
#1
Dhuniyeyge ujaalaa reethikamey
*Thasveeru kuraanee moonunney thiyareethi nayaafari moonunney
Aanhaa haa &oa hoa hoa&
*Noouduga evaafadha nookamekey
Thiyareethi zuvaanaa heelumakee adhi reethivegenndhaa heelumakee
*Ge hihvaru libeyhaa varehneyy aavaaraa
Thi farifari moonu ujaalaa thi farifari moonu ujaalaa
#2
Maazeege ufaaveri reyreyhen
*Hithugaa ukeymee sofuhaaey hithugaa ukeymee sofuhaaey
Aanhaa &haa oa hoa hoa&
*Thee fonifoni reethi hiyaalehhey
Hairaan maveeme mireyreygaa hairaan maveeme mireyreygaa
*E tharithah vidhaalaa alinney thimoonah
Thi farifari moonu ujaalaa thi farifari moonu ujaalaa
#3
Miudaai bimaa tharithahvi fadhain
*Hamagaimu kalaadheke loabiveyey hamagaimu kalaadheke loabiveyey
Aanhaa &haa oa hoa hoa&
*Maru gaimuvamunndhaa vaguthugaves
Edhenee kalaa hama dhekilumashey edhenee kalaa hama dhekilumashey
*Hithugaa jehidhaaney marugaimu nuvaaney
Thi farifari moonu ujaalaa thi farifari moonu ujaalaa`,
},
{
  id: 142,
  name: `Maamui Handhuvaru`,
  genre: 'Thinberu',
  lyrics: `#M
މަމުއި ހަނދުވަރު މޫސުމުގާ
*ވާސޫރަރިވެތި ރަނިކަމަނާ
ވަރޭވެހިފަ ޗަކަވި ފަލުގަ ފޯވެފާ
*އަތްފޯރި ނަދުރު ތާރަޖަހަން ދަތިވެލާ
ކުއްޅަވަފަލު ރަނިކަމަނާ
*ކުއްޅަވަފަލު ރަނިކަމަނާ

#1
ތުންތުންމަތިން ކިޔަކިޔާ
*މިތާކުގާ ނަން އެވާ
ހުސްފައިން ހިނގާ ރަށްވަށާ
*ބިންގަނޑު ލަދުން ދެރަވެލާ

#2
ފަތްތައްވަޔާ ހެލިލުމާ
*ގަސްތައް ނަށާ ކުޅި ޖަހާ
ބަސްބުނި ހިނދުން ރުހިގަޔާ
*އަސްތާ ހިނގާ އަތު ހިފާ

#3
ރަންކޯދުލާ ތަނެއްގާ
*ރަންފޯދި ފެހި ރަށެއްގާ
މަންމަންވެ އިނދެ ކަޅިއަޅާ
*ފަސްދީރު ކުރި ރުކެއްތާ`,

  englishLyrics: `#M
Mamui handhuvaru moosumugaa
*Vaasoorarivethi ranikamanaa
Vareyvehifa chakavi faluga foavefaa
*Ayyfoari nadhuru thaarajahan dhathivelaa
Kuhlhavafalu ranikamanaa
*Kuhlhavafalu ranikamanaa
#1
Thunnthunnmathin kiyakiyaa
*Mithaakugaa nan evaa
Husfain hingaa rahvashaa
*Binngandu ladhun dheravelaa
#2
Fayythahvayaa helilumaa
*Gasthah nashaa kulhi jahaa
Basbuni hindhun ruhigayaa
*Asthaa hingaa athu hifaa
#3
Rannkoadhulaa thanehgaa
*Rannfoadhi fehi rashehgaa
Mannmannve indhe kalhialhaa
*Fasdheeru kuri rukehthaa`,
},
{
  id: 143,
  name: `Manje Bunedhee`,
  genre: 'Taki',
  lyrics: `#M
މަންޖެ ބުނެދީ ދޮންމަންޖެ ބުނެދީ
*މަންޖެ ބުނެދީ ދޮންމަންޖެ ބުނެދީ
ކިހިނެއްހެދިއްޔާ ކިޔާނީ ރަން
*ލޯބިގޮއްޔޭ ބުނެދެން އާނއޭ ލޯބިގޮއްޔޭ ބުނެދެން އާނއޭ

#1
މުންޖާނި ހޯދާ މާވަހަރު އެއްކޮށް
*ތިޔަ ގޭ ދޮށައް ދުން އަޅާނަން
ކުރުން ރަނގަޅު ވަގުތެއް ހޯދާފަ ކައިވެނި
*ވަގުތުން އަވަސް ކޮށްލަދޭނަން
ހިތާނުވިޔަސް މަށާ މަންޖެ އިންނަން ބުނޭ
*ހިތާނުވިޔަސް މަށާ މަންޖެ އިންނަން ބުނޭ
ހިތާމޭވެސްނަގާފާ މަދޭނަންހޭ
*ލޯބިގޮއްޔޭ ބުނެދެން އާނއޭ ލޯބިގޮއްޔޭ ބުނެދެން އާނއޭ

#2
އަތުގާ ހިފައިގެން މަގުގާ ހިނގާލަން
*ކަމަނާ މަށާއެކު ދިޔައިމާ
އަތަރާއި ބޮކަރާ ވަސްމީރު ހުވަނދުން
*މިތުރާ މަފެންވަރުވަ ދޭނަން
އަޅަން ކަރުގާ ރަނާ ޖަވާހިރު ގިނަ މުތިން
*އަޅަން ކަރުގާ ރަނާ ޖަވާހިރު ގިނަ މުތިން
ގެނެސް ހޯދާ ތި ކަރުގާ އަޅާނަންހޭ
*ލޯބިގޮއްޔޭ ބުނެދެން އާނއޭ ލޯބިގޮއްޔޭ ބުނެދެން އާނއޭ`,

  englishLyrics: `#M
Mannje bunedhee dhonnmannje bunedhee
*Mannje bunedhee dhonnmannje bunedhee
Kihinehhedhihyaa kiyaanee ran
*Loabigohyey bunedhen aaney loabigohyey bunedhen aaney
#1
Munnjaani hoadhaa maavaharu ehkoh
*Thiya gey dhoshah dhun alhaanan
Kurun rangalhu vagutheh hoadhaafa kaiveni
*Vaguthun avas kohladheynan
Hithaanuviyas mashaa mannje innan buney
*Hithaanuviyas mashaa mannje innan buney
Hithaameyvesnagaafaa madheynanhey
*Loabigohyey bunedhen aaney loabigohyey bunedhen aaney
#2
Athugaa hifaigen magugaa hingaalan
*Kamanaa mashaaeku dhiyaimaa
Atharaai bokaraa vasmeeru huvandhun
*Mithuraa mafennvaruva dheynan
Alhan karugaa ranaa javaahiru gina muthin
*Alhan karugaa ranaa javaahiru gina muthin
Genes hoadhaa thi karugaa alhaananhey
*Loabigohyey bunedhen aaney loabigohyey bunedhen aaney`,
},
{
  id: 144,
  name: `Mee Bunaa Nadhurey`,
  genre: 'Taki',
  lyrics: `#M
މިއީ ބުނާ ނަދުރޭ ހިތްއެދޭ ގޮތެއްވިއްޔާ
*މިއީ ބުނާ ނަދުރޭ
މިވީގޮތުން ލަދުގަންނަން ނުޖެހި މިކަން ވިއްޔާ
*މިއީ ބުނާ ނަދުރޭ
ހިތްއެދޭ ގޮތެއްވިއްޔާ
*މިއީ ބުނާ ނަދުރޭ
އޯ އޯ އޯއޯއޯއޯއޯ &އޯ އޯ އޯއޯއޯއޯއޯ&

#1
އުތީމުގަނޑުވަރުގާ ހުދު މުތީގެ ފާރެއްލާ
*އުތީމުގަނޑުވަރުގާ ހުދު މުތީގެ ފާރެއްލާ
މަތީ ރަށުގެ މެދުގާ ދޮންވެލިން އެނަންލިޔެލާ
*މަތީ ރަށުގެ މެދުގާ ދޮންވެލިން އެނަންލިޔެލާ
އެމަންޖެ ލިބުނިއްޔާ އެމަންޖެ ލިބުނިއްޔާ ހިތްއެދޭ ގޮތެއްވިއްޔާ
*މިއީ ބުނާ ނަދުރޭ

#2
އަޅާ ކިޔާނަމެ ކަންޖާ ޒިޔާރަތުގެ ރޯއްޖާ
*އަޅާ ކިޔާނަމެ ކަންޖާ ޒިޔާރަތުގެ ރޯއްޖާ
އަޅާ ކިޔަން މިއުޅޭ މިލްކުވެއްޖެ ނަމަ ކުއްޖާ
*އަޅާ ކިޔަން މިއުޅޭ މިލްކުވެއްޖެ ނަމަ ކުއްޖާ
އެ ގޮއްޔެ ލިބުނިއްޔާ އެ ގޮއްޔެ ލިބުނިއްޔާ ލޯބިދެން ލިބިއްޖިއްޔާ
*މިއީ ބުނާ ނަދުރޭ

#3
ހިލާފަ ބޯހުނި އަލިބޭބެއަށް ދޮޅަސް ގަބުޅިން
*ހިލާފަ ބޯހުނި އަލިބޭބެއަށް ދޮޅަސް ގަބުޅިން
ކިރާނަމޭ ދޮންކޭލާ އަޅާ އެގޭ ދެކުދިން
*ކިރާނަމޭ ދޮންކޭލާ އަޅާ އެގޭ ދެކުދިން
އެކަމަނަ ލިބުނިއްޔާ އެކަމަނަ ލިބުނިއްޔާ ހިތްއެދޭ ގޮތެއްވިއްޔާ
*މިއީ ބުނާ ނަދުރޭ`,

  englishLyrics: `#M
Miee bunaa nadhurey hiyyedhey gothehvihyaa
*Miee bunaa nadhurey
Miveegothun ladhugannan nujehi mikan vihyaa
*Miee bunaa nadhurey
Hiyyedhey gothehvihyaa
*Miee bunaa nadhurey
Oa oa oaoaoaoaoa &oa oa oaoaoaoaoa&
#1
Utheemuganduvarugaa hudhu mutheege faarehlaa
*Utheemuganduvarugaa hudhu mutheege faarehlaa
Mathee rashuge medhugaa dhonnvelin enannliyelaa
*Mathee rashuge medhugaa dhonnvelin enannliyelaa
Emannje libunihyaa emannje libunihyaa hiyyedhey gothehvihyaa
*Miee bunaa nadhurey
#2
Alhaa kiyaaname kannjaa ziyaarathuge roahjaa
*Alhaa kiyaaname kannjaa ziyaarathuge roahjaa
Alhaa kiyan miulhey milkuvehje nama kuhjaa
*Alhaa kiyan miulhey milkuvehje nama kuhjaa
E gohye libunihyaa e gohye libunihyaa loabidhen libihjihyaa
*Miee bunaa nadhurey
#3
Hilaafa boahuni alibeybeah dholhas gabulhin
*Hilaafa boahuni alibeybeah dholhas gabulhin
Kiraanamey dhonnkeylaa alhaa egey dhekudhin
*Kiraanamey dhonnkeylaa alhaa egey dhekudhin
Ekamana libunihyaa ekamana libunihyaa hiyyedhey gothehvihyaa
*Miee bunaa nadhurey`,
},
{
  id: 145,
  name: `Mendhurah`,
  genre: 'Thinberu',
  lyrics: `#M
މެންދުރަށް ދަރުކޮށުމައް ނުދާށެ ދެން
*ވަލުތެރޭން ހަންޑިޔަކާ ދިމާވެޔޯ

#1
ފުށްކިބައިގައި މިރިހިފައި ހެޔަށް ގޮތެއްވަނީ
*ފުށްކިބައިގައި މިރިހިފައި ހެޔަށް ގޮތެއްވަނީ
ރޮދިފަށެން އަޅާށެވީ އެދުރުގެނޭ
*ވަލުތެރޭން ހަންޑިޔަކާ ދިމާވެޔޯ

#2
މެންދަމަށް ރޭގަނޑަށް ހީނަގާ ތުރުތުރުލާ
*މެންދަމަށް ރޭގަނޑަށް ހީނަގާ ތުރުތުރުލާ
ފަންވަތެން އަޅާށެވީ އެދުރުގެނޭ
*ވަލުތެރޭން ހަންޑިޔަކާ ދިމާވެޔޯ

$M
ދޭށޭވި ދޮންދަނބުރުކު
*އިހާގަނޑެން ކަނޑާފަދެން
މައިކަށިގަނޑެއްގައި
*ކަޅު ކުލައިން އެކީ ފަވާފަދެން
ހަންޑީގެ ނަންތައް
*ރަތް ދެލިން އެކީލިޔާފަދެން

$1
ކަރުގާވާ ތަވީދާ
*އުނަގަނޑުގާވާ ބަޑިޔަށްފުމޭށެ
ކުރުނބާފެން ނުދެށޭ
*މިލިޔާ ތަށި ބޯންދީފާ ފަށާށޭ

$2
ލަސްނުވެދެން އުޅޭށޭ
*ކިޔެވެލި ކިޔަވާ މީހުން ކޮބާހޭ
ހުދުފޮތިތައް ދަމާށޭ
*ފެންކިޔަވާފާ މޫނަން ޖަހާށޭ`,

  englishLyrics: `#M
Menndhurah dharukoshumah nudhaashe dhen
*Valuthereyn hanndiyakaa dhimaaveyoa
#1
Fuhkibaigai mirihifai heyah gothehvanee
*Fuhkibaigai mirihifai heyah gothehvanee
Rodhifashen alhaashevee edhurugeney
*Valuthereyn hanndiyakaa dhimaaveyoa
#2
Menndhamah reygandah heenagaa thuruthurulaa
*Menndhamah reygandah heenagaa thuruthurulaa
Fannvathen alhaashevee edhurugeney
*Valuthereyn hanndiyakaa dhimaaveyoa
$M
Dheysheyvi dhonndhanburuku
*Ihaaganden kandaafadhen
Maikashigandehgai
*Kalhu kulain ekee favaafadhen
Hanndeege nannthah
*Rayy dhelin ekeeliyaafadhen
$1
Karugaavaa thaveedhaa
*Unagandugaavaa badiyahfumeyshe
Kurunbaafen nudheshey
*Miliyaa thashi boanndheefaa fashaashey
$2
Lasnuvedhen ulheyshey
*Kiyeveli kiyavaa meehun kobaahey
Hudhufothithah dhamaashey
*Fennkiyavaafaa moonan jahaashey`,
},
{
  id: 146,
  name: `Miaee Loabivamey`,
  genre: 'Taki',
  lyrics: `#M
މިއައީ ލޯބިވަމޭ ބުނާހިތުން ފާޅުގާ
*ނަފުސާ ފުރާނަޔާ ހިބައިން ދެވޭހާލުގާ
ތިޔަހެން ލޯބިވެގެން ކުރާ އިގުރާރުގާ
*އެހަނދާން ނެތޭގޮތޭ ވަނީ މިޒަމާނުގާ

#1
ކާކޭ ހުރީކަލާ އެކުވެރުވެ އުޅެފާ
*ޔާރުގެ އަނިޔާއެއް ކުޑަނަމަވެސް ލިބިފާ
ނޭނގޭ ސިއްރުތަކެއް ކުރާނެޔޭ ހަދިޔާ
*ހާމަވެ އެނގުން ޔަގީން އެވެސްލިބޭ އަނިޔާ އެވެސްލިބޭ އަނިޔާ

#2
ވަކިވާނޭ ހަމަގައިމު ތެދު ދޮގު ބެލީމާ
*މިދެހިތް ކަތިކައްޗައް ތެޅިގެން ހިނގީމާ
ދުނިޔޭގެ ޗާލުމަކަރު އެނގުން ނޫން ގާތޭ
*އެވަރަށް ކެހިދިނުމީ ދުނިޔޭގެ ޒާތޭ ދުނިޔޭގެ ޒާތޭ`,

  englishLyrics: `#M
Miaee loabivamey bunaahithun faalhugaa
*Nafusaa furaanayaa hibain dheveyhaalugaa
Thiyahen loabivegen kuraa iguraarugaa
*Ehandhaan netheygothey vanee mizamaanugaa
#1
Kaakey hureekalaa ekuveruve ulhefaa
*Yaaruge aniyaaeh kudanamaves libifaa
Neyngey sihruthakeh kuraaneyey hadhiyaa
*Haamave engun yageen eveslibey aniyaa eveslibey aniyaa
#2
Vakivaaney hamagaimu thedhu dhogu beleemaa
*Midhehiyy kathikahchah thelhigen hingeemaa
Dhuniyeyge chaalumakaru engun noon gaathey
*Evarah kehidhinumee dhuniyeyge zaathey dhuniyeyge zaathey`,
},
{
  id: 147,
  name: `Nan Reethi Gothugaa`,
  genre: 'Nala',
  lyrics: `#M
ނަންރީތި ގޮތުގާ ނަން ހިގާފާ
*ވާނޭ މަލެއް ބާގުގާ
ދުނިޔޭގެ ބިމުގާ ކޮންމެސްތަނެއްގާ
*ފޮޅިފަވެއްޖޭ އެމާ

#1
މާތަކުގެ ރާނީއެއީ
*ހިތްތަކުގެ މަލަކާ އެއީ
ހިތަކުން ނުދާނޭ ރަނިކަން ކުރާތީ ހިތުގެ ލޭނާރުގާ
*ހިތަކުން ނުދާނޭ ރަނިކަން ކުރާތީ ހިތުގެ ލޭނާރުގާ

#2
ކަށިތައް ހެރޭނޭ އެހާ
*މެހިގެން ދަނީއޭ އަތަށް
ކޮށިގެން ހިތާމޭ ނޮޅިގެންދަނީއޭ ވަލުތެރޭގާ ހިނގާ
*ކޮށިގެން ހިތާމޭ ނޮޅިގެންދަނީއޭ ވަލުތެރޭގާ ހިނގާ

#3
މާބުރު އުޅޭނޭ އެތާ
*އަންނާނެ އުދުހޭ ކޮކާ
މާ ބިނދެލެވޭތޯ ހިންމަތް ކުރާށޭ މޯޅި ނުވަނިސް ހިނގާ
*މާ ބިނދެލެވޭތޯ ހިންމަތް ކުރާށޭ މޯޅި ނުވަނިސް ހިނގާ`,

  englishLyrics: `#M
Nannreethi gothugaa nan higaafaa
*Vaaney maleh baagugaa
Dhuniyeyge bimugaa konnmesthanehgaa
*Folhifavehjey emaa
#1
Maathakuge raanee eee
*Hiyythakuge malakaa eee
Hithakun nudhaaney ranikan kuraathee hithuge leynaarugaa
*Hithakun nudhaaney ranikan kuraathee hithuge leynaarugaa
#2
Kashithah hereyney ehaa
*Mehigen dhaneeey athah
Koshigen hithaamey nolhigenndhaneeey valuthereygaa hingaa
*Koshigen hithaamey nolhigenndhaneeey valuthereygaa hingaa
#3
Maaburu ulheyney ethaa
*Annaane udhuhey kokaa
Maa bindheleveythoa hinnmayy kuraashey moalhi nuvanis hingaa
*Maa bindheleveythoa hinnmayy kuraashey moalhi nuvanis hingaa`,
},
{
  id: 148,
  name: `Nooraaey`,
  genre: 'Nala',
  lyrics: `#M
ލޯބި ލޯބިން އަސަރުދޭ ހިތޭ ބޭގަރާރު
ވީއެ ނޫރާއޭ
ހިތް އުފަލުގާ ޣަޒަލްވޭ ކިޔާ ބަރުބާދު
ވީއެ ނޫރާއޭ

#1
ޒަރުނަ އުފެދޭ ހިތާމައިގެ ނަގަރާދިޔާ
*ކަރުނަވާރޭގެ ތަކުރާރުވޭ ނާދިޔާ
ވަރުޝިފާޔަތުގެ ވަރުޝިފާޔަތުގެ ހާރުން ފުރާނައިން ނިދާރު ވީއެ ނޫރާއޭ
*ވީއެ ނޫރާއޭ &ވީއެ ނޫރާއޭ& ވީއެ ނޫރާއޭ

#2
ނާމިސާލެއް ނުވޭއޭގާ އުޖާލާ ނިއުޔޯކް
*އާޝިގާޔަށްޓަކާ ދެންވިދާ ޓޯކިޔޯ
ޔާދުގާރުންގެ ޔާދުގާރުންގެ ތައުރީފުގާ އިސްތިޒާރު ވީއެ ނޫރާއޭ
*ވީއެ ނޫރާއޭ &ވީއެ ނޫރާއޭ& ވީއެ ނޫރާއޭ

#3
ރީފުތަސްލީގެ އަސްލެއްނެތޭ ސާނިޔާ
*ރީތިކަޝްމީރު ލޯބީގެ މަލެކޭ ތިއާ
ރިވެތި އަޚުލާގުން ރިވެތި އަޚުލާގުން ނާދުންގެ ތަރިތައް ސުމާރު ވީއެ ނޫރާއޭ
*ވީއެ ނޫރާއޭ &ވީއެ ނޫރާއޭ& ވީއެ ނޫރާއޭ`,

  englishLyrics: `#M
Loabi loabin asarudhey hithey beygaraaru
*Veee nooraaey
Hiyy ufalugaa ghazalvey kiyaa barubaadhu
*Veee nooraaey
#1
Zaruna ufedhey hithaamaige nagaraadhiyaa
*Karunavaareyge thakuraaruvey naadhiyaa
Varushifaayathuge varushifaayathuge haarun furaanain nidhaaru veee nooraaey
*Veee nooraaey &veee nooraaey& veee nooraaey
#2
Naamisaaleh nuveyeygaa ujaalaa new york
*Aashigaayahtakaa dhennvidhaa tokyo
Yaadhugaarunnge yaadhugaarunnge thaureefugaa isthizaaru veee nooraaey
*Veee nooraaey &veee nooraaey& veee nooraaey
#3
Reefuthasleege aslehnethey saaniyaa
*Reethikashmeeru loabeege malekey thiaa
Rivethi akhulaagun rivethi akhulaagun naadhunnge tharithah sumaaru veee nooraaey
*Veee nooraaey &veee nooraaey& veee nooraaey`,
},
{
  id: 149,
  name: `Nuraboa Hasanbe`,
  genre: 'Nala',
  lyrics: `#M
ކުރާށޭދެން މަވަރި ނުރަބޯ ހަސަންބޭ
*މަނޫޅޭނަން ދެނެއް އައި އޭމް ސޮރީ

#1
ކަރު ކާށި ތެޔޮ ބޮލުގަލީމާ ހަސަންބޭ
*ކަރު ކާށި ތެޔޮ ބޮލުގަލީމާ ހަސަންބޭ
ތަދުވާނެ ދެލޮލަށް ތަލައިން ދަޅައަޅާތީ
*ތަދުވާނެ ދެލޮލަށް ތަލައިން ދަޅައަޅާތީ
އާނއަ އާއަ އާއަ އާއަ އާއަ އާނ
*އޯ އޮ އޯ އޮ އޯއޮ އޯއޮ އޯއޮ އޯއޮ އޯ
މިފެންވަރުގެ ތަލަބޯ ބެއެއްގެ ކައިރީ
*މަނޫޅޭނަން ދެނެއް އައި އޭމް ސޮރީ

#2
ދަންވަރު ތެދުވެ ކުނޑި ތަޅައިގެން ދުފާތީ
*ދަންވަރު ތެދުވެ ކުނޑި ތަޅައިގެން ދުފާތީ
ނުނިދޭނެ އަޑުފައްގަނޑާ ހެދި ހަސަންބޭ
*ނުނިދޭނެ އަޑުފައްގަނޑާ ހެދި ހަސަންބޭ
އާނއަ އާއަ އާއަ އާއަ އާއަ އާނ
*އޯ އޮ އޯ އޮ އޯއޮ އޯއޮ އޯއޮ އޯއޮ އޯ
މިފެންވަރުގެ އަޑުގަދަ ބެއެއްގެ ކައިރީ
*މަނޫޅޭނަން ދެނެއް އައި އޭމް ސޮރީ

#3
ގިފިލީގަ ފެންވަރަނިކޮށް ވަގުބެލީއޭ
*ގިފިލީގަ ފެންވަރަނިކޮށް ވަގުބެލީއޭ
ރުޅިގަދަވެ ފަހަތުން ހަސަންބޭ ދުވީއޭ
*ރުޅިގަދަވެ ފަހަތުން ހަސަންބޭ ދުވީއޭ
އާނއަ އާއަ އާއަ އާއަ އާއަ އާނ
*އޯ އޮ އޯ އޮ އޯއޮ އޯއޮ އޯއޮ އޯއޮ އޯ
މުސްކުޅިބެއަށް ވަގުފަހާ އަތުނުވީ
*މަނޫޅޭނަން ދެނެއް އައި އޭމް ސޮރީ`,

  englishLyrics: `#M
Kuraasheydhen mavari nuraboa hasannbey
*Manoolheynan dheneh ai am sorry
#1
Karu kaashi theyo bolugaleemaa hasannbey
*Karu kaashi theyo bolugaleemaa hasannbey
Thadhuvaane dhelolah thalain dhalha alhaathee
*Thadhuvaane dhelolah thalain dhalha alhaathee
Aanaa aaa aaa aaa aaa aan
*Oa o oa o oao oao oao oao oa
Mifennvaruge thalaboa beehge kairee
*Manoolheynan dheneh ai am sorry
#2
Dhannvaru thedhuve kundi thalhaigen dhufaathee
*Dhannvaru thedhuve kundi thalhaigen dhufaathee
Nunidheyne adufahgandaa hedhi hasannbey
*Nunidheyne adufahgandaa hedhi hasannbey
Aanaa aaa aaa aaa aaa aan
*Oa o oa o oao oao oao oao oa
Mifennvaruge adugadha beehge kairee
*Manoolheynan dheneh ai am sorry
#3
Gifileega fennvaranikoh vagubeleeey
*Gifileega fennvaranikoh vagubeleeey
Rulhigadhave fahathun hasannbey dhuveeey
*Rulhigadhave fahathun hasannbey dhuveeey
Aanaa aaa aaa aaa aaa aan
*Oa o oa o oao oao oao oao oa
Muskulhibeah vagufahaa athunuvee
*Manoolheynan dheneh ai am sorry`,
},
{
  id: 150,
  name: `Ramzu Mi Gaumee`,
  genre: 'Nala',
  lyrics: `#M
ރަމްޒު މިގައުމީ ޚިޔާލު އާވާ
*ރީތިވީ މަލޭ
ފިނިފެންމަލުގެ ނަމުން ކިޔާ
*ގައުމީ ނަޔާމަލޭ ރީތިމިގައުމީ ނަޔާމަލޭ
އޯހޯހޯ
*އޯއޮއޯއޯ އޯއޮ

#1
ފިޔަތަކުގާ ވާއެލާމެހުން
*އެކުވެރިކަން ދައްކައޭ އޯއޯއޯ އެކުވެރިކަން ދައްކައޭ
ރޫހާ ހިތާ އުފާ ކުރާ
*އުންމީދުދޭ މަލޭ ރީތިމިގައުމީ ނަޔާމަލޭ

#2
ތުންހުޅުވާ ރީތި ފަރިވުމުން
*ހިނިތުންވާން އަނގައޭ އޯއޯއޯ ހިނިތުންވާން އަނގައޭ
ކުލަރީތިވީ ފިޔާތޮށިން
*ކުލަ ހާއްސަވީ މަލޭ ރީތިމިގައުމީ ނަޔާމަލޭ

#3
ފޮޚުވައިދޭ ހާއްސަ މީރުވަސް
*އިހުސާސްކޮށްދޭ ގޮތުން އޯއޯއޯ އިހުސާސްކޮށްދޭ ގޮތުން
އުފަލާ އަރާމުވާ މިތާ
*އަންގާލިމީ މަލޭ ރީތިމިގައުމީ ނަޔާމަލޭ

#4
އެއްދުވަހުން މޯޅިކަން އައިސް
*ފިޔަތަށް ލުހިދަގޮތުން އޯއޯއޯ ފިޔަތަށް ލުހިދަގޮތުން
ދުނިޔޭގެ މީ އުސޫލެކޭ
*ބުނެއެންގި މީ މަލޭ ރީތިމިގައުމީ ނަޔާމަލޭ`,

  englishLyrics: `#M
Ramzu migaumee khiyaalu aavaa
*Reethivee maley
Finifennmaluge namun kiyaa
*Gaumee nayaamaley reethimigaumee nayaamaley
Oahoahoa
*Oao oaoa oao
#1
Fiyathakugaa vaaelaamehun
*Ekuverikan dhahkaey oaoaoa ekuverikan dhahkaey
Roohaa hithaa ufaa kuraa
*Unnmeedhudhey maley reethimigaumee nayaamaley
#2
Thunnhulhuvaa reethi farivumun
*Hinithunnvaan angaey oaoaoa hinithunnvaan angaey
Kulareethivee fiyaathoshin
*Kula haahsavee maley reethimigaumee nayaamaley
#3
Fokhuvaidhey haahsa meeruvas
*Ihusaaskohdhey gothun oaoaoa ihusaaskohdhey gothun
Ufalaa araamuvaa mithaa
*Anngaalimee maley reethimigaumee nayaamaley
#4
Ehdhuvahun moalhikan ais
*Fiyathah luhidhagothun oaoaoa fiyathah luhidhagothun
Dhuniyeyge mee usoolekey
*Buneenngi mee maley reethimigaumee nayaamaley`,
},
{
  id: 151,
  name: `Rey Nidheega`,
  genre: 'Nala',
  lyrics: `#M
ރޭނިދީގާ އެފެނުނު ހުވަފެނެއް ހަނދާންވީތީ
*ވޭމެޔޭ ކިޔައިދޭ ހިތްނިކަން ގަޔާވީތީ

#1
ވައިފެން ހެޔޮ ރާއްޖޭގެ ރަށަކަށް ފޭބުނޭ
*އައި ފަތްމިންޏެއް ރީތި މަށަކަށް ނޭނގުނޭ
އައި ގޮތަށް އެހެރަ ފަރި ލޮލުން ބަލާލީތީ
*ވޭމެޔޭ ކިޔައިދޭ ހިތްނިކަން ގަޔާވީތީ

#2
ތިޔައީ ކޮންދަތުރެއްހެ އެހިނދު އަހާލިޔޭ
*ނިޔަނެތި އަޑަކުން ނަންއޮޅުން ފިލުވާލިޔޭ
ހެޔޮއެދި އެވަގުތު ހާލުވެސް އަހާލީތީ
*ވޭމެޔޭ ކިޔައިދޭ ހިތްނިކަން ގަޔާވީތީ

#3
ދަތުރުގެ މެހެމާނާގެ ފަޅު ފިލުވައިދިނޭ
*މިތުރެކެ މީބުނެ ހިތްހިތާ ގުޅުވައިދިނޭ
އެކަމަކު ހޭލެވުމުން އެކަނިވެރިމަވީތީ
*ވޭމެޔޭ ކިޔައިދޭ ހިތްނިކަން ގަޔާވީތީ`,

  englishLyrics: `#M
Reynidheegaa efenunu huvafeneh handhaannveethee
*Veymeyey kiyaidhey hiyynikan gayaaveethee
#1
Vaifen heyo raahjeyge rashakah feybuney
*Ai fayyminnyeh reethi mashakah neynguney
Ai gothah ehera fari lolun balaaleethee
*Veymeyey kiyaidhey hiyynikan gayaaveethee
#2
Thiyaee konndhathurehhe ehindhu ahaaliyey
*Niyanethi adakun nannolhun filuvaaliyey
Heyoedhi evaguthu haaluves ahaaleethee
*Veymeyey kiyaidhey hiyynikan gayaaveethee
#3
Dhathuruge mehemaanaage falhu filuvaidhiney
*Mithureke meebune hiyyhithaa gulhuvaidhiney
Ekamaku heylevumun ekaniverimaveethee
*Veymeyey kiyaidhey hiyynikan gayaaveethee`,
},
{
  id: 152,
  name: `Eesa Beyaa`,
  genre: 'Kaasi',
  lyrics: `#M
އީސަ ބެޔާ ކުޑަދޮން ތަކުރާ ފެންނާނެޔޯ
*އީސަ ބެޔާ ކުޑަދޮން ތަކުރާ ފެންނާނެޔޯ
މާ މަޑަކުން ދެން ތިބެ ތިބެފާ ލޯ އަޅާނެޔޯ
*މާ މަޑަކުން ދެން ތިބެ ތިބެފާ ލޯ އަޅާނެޔޯ
ވަގަށް ނަގާ ހިތަކުން އުޅެފާ
*ވަގަށް ގެނައި ނަލަ ރަން ފައްޓަރު އޮންނާނެޔޯ އޮންނާނެޔޯ

#1
ފިލަމުން ފިލަމުން ދުވަމުން ބޮނދަމުން ވަދެ އެތަން މިތަން ހާވަ ބަލާފާ
*ފިލަމުން ފިލަމުން ދުވަމުން ބޮނދަމުން ވަދެ އެތަން މިތަން ހާވަ ބަލާފާ
ވަގަށް ނެގީ ރަން ފައްޓަރު ބައެކޭ
*ވަގަށް ނެގީ ރިހި ފައްޓަރު ބައެކޭ
ނޫނޭ ވަގަށް ނެގީ ރަން ފައްޓަރު ބައެކޭ
*ވަގަށް ނެގީ ރިހި ފައްޓަރު ބައެކޭ އަސްތާ ކަލޯ އަސްތާ ކަލޯ

#2
އެގެއިން މިގެއިން ކެޓެމުން ތެޅެމުން ވަދެ އެޔަށް މިޔަށް ހޯހޮ ގޮވާފާ
*އެގެއިން މިގެއިން ކެޓެމުން ތެޅެމުން ވަދެ އެޔަށް މިޔަށް ހޯހޮ ގޮވާފާ
ވަގަށް ނެގީ ރަން ފައްޓަރު ބައެކޭ
*ވަގަށް ނެގީ ރިހި ފައްޓަރު ބައެކޭ
ނޫނޭ ވަގަށް ނެގީ ރަން ފައްޓަރު ބައެކޭ
*ވަގަށް ނެގީ ރިހި ފައްޓަރު ބައެކޭ އަސްތާ ކަލޮ އަސްތާ ކަލޮ

-
$M
އީސަ ބެޔާ ދޮން ތަކުރާ ބިރުވެސް ނުގަނޭހޭ
*މުޅި ރަށުގަ ފަލީހަތް ވާން ލަދުވެސް ނުގަނޭހޭ

$1
ވަގަކަށް ވީ ހާސް ދުވަހޭ ވެރިޔަށް މީ އޮތް ދުވަހޭ
*ވެރިޔަށް މީ އޮތް ދުވަހޭ ވެރިޔަށް މީ އޮތް ދުވަހޭ
މަގަކުން ގެއަކަށް ވަދެވެސް ނުފިލޭނޭ މީ ދުވަހޭ
*ނުފިލޭނޭ މީ ދުވަހޭ ނުފިލޭނޭ މީ ދުވަހޭ

$2
*އީސަބޭ ވަގަށް ނެގީ
ރަން ފައްޓަރު ކޮބާހޭ
ރިހި ފައްޓަރު ކޮބާހޭ
ބަލަ ދޮން ތަކުރާ ކޮބާހޭ`, 
      englishLyrics: `#M
Eesa beyaa kudadhon thakuraa fennaaneyoa
*Eesa beyaa kudadhon thakuraa fennaaneyoa
Maa madakun dhen thibe thibefaa loa alhaaneyoa
*Maa madakun dhen thibe thibefaa loa alhaaneyoa
Vagah nagaa hithakun ulhefaa
*Vagah genai nala ran fahtaru onnaaneyoa onnaaneyoa
#1
Filamun filamun dhuvamun bondhamun vadhe ethan mithan haava balaafaa
*Filamun filamun dhuvamun bondhamun vadhe ethan mithan haava balaafaa
Vagah negy ran fahtaru baekey
*Vagah negy rihi fahtaru baekey
Nooney Vagah negy ran fahtaru baekey
*Vagah negy rihi fahtaru baekey asthaa kaloa asthaa kaloa
#2
Egein migein ketemun thelhemun vadhe eyah miyah hoaho govaafaa
*Egein migein ketemun thelhemun vadhe eyah miyah hoaho govaafaa
Vagah negy ran fahtaru baekey
*Vagah negy Rihi fahtaru baekey
Nooney Vagah negy ran fahtaru baekey
*Vagah negy Rihi fahtaru baekey asthaa kalo asthaa kalo
-
$M
Eesa beyaa dhon thakuraa biruves nuganeyhey
*Mulhi rashuga faleehaiy vaan ladhuves nuganeyhey
$1
Vagakah vee haas dhuvahey veriyah mee oiy dhuvahey
*Veriyah mee oiy dhuvahey veriyah mee oiy dhuvahey
Magakun geakah vadheves nufileyney mee dhuvahey
*Nufileyney mee dhuvahey nufileyney mee dhuvahey
$2
*Ran fahtaru kobaahey
Eesabey vagah negy
Rihi fahtaru kobaahey
Bala dhon thakuraa kobaahey`,
},
{
  id: 153,
  name: `Moalu Marufulhey Mage`,
  genre: 'Taki',
  lyrics: `#M
މޯލު މަރުފުޅޭ މަގެ ދަރި ހިތް ނުރުހެއްޗޭ
*ދަރިފުޅޭ
ހިތް ނުރުހެއްޗޭ
*ރޯލު ޖަންބު ގޮނެއް މަޔަމާ ނުދެނީސް
މޯލު މަރުފުޅޭ ކުޑަ ދަރި ހިތް ނުރުހެއްޗޭ
*ދަރިފުޅޭ
ރަން ނުކިޔައްޗޭ
*އަންބަރު އަތާރު ދެދަޅު ނުދެނީސް

#1
ލޯބިން ހުރެފާ އަނާ ލޯބި މަގޭ ރަންކޮޅާ
*ލޯބިން ހުރެފާ އަނާ ލޯބި މަގޭ ރަންކޮޅާ
ލޯ ރަތްރަތް އައިނަކާ ރިހި ކަސަބު ލިބާހަކާ
*ނުދެނީސް ހިތް ނުރުހެއްޗޭ
ހަމަ ހިލާ
*ރަން ނުކިޔައްޗޭ އަންބަރު އަތާރު ދެދަޅު ނުދެނީސް

#2
ގޯހެއް ކަމުގާ މި ނުލާ ރޯދި މަށަށް ދޭށެ މާ
*ގޯހެއް ކަމުގާ މި ނުލާ ރޯދި މަށަށް ދޭށެ މާ
ބޯކަޅުވާ ބޭހަކާ ލޯ އަލިވާ އައިނަކާ
*ނުދެނީސް ހިތް ނުރުހެއްޗޭ
ހަމަ ހިލާ
*ރަން ނުކިޔައްޗޭ އަންބަރު އަތާރު ދެދަޅު ނުދެނީސް

#3
ރަން ކުދި ކުދި ކަތުރާ ރަންފަގަލީ ތިނޯހާ
*ރަން ކުދި ކުދި ކަތުރާ ރަންފަގަލީ ތިނޯހާ
ރަން ފައިވާން ޖޯޑަކާ ރަން މުތް ހުރީ ހާރަކާ
*ނުދެނީސް ހިތް ނުރުހެއްޗޭ
ހަމަ ހިލާ
*ރަން ނުކިޔައްޗޭ އަންބަރު އަތާރު ދެދަޅު ނުދެނީސް

#4
ކިޔަ ކިޔަލުން ދުމާމާ ތިޔަފުޅު ދަރި ގާތުގާ
*ކިޔަ ކިޔަލުން ދުމާމާ ތިޔަފުޅު ދަރި ގާތުގާ
ވިޔަކޮށް ހުރިހާ މުދާ ލިޔެ ފަތް ނުދެނީސް ހިލާ
*ހިލާ ހިތް ނުރުހެއްޗޭ
ހަމަ ހިލާ
*ރަން ނުކިޔައްޗޭ އަންބަރު އަތާރު ދެދަޅު ނުދެނީސް`, 
      englishLyrics: `#M
Moalu marufulhey mage dhari hiyy nuruhehchey
*Dharifulhey
Hiyy nuruhehchey
*Roalu janbu goneh mayamaa nudhenees
Moalu marufulhey kuda dhari hiyy nuruhehchey
*Dharifulhey
Ran nukiyahchey
*Anbaru athaaru dhedhalhu nudhenees
#1
Loabin hurefaa anaa loabi magey rankolhaa
*Loabin hurefaa anaa loabi magey rankolhaa
Loa rayyrayy ainakaa rihi kasabu libaahakaa
*Nudhenees hiyy nuruhehchey
Hama hilaa
*Ran nukiyahchey anbaru athaaru dhedhalhu nudhenees
#2
Goaheh kamugaa mi nulaa roadhi mashah dheyshe maa
*Goaheh kamugaa mi nulaa roadhi mashah dheyshe maa
Boakalhuvaa beyhakaa loa alivaa ainakaa
*Nudhenees hiyy nuruhehchey
Hama hilaa
*Ran nukiyahchey anbaru athaaru dhedhalhu nudhenees
#3
Ran kudhi kudhi kathuraa ranfagalee thinoahaa
*Ran kudhi kudhi kathuraa ranfagalee thinoahaa
Ran faivaan joadakaa ran muyy huree haarakaa
*Nudhenees hiyy nuruhehchey
Hama hilaa
*Ran nukiyahchey anbaru athaaru dhedhalhu nudhenees
#4
Kiya kiyalun dhumaamaa thiyafulhu dhari gaathugaa
*Kiya kiyalun dhumaamaa thiyafulhu dhari gaathugaa
Viyakoh hurihaa mudhaa liye fayy nudhenees hilaa
*Hilaa hiyy nuruhehchey
Hama hilaa
*Ran nukiyahchey anbaru athaaru dhedhalhu nudhenees`,
},
{
  id: 154,
  name: `Kethi Roanu`,
  genre: 'Nala',
  lyrics: `#M
ކެތި ރޯނު މިޔަހެލި އަދަ ފުނޯސް ފުރި ފުސްއަރާ ނަކަތާ
*ހަތް ހަޅައިން ހަޅަލާ
އައްސިދައިން ބަނަ ބުރުނު ކޮޅިގަދަ ކަނޑުގަ ބާނި އަރާ
*މިޔަހެލިން އުދަލާ

#1
އަހުލިހައިން އުދަރެސް
*މާ ނަކަތު ކޮޅިލާ
ފުރަ ނިމޭ ހަމައިން
*އުތުރަ އަތަ ހިތަލާ
ހޭވިހައިން މަޑުކޮށް
*ނޮރަ ދޮށައިން އަލިވޭ

#2
އިރު އުތުރު ހަޅައިން
*ދިޔަރެހުން އަލިކޮށް
ހޭވިހައިން މަޑުކޮށް
*ނޮރަ ދޮށާ ހަމަޔައް
ހަމަހިމޭން ގެނުވާ
*މޫސުމުން ނަލަވޭ

#3
ފަސްބަދުރު ރޭ ވައިން
*ފުރަބަދުރު މަތިކޮށް
އުޑުމަތިން ވިލުތައް
*ފަރިލަމުން އަލިކޮށް
ހުދުވިލައިން ކުލަކޮށް
*އަލިވިލުން ގަދަވޭ`,

  englishLyrics: `#M
Kethi roanu miyaheli adha funoas furi fusaraa nakathaa
*Hayy halhain halhalaa
Ahsidhain bana burunu kolhigadha kanduga baani araa
*Miyahelin udhalaa
#1
Ahulihain udhares
*Maa nakathu kolhilaa
Fura nimey hamain
*Uthura atha hithalaa
Heyvihain madukoh
*Nora dhoshain alivey
#2
Iru uthuru halhain
*Dhiyarehun alikoh
Heyvihain madukoh
*Nora dhoshaa hamayah
Hamahimeyn genuvaa
*Moosumun nalavey
#3
Fasbadhuru rey vain
*Furabadhuru mathikoh
Udumathin viluthah
*Farilamun alikoh
Hudhuvilain kulakoh
*Alivilun gadhavey`,
},
{
  id: 155,
  name: `Singu Maa Kandu`,
  genre: 'Kaasi',
  lyrics: `#M
ސިންގު މާކަނޑުގާ އެދުއްވަން އާދަނަށްތާ ނުކެރުނީ
*ސަންފަ މިކަމާ ފޫހި ރުޅިވެރި ކަން ބޮޑާހާކާ ހެދީ
ޝައްކު ހިތުގާ އުފެއްދި އާދަނު ހޯއްގޮވާ ބަސްބުނެ ހެދީ
*ސަންފަ މިކަމާ ފޫހި ރުޅިވެރި ކަން ބޮޑާހާކާ ހެދީ

#1
ބަދަލުވީ މޫސުން އެ އިރުވައި ދުރުދަތުރު ތައްޔާރުވީ
*ރާސްތަދިގު ދަތުރެއް ފަށާގޮސް ރާކޮށީފަޅުގާ އެޅީ

#2
ދުރުދަތުރު ނިންމާފަ އައި އިރު ކިޔެވެލިން މުޅި ގޭތެރޭ
*ތިންހަތަރު މީހުންވަށާމެދު ސަންފައޮތް ހޭކުޑަވެފާ

-
$M
އާދަނަށް އޮޅިއްޖެތާ ވީގޮތްވެސް ނޭންގުނޭ
*އާދަނަށް އޮޅިއްޖެތާ ވީގޮތްވެސް ނޭންގުނޭ
މޭގަނޑު ތުރުތުރު އަޅާ
*ފިތްކެނޑި ބިރު ހާސްވެފާ

$1
ވާނުވާއެއް ނޭނގޭ ކިތައްދުވަސް ވެއްޖެތާ
*ވާނުވާއެއް ނޭނގޭ ކިތައްދުވަސް ވެއްޖެތާ

$2
ބޭރަށް ދަންވަރު ނިކުތުން މިވަނީ ހުއްޓިފާ
*ބޭރަށް ދަންވަރު ނިކުތުން މިވަނީ ހުއްޓިފާ

$3
ހާމިހާރަކު ނުޖެހޭ ބުރުދައްކަން އާދަނަށް
*ހާމިހާރަކު ނުޖެހޭ ބުރުދައްކަން އާދަނަށް`,

  englishLyrics: `#M
Sinngu maakandugaa edhuhvan aadhanahthaa nukerunee
*Sannfa mikamaa foohi rulhiveri kan bodaahaakaa hedhee
Shahku hithugaa ufehdhi aadhanu hoahgovaa basbune hedhee
*Sannfa mikamaa foohi rulhiveri kan bodaahaakaa hedhee
#1
Badhaluvee moosun e iruvai dhurudhathuru thahyaaruvee
*Raasthadhigu dhathureh fashaagos raakosheefalhugaa elhee
#2
Dhurudhathuru ninnmaafa ai iru kiyevelin mulhi geytherey
*Thinnhatharu meehunnvashaamedhu sannfaoyy heykudavefaa
-
$M
Aadhanah olhihjethaa veegoyyves neynnguney
*Aadhanah olhihjethaa veegoyyves neynnguney
Meygandu thuruthuru alhaa
*Fiyykendi biru haasvefaa
$1
Vaanuvaaeh neyngey kithahdhuvas vehjethaa
*Vaanuvaaeh neyngey kithahdhuvas vehjethaa
$2
Beyrah dhannvaru nikuthun mivanee huhtifaa
*Beyrah dhannvaru nikuthun mivanee huhtifaa
$3
Haamihaaraku nujehey burudhahkan aadhanah
*Haamihaaraku nujehey burudhahkan aadhanah`,
},
{
  id: 156,
  name: `Thariyaai Handhaa`,
  genre: 'Taki',
  lyrics: `#M
ތަރިޔާއި ހަނދާ ހެކިވެ ބުނީޔާ އާނުތޯ
*ތަރިޔާއި ހަނދާ ހެކިވެ ބުނީޔާ އާނުތޯ
ހަދިޔާކުރަމޭ ހިތްކަމަނާ ލޯބިދޭނުތޯ
*ހަދިޔާކުރަމޭ ހިތްކަމަނާ ލޯބިދޭނުތޯ

#1
ހަންހާރު އުޅާ ރަންތަނޑި ރަންފޭރު ދޭނަމޭ
*އަންނާރު އަނބާ ޖަންބު އަތައިން ވާރުދޭނާމޭ
ހަންހާރަވީމެ ރަނިކަމަނާ ރަންކިޔާނުތޯ
*ހަންހާރަވީމެ ރަނިކަމަނާ ރަންކިޔާނުތޯ
*ހަދިޔާކުރަމޭ ހިތްކަމަނާ ލޯބިދޭނުތޯ

#2
އަންދާނަމެ ކަސްތޫރި ގޮމައިން މުޖުމަރާ ފުރާ
*ސަންދާރު ހަދައިދޭނަމެ ބޮކަރުން ޖަވާހިރާ
އަންނާށެ ރަނާ ހިތުތެރެ ރަނިކަން ކުރާނުތޯ
*އަންނާށެ ރަނާ ހިތުތެރެ ރަނިކަން ކުރާނުތޯ
*ހަދިޔާކުރަމޭ ހިތްކަމަނާ ލޯބިދޭނުތޯ

#3
ގެންދާނަމެ މުޅި ކައުނުތެރޭ އުދުހިލާ އުރާ
*އިންދާނަމެ ވަސްމީރު ބަގީޗާ ދެހިތްފުރާ
ވިންދާއިލެޔާ ދެހިތުގެ ގުޅުވާ ނުދޭނުތޯ
*ވިންދާއިލެޔާ ދެހިތުގެ ގުޅުވާ ނުދޭނުތޯ
*ހަދިޔާކުރަމޭ ހިތްކަމަނާ ލޯބިދޭނުތޯ`,

  englishLyrics: `#M
Thariyaai handhaa hekive buneeyaa ahaanuthoa
*Thariyaai handhaa hekive buneeyaa ahaanuthoa
Hadhiyaakuramey hiyykamanaa loabidheynuthoa
*Hadhiyaakuramey hiyykamanaa loabidheynuthoa
#1
Hannhaaru ulhaa rannthandi rannfeyru dheynamey
*Annaaru anbaa jannbu athain vaarudheynaamey
Hannhaaraveeme ranikamanaa rannkiyaanuthoa
*Hannhaaraveeme ranikamanaa rannkiyaanuthoa
*Hadhiyaakuramey hiyykamanaa loabidheynuthoa
#2
Anndhaaname kasthoori gomain mujumaraa furaa
*Sanndhaaru hadhaidheyname bokarun javaahiraa
Annaashe ranaa hithuthere ranikan kuraanuthoa
*Annaashe ranaa hithuthere ranikan kuraanuthoa
*Hadhiyaakuramey hiyykamanaa loabidheynuthoa
#3
Genndhaaname mulhi kaunutherey udhuhilaa uraa
*Inndhaaname vasmeeru bageechaa dhehiyyfuraa
Vinndhaaileyaa dhehithuge gulhuvaa nudheynuthoa
*Vinndhaaileyaa dhehithuge gulhuvaa nudheynuthoa
*Hadhiyaakuramey hiyykamanaa loabidheynuthoa`,
},
{
  id: 157,
  name: `Thedhey Abin`,
  genre: 'Taki',
  lyrics: `#M
ތެދޭ އަނބިން ރީއްޗޭ އަހާށެ ކިޔައިދޭނަމޭ
*ތެދޭ އަނބިން ރީއްޗޭ އަހާށެ ކިޔައިދޭނަމޭ
އެހާ ރީތިވީމާ ލޯބިވޭ ފިރި ޔާރުނޭ
*އެހާ ރީތިވީމާ ލޯބިވޭ ފިރި ޔާރުނޭ
*ތެދޭ އަނބިން ރީއްޗޭ އަހާށެ ކިޔައިދޭނަމޭ

#1
އަސްލު އަނބިން ރީތީ ދިގުވީމަ އެނާނާތެދޭ
*އަސްލު އަނބިން ރީތީ ދިގުވީމަ އެނާނާތެދޭ
ފުރާޅަށް އެރޭނޭ ފުރާޅަށް އެރޭނޭ ސިޑިއެއްގެ ބޭނުންނެތޭ
*ފުރާޅަށް އެރޭނޭ ސިޑިއެއްގެ ބޭނުންނެތޭ

#2
އަސްލު އަނބިން ރީތީ ފަލަވީމަ އެނާނާތެދޭ
*އަސްލު އަނބިން ރީތީ ފަލަވީމަ އެނާނާތެދޭ
ވަސްހުވަނދޭ އެއިދޯ ވަސްހުވަނދޭ އެއިދޯ ސެންޓެއްގެ ބޭނުންނެތޭ
*ވަސްހުވަނދޭ އެއިދޯ ސެންޓެއްގެ ބޭނުންނެތޭ

#3
އަސްލު އަނބިން ރީތީ ދޮންވީމަ އެނާނާތެދޭ
*އަސްލު އަނބިން ރީތީ ދޮންވީމަ އެނާނާތެދޭ
ކޮޓަރިވޭ އުޖާލާ ކޮޓަރިވޭ އުޖާލާ ބައްތީގެ ބޭނުންނެތޭ
*ކޮޓަރިވޭ އުޖާލާ ބައްތީގެ ބޭނުންނެތޭ`,

  englishLyrics: `#M
Thedhey anbin reehchey ahaashe kiyaidheynamey
*Thedhey anbin reehchey ahaashe kiyaidheynamey
Ehaa reethiveemaa loabivey firi yaaruney
*Ehaa reethiveemaa loabivey firi yaaruney
*Thedhey anbin reehchey ahaashe kiyaidheynamey
#1
Aslu anbin reethee dhiguveema enaanaathedhey
*Aslu anbin reethee dhiguveema enaanaathedhey
Furaalhah ereyney furaalhah ereyney sidiehge beynunnethey
*Furaalhah ereyney sidiehge beynunnethey
#2
Aslu anbin reethee falaveema enaanaathedhey
*Aslu anbin reethee falaveema enaanaathedhey
Vashuvandhey eidhoa vashuvandhey eidhoa senntehge beynunnethey
*Vashuvandhey eidhoa senntehge beynunnethey
#3
Aslu anbin reethee dhonnveema enaanaathedhey
*Aslu anbin reethee dhonnveema enaanaathedhey
Kotarivey ujaalaa kotarivey ujaalaa bahtheege beynunnethey
*Kotarivey ujaalaa bahtheege beynunnethey`,
},
{
  id: 158,
  name: `Thin Thin Bandiyaa`,
  genre: 'Nala',
  lyrics: `#M
ތިން ތިން ބަނޑިޔާއެ ތިން ތިން ބަނޑިޔާއެ
*ދެކޮޅަށް ދާތަންފެނޭ
އެކިވަރުގެ ބަނޑިޔާއެ ރީތި މާރީތީއެ
*ބަނޑިޔާތައް ކައިރިވޭ

#1
އަސުރުން ފަސްވީމަ ފޯރިހިފާނޭ
*ބަނޑިޔާތައް ފައްކާ ފަތަރާސީހޭ
ދަނޑިވަޅު ހޯދާފަ ސިގުނަލްދޭށޭ
*ރިދަމުން ބުންޒީލަ ބުން ހިއްޕާނޭ
އެކިވަރުގެ ބަނޑިޔާގެ ފައިހަމަ ވާނޭ
*ކުރިމަތި ބަނޑިޔާތައް ފުރިހަމަ ވާނޭ
ރިދަމުން އިވޭރާގު ބަނޑިޔާ ތަކާ ކުޅޭ
*އެއްކަލަ އަޗާސޭޓު އެތެރޭން ބަލަން އިނދޭ
މިކަމާ ބޮޑުސޭޓު ކަންތައް ބޮޑުވީމަ މޭ ގުޑުގުޑުލާނެ ހޭ
*އެހެނަސް ކުޑަސޭޓު ކައިރިވާ ޗާލު ބަނޑިޔާއަށް ރާގުދޭ

#2
ތިންތިން ބަނޑިޔާލު ފެންބޯހިތްވޭ
*ހިތްތައް އަތުލާނެ ގޮތް ބޭނުންވޭ
ނުފުރޭ ބަނޑިޔާގެ ފެން ބޯހިއްވޭ
*މެދުވަރު ބަނޑިޔާގެ ފެން ބޭނުންހޭ
ބަރުހޭސަ ބަނޑީޔާތައް ބަރު ބޮޑުވާނޭ
*ތުންދިގު ބަނޑިޔާގެ ކަރު ކިހިނެއްހޭ
ބަނޑިޔާގެ އެކިފާޑު ބައްޓަން ވެލާލެކޭ
*ސޭޓަށް ކުރާބާރު ބޭރަށް އިނގޭނެހޭ`,

  englishLyrics: `#M
Thin thin bandiyaae thin thin bandiyaae
*Dhekolhah dhaathannfeney
Ekivaruge bandiyaae reethi maareetheee
*Bandiyaathah kairivey
#1
Asurun fasveema foarihifaaney
*Bandiyaathah fahkaa fatharaaseehey
Dhandivalhu hoadhaafa sigunaldheyshey
*Ridhamun bunnzeela bun hihpaaney
Ekivaruge bandiyaage faihama vaaney
*Kurimathi bandiyaathah furihama vaaney
Ridhamun iveyraagu bandiyaa thakaa kulhey
*Ehkala achaaseytu ethereyn balan indhey
Mikamaa boduseytu kannthah boduveema mey gudugudulaanehey
*Ehenas kudaseytu kairivaa chaalu bandiyaaah raagudhey
#2
Thinnthin bandiyaalu fennboahiyyvey
*Hiyythah athulaane goyy beynunnvey
Nufurey bandiyaage fenboahihvey
*Medhuvaru bandiyaage fen beynunhey
Baruheysa bandeeyaathah baru boduvaaney
*Thunndhigu bandiyaage karu kihinehhey
Bandiyaage ekifaadu bahtan velaalekey
*Seytah kuraabaaru beyrah ingeynehey`,
},
{
  id: 159,
  name: `Thiya Kalhiravain`,
  genre: 'Nala',
  lyrics: `#M
ތިޔަ ކަޅިރަވައިން ޒަޚަމް ނުވި ހިތަކީ
*އެ އީ ދުނިޔެއިން ވަރަށް ބަދު ނަސީބު ހިތެކޭ
ތިޔަ އަސަރުގާ މަސްތު ނުވި ނަމައީ
*އެވެސް ދެން ހާދަ ނާކާމިޔާބު އަޅެކޭ

#1
ތީރާ ހަންޖަރު ވެސް ހުރޭއޭ
*ފީރާ ކުރަފަތް ވެސް އެނގޭއޭ
ހީރާޔާ ހިލަޔާ އަގުގާ
*އޭ ހާދަ ތަފާތެއް ހުރޭއޭ
މީރާގެ ރާހަތުވި ހީލުމަކީ
*މި ދެލޯވެސް އަލަށް ދުއް އަޖާބު ކަމެކޭ

#2
ތިޔަ ތޫނު ނަޒަރު ގުޅުނީމާ
*މިހިތާއި އަމާޒު ވެލީމާ
ނިޔަތާއި ޚިޔާލު އެހިނދުގާ
*ކިޔަމަންކަން ދޫކޮށް ލީމާ
ތިޔަ އުފަލުގާ ހިތުގެ ވިންދު އަވަސް
*ވުމަކީވެސް އެ އީ ވާ އަރާމު ކަމެކޭ

#3
ލޯބީގެ ހަޔާތަށް އެދިފާ
*އޭގާވި އުފާތަށް އޮޅިފާ
މޭގާވި މަގޭ ނަފްސާ ހިތް
*ހޭވެރިވެ މި ޖާދޫ ޖެހިފާ
ލޭގާ މި އިއްސާސް ހިނގާލި ގޮތަކީ
*މިފުރާނައިގެ އުއްމީއެދު އާވި ކަމެކޭ`,

  englishLyrics: `#M
Thiya kalhiravain zakham nuvi hithakee
*E ee dhuniyein varah badhu naseebu hithekey
Thiya asarugaa masthu nuvi namaee
*Eves dhen haadha naakaamiyaabu alhekey
#1
Theeraa hannjaru ves hureyey
*Feeraa kurafayy ves engeyey
Heeraayaa hilayaa agugaa
*Ey haadha thafaatheh hureyey
Meeraage raahathuvi heelumakee
*Mi dheloaves alah dhuh ajaabu kamekey
#2
Thiya thoonu nazaru gulhuneemaa
*Mihithaai amaazu veleemaa
Niyathaai khiyaalu ehindhugaa
*Kiyamannkan dhookoh leemaa
Thiya ufalugaa hithuge vinndhu avas
*Vumakeeves e ee vaa araamu kamekey
#3
Loabeege hayaathah edhifaa
*Eygaavi ufaathah olhifaa
Meygaavi magey nafsaa hiyy
*Heyverive mi jaadhoo jehifaa
Leygaa mi ihsaas hingaali gothakee
*Mifuraanaige uhmeeedhu aavi kamekey`,
},
{
  id: 160,
  name: `Thiyey Nooru`,
  genre: 'Taki',
  lyrics: `#M
ތިޔޭ ނޫރު މަގޭ ޗާލު ކަނބާ ހާދަހިއްވެޔޭ
*މަގެ ޖާނުއެކީ ހިބައިންވީ ލޯބިންދީނީ
މަށަށް ކެހިދީފަތަ އެދިޔައީ ބުނެވެސްނުލާ އެރޭ
*މަށަށް ކެހިދީފަތަ އެދިޔައީ ބުނެވެސްނުލާ އެރޭ

#1
ބައްދަލު ވެލުމަށް އެދި ހުށައެޅީއެރޭ
*އައްސިދަ ހެކިކޮށް ރުހި އާނއެކޭބުނީ
އުފާތަކާ އަރާމުދެން ހުވާވެސް ކުރީ
*ބަލާނުލާ މިލިޔަން މިލިޔަން އެރޭދިނީ

#2
މަންމަގެ ފައްޓަރުބައިވެސް އެކީ ދިނީ
*އިޝްގުގެ ޖަޒުބާތުގަ ޖެހި މިހިތްއެކީ
މުރާދުނެތި ތުރާތަކުން މިހިތްވީ ހަލާކު
*މިއަށް ވުރެން މަރުވުން މާހެވޭ މިދުނިޔެއިން

#3
ދިން ފޮނި އުފަލާ އަރާމުތައް އެރޭ
*ހަނދުވަރު ދޭރޭރޭ ލިއުމުގާ އެވީ
ހިތައް ނުވާ ގޮތެއްނެތޭ ފުށުން އެރީމާ
*މިވީ ގޮތެއް ނޭނގޭ ސަހަރޯ ހިތައްއަރާ`,

  englishLyrics: `#M
Thiyey nooru magey chaalu kanbaa haadhahihveyey
*Mage jaanuekee hibainnvee loabinndheenee
Mashah kehidheefatha edhiyaee bunevesnulaa erey
*Mashah kehidheefatha edhiyaee bunevesnulaa erey
#1
Bahdhalu velumah edhi hushaelheeerey
*Ahsidha hekikoh ruhi aanekeybunee
Ufaathakaa araamudhen huvaaves kuree
*Balaanulaa million million ereydhinee
#2
Mannmage fahtarubaives ekee dhinee
*Ishguge jazubaathuga jehi mihiyyekee
Muraadhunethi thuraathakun mihiyyvee halaaku
*Miah vuren maruvun maahevey midhuniyein
#3
Dhin foni ufalaa araamuthah erey
*Handhuvaru dheyreyrey liumugaa evee
Hithah nuvaa gothehnethey fushun ereemaa
*Mivee gotheh neyngey saharoa hithaharaa`,
},
{
  id: 161,
  name: `Vahtaali Maafulhu`,
  genre: 'Nala',
  lyrics: `#M
ރަށް މައްޗަށް ހެދިހުރި ރަތް ނިކަގަހުކުރި
*ވައްޓާލި މާފުޅު ލިބޭނެބާ

#1
ވައިރޯޅިއާ އެކު ވެއްޓިއްޖެ މާފުޅު
*ކުރުނީސްކޮށްލާފާ ނެގީމެ މާފުޅު

#2
އުޑުބަމަޔަކަށް ވުރެ މަތީގަ މާފުޅު
*އުޑުތިލަ މަތިން ގަހުތެރޭގަ މާފުޅު

$M
ހޭޅިހޭޅިން ބޮނދާ ބޮނދާ ރޯޅި އިރުދިން އަލީތެރޭގާ
ރޯޅިވައި ފިނިކަން ދިނީމާ ފޯރިއައިސް އެކުގާ ގޮވާލާ އޭހުވައްލާ
*ގޮވާލާ ޔާހުވައްލާ
ގޮވާލާ އޭހުވައްލާ
*ގޮވާލާ ޔާހުވައްލާ`,

  englishLyrics: `#M
Rah mahchah hedhihuri rayy nikagahukuri
*Vahtaali maafulhu libeynebaa
#1
Vairoalhiaa eku vehtihje maafulhu
*Kuruneeskohlaafaa negeeme maafulhu
#2
Udubamayakah vure matheega maafulhu
*Uduthila mathin gahuthereyga maafulhu
#3
Heylhiheylhin bondhaa bondhaa roalhi irudhin aleethereygaa
Roalhivai finikan dhineemaa foariais ekugaa govaalaa eyhuvahlaa
*Govaalaa yaahuvahlaa
Govaalaa eyhuvahlaa
*Govaalaa yaahuvahlaa`,
},
{
  id: 162,
  name: `Viyyaa`,
  genre: 'Kaasi',
  lyrics: `#M
ވިއްޔާ
*ފަލަކުން ދިރޭހާ ފާޅުވެލާ

#1
ގެނުވައެ ސީދާ ފެނުމުން ތާޒާ
*ފިނިކަން ހުނާ ވޭނާ
ފާޅުވެދާހާ ރީތި އެތަރިތައް
*ފާޅުވެދާހާ ރީތި އެތަރިތައް
ފަލަކުން ދިއްލާލީމާ
*ވިއްޔާ ފަލަކުން ދިރޭހާ ފާޅުވެލާ

-
$M
އަލިވާނޭ ނޫރެކޭ
*އަލިވާނޭ ނޫރެކޭ ދޭހުން ވިދާލާނީ

$1
ފަރިނަލަ އަލީގައި
*ނަލަނަލަ ދޭހުން ވިދާލާނީ

$2
*ވާން އުޅޭ
އެއްކަލަގޮތް
މަބުނާ ގޮތް`,

  englishLyrics: `#M
Vihyaa
*Falakun dhireyhaa faalhuvelaa
#1
Genuvae seedhaa fenumun thaazaa
*Finikan hunaa veynaa
Faalhuvedhaahaa reethi etharithah
*Faalhuvedhaahaa reethi etharithah
Falakun dhihlaaleemaa
*Vihyaa falakun dhireyhaa faalhuvelaa
-
$M
Alivaaney noorekey
*Alivaaney noorekey dheyhun vidhaalaanee
$1
Farinala aleegai
*Nalanala dheyhun vidhaalaanee
$2
*Vaan ulhey
Ehkalagoyy
Mabunaa goyy`,
},
{
  id: 163,
  name: `Aadhakoh Mimagun`,
  genre: 'Nala',
  lyrics: `#M
އާދަކޮށް މިމަގުން ކުރިކަޑަންޏާ
*ހާލުކިހިނެއްތޯ އެހިދާނޭ
މާގިނައިން ތިޔަހެން ފެނި އުޅެންޏާ
*ނަން އަހާލަންވެސް ޖެހިދާނޭ

#1
ދުރުދުރުން ތިޔަހެން ލޯމަރަންޏާ
*ބަސްބަހުން ހަމަލާދީ ހަދަންޏާ
ނަންބުނަން ޖެހިލުންވެ ފިލަންޏާ
*ފޯނު ނަންބަރުވެސް ބެލިދާނޭ

#2
ފާޑަކަށް ތިޔަހެން ހީއުޅެންޏާ
*ގޮތް ގޮތަށް ނަޒަރުން މެސެޖު ދެންޏާ
ހިތްމަގޭ ކިޔަމަން ނުވެވިގެން ގޮސް
*ލޯބި ފަހަރެއްގާ ވެވިދާނޭ

#3
ހިތްއުފާވާ ޖަވާބެއް ނުދެންޏާ
*އާނއެކޭ ނުބުނެ މާ ލަސްކުރަންޏާ
އިންތިޒާރުގެ ވަގުތު ދި ގުކުރަންޏާ
*ފޫހި ފަހަރެއްގާ ވެވިދާނޭ`, 
      englishLyrics: `#M
Aadhakoh mimagun kurikadannyaa
*Haalukihinehthoa ehidhaaney
Maaginain thiyahen feni ulhennyaa
*Nan ahaalanves jehidhaaney
#1
Dhurudhurun thiyahen loamarannyaa
*Basbahun hamalaadhee hadhannyaa
Nanbunan jehilunve filannyaa
*Foanu nanbaruves belidhaaney
#2
Faadakah thiyahen heeulhennyaa
*Goyy gothah nazarun meseju dhennyaa
Hiyymagey kiyaman nuvevigen gos
*Loabi faharehgaa vevidhaaney
#3
Hiyyufaavaa javaabeh nudhennyaa
*Aanaekey nubune maa laskurannyaa
Inthizaaruge vaguthu dhi gukurannyaa
*Foohi faharehgaa vevidhaaney`,
},
{
  id: 164,
  name: `Angaa Dheyshey`,
  genre: 'Zamaanee',
  lyrics: `#M
އަންގައިދޭށޭ އަދުވީ ރުހިގެން އޭ ހަނދާ
*ނިންޖާ ރޫހާ ނެތިގެން ދާނީ އޭ މަލާ
ހިތްއަދު ރޯވަރު ވެޔޭ
*ދެން އޭނާ ހޯދެޔޭ
ފިސްއަދުވީމާ ރުހޭ
*މަރުވާވަރުވޭ މެޔޭ

#1
ޖާނާ މިހިތް ދީފާވެޔޭ
*ދެންވީ މިހެން ބޭކާރުހޭ
ބެލުނޭ ދެލޯ އެދިތޯ ކަލާ މިރޭރޭވާ
*އަދި ބެލުނޭ ދެލޯ އެދިތޯ ކަލާ މިރޭރޭވާ އޯއޯ

#2
ސަހަރޯ އެވީ ކޮންތާކުހޭ
*އަންގާ ނުލީދެން ކީއްވެހޭ
ލިބެނީ ޝަޒާ މަރުދީ މިހެން ނިމެނީހޭ
*އަދި ލިބެނީ ޝަޒާ މަރުދީ މިހެން ނިމެނީހޭ އޯއޯ`, 
      englishLyrics: `#M
Angaidheyshey adhuvee ruhigen ey handhaa
*Ninjaa roohaa nethigen dhaanee ey malaa
Hiyyadhu roavaru veyey
*Dhen eynaa hoadheyey
Fisadhuveemaa ruhey
*Maruvaavaruvey meyey
#1
Jaanaa mihiyy dheefaaveyey
*Dhenvee mihen beykaaruhey
Beluney dheloa edhithoa kalaa mireyreyvaa
*Adhi beluney dheloa edhithoa kalaa mireyreyvaa oaoa
#2
Saharoa evee konthaakuhey
*Angaa nuleedhen keehvehey
Libenee shazaa marudhee mihen nimeneehey
*Adhi libenee shazaa marudhee mihen nimeneehey oaoa`,
},
{
  id: 165,
  name: `Beefaanu Odi`,
  genre: 'Zamaanee',
  lyrics: `#M
ބަލަކެޔޮޅާ މިއޮތީ ބޮޑު ރޯއްޖެއް ދެއްވާފާ
*ބަލަ ރެކިފުތު ދަރިޔާ ކުރުދޮށި ހެޔޮވަރު ކޮއްލާ
ފުރަތަމަ މުގުރާނަށް ބަޑި ތަޅަމުން މަސްތައް ފުމެ އެކީ ރަނގަރަނގަ ޖަހަމުން ރެކިފުތު އޮޑީގަ ބޮޑުވަތް ފުރަމުން
*މި އޮތީވާ އައިނެއްތާ

#1
ބީފާނު އޮޑި ބިޔަ ރާޅުތެރޭން
*ސަމުގާ ނުލާ ފެށި ދަތުރު ތެރޭން
ހިޔަލެއް ނިވަލެއް ނެތި ދުއްވާލާ
*ހިޔާލެއް ފިކުރެއް ނެތި ދުއްވާލާ

#2
ހަތަރު އުދަރެސް ބަނަމި ވެއްޖޭ
*ގޮއްރާޅު ތެރޭގާ މިއޮޑި ބެހިއްޖޭ
ހިޔަލެއް ނިވަލެއް ނެތި ދުއްވާލާ
*ހިޔާލެއް ފިކުރެއް ނެތި ދުއްވާލާ`, 
      englishLyrics: `#M
Balakeyolhaa miothee bodu roahjeh dhehvaafaa
*Bala rekifuthu dhariyaa kurudhoshi heyovaru kohlaa
Furathama muguraanah badi thalhamun masthah fume ekee rangaranga jahamun rekifuthu odeega boduvayy furamun
*Mi otheevaa ainehthaa
#1
Beefaanu odi biya raalhuthereyn
*Samugaa nulaa feshi dhathuru thereyn
Hiyaleh nivaleh nethi dhuhvaalaa
*Hiyaaleh fikureh nethi dhuhvaalaa
#2
Hatharu udhares banami vehjey
*Gohraalhu thereygaa miodi behihjey
Hiyaleh nivaleh nethi dhuhvaalaa
*Hiyaaleh fikureh nethi dhuhvaalaa`,
},
{
  id: 166,
  name: `Dhaanee Mahah`,
  genre: 'Baburu',
  lyrics: `#M
ދާނީމަހަށް ދާންފުރާ ދާނީ ކިޔާފާ ހޭވައްލާ, ދާނީ މަހަށް ގެންފުރާ ދާނީ ހޭވައްލާ
*ދާނީމަހަށް ދާންފުރާ ދާނީ ކިޔާފާ ހޭވައްލާ, ދާނީ މަހަށް ގެންފުރާ ދާނީ ހޭވައްލާ
ހީކޮށްލާ އަދު ޔަގީންވާތީ އެދިގެން މިބުރު ތާޒާވީ ނޫކަނޑާ ދާނީ ހޭވައްލާ
*ހީކޮށްލާ އަދު ޔަގީންވާތީ އެދިގެން މިބުރު ތާޒާވީ ނޫކަނޑާ ދާނީ ހޭވައްލާ

#1
*ހަޒާނާއިން ގައުމު ދިރިދާނޭ
މި ކަނޑުގާ އެވާ ހަޒާނާ
މި ކަނޑުމަސް ލިބޭ ހަޒާނާ
އުޅެމާހެ ކެރިގެން ފިދާވާން ކެރިގެން ފިދާވާން ކެރި

$M
ބިޔަކަށި އެނގޭ އައިނެއް
*އެހުރީ އެތާ
ގިނަ ކުރަނގިވާ އައިނެއް
*އެހުރީ އެތާ

$1
ބިޔަ އެ މަސްއައިން
*ތިލަވެ ނަގާފާ
އޮއެވާލި ލަކުޑި ގަނޑެއްގާ
*އޮއެވާލި ލަކުޑި ގަނޑެއްގާ

$2
ދޮށި ދޮށި އިލާ
*ކިރިލި ބަލާފާ
ދޯނީގެ މުދިމު ކޮބައިތަ
*ދޯނީގެ މުދިމު ކޮބައިތަ

#3
*ނަގާ ގޮދާ
ކުރު ދޮށިން
ގަތް ބުޅިން
ވަތް ފުރާ
އޮޑި ފުރާ`,
       
  englishLyrics: `#M
Dhaaneemahah dhaanfuraa dhaanee kiyaafaa heyvahlaa, dhaanee mahah genfuraa dhaanee heyvahlaa
*Dhaaneemahah dhaanfuraa dhaanee kiyaafaa heyvahlaa, dhaanee mahah genfuraa dhaanee heyvahlaa
Heekohlaa adhu yageenvaathee edhigen miburu thaazaavee nookandaa dhaanee heyvahlaa
*Heekohlaa adhu yageenvaathee edhigen miburu thaazaavee nookandaa dhaanee heyvahlaa
#1
*Hazaanaain gaumu dhiridhaaney
Mi kandugaa evaa hazaanaa
Mi kandumas libey hazaanaa
Ulhemaahe kerigen fidhaavaan kerigen fidhaavaan keri
#2
Biyakashi engey aineh
*Ehuree ethaa
Gina kurangivaa aineh
*Ehuree ethaa
#3
Biya e masain
*Thilave nagaafaa
Oevaali lakudi gandehgaa
*Oevaali lakudi gandehgaa
#4
Dhoshi dhoshi ilaa
*Kirili balaafaa
Dhoaneege mudhimu kobaitha
*Dhoaneege mudhimu kobaitha
#5
*Nagaa godhaa
Kuru dhoshin
Gayy bulhin
Vayy furaa
Odi furaa`,
},
{
  id: 167,
  name: `Fahuge Kudhin`,
  genre: 'Nala',
  lyrics: `#M
ހާދަ ތަފާތޭ ފަހުގެ ކުދިން ތުނިކުރު ހެދުންތަކޭ އެލަނީ
*ހައިރާން ހީވެޔޭ
ކުމްކުމް ކަސޯޓީ އޭގެތަރިން އެއަޅާ ހެދުން ކޮޕީކުރަނީ
*ސަހަރޯ ހީ ވެޔޭ

#1
މަގު ކުނިކަހާ އުޅޭއިރު
*ދެކޮޅަށް މަގުގެ ބަލާނޭ
ފަހަތަށް ކުރާނެ ހެޔޮވަރު
*ލައިގެން އެހުންނަ ކުރުޓޮޕު
އުނަގަނޑު ހަމައިން ގައި ހަމު ކުލައަލި ބެލްޓެކޭ އެހެރަ ވިދަނީ
*ސަހަރޯ ހީވެޔޭ

#2
އަތްފައިގެ ތިޔަ ބަގީޗާ
*ދަންނާށެ ހެޔޮކުރާނޭ
ކަންފަތުގަލާ އެބޮޅުފަތި
*އޭގެން ޖަހާނެ ދަން ފުޅި
މޫނުމަތިން ސިފަ ގެއްލޭހެން ގަދަ ކުލަތަކޭ އެހެރަ ވިދަނީ
*ސަހަރޯ ހީވެޔޭ

#3
އިސްލާހުވީއެ ބުނެފާ
*ހަށިގަނޑު ނިވާ ނުކުރިޔަސް
ފެޝަނަށް އަޅާނެ ބުރުގާ
*އަތްފައި ނިވާ ނުވިޔަކަސް
ފައި އޮޅުނަސް ކަށިފައިވާނުގާ ކެޓްވޯކުގާ އެހެރަ ހިނގަނީ
*ސަހަރޯ ހީވެޔޭ`,

  englishLyrics: `#M
Haadha thafaathey fahuge kudhin thunikuru hedhunnthakey elanee
*Hairaan heeveyey
Kumkum kasoatee eygetharin ealhaa hedhun kopeekuranee
*Saharoa hee veyey
#1
Magu kunikahaa ulheyiru
*Dhekolhah maguge balaaney
Fahathah kuraane heyovaru
*Laigen ehunna kurutopu
Unagandu hamain gai hamu kulaali beltekey ehera vidhanee
*Saharoa heeveyey
#2
Ayyfaige thiya bageechaa
*Dhannaashe heyokuraaney
Kannfathugalaa ebolhufathi
*Eygen jahaane dhan fulhi
Moonumathin sifa gehleyhen gadha kulathakey ehera vidhanee
*Saharoa heeveyey
#3
Islaahuveee bunefaa
*Hashigandu nivaa nukuriyas
Feshanah alhaane burugaa
*Ayyfai nivaa nuviyakas
Fai olhunas kashifaivaanugaa kettvoakugaa ehera hinganee
*Saharoa heeveyey`,
},
{
  id: 168,
  name: `Fari Shehezaadha`,
  genre: 'Taki',
  lyrics: `#M
އޭމަގޭ ރީތި ރީތި ފަރި ޝެހެޒާދާ
*ވަރަށް ލޯބި ލޯބިން އާދޭ
ތީމަގޭ އުންމީދަކީ
*ތީމަގޭ އުންމީދަކީ
އުންމީދު ކުރެވި ކުރެވި ކުރެވި ވަރުބަލި ވިމަލާ
*ވަރަށް ލޯބި ލޯބިން އާދޭ

#1
އަލަތުނަޒަރު ކަތިލިޔެ މަގެ ހިތާމޭ ކުރިން
*މަގާތު މަށާ ބައިންދާ ޅެން ކިޔާދީހެދިން
ފަހަތު މަލައިގެން މިތުރާ ހިނގާވެސް ހެދިން
*އަބަދު މަށާ އެކުވޭތޯ މައާދޭސް ކުރިން

#2
ހުވާތަކެއް ތުއި އަޑަކުން ކުރީތީ ކުރިން
*ހިތަމަގޭ ހަށިގަނޑު ހިބަ މަކޮށްދީ ހެދިން
އެތައްއެތައް އުންމީދެއް އޮޔާލީފަހުން
*ހިތާމަކޮށް ރޮއެފާވެސް ކިޔޭނޭމިހެން`,

  englishLyrics: `#M
Eymagey reethi reethi fari shehezaadhaa
*Varah loabi loabin aadhey
Theemagey unnmeedhakee
*Theemagey unnmeedhakee
Unnmeedhu kurevi kurevi kurevi varubali vimalaa
*Varah loabi loabin aadhey
#1
Alathunazaru kathiliye mage hithaamey kurin
*Magaathu mashaa bainndhaa lhen kiyaadheehedhin
Fahathu malaigen mithuraa hingaaves hedhin
*Abadhu mashaa ekuveythoa maaadheys kurin
#2
Huvaathakeh thui adakun kureethee kurin
*Hithamagey hashigandu hiba makohdhee hedhin
Ethahethah unnmeedheh oyaaleefahun
*Hithaamakoh roefaaves kiyeyneymihen`,
},
{
  id: 169,
  name: `Kanbulo`,
  genre: 'Taki',
  lyrics: `#M
ކަނބުލޯ ކަނބުލޯ މިކަމަށް ނުރުހި ކިޔެއްވެގެންތަ
*ދޮން ކަނބުލޯ މިކަމާ ފިކުރު ނުކުރި ކިޔެއްވެގެންތަ
މޮޔަ މަވަންތަ
*މަރު މަވަންތަ

#1
ސާބަކަށް ހާމަވާ ތިޔަފަދަ ނަލަ ސޫރައޭ
*ވާހިތުން ގުރުބާންވެސް ތިޔަ ލޯތްބަށް ވާނަމޭ
ދޭހިތުން ދީފިއްޔާ ރަނަކަށް މަހަދާނަމޭ
*ރަން ރިއްސާ ޖަވާހިރުން ގުނަވަންތައް ފުރާނަމޭ

#2
ޖާނާ މާލުން ގުރުބާން ވެސްވާނަމޭ
*ހިތަކަށް މަށަށް ލިބުނިއްޔާ ސޮދަގާތް ބަހާނަމޭ
ދޭހިތުން ރުހުމާއެކު އާނބަސް ބުނެފިއްޔާތާ
*ދެން ކިޔަމޭ މަތިމަތިން ގެދޮރުވެސް ދޭނަމޭ`,

  englishLyrics: `#M
Kanbuloa kanbuloa mikamah nuruhi kiyehvegenntha
*Dhon kanbuloa mikamaa fikuru nukuri kiyehvegenntha
Moya mavanntha
*Maru mavanntha
#1
Saabakah haamavaa thiyafadha nala sooraey
*Vaahithun gurubaannves thiya loayybah vaanamey
Dheyhithun dheefihyaa ranakah mahadhaanamey
*Ran rihsaa javaahirun gunavannthah furaanamey
#2
Jaanaa maalun gurubaan vesvaanamey
*Hithakah mashah libunihyaa sodhagaayy bahaanamey
Dheyhithun ruhumaaeku aanbas bunefihyaathaa
*Dhen kiyamey mathimathin gedhoruves dheynamey`,
},
{
  id: 170,
  name: `Fini Fini Hiyy`,
  genre: 'Taki',
  lyrics: `#M
ފިނިފިނި ހިތް ވެއްޖަ ފެނިފާ
*އަހަގެ މިތުރާ އަހަގެ ރަންކޮޅޭ
ޝޯހު ކޮށްލައިފި ފެނިފާ
*އަހަގެ މިތުރާ އަހަގެ ރަންކޮޅޭ
*ނިދިނޫމައެ ދެކެން ހިތުން އަހަގެ ރަންކޮޅޭ

#1
ކިޔެއް ވެހޭ ގުޅާ ލޫމަ ފޯނު ނުނަގަނޫ
*ފޯނު ނުނަގަނޫމަ ވާޅެ ދެރަ ނުވިސް ނެނޫ
ވައިބާވެސް ކެރޫމަ ދެންސީން އަރުވަނޫ
*ސީންއަރުވަނޫ މަ ވާޅެ ދެރަ ނުވިސްނެނޫ
*ނިދިނޫމައެ ދެކެން ހިތުން އަހަގެ ރަންކޮޅޭ

#2
ފޭސްބުކުން އިނބަ ފޮޓޮޔަށް ލައިކެއް ދެނޫ
*ލައިކުދެނޫ އިނބަދެކެ މަ ލައިކުވާ ވަރުން
މެސެންޖާއިން ހައިޖަހާ އުނދަގޫކެރޫ
*އުނދަގޫކެރޫމަ ތަތިޔަ އޮފްލައިން ވަނޫ
*ނިދިނޫމައެ ދެކެން ހިތުން އަހަގެ ރަންކޮޅޭ

#3
އިންސްޓައިން އިނބަ ފޮޓޮޔަށް ހާޓެއްދެނޫ
*ހާޓެއް ދެނޫމަ ތަތިޔަ އަންފޮލޯކެރޫ
ހާދަވަރަށް ސާޗުކެރޫ ފެނޭތޯތަހޭ
*ކިއެއްވެހޭ ނުފެންނަނޫ ބުލޮކު ތެއްކެރޫ
*ނިދިނޫމައެ ދެކެން ހިތުން އަހަގެ ރަންކޮޅޭ`,

  englishLyrics: `#M
Finifini hiyy vehja fenifaa
*Ahage mithuraa ahage rannkolhey
Shoahukohlaifi fenifaa
*Ahage mithuraa ahage rannkolhey
*Nidhinoomae dheken hithun ahage rannkolhey
#1
Kiyeh vehey gulhaa looma foanu nunaganoo
*Foanu nunaganoo mavaalhe dhera nuvisnenoo
Viberves kerooma dhennseen aruvanoo
*Seenaruvanoo ma vaalhe dhera nuvisnenoo
*Nidhinoomae dheken hithun ahage rannkolhey
#2
Facebookun inba fotoyah laikeh dhenoo
*Laikudhenoo inbadheke ma laikuvaa varun
Messengerin hi jahaa undhagookeroo
*Undhagookerooma thathiya offline vanoo
*Nidhinoomae dheken hithun ahage rannkolhey
#3
Instain inba fotoyah haatehdhenoo
*Haateh dhenooma thathiya unfollowkeroo
Haadhavarah searchkeroo feneythoathahey
*Kiehvehey nufennanoo blockthehkeroo
*Nidhinoomae dheken hithun ahage rannkolhey`,
},
{
  id: 171,
  name: `Foanu Kerooma`,
  genre: 'Taki',
  lyrics: `#M
ފޯނުކެރޫމާ އުމާށެ ބޮނުވެނޭ
*ނިދި ނޫމައެ މަ އިނބަ ދެކެންހިތުން މިރޭ

#1
ބިރަގަނެފާ ހުންނަހެން އިނބަގެ އަޑުން ހީވެޔޭ
*އަވަހަކެރޭ ދޯންޏަކުން ލަހަނުކޮށް އަފޫބިލާ
ތެތް އޮޅެނޫ އިނބަދެން މަ ލަދަގަންނަވަންދޯ
*ތެތް އޮޅެނޫ އިނބަދެން މަ ލަދަގަންނަވަންދޯ
*ދޮގަނަހަދާ ދެން ބޮނޭ

#2
ރޫރުލަނުއްވޭ ދެފަޔުން ފެނިލޫމާ އިނބަ ލޮލަށް
*ނޯޅެ ހުޝާމަދުކެރާން އިތުބާރު ކެރަން ބޮނަން
ލޯތްބުން މަޔާއެކު އޮޅެންނާ އުމާށޭ
*ލޯތްބުން މަޔާއެކު އޮޅެންނާ އުމާށޭ
*ނޯޅެންނާވެސް ބޮނޭ

#3
ރައްކާ ކެރުވޭޅަހޭ ދީފުއްވާ ދެން މިހިތް
*ކަކެލުހުޅުން ވައިގި ދޫވެދާޅޭ ތެއް ބުނި ބަހުން
މިޔޯ ނުހަނު އަގަބޮޑަ އަމާނާތެކޭ ދެން
*މިޔޯ ނުހަނު އަގަބޮޑަ އަމާނާތެކޭ ދެން
*އަދި އަތުލާށޭ ބޮނޭ`,

  englishLyrics: `#M
Foanukeroomaa umaashe bonuveney
*Nidhi noomae ma inba dhekennhithun mirey
#1
Biraganefaa hunnahen inbage adun heeveyey
*Avahakerey dhoannyakun lahanukoh afoobilaa
Theyy olhenoo inbadhen ma ladhagannavanndhoa
*Theyy olhenoo inbadhen ma ladhagannavanndhoa
*Dhoganahadhaa dhen boney
#2
Roorulanuhvey dhefayun feniloomaa inba lolah
*Noalhe hushaamadhukeraan ithubaaru keran bonan
Loayybun mayaaeku olhennaa umaashey
*Loayybun mayaaeku olhennaa umaashey
*Noalhennaaves boney
#3
Rahkaa keruveylhahey dheefuhvaa dhen mihiyy
*Kakeluhulhun vaigi dhoovedhaalhey theh buni bahun
Miyoa nuhanu agaboda amaanaathekey dhen
*Miyoa nuhanu agaboda amaanaathekey dhen
*Adhi athulaashey boney`,
},
{
  id: 172,
  name: `Foari Nagaalaa`,
  genre: 'Nala',
  lyrics: `#M
އީދޭ އައިމި އުފަލުގާ
*އެންމެން ޖޯޝާއި މަޖަލުގާ
ކިޔަމާ އީދު ތަހުނިޔާ
*ކުދިބޮޑު އެންމެން ފޯރި ނަގާލާ

#1
ގުޅިގެން އެކީގާ ކުޑަކުދިން
*ސަކަރާތުގެ އަޑު މުޅިތާ ފަތުރާ
ނަލަރީތި ހެދުމުން ޒީނަތްވެގެން
*ހުވަނދުން މުޅި މާހައުލު އެއްވަސް ކޮށްލާ
އީދޭ އައިމީ
*ކުދިބޮޑު އެންމެން ފޯރި ނަގާލާ

#2
ބޮޑުމަހުގެ ކުޅިވަރު މާލިނެށުން
*އެންމެން އެކީގާ ބައިވެރިވެލާ
ކުލަޖެހުމުގެ ފޯރިން އެކިއެކި ކުލައިން
*އީދުމަޖާ ކުލަގަދަ ކޮށްލާ
އީދޭ އައިމީ
*ކުދިބޮޑު އެންމެން ފޯރި ނަގާލާ

#3
އަމުނާލެވޭ ނަލަ ބަސްތަކާ އެކު
*ބޮޑުބެރު ސަގާފީ ފަރި ނެށުމާ
ހިތް ހެޔޮކަމާއެކު އިއްވާލަދޭމީ
*ނަލަ ރާގުރާގުން ތަހުނިޔާ
އީދޭ އައިމީ
*ކުދިބޮޑު އެންމެން ފޯރި ނަގާލާ`,

  englishLyrics: `#M
Eedhey aimi ufalugaa
*Ennmen joashaai majalugaa
Kiyamaa eedhu thahuniyaa
*Kudhibodu ennmen foari nagaalaa
#1
Gulhigen ekeegaa kudakudhin
*Sakaraathuge adu mulhithaa fathuraa
Nalareethi hedhumun zeenayyvegen
*Huvandhun mulhi maahaulu ehvas kohlaa
Eedhey aimee
*Kudhibodu ennmen foari nagaalaa
#2
Bodumahuge kulhivaru maalineshun
*Ennmen ekeegaa baiverivelaa
Kulajehumuge foarin ekieki kulain
*Eedhumajaa kulagadha kohlaa
Eedhey aimee
*Kudhibodu ennmen foari nagaalaa
#3
Amunaalevey nala basthakaa eku
*Boduberu sagaafee fari neshumaa
Hiyy heyokamaaeku ihvaaladheymee
*Nala raaguraagun thahuniyaa
Eedhey aimee
*Kudhibodu ennmen foari nagaalaa`,
},
{
  id: 173,
  name: `Haadha Loayybey`,
  genre: 'Taki',
  lyrics: `#M
ހާދަ ލޯތްބޭ ހާދަ ނަލައޭ
*ހިތް ނުދޭނީ ކާކުހޭ
ވާ ދެހިތުގާ ލޯބިއާލާ
*ކޮށް ނުދޭނީ ކާކުހޭ

#1
ޖާޒުބީ އަސަރުން ހިތާމޭ
*ފޫދިޔަސް ނޭނގޭނެޔޭ
ވާތިފަރި މޫނަށް ބެލީމާ
*މަސްތު ކޮށްލާ ފާނެޔޭ
ލޯބިން ބަލާތޯ ކަލާ
*ތީމާ މިވަރުވެސް ވަނީ
ޚޫރެކޭ ތިޔައީ މިބިމުގާ
*ހިތް ނުދޭނީ ކާކުހޭ

#2
މާދުރުން ފެނިގެން ތިފަރިމާ
*އިސްޖަހާލީ ކީއްވެހޭ
މާބުރާ ބަޅިނދާ ކޮކާލާ
*ދޯޅައެވަނީ ކީއްވެހޭ
ނާދޭ މިސާލުން ނަޒަރު
*އުޅުމުން ކުރާތީ އަސަރު
ވާ މިދުނިޔެއިން ލޯބި ހޯދަން
*ހިތް ނުދޭނީ ކާކުހޭ`,

  englishLyrics: `#M
Haadha loayybey haadha nalaey
*Hiyy nudheynee kaakuhey
Vaa dhehithugaa loabiaalaa
*Koh nudheynee kaakuhey
#1
Jaazubee asarun hithaamey
*Foodhiyas neyngeyneyey
Vaathifari moonah beleemaa
*Masthu kohlaa faaneyey
Loabin balaathoa kalaa
*Theemaa mivaruves vanee
Khoorekey thiyaee mibimugaa
*Hiyy nudheynee kaakuhey
#2
Maadhurun fenigen thifarimaa
*Isjahaalee keehvehey
Maaburaa balhindhaa kokaalaa
*Dhoalhaevanee keehvehey
Naadhey misaalun nazaru
*Ulhumun kuraathee asaru
Vaa midhuniyein loabi hoadhan
*Hiyy nudheynee kaakuhey`,
},
{
  id: 174,
  name: `Heevey Vebee`,
  genre: 'Nala',
  lyrics: `#M
ހީވޭ ވޭބީ މޭހީވާނޭ ވެބީ
*ވެވޭނީ ލޯބީގަ މީޖާނޭ ވެބީ
ދުރަށޭ ނުދާނީ ދިޔައިއްޔާ ބީވެދާނީ
*ދުރަށޭ ނުދާނީ ދިޔައިއްޔާ ބީވެދާނީ
*ހީވޭ ވޭބީ މޭހީވާނޭ ވެބީ

#1
ހަނދުމަނުވޭހޭ ފޮނިލޯބީގާ
*އޭރުގާ ވީހާއުފާ މާޒީގާ
ފާޅުކުރާ ސީދާ ބަހަކީ މިޔޭ މީގާ
*ވޭނީ ހިތާރޫހޭ ހިތާމައިގާ

#2
ސޭކުވެ އުޅޭ ކަރުނަ ފައިބާތީ
*އިންސާފާވަފާ ހަނދުމަ އާވާތީ
ހާލު މިއަދު ވޭނީ ޖައްސާ އުމުރުގާތީ
*އެންގީމޭ މިތާ ސާފު ވާނޭތީ`,

  englishLyrics: `#M
Heevey veybee meyheevaaney vebee
*Veveynee loabeega meejaaney vebee
Dhurashey nudhaanee dhiyaihyaa beevedhaanee
*Dhurashey nudhaanee dhiyaihyaa beevedhaanee
*Heevey veybee meyheevaaney vebee
#1
Handhumanuveyhey foniloabeegaa
*Eyrugaa veehaaufaa maazeegaa
Faalhukuraa seedhaa bahakee miyey meegaa
*Veynee hithaaroohey hithaamaigaa
#2
Seykuve ulhey karuna faibaathee
*Innsaafaavafaa handhuma aavaathee
Haalu miadhu veynee jahsaa umurugaathee
*Enngeemey mithaa saafu vaaneythee`,
},
{
  id: 175,
  name: `Jinni`,
  genre: 'Zamaanee',
  lyrics: `#M
ރީތި ނަލަނަލަ ރާގުގާ ރީތިފަރިފަރި ހިނގުމުގާ
*ބީހިނުލިޔަސް ވަސްދުވާ ރީތި ކަށިމަލު ފަރިވުމާ
ތީތަ މަލަކީ އުމުރުގާ ދީފަ ހުވަނދުން ހިތްފުރާ
*ހީލުމުން ކުލަވަރު މަޖާ މީރުވަސްތައް އެކުލަވާ

#1
މަލަރީތިކަން ދިރުންވާ
*ބަނަކަން ނުވޭ އަނދިރިވާ
ދަނޑަކުން ގޮވާން ކަނޑާފާ
*ވަޒަނަށް މުތީން ކިރާލާ
ނަލަނަލަ އަޑުން ގޮވާލާ
*ފަސްދިން ފަހުން ބަލާލާ

#2
ބެރެބެދި މާލުން މުއި ނަގާ
*ހެލަނބެލި ގަހުން މޫކަނޑާ
ލިނބެލި ކާށިން ތެޔޮނަގާ
*ކިޔެވެލި މުލުގާ ހުއްޓިލާ
އިންނަން ހިތާ ލޯމަރާ
*ދިން ވޭނުގާ ކެތްނުވާ

$M
ފަރިދާނުގާ މިރަށު ނިދާ
*ފަރިދާނުގާ މިރަށު ނިދާ
އަލި ރީތިކަން ފެތުރިފާ
*މަރިޔާދުގާ ވިދަވިދާ
ނޫރޭތީ ބެލީމޭ
*ފުރިހަމަ ރަތުން ދުށީމޭ
ކުރިކީލަފަދަ އޮމާންވާ
*ހުރިތާކުގާ ސިހުންވާ
ބަލަ ހިތާވޭ އޭއޭ ޖިންނީ
*ބަލަ ހިތާވޭ އޭއޭ ޖިންނީ
ގޮވާހިތްވެ އޭއޭ ޖިންނީ
*ގޮވާހިތްވެ އޭއޭ ޖިންނީ
ފެނޭ ކަހަލަ އޭއޭ ޖިންނީ
*ފެނޭ ކަހަލަ އޭއޭ ޖިންނީ

$1
ދަނޑި މަގު ވަލުން ގޮވާލާ
*އަލަދަނޑު ތެރޭން ބަލާލާ
ނަލަ ރީތިކަން ތިވާހާ
*އަލަމާތެރޭ ދިރުންވާ

$2
މިސްކިތް މަގުން އުތުރުގާ
*ވިސްނުންތަކުން ދެކުނުގާ
ބިސްމިން ފަށާ ހިނގާލާ
*ބިސްމިން ފަށާ ކިޔާލާ`,

  englishLyrics: `#M
Reethi nalanala raagugaa reethifarifari hingumugaa
*Beehinuliyas vasdhuvaa reethi kashimalu farivumaa
Theetha malakee umurugaa dheefa huvandhun hiyyfuraa
*Heelumun kulavaru majaa meeruvasthah ekulavaa
#1
Malareethikan dhirunnvaa
*Banakan nuvey andhirivaa
Dhandakun govaan kandaafaa
*Vazanah mutheen kiraalaa
Nalanala adun govaalaa
*Fasdhin fahun balaalaa
#2
Berebedhi maalun mui nagaa
*Helanbeli gahun mookandaa
Linbeli kaashin theyonagaa
*Kiyeveli mulugaa huhtilaa
Innan hithaa loamaraa
*Dhin veynugaa keyynuvaa
$M
Faridhaanugaa mirashu nidhaa
*Faridhaanugaa mirashu nidhaa
Ali reethikan fethurifaa
*Mariyaadhugaa vidhavidhaa
Nooreythee beleemey
*Furihama rathun dhusheemey
Kurikeelafadha omaannvaa
*Hurithaakugaa sihunnvaa
Bala hithaavey eyey jinnee
*Bala hithaavey eyey jinnee
Govaahiyyve eyey jinnee
*Govaahiyyve eyey jinnee
Feney kahala eyey jinnee
*Feney kahala eyey jinnee
$1
Dhandi magu valun govaalaa
*Aladhandu thereyn balaalaa
Nala reethikan thivaahaa
*Alamaatherey dhirunnvaa
$2
Miskiyy magun uthurugaa
*Visnunnthakun dhekunugaa
Bismin fashaa hingaalaa
*Bismin fashaa kiyaalaa`,
},
{
  id: 176,
  name: `Kalaa Heekurani`,
  genre: 'Taki',
  lyrics: `#M
ކަލާ ހީކުރަނީއޭ މިއީ ކާކު ކަމަށްހޭ
*ކާކު ކަމަށްހޭ މަގޭ ލައިލާގެ މާތް މަޖުނޫނެކޭ
ތިގޮތް ބަދަލެއް ނުކުރާނުހޭ ހައްގު ތެދެއްހޭ
*ހައްގު ތެދެއްހޭ އެހެންވިއްޔާ މިއީ ސީރީނެކޭ

#1
ފޮތިއަޅާ ބާހެދުމުގާ މައުޅެފާނަމޭ
*ތުނބުޅިޔާ ބޯވެސް ނުކޮށާ މަ އުޅެފާނަމޭ
ތަޅާ މެރިޔަސް މިދުނިޔޭގާ މޮޔަޔޭ ކިޔާ
*ތަޅާ މެރިޔަސް މިދުނިޔޭގާ މޮޔަޔޭ ކިޔާ
*މަމީ ތެދުވެރި ނިކަން ފަރުހާދެކޭ

#2
މަވެސް ލޯބީގަ ހިތްވަރު ކުރާނަން ރޮމުން
*އުފާ ޖަންނަތުގާ އަތުގާ ހިފައިގެން އުޅެން
އެދެން ގަލުގާ މަހާނައިގާ ލިޔެލަން މިހެން
*އެދެން ގަލުގާ މަހާނައިގާ ލިޔެލަން މިހެން
*ވެދިޔަ ލޯބިން ފިދާ ލައިލާއެކޭ`,

  englishLyrics: `#M
Kalaa heekuraneeey miee kaaku kamahhey
*Kaaku kamahhey magey lailaage maayy majunoonekey
Thigoyy badhaleh nukuraanuhey hahgu thedhehhey
*Hahgu thedhehhey ehenvihyaa miee seereenekey
#1
Fothialhaa baahedhumugaa maulhefaanamey
*Thunbulhiyaa boaves nukoshaa ma ulhefaanamey
Thalhaa meriyas midhuniyeygaa moyayey kiyaa
*Thalhaa meriyas midhuniyeygaa moyayey kiyaa
*Mamee thedhuveri nikan faruhaadhekey
#2
Maves loabeega hiyyvaru kuraanan romun
*Ufaa jannathugaa athugaa hifaigen ulhen
Edhen galugaa mahaanaigaa liyelan mihen
*Edhen galugaa mahaanaigaa liyelan mihen
*Vedhiya loabin fidhaa lailaaekey`,
},
{
  id: 177,
  name: `Kalhufoe Reyrey`,
  genre: 'Kaasi',
  lyrics: `#M
ދަނޑުމަތި ގޮމަޔާ ހަމަހަމަ ކުރުމަށް
*ކަޅުސޮރު އޮވެގެން ފަރިވަނީ
އުޑުމަތި ނުބަލާ ނަމަނަމަ ތަކުރާ
*ދަނމު ހިނގުމަށް ނުދަމާ ބަހީ

#1
ކަޅުފޮއެ ރޭރޭ ތުނޑިމަތި ފެނިފާ
*ހަނދުވަރު ދެކިލާ ހިތްވެފާ
މަގުކޮޅު ހޯދާ ދެކޮޅަށް ބަލަމުން
*ބަރުކޮށް ހެލިފާއޮވެ ދަނީ

#2
އިރުއޮއްސޭ ދަޅަޔަށް ބަލަމުންތާ
*ދިގުމަގު މެދުގާ ކަތިވެފާ
ހިތުތެރެ ރާވަ ދެއަތަށް ކިރެމުން
*ހިތުގަ ހިފާ ފުރަގަސްބެލީ

#3
މިގޮތަށް ހުއްޓާ އެއްކަލަ ގޮލަޔަށް
*ފިޔޮކެއް ބުނިއަޑު އިވިލަނީ
ބަލަ ދޮންތަކުރާ ކަމަކުނުދާނޭ
*ހަމަ ތިގޮތަށް ހުއްޓަސް މިރޭ

#4
ހޭބޯނާރާ ކަމަކުތެރަށް ބޯ
*ވޭތޯ ބެލިޔަސް ހަމަހިލާ
ވިދުވަރު ފެނިފާ ދަޅަޔަށް ހެއްލޭ
*ހިނދުކޮޅު ދިޔުމުން ފޫހިވޭ`,

  englishLyrics: `#M
Dhandumathi gomayaa hamahama kurumah
*Kalhusoru ovegen farivanee
Udumathi nubalaa namanama thakuraa
*Dhanmu hingumah nudhamaa bahee
#1
Kalhufoe reyrey thundimathi fenifaa
*Handhuvaru dhekilaa hiyyvefaa
Magukolhu hoadhaa dhekolhah balamun
*Barukoh helifaaove dhanee
#2
Iruohsey dhalhayah balamunnthaa
*Dhigumagu medhugaa kathivefaa
Hithuthere raava dheathah kiremun
*Hithuga hifaa furagasbelee
#3
Migothah huhtaa ehkala golayah
*Fiyokeh buniadu ivilanee
Bala dhonnthakuraa kamakunudhaaney
*Hama thigothah huhtas mirey
#4
Heyboanaaraa kamakutherah boa
*Veythoa beliyas hamahilaa
Vidhuvaru fenifaa dhalhayah hehley
*Hindhukolhu dhiyumun foohivey`,
},
{
  id: 178,
  name: `Kiyaahoob`,
  genre: 'Kaasi',
  lyrics: `#M
ކިޔާޙޫބް ލަގްތިހޯ
*ބަޑި ސުންދަރް ދިކްތީހޯ
ތުމް ޕިޔާރްސެ ޕިޔާރީހޯ
*ތުމް ޖާން ހަމާރީހޯ
ޕިރްސެ ކަހޯ ކެހެތެރަހޯ
*އައްޗާ ލަގްތާހޭ
ޖީވަންކާ ހަރްސަޕްނާ
*އަބުސައްޗާ ލަގްތާހޭ

#1
ތާރީފް ކަނރޯގޭ ކަބްތަކު ބޮލޮ ކަބްތަކު
*މެރެސީނޭމޭ ސާސްރަނހޭގީ ޖަބްތަކު
ކަބްތަކުމެ ރަނހޫގީ މަނުމީ ހާނ މަނުމީ
*ސޫރަޖު ހޯގާ ޖަބްތަކު ނީލެ ގަގަންމޭ

#2
ކުޝްހޯނަ މުޖޭ ތުމް ޕާކަރު މުޖެ ޕާކަރް
*ޕިޔާރސީ ދިލްކޯ އާޖްމިލާހޭ ސާގަރް
ކިޔާ ދިލްމެހެ އޯއުރު ތަމަންނާ ހޭ ތަމަންނާ
*ހަރް ޖީވަންމޭ ތުމް މެހިރީ ހި ބަލްމާ

-
$M
ރަމަޔާ ވަސްތާވައިޔާ ރަމަޔާ ވަސްތާވައިޔާ
*ރަމަޔާ ވަސްތާވައިޔާ ރަމަޔާ ވަސްތާވައިޔާ
މެނެދިލް ތުޖްކޮދިޔާ މެނެދިލް ތުޖްކޮދިޔާ
*ރަމަޔާ ވަސްތާވައިޔާ ރަމަޔާ ވަސްތާވައިޔާ

$1
ނޭއިނޯމެތީ ޕިޔާރްކީ ރޯޝަނީ
*ތެރޭ އާކޯމެޔޭ ދިނިޔަދާރީ ނަތީ ތެރޭ އާކޯމެޔޭ ދިނިޔަދާރީ ނަތީ
ތޫ އޯއުގެތާ ތެރާ ދިލް އޯއުގެތާ
*ތެރޭ މަންމޭޔެ މީތީ ކަޓާރީ ނަތީ ތެރޭ މަންމޭޔެ މީތީ ކަޓާރީ ނަތީ
މެއިޖޮތުކް ޕާއުންތުކިޔާ އާޖްޕަޗް ޕާއުންރުކިޔާ
*މެއިޖޮތުކް ޕާއުންތުކިޔާ އާޖްޕަޗް ޕާއުންރުކިޔާ

$2
އުޝްދޭޝުމޭ ތެރޭ ޕަރްދޭޝުމޭ
*ސޮނޭ ޗާންދީކެ ބަދަލޭމެ ބިކްތެހެ ދިލް ސޮނޭ ޗާންދީކެ ބަދަލޭމެ ބިކްތެހެ ދިލް
އިސްގާނވޮމޭ ދަރްދުކީ ޗާންވޮމޭ
*ފިޔާރުކީ މާނު ޕަރްހީ ތަޑަކްތޭހެ ދިލް ފިޔާރުކީ މާނު ޕަރްހީ ތަޑަކްތޭހެ ދިލް
ޗާންޗާ ރޯކެޓަލޭ ރާތްޔޭ ގާތިޗަލޭ
*ޗާންޗާ ރޯކެޓަލޭ ރާތްޔޭ ގާތިޗަލޭ

$3
ޔާދްއާތީރަހީ ދިލްދުކާތީ ރަހޭ
*އަޕްނެ މަންކޯ މަނާނާނަ އާޔާހަމޭ އަޕްނެ މަންކޯ މަނާނާނަ އާޔާހަމޭ
ތޫނަ އާއޭތޯކިޔާ ބޫލުޖާއޭތޯކިޠާ
*ޕިޔާރުކަރްކޭ ބުލާނާނަ އާޔާހަމޭ ޕިޔާރުކަރްކޭ ބުލާނާނަ އާޔާހަމޭ
ވަހިސޭ ދޫރުސެހީ ތުބިޔޭ ކެހެދެކަބީ
*ވަހިސޭ ދޫރުސެހީ ތުބިޔޭ ކެހެދެކަބީ

$4
ރަސްތާވޮހީ އަރް މުސާފިރް ވޮހީ
*އޭކްތާރާ ނަގާނޭ ކަހާން ޗުޕްގަޔާ އޭކްތާރާ ނަގާނޭ ކަހާން ޗުޕްގަޔާ
ދުންޔާވޮހީ ދުންޔާވާލޭ ވޮހީ
*ކޮއީ ކިޔާޖާނެ ކިސްކާ ޖަހާން ލުޓްގަޔާ ކޮއީ ކިޔާޖާނެ ކިސްކާ ޖަހާން ލުޓްގަޔާ
މެރި އާނކޯމެރަހޭ ކޯންޖޯ ތުޖްސެރަހޭ
*މެރި އާނކޯމެރަހޭ ކޯންޖޯ ތުޖްސެރަހޭ`,

  englishLyrics: `#M
Kiyaahoob lagthihoa
*Badi sunndhar dhiktheehoa
Thum piyaarse piyaareehoa
*Thum jaan hamaareehoa
Pirse kahoa kehetherahoa
*Ahchaa lagthaahey
Jeevannkaa harsapnaa
*Abusahchaa lagthaahey
#1
Thaareef kanroagey kabthaku bolo kabthaku
*Mereseeneymey saasranaheygee jabthaku
Kabthakume ranhoogee manumee haan manumee
*Sooraju hoagaa jabthaku neele gagannmey
#2
Kushhoana mujey thum paakaru muje paakar
*Piyaarasee dhilkoa aajmilaahey saagar
Kiyaa dhilmehe oauru thamannaa hey thamannaa
*Har jeevannmey thum mehiree hi balmaa
-
$M
Ramayaa vasthaavaiyaa ramayaa vasthaavaiyaa
*Ramayaa vasthaavaiyaa ramayaa vasthaavaiyaa
Menedhil thujkodhiyaa menedhil thujkodhiyaa
*Ramayaa vasthaavaiyaa ramayaa vasthaavaiyaa
$1
Neyinoamethee piyaarkee roashanee
*Therey aakoameyey dhiniyadhaaree nathee therey aakoameyey dhiniyadhaaree nathee
Thoo oaugethaa theraa dhil oaugethaa
*Therey mannmeyye meethee kataaree nathee therey mannmeyye meethee kataaree nathee
Meijothuk paaunnthukiyaa aajpach paaunnrukiyaa
*Meijothuk paaunnthukiyaa aajpach paaunnrukiyaa
$2
Ushdheyshumey therey pardheyshumey
*Soney chaanndheeke badhaleyme bikthehe dhil soney chaanndheeke badhaleyme bikthehe dhil
Isgaanvomey dhardhukee chaannvomey
*Fiyaarukee maanu parhee thadaktheyhe dhil fiyaarukee maanu parhee thadaktheyhe dhil
Chaannchaa roaketaley raayyyey gaathichaley
*Chaannchaa roaketaley raayyyey gaathichaley
$3
Yaadhaatheerahee dhildhukaathee rahey
*Apne mannkoa manaanaana aayaahamey apne mannkoa manaanaana aayaahamey
Thoona aaeythoakiyaa boolujaaeythoakithaa
*Piyaarukarkey bulaanaana aayaahamey piyaarukarkey bulaanaana aayaahamey
Vahisey dhoorusehee thubiyey kehedhekabee
*Vahisey dhoorusehee thubiyey kehedhekabee
$4
Rasthaavohee ar musaafir vohee
*Eykthaaraa nagaaney kahaan chupgayaa eykthaaraa nagaaney kahaan chupgayaa
Dhunnyaavohee dhunnyaavaaley vohee
*Koee kiyaajaane kiskaa jahaan luttgayaa koee kiyaajaane kiskaa jahaan luttgayaa
Meri aankoamerahey koannjoa thujserahey
*Meri aankoamerahey koannjoa thujserahey`,
},
{
  id: 179,
  name: `Kuraathidhen Asaru`,
  genre: 'Nala',
  lyrics: `#M
ކުރާތީ ދެން އަސްރު ނުދާށޭ ޔާރާ ހޯދީމޭ
*ކުރާތީ ދެން އަސްރު ނުދާށޭ ޔާރާ ހޯދީމޭ
އެހީ ދީފާނޭ ޔާރެއް ލޯބިން ކަލާ ހޯދާށޭ
*އެހީ ދީފާނޭ ޔާރެއް ލޯބިން ކަލާ ހޯދާށޭ
މިރޭ ދެންދޭ އަސަރު ކުރީމާ ގޮސް ނިދާލާށޭ
*މިރޭ ދެންދޭ އަސަރު ކުރީމާ ގޮސް ނިދާލާށޭ
އެހީ ދީފާނޭ ޔާރެއް ލޯބިން ކަލާ ހޯދާށޭ
*އެހީ ދީފާނޭ ޔާރެއް ލޯބިން ކަލާ ހޯދާށޭ

#1
ޖިސްމު ޒުލްމެއްގަ ވާތީއޭ ސަލާމަތްވީ ކުރަން
*ޖިސްމު ޒުލްމެއްގަ ވާތީއޭ ސަލާމަތްވީ ކުރަން
ހިތް އެދެންޏާ ބުނަންހޭ މަލާ މާތްވެސް ކުރަން
*ހިތް އެދެންޏާ ބުނަންހޭ މަލާ މާތްވެސް ކުރަން
ހާދަ ފިކުރާ ވެއްޖޭ މިތުރާއޭ ލޯބިން ވާތީތާއޭ
*ހާދަ ފިކުރާ ވެއްޖޭ މިތުރާއޭ ލޯބިން ވާތީތާއޭ

#2
ކިޔާދީ ފޫހިވާނޭ ތާދޯ ބަލާލީގޮތް މަށަށް
*ކިޔާދީ ފޫހިވާނޭ ތާދޯ ބަލާލީގޮތް މަށަށް
ދާނެތާ ލޯބިވާތީއެ ހަދާލީގޮތް މަށަށް
*ދާނެތާ ލޯބިވާތީއެ ހަދާލީގޮތް މަށަށް
ކުރީމާ އާދޭހޭ ހަނދާނޭ ވާވަރު ވީމާތާއޭ
*ކުރީމާ އާދޭހޭ ހަނދާނޭ ވާވަރު ވީމާތާއޭ`,

  englishLyrics: `#M
Kuraathee dhen asru nudhaashey yaaraa hoadheemey
*Kuraathee dhen asru nudhaashey yaaraa hoadheemey
Ehee dheefaaney yaareh loabin kalaa hoadhaashey
*Ehee dheefaaney yaareh loabin kalaa hoadhaashey
Mirey dhenndhey asaru kureemaa gos nidhaalaashey
*Mirey dhenndhey asaru kureemaa gos nidhaalaashey
Ehee dheefaaney yaareh loabin kalaa hoadhaashey
*Ehee dheefaaney yaareh loabin kalaa hoadhaashey
#1
Jismu zulmehga vaatheeey salaamayyvee kuran
*Jismu zulmehga vaatheeey salaamayyvee kuran
Hiyy edhennyaa bunanhey malaa maayyves kuran
*Hiyy edhennyaa bunanhey malaa maayyves kuran
Haadha fikuraa vehjey mithuraaey loabin vaatheethaaey
*Haadha fikuraa vehjey mithuraaey loabin vaatheethaaey
#2
Kiyaadhee foohivaaney thaadhoa balaaleegoyy mashah
*Kiyaadhee foohivaaney thaadhoa balaaleegoyy mashah
Dhaanethaa loabivaatheee hadhaaleegoyy mashah
*Dhaanethaa loabivaatheee hadhaaleegoyy mashah
Kureemaa aadheyhey handhaaney vaavaru veemaathaaey
*Kureemaa aadheyhey handhaaney vaavaru veemaathaaey`,
},
{
  id: 180,
  name: `Loatholhey`,
  genre: 'Nala',
  lyrics: `#M
މިއަދު ލޯތޮޅެ ލޯތޮޅެ މަގޭލޯތޮޅޭ
*ފިނިވާތީއޭ މިހާރު މިދެފައި އޮޅޭ
ނާރުހިތުގެ ސަނގަލާ ޖެހެނީބާ
*ކީއްހެވީ ބުނެ ކީއްހެވީ
ބުނެ ބުނެ ބުނެ ބުނެ
*ކީއްހެވީ
މޮޔަޔާ ކަލޭނޭ
*މިއަދު ލޯތޮޅެ ލޯތޮޅެ މަގޭލޯތޮޅޭ ފިނިވާތީއޭ މިހާރު މިދެފައި އޮޅޭ

#1
ބާމު ހަކައިދޭށޭ އެސްފިޔައިގެ މަތީގާ ކިރު ހަކުރާ މާމުޔާ
*ބިރު ހިތުގެ ފިލައިދާނޭ
ނޭވާ ތާށިވޭހެ ކަނދުރާ ގުދުވޭހޭ
*ޝައިތޯނާ ފަހާލަން ބޮނޑިތާން ކުރަމާހޭ
ދާހިތްލަނީހޭ ވިހެން ފަންކާ ކޮބާހޭ
*ފާލެއް ބަލާލަމާ ވާގޮތް އެނގޭތޯ

#2
ކަންޖަށް ކިރުވާނަމެ މީ ނަދުރެއް ބުނާ ޗާލޫ ލޭކޮކާ
*ވޭނުން ވާވަރުން
ލެންސެއް ލައްވާ މިލޯ ނަލަވާނެޔޭ
*އިޝްޤު ބަލަން މޮޅު ލެޕްޓޮޕް ގަނެދީ
ލެންސާއެކީގާ ނޮކިޔާ އެކޭމީ
*އޯޓޫ މަނޫނީ ބޭނުން ނެތީއޭ
އާފަލެއް ފާ ފޭރެއް މަގޭ ފާއަނބޭ
*ތީތުންފަތޭ ކަންފަތޭ ސަޅި ނޭފަތޭ`,

  englishLyrics: `#M
Miadhu loatholhe loatholhe mageyloatholhey
*Finivaatheeey mihaaru midhefai olhey
Naaruhithuge sangalaa jeheneebaa
*Keehhevee bune keehhevee
Bune bune bune bune
*Keehhevee
Moyayaa kaleyney
*Miadhu loatholhe loatholhe mageyloatholhey finivaatheeey mihaaru midhefai olhey
#1
Baamu hakaidheyshey esfiyaige matheegaa kiru hakuraa maamuyaa
*Biru hithuge filaidhaaney
Neyvaa thaashiveyhe kandhuraa gudhuveyhey
*Shaithoanaa fahaalan bondithaan kuramaahey
Dhaahiyylaneehey vihen fannkaa kobaahey
*Faaleh balaalamaa vaagoyy engeythoa
#2
Kannjah kiruvaaname mee nadhureh bunaa chaaloo leykokaa
*Veynun vaavarun
Lennseh lahvaa miloa nalavaaneyey
*Ishqu balan molhu laptop ganedhee
Lennsaaekeegaa nokiyaa ekeymee
*Oatoo manoonee beynun netheeey
Aafaleh faa feyreh magey faaanbey
*Theethunnfathey kannfathey salhi neyfathey`,
},
{
  id: 181,
  name: `Manjey Manjey`,
  genre: 'Nala',
  lyrics: `#M
މަންޖޭ މަންޖޭ މަންޖޭ މަންޖޭ
*ނާޒުކުވި މޫރިތި ގޮމާ
މަސްތެއްވެޔޭ ޖާދުވީ މޫނުގާ
*ހިތްވެސް އޮބާލައިފިޔޭ

#1
ކަމަނާ ލޯބީގަ ނުފުދޭ ތިވަރު
*މާ ދުރުދުރުން ދޭ އަސަރު
ދޭށޭ ކަނބާ ނަލަ އިޝްގީ ނަޒަރު
*ފަރި ލޮލުގަވާ ފުންއަސަރު
ރޭގަނޑުގެ ތިޔަ މެހެމާނަށް މަގޭ
*ހިތްވެސް އޮބާލައިފިޔޭ

#2
މަސްތީ ތިއީ ނަލަ ރާނީއެކޭ
*ދީވާނަ ކުރުވައިފިޔޭ
ހުރެ އަންދާލަޔޭ މޭ މިހިތާއެކީ
*ސަޅިކަން އެހާވަރުވެޔޭ
ރުހެވިއްޖެޔޭ ފެނުމާއެކު ކަލާ
*ހިތްވެސް އޮބާލައިފިޔޭ

#3
ފޮނި ދެން ނުކުރާށޭ ތިވަރަށް މިހިތް
*ތައުރީފު ކޮށްކޮށް މިހިތް
ބަހަކުން ތިބުނެލާ ލެނބިދާނެޔޭ
*ބެހިގެން ހިނގައިދާނެ ހިތް
ކުރުމުން ހުޝާމަދު ތިވަރަށް ތިހާ
*ހިތްވެސް އޮބާލާނެޔޭ`,

  englishLyrics: `#M
Mannjey mannjey mannjey mannjey
*Naazukuvi moorithi gomaa
Masthehveyey jaadhuvee moonugaa
*Hiyyves obaalaifiyey
#1
Kamanaa loabeega nufudhey thivaru
*Maa dhurudhurun dhey asaru
Dheyshey kanbaa nala ishgee nazaru
*Fari lolugavaa funnasaru
Reyganduge thiya mehemaanah magey
*Hiyyves obaalaifiyey
#2
Masthee thiee nala raaneeekey
*Dheevaana kuruvaifiyey
Hure anndhaalayey mey mihithaaekee
*Salhikan ehaavaruveyey
Ruhevihjeyey fenumaaeku kalaa
*Hiyyves obaalaifiyey
#3
Foni dhen nukuraashey thivarah mihiyy
*Thaureefu kohkoh mihiyy
Bahakun thibunelaa lenbidhaaneyey
*Behigen hingaidhaane hiyy
Kurumun hushaamadhu thivarah thihaa
*Hiyyves obaalaaneyey`,
},
{
  id: 182,
  name: `Mas Kahkan`,
  genre: 'Taki',
  lyrics: `#M
މަސްކައްކަން ބަދިގެ ތެރޭގާ
*ތެލިދޮންނަން އަތިރިމަތީގާ
އުޅެއުޅެފާ މާލެދިޔައިމާ
*ކަނޑިކި ބުރިލީ ހަނދާން ނެތީހޭ

#1
އުސް ފައިވާނަކަށް އަރާފާ
*ކުރުތާއެއް ފަހައިގެން ލާފާ
މޯބައިލް ފޯން އަތުން ހިފާފާ
*ޖިންސާ ޓޮޕް ލެވެން ފެށީމާ
ޖިންސާ ޓޮޕް ލެވެން ފެށީމާ
*ކަނޑިކި ބުރިލީ ހަނދާން ނެތީހޭ

#2
ސައިކަލުގާ ދެބުރު ޖަހާފާ
*އިންނަން ގިނަ ކުދިން އެހީމާ
ކާރެއްގާ ހަބުރު ޖަހާފާ
*އިންނަން ގިނަ ކުދިން އެހީމާ
ރެސްޓޯރެންޓް ތަކުން ކެއީމާ
*ކަނޑިކި ބުރިލީ ހަނދާން ނެތީހޭ

#3
ކަންފަތުގާ ދެބޮޅު އެލުވާ
*ބޯރަތްކޮށް ދެފައި ކެވެލިލާ
ލޯގަނޑަކުން ތިސޫރަ ފެނިފާ
*ކަނޑިކި ބުރިލީ ހަނދާން ނެތީހޭ`,

  englishLyrics: `#M
Maskahkan badhige thereygaa
*Thelidhonnan athirimatheegaa
Ulheulhefaa maaledhiyaimaa
*Kandiki burilee handhaan netheehey
#1
Us faivaanakah araafaa
*Kuruthaaeh fahaigen laafaa
Moabail foan athun hifaafaa
*Jinnsaa top leven fesheemaa
Jinnsaa top leven fesheemaa
*Kandiki burilee handhaan netheehey
#2
Saikalugaa dheburu jahaafaa
*Innan gina kudhin eheemaa
Carehgaa haburu jahaafaa
*Innan gina kudhin eheemaa
Restaurant thakun keeemaa
*Kandiki burilee handhaan netheehey
#3
Kannfathugaa dhebolhu eluvaa
*Boarayykoh dhefai kevelilaa
Loagandakun thisoora fenifaa
*Kandiki burilee handhaan netheehey`,
},
{
  id: 183,
  name: `Meri Loa`,
  genre: 'Nala',
  lyrics: `#M
ދިރުނބަލު ކޮޅުކަނި ކުރެދިމަތީ
*ފައި ވިއްދާ އިނދެލާ ހުސެންދަރީ
ލޮނު ވިއްސާވިއްސާ ލޮނުން ޖަރީ
*ވެވި އަސްތާ ފައްކާވޭ

#1
ކަފަވިލާ ތަކުތެރޭ ފުރޭނިގެން ދާ ހަނދުވަރުން
*ކަފަވިލާ ތަކުތެރޭ ފުރޭނިގެން ދާ ހަނދުވަރުން
އުތުރިލާ ކަޅު ކަނޑުމަތީ މުޅިފަޒާ ވެވިދޭ ޖަރީ
*އަލިކަން ދިއްލާލަ
ފިނިފިނިން ފިނިރޯޅިން ވައި ބީހިލާ ތޮށި ކަނޑުމަތީ
*މެރި މެރިލޯ މެރިލޯ ވަމުންދަނީ ވެވިއަސްތާ ފައްކާވޭ

#2
އުދުހެމުން ވައިރޯޅިތަށް ކުދިވިލާތަކު ފުރޮޅިލާ
*އުދުހެމުން ވައިރޯޅިތަށް ކުދިވިލާތަކު ފުރޮޅިލާ
ފިރުކެމުން އައިސް ފެނުތެރޭ ބޮކިޖަހާ ކުދި ބޮކިއަރާ
*ލޮނުފޮދު ވިއްސާލަ
ފެންތިކިން މޭތުރުއަޅާ ހީނަގާ ގުޑުގުޑުއަރާ
*މެރި މެރިލޯ މެރިލޯ ވަމުންދަނީ ވެވިއަސްތާ ފައްކާވޭ

#3
ދުރުދުރުންވާ ރަށްތަކުން ކަޅުކުލައިން ފޭދޭއަރާ
*ދުރުދުރުންވާ ރަށްތަކުން ކަޅުކުލައިން ފޭދޭއަރާ
ހިޔަނިހެން ވެރިވާތަނާ އަލިކަމުން އަލިކަންއަރާ
*އިތުރަށް ވިދުވާލާ
މާދުރުން ކުލަބޮކިއަރާ އިންރަށުން ރަންކުލައަރާ
*މެރި މެރިލޯ މެރިލޯ ވަމުންދަނީ ވެވިއަސްތާ ފައްކާވޭ`,

  englishLyrics: `#M
Dhirunbalu kolhukani kuredhimathee
*Fai vihdhaa indhelaa husenndharee
Lonu vihsaavihsaa lonun jaree
*Vevi asthaa fahkaavey
#1
Kafavilaa thakutherey fureynigen dhaa handhuvarun
*Kafavilaa thakutherey fureynigen dhaa handhuvarun
Uthurilaa kalhu kandumathee mulhifazaa vevidhey jaree
*Alikan dhihlaala
Finifinin finiroalhin vai beehilaa thoshi kandumathee
*Meri meriloa meriloa vamunndhanee veviasthaa fahkaavey
#2
Udhuhemun vairoalhithah kudhivilaathaku furolhilaa
*Udhuhemun vairoalhithah kudhivilaathaku furolhilaa
Firukemun ais fenutherey bokijahaa kudhi bokiaraa
*Lonufodhu vihsaala
Fennthikin meythurualhaa heenagaa guduguduaraa
*Meri meriloa meriloa vamunndhanee veviasthaa fahkaavey
#3
Dhurudhurunnvaa rahthakun kalhukulain feydheyaraa
*Dhurudhurunnvaa rahthakun kalhukulain feydheyaraa
Hiyanihen verivaathanaa alikamun alikannaraa
*Ithurah vidhuvaalaa
Maadhurun kulabokiaraa innrashun rannkulaaraa
*Meri meriloa meriloa vamunndhanee veviasthaa fahkaavey`,
},
{
  id: 184,
  name: `Nereyshe Hiyyvaru`,
  genre: 'Nala',
  lyrics: `#M
ނެރޭށެ ހިތްވަރު ކަށީގެ މަޑުން
*ނެރޭށެ ބުންވަރު ހިތާ ނަފުސުން
ނެރޭށެ ވާނީ ފިސާރި އަލުން
*ނެރޭށެ ޖޯރެއް ލެޔާއި ދަލުން
މިކަނޑު ހުރަސްކޮށް ބަނދަރު ހިފާނަން
*މިހިތްވަރާއެކު ދަތުރު ކުރާނަން

#1
މިކަނޑުގެ ލޮނުގަނޑު ކަފާލަދޭނަން
*މިކަނޑުގެ ލޮނުގަނޑު ކަފާލަދޭނަން
މިއޮޑި ފެނުންވެސް އުފުލާލަދޭނަން
*މިއޮޑި ފެނުންވެސް އުފުލާލަދޭނަން
މިއޮޑި މިހިނދުވެސް އުދުއްސާލަ ދޭނަން
*ނެރޭށެ ހިތްވަރު ކަށީގެ މަޑުން ނެރޭށެ ބުންވަރު ހިތާ ނަފުސުން

#2
ގަލާއި ގިރިފަރ ދިމާވިޔަސް ހޮޔެ
*ގަލާއި ގިރިފަރ ދިމާވިޔަސް ހޮޔެ
ވަޔާއި އޮއިވަރު ބަދަލު ވިޔަސް ހެޔޮ
*ވަޔާއި އޮއިވަރު ބަދަލު ވިޔަސް ހެޔޮ
އަމާޒު މުރިނގަށް މިއޮޑި ފުރާނަން
*ނެރޭށެ ހިތްވަރު ކަށީގެ މަޑުން ނެރޭށެ ބުންވަރު ހިތާ ނަފުސުން

#3
ފެނަށް މިއޮޑި މާ ފަސޭހަވާނޭ
*ފަސޭހަވާނޭ ފަސޭހަވާނޭ
ކަނޑަށް މިއޮޑި މާ ގަދަވެ ހިފާނޭ
*ކަނޑަށް މިއޮޑި މާ ގަދަވެ ހިފާނޭ
ފެނަށް މިއޮޑި ދުވެލިހަލި ކުރާނަން
*ނެރޭށެ ހިތްވަރު ކަށީގެ މަޑުން ނެރޭށެ ބުންވަރު ހިތާ ނަފުސުން

#4
އޮތީހިފަން ގައިމު އެއްބަނދަރެކޭ
*އޮތީހިފަން ގައިމު އެއްބަނދަރެކޭ
އެކީ އެކުވެދާންވި އެއް ބަނދަރެކޭ
*އެކީ އެކުވެދާންވި އެއް ބަނދަރެކޭ
އޮތީމިގޮތުގާ ވެ ހާދަމޮޅެކޭ
*ނެރޭށެ ހިތްވަރު ކަށީގެ މަޑުން ނެރޭށެ ބުންވަރު ހިތާ ނަފުސުން`,

  englishLyrics: `#M
Nereyshe hiyyvaru kasheege madun
*Nereyshe bunnvaru hithaa nafusun
Nereyshe vaanee fisaari alun
*Nereyshe joareh leyaai dhalun
Mikandu huraskoh bandharu hifaanan
*Mihiyyvaraaeku dhathuru kuraanan
#1
Mikanduge lonugandu kafaaladheynan
*Mikanduge lonugandu kafaaladheynan
Miodi fenunnves ufulaaladheynan
*Miodi fenunnves ufulaaladheynan
Miodi mihindhuves udhuhsaala dheynan
*Nereyshe hiyyvaru kasheege madun nereyshe bunnvaru hithaa nafusun
#2
Galaai girifar dhimaaviyas hoye
*Galaai girifar dhimaaviyas hoye
Vayaai oivaru badhalu viyas heyo
*Vayaai oivaru badhalu viyas heyo
Amaazu muringah miodi furaanan
*Nereyshe hiyyvaru kasheege madun nereyshe bunnvaru hithaa nafusun
#3
Fenah miodi maa faseyhavaaney
*Faseyhavaaney faseyhavaaney
Kandah miodi maa gadhave hifaaney
*Kandah miodi maa gadhave hifaaney
Fenah miodi dhuvelihali kuraanan
*Nereyshe hiyyvaru kasheege madun nereyshe bunnvaru hithaa nafusun
#4
Otheehifan gaimu eh bandharekey
*Otheehifan gaimu eh bandharekey
Ekee ekuvedhaannvi eh bandharekey
*Ekee ekuvedhaannvi eh bandharekey
Otheemigothugaa ve haadhamolhekey
*Nereyshe hiyyvaru kasheege madun nereyshe bunnvaru hithaa nafusun`,
},
{
  id: 185,
  name: `Prem Prem`,
  genre: 'Nala',
  lyrics: `#M
ލޯމެރި ހިތްއުފާ ކުރަން މަގަބޫލުހޭ
ތިޔަހިޔާލު ކުރާ ހާ ނަސީބުވޭ
ޕްރޭމް ޕްރޭމް ޕްރޭމް ޕްރޭމް
ޕްރޭމް ޕްރޭމް ޕްރޭމް ޕްރޭމް

#1
ޔާރާގޮސް ދެން ބަލަ ފޮރުވާށޭ
*މާފުކުރީމެ ހިތާ ރުހިލާށޭ
އާދެ މިލޯބި އަބަދު ހޯދާށޭ
*ޖާނުފިދާވަމެ ދެންހެ ބުނާށޭ
ޔާރު އެދޭނަމަ އަތުގަ ހިފާށޭ
*ތިހުރިހާލު ނިކަން ކިޔާބަލާށޭ
ފުރިގެން ފުރި ޖާން ފުރިލޯބިކުރީ ޔާރުނޫން
*ހިތުގާ ތިޔަނަން ފެވުމުން ކުރީމަސްތު ނޫން
ޤަދަރުކުރިވަރު ނުބުނެލީ ކީއްވެހޭ
*ތިޔަހިޔާލު ކުރާ ހާ ނަސީބުވޭ

#2
ކަރުނަ އޮހެންޏާ މީ ފަރުވާއޭ
*ހިތުގެ އެހީތީ އޭގެ ނަފާއޭ
ހާލުގެ މިބުނާ ދޭށެ ވަފާއޭ
*ފާރުވި ހިތް އެދެވޭނެ ޝިފާއޭ
އަދު ކުރެހިން މުޅިލޯބި އެޖާނާ
*ކުރި ބިނާތައް އެކީ ޒިންދަގީގާ
ވެސިހުން ވެ ބިރުން މުޅިޖާން ތިގޮތަށް ކިޔާލުމުން
*ރާހަތެކެ ކުރީ ލަދުރަކިނުވެ ބީހިލުމުން
ތިހުރި ވިންދުން ފޫދޭހާ ޢަބީރުހޭ
*ތިޔަހިޔާލު ކުރާ ހާ ނަސީބުވޭ`,

  englishLyrics: `#M
Loameri hiyyufaa kuran magabooluhey
*Thiyahiyaalu kuraa haa naseebuvey
Preym preym preym preym
*Preym preym preym preym
#1
Yaaraagos dhen bala foruvaashey
*Maafukureeme hithaa ruhilaashey
Aadhe miloabi abadhu hoadhaashey
*Jaanufidhaavame dhennhe bunaashey
Yaaru edheynama athuga hifaashey
*Thihurihaalu nikan kiyaabalaashey
Furigen furi jaan furiloabikuree yaarunoon
*Hithugaa thiyanan fevumun kureemasthu noon
Qadharukurivaru nubunelee keehvehey
*Thiyahiyaalu kuraa haa naseebuvey
#2
Karuna ohennyaa mee faruvaaey
*Hithuge eheethee eyge nafaaey
Haaluge mibunaa dheyshe vafaaey
*Faaruvi hiyy edheveyne shifaaey
Adhu kurehin mulhiloabi ejaanaa
*Kuri binaathah ekee zindhageegaa
Vesihun ve birun mulhijaan thigothah kiyaalumun
*Raahatheke kuree ladhurakinuve beehilumun
Thihuri vinndhun foodheyhaa abeeruhey
*Thiyahiyaalu kuraa haa naseebuvey`,
},
{
  id: 186,
  name: `Seedhahey Balanvaanee`,
  genre: 'Nala',
  lyrics: `#M
ސީދާހޭ ބަލަން ވާނީ ތިހެން ކުރިމަތިން އައިސް
*ކުރީބާރު ކައިރިން ބަލާލީ ކަމުން
ދާން ބޭނުން ތާކަށް ދާށޭ އެކީގާ ފަހަތުން ނައިސް
*ރުޅިންވާ ތިޒާތަށް އުޅޭނީ މުޅިން

#1
އަސްތާ ކަސްތޫރިން ލޮލާ މޫނާ ވަސް ކަނދުރާ
*ލޯބިން މަސްތޭވާނީ އަންނާށޭ ޔާރާ
ތިކިޔާ ފޮނިފޮނި ރާގާ ބުނަން ތިކުރާ ބާރާ
*އަހަން ތިކިޔާ ބަސްތައް ހިތަށް އަމުދުން ނާރާ
*އަހާލަން ނެތީހޭ ކިޔާދޭ ކަމުން

#2
އަންނާށޭ އާދޭ އެކީ މޫދަށް ގޮސްލަންޏާ
*ދާހިތް ނޫންހޭ ވާނީ ކަލާވެސް ދަންޏާ
ދޭބަލަ އެކުގާ ނޫނަސް އެހާ ބޭނުން ވަންޏާ
*ކާކުހޭ ހުއްޓާލާށެ ބުނީ ދާހިތް ވަންޏާ
*ނުދާންހޭ ހުރީވެސް އަހާލީ ކަމުން`,

  englishLyrics: `#M
Seedhaahey balan vaanee thihen kurimathin ais
*Kureebaaru kairin balaalee kamun
Dhaan beynun thaakah dhaashey ekeegaa fahathun nais
*Rulhinnvaa thizaathah ulheynee mulhin
#1
Asthaa kasthoorin lolaa moonaa vas kandhuraa
*Loabin mastheyvaanee annaashey yaaraa
Thikiyaa fonifoni raagaa bunan thikuraa baaraa
*Ahan thikiyaa basthah hithah amudhun naaraa
*Ahaalan netheehey kiyaadhey kamun
#2
Annaashey aadhey ekee moodhah goslannyaa
*Dhaahiyy noonhey vaanee kalaaves dhannyaa
Dheybala ekugaa noonas ehaa beynun vannyaa
*Kaakuhey huhtaalaashe bunee dhaahiyy vannyaa
*Nudhaanhey hureeves ahaalee kamun`,
},
{
  id: 187,
  name: `Aadhey Kokkomen`,
  genre: 'Nala',
  lyrics: `#M
މީރުކާނާ ކައިގެން ދޯ ނަށާނީ
*ބޯނީ އައިސް ކްރީމް ހޭ
ޖޯސް ނުބޯށޭ އޭރުންނޭ ނެށޭނީ
*ވާނޭ ފޯރިނަގަން
ވާނޭ ކޮއްކޮމެން ލަވަކިޔާ ފޯރިދީ
*އޭރުންނޭ އެންމެން ވާނީ އުފާ

#1
އާދޭ ކޮއްކޮމެން އަންނާށޭ ޕާޓީއައް
*އެންމެން އެތްވީމާ ވާނޭ ހާދަހާ މަޖާ
ފޫއްސެއްވެސް ނުވާނޭ ޕާޓީގާ ކޮއްކޮމެން
*އެންމެން އެތްވީމާ ވާނޭ ހާދަހާ މަޖާ

#2
ކޮއްކޯއޭ އެހުމުން އަންނާށޭ މިތަނައް
*ފޯރިދީއެންމެން ކޮއްކޮ އައިމާ ނަށާލަ ން
ކިޔާށޭ ލަސްލަހުން މިރާގައް ކޮއްކޮމެން
*ފޯރިއޭރުންމާ ގަދަވާނޭ ދޯމިތާ`, 
      englishLyrics: `#M
Meerukaanaa kaigen dhoa nashaanee
*Boanee ice cream hey
Juice nuboashey eyrunney nesheynee
*Vaaney foarinagan
Vaaney kohkomen lavakiyaa foaridhee
*Eyrunney enmen vaanee ufaa
#1
Aadhey kohkomen annaashey partyah
*Enmen ehveemaa vaaney haadhahaa majaa
Foohsehves nuvaaney partygaa kohkomen
*Enmen eyyveemaa vaaney haadhahaa majaa
#2
Kohkoaey ehumun annaashey mithanah
*Foaridheeenmen kohko aimaa nashaalan
Kiyaashey laslahun miraagah kohkomen
*Foarieyrunmaa gadhavaaney dhoamithaa`,
},
{
  id: 188,
  name: `Aniyaa Hithahnudheyshey`,
  genre: 'Taki',
  lyrics: `#M
އަނިޔާ ހިތައްނުދޭށޭ ތިހެން ސަޒާނުދޭށޭ ވާޒަހަމުން މިހިތް ރޯތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ

#1
ކެހިވެރިވީމާ ހާލު އެނގޭހޭ
*އަހަރެން ހޭލާ ރޯންޖެހެނީއޭ
ތިޔަހެން ބާކީ ކޮއްލާފާ ދާތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ

#2
ދޭހަވެވޭމީ އިޝްކުގެ މާޒީ
*އޭރު އެކީގާ ވައުދު ވެފާވީ
އެހަނދާން ވެވިފާ އަދުހުންނަން ވާތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ

#3
ހާމަވެދާނީ ހިތުގެ އުދާހޭ
*ނާހަމަ ތެދެކޭ ލޯބި މަލާއޭ
ނުފިލާ ހިތުގާ އެހަނދާންތައް ވާތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ`, 
      englishLyrics: `#M
Aniyaa hithahnudheyshey thihen sazaanudheyshey vaazahamun mihiyy roathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey
#1
Kehiveriveemaa haalu engeyhey
*Aharen heylaa roanjeheneeey
Thiyahen baakee kohlaafaa dhaathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey
#2
Dheyhaveveymee ishkuge maazee
*Eyru ekeegaa vaudhu vefaavee
Ehandhaan vevifaa adhuhunnan vaathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey
#3
Haamavedhaanee hithuge udhaahey
*Naahama thedhekey loabi malaaey
Nufilaa hithugaa ehandhaanthah vaathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey`,
},
{
  id: 189,
  name: `Dhanvaru Nidheegaa`,
  genre: 'Baburu',
  lyrics: `#1
ދަންވަރު ނިދީގާ ތިއްބާ ކެޔޮޅު ގޮވާލީ
*ހޭލާ
ދަންވަރު ނިދީގާ ނުތިބެ ތެދުވެބަލާށޭ
*ހޭލާ
ފަތިހު ނިދީގާ ތިއްބާ ކެޔޮޅުގޮވާނޭ
*ތެދުވޭ
އަވަހައް ތެދުވޭ
*އަލިވަނިއްޔޭ
މެހި ހޮނޑަލި ރޯދި ދަމާންދާން
*ތެދުވޭ
ރޯދި ދަމާންދާން
*ތެދުވޭ ރޯދި ދަމާންދާން ތެދުވޭ

#2
*އޮޑި ނެރުން ފުރައިފިޔޯ
އެންދަމަން ފުރައިފިޔޯ
އެންނަގާ ދެވެންއޮތީ
މެންދަމަން ފުރައިފިޔޯ

#3
*ފުމޭ ގޮދާ
ކަނޑުމެދުން
ރަށުމެދުން
މާދުރުން
އޮތްތަނުން
ދިޔަގޮތުން
ފަޅުމެދުން`,
       
  englishLyrics: `#M
Dhanvaru nidheegaa thihbaa keyolhu govaalee
*Heylaa
Dhanvaru nidheegaa nuthibe thedhuvebalaashey
*Heylaa
Fathihu nidheegaa thihbaa keyolhugovaaney
*Thedhuvey
Avahah thedhuvey
*Alivanihyey
Mehi hondali roadhi dhamaandhaan
*Thedhuvey
Roadhi dhamaandhaan
*Thedhuvey roadhi dhamaandhaan thedhuvey
#1
*Odi nerun furaifiyoa
Endhaman furaifiyoa
Ennagaa dhevenothee
Mendhaman furaifiyoa
#2
*Fumey godhaa
Kandumedhun
Rashumedhun
Maadhurun
Oyythanun
Dhiyagothun
Falhumedhun`,
},
{
  id: 190,
  name: `Fenkulhi`,
  genre: 'Nala',
  lyrics: `#M
މޫސުން ނަލަވާނޭދޯ
*ފޯރީ ގަދަވާނޭދޯ
*އެއްމެން ހިނގާ
ފެންކުޅި ކުޅެލަން
*އެއްމެން ހިނގާ

#1
ކުލައަޅަމުން ހިނގާފެންޖަހާ
*ކުލައަޅަމުން ހިނގާފެންޖަހާ
ފާތުމާމެން އެކީގަނުދާށޭ
*އޭރުން އެއްމެންނައް އެގިގެން އުޅޭނޭ
ބޮލައްޖަހާ ގަޔައްޖަހާ އެއްމެން ފިލަންދުވޭ
*ދުވޭ

#2
އީދުކުޅިވަރުގެ މީއެމަޖާތައް
*ވުމުން ނުބަލާ ފަހީމާޖަހާ
ތެމިގެން އެކީގައުޅޭނި
*އެކި ކުލަކުލަމި ގައިގާޖަހާނީ
ފިލަންދުވޭ ވަލައްވަދޭ އެއްމެންހިނގާދަމާ
*ދަމާ`,

  englishLyrics: `#M
Moosun nalavaaneydhoa
*Foaree gadhavaaneydhoa
Ehmen hingaa
Fennkulhi kulhelan
*Ehmen hingaa
#1
Kulaalhamun hingaafennjahaa
*Kulaalhamun hingaafennjahaa
Faathumaamen ekeeganudhaashey
*Eyrun ehmennah egigen ulheyney
Bolahjahaa gayahjahaa ehmen filanndhuvey
*Dhuvey
#2
Eedhukulhivaruge mee emajaathah
*Vumun nubalaa faheemaa jahaa
Themigen ekeegaulheyni
*Eki kulakulami gaigaajahaanee
Filanndhuvey valahvadhey ehmenn hingaadhamaa
*Dhamaa`,
},
{
  id: 191,
  name: `Fisvejjey`,
  genre: 'Nala',
  lyrics: `#M
ފިސްވެއްޖޭ މެޔާހިތް މި ހިޔާލު ހުރިގޮތޭ
*ޔާރު ލޯބިން ދީފާ ދިޔާމަވީ ގޮތޭ
ޖާނުޖާނު ހިތްދީ ލޯބިން ޖާނު ޖާނު ޖާނު
*ޖާނުޖާނު ހިތްދީ ލޯބިން ޖާނު ޖާނު ޖާނު

#1
ޖާނުދޭނަމޭ ބުނެފާ ދުރައް ދިޔާ
*މާކުރިން ކަލާ ވައުދު ކޮށްހަދާ
އެކަމާ ހިތާމައިން ރޮވެ ލޯ ފާރުވެސް މަވީ
*މިތުރާގެ ލޯތްބައް ވަކިވެވި ބޭކާރުވެސް މަވީ

#2
ދެން ދޭނޭ ހިތެއް ގައިމުވެސް ނެތޭ
*ތިޔަ ބުނާގޮތައް ހިތް ދޭހިތެއް ނެތޭ
އަދުވިސްނިއްޖޭ މިހާދެން މަ ބޭނުމެއްނެތޭ
*ތިޔަ މާނައެއް ނެތް ލޯތްބައް ބަލާލުމެއްނެތޭ`,

  englishLyrics: `#M
Fisvehjey meyaahiyy mi hiyaalu hurigothey
*Yaaru loabin dheefaa dhiyaamavee gothey
Jaanujaanu hiyydhee loabin jaanu jaanu jaanu
*Jaanujaanu hiyydhee loabin jaanu jaanu jaanu
#1
Jaanudheynamey bunefaa dhurah dhiyaa
*Maakurin kalaa vaudhu kohhadhaa
Ekamaa hithaamain rove loa faaruves mavee
*Mithuraage loayybah vakivevi beykaaruves mavee
#2
Dhen dheyney hitheh gaimuves nethey
*Thiya bunaagothah hiyy dheyhitheh nethey
Adhuvisnihjey mihaadhen ma beynumehnethey
*Thiya maanaeh neyy loayybah balaalumeh nethey`,
},
{
  id: 192,
  name: `Hassafaharu`,
  genre: 'Taki',
  lyrics: `#M
ހައްސަފަހަރު ރޮވޭމިހާރު ލޯބިވޭ ހާދަސުޒީ
*ލޯބިވޭ ހާދަ ސުޒީ އޭ އޫނ އޫނ އޫނ

#1
އާފަލާއި މަތިވަކާ ކުރުކުރާއި ތާވަކާ
*ކާގަޑީގަ ހޯދަދޭނަމޭ
ބަރަބޮލާއި ޓަކޫއަކާ ކެކުރިއާއި ކެހެރުއަކާ
*ސައިގަޑީގަ ހޯދަދޭނަމޭ
ރީބޮންޑިންވެސް ކޮއްދޭނަން
*ލޯބިވޭ ހާދަ ސުޒީ އޭ އޫނ އޫނ އޫނ

#2
ބާތުޑޭގެރާތުގާ ސާތުވީމަ ގާތުގާ
*ހާތު ހާތު ދެންގުޅާނަމޭ
މާބުރެއްގެ ކުރަނޑިޔާ މާވަރެއްގެ ކިޑުނިޔާ
*މާރޮނޑެއްގެ ލަގޮނޑިދޭނަމޭ
ފޭޝަލްވެސް ހައްދަދޭނަން
*ލޯބިވޭ ހާދަ ސުޒީ އޭ އޫނ އޫނ އޫނ

#3
ހިތް އަމޭނަގާފާ ތިންތަނުންފަހާފާ
*ޒިންދަގީގެ ހާލަކީމިއޭ
އަރުތެރޭން ކަކުނިހިރޭ ވަރުވަރުން މަ އާފުރޭ
*މަރުބަލީގެ ބޭހަކީތިޔޭ
ބައިޕާސްވެސް ހައްދަދޭނަން
*ލޯބިވޭ ހާދަ ސުޒީ އޭ އޫނ އޫނ އޫނ`,

  englishLyrics: `#M
Hahsafaharu roveymihaaru loabivey haadhasuzee
*Loabivey haadha suzee ey oon oon oon
#1
Aafalaai mathivakaa kurukuraai thaavakaa
*Kaagadeega hoadhadheynamey
Barabolaai takooakaa kekuriaai keheruakaa
*Saigadeega hoadhadheynamey
Reebonndinnves kohdheynan
*Loabivey haadha suzee ey oon oon oon
#2
Baathudeygeraathugaa saathuveema gaathugaa
*Haathu haathu dhenngulhaanamey
Maaburehge kurandiyaa maavarehge kiduniyaa
*Maarondehge lagondidheynamey
Feyshalves hahdhadheynan
*Loabivey haadha suzee ey oon oon oon
#3
Hiyy ameynagaafaa thinnthanunnfahaafaa
*Zinndhageege haalakeemiey
Aruthereyn kakunihirey varuvarun ma aafurey
*Marubaleege beyhakeethiyey
Baipaasves hahdhadheynan
*Loabivey haadha suzee ey oon oon oon`,
},
{
  id: 193,
  name: `Hageegee Loabin`,
  genre: 'Taki',
  lyrics: `#M
ހަގީގީ ލޯބިން ސޫރަވާ
*ޕޫލު ކިނާރީ
މަބުނާ
*ޕޫލު ކިނާރީ
ބަގިޗާ ދެކިލަންދާން
*ފޮނުވާނުހޭ

#1
މަގޭ މާރީތި ހުޅިޖެހި އެ ލައެލާ ކޮބާ
*މަގޭ މާރީތި ހުޅިޖެހި އެ ލައެލާ ކޮބާ
އެކު އެކީގާ ހިނގާލަންވެސް ދާން ބޭނުމޭ
*އެކު އެކީގާ ހިނގާލަންވެސް ދާން ބޭނުމޭ
ބަގިޗާ ދެކިލަންދާން
*ފޮނުވާނުހޭ

#2
ފެނޭތޯ ނާޗުރަންގީ ބަލާލަން މިރޭ
*ފެނޭތޯ ނާޗުރަންގީ ބަލާލަން މިރޭ
ބަލާބެލުމައް މި ހަރަކާއްތައް ދެވަރެއްނުވޭ
*ބަލާބެލުމައް މި ހަރަކާއްތައް ދެވަރެއްނުވޭ
ބަގިޗާ ދެކިލަންދާން
*ފޮނުވާނުހޭ`,

  englishLyrics: `#M
Hageegee loabin sooravaa
*Poolu kinaaree
Mabunaa
*Poolu kinaaree
Bagichaa dhekilanndhaan
*Fonuvaanuhey
#1
Magey maareethi hulhijehi e laelaa kobaa
*Magey maareethi hulhijehi e laelaa kobaa
Eku ekeegaa hingaalannves dhaan beynumey
*Eku ekeegaa hingaalannves dhaan beynumey
Bagichaa dhekilanndhaan
*Fonuvaanuhey
#2
Feneythoa naachuranngee balaalan mirey
*Feneythoa naachuranngee balaan mirey
Balaabelumah mi harakaayythah dhevarehnuvey
*Balaabelumah mi harakaahthah dhevarehnuvey
Bagichaa dhekilanndhaan
*Fonuvaanuhey`,
},
{
  id: 194,
  name: `Hithuge Fiyaathoshi`,
  genre: 'Nala',
  lyrics: `#M
ހިތުގެ ފިޔާތޮށި ފިނިފެންމާ އަހުރެންގެ މިލްކަކަށް ވީމާ
*މަމި ގުރުބާންވެދާ
އަދުގެ އުފާވެރި ދުނިޔޭގާ ވަކިވާން ޒުވާން ނެތޭ މުނެއް
*މަމި ގުރުބާންވެދާ

#1
ދެކެފީމެ ރޯޒު ޖަފުނާޒް
*ބިނދެ ނޫރަލީގެ ހީނާ
ރަންޑީގެ ހުސްނުހީނާ
*ވީހާހަކަށް ގުނޭހާ
ކާކުދެކޭނީ އާކުއްޖެކޭ މާލޭން މަހޯދި ފިނިފަންމާ
*މަމި ގުރުބާންވެދާ

#2
އުޑުގާ އެވާއިރަށް ވުރޭ
*ހަނދުގާ ވިހާ މުތައްވުރޭ
އަގު މާބޮޑޭ ރަނަށް ވުރޭ
*އަދުގާ މަށަށް މިހޯދާ
އަތުގެތެރޭ ހުރެ ލަދުގެންފާ ފަތިހަށް އެބޫން ގޮވާލީމާ
*މަމި ގުރުބާންވެދާ

#3
އުންމީދު އާކަނޑެއްގާ
*ދޯންޏެއްވި ރޯޅި ވައިގާ
ފޮނުވާ ސަލާން މިރޭގާ
*ފެން ކަޅިވެގެން ކިޔޭހާ
ތުންފަތަކުން ބޮވިފާނުވާނެ ފޮނި މާމުޔޭ ވަނީ އޭގާ
*މަމި ގުރުބާންވެދާ`,

  englishLyrics: `#M
Hithuge fiyaathoshi finifennmaa ahurennge milkakah veemaa
*Mami gurubaannvedhaa
Adhuge ufaaveri dhuniyeygaa vakivaan zuvaan nethey muneh
*Mami gurubaannvedhaa
#1
Dhekefeeme roazu jafunaaz
*Bindhe nooraleege heenaa
Ranndeege husnuheenaa
*Veehaahakah guneyhaa
Kaakudhekeynee aakuhjekey maaleyn mahoadhi finifannmaa
*Mami gurubaannvedhaa
#2
Udugaa evaairah vurey
*Handhugaa vihaa muthahvurey
Agu maabodey ranah vurey
*Adhugaa mashah mihoadhaa
Athugetherey hure ladhugennfaa fathihah eboon govaaleemaa
*Mami gurubaannvedhaa
#3
Unnmeedhu aakandehgaa
*Dhoannyehvi roalhi vaigaa
Fonuvaa salaan mireygaa
*Fen kalhivegen kiyeyhaa
Thunnfathakun bovifaanuvaane foni maamuyey vanee eygaa
*Mami gurubaannvedhaa`,
},
{
  id: 195,
  name: `Huvafenthakunves`,
  genre: 'Nala',
  lyrics: `#M
ހުވަފެން ތަކުންވެސް ފެނުމުން ކަލާ
*އުފަލުން ފޮޅޭނޭ މާތައްމިތާ
ބަލަރީތި ދޫންޏާ މަޑުމޯޅި ޖާނާ
*ރީތިރާގުން އަޑުއިއްވާލާ
ފިޔަޖަހާލި ގޮތުންނޭ ޔަރާ ހިތްމަގޭ ވެއްޖޭދިވާނާ
*ފިޔަޖަހާލި ގޮތުންނޭ ޔަރާ ހިތްމަގޭ ވެއްޖޭދިވާނާ
ލޯބިގަނޑާއޭ ދޫނިގަނޑާއޭ ހިތްމަގޭ ހުއްޓުނޭ

#1
ފުނޑުފުނޑު ވާނޭ މިހިތް
*ފެންނަން ނެތީމާ ތިބާ
މާޔޫސް ނުވާނޭ އިނގޭ
*ގިނައިރުތަކެއް ވާނެބާ
އަސްތާއައީހޭ އިނގޭ
*ދިއްލާލި ޖައްވާ ފަޒާ
އަސްތާ އައީހޭ އިނގޭ ދިއްލާލި ޖައްވާ ފަޒާ
*ހުވަފެން ތަކުންވެސް ފެނުމުން ކަލާ އުފަލުން ފޮޅޭނޭ މާތައްމިތާ

#2
މަޑުމަޑު އަޑުގަބީހިލަން
*ލަދުނުގަނެ މިފަރާތްބަލާ
އާދޭ އުދުހިލަން މިރޭ
*މަންޒިލް ފެނޭދެންތިބާ
ހޭލެވުނުހިނދު ބުނެވުނޭ
*ފެނިލަން ހިނގާށޭދަމާ
ހޭލެވުހިނދު ބުނެވުނޭ ފެނިލަން ހިނގާށޭދަމާ
*ހުވަފެން ތަކުންވެސް ފެނުމުން ކަލާ އުފަލުން ފޮޅޭނޭ މާތައްމިތާ`,

  englishLyrics: `#M
Huvafen thakunnves fenumun kalaa
*Ufalun folheyney maathahmithaa
Balareethi dhoonnyaa madumoalhi jaanaa
*Reethiraagun aduihvaalaa
Fiyajahaali gothunney yaraa hiyymagey vehjeydhivaanaa
*Fiyajahaali gothunney yaraa hiyymagey vehjeydhivaanaa
Loabigandaaey dhoonigandaaey hiyymagey huhtuney
#1
Fundufundu vaaney mihiyy
*Fennan netheemaa thibaa
Maayoos nuvaaney ingey
*Ginairuthakeh vaanebaa
Asthaa aeehey ingey
*Dhihlaali jahvaa fazaa
Asthaa aeehey ingey dhihlaali jahvaa fazaa
*Huvafen thakunnves fenumun kalaa ufalun folheyney maathahmithaa
#2
Madumadu adugabeehilan
*Ladhunugane mifaraayybalaa
Aadhey udhuhilan mirey
*Mannzil feneydhennthibaa
Heylevunuhindhu bunevuney
*Fenilan hingaasheydhamaa
Heylevunuhindhu bunevuney fenilan hingaasheydhamaa
*Huvafen thakunnves fenumun kalaa ufalun folheyney maathahmithaa`,
},
{
  id: 196,
  name: `Madhekey Hithun`,
  genre: 'Kaasi',
  lyrics: `#M
މަދެކޭހިތުން މަނަދޫ
*އީސަފުޅު އައިހޭ މިގެއަށް

#1
ބަލަންމިރޭ އީސަހުރެޔޭ
*މަށަށް ހުކުރެއް ރީތިނުވެޔޭ
މަމިގޭތެރޭ ފިލާ މަހުންނާނަން
*މަމިގޭތެރޭ ފިލާ މަހުންނާނަން

-
$M
ބުންޏޭ ދާނޫންހޭ
*އީސަ ބުންޏޭ ދާނޫހޭ
އެހެދުނީ މާކަނދޭ
*އޭ މީހުން އެކުގާއުޅޭ

$1
އައިމިނަ ފުޅާވޭ
*ރަނގަޅައް ބުނަށޭ
ކޮޓަރި ކޮޓަރި ތަޅުލާފާ
*ބޭރު ކޮޓަރި ކޮޓަރި ތަޅުލާފާ
އައިމާ ނުދާނޫން ހޭ
*ބުންޏޭ ދާނޫންހޭ އީސަ ބުންޏޭ ދާނޫހޭ

$N
*ތަޅުލާފާ
ކޮޓަރި
ބޭރު ކޮޓަރި
ބޭރު ކޮޓަރި
އެކޮޅު ކޮޓަރި`,

  englishLyrics: `#M
Madhekeyhithun manadhoo
*Eesafulhu aihey migeah
#1
Balannmirey eesahureyey
*Mashah hukureh reethinuveyey
Mamigeytherey filaa mahunnaanan
*Mamigeytherey filaa mahunnaanan
-
$M
Bunnyey dhaanoonhey
*Eesa bunnyey dhaanoohey
Ehedhunee maakandhey
*Ey meehun ekugaaulhey
$1
Aimina fulhaavey
*Rangalhah bunashey
Kotari kotari thalhulaafaa
*Beyru kotari kotari thalhulaafaa
Aimaa nudhaanoon hey
*Bunnyey dhaanoonhey eesa bunnyey dhaanoohey
$N
*Thalhulaafaa
Kotari
Beyru kotari
Beyru kotari
Ekolhu kotari`,
},
{
  id: 197,
  name: `Mahithah Vedhanee`,
  genre: 'Kaasi',
  lyrics: `#M
މަހިތައް ވެދަނީ މިކީއްބާ
*ރުހިވެއްޖެ ގަބޫލް ތިބާއަށް
ކުރަނީ ގެންގޮސް ހަވާލޭ ހިތުލޭފައަމޭ ތިބާއައް
*ހިތަކައް ވާހެން ނެތިއްޔާ

#1
ފެނިލޯވެއާ ދަރީހުން
*ބަޅިޔާނދުވީ ހިނގާލުން
ގުޅެޔޭ ގަޔާވާ ޒާތުން
*ފަރި ނޫރު ތޫނު ސިއްރުން
މުނިޔަމަގޭ ބޭނުންވާ
*މަންޒިލް ތިޔޭ މުޅިދޭހުން

-
$M
ތިޔަމާ ހިތުގެހިތުގެ މޯޅިވަނީ ތޯއޭ
*ތިޔަމާ ހިތުގެހިތުގެ މޯޅިވަނީ ތޯއޭ
ހިޔަލުން ހިޔަލުގެ ފިނި ރޯޅިވަނީ ތޯއޭ
*ހިޔަލުން ހިޔަލުގެ ފިނި ރޯޅިވަނީ ތޯއޭ

$1
ހެލިހެލި އޭނދަ ވަޔާ
*ނަލަނަލަ ދޭލިޔާ
އަލިއަލި ރީތިނަޔާ
*ހިޔަލުގެ ހާވިޔާ
ދެލޮލުން ލޮލުގެ ކަރުނަ ފާޅުވަނީ ތޯއޭ
*ދެލޮލުން ލޮލުގެ ކަރުނަ ފާޅުވަނީ ތޯއޭ

$2
*މާފޯޅޭ
ސަނދުބަރަކާ
ގުލްސަންޕާ
މާލިލީ`,

  englishLyrics: `#M
Mahithah vedhanee mikeehbaa
*Ruhivehje gabool thibaaah
Kuranee genngos havaaley hithuleyfaamey thibaaah
*Hithakah vaahen nethihyaa
#1
Feniloaveaa dhareehun
*Balhiyaandhuvee hingaalun
Gulheyey gayaavaa zaathun
*Fari nooru thoonu sihrun
Muniyamagey beynunnvaa
*Mannzil thiyey mulhidheyhun
-
$M
Thiyamaa hithugehithuge moalhivanee thoaey
*Thiyamaa hithugehithuge moalhivanee thoaey
Hiyalun hiyaluge fini roalhivanee thoaey
*Hiyalun hiyaluge fini roalhivanee thoaey
$1
Heliheli eyndha vayaa
*Nalanala dheyliyaa
Aliali reethinayaa
*Hiyaluge haaviyaa
Dhelolun loluge karuna faalhuvanee thoaey
*Dhelolun loluge karuna faalhuvanee thoaey
$N
*Maafoalhey
Sandhubarakaa
Gulsannpaa
Maalilee`,
},
{
  id: 198,
  name: `Meedhaathah`,
  genre: 'Taki',
  lyrics: `#M
މީދާތައް ވަކަރުމަތިން ދޭ
*މީހުން ތިބެ ބިރުން ބިރުން ދޭ
ރޭގަނޑުގާ ފިލަފިލަމުން ހޭލާތޯ ބަލަބަލަމުން
*މީދާ ގިނަވަމުން ވަމުން ދޭ

#1
ހާލީގާ ދޭތީ ތޮޅޭނޭ
*ދެކޮޅައް ތިބެ ދޭތި ގޮވާނޭ
ދުވެލާތަން ފޫހިނުކޮށް ހަތަރުފަޔަށް ބާރުލަމުން
*ނަގޫނަގާ އެސޮރު ދުވާނޭ

#2
މުސްކުޅިބޭ ނުކުމެ ގޮވާނޭ
*ބައިއޮ ބައިއޮ ބުޅާ ގޮވާނޭ
ފެންލޯވަށި އުކައުކަމުން އެންވަށިހެން ލޯހަދަމުން
*ބުޅާ ފަހާ އެބޭ ދުވާނޭ`,

  englishLyrics: `#M
Meedhaathah vakarumathin dhey
*Meehun thibe birun birun dhey
Reygandugaa filafilamun heylaathoa balabalamun
*Meedhaa ginavamun vamun dhey
#1
Haaleegaa dheythee tholheyney
*Dhekolhah thibe dheythi govaaney
Dhuvelaathan foohinukoh hatharufayah baarulamun
*Nagoonagaa esoru dhuvaaney
#2
Muskulhibey nukume govaaney
*Baio baio bulhaa govaaney
Fennloavashi ukaukamun ennvashihen loahadhamun
*Bulhaa fahaa ebey dhuvaaney`,
},
{
  id: 199,
  name: `Ohsemun Tharithah`,
  genre: 'Zamaanee',
  lyrics: `#M
އޮއްސެމުން ތަރިތައް ފަވާލާނޭ ތިނަން އުޑުގައި
*ބިންމަތިން ފެނިފާ ޕަރީއެއްހޭ އަހާލާނޭ
އެންމެ ފުރަތަމަވެސް ކަލާ ފެނުމާއެކު ހިތްދެވުނޭ
*އޮއްސެމުން ތަރިތައް ފަވާލާނޭ ތިނަން އުޑުގައި

#1
ތިބާފަރިކަން &މިހާހުން ގުނިން&
ވިދާ މޫނާ &މިސާލެއް ނުވީ&
ތިވާ ހިނިތުން &ހިތާމޭ ފުރީ&
ހަނދާން ވީމާ &އެނިދި ގެއްލުނީ&

#2
ނުވާކަމަކައް &އެމާޒީ ހެދީ&
ހިތައް ފިނިކަން &ލިބޭތޯ ހުރީ&
ތިބާގެ ދެލޯ &ފުށުން އެދިހުރީ&
ތިބާ ހިތަކައް &ލިބުން އެދިހުރީ&`,

  englishLyrics: `#M
Ohsemun tharithah favaalaaney thinan udugai
*Binnmathin fenifaa pareeehhey ahaalaaney
Ennme furathamaves kalaa fenumaaeku hiyydhevuney
*Ohsemun tharithah favaalaaney thinan udugai
#1
Thibaafarikan &mihaahun gunin&
Vidhaa moonaa &misaaleh nuvee&
Thivaa hinithun &hithaamey furee&
Handhaan veemaa &enidhi gehlunee&
#2
Nuvaakamakah &emaazee hedhee&
Hithah finikan &libeythoa huree&
Thibaage dheloa &fushun edhihuree&
Thibaa hithakah &libun edhihuree&`,
},
{
  id: 200,
  name: `Rahumaa Hamdahrudhee`,
  genre: 'Kaasi',
  lyrics: `#M
ރަހުމާ ހަމްދަރުދީ ވެވޭތޯ
*އުޅެމާހިނގާ

#1
ނުކުޅެދޭ މީހުނާ
*ނިކަމެތިވި ފަޤީރުނާ
ކުޅެދޭހާ އެންމެން އެހީވާން
*އުޅެމާހިނގާ

-
$M
ވަމާދީލަތި ވިތޯރޫހުނަށް އެހީ
*ވަމާތޯއޭ ފަޤީރުންނަށް އެހީ

$1
މިތާބަލިހާލުގައިވާ މީހުނާ
*މައެއް ބަފައެއް ނުވާއެ ޔަތީމުނާ
މިތާ ހަރަކާތް ނުކުރެވޭ އެންމެނާ
*ނިކަން ދީލަތި އެހީ އެތްފޯރުވާ
ވީވަރަކުން ވީވަރަކުން ވީވަރަކުން
*ވަމާދީލަތި ވިތޯރޫހުނަށް އެހީ ވަމާތޯއޭ ފަޤީރުންނަށް އެހީ

#M
އުޅެމާ އެހިވަމާ އުޅެމާ އެހީވަމާ
*އުޅެމާ އެހިވަމާ އުޅެމާ އެހީވަމާ
ރަހުމާ ލޯބިދެމާ ރަހުމާ ލޯބިވަމާ
*ރަހުމާ ލޯބިދެމާ ރަހުމާ ލޯބިވަމާ

#1
ހާލު ނިކަމެތި ވެފާ ވާމި މިސްކިނުނާ
*ވާގިލާދޭ ޒުވާން ދެރަ ފަޤީރުން ނަށަށް ވަގިލާދޭ ޒުވާން ދެރަ ފަޤީރުން ނަށަށް`,

  englishLyrics: `#M
Rahumaa hamdharudhee veveythoa
*Ulhemaahingaa
#1
Nukulhedhey meehunaa
*Nikamethivi faqeerunaa
Kulhedheyhaa ennmen eheevaan
*Ulhemaahingaa
-
$M
Vamaadheelathi vithoaroohunah ehee
*Vamaathoaey faqeerunnah ehee
$1
Mithaabalihaalugaivaa meehunaa
*Maeh bafaeh nuvaae yatheemunaa
Mithaa harakaayy nukurevey ennmenaa
*Nikan dheelathi ehee eyyfoaruvaa
Veevarakun veevarakun veevarakun
*Vamaadheelathi vithoaroohunah ehee vamaathoaey faqeerunnah ehee
$2
Ulhemaa eheevamaa ulhemaa eheevamaa
*Ulhemaa eheevamaa ulhemaa eheevamaa
Rahumaa loabidhemaa rahumaa loabivamaa
*Rahumaa loabidhemaa rahumaa loabivamaa
$3
Haalu nikamethi vefaa vaami miskinunaa
*Vaagilaadhey zuvaan dhera faqeerun nashah vaagilaadhey zuvaan dhera faqeerun nashah`,
},
{
  id: 201,
  name: `Reethi Mithuru`,
  genre: 'Kaasi',
  lyrics: `#M
ހާދަހާ އަސަރެއް ހިތައް މިތުރު ހީލީމާ
*ރީތި މިތުރު ހީލީމާ ރީތި ދެލޯ ފެނުނީމާ
ރީތި މިތުރު ހީލީމާ
*ރީތި ދެލޯ ފެނުނީމާ

#1
ލޯބިވާ ޔާރާ ދުރުން ފެނުނަސް އަޅާ ނުމެލާނޭ
*ލޯބިވާ ޔާރާ ދުރުން ފެނުނަސް އަޅާ ނުމެލާނޭ
ނޭނެގެނީހޭ ވާގޮތެއް މިހިތައް ލިބޭ ގަދަވޭނޭ
*ނޭނެގެނީހޭ ވާގޮތެއް މިހިތައް ލިބޭ ގަދަވޭނޭ
ހިތްދެކޭ ހުވަފެން ހަގީގަތަކަށް ހަދަން އުޅެމާހޭ
*ރީތި މިތުރު ހީލީމާ ރީތި ދެލޯ ފެނުނީމާ

#2
ހިޔާލުކުރަނީ އުފާދޭ ލޯބިލިބޭތޯ ދާށޭ
*ހިޔާލުކުރަނީ އުފާދޭ ލޯބިލިބޭތޯ ދާށޭ
އެންމެ ދާހިއްވާ ތިޔަ މަންޒިލް ލިބޭތޯ ދާށޭ
*އެންމެ ދާހިއްވާ ތިޔަ މަންޒިލް ލިބޭތޯ ދާށޭ
ދާނެ މިސްރާބަކީ މާޒީގެ އުފާ ހޯދޭތޯ
*ރީތި މިތުރު ހީލީމާ ރީތި ދެލޯ ފެނުނީމާ

#3
ހިތުތެރޭގާވާ އުދާސްފިލާވާނީހެ ޖާދުވިލޯ
*ހިތުތެރޭގާވާ އުދާސްފިލާވާނީހެ ޖާދުވިލޯ
ވިންދުލޭގާ ލައްކޮށްޖެއްސީ މަގޭ ޖާދުވިލޯ
*ވިންދުލޭގާ ލައްކޮށްޖެއްސީ މަގޭ ޖާދުވިލޯ
ޖާދުވީލޯބި ދިރުންދޭނީ ހިތާ ރޫހައްތާ
*ރީތި މިތުރު ހީލީމާ ރީތި ދެލޯ ފެނުނީމާ`,

  englishLyrics: `#M
Haadhahaa asareh hithah mithuru heeleemaa
*Reethi mithuru heeleemaa reethi dheloa fenuneemaa
Reethi mithuru heeleemaa
*Reethi dheloa fenuneemaa
#1
Loabivaa yaaraa dhurun fenunas alhaa numelaaney
*Loabivaa yaaraa dhurun fenunas alhaa numelaaney
Neynegeneehey vaagotheh mihithah libey gadhaveyney
*Neynegeneehey vaagotheh mihithah libey gadhaveyney
Hiyydhekey huvafen hageegathakah hadhan ulhemaahey
*Reethi mithuru heeleemaa reethi dheloa fenuneemaa
#2
Hiyaalukuranee ufaadhey loabilibeythoa dhaashey
*Hiyaalukuranee ufaadhey loabilibeythoa dhaashey
Ennme dhaahihvaa thiya mannzil libeythoa dhaashey
*Ennme dhaahihvaa thiya mannzil libeythoa dhaashey
Dhaane misraabakee maazeege ufaa hoadheythoa
*Reethi mithuru heeleemaa reethi dheloa fenuneemaa
#3
Hithuthereygaavaa udhaasfilaavaaneehe jaadhuviloa
*Hithuthereygaavaa udhaasfilaavaaneehe jaadhuviloa
Vinndhuleygaa lahkohjehsee magey jaadhuviloa
*Vinndhuleygaa lahkohjehsee magey jaadhuviloa
Jaadhuveeloabi dhirunndheynee hithaa roohahthaa
*Reethi mithuru heeleemaa reethi dheloa fenuneemaa`,
},
{
  id: 202,
  name: `Roohey Aalaavi`,
  genre: 'Kaasi',
  lyrics: `#M
ރޫހޭ އާލާވީ މިލޮބުވެތި ތާޒާ
*ޖޯޝާ ފޯރީގާ ދިރޭ

#1
މިރޭލިބޭހާ އުފާ
*އާލާވޭ އާވީ
ދީބޭފަހުރާ ސަރަފުގާ
*ހިއްވަރުމީ އާވީ
ދީރޭ މަތިވެރި އަޒުމުގާ ކިޔަނީމިރޭ
*ކިޔަނީ މީ މަރުހަބާ

#2
ޝައުގާއެކީ ފާޅުގާ
*ސާބިތުވެ ތިބޭނީ
ގައުމާ ދީނުގެ ހައްގުގާ
*ގުރުބާން ވެދާނީ
ދައުލަތް ނަފަހައްޓަން ފިދާވާނީ
*ކިޔަމުން ހާ މަރުހަބާ

#3
ނަފާލިބޭނޭ މަގުން
*ކުރިޔައް ހިނގާނީ
ވާފާ ތެރިކަން އިސްކުރުން
*ކުރިޔައް ނެރޭނީ
ތާފާތެއް ނެތި ރޫހުގާ އިއްވައިދޭ
*އިއްވައިދޭ މީ މަރުހަބާ

-
$M
ކުރާނަމޭ މިވެދުން ކުރާނަމޭ
*ދާއިމުން އަރިހަށް މިވެދުން ކުރާނަމޭ

$1
ފަރިވެމޫސުމަށް އައިމީ ގުލްގެހާރުތައް
*ޝަބުނަމުންމި ޝުކުރުވެރިވެ ރޮނގުތަކުން ޝުއޫރުތަށް
މިސާލު ޖަހާލާނީ
*މިސާލު ޖަހާލާނީ
އަދި ފެންނަ މަންޒަރުން
*ދާއިމުން އަރިހަށް މިވެދުން ކުރާނަމޭ

$2
*އޭނީ ސޯސަންމާ
ގުލްޝަނުގާ ފަރިވެފާ
ސޯފާގާ ފަރިވެފާ
ކޯނީގާ ފަރިވެފާ
މާގަހުގާ ފަރިވެފާ`,

  englishLyrics: `#M
Roohey aalaavee milobuvethi thaazaa
*Joashaa foareegaa dhirey
#1
Mireylibeyhaa ufaa
*Aalaavey aavee
Dheebeyfahuraa sarafugaa
*Hihvarumee aavee
Dheerey mathiveri azumugaa kiyaneemirey
*Kiyanee mee maruhabaa
#2
Shaugaaekee faalhugaa
*Saabithuve thibeynee
Gaumaa dheenuge hahgugaa
*Gurubaan vedhaanee
Dhaulayy nafahahtan fidhaavaanee
*Kiyamun haa maruhabaa
#3
Nafaalibeyney magun
*Kuriyah hingaanee
Vaafaa therikan iskurun
*Kuriyah nereynee
Thaafaatheh nethi roohugaa ihvaidhey
*Ihvaidhey mee maruhabaa
-
$M
Kuraanamey mivedhun kuraanamey
*Dhaaimun arihah mivedhun kuraanamey
$1
Farivemoosumah aimee gulgehaaruthah
*Shabunamunnmi shukuruverive ronguthakun shuooruthah
Misaalu jahaalaanee
*Misaalu jahaalaanee
Adhi fenna mannzarun
*Dhaaimun arihah mivedhun kuraanamey
$2
*Eynee soasannmaa
Gulshanugaa farivefaa
Soafaagaa farivefaa
Koaneegaa farivefaa
Maagahugaa farivefaa`,
},
{
  id: 203,
  name: `Salaamathey`,
  genre: 'Nala',
  lyrics: `#M
ސަލާމަތޭ ތަނުގެ ވާނީ ހިޔާވެލާ
*ވަރީތީގެ ޖަރީކޮށް ގަޔާވެލާ

#1
ފަތިހެއްގެ އަލިކަންއައީ ރޭދުވާގާ
*ފަތިހެއްގެ އަލިކަންއައީ ރޭދުވާގާ
ދަތިކަންމެ ފިލުވާލިޔާލުން ނިޔާމާ
*ދަތިކަންމެ ފިލުވާލިޔާލުން ނިޔާމާ
ހާނއަ ހާނހާނހާ ނހާނހާނހާނ ހަ
*ހާނއަ ހާނހާނހާ ނހާނހާނހާނ ހަ
މީދާ އަޑުން ވާނީ ސިލްސިލާ
*ވަރީތީގެ ޖަރީކޮށް ގަޔާވެލާ

#2
ޝުކުރުންއޮހޭ އިހުތިރާމާ ތަހާނީ
*ޝުކުރުންއޮހޭ އިހުތިރާމާ ތަހާނީ
މިކުދިން ރުހޭ މަރުހަބާއޭ ކިޔާނީ
*މިކުދިން ރުހޭ މަރުހަބާއޭ ކިޔާނީ
ހާނއަ ހާނހާނހާ ނހާނހާނހާނ ހަ
*ހާނއަ ހާނހާނހާ ނހާނހާނހާނ ހަ
ރޫހެއްވެލާނީ އެއްބާރުލާ
*ވާރީތީގެ ޖަރީކޮށް ގަޔާވެލާ

$M
އަންނާށޭ ލޯބިން މަގެންދަން ތިބާ
*ހެއްވާލާ ދީގެން މިރޭގެ ދަނޑޫރާ

$1
ތިންހައް ދުވާނޭހޭ ރޫހުދިރޭނޭ
*ވިއްސައިގެންދާނެ ޔަގީނޭ އިނގިދާނޭ
ހުރިވަރު އަދި ފިޔަވަރު މައްޝޫރު ދަނޑޫރާ
*އަންނާށޭ ލޯބިން މަގެންދަން ތިބާ ހެއްވާލާ ދީގެން މިރޭގެ ދަނޑޫރާ

$2
ފުރިހަމަ ކުޅިވަރު ހުނަރުމިފެންވަރު ބުންވަރު
*ކުޅިވަރު މިއަސަރު އެކިވަރު މަންވަރު މިންވަރު
ހުރިވަރު އަދި ފިޔަވަރު މައްޝޫރު ދަނޑޫރާ
*އަންނާށޭ ލޯބިން މަގެންދަން ތިބާ ހެއްވާލާ ދީގެން މިރޭގެ ދަނޑޫރާ`,

  englishLyrics: `#M
Salaamathey thanuge vaanee hiyaavelaa
*Vareetheege jareekoh gayaavelaa
#1
Fathihehge alikan aee reydhuvaagaa
*Fathihehge alikan aee reydhuvaagaa
Dhathikannme filuvaaliyaalun niyaamaa
*Dhathikannme filuvaaliyaalun niyaamaa
Aa a aa aa aa aa aa aa aa aa aa
*Aa a aa aa aa aa aa aa aa aa aa
Meedhaa adun vaanee silsilaa
*Vareetheege jareekoh gayaavelaa
#2
Shukurun ohey ihuthiraamaa thahaanee
*Shukurun ohey ihuthiraamaa thahaanee
Mikudhin ruhey maruhabaaey kiyaanee
*Mikudhin ruhey maruhabaaey kiyaanee
Aa a aa aa aa aa aa aa aa aa aa
*Aa a aa aa aa aa aa aa aa aa aa
Roohehvelaanee ehbaarulaa
*Vaareetheege jareekoh gayaavelaa
#3
Annaashey loabin magenndhan thibaa
*Hehvaalaa dheegen mireyge dhandooraa
#4
Thinnhah dhuvaaneyhey roohudhireyney
*Vihsaigenndhaane yageeney ingidhaaney
Hurivaru adhi fiyavaru mahshooru dhandooraa
*Annaashey loabin magenndhan thibaa hehvaalaa dheegen mireyge dhandooraa
#5
Furihama kulhivaru hunaru mifennvaru bunnvaru
*Kulhivaru miasaru ekivaru mannvaru minnvaru
Hurivaru adhi fiyavaru mahshooru dhandooraa
*Annaashey loabin magenndhan thibaa hehvaalaa dheegen mireyge dhandooraa`,
},
{
  id: 204,
  name: `Enn Ukaa`,
  genre: 'Thinberu',
  lyrics: `#M
އެންނުކާ ދެރަދެރަ އައިނެކޭ މިއީ
*ފެންނަ އިރުގާ އުޅޭޭ ތަޅާފޮޅާ

#1
ދޯނިފެނިފާ މިބޮޑު އައިން ތެޅުން ނިވާލައޭ
*ދޯނިފެނިފާ މިބޮޑު އައިން ތެޅުން ނިވާލައޭ
ވަށިވަށިން އަޅާމިއެން އުކާދެޔޭ
*ދެންނަގާ މެކުހުގައޭ ދަނީފަހަށް

#2
ފެންނަނީއޭ ދުރުންނޭ ތަޅާދީ ފޮނުލާ
*ފެންނަނީއޭ ދުރުންނޭ ތަޅާދީ ފޮނުލާ
ދެންނަގާ މެކުހުގައޭ ދަނީފަހަށް
*ދެންނަގާ މެކުހުގައޭ ދަނީފަހަށް

#3
ދޭތޯ މިދޯނި މަހަށް
*ދަމެއް ކުރަން ދަމާހިނގާ
ކައިތޯ މިއޮޑީގެ އެން
*ކޮބާ ފަތެއް ލިޔަން ހިނގާ
ބޭނޭނެ ހިއެއް ނެތީ
*ފިކުރުކުރަން ދަމާހިނގާ

#4
ފެންތާހެއް ނަގާފައި
*ކަނދުރާ އަށް ހަމްދުކިޔާ އަޅާށޭ
ކުކުޅުގެ ކަޅު ބިހެއްގާ
*ގޮވާމު ނަންތައް ލިޔެފާ ޖަހާށޭ

#5
ބުޅިނެގިމަސް ފެނިއްޖޭ
*ދޯނިހިފާ ދޯނިދަށަށް ވަދެއްޖޭ
އެންކެޔޮޅާ އުކާށޭ
*ވަށިން ނަގާ ދޯނި ދަށަށް އަޅާށޭ`,

  englishLyrics: `#M
Ennukaa dheradhera ainekey miee
*Fenna irugaa ulheyey thalhaafolhaa
#1
Dhoanifenifaa mibodu ain thelhun nivaalaey
*Dhoanifenifaa mibodu ain thelhun nivaalaey
Vashivashin alhaamien ukaadheyey
*Dhennagaa mekuhugaey dhaneefahah
#2
Fennaneeey dhurunney thalhaadhee fonulaa
*Fennaneeey dhurunney thalhaadhee fonulaa
Dhennagaa mekuhugaey dhaneefahah
*Dhennagaa mekuhugaey dhaneefahah
#3
Dheythoa midhoani mahah
*Dhameh kuran dhamaahingaa
Kaithoa miodeege en
*Kobaa fatheh liyan hingaa
Beyneyne hieh nethee
*Fikurukuran dhamaahingaa
#4
Fennthaaheh nagaafai
*Kandhuraa ah hamdhukiyaa alhaashey
Kukulhuge kalhu bihehgaa
*Govaamu nannthah liyefaa jahaashey
#5
Bulhinegimas fenihjey
*Dhoanihifaa dhoanidhashah vadhehjey
Ennkeyolhaa ukaashey
*Vashin nagaa dhoani dhashah alhaashey`,
},
{
  id: 205,
  name: `Velaa`,
  genre: 'Baburu',
  lyrics: `#1
ރައްރަށު ގޮނދުދޮށައް އެއަރާ ފަސްގަނޑު މަތީގާ
*ހާވާ
އަޑު ފައްނިހިފާ
*ފަޅުތައް ކޮނެލާ
ހިޔަދެ ހިޔަރެޔަކުއަރާނޭ
*ވެލައޭ
ރެޔަކުއަރާނޭ
*ވެލައޭ ރެޔަކުއަރާނޭ ވެލައޭ
ބަލަ ރެޔަކުއަރާނޭ
*ވެލައޭ ރެޔަކުއަރާނޭ ވެލައޭ

#2
*އާނ ވެލާ ވެލާ ވެލާއޮތޯ
ބިސްއަޅަން އަރާއޮތޯ
ހޭޅިއައް އަރާއޮތޯ
ބިސް ގުނަން އަރާއޮތޯ
ވައްލޮލުން ބަލަން އޮތޯ
ރަށުމެދުގަ ބަލަންއޮތޯ
ވައްކަޅިން ބަލަން އޮތޯ
ވަގުވަގައް އަރާ އޮތޯ

#3
*އަރާވެލާ
ވަގުވަގައް
ރަށު ކޮޅައް
ހޭޅިއައް
ބިސްއަޅަން
ރަށުމަގުން
ބިސްގުނަން
ރަށުމެދައް`,

  englishLyrics: `#M
Rahrashu gondhudhoshah earaa fasgandu matheegaa
*Haavaa
Adu fahnihifaa
*Falhuthah konelaa
Hiyadhe hiyareyakuaraaney
*Velaey
Reyakuaraaney
*Velaey reyakuaraaney velaey
Bala reyakuaraaney
*Velaey reyakuaraaney velaey
#1
*Aan velaa velaa velaaothoa
Bisalhan araaothoa
Heylhiah araaothoa
Bis gunan araaothoa
Vahlolun balan othoa
Rashumedhuga balannothoa
Vahkalhin balan othoa
Vaguvagah araa othoa
#2
*Araavelaa
Vaguvagah
Rashu kolhah
Heylhiah
Bisalhan
Rashumagun
Bisgunan
Rashumedhah`,
},
{
  id: 206,
  name: `Veyn Libeythee Ey`,
  genre: 'Kaasi',
  lyrics: `#M
ވޭން ލިބޭތީ އޭ ކުރާ ތައުބީރުގާ
*އެދެނީ ކަލާ ލިބުމޭ މަގޭ ތަގުދީރުގާ

#1
މޭ ތެޅުން ވާތީ ހިތޭ ނޯތީ މަޑުން
*ރޭ ނިދިން ހޭލައްވަނީ ހުވަފެން ތަކުން
ރޭ ދުވާ އެދެނީ އެކީ ބައްދަލު ވެލުން
*ހޭދަ ވެވުނީމާ އެތާ ލޯބިން މިހެން
ހިޔާލުގާ ވާ ހިތް ރުހޭ ތަސްވީރުހޭ
*އެދެނީ ކަލާ ލިބުމޭ މަގޭ ތަގުދީރުގާ

#2
ހިތް މުޅިން ނުރުހިއްޖެޔޭ ދުރުގާ ހުރުން
*ފުން އަސަރު ކުރުވައިފިޔޭ ރޮއެ ރޮއެ މިހެން
ކެތްމަށަށް ނުވެވޭނެޔޭ ދެކެލާ ހިތުން
*ދެން މިހެން ހުރެވޭނެހޭ ޝަކުވާ ކުރަން
ވައުދު ލޯބިންކޮށް މިހެން ހުރެވޭނެހޭ
*އެދެނީ ކަލާ ލިބުމޭ މަގޭ ތަގުދީރުގާ

#3
ހޫނުކަން ދޭތީ ހިމޭން ނޭވާ ތަކުން
*ވީ ރުހުން ހިތުގާ ކުރާ އިތުބާރަކުން
ރީތި މާތައް ރަކި ވެދާނޭ ހީލުމުން
*ރީތި މޫސުން ބަދަލު ވާނޭ ރޯލުމުން
ފުން ހަނދާނޭ ކެތް ނުވާ ތަގުދީރުހޭ
*އެދެނީ ކަލާ ލިބުމޭ މަގޭ ތަގުދީރުގާ

-
$M
އަނިޔާ ހިތައްނުދޭށޭ ތިހެން ސަޒާނުދޭށޭ ވާޒަހަމުން މިހިތް ރޯތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ

$1
ކެހިވެރިވީމާ ހާލު އެނގޭހޭ
*އަހަރެން ހޭލާ ރޯންޖެހެނީއޭ
ތިޔަހެން ބާކީ ކޮއްލާފާ ދާތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ

$2
ދޭހަވެވޭމީ އިޝްކުގެ މާޒީ
*އޭރު އެކީގާ ވައުދު ވެފާވީ
އެހަނދާން ވެވިފާ އަދު ހުންނަން ވާތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ

$3
ހާމަވެދާނީ ހިތުގެ އުދާހޭ
*ނާހަމަ ތެދެކޭ ލޯބި މަލާއޭ
ނުފިލާ ހިތުގާ އެހަނދާންތައް ވާތީ
*އެދޭނީ ޔާރު އެހީވާށޭ އެދޭނީ ޔާރު އެހީވާށޭ`,

  englishLyrics: `#M
Veyn libeythee ey kuraa thaubeerugaa
*Edheny kalaa libumey magey thagudheerugaa
#1
Mey thelhun vaathee hithey noathee madun
*Rey nidhin heylavvanee huvafen thakun
Rey dhuvaa edheny eky bahdhalu velun
*Heydha vevuneemaa ethaa loabin mihen
Hiyaalugaa vaa hiy ruhey thasveeruhey
*Edheny kalaa libumey magey thagudheerugaa
#2
Hiy mulhin nuruhihjeyey dhurugaa hurun
*Fun asaru kuruvaifiyey roe roe mihen
Keyymashah nuveveyneyey dhekelaa hithun
*Dhen mihen hureveynehey shakuvaa kuran
Vaudhu loabin koh mihen hureveynehey
*Edheny kalaa libumey magey thagudheerugaa
#3
Hoonukan dheythee himeyn neyvaa thakun
*Vee ruhun hithugaa kuraa ithubaarakun
Reethi maathah raki vedhaaney heelumun
*Reethi moosun badhalu vaaney roa lumum
Fun handhaaney kei nuvaa thagudheeruhey
*Edheny kalaa libumey magey thagudheerugaa
-
$M
Aniyaa hithahnudheyshey thihen sazaanudheyshey vaazahamun mihiyy roathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey
$1
Kehiveriveemaa haalu engeyhey
*Aharen heylaa roanjeheneeey
Thiyahen baakee kohlaafaa dhaathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey
$2
Dheyhaveveymee ishkuge maazee
*Eyru ekeegaa vaudhu vefaavee
Ehandhaan vevifaa adhu hunnan vaathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey
$3
Haamavedhaanee hithuge udhaahey
*Naahama thedhekey loabi malaaey
Nufilaa hithugaa ehandhaanthah vaathee
*Edheynee yaaru eheevaashey edheynee yaaru eheevaashey`,
},
{
  id: 207,
  name: `Jehilunve Mey`,
  genre: 'Kaasi',
  lyrics: `#M
ޖެހިލުންވެ މޭ ތެޅޭ ގޮތްވޭ ގައިބާރު ދޫވެ ދާގޮތްވޭ
*މާކައިރި ވާގޮތްވެ ސީދާ ލޮލާލޯ ވެލީމާ
ހާދަހާ ލޯބިވޭ &އާނހާ&
ވާ ހިތުން ލޯބިވޭ &އާނހާ&
*ހާދަހާ ލޯބިވޭ

#1
ތުނިތުނި ފަތިހަށި ހެދިހުރި އިސްކޮޅު ލިބިހުރި ހޫރުޕަރީއޭ
*ފިނިފެން ޖަންބެކޭ ނިޔަނެތި މޫނެކޭ ރިވެތި ޗާލު މަލާއޭ
ފެނިފާ އާގަމަ ވެވެނީއޭ ހަމަ ކުޅަދުންވަންތަ ކަމާއޭ
*ފެނެޔޭ ކުޅުތިކި ދާއިރު ވަކިވަކި އަލިގަދަ ހުޅެވި ހަނދާއޭ
ތިޔައޭ އެދޭ އަރާމަކީ ހޯދަން އުޅޭ ނަސީބަކީ
*ޔާރާގެ މަސްތީ ނަޒަރު ފެއްނަ އިހުސާސްވީމާ

#2
ހިއްސުތަކާ ކުޅެ ނޭނގި ހިތާ ތޮޅެ އެދިހުރި ގޮތް ދޭންވީބާ
*އަބަދު ޚުށާމަދު ނޭނގި ކުރާ ހިނދު މިހިތުގެ ހާލު އެނގޭބާ
ދިރިހުރިހާ ހިނދު ހިތުގެ މަގާސިދު އޮތްގޮތްވެސް އެނގެނީބާ
*ދޭނަމޭ ލައްޒަތު އެދިހުރި ރާހަތު ތެދުވެރި ލޯބި ވަނީބާ
ޖާނާ ފުރާނަ ދޭނަމޭ ޔާރާގެ ލޯބި ބޭނުމޭ
*ދޭށޭ ހިފާ މީރު ލޯބީގެ މޭވާ ދިނީމާ`,

  englishLyrics: `#M
Jehilunnve mey thelhey goyyvey gaibaaru dhoove dhaagoiyvey
*Maakairi vaagoyyve seedhaa lolaaloa veleemaa
Haadhahaa loabivey &aanhaa&
Vaa hithun loabivey &aanhaa&
*Haadhahaa loabivey
#1
Thunithuni fathihashi hedhihuri iskolhu libihuri hoorupareeey
*Finifen jannbekey niyanethi moonekey rivethi chaalu malaaey
Fenifaa aagama veveneeey hama kulhadhunvantha kamaaey
*Feneyey kulhuthiki dhaairu vakivaki aligadha hulhevi handhaaey
Thiyaey edhey araamakee hoadhan ulhey naseebakee
*Yaaraage masthee nazaru fehna ihusaasveemaa
#2
Hihsuthakaa kulhe neyngi hithaa tholhe edhihuri goyy dheynnveebaa
*Abadhu khushaamadhu neyngi kuraa hindhu mihithuge haalu engeybaa
Dhirihurihaa hindhu hithuge magaasidhu oyygoyyves engeneebaa
*Dheynamey lahzathu edhihuri raahathu thedhuveri loabi vaneebaa
Jaanaa furaana dheynamey yaaraage loabi beynumey
*Dheyshey hifaa meeru loabeege meyvaa dhineemaa`,
},
{
  id: 208,
  name: `Hithuge Raani`,
  genre: 'Nala',
  lyrics: `#M
ހިތުގެ ރާނީ ވެދޭށެ އިގުރާރު
*ޔާރާ ލޯބިން އެކުގާ އުޅެން
ދަތުރު ފަށަމާހެ މޫސުން ބަލާ
*ޔާރާ ލޯބިން އެކުގާ އުޅެން

#1
ހިނިތުމާ އެކު ގަޔާވާ އެ ހަރަކާތް ތަކުން
ހައެ ހައެ ހިނިތުމާ އެކު ގަޔާވާ އެ ހަރަކާތް ތަކުން
*ފެނިލުމުން ދޫވެގެން ގޮއްސި މިހިތުގެ ލަގަން
ތުނި އޮމާން އަތުގެ ފިރުމުން ލިބޭތޯ ހުރިން
*ތުނި އޮމާން އަތުގެ ފިރުމުން ލިބޭތޯ ހުރިން
އުނި ޖަހާލާ ދުނިޔެއިން ހޮވޭނޭ ޔަގީން
*ހައެ ހައެ އުނި ޖަހާލާ ދުނިޔެއިން ހޮވޭނޭ ޔަގީން
ދުނިޔެ ހެކިކޮއްފާ ދުނިޔެ ހެކިކޮށް ވައުދުވާން މިތާ
*ޔާރާ ލޯބިން އެކުގާ އުޅެން

#2
އިސްކަމެއް ދެވި މިހިތުގާ ތިނަން ފެވި ވުމުން
ހައެ ހައެ އިސްކަމެއް ދެވި މިހިތުގާ ތިނަން ފެވި ވުމުން
*އިޝްޤު ލޯބީގެ ކާނާ އަކަށްވެސް ވުމުން
ވަސް ފިލައިގެން ނުދޭ މޭ ހިތާ ހަށިގަނޑުން
*ވަސް ފިލައިގެން ނުދޭ މޭ ހިތާ ހަށިގަނޑުން
މަސްތުގާ ރޭދުވާ ތައްވެ ފާއިތުވުމޫން
*ހައެ ހައެ މަސްތުގާ ރޭދުވާ ތައްވެ ފާއިތުވުމޫން
ފަސްނުޖެހި އާދޭ ފަސްނުޖެހި އާދޭ އުފަލާއެކީ
*ޔާރާ ލޯބިން އެކުގާ އުޅެން

#3
ރަންޖަވާހިރުގެ އަގުމާއި މުތީ ފަދަ ވުމުން
ހައެ ހައެ ރަން ޖަވާހިރުގެ އަގުމާއި މުތީ ފަދަ ވުމުން
*ފުން އަރާމާ އުފާތައް ލިބުން އެދި ހުރިން
މަންޖެ ފިޔަވަޅުގެ ފަހަތުން ހިނގަ ހިނގާ ހުރިން
*މަންޖެ ފިޔަވަޅުގެ ފަހަތުން ހިނގަ ހިނގާ ހުރިން
މަންޖެ ފިޔަވަޅުގެ ފަސް ފަހަތުގާ އެބަ ހުރިން
*ހައެ ހައެ މަންޖެ ފިޔަވަޅުގެ ފަސް ފަހަތުގާ އެބަ ހުރިން
ދެން ނުވާނަންހެ ދެން ނުވާނަންހެ ވައުދެއް މިތާ
*ޔާރާ ލޯބިން އެކުގާ އުޅެން`,

  englishLyrics: `#M
Hithuge raanee vedheyshe iguraaru
*Yaaraa loabin ekugaa ulhen
Dhathuru fashamaahe moosun balaa
*Yaaraa loabin ekugaa ulhen
#1
Hinithumaa eku gayaavaa e harakaayy thakun
Hae hae hinithumaa eku gayaavaa e harakaayy thakun
*Fenilumun dhoovegen gohsi mihithuge lagan
Thuni omaan athuge firumun libeythoa hurin
*Thuni omaan athuge firumun libeythoa hurin
Uni jahaalaa dhuniyein hoveyney yageen
*Hae hae uni jahaalaa dhuniyein hoveyney yageen
Dhuniye hekikohfaa dhuniye hekikoh vaudhuvaan mithaa
*Yaaraa loabin ekugaa ulhen
#2
Iskameh dhevi mihithugaa thinan fevi vumun
Hae hae iskameh dhevi mihithugaa thinan fevi vumun
*Ishqu loabeege kaanaa akahves vumun
Vas filaigen nudhey mey hithaa hashigandun
*Vas filaigen nudhey mey hithaa hashigandun
Masthugaa reydhuvaa thahve faaithuvumoon
*Hae hae masthugaa reydhuvaa thahve faaithuvumoon
Fasnujehi aadhey fasnujehi aadhey ufalaaekee
*Yaaraa loabin ekugaa ulhen
#3
Rannjavaahiruge agumaai muthee fadha vumun
Hae hae ran javaahiruge agumaai muthee fadha vumun
*Fun araamaa ufaathah libun edhi hurin
Mannje fiyavalhuge fahathun hinga hingaa hurin
*Mannje fiyavalhuge fahathun hinga hingaa hurin
Mannje fiyavalhuge fas fahathugaa eba hurin
*Hae hae mannje fiyavalhuge fas fahathugaa eba hurin
Dhen nuvaanannhe dhen nuvaanannhe vaudheh mithaa
*Yaaraa loabin ekugaa ulhen`,
},
{
  id: 209,
  name: `Masodi Mahah`,
  genre: 'Kaasi',
  lyrics: `#M
މަސް އޮޑި މަހަށް ފުރަންވީ
*އެންލާ ބަރާ ކުރަންވީ
ކެޔޮޅާ ކުދީން ފަޅު އެވެރީން
*ވަރުލާ އެ ހިއްވަރު ނެރެނީ

#1
ހުންގާނު ހުރި މިސްރާބުން
*އޮޑި ހަރު ދުވެލި އެ ދެއްކީ
އިރު ގޮސް ފެނަށް ތިރި ނުވަނީސް
*އޮޑި ގޮސް ތަނުގަ ފަޅު އަޅަނީ

#2
ލޮނުލާ ފެނަށް އޮޑި ހަމަ ކޮށް
*ފަށްތާލި ދާ އެން އެ ފުނަށް
ތިލަކޮއްލި ދާ އެން އަލިކޮށް
*ވަރު ކަށްޅި އޮޑި އެ ބަރާކޮށް

-
$M
ފަތިހު ގޮވާ ކޮވެލި އަޑަށް ކެޔޮޅު ގޮވާލީ
*ފިލާ އަންދިރި ފަތިސް އަލިވެ މަހަށް ފުރަންވީ

$1
ނިކުތީ ކަނޑުން އަތޮޅު މެދުތެރޭން
*ނިކުތީ ކަނޑުން އަތޮޅު މެދުތެރޭން
މައްޔާ މަތިން އެއްލި ރާޅަކުން
*މައްޔާ މަތިން އެއްލި ރާޅަކުން ފަޅުވެރި ކުދިން ހަޅޭލީ

$2
ރިވެލި މަތީ އޮޑި ހަރު ކޮށް ދުއްވާލިޔޯ
*ރިވެލި މަތީ އޮޑި ހަރު ކޮށް ދުއްވާލިޔޯ
އެންކެޔޮޅުބެ އެންވަށި ވެސް ހޫރާލިޔޯ
*އެންކެޔޮޅުބެ އެންވަށި ވެސް ހޫރާލިޔޯ މަސް ކަނޑު ވަރު އޮއެ ޖަހާލީ`,

  englishLyrics: `#M
Mas odi mahah furannvee
*Ennlaa baraa kurannvee
Keyolhaa kudheen falhu evereen
*Varulaa e hihvaru nerenee
#1
Hunngaanu huri misraabun
*Odi haru dhuveli e dhehkee
Iru gos fenah thiri nuvanees
*Odi gos thanuga falhu alhanee
#2
Lonulaa fenah odi hama koh
*Fahthaali dhaa en e funah
Thilakohli dhaa en alikoh
*Varu kahlhi odi e baraakoh
-
$M
Fathihu govaa koveli adah keyolhu govaalee
*Filaa andhiri fathis alive mahah furannvee
$1
Nikuthee kandun atholhu medhutherean
*Nikuthee kandun atholhu medhutherean
Mahyaa mathin ehli raalhakun
*Mahyaa mathin ehli raalhakun falhuveri kudhin halheylee
$2
Riveli mathee odi haru koh dhuhvaaliyoa
*Riveli mathee odi haru koh dhuhvaaliyoa
Ennkeyolhube ennvashi ves hooraaliyoa
*Ennkeyolhube ennvashi ves hooraaliyoa mas kandu varu oe jahaalee`,
},
{
  id: 210,
  name: `Umurugaaves Nuvaa Gotheh`,
  genre: 'Taki',
  lyrics: `#M
ބަލާލީމާ ލަދުން ދެން މަށަށް އިސްޖެހެނީތާއޭ
*މިވަރު މިވީ ރީތިކަމުން އަސަރުކުރީމާ
ޙިއްސުތަކާ ހިތާ މެޔާ ޤައިދުވަނީ ބާއޭ
ޢުމުރުގާވެސް ނުވާ ގޮތެއްމީ
*މިއަށް ލޯތްބޭ ކިޔަންވީބާއޭ އޭ އޭ އޭ

#1
އަބަދު ފަހަތްބަލާހެދީ ހީވެ ހުރީއޭ
*މެންދަމުވެސް ޔާރާ ދެކެން ހިތް އެދޭތީއޭ
މިވާ ގޮތެއް ބުނަންދަތީ މަށަށް މިވީ ކީއްބާ
*އުމުރުގާވެސް ނުވާ ގޮތެއްމީ މިއަށް ލޯތްބޭ ކިޔަންވީބާއޭ

#2
ދުރުގަ މިހެން ފިކުރު ކުރަން ގެއްލިފަ އިނދެވޭ
*އެކަނި އުޅެން ހިތްއެދެޔޭ ދަންވަރު ހޭލާ
މަގޭ ހިތަށް އައޭ ބަދަލު މަށަށް އޭނާ ފެނިފާ
*އުމުރުގާވެސް ނުވާ ގޮތެއްމީ މިއަށް ލޯތްބޭ ކިޔަންވީބާއޭ`,

  englishLyrics: `#M
Balaaleemaa ladhun dhen mashah isjeheneethaaey
*Mivaru mivee reethikamun asarukureemaa
Hihsuthakaa hithaa meyaa qaidhuvanee baaey
*Iumurugaaves nuvaa gothehmee
*Miah loayybey kiyannveebaaey ey ey ey
#1
Abadhu fahayybalaahedhee heeve hureeey
*Menndhamuves yaaraa dheken hiyy edheytheeey
Mivaa gotheh bunanndhathee mashah mivee keehbaa
*Umurugaaves nuvaa gothehmee miah loayybey kiyannveebaaey
#2
Dhuruga mihen fikuru kuran gehlifa indhevey
*Ekani ulhen hiyyedheyey dhannvaru heylaa
Magey hithah aey badhalu mashah eynaa fenifaa
*Umurugaaves nuvaa gothehmee miah loayybey kiyannveebaaey`,
},
{
  id: 211,
  name: `Umurah Thiya Namuga`,
  genre: 'Taki',
  lyrics: `#M
އުމުރަށް ތިޔަ ނަމުގާ ފިދާވުން އެދޭނީ
*ލޯބީގެ ނަޒަރުން ކަލާއޭ ދެކޭނީ
މާޔޫސް ވީމާ މޫނުން އިނގޭނީ
*ދީވާނަ ވާކަން އިންސާނުން އިނގޭނީ

#1
ކަރުނަ ފޮހެލާފާ ސިއްރު ކޮއްލުންހޭ
*ނޫނީ މޮޅުވާނީ ހިއްސާ ކޮއްލުންހޭ
އޭރުން ވޭނީ ފަރުދާ ކެހޭނީ
*މޭގެ ރިހުމާ ހަޤީގަތް އިނގޭނީ

#2
މާ ވިސްނިގެން ލޯ މަރާތީހޭ
*ނޭންގޭ ހެން ސިއްރުން ހިނިތުން ވާތީހޭ
ކޮން އިރަކުބާއޭ ބައްދަލު ވެވޭނީ
*މައެދޭ ސުވާލުގެ ޖަވާބެއް ލިބޭނީ

#3
ތިޔަ ދިން އަނިޔާޔަށް މާފު ކޮއްފީމޭ
*ހާލު އެންގޭތޯ ހާމަ ކޮއްފީމޭ
ވިންދެއް ހުޓަސް ރިއްސާ ހިއްތައް މިވޭނީ
*ކިހިނެތް މިހާރު އަރާމެއް ލިބޭނީ`,

  englishLyrics: `#M
Umurah thiya namugaa fidhaavun edheynee
*Loabeege nazarun kalaaey dhekeynee
Maayoos veemaa moonun ingeynee
*Dheevaana vaakan innsaanun ingeynee
#1
Karuna fohelaafaa sihru kohlunhey
*Noonee molhuvaanee hihsaa kohlunhey
Eyrun veynee farudhaa keheynee
*Meyge rihumaa haqeegayy ingeynee
#2
Maa visnigen loa maraatheehey
*Neynngey hen sihrun hinithun vaatheehey
Kon irakubaaey bahdhalu veveynee
*Maedhey suvaaluge javaabeh libeynee
#3
Thiya dhin aniyaayah maafu kohfeemey
*Haalu enngeythoa haama kohfeemey
Vinndheh hutas rihsaa hihthah miveynee
*Kihineyy mihaaru araameh libeynee`,
},
{
  id: 212,
  name: `Maa Shaahee`,
  genre: 'Taki',
  lyrics: `#M
މާޝާހީ ތިޔަ ރީތި ލޮލުން އައިސް
*ހިތައް ހަމަލާ ނުދޭށޭ
ނިކަން ލޯބިން ދެވޭ ލައްޒަތަކުން
*މިހިތް މޮޔަކޮށްލާ ދޭށޭ

#1
މިލްކެއް ކަމުގާ ވީނަމަ ލިބިފާ އާލަމް އެކީގާ
*ދުނިޔެއާ މުޅި ކައުނާ
ވިދުވަރުގާ ވާ އަލިކަން ދެލޮލަށް ހަދިޔާ ކޮއްލާ ދޭނަން
*ވިދުވަރުގާ ވާ އަލިކަން ދެލޮލަށް ހަދިޔާ ކޮއްލާ ދޭނަން
ކަންފަތުގާލާ ގަހަނާ ކަމުގާ އިރު ހަނދު ގެންގޮސްދޭނަން
*މާޝާހީ ތިޔަ ރީތި ލޮލުން އައިސް ހިތައް ހަމަލާ ނުދޭށޭ

#2
ތަރިތައް މި ފަޒާ ރޯށަންކުރުމުން އިރު އޮއްސި ދިއުމުން
*ފަތިސް ވެގެން އަލި ވިލުމުން
ކަނދުރާ ތިޔަމާ ފަޅުފިލުވާލަން ކަރުގާ ރީތި އަޅާލަން
*ކަނދުރާ ތިޔަމާ ފަޅުފިލުވާލަން ކަރުގާ ރީތި އަޅާލަން
ހުރިހާ ތަރިތައް ހިމަނައިގެން ހާރެއް މަ ގަތާ ދޭނަން
*މާޝާހީ ތިޔަ ރީތި ލޮލުން އައިސް ހިތައް ހަމަލާ ނުދޭށޭ

#3
ނިދުމައް މިތުރާ ތައްޔާރުވުމުން އަންގާލަ ދިނުމުން
*ނޫނި ހަންދާން ކޮއްލާ ދިނުމުން
އުޑުގާ އުދުހޭ ކުލަ ރީތި ނަޔާ ހުރިހާ ޗާލު ވިލާތައް
*އުޑުގާ އުދުހޭ ކުލަ ރީތި ނަޔާ ހުރިހާ ޗާލު ވިލާތައް
އެނދުދާންމަތީގަ ތައްމަތި އެޅުމައް ވަގުތުން ގެންގޮސް ދޭނަން
*މާޝާހީ ތިޔަ ރީތި ލޮލުން އައިސް ހިތައް ހަމަލާ ނުދޭށޭ`,

  englishLyrics: `#M
Maashaahee thiya reethi lolun ais
*Hithah hamalaa nudheyshey
Nikan loabin dhevey lahzathakun
*Mihiyy moyakohlaa dheyshey
#1
Milkeh kamugaa veenama libifaa aalam ekeegaa
*Dhuniyeaa mulhi kaunaa
Vidhuvarugaa vaa alikan dhelolah hadhiyaa kohlaa dheynan
*Vidhuvarugaa vaa alikan dhelolah hadhiyaa kohlaa dheynan
Kannfathugaalaa gahanaa kamugaa iru handhu genngosdheynan
*Maashaahee thiya reethi lolun ais hithah hamalaa nudheyshey
#2
Tharithah mi fazaa roashannkurumun iru ohsi dhiumun
*Fathis vegen ali vilumun
Kandhuraa thiyamaa falhufiluvaalan karugaa reethi alhaalan
*Kandhuraa thiyamaa falhufiluvaalan karugaa reethi alhaalan
Hurihaa tharithah himanaigen haareh ma gathaa dheynan
*Maashaahee thiya reethi lolun ais hithah hamalaa nudheyshey
#3
Nidhumah mithuraa thahyaaruvumun anngaala dhinumun
*Nooni hanndhaan kohlaa dhinumun
Udugaa udhuhey kula reethi nayaa hurihaa chaalu vilaathah
*Udugaa udhuhey kula reethi nayaa hurihaa chaalu vilaathah
Endhudhaannmatheega thahmathi elhumah vaguthun genngos dheynan
*Maashaahee thiya reethi lolun ais hithah hamalaa nudheyshey`,
},
{
  id: 213,
  name: `Furuthamaves`,
  genre: 'Zamaanee',
  lyrics: `#M
ފުރަތަމަ ވެސް ފެނުނީމާ
*ހިތް ކީއްހެނުވީ ނަފުރަތު
ބުނެލާފާ ދެވެންޔާ ލޯބިދީ
*ފެނިލާފާ ރުހެންޔާ ލޯބިދީ
ލޯ ތޮޅޭ ގޮތް ވަނީ
*ވާގޮތޭ ނޭނގެނީ
ތިޔަ އިޝާރާތް ކުރާ
*ބަރާބަރު ލޯބިވީ ރުހެންޔާ ލޯބިދީ

#1
އަބަދު ހޯދޭތި ތިޔަ ހަންދާންވޭ ނިކަން
*ހިތުގަވާ ލޭގެ އަސަރުގާ ވޭމެޔޭ
ތިބުނިހެންނޭ ވަނީ ބޭގަރާރޭ ވަނީ
*ޔާރު ހިތުގާ ހިނގާ
ތިފާގަތި ލޯބިދީ
*ރުހެންޔާ ލޯބިދީ

#2
ދެކި މަގޭ ހާލު މުޅިހިތާ ޖާނު ދީ
*އަދު ޚިޔާލެއް ނެތިހޭ އެހީ އެއްވެދީ
ދެކި ތިހިތް ވާގޮތައް އަދި މަށަށް ވާގޮތައް
*ވާނުވާ ގޮތް އަހަން
އެހައް އަދު ލޯބިދީ
*ރުހެންޔާ ލޯބިދީ`,

  englishLyrics: `#M
Furathama ves fenuneemaa
*Hiyy keehhenuvee nafurathu
Bunelaafaa dhevennyaa loabidhee
*Fenilaafaa ruhenyaa loabidhee
Loa tholhey goyy vanee
*Vaagothey neyngenee
Thiya ishaaraayy kuraa
*Baraabaru loabivee ruhenyaa loabidhee
#1
Abadhu hoadheythi thiya hanndhaannvey nikan
*Hithugavaa leyge asarugaa veymeyey
Thibunihenney vanee beygaraarey vanee
*Yaaru hithugaa hingaa
Thifaagathi loabidhee
*Ruhenyaa loabidhee
#2
Dheki magey haalu mulhihithaa jaanu dhee
*Adhu khiyaaleh nethihey ehee ehvedhee
Dheki thihiyy vaagothah adhi mashah vaagothah
*Vaanuvaa goyy ahan
Ehah adhu loabidhee
*Ruhenyaa loabidh`,
},
{
  id: 214,
  name: `Yaaruge Nalakan`,
  genre: 'Nala',
  lyrics: `#M
ޔާރުގެ ނަލަކަން ހިތާއޭ ކުޅެލީ
*ތާމި ބުނަނީ ފުރިހަމަ ރާގުން
ހާރުގެ މުތްތައް ޖަރީ އެކުރަނީ
*ލޯބި މިތުރުގެ ނިޔަނެތި ބާރުން

#1
މިތުރުގެ ލޯބިން ފުރާނަ ލިބިގެން
*ވާ އުފަލަކުން ލަވައޭ ކިޔެނީ
އިތުރު ބަހާރެއް މަހިތައް ގެނުވީ
*ފެނުނު އެވަރުގެ ފަރި ހަރަކާތުން
ހިތުގެ ލެޔާއެކު މިރާގު ހިނގަނީ
*ރީތި ދެލޮލުގަ ހުރި ގަދަ އަސަރުން

#2
މޫނުގެ އަލިކަން ވެޔޭ ޔަގީނުން
*ސާދަ ވަނަ ރޭ ހަނދުވަރު ފަދައިން
ތޫނު އަސަރު ހުރި ދެލޮލުގެ ނަޒަރުން
*މޭ ޒަޚަމުވީ ކުރި ޖަޒުބާތުން
ތޫނު ޝުއޫރުން ވިންދޭ ޖަހާނީ
*ހާއުފާ ދޭ ފޮނި އުންމީދުން

#3
ޒީނަތްތެރިކަން އިތުރުވާނީ
*ފަހެ ރޭގަނޑެއްފަދަ އިސްތަށިގަނޑަކުން
ވީނަސް ތަރިވެސް ލަދުން ނިވާވޭ
*މޫނުގާ ހުރި އަލިގަދަ ކަމަކުން
ކީނަމަވެސް ބަސްތައް އަމުނައިގެން
*ނެތޭ އަރާމެއް މިހިތުގެ ވޭނުން`,

  englishLyrics: `#M
Yaaruge nalakan hithaaey kulhelee
*Thaami bunanee furihama raagun
Haaruge muyythah jaree ekuranee
*Loabi mithuruge niyanethi baarun
#1
Mithuruge loabin furaana libigen
*Vaa ufalakun lavaey kiyenee
Ithuru bahaareh mahithah genuvee
*Fenunu evaruge fari harakaathun
Hithuge leyaaeku miraagu hinganee
*Reethi dheloluga huri gadha asarun
#2
Moonuge alikan veyey yageenun
*Saadha vanarey handhuvaru fadhain
Thoonu asaru huri dheloluge nazarun
*Mey zakhamuvee kuri jazubaathun
Thoonu shuoorun vinndhey jahaanee
*Haaufaa dhey foni unnmeedhun
#3
Zeenaitherikan ithuruvaanee
*Fahe reygandehfadha isthashigandakun
Veenas tharives ladhun nivaavey
*Moonugaa huri aligadha kamakun
Keenamaves basthah amunaigen
*Nethey araameh mihithuge veynun`,
},
{
  id: 215,
  name: `Saadha Mizaajey`,
  genre: 'Taki',
  lyrics: `#M
ސާދާ މިޒާޖޭ ތިއީ
*ދުނިޔޭގެ ރަނި ކަމުގާ
މުޅި އުމުރަށް އެކީގާ އުޅެން
*ތިބާ ކުރި ވައުދު ބާކީވީ

#1
ދެހިތުގެ އަސަރުތައް ކަރުނުން ފުރާލީ
*ދީވާނަ ކޮއްލީ ތިބާ ދީވާނަ ކޮއްލީ ތިބާ

#2
ވިއްސާރަ ރޭރޭ ތެމުމުން ހަނދާންވޭ
*މިތުރާގެ ވައުދާ ހުވާ މިތުރާގެ ވައުދާ ހުވާ

#3
މިވޭނާ ހިތާމައިގެ އަސަރުން މިލާ
*އަސަރުން މިލާ މޯޅިވޭ އަސަރުން މިލާ މޯޅިވޭ`,

  englishLyrics: `#M
Saadhaa mizaajey thiee
*Dhuniyeyge rani kamugaa
Mulhi umurah ekeegaa ulhen
*Thibaa kuri vaudhu baakeevee
#1
Dhehithuge asaruthah karunun furaalee
*Dheevaana kohlee thibaa dheevaana kohlee thibaa
#2
Vihsaara reyrey themumun handhaannvey
*Mithuraage vaudhaa huvaa mithuraage vaudhaa huvaa
#3
Miveynaa hithaamaige asarun milaa
*Asarun milaa moalhivey asarun milaa moalhivey`,
},
{
  id: 216,
  name: `Kohli Nagaafa`,
  genre: 'Nala',
  lyrics: `#M
ކޮއްލީ ނަގާފާ ސަމާސާ
*ސިއްރުން ހިލޭ ދޯ ޖަވާބު ދީ
ހުވަފެން ތަކުން އޭރު އަތުލީ
*ނިންޖާ އަރާމާ މިހާރު ދީ

#1
ދެއްވި ޔާރާ ލޯބީގެ ހިތްވަރު
*ކޮއްފި ތާ ދޯ ހިތް އުފާ
ދެއްވި ލޯތްބާ ވިންދުގާވީ
*ހިޔާލުތައް ދެން ފޮރުވިފާ
ހައިރާންވެދާނޭ ކަލާތީ
*ޖަދޫގަރެއްހޭ ޖަވާބުދީ

#2
އިންތިޒާރުގަ ހޭލާ އުޅޭކަން
*ދައްނަނީ ދެން ކާކުހޭ
އިންތިޒާރާ މާފު ލޯބިން
*ދީބަލާށޭ ސާބަހޭ
އުޅުނީމެ ހޭލާ މަނުނިދާ
*ރޭރޭ ގުނާފާ ހިސާބުދީ

#3
ހިތުތެރޭގާ ދެން އަންދަޔެ އަލިފާން
*އެންމެ ފުނުގާ ރޯވެޔޭ
ލޯބި އޮއެވަރު ހީވެޔޭ ދޯ
*އުފެދެމުން ލޭގާވެޔޭ
ލޯބިން ދެ ހިތް ކުރުވި މީޒާން
*ގުޅިފާ ނުވޭހޭ ޖަވާބުދީ`,

  englishLyrics: `#M
Kohlee nagaafaa samaasaa
*Sihrun hiley dhoa javaabu dhee
Huvafen thakun eyru athulee
*Ninnjaa araamaa mihaaru dhee
#1
Dhehvi yaaraa loabeege hiyyvaru
*Kohfithaa dhoa hiyy ufaa
Dhehvi loayybaa vinndhugaavee
*Hiyaaluthah dhen foruvifaa
Hairaannvedhaaney kalaathee
*Jadhoogarehhey javaabudhee
#2
Innthizaaruga heylaa ulheykan
*Dhahnanee dhen kaakuhey
Innthizaaraa maafu loabin
*Dheebalaashey saabahey
Ulhuneeme heylaa manunidhaa
*Reyrey gunaafaa hisaabudhee
#3
Hithuthereygaa dhen anndhaye alifaan
*Ennme funugaa roaveyey
Loabi oevaru heeveyey dhoa
*Ufedhemun leygaaveyey
Loabin dhe hiyy kuruvi meezaan
*Gulhifaa nuveyhey javaabudhee`,
},
{
  id: 217,
  name: `Magey Mithuraa`,
  genre: 'Taki',
  lyrics: `#M
މަގޭ މިތުރާ
މަގޭ މިތުރާޔަށް ގަނޑުވަރެއް އަޅައިދޭނަމެ
*ހާސް ނުވާށެ ކެރިހުރެ ޗުއްޓީ ހަދާލަ ދޭނަމޭ
މަގޭ މިތުރާ ދުއްވާނެ ކާރަކާ އެކު
*ކައިރީގަ ގެންގުޅެން އަޅުނާ ޖާރިޔާ މަދޭނަމޭ

#1
ބުރަކަށް ޖެހުމަށް ހާސް ދޮޅުހާސް
*ޑޮލަރުން މަދޭނަމޭ ޑޮލަރުން މަދޭނަމޭ
ރަނަކަށް މިލިއަން ފަސް ބިލިއަން
*ޔޫރޯ މަދޭނަމޭ ޔޫރޯ މަދޭނަމޭ
ހައްސަ ދަރިން ހޯދިޔަސް ހާހެއް ނުވާނެ ކަމަނާ
*އިންނަން އަވަސް ކުރޭ އިންނަން އަވަސް ކުރޭ

#2
ކަމަނާ ހުރިހާ ގުނަވަންތައް
*ރަން އަޅުވަ ދޭނަމޭ ރަން އަޅުވަ ދޭނަމޭ
ހައްޖަށް ފޮނުވާވެސް ދޭނަން
*މުޅި އާއިލާ އެކީ މުޅި އާއިލާ އެކީ
ރުއްސި މި ހިތް ފަރުވާ ހޯދަން އެދޭ ވަރޭ މިއީ
*ކަމަނާ ރުހޭނުހޭ ކަމަނާ ރުހޭނުހޭ

#3
އިރަކަށް ދެ ހެދުން އަދި ލިޔަކަސް
*ބަލަ ހާސް ނުވާނެޔޭ ބަލަ ހާސް ނުވާނެޔޭ
ކެއުމުގެ ހަރަދަށް ހާސް ދޮޅު ހާސް
*އުފަލުން މަދޭނަމޭ އުފަލުން މަދޭނަމޭ
ލައްކަ ހަރަދު ކުރިޔަސް ކަންބޮޑު ނުވާނެ އަހަރެން
*އިންނަން އަވަސް ކުރޭ އިންނަން އަވަސްކުރޭ`,

  englishLyrics: `#M
Magey mithuraa
Magey mithuraayah ganduvareh alhaidheyname
*Haas nuvaashe kerihure chuhtee hadhaala dheynamey
Magey mithuraa dhuhvaane carakaa eku
*Kaireega genngulhen alhunaa jaariyaa madheynamey
#1
Burakah jehumah haas dholhuhaas
*Dollarun madheynamey dollarun madheynamey
Ranakah million fas billion
*Euro madheynamey euro madheynamey
Hahsa dharin hoadhiyas haaheh nuvaane kamanaa
*Innan avas kurey innan avas kurey
#2
Kamanaa hurihaa gunavannthah
*Ran alhuva dheynamey ran alhuva dheynamey
Hahjah fonuvaaves dheynan
*Mulhi aailaa ekee mulhi aailaa ekee
Ruhsi mi hiyy faruvaa hoadhan edhey varey miee
*Kamanaa ruheynuhey kamanaa ruheynuhey
#3
Irakah dhe hedhun adhi liyakas
*Bala haas nuvaaneyey bala haas nuvaaneyey
Keumuge haradhah haas dholhu haas
*Ufalun madheynamey ufalun madheynamey
Lahka haradhu kuriyas kannbodu nuvaane aharen
*Innan avas kurey innan avaskurey`,
},
{
  id: 218,
  name: `Mahaldheeb`,
  genre: 'Thinberu',
  lyrics: `#S
ލޯތައް ސިހޭ އަޖައިބުން
ލާމަސީލުވީ ނަޔާ ތިބޭ
މީމަގޭ މަހަލްދީބޭ

#M
ރަން މުތުގެ ހާރެކޭ މޫސުން ބަހާރެކޭ
*މާމަލުގެ ޒާރެކޭ މޫރިތި ހިޔާލެކޭ
މީ މަގޭ ފުރާނައޭ މިހިތާ ވިންދު މެޔޭ
*މީ މަގޭ ފުރާނައޭ މިހިތާ ވިންދު މެޔޭ
މީ މަގޭ ދިވެހި ރާއްޖެއޭ
*ޗާލު ވި ވަތަން މަގޭ

#1
ރިހިވެލި ތުނޑި ތަކުގެ ޖަޒީރާ މި ރަށްތަކާ
*ފެހި ރުއް ގަސްތަކުގެ ނަޔާ ޗާލު މަލަތަކާ
ހޮޅި އުދުހޭ ރާޅު ބީއްސާ ގޮނޑު ދޮއްތަކާ
*ފެހިވިލު ގިރިފަޅާ ވަށާވޭ ފުން ކަނޑުތަކާ
މުރަކަ ބަގީޗާ ތަކާ
*މީ މަގޭ ފުރާނައޭ މިހިތާ ވިންދު މެޔޭ`,

  englishLyrics: `#S
Loathah sihey ajaibun
Laamaseeluvee nayaa thibey
Meemagey mahaldheebey
#M
Ran muthuge haarekey moosun bahaarekey
*Maamaluge zaarekey moorithi hiyaalekey
Mee magey furaanaey mihithaa vinndhu meyey
*Mee magey furaanaey mihithaa vinndhu meyey
Mee magey dhivehi raajjeey
*Chaalu vi vathan magey
#1
Rihiveli thundi thakuge jazeeraa mi rahthakaa
*Fehi ruh gasthakuge nayaa chaalu malathakaa
Holhi udhuhey raalhu beehsaa gondu dhohthakaa
*Fehivilu girifalhaa vashaavey fun kanduthakaa
Muraka bageechaa thakaa
*Mee magey furaanaey mihithaa vinndhu meyey`,
},
{
  id: 219,
  name: `Naazukee Shabaab`,
  genre: 'Nala',
  lyrics: `#M
ނާޒުކީ ޝަބާބުގާ ނިޝާނާ ޔެ ތިޔާ
*ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ

#1
ފަރިވި ތާޒާ މަލެއް މަސްތު ކުރުވީ ވަހެއް
*ކަރުގަނޑުން ރޫހުދޭ ފޮނިވި ޝަބުނަމު އޮހޭ އޯ އޯ އޯ
އާޝިޤީ ހުސްވުންނުވާ ހަޒާނައޭ ތިޔާ
*ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ

#2
އެންމެފުރަތަމަ ނަޒަރު ކުރުވިމަސްތީ އަސަރު
*ދެއްވި އުންމީދަކުން ލޯބި ޖާދޫ މިތުރު އޯ އޯ އޯ
ޒިންދަގީ ދިރުވާ ނަޔާ ނިޝާނާޔެ ތިޔާ
*ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ

#3
އަބަދު ހިނިތުންވެލާ ގާތު ހުރުމަށް އެދޭ
*ޚިދުމަތެއް ދާއިމީ އާދެ ލިބުމައްއެދޭ އޯ އޯ އޯ
ރޭދުވާ އާލާވެދާ ހަނދައަނާޔެ ތިޔާ
*ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ ނޫރޭ މޫނުން ސޫރަވާ ޒުވާނާ އޭ ތިޔާ`,

  englishLyrics: `#M
Naazukee shabaabugaa nishaanaa ye thiyaa
*Noorey moonun sooravaa zuvaanaa ey thiyaa noorey moonun sooravaa zuvaanaa ey thiyaa
#1
Farivi thaazaa maleh masthu kuruvee vaheh
*Karugandun roohudhey fonivi shabunamu ohey oa oa oa
Aashiqee husvunnuvaa hazaanaey thiyaa
*Noorey moonun sooravaa zuvaanaa ey thiyaa noorey moonun sooravaa zuvaanaa ey thiyaa
#2
Ennmefurathama nazaru kuruvimasthee asaru
*Dhehvi unnmeedhakun loabi jaadhoo mithuru oa oa oa
Zinndhagee dhiruvaa nayaa nishaanaaye thiyaa
*Noorey moonun sooravaa zuvaanaa ey thiyaa noorey moonun sooravaa zuvaanaa ey thiyaa
#3
Abadhu hinithunnvelaa gaathu hurumah edhey
*Khidhumatheh dhaaimee aadhe libumahedhey oa oa oa
Reydhuvaa aalaavedhaa handhaanaaye thiyaa
*Noorey moonun sooravaa zuvaanaa ey thiyaa noorey moonun sooravaa zuvaanaa ey thiyaa`,
},
{
  id: 220,
  name: `Chakafalu`,
  genre: 'Nala',
  lyrics: `#M
ފަތިހުގެ ހިމޭންކަންވެ އަލިކަން އުޖާލާ
*ޗަކަފަލުތެރޭގާ ބޮނދާ އޮވެ ގޮވާލާ
އިރުވަރު ބަލާ ގޮނޑުދޮށުގަ ހިނގާލާ
*މަންޒިލް ފެނޭތޯ އެ ފަލުތައް ބަލާލާ
ނަންރީތިކަން ވެފަ ނެތް ދޫންޏެއް މިތާނގާ
*ހާލީގަ އޮވެގެން ހިތާމައިގަ ރޯލާ

#1
ދުވަހަށް މިވާ ގޮތް ފަލުގެ ތެރޭގާ
*ފަޅުކަން ފިލާ ގޯސްދާނެ ނަމައޭ
ޔާރެއް ޕިޔާރެއް ނެތި ފަލުގެ ތެރޭގާ ނިދާލާ
*ޔާރެއްގެ ހުވަފެންތަކަކުން ވެވި އެކަނި އޮވެ ބަލާލާ

#2
އަންނާނެ މާދަމަ ފެންނާނެ ނަމައޭ
*ދަންނާނެ ޔާރެއް ލިބިދާނެ ނަމައޭ
ދަންނާނެ ޔާރެއް ނެތި ފަލުގެ ތެރޭގާ ނިދާލާ
*ޔާރެއްގެ ހުވަފެން ހިނިތުން ވެވި އެކަނި އޮވެ ބަލާލާ`,

  englishLyrics: `#M
Fathihuge himeynnkannve alikan ujaalaa
*Chakafaluthereygaa bondhaa ove govaalaa
Iruvaru balaa gondudhoshuga hingaalaa
*Mannzil feneythoa e faluthah balaalaa
Nannreethikan vefa neyy dhoonnyeh mithaangaa
*Haaleega ovegen hithaamaiga roalaa
#1
Dhuvahah mivaa goyy faluge thereygaa
*Falhukan filaa gosdhaane namaey
Yaareh piyaareh nethi faluge thereygaa nidhaalaa
*Yaarehge huvafennthakakun vevi ekani ove balaalaa
#2
Annaane maadhama fennaane namaey
*Dhannaane yaareh libidhaane namaey
Dhannaane yaareh nethi faluge thereygaa nidhaalaa
*Yaarehge huvafen hinithun vevi ekani ove balaalaa`,
},
{
  id: 221,
  name: `Javvun Fenihjeyey Thari`,
  genre: 'Kaasi',
  lyrics: `#M
ޖައްވުން ފެނިއްޖެޔޭ ތަރި
*އައިށާގެ ނަންދެވޭ ފަރި
ލޯތައް އަޅަން ފެށިޔޭ ކަޅި
*ޖައްވުން ވިދަން ފެށީމާ
*ޖައްވުން ފެނިއްޖެޔޭ ތަރި

#1
މަގަކުން ހިނގާފަ ދާއިރު ކަމަނާގެ ފައިޖެހޭ އިރު
ގައިމޭ ވެދާނެޔޭ މޮޅު އަގުބޮޑު ޖަވާހިރައްވެސް
*މަގަކުން ހިނގާފަ ދާއިރު ކަމަނާގެ ފައިޖެހޭ އިރު
*ގައިމޭ ވެދާނެޔޭ މޮޅު އަގުބޮޑު ޖަވާހިރައްވެސް

#2
ހާސިލު ވެދާނެ މީހަކު ކަމަނާގެ ލޯބި އަގުބޮޑު
އޭނާ ވެދާނެ މުއްސަންދި ރާއްޖޭގެ ވަނަ ދެވޭވަރު
*ހާސިލު ވެދާނެ މީހަކު ކަމަނާގެ ލޯބި އަގުބޮޑު
*އޭނާ ވެދާނެ މުއްސަންދި ރާއްޖޭގެ ވަނަ ދެވޭވަރު

#3
ޝާއިރު ތިމޫނު ފެނިގެން ބުރުސޫރަ އަށް ބަލާފަ
ޝާއިރު ހަދަން ފަށާނޭ ޅެން ފަރިހި އުމުރުގާވެސް
*ޝާއިރު ތިމޫނު ފެނިގެން ބުރުސޫރަ އަށް ބަލާފަ
*ޝާއިރު ހަދަން ފަށާނޭ ޅެން ފަރިހި އުމުރުގާވެސް

#4
މޫސުން ބަހާރު އައިމާ މާތައް ހެވެން ފެށީމާ
ނުފެނޭ ތަފާތު ކަމަނާ ހީލާ ބަލާ އުޅޭ ގޮތް
*މޫސުން ބަހާރު އައިމާ މާތައް ހެވެން ފެށީމާ
*ނުފެނޭ ތަފާތު ކަމަނާ ހީލާ ބަލާ އުޅޭ ގޮތް

#5
ޝާއިރު އެދެން އަބަދުވެސް މާމަލުގެ ވާރެވެއްސަން
މޫސުން ބަހާރު އައިމާ ކަމަނާ އެ ފެންވަރާއިރު
*ޝާއިރު އެދެން އަބަދުވެސް މާމަލުގެ ވާރެވެއްސަން
*މޫސުން ބަހާރު އައިމާ ކަމަނާ އެ ފެންވަރާއިރު`,

  englishLyrics: `#M
Jahvun fenihjeyey thari
*Aishaage nanndhevey fari
Loathah alhan feshiyey kalhi
*Jahvun vidhan fesheemaa
*Jahvun fenihjeyey thari
#1
Magakun hingaafa dhaairu kamanaage faijehey iru
*Gaimey vedhaaneyey molhu agubodu javaahirahves
Magakun hingaafa dhaairu kamanaage faijehey iru
*Gaimey vedhaaneyey molhu agubodu javaahirahves
#2
Haasilu vedhaane meehaku kamanaage loabi agubodu
*Eynaa vedhaane muhsanndhi raahjeyge vana dheveyvaru
Haasilu vedhaane meehaku kamanaage loabi agubodu
*Eynaa vedhaane muhsanndhi raahjeyge vana dheveyvaru
#3
Shaairu thimoonu fenigen burusoora ah balaafa
*Shaairu hadhan fashaaney lhen farihi umurugaaves
Shaairu thimoonu fenigen burusoora ah balaafa
*Shaairu hadhan fashaaney lhen farihi umurugaaves
#4
Moosun bahaaru aimaa maathah heven fesheemaa
*Nufeney thafaathu kamanaa heelaa balaa ulhey goyy
Moosun bahaaru aimaa maathah heven fesheemaa
*Nufeney thafaathu kamanaa heelaa balaa ulhey goyy
#5
Shaairu edhen abadhuves maamaluge vaarevehsan
*Moosun bahaaru aimaa kamanaa e fennvaraairu
Shaairu edhen abadhuves maamaluge vaarevehsan
*Moosun bahaaru aimaa kamanaa e fennvaraairu`,
},
{
  id: 222,
  name: `Shaadhee Gaana`,
  genre: 'Nala',
  lyrics: `#M
ޝާދީ ގާނަ
ވި ލޯބި ލޯބި ހަސްތީ ބަހާރުގާ ސުހާނާ
*ދޭތި ފޯރި ޖާން މިރޭގެ ޝާދީ ގާނާ

#1
ޗާލުވި ޤުމްރީ މުނިޔާ ކޮކާލާ
*ނަރުގިސް މަލުގާ އުފަލުން ކުޅެލާ
ހީލާފާ ލޯބިން ފިރުމާލާ ހިޔާލާ ގުޅުވާލާ
*ދޭތި ފޯރި ޖާން މިރޭގެ ޝާދީ ގާނާ

#2
މީރު ސަޔާ ރަހަމީރު އެބުއިންތައް
*މީރު ކުރީމްކޭކަރު ހަދިޔާތައް
އަގު މާތްވި ކާނާ ބަނާނާ ބަޓަރު ޖެހި ޕާނާ
*ދޭތި ފޯރި ޖާން މިރޭގެ ޝާދީ ގާނާ

#3
ނޫރުތަކުން މުޅި ކައުނު ވިދާލީ
*ރޭގެ ފަޒާޔާ ޖައްވުދިއްލާލީ
ޝާދީގެ ސާދުންދޭ ފުރާނަ ގުޅާލީއޭ ޖަޕާނާ
*ދޭތި ފޯރި ޖާން މިރޭގެ ޝާދީ ގާނާ`,

  englishLyrics: `#M
Shaadhee gaana
Vi loabi loabi hasthee bahaarugaa suhaanaa
*Dheythi foari jaan mireyge shaadhee gaanaa
#1
Chaaluvi qumree muniyaa kokaalaa
*Narugis malugaa ufalun kulhelaa
Heelaafaa loabin firumaalaa hiyaalaa gulhuvaalaa
*Dheythi foari jaan mireyge shaadhee gaanaa
#2
Meeru sayaa rahameeru ebuinnthah
*Meeru kureemkeykaru hadhiyaathah
Agu maayyvi kaanaa banaanaa bataru jehi paanaa
*Dheythi foari jaan mireyge shaadhee gaanaa
#3
Nooruthakun mulhi kaunu vidhaalee
*Reyge fazaayaa jahvudhihlaalee
Shaadheege saadhunndhey furaana gulhaaleeey japaanaa
*Dheythi foari jaan mireyge shaadhee gaanaa`,
},
{
  id: 223,
  name: `Gaumah Miadhu Alikohli`,
  genre: 'Nala',
  lyrics: `#M
ގައުމަށް މިއަދު އަލިކޮއްލި ރީތި ނިޝާނާ
*ގައުމީ ޒަޢީމުން ދެއްވި މާތްވި ހަނދައަނާ

#1
އަލިކަން މި ގައުމުން ފެންނަ ހިނދު ހުއްރިއްޔަތީ
*އަލި ރަސްގެފާނުން ދެއްވި ހަމަލާޔުން މަތީ
އަލި ނޫރުތައް ބަބުޅާލި ވަތަނުގެ ބިންމަތީ
*އަލިވާ ހަނދާނުން ދިއްލި ރީތި ފަސާނާ

#2
ގައުމުގެ ރައީސަށް ބާއްޖަވެރިކަން އެދި އަލުން
*ގައުމަށް އިތުރު ކުރިއެރުމަކަށް އެދި ފަށްފަށުން
ގައުމުގެ ވަތަންގެ ހިތާއި މިއަތާ އަދި ދުލުން
*ގައުމީ ދުއާއިން ދަންނަވާ ޝުކުރާނާ`,

  englishLyrics: `#M
Gaumah miadhu alikohli reethi nishaanaa
*Gaumee zaieemun dhehvi maayyvi handhaanaa
#1
Alikan mi gaumun fenna hindhu huhrihyathee
*Ali rasgefaanun dhehvi hamalaayun mathee
Ali nooruthah babulhaali vathanuge binnmathee
*Alivaa handhaanun dhihli reethi fasaanaa
#2
Gaumuge raeesah baahjaverikan edhi alun
*Gaumah ithuru kurierumakah edhi fahfashun
Gaumuge vathannge hithaai miathaa adhi dhulun
*Gaumee dhuaain dhannavaa shukuraanaa`,
},
{
  id: 224,
  name: `Mulhi Jahvaa Hasthee`,
  genre: 'Nala',
  lyrics: `#M
މުޅި ޖައްވާ ހަސްތީ ޗާލޫ ދެކޭށޭ ލޯބިވާ
*ވީ ރޯޝަނީ އުޑާ ބިން އައުމުންނޭ ލޯބިވާ
ކިޔާ ދޭހާ ރާގު މިތާ ހިތް ގައިމޭ ލޯބިވާ
*މީ ލޯތްބަކީ މީ ލޯތްބަކީ އެނގޭހޭ ލޯބިވާ

#1
ފަތުރުވައިފިޔޭ ވައި ތި ލޯބީގެ ޖާދޫ
*ދެކޭށޭ ހަނދައް ވެސް ޖެހިއްޖޭ ތި ޖާދޫ
މަގޭ ރީތި މައިނާ އެވާގޮތް އެނގޭހޭ
*މިހާ ރީތި މޫނެއް މި ދޭހުން ކޮބާ ހޭ
ތިޔަ މޫނުން ވޭ މެހެފިލުތައް އުޖާލާ ލޯބިވާ
*ވީ ރޯޝަނީ އުޑާ ބިން އައުމުންނޭ ލޯބިވާ

#2
މަގޭ ހިތުގެ މަލިކާ މިހާލަތު ދެކޭށޭ
*ކަލާ ފެންނަ ހިނދުގާ ހިތަށް ތަދުވަނީ އޭ
ލޮލާ ތޫނު ކަޅިއާ އަސަރު ކުރުވަނީ އޭ
*ވިދާ ރީތި ކަނދުރާ ނުފޮރުވާށޭ ރާނީ
އަލިކޮއްލާ ދޭށޭ ނޫރުން ފަޒާ ލޯބިވާ
*ވީ ރޯޝަނީ އުޑާ ބިން އައުމުންނޭ ލޯބިވާ

#3
ވިލާ ތަކުގެ މުދުގާ ވެޔޭ ނަން ލިޔެވިފާ
*ކަލާޔަށް ދުއާޔާ ސަލާމާއި ވެދުމާ
ބުނަންހޭ މަގޭ ހިތް ކިޔާދޭ ގަޒަލުމީ
*ހިތާ ހިތް ގުޅޭތީ އެ އުފަލުން މިތާނގާ
ނަލަ މާތައް ފަރިވާތަން ފެނޭހޭ ލޯބިވާ
*ވީ ރޯޝަނީ އުޑާ ބިން އައުމުންނޭ ލޯބިވާ`,

  englishLyrics: `#M
Mulhi jahvaa hasthee chaaloo dhekeyshey loabivaa
*Vee roashanee udaa bin aumunney loabivaa
Kiyaa dheyhaa raagu mithaa hiyy gaimey loabivaa
*Mee loayybakee mee loayybakee engeyhey loabivaa
#1
Fathuruvaifiyey vai thi loabeege jaadhoo
*Dhekeyshey handhah ves jehihjey thi jaadhoo
Magey reethi mainaa evaagoyy engeyhey
*Mihaa reethi mooneh mi dheyhun kobaa hey
Thiya moonun vey mehefiluthah ujaalaa loabivaa
*Vee roashanee udaa bin aumunney loabivaa
#2
Magey hithuge malikaa mihaalathu dhekeyshey
*Kalaa fenna hindhugaa hithah thadhuvanee ey
Lolaa thoonu kalhiaa asaru kuruvanee ey
*Vidhaa reethi kandhuraa nuforuvaashey raanee
Alikohlaa dheyshey noorun fazaa loabivaa
*Vee roashanee udaa bin aumunney loabivaa
#3
Vilaa thakuge mudhugaa veyey nan liyevifaa
*Kalaayah dhuaayaa salaamaai vedhumaa
Bunanhey magey hiyy kiyaadhey gazalumee
*Hithaa hiyy gulheythee e ufalun mithaangaa
Nala maathah farivaathan feneyhey loabivaa
*Vee roashanee udaa bin aumunney loabivaa`,
},
{
  id: 225,
  name: `Iruvai Halhain`,
  genre: 'Thinberu',
  lyrics: `#M
އިރުވައި ހަޅައިން ފުޅަނގި ހިލާ
*އިރުވައި ހަޅައިން ފުޅަނގި އަރާ
ގޮއްރާޅު ތެރޭން ފުޅަނގި ހިލާ
*ގޮއްރާޅު މަތިން ފުޅަނގި އަރާ

#1
ކަނޑުގެ ހުކުން ދަންނަމުތޯ ކުޑައެތި ފަށްާ ބޮޑުއެތި ދުވޭ
*ކަނޑުގެ ހުކުން ދަންނަމުތޯ ކުޑައެތި ފަށްާ ބޮޑުއެތި ދުވޭ
ކަންނެލި ހިބަރު ކަވާލަޔޯ ބަޑި ޖައްސާ ކަވާލަޔޯ
*ކަންނެލި ހިބަރު ކަވާލަޔޯ ބަޑި ޖައްސާ ކަވާލަޔޯ

#2
ދަނޑިވަޅުނަގާ އުދަރެސް ބަލާ ރަށުތެރެއަށް ފުޅަނގި އަރާ
*ދަނޑިވަޅުނަގާ އުދަރެސް ބަލާ ރަށުތެރެއަށް ފުޅަނގި އަރާ
ކަނޑުން އަރާ ގޮނޑުދޮށުގާ ތެޅިތެޅި އޮވެ ވަނީ މަރޯ
*ކަނޑުން އަރާ ގޮނޑުދޮށުގާ ތެޅިތެޅި އޮވެ ވަނީ މަރޯ`,

  englishLyrics: `#M
Iruvai halhain fulhangi hilaa
*Iruvai halhain fulhangi araa
Gohraalhu thereyn fulhangi hilaa
*Gohraalhu mathin fulhangi araa
#1
Kanduge hukun dhannamuthoa kudaethi fahaa boduethi dhuvey
*Kanduge hukun dhannamuthoa kudaethi fahaa boduethi dhuvey
Kanneli hibaru kavaalayoa badi jahsaa kavaalayoa
*Kanneli hibaru kavaalayoa badi jahsaa kavaalayoa
#2
Dhandivalhunagaa udhares balaa rashuthereah fulhangi araa
*Dhandivalhunagaa udhares balaa rashuthereah fulhangi araa
Kandun araa gondudhoshugaa thelhithelhi ove vanee maroa
*Kandun araa gondudhoshugaa thelhithelhi ove vanee maroa`,
},
{
  id: 226,
  name: `Hiyy Loabeegaa`,
  genre: 'Thinberu',
  lyrics: `#M
ހިތް ލޯބީގާ ފަނާވާތީ ކުރާ ދުއާ އޭމީ
*ހިތް ލޯބީގާ ފަނާވާތީ ކުރާ ދުއާ އޭމީ
ނަޖާވެވޭ ވެވުން އަދާ ދެންނެވޭ ދުއާ އޭމީ
*ހިތް ލޯބީގާ ފަނާވާތީ ކުރާ ދުއާ އޭމީ

#1
ހޭވެރި ނުމެވާ ޅަޒުވާން ހިތުގެ ފުން ހިޔާލާ
*ހޭވެރި ނުމެވާ ޅަޒުވާން ހިތުގެ ފުން ހިޔާލާ
ލޯބިން ކުޅެލާފިޔެ މިތުރާ އެ ހިތް އޮޔާލާ
*ލޯބިން ކުޅެލާފިޔެ މިތުރާ އެ ހިތް އޮޔާލާ
ދާނޭ ނެތި މަންޒިލެއް ނެތުމުން ކުރާ ދުއާ އޭމީ
*ހިތް ލޯބީގާ ފަނާވާތީ ކުރާ ދުއާ އޭމީ

#2
ލިބިދިނެ ޚިދުމަތް ނިޔަނެތި ކަމުގެ ތަންމަތީގާ
*ލިބިދިނެ ޚިދުމަތް ނިޔަނެތި ކަމުގެ ތަންމަތީގާ
މިބިމާ ކައުނާ މުޅި ދުނިޔޭގެ ކުރިމަތީގާ
*މިބިމާ ކައުނާ މުޅި ދުނިޔޭގެ ކުރިމަތީގާ
ވެ ބަދަލު އެ ޒަމާން އުވި ދިއުމުން ކުރާ ދުއާ އޭމީ
*ހިތް ލޯބީގާ ފަނާވާތީ ކުރާ ދުއާ އޭމީ

#3
ތިޔައީ ދުނިޔޭން ލިބިދިން އެންމެ ފޮނި އަރާމޭ
*ތިޔައީ ދުނިޔޭން ލިބިދިން އެންމެ ފޮނި އަރާމޭ
ތިޔަނޫން އުފަލެއް އަމުދުން ދެން މަވެސް ހަރާމޭ
*ތިޔަނޫން އުފަލެއް އަމުދުން ދެން މަވެސް ހަރާމޭ
ހިޔަލުން ތިޔަ ބީވުމުން ތަކުރާރުވާ ދުއާ އޭމީ
*ހިތް ލޯބީގާ ފަނާވާތީ ކުރާ ދުއާ އޭމީ`,

  englishLyrics: `#M
Hiyy loabeegaa fanaavaathee kuraa dhuaa eymee
*Hiyy loabeegaa fanaavaathee kuraa dhuaa eymee
Najaavevey vevun adhaa dhennevey dhuaa eymee
*Hiyy loabeegaa fanaavaathee kuraa dhuaa eymee
#1
Heyveri numevaa lhazuvaan hithuge fun hiyaalaa
*Heyveri numevaa lhazuvaan hithuge fun hiyaalaa
Loabin kulhelaafiye mithuraa e hiyy oyaalaa
*Loabin kulhelaafiye mithuraa e hiyy oyaalaa
Dhaaney nethi mannzileh nethumun kuraa dhuaa eymee
*Hiyy loabeegaa fanaavaathee kuraa dhuaa eymee
#2
Libidhine khidhumayy niyanethi kamuge thannmatheegaa
*Libidhine khidhumayy niyanethi kamuge thannmatheegaa
Mibimaa kaunaa mulhi dhuniyeyge kurimatheegaa
*Mibimaa kaunaa mulhi dhuniyeyge kurimatheegaa
Ve badhalu e zamaan uvi dhiumun kuraa dhuaa eymee
*Hiyy loabeegaa fanaavaathee kuraa dhuaa eymee
#3
Thiyaee dhuniyeyn libidhin ennme foni araamey
*Thiyaee dhuniyeyn libidhin ennme foni araamey
Thiyanoon ufaleh amudhun dhen maves haraamey
*Thiyanoon ufaleh amudhun dhen maves haraamey
Hiyalun thiya beevumun thakuraaruvaa dhuaa eymee
*Hiyy loabeegaa fanaavaathee kuraa dhuaa eymee`,
},
{
  id: 227,
  name: `Vindhuthah Mi Hithugaa`,
  genre: 'Taki',
  lyrics: `#M
ވިންދުތައް މި ހިތުގާ ވާ ހޭލައިފިޔޭ
*ތިފަރި މޫނު ހިތް މި ދިވާނާ ކޮއްފިއޭ
ދީވާނާ
*ދީވާނާ
ދީވާނާ
*ވެއްޖެ އޭ ދީވާނާ

#1
ޗާލު ސޫރަ ފެނުނީމާ އާށޯއްުވޭ
*ކަޅި ޖަހާ ނުލާ ލޯބި ހަށިގަނޑަށް ބެލޭ
ހީލުމުން ކަލާ ލޯބިން މާތައް ފޮޅޭ
*މީރުވަސް ދުވާ ޖިސްމުން ވަސް ފަތުރުވާލައޭ
އަންނާށޭ ޔާރާ އޭ
*ހިތް ބޭނުން ވާ ލޯބީ ތިޔޭ
*އުއްމީދުތައް ހިތުގެ އާލާ ވެއްޖޭ

#2
ދިރުމަކީ ހަޔާތުގެ ތިޔައޭ ހިތް ބުނޭ
*ލޯބި ވެތި ވަފާތެރިކަން ތީ އެ ހިތް ބުނޭ
ހިތް މަގޭ ތި ލޯބީގަ ގެއްލިއްޖެ އޭ
*ހިއްސުތައް ތިރީތި ކަމުން ގައިދު ކޮއްފިއޭ
އިހުސާސްތައް ހިތުގާ ވާ
*ތާޒާ ކޮއްދޭ ޔާރާ ތިޔޭ
*އުންމީދު ތައް ހިތުގެ އާލާ ވެއްޖޭ`,

  englishLyrics: `#M
Vinndhuthah mi hithugaa vaa heylaifiyey
*Thifari moonu hiyy mi dhivaanaa kohfiey
Dheevaanaa
*Dheevaanaa
Dheevaanaa
*Vehje ey dheevaanaa
#1
Chaalu soora fenuneemaa aashoahuvey
*Kalhi jahaa nulaa loabi hashigandah beley
Heelumun kalaa loabin maathah folhey
*Meeruvas dhuvaa jismun vas fathuruvaalaey
Annaashey yaaraa ey
*Hiyy beynun vaa loabee thiyey
*Uhmeedhuthah hithuge aalaa vehjey
#2
Dhirumakee hayaathuge thiyaey hiyy buney
*Loabi vethi vafaatherikan theee hiyybuney
Hiyy magey thiloabeegaa gehlihje ey
*Hihsuthah thireethi kamun gaidhu kohfiey
Ihusaasthah hithugaa vaa
*Thaazaa kohdhey yaaraa thiyey
*Unnmeedhu thah hithuge aalaa vehjey`,
},
{
  id: 228,
  name: `Vaadhuvahey Haaluga`,
  genre: 'Nala',
  lyrics: `#M
ވާދުވަހޭ ހާލުގަ ޖާނާ ނޫން
*ކުދި ކުދި މޭ ކުދިވެ ކުދިމޭ މަރު އާނާ

#1
އަނގައަ ހިތާ މޭ ހަލާކު ވެދާ މޭ
*ހިތު ލޯބިދޭ މި ޝަޒާއިން
އިޝްޤީ ޖަޒާ އޭ އިޝްޤީ އަޒާބޭ
*އިޝްޤީ ޖަޒާ އޭ އިޝްޤީ އަޒާބޭ
ފަހެ މި ހާލަކީ ކަލާ އޭ
*ފަސޭހައިން ދާތީ ފުރާނާ

#2
ހިޔާލު މިހާރު ހުރީ ދިލް މިހާރު ހުރީ
*ތޫފާން ގަޔޭ ދިލް
ބުނެ ދުޝްމިން އަންގަ ތިހިރީހި ދިލް ފާރުވެ ޖާނާ
*ފަސޭހައިން ދާތީ ފުރާނާ`,

  englishLyrics: `#M
Vaadhuvahey haaluga jaanaa noon
*Kudhi kudhi mey kudhive kudhi mey maru aanaa
#1
Angaa hithaa mey halaaku vedhaa mey
*Hithu loabidhey mi shazaain
Ishqee jazaa ey ishqee azaabey
*Ishqee jazaa ey ishqee azaabey
Fahe mi haalakee kalaa ey
*Faseyhain dhaathee furaanaa
#2
Hiyaalu mihaaru huree dhil mihaaru huree
*Thoofaan gayey dhil
Bune dhushmin annga thihireehi dhil faaruve jaanaa
*Faseyhain dhaathee furaanaa`,
},
{
  id: 229,
  name: `Maa Keyolhu Kamah`,
  genre: 'Thinberu',
  lyrics: `#M
މާ ކެޔޮޅު ކަމަށް މޮޅު ކެޔޮޅަކު ނުކުތެ ރޭގަނޑަކު
*ބާދޯނި ގަނޑެއްގާ ދުއްވަން ލައްކަ ގަދަ ކަނޑަކު
ގާ ދޫނި ކުރަނގި މާރަނގަ ގޮވަޔޭ ތިބެ ފާޑަކު
*މާ ކެޔޮޅުބެ ދުއްވާ ނަގަޔޭ އޮޑިގަނޑުގާ ކަނޑު

#1
ފަތިހެއްގެ އަސާސީ ވާޖިބު ފަރުޟު އަދާކޮށް
*ލަތި ދީވި އަތުން ކަމަނަގެ މޮޅު ކޮއްތު ރެޑީކޮށް
އަތިރީ ބޮޑު ފަޅުގާ އޮތް ބާއޮޑި ގަނޑު ތިލަކޮށް
*މާ ކެޔޮޅުބެ ދުއްވާ ނަގަޔޭ އޮޑިގަނޑުގާ ކަނޑު

#2
އައިބާރު ދެތިން ރޯޅި ޖެހުނެ އުތުރު ފަރާތުން
*ވައިބާރުވެ ކޮޅިގަނޑުގެ އެ ވިއްސާރަވެ ޒާތުން
އޮއި ގަދަވެ ގަދަ އޮޔާ ދެކޮޅައް ދެކުނު ފަރާތުން
*މާ ކެޔޮޅުބެ ދުއްވާ ނަގަޔޭ އޮޑިގަނޑުގާ ކަނޑު

#3
ފަޅުވެރިޔަކު ނެތް މިފަދަ ދަތުރު މިފަދަ އޮޑީގައި
*ކަޅު ކަނޑު ގަދައިގާ މާ ވިއްސާރަ ތެރޭގާ
މަޅު ބާވި އޮޑީ ހަސްނެތި ހުރެ ދުކުގެ މަތީގާ
*މާ ކެޔޮޅުބެ ދުވާ ނަގަޔޭ އޮޑިގަނޑުގާ ކަނޑު`,

  englishLyrics: `#M
Maa keyolhu kamah molhu keyolhaku nukuthe reygandaku
*Baadhoani gandehgaa dhuhvan lahka gadha kandaku
Gaa dhooni kurangi maaranga govayey thibe faadaku
*Maa keyolhube dhuhvaa nagayey odigandugaa kandu
#1
Fathihehge asaasee vaajibu farulu adhaakoh
*Lathi dheevi athun kamanage molhu kohthu readykoh
Athiree bodu falhugaa oyy baaodi gandu thilakoh
*Maa keyolhube dhuhvaa nagayey odigandugaa kandu
#2
Aibaaru dhethin roalhi jehune uthuru faraathun
*Vaibaaruve kolhiganduge e vihsaarave zaathun
Oi gadhave gadha oyaa dhekolhah dhekunu faraathun
*Maa keyolhube dhuhvaa nagayey odigandugaa kandu
#3
Falhuveriyaku neyy mifadha dhathuru mifadha odeegai
*Kalhu kandu gadhaigaa maa vihsaara thereygaa
Malhu baavi odee hasnethi hure dhukuge matheegaa
*Maa keyolhube dhuvaa nagayey odigandugaa kandu`,
},
{
  id: 230,
  name: `Dhuru Dhurun Hiyanivelaa`,
  genre: 'Thinberu',
  lyrics: `#M
ދުރު ދުރުން ހިޔަނިވެލާ ތުރު ތުރުލާ ހީ ނަގާ
*ފުރުސަތެއް ލިބޭނެތޯ ފަހަތުން ބޯދީ ބެލީ

#1
ސޫރަ ނިކަން ރީތި ގޮމާ ހޫރު ޕަރީ ފަދަ ގޮމާ
*ހޫރު ޕަރީ ފަދަ ގޮމާ
މުޅި ތިހަނދު ފަދަ އެކުވާ މޫނު ސާފު ފަރިވުމުން
*ފުރުސަތެއް ލިބޭނެތޯ ފަހަތުން ބޯދީ ބެލީ

#2
އިސްތަށިގަނޑު ވިހުރާލާ ވައިގެ ތެރޭ ނަށާލުމުން
*ވައިގެ ތެރޭ ނަށާލުމުން
ނެށުމުގެ ފަރި ހަރަކާތުން މުޅި ހިތް އެކު ފުރާލުމާ
*ފުރުސަތެއް ލިބޭނެތޯ ފަހަތުން ބޯދީ ބެލީ

#3
ޗާލު ރީތި ކަޅިރަވަޔާ ސާފު ރީތި އެސްފިޔަތައް
*ސާފު ރީތި އެސްފިޔަތައް
ފެނުމުން ފުރިހަމަކަން ފެނިލައްޒަތު ޒަހަމު ވުމުން
*ފުރުސަތެއް ލިބޭނެތޯ ފަހަތުން ބޯދީ ބެލީ`, 
      englishLyrics: `#M
Dhuru dhurun hiyanivelaa thuru thurulaa hee nagaa
*Furusatheh libeynethoa fahathun boadhee belee
#1
Soora nikan reethi gomaa Hooru paree fadha gomaa
*Hooru paree fadha gomaa
Mulhi thihandhu fadha ekuvaa moonu saafu farivumun
*Furusatheh libeynethoa fahathun boadhee belee
#2
Isthashigandu vihuraalaa vaige therey nashaalumun
*Vaige therey nashaalumun
Neshumuge fari harakaathun mulhi hiyy eku furaalumaa
*Furusatheh libeynethoa fahathun boadhee belee
#3
Chaalu reethi kalhiravayaa saafu reethi esfiyathah
*Saafu reethi esfiyathah
Fenumun furihamakan fenilaa hiyy adhu zaham vumun
*Furusatheh libeynethoa fahathun boadhee belee`,
},
{
  id: 231,
  name: `Ufalun Folheyney Eid`,
  genre: 'Nala',
  lyrics: `#M
އުފަލުން ފޮޅޭނޭ އީދު އައުމުން
ކުރަމުން އުފާ އަދި ފޯރި ނަގަމުން
*އީދު ހެދުމުން ޒީނަތް ވެލަމުން މީކިޔާ ތަހުނިޔާ

#1
ކޯޑި ނެރުމުން ވީ އުފަލުގާ
*ކޯޑި ނެރުމުން ވީ އުފަލުގާ
ފޯރި ގެނުވާ އެކި ނެށުމުގާ
*ފޯރި ގެނުވާ އެކި ނެށުމުގާ
ފަރިސަގާފީ ހަރަކާތް ތަކުގާ
*އެކުވެ އެންމެން ނަށަމާ

#2
އެކުވެރިންނާ އާއިލާ ޔާ
*އެކުވެރިންނާ އާއިލާ ޔާ
އެކުވެ އީދުގެ ރޫހު ދިރުވާ
*އެކުވެ އީދުގެ ރޫހު ދިރުވާ
އީދު ހަދިޔާ ހިއްސާ ކުރަމާ
*އައިމި އީދުގެ އުފަލާ

#3
ރާގުގާ ބޮޑުބެރު ޖަހާލާ
*ރާގުގާ ބޮޑު ބެރު ޖަހާލާ
ބާރުލާ އަޑު ލަވަކިޔާލާ
*ބާރުލާ އަޑު ލަވަކިޔާލާ
އެކި ނެށުމުގާ ފައި ހަމަ ކުރަމާ
*ޖޯޝުގާ އަތް ޖަހަމާ`, 
      englishLyrics: `#M
Ufalun folheyney eid aumun
Kuramun ufaa adhi foari nagamun
*Eid hedhumun zeenaiy velamun meekiyaa thahuniyaa
#1
Koadi nerumun vee ufalugaa
*Koadi nerumun vee ufalugaa
Foari genuvaa eki neshumugaa
*Foari genuvaa eki neshumugaa
Farisagaafee harakaaiy thakugaa
*Ekuve enmen nashamaa
#2
Ekuverin'naa aailaa yaa
*Ekuverin'naa aailaa yaa
Ekuve eidhuge roohu dhiruvaa
*Ekuve eidhuge roohu dhiruvaa
Eidhu hadhiyaa hihsaa kuramaa
*Aimi eidhuge ufalaa
#3
Raagugaa boduberu jahaalaa
*Raagugaa boduberu jahaalaa
Baarulaa adu lavakiyaalaa
*Baarulaa adu lavakiyaalaa
Eki neshumugaa fai hama kuramaa
*Joashugaa aiyy jahamaa`,
},
{
  id: 232,
  name: `Fenilumin Dhivehi Dhidha`,
  genre: 'Nala',
  lyrics: `#M
ފެނިލުމުން ދިވެހި ދިދަ ވިހުރިލާ
*ޖޯޝުގާ ރޫޙު ތާޒާ ވެލާ
މާނަވީ ބާރުގެ ވެރިވެދާ
*އަސަރުގާ ވިންދު ހަރަކާތް ވެލާ

#1
ލޭ ޝަހީދީ ފަވާ ރަތްކުލައިން
*ކުރިއެރުން ދައްކަމުން ފެހި ކުލައިން
ރަމްޒު ދީންކޮށް ދެމުން ހުދުކުލައިން
*ބުނެދެމުން މިގޮތުގާ އެކު އުޅެން
ގައުމުގާ ތިޔަހުރީ ވިހުރިލާ ވިހުރިލާ
*ފެނިލުމުން ދިވެހި ދިދަ ވިހުރިލާ ޖޯޝުގާ ރޫޙު ތާޒާ ވެލާ

#2
ހޯދި ނަސްރާ ފަތަހަ ދައްކަމުން
*ހިތުގެ ލޭ ހޫނުކޮށް ކައްކަމުން
ވާޖިބާތެއްގެ އޮތް އަންގަމުން
*ތިޔަހުރީ ޝަރަފުގާ ލިބި މިއޮތް
ޤަދަރުގާ ޤައުމުގާ އުފުލިލާ އުފުލިލާ
*ފެނިލުމުން ދިވެހި ދިދަ ވިހުރިލާ ޖޯޝުގާ ރޫޙު ތާޒާ ވެލާ

#3
ޢަޒުމުތައް ކަނޑައަޅަން ހިތްތަކުން
*އަމަލުގާ ކުރިއަރަން އަތްތަކުން
ބުނެދެނީ މާތްވި އިލްހާމަކުން
*ޝައުކަތާ ޝާނުގާ ޢިއްޒަތާ
މަދަދުގާ ތާއަބަދު ފޮޅުވިލާ ފޮޅުވިލާ
*ފެނިލުމުން ދިވެހި ދިދަ ވިހުރިލާ ޖޯޝުގާ ރޫޙު ތާޒާ ވެލާ`,

  englishLyrics: `#M
Fenilumun dhivehi dhidha vihurilaa
*Joashugaa roohu thaazaa velaa
Maanavee baaruge verivedhaa
*Asarugaa vinndhu harakaayy velaa
#1
Ley shaheedhee favaa rayykulain
*Kurierun dhahkamun fehikulain
Ramzu dheennkoh dhemun hudhukulain
*Bunedhemun migothugaa eku ulhen
Gaumugaa thiyahuree vihurilaa vihurilaa
*Fenilumun dhivehi dhidha vihurilaa joashugaa roohu thaazaa velaa
#2
Hoadhi nasraa fathaha dhahkamun
*Hithuge ley hoonukoh kahkamun
Vaajibaathehge oyy anngamun
*Thiyahuree sharafugaa libi mioyy
Qadharugaa qaumugaa ufulilaa ufulilaa
*Fenilumun dhivehi dhidha vihurilaa joashugaa roohu thaazaa velaa
#3
Azumuthah kandaalhan hiyythakun
*Amalugaa kuriaran ayythakun
Bunedhenee maayyvi ilhaamakun
*Shaukathaa shaanugaa iihzathaa
Madhadhugaa thaaabadhu folhuvilaa folhuvilaa
*Fenilumun dhivehi dhidha vihurilaa joashugaa roohu thaazaa velaa`,
},
{
  id: 233,
  name: `Husnubaanu`,
  genre: 'Nala',
  lyrics: `#M
ހުސްނުބާނީގެ ސަރޫ ދޭހުމަށް އެންމެ މޮޅީ
*ދޭހުމަށް އެންމެ މޮޅީ ހާނ
ހުސްނުބާނޫގެ ބަގީޗާ ދުށުމޭ ދެން ރަނގަޅީ
*ޗާ ދުށުމޭ ދެން ރަނގަޅީ ހާނ

#1
ރުސްތުމަށް ލިބުނު ގުރުޒު ޒާލުޒަރުގެ ވާރުތައިން
*ރުސްތުމަށް ލިބުނު ގުރުޒު ޒާލުޒަރުގެ ވާރުތައިން
ދުޝްމިނުން ބަލިކުޅަލިބުމޭ އެ ކުދީންނަށް ރަނގަޅީ
*މޭ އެ ކުދީންނަށް ރަނގަޅީ ހާނ

#2
ކަނޑުވެ ޝަރުބަތު ކަމުގާ ވެލިވެ މުޅިން ހަކުރު ކަމަށް
*ކަނޑުވެ ޝަރުބަތު ކަމުގާ ވެލިވެ މުޅިން ހަކުރު ކަމަށް
މަޑުވެ ފާރޮށި ކަމުގާ ފަރުބަދަ ވާނަމަ ރަނގަޅީ
*ފަރުބަދަ ވާނަމަ ރަނގަޅީ ހާނ

#3
މާމުޔާ ގިތެޔޮ އުޑުން ވެހި ވެހި ވާރޭ ކަމުގާ
*މާމުޔާ ގިތެޔޮ އުޑުން ވެހި ވެހި ވާރޭ ކަމުގާ
ކާނެ ވަރަކަށް ކެއުމަށް ވާނަމަ އަދިވެސް ރަނގަޅީ
*ވާނަމަ އަދިވެސް ރަނގަޅީ ހާނ

#4
ވަހުމުތައް ގިނަވެ މަސައްކަތް ނުމެކޮށް ކަފުލަތުގާ
*ވަހުމުތައް ގިނަވެ މަސައްކަތް ނުމެކޮށް ކަފުލަތުގާ
ރަހުމަތަށް އެދި އެދި ތިބުމޭ ދިވެހީންނަށް ރަނގަޅީ
*މޭ ދިވެހީންނަށް ރަނގަޅީ ހާނ`,

  englishLyrics: `#M
Husnubaaneege saroo dheyhumah ennme molhee
*Dheyhumah ennme molhee haan
Husnubaanooge bageechaa dhushumey dhen rangalhee
*Chaa dhushumey dhen rangalhee haan
#1
Rusthumah libunu guruzu zaaluzaruge vaaruthain
*Rusthumah libunu guruzu zaaluzaruge vaaruthain
Dhushminun balikulhalibumey e kudheennah rangalhee
*Mey e kudheennah rangalhee haan
#2
Kanduve sharubathu kamugaa velive mulhin hakuru kamah
*Kanduve sharubathu kamugaa velive mulhin hakuru kamah
Maduve faaroshi kamugaa farubadha vaanama rangalhee
*Farubadha vaanama rangalhee haan
#3
Maamuyaa githeyo udun vehi vehi vaarey kamugaa
*Maamuyaa githeyo udun vehi vehi vaarey kamugaa
Kaane varakah keumah vaanama adhives rangalhee
*Vaanama adhives rangalhee haan
#4
Vahumuthah ginave masahkayy numekoh kafulathugaa
*Vahumuthah ginave masahkayy numekoh kafulathugaa
Rahumathah edhi edhi thibumey dhiveheennah rangalhee
*Mey dhiveheennah rangalhee haan`,
},
{
  id: 234,
  name: `Seedha Balanoo`,
  genre: 'Nala',
  lyrics: `#M
ސީދާ ބަލަނޫ މިދިމެލަށް ކިޔެއްވޫހޭ
*މީހަކު ބޮނެގެންހޭ ނޯނުއްވާ ލޯބިންހޭ
ފޫހި ފެލުވައިލަންހޭ ސީރިޔަސްކޮށް ހޭޅޭއް
*ގޯހެއް ނަހަދާށޭ ބިރަގަންނަމޭ
*ސީދާ ބަލަނޫ މިދިމެލަށް ކިޔެއްވޫހޭ

#M
ލޯބީގޭ ފެށުމޭ އުނބަތިޔޮ ހަނދާއޭ
*އޯގާވެ ފިރުމާން އެދެމޭ ހިތާއޭ
އެހެން އެކަންވޫމާ މިހިތައް މިކެރަން އަސަރުތެކޭ
*އެހެން އެކަންވޫމާ މިހިތައް މިކެރަން އަސަރުތެކޭ

#M
އެހަނދާންތެކޭ އަދު ވެވެނޫ ތެދޭމިޔޯ
*އެނަމާ އެލޯތްބާ ބޭނުންވެފައިވޫ
މައާ އެކީ އޮޅިފައި ވަކިވަނީތީ މަދެރަވެޔޭ
*މައާ އެކީ އޮޅިފައި ވަކިވަނީތީ މަދެރަވެޔޭ`,

  englishLyrics: `#M
Seedhaa balanoo midhimelah kiyehvoohey
*Meehaku bonegenhey noanuhvaa loabinhey
Foohi feluvailanhey seariouskohhey lheyh
*Goaheh nahadhaashey biragannamey
*Seedhaa balanoo midhimelah kiyehvoohey
#1
Loabeegey feshumey unbathiyo handhaaey
*Oagaave firumaan edhemey hithaaey
Ehen ekannvoomaa mihithah mikeran asaruthekey
*Ehen ekannvoomaa mihithah mikeran asaruthekey
#2
Ehandhaannthekey adhu vevenoo thedheymiyoa
*Enamaa eloayybaa beynunnvefaivoo
Maaa ekee olhifai vakivaneethee madheraveyey
*Maaa ekee olhifai vakivaneethee madheraveyey`,
},
{
  id: 235,
  name: `Dhanvaru Handhuvaru`,
  genre: 'Baburu',
  lyrics: `#M
ދަންވަރު ހަނދުވަރު ދޮންވެލި މަތީން
*ކުއްޖަކު ދުށީ ހިޔަނިވެލާ
ވިއްސާލި ސިއްސާލި ބުއްރާސް ޖަހާ
*ކަނޑުގެ ލޮނުގަނޑު މައްޗައް އަރާ
ވިލާ ރޮއްޖެއް އުޑުގަ ޖަހާ
*ބަނަވެ ވިއްސާރަ އަނދިރިވެލާ

#1
*ނައްޓާލި ފަހަތް ބަލާ
އުޑަކު ބިމަކު ނުޖެހި ފިލަން
އެއްޗަކު ތެރޭގަ ނުޖެހި ފިލަން
ނުކެރި ހުރެފަ ބިރުން ފިލަން

#2
*ނިދިން ތެދުވެ ވާށާ ބަލާ
ތުރުތުރު އަޅުވާ ފުރޮޅި
އަތްފައި ހަލުވާ ފުރޮޅި
ގުޑުގުޑު ލައްވާ ފުރޮޅި`,
       
  englishLyrics: `#M
Dhanvaru handhuvaru dhonveli matheen
*Kuhjaku dhushee hiyanivelaa
Vihsaali sihsaali buhraas jahaa
*Kanduge lonugandu mahchah araa
Vilaa rohjeh uduga jahaa
*Banave vihsaara andhirivelaa
#1
*Nahtaali fahayy balaa
Udaku bimaku nujehi filan
Ehchaku thereyga nujehi filan
Nukeri hurefa birun filan
#2
*Nidhin thedhuve vaashaa balaa
Thuruthuru alhuvaa furolhi
Ayyfai haluvaa furolhi
Gudugudu lahvaa furolhi`,
},
{
  id: 236,
  name: `Dhin Mi Nazarugaa`,
  genre: 'Zamaanee',
  lyrics: `#M
ދިން މި ނަޒަރުގާ ލޯބި ޒުވާނާ މަސްތުގެ ރާނީ ކޮއްލަނީ ދިވާނާ
*ލޯބިން ދީވާނާ
ދީވާނާ
*ލޯބިން ދީވާނާ

#1
ފަރި ކަމުގާ އިޝްޤީ ޝަބާބު ގެނައި
*އަސަރު ގުޅޭ ލޯބީގެ ސީދާ ނާ
ހާދަ ބޭ ޒަހަމު ތިޔަ އަތޭ ޒަހަމު ކޮއްލަނީ ފުރާނާ
*ލޯބިން ދީވާނާ

#2
އުދުހި އަރާމު ދަނީ ލޮލުން ނިންޖާ
*ހަމަތައް އޮޅި ޖާނުން ލެޔާ ވިންދާ
ބޭގަރާރުވީ ހިތް މި ޖާޒުބީ ކޮއްލަނީ ހަޒާނާ
*ލޯބިން ދީވާނާ`, 
      englishLyrics: `#M
Dhin mi nazarugaa loabi zuvaanaa masthuge raanee kollanee dhivaanaa
*Loabin dheevaanaa
Dheevaanaa
*Loabin dheevaanaa
#1
Fari kamugaa ishgee shabaabu genai
*Asaru gulhey loabeege seedhaa naa
Haadha bey zaham thiya athey zaham kollanee furaanaa
*Loabin dheevaanaa
#2
Udhuhi araamu dhanee lolun ninjaa
*Hamathah olhi jaanun leyaa vindhaa
Beygaraarvee hiy mi jaazubee kollanee hazaanaa
*Loabin dheevaanaa`,
},
{
  id: 237,
  name: `Adhudhu Kayyaa`,
  genre: 'Baburu',
  lyrics: `#M
އަދުދު ކައްޔާ ވޭ އަދުދުން ކާ އައްޔާވޭ
*އަދުދު ކައްޔާ ވޭ އަދުދުން ކާ އައްޔާވޭ
އާލު ވެ ދާލު ގޯލު ޕިޗަންޑޭ ޗުހަރެ ގެކޭ ނިއަންޗޯރެ ޖުމާރެ & ޗާހެ އައްލާރެ &
ލާ ކަ ގިރިޒަނަވެ & ޗާހެ އައްލާރެ &
ލާ ކަސި ކަތިވެ & ޗާހެ އައްލާރެ &
ލާ ރުޕަންޖަނަވެ & ޗާހެ އައްލާރެ &
ވާނަމަރޯންބޭ އަޔާވޭ

#1
ބުޅިތުނބި ކޮވެލި ގޮވާލި އޭ މުޅި އުޑު ކިސަޑު ކޮއްފިޔޭ
ދެންވެހި ބަލަގަ ވާރޭގާ
ބޭރުން ކަތަކު ގޮވާލިޔޭ ދެ ދަނޑި މަތީގަ އޮންނަރުމާ
ހެ ހުރުމާ ނުހުރުމާ

#2
ހަސަނާ ތުޖެ އަމަރެ ސަމަރާންގޯ &މާ ހަލޯންގޯ&
ލޯންގޯ &މާ ހަލޯންގޯ&
މާ ހަލޯންގޯ &މާ ހަލޯންގޯ&
ނަމަސެކެ ރަހެންގޯ &މާ ހަލޯންގޯ&
ސުހަރެ ހަރެންގޯ &މާ ހަލޯންގޯ&

#3
ދޫނި ރެކި ތިބޭނީ
*ހޯރަކަތަ ޗޯރައިގާ
ކުންރަނގި ބަލަ ދަމާލީ
*ހޯރަކަތަ ޗޯރައިގާ
ނިދި ކުރަނގި ތިބޭނީ
*ހޯރަކަތަ ޗޯރައިގާ

#4
*ގިޔާ ގަލީ ކީ
ވާނީ ގިޔާލީ`, 
      englishLyrics: `#M
Adhudhu kayyaa vey adhudhun kaa ayyaavey
*Adhudhu kayyaa vey adhudhun kaa ayyaavey
Aal ve dhaal goal pichandey chuhare gekey nianchoare jumaare & Chaahe ahlaare &
Laa ka girizanave & Chaahe ahlaare &
Laa kasi kathive & Chaahe ahlaare &
Laa rupanjanave & Chaahe ahlaare &
Vaanamaroanbey ayaavey
#1
Bulhithunbi koveli govaali ey mulhi udu kisadu koffiyey
Dhenvehi balaga vaareygaa
Beyrun kathaku govaaliyey dhe dhandi matheega onnarumaa
He hurumaa nuhurumaa
#2
Hasanaa thuje amare samaraangoa &Maa haloangoa&
Loangoa &Maa haloangoa&
Maa haloangoa &Maa haloangoa&
Namaseke rahengoa &Maa haloangoa&
Suhare harengoa &Maa haloangoa&
#3
Dhooni reki thibeyny
*Hoarakatha choaraigaa
Kunrangi bala dhamaalee
*Hoarakatha choaraigaa
Nidhi kurangi thibeyny
*Hoarakatha choaraigaa
#4
*Giyaa galee kee
Vaany giyaalee`,
},
{
  id: 238,
  name: `Kiyaadhevuneemaa Haalu Yaaraa`,
  genre: 'Kaasi',
  lyrics: `#M
ކިޔާދެވުނީމާ ހާލު ޔާރާ ކުރީ އިންކާރު
*ވާ ލޯބިން ދެވޭނެ ނޫންހެ ދެކިލަން ފަތިހާ ދަންވަރު ހޯ ދެން ފަތިހާ ދަންވަރު ދޯ
ފެނުމުން ކައިރިވެލާ ރަކިކޮށްލަން ނޫޅެބަލާ
*ބޭނުންވީ ޚިޔާލު ބަލާލަންދޯ ހޯދީ ފުރުސަތު ހޯ ދެން ހޯދީ ފުރުސަތު ހޯ

#1
އިންސާނަކަށް މީ ވާވަރު މީވާވަރު ކަލާ ފެނިފާ
*އިންސާނަކަށް މީ ވާވަރު މީވާވަރު ކަލާ ފެނިފާ
ހީލާ ހަދާއިރު ހީވޭ ތާޒާ މަލޭ މީ ފަރިވާ
*ހީލާ ހަދާއިރު ހީވޭ ތާޒާ މަލޭ މީ ފަރިވާ
ފޮޅިލާތޯ ކެތްކުރީމޭ
*ފޮޅިލާތޯ ކެތްކުރީމޭ
*ބިންނަން ދާހިތުން މިހާރު

#2
ވޭނާ އަނިޔާ ލިބިދާނޭ ތިޔަ ޚިޔާލުގާ ހުންނާތީ
*ވޭނާ އަނިޔާ ލިބިދާނޭ ތިޔަ ޚިޔާލުގާ ހުންނާތީ
ވިސްނަމޭ އަދިފަހުން ވަކިވާން ޖެހިދާނެޔޭ ހީވާތީ
*ވިސްނަމޭ އަދިފަހުން ވަކިވާން ޖެހިދާނެޔޭ ހީވާތީ
މީ މިންވަރު ފެންނަ މަންޒަރު
*މީ މިންވަރު ފެންނަ މަންޒަރު
*އޯގާތެރިވޭ މިހާރު

#3
ކުރަމުން މިދާހާ ގޯނާ ނުކެނޑޭނެ ބޭނުން ވާތީ
*ކުރަމުން މިދާހާ ގޯނާ ނުކެނޑޭނެ ބޭނުން ވާތީ
މިހިތާއި ލޭ ހިލުވާލާ ތިޔަ ލޯބި ހިތުގާ ވާތީ
*މިހިތާއި ލޭ ހިލުވާލާ ތިޔަ ލޯބި ހިތުގާ ވާތީ
ތިޔަ މޫރިތި ސޫރަޔާ ހެދި
*ތިޔަ މޫރިތި ސޫރަޔާ ހެދި
*ވާތީޔޭ ބޭޤަރާރު`, 
      englishLyrics: `#M
Kiyaadhevuneemaa haalu yaaraa kuree inkaaru
*Vaa loabin dheveyne noonhe dhekilan fathihaa dhanvaru hoa dhen fathihaa dhanvaru dhoa
Fenumun kairivelaa rakikohlan noolhebalaa
*Beynunvee khiyaalu balaalandhoa hoadhee furusathu hoa dhen hoadhee furusathu hoa
#1
Insaanakah mee vaavaru meevaavaru kalaa fenifaa
*Insaanakah mee vaavaru meevaavaru kalaa fenifaa
Heelaa hadhaairu heevey thaazhaa maley mee farivaa
*Heelaa hadhaairu heevey thaazhaa maley mee farivaa
Folhilaathoa keyykureemey
*Folhilaathoa keyykureemey
*Binnan dhaahithun mihaaru
#2
Veynaa aniyaa libidhaaney thiya khiyaalugaa hunnaathee
*Veynaa aniyaa libidhaaney thiya khiyaalugaa hunnaathee
Visnamey adhifahun vakivaan jehidhaaneyey heevaathee
*Visnamey adhifahun vakivaan jehidhaaneyey heevaathee
Mee minvaru fenna manzharu
*Mee minvaru fenna manzharu
*Oagaatherivey mihaaru
#3
Kuramun midhaahaa goanaa nukenadeyne beynun vaathee
*Kuramun midhaahaa goanaa nukenadeyne beynun vaathee
Mihithaai ley hiluvaalaa thiya loabi hithugaa vaathee
*Mihithaai ley hiluvaalaa thiya loabi hithugaa vaathee
Thiya moorithi soorayaa hedhi
*Thiya moorithi soorayaa hedhi
*Vaatheeyey beyqaraaru`,
},
{
  id: 239,
  name: `Choanboarey`,
  genre: 'Thinberu',
  lyrics: `#1
ޗޯމްބޯރޭ ރެ ރޯޗޯންބޯ، ޗޯންބޯރޭ ރެ ރޯޗޯންބޯ ރޭރެ ރޯޗޯންބޯ
*އައްލާހިއައްލާ
ޔުމާ ޔަމަރެ ހުސޭކައްއަޗި ވާޓޯކޭ، މައިޒާންޓޯ އެ ޑޯކުޅިރާ
*ކުޅެލިބަނަ، ޗޯމްބޯރޭ ރެ ރޯޗޯންބޯ، ޗޯންބޯރޭ ރެ ރޯޗޯންބޯ ރޭރެ ރޯޗޯންބޯ
އައްލާހިއައްލާ
*ޔުމާ ޔަމަރެ ހުސޭކައްއަޗި ވާޓޯކޭ، މައިޒާންޓޯ އެ ޑޯކުޅިރާ ކުޅެލިބަނަ

#2
ނާންޔޭރޭ ނާންޔޭ މާވާ
*ނާންޔޭރޭ ނާންޔޭ މާވާ
ހޭހޭ ޔޭމާވާ، ޝަމްސިލިޗިޔެ ޗިމިލެ ޗޯރެ ޗޯރުމޮޔާ
*ނާންޔޭރޭ ނާންޔޭ މާވާ

#3
ޗިންކުޅިވާ ބަނާ މެރާ ޗިންކުޅީވާ
*ޗިންކުޅިވާ ހޯ މެރާ ޗިންކުޅީވާ

#4
ޖޭންގޭ ދާނެވާ ޖޭންގޭ
*ދާނެވާ
ޖޭންގޭ
*ދާނެވާ`,

  englishLyrics: `#M
Choamboarey re roachoannboa، choannboarey re roachoannboa reyre roachoannboa
*Ahlaahiahlaa
Yumaa yamare huseykahachi vaatoakey، maizaanntoa e doakulhiraa
*Kulhelibana، choamboarey re roachoannboa، choannboarey re roachoannboa reyre roachoannboa
Ahlaahiahlaa
*Yumaa yamare huseykahachi vaatoakey، maizaanntoa e doakulhiraa kulhelibana
#1
Naannyeyrey naannyey maavaa
*Naannyeyrey naannyey maavaa
Heyhey yeymaavaa، shamsilichiye chimile choare choarumoyaa
*Naannyeyrey naannyey maavaa
#2
Chinkulhivaa banaa meraa chinkulheevaa
*Chinkulhivaa hoa meraa chinkulheevaa
#3
Jeynngey dhaanevaa jeynngey
*Dhaanevaa
Jeynngey
*Dhaanevaa`,
},
{
  id: 240,
  name: `Vaane Keysa`,
  genre: 'Nala',
  lyrics: `#M
ވާނެ ކޭސަ ލޯބީގާ ލިބޭނޭ އަނިޔާ
*ވާނޭހޭ ލޯބީގާ މާފު ސަޖާނިޔާ

#1
މަލުން މާގަތައިގެން އަތުރާ މަލުންދޭ ވަހުން ވަސްފަތުރާ
*މަލުން މާގަތައިގެން އަތުރާ މަލުންދޭ ވަހުން ވަސްފަތުރާ
މަލުން ހިތުގެ ހާލު އުފާ ތިޔަކުރުވާ
*ވާނޭހޭ ލޯބީގާ މާފު ސަޖާނިޔާ

#2
ދުރުން މާދުރުން ދީ ހީލާ އަސަރު ހިތް ދީވާނާ ވާހާ
*ދުރުން މާދުރުން ދީ ހީލާ އަސަރު ހިތް ދީވާނާ ވާހާ
ދުރުން ދެތްވި ފަރިފަރި ލޯބި އިޝާރާތް
*ވާނޭހޭ ލޯބީގާ މާފު ސަޖާނިޔާ

#3
ޚިޔާލުން ވެދޭހާ ސާދާ ވެވޭނި ޚިލާފޭ ވައުދާ
*ޚިޔާލުން ވެދޭހާ ސާދާ ވެވޭނި ޚިލާފޭ ވައުދާ
ނިޔާ ހިތުގެ ޑިރުވާދޭނެ ބަޚާރާ
*ވާނޭހޭ ލޯބީގާ މާފު ސަޖާނިޔާ

#4
ތަދާ ހޫނު ދިލަޔާ ވޭނި ޝަޒާދޭ މުހައްބަތު ދޭމީ
*ތަދާ ހޫނު ދިލަޔާ ވޭނި ޝަޒާދޭ މުހައްބަތު ދޭމީ
އުދާހުން ލިބޭނެ ހިތިހާލުގެ މުނިޔާ
*ވާނޭހޭ ލޯބީގާ މާފު ސަޖާނިޔާ`
,

  englishLyrics: `#M
Vaane keysa loabeegaa libeyney aniyaa
*Vaaneyhey loabeegaa maafu sajaaniyaa
#1
Malun maagathaigen athuraa malundhey vahun vasfathuraa
*Malun maagathaigen athuraa malundhey vahun vasfathuraa
Malun hithuge haalu ufaa thiyakuruvaa
*Vaaneyhey loabeegaa maafu sajaaniyaa
#2
Dhurun maadhurun dhee heelaa asaru hiyy dheevaanaa vaahaa
*Dhurun maadhurun dhee heelaa asaru hiyy dheevaanaa vaahaa
Dhurun dheyyvi farifari loabi ishaarayy
*Vaaneyhey loabeegaa maafu sajaaniyaa
#3
Khiyaalun vedheyhaa saadhaa veveyni khilaafey vaudhaa
*Khiyaalun vedheyhaa saadhaa veveyni khilaafey vaudhaa
Niyaa hithuge diruvaadheyne bakhaaraa
*Vaaneyhey loabeegaa maafu sajaaniyaa
#4
Thadhaa hoonu dhilayaa veyni shazaadhey muhahbathu dheymee
*Thadhaa hoonu dhilayaa veyni shazaadhey muhahbathu dheymee
Udhaahun libeyne hithihaaluge muniyaa
*Vaaneyhey loabeegaa maafu sajaaniyaa`,
},
{
  id: 241,
  name: `Mariyam Malaa`,
  genre: 'Taki',
  lyrics: `#M
ޖަންބު މަލެއް ފަދަ ރީތި މަރިޔަމް މަލާ
*ހަދިޔާ ކުރަމޭ ހިތްމި ނަގާފާ

#1
ގޭދޮށުން ކީއްވެހޭ މާގިނައިން ފެންނަނީ
*ފެނިފަ ހީލާނެޔޭ ދެން މަށަށް ހީވަނީ
އެންމެ ފުރަތަމަ ފަހަރު އިޝްޤުގާ މިޖެހުނީ
*މަސްތު ކޮއްލައިފިޔޭ ޗާލު ހަރަކާތް ތަކުން
ޖަޒުބާތު ވަނީ މޭގަ ހިފާފާ
*ހަދިޔާ ކުރަމޭ ހިތްމި ނަގާފާ

#2
ސުންދުސީ ރީތި ނަލަ ފަށުވި ފޭރާމުގާ
*ފިނި ހަވީރަށް ހެމުން ތިޔަ ހިނގާ ފަރި ގޮތުން
ހުދު ވިލާތައް މަތިން ދޫނި ތައް ދާފަދައިން
*ހިއްސުތައް ވެސް މަގޭ އުދުހިގެން އެބަދެޔޭ
ލޯބީގަ ވަނީ ޖިސްމު ދިވާނާ
*ހަދިޔާ ކުރަމޭ ހިތްމި ނާގާފާ

#3
ދާ ތަނެއްގާ މަގޭ ހިޔަނި ހުންނާނެޔޭ
*ހިތް ހަލާކުވެ ދިޔަސް ބަދަލު ނުމެވާނަމޭ
ތިޔަނަމުން ފެށިނިމޭ ކޮންމެ ދުވަހެއް މަގޭ
*އިރު އަރާ އޮއްސުނަސް ލޯބި ނޯއްސޭނެޔޭ
ތިޔަނަން މިވަނީ ޓެޓޫ ޖަހާފާ
*ހަދިޔާ ކުރަމޭ ހިތްމި ނާގާފާ

#N
ހަދިޔާ ކުރަމޭ
*ހިތްމި ނަގާފާ
ހަދިޔާ ކުރަމޭ
*ހިތްމި ނަގާފާ`
,

  englishLyrics: `#M
Jambu Maleh fadha reethi Mariyam Malaa
*Hadhiyaa kuramey hiyymi nagaafaa
#1
Geydhoshun keevvehey maaginain fennany
*Fenifa heelaaneyey dhen mashah heevany
Enme furathama faharu ishqugaa mijehuny
*Masthu kollaifiyey chaalu harakaaiy thakun
Jazubaathu vany meyga hifaafaa
*Hadhiyaa kuramey hiyymi nagaafaa
#2
Sundhusee reethi nala fashuvi feyraamugaa
*Fini haveerah hemun thiya hingaa fari gothun
Hudhu vilaathah mathin dhooni thah dhaafadhain
*Hissuthah ves magey udhuhigen ebadheyey
Loabeega vany jismu dhivaanaa
*Hadhiyaa kuramey hiyymi naagaafaa
#3
Dhaa thanehgaa magey hiyani hunnaaneyey
*Hiy halaakuve dhiyas badhalu numevaanamey
Thiyanamun feshinimey konme dhuvaheh magey
*Iru araa ossunas loabi noahseyneyey
Thiyanan mivany tattoo jahaafaa
*Hadhiyaa kuramey hiyymi naagaafaa
#N
Hadhiyaa kuramey
*Hiyymi nagaafaa
Hadhiyaa kuramey
*Hiyymi nagaafaa`,
},
{
  id: 242,
  name: `Vathukiba`,
  genre: 'Taki',
  lyrics: `#M
ޖެހިމާ ހެދުމެއްލާ ފައި ދެއުޅި ހިނގުމެއްގާ
*ހެދި ރަނިކަން ދަޅަ ދެއިރަށް ދަނީ
ދައްކަންދޭ އަލިކޮއެއަށް ކައްކަން ބަތް ލާއްސެއްވެސް
*ނޭންގި އެހެން ތެޅި ހުއްޓާ އަލިފުޅު ދޫވީ

#1
ހާނ ޗަލާ
*ހާނ ޗަލާ ކެނޑި އެ ދިޔައީ ވަތުކިބަ މުޅިން އަޅެވާ
ހާނ ޗަލާ
*ހާނ ޗަލާ ކެނޑި އެ ދިޔައީ ވަތުކިބަ މުޅިން

#2
ރޮއެ ނަގައޭ ދޫވީމާ ކަނި ބުރަނީ ގޮސްވަނީމާ
*ގެޔަކަށް ކަނބުރު ވަނީމާ އަލިފުޅު ތިގެއްލުނީއޭ
ގެއްލުނީ މަރިޔއަނބު ކަމޭ
*ގެއްލުނީ ކޮންޑު އޮތް ފުރޯކަމޭ
ހުސްވެ އަތުގަ ބޭސް ހުރީ
*ބޭސްވެ އަތުގަ ހުސްފުރި
ގޭސްވެ ބަނޑުގަ ހުސްފުރީ
*ފެނު ހަތަރު ޖެހިއްޖެޔޭ މުޅިން`,

  englishLyrics: `#M
Jehimaa hedhumehlaa fai dheulhi hingumehgaa
*Hedhi ranikan dhalha dheirah dhanee
Dhahkanndhey alikoeah kahkan bayy laahsehves
*Neyngi ehen thelhi huhtaa alifulhu dhoovee
#1
Haan chalaa
*Haan chalaa kendi e dhiyaee vathukiba mulhin alhevaa
Haan chalaa
*Haan chalaa kendi e dhiyaee vathukiba mulhin
#2
Roe nagaey dhooveemaa kani buranee gosvaneemaa
*Geyakah kanburu vaneemaa alifulhu thigehluneeey
Gehlunee mariyanbu kamey
*Gehlunee kondu oyy furoakamey
Husve athuga beys huree
*Beysve athuga husfuri
Geysve banduga husfuree
*Fenu hatharu jehihjeyey mulhin`,
},
{
  id: 243,
  name: `Dairygaa Liyey`,
  genre: 'Nala',
  lyrics: `#M
ޑައިރީގާ ލިޔޭ ހިތާ ވިންދު ދިރުވީ، ހިތާ ވިންދު ދިރުވީ
*ގައިމޭ އަދު ހިތުގާ މި ރަމްޒު ދިރުވީ
މީ އުފަލޭ މުނިޔާ ހިތް ފުރާލާ ލޯބި ގެނުވީ
*މީ އުފަލޭ މުނިޔާ ހިތްފުރާލާ ލޯބި ގެނުވީ
ލޯބި ގެނުވީ
*ގައިމޭ އަދު ހިތުގާ މި ވިންދު ދިރުވީ

#1
ފެންނަ އަސަރާ އިހުސާސުގާ، ފެންނަ އަސަރާ އިހުސާސުގާ
*މިތުރާގެ ތިޔަފަރި ޖަޒުބާތުގާ
ސާފު ހިތުންމީ އަންގާގޮތޭ
*ލޯބީގަ އުފެދޭ ތޫފާނުގާ
ވައިރޯޅިން ތާޒާ، ވައިރޯޅިން ތާޒާ ޖާނާ ރޫހު ދިރުވީ، ރޫހު ދިރުވީ
*ގައިމޭ އަދު ހިތުގާ މި ރަމްޒު ދިރުވީ

#2
ގައިމެ ދުރުވާނޭ ހިތް ވަނީ، ގައިމެ ދުރުވާނޭ ހިތް ވަނީ
*ބޭނުން ތިޔާރާއޭ ހޯދެނީ
ހާލު މި ހުރިގޮތް އަންގާދެމޭ
*ޔާރާގެ ލޯތަބައް ކެތްމަދުވެފާ
ތެދެކޭ ތިޔަ ލޯތްބޭ، ތެދެކޭ ތިޔަ ލޯތްބޭ ފުރާނަ ދިރުވީ، ފުރާނަ ދިރުވީ
*ގައިމޭ އަދު ހިތުގާ މި ވިންދު ދިރުވީ`,

  englishLyrics: `#M
Dairygaa liyey hithaa vinndhu dhiruvee, hithaa vinndhu dhiruvee
*Gaimey adhu hithugaa mi ramzu dhiruvee
Mee ufaley muniyaa hiyy furaalaa loabi genuvee
*Mee ufaley muniyaa hiyyfuraalaa loabi genuvee
Loabi genuvee
*Gaimey adhu hithugaa mi vinndhu dhiruvee
#1
Fenna asaraa ihusaasugaa, fenna asaraa ihusaasugaa
*Mithuraage thiyafari jazubaathugaa
Saafu hithunnmee anngaagothey
*Loabeega ufedhey thoofaanugaa
Vairoalhin thaazaa, vairoalhin thaazaa jaanaa roohu dhiruvee, roohu dhiruvee
*Gaimey adhu hithugaa mi ramzu dhiruvee
#2
Gaime dhuruvaaney hiyy vanee, gaime dhuruvaaney hiyy vanee
*Beynun thiyaaraaey hoadhenee
Haalu mi hurigoyy anngaadhemey
*Yaaraage loathabah keyymadhuvefaa
Thedhekey thiya loayybey, thedhekey thiya loayybey furaana dhiruvee, furaana dhiruvee
*Gaimey adhu hithugaa mi vinndhu dhiruvee`,
},
{
  id: 244,
  name: `Githeyo Gulhin`,
  genre: 'Kaasi',
  lyrics: `#M
*ގިތެޔޮ ގުޅިން ނެގި ލޯބި
ނާނާ
ބުނެދީ
ދިންމީ
އަގުހުރި މީރު ދޭ ރަހަ ގަރުނުގެ ހުރި މޮޅު

#1
ގުޅި ކަޅު ގިތެލުން މުޅިފުޅު ހަންޑުލުން
*ކުޅިގަދަ ބިރިޔާނީ ކުކުޅުން
ބަލަ މުޅި އުމުރަށް ދެމިހުންނަ މި އަސަރުން
*ފުޅިފުޅިޔަށް އެޅި ބަންޑުންލައިފިޔެ

#2
ނަންހުރި ނިޔަނެތި ކަންކޮޅުތަކުގާ
*ރަންކުލަ ވީބާ ނަގާފާ
ބަލަ ނަންބަރު ދެރަކޮށް މަންޒިލު ކުރުކޮށް
*ރަންކުލަ ދިރިއުޅުމަށް ގެނުވައިފިޔެ

#3
ރަނގަ ރަނގަ ތޮޅިޔާ މުރަނގަ ދެތޮޅިޔާ
*އިތުބާރުން ނެގި ތިން ހުޅިޔާ
ބަލަ ބއަނގަލާ މަތިމަސް ގޭބަންދު ފުޅިޔާ
*އަނގަމަތި ހުރި ސިފަ ކުރުވައިދީފިޔެ

-
$M
ފިނިފައިބާތީ ކޯނީގާ އިނީމާ
*ބިނީމޭ ފިނިފެންމާ

$1
ތެމިފޯވެފާ އެމާ ފިނިބޮޑުވެފާ އިނީ
*ތެމިފޯވެފާ އެމާ ފިނިބޮޑުވެފާ އިނީ
ތެމިފޯވެގެން ގޮސް މަ ލޯބިން ބިނިމޭ
*ބިނީމޭ ފިނިފެންމާ

$2
ދިއްލޭ އެރީތިމާ ނިންޖެއް ލޮލައްނައޭ
*ދިއްލޭ އެރީތިމާ ނިންޖެއް ލޮލައްނައޭ
ދިންހިނދު މަބޮސްދީ ހިފީމޭ ތަނޑީގާ
*ތަނޑީގާ ފިނިފެންމާ

$3
ފިނިކަން ހިތަށް ލިބި ހިނިތުންވުމުން އެމާ
*ފިނިކަން ހިތަށް ލިބި ހިނިތުންވުމުން އެމާ
ދުނިޔެ ލިބިއްޖޭ އުފާވެރި ބިނީމާ
*ބިނީމާ ފިނިފެންމާ

$N
*ބިންނާށޭ
ފިނިފެންމާ
ގެންނާށޭ
ބިންނާނަން
ދައްކާށޭ`,

  englishLyrics: `#M
*Githeyo gulhin negi loabi
Naanaa
Bunedhee
Dhinnmee
Aguhuri meeru dhey raha garunuge huri molhu
#1
Gulhi kalhu githelun mulhifulhu handulun
*Kulhigadha biriyaanee kukulhun
Bala mulhi umurah dhemihunna mi asarun
*Fulhifulhiyah elhi banndunnlaifiye
#2
Nannhuri niyanethi kannkolhuthakugaa
*Rannkula veebaa nagaafaa
Bala nannbaru dherakoh mannzil kurukoh
*Rannkula dhiriulhumah genuvaifiye
#3
Ranga ranga tholhiyaa muranga dhetholhiyaa
*Ithubaarun negi thin hulhiyaa
Bala bangalaa mathimas geybanndhu fulhiyaa
*Angamathi huri sifa kuruvaidheefiye
-
$M
Finifaibaathee koaneegaa ineemaa
*Bineemey finifennmaa
$1
Themifoavefaa emaa finiboduvefaa inee
*Themifoavefaa emaa finiboduvefaa inee
Themifoavegen gos ma loabin binimey
*Bineemey finifennmaa
$2
Dhihley ereethimaa ninnjeh lolahnaey
*Dhihley ereethimaa ninnjeh lolahnaey
Dhinnhindhu mabosdhee hifeemey thandeegaa
*Thandeegaa finifennmaa
$3
Finikan hithah libi hinithunnvumun emaa
*Finikan hithah libi hinithunnvumun emaa
Dhuniye libihjey ufaaveri bineemaa
*Bineemaa finifennmaa
$N
*Binnaashey
Finifennmaa
Gennaashey
Binnaanan
Dhahkaashey`,
},
{
  id: 245,
  name: `Goodluck`,
  genre: 'Nala',
  lyrics: `#M
ތި ހޯދާ ގުޑުލަކު މުނިޔާ
*ބޭނުންވާ ލަކުލަކު މުނިޔާ
ވާހާ ކޮންމެ ތަނަކު ލޯބިން ގޯނާދޭ މީހަކު
*ވާހާ ކޮންމެ ތަނަކު ލޯބިން ގޯނާދޭ މީހަކު ދޭނޭ
ބުނެލާފާ ލޯބިން އެކި އެކި ހަދިޔާ
*ތި ހޯދާ ގުޑުލަކު މުނިޔާ، ބޭނުންވާ ލަކުލަކު މުނިޔާ

#1
ޖާދޫއެކޭ ހީވެ ހިތް މިލެނބޭތީ
*ދީވާނާ ކުރެވައެ ސީދާ މޫނަށް އެ ބަލާތީ
ވާނޭގޮތް ވެއްޖޭ ދެން މަސްތީ އަވައިގާ
*ވާނޭގޮތް ވެއްޖޭ ދެން މަސްތީ އަވައިގާ
ބެހެނީ ހިތް އޮއިގާތާއޭ ހަލަބޮލި ވައިގާ
*ބެހެނީ ހިތް އޮއިގާތާއޭ ހަލަބޮލި ވައިގާ
ހިތައްދޭ ގޯނާ، ހިތައްދޭ ގޯނާ ފިނި އަނިޔާ
*ބޭނުންވާ ފޮނި ފޮނި އަނިޔާ

#2
ސިއްރުން ނިކަން ޔާރާ ބުނެލީއެ ލޯބިވޭ
*ސިއްރުން ނިކަން ޔާރާ ބުނެލީއެ ލޯބިވޭ
ވެވުނީ ޤަބޫލު ސިކުނޑިން ބާރު ދޫވޭ
*ވެވުނީ ޤަބޫލު ސިކުނޑިން ބާރު ދޫވޭ
އަތުން ދޫވެއްޖޭ، އަތުން ދޫވެއްޖޭ ރިހި ބަނޑިޔާ
*ސަހަރޯއޭ އަގު މޮޅު ބަނޑިޔާ`,

  englishLyrics: `#M
Thi hoadhaa gudulaku muniyaa
*Beynunnvaa lakulaku muniyaa
Vaahaa konnme thanaku loabin goanaadhey meehaku
*Vaahaa konnme thanaku loabin goanaadhey meehaku dheyney
Bunelaafaa loabin eki eki hadhiyaa
*Thi hoadhaa gudulaku muniyaa, beynunnvaa lakulaku muniyaa
#1
Jaadhooekey heeve hiyy milenbeythee
*Dheevaanaa kurevae seedhaa moonah e balaathee
Vaaneygoyy vehjey dhen masthee avaigaa
*Vaaneygoyy vehjey dhen masthee avaigaa
Behenee hiyy oigaathaaey halaboli vaigaa
*Behenee hiyy oigaathaaey halaboli vaigaa
Hithahdhey goanaa, hithahdhey goanaa fini aniyaa
*Beynunnvaa foni foni aniyaa
#2
Sihrun nikan yaaraa buneleee loabivey
*Sihrun nikan yaaraa buneleee loabivey
Vevunee qaboolu sikundin baaru dhoovey
*Vevunee qaboolu sikundin baaru dhoovey
Athun dhoovehjey, athun dhoovehjey rihi bandiyaa
*Saharoaey agu molhu bandiyaa`,
},
{
  id: 246,
  name: `Dheytho Dheytho`,
  genre: 'Nala',
  lyrics: `#M
ދޭތޯ ދޭތޯ ވީ ބަލަން މިވާ ހިތުގެ ގިލަން
*ތީޔޭ މަލަކީ އުފާދޭ ނަނަނާ

#1
ފޮޅުނުހާވެސް މަލަކީ ތިއީޔޭ
*މަލުގެ ރީތިކަމާއޭ

#2
އެންމެ ފިޔައެއް ނަމަވެސް ލިބޭތޯ
*ދެންނެވީމެ އިނގޭތޯ

#3
ދޭށެ ވާނީ ނޫރަންގުލޭމާ
*ޗާލުމި މަލުގެ އަރާމާ`,

  englishLyrics: `#M
Dheythoa dheythoa vee balan mivaa hithuge gilan
*Theeyey malakee ufaadhey nananaa
#1
Folhunuhaaves malakee thieeyey
*Maluge reethikamaaey
#2
Ennme fiyaeh namaves libeythoa
*Dhenneveeme ingeythoa
#3
Dheyshe vaanee noorannguleymaa
*Chaalumi maluge araamaa`,
},
]