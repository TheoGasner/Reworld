<template>
  <div class="contact-page">
    <!-- Header fixe identique à l'accueil -->
    <header class="site-header">
      <div class="header-left">
        <router-link to="/" class="logo-link">
          <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="header-logo" />
        </router-link>
      </div>
      <nav class="header-nav">
        <router-link to="/#capsules" class="nav-link">Capsules</router-link>
        <router-link to="/#concept" class="nav-link">Concept</router-link>
        <router-link to="/contact" class="nav-link active">Contact</router-link>
      </nav>
    </header>

    <!-- Contenu principal -->
    <main class="contact-main">
      <div class="contact-container">
        <!-- Lien retour -->
        <router-link to="/" class="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Retour à l'accueil
        </router-link>

        <!-- Titre -->
        <h1 class="contact-title">Contactez-nous</h1>
        <p class="contact-subtitle">Une question sur le projet REWORLD ? Une proposition de collaboration ? N'hésitez pas à nous écrire.</p>

        <!-- Grille contact -->
        <div class="contact-grid">
          <!-- Formulaire -->
          <div class="contact-form-section">
            <h2 class="section-title">Envoyez-nous un message</h2>
            
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nom complet <span class="required">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    placeholder="Votre nom"
                  >
                </div>

                <div class="form-group">
                  <label for="email">Adresse email <span class="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    placeholder="votre@email.com"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Objet <span class="required">*</span></label>
                <select id="subject" v-model="form.subject" required>
                  <option value="" disabled>Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="collaboration">Proposition de collaboration</option>
                  <option value="presse">Contact presse / média</option>
                  <option value="pedagogique">Utilisation pédagogique</option>
                  <option value="feedback">Retour d'expérience</option>
                  <option value="technique">Question technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message <span class="required">*</span></label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="6"
                  placeholder="Décrivez votre demande en détail..."
                ></textarea>
              </div>

              <div class="form-footer">
                <p class="form-note">Les champs marqués d'un <span class="required">*</span> sont obligatoires.</p>
                <button type="submit" class="submit-btn" :class="{ 'sending': isSending, 'sent': isSent, 'error': sendError }">
                  <span v-if="!isSending && !isSent && !sendError">Envoyer le message</span>
                  <span v-if="isSending">Envoi en cours...</span>
                  <span v-if="isSent">✓ Message envoyé</span>
                  <span v-if="sendError">✗ Erreur d'envoi</span>
                </button>
              </div>
            </form>
          </div>

          <!-- Informations de contact -->
          <div class="contact-info-section">
            <h2 class="section-title">Informations</h2>

            <div class="info-card">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h3>Email</h3>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@reworld.fr&su=Contact%20via%20le%20site%20REWORLD" target="_blank" rel="noopener noreferrer">contact@reworld.fr</a>
                <p class="info-note">Réponse sous 48-72h ouvrées</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">🎓</div>
              <div class="info-content">
                <h3>Projet académique</h3>
                <p>BUT MMI 3ème année</p>
                <p class="info-note">Spécialisation Communication</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">👤</div>
              <div class="info-content">
                <h3>Responsable du projet</h3>
                <p>Théo GASNER</p>
                <p class="info-note">Conception & Développement</p>
              </div>
            </div>

            <div class="social-section">
              <h3>Suivez REWORLD</h3>
              <div class="social-links">
                <a href="#" class="social-link social-instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" class="social-link social-linkedin" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" class="social-link social-x" aria-label="X (Twitter)">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" class="social-link social-youtube" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'Contact',
  components: { AppFooter },
  setup() {
    const isSending = ref(false)
    const isSent = ref(false)
    const sendError = ref(false)

    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const handleSubmit = async () => {
      isSending.value = true
      sendError.value = false
      
      try {
        const response = await fetch('https://formspree.io/f/xeezdzjo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: form.value.name,
            email: form.value.email,
            subject: form.value.subject,
            message: form.value.message
          })
        })
        
        if (response.ok) {
          isSent.value = true
          
          setTimeout(() => {
            isSent.value = false
            form.value = {
              name: '',
              email: '',
              subject: '',
              message: ''
            }
          }, 3000)
        } else {
          throw new Error('Erreur serveur')
        }
      } catch (error) {
        console.error('Erreur envoi:', error)
        sendError.value = true
      } finally {
        isSending.value = false
      }
    }

    return {
      form,
      isSending,
      isSent,
      sendError,
      handleSubmit
    }
  }
}
</script>

