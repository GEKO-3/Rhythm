// Optimized Music Player JavaScript for Rhythm Boduberu
// Performance optimized with reduced logging and improved efficiency

// Global variables
let currentlyPlaying = null;
let currentWidget = null;
let playStates = {};
let savedPositions = {};
let currentActiveIndex = 0;
let currentDotIndex = 0;
let totalDots = 0;
let isVideoPlaying = true;
let lastSwipeDirection = null;

// Touch/swipe detection
let startX = 0, startY = 0, endX = 0, endY = 0;

// Performance: Debounced functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Enhanced dot indicator management
function updateDots(direction, animate = true) {
    const dots = document.querySelectorAll('.indicator-dot');
    if (dots.length === 0) return;
    
    let dotDirection = direction;
    if (lastSwipeDirection) {
        dotDirection = lastSwipeDirection === 'right' ? 'left' : 'right';
        lastSwipeDirection = null;
    }
    
    if (animate) {
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'next-active', 'prev-active');
            const distance = index - currentDotIndex;
            
            if (distance === 0) dot.classList.add('active');
            else if (distance === 1 || distance === -(totalDots - 1)) dot.classList.add('next-active');
            else if (distance === -1 || distance === (totalDots - 1)) dot.classList.add('prev-active');
        });
        
        setTimeout(() => {
            if (dotDirection === 'left') currentDotIndex = (currentDotIndex - 1 + totalDots) % totalDots;
            else if (dotDirection === 'right') currentDotIndex = (currentDotIndex + 1) % totalDots;
            
            dots.forEach((dot, index) => {
                dot.classList.remove('active', 'next-active', 'prev-active');
                const distance = index - currentDotIndex;
                
                if (distance === 0) dot.classList.add('active');
                else if (distance === 1 || distance === -(totalDots - 1)) dot.classList.add('next-active');
                else if (distance === -1 || distance === (totalDots - 1)) dot.classList.add('prev-active');
            });
        }, 100);
    } else {
        if (dotDirection === 'left') currentDotIndex = (currentDotIndex - 1 + totalDots) % totalDots;
        else if (dotDirection === 'right') currentDotIndex = (currentDotIndex + 1) % totalDots;
        
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'next-active', 'prev-active');
            const distance = index - currentDotIndex;
            
            if (distance === 0) dot.classList.add('active');
            else if (distance === 1 || distance === -(totalDots - 1)) dot.classList.add('next-active');
            else if (distance === -1 || distance === (totalDots - 1)) dot.classList.add('prev-active');
        });
    }
}

// Video control functions
function pauseVideo() {
    const video = document.querySelector('.video-background');
    if (video && !video.paused && isVideoPlaying) {
        video.pause();
        isVideoPlaying = false;
    }
}

function resumeVideo() {
    const video = document.querySelector('.video-background');
    if (video && video.paused && !isVideoPlaying) {
        video.play().catch(() => {});
        isVideoPlaying = true;
    }
}

// Optimized thumbnail preloading with intersection observer
function preloadThumbnails() {
    if (typeof musicData === 'undefined') return;
    
    const visibleTiles = document.querySelectorAll('.owl-item.active .track-thumbnail, .music-tile .track-thumbnail');
    const visibleSrcs = Array.from(visibleTiles).map(img => img.src);
    
    musicData.forEach(track => {
        if (!visibleSrcs.includes(track.thumbnailUrl)) {
            const img = new Image();
            img.src = track.thumbnailUrl;
        }
    });
}

// Optimized scroll handler
let lastScrollPosition = 0;
const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;
    
    if (!isAtBottom && !isVideoPlaying && !currentlyPlaying) {
        resumeVideo();
    } else if (isAtBottom && isVideoPlaying) {
        pauseVideo();
    }
    
    lastScrollPosition = scrollPosition;
}, 16); // 60fps throttling

