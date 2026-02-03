<template>
  <div class="home-page">
    <!-- Fond temporel global -->
    <TemporalBackground />
    
    <!-- HERO Section avec nouvelle animation -->
    <Hero />
    
    <!-- CAPSULES Section 3D -->
    <CapsulesSection @navigate-capsule="navigateToCapsule" />

    <!-- Concept Section -->
    <section id="concept" class="concept-section">
      <div class="concept-content">
        <h2 class="concept-title">Le Concept</h2>
        <p class="concept-text">
          REWORLD est une expérience immersive qui vous transporte dans 4 futurs désirables. 
          Chaque capsule temporelle représente une vision optimiste et réaliste de ce que 
          notre monde pourrait devenir si nous agissons ensemble, dès aujourd'hui.
        </p>
        <div class="concept-values">
          <div class="value-item">
            <span class="value-icon">🌱</span>
            <h3>Régénération</h3>
            <p>Construire plutôt que détruire</p>
          </div>
          <div class="value-item">
            <span class="value-icon">🤝</span>
            <h3>Collectif</h3>
            <p>Ensemble, nous sommes plus forts</p>
          </div>
          <div class="value-item">
            <span class="value-icon">💡</span>
            <h3>Action</h3>
            <p>Des gestes concrets dès maintenant</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section - Les Actus du Futur -->
    <section id="newsletter" class="newsletter-section">
      <div class="newsletter-container">
        <h2 class="newsletter-title">Les Actus du Futur</h2>
        <p class="newsletter-subtitle">Technologies régénératives qui construisent 2050</p>
        
        <!-- Articles Grid -->
        <div class="articles-grid">
          <!-- Article 1 - Vision Biodiversité ONU -->
          <a href="https://www.cbd.int/doc/c/4a22/3eba/a499b54091a1c1e22bb7b54e/sbstta-21-02-en.pdf" target="_blank" rel="noopener noreferrer" class="article-card">
            <h3 class="article-title">Vision Biodiversité 2050 - Nations Unies</h3>
            <p class="article-subtitle">Convention Diversité Biologique (CBD)</p>
            <p class="article-desc">Scénarios officiels ONU biodiversité 2050 : +15% écosystèmes restaurés, extinction divisée par 10, 90% diversité génétique préservée.</p>
            <span class="article-link">Lire le rapport →</span>
          </a>
          
          <!-- Article 2 - Science Journal -->
          <a href="https://www.science.org/doi/10.1126/science.adn3441" target="_blank" rel="noopener noreferrer" class="article-card">
            <h3 class="article-title">Global trends and scenarios for terrestrial biodiversity and ecosystem services from 1900 to 2050</h3>
            <p class="article-subtitle">Henrique M. Pereira et 100+ scientifiques</p>
            <p class="article-desc">Projections biodiversité 1900-2050 : déclin ralentit mais climat accélère extinctions. Services écosystèmes provisioning ↑, regulating ↓.</p>
            <span class="article-link">Lire l'étude →</span>
          </a>
          
          <!-- Article 3 - TED-Ed -->
          <a href="https://ed.ted.com/lessons/what-earth-in-2050-could-look-like-shannon-odell" target="_blank" rel="noopener noreferrer" class="article-card">
            <h3 class="article-title">À quoi ressemblera la Terre en 2050 ?</h3>
            <p class="article-subtitle">Shannon O'Dell (TED-Ed)</p>
            <p class="article-desc">Projections scientifiques 2050 : climat, énergie, population, tech. 1M+ vues éducation.</p>
            <span class="article-link">Voir la vidéo →</span>
          </a>
        </div>
        
        <!-- Newsletter Form -->
        <div class="newsletter-form-container">
          <p class="form-intro">Recevez chaque semaine les innovations qui façonnent demain</p>
          <form class="newsletter-form" @submit.prevent="subscribeNewsletter">
            <input 
              type="email" 
              v-model="newsletterEmail" 
              placeholder="Votre adresse email" 
              required 
              class="newsletter-input"
            >
            <button type="submit" class="newsletter-btn" :class="{ 'subscribed': isSubscribed }">
              <span v-if="!isSubscribed">S'abonner</span>
              <span v-else>✓ Inscrit</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <!-- Version Desktop : Spline -->
      <div class="contact-desktop">
        <spline-viewer 
          url="https://prod.spline.design/6u1JM2hDbJFzgH2v/scene.splinecode"
          loading-anim-type="none"
        ></spline-viewer>
        <div class="spline-logo-cover"></div>
        <div class="spline-joinus-cover"></div>
        
        <!-- Zone interactive circulaire pour la sphère -->
        <div class="sphere-interactive-zone"></div>
        
        <!-- Bouton Contact overlay -->
        <div class="contact-overlay">
          <router-link to="/contact" class="contact-btn">
            <span>Contactez-nous</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Version Mobile : Alternative stylée -->
      <div class="contact-mobile">
        <div class="mobile-bg">
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
        </div>
        <div class="mobile-content">
          <h2 class="mobile-title">Rejoignez le mouvement</h2>
          <p class="mobile-desc">Une question ? Une idée ? Construisons ensemble les futurs désirables.</p>
          <router-link to="/contact" class="contact-btn">
            <span>Contactez-nous</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <!-- Colonne Logo & Tagline -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo-link">
            <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="footer-logo">
          </router-link>
          <p class="footer-tagline">Réenchanter le monde,<br>une action à la fois.</p>
        </div>
        
        <!-- Colonne Liens -->
        <div class="footer-links">
          <h4 class="footer-title">Liens utiles</h4>
          <a href="#concept" class="footer-link">Le Concept</a>
          <a href="#capsules" class="footer-link">Les Capsules</a>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </div>
        
        <!-- Colonne Légal -->
        <div class="footer-legal">
          <h4 class="footer-title">Informations</h4>
          <router-link to="/mentions-legales" class="footer-link">Mentions légales</router-link>
          <router-link to="/politique-confidentialite" class="footer-link">Politique de confidentialité</router-link>
          <router-link to="/cgu" class="footer-link">CGU</router-link>
        </div>
        
        <!-- Colonne Contact & Réseaux -->
        <div class="footer-contact">
          <h4 class="footer-title">Nous suivre</h4>
          <div class="social-links">
            <a href="#" class="social-link social-instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="social-link social-linkedin" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="social-link social-x" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="social-link social-youtube" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <a href="mailto:contact@reworld.fr" class="footer-email">contact@reworld.fr</a>
        </div>
      </div>
      
      <!-- Barre de séparation -->
      <div class="footer-divider"></div>
      
      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="footer-credits">© 2026 REWORLD - Projet 3ème année BUT MMI - Théo GASNER</p>
        <p class="footer-rights">Tous droits réservés</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import Hero from '../components/Hero.vue'
