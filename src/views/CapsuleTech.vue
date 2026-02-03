<template>
  <div class="capsule-page capsule-tech">
    <!-- Header Fixe -->
    <header class="capsule-header" :class="{ 'visible': headerVisible }">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 24 24" class="back-arrow"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>Retour</span>
      </router-link>
    </header>

    <!-- SECTION 1: Hero "Tech au Service du Lien" -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-bg">
        <div class="dots-layer">
          <div class="dot" v-for="n in 80" :key="'dot-'+n" :style="getDotStyle(n)"></div>
        </div>
        <div class="grid-overlay"></div>
        
        <!-- Réseau animé en fond -->
        <div class="network-bg">
          <svg class="network-svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="var(--cyan-main)" stop-opacity="1"/>
                <stop offset="100%" stop-color="var(--cyan-main)" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <g class="network-nodes">
              <circle v-for="node in networkNodes" :key="node.id" 
                :cx="node.x" :cy="node.y" :r="node.r" 
                fill="url(#nodeGlow)" class="network-node" :style="{ animationDelay: node.delay }"/>
            </g>
            <g class="network-lines">
              <line v-for="(line, i) in networkLines" :key="'line-'+i"
                :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
                stroke="var(--cyan-main)" stroke-width="1" stroke-opacity="0.3"
                class="network-line" :style="{ animationDelay: line.delay }"/>
            </g>
          </svg>
        </div>
        
        <div class="central-glow"></div>
      </div>

      <div class="hero-content" :class="{ 'show': showHero }">
        <span class="hero-tag">CAPSULE 03 — 2050</span>
        <h1 class="hero-title">
          <span class="title-line">Tech au Service</span>
          <span class="title-line gradient">du Lien</span>
        </h1>
        <p class="hero-narrative">
          2050. La technologie rapproche, elle n'isole plus. L'IA modère avec empathie, 
          les réseaux sociaux cultivent la bienveillance, et la VR crée des 
          communautés sans frontières.
        </p>
        
        <!-- Ticker Stats -->
        <div class="hero-ticker">
          <div class="ticker-item">
            <span class="ticker-value">−89%</span>
            <span class="ticker-label">Toxicité online</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value">+342%</span>
            <span class="ticker-label">Liens réels</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value">94%</span>
            <span class="ticker-label">Satisfaction</span>
          </div>
        </div>

        <button class="cta-btn" @click="scrollToSystem">
          <span>Découvrir le système</span>
          <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </button>

        <!-- Navigation Capsules -->
        <div class="capsule-nav">
          <router-link to="/capsule-demo" class="nav-capsule prev">← Capsule 02</router-link>
          <span class="nav-current">Capsule 03</span>
          <router-link to="/capsule-nature" class="nav-capsule next">Capsule 04 →</router-link>
        </div>
      </div>

      <!-- Connexions animées -->
      <div class="connection-particles">
        <div class="connection-line" v-for="n in 12" :key="'conn-'+n" :style="getConnectionStyle(n)"></div>
      </div>
    </section>

    <!-- SECTION 3: Le Système Lien Humain Global -->
    <section class="system-section" ref="systemSection">
      <div class="system-bg"></div>
      
      <div class="system-grid">
        <div class="system-text">
          <h2 class="section-title">Du Like Toxique au<br><span class="highlight">Lien Régénératif</span></h2>
          
          <div class="system-narrative">
            <p>2050. L'IA empathique modère 100 langues en temps réel. 
            Les réseaux sociaux ont fait de la bienveillance leur règle d'or.
            La VR permet des réunions tribales à l'échelle mondiale.</p>
          </div>

          <!-- 3 Piliers -->
          <div class="pillars-container">
            <div class="pillar" :class="{ 'active': activePillar >= 1 }">
              <div class="pillar-icon">🛡️</div>
              <div class="pillar-content">
                <h4>−89% toxicité</h4>
                <p>IA sentiment analysis 24/7</p>
              </div>
            </div>
            <div class="pillar" :class="{ 'active': activePillar >= 2 }">
              <div class="pillar-icon">🤝</div>
              <div class="pillar-content">
                <h4>+342% interactions réelles</h4>
                <p>AR/VR meetups mondiaux</p>
              </div>
            </div>
            <div class="pillar" :class="{ 'active': activePillar >= 3 }">
              <div class="pillar-icon">💙</div>
              <div class="pillar-content">
                <h4>94% satisfaction connexion</h4>
                <p>Tech au service de l'humain</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interface App LienHub -->
        <div class="app-visual">
          <div class="phone-frame">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <div class="app-header">
                <span class="app-logo">🔗</span>
                <span class="app-name">LienHub</span>
                <span class="app-badge">2050</span>
              </div>
              
              <div class="app-feed">
                <div class="feed-item positive">
                  <div class="feed-avatar">😊</div>
                  <div class="feed-content">
                    <span class="feed-user">Marie du quartier</span>
                    <p>"Merci à tous pour l'aide au jardin partagé !"</p>
                    <div class="feed-reactions">
                      <span>💚 247</span>
                      <span>🤗 89</span>
                    </div>
                  </div>
                </div>
                <div class="feed-item vr-meet">
                  <div class="feed-avatar">🌍</div>
                  <div class="feed-content">
                    <span class="feed-event">VR Meet — Quartier Mondial</span>
                    <p>Rejoins 12K voisins planétaires ce soir</p>
                    <button class="join-btn">Rejoindre →</button>
                  </div>
                </div>
                <div class="feed-item ai-coach">
                  <div class="feed-avatar">🤖</div>
                  <div class="feed-content">
                    <span class="feed-ai">IA Coach Relationnel</span>
                    <p>"Tu n'as pas contacté Paul depuis 2 semaines. Un café ?"</p>
                    <div class="ai-actions">
                      <button class="ai-btn">Proposer café</button>
                      <button class="ai-btn secondary">Plus tard</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Dashboard Métriques Connexion Mondiale -->
    <section class="dashboard-section" ref="dashboardSection">
      <div class="dashboard-bg"></div>
      
      <h2 class="section-title centered">Métriques Lien Humain <span class="highlight">2050</span></h2>
      
      <div class="dashboard-grid">
        <!-- Card Toxicité -->
        <div class="data-card" :class="{ 'visible': cardsVisible }">
          <div class="card-icon">🛡️</div>
          <div class="card-header">
            <span class="card-label">Toxicité Online Mondiale</span>
          </div>
          <div class="card-value">
            <span class="value-main cyan">−{{ animatedToxicity }}%</span>
          </div>
          <div class="card-comparison">
            <div class="comparison-bar">
              <div class="bar bar-old" style="width: 100%">
                <span>2024: 100%</span>
              </div>
              <div class="bar bar-new" :style="{ width: (100 - animatedToxicity) + '%' }">
                <span>2050: {{ 100 - animatedToxicity }}%</span>
              </div>
            </div>
          </div>
          <p class="card-text">IA bloque la haine 24/7 sur tous les réseaux</p>
          <span class="card-source">Source: Global Digital Wellbeing Index</span>
        </div>

        <!-- Card Liens Réels -->
        <div class="data-card card-green" :class="{ 'visible': cardsVisible }" style="--delay: 0.2s">
          <div class="card-icon">🤝</div>
          <div class="card-header">
            <span class="card-label">Liens Réels Créés</span>
          </div>
          <div class="card-value">
            <span class="value-main green">+{{ animatedLinks }}%</span>
          </div>
          <div class="links-visual">
            <div class="link-node" v-for="n in 8" :key="'link-'+n" :style="getLinkNodeStyle(n)"></div>
            <svg class="links-svg" viewBox="0 0 200 60">
              <line x1="25" y1="30" x2="175" y2="30" stroke="#10b981" stroke-width="2" stroke-dasharray="5,5" class="link-line"/>
            </svg>
          </div>
          <p class="card-text">8B humains connectés positivement via AR/VR</p>
          <span class="card-source">Source: Meta Connect Report</span>
        </div>

        <!-- Card Satisfaction -->
        <div class="data-card card-violet" :class="{ 'visible': cardsVisible }" style="--delay: 0.4s">
          <div class="card-icon">💙</div>
          <div class="card-header">
            <span class="card-label">Satisfaction Connexion</span>
          </div>
          <div class="card-value">
            <span class="value-main violet">{{ animatedSatisfaction }}%</span>
          </div>
          <div class="satisfaction-meter">
            <div class="meter-fill" :style="{ width: animatedSatisfaction + '%' }"></div>
            <div class="meter-markers">
              <span>0</span><span>50</span><span>100</span>
            </div>
          </div>
          <p class="card-text">Tech = service humain, pas addiction</p>
          <span class="card-source">Source: World Happiness Digital Report</span>
        </div>
      </div>
    </section>

    <!-- SECTION 5: Simulateur "Ton Lien Personnel" + Actions -->
    <section class="simulator-section" ref="simulatorSection">
      <div class="simulator-bg"></div>
      
      <h2 class="section-title centered">Calcule ton <span class="highlight">impact lien humain</span></h2>
      
      <div class="simulator-container">
        <div class="sim-inputs">
          <!-- Réseaux actuels -->
          <div class="sim-card">
            <div class="sim-card-icon">📱</div>
            <h3>Mes réseaux actuels</h3>
            <div class="toxicity-counter">
              <label>Niveau toxicité perçue</label>
              <div class="toxicity-slider">
                <input type="range" v-model="userInputs.toxicity" min="0" max="100">
                <span class="toxicity-value" :class="getToxicityClass(userInputs.toxicity)">
                  {{ userInputs.toxicity }}%
                </span>
              </div>
            </div>
          </div>

          <!-- Interactions -->
          <div class="sim-card">
            <div class="sim-card-icon">💬</div>
            <h3>Mes interactions/semaine</h3>
            <div class="interactions-slider">
              <input type="range" v-model="userInputs.interactions" min="0" max="50">
              <span class="interactions-value">{{ userInputs.interactions }}</span>
            </div>
            <p class="slider-hint">Messages, appels, rencontres</p>
          </div>

          <!-- Choix 2050 -->
          <div class="sim-card">
            <div class="sim-card-icon">🔮</div>
            <h3>Mon choix 2050</h3>
            <div class="choice-toggle">
              <button 
                class="choice-btn toxic" 
                :class="{ 'active': userInputs.choice === 'toxic' }"
                @click="userInputs.choice = 'toxic'"
              >
                😤 Toxique
              </button>
              <button 
                class="choice-btn kind" 
                :class="{ 'active': userInputs.choice === 'kind' }"
                @click="userInputs.choice = 'kind'"
              >
                💚 Bienveillant
              </button>
            </div>
          </div>
        </div>

        <!-- Bouton Calcul -->
        <button class="calc-btn" @click="calculateLink" :disabled="!userInputs.choice">
          <span>VOIR MON LIEN GLOBAL →</span>
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <!-- Résultats -->
        <div class="calc-results" v-if="showResults">
          <div class="result-network">
            <div class="network-pulse"></div>
            <div class="result-main">
              <span class="result-value">{{ results.links }}</span>
              <span class="result-label">liens réels créés</span>
            </div>
          </div>
          
          <div class="result-impact">
            <p class="impact-text">
              Ta bienveillance × 8B = <strong>−{{ results.toxicityReduced }}M tonnes CO₂ social</strong>
            </p>
          </div>

          <button class="save-btn" @click="saveProfile">
            💾 Sauvegarder mon profil lien REWORLD
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 6: Actions Concrètes -->
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
          <span class="counter-label">Humains connectés positivement</span>
          <span class="counter-value">{{ formatNumber(liveCounter.connected) }}</span>
        </div>
        <div class="counter-divider"></div>
        <div class="counter-content">
          <span class="counter-label">Toxicité éliminée</span>
          <span class="counter-value">−{{ liveCounter.toxicityReduced }}%</span>
        </div>
      </div>

      <!-- CTA Capsule suivante -->
      <div class="next-capsule">
        <router-link to="/capsule-nature" class="next-capsule-btn">
          <span>Capsule suivante</span>
          <span class="next-title">Nature Reconnectée</span>
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
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
  name: 'CapsuleTech',
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
    const activePillar = ref(0)
    const cardsVisible = ref(false)
    const showResults = ref(false)

    // Données animées
    const animatedToxicity = ref(0)
    const animatedLinks = ref(0)
    const animatedSatisfaction = ref(0)

    // Données utilisateur
    const userInputs = reactive({ 
      toxicity: 60, 
      interactions: 15, 
      choice: null 
    })
    const results = reactive({ links: 0, toxicityReduced: 0 })

    // Compteur live
    const liveCounter = reactive({
      connected: 4892156,
      toxicityReduced: 89
    })

    // Actions
    const actions = [
      {
        icon: '🔕',
        title: 'Désactiver notifs toxiques',
        description: 'Paramètre tes réseaux pour filtrer le négatif. Garde uniquement les interactions qui t\'élèvent.',
        cta: 'Configurer maintenant',
        action: 'notifications'
      },
      {
        icon: '💚',
        title: 'Rejoindre groupes positifs',
        description: 'Trouve des communautés bienveillantes sur Discord, Telegram ou localement.',
        cta: 'Trouver ma tribu',
        action: 'groups'
      },
      {
        icon: '🥽',
        title: 'Tester VR meetup',
        description: 'Essaie une rencontre virtuelle avec des inconnus du monde entier via VRChat ou Horizon.',
        cta: 'Essayer gratuitement',
        action: 'vr'
      }
    ]

    // Pré-génération des styles pour animations fluides
    const dotStyles = Array.from({ length: 80 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${4 + Math.random() * 8}px`,
      '--duration': `${3 + Math.random() * 4}s`,
      '--delay': `${Math.random() * 5}s`
    }))

    const starStyles = Array.from({ length: 100 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${1 + Math.random() * 2}px`,
      '--duration': `${2 + Math.random() * 3}s`,
      '--delay': `${Math.random() * 5}s`
    }))

    const connectionStyles = Array.from({ length: 12 }, (_, i) => ({
      '--angle': `${i * 30}deg`,
      '--length': `${100 + Math.random() * 150}px`,
      '--delay': `${i * 0.2}s`,
      '--duration': `${2 + Math.random() * 2}s`
    }))

    const linkNodeStyles = Array.from({ length: 8 }, (_, i) => ({
      '--x': `${10 + i * 12}%`,
      '--delay': `${i * 0.1}s`
    }))

    // Network nodes pour section 2
    const networkNodes = [
      { id: 1, x: 100, y: 200, r: 8, delay: '0s' },
      { id: 2, x: 200, y: 100, r: 6, delay: '0.2s' },
      { id: 3, x: 300, y: 250, r: 10, delay: '0.4s' },
      { id: 4, x: 400, y: 150, r: 7, delay: '0.6s' },
      { id: 5, x: 500, y: 300, r: 9, delay: '0.8s' },
      { id: 6, x: 600, y: 180, r: 6, delay: '1s' },
      { id: 7, x: 700, y: 250, r: 8, delay: '1.2s' },
      { id: 8, x: 250, y: 350, r: 5, delay: '1.4s' },
      { id: 9, x: 450, y: 80, r: 7, delay: '1.6s' },
      { id: 10, x: 550, y: 350, r: 6, delay: '1.8s' }
    ]

    const networkLines = [
      { x1: 100, y1: 200, x2: 200, y2: 100, delay: '0.5s' },
      { x1: 200, y1: 100, x2: 300, y2: 250, delay: '0.7s' },
      { x1: 300, y1: 250, x2: 400, y2: 150, delay: '0.9s' },
      { x1: 400, y1: 150, x2: 500, y2: 300, delay: '1.1s' },
      { x1: 500, y1: 300, x2: 600, y2: 180, delay: '1.3s' },
      { x1: 600, y1: 180, x2: 700, y2: 250, delay: '1.5s' },
      { x1: 100, y1: 200, x2: 250, y2: 350, delay: '1.7s' },
      { x1: 400, y1: 150, x2: 450, y2: 80, delay: '1.9s' },
      { x1: 500, y1: 300, x2: 550, y2: 350, delay: '2.1s' },
      { x1: 300, y1: 250, x2: 250, y2: 350, delay: '2.3s' }
    ]

    // Helpers visuels
    const getDotStyle = (n) => dotStyles[n - 1] || dotStyles[0]
    const getStarStyle = (n) => starStyles[n - 1] || starStyles[0]
    const getConnectionStyle = (n) => connectionStyles[n - 1] || connectionStyles[0]
    const getLinkNodeStyle = (n) => linkNodeStyles[n - 1] || linkNodeStyles[0]

    const getToxicityClass = (value) => {
      if (value < 30) return 'low'
      if (value < 70) return 'medium'
      return 'high'
    }

    // Scroll
    const scrollToSystem = () => {
      systemSection.value?.scrollIntoView({ behavior: 'smooth' })
    }

    // Calcul lien humain
    const calculateLink = () => {
      const multiplier = userInputs.choice === 'kind' ? 1 : 0.3
      const links = Math.round(userInputs.interactions * 342 / 100 * multiplier)
      const toxicityReduced = Math.round((100 - userInputs.toxicity) * 0.89 * multiplier)
      
      results.links = links
      results.toxicityReduced = toxicityReduced
      showResults.value = true

      // Animation propagation
      setTimeout(() => {
        liveCounter.connected += links
      }, 500)
    }

    // Sauvegarde profil
    const saveProfile = () => {
      const profile = JSON.parse(localStorage.getItem('reworld-lien') || '{}')
      profile.links = (profile.links || 0) + results.links
      profile.toxicityReduced = results.toxicityReduced
      profile.lastUpdate = new Date().toISOString()
      localStorage.setItem('reworld-lien', JSON.stringify(profile))
      alert('Profil lien sauvegardé ! 💚')
    }

    // Actions handler
    const handleAction = (action) => {
      console.log('Action:', action.action)
      // Redirect ou modal selon l'action
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

      // System section - piliers
      if (systemSection.value) {
        const systemTop = systemSection.value.offsetTop
        if (scrollY > systemTop - windowHeight * 0.5) {
          setTimeout(() => { activePillar.value = 1 }, 200)
          setTimeout(() => { activePillar.value = 2 }, 600)
          setTimeout(() => { activePillar.value = 3 }, 1000)
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
    const animateMetrics = () => {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const eased = 1 - Math.pow(1 - progress, 3)

        animatedToxicity.value = Math.round(89 * eased)
        animatedLinks.value = Math.round(342 * eased)
        animatedSatisfaction.value = Math.round(94 * eased)

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
      headerVisible, showHero, activePillar, cardsVisible, showResults,
      // Données
      animatedToxicity, animatedLinks, animatedSatisfaction,
      userInputs, results, liveCounter, actions,
      networkNodes, networkLines,
      // Méthodes
      getDotStyle, getStarStyle, getConnectionStyle, getLinkNodeStyle, getToxicityClass,
      scrollToSystem, calculateLink, saveProfile, handleAction, formatNumber
    }
  }
}
</script>

<style scoped>
/* ==========================================
   VARIABLES
   ========================================== */
.capsule-tech {
  --cyan-main: #06b6d4;
  --cyan-glow: rgba(6, 182, 212, 0.4);
  --cyan-dark: #0891b2;
  --navy-hero: #0a0a2e;
  --navy-deep: #050510;
  --points-bleu: #3b82f6;
  --green-valid: #10b981;
  --violet-accent: #8b5cf6;
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
  color: var(--cyan-main);
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
  background: linear-gradient(180deg, var(--navy-hero) 0%, var(--navy-deep) 100%);
}

/* Dots animés (style tes screenshots) */
.dots-layer {
  position: absolute;
  inset: 0;
}

.dot {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: var(--points-bleu);
  border-radius: 50%;
  opacity: 0.6;
  animation: dotsPulse var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes dotsPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Réseau animé en fond */
.network-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
}

.network-bg .network-svg {
  width: 100%;
  max-width: 900px;
  height: auto;
}

.network-node {
  animation: nodePulse 3s ease-in-out infinite;
}

@keyframes nodePulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.network-line {
  animation: lineDraw 2s ease-out forwards;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
}

@keyframes lineDraw {
  to { stroke-dashoffset: 0; }
}

.central-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
}

