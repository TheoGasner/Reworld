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
          En 2024, le rewilding progresse : Rewilding Europe restaure déjà 
          1 million d'hectares. L'UE impose 20% de restauration d'ici 2030.
          Résultat : bien-être en hausse, biodiversité qui revient.
        </p>
        
        <!-- Ticker Stats - Données réelles -->
        <div class="hero-ticker">
          <div class="ticker-item">
            <span class="ticker-value green">1M ha</span>
            <span class="ticker-label">Rewilding Europe</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value cyan">20%</span>
            <span class="ticker-label">Objectif UE 2030</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value yellow">+40%</span>
            <span class="ticker-label">Bien-être nature</span>
          </div>
        </div>

        <button class="cta-btn" @click="scrollToSystem">
          <span>Découvrir le système</span>
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
            <p><strong>Rewilding Europe</strong> restaure déjà 1 million d'hectares dans 9 pays. 
            L'<strong>EU Nature Restoration Law</strong> (2024) impose 20% de restauration d'ici 2030. 
            Études <strong>Université d'Exeter</strong> : 2h/semaine en nature = +40% bien-être mental.</p>
          </div>

          <!-- 3 Piliers - Données réelles -->
          <div class="pillars-container">
            <div class="pillar" :class="{ 'active': activePillar >= 1 }">
              <div class="pillar-icon">🌍</div>
              <div class="pillar-content">
                <h4>1 million d'hectares restaurés</h4>
                <p>Rewilding Europe (9 pays)</p>
              </div>
            </div>
            <div class="pillar" :class="{ 'active': activePillar >= 2 }">
              <div class="pillar-icon">📜</div>
              <div class="pillar-content">
                <h4>20% restauration obligatoire 2030</h4>
                <p>EU Nature Restoration Law</p>
              </div>
            </div>
            <div class="pillar" :class="{ 'active': activePillar >= 3 }">
              <div class="pillar-icon">🧘</div>
              <div class="pillar-content">
                <h4>2h/semaine = +40% bien-être</h4>
                <p>Étude Université Exeter</p>
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
              <span class="data-value">150M</span>
              <span class="data-label">arbres/an (Ecosia)</span>
            </div>
            <div class="tree-data data-right">
              <span class="data-value">+30%</span>
              <span class="data-label">espèces revenues</span>
            </div>
            <div class="tree-data data-top">
              <span class="data-value">9 pays</span>
              <span class="data-label">Rewilding Europe</span>
            </div>
            <div class="tree-data data-bottom">
              <span class="data-value">2h/sem</span>
              <span class="data-label">dose nature santé</span>
            </div>
            
            <!-- Particules photosynthèse -->
            <div class="photo-particle" v-for="n in 12" :key="'photo-'+n" :style="getPhotoStyle(n)"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Dashboard Biodiversité - Données Réelles -->
    <section class="dashboard-section" ref="dashboardSection">
      <div class="dashboard-bg"></div>
      
      <h2 class="section-title centered">La nature <span class="highlight">qui revient</span></h2>
      
      <div class="dashboard-grid">
        <!-- Card Rewilding Europe -->
        <div class="data-card card-green" :class="{ 'visible': cardsVisible }">
          <div class="card-icon">🌍</div>
          <div class="card-header">
            <span class="card-label">Rewilding Europe</span>
          </div>
          <div class="card-value">
            <span class="value-main green">1M ha</span>
          </div>
          <div class="earth-visual">
            <div class="earth-circle">
              <div class="earth-fill" :style="{ height: '40%' }"></div>
              <span class="earth-icon">🦌</span>
            </div>
          </div>
          <p class="card-text">9 pays européens, retour des grands herbivores</p>
          <span class="card-source">Source: rewildingeurope.com</span>
        </div>

        <!-- Card Ecosia -->
        <div class="data-card card-cyan" :class="{ 'visible': cardsVisible }" style="--delay: 0.2s">
          <div class="card-icon">🌳</div>
          <div class="card-header">
            <span class="card-label">Arbres plantés Ecosia</span>
          </div>
          <div class="card-value">
            <span class="value-main cyan">200M+</span>
          </div>
          <div class="species-visual">
            <svg class="curve-svg" viewBox="0 0 200 80">
              <path class="curve-up" d="M0 70 Q50 50 100 35 Q150 20 200 5" />
            </svg>
            <span class="curve-label">Croissance exponentielle ↗</span>
          </div>
          <p class="card-text">1 recherche = 1 arbre, 35+ pays</p>
          <span class="card-source">Source: ecosia.org/counter</span>
        </div>

        <!-- Card Bien-être Nature -->
        <div class="data-card card-yellow" :class="{ 'visible': cardsVisible }" style="--delay: 0.4s">
          <div class="card-icon">🧘</div>
          <div class="card-header">
            <span class="card-label">Effet Nature (étude Exeter)</span>
          </div>
          <div class="card-value">
            <span class="value-main yellow">+40%</span>
          </div>
          <div class="wellbeing-meter">
            <div class="meter-fill" :style="{ width: '40%' }"></div>
            <div class="meter-markers">
              <span>😔</span><span>😊</span><span>🌟</span>
            </div>
          </div>
          <p class="card-text">2h/semaine en nature = bien-être durable</p>
          <span class="card-source">Source: Scientific Reports 2019</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Test Connexion Nature (simple et réaliste) -->
    <section class="simulator-section" ref="simulatorSection">
      <div class="simulator-bg"></div>
      
      <h2 class="section-title centered">Teste ta <span class="highlight">connexion nature</span></h2>
      
      <div class="simulator-container">
        <!-- Question 1: Temps en nature -->
        <div class="test-card">
          <div class="test-card-icon">🌲</div>
          <h3>Temps passé en nature par semaine</h3>
          <p class="test-hint">Forêt, parc, jardin, ballade...</p>
          <div class="choice-toggle">
            <button 
              class="choice-btn" 
              :class="{ 'active': userInputs.natureTime === 0 }"
              @click="userInputs.natureTime = 0"
            >
              &lt;30 min
            </button>
            <button 
              class="choice-btn" 
              :class="{ 'active': userInputs.natureTime === 1 }"
              @click="userInputs.natureTime = 1"
            >
              30min-2h
            </button>
            <button 
              class="choice-btn kind" 
              :class="{ 'active': userInputs.natureTime === 2 }"
              @click="userInputs.natureTime = 2"
            >
              2h+ ✓
            </button>
          </div>
          <p class="test-source">Étude Exeter : 2h/semaine = seuil de bien-être</p>
        </div>

        <!-- Question 2: Contact avec le vivant -->
        <div class="test-card">
          <div class="test-card-icon">🦋</div>
          <h3>Contact avec le vivant</h3>
          <p class="test-hint">Animaux, plantes, jardinage...</p>
          <div class="choice-toggle">
            <button 
              class="choice-btn" 
              :class="{ 'active': userInputs.livingContact === 0 }"
              @click="userInputs.livingContact = 0"
            >
              Rarement
            </button>
            <button 
              class="choice-btn" 
              :class="{ 'active': userInputs.livingContact === 1 }"
              @click="userInputs.livingContact = 1"
            >
              Parfois
            </button>
            <button 
              class="choice-btn kind" 
              :class="{ 'active': userInputs.livingContact === 2 }"
              @click="userInputs.livingContact = 2"
            >
              Souvent
            </button>
          </div>
        </div>

        <!-- Question 3: Actions écologiques -->
        <div class="test-card">
          <div class="test-card-icon">🌱</div>
          <h3>Actions pour la nature</h3>
          <p class="test-hint">Tri, achats locaux, dons, bénévolat...</p>
          <div class="choice-toggle">
            <button 
              class="choice-btn" 
              :class="{ 'active': userInputs.ecoActions === 0 }"
              @click="userInputs.ecoActions = 0"
            >
              Aucune
            </button>
            <button 
              class="choice-btn" 
              :class="{ 'active': userInputs.ecoActions === 1 }"
              @click="userInputs.ecoActions = 1"
            >
              1-2
            </button>
            <button 
              class="choice-btn kind" 
              :class="{ 'active': userInputs.ecoActions === 2 }"
              @click="userInputs.ecoActions = 2"
            >
              3+
            </button>
          </div>
        </div>

        <!-- Bouton Calcul -->
        <button class="calc-btn" @click="calculateNatureScore">
          <span class="calc-text">🌿 DÉCOUVRIR MON SCORE NATURE</span>
        </button>

        <!-- Résultats simplifiés -->
        <div class="calc-results" v-if="showResults">
          <div class="result-network">
            <div class="network-pulse"></div>
            <div class="result-main">
              <span class="result-value" :class="getNatureClass(results.score)">{{ results.score }}/100</span>
              <span class="result-label">Score Connexion Nature</span>
            </div>
          </div>
          
          <div class="result-impact">
            <p class="impact-text">{{ results.message }}</p>
            <p class="impact-stat">📊 <strong>{{ results.tip }}</strong></p>
          </div>

          <div class="result-actions">
            <a :href="results.actionUrl" target="_blank" class="save-btn primary">
              <span>{{ results.actionText }}</span>
            </a>
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

      <!-- Compteur Global - Données Ecosia réelles -->
      <div class="global-counter">
        <div class="counter-content">
          <span class="counter-label">Arbres plantés (Ecosia)</span>
          <span class="counter-value green">{{ formatNumber(liveCounter.trees) }}+</span>
        </div>
        <div class="counter-divider"></div>
        <div class="counter-content">
          <span class="counter-label">CO₂ capturé/an</span>
          <span class="counter-value cyan">{{ formatNumber(liveCounter.co2) }} t</span>
        </div>
      </div>

      <!-- Navigation Capsules -->
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

    // Données utilisateur - Test Connexion Nature
    const userInputs = reactive({ 
      natureTime: null,
      livingContact: null, 
      ecoActions: null 
    })
    const results = reactive({ 
      score: 0, 
      message: '', 
      tip: '',
      actionText: '',
      actionUrl: ''
    })

    // Compteur live (données réelles)
    const liveCounter = reactive({
      trees: 200000000, // 200M+ arbres Ecosia
      co2: 5000000 // 5M tonnes CO2/an
    })

    // Actions avec liens réels
    const actions = [
      {
        icon: '🔍',
        title: 'Rechercher avec Ecosia',
        description: '200M+ arbres plantés. Chaque recherche finance la reforestation dans 35+ pays.',
        cta: 'ecosia.org',
        url: 'https://www.ecosia.org'
      },
      {
        icon: '🦌',
        title: 'Soutenir Rewilding Europe',
        description: '1 million d\'hectares restaurés, retour des grands herbivores en Europe.',
        cta: 'rewildingeurope.com',
        url: 'https://rewildingeurope.com/support-us/'
      },
      {
        icon: '🌲',
        title: 'Rejoindre la LPO',
        description: 'Ligue pour la Protection des Oiseaux : refuges, comptages, actions locales.',
        cta: 'lpo.fr',
        url: 'https://www.lpo.fr/s-engager-a-nos-cotes'
      }
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

    // Helper classe score nature
    const getNatureClass = (score) => {
      if (score >= 80) return 'excellent'
      if (score >= 50) return 'moderate'
      return 'low'
    }

    // Calcul score connexion nature (basé sur étude Exeter)
    const calculateNatureScore = () => {
      // Score basé sur 3 critères (chacun 0-2 points, total 0-6)
      const rawScore = (userInputs.natureTime || 0) + (userInputs.livingContact || 0) + (userInputs.ecoActions || 0)
      const score = Math.round((rawScore / 6) * 100)
      
      // Messages personnalisés basés sur étude Exeter
      let message = ''
      let tip = ''
      let actionText = ''
      let actionUrl = ''
      
      if (score >= 80) {
        message = '🌟 Excellent ! Tu as une connexion forte avec la nature.'
        tip = '+40% bien-être mental selon l\'étude Exeter (2h+/semaine)'
        actionText = '🦌 Soutenir Rewilding Europe →'
        actionUrl = 'https://rewildingeurope.com/support-us/'
      } else if (score >= 50) {
        message = '🌿 Bonne base ! Tu peux encore renforcer ta connexion.'
        tip = 'Objectif : atteindre 2h/semaine en nature pour le seuil de bien-être'
        actionText = '🔍 Passer sur Ecosia →'
        actionUrl = 'https://www.ecosia.org'
      } else {
        message = '🌱 Déconnecté(e) de la nature — c\'est courant en ville !'
        tip = 'Commence par 30 min/semaine dans un parc. +15% humeur en 1 mois.'
        actionText = '🌲 Trouver un espace vert près de toi →'
        actionUrl = 'https://www.geoportail.gouv.fr/donnees/espaces-verts'
      }
      
      results.score = score
      results.message = message
      results.tip = tip
      results.actionText = actionText
      results.actionUrl = actionUrl
      showResults.value = true
    }

    // Actions handler
    const handleAction = (action) => {
      if (action.url) {
        window.open(action.url, '_blank')
      }
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
      userInputs, results, liveCounter, actions,
      // Méthodes
      getLeafStyle, getDotStyle, getStarStyle, getFallingLeafStyle,
      getPhotoStyle, getNatureDotStyle, getNatureClass,
      scrollToSystem, calculateNatureScore, handleAction, formatNumber
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
.capsule-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 20;
}

.nav-capsule {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white-60);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  cursor: pointer;
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
  background: linear-gradient(180deg, #071a0f 0%, #0a2515 100%);
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

/* Test Cards - Quiz Connexion Nature */
.test-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.test-card-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.test-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.test-hint {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.85rem;
  color: var(--white-60);
  margin-bottom: 1rem;
}

.test-source {
  font-family: 'Quicksand', sans-serif;
  font-size: 0.75rem;
  color: var(--vert-clair);
  margin-top: 0.75rem;
  opacity: 0.8;
}

.choice-toggle {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.choice-btn {
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-family: 'Quicksand', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white-80);
  cursor: pointer;
  transition: all 0.3s ease;
}

.choice-btn:hover {
  border-color: var(--vert-clair);
  color: var(--white);
}

.choice-btn.active {
  background: rgba(34, 197, 94, 0.2);
  border-color: var(--vert-clair);
  color: var(--vert-clair);
}

.choice-btn.kind.active {
  background: rgba(34, 197, 94, 0.3);
  border-color: var(--vert-clair);
  color: var(--white);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
}

/* Result Network */
.result-network {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.network-pulse {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px solid var(--vert-clair);
  border-radius: 50%;
  animation: networkPulse 2s ease-out infinite;
}

@keyframes networkPulse {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

.result-main {
  text-align: center;
  z-index: 1;
}

.result-value {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 800;
  color: var(--vert-clair);
  text-shadow: 0 0 30px var(--vert-glow);
}

.result-value.excellent {
  color: var(--vert-clair);
  text-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
}

.result-value.moderate {
  color: #f59e0b;
  text-shadow: 0 0 30px rgba(245, 158, 11, 0.5);
}

.result-value.low {
  color: #ef4444;
  text-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
}

.result-label {
  font-size: 1rem;
  color: var(--white-60);
}

.result-impact {
  text-align: center;
  margin-bottom: 2rem;
}

.impact-text {
  font-size: 1.1rem;
  color: var(--white-80);
  margin-bottom: 0.5rem;
}

.impact-stat {
  font-size: 0.95rem;
  color: var(--vert-clair);
  margin-top: 0.5rem;
}

.result-actions {
  display: flex;
  justify-content: center;
}

.result-actions .save-btn.primary {
  display: inline-flex;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--vert-clair), var(--vert-foret));
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px var(--vert-glow);
}

.result-actions .save-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px var(--vert-glow);
}

/* Carte de localisation (conservée pour compatibilité) */
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
  background: linear-gradient(180deg, #0a2515 0%, #0d301a 50%, #071a0f 100%);
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
