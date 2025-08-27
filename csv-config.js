// Rhythm Boduberu HTML Configuration - Obfuscated Data Sources
(function() {
    'use strict';
    
    // Obfuscated configuration data
    const _0x4a2b = [
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlNWdTVmOXgyZi11Mmhha0xfMXBaeV9oYmVweHRuRmY3TVJXVzlMekd1OFNDcV95UWl0aFBETUJWd1dKZmdjeEJYOVVlY09SaTNlVmpSZC9wdWJodG1sP2dpZD03MzM4MDE1NDYmc2luZ2xlPXRydWU=',
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlFkS2xDRkRjMUlFUVhFZ2prWDFVTHBHTGpXaXRSemFIOFdzYTFmTkdxR2JYa011U2hUTm1URHNrMWZMNkY4STNEMDIyem4ySFVJckN1eC9wdWJodG1sP2dpZD0yMDk2ODEyMzQ5JnNpbmdsZT10cnVl',
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlFnM0phOHZGXzU2Zks1VGNpOE5kcFBxemk5LWxHUGFSMUttblpOMnpvQkN5cjBZVWNaRkhqR2xic2lHN3Ftckpkc1VEUldLMVF1dDlGL3B1Ymh0bWw/Z2lkPTE5NDMwNDE3NjMmc2luZ2xlPXRydWU=',
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlJZZ2hWUUxwelNhdm5FdktSV0tZYnFhZE9EVjF5bDcxUnFNWXNSbERHaUpZcWpXaDM5OEo3LWNnbGpMWW9qMXlMQUxQa0tEZmtzZFBlQy9wdWJodG1sP2dpZD0xNzc5NjE2NzA1JnNpbmdsZT10cnVl',
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlJ4VWxNS0k5RmRxZlRIakQzeVREaXV3bGhId3pyZm9WRUtYc0EwWmZUcFFMR25fU0d2TTJ1SnV6NlVSQTNfR1hSRkJ2b2Zqa2EtNGZKRi9wdWJodG1sP2dpZD0xMTM3ODg4MDYyJnNpbmdsZT10cnVl',
        'aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vc3ByZWFkc2hlZXRzL2QvZS8yUEFDWC0xdlNvckVBaHg4TG1MRDFtOG1LREt1Wk1ZV2xFQ0EyNFFxRll0N2FfczVCMlRheFIxTjlYYkhIRXVjS1VpVVlDTHBWRjBYVktsMTRMWWE2bC9wdWJodG1sP2dpZD02MzEzNjkyMzMmc2luZ2xlPXRydWU=',
        'cHViaHRtbA==',
        'P2dpZD0xNzc5NjE2NzA1JnNpbmdsZT10cnVl',
        'Ynl0ZUxlbmd0aA==',
        'YXRvYg==',
        'Y2hhckNvZGVBdA==',
        'ZnJvbUNoYXJDb2Rl'
    ];
    
    // URL decoder function
    function _0x3f8c(str) {
        try {
            return atob(str);
        } catch (e) {
            return '';
        }
    }
    
    // Advanced string decoder
    function _0x7b4e(encoded) {
        const decoded = _0x3f8c(encoded);
        return decoded.split('').map((char, index) => {
            const offset = index % 3;
            return String.fromCharCode(char.charCodeAt(0) - offset);
        }).join('').split('').map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('').replace(/[\x00-\x1F]/g, '');
    }
    
    // Simple decoder for main URLs
    function _0x9c2d(str) {
        return _0x3f8c(str);
    }
    
    // HTML Data Sources - Obfuscated endpoints
    const HTML_ENDPOINTS = {
        // Lyrics/Songs data
        lyrics: _0x9c2d(_0x4a2b[0]),
        
        // Showlist and cancel data  
        showlist: _0x9c2d(_0x4a2b[0]),
        cancel: _0x9c2d(_0x4a2b[1]),
        
        // Applications data
        applications: _0x9c2d(_0x4a2b[2]),
        applicationsStatus: _0x9c2d(_0x4a2b[3]),
        
        // Sponsor data
        sponsors: _0x9c2d(_0x4a2b[4]),
        sponsorsStatus: _0x9c2d(_0x4a2b[5])
    };

    // Data extraction with obfuscated logging
    function extractDataFromHTML(html) {
        try {
            // Create a temporary DOM element
            const _0x1e3f = document.createElement('div');
            _0x1e3f.innerHTML = html;
            
            const _0x2d4c = [];
            
            // Look for table rows (tr elements)
            const _0x8b5a = _0x1e3f.querySelectorAll('tr');
            if (typeof console !== 'undefined' && console.log) {
                console.log('🔍 Data extraction:', _0x8b5a.length, 'rows found');
            }
            
            if (_0x8b5a.length > 0) {
                for (let _0x7c2b of _0x8b5a) {
                    const _0x9f8d = _0x7c2b.querySelectorAll('td');
                    if (_0x9f8d.length > 0) {
                        const _0x4e6a = Array.from(_0x9f8d).map(cell => {
                            // Get text content and clean it up
                            let _0x3b7c = cell.textContent || cell.innerText || '';
                            return _0x3b7c.trim();
                        });
                        
                        // Only add rows that have actual data
                        if (_0x4e6a.length > 0 && _0x4e6a.some(cell => cell.length > 0)) {
                            _0x2d4c.push(_0x4e6a);
                        }
                    }
                }
                
                if (typeof console !== 'undefined' && console.log) {
                    console.log('✅ Extracted', _0x2d4c.length, 'valid data rows');
                }
            }
            
            if (_0x2d4c.length === 0) {
                throw new Error('No data rows found');
            }
            
            return _0x2d4c;
            
        } catch (error) {
            if (typeof console !== 'undefined' && console.error) {
                console.error('❌ Data extraction failed:', error);
            }
            throw new Error('Failed to process data: ' + error.message);
        }
    }
    
    // Create global configuration objects
    window.RhythmCSVConfig = {
        endpoints: HTML_ENDPOINTS,
        
        // Fetch HTML and return structured data - obfuscated
        async fetchData(_0x8f4b, _0x6c3a = {}) {
            const _0x9e7d = _0x6c3a.retries || 3;
            const _0x5b2f = _0x6c3a.timeout || 15000;
            const _0x7a1c = HTML_ENDPOINTS[_0x8f4b] || _0x8f4b;
            
            for (let _0x4d9e = 1; _0x4d9e <= _0x9e7d; _0x4d9e++) {
                try {
                    if (typeof console !== 'undefined' && console.log) {
                        console.log('🔄 Request #' + _0x4d9e + '/' + _0x9e7d + ' - ' + _0x8f4b);
                    }
                    
                    const _0x3c8b = new AbortController();
                    const _0x2f6a = setTimeout(() => _0x3c8b.abort(), _0x5b2f);
                    
                    const _0x8e5d = await fetch(_0x7a1c, {
                        signal: _0x3c8b.signal,
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                            'Cache-Control': 'no-cache',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                        }
                    });
                    
                    clearTimeout(_0x2f6a);
                    
                    if (!_0x8e5d.ok) {
                        throw new Error('HTTP ' + _0x8e5d.status + ': ' + _0x8e5d.statusText);
                    }
                    
                    const _0x1b7f = await _0x8e5d.text();
                    
                    if (!_0x1b7f || _0x1b7f.trim().length === 0) {
                        throw new Error('Empty response received');
                    }
                    
                    if (typeof console !== 'undefined' && console.log) {
                        console.log('📄 Response size:', _0x1b7f.length, 'chars');
                    }
                    
                    // Extract structured data from HTML
                    const _0x6f9c = extractDataFromHTML(_0x1b7f);
                    
                    if (!_0x6f9c || _0x6f9c.length === 0) {
                        throw new Error('No data extracted');
                    }
                    
                    if (typeof console !== 'undefined' && console.log) {
                        console.log('✅ Success:', _0x6f9c.length, 'rows processed');
                    }
                    return _0x6f9c;
                    
                } catch (error) {
                    if (typeof console !== 'undefined' && console.warn) {
                        console.warn('⚠️ Attempt ' + _0x4d9e + ' failed:', error.message);
                    }
                    
                    if (_0x4d9e === _0x9e7d) {
                        if (typeof console !== 'undefined' && console.error) {
                            console.error('❌ All ' + _0x9e7d + ' attempts failed for:', _0x8f4b);
                        }
                        throw error;
                    }
                    
                    // Wait before retry
                    const _0x8c4f = Math.min(1000 * Math.pow(2, _0x4d9e - 1), 5000);
                    await new Promise(resolve => setTimeout(resolve, _0x8c4f));
                }
            }
        },
        
        // Legacy compatibility - convert HTML data to CSV format for existing code
        async fetchCSV(_0x7f8a, _0x4c2b = {}) {
            const _0x9d3e = await this.fetchData(_0x7f8a, _0x4c2b);
            
            // Convert structured data to CSV format
            const _0x6e5c = _0x9d3e.map(_0x8a1f => {
                return _0x8a1f.map(_0x5b7d => {
                    let _0x3c9e = _0x5b7d;
                    // Handle line breaks and clean up whitespace
                    _0x3c9e = _0x3c9e.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
                    
                    // Basic CSV escaping
                    if (_0x3c9e.includes(',') || _0x3c9e.includes('"') || _0x3c9e.includes('\n')) {
                        _0x3c9e = '"' + _0x3c9e.replace(/"/g, '""') + '"';
                    }
                    return _0x3c9e;
                }).join(',');
            });
            
            return _0x6e5c.join('\n');
        }
    };
    
    // Legacy compatibility - Update existing config objects
    window.RhythmConfig = window.RhythmConfig || {};
    Object.assign(window.RhythmConfig, {
        applicationsSheet: HTML_ENDPOINTS.applications,
        applicationsStatusSheet: HTML_ENDPOINTS.applicationsStatus,
        sponsorCallbackSheet: HTML_ENDPOINTS.sponsors,
        sponsorCallbackStatusSheet: HTML_ENDPOINTS.sponsorsStatus
    });
    
    // Update lyrics show config
    window.RhythmLyricsShowConfig = window.RhythmLyricsShowConfig || {};
    Object.assign(window.RhythmLyricsShowConfig, {
        lyricsSheet: HTML_ENDPOINTS.lyrics,
        showListSheet: HTML_ENDPOINTS.showlist,
        cancelSheet: HTML_ENDPOINTS.cancel
    });
    
    if (typeof console !== 'undefined' && console.log) {
        console.log('✅ Configuration loaded');
        console.log('📊 Available:', Object.keys(HTML_ENDPOINTS).length, 'endpoints');
        console.log('🌐 Using obfuscated data extraction');
    }
    
})();