/* Connexions animées */
.connection-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  pointer-events: none;
}

.connection-line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--length);
  height: 2px;
  background: linear-gradient(90deg, var(--cyan-main), transparent);
  transform-origin: left center;
  transform: rotate(var(--angle));
  opacity: 0;
  animation: connectionFade var(--duration) var(--delay) ease-in-out infinite;
}

@keyframes connectionFade {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.6; }
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
  background: linear-gradient(135deg, var(--cyan-main) 0%, #0ea5e9 50%, var(--points-bleu) 100%);
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
  color: var(--cyan-main);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.ticker-label {
  font-size: 0.85rem;
  color: var(--white-60);
}

.ticker-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, var(--cyan-main), transparent);
}

/* CTA Button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  background: linear-gradient(135deg, var(--cyan-main), var(--cyan-dark));
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 20px 40px var(--cyan-glow);
}

.cta-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px var(--cyan-glow);
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
  color: var(--cyan-main);
}

.nav-current {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cyan-main);
  padding: 0.5rem 1rem;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 20px;
}

/* ==========================================
   SECTION 2: SYSTÈME LIEN HUMAIN
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
  color: var(--cyan-main);
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
  border-color: var(--cyan-main);
  background: rgba(6, 182, 212, 0.1);
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

/* App Visual */
.app-visual {
  display: flex;
  justify-content: center;
}

