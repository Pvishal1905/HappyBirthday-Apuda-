// ============================
// Data: Quotes, Lines, Wishes
// ============================

const quotes = [
    { icon: "💖", text: "You're not just a year older, you're a year more incredible, a year more beautiful, and a year more irreplaceable in my life.", emoji: "🌟✨💕" },
    { icon: "👑", text: "Queens don't age, they just level up. And today, you just hit the most gorgeous level yet!", emoji: "💎🔥👑" },
    { icon: "🌹", text: "If I had a flower for every time you made me smile, I'd have an endless garden. Happy Birthday, my forever bloom!", emoji: "🌺🌸🌷" },
    { icon: "🦋", text: "The world became a better place the day you were born. Thank you for existing, bestie!", emoji: "🌍💫🦋" },
    { icon: "✨", text: "You don't need a birthday crown — you were born a queen. But today, the whole world bows to you!", emoji: "👑💎✨" },
    { icon: "🎭", text: "Some people make the world special just by being in it. You're one of those people, and I'm lucky you're MY person.", emoji: "💕🤗🎭" },
    { icon: "🌙", text: "Even the stars are jealous tonight because YOUR glow outshines them all. Happy Birthday, gorgeous!", emoji: "⭐🌙💫" },
    { icon: "💐", text: "A best friend like you comes once in a lifetime. I hit the jackpot the day I found you!", emoji: "🎰💐🍀" },
    { icon: "🎵", text: "Life without you would be like a song without melody — absolutely incomplete. Keep being my favorite tune!", emoji: "🎶🎵💃" },
    { icon: "🔮", text: "I don't need a crystal ball to see the future. I just need you by my side, and everything is perfect.", emoji: "🔮💜🌌" },
];

const friendshipLines = [
    {
        emoji: "🤝",
        title: "My Ride or Die",
        text: "Through every crazy adventure, every midnight call, every laughing-till-we-cry moment — you've been there. Not everyone gets a best friend like you. I did, and I'll never let go."
    },
    {
        emoji: "😂",
        title: "My Laughter Therapist",
        text: "You know exactly how to make me laugh when the whole world seems grey. Your stupid jokes, your silly faces — they're my favorite medicine. No doctor needed, just YOU!"
    },
    {
        emoji: "🌙",
        title: "My 3 AM Friend",
        text: "The one who picks up at 3 AM without asking why. The one who shows up when everyone else disappears. You're not just a friend — you're my safe place, my comfort zone."
    },
    {
        emoji: "💪",
        title: "My Biggest Cheerleader",
        text: "When the world doubted me, you were the one screaming 'YOU GOT THIS!' from the sidelines. Your faith in me has always been louder than my fears."
    },
    {
        emoji: "🍕",
        title: "My Partner In Crime",
        text: "From sneaking extra fries to planning the most chaotic trips — every crime is better with you. We're not troublemakers, we're just... spontaneous. Very spontaneous. 😏"
    },
    {
        emoji: "🏠",
        title: "My Home Away From Home",
        text: "They say home is where the heart is. Well, my heart lives wherever you are. You're not just my bestie — you're my home, my comfort, my happy place."
    },
];

