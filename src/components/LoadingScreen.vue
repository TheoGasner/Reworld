<template>
  <div class="loading-screen" :class="{ 'fade-out': isFadingOut }">
    <!-- Contenu du loader -->
    <div class="loading-content" :class="{ 'slide-up': isComplete }">
      <!-- Logo REWORLD PNG -->
      <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="loading-logo">
      
      <!-- Barre de progression -->
      <div class="loading-bar-container">
        <div class="loading-bar" :style="{ width: displayProgress + '%' }"></div>
      </div>
      
      <!-- Texte de phase -->
      <p class="loading-text">
        <span class="loading-phase">{{ currentPhase }}</span>
        <span class="loading-percent">{{ Math.floor(displayProgress) }}%</span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

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
    const displayProgress = ref(0)
    
    // Phases de chargement
    const phases = [
      { threshold: 0, text: 'Connexion...' },
      { threshold: 30, text: 'Chargement des ressources...' },
      { threshold: 60, text: 'Initialisation des capsules...' },
      { threshold: 85, text: 'Finalisation...' }
    ]
    
    const currentPhase = computed(() => {
      for (let i = phases.length - 1; i >= 0; i--) {
        if (displayProgress.value >= phases[i].threshold) {
          return phases[i].text
        }
      }
      return phases[0].text
    })
    
    // Animation fluide du pourcentage affiché
    watch(() => props.progress, (newVal) => {
      // Interpolation vers la nouvelle valeur
      const animate = () => {
        if (displayProgress.value < newVal) {
          displayProgress.value = Math.min(displayProgress.value + 0.8, newVal)
          if (displayProgress.value < newVal) {
            requestAnimationFrame(animate)
          }
        }
      }
      animate()
      
      if (newVal >= 100 && !isComplete.value) {
        isComplete.value = true
        displayProgress.value = 100
        
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
      displayProgress,
      currentPhase
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
  background: #000000;
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
  filter: brightness(0) invert(1);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.03); opacity: 0.9; }
}

.loading-bar-container {
  width: 300px;
  max-width: 80vw;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto 1.5rem;
}

.loading-bar {
  height: 100%;
  background: #FFFFFF;
  border-radius: 2px;
  transition: width 0.1s ease;
}

.loading-text {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.loading-phase {
  color: rgba(255, 255, 255, 0.8);
  transition: opacity 0.3s ease;
}

.loading-percent {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.85rem;
  opacity: 0.5;
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
