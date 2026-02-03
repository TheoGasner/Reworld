<template>
  <div class="capsule-page capsule-nature">
    <!-- Header Fixe -->
    <header class="capsule-header" :class="{ 'visible': headerVisible }">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 24 24" class="back-arrow"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>Retour</span>
      </router-link>
    </header>

    <!-- SECTION 1: Hero "Nature Reconnectée" -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-bg">
        <!-- Feuilles animées -->
        <div class="leaves-layer">
          <div class="leaf" v-for="n in 25" :key="'leaf-'+n" :style="getLeafStyle(n)">🍃</div>
        </div>
        <!-- Points verts (arbres/biodiversité) -->
        <div class="dots-layer">
          <div class="dot green" v-for="n in 60" :key="'dot-'+n" :style="getDotStyle(n)"></div>
        </div>
        <!-- Étoiles -->
        <div class="stars-layer">
          <div class="star" v-for="n in 80" :key="'star-'+n" :style="getStarStyle(n)"></div>
        </div>
        <div class="grid-overlay"></div>
        <!-- Racines cyan -->
        <div class="roots-container">
          <svg class="roots-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice">
            <path class="root root-1" d="M200 0 Q180 80 150 150 Q120 220 80 300" />
            <path class="root root-2" d="M200 0 Q220 80 250 150 Q280 220 320 300" />
            <path class="root root-3" d="M200 0 Q200 100 180 180 Q160 260 140 300" />
            <path class="root root-4" d="M200 0 Q200 100 220 180 Q240 260 260 300" />
          </svg>
        </div>
        <div class="central-glow green"></div>
      </div>

      <div class="hero-content" :class="{ 'show': showHero }">
        <span class="hero-tag">CAPSULE 04 — 2050</span>
        <h1 class="hero-title">
          <span class="title-line">Nature</span>
          <span class="title-line gradient">Reconnectée</span>
        </h1>
        <p class="hero-narrative">
          La tech numérique reconnecte 8 milliards d'humains à leur planète.
          Le rewilding a restauré 20% des terres, la VR permet des balades 
          en forêt amazonienne depuis chez soi.
        </p>
        
        <!-- Ticker Stats -->
        <div class="hero-ticker">
          <div class="ticker-item">
            <span class="ticker-value green">+20%</span>
            <span class="ticker-label">Terres restaurées</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value cyan">−50%</span>
            <span class="ticker-label">Extinction</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value yellow">94%</span>
            <span class="ticker-label">Bien-être nature</span>
          </div>
        </div>

        <button class="cta-btn" @click="scrollToSystem">
          <span>🌱 Plante ton arbre</span>
          <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </button>
      </div>

      <!-- Particules feuilles tombantes -->
      <div class="falling-leaves">
        <div class="falling-leaf" v-for="n in 10" :key="'fall-'+n" :style="getFallingLeafStyle(n)">🍂</div>
      </div>
    </section>

    <!-- SECTION 2: Système Reconnexion Nature-Tech -->
    <section class="system-section" ref="systemSection">
      <div class="system-bg">
        <div class="organic-waves">
          <svg class="wave-svg" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path class="wave wave-1" d="M0,200 Q300,100 600,200 T1200,200 V400 H0 Z" />
            <path class="wave wave-2" d="M0,250 Q300,150 600,250 T1200,250 V400 H0 Z" />
            <path class="wave wave-3" d="M0,300 Q300,200 600,300 T1200,300 V400 H0 Z" />
          </svg>
        </div>
        <div class="nature-particles" :class="{ 'active': treesGrown }">
          <div class="nature-dot" v-for="n in 20" :key="'ndot-'+n" :style="getNatureDotStyle(n)"></div>
        </div>
      </div>
      
      <div class="system-grid">
        <div class="system-text">
          <h2 class="section-title">Biodiversité +<br><span class="highlight">Tech Humaine</span></h2>
          
          <div class="system-narrative">
            <p>2050. Le rewilding a transformé l'Europe : 20% des terres restaurées, 
            1 trillion d'arbres plantés. La VR/AR permet à 8 milliards d'humains 
            de "marcher" dans des forêts virtuelles. Résultat : −50% stress, 
            +342% conscience écologique.</p>
          </div>

          <!-- 3 Piliers -->
          <div class="pillars-container">
            <div class="pillar" :class="{ 'active': activePillar >= 1 }">
              <div class="pillar-icon">🌍</div>
              <div class="pillar-content">
                <h4>+20% terres UE 2030→100% 2050</h4>
                <p>EU Nature Restoration Law</p>
              </div>
            </div>
            <div class="pillar" :class="{ 'active': activePillar >= 2 }">
              <div class="pillar-icon">💰</div>
              <div class="pillar-content">
                <h4>9T$ services écosystèmes</h4>
                <p>Valeur UN biodiversité</p>
              </div>
            </div>
            <div class="pillar" :class="{ 'active': activePillar >= 3 }">
              <div class="pillar-icon">🧘</div>
              <div class="pillar-content">
                <h4>VR nature = thérapie globale</h4>
                <p>Anti-burnout & bien-être</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Visualisation Arbre Écosystème -->
        <div class="ecosystem-visual">
          <div class="tree-network">
            <!-- Arbre SVG stylisé -->
            <svg class="tree-svg" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet">
              <!-- Racines -->
              <g class="tree-roots">
                <path class="root-path r1" d="M150 280 Q120 320 80 380" />
                <path class="root-path r2" d="M150 280 Q130 340 100 400" />
                <path class="root-path r3" d="M150 280 Q170 340 200 400" />
                <path class="root-path r4" d="M150 280 Q180 320 220 380" />
                <path class="root-path r5" d="M150 280 Q150 350 150 400" />
              </g>
              
              <!-- Tronc -->
              <g class="tree-trunk">
                <path class="trunk-path" d="M150 280 L150 180" />
                <path class="trunk-glow" d="M150 280 L150 180" />
              </g>
              
              <!-- Branches -->
              <g class="tree-branches">
                <path class="branch-path b1" d="M150 220 Q100 200 60 160" />
                <path class="branch-path b2" d="M150 220 Q200 200 240 160" />
                <path class="branch-path b3" d="M150 180 Q80 150 40 100" />
                <path class="branch-path b4" d="M150 180 Q220 150 260 100" />
                <path class="branch-path b5" d="M150 150 Q120 100 100 40" />
                <path class="branch-path b6" d="M150 150 Q180 100 200 40" />
                <path class="branch-path b7" d="M150 130 Q150 80 150 20" />
              </g>
              
              <!-- Feuilles/nodes -->
              <g class="tree-nodes">
                <circle class="leaf-node n1" cx="60" cy="160" r="8" />
                <circle class="leaf-node n2" cx="240" cy="160" r="8" />
                <circle class="leaf-node n3" cx="40" cy="100" r="10" />
                <circle class="leaf-node n4" cx="260" cy="100" r="10" />
                <circle class="leaf-node n5" cx="100" cy="40" r="12" />
                <circle class="leaf-node n6" cx="200" cy="40" r="12" />
                <circle class="leaf-node n7" cx="150" cy="20" r="14" />
              </g>
              
              <!-- Centre vital -->
              <circle class="tree-heart" cx="150" cy="200" r="15" />
              <circle class="tree-heart-glow" cx="150" cy="200" r="25" />
            </svg>
            
            <!-- Labels de données -->
            <div class="tree-data data-left">
              <span class="data-value">1T</span>
              <span class="data-label">arbres plantés</span>
            </div>
            <div class="tree-data data-right">
              <span class="data-value">+342%</span>
              <span class="data-label">biodiversité</span>
            </div>
            <div class="tree-data data-top">
              <span class="data-value">8B</span>
              <span class="data-label">connectés nature</span>
            </div>
            <div class="tree-data data-bottom">
              <span class="data-value">−50%</span>
              <span class="data-label">CO₂ atmosphérique</span>
            </div>
            
            <!-- Particules photosynthèse -->
            <div class="photo-particle" v-for="n in 12" :key="'photo-'+n" :style="getPhotoStyle(n)"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Dashboard Biodiversité Mondiale -->
    <section class="dashboard-section" ref="dashboardSection">
      <div class="dashboard-bg"></div>
      
      <h2 class="section-title centered">Métriques Nature <span class="highlight">2050</span></h2>
      
      <div class="dashboard-grid">
        <!-- Card Surfaces Restaurées -->
        <div class="data-card card-green" :class="{ 'visible': cardsVisible }">
          <div class="card-icon">🌍</div>
          <div class="card-header">
            <span class="card-label">Surfaces Restaurées UE</span>
          </div>
          <div class="card-value">
            <span class="value-main green">+{{ animatedLands }}%</span>
          </div>
          <div class="earth-visual">
            <div class="earth-circle">
              <div class="earth-fill" :style="{ height: animatedLands + '%' }"></div>
              <span class="earth-icon">🌏</span>
            </div>
          </div>
          <p class="card-text">100% écosystèmes restaurés d'ici 2050</p>
          <span class="card-source">Source: EU Nature Restoration Law</span>
        </div>

        <!-- Card Espèces Sauvées -->
        <div class="data-card card-cyan" :class="{ 'visible': cardsVisible }" style="--delay: 0.2s">
          <div class="card-icon">🦋</div>
          <div class="card-header">
            <span class="card-label">Extinction Évitée</span>
          </div>
          <div class="card-value">
            <span class="value-main cyan">−{{ animatedExtinction }}%</span>
          </div>
          <div class="species-visual">
            <svg class="curve-svg" viewBox="0 0 200 80">
              <path class="curve-down" d="M0 10 Q50 60 100 50 Q150 40 200 20" />
              <path class="curve-up" d="M0 10 Q50 30 100 25 Q150 20 200 10" />
            </svg>
            <span class="curve-label">Courbe redressée ↗</span>
          </div>
          <p class="card-text">10x moins d'extinctions qu'en 2024</p>
          <span class="card-source">Source: UN Biodiversity Report</span>
        </div>

        <!-- Card Bien-être Humain -->
        <div class="data-card card-yellow" :class="{ 'visible': cardsVisible }" style="--delay: 0.4s">
          <div class="card-icon">🧘</div>
          <div class="card-header">
            <span class="card-label">Bien-être Nature</span>
          </div>
          <div class="card-value">
            <span class="value-main yellow">{{ animatedWellbeing }}%</span>
          </div>
          <div class="wellbeing-meter">
            <div class="meter-fill" :style="{ width: animatedWellbeing + '%' }"></div>
            <div class="meter-markers">
              <span>😔</span><span>😊</span><span>🌟</span>
            </div>
          </div>
          <p class="card-text">VR nature = thérapie anti-burnout globale</p>
          <span class="card-source">Source: WHO Mental Health Report</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Simulateur "Ton Impact Biodiversité" -->
    <section class="simulator-section" ref="simulatorSection">
      <div class="simulator-bg"></div>
      
      <h2 class="section-title centered">Ton impact <span class="highlight">nature 2050</span></h2>
      
      <div class="simulator-container">
        <!-- Carte de localisation stylisée -->
        <div class="location-map">
          <div class="map-visual">
            <svg class="map-svg" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid meet">
              <!-- Grille de fond -->
              <defs>
                <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(34, 197, 94, 0.1)" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="400" height="250" fill="url(#mapGrid)"/>
              
              <!-- Zones vertes (forêts) -->
              <circle cx="80" cy="60" r="25" fill="rgba(34, 197, 94, 0.15)" class="forest-zone"/>
              <circle cx="320" cy="80" r="35" fill="rgba(34, 197, 94, 0.15)" class="forest-zone"/>
              <circle cx="180" cy="180" r="30" fill="rgba(34, 197, 94, 0.15)" class="forest-zone"/>
              <circle cx="300" cy="200" r="20" fill="rgba(34, 197, 94, 0.15)" class="forest-zone"/>
              
              <!-- Lignes de connexion -->
              <line x1="200" y1="125" x2="80" y2="60" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1" stroke-dasharray="4 4" class="conn-line"/>
              <line x1="200" y1="125" x2="320" y2="80" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1" stroke-dasharray="4 4" class="conn-line"/>
              <line x1="200" y1="125" x2="180" y2="180" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1" stroke-dasharray="4 4" class="conn-line"/>
              
              <!-- Point central (utilisateur) -->
              <circle cx="200" cy="125" r="8" fill="var(--cyan-main)" class="user-point"/>
              <circle cx="200" cy="125" r="20" fill="none" stroke="var(--cyan-main)" stroke-width="1" opacity="0.5" class="user-pulse"/>
              <circle cx="200" cy="125" r="35" fill="none" stroke="var(--cyan-main)" stroke-width="0.5" opacity="0.3" class="user-pulse delay"/>
            </svg>
            
            <!-- Label localisation -->
            <div class="map-location-label">
              <span class="location-icon">📍</span>
              <span class="location-text">{{ userInputs.location || 'Non défini' }}</span>
            </div>
          </div>
          
          <!-- Input localisation -->
          <div class="location-controls">
            <div class="location-input-wrapper">
              <input 
                type="text" 
                v-model="userInputs.location" 
                placeholder="Entre ta ville..."
                class="location-input"
              >
              <button class="detect-btn" @click="detectLocation" title="Détecter ma position">
                <svg viewBox="0 0 24 24" class="detect-icon">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                </svg>
              </button>
            </div>
            <p class="location-hint">Ta localisation aide à calculer l'impact local</p>
          </div>
        </div>

        <!-- Sélecteur d'engagement -->
        <div class="engagement-selector">
          <h3 class="selector-title">Choisis ton engagement mensuel</h3>
          
          <div class="tree-options">
            <button 
              v-for="option in treeOptions" 
              :key="option.value"
              class="tree-option"
              :class="{ 'active': userInputs.treesPerMonth === option.value }"
              @click="userInputs.treesPerMonth = option.value"
            >
              <span class="option-trees">
                <span class="tree-icon" v-for="t in Math.min(option.value, 5)" :key="t">🌱</span>
              </span>
              <span class="option-value">{{ option.value }}</span>
              <span class="option-label">{{ option.label }}</span>
              <span class="option-impact">{{ option.impact }}</span>
            </button>
          </div>
          
          <!-- Slider personnalisé -->
          <div class="custom-slider">
            <span class="slider-label">Ou personnalise :</span>
            <input 
              type="range" 
              v-model="userInputs.treesPerMonth" 
              min="1" 
              max="50"
              class="tree-slider"
            >
            <span class="slider-value">{{ userInputs.treesPerMonth }} arbres/mois</span>
          </div>
        </div>

        <!-- Mode d'action -->
        <div class="action-mode">
          <h3 class="selector-title">Comment veux-tu contribuer ?</h3>
          
          <div class="mode-options">
            <button 
              class="mode-btn" 
              :class="{ 'active': userInputs.tech === 'plant' }"
              @click="userInputs.tech = 'plant'"
            >
              <div class="mode-icon">🌳</div>
              <div class="mode-content">
                <span class="mode-title">Planter soi-même</span>
                <span class="mode-desc">Avec guide AR local</span>
              </div>
            </button>
            
            <button 
              class="mode-btn" 
              :class="{ 'active': userInputs.tech === 'sponsor' }"
              @click="userInputs.tech = 'sponsor'"
            >
              <div class="mode-icon">💚</div>
              <div class="mode-content">
                <span class="mode-title">Sponsoriser</span>
                <span class="mode-desc">1€ = 1 arbre planté</span>
              </div>
            </button>
            
            <button 
              class="mode-btn" 
              :class="{ 'active': userInputs.tech === 'vr' }"
              @click="userInputs.tech = 'vr'"
            >
              <div class="mode-icon">🥽</div>
              <div class="mode-content">
                <span class="mode-title">VR Nature</span>
                <span class="mode-desc">Forêts immersives</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Bouton Calcul -->
        <button class="calc-btn" @click="calculateImpact" :disabled="!userInputs.tech">
          <span class="calc-text">CALCULER MON IMPACT</span>
          <div class="calc-icon">
            <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
        </button>

        <!-- Résultats améliorés -->
        <div class="calc-results" v-if="showResults">
          <!-- Stats personnelles -->
          <div class="personal-stats">
            <div class="stat-card stat-trees">
              <div class="stat-visual">
                <div class="tree-counter">
                  <span class="counter-num">{{ results.trees }}</span>
                  <span class="counter-unit">arbres/an</span>
                </div>
              </div>
              <div class="stat-detail">
                <span class="stat-label">Ton engagement annuel</span>
                <span class="stat-location">à {{ userInputs.location || 'ta région' }}</span>
              </div>
            </div>
            
            <div class="stat-card stat-co2">
              <div class="stat-visual">
                <div class="co2-counter">
                  <span class="counter-num">{{ results.co2Personal }}</span>
                  <span class="counter-unit">kg CO₂/an</span>
                </div>
              </div>
              <div class="stat-detail">
                <span class="stat-label">Carbone absorbé</span>
                <span class="stat-equiv">≈ {{ Math.round(results.co2Personal / 12) }} trajets Paris-Lyon évités</span>
              </div>
            </div>
          </div>

          <!-- Impact global -->
          <div class="global-impact">
            <div class="impact-header">
              <span class="impact-label">Si tout le monde fait comme toi...</span>
            </div>
            
            <div class="impact-visual">
              <div class="impact-formula">
                <div class="formula-you">
                  <span class="you-icon">👤</span>
                  <span class="you-value">{{ userInputs.treesPerMonth }}/mois</span>
                </div>
                <span class="formula-x">×</span>
                <div class="formula-world">
                  <span class="world-icon">🌍</span>
                  <span class="world-value">8 milliards</span>
                </div>
              </div>
              
              <div class="impact-result">
                <div class="result-arrow">
                  <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                </div>
                <div class="result-values">
                  <div class="result-item">
                    <span class="result-num green">{{ results.co2Global }}</span>
                    <span class="result-label">Gt CO₂ absorbé/an</span>
                  </div>
                  <div class="result-divider"></div>
                  <div class="result-item">
                    <span class="result-num cyan">{{ results.forestEquivalent }}</span>
                    <span class="result-label">forêts amazoniennes</span>
                  </div>
                  <div class="result-divider"></div>
                  <div class="result-item">
                    <span class="result-num yellow">-0.{{ Math.min(Math.round(results.forestEquivalent * 1.5), 9) }}°C</span>
                    <span class="result-label">réchauffement évité</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions de sauvegarde -->
          <div class="result-actions">
            <button class="save-btn primary" @click="saveProfile">
              <span>💾 Sauvegarder mon engagement</span>
            </button>
            <button class="save-btn secondary" @click="shareResults">
              <span>📤 Partager mon impact</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: Actions Concrètes -->
    <section class="actions-section" ref="actionsSection">
      <div class="actions-bg"></div>
      
      <h2 class="section-title centered">Importer ce futur <span class="highlight">dans ton présent</span></h2>
      
      <div class="actions-grid">
        <div class="action-card" v-for="action in actions" :key="action.title" @click="handleAction(action)">
          <div class="action-icon">{{ action.icon }}</div>
          <h3 class="action-title">{{ action.title }}</h3>
          <p class="action-desc">{{ action.description }}</p>
          <span class="action-cta">{{ action.cta }} →</span>
        </div>
      </div>

      <!-- Compteur Global -->
      <div class="global-counter">
        <div class="counter-content">
          <span class="counter-label">Arbres plantés REWORLD</span>
          <span class="counter-value green">{{ formatNumber(liveCounter.trees) }}</span>
        </div>
        <div class="counter-divider"></div>
        <div class="counter-content">
          <span class="counter-label">CO₂ capturé</span>
          <span class="counter-value cyan">{{ liveCounter.co2 }} tonnes</span>
        </div>
      </div>
    </section>

    <!-- Navigation Capsules -->
    <section class="capsule-nav-section">
      <div class="capsule-nav">
        <router-link to="/capsule-tech" class="nav-capsule prev">← Capsule 03</router-link>
        <span class="nav-current">Capsule 04</span>
        <router-link to="/" class="nav-capsule next">Accueil →</router-link>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'CapsuleNature',
  components: { AppFooter },
  setup() {
    // Refs sections
    const heroSection = ref(null)
    const systemSection = ref(null)
    const dashboardSection = ref(null)
    const simulatorSection = ref(null)
    const actionsSection = ref(null)

    // États UI
    const headerVisible = ref(false)
    const showHero = ref(false)
    const treesGrown = ref(false)
    const activePillar = ref(0)
    const cardsVisible = ref(false)
    const showResults = ref(false)

    // Données animées
    const animatedLands = ref(0)
    const animatedExtinction = ref(0)
    const animatedWellbeing = ref(0)

    // Données utilisateur
    const userInputs = reactive({ 
      location: 'Montbéliard, France',
      treesPerMonth: 5, 
      tech: null 
    })
    const results = reactive({ 
      trees: 0, 
      co2Personal: 0, 
      co2Global: 0,
      forestEquivalent: 0
    })

    // Compteur live
    const liveCounter = reactive({
      trees: 2847563,
      co2: 71189
    })

    // Actions
    const actions = [
      {
        icon: '📍',
        title: 'Planter en AR',
        description: 'Visualise où planter un arbre près de chez toi avec la réalité augmentée.',
        cta: 'Lancer l\'app',
        action: 'ar-plant'
      },
      {
        icon: '💚',
        title: 'Dons rewilding',
        description: 'Contribue au rewilding européen. 1€ = 1 arbre planté.',
        cta: 'Faire un don',
        action: 'donate'
      },
      {
        icon: '🧘',
        title: 'VR nature therapy',
        description: 'Essaie une séance de méditation en forêt virtuelle. Gratuit.',
        cta: 'Méditer maintenant',
        action: 'vr-therapy'
      }
    ]

    // Options d'arbres prédéfinies
    const treeOptions = [
      { value: 1, label: 'Débutant', impact: '12 kg CO₂/an' },
      { value: 5, label: 'Engagé', impact: '60 kg CO₂/an' },
      { value: 10, label: 'Activiste', impact: '120 kg CO₂/an' },
      { value: 20, label: 'Héros', impact: '240 kg CO₂/an' }
    ]

    // Pré-génération des styles pour animations fluides
    const leafStyles = Array.from({ length: 25 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${20 + Math.random() * 20}px`,
      '--duration': `${4 + Math.random() * 4}s`,
      '--delay': `${Math.random() * 5}s`,
      '--rotate': `${Math.random() * 360}deg`
    }))

    const dotStyles = Array.from({ length: 60 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${4 + Math.random() * 8}px`,
      '--duration': `${3 + Math.random() * 4}s`,
      '--delay': `${Math.random() * 5}s`
    }))

    const starStyles = Array.from({ length: 80 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${1 + Math.random() * 2}px`,
      '--duration': `${2 + Math.random() * 3}s`,
      '--delay': `${Math.random() * 5}s`
    }))

    const fallingLeafStyles = Array.from({ length: 10 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--duration': `${6 + Math.random() * 6}s`,
      '--delay': `${Math.random() * 8}s`,
      '--swing': `${20 + Math.random() * 40}px`
    }))

    // Styles particules nature organiques
    const natureDotStyles = Array.from({ length: 20 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${3 + Math.random() * 6}px`,
      '--duration': `${3 + Math.random() * 4}s`,
      '--delay': `${Math.random() * 3}s`
    }))

    // Styles particules photosynthèse (pour l'arbre écosystème)
    const photoStyles = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2
      const radius = 60 + Math.random() * 80
      return {
        '--start-x': `${150 + Math.cos(angle) * 30}px`,
        '--start-y': `${200}px`,
        '--end-x': `${150 + Math.cos(angle) * radius}px`,
        '--end-y': `${60 + Math.random() * 100}px`,
        '--duration': `${3 + Math.random() * 2}s`,
        '--delay': `${i * 0.3}s`,
        '--size': `${4 + Math.random() * 4}px`
      }
    })

    const getPhotoStyle = (n) => photoStyles[n - 1] || photoStyles[0]
    const getNatureDotStyle = (n) => natureDotStyles[n - 1] || natureDotStyles[0]

    // Helpers visuels
    const getLeafStyle = (n) => leafStyles[n - 1] || leafStyles[0]
    const getDotStyle = (n) => dotStyles[n - 1] || dotStyles[0]
    const getStarStyle = (n) => starStyles[n - 1] || starStyles[0]
    const getFallingLeafStyle = (n) => fallingLeafStyles[n - 1] || fallingLeafStyles[0]

    // Scroll
    const scrollToSystem = () => {
      systemSection.value?.scrollIntoView({ behavior: 'smooth' })
    }

    // Détection localisation
    const detectLocation = () => {
      userInputs.location = 'Montbéliard, France (détecté)'
    }

    // Calcul impact biodiversité
    const calculateImpact = () => {
      const treesPerYear = userInputs.treesPerMonth * 12
      const co2PerTree = 25 // kg/an
      const co2Personal = treesPerYear * co2PerTree
      const co2GlobalGt = (co2Personal * 8e9) / 1e12
      
      results.trees = treesPerYear
      results.co2Personal = co2Personal
      results.co2Global = co2GlobalGt.toFixed(1)
      results.forestEquivalent = Math.round(co2GlobalGt / 2.2) // 2.2 Gt CO2/an par forêt amazonienne
      
      showResults.value = true

      // Animation propagation
      setTimeout(() => {
        liveCounter.trees += treesPerYear
        liveCounter.co2 += Math.round(co2Personal / 1000)
      }, 500)
    }

    // Sauvegarde profil
    const saveProfile = () => {
      const profile = JSON.parse(localStorage.getItem('reworld-nature') || '{}')
      profile.trees = (profile.trees || 0) + results.trees
      profile.co2 = (profile.co2 || 0) + results.co2Personal
      profile.location = userInputs.location
      profile.lastUpdate = new Date().toISOString()
      localStorage.setItem('reworld-nature', JSON.stringify(profile))
      alert('🌳 Engagement sauvegardé ! Tu fais partie du mouvement REWORLD.')
    }

    // Partage résultats
    const shareResults = () => {
      const text = `🌳 Mon impact REWORLD Nature 2050:\n\n` +
        `📍 ${userInputs.location}\n` +
        `🌱 ${results.trees} arbres/an\n` +
        `💨 ${results.co2Personal} kg CO₂ absorbé\n\n` +
        `Si 8 milliards de personnes font comme moi = ${results.co2Global} Gt CO₂/an absorbé!\n\n` +
        `Rejoins le mouvement → reworld.fr`
      
      if (navigator.share) {
        navigator.share({
          title: 'Mon impact REWORLD Nature',
          text: text,
          url: window.location.href
        })
      } else {
        navigator.clipboard.writeText(text)
        alert('📋 Texte copié ! Partage-le sur tes réseaux.')
      }
    }

    // Actions handler
    const handleAction = (action) => {
      console.log('Action:', action.action)
    }

    // Format nombre
    const formatNumber = (num) => {
      return new Intl.NumberFormat('fr-FR').format(num)
    }

    // Animations au scroll
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Header
      headerVisible.value = scrollY > 100

      // System section - arbres + piliers
      if (systemSection.value) {
        const systemTop = systemSection.value.offsetTop
        if (scrollY > systemTop - windowHeight * 0.7) {
          treesGrown.value = true
          setTimeout(() => { activePillar.value = 1 }, 300)
          setTimeout(() => { activePillar.value = 2 }, 700)
          setTimeout(() => { activePillar.value = 3 }, 1100)
        }
      }

      // Dashboard cards
      if (dashboardSection.value) {
        const dashTop = dashboardSection.value.offsetTop
        if (scrollY > dashTop - windowHeight * 0.6) {
          cardsVisible.value = true
          animateMetrics()
        }
      }
    }

    // Animation métriques
    let metricsAnimated = false
    const animateMetrics = () => {
      if (metricsAnimated) return
      metricsAnimated = true
      
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const eased = 1 - Math.pow(1 - progress, 3)

        animatedLands.value = Math.round(20 * eased)
        animatedExtinction.value = Math.round(50 * eased)
        animatedWellbeing.value = Math.round(94 * eased)

        if (step >= steps) clearInterval(timer)
      }, interval)
    }

    onMounted(() => {
      setTimeout(() => { showHero.value = true }, 300)
      setTimeout(() => { headerVisible.value = true }, 800)
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      // Refs
      heroSection, systemSection, dashboardSection, simulatorSection, actionsSection,
      // États
      headerVisible, showHero, treesGrown, activePillar, cardsVisible, showResults,
      // Données
      animatedLands, animatedExtinction, animatedWellbeing,
      userInputs, results, liveCounter, actions, treeOptions,
      // Méthodes
      getLeafStyle, getDotStyle, getStarStyle, getFallingLeafStyle,
      getPhotoStyle, getNatureDotStyle,
      scrollToSystem, detectLocation, calculateImpact, saveProfile, shareResults, handleAction, formatNumber
    }
  }
}
</script>

