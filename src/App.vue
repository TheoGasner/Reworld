<template>
  <div id="app-container">
    <!-- Cursor personnalisé désactivé - curseur natif utilisé -->
    <!-- <CustomCursor v-if="!isTouchDevice" /> -->
    
    <!-- Écran de chargement initial -->
    <LoadingScreen 
      v-if="isLoading" 
      :progress="loadingProgress"
      @complete="onLoadingComplete"
    />
    
    <!-- Transition warp -->
    <WarpTransition 
      ref="warpTransition"
      :active="isWarping"
      @navigate="onWarpNavigate"
      @complete="onWarpComplete"
    />
    
    <!-- Contenu principal avec animation d'entrée -->
    <Transition name="content-reveal">
      <div v-if="showContent" class="main-content">
        <router-view v-slot="{ Component, route }">
          <Transition :name="transitionName" mode="out-in">
            <component 
              :is="Component" 
              :key="route.path"
              @navigate-capsule="handleCapsuleNavigation"
            />
          </Transition>
        </router-view>
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomCursor from './components/CustomCursor.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import WarpTransition from './components/WarpTransition.vue'

export default {
  name: 'App',
  components: {
    CustomCursor,
    LoadingScreen,
    WarpTransition
  },
  setup() {
    const router = useRouter()
    const isLoading = ref(true)
    const loadingProgress = ref(0)
    const showContent = ref(false)
    const isWarping = ref(false)
    const warpTransition = ref(null)
    const pendingRoute = ref(null)
    const transitionName = ref('fade')
    
    const isTouchDevice = computed(() => {
      if (typeof window !== 'undefined') {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0
      }
      return false
    })

    // Simulation du chargement saccadé réaliste
    onMounted(() => {
      // Étapes de chargement simplifiées et rapides
      const loadingSteps = [
        { target: 30, duration: 500, pause: 200 },   // Connexion
        { target: 60, duration: 550, pause: 150 },   // Ressources
        { target: 85, duration: 500, pause: 200 },   // Capsules
        { target: 100, duration: 400, pause: 0 }     // Finalisation
      ]
      
      let currentStep = 0
      
      const runStep = () => {
        if (currentStep >= loadingSteps.length) return
        
        const step = loadingSteps[currentStep]
        const startValue = loadingProgress.value
        const increment = step.target - startValue
        const intervalTime = 25
        const steps = step.duration / intervalTime
        const stepIncrement = increment / steps
        let currentIteration = 0
        
        const stepInterval = setInterval(() => {
          const randomFactor = 0.8 + Math.random() * 0.4
          loadingProgress.value += stepIncrement * randomFactor
          currentIteration++
          
          if (loadingProgress.value >= step.target || currentIteration >= steps) {
            loadingProgress.value = step.target
            clearInterval(stepInterval)
            
            if (step.pause > 0) {
              setTimeout(() => {
                currentStep++
                runStep()
              }, step.pause)
            } else {
              currentStep++
              runStep()
            }
          }
        }, intervalTime)
      }
      
      setTimeout(runStep, 100)
    })

    const onLoadingComplete = () => {
      isLoading.value = false
      // Petit délai pour l'animation de sortie du loader
      setTimeout(() => {
        showContent.value = true
      }, 100)
    }

    const handleCapsuleNavigation = (capsulePath) => {
      isWarping.value = true
      pendingRoute.value = capsulePath
      transitionName.value = 'warp'
    }

    const onWarpNavigate = () => {
      // Navigation pendant la transition, écran encore noir
      if (pendingRoute.value) {
        router.push(pendingRoute.value)
        pendingRoute.value = null
      }
    }

    const onWarpComplete = () => {
      isWarping.value = false
      transitionName.value = 'fade'
    }

    return {
      isLoading,
      loadingProgress,
      showContent,
      isWarping,
      warpTransition,
      isTouchDevice,
      transitionName,
      onLoadingComplete,
      handleCapsuleNavigation,
      onWarpNavigate,
      onWarpComplete
    }
  }
}
</script>

<style>
#app-container {
  min-height: 100vh;
  background: #0A0A0A;
}

.main-content {
  min-height: 100vh;
}

/* Animation d'entrée du contenu (slide up comme Google) */
.content-reveal-enter-active {
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-reveal-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.content-reveal-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Transition fade standard */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transition warp */
.warp-leave-active {
  transition: opacity 0.3s ease;
}

.warp-leave-to {
  opacity: 0;
}
</style>