const sweetLines = [
    { emoji: "😏", text: "If being beautiful was a crime, you'd be serving a life sentence. But lucky for the world, you're free to slay!", type: "flirty", label: "Flirty" },
    { emoji: "🔥", text: "You don't need filters or makeup — your natural glow could light up an entire city. Someone call the fire department because you're too hot!", type: "flirty", label: "Flirty" },
    { emoji: "💕", text: "Best friends are like stars — you don't always see them, but you always know they're there. And girl, you're my brightest star!", type: "sweet", label: "Sweet" },
    { emoji: "👀", text: "If looks could kill, you'd be a weapon of mass destruction. But don't worry, I'll protect the world from your gorgeousness!", type: "flirty", label: "Flirty" },
    { emoji: "🎀", text: "God spent extra time making you because perfection doesn't come easy. Clearly, He showed off with you!", type: "sweet", label: "Sweet" },
    { emoji: "💃", text: "You walk into a room and everyone else becomes the background. That's not confidence — that's just your aura doing its thing!", type: "flirty", label: "Flirty" },
    { emoji: "🧡", text: "In a world full of temporary people, you're my permanent favorite. No refunds, no exchanges, no take-backs!", type: "bestie", label: "Bestie" },
    { emoji: "🌹", text: "You're the kind of beautiful that doesn't know it's beautiful — and THAT makes you even more stunning!", type: "flirty", label: "Flirty" },
    { emoji: "🤗", text: "Some people search their whole lives for what I already have in you. A friend, a sister, a soulmate — all wrapped in one amazing human!", type: "bestie", label: "Bestie" },
    { emoji: "😘", text: "If I had to choose between breathing and being your friend, I'd use my last breath to say 'Happy Birthday, gorgeous!'", type: "sweet", label: "Sweet" },
    { emoji: "💫", text: "They say nobody's perfect. They obviously haven't met you yet, because you come pretty darn close!", type: "flirty", label: "Flirty" },
    { emoji: "🦋", text: "You don't need wings to fly — your personality lifts everyone around you higher. You're actual magic!", type: "bestie", label: "Bestie" },
];

const wishes = [
    "May your smile never fade, your laugh never quiet down, and your heart never stop dancing. You deserve all the happiness in the universe! 💫",
    "I wish you love that makes you feel like the queen you are, adventures that take your breath away, and friends who never let you down (like me 😉).",
    "May every mirror remind you how beautiful you are, every song make you dance, and every day bring you closer to your wildest dreams! 🌟",
    "I wish you enough courage to chase every dream, enough strength to fight every battle, and enough chocolate to survive everything else! 🍫😂",
    "May this new year of your life bring so much joy that your cheeks hurt from smiling, your stomach hurts from laughing, and your heart bursts with love! 💖",
    "I wish you late-night giggles, early-morning blessings, surprise adventures, loyal friends, and a life so beautiful it feels like a movie — because you deserve the main character energy! 🎬✨",
    "May you always find parking spots easily, may your phone never die at 1%, and may all your selfies be fire on the first try! 📸🔥 (These are the real blessings!)",
];


// ============================
// Preloader & Entrance
// ============================
const preloader = document.getElementById('preloader');
const openGiftBtn = document.getElementById('openGiftBtn');
const mainContent = document.getElementById('mainContent');

openGiftBtn.addEventListener('click', () => {
    launchConfetti();
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.classList.remove('hidden');
        startFloatingElements();
        animateOnScroll();

        // Auto-start the song when gift is opened
        bgMusic.play();
        isPlaying = true;
        musicToggle.classList.add('playing');
        musicToggle.textContent = '🎶';
    }, 1000);
});


// ============================
// Confetti
// ============================
const confettiCanvas = document.getElementById('confettiCanvas');
const confettiCtx = confettiCanvas.getContext('2d');
let confettiPieces = [];
let confettiAnimating = false;

function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}
resizeConfettiCanvas();
window.addEventListener('resize', resizeConfettiCanvas);

function createConfettiPiece() {
    const colors = ['#ff6b9d', '#a855f7', '#fbbf24', '#34d399', '#60a5fa', '#f472b6', '#fb923c', '#c084fc'];
    return {
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * -confettiCanvas.height,
        w: Math.random() * 12 + 5,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        velocityX: (Math.random() - 0.5) * 4,
        velocityY: Math.random() * 3 + 2,
        opacity: 1,
        decay: Math.random() * 0.003 + 0.001,
    };
}