// Generate indicator dots
function generateIndicatorDots() {
    if (typeof musicData === 'undefined') return;
    
    const indicatorsContainer = document.getElementById('tile-indicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    totalDots = musicData.length;
    
    musicData.forEach((track, index) => {
        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        dot.setAttribute('data-index', index);
        
        if (index === 0) {
            dot.classList.add('active');
            currentDotIndex = 0;
        }
        
        indicatorsContainer.appendChild(dot);
    });
}

function generateSoundCloudUrl(trackId) {
    const baseUrl = "https://w.soundcloud.com/player/";
    const params = new URLSearchParams({
        url: `https://api.soundcloud.com/tracks/${trackId}`,
        color: "#000000",
        auto_play: "true",
        hide_related: "true",
        show_comments: "false",
        show_user: "false",
        show_reposts: "false",
        show_teaser: "false",
        visual: "false",
        buying: "false",
        sharing: "false",
        download: "false",
        start_track: "0",
        single_active: "true"
    });
    
    return baseUrl + "?" + params.toString();
}

// Create music tile
function createMusicTile(track) {
    const formLine = track.form ? `<p class="tile-form">${track.form}</p>` : '';
    const originalTag = track.original ? `<p class="tile-original">Original</p>` : '';
    const soundcloudUrl = generateSoundCloudUrl(track.trackId);
    
    return `
        <div class="music-tile" data-track-id="${track.id}">
            <div class="custom-player">
                <img class="track-thumbnail" src="${track.thumbnailUrl}" alt="${track.title}" loading="lazy">
                <div class="custom-play-overlay">
                    <button class="custom-play-btn" data-iframe-src="${soundcloudUrl}">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                </div>
                <div class="soundcloud-player" style="display: none;"></div>
                <div class="tile-info-banner">
                    ${originalTag}
                    <h3 class="tile-title">${track.title}</h3>
                    <p class="tile-artist">${track.artist}</p>
                    ${formLine}
                </div>
            </div>
        </div>
    `;
}

// Populate carousel
function populateCarousel() {
    const carousel = document.getElementById('music-carousel');
    if (!carousel || typeof musicData === 'undefined') return;
    
    generateIndicatorDots();
    carousel.innerHTML = '';
    
    musicData.forEach((track, index) => {
        const tileHTML = createMusicTile(track);
        carousel.innerHTML += tileHTML;
    });
}

// Initialize carousel
function initializeCarousel() {
    populateCarousel();
    
    if (typeof jQuery === 'undefined' || typeof jQuery().owlCarousel === 'undefined') {
        showFallbackCarousel();
        return;
    }
    
    const carouselElement = $('#music-carousel');
    if (carouselElement.length === 0) return;
    
    try {
        $('#music-carousel').owlCarousel({
            items: 3,
            loop: true,
            center: true,
            margin: 20,
            nav: false,
            dots: false,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            freeDrag: false,
            stagePadding: 0,
            smartSpeed: 500,
            startPosition: 0,
            autoWidth: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 }
            },
            onInitialized: function(event) {
                setTimeout(() => {
                    const centerItem = document.querySelector('.owl-item.center .music-tile');
                    if (centerItem) centerItem.classList.add('center-item');
                }, 200);
            },
            onChanged: function(event) {
                updateDots('right', true);
                
                document.querySelectorAll('.music-tile').forEach(tile => {
                    tile.classList.remove('center-item');
                });
                
                setTimeout(() => {
                    const centerItem = document.querySelector('.owl-item.center .music-tile');
                    if (centerItem) centerItem.classList.add('center-item');
                }, 100);
            }
        });
    } catch (error) {
        showFallbackCarousel();
        return;
    }
    
    attachEventListeners();
    attachNavigationListeners();
}

function showFallbackCarousel() {
    populateCarousel();
    
    const carousel = document.getElementById('music-carousel');
    if (carousel) {
        carousel.style.display = 'flex';
        carousel.style.flexWrap = 'nowrap';
        carousel.style.overflowX = 'auto';
        carousel.style.gap = '20px';
        carousel.style.padding = '20px';
        
        const tiles = carousel.querySelectorAll('.music-tile');
        tiles.forEach(tile => {
            tile.style.flexShrink = '0';
        });
        
        attachEventListeners();
        attachNavigationListeners();
    }
}

function attachNavigationListeners() {
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    
    if (prevButton) {
        prevButton.removeEventListener('click', scrollToPrev);
        prevButton.addEventListener('click', scrollToPrev);
    }
    
    if (nextButton) {
        nextButton.removeEventListener('click', scrollToNext);
        nextButton.addEventListener('click', scrollToNext);
    }
}

function scrollToNext() {
    if (typeof jQuery !== 'undefined' && $('#music-carousel').data('owl.carousel')) {
        $('#music-carousel').trigger('next.owl.carousel');
    }
}