<style scoped>
/* ==========================================
   PAGE LAYOUT
   ========================================== */
.contact-page {
  min-height: 100vh;
  background: #0A0A0A;
}

/* ==========================================
   HEADER (identique à l'accueil)
   ========================================== */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-left {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.header-logo {
  width: 8rem;
  height: auto;
  transition: filter 0.3s ease, transform 0.3s ease;
}

.logo-link:hover .header-logo {
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
  transform: scale(1.02);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00C9A7;
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #00C9A7;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* ==========================================
   MAIN CONTENT
   ========================================== */
.contact-main {
  padding: 7rem 2rem 4rem;
}

.contact-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Back link */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00C9A7;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: #FFFFFF;
  transform: translateX(-5px);
}

/* Title */
.contact-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 0.75rem;
  background: linear-gradient(90deg, #FFFFFF, #00C9A7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 600px;
}

/* ==========================================
   CONTACT GRID
   ========================================== */
.contact-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 4rem;
  align-items: start;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* ==========================================
   FORM
   ========================================== */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.required {
  color: #00C9A7;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  color: #FFFFFF;
  transition: all 0.3s ease;
  outline: none;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #00C9A7;
  background: rgba(0, 201, 167, 0.05);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  cursor: pointer;
}

.form-group select option {
  background: #1a1a1a;
  color: #FFFFFF;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;
}

.form-note {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
}

.submit-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00C9A7 0%, #00A8E8 100%);
  border: none;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 201, 167, 0.3);
}

.submit-btn.sending {
  background: rgba(255, 255, 255, 0.2);
  pointer-events: none;
}

.submit-btn.sent {
  background: linear-gradient(135deg, #00C9A7 0%, #10B981 100%);
}

.submit-btn.error {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

/* ==========================================
   INFO SECTION
   ========================================== */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: rgba(0, 201, 167, 0.3);
  background: rgba(0, 201, 167, 0.05);
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.25rem;
}

.info-content p,
.info-content a {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  line-height: 1.5;
}

.info-content a {
  color: #00C9A7;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: #FFFFFF;
}

.info-note {
  font-size: 0.85rem !important;
  color: rgba(255, 255, 255, 0.4) !important;
  margin-top: 0.25rem;
}

/* Social section */
.social-section {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 0.5rem;
}

.social-section h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Couleurs des réseaux sociaux */
.social-instagram {
  color: #E4405F;
  border-color: rgba(228, 64, 95, 0.3);
}
.social-instagram:hover {
  background: rgba(228, 64, 95, 0.15);
  border-color: #E4405F;
  box-shadow: 0 8px 20px rgba(228, 64, 95, 0.3);
  transform: translateY(-3px);
}

.social-linkedin {
  color: #0A66C2;
  border-color: rgba(10, 102, 194, 0.3);
}
.social-linkedin:hover {
  background: rgba(10, 102, 194, 0.2);
  border-color: #0A66C2;
  box-shadow: 0 8px 20px rgba(10, 102, 194, 0.3);
  transform: translateY(-3px);
}

.social-x {
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.2);
}
.social-x:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #FFFFFF;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.social-youtube {
  color: #FF0000;
  border-color: rgba(255, 0, 0, 0.3);
}
.social-youtube:hover {
  background: rgba(255, 0, 0, 0.15);
  border-color: #FF0000;
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
  transform: translateY(-3px);
}

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-info-section {
    order: -1;
  }
}

@media (max-width: 768px) {
  .site-header {
    padding: 0.5rem 1.5rem;
  }
  
  .header-logo {
    width: 6rem;
  }
  
  .header-nav {
    gap: 1.25rem;
  }
  
  .nav-link {
    font-size: 0.75rem;
  }
  
  .contact-main {
    padding: 6rem 1.5rem 3rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-footer {
    flex-direction: column;
    align-items: stretch;
  }
  
  .submit-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .header-nav {
    gap: 0.75rem;
  }
  
  .nav-link {
    font-size: 0.65rem;
  }
  
  .contact-main {
    padding: 5rem 1rem 2rem;
  }
}
</style>