.phone-frame {
  width: 280px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 40px var(--cyan-glow);
}

.phone-notch {
  width: 100px;
  height: 25px;
  background: #000;
  border-radius: 0 0 20px 20px;
  margin: 0 auto 15px;
}

.phone-screen {
  background: #0a0a1a;
  border-radius: 28px;
  padding: 1rem;
  min-height: 450px;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
}

.app-logo {
  font-size: 1.5rem;
}

.app-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
}

.app-badge {
  margin-left: auto;
  padding: 0.25rem 0.5rem;
  background: var(--cyan-main);
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--white);
}

.app-feed {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feed-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.feed-avatar {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 50%;
}

.feed-content {
  flex: 1;
}

.feed-user, .feed-event, .feed-ai {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cyan-main);
  margin-bottom: 0.25rem;
}

.feed-content p {
  font-size: 0.8rem;
  color: var(--white-80);
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.feed-reactions {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--white-60);
}

.join-btn, .ai-btn {
  padding: 0.4rem 0.75rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.join-btn {
  background: var(--cyan-main);
  border: none;
  color: var(--white);
}

.ai-actions {
  display: flex;
  gap: 0.5rem;
}

.ai-btn {
  background: rgba(6, 182, 212, 0.2);
  border: 1px solid var(--cyan-main);
  color: var(--cyan-main);
}

.ai-btn.secondary {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--white-60);
}

