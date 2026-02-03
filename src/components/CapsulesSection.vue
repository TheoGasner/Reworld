<template>
  <section id="capsules" class="capsules-section">
    <h2 class="capsules-title">
      <span class="title-glow">Les Capsules Temporelles</span>
    </h2>
    <p class="capsules-subtitle">
      Quatre visions d'un futur que nous pouvons construire ensemble.
    </p>

    <div class="capsules-grid">
      <article
        v-for="capsule in capsules"
        :key="capsule.id"
        class="capsule-card"
        :class="[`capsule-${capsule.theme}`, { 'is-hovered': hoveredId === capsule.id }]"
        :style="getCardStyle(capsule.id)"
        @mouseenter="handleMouseEnter(capsule.id, $event)"
        @mousemove="handleMouseMove(capsule.id, $event)"
        @mouseleave="handleMouseLeave"
        @click="navigateToCapsule(capsule.route)"
        :ref="el => cardRefs[capsule.id] = el"
      >
        <!-- Effet de lumière qui suit la souris -->
        <div class="mouse-light" :style="getMouseLightStyle(capsule.id)"></div>
        
        <!-- Particules interactives -->
        <div class="interactive-particles">
          <div 
            class="i-particle" 
            v-for="n in 8" 
            :key="n" 
            :style="getInteractiveParticleStyle(capsule.id, n)"
          ></div>
        </div>
        
        <!-- Aura de fond -->
        <div class="capsule-aura"></div>
        
        <!-- Effet spécifique ECO -->
        <div v-if="capsule.theme === 'eco'" class="effect-eco">
          <div class="eco-particle" v-for="n in 10" :key="n" :style="getEcoParticleStyle(n)"></div>
          <svg class="leaf leaf-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
          <svg class="leaf leaf-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        </div>

        <!-- Effet spécifique DEMO -->
        <div v-if="capsule.theme === 'demo'" class="effect-demo">
          <div class="demo-particle" v-for="n in 12" :key="n" :style="getDemoParticleStyle(n)"></div>
          <div class="vote-node node-1"><span>✓</span></div>
          <div class="vote-node node-2"><span>✓</span></div>
          <div class="vote-node node-3"><span>✓</span></div>
          <svg class="connection-web" viewBox="0 0 300 300">
            <line class="web-line" x1="60" y1="80" x2="240" y2="60" />
            <line class="web-line" x1="240" y1="60" x2="250" y2="180" />
            <line class="web-line" x1="250" y1="180" x2="50" y2="200" />
            <line class="web-line" x1="50" y1="200" x2="60" y2="80" />
          </svg>
        </div>

        <!-- Effet spécifique TECH -->
        <div v-if="capsule.theme === 'tech'" class="effect-tech">
          <div class="data-stream" v-for="n in 6" :key="n" :style="getDataStreamStyle(n)"></div>
          <div class="tech-ring ring-1"></div>
          <div class="tech-ring ring-2"></div>
          <div class="pulse-core"></div>
        </div>

        <!-- Effet spécifique NATURE -->
        <div v-if="capsule.theme === 'nature'" class="effect-nature">
          <div class="nature-particle" v-for="n in 15" :key="n" :style="getNatureParticleStyle(n)"></div>
          <div class="flower flower-1">
            <div class="petal" v-for="p in 6" :key="p"></div>
            <div class="center"></div>
          </div>
          <svg class="butterfly butterfly-1" viewBox="0 0 50 50">
            <path class="wing wing-left" d="M25,25 Q10,10 5,25 Q10,40 25,25" fill="currentColor"/>
            <path class="wing wing-right" d="M25,25 Q40,10 45,25 Q40,40 25,25" fill="currentColor"/>
            <ellipse cx="25" cy="25" rx="2" ry="8" fill="currentColor" opacity="0.8"/>
          </svg>
        </div>

        <!-- Capsule visuel -->
        <div class="capsule-visual">
          <div class="capsule-glow"></div>
          <div class="capsule-ring"></div>
          <img :src="capsule.image" :alt="capsule.title" class="capsule-img" />
          <div class="capsule-shine"></div>
        </div>

        <!-- Contenu texte -->
        <div class="capsule-content">
          <span class="capsule-index">{{ capsule.index }}</span>
          <h3 class="capsule-name">{{ capsule.title }}</h3>
          <p class="capsule-description">{{ capsule.description }}</p>
          <button class="capsule-cta">
            <span>Explorer ce futur</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const emit = defineEmits(['navigate-capsule'])