import CapsulesSection from '../components/CapsulesSection.vue'
import TemporalBackground from '../components/TemporalBackground.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    CapsulesSection,
    TemporalBackground
  },
  emits: ['navigate-capsule'],
  setup(props, { emit }) {
    const navigateToCapsule = (path) => {
      emit('navigate-capsule', path)
    }
    
    // Newsletter
    const newsletterEmail = ref('')
    const isSubscribed = ref(false)
    
    const subscribeNewsletter = async () => {
      if (newsletterEmail.value) {
        // Envoyer à Formspree
        try {
          const response = await fetch('https://formspree.io/f/xeezdzjo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              email: newsletterEmail.value,
              type: 'newsletter'
            })
          })
          
          if (response.ok) {
            isSubscribed.value = true
            setTimeout(() => {
              isSubscribed.value = false
              newsletterEmail.value = ''
            }, 3000)
          }
        } catch (error) {
          console.error('Erreur inscription:', error)
        }
      }
    }
    
    return {
      navigateToCapsule,
      newsletterEmail,
      isSubscribed,
      subscribeNewsletter
    }
  },
  mounted() {
    // Gestion de la zone interactive pour la sphère Spline
    const sphereZone = document.querySelector('.sphere-interactive-zone')
    const splineViewer = document.querySelector('.contact-section spline-viewer')
    
    if (sphereZone && splineViewer) {
      sphereZone.addEventListener('mouseenter', () => {
        splineViewer.style.pointerEvents = 'auto'
      })
      sphereZone.addEventListener('mouseleave', () => {
        splineViewer.style.pointerEvents = 'none'
      })
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: transparent;
  position: relative;
  z-index: 1;
}

/* ==========================================
   Concept Section
   ========================================== */
.concept-section {
  position: relative;
  padding: 6rem 2rem;
  background: transparent;
  z-index: 2;
}

.concept-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.concept-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
}

.concept-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto 3rem;
}

.concept-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.value-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
  border-color: #00C9A7;
}

.value-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.value-item h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #00C9A7;
}

.value-item p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
}

/* ==========================================
   Newsletter Section - Les Actus du Futur
   ========================================== */
.newsletter-section {
  position: relative;
  width: 100%;
  padding: 6rem 2rem;
  background: transparent;
  z-index: 2;
  overflow: hidden;
}

.newsletter-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.newsletter-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00A8E8 0%, #00C9A7 50%, #00A8E8 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.newsletter-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 4rem;
}

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.article-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.article-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #00A8E8, #00C9A7);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.article-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 168, 232, 0.3);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 168, 232, 0.15);
}

.article-card:hover::before {
  transform: scaleX(1);
}

.article-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.article-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #00A8E8;
  margin-bottom: 0.75rem;
}

.article-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1.25rem;
}

.article-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #00A8E8;
  transition: color 0.3s ease;
}

.article-card:hover .article-link {
  color: #00C9A7;
}

/* Newsletter Form */
.newsletter-form-container {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.form-intro {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #FFFFFF;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.newsletter-input:focus {
  border-color: #00A8E8;
  background: rgba(0, 168, 232, 0.08);
  box-shadow: 0 0 20px rgba(0, 168, 232, 0.2);
}

.newsletter-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00A8E8 0%, #00C9A7 100%);
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.newsletter-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 168, 232, 0.4);
}

