<template>
  <section class="hero-section">
    <!-- Loading Screen Original REWORLD -->
    <div class="loading-screen" :class="{ 'fade-out': loadingFadeOut }">
      <!-- Globe en arrière-plan qui apparaît progressivement -->
      <div class="loading-globe-bg" :style="{ opacity: loadingGlobeOpacity }">
        <img src="/assets/images/globe-hero.svg" alt="" class="loading-globe-img">
      </div>
      
      <!-- Contenu du loader -->
      <div class="loading-content" :class="{ 'slide-up': loadingSlideUp }">
        <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="loading-logo">
        
        <span class="loading-percent">{{ Math.floor(loadingProgress) }}%</span>
        
        <div class="loading-bar-container">
          <div class="loading-bar" :style="{ width: loadingProgress + '%' }"></div>
        </div>
        
        <p class="loading-text">{{ loadingMessage }}</p>
      </div>
    </div>

    <!-- Header fixe -->
    <header class="hero-header" :class="{ visible: headerVisible }">
      <div class="header-left">
        <router-link to="/" class="logo-link">
          <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="header-logo" />
        </router-link>
      </div>
      
      <!-- Menu hamburger mobile -->
      <button class="hamburger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav class="header-nav" :class="{ open: menuOpen }">
        <a href="#capsules" class="nav-link" @click="closeMenu">Capsules</a>
        <a href="#concept" class="nav-link" @click="closeMenu">Concept</a>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
      </nav>
    </header>

    <!-- Background image Terre -->
    <div class="hero-bg" :class="{ visible: earthVisible }">
      <img src="/assets/images/earth-bg.png" alt="" class="bg-earth-image">
      <div class="bg-overlay"></div>
    </div>

    <!-- Contenu Principal - Logo + Phrase d'accroche -->
    <div class="hero-content" :class="{ visible: contentVisible }">
      <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="main-logo">
      
      <h1 class="hero-tagline">Choisissez votre vision du monde de demain</h1>
    </div>

    <!-- Indicateur scroll -->
    <div class="scroll-indicator" :class="{ visible: contentVisible }">
      <span>Découvrir</span>
      <svg viewBox="0 0 24 24" class="scroll-arrow">
        <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// États
const loadingProgress = ref(0)
const loadingSlideUp = ref(false)
const loadingFadeOut = ref(false)
const earthVisible = ref(false)
const headerVisible = ref(false)
const contentVisible = ref(false)
const menuOpen = ref(false)

// Toggle menu hamburger
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// Opacité du globe de chargement (augmente avec le progress)
const loadingGlobeOpacity = computed(() => {
  return Math.min(loadingProgress.value / 100, 0.4)
})

// Messages de chargement
const loadingMessages = [
  'Initialisation capsules...',
  'Connexion aux futurs...',
  'Synchronisation temporelle...',
  'Chargement des visions...'
]
const loadingMessage = ref(loadingMessages[0])

// Scroll vers capsules
const scrollToCapsules = () => {
  const capsulesSection = document.getElementById('capsules')
  if (capsulesSection) {
    capsulesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const loadingDuration = 3500
  const loadingInterval = 30
  let progress = 0
  
  const loadingTimer = setInterval(() => {
    progress += (100 / (loadingDuration / loadingInterval))
    loadingProgress.value = Math.min(progress, 100)
    
    if (progress < 25) loadingMessage.value = loadingMessages[0]
    else if (progress < 50) loadingMessage.value = loadingMessages[1]
    else if (progress < 75) loadingMessage.value = loadingMessages[2]
    else loadingMessage.value = loadingMessages[3]
    
    if (progress >= 100) {
      clearInterval(loadingTimer)
      
      // Animation slide-up du contenu puis fade-out
      setTimeout(() => {
        loadingSlideUp.value = true
        
        setTimeout(() => {
          loadingFadeOut.value = true
        }, 500)
      }, 300)
    }
  }, loadingInterval)

  // Timeline animations (après le loading)
  // 1. La Terre arrive d'en bas
  setTimeout(() => {
    earthVisible.value = true
  }, 4000)

  // 2. Header apparaît après que la Terre soit en place
  setTimeout(() => {
    headerVisible.value = true
  }, 5500)

  // 3. Logo et sous-titre apparaissent ensemble
  setTimeout(() => {
    contentVisible.value = true
  }, 5800)
})
</script>

<style scoped>
/* ==========================================
   VARIABLES
   ========================================== */
.hero-section {
  --black: #000000;
  --blue-main: #4a7ac6;
  --blue-glow: rgba(74, 122, 198, 0.4);
  --cyan-accent: #06b6d4;
  --white: #FFFFFF;
  --white-80: rgba(255, 255, 255, 0.8);
  --white-60: rgba(255, 255, 255, 0.6);
  --white-40: rgba(255, 255, 255, 0.4);
}