<style scoped>
/* ==========================================
   VARIABLES
   ========================================== */
.capsule-nature {
  --vert-foret: #15803d;
  --vert-clair: #22c55e;
  --vert-glow: rgba(21, 128, 61, 0.4);
  --cyan-main: #06b6d4;
  --cyan-glow: rgba(6, 182, 212, 0.4);
  --yellow-accent: #eab308;
  --yellow-glow: rgba(234, 179, 8, 0.4);
  --navy-hero: #0a0a2e;
  --navy-deep: #050510;
  --white: #ffffff;
  --white-80: rgba(255, 255, 255, 0.8);
  --white-60: rgba(255, 255, 255, 0.6);
  --white-40: rgba(255, 255, 255, 0.4);
}

.capsule-page {
  background: #000000;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ==========================================
   HEADER
   ========================================== */
.capsule-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 100;
  background: rgba(10, 10, 46, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.4s ease;
}

.capsule-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--white-80);
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--vert-clair);
}

.back-arrow {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* ==========================================
   SECTION 1: HERO
   ========================================== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--navy-hero) 0%, #071a0f 50%, var(--navy-deep) 100%);
}

/* Feuilles animées */
.leaves-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.leaf {
  position: absolute;
  left: var(--x);
  top: var(--y);
  font-size: var(--size);
  opacity: 0.4;
  transform: rotate(var(--rotate));
  animation: leafFloat var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes leafFloat {
  0%, 100% { transform: rotate(var(--rotate)) translateY(0) translateX(0); opacity: 0.3; }
  50% { transform: rotate(calc(var(--rotate) + 20deg)) translateY(-10px) translateX(5px); opacity: 0.6; }
}

/* Points verts */
.dots-layer {
  position: absolute;
  inset: 0;
}

.dot.green {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: var(--vert-clair);
  border-radius: 50%;
  opacity: 0.5;
  animation: dotsPulse var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes dotsPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.3); }
}