const hoveredId = ref(null)
const cardRefs = reactive({})

// Position de la souris par carte
const mousePositions = reactive({})

const capsules = [
  {
    id: 1,
    index: '01',
    theme: 'eco',
    title: 'Économie régénératrice',
    description: 'Les marchés locaux deviennent des hubs régénératifs où chaque échange nourrit la communauté.',
    image: '/assets/images/capsule-1.svg',
    route: '/capsule-eco'
  },
  {
    id: 2,
    index: '02',
    theme: 'demo',
    title: 'Démocratie participative',
    description: 'Les quartiers votent leurs priorités grâce à la technologie, redonnant le pouvoir aux citoyens.',
    image: '/assets/images/capsule-2.svg',
    route: '/capsule-demo'
  },
  {
    id: 3,
    index: '03',
    theme: 'tech',
    title: 'Tech au service du lien',
    description: 'Les applications favorisent les rencontres physiques et tissent des liens authentiques.',
    image: '/assets/images/capsule-3.svg',
    route: '/capsule-tech'
  },
  {
    id: 4,
    index: '04',
    theme: 'nature',
    title: 'Nature reconnectée',
    description: 'La nature s\'intègre partout en ville, créant des espaces de vie harmonieux et apaisants.',
    image: '/assets/images/capsule-4.svg',
    route: '/capsule-nature'
  }
]

const handleMouseEnter = (id, event) => {
  hoveredId.value = id
  updateMousePosition(id, event)
}

const handleMouseMove = (id, event) => {
  updateMousePosition(id, event)
}

const updateMousePosition = (id, event) => {
  const card = cardRefs[id]
  if (!card) return
  
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  mousePositions[id] = {
    x,
    y,
    percentX: (x / rect.width) * 100,
    percentY: (y / rect.height) * 100,
    rotateX: ((y - centerY) / centerY) * -8,
    rotateY: ((x - centerX) / centerX) * 8
  }
}

const handleMouseLeave = () => {
  hoveredId.value = null
}