/* ==========================================
   SECTION 4: DASHBOARD
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
  background: radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
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

.value-main.cyan {
  color: var(--cyan-main);
  text-shadow: 0 0 30px var(--cyan-glow);
}

.value-main.green {
  color: var(--green-valid);
  text-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
}

.value-main.violet {
  color: var(--violet-accent);
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
}

/* Comparison Bar */
.comparison-bar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.bar {
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--white);
  transition: width 1s ease-out;
}

.bar-old {
  background: rgba(255, 255, 255, 0.2);
}

.bar-new {
  background: linear-gradient(90deg, var(--cyan-main), var(--cyan-dark));
}

/* Links Visual */
.links-visual {
  position: relative;
  height: 60px;
  margin-bottom: 1rem;
}

.link-node {
  position: absolute;
  left: var(--x);
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background: var(--green-valid);
  border-radius: 50%;
  animation: linkPulse 2s var(--delay) ease-in-out infinite;
}

@keyframes linkPulse {
  0%, 100% { transform: translateY(-50%) scale(1); opacity: 0.5; }
  50% { transform: translateY(-50%) scale(1.3); opacity: 1; }
}

.links-svg {
  position: absolute;
  inset: 0;
}

.link-line {
  animation: linkDash 3s linear infinite;
}

@keyframes linkDash {
  to { stroke-dashoffset: -20; }
}