function launchConfetti() {
    confettiPieces = [];
    for (let i = 0; i < 200; i++) {
        confettiPieces.push(createConfettiPiece());
    }
    if (!confettiAnimating) {
        confettiAnimating = true;
        animateConfetti();
    }
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiPieces = confettiPieces.filter(p => p.opacity > 0);

    confettiPieces.forEach(p => {
        p.x += p.velocityX;
        p.y += p.velocityY;
        p.rotation += p.rotationSpeed;
        p.opacity -= p.decay;
        p.velocityY += 0.02;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.globalAlpha = p.opacity;
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        confettiCtx.restore();
    });

    if (confettiPieces.length > 0) {
        requestAnimationFrame(animateConfetti);
    } else {
        confettiAnimating = false;
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
}


// ============================
// Floating Background Elements
// ============================
function startFloatingElements() {
    const container = document.getElementById('floatingElements');
    const items = ['💕', '✨', '🌟', '💖', '🎂', '🎈', '🎉', '🦋', '🌸', '💫', '⭐', '🎀'];

    function createFloater() {
        const el = document.createElement('span');
        el.className = 'floating-item';
        el.textContent = items[Math.floor(Math.random() * items.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        el.style.animationDuration = (Math.random() * 10 + 8) + 's';
        el.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(el);

        setTimeout(() => el.remove(), 20000);
    }

    setInterval(createFloater, 1500);
    for (let i = 0; i < 8; i++) {
        setTimeout(createFloater, i * 300);
    }
}


// ============================
// Quotes Carousel
// ============================
let currentQuote = 0;

function initQuotesCarousel() {
    const carousel = document.getElementById('quotesCarousel');
    const dotsContainer = document.getElementById('carouselDots');

    quotes.forEach((q, i) => {
        const card = document.createElement('div');
        card.className = `quote-card ${i === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <span class="quote-icon">${q.icon}</span>
            <p class="quote-text">"${q.text}"</p>
            <span class="quote-emoji">${q.emoji}</span>
        `;
        carousel.appendChild(card);

        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToQuote(i));
        dotsContainer.appendChild(dot);
    });
}

function goToQuote(index) {
    const cards = document.querySelectorAll('.quote-card');
    const dots = document.querySelectorAll('.carousel-dot');

    cards[currentQuote].classList.remove('active');
    cards[currentQuote].classList.add('exit-left');
    dots[currentQuote].classList.remove('active');

    setTimeout(() => {
        cards[currentQuote].classList.remove('exit-left');
        currentQuote = index;
        cards[currentQuote].classList.add('active');
        dots[currentQuote].classList.add('active');
    }, 300);
}

document.getElementById('nextQuote').addEventListener('click', () => {
    goToQuote((currentQuote + 1) % quotes.length);
});

document.getElementById('prevQuote').addEventListener('click', () => {
    goToQuote((currentQuote - 1 + quotes.length) % quotes.length);
});

// Auto-play carousel
setInterval(() => {
    goToQuote((currentQuote + 1) % quotes.length);
}, 6000);

initQuotesCarousel();


// ============================
// Friendship Cards
// ============================
function initFriendshipCards() {
    const grid = document.getElementById('friendshipGrid');

    friendshipLines.forEach((f, i) => {
        const card = document.createElement('div');
        card.className = 'friendship-card';
        card.style.transitionDelay = `${i * 0.1}s`;
        card.innerHTML = `
            <span class="friendship-card-emoji">${f.emoji}</span>
            <h3 class="friendship-card-title">${f.title}</h3>
            <p class="friendship-card-text">${f.text}</p>
        `;
        grid.appendChild(card);
    });
}

initFriendshipCards();


// ============================
// Sweet / Flirty Cards
// ============================
function initSweetCards() {
    const container = document.getElementById('sweetCards');

    sweetLines.forEach((s, i) => {
        const card = document.createElement('div');
        card.className = 'sweet-card';
        card.style.transitionDelay = `${i * 0.08}s`;
        card.innerHTML = `
            <span class="sweet-card-emoji">${s.emoji}</span>
            <p class="sweet-card-text">"${s.text}"</p>
        `;
        container.appendChild(card);
    });
}

initSweetCards();


// ============================
// Birthday Wishes
// ============================
function initWishes() {
    const container = document.getElementById('wishesContainer');

    wishes.forEach((w, i) => {
        const card = document.createElement('div');
        card.className = 'wish-card';
        card.style.transitionDelay = `${i * 0.12}s`;
        card.innerHTML = `
            <div class="wish-number">${i + 1}</div>
            <p class="wish-text">${w}</p>
        `;
        container.appendChild(card);
    });
}

initWishes();


// ============================
// Photo Upload & Gallery
// ============================
const uploadArea = document.getElementById('uploadArea');
const uploadBtn = document.getElementById('uploadBtn');
const photoInput = document.getElementById('photoInput');
const photoGallery = document.getElementById('photoGallery');
// Pre-loaded photos in repository (visible to EVERYONE on any device!)
const defaultPhotos = [
    'photos/WhatsApp Image 2026-07-21 at 8.16.44 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 8.16.46 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 8.16.49 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 8.16.51 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 8.16.51 PM (1).jpeg',
    'photos/WhatsApp Image 2026-07-21 at 8.16.52 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 8.16.56 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 9.52.02 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 9.52.04 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 10.50.11 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 10.50.13 PM.jpeg',
    'photos/WhatsApp Image 2026-07-21 at 10.50.13 PM (1).jpeg',
    'WhatsApp Image 2026-07-21 at 10.52.34 PM.jpeg',
    'WhatsApp Image 2026-07-21 at 10.52.36 PM.jpeg',
    'photos/ChatGPT Image May 19, 2026, 01_37_05 PM.png',
    'photos/ChatGPT Image May 19, 2026, 01_39_03 PM.png'
];

let photos = [...defaultPhotos];
let lightboxIndex = 0;

// Load photos (default + any user uploaded photos from localStorage)
function loadSavedPhotos() {
    try {
        const saved = localStorage.getItem('birthdayUserPhotos');
        let userUploaded = [];
        if (saved) {
            userUploaded = JSON.parse(saved);
        }
        photos = [...defaultPhotos, ...userUploaded];
    } catch (e) {
        console.warn('Could not load saved photos:', e);
        photos = [...defaultPhotos];
    }
    refreshGallery();
}

// Save user-uploaded photos to localStorage
function saveUserPhotos() {
    try {
        const userUploaded = photos.slice(defaultPhotos.length);
        localStorage.setItem('birthdayUserPhotos', JSON.stringify(userUploaded));
    } catch (e) {
        console.warn('Storage full!', e);
    }
}

// Initialize gallery with photos
loadSavedPhotos();

uploadBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    photoInput.click();
});

