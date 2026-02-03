<template>
  <article 
    class="capsule-card" 
    :data-capsule="capsule.id"
    @click="$emit('click')"
  >
    <div class="capsule-image-wrapper">
      <img :src="capsule.image" :alt="capsule.title" class="capsule-image">
      <div class="capsule-overlay"></div>
    </div>
    <div class="capsule-content">
      <span class="capsule-number">{{ capsule.number }}</span>
      <h3 class="capsule-title">{{ capsule.title }}</h3>
      <p class="capsule-desc">{{ capsule.description }}</p>
      <span class="capsule-link">
        <span>Explorer ce futur</span>
        <svg viewBox="0 0 24 24" class="arrow-icon">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </div>
    <div class="capsule-glow" :style="{ '--glow-color': capsule.color }"></div>
  </article>
</template>

<script>
export default {
  name: 'CapsuleCard',
  props: {
    capsule: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>

<style scoped>
.capsule-card {
  position: relative;
  background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.capsule-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 201, 167, 0.2);
}

.capsule-card[data-capsule="eco"]:hover {
  box-shadow: 0 30px 60px rgba(0, 201, 167, 0.3);
}

.capsule-card[data-capsule="demo"]:hover {
  box-shadow: 0 30px 60px rgba(0, 102, 255, 0.3);
}

.capsule-card[data-capsule="tech"]:hover {
  box-shadow: 0 30px 60px rgba(0, 168, 232, 0.3);
}

.capsule-card[data-capsule="nature"]:hover {
  box-shadow: 0 30px 60px rgba(0, 201, 167, 0.3);
}

.capsule-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.capsule-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.capsule-card:hover .capsule-image {
  transform: scale(1.1);
}

.capsule-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.8) 100%);
}

.capsule-content {
  padding: 2rem;
}

.capsule-number {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #00C9A7;
  letter-spacing: 0.2em;
  margin-bottom: 0.75rem;
}

.capsule-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.capsule-card:hover .capsule-title {
  color: #00C9A7;
}

.capsule-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.capsule-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #00C9A7;
  letter-spacing: 0.05em;
  transition: gap 0.3s ease;
}

.capsule-card:hover .capsule-link {
  gap: 1.25rem;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.capsule-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  border-radius: 24px;
  box-shadow: inset 0 0 60px var(--glow-color, rgba(0, 201, 167, 0.3));
}

.capsule-card:hover .capsule-glow {
  opacity: 1;
}

@media (hover: none) {
  .capsule-card {
    cursor: pointer;
  }
}
</style>
