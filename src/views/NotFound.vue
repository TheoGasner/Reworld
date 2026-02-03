<template>
  <div class="notfound-page">
    <!-- Background animé -->
    <div class="notfound-bg">
      <div class="stars"></div>
      <div class="floating-particles">
        <span v-for="n in 20" :key="n" class="particle"></span>
      </div>
    </div>

    <div class="notfound-content">
      <!-- Glitch 404 -->
      <h1 class="error-code" data-text="404">404</h1>
      
      <h2 class="error-title">Capsule temporelle introuvable</h2>
      
      <p class="error-desc">
        Cette dimension n'existe pas encore dans notre timeline.<br>
        Retournez vers un futur désirable.
      </p>

      <router-link to="/" class="back-home-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Retour à l'accueil</span>
      </router-link>

      <!-- Liens rapides -->
      <div class="quick-links">
        <p class="quick-links-title">Ou explorez nos capsules :</p>
        <div class="capsules-links">
          <router-link to="/capsule-eco" class="capsule-link eco">Économie</router-link>
          <router-link to="/capsule-demo" class="capsule-link demo">Démocratie</router-link>
          <router-link to="/capsule-tech" class="capsule-link tech">Technologie</router-link>
          <router-link to="/capsule-nature" class="capsule-link nature">Nature</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.notfound-page {
  min-height: 100vh;
  background: #0A0A0A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Background */
.notfound-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),
    radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.2), transparent),
    radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.3), transparent);
  background-size: 200px 200px;
  animation: twinkle 5s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00A8E8;
  border-radius: 50%;
  opacity: 0.3;
  animation: float 15s infinite ease-in-out;
}

.particle:nth-child(odd) {
  background: #00C9A7;
}

.particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; top: 80%; animation-delay: 1s; }
.particle:nth-child(3) { left: 30%; top: 40%; animation-delay: 2s; }
.particle:nth-child(4) { left: 40%; top: 60%; animation-delay: 3s; }
.particle:nth-child(5) { left: 50%; top: 30%; animation-delay: 4s; }
.particle:nth-child(6) { left: 60%; top: 70%; animation-delay: 5s; }
.particle:nth-child(7) { left: 70%; top: 50%; animation-delay: 6s; }
.particle:nth-child(8) { left: 80%; top: 20%; animation-delay: 7s; }
.particle:nth-child(9) { left: 90%; top: 90%; animation-delay: 8s; }
.particle:nth-child(10) { left: 15%; top: 55%; animation-delay: 9s; }
.particle:nth-child(11) { left: 25%; top: 15%; animation-delay: 0.5s; }
.particle:nth-child(12) { left: 35%; top: 85%; animation-delay: 1.5s; }
.particle:nth-child(13) { left: 45%; top: 45%; animation-delay: 2.5s; }
.particle:nth-child(14) { left: 55%; top: 75%; animation-delay: 3.5s; }
.particle:nth-child(15) { left: 65%; top: 25%; animation-delay: 4.5s; }
.particle:nth-child(16) { left: 75%; top: 65%; animation-delay: 5.5s; }
.particle:nth-child(17) { left: 85%; top: 35%; animation-delay: 6.5s; }
.particle:nth-child(18) { left: 95%; top: 55%; animation-delay: 7.5s; }
.particle:nth-child(19) { left: 5%; top: 95%; animation-delay: 8.5s; }
.particle:nth-child(20) { left: 50%; top: 10%; animation-delay: 9.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(-10px) translateX(-10px); }
  75% { transform: translateY(-30px) translateX(5px); }
}

/* Content */
.notfound-content {
  text-align: center;
  z-index: 1;
  padding: 2rem;
}

/* Glitch 404 */
.error-code {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(8rem, 25vw, 15rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00A8E8 0%, #00C9A7 50%, #00A8E8 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientMove 3s ease infinite;
  position: relative;
  margin: 0;
  line-height: 1;
}

.error-code::before,
.error-code::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #00A8E8 0%, #00C9A7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.error-code::before {
  animation: glitch-1 2s infinite linear alternate-reverse;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.error-code::after {
  animation: glitch-2 3s infinite linear alternate-reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes gradientMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes glitch-1 {
  0% { transform: translateX(0); }
  20% { transform: translateX(-3px); }
  40% { transform: translateX(3px); }
  60% { transform: translateX(-1px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0); }
}

@keyframes glitch-2 {
  0% { transform: translateX(0); }
  20% { transform: translateX(2px); }
  40% { transform: translateX(-2px); }
  60% { transform: translateX(3px); }
  80% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
}

.error-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #FFFFFF;
  margin: 1rem 0 1.5rem;
}

.error-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

/* Back button */
.back-home-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00A8E8 0%, #00C9A7 100%);
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-home-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(0, 168, 232, 0.4);
}

.back-home-btn svg {
  transition: transform 0.3s ease;
}

.back-home-btn:hover svg {
  transform: translateX(-5px);
}

/* Quick links */
.quick-links {
  margin-top: 4rem;
}

.quick-links-title {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.25rem;
}

.capsules-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.capsule-link {
  padding: 0.6rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
}

.capsule-link:hover {
  transform: translateY(-3px);
}

.capsule-link.eco:hover {
  border-color: #00C9A7;
  color: #00C9A7;
  box-shadow: 0 5px 20px rgba(0, 201, 167, 0.3);
}

.capsule-link.demo:hover {
  border-color: #0066FF;
  color: #0066FF;
  box-shadow: 0 5px 20px rgba(0, 102, 255, 0.3);
}

.capsule-link.tech:hover {
  border-color: #00A8E8;
  color: #00A8E8;
  box-shadow: 0 5px 20px rgba(0, 168, 232, 0.3);
}

.capsule-link.nature:hover {
  border-color: #10B981;
  color: #10B981;
  box-shadow: 0 5px 20px rgba(16, 185, 129, 0.3);
}

/* Responsive */
@media (max-width: 600px) {
  .capsules-links {
    flex-direction: column;
    align-items: center;
  }
  
  .capsule-link {
    width: 100%;
    max-width: 200px;
    text-align: center;
  }
}
</style>