function scrollToPrev() {
    if (typeof jQuery !== 'undefined' && $('#music-carousel').data('owl.carousel')) {
        $('#music-carousel').trigger('prev.owl.carousel');
    }
}

function attachEventListeners() {
    const carousel = document.getElementById('music-carousel');
    if (carousel) {
        carousel.removeEventListener('click', handleCarouselClick);
        carousel.addEventListener('click', handleCarouselClick);
    }
}

function handleCarouselClick(e) {
    const button = e.target.closest('.custom-play-btn');
    if (button) {
        e.preventDefault();
        e.stopPropagation();
        handlePlayButtonClick(button);
    }
}

function handlePlayButtonClick(button) {
    const iframeSrc = button.getAttribute('data-iframe-src');
    if (!iframeSrc) return;
    
    const tile = button.closest('.music-tile');
    const trackId = tile.getAttribute('data-track-id');
    const overlay = tile.querySelector('.custom-play-overlay');
    const banner = tile.querySelector('.tile-info-banner');
    const playerContainer = tile.querySelector('.soundcloud-player');
    
    if (currentlyPlaying && currentlyPlaying !== tile) {
        const prevTile = currentlyPlaying;
        const prevButton = prevTile.querySelector('.custom-play-btn');
        const prevOverlay = prevTile.querySelector('.custom-play-overlay');
        const prevBanner = prevTile.querySelector('.tile-info-banner');
        const prevPlayer = prevTile.querySelector('.soundcloud-player');
        
        prevButton.classList.remove('playing');
        prevOverlay.classList.remove('playing');
        prevBanner.classList.remove('playing');
        prevPlayer.style.display = 'none';
        prevPlayer.innerHTML = '';
        
        if (currentWidget) {
            try {
                currentWidget.pause();
            } catch (e) {}
        }
    }
    
    if (currentlyPlaying === tile) {
        button.classList.remove('playing');
        overlay.classList.remove('playing');
        banner.classList.remove('playing');
        playerContainer.style.display = 'none';
        playerContainer.innerHTML = '';
        currentlyPlaying = null;
        currentWidget = null;
        resumeVideo();
        return;
    }
    
    pauseVideo();
    
    button.classList.add('playing');
    overlay.classList.add('playing');
    banner.classList.add('playing');
    
    const playIcon = button.querySelector('svg');
    if (playIcon) {
        playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    }
    
    playerContainer.innerHTML = `<iframe src="${iframeSrc}" allow="autoplay" loading="lazy"></iframe>`;
    playerContainer.style.display = 'block';
    
    currentlyPlaying = tile;
    
    setTimeout(() => {
        const iframe = playerContainer.querySelector('iframe');
        if (iframe && typeof SC !== 'undefined') {
            currentWidget = SC.Widget(iframe);
            
            if (savedPositions[trackId]) {
                currentWidget.bind(SC.Widget.Events.READY, () => {
                    currentWidget.seekTo(savedPositions[trackId]);
                    currentWidget.play();
                });
            }
            
            currentWidget.bind(SC.Widget.Events.PLAY_PROGRESS, (data) => {
                savedPositions[trackId] = data.currentPosition;
            });
            
            currentWidget.bind(SC.Widget.Events.FINISH, () => {
                button.classList.remove('playing');
                overlay.classList.remove('playing');
                banner.classList.remove('playing');
                playerContainer.style.display = 'none';
                currentlyPlaying = null;
                currentWidget = null;
                resumeVideo();
                
                if (playIcon) {
                    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
                }
            });
        }
    }, 500);
}

// Storage functions (simplified)
function loadSavedPositions() {
    try {
        const saved = localStorage.getItem('rhythmPlayerPositions');
        if (saved) savedPositions = JSON.parse(saved);
    } catch (e) {}
}