uploadArea.addEventListener('click', () => {
    photoInput.click();
});

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    handleFiles(files);
});

photoInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) return;

        // Compress images before storing to save localStorage space
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_SIZE = 800; // max width/height for storage
                let width = img.width;
                let height = img.height;

                if (width > height && width > MAX_SIZE) {
                    height = (height * MAX_SIZE) / width;
                    width = MAX_SIZE;
                } else if (height > MAX_SIZE) {
                    width = (width * MAX_SIZE) / height;
                    height = MAX_SIZE;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const compressedData = canvas.toDataURL('image/jpeg', 0.7);
                photos.push(compressedData);
                addPhotoToGallery(compressedData, photos.length - 1);
                saveUserPhotos();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function addPhotoToGallery(src, index) {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.innerHTML = `
        <img src="${src}" alt="Memory ${index + 1}" loading="lazy">
        <div class="photo-overlay">
            <span>Memory #${index + 1} 💕</span>
        </div>
        <button class="photo-delete" onclick="deletePhoto(event, ${index})" title="Remove photo">✕</button>
    `;
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('photo-delete')) return;
        openLightbox(index);
    });
    photoGallery.appendChild(item);
}

window.deletePhoto = function(e, index) {
    e.stopPropagation();
    photos.splice(index, 1);
    saveUserPhotos();
    refreshGallery();
};