/* Étoiles */
.stars-layer {
  position: absolute;
  inset: 0;
}

.star {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: var(--white);
  border-radius: 50%;
  animation: starPulse var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes starPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(21, 128, 61, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(21, 128, 61, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Racines cyan */
.roots-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 300px;
  opacity: 0.6;
}

.roots-svg {
  width: 100%;
  height: 100%;
}

.root {
  fill: none;
  stroke: var(--cyan-main);
  stroke-width: 2;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: rootGrow 3s ease-out forwards;
}

.root-1 { animation-delay: 0.5s; }
.root-2 { animation-delay: 0.8s; }
.root-3 { animation-delay: 1.1s; }
.root-4 { animation-delay: 1.4s; }

@keyframes rootGrow {
  to { stroke-dashoffset: 0; }
}

.central-glow.green {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--vert-glow) 0%, transparent 70%);
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
}

/* Feuilles tombantes */
.falling-leaves {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.falling-leaf {
  position: absolute;
  left: var(--x);
  top: -50px;
  font-size: 24px;
  animation: fallDown var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes fallDown {
  0% { 
    transform: translateY(0) translateX(0) rotate(0deg); 
    opacity: 1;
  }
  100% { 
    transform: translateY(110vh) translateX(var(--swing)) rotate(720deg); 
    opacity: 0.3;
  }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 900px;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease-out;
}

.hero-content.show {
  opacity: 1;
  transform: translateY(0);
}

.hero-tag {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: var(--cyan-main);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.hero-title {
  margin-bottom: 2rem;
}

.title-line {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--white);
}

.title-line.gradient {
  background: linear-gradient(135deg, var(--vert-clair) 0%, var(--vert-foret) 50%, var(--cyan-main) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-narrative {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--white-80);
  max-width: 700px;
  margin: 0 auto 3rem;
}

/* Ticker Stats */
.hero-ticker {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.ticker-item {
  text-align: center;
}

.ticker-value {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
}

.ticker-value.green {
  color: var(--vert-clair);
  text-shadow: 0 0 20px var(--vert-glow);
}

.ticker-value.cyan {
  color: var(--cyan-main);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.ticker-value.yellow {
  color: var(--yellow-accent);
  text-shadow: 0 0 20px var(--yellow-glow);
}

.ticker-label {
  font-size: 0.85rem;
  color: var(--white-60);
}

.ticker-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, var(--vert-clair), transparent);
}

/* CTA Button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  background: linear-gradient(135deg, var(--vert-clair), var(--vert-foret));
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 20px 40px var(--vert-glow);
}

.cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px var(--vert-glow);
}

.cta-btn svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  transition: transform 0.3s ease;
}

.cta-btn:hover svg {
  transform: translateY(5px);
  animation: bounceDown 1.5s ease-in-out infinite;
}

@keyframes bounceDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

/* Navigation Capsules */
.capsule-nav-section {
  background: #0a0a0a;
  padding: 4rem 2rem;
  text-align: center;
}

.capsule-nav {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-capsule {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white-60);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-capsule:hover {
  color: var(--vert-clair);
}

.nav-current {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vert-clair);
  padding: 0.5rem 1rem;
  background: rgba(34, 197, 94, 0.1);
  border-radius: 20px;
}

/* ==========================================
   SECTION 2: SYSTÈME NATURE-TECH
   ========================================== */
.system-section {
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
}

.system-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--navy-deep) 0%, #0d1117 100%);
}

/* Ondes organiques */
.organic-waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.wave-svg {
  width: 100%;
  height: 100%;
}

.wave {
  fill: rgba(34, 197, 94, 0.05);
  animation: waveMove 8s ease-in-out infinite;
}

.wave.wave-1 {
  fill: rgba(34, 197, 94, 0.08);
  animation-delay: 0s;
}

.wave.wave-2 {
  fill: rgba(34, 197, 94, 0.05);
  animation-delay: -2s;
}

.wave.wave-3 {
  fill: rgba(34, 197, 94, 0.03);
  animation-delay: -4s;
}

@keyframes waveMove {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-2%); }
}

