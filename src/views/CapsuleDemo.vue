<template>
  <div class="capsule-page capsule-demo">
    <!-- Header Fixe -->
    <header class="capsule-header" :class="{ 'visible': headerVisible }">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 24 24" class="back-arrow"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>Retour</span>
      </router-link>
    </header>

    <!-- SECTION 1: Hero "Le Pouvoir du Citoyen" -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-bg">
        <div class="stars-layer">
          <div class="star" v-for="n in 100" :key="'star-'+n" :style="getStarStyle(n)"></div>
        </div>
        <div class="grid-overlay"></div>
        <div class="central-glow"></div>
      </div>

      <div class="hero-content" :class="{ 'show': showHero }">
        <span class="hero-tag">CAPSULE 02 — 2050</span>
        <h1 class="hero-title">
          <span class="title-line">Le Pouvoir</span>
          <span class="title-line gradient">du Citoyen</span>
        </h1>
        <p class="hero-narrative">
          Dans ce futur, chaque citoyen a une voix qui compte vraiment. 
          La démocratie n'est plus un spectacle, c'est une pratique quotidienne 
          pour 8 milliards d'êtres humains.
        </p>
        
        <!-- Ticker Stats -->
        <div class="hero-ticker">
          <div class="ticker-item">
            <span class="ticker-value">87%</span>
            <span class="ticker-label">Participation globale</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value">2.4M</span>
            <span class="ticker-label">Votes quotidiens</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value">0%</span>
            <span class="ticker-label">Corruption</span>
          </div>
        </div>

        <button class="cta-btn" @click="scrollToSystem">
          <span>Découvrir le système</span>
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Particules votes -->
      <div class="vote-particles">
        <div class="vote-particle" v-for="n in 20" :key="'vote-'+n" :style="getVoteStyle(n)">
          <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Le Système Participatif -->
    <section class="system-section" ref="systemSection">
      <div class="system-bg"></div>
      
      <div class="system-grid">
        <div class="system-text">
          <h2 class="section-title">Du vote quartier au<br><span class="highlight">Parlement Planétaire</span></h2>
          
          <div class="system-narrative">
            <p>Ton smartphone est devenu ton bulletin de vote quotidien. 
            Une IA traduit 7000 langues en temps réel, la blockchain garantit une transparence totale.</p>
            <p>Les priorités remontent naturellement : du quartier (247 votes) → à la ville (12K) → jusqu'à la planète (8B citoyens).</p>
          </div>

          <!-- Étapes animées -->
          <div class="steps-container">
            <div class="step" :class="{ 'active': activeStep >= 1 }">
              <div class="step-number">01</div>
              <div class="step-content">
                <h4>Vote local</h4>
                <p>"Budget parcs du quartier ?"</p>
                <span class="step-result">87% OUI</span>
              </div>
            </div>
            <div class="step-connector"></div>
            <div class="step" :class="{ 'active': activeStep >= 2 }">
              <div class="step-number">02</div>
              <div class="step-content">
                <h4>IA agrège</h4>
                <p>Top 3 priorités ville compilées</p>
                <span class="step-result">12K votes</span>
              </div>
            </div>
            <div class="step-connector"></div>
            <div class="step" :class="{ 'active': activeStep >= 3 }">
              <div class="step-number">03</div>
              <div class="step-content">
                <h4>Blockchain valide</h4>
                <p>Transparence totale garantie</p>
                <span class="step-result">0% corruption</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pyramide visuelle -->
        <div class="pyramid-visual">
          <div class="pyramid-container">
            <div class="pyramid-level level-global" :class="{ 'pulse': pyramidPulse === 4 }">
              <span class="level-label">🌍 Planète</span>
              <span class="level-value">8B citoyens</span>
            </div>
            <div class="pyramid-level level-country" :class="{ 'pulse': pyramidPulse === 3 }">
              <span class="level-label">🏛️ Pays</span>
              <span class="level-value">2.4M votes</span>
            </div>
            <div class="pyramid-level level-city" :class="{ 'pulse': pyramidPulse === 2 }">
              <span class="level-label">🏙️ Ville</span>
              <span class="level-value">12K décisions</span>
            </div>
            <div class="pyramid-level level-local" :class="{ 'pulse': pyramidPulse === 1 }">
              <span class="level-label">🏠 Quartier</span>
              <span class="level-value">247 votes</span>
            </div>
          </div>
          
          <!-- Connexions animées -->
          <div class="pyramid-connections">
            <div class="connection-line" v-for="n in 6" :key="'conn-'+n" :style="getConnectionStyle(n)"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Dashboard Métriques -->
    <section class="dashboard-section" ref="dashboardSection">
      <div class="dashboard-bg"></div>
      
      <h2 class="section-title centered">Chiffres Démocratie <span class="highlight">2050</span></h2>
      
      <div class="dashboard-grid">
        <!-- Card Participation -->
        <div class="data-card" :class="{ 'visible': cardsVisible }">
          <div class="card-icon">🗳️</div>
          <div class="card-header">
            <span class="card-label">Participation Mondiale</span>
          </div>
          <div class="card-value">
            <span class="value-main" ref="participationValue">{{ animatedParticipation }}%</span>
          </div>
          <div class="card-comparison">
            <div class="comparison-bar">
              <div class="bar bar-old" style="width: 42%">
                <span>2024: 42%</span>
              </div>
              <div class="bar bar-new" :style="{ width: animatedParticipation + '%' }">
                <span>2050: {{ animatedParticipation }}%</span>
              </div>
            </div>
          </div>
          <p class="card-text">+45 points vs élections traditionnelles</p>
          <span class="card-source">Source: Global Democracy Index</span>
        </div>

        <!-- Card Transparence -->
        <div class="data-card card-green" :class="{ 'visible': cardsVisible }" style="--delay: 0.2s">
          <div class="card-icon">🔗</div>
          <div class="card-header">
            <span class="card-label">Corruption Détectée</span>
          </div>
          <div class="card-value">
            <span class="value-main green">0%</span>
          </div>
          <div class="blockchain-visual">
            <div class="block" v-for="n in 5" :key="'block-'+n">
              <span>{{ '0x' + Math.random().toString(16).slice(2, 6) }}</span>
            </div>
          </div>
          <p class="card-text">Blockchain publique : tous votes/fonds traçables</p>
          <span class="card-source">Source: Transparency International</span>
        </div>

        <!-- Card Satisfaction -->
        <div class="data-card card-violet" :class="{ 'visible': cardsVisible }" style="--delay: 0.4s">
          <div class="card-icon">😊</div>
          <div class="card-header">
            <span class="card-label">Satisfaction Citoyenne</span>
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
          <p class="card-text">IA modère, humains décident</p>
          <span class="card-source">Source: UN Citizen Survey</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Simulateur Vote -->
    <section class="simulator-section" ref="simulatorSection">
      <div class="simulator-bg"></div>
      
      <h2 class="section-title centered">Simule ton <span class="highlight">pouvoir démocratique</span></h2>
      
      <div class="simulator-container">
        <div class="sim-inputs">
          <!-- Localisation -->
          <div class="sim-card">
            <div class="sim-card-icon">📍</div>
            <h3>Ma localisation</h3>
            <div class="location-display">
              <span class="location-city">{{ userLocation.city || 'Détection...' }}</span>
              <span class="location-country">{{ userLocation.country || '' }}</span>
            </div>
            <button class="detect-btn" @click="detectLocation" :disabled="detecting">
              {{ detecting ? 'Détection...' : 'Détecter ma position' }}
            </button>
          </div>

          <!-- Priorités -->
          <div class="sim-card">
            <div class="sim-card-icon">⚖️</div>
            <h3>Mes priorités</h3>
            <div class="priority-sliders">
              <div class="slider-group">
                <label>🌱 Budget Vert</label>
                <input type="range" v-model="priorities.green" min="0" max="100">
                <span>{{ priorities.green }}%</span>
              </div>
              <div class="slider-group">
                <label>🛡️ Sécurité</label>
                <input type="range" v-model="priorities.security" min="0" max="100">
                <span>{{ priorities.security }}%</span>
              </div>
              <div class="slider-group">
                <label>📚 Éducation</label>
                <input type="range" v-model="priorities.education" min="0" max="100">
                <span>{{ priorities.education }}%</span>
              </div>
            </div>
          </div>

          <!-- Vote -->
          <div class="sim-card">
            <div class="sim-card-icon">🗳️</div>
            <h3>Mon vote</h3>
            <p class="vote-question">Augmenter le budget espaces verts de 15% ?</p>
            <div class="vote-toggle">
              <button 
                class="vote-btn pour" 
                :class="{ 'active': userVote === 'pour' }"
                @click="userVote = 'pour'"
              >
                ✓ POUR
              </button>
              <button 
                class="vote-btn contre" 
                :class="{ 'active': userVote === 'contre' }"
                @click="userVote = 'contre'"
              >
                ✗ CONTRE
              </button>
            </div>
          </div>
        </div>

        <!-- Bouton Vote -->
        <button class="vote-submit-btn" @click="submitVote" :disabled="!userVote">
          <span>VOTER & VOIR IMPACT</span>
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <!-- Résultats -->
        <div class="vote-results" v-if="showResults">
          <div class="propagation-visual">
            <div class="prop-level" :class="{ 'active': propLevel >= 1 }">
              <span class="prop-icon">🏠</span>
              <span class="prop-label">Quartier</span>
              <span class="prop-value">{{ voteResults.quartier }} votes</span>
            </div>
            <div class="prop-arrow">→</div>
            <div class="prop-level" :class="{ 'active': propLevel >= 2 }">
              <span class="prop-icon">🏙️</span>
              <span class="prop-label">Ville</span>
              <span class="prop-value">{{ formatNumber(voteResults.ville) }}</span>
            </div>
            <div class="prop-arrow">→</div>
            <div class="prop-level" :class="{ 'active': propLevel >= 3 }">
              <span class="prop-icon">🏛️</span>
              <span class="prop-label">Pays</span>
              <span class="prop-value">{{ formatNumber(voteResults.pays) }}</span>
            </div>
            <div class="prop-arrow">→</div>
            <div class="prop-level" :class="{ 'active': propLevel >= 4 }">
              <span class="prop-icon">🌍</span>
              <span class="prop-label">Planète</span>
              <span class="prop-value">{{ formatNumber(voteResults.global) }}</span>
            </div>
          </div>
          
          <div class="result-summary">
            <div class="result-approval">
              <span class="approval-value">94%</span>
              <span class="approval-label">Approbation</span>
            </div>
            <div class="result-impact">
              <span class="impact-text">Budget espaces verts +15% débloqué !</span>
            </div>
          </div>

          <button class="save-profile-btn" @click="saveProfile">
            💾 Sauvegarder mon profil votant REWORLD
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 5: Actions Concrètes -->
    <section class="actions-section" ref="actionsSection">
      <div class="actions-bg"></div>
      
      <h2 class="section-title centered">Importer ce futur <span class="highlight">dans ton présent</span></h2>
      
      <div class="actions-grid">
        <div class="action-card" v-for="(action, index) in actions" :key="action.title" @click="handleAction(action)">
          <div class="action-icon">{{ action.icon }}</div>
          <h3 class="action-title">{{ action.title }}</h3>
          <p class="action-desc">{{ action.description }}</p>
          <span class="action-cta">{{ action.cta }} →</span>
        </div>
      </div>

      <!-- Compteur Global -->
      <div class="global-counter">
        <div class="counter-content">
          <span class="counter-label">Citoyens REWORLD actifs</span>
          <span class="counter-value">{{ formatNumber(liveCounter.citizens) }}</span>
        </div>
        <div class="counter-divider"></div>
        <div class="counter-content">
          <span class="counter-label">Satisfaction globale</span>
          <span class="counter-value">{{ liveCounter.satisfaction }}%</span>
        </div>
      </div>
    </section>

    <!-- Navigation Capsules -->
    <section class="capsule-nav-section">
      <div class="capsule-nav">
        <router-link to="/capsule-eco" class="nav-capsule prev">← Capsule 01</router-link>
        <span class="nav-current">Capsule 02</span>
        <router-link to="/capsule-tech" class="nav-capsule next">Capsule 03 →</router-link>
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
  name: 'CapsuleDemo',
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
    const activeStep = ref(0)
    const pyramidPulse = ref(0)
    const cardsVisible = ref(false)
    const showResults = ref(false)
    const propLevel = ref(0)
    const detecting = ref(false)

    // Données animées
    const animatedParticipation = ref(0)
    const animatedSatisfaction = ref(0)

    // Données utilisateur
    const userLocation = reactive({ city: '', country: '' })
    const priorities = reactive({ green: 60, security: 40, education: 70 })
    const userVote = ref(null)
    const voteResults = reactive({ quartier: 247, ville: 0, pays: 0, global: 0 })

    // Compteur live
    const liveCounter = reactive({
      citizens: 247832,
      satisfaction: 94
    })

    // Actions
    const actions = [
      {
        icon: '🏛️',
        title: 'Conseil citoyen',
        description: 'Participe aux consultations publiques de ta ville. Ta voix compte dans les décisions locales.',
        cta: 'Trouver une consultation',
        action: 'consultation'
      },
      {
        icon: '👥',
        title: 'Groupe de quartier',
        description: 'Crée ou rejoins un groupe citoyen WhatsApp/Decidim pour agir ensemble localement.',
        cta: 'Créer un groupe',
        action: 'group'
      },
      {
        icon: '✍️',
        title: 'Signer une pétition',
        description: 'Soutiens une cause locale sur Change.org ou lance ta propre pétition citoyenne.',
        cta: 'Voir les pétitions',
        action: 'petition'
      }
    ]

    // Pré-génération des styles pour éviter les recalculs aléatoires
    const starStyles = Array.from({ length: 100 }, () => ({
      '--x': `${Math.random() * 100}%`,
      '--y': `${Math.random() * 100}%`,
      '--size': `${1 + Math.random() * 2}px`,
      '--duration': `${2 + Math.random() * 3}s`,
      '--delay': `${Math.random() * 5}s`
    }))

    const voteStyles = Array.from({ length: 20 }, () => ({
      '--x': `${10 + Math.random() * 80}%`,
      '--y': `${10 + Math.random() * 80}%`,
      '--delay': `${Math.random() * 5}s`,
      '--duration': `${3 + Math.random() * 2}s`
    }))

    const connectionStyles = Array.from({ length: 6 }, (_, i) => ({
      '--angle': `${(i + 1) * 60}deg`,
      '--delay': `${(i + 1) * 0.3}s`
    }))

    // Helpers visuels (utilisent les styles pré-générés)
    const getStarStyle = (n) => starStyles[n - 1] || starStyles[0]
    const getVoteStyle = (n) => voteStyles[n - 1] || voteStyles[0]
    const getConnectionStyle = (n) => connectionStyles[n - 1] || connectionStyles[0]

    // Scroll
    const scrollToSystem = () => {
      systemSection.value?.scrollIntoView({ behavior: 'smooth' })
    }

    // Géolocalisation
    const detectLocation = () => {
      detecting.value = true
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=fr`
              )
              const data = await response.json()
              userLocation.city = data.city || data.locality || 'Ville inconnue'
              userLocation.country = data.countryName || ''
            } catch (e) {
              userLocation.city = 'Paris'
              userLocation.country = 'France'
            }
            detecting.value = false
          },
          () => {
            userLocation.city = 'Paris'
            userLocation.country = 'France'
            detecting.value = false
          }
        )
      } else {
        userLocation.city = 'Paris'
        userLocation.country = 'France'
        detecting.value = false
      }
    }

    // Propagation vote
    const propagerVote = (votesQuartier = 247) => {
      const ratioVille = 50
      const ratioPays = 200
      const ratioGlobal = 3300
      return {
        quartier: votesQuartier,
        ville: votesQuartier * ratioVille,
        pays: votesQuartier * ratioVille * ratioPays,
        global: votesQuartier * ratioVille * ratioPays * ratioGlobal
      }
    }

    // Soumission vote
    const submitVote = () => {
      const results = propagerVote()
      voteResults.quartier = results.quartier
      voteResults.ville = results.ville
      voteResults.pays = results.pays
      voteResults.global = results.global
      
      showResults.value = true
      propLevel.value = 0
      
      // Animation propagation
      setTimeout(() => propLevel.value = 1, 300)
      setTimeout(() => propLevel.value = 2, 800)
      setTimeout(() => propLevel.value = 3, 1300)
      setTimeout(() => propLevel.value = 4, 1800)
    }

    // Format nombre
    const formatNumber = (num) => {
      if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B'
      if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M'
      if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K'
      return num.toString()
    }

    // Sauvegarde profil
    const saveProfile = () => {
      const profil = JSON.parse(localStorage.getItem('reworld-democratie') || '{"votesTotal":0}')
      profil.votesTotal += 1
      profil.lastVote = userVote.value
      profil.priorities = { ...priorities }
      profil.impactGlobal = voteResults.global
      profil.location = { ...userLocation }
      localStorage.setItem('reworld-democratie', JSON.stringify(profil))
      alert('Profil votant sauvegardé ! 🎉')
    }

    // Actions
    const handleAction = (action) => {
      switch (action.action) {
        case 'consultation':
          window.open('https://www.decidim.org/', '_blank')
          break
        case 'group':
          window.open('https://chat.whatsapp.com/', '_blank')
          break
        case 'petition':
          window.open('https://www.change.org/search?q=d%C3%A9mocratie%20locale', '_blank')
          break
      }
    }

    // Animation compteurs
    const animateValue = (ref, target, duration = 2000) => {
      const start = 0
      const startTime = performance.now()
      
      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        ref.value = Math.round(eased * target)
        
        if (progress < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }

    // Animation pyramide
    let pyramidInterval = null
    const startPyramidAnimation = () => {
      let level = 1
      pyramidInterval = setInterval(() => {
        pyramidPulse.value = level
        level = level >= 4 ? 1 : level + 1
      }, 1500)
    }

    // Animation étapes
    let stepsInterval = null
    const startStepsAnimation = () => {
      let step = 1
      stepsInterval = setInterval(() => {
        activeStep.value = step
        step = step >= 3 ? 1 : step + 1
      }, 2000)
    }

    // Scroll handler
    const handleScroll = () => {
      headerVisible.value = window.scrollY > 100
      
      // Dashboard visible
      if (dashboardSection.value) {
        const rect = dashboardSection.value.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7 && !cardsVisible.value) {
          cardsVisible.value = true
          animateValue(animatedParticipation, 87, 2000)
          animateValue(animatedSatisfaction, 94, 2500)
        }
      }
    }

    // Live counter simulation
    let counterInterval = null
    const startLiveCounter = () => {
      counterInterval = setInterval(() => {
        liveCounter.citizens += Math.floor(Math.random() * 10)
      }, 3000)
    }

    onMounted(() => {
      // Animation hero
      setTimeout(() => showHero.value = true, 300)
      setTimeout(() => headerVisible.value = true, 1000)
      
      // Détection auto localisation
      detectLocation()
      
      // Démarrer animations
      startPyramidAnimation()
      startStepsAnimation()
      startLiveCounter()
      
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      if (pyramidInterval) clearInterval(pyramidInterval)
      if (stepsInterval) clearInterval(stepsInterval)
      if (counterInterval) clearInterval(counterInterval)
    })

    return {
      // Refs
      heroSection, systemSection, dashboardSection, simulatorSection, actionsSection,
      // États
      headerVisible, showHero, activeStep, pyramidPulse, cardsVisible,
      showResults, propLevel, detecting,
      // Données animées
      animatedParticipation, animatedSatisfaction,
      // Données utilisateur
      userLocation, priorities, userVote, voteResults, liveCounter,
      // Data
      actions,
      // Methods
      getStarStyle, getVoteStyle, getConnectionStyle,
      scrollToSystem, detectLocation, submitVote, formatNumber,
      saveProfile, handleAction
    }
  }
}
</script>

<style scoped>
/* ==========================================
   VARIABLES CAPSULE DEMO
   ========================================== */
.capsule-demo {
  --navy-cosmic: #0a0a2e;
  --navy-deep: #0d1029;
  --cyan-electric: #06b6d4;
  --cyan-glow: rgba(6, 182, 212, 0.4);
  --cyan-dark: #0891b2;
  --teal-card: #0f766e;
  --teal-border: #059669;
  --green-valid: #10b981;
  --violet-accent: #8b5cf6;
  --violet-glow: rgba(139, 92, 246, 0.3);
  --white: #FFFFFF;
  --white-80: rgba(255, 255, 255, 0.8);
  --white-60: rgba(255, 255, 255, 0.6);
  --white-40: rgba(255, 255, 255, 0.4);
}

.capsule-demo {
  background: var(--navy-cosmic);
  min-height: 100vh;
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
  background: linear-gradient(180deg, var(--navy-cosmic) 0%, transparent 100%);
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
  color: var(--white-60);
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover { color: var(--cyan-electric); }
.back-arrow { width: 20px; height: 20px; stroke: currentColor; stroke-width: 2; fill: none; }

/* ==========================================
   SECTION 1: HERO
   ========================================== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
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
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
  background-size: 80px 80px;
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
  50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
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
  color: var(--cyan-electric);
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
  font-weight: 800;
  line-height: 1.1;
  color: var(--white);
}

.title-line.gradient {
  background: linear-gradient(135deg, var(--cyan-electric) 0%, var(--violet-accent) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-narrative {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--white-80);
  max-width: 600px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.ticker-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--cyan-electric);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.ticker-label {
  font-size: 0.85rem;
  color: var(--white-60);
}

.ticker-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, var(--cyan-electric), transparent);
}

/* CTA Button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, var(--cyan-electric) 0%, var(--cyan-dark) 100%);
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px var(--cyan-glow);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px var(--cyan-glow);
}

.cta-btn svg {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
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
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-capsule:hover {
  color: var(--cyan-electric);
}

.nav-current {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cyan-electric);
  padding: 0.5rem 1rem;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 20px;
}

/* Vote Particles */
.vote-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.vote-particle {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: 24px;
  height: 24px;
  color: var(--cyan-electric);
  opacity: 0;
  animation: voteFloat var(--duration) var(--delay) ease-in-out infinite;
}

.vote-particle svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  stroke-width: 3;
  fill: none;
}

@keyframes voteFloat {
  0%, 100% { opacity: 0; transform: translateY(0) scale(0.5); }
  50% { opacity: 0.8; transform: translateY(-50px) scale(1); }
}

/* ==========================================
   SECTION 2: SYSTÈME PARTICIPATIF
   ========================================== */
.system-section {
  position: relative;
  padding: 8rem 2rem;
  min-height: 100vh;
}

.system-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--navy-cosmic) 0%, var(--navy-deep) 100%);
}

.system-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.3;
}

.section-title.centered {
  text-align: center;
}

.section-title .highlight {
  color: var(--cyan-electric);
  text-shadow: 0 0 30px var(--cyan-glow);
}

.system-narrative {
  margin-bottom: 3rem;
}

.system-narrative p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--white-80);
  margin-bottom: 1rem;
}

/* Steps */
.steps-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  opacity: 0.5;
  transform: translateX(-20px);
  transition: all 0.5s ease;
}

.step.active {
  opacity: 1;
  transform: translateX(0);
  border-color: var(--cyan-electric);
  background: rgba(6, 182, 212, 0.1);
}

.step-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--cyan-electric);
  padding: 0.5rem 0.75rem;
  background: rgba(6, 182, 212, 0.2);
  border-radius: 8px;
}

.step-content h4 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.25rem;
}

.step-content p {
  font-size: 0.9rem;
  color: var(--white-60);
  margin-bottom: 0.5rem;
}

.step-result {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--green-valid);
}

.step-connector {
  width: 2px;
  height: 20px;
  background: linear-gradient(180deg, var(--cyan-electric), transparent);
  margin-left: 2rem;
}

/* Pyramid Visual */
.pyramid-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pyramid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.pyramid-level {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 1px solid rgba(6, 182, 212, 0.2);
  background: rgba(6, 182, 212, 0.05);
  transition: all 0.5s ease;
}

.pyramid-level.pulse {
  border-color: var(--cyan-electric);
  background: rgba(6, 182, 212, 0.15);
  box-shadow: 0 0 30px var(--cyan-glow);
}

.level-global { width: 320px; }
.level-country { width: 270px; }
.level-city { width: 220px; }
.level-local { width: 170px; }

.level-label {
  font-size: 0.9rem;
  color: var(--white-80);
}

.level-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cyan-electric);
}

.pyramid-connections {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.connection-line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--cyan-electric), transparent);
  transform-origin: left center;
  transform: rotate(var(--angle));
  opacity: 0.3;
  animation: connectionPulse 3s var(--delay) ease-in-out infinite;
}

@keyframes connectionPulse {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.5; }
}

/* ==========================================
   SECTION 3: DASHBOARD
   ========================================== */
.dashboard-section {
  position: relative;
  padding: 8rem 2rem;
  min-height: 100vh;
}

.dashboard-bg {
  position: absolute;
  inset: 0;
  background: var(--navy-deep);
}

.dashboard-grid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 4rem auto 0;
}

/* Data Cards */
.data-card {
  background: linear-gradient(145deg, rgba(6, 182, 212, 0.1) 0%, rgba(10, 10, 46, 0.8) 100%);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 24px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease calc(var(--delay, 0s));
}

.data-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.data-card.card-green {
  border-color: rgba(16, 185, 129, 0.3);
  background: linear-gradient(145deg, rgba(16, 185, 129, 0.1) 0%, rgba(10, 10, 46, 0.8) 100%);
}

.data-card.card-violet {
  border-color: rgba(139, 92, 246, 0.3);
  background: linear-gradient(145deg, rgba(139, 92, 246, 0.1) 0%, rgba(10, 10, 46, 0.8) 100%);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card-header {
  margin-bottom: 1rem;
}

.card-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
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
  color: var(--cyan-electric);
  text-shadow: 0 0 30px var(--cyan-glow);
}

.value-main.green {
  color: var(--green-valid);
  text-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
}

.value-main.violet {
  color: var(--violet-accent);
  text-shadow: 0 0 30px var(--violet-glow);
}

/* Comparison Bar */
.comparison-bar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  background: linear-gradient(90deg, var(--cyan-electric), var(--cyan-dark));
}

/* Blockchain Visual */
.blockchain-visual {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.block {
  padding: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.7rem;
  color: var(--green-valid);
  animation: blockSlide 8s linear infinite;
}

@keyframes blockSlide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50px); }
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
   SECTION 4: SIMULATEUR
   ========================================== */
.simulator-section {
  position: relative;
  padding: 8rem 2rem;
  min-height: 100vh;
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
  background: radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%);
  pointer-events: none;
}

.simulator-bg::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, #0A0A0A, transparent);
  pointer-events: none;
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
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.sim-card:hover {
  transform: translateY(-8px);
  background: rgba(15, 23, 42, 0.95);
  border-color: var(--cyan-electric);
  box-shadow: 0 20px 50px rgba(6, 182, 212, 0.2), 0 0 30px rgba(6, 182, 212, 0.15);
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
  margin-bottom: 1rem;
}

.location-display {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.location-city {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cyan-electric);
}

.location-country {
  font-size: 0.85rem;
  color: var(--white-60);
}

.detect-btn {
  padding: 0.5rem 1rem;
  background: rgba(6, 182, 212, 0.2);
  border: 1px solid var(--cyan-electric);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--cyan-electric);
  cursor: pointer;
  transition: all 0.3s ease;
}

.detect-btn:hover:not(:disabled) {
  background: var(--cyan-electric);
  color: var(--navy-cosmic);
}

.detect-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Priority Sliders */
.priority-sliders {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.slider-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.slider-group label {
  font-size: 0.8rem;
  color: var(--white-80);
  min-width: 80px;
  text-align: left;
}

.slider-group input[type="range"] {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  appearance: none;
  -webkit-appearance: none;
}

.slider-group input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: var(--cyan-electric);
  border-radius: 50%;
  cursor: pointer;
}

.slider-group span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--cyan-electric);
  min-width: 35px;
}

/* Vote Toggle */
.vote-question {
  font-size: 0.9rem;
  color: var(--white-80);
  margin-bottom: 1rem;
}

.vote-toggle {
  display: flex;
  gap: 0.75rem;
}

.vote-btn {
  flex: 1;
  padding: 0.75rem;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.vote-btn.pour {
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid rgba(16, 185, 129, 0.3);
  color: var(--green-valid);
}

.vote-btn.pour.active,
.vote-btn.pour:hover {
  background: var(--green-valid);
  border-color: var(--green-valid);
  color: var(--white);
}

.vote-btn.contre {
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.vote-btn.contre.active,
.vote-btn.contre:hover {
  background: #ef4444;
  border-color: #ef4444;
  color: var(--white);
}

/* Vote Submit Button */
.vote-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 400px;
  margin: 2.5rem auto;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, #00C9A7 0%, #00A8E8 100%);
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(0, 201, 167, 0.3);
}

.vote-submit-btn:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0, 201, 167, 0.4);
}

.vote-submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.vote-submit-btn svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  transition: transform 0.3s ease;
}

.vote-submit-btn:hover:not(:disabled) svg {
  transform: translateX(5px);
}

/* Vote Results */
.vote-results {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.25);
  border-radius: 24px;
  padding: 2.5rem;
  margin-top: 2.5rem;
  animation: fadeInUp 0.6s ease-out;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(6, 182, 212, 0.1);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.propagation-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.prop-level {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
  background: rgba(6, 182, 212, 0.15);
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 12px;
  opacity: 0.4;
  transform: scale(0.9);
  transition: all 0.5s ease;
}

.prop-level.active {
  opacity: 1;
  transform: scale(1);
  border-color: var(--cyan-electric);
  box-shadow: 0 0 20px var(--cyan-glow);
}

.prop-icon {
  font-size: 1.5rem;
}

.prop-label {
  font-size: 0.75rem;
  color: var(--white-60);
}

.prop-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cyan-electric);
}

.prop-arrow {
  font-size: 1.5rem;
  color: var(--cyan-electric);
  animation: arrowPulse 1s ease-in-out infinite;
}

@keyframes arrowPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.result-summary {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.result-approval {
  text-align: center;
}

.approval-value {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: var(--green-valid);
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
}

.approval-label {
  font-size: 0.9rem;
  color: var(--white-60);
}

.result-impact {
  background: linear-gradient(135deg, var(--green-valid) 0%, #059669 100%);
  padding: 1rem 2rem;
  border-radius: 50px;
}

.impact-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
}

.save-profile-btn {
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

.save-profile-btn:hover {
  background: var(--violet-accent);
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
  background: transparent;
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
  background: radial-gradient(ellipse at 50% 0%, rgba(0, 201, 167, 0.08) 0%, transparent 70%);
  pointer-events: none;
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
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.action-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 201, 167, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.action-card:hover {
  transform: translateY(-10px);
  background: rgba(15, 118, 110, 0.3);
  border-color: rgba(0, 201, 167, 0.5);
  box-shadow: 0 25px 60px rgba(0, 201, 167, 0.2), 0 0 40px rgba(0, 201, 167, 0.1);
}

.action-card:hover::before {
  opacity: 1;
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
  color: var(--cyan-electric);
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
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
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
  color: var(--cyan-electric);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.counter-divider {
  width: 1px;
  height: 50px;
  background: linear-gradient(180deg, transparent, rgba(0, 201, 167, 0.5), transparent);
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
  border: 1px solid rgba(0, 168, 232, 0.3);
  border-radius: 24px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.next-capsule-btn:hover {
  background: rgba(0, 168, 232, 0.15);
  border-color: rgba(0, 168, 232, 0.5);
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 168, 232, 0.25);
}

.next-capsule-btn span:first-child {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.next-capsule-btn .next-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #00A8E8;
  transition: color 0.3s ease;
}

.next-capsule-btn:hover .next-title {
  color: #00C9A7;
}

.next-capsule-btn svg {
  width: 24px;
  height: 24px;
  stroke: #00A8E8;
  stroke-width: 2;
  fill: none;
  transition: all 0.3s ease;
}

.next-capsule-btn:hover svg {
  stroke: #00C9A7;
  transform: translateX(5px);
}

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 1024px) {
  .system-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .pyramid-visual {
    order: -1;
    height: 350px;
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
  
  .propagation-visual {
    flex-direction: column;
  }
  
  .prop-arrow {
    transform: rotate(90deg);
  }
  
  .result-summary {
    flex-direction: column;
    gap: 1.5rem;
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
  .system-section,
  .dashboard-section,
  .simulator-section,
  .actions-section {
    padding: 4rem 1rem;
  }
  
  .value-main {
    font-size: 3rem;
  }
  
  .level-global { width: 260px; }
  .level-country { width: 220px; }
  .level-city { width: 180px; }
  .level-local { width: 140px; }
}
</style>
