<template>
  <div class="annexes-page">
    <div class="annexes-container">
      <router-link to="/" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Retour à l'accueil
      </router-link>
      
      <h1 class="annexes-title">Annexes du projet</h1>
      <p class="annexes-subtitle">Documentation et ressources de conception</p>
      
      <!-- Section 01 - Réponse au Sujet -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 1 }">
        <div class="section-header" @click="toggleSection(1)">
          <span class="section-number">01</span>
          <h2>Réponse au Sujet</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <div class="theme-badge">Thème : « Réenchanter le monde »</div>
          
          <p>J'ai choisi de réaliser un projet intitulé <strong>REWORLD</strong>, en réponse au thème « Réenchanter le monde ». Ce projet propose une expérience de storytelling interactif et immersif qui projette les utilisateurs dans un futur positif et régénéré à l'horizon 2050.</p>
          
          <p>REWORLD s'articule autour de <strong>quatre capsules narratives</strong>, chacune explorant un domaine clé de la société :</p>
          
          <div class="capsules-grid">
            <div class="capsule-item eco"><span class="capsule-icon">💰</span><span class="capsule-name">Économie</span></div>
            <div class="capsule-item demo"><span class="capsule-icon">🗳️</span><span class="capsule-name">Démocratie</span></div>
            <div class="capsule-item tech"><span class="capsule-icon">🔗</span><span class="capsule-name">Technologie</span></div>
            <div class="capsule-item nature"><span class="capsule-icon">🌿</span><span class="capsule-name">Nature</span></div>
          </div>
          
          <div class="highlight-box">
            <p>Le projet vise à <strong>sensibiliser, inspirer et engager</strong> le public en proposant une autre manière de penser le futur.</p>
          </div>
        </div>
      </section>

      <!-- Section 02 - Piste UX & Communication -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 2 }">
        <div class="section-header" @click="toggleSection(2)">
          <span class="section-number">02</span>
          <h2>Piste UX & Communication</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <h3>🎯 Public cible</h3>
          <p>REWORLD s'adresse aux <strong>jeunes adultes et adultes connectés</strong>, sensibles aux enjeux de société et d'innovation.</p>
          
          <h3>📣 Objectifs de communication</h3>
          <ul class="objectives-list">
            <li>Sensibiliser aux grands enjeux actuels</li>
            <li>Changer le regard porté sur le futur</li>
            <li>Inspirer et encourager une réflexion constructive</li>
          </ul>
        </div>
      </section>

      <!-- Section 03 - Piste Technique -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 3 }">
        <div class="section-header" @click="toggleSection(3)">
          <span class="section-number">03</span>
          <h2>Piste Technique</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <h3>🛠️ Stack technique</h3>
          <div class="tech-stack">
            <div class="tech-item"><span class="tech-icon">⚡</span><span class="tech-name">Vue.js 3</span><span class="tech-desc">Framework JavaScript réactif</span></div>
            <div class="tech-item"><span class="tech-icon">🚀</span><span class="tech-name">Vite</span><span class="tech-desc">Build tool ultra-rapide</span></div>
            <div class="tech-item"><span class="tech-icon">🎨</span><span class="tech-name">CSS3 / Animations</span><span class="tech-desc">Transitions fluides</span></div>
            <div class="tech-item"><span class="tech-icon">📱</span><span class="tech-name">Responsive</span><span class="tech-desc">Adapté tous écrans</span></div>
          </div>
        </div>
      </section>

      <!-- Section 04 - Pitch -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 4 }">
        <div class="section-header" @click="toggleSection(4)">
          <span class="section-number">04</span>
          <h2>Pitch</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <div class="pitch-title">
            <h3>REWORLD</h3>
            <p class="pitch-tagline">Voyager dans un futur régénéré pour réenchanter le monde</p>
          </div>
          <div class="pitch-content">
            <p>REWORLD est une <strong>expérience de storytelling interactif</strong> qui plonge les utilisateurs en 2050, dans un quotidien transformé et positif.</p>
            <div class="pitch-objective">
              <span class="objective-label">Objectif</span>
              <p>Réenchanter le monde en remplaçant la peur par l'imagination positive.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 05 - Figma -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 5 }">
        <div class="section-header" @click="toggleSection(5)">
          <span class="section-number">05</span>
          <h2>Maquettes Figma</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <a href="https://www.figma.com/design/hup9Z4Mnn0EV1lYHkQvYYe/REWORLD?node-id=0-1&t=a2x72RLgLfMT1KpX-1" target="_blank" rel="noopener noreferrer" class="figma-link">
            <div class="figma-icon">
              <svg width="32" height="32" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
            </div>
            <div class="figma-content">
              <span class="figma-title">Ouvrir le projet Figma</span>
              <span class="figma-desc">Maquettes, composants et prototypes</span>
            </div>
            <svg class="figma-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <!-- Section 06 - Slides -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 6 }">
        <div class="section-header" @click="toggleSection(6)">
          <span class="section-number">06</span>
          <h2>Slides de Présentation</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <a href="https://www.canva.com/design/DAHAWa6u3_g/clUIjWHl1CqbzHGaXkDRRA/edit?utm_content=DAHAWa6u3_g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" class="canva-link">
            <div class="canva-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#00C4CC"/>
                <path d="M8 12C8 9.79 9.79 8 12 8C13.1 8 14.1 8.45 14.83 9.17L13.41 10.59C13.05 10.22 12.55 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C12.55 14 13.05 13.78 13.41 13.41L14.83 14.83C14.1 15.55 13.1 16 12 16C9.79 16 8 14.21 8 12Z" fill="white"/>
              </svg>
            </div>
            <div class="canva-content">
              <span class="canva-title">Ouvrir les slides Canva</span>
              <span class="canva-desc">Présentation du projet REWORLD</span>
            </div>
            <svg class="canva-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <!-- Section 07 - Crédits -->
      <section class="annexe-section" :class="{ 'is-open': openSection === 7 }">
        <div class="section-header" @click="toggleSection(7)">
          <span class="section-number">07</span>
          <h2>Crédits</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content">
          <div class="credits-grid">
            <div class="credit-item"><span class="credit-role">Conception & Design</span><span class="credit-name">Théo GASNER</span></div>
            <div class="credit-item"><span class="credit-role">Développement</span><span class="credit-name">Théo GASNER</span></div>
            <div class="credit-item"><span class="credit-role">Rédaction</span><span class="credit-name">Théo GASNER</span></div>
            <div class="credit-item"><span class="credit-role">Formation</span><span class="credit-name">BUT MMI 3 - Spé Communication</span></div>
          </div>
        </div>
      </section>

      <!-- Section 08 - Identité Visuelle -->
      <section class="annexe-section brand-section" :class="{ 'is-open': openSection === 8 }">
        <div class="section-header" @click="toggleSection(8)">
          <span class="section-number">08</span>
          <h2>Identité Visuelle</h2>
          <svg class="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="section-content brand-content">
          
          <!-- Logo -->
          <div class="brand-subsection">
            <h3>🎨 Logo</h3>
            <div class="logo-showcase">
              <div class="logo-card logo-dark">
                <img src="/assets/images/logo-reworld.svg" alt="Logo REWORLD" class="logo-img">
                <span class="logo-label">Fond sombre</span>
              </div>
              <div class="logo-card logo-light">
                <img src="/assets/images/logo-reworld.svg" alt="Logo REWORLD" class="logo-img inverted">
                <span class="logo-label">Fond clair</span>
              </div>
            </div>
            <div class="logo-rules">
              <p><strong>Zone de protection :</strong> 20px minimum autour du logo</p>
              <p><strong>Taille minimale :</strong> 80px de largeur</p>
            </div>
          </div>

          <!-- Palette de Couleurs -->
          <div class="brand-subsection">
            <h3>🎨 Palette de Couleurs</h3>
            <p class="subsection-intro">Cliquez sur une couleur pour copier son code HEX</p>
            
            <h4>Couleurs Principales</h4>
            <div class="colors-grid">
              <div class="color-card" @click="copyColor('#0A0A0A')">
                <div class="color-swatch" style="background: #0A0A0A; border: 1px solid rgba(255,255,255,0.3);"></div>
                <div class="color-info">
                  <span class="color-name">Noir Profond</span>
                  <span class="color-hex">#0A0A0A</span>
                  <span class="color-use">Fond principal</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#FFFFFF')">
                <div class="color-swatch" style="background: #FFFFFF;"></div>
                <div class="color-info">
                  <span class="color-name">Blanc Pur</span>
                  <span class="color-hex">#FFFFFF</span>
                  <span class="color-use">Textes, éléments</span>
                </div>
              </div>
            </div>

            <h4>Couleurs d'Accent</h4>
            <div class="colors-grid colors-accent">
              <div class="color-card" @click="copyColor('#0066FF')">
                <div class="color-swatch" style="background: #0066FF;"></div>
                <div class="color-info">
                  <span class="color-name">Bleu Électrique</span>
                  <span class="color-hex">#0066FF</span>
                  <span class="color-use">CTA, liens actifs</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#00C9A7')">
                <div class="color-swatch" style="background: #00C9A7;"></div>
                <div class="color-info">
                  <span class="color-name">Vert Néon</span>
                  <span class="color-hex">#00C9A7</span>
                  <span class="color-use">Actions, succès</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#00A8E8')">
                <div class="color-swatch" style="background: #00A8E8;"></div>
                <div class="color-info">
                  <span class="color-name">Cyan Futuriste</span>
                  <span class="color-hex">#00A8E8</span>
                  <span class="color-use">Tech, info</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#FFD700')">
                <div class="color-swatch" style="background: #FFD700;"></div>
                <div class="color-info">
                  <span class="color-name">Or Solaire</span>
                  <span class="color-hex">#FFD700</span>
                  <span class="color-use">Highlights</span>
                </div>
              </div>
            </div>

            <h4>Couleurs des Capsules</h4>
            <div class="colors-grid colors-capsules">
              <div class="color-card" @click="copyColor('#00C9A7')">
                <div class="color-swatch" style="background: linear-gradient(135deg, #00C9A7, #00FFD1);"></div>
                <div class="color-info">
                  <span class="color-name">Capsule Éco</span>
                  <span class="color-hex">#00C9A7 → #00FFD1</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#0066FF')">
                <div class="color-swatch" style="background: linear-gradient(135deg, #0066FF, #00A8E8);"></div>
                <div class="color-info">
                  <span class="color-name">Capsule Démo</span>
                  <span class="color-hex">#0066FF → #00A8E8</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#8B5CF6')">
                <div class="color-swatch" style="background: linear-gradient(135deg, #8B5CF6, #A855F7);"></div>
                <div class="color-info">
                  <span class="color-name">Capsule Tech</span>
                  <span class="color-hex">#8B5CF6 → #A855F7</span>
                </div>
              </div>
              <div class="color-card" @click="copyColor('#10B981')">
                <div class="color-swatch" style="background: linear-gradient(135deg, #10B981, #34D399);"></div>
                <div class="color-info">
                  <span class="color-name">Capsule Nature</span>
                  <span class="color-hex">#10B981 → #34D399</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Typographies -->
          <div class="brand-subsection">
            <h3>✏️ Typographies</h3>
            
            <div class="typo-cards">
              <div class="typo-card">
                <div class="typo-preview montserrat">
                  <span class="typo-sample">Montserrat</span>
                  <span class="typo-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  <span class="typo-numbers">0123456789</span>
                </div>
                <div class="typo-info">
                  <span class="typo-weight">Bold / 800</span>
                  <span class="typo-usage">Titres, headings, éléments d'impact</span>
                  <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" class="typo-link">Google Fonts →</a>
                </div>
              </div>

              <div class="typo-card">
                <div class="typo-preview quicksand">
                  <span class="typo-sample">Quicksand</span>
                  <span class="typo-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  <span class="typo-numbers">0123456789</span>
                </div>
                <div class="typo-info">
                  <span class="typo-weight">Regular / Medium</span>
                  <span class="typo-usage">Texte courant, paragraphes</span>
                  <a href="https://fonts.google.com/specimen/Quicksand" target="_blank" class="typo-link">Google Fonts →</a>
                </div>
              </div>
            </div>

            <div class="typo-hierarchy">
              <h4>Hiérarchie</h4>
              <div class="hierarchy-item"><span class="h1-demo">H1 - Titre Principal</span><span>48-64px</span></div>
              <div class="hierarchy-item"><span class="h2-demo">H2 - Section</span><span>32-40px</span></div>
              <div class="hierarchy-item"><span class="h3-demo">H3 - Sous-titre</span><span>24-28px</span></div>
              <div class="hierarchy-item"><span class="body-demo">Body - Texte</span><span>16-18px</span></div>
            </div>
          </div>

          <!-- Éléments UI -->
          <div class="brand-subsection">
            <h3>🔘 Éléments UI</h3>
            
            <h4>Boutons</h4>
            <div class="buttons-showcase">
              <button class="btn-demo btn-primary-demo">Bouton Principal</button>
              <button class="btn-demo btn-secondary-demo">Bouton Secondaire</button>
              <button class="btn-demo btn-outline-demo">Bouton Outline</button>
            </div>

            <h4>Glassmorphism</h4>
            <div class="glass-demo">
              <div class="glass-card">
                <p>Effet Glass</p>
                <code>background: rgba(255, 255, 255, 0.05);<br>backdrop-filter: blur(10px);<br>border: 1px solid rgba(255, 255, 255, 0.1);</code>
              </div>
            </div>

            <h4>Effets Glow</h4>
            <div class="glow-showcase">
              <div class="glow-item glow-blue"><span>Bleu</span></div>
              <div class="glow-item glow-green"><span>Vert</span></div>
              <div class="glow-item glow-cyan"><span>Cyan</span></div>
              <div class="glow-item glow-gold"><span>Or</span></div>
            </div>
          </div>

          <!-- Téléchargements -->
          <div class="brand-subsection">
            <h3>📥 Téléchargements</h3>
            <div class="downloads-grid">
              <a href="/assets/images/logo-reworld.svg" download class="download-card">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>Logo SVG</span>
              </a>
              <a href="https://www.figma.com/design/hup9Z4Mnn0EV1lYHkQvYYe/REWORLD?node-id=0-1&t=a2x72RLgLfMT1KpX-1" target="_blank" class="download-card">
                <svg width="32" height="32" viewBox="0 0 38 57" fill="currentColor">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"/>
                </svg>
                <span>Figma Source</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- Toast notification -->
    <div class="copy-toast" :class="{ 'show': showToast }">
      {{ toastMessage }}
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'Annexes',
  components: { AppFooter },
  setup() {
    const openSection = ref(null)
    const showToast = ref(false)
    const toastMessage = ref('')

    const toggleSection = (sectionId) => {
      openSection.value = openSection.value === sectionId ? null : sectionId
    }

    const copyColor = async (color) => {
      try {
        await navigator.clipboard.writeText(color)
        toastMessage.value = `${color} copié !`
        showToast.value = true
        setTimeout(() => {
          showToast.value = false
        }, 2000)
      } catch (err) {
        console.error('Erreur copie:', err)
      }
    }

    return {
      openSection,
      showToast,
      toastMessage,
      toggleSection,
      copyColor
    }
  }
}
</script>