/* ==========================================
   HERO SECTION
   ========================================== */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--black);
}

/* ==========================================
   LOADING SCREEN
   ========================================== */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.8s ease, visibility 0.8s;
}

.loading-screen.fade-out {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.loading-globe-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.loading-globe-img {
  width: min(80vw, 80vh);
  height: min(80vw, 80vh);
  object-fit: contain;
  animation: slowRotate 60s linear infinite;
  filter: brightness(0.6) saturate(1.2);
  transition: opacity 0.5s ease;
}

@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-content {
  position: relative;
  z-index: 1;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.6s ease;
}

.loading-content.slide-up {
  transform: translateY(-100vh);
  opacity: 0;
}

.loading-logo {
  width: 12rem;
  max-width: 60vw;
  height: auto;
  margin-bottom: 2rem;
  animation: logoPulse 2s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.03); opacity: 0.85; }
}

.loading-percent {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cyan-accent);
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
}

.loading-bar-container {
  width: 280px;
  max-width: 70vw;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto 1.5rem;
}

.loading-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--blue-main), var(--cyan-accent));
  border-radius: 2px;
  transition: width 0.1s linear;
}

.loading-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: var(--white-60);
  letter-spacing: 0.05em;
  min-height: 1.5rem;
}

/* ==========================================
   HEADER
   ========================================== */
.hero-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  opacity: 0;
  transform: translateY(-2rem);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.hero-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.header-logo {
  width: 8rem;
  height: auto;
  transition: filter 0.3s ease, transform 0.3s ease;
}

.logo-link:hover .header-logo {
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
  transform: scale(1.02);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--white-80);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--blue-main);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--blue-main);
}

.nav-link:hover::after {
  width: 100%;
}

/* Hamburger menu */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #FFFFFF;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ==========================================
   BACKGROUND - IMAGE TERRE
   ========================================== */
.hero-bg {
  position: absolute;
  inset: 0;
  background: #000000;
  opacity: 0;
  transform: translateY(30%);
  transition: opacity 1.5s ease, transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-bg.visible {
  opacity: 1;
  transform: translateY(0);
}

.bg-earth-image {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 1200px;
  height: auto;
  object-fit: cover;
  object-position: center top;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.9) 10%,
    rgba(0, 0, 0, 0.6) 25%,
    rgba(0, 0, 0, 0.3) 45%,
    rgba(0, 0, 0, 0) 70%
  );
  pointer-events: none;
}

/* ==========================================
   HERO CONTENT - LOGO CENTRAL
   ========================================== */
.hero-content {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  z-index: 10;
  text-align: center;
  max-width: 1000px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  opacity: 0;
  transition: opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-content.visible {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

.main-logo {
  width: clamp(400px, 55vw, 700px);
  height: auto;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 0 60px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 30px rgba(74, 122, 198, 0.5));
}

.hero-tagline {
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  line-height: 1.6;
  color: var(--white);
  max-width: 700px;
  margin: 0 auto;
  margin-top: -8rem;
  text-align: center;
  position: relative;
  z-index: 20;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5);
}

/* ==========================================
   CTA BUTTON
   ========================================== */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--blue-main) 0%, #5a8ad6 100%);
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(74, 122, 198, 0.3);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(74, 122, 198, 0.5);
}

.cta-btn svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* ==========================================
   SCROLL INDICATOR
   ========================================== */
.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--white-40);
  z-index: 10;
  cursor: pointer;
  
  opacity: 0;
  transition: opacity 0.8s ease 0.3s;
}

.scroll-indicator.visible {
  opacity: 1;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

.scroll-indicator span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
}

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 768px) {
  .hero-header {
    padding: 0.5rem 1.5rem;
  }
  
  .header-logo {
    width: 6rem;
  }
  
  /* Afficher le hamburger */
  .hamburger {
    display: flex;
  }
  
  /* Menu mobile */
  .header-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .header-nav.open {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.25rem;
  }
  
  .hero-content {
    padding: 0 1.5rem;
  }
  
  .main-logo {
    width: clamp(280px, 80vw, 450px);
  }
  
  .hero-tagline {
    font-size: clamp(1rem, 4vw, 1.25rem);
    margin-top: -4rem;
  }
  
  .bg-earth-image {
    min-width: 800px;
  }
  
  .loading-logo {
    width: 8rem;
  }
}

@media (max-width: 480px) {
  .nav-link {
    font-size: 1.1rem;
  }
  
  .cta-btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
  }
  
  .scroll-indicator {
    bottom: 2rem;
  }
  
  .main-logo {
    width: clamp(220px, 85vw, 350px);
  }
  
  .hero-tagline {
    margin-top: -2rem;
  }
}
</style>
