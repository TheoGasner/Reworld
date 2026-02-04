<template>
  <div class="brand-page">
    <!-- Header -->
    <header class="brand-header">
      <router-link to="/" class="back-link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Retour
      </router-link>
      <h1 class="brand-page-title">Identité Visuelle</h1>
    </header>

    <!-- Hero Section -->
    <section class="brand-hero">
      <div class="brand-hero-content">
        <h2 class="brand-main-title">REWORLD</h2>
        <p class="brand-subtitle">Brand Guidelines</p>
        <p class="brand-tagline">Réenchanter le monde, une action à la fois.</p>
      </div>
    </section>

    <!-- Logo Section -->
    <section class="brand-section">
      <div class="section-header">
        <span class="section-number">01</span>
        <h2 class="section-title">Logo</h2>
      </div>
      
      <div class="logo-showcase">
        <div class="logo-card logo-primary">
          <img src="/assets/images/logo-reworld.svg" alt="Logo REWORLD" class="logo-img">
          <span class="logo-label">Logo Principal</span>
          <p class="logo-desc">Utilisation sur fond sombre</p>
        </div>
        
        <div class="logo-card logo-light">
          <img src="/assets/images/logo-reworld.svg" alt="Logo REWORLD" class="logo-img" style="filter: invert(1);">
          <span class="logo-label">Version Inversée</span>
          <p class="logo-desc">Utilisation sur fond clair</p>
        </div>
      </div>

      <div class="logo-rules">
        <h3 class="rules-title">Règles d'utilisation</h3>
        <div class="rules-grid">
          <div class="rule-item">
            <span class="rule-icon">✓</span>
            <p>Zone de protection minimale : 20px autour du logo</p>
          </div>
          <div class="rule-item">
            <span class="rule-icon">✓</span>
            <p>Taille minimale : 80px de largeur</p>
          </div>
          <div class="rule-item rule-dont">
            <span class="rule-icon">✗</span>
            <p>Ne pas déformer ou étirer le logo</p>
          </div>
          <div class="rule-item rule-dont">
            <span class="rule-icon">✗</span>
            <p>Ne pas modifier les couleurs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="brand-section">
      <div class="section-header">
        <span class="section-number">02</span>
        <h2 class="section-title">Palette de Couleurs</h2>
      </div>

      <div class="colors-category">
        <h3 class="category-title">Couleurs Principales</h3>
        <div class="colors-grid">
          <div class="color-card" @click="copyColor('#0A0A0A')">
            <div class="color-swatch" style="background: #0A0A0A; border: 1px solid rgba(255,255,255,0.2);"></div>
            <div class="color-info">
              <span class="color-name">Noir Profond</span>
              <span class="color-hex">#0A0A0A</span>
              <span class="color-rgb">RGB(10, 10, 10)</span>
              <span class="color-use">Fond principal</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#FFFFFF')">
            <div class="color-swatch" style="background: #FFFFFF;"></div>
            <div class="color-info">
              <span class="color-name">Blanc Pur</span>
              <span class="color-hex">#FFFFFF</span>
              <span class="color-rgb">RGB(255, 255, 255)</span>
              <span class="color-use">Textes, éléments</span>
            </div>
          </div>
        </div>
      </div>

      <div class="colors-category">
        <h3 class="category-title">Couleurs d'Accent</h3>
        <div class="colors-grid colors-accent">
          <div class="color-card" @click="copyColor('#0066FF')">
            <div class="color-swatch" style="background: #0066FF;"></div>
            <div class="color-info">
              <span class="color-name">Bleu Électrique</span>
              <span class="color-hex">#0066FF</span>
              <span class="color-rgb">RGB(0, 102, 255)</span>
              <span class="color-use">CTA, liens actifs</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#00C9A7')">
            <div class="color-swatch" style="background: #00C9A7;"></div>
            <div class="color-info">
              <span class="color-name">Vert Néon</span>
              <span class="color-hex">#00C9A7</span>
              <span class="color-rgb">RGB(0, 201, 167)</span>
              <span class="color-use">Actions, succès</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#00A8E8')">
            <div class="color-swatch" style="background: #00A8E8;"></div>
            <div class="color-info">
              <span class="color-name">Cyan Futuriste</span>
              <span class="color-hex">#00A8E8</span>
              <span class="color-rgb">RGB(0, 168, 232)</span>
              <span class="color-use">Technologie, info</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#FFD700')">
            <div class="color-swatch" style="background: #FFD700;"></div>
            <div class="color-info">
              <span class="color-name">Or Solaire</span>
              <span class="color-hex">#FFD700</span>
              <span class="color-rgb">RGB(255, 215, 0)</span>
              <span class="color-use">Highlights, premium</span>
            </div>
          </div>
        </div>
      </div>

      <div class="colors-category">
        <h3 class="category-title">Couleurs des Capsules</h3>
        <div class="colors-grid colors-capsules">
          <div class="color-card" @click="copyColor('#00C9A7')">
            <div class="color-swatch" style="background: linear-gradient(135deg, #00C9A7, #00FFD1);"></div>
            <div class="color-info">
              <span class="color-name">Capsule Éco</span>
              <span class="color-hex">#00C9A7 → #00FFD1</span>
              <span class="color-use">Économie régénératrice</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#0066FF')">
            <div class="color-swatch" style="background: linear-gradient(135deg, #0066FF, #00A8E8);"></div>
            <div class="color-info">
              <span class="color-name">Capsule Démo</span>
              <span class="color-hex">#0066FF → #00A8E8</span>
              <span class="color-use">Démocratie participative</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#8B5CF6')">
            <div class="color-swatch" style="background: linear-gradient(135deg, #8B5CF6, #A855F7);"></div>
            <div class="color-info">
              <span class="color-name">Capsule Tech</span>
              <span class="color-hex">#8B5CF6 → #A855F7</span>
              <span class="color-use">Tech au service du lien</span>
            </div>
          </div>
          
          <div class="color-card" @click="copyColor('#10B981')">
            <div class="color-swatch" style="background: linear-gradient(135deg, #10B981, #34D399);"></div>
            <div class="color-info">
              <span class="color-name">Capsule Nature</span>
              <span class="color-hex">#10B981 → #34D399</span>
              <span class="color-use">Nature reconnectée</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Toast notification -->
      <div class="copy-toast" :class="{ 'show': showToast }">
        {{ toastMessage }}
      </div>
    </section>

    <!-- Typography Section -->
    <section class="brand-section">
      <div class="section-header">
        <span class="section-number">03</span>
        <h2 class="section-title">Typographies</h2>
      </div>

      <div class="typo-showcase">
        <div class="typo-card">
          <div class="typo-preview montserrat">
            <span class="typo-sample">Montserrat</span>
            <span class="typo-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
            <span class="typo-alphabet">abcdefghijklmnopqrstuvwxyz</span>
            <span class="typo-numbers">0123456789</span>
          </div>
          <div class="typo-info">
            <h3 class="typo-name">Montserrat</h3>
            <span class="typo-weight">Bold / 800</span>
            <p class="typo-usage">Utilisée pour tous les titres, headings et éléments d'impact. Style géométrique et moderne qui évoque le futurisme.</p>
            <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" class="typo-link">
              Télécharger sur Google Fonts →
            </a>
          </div>
        </div>

        <div class="typo-card">
          <div class="typo-preview quicksand">
            <span class="typo-sample">Quicksand</span>
            <span class="typo-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
            <span class="typo-alphabet">abcdefghijklmnopqrstuvwxyz</span>
            <span class="typo-numbers">0123456789</span>
          </div>
          <div class="typo-info">
            <h3 class="typo-name">Quicksand</h3>
            <span class="typo-weight">Regular / Medium</span>
            <p class="typo-usage">Utilisée pour le texte courant, paragraphes et contenus. Arrondie et accessible, elle apporte de la chaleur humaine.</p>
            <a href="https://fonts.google.com/specimen/Quicksand" target="_blank" class="typo-link">
              Télécharger sur Google Fonts →
            </a>
          </div>
        </div>
      </div>

      <div class="typo-hierarchy">
        <h3 class="hierarchy-title">Hiérarchie Typographique</h3>
        <div class="hierarchy-list">
          <div class="hierarchy-item">
            <span class="h1-demo">H1 - Titre Principal</span>
            <span class="hierarchy-specs">Montserrat Bold • 48-64px • Line-height 1.1</span>
          </div>
          <div class="hierarchy-item">
            <span class="h2-demo">H2 - Titre de Section</span>
            <span class="hierarchy-specs">Montserrat Bold • 32-40px • Line-height 1.2</span>
          </div>
          <div class="hierarchy-item">
            <span class="h3-demo">H3 - Sous-titre</span>
            <span class="hierarchy-specs">Montserrat SemiBold • 24-28px • Line-height 1.3</span>
          </div>
          <div class="hierarchy-item">
            <span class="body-demo">Body - Texte courant</span>
            <span class="hierarchy-specs">Quicksand Regular • 16-18px • Line-height 1.6</span>
          </div>
          <div class="hierarchy-item">
            <span class="caption-demo">Caption - Légendes</span>
            <span class="hierarchy-specs">Quicksand Medium • 12-14px • Line-height 1.4</span>
          </div>
        </div>
      </div>
    </section>

    <!-- UI Elements Section -->
    <section class="brand-section">
      <div class="section-header">
        <span class="section-number">04</span>
        <h2 class="section-title">Éléments UI</h2>
      </div>

      <div class="ui-category">
        <h3 class="category-title">Boutons</h3>
        <div class="buttons-showcase">
          <button class="btn-primary-demo">
            <span>Bouton Principal</span>
            <div class="btn-glow"></div>
          </button>
          
          <button class="btn-secondary-demo">
            Bouton Secondaire
          </button>
          
          <button class="btn-outline-demo">
            Bouton Outline
          </button>
          
          <button class="btn-ghost-demo">
            Bouton Ghost
          </button>
        </div>
      </div>

      <div class="ui-category">
        <h3 class="category-title">Glassmorphism</h3>
        <div class="glass-showcase">
          <div class="glass-card">
            <h4>Carte Glass</h4>
            <p>background: rgba(255, 255, 255, 0.05)</p>
            <p>backdrop-filter: blur(10px)</p>
            <p>border: 1px solid rgba(255, 255, 255, 0.1)</p>
          </div>
          <div class="glass-code">
            <pre><code>.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}</code></pre>
          </div>
        </div>
      </div>

      <div class="ui-category">
        <h3 class="category-title">Effets Néon / Glow</h3>
        <div class="glow-showcase">
          <div class="glow-item glow-blue">
            <span>Glow Bleu</span>
            <code>box-shadow: 0 0 30px rgba(0, 102, 255, 0.5)</code>
          </div>
          <div class="glow-item glow-green">
            <span>Glow Vert</span>
            <code>box-shadow: 0 0 30px rgba(0, 201, 167, 0.5)</code>
          </div>
          <div class="glow-item glow-cyan">
            <span>Glow Cyan</span>
            <code>box-shadow: 0 0 30px rgba(0, 168, 232, 0.5)</code>
          </div>
          <div class="glow-item glow-gold">
            <span>Glow Or</span>
            <code>box-shadow: 0 0 30px rgba(255, 215, 0, 0.5)</code>
          </div>
        </div>
      </div>
    </section>

    <!-- Iconography Section -->
    <section class="brand-section">
      <div class="section-header">
        <span class="section-number">05</span>
        <h2 class="section-title">Iconographie</h2>
      </div>

      <div class="icons-info">
        <p class="icons-desc">REWORLD utilise un style d'icônes minimaliste avec des lignes fines (stroke: 2px) pour maintenir la cohérence visuelle futuriste.</p>
        
        <div class="icons-grid">
          <div class="icon-item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>Temps</span>
          </div>
          <div class="icon-item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span>Capsule</span>
          </div>
          <div class="icon-item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>Globe</span>
          </div>
          <div class="icon-item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Action</span>
          </div>
          <div class="icon-item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>Collectif</span>
          </div>
          <div class="icon-item">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
            </svg>
            <span>Énergie</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="brand-section download-section">
      <div class="section-header">
        <span class="section-number">06</span>
        <h2 class="section-title">Téléchargements</h2>
      </div>

      <div class="downloads-grid">
        <a href="/assets/images/logo-reworld.svg" download class="download-card">
          <div class="download-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </div>
          <span class="download-name">Logo SVG</span>
          <span class="download-format">Format vectoriel</span>
        </a>

        <div class="download-card coming-soon">
          <div class="download-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
          <span class="download-name">Brand Book PDF</span>
          <span class="download-format">Bientôt disponible</span>
        </div>

        <a href="https://www.figma.com/design/hup9Z4Mnn0EV1lYHkQvYYe/REWORLD?node-id=0-1&t=a2x72RLgLfMT1KpX-1" target="_blank" class="download-card">
          <div class="download-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
            </svg>
          </div>
          <span class="download-name">Figma</span>
          <span class="download-format">Design source</span>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="brand-footer">
      <p>© 2026 REWORLD - Identité Visuelle</p>
      <router-link to="/" class="footer-back">Retour à l'accueil</router-link>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'IdentiteVisuelle',
  setup() {
    const showToast = ref(false)
    const toastMessage = ref('')

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
      showToast,
      toastMessage,
      copyColor
    }
  }
}
</script>