function savePositions() {
    try {
        localStorage.setItem('rhythmPlayerPositions', JSON.stringify(savedPositions));
    } catch (e) {}
}

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    loadSavedPositions();
    
    function checkDependencies() {
        return {
            hasJQuery: typeof jQuery !== 'undefined',
            hasOwlCarousel: typeof jQuery !== 'undefined' && typeof jQuery().owlCarousel !== 'undefined',
            hasSoundCloudAPI: typeof SC !== 'undefined' && SC.Widget,
            hasMusicData: typeof musicData !== 'undefined'
        };
    }
    
    // Wait for jQuery and initialize
    if (typeof jQuery !== 'undefined') {
        $(document).ready(function() {
            const deps = checkDependencies();
            if (!deps.hasMusicData) {
                setTimeout(initializeCarousel, 1000);
                return;
            }
            
            initializeCarousel();
            
            setTimeout(() => {
                const carousel = document.getElementById('music-carousel');
                const isVisible = carousel && carousel.offsetHeight > 0;
                if (!isVisible) showFallbackCarousel();
            }, 3000);
        });
    } else {
        setTimeout(initializeCarousel, 1000);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            scrollToPrev();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            scrollToNext();
        }
    });
    
    // Optimized scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Delayed thumbnail preload
    setTimeout(preloadThumbnails, 2000);
    
    // Touch handlers for carousel
    const carouselContainer = document.querySelector('.music-tiles-container');
    if (carouselContainer) {
        let isCarouselTouch = false;
        
        carouselContainer.addEventListener('touchstart', function(e) {
            isCarouselTouch = true;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
        }, { passive: true });
        
        carouselContainer.addEventListener('touchmove', function(e) {
            if (isCarouselTouch) {
                const touch = e.touches[0];
                const currentX = touch.clientX;
                const currentY = touch.clientY;
                
                if (!this.initialTouch) {
                    this.initialTouch = { x: startX, y: startY };
                }
                
                const deltaX = Math.abs(currentX - this.initialTouch.x);
                const deltaY = Math.abs(currentY - this.initialTouch.y);
                
                if (deltaX > deltaY) {
                    e.preventDefault();
                }
            }
        }, { passive: false });
        
        carouselContainer.addEventListener('touchend', function(e) {
            if (isCarouselTouch) {
                const touch = e.changedTouches[0];
                endX = touch.clientX;
                endY = touch.clientY;
                
                const deltaX = endX - startX;
                const deltaY = endY - startY;
                
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
                    lastSwipeDirection = deltaX > 0 ? 'right' : 'left';
                }
            }
            
            isCarouselTouch = false;
            this.initialTouch = null;
            
            setTimeout(preloadThumbnails, 300);
        }, { passive: true });
    }
    
    // Auto-save positions periodically
    setInterval(savePositions, 30000);
});

// Prevent zoom
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) event.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', function(event) {
    if (event.scale && event.scale !== 1) event.preventDefault();
}, { passive: false });

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});

// Optimized loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const patternContainer = document.getElementById('pattern-container');
    
    function generatePatternLines() {
        if (!patternContainer) return;
        
        const viewportHeight = window.innerHeight;
        const lineHeight = 40;
        const numberOfLines = Math.ceil(viewportHeight / lineHeight) + 1;
        
        patternContainer.innerHTML = '';
        
        for (let i = 0; i < numberOfLines; i++) {
            const line = document.createElement('div');
            line.className = 'pattern-line';
            line.style.top = (i * lineHeight) + 'px';
            line.style.willChange = 'transform';
            line.style.transform = 'translateZ(0)';
            patternContainer.appendChild(line);
        }
    }
    
    generatePatternLines();
    window.addEventListener('resize', generatePatternLines);
    
    const minDisplayTime = 2000;
    const startTime = Date.now();
    
    function startEnlarging() {
        const loadingLogo = loadingScreen.querySelector('.loading-logo');
        if (loadingLogo) {
            loadingScreen.classList.add('fade-out');
            loadingScreen.style.transition = 'none';
            loadingScreen.style.opacity = '1';
        }
    }
    
    function startFadeOut() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
        const enlargingTime = Math.max(0, remainingTime - 200);
        
        setTimeout(startEnlarging, enlargingTime);
        
        setTimeout(function() {
            loadingScreen.style.transition = 'opacity 0.6s ease-out';
            
            const loadingLogo = loadingScreen.querySelector('.loading-logo');
            if (loadingLogo) loadingLogo.classList.add('fade-out');
            if (patternContainer) patternContainer.classList.add('fade-out');
            
            setTimeout(() => loadingScreen.style.opacity = '0', 200);
            setTimeout(() => loadingScreen.remove(), 1000);
        }, remainingTime);
    }
    
    setTimeout(() => {
        if (document.readyState === 'complete') {
            startFadeOut();
        } else {
            setTimeout(startFadeOut, 500);
        }
    }, 100);
});