<style scoped>
.annexes-page {
  min-height: 100vh;
  background: #0A0A0A;
  padding: 6rem 2rem 4rem;
}

.annexes-container {
  max-width: 900px;
  margin: 0 auto;
}

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

.annexes-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #FFFFFF 0%, #00C9A7 50%, #0066FF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.annexes-subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin-bottom: 4rem;
}

/* Sections avec accordéon */
.annexe-section {
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.annexe-section:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

.annexe-section.is-open {
  border-color: rgba(0, 201, 167, 0.3);
  background: rgba(255, 255, 255, 0.03);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.section-header:hover {
  background: rgba(255, 255, 255, 0.02);
}

.section-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0066FF;
  background: rgba(0, 102, 255, 0.15);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  flex-shrink: 0;
}

.section-header h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
  flex: 1;
}

.chevron {
  color: rgba(255, 255, 255, 0.4);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.annexe-section.is-open .chevron {
  transform: rotate(180deg);
  color: #00C9A7;
}

.section-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: 0 2rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
}

.annexe-section.is-open .section-content {
  max-height: 5000px;
  padding: 0 2rem 2rem;
}

.section-content p { margin-bottom: 1.25rem; }

.section-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 2rem 0 1rem;
}

.section-content h3:first-child { margin-top: 0; }
.section-content strong { color: #00C9A7; }

/* Theme Badge */
.theme-badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 201, 167, 0.2));
  border: 1px solid rgba(0, 201, 167, 0.3);
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #00C9A7;
  margin-bottom: 1.5rem;
}

