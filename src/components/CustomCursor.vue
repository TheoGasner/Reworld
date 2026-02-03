<template>
  <Teleport to="body">
    <div class="cursor-wrapper" v-show="isVisible">
      <div 
        class="custom-cursor" 
        :class="{ hover: isHovering }"
        :style="cursorStyle"
      ></div>
      <div 
        class="cursor-trail"
        :style="trailStyle"
      ></div>
    </div>
  </Teleport>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CustomCursor',
  setup() {
    const isVisible = ref(true)
    const isHovering = ref(false)
    
    const mouse = reactive({ x: 0, y: 0 })
    const cursor = reactive({ x: 0, y: 0 })
    const trail = reactive({ x: 0, y: 0 })
    
    let animationFrame = null
    
    const cursorStyle = computed(() => ({
      left: `${cursor.x}px`,
      top: `${cursor.y}px`
    }))
    
    const trailStyle = computed(() => ({
      left: `${trail.x}px`,
      top: `${trail.y}px`
    }))
    
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    
    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.matches('a, button, .capsule-card, .action-card, .share-btn, [data-cursor-hover]')) {
        isHovering.value = true
      }
    }
    
    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.matches('a, button, .capsule-card, .action-card, .share-btn, [data-cursor-hover]')) {
        isHovering.value = false
      }
    }
    
    const animate = () => {
      // Cursor avec légère inertie
      cursor.x += (mouse.x - cursor.x) * 0.15
      cursor.y += (mouse.y - cursor.y) * 0.15
      
      // Trail avec plus d'inertie
      trail.x += (mouse.x - trail.x) * 0.08
      trail.y += (mouse.y - trail.y) * 0.08
      
      animationFrame = requestAnimationFrame(animate)
    }
    
    onMounted(() => {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseover', handleMouseEnter)
      document.addEventListener('mouseout', handleMouseLeave)
      
      animate()
    })
    
    onUnmounted(() => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    })
    
    return {
      isVisible,
      isHovering,
      cursorStyle,
      trailStyle
    }
  }
}
</script>

<style scoped>
.cursor-wrapper {
  pointer-events: none;
  z-index: 10000;
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border: 2px solid #00C9A7;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, border-color 0.2s, background 0.2s;
  mix-blend-mode: difference;
}

.custom-cursor.hover {
  width: 50px;
  height: 50px;
  border-color: #00A8E8;
  background: rgba(0, 201, 167, 0.1);
}

.cursor-trail {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #00C9A7;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