/* Satisfaction Meter */
.satisfaction-meter {
  position: relative;
  height: 12px;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 6px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--violet-accent), #a78bfa);
  border-radius: 6px;
  transition: width 1.5s ease-out;
}

.meter-markers {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: var(--white-40);
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
   SECTION 5: SIMULATEUR
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
  background: radial-gradient(ellipse at 50% 100%, rgba(6, 182, 212, 0.08) 0%, transparent 50%);
}

.simulator-container {
  position: relative;
  z-index: 10;
  max-width: 1000px;
  margin: 0 auto;
}

.sim-inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
}

.sim-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.sim-card-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.sim-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1.5rem;
}

/* Toxicity Slider */
.toxicity-counter label {
  display: block;
  font-size: 0.85rem;
  color: var(--white-60);
  margin-bottom: 0.75rem;
}

.toxicity-slider {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.toxicity-slider input[type="range"] {
  flex: 1;
  height: 8px;
  background: linear-gradient(90deg, var(--green-valid), #fbbf24, #ef4444);
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
}

.toxicity-slider input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--white);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.toxicity-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  min-width: 50px;
}

.toxicity-value.low { color: var(--green-valid); }
.toxicity-value.medium { color: #fbbf24; }
.toxicity-value.high { color: #ef4444; }

/* Interactions Slider */
.interactions-slider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.interactions-slider input[type="range"] {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
}

.interactions-slider input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--cyan-main);
  border-radius: 50%;
  cursor: pointer;
}