/* Capsules Grid */
.capsules-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.capsule-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.capsule-item:hover { transform: translateY(-3px); }
.capsule-item.eco { border-color: rgba(0, 201, 167, 0.3); }
.capsule-item.demo { border-color: rgba(139, 92, 246, 0.3); }
.capsule-item.tech { border-color: rgba(6, 182, 212, 0.3); }
.capsule-item.nature { border-color: rgba(34, 197, 94, 0.3); }
.capsule-icon { font-size: 1.75rem; }
.capsule-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
}

/* Highlight Box */
.highlight-box {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 201, 167, 0.1));
  border-left: 3px solid #00C9A7;
  padding: 1.5rem;
  border-radius: 0 12px 12px 0;
  margin: 2rem 0;
}

.highlight-box p { margin: 0; font-size: 1.05rem; }

/* Lists */
.objectives-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.objectives-list li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.objectives-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #00C9A7;
  font-weight: 700;
}

/* Tech Stack */
.tech-stack {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem;
  background: rgba(0, 102, 255, 0.05);
  border: 1px solid rgba(0, 102, 255, 0.15);
  border-radius: 12px;
}

.tech-icon { font-size: 1.5rem; margin-bottom: 0.25rem; }
.tech-name { font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 700; color: #FFFFFF; }
.tech-desc { font-size: 0.85rem; color: rgba(255, 255, 255, 0.5); }

/* Pitch */
.pitch-title { text-align: center; margin-bottom: 2rem; }
.pitch-title h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #FFFFFF, #00C9A7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 0.5rem;
}

