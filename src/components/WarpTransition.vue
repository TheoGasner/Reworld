<template>
  <Teleport to="body">
    <div class="warp-transition" :class="{ active: active, 'fade-out': fadeOut }">
      <canvas ref="canvas"></canvas>
    </div>
  </Teleport>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue'

export default {
  name: 'WarpTransition',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['complete', 'navigate'],
  setup(props, { emit }) {
    const canvas = ref(null)
    const fadeOut = ref(false)
    
    let ctx = null
    let animationId = null
    let stars = []
    let warpSpeed = 0
    
    class Star {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.reset()
      }
      
      reset() {
        this.x = Math.random() * this.canvasWidth - this.canvasWidth / 2
        this.y = Math.random() * this.canvasHeight - this.canvasHeight / 2
        this.z = Math.random() * 1500 + 500
        // Couleurs subtiles : majoritairement blanc
        const colorChoice = Math.random()
        if (colorChoice > 0.9) {
          this.color = '#00C9A7'
        } else if (colorChoice > 0.8) {
          this.color = '#00A8E8'
        } else {
          this.color = '#FFFFFF'
        }
      }
      
      update(speed) {
        this.z -= speed
        if (this.z <= 0) {
          this.reset()
          this.z = 1500
        }
      }
      
      draw(ctx, centerX, centerY, speed) {
        const scale = 400 / this.z
        const x2d = this.x * scale + centerX
        const y2d = this.y * scale + centerY
        const alpha = Math.min(1, (1500 - this.z) / 700)
        
        // Traînée de lumière
        if (speed > 15) {
          const trailLength = Math.min(speed * 0.8, 60)
          const prevZ = this.z + trailLength
          const prevScale = 400 / prevZ
          const prevX = this.x * prevScale + centerX
          const prevY = this.y * prevScale + centerY
          
          const gradient = ctx.createLinearGradient(prevX, prevY, x2d, y2d)
          gradient.addColorStop(0, 'transparent')
          gradient.addColorStop(1, this.color)
          
          ctx.beginPath()
          ctx.moveTo(prevX, prevY)
          ctx.lineTo(x2d, y2d)
          ctx.strokeStyle = gradient
          ctx.lineWidth = scale * 1.5
          ctx.globalAlpha = alpha * 0.7
          ctx.stroke()
        }
        
        // Point lumineux
        if (speed > 10) {
          ctx.beginPath()
          ctx.arc(x2d, y2d, scale * 1.2, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.globalAlpha = alpha
          ctx.fill()
        }
      }
    }
    
    const resizeCanvas = () => {
      if (canvas.value) {
        canvas.value.width = window.innerWidth
        canvas.value.height = window.innerHeight
      }
    }
    
    const initStars = () => {
      stars = []
      if (canvas.value) {
        for (let i = 0; i < 150; i++) {
          stars.push(new Star(canvas.value.width, canvas.value.height))
        }
      }
    }
    
    const animate = () => {
      if (!ctx || !canvas.value) return
      
      ctx.fillStyle = `rgba(10, 10, 10, ${0.12 + (warpSpeed / 500)})`
      ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
      
      const centerX = canvas.value.width / 2
      const centerY = canvas.value.height / 2
      
      stars.forEach(star => {
        star.update(warpSpeed)
        star.draw(ctx, centerX, centerY, warpSpeed)
      })
      
      ctx.globalAlpha = 1
      
      animationId = requestAnimationFrame(animate)
    }
    
    const startWarp = () => {
      if (!canvas.value) return
      
      ctx = canvas.value.getContext('2d')
      resizeCanvas()
      initStars()
      warpSpeed = 2
      fadeOut.value = false
      
      // Accélération progressive
      const accelerate = setInterval(() => {
        warpSpeed = Math.min(warpSpeed + 1.5, 50)
      }, 50)
      
      animate()
      
      // Phase 1: Accélération (2.5s)
      setTimeout(() => {
        clearInterval(accelerate)
      }, 2500)
      
      // Phase 2: Navigation pendant que l'écran est encore noir (à 2.8s)
      setTimeout(() => {
        emit('navigate')
      }, 2800)
      
      // Phase 3: Début du fondu de sortie (à 3.2s)
      setTimeout(() => {
        fadeOut.value = true
      }, 3200)
      
      // Phase 4: Complete (à 4s)
      setTimeout(() => {
        stopWarp()
        emit('complete')
      }, 4000)
    }
    
    const stopWarp = () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
      fadeOut.value = false
      warpSpeed = 0
    }
    
    watch(() => props.active, (newVal) => {
      if (newVal) {
        startWarp()
      } else {
        stopWarp()
      }
    })
    
    onMounted(() => {
      window.addEventListener('resize', resizeCanvas)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', resizeCanvas)
      stopWarp()
    })
    
    return {
      canvas,
      fadeOut
    }
  }
}
</script>

<style scoped>
.warp-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  background: #0A0A0A;
  transition: opacity 0.4s ease;
}

.warp-transition.active {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.warp-transition.fade-out {
  opacity: 0;
  transition: opacity 0.8s ease-out;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