// Style 3D de la carte basé sur la position de la souris
const getCardStyle = (id) => {
  const pos = mousePositions[id]
  if (!pos || hoveredId.value !== id) {
    return {
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }
  return {
    transform: `perspective(1000px) rotateX(${pos.rotateX}deg) rotateY(${pos.rotateY}deg) scale(1.02)`
  }
}

// Lumière qui suit la souris
const getMouseLightStyle = (id) => {
  const pos = mousePositions[id]
  if (!pos || hoveredId.value !== id) {
    return { opacity: 0 }
  }
  return {
    opacity: 1,
    background: `radial-gradient(circle at ${pos.percentX}% ${pos.percentY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
  }
}

// Particules interactives qui réagissent à la souris
const getInteractiveParticleStyle = (cardId, n) => {
  const angle = (n / 8) * 360
  const pos = mousePositions[cardId]
  const isHovered = hoveredId.value === cardId
  
  if (!pos || !isHovered) {
    return {
      opacity: 0,
      transform: `rotate(${angle}deg) translateY(0)`
    }
  }
  
  const distance = 60 + (n * 10)
  const delay = n * 0.05
  
  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}px`,
    '--delay': `${delay}s`,
    opacity: 1
  }
}

const getEcoParticleStyle = (n) => {
  const angle = (n / 10) * 360
  const delay = n * 0.08
  const size = 3 + Math.random() * 4
  return {
    '--angle': `${angle}deg`,
    '--delay': `${delay}s`,
    '--size': `${size}px`,
    '--distance': `${70 + Math.random() * 50}px`
  }
}

const getDemoParticleStyle = (n) => {
  const angle = (n / 12) * 360
  const delay = n * 0.06
  return {
    '--angle': `${angle}deg`,
    '--delay': `${delay}s`,
    '--distance': `${60 + Math.random() * 40}px`
  }
}

const getDataStreamStyle = (n) => {
  const angle = (n / 6) * 360
  const delay = n * 0.12
  const length = 30 + Math.random() * 35
  return {
    '--angle': `${angle}deg`,
    '--delay': `${delay}s`,
    '--length': `${length}px`
  }
}

const getNatureParticleStyle = (n) => {
  const angle = (n / 15) * 360
  const delay = n * 0.05
  const size = 2 + Math.random() * 3
  return {
    '--angle': `${angle}deg`,
    '--delay': `${delay}s`,
    '--size': `${size}px`,
    '--distance': `${50 + Math.random() * 60}px`
  }
}

const navigateToCapsule = (route) => {
  emit('navigate-capsule', route)
}
</script>

<style scoped>
.capsules-section {
  position: relative;
  padding: 8rem 2rem 10rem;
  background: transparent;
  overflow: visible;
  min-height: 100vh;
  z-index: 2;
}

/* ==========================================
   TITRES
   ========================================== */

.capsules-title {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.25rem;
  color: #fff;
  z-index: 2;
}

.title-glow {
  position: relative;
  background: linear-gradient(90deg, #fff 0%, #00C9A7 50%, #00A8E8 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleShimmer 8s linear infinite;
}

@keyframes titleShimmer {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

.capsules-subtitle {
  position: relative;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  max-width: 550px;
  margin: 0 auto 5rem;
  z-index: 2;
}

.capsules-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 2;
}

/* ==========================================
   CAPSULE CARD (TAILLE RÉDUITE)
   ========================================== */

.capsule-card {
  position: relative;
  cursor: pointer;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 2rem;
  transition: transform 0.15s ease-out, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  overflow: visible;
  transform-style: preserve-3d;
}

.capsule-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.capsule-eco:hover { box-shadow: 0 25px 80px -20px rgba(0, 201, 167, 0.3); }
.capsule-demo:hover { box-shadow: 0 25px 80px -20px rgba(0, 102, 255, 0.3); }
.capsule-tech:hover { box-shadow: 0 25px 80px -20px rgba(0, 168, 232, 0.3); }
.capsule-nature:hover { box-shadow: 0 25px 80px -20px rgba(34, 197, 94, 0.3); }

/* ==========================================
   EFFET DE LUMIÈRE SOURIS
   ========================================== */

.mouse-light {
  position: absolute;
  inset: 0;
  border-radius: 32px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

/* ==========================================
   PARTICULES INTERACTIVES
   ========================================== */

.interactive-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 15;
}

.i-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  opacity: 0;
  transform: rotate(var(--angle)) translateY(0);
}

.capsule-eco .i-particle { background: #00C9A7; box-shadow: 0 0 12px #00C9A7; }
.capsule-demo .i-particle { background: #0066FF; box-shadow: 0 0 12px #0066FF; }
.capsule-tech .i-particle { background: #00A8E8; box-shadow: 0 0 12px #00A8E8; }
.capsule-nature .i-particle { background: #22c55e; box-shadow: 0 0 12px #22c55e; }

.capsule-card.is-hovered .i-particle {
  animation: interactiveOrbit 2s var(--delay) ease-in-out infinite;
}

@keyframes interactiveOrbit {
  0% { 
    opacity: 0; 
    transform: rotate(var(--angle)) translateY(0) scale(0); 
  }
  20% { 
    opacity: 1; 
    transform: rotate(var(--angle)) translateY(calc(var(--distance) * -0.5)) scale(1); 
  }
  50% { 
    transform: rotate(calc(var(--angle) + 30deg)) translateY(calc(var(--distance) * -1)) scale(1.2); 
  }
  80% { 
    opacity: 1; 
    transform: rotate(calc(var(--angle) + 60deg)) translateY(calc(var(--distance) * -0.5)) scale(1); 
  }
  100% { 
    opacity: 0; 
    transform: rotate(calc(var(--angle) + 90deg)) translateY(0) scale(0); 
  }
}

/* ==========================================
   AURA DE FOND
   ========================================== */

.capsule-aura {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130%;
  height: 130%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 0;
  filter: blur(80px);
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 0;
}

.capsule-card:hover .capsule-aura {
  opacity: 1;
}

.capsule-eco .capsule-aura { background: radial-gradient(circle, rgba(0, 201, 167, 0.2) 0%, transparent 70%); }
.capsule-demo .capsule-aura { background: radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%); }
.capsule-tech .capsule-aura { background: radial-gradient(circle, rgba(0, 168, 232, 0.2) 0%, transparent 70%); }
.capsule-nature .capsule-aura { background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%); }

/* ==========================================
   CAPSULE VISUAL (RÉDUIT)
   ========================================== */

.capsule-visual {
  position: relative;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 2;
}

.capsule-img {
  position: relative;
  width: 75%;
  max-height: 240px;
  object-fit: contain;
  z-index: 3;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease;
  filter: drop-shadow(0 25px 40px rgba(0,0,0,0.4));
}

.capsule-card:hover .capsule-img {
  transform: scale(1.15) translateY(-12px) rotateY(5deg);
  filter: drop-shadow(0 40px 60px rgba(0,0,0,0.5));
}

.capsule-glow {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 55%;
  height: 55%;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1;
}

.capsule-card:hover .capsule-glow {
  opacity: 0.9;
  transform: translateX(-50%) scale(1.5);
}

.capsule-eco .capsule-glow { background: #00C9A7; }
.capsule-demo .capsule-glow { background: #0066FF; }
.capsule-tech .capsule-glow { background: #00A8E8; }
.capsule-nature .capsule-glow { background: #22c55e; }

.capsule-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  transform: translate(-50%, -50%) rotateX(75deg);
  border-radius: 50%;
  border: 2px solid transparent;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
}

.capsule-card:hover .capsule-ring {
  opacity: 1;
  width: 200px;
  height: 200px;
  animation: ringRotate 3s linear infinite;
}

.capsule-eco .capsule-ring { border-color: rgba(0, 201, 167, 0.5); box-shadow: 0 0 35px rgba(0, 201, 167, 0.4); }
.capsule-demo .capsule-ring { border-color: rgba(0, 102, 255, 0.5); box-shadow: 0 0 35px rgba(0, 102, 255, 0.4); }
.capsule-tech .capsule-ring { border-color: rgba(0, 168, 232, 0.5); box-shadow: 0 0 35px rgba(0, 168, 232, 0.4); }
.capsule-nature .capsule-ring { border-color: rgba(34, 197, 94, 0.5); box-shadow: 0 0 35px rgba(34, 197, 94, 0.4); }

@keyframes ringRotate {
  0% { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
  100% { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
}

.capsule-shine {
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  height: 25%;
  background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%);
  border-radius: 50%;
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: 4;
  pointer-events: none;
}

.capsule-card:hover .capsule-shine {
  opacity: 1;
  transform: translateY(0);
}

/* ==========================================
   EFFET ECO
   ========================================== */

.effect-eco {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.eco-particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  background: #00C9A7;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 10px #00C9A7;
}

.capsule-eco.is-hovered .eco-particle {
  animation: particleFloat 1.5s var(--delay) ease-out forwards;
}

@keyframes particleFloat {
  0% { opacity: 0; transform: rotate(var(--angle)) translateY(0) scale(0); }
  30% { opacity: 1; transform: rotate(var(--angle)) translateY(calc(var(--distance) * -0.5)) scale(1); }
  100% { opacity: 0; transform: rotate(var(--angle)) translateY(calc(var(--distance) * -1)) scale(0.5); }
}

.effect-eco .leaf {
  position: absolute;
  width: 40px;
  height: 40px;
  color: #00C9A7;
  opacity: 0;
  filter: drop-shadow(0 0 15px rgba(0, 201, 167, 0.6));
}

.effect-eco .leaf-1 { top: 8%; left: 6%; }
.effect-eco .leaf-2 { top: 18%; right: 8%; transform: scaleX(-1); }

.capsule-eco.is-hovered .leaf-1 { animation: leafFloat 0.7s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.capsule-eco.is-hovered .leaf-2 { animation: leafFloat 0.7s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

@keyframes leafFloat {
  0% { opacity: 0; transform: scale(0) rotate(-90deg) translateY(20px); }
  60% { opacity: 1; transform: scale(1.1) rotate(10deg) translateY(-5px); }
  100% { opacity: 0.9; transform: scale(1) rotate(0deg) translateY(0); }
}

/* ==========================================
   EFFET DEMO
   ========================================== */

.effect-demo {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.demo-particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #0066FF;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 8px #0066FF;
}

.capsule-demo.is-hovered .demo-particle {
  animation: demoParticle 1.2s var(--delay) ease-out forwards;
}

@keyframes demoParticle {
  0% { opacity: 0; transform: rotate(var(--angle)) translateY(0) scale(0); }
  40% { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--angle)) translateY(calc(var(--distance) * -1)) scale(0); }
}

.effect-demo .vote-node {
  position: absolute;
  width: 38px;
  height: 38px;
  background: rgba(0, 102, 255, 0.12);
  border: 2px solid rgba(0, 102, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(0, 102, 255, 0.3);
}

.effect-demo .vote-node span {
  color: #0066FF;
  font-size: 16px;
  font-weight: bold;
}

.effect-demo .node-1 { top: 12%; left: 12%; }
.effect-demo .node-2 { top: 8%; right: 14%; }
.effect-demo .node-3 { bottom: 32%; right: 10%; }

.capsule-demo.is-hovered .node-1 { animation: nodeAppear 0.5s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.capsule-demo.is-hovered .node-2 { animation: nodeAppear 0.5s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
.capsule-demo.is-hovered .node-3 { animation: nodeAppear 0.5s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

@keyframes nodeAppear {
  0% { opacity: 0; transform: scale(0); }
  70% { transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
}

.effect-demo .connection-web {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.effect-demo .web-line {
  stroke: #0066FF;
  stroke-width: 1.5;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  opacity: 0.5;
  filter: drop-shadow(0 0 3px #0066FF);
}

.capsule-demo.is-hovered .web-line {
  animation: drawLine 0.8s ease-out forwards;
}

.capsule-demo.is-hovered .web-line:nth-child(1) { animation-delay: 0.4s; }
.capsule-demo.is-hovered .web-line:nth-child(2) { animation-delay: 0.5s; }
.capsule-demo.is-hovered .web-line:nth-child(3) { animation-delay: 0.6s; }
.capsule-demo.is-hovered .web-line:nth-child(4) { animation-delay: 0.7s; }

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}

/* ==========================================
   EFFET TECH
   ========================================== */

.effect-tech {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.data-stream {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 0;
  background: linear-gradient(to top, transparent, #00A8E8, #00ffff);
  opacity: 0;
  transform-origin: bottom center;
}

.capsule-tech.is-hovered .data-stream {
  animation: streamShoot 0.7s var(--delay) ease-out forwards;
}

@keyframes streamShoot {
  0% { height: 0; opacity: 0; transform: rotate(var(--angle)) translateY(0); }
  30% { opacity: 1; }
  100% { height: var(--length); opacity: 0; transform: rotate(var(--angle)) translateY(-100px); }
}

.effect-tech .tech-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 2px solid #00A8E8;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  box-shadow: 0 0 15px rgba(0, 168, 232, 0.5);
}

.effect-tech .ring-1 { width: 100px; height: 100px; }
.effect-tech .ring-2 { width: 160px; height: 160px; }

.capsule-tech.is-hovered .ring-1 { animation: techRingExpand 1.4s 0.1s ease-out infinite; }
.capsule-tech.is-hovered .ring-2 { animation: techRingExpand 1.4s 0.4s ease-out infinite; }

@keyframes techRingExpand {
  0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
  30% { opacity: 0.7; }
  100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
}

.effect-tech .pulse-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  background: #00ffff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  filter: blur(8px);
}

.capsule-tech.is-hovered .pulse-core {
  animation: coreGlow 0.8s ease-out forwards;
}

@keyframes coreGlow {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  50% { transform: translate(-50%, -50%) scale(1.8); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
}

/* ==========================================
   EFFET NATURE
   ========================================== */

.effect-nature {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
}

.nature-particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  background: #22c55e;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 6px #22c55e;
}

.capsule-nature.is-hovered .nature-particle {
  animation: natureParticle 1.8s var(--delay) ease-out forwards;
}

@keyframes natureParticle {
  0% { opacity: 0; transform: rotate(var(--angle)) translateY(0) scale(0); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: rotate(var(--angle)) translateY(calc(var(--distance) * -1)) scale(0); }
}

.effect-nature .flower {
  position: absolute;
  width: 35px;
  height: 35px;
  opacity: 0;
  transform: scale(0) rotate(-180deg);
}

.effect-nature .flower-1 { top: 12%; left: 8%; }

.effect-nature .flower .petal {
  position: absolute;
  width: 10px;
  height: 15px;
  background: linear-gradient(to top, #22c55e, #4ade80);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform-origin: center bottom;
}

.effect-nature .flower .petal:nth-child(1) { transform: translate(-50%, -100%) rotate(0deg); }
.effect-nature .flower .petal:nth-child(2) { transform: translate(-50%, -100%) rotate(60deg); }
.effect-nature .flower .petal:nth-child(3) { transform: translate(-50%, -100%) rotate(120deg); }
.effect-nature .flower .petal:nth-child(4) { transform: translate(-50%, -100%) rotate(180deg); }
.effect-nature .flower .petal:nth-child(5) { transform: translate(-50%, -100%) rotate(240deg); }
.effect-nature .flower .petal:nth-child(6) { transform: translate(-50%, -100%) rotate(300deg); }

.effect-nature .flower .center {
  position: absolute;
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, #fbbf24, #f59e0b);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0 0 12px rgba(251, 191, 36, 0.5);
}

.capsule-nature.is-hovered .flower-1 { animation: flowerBloom 0.7s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

@keyframes flowerBloom {
  0% { opacity: 0; transform: scale(0) rotate(-180deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

.effect-nature .butterfly {
  position: absolute;
  width: 32px;
  height: 32px;
  color: rgba(34, 197, 94, 0.85);
  opacity: 0;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.6));
  top: 18%; 
  right: 12%;
}

.effect-nature .butterfly .wing-left,
.effect-nature .butterfly .wing-right {
  transform-origin: center;
}

.capsule-nature.is-hovered .butterfly {
  animation: butterflyPath 2.8s 0.4s ease-in-out forwards;
}

.capsule-nature.is-hovered .butterfly .wing-left,
.capsule-nature.is-hovered .butterfly .wing-right {
  animation: wingFlap 0.12s ease-in-out infinite alternate;
}

@keyframes wingFlap {
  0% { transform: scaleX(1); }
  100% { transform: scaleX(0.5); }
}

@keyframes butterflyPath {
  0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
  10% { opacity: 1; transform: translate(-15px, -20px) scale(1); }
  30% { transform: translate(-30px, -40px) rotate(-8deg) scale(1); }
  50% { transform: translate(-20px, -60px) rotate(5deg) scale(0.95); }
  70% { transform: translate(-35px, -75px) rotate(-5deg) scale(0.9); }
  100% { opacity: 0; transform: translate(-45px, -95px) scale(0.7); }
}

/* ==========================================
   CONTENU TEXTE
   ========================================== */

.capsule-content {
  position: relative;
  z-index: 5;
  text-align: center;
}

.capsule-index {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 0.7rem;
  transition: color 0.4s ease;
}

.capsule-card:hover .capsule-index {
  color: rgba(255, 255, 255, 0.6);
}

.capsule-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
  transition: color 0.4s ease, text-shadow 0.4s ease;
}

.capsule-eco:hover .capsule-name { color: #00C9A7; text-shadow: 0 0 35px rgba(0, 201, 167, 0.5); }
.capsule-demo:hover .capsule-name { color: #0066FF; text-shadow: 0 0 35px rgba(0, 102, 255, 0.5); }
.capsule-tech:hover .capsule-name { color: #00A8E8; text-shadow: 0 0 35px rgba(0, 168, 232, 0.5); }
.capsule-nature:hover .capsule-name { color: #22c55e; text-shadow: 0 0 35px rgba(34, 197, 94, 0.5); }

.capsule-description {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  transition: color 0.4s ease;
}

.capsule-card:hover .capsule-description {
  color: rgba(255, 255, 255, 0.75);
}

.capsule-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.7rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  position: relative;
}

.capsule-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.capsule-eco .capsule-cta::before { background: linear-gradient(90deg, rgba(0, 201, 167, 0.12), rgba(0, 201, 167, 0.25)); }
.capsule-demo .capsule-cta::before { background: linear-gradient(90deg, rgba(0, 102, 255, 0.12), rgba(0, 102, 255, 0.25)); }
.capsule-tech .capsule-cta::before { background: linear-gradient(90deg, rgba(0, 168, 232, 0.12), rgba(0, 168, 232, 0.25)); }
.capsule-nature .capsule-cta::before { background: linear-gradient(90deg, rgba(34, 197, 94, 0.12), rgba(34, 197, 94, 0.25)); }

.capsule-cta:hover::before {
  opacity: 1;
}

.capsule-cta svg {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  z-index: 1;
}

.capsule-cta span {
  position: relative;
  z-index: 1;
}

.capsule-cta:hover svg {
  transform: translateX(6px);
}

.capsule-eco .capsule-cta:hover { border-color: #00C9A7; color: #00C9A7; box-shadow: 0 0 25px rgba(0, 201, 167, 0.3); }
.capsule-demo .capsule-cta:hover { border-color: #0066FF; color: #0066FF; box-shadow: 0 0 25px rgba(0, 102, 255, 0.3); }
.capsule-tech .capsule-cta:hover { border-color: #00A8E8; color: #00A8E8; box-shadow: 0 0 25px rgba(0, 168, 232, 0.3); }
.capsule-nature .capsule-cta:hover { border-color: #22c55e; color: #22c55e; box-shadow: 0 0 25px rgba(34, 197, 94, 0.3); }

/* ==========================================
   RESPONSIVE
   ========================================== */

@media (max-width: 1000px) {
  .capsules-grid {
    gap: 2.5rem;
  }
  
  .capsule-visual {
    height: 200px;
  }
  
  .capsule-img {
    max-height: 160px;
  }
}

@media (max-width: 800px) {
  .capsules-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    gap: 2.5rem;
  }
  
  .capsule-visual {
    height: 180px;
  }
  
  .capsules-section {
    padding: 6rem 1.5rem 8rem;
  }
}

@media (max-width: 480px) {
  .capsules-section {
    padding: 5rem 1rem 6rem;
  }
  
  .capsule-card {
    padding: 2rem 1.5rem;
    border-radius: 28px;
  }
  
  .capsule-visual {
    height: 160px;
  }
  
  .capsule-img {
    max-height: 130px;
  }
  
  .capsule-name {
    font-size: 1.2rem;
  }
}
</style>