/* Particules nature */
.nature-particles {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s ease;
}

.nature-particles.active {
  opacity: 1;
}

.nature-dot {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: var(--vert-clair);
  border-radius: 50%;
  opacity: 0.4;
  animation: naturePulse var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes naturePulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.5); opacity: 0.6; }
}

.system-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.2;
}

.section-title.centered {
  text-align: center;
}

.section-title .highlight {
  color: var(--vert-clair);
}

.system-narrative {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--white-80);
  margin-bottom: 3rem;
}

/* Piliers */
.pillars-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pillar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  opacity: 0.4;
  transform: translateX(-20px);
  transition: all 0.5s ease;
}

.pillar.active {
  opacity: 1;
  transform: translateX(0);
  border-color: var(--vert-clair);
  background: rgba(34, 197, 94, 0.1);
}

.pillar-icon {
  font-size: 2rem;
}

.pillar-content h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.25rem;
}

.pillar-content p {
  font-size: 0.9rem;
  color: var(--white-60);
}

/* Ecosystem Tree Visual */
.ecosystem-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tree-network {
  position: relative;
  width: 300px;
  height: 400px;
}

.tree-svg {
  width: 100%;
  height: 100%;
}

/* Racines */
.root-path {
  fill: none;
  stroke: var(--vert-foret);
  stroke-width: 2;
  stroke-linecap: round;
  opacity: 0.6;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: rootGrow 2s ease-out forwards;
}