.pitch-tagline {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

.pitch-content { max-width: 700px; margin: 0 auto; text-align: center; }

.pitch-objective {
  background: linear-gradient(135deg, rgba(0, 201, 167, 0.1), rgba(0, 102, 255, 0.1));
  border: 1px solid rgba(0, 201, 167, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.objective-label {
  display: inline-block;
  background: #00C9A7;
  color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.pitch-objective p { margin: 0; color: rgba(255, 255, 255, 0.85); }

/* Figma Link */
.figma-link {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 2rem;
  background: rgba(162, 89, 255, 0.08);
  border: 1px solid rgba(162, 89, 255, 0.2);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.figma-link:hover {
  background: rgba(162, 89, 255, 0.15);
  border-color: rgba(162, 89, 255, 0.4);
  transform: translateX(5px);
}

.figma-icon { flex-shrink: 0; }
.figma-content { flex: 1; }
.figma-title { display: block; font-family: 'Montserrat', sans-serif; font-size: 1.1rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.25rem; }
.figma-desc { font-size: 0.9rem; color: rgba(255, 255, 255, 0.5); }
.figma-arrow { flex-shrink: 0; color: rgba(162, 89, 255, 0.7); transition: transform 0.3s ease; }
.figma-link:hover .figma-arrow { transform: translate(3px, -3px); color: #A259FF; }

/* Canva Link */
.canva-link {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem 2rem;
  background: rgba(0, 196, 204, 0.08);
  border: 1px solid rgba(0, 196, 204, 0.2);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.canva-link:hover {
  background: rgba(0, 196, 204, 0.15);
  border-color: rgba(0, 196, 204, 0.4);
  transform: translateX(5px);
}

.canva-icon { flex-shrink: 0; }
.canva-content { flex: 1; }
.canva-title { display: block; font-family: 'Montserrat', sans-serif; font-size: 1.1rem; font-weight: 700; color: #FFFFFF; margin-bottom: 0.25rem; }
.canva-desc { font-size: 0.9rem; color: rgba(255, 255, 255, 0.5); }
.canva-arrow { flex-shrink: 0; color: rgba(0, 196, 204, 0.7); transition: transform 0.3s ease; }
.canva-link:hover .canva-arrow { transform: translate(3px, -3px); color: #00C4CC; }

/* Credits */
.credits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.credit-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
}

.credit-role { font-size: 0.8rem; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; }
.credit-name { font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 600; color: #FFFFFF; }

/* =============================================
   SECTION 07 - IDENTITÉ VISUELLE
   ============================================= */
.brand-content h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 1.5rem 0 1rem;
}

.brand-subsection {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand-subsection:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.subsection-intro {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
}

/* Logo */
.logo-showcase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.logo-card {
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.logo-dark {
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.logo-light { background: #FFFFFF; }

.logo-img {
  max-width: 120px;
  height: auto;
  margin-bottom: 1rem;
}

.logo-img.inverted { filter: invert(1); }

.logo-label {
  display: block;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.logo-light .logo-label { color: rgba(0, 0, 0, 0.6); }

.logo-rules {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.5rem;
  border-radius: 10px;
}

.logo-rules p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

/* Colors */
.colors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.color-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.color-swatch {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  flex-shrink: 0;
}

.color-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
}

.color-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #FFFFFF;
}

.color-hex {
  font-family: monospace;
  font-size: 0.85rem;
  color: #00C9A7;
}

.color-use {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Typography */
.typo-cards {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.typo-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.typo-preview {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.typo-preview.montserrat { font-family: 'Montserrat', sans-serif; }
.typo-preview.quicksand { font-family: 'Quicksand', sans-serif; }

.typo-sample { font-size: 1.8rem; font-weight: 700; color: #FFFFFF; }
.typo-alphabet { font-size: 0.7rem; color: rgba(255, 255, 255, 0.5); letter-spacing: 0.1em; }
.typo-numbers { font-size: 0.9rem; color: #00C9A7; }

.typo-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
}

.typo-weight { font-size: 0.85rem; color: #0066FF; font-weight: 600; }
.typo-usage { font-size: 0.85rem; color: rgba(255, 255, 255, 0.6); }
.typo-link { font-size: 0.85rem; color: #00C9A7; text-decoration: none; }
.typo-link:hover { text-decoration: underline; }

.typo-hierarchy {
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 12px;
}

.typo-hierarchy h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.hierarchy-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.hierarchy-item:last-child { border-bottom: none; }

.h1-demo { font-family: 'Montserrat', sans-serif; font-size: 1.5rem; font-weight: 700; }
.h2-demo { font-family: 'Montserrat', sans-serif; font-size: 1.2rem; font-weight: 700; }
.h3-demo { font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 600; }
.body-demo { font-family: 'Quicksand', sans-serif; font-size: 0.95rem; }

.hierarchy-item span:last-child {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
}

/* Buttons */
.buttons-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn-demo {
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary-demo {
  background: linear-gradient(135deg, #0066FF, #00A8E8);
  border: none;
  color: white;
}

.btn-primary-demo:hover { transform: scale(1.05); }

.btn-secondary-demo {
  background: #00C9A7;
  border: none;
  color: #0A0A0A;
}

.btn-secondary-demo:hover { background: #00FFD1; }

.btn-outline-demo {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-outline-demo:hover { border-color: #00C9A7; color: #00C9A7; }

/* Glass Demo */
.glass-demo { margin-bottom: 1.5rem; }

.glass-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.glass-card p {
  margin: 0 0 0.5rem;
  font-weight: 600;
}

.glass-card code {
  font-size: 0.8rem;
  color: #00C9A7;
  line-height: 1.6;
}

/* Glow */
.glow-showcase {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.glow-item {
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
}

.glow-item span {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
}

.glow-blue:hover { box-shadow: 0 0 25px rgba(0, 102, 255, 0.5); }
.glow-green:hover { box-shadow: 0 0 25px rgba(0, 201, 167, 0.5); }
.glow-cyan:hover { box-shadow: 0 0 25px rgba(0, 168, 232, 0.5); }
.glow-gold:hover { box-shadow: 0 0 25px rgba(255, 215, 0, 0.5); }

/* Downloads */
.downloads-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.download-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.download-card:hover {
  border-color: #00C9A7;
  transform: translateY(-3px);
}

.download-card svg { color: #00C9A7; }

.download-card span {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Toast */
.copy-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: #00C9A7;
  color: #0A0A0A;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1000;
}

.copy-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .annexes-page { padding: 5rem 1.25rem 3rem; }
  .section-header { padding: 1.25rem 1.5rem; }
  .section-content { padding: 0 1.5rem; }
  .annexe-section.is-open .section-content { padding: 0 1.5rem 1.5rem; }
  .capsules-grid { grid-template-columns: repeat(2, 1fr); }
  .tech-stack { grid-template-columns: 1fr; }
  .credits-grid { grid-template-columns: 1fr; }
  .figma-link, .canva-link { flex-direction: column; text-align: center; gap: 1rem; }
  .figma-arrow, .canva-arrow { display: none; }
  .logo-showcase { grid-template-columns: 1fr; }
  .colors-grid { grid-template-columns: 1fr; }
  .typo-card { grid-template-columns: 1fr; }
  .glow-showcase { grid-template-columns: repeat(2, 1fr); }
  .downloads-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .section-header h2 { font-size: 1rem; }
}
</style>