<style scoped>
.brand-page {
  min-height: 100vh;
  background: #0A0A0A;
  color: #FFFFFF;
}

/* Header */
.brand-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.back-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #00C9A7;
}

.brand-page-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Hero */
.brand-hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  background: linear-gradient(180deg, rgba(0, 102, 255, 0.1) 0%, transparent 100%);
}

.brand-hero-content {
  text-align: center;
}

.brand-main-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 800;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, #FFFFFF 0%, #00C9A7 50%, #0066FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.brand-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.brand-tagline {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
}

/* Sections */
.brand-section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.section-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.1);
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

/* Logo Section */
.logo-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.logo-card {
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
}

.logo-primary {
  background: #0A0A0A;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-light {
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.logo-img {
  max-width: 200px;
  height: auto;
  margin-bottom: 1.5rem;
}

.logo-label {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.logo-light .logo-label {
  color: #0A0A0A;
}

.logo-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.logo-light .logo-desc {
  color: rgba(0, 0, 0, 0.6);
}

.logo-rules {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
}

.rules-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.rule-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 201, 167, 0.1);
  border-radius: 10px;
}

.rule-item.rule-dont {
  background: rgba(255, 100, 100, 0.1);
}

.rule-icon {
  font-size: 1.5rem;
}

.rule-item.rule-dont .rule-icon {
  color: #FF6464;
}

