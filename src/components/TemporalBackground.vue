<template>
  <div class="temporal-background">
    <!-- Étoiles scintillantes uniquement -->
    <div class="stars-container">
      <div class="star" v-for="n in 100" :key="'star-'+n" :style="getStarStyle(n)"></div>
    </div>
    
    <!-- Légère lueur ambiante subtile -->
    <div class="ambient-glow"></div>
  </div>
</template>

<script setup>
// Styles pour les étoiles
const getStarStyle = (n) => {
  const x = Math.random() * 100
  const y = Math.random() * 100
  const size = 1 + Math.random() * 2
  const duration = 2 + Math.random() * 4
  const delay = Math.random() * 3
  const opacity = 0.3 + Math.random() * 0.7
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    '--duration': `${duration}s`,
    '--delay': `${delay}s`,
    '--opacity': opacity
  }
}
</script>

<style scoped>
.temporal-background {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  background: #0A0A0A;
}

/* Étoiles scintillantes */
.stars-container {
  position: absolute;
  inset: 0;
}

.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.3);
  animation: starTwinkle var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes starTwinkle {
  0%, 100% { opacity: calc(var(--opacity) * 0.2); transform: scale(1); }
  50% { opacity: var(--opacity); transform: scale(1.3); }
}

/* Lueur ambiante très subtile */
.ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at 50% 50%, rgba(0, 102, 255, 0.03) 0%, transparent 60%);
  pointer-events: none;
}
</style>