.root-path.r1 { animation-delay: 0s; }
.root-path.r2 { animation-delay: 0.2s; }
.root-path.r3 { animation-delay: 0.3s; }
.root-path.r4 { animation-delay: 0.4s; }
.root-path.r5 { animation-delay: 0.1s; }

@keyframes rootGrow {
  to { stroke-dashoffset: 0; }
}

/* Tronc */
.trunk-path {
  fill: none;
  stroke: var(--vert-clair);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: trunkGrow 1.5s ease-out 0.5s forwards;
}

.trunk-glow {
  fill: none;
  stroke: var(--vert-clair);
  stroke-width: 8;
  stroke-linecap: round;
  opacity: 0.2;
  filter: blur(4px);
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: trunkGrow 1.5s ease-out 0.5s forwards;
}

@keyframes trunkGrow {
  to { stroke-dashoffset: 0; }
}

/* Branches */
.branch-path {
  fill: none;
  stroke: var(--vert-clair);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: branchGrow 1.5s ease-out forwards;
}

.branch-path.b1 { animation-delay: 1s; }
.branch-path.b2 { animation-delay: 1.1s; }
.branch-path.b3 { animation-delay: 1.2s; }
.branch-path.b4 { animation-delay: 1.3s; }
.branch-path.b5 { animation-delay: 1.5s; }
.branch-path.b6 { animation-delay: 1.6s; }
.branch-path.b7 { animation-delay: 1.7s; }

