<template>
  <div class="loading-screen" :class="{ 'fade-out': isFadingOut }">
    <!-- Globe en arrière-plan qui apparaît progressivement -->
    <div class="loading-globe-bg" :style="{ opacity: globeOpacity }">
      <img src="/assets/images/globe-hero.svg" alt="" class="loading-globe-img">
    </div>
    
    <!-- Contenu du loader -->
    <div class="loading-content" :class="{ 'slide-up': isComplete }">
      <!-- Logo REWORLD PNG -->
      <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="loading-logo">
      
      <!-- Barre de progression -->
      <div class="loading-bar-container">
        <div class="loading-bar" :style="{ width: progress + '%' }"></div>
      </div>
      
      <!-- Texte -->
      <p class="loading-text">
        Initialisation capsules...<span class="loading-percent">{{ Math.floor(progress) }}</span>%
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
  name: 'LoadingScreen',
  props: {
    progress: {
      type: Number,
      default: 0
    }
  },
  emits: ['complete'],
  setup(props, { emit }) {
    const isComplete = ref(false)
    const isFadingOut = ref(false)
    
    // L'opacité du globe augmente avec le chargement
    const globeOpacity = computed(() => {
      return Math.min(props.progress / 100, 0.4)
    })
    
    watch(() => props.progress, (newVal) => {
      if (newVal >= 100 && !isComplete.value) {
        isComplete.value = true
        
        // Animation de slide up du contenu
        setTimeout(() => {
          isFadingOut.value = true
          
          // Émettre complete après l'animation
          setTimeout(() => {
            emit('complete')
          }, 800)
        }, 500)
      }
    })
    
    return {
      isComplete,
      isFadingOut,
      globeOpacity
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0A0A0A;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.8s ease, visibility 0.8s;
  overflow: hidden;
}

.loading-screen.fade-out {
  opacity: 0;
  visibility: hidden;
}

/* Globe en arrière-plan */
.loading-globe-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150vmax;
  height: 150vmax;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.loading-globe-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: slowRotate 60s linear infinite;
  filter: blur(2px);
}

@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Contenu du loader */
.loading-content {
  position: relative;
  z-index: 1;
  text-align: center;
  transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
}

.loading-content.slide-up {
  transform: translateY(-100vh);
  opacity: 0;
}

.loading-logo {
  width: 12rem;
  max-width: 80vw;
  height: auto;
  margin-bottom: 3rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.03); opacity: 0.9; }
}

.loading-bar-container {
  width: 300px;
  max-width: 80vw;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto 1.5rem;
}

.loading-bar {
  height: 100%;
  background: linear-gradient(90deg, #00C9A7, #00A8E8);
  border-radius: 2px;
  transition: width 0.1s ease;
}

.loading-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.1em;
}

.loading-percent {
  color: #00C9A7;
  font-weight: 600;
}

@media (max-width: 480px) {
  .loading-logo {
    width: 8rem;
  }
  
  .loading-bar-container {
    width: 200px;
  }
}
</style>