function refreshGallery() {
    photoGallery.innerHTML = '';
    photos.forEach((p, i) => addPhotoToGallery(p, i));
}


// ============================
// Lightbox
// ============================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(index) {
    lightboxIndex = index;
    lightboxImg.src = photos[index];
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);

document.getElementById('lightboxPrev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + photos.length) % photos.length;
    lightboxImg.src = photos[lightboxIndex];
});

document.getElementById('lightboxNext').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % photos.length;
    lightboxImg.src = photos[lightboxIndex];
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
        lightboxIndex = (lightboxIndex - 1 + photos.length) % photos.length;
        lightboxImg.src = photos[lightboxIndex];
    }
    if (e.key === 'ArrowRight') {
        lightboxIndex = (lightboxIndex + 1) % photos.length;
        lightboxImg.src = photos[lightboxIndex];
    }
});


// ============================
// Scroll Animations
// ============================
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.friendship-card, .sweet-card, .wish-card').forEach(el => {
        observer.observe(el);
    });
}


// ============================
// Countdown / Age
// ============================
function updateCountdown() {
    // Set a birth year — user can change this
    const birthYear = 2003;
    const now = new Date();
    const years = now.getFullYear() - birthYear;
    const months = years * 12 + now.getMonth();
    const days = Math.floor((now - new Date(birthYear, now.getMonth(), now.getDate())) / (1000 * 60 * 60 * 24));

    const cdYears = document.getElementById('cdYears');
    const cdMonths = document.getElementById('cdMonths');
    const cdDays = document.getElementById('cdDays');

    animateNumber(cdYears, years);
    animateNumber(cdMonths, months);
    animateNumber(cdDays, days);
}

function animateNumber(element, target) {
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    function update() {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            return;
        }
        element.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(update);
    }

    // Use IntersectionObserver to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                update();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(element.closest('.countdown-card'));
}

updateCountdown();


// ============================
// Music Toggle - MP3 Song
// ============================
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

// Load the MP3 song
const bgMusic = new Audio('Bairan Banjaare (pagalall.com).mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;

musicToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    musicToggle.classList.toggle('playing', isPlaying);
    musicToggle.textContent = isPlaying ? '🎶' : '🎵';

    if (isPlaying) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
});


// ============================
// Touch Swipe for Carousel
// ============================
let touchStartX = 0;
let touchEndX = 0;
const carouselEl = document.getElementById('quotesCarousel');

carouselEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carouselEl.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            goToQuote((currentQuote + 1) % quotes.length);
        } else {
            goToQuote((currentQuote - 1 + quotes.length) % quotes.length);
        }
    }
});


// ============================
// Smooth Reveal & 3D Interactive Init
// ============================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    init3DTiltEffect();
});

// ============================
// 3D Card Tilt & Parallax Effect
// ============================
function init3DTiltEffect() {
    const selector = '.friendship-card, .sweet-card, .wish-card, .special-card, .countdown-card, .photo-item, .quote-card';
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        if (card.dataset.tiltInitialized) return;
        card.dataset.tiltInitialized = 'true';

        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
        card.addEventListener('touchmove', handleTiltTouch, { passive: true });
        card.addEventListener('touchend', resetTilt);
    });

    function handleTilt(e) {
        const card = this;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }

    function handleTiltTouch(e) {
        if (!e.touches[0]) return;
        const touch = e.touches[0];
        const card = this;
        const rect = card.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }

    function resetTilt() {
        this.style.transform = '';
    }
}

// 3D Parallax Scroll effect for floating background items
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const floatingItems = document.querySelectorAll('.floating-item');

    floatingItems.forEach((item, index) => {
        const speed = (index % 3 + 1) * 0.12;
        item.style.transform = `translate3d(0, ${scrolled * speed}px, 0) rotate(${scrolled * 0.04}deg)`;
    });
}, { passive: true });