@keyframes branchGrow {
  to { stroke-dashoffset: 0; }
}

/* Feuilles/Nodes */
.leaf-node {
  fill: var(--vert-clair);
  opacity: 0;
  animation: leafAppear 0.5s ease-out forwards, leafPulse 3s ease-in-out infinite;
}

.leaf-node.n1 { animation-delay: 1.8s, 2s; }
.leaf-node.n2 { animation-delay: 1.9s, 2.2s; fill: var(--cyan-main); }
.leaf-node.n3 { animation-delay: 2s, 2.4s; }
.leaf-node.n4 { animation-delay: 2.1s, 2.6s; fill: var(--cyan-main); }
.leaf-node.n5 { animation-delay: 2.2s, 2.8s; }
.leaf-node.n6 { animation-delay: 2.3s, 3s; fill: var(--yellow-accent); }
.leaf-node.n7 { animation-delay: 2.4s, 3.2s; fill: var(--yellow-accent); }

@keyframes leafAppear {
  from { opacity: 0; transform: scale(0); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes leafPulse {
  0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 5px currentColor); }
  50% { opacity: 1; filter: drop-shadow(0 0 15px currentColor); }
}

/* Centre vital */
.tree-heart {
  fill: var(--vert-clair);
  animation: heartPulse 2s ease-in-out infinite;
}

.tree-heart-glow {
  fill: var(--vert-clair);
  opacity: 0.3;
  filter: blur(8px);
  animation: heartGlow 2s ease-in-out infinite;
}

@keyframes heartPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.9; }
}

@keyframes heartGlow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

/* Labels de données */
.tree-data {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.tree-data.data-left {
  left: -60px;
  top: 35%;
}

.tree-data.data-right {
  right: -60px;
  top: 35%;
}

.tree-data.data-top {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.tree-data.data-bottom {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.data-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: var(--vert-clair);
}

.tree-data.data-right .data-value {
  color: var(--cyan-main);
}

.tree-data.data-top .data-value {
  color: var(--yellow-accent);
}

.data-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.6rem;
  color: var(--white-60);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

/* Particules photosynthèse */
.photo-particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: var(--vert-clair);
  border-radius: 50%;
  left: var(--start-x);
  top: var(--start-y);
  opacity: 0;
  animation: photoMove var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

.photo-particle:nth-child(2n) {
  background: var(--cyan-main);
}

.photo-particle:nth-child(3n) {
  background: var(--yellow-accent);
}

@keyframes photoMove {
  0% { 
    transform: translate(0, 0); 
    opacity: 0; 
  }
  20% { 
    opacity: 0.8; 
  }
  80% { 
    opacity: 0.8; 
  }
  100% { 
    transform: translate(
      calc(var(--end-x) - var(--start-x)), 
      calc(var(--end-y) - var(--start-y))
    ); 
    opacity: 0; 
  }
}

/* ==========================================
   SECTION 3: DASHBOARD
   ========================================== */
.dashboard-section {
  position: relative;
  padding: 8rem 2rem;
}

.dashboard-bg {
  position: absolute;
  inset: 0;
  background: #000000;
}

.dashboard-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.1) 0%, transparent 50%);
}