.interactions-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cyan-main);
  min-width: 40px;
}

.slider-hint {
  font-size: 0.8rem;
  color: var(--white-40);
}

/* Choice Toggle */
.choice-toggle {
  display: flex;
  gap: 0.75rem;
}

.choice-btn {
  flex: 1;
  padding: 1rem;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.choice-btn.toxic {
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.choice-btn.toxic.active,
.choice-btn.toxic:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
}

.choice-btn.kind {
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid rgba(16, 185, 129, 0.3);
  color: var(--green-valid);
}

.choice-btn.kind.active,
.choice-btn.kind:hover {
  background: rgba(16, 185, 129, 0.2);
  border-color: var(--green-valid);
}

/* Calc Button */
.calc-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
  margin: 2.5rem auto;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, var(--cyan-main), var(--cyan-dark));
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 10px 40px var(--cyan-glow);
}

.calc-btn:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px var(--cyan-glow);
}

.calc-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.calc-btn svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* Calc Results */
.calc-results {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 24px;
  padding: 2.5rem;
  margin-top: 2rem;
  animation: fadeInUp 0.6s ease-out;
  box-shadow: 0 4px 30px rgba(6, 182, 212, 0.1);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

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
  border: 2px solid var(--cyan-main);
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
  color: var(--cyan-main);
  text-shadow: 0 0 30px var(--cyan-glow);
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
}

