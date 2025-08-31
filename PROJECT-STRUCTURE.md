# Rhythm Project - Organized File Structure

## 📁 Directory Structure

### Root Files
- `index.html` - Main landing page
- `robots.txt` - Search engine directives
- `sitemap.xml` - Site structure for search engines
- `.htaccess` - Apache server configuration
- `CNAME` - Domain configuration for GitHub Pages

### 📂 `/pages/` - Main Application Pages
**Core User Pages:**
- `songlist.html` - Main song listing (Firebase-powered, CSV-free)
- `lyrics.html` - Lyrics display page
- `members.html` - Band members page
- `my-account.html` - User account management

**🔧 `/pages/admin/` - Administrative Tools**
- `admin.html` - Main admin dashboard
- `applications-list.html` - User application management (CSV-free)
- `sponsor-callback-list.html` - Sponsor management (CSV-free)
- `lyrics-edit.html` - Lyrics editing interface
- `songs-download.html` - Song download management
- `show-list-generator.html` - Show list generation tool
- `get-form-entries.html` - Form data extraction
- `invoice-admin.html` - Invoice management
- `invoice-generator.html` - Invoice generation
- `sponsor-proposal.html` - Sponsor proposal management
- `application-form.html` - Application form interface

**🔐 `/pages/auth/` - Authentication System**
- `login.html` - Normal user login (Firebase-powered)
- `login-admin.html` - Admin user management dashboard
- `login-dev.html` - Developer admin panel with promotion capabilities

**🛠️ `/pages/tools/` - Utility Tools**
- `divtoeng.html` - Dhivehi to English transliteration
- `engtodiv.html` - English to Dhivehi transliteration
- `complete-transliteration.html` - Complete transliteration tool
- `carousel-gallery.html` - Gallery carousel tool
- `field-extractor.html` - Data field extraction tool
- `infinite-carousel.html` - Infinite carousel component

**📜 `/pages/legacy/` - Legacy Pages**
- Reserved for old page versions during migration

### 💻 `/js/` - JavaScript Modules
**Core System:**
- `firebase-db.js` - Firebase database interface (CSV-free)
- `rhythm-auth.js` - Authentication system
- `config.js` - Main configuration

**UI & Features:**
- `music-player.js` - Audio player functionality
- `rhythm-page-transition.js` - Page transitions
- `transliteration.js` - Text transliteration
- `reverse-transliteration.js` - Reverse transliteration
- `showlist.js` - Show list management
- `music-data.js` - Music metadata management

**Admin & Legacy:**
- `admin-session.js` - Admin session management
- `csv-config.js` - Legacy CSV configuration (deprecated)

**Service Workers:**
- `sw.js` - Main service worker
- `sw-notifications.js` - Push notification handling

### 🎨 `/assets/` - Static Assets
**Icons & Images:**
- `favicon.ico` - Site favicon
- `/favicons/` - Various favicon formats and manifests
- `/Fonts/` - Typography assets (Montserrat, Faruma, etc.)

**Scripts:**
- `styles.css` - Main stylesheet
- `update_fonts.ps1` - Font update automation

### 🎵 `/src/` - Media & Resources
**Images & Graphics:**
- Various background images, logos, icons
- `/img/` - Numbered image assets
- `/Sponsors/` - Sponsor logos and graphics
- `/thumb/` - Thumbnail images

### 📊 `/data/` - Data Files
- `songs-database.json` - Song metadata (replaces CSV)

### 🗂️ `/archive/` - Archived Files
- `01111101001.html` to `10000000101.html` - Legacy numbered pages

### 📚 `/docs/` - Documentation
- `song format` - Song format documentation

### 🎨 `/css/` - Stylesheets
- `lyrics.css` - Lyrics-specific styles

---

## 🚀 System Architecture

### Authentication Flow
1. **Normal Users**: `login.html` → Firebase authentication → `songlist.html` + `lyrics.html`
2. **Admin Users**: `login-admin.html` → User management dashboard
3. **Developers**: `login-dev.html` → Advanced admin with promotion capabilities

### Data Flow
- **All CSV functionality removed** ✅
- **Firebase-powered** for all data operations
- **Two-tier access system**: Normal users vs. Admin users

### Key Features
- 🔥 **Firebase Integration**: Complete database solution
- 🚫 **CSV-Free**: All CSV functionality removed per requirements
- 🔐 **Secure Authentication**: Multi-level access control
- 📱 **PWA Ready**: Service workers and manifests included
- 🌐 **SEO Optimized**: Proper sitemap and robots.txt

---

## 🧹 Cleanup Status
- ✅ All HTML files organized into logical directories
- ✅ JavaScript files consolidated in `/js/`
- ✅ Assets properly structured in `/assets/`
- ✅ Legacy files archived in `/archive/`
- ✅ CSV functionality completely removed
- ✅ Firebase integration maintained
- 🔄 **Next**: Fix file paths and references after reorganization

---

*Last Updated: August 31, 2025*
*Project: Rhythm Band Management System*