.dashboard-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 3rem auto;
}

.data-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: var(--delay, 0s);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.data-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-header {
  margin-bottom: 1rem;
}

.card-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white-60);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-value {
  margin-bottom: 1.5rem;
}

.value-main {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
}

.value-main.green {
  color: var(--vert-clair);
  text-shadow: 0 0 30px var(--vert-glow);
}

.value-main.cyan {
  color: var(--cyan-main);
  text-shadow: 0 0 30px var(--cyan-glow);
}

.value-main.yellow {
  color: var(--yellow-accent);
  text-shadow: 0 0 30px var(--yellow-glow);
}

/* Earth Visual */
.earth-visual {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.earth-circle {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.1);
  border: 2px solid var(--vert-clair);
  overflow: hidden;
}

.earth-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, var(--vert-clair), var(--vert-foret));
  transition: height 1.5s ease-out;
}

.earth-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  z-index: 1;
}

/* Curve Visual */
.species-visual {
  margin-bottom: 1rem;
}

.curve-svg {
  width: 100%;
  height: 60px;
}

.curve-down {
  fill: none;
  stroke: rgba(239, 68, 68, 0.5);
  stroke-width: 2;
  stroke-dasharray: 5, 5;
}

.curve-up {
  fill: none;
  stroke: var(--cyan-main);
  stroke-width: 3;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawCurve 2s ease-out 0.5s forwards;
}

@keyframes drawCurve {
  to { stroke-dashoffset: 0; }
}

.curve-label {
  display: block;
  text-align: center;
  font-size: 0.75rem;
  color: var(--cyan-main);
  font-weight: 600;
}

/* Wellbeing Meter */
.wellbeing-meter {
  position: relative;
  height: 16px;
  background: rgba(234, 179, 8, 0.2);
  border-radius: 8px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.wellbeing-meter .meter-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--yellow-accent), #fbbf24);
  border-radius: 8px;
  transition: width 1.5s ease-out;
}

.meter-markers {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 0 0.25rem;
}

.card-text {
  font-size: 0.9rem;
  color: var(--white-60);
  margin-bottom: 0.5rem;
}

.card-source {
  font-size: 0.75rem;
  font-style: italic;
  color: var(--white-40);
}

/* ==========================================
   SECTION 4: SIMULATEUR
   ========================================== */
.simulator-section {
  position: relative;
  padding: 8rem 2rem;
}

.simulator-bg {
  position: absolute;
  inset: 0;
  background: #000000;
}

.simulator-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 100%, rgba(34, 197, 94, 0.08) 0%, transparent 50%);
}

.simulator-container {
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 0 auto;
}

/* Carte de localisation */
.location-map {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 24px;
  padding: 2rem;
  margin: 3rem 0 2rem;
}

.map-visual {
  position: relative;
  margin-bottom: 1.5rem;
}

.map-svg {
  width: 100%;
  height: auto;
  max-height: 200px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
}

.forest-zone {
  animation: zonePulse 4s ease-in-out infinite;
}

.forest-zone:nth-child(2) { animation-delay: 1s; }
.forest-zone:nth-child(3) { animation-delay: 2s; }
.forest-zone:nth-child(4) { animation-delay: 3s; }

@keyframes zonePulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.3; }
}

.conn-line {
  animation: lineDash 3s linear infinite;
}

@keyframes lineDash {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -16; }
}

.user-point {
  filter: drop-shadow(0 0 10px var(--cyan-main));
}

.user-pulse {
  animation: userPulse 2s ease-out infinite;
}

.user-pulse.delay {
  animation-delay: 0.5s;
}

@keyframes userPulse {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(2); opacity: 0; }
}

.map-location-label {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.location-icon {
  font-size: 1rem;
}

.location-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white);
}

.location-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.location-input-wrapper {
  display: flex;
  gap: 0.5rem;
}

.location-input {
  flex: 1;
  padding: 0.875rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--white);
  font-family: 'Quicksand', sans-serif;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.location-input:focus {
  outline: none;
  border-color: var(--cyan-main);
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}

.location-input::placeholder {
  color: var(--white-40);
}

.detect-btn {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(6, 182, 212, 0.2);
  border: 1px solid var(--cyan-main);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.detect-btn:hover {
  background: var(--cyan-main);
}

.detect-icon {
  width: 24px;
  height: 24px;
  stroke: var(--cyan-main);
  stroke-width: 2;
  fill: var(--cyan-main);
  transition: all 0.3s ease;
}

.detect-btn:hover .detect-icon {
  stroke: var(--white);
  fill: var(--white);
}

.location-hint {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.75rem;
  color: var(--white-40);
  text-align: center;
}

/* Sélecteur d'engagement */
.engagement-selector {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.selector-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  margin-bottom: 1.5rem;
}

.tree-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tree-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tree-option:hover {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.05);
}

.tree-option.active {
  border-color: var(--vert-clair);
  background: rgba(34, 197, 94, 0.15);
  box-shadow: 0 0 20px var(--vert-glow);
}

.option-trees {
  display: flex;
  gap: 2px;
  font-size: 1rem;
}

.option-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--vert-clair);
}

.option-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.75rem;
  color: var(--white-60);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.option-impact {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.7rem;
  color: var(--white-40);
}

/* Slider personnalisé */
.custom-slider {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.slider-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.85rem;
  color: var(--white-60);
  white-space: nowrap;
}

.tree-slider {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  appearance: none;
  -webkit-appearance: none;
}

.tree-slider::-webkit-slider-track {
  height: 6px;
  background: linear-gradient(90deg, var(--vert-foret), var(--vert-clair));
  border-radius: 3px;
}

.tree-slider::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--white);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

.tree-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.slider-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--vert-clair);
  min-width: 120px;
  text-align: right;
}

/* Mode d'action */
.action-mode {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.mode-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.mode-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.mode-btn:hover {
  border-color: rgba(34, 197, 94, 0.3);
  background: rgba(34, 197, 94, 0.05);
}

.mode-btn.active {
  border-color: var(--vert-clair);
  background: rgba(34, 197, 94, 0.15);
  box-shadow: 0 0 20px var(--vert-glow);
}

.mode-icon {
  font-size: 2rem;
}

.mode-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mode-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
}

.mode-desc {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.75rem;
  color: var(--white-60);
}