.newsletter-btn.subscribed {
  background: linear-gradient(135deg, #00C9A7 0%, #10B981 100%);
}

/* ==========================================
   Contact Section
   ========================================== */
.contact-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000000;
  z-index: 2;
  overflow: hidden;
}

/* Desktop version */
.contact-desktop {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

.contact-desktop spline-viewer {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}

/* Mobile version - masquée par défaut */
.contact-mobile {
  display: none;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
}

.mobile-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: orbFloat 8s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #00C9A7, #00A8E8);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 250px;
  height: 250px;
  background: linear-gradient(135deg, #0066FF, #00C9A7);
  top: 50%;
  right: 10%;
  animation-delay: -3s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #00A8E8, #10B981);
  bottom: 15%;
  left: 30%;
  animation-delay: -5s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -30px) scale(1.1); }
  50% { transform: translate(-15px, 20px) scale(0.95); }
  75% { transform: translate(25px, 15px) scale(1.05); }
}

.mobile-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
}

.mobile-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 1rem;
}

.mobile-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Zone interactive circulaire pour la sphère uniquement */
.sphere-interactive-zone {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  border-radius: 50%;
  pointer-events: auto;
  z-index: 60;
  cursor: grab;
}

/* Masque pour cacher le logo Spline */
.spline-logo-cover {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 250px;
  height: 80px;
  background: #000000;
  z-index: 100;
  pointer-events: none;
}

/* Masque pour cacher le bouton Join Us de Spline */
.spline-joinus-cover {
  position: absolute;
  top: 60%;
  left: 0;
  width: 100%;
  height: 200px;
  background: #000000;
  z-index: 100;
  pointer-events: none;
}

/* Overlay Contact */
.contact-overlay {
  position: absolute;
  top: 69%;
  left: 18%;
  transform: translate(0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 150;
  pointer-events: auto;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #00C9A7 0%, #00A8E8 100%);
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 30px rgba(0, 201, 167, 0.4);
}

.contact-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 201, 167, 0.5);
}

.contact-btn svg {
  transition: transform 0.3s ease;
}

.contact-btn:hover svg {
  transform: translateX(5px);
}

/* ==========================================
   Footer
   ========================================== */
.footer {
  position: relative;
  padding: 5rem 2rem 2rem;
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 2;
}

.footer-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
}

/* Brand Column */
.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo-link {
  display: inline-block;
  cursor: pointer;
}

.footer-logo-link:hover .footer-logo {
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
  transform: scale(1.02);
}

.footer-logo {
  width: 16rem;
  height: auto;
  margin-bottom: 1.25rem;
  margin-left: -2.5rem;
  transition: filter 0.3s ease, transform 0.3s ease;
}

.footer-tagline {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.5);
}

/* Links Columns */
.footer-links,
.footer-legal,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #00C9A7;
  margin-bottom: 0.75rem;
}

.footer-link {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: #FFFFFF;
  transform: translateX(4px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

/* Couleurs spécifiques des réseaux sociaux */
.social-instagram {
  color: #E4405F;
  border-color: rgba(228, 64, 95, 0.3);
}
.social-instagram:hover {
  background: linear-gradient(45deg, rgba(248, 113, 37, 0.2), rgba(228, 64, 95, 0.2), rgba(188, 42, 141, 0.2));
  border-color: #E4405F;
  box-shadow: 0 8px 20px rgba(228, 64, 95, 0.3);
}

.social-linkedin {
  color: #0A66C2;
  border-color: rgba(10, 102, 194, 0.3);
}
.social-linkedin:hover {
  background: rgba(10, 102, 194, 0.2);
  border-color: #0A66C2;
  box-shadow: 0 8px 20px rgba(10, 102, 194, 0.3);
}

.social-x {
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.2);
}
.social-x:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #FFFFFF;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}

.social-youtube {
  color: #FF0000;
  border-color: rgba(255, 0, 0, 0.3);
}
.social-youtube:hover {
  background: rgba(255, 0, 0, 0.15);
  border-color: #FF0000;
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-email {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-email:hover {
  color: #00C9A7;
}

/* Divider */
.footer-divider {
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin: 0 auto 1.5rem;
}

/* Bottom Bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-credits {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer-rights {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
}

/* ==========================================
   Responsive
   ========================================== */

/* Basculer Desktop/Mobile pour section Contact */
@media (max-width: 900px) {
  .contact-desktop {
    display: none;
  }
  
  .contact-mobile {
    display: flex;
  }
  
  .contact-section {
    height: 60vh;
    min-height: 400px;
  }
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    text-align: center;
    align-items: center;
  }
}

@media (max-width: 900px) {
  .concept-values {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .concept-section {
    padding: 4rem 1.5rem;
  }
  
  .newsletter-section {
    padding: 4rem 1.5rem;
  }
  
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-btn {
    width: 100%;
  }
  
  .footer {
    padding: 4rem 1.5rem 2rem;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-brand,
  .footer-links,
  .footer-legal,
  .footer-contact {
    align-items: center;
  }
  
  .footer-link:hover {
    transform: none;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