.impact-text strong {
  color: var(--green-valid);
}

.save-btn {
  display: block;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid var(--violet-accent);
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--violet-accent);
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn:hover {
  background: var(--violet-accent);
  color: var(--white);
}

/* ==========================================
   SECTION 6: ACTIONS
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
  background: radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
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
  background: rgba(6, 182, 212, 0.1);
  border-color: var(--cyan-main);
  box-shadow: 0 25px 60px rgba(6, 182, 212, 0.2);
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
  color: var(--cyan-main);
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
  color: var(--cyan-main);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.counter-divider {
  width: 1px;
  height: 50px;
  background: linear-gradient(180deg, transparent, var(--cyan-main), transparent);
}

/* Next Capsule */
.next-capsule {
  position: relative;
  z-index: 10;
  text-align: center;
  margin-bottom: 5rem;
}

.next-capsule-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem 4rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 24px;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.next-capsule-btn:hover {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(16, 185, 129, 0.2);
}

.next-capsule-btn span:first-child {
  font-size: 0.8rem;
  color: var(--white-60);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.next-capsule-btn .next-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--green-valid);
}

.next-capsule-btn svg {
  width: 24px;
  height: 24px;
  stroke: var(--green-valid);
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
  
  .app-visual {
    order: -1;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .sim-inputs {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 3rem auto;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
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
}

@media (max-width: 480px) {
  .hero-section,
  .vision-section,
  .system-section,
  .dashboard-section,
  .simulator-section,
  .actions-section {
    padding: 4rem 1rem;
  }
  
  .value-main {
    font-size: 3rem;
  }
  
  .phone-frame {
    width: 260px;
  }
}
</style>