/* Bouton calcul */
.calc-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, var(--vert-clair), var(--vert-foret));
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 10px 40px var(--vert-glow);
}

.calc-btn:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px var(--vert-glow);
}

.calc-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.calc-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.05em;
}

.calc-icon svg {
  width: 24px;
  height: 24px;
  stroke: var(--white);
  stroke-width: 2;
  fill: none;
}

/* Résultats */
.calc-results {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 24px;
  padding: 2.5rem;
  animation: fadeInUp 0.6s ease-out;
  box-shadow: 0 4px 30px rgba(34, 197, 94, 0.15);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Stats personnelles */
.personal-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-visual {
  margin-bottom: 1rem;
}

.tree-counter,
.co2-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter-num {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}

.stat-trees .counter-num {
  color: var(--vert-clair);
  text-shadow: 0 0 30px var(--vert-glow);
}

.stat-co2 .counter-num {
  color: var(--cyan-main);
  text-shadow: 0 0 30px var(--cyan-glow);
}

.counter-unit {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.85rem;
  color: var(--white-60);
  margin-top: 0.25rem;
}

.stat-detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white-80);
}

.stat-location,
.stat-equiv {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.75rem;
  color: var(--white-40);
}

/* Impact global */
.global-impact {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.15);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.impact-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.impact-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white-80);
}

.impact-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.impact-formula {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.formula-you,
.formula-world {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.you-icon,
.world-icon {
  font-size: 2rem;
}

.you-value,
.world-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
}

.formula-x {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  color: var(--white-40);
}

.impact-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.result-arrow {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 50%;
  animation: arrowBounce 1.5s ease-in-out infinite;
}

.result-arrow svg {
  width: 24px;
  height: 24px;
  stroke: var(--vert-clair);
  stroke-width: 2;
  fill: none;
}

@keyframes arrowBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.result-values {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.result-num {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
}

.result-num.green {
  color: var(--vert-clair);
}

.result-num.cyan {
  color: var(--cyan-main);
}

.result-num.yellow {
  color: var(--yellow-accent);
}

.result-label {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.75rem;
  color: var(--white-60);
  text-align: center;
}

.result-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
}

/* Actions résultats */
.result-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.save-btn {
  padding: 0.875rem 1.5rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn.primary {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid var(--vert-clair);
  color: var(--vert-clair);
}

.save-btn.primary:hover {
  background: var(--vert-clair);
  color: var(--white);
}

.save-btn.secondary {
  background: rgba(6, 182, 212, 0.2);
  border: 1px solid var(--cyan-main);
  color: var(--cyan-main);
}

.save-btn.secondary:hover {
  background: var(--cyan-main);
  color: var(--white);
}

/* ==========================================
   SECTION 5: ACTIONS
   ========================================== */
.actions-section {
  position: relative;
  padding: 8rem 2rem 6rem;
  background: linear-gradient(180deg, #0A0A0A 0%, #0d1117 50%, #0A0A0A 100%);
}

.actions-bg {
  position: absolute;
  inset: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.actions-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 400px;
  background: radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 70%);
}

.actions-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
}

.action-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.action-card:hover {
  transform: translateY(-10px);
  background: rgba(34, 197, 94, 0.1);
  border-color: var(--vert-clair);
  box-shadow: 0 25px 60px rgba(34, 197, 94, 0.2);
}

.action-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.action-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.75rem;
}

.action-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--white-80);
  margin-bottom: 1rem;
}

.action-cta {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vert-clair);
}

/* Global Counter */
.global-counter {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem 3rem;
  margin: 5rem auto;
  max-width: 650px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.counter-content {
  text-align: center;
}

.counter-label {
  display: block;
  font-size: 0.85rem;
  color: var(--white-60);
  margin-bottom: 0.5rem;
}

.counter-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
}

.counter-value.green {
  color: var(--vert-clair);
  text-shadow: 0 0 20px var(--vert-glow);
}

.counter-value.cyan {
  color: var(--cyan-main);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.counter-divider {
  width: 1px;
  height: 50px;
  background: linear-gradient(180deg, transparent, var(--vert-clair), transparent);
}

/* Back Home */
.back-home {
  position: relative;
  z-index: 10;
  text-align: center;
  margin-bottom: 5rem;
}

.back-home-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem 4rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(74, 122, 198, 0.3);
  border-radius: 24px;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.back-home-btn:hover {
  background: rgba(74, 122, 198, 0.1);
  border-color: rgba(74, 122, 198, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(74, 122, 198, 0.2);
}

.back-home-btn span:first-child {
  font-size: 0.8rem;
  color: var(--white-60);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.back-home-btn .home-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #4a7ac6;
}

.back-home-btn svg {
  width: 24px;
  height: 24px;
  stroke: #4a7ac6;
  stroke-width: 2;
  fill: none;
}

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 1024px) {
  .system-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .ecosystem-visual {
    order: -1;
  }
  
  .tree-network {
    width: 260px;
    height: 360px;
  }
  
  .tree-data.data-left,
  .tree-data.data-right {
    display: none;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .tree-options {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .mode-options {
    grid-template-columns: 1fr;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .personal-stats {
    grid-template-columns: 1fr;
  }
  
  .result-values {
    gap: 1rem;
  }
  
  .result-divider {
    width: 60px;
    height: 1px;
  }
}

@media (max-width: 768px) {
  .hero-ticker {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .ticker-divider {
    width: 60px;
    height: 1px;
  }
  
  .capsule-nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .global-counter {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .counter-divider {
    width: 60px;
    height: 1px;
  }
  
  .tree-options {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .map-svg {
    max-height: 150px;
  }
  
  .impact-formula {
    gap: 1rem;
  }
  
  .formula-you,
  .formula-world {
    flex-direction: row;
    gap: 0.5rem;
  }
  
  .you-icon,
  .world-icon {
    font-size: 1.5rem;
  }
  
  .result-num {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section,
  .system-section,
  .dashboard-section,
  .simulator-section,
  .actions-section {
    padding: 4rem 1rem;
  }
  
  .value-main {
    font-size: 3rem;
  }
  
  .tree-network {
    width: 220px;
    height: 320px;
  }
  
  .tree-data {
    padding: 0.35rem 0.5rem;
  }
  
  .data-value {
    font-size: 0.85rem;
  }
  
  .data-label {
    font-size: 0.5rem;
  }
  
  .location-map,
  .engagement-selector,
  .action-mode {
    padding: 1.25rem;
  }
  
  .tree-options {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  
  .tree-option {
    padding: 1rem 0.5rem;
  }
  
  .option-value {
    font-size: 1.25rem;
  }
  
  .custom-slider {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
  
  .slider-value {
    text-align: center;
    min-width: auto;
  }
  
  .counter-num {
    font-size: 2.5rem;
  }
  
  .result-actions {
    flex-direction: column;
  }
  
  .save-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