/* Colors Section */
.colors-category {
  margin-bottom: 3rem;
}

.category-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.color-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.color-swatch {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  flex-shrink: 0;
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.color-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
}

.color-hex {
  font-family: monospace;
  font-size: 0.95rem;
  color: #00C9A7;
}

.color-rgb {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.color-use {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.3rem;
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

/* Typography Section */
.typo-showcase {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.typo-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}

@media (max-width: 768px) {
  .typo-card {
    grid-template-columns: 1fr;
  }
}

.typo-preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.typo-preview.montserrat {
  font-family: 'Montserrat', sans-serif;
}

.typo-preview.quicksand {
  font-family: 'Quicksand', sans-serif;
}

.typo-sample {
  font-size: 2.5rem;
  font-weight: 700;
}

.typo-alphabet {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
}

.typo-numbers {
  font-size: 1.2rem;
  color: #00C9A7;
}

.typo-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.typo-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.typo-weight {
  font-size: 0.9rem;
  color: #00C9A7;
}

.typo-usage {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 1rem 0;
}

.typo-link {
  color: #0066FF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.typo-link:hover {
  color: #00A8E8;
}

/* Hierarchy */
.typo-hierarchy {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
}

.hierarchy-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hierarchy-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hierarchy-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.h1-demo {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 700;
}

.h2-demo {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.h3-demo {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
}

.body-demo {
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
}

.caption-demo {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
}

.hierarchy-specs {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: right;
}

/* UI Elements */
.ui-category {
  margin-bottom: 3rem;
}

.buttons-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

.btn-primary-demo {
  position: relative;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #0066FF, #00A8E8);
  border: none;
  border-radius: 50px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.btn-primary-demo:hover {
  transform: scale(1.05);
}

.btn-primary-demo .btn-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #0066FF, #00A8E8);
  border-radius: 50px;
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.btn-primary-demo:hover .btn-glow {
  opacity: 0.6;
}

.btn-secondary-demo {
  padding: 1rem 2rem;
  background: #00C9A7;
  border: none;
  border-radius: 50px;
  color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary-demo:hover {
  background: #00FFD1;
  transform: scale(1.05);
}

.btn-outline-demo {
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline-demo:hover {
  border-color: #00C9A7;
  color: #00C9A7;
}

.btn-ghost-demo {
  padding: 1rem 2rem;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.btn-ghost-demo:hover {
  color: white;
}

/* Glass */
.glass-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .glass-showcase {
    grid-template-columns: 1fr;
  }
}

.glass-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
}

.glass-card h4 {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 1rem;
}

.glass-card p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
}

.glass-code {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 1.5rem;
  overflow-x: auto;
}

.glass-code pre {
  margin: 0;
}

.glass-code code {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #00C9A7;
}

/* Glow */
.glow-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.glow-item {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
}

.glow-item span {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-bottom: 1rem;
}

.glow-item code {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

.glow-blue:hover {
  box-shadow: 0 0 30px rgba(0, 102, 255, 0.5);
}

.glow-green:hover {
  box-shadow: 0 0 30px rgba(0, 201, 167, 0.5);
}

.glow-cyan:hover {
  box-shadow: 0 0 30px rgba(0, 168, 232, 0.5);
}

.glow-gold:hover {
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
}

/* Icons */
.icons-info {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
}

.icons-desc {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
}

.icon-item:hover {
  color: #00C9A7;
}

.icon-item span {
  font-size: 0.85rem;
}

/* Downloads */
.download-section {
  border-bottom: none;
}

.downloads-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.download-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.download-card:hover {
  border-color: #00C9A7;
  transform: translateY(-5px);
}

.download-card.coming-soon {
  opacity: 0.5;
  cursor: not-allowed;
}

.download-icon {
  color: #00C9A7;
}

.download-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.download-format {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Footer */
.brand-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.footer-back {
  color: #00C9A7;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-back:hover {
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .brand-section {
    padding: 4rem 1.5rem;
  }
  
  .section-number {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .hierarchy-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .hierarchy-specs {
    text-align: left;
  }
  
  .brand-footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
