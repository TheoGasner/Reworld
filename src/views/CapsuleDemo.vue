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
            <span class="ticker-value">1500+</span>
            <span class="ticker-label">Villes pratiquent le budget participatif</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value">40M</span>
            <span class="ticker-label">Citoyens impliqués en Europe</span>
          </div>
          <div class="ticker-divider"></div>
          <div class="ticker-item">
            <span class="ticker-value">×3</span>
            <span class="ticker-label">Confiance institutions</span>
          </div>
        </div>

        <button class="cta-btn" @click="scrollToSystem">
          <span>Découvrir le système</span>
          <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
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
            <p>Du budget participatif de Paris (100M€/an) à la plateforme Decidim de Barcelone, 
            la démocratie directe n'est plus une utopie — elle fonctionne déjà.</p>
            <p>En 2050, ces initiatives locales deviennent la norme mondiale : quartier → ville → pays → planète.</p>
          </div>

          <!-- Étapes animées -->
          <div class="steps-container">
            <div class="step" :class="{ 'active': activeStep >= 1 }">
              <div class="step-number">01</div>
              <div class="step-content">
                <h4>Proposition citoyenne</h4>
                <p>Comme à Paris : projets déposés en ligne</p>
                <span class="step-result">4 800 projets/an</span>
              </div>
            </div>
            <div class="step-connector"></div>
            <div class="step" :class="{ 'active': activeStep >= 2 }">
              <div class="step-number">02</div>
              <div class="step-content">
                <h4>Vote citoyen</h4>
                <p>Plateforme type Decidim (open source)</p>
                <span class="step-result">300K votants</span>
              </div>
            </div>
            <div class="step-connector"></div>
            <div class="step" :class="{ 'active': activeStep >= 3 }">
              <div class="step-number">03</div>
              <div class="step-content">
                <h4>Réalisation</h4>
                <p>Budget alloué, projet construit</p>
                <span class="step-result">100M€ débloqués</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pyramide visuelle -->
        <div class="pyramid-visual">
          <div class="pyramid-container">
            <div class="pyramid-level level-global" :class="{ 'pulse': pyramidPulse === 4 }">
              <span class="level-label">🌍 UE</span>
              <span class="level-value">Initiative citoyenne</span>
            </div>
            <div class="pyramid-level level-country" :class="{ 'pulse': pyramidPulse === 3 }">
              <span class="level-label">🏛️ France</span>
              <span class="level-value">Convention climat</span>
            </div>
            <div class="pyramid-level level-city" :class="{ 'pulse': pyramidPulse === 2 }">
              <span class="level-label">🏙️ Paris</span>
              <span class="level-value">Budget 100M€/an</span>
            </div>
            <div class="pyramid-level level-local" :class="{ 'pulse': pyramidPulse === 1 }">
              <span class="level-label">🏠 Quartier</span>
              <span class="level-value">Conseil citoyen</span>
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
      
      <h2 class="section-title centered">La démocratie participative <span class="highlight">en chiffres réels</span></h2>
      
      <div class="dashboard-grid">
        <!-- Card Budget Participatif -->
        <div class="data-card" :class="{ 'visible': cardsVisible }">
          <div class="card-icon">🏛️</div>
          <div class="card-header">
            <span class="card-label">Budget Participatif Paris</span>
          </div>
          <div class="card-value">
            <span class="value-main" ref="participationValue">100M€</span>
          </div>
          <div class="card-comparison">
            <div class="comparison-bar">
              <div class="bar bar-old" style="width: 20%">
                <span>2014: 20M€</span>
              </div>
              <div class="bar bar-new" style="width: 100%">
                <span>2024: 100M€</span>
              </div>
            </div>
          </div>
          <p class="card-text">Plus grand budget participatif d'Europe</p>
          <span class="card-source">Source: Mairie de Paris</span>
        </div>

        <!-- Card Decidim -->
        <div class="data-card card-green" :class="{ 'visible': cardsVisible }" style="--delay: 0.2s">
          <div class="card-icon">💻</div>
          <div class="card-header">
            <span class="card-label">Plateforme Decidim</span>
          </div>
          <div class="card-value">
            <span class="value-main green">450+</span>
          </div>
          <div class="decidim-visual">
            <div class="decidim-stat">
              <span class="stat-icon">🌍</span>
              <span>Villes utilisatrices</span>
            </div>
            <div class="decidim-stat">
              <span class="stat-icon">👥</span>
              <span>2M+ participants</span>
            </div>
          </div>
          <p class="card-text">Logiciel libre créé à Barcelone, adopté mondialement</p>
          <span class="card-source">Source: decidim.org</span>
        </div>

        <!-- Card Convention Citoyenne -->
        <div class="data-card card-violet" :class="{ 'visible': cardsVisible }" style="--delay: 0.4s">
          <div class="card-icon">🇫🇷</div>
          <div class="card-header">
            <span class="card-label">Convention Climat France</span>
          </div>
          <div class="card-value">
            <span class="value-main violet">150</span>
          </div>
          <div class="convention-visual">
            <span class="conv-label">Citoyens tirés au sort</span>
            <div class="conv-result">
              <span>149 propositions</span>
              <span class="conv-arrow">→</span>
              <span>Loi Climat 2021</span>
            </div>
          </div>
          <p class="card-text">Première convention citoyenne nationale</p>
          <span class="card-source">Source: conventioncitoyennepourleclimat.fr</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Calculateur d'Impact Citoyen -->
    <section class="simulator-section" ref="simulatorSection">
      <div class="simulator-bg"></div>
      
      <h2 class="section-title centered">Calcule ton <span class="highlight">pouvoir citoyen</span></h2>
      <p class="section-subtitle">Basé sur les données réelles du Budget Participatif de Paris (source: Mairie de Paris)</p>
      
      <div class="impact-calculator">
        <!-- Inputs -->
        <div class="calc-inputs">
          <div class="calc-input-card">
            <div class="card-icon-large">🗳️</div>
            <h4 class="card-title">Budget Participatif</h4>
            <p class="card-desc">Votes pour des projets citoyens dans ta ville</p>
            <div class="input-row">
              <input type="range" v-model.number="calcInputs.votes" min="0" max="10" step="1">
              <span class="input-value">{{ calcInputs.votes }}</span>
            </div>
            <div class="input-examples">
              <span class="example-tag">🏛️ Paris : 4-6 votes/an</span>
              <span class="example-tag">🌳 Parcs, vélos, écoles...</span>
            </div>
          </div>
          
          <div class="calc-input-card card-orange">
            <div class="card-icon-large">💬</div>
            <h4 class="card-title">Consultations Citoyennes</h4>
            <p class="card-desc">Participe aux débats sur les grandes causes</p>
            <div class="input-row">
              <input type="range" v-model.number="calcInputs.consultations" min="0" max="12" step="1">
              <span class="input-value">{{ calcInputs.consultations }}</span>
            </div>
            <div class="input-examples">
              <span class="example-tag">🇫🇷 Make.org</span>
              <span class="example-tag">🏙️ Decidim</span>
            </div>
          </div>
          
          <div class="calc-input-card card-violet">
            <div class="card-icon-large">✍️</div>
            <h4 class="card-title">Pétitions & Initiatives</h4>
            <p class="card-desc">Soutiens des causes qui te tiennent à cœur</p>
            <div class="input-row">
              <input type="range" v-model.number="calcInputs.petitions" min="0" max="20" step="1">
              <span class="input-value">{{ calcInputs.petitions }}</span>
            </div>
            <div class="input-examples">
              <span class="example-tag">🌍 Change.org</span>
              <span class="example-tag">🇪🇺 ICE Europe</span>
            </div>
          </div>
        </div>

        <!-- Bouton Calculer -->
        <div class="calc-button-container">
          <button class="calc-submit-btn" @click="calculateImpact">
            <span>🗳️ CALCULER MON IMPACT CITOYEN</span>
          </button>
        </div>

        <!-- Résultats -->
        <div class="calc-results" :class="{ 'visible': showCalcResults }">
          <h3>Ton impact citoyen annuel</h3>
          
          <div class="result-cards">
            <div class="result-card">
              <span class="result-icon">💰</span>
              <span class="result-value">{{ calculatedImpact.euros }}€</span>
              <span class="result-label">de budget influencé</span>
              <span class="result-source">Budget participatif : 100M€ ÷ 287K votants = 348€/vote</span>
            </div>
            
            <div class="result-card">
              <span class="result-icon">🏗️</span>
              <span class="result-value">{{ calculatedImpact.projects }}</span>
              <span class="result-label">projets soutenus</span>
              <span class="result-source">Moyenne : 1 projet financé / 100 votes</span>
            </div>
            
            <div class="result-card">
              <span class="result-icon">📢</span>
              <span class="result-value">{{ calculatedImpact.voices }}</span>
              <span class="result-label">voix portées</span>
              <span class="result-source">Tes votes + signatures = poids démocratique</span>
            </div>
          </div>

          <div class="impact-comparison">
            <p class="comparison-text">
              <strong>En perspective :</strong> Si 10% des Français s'engageaient comme toi, 
              c'est <span class="highlight">{{ calculatedImpact.nationalImpact }}</span> de budget citoyen 
              et <span class="highlight">{{ calculatedImpact.nationalProjects }} projets</span> décidés par les citoyens.
            </p>
          </div>

          <div class="cta-section">
            <a href="https://decider.paris.fr/decider/jsp/site/Portal.jsp?page=search-solr&items_per_page=20&sort_name=date&sort_order=desc&query=(type%3AFORMS_FORM_RESPONSE_1%20OR%20type%3ACONSULTATION)%20OR%20(type%3ADECIDER_BUDGET%20AND%20uid%3A*DECIDER_BUDGET%20AND%20-consultation_status_text%3ALAUREAT%20AND%20-consultation_status_text%3ANONLAUREAT)&facetlabel=DECIDER_BUDGET&facetname=type&fq=type:DECIDER_BUDGET&conf=default" target="_blank" class="impact-cta">
              <span>Commence à voter maintenant</span>
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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

      <!-- Navigation Capsules -->
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
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
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
    const showCalcResults = ref(false)
    const propLevel = ref(0)
    const detecting = ref(false)

    // Données animées
    const animatedParticipation = ref(0)
    const animatedSatisfaction = ref(0)

    // Calculateur d'impact citoyen
    const calcInputs = reactive({
      votes: 4,           // Votes au budget participatif par an
      consultations: 3,   // Consultations en ligne par an
      petitions: 5        // Pétitions signées par an
    })

    // Fonction pour afficher les résultats
    const calculateImpact = () => {
      showCalcResults.value = true
    }

    // Calcul de l'impact basé sur des données réelles
    // Source: Budget Participatif Paris - 100M€ pour 287 000 votants = 348€ par votant
    const calculatedImpact = computed(() => {
      const euroPerVote = 348  // 100M€ / 287K votants
      const projectsPerVotes = 0.01  // ~1 projet financé pour 100 votes (2800 projets / 287K votes)
      
      const totalVotes = calcInputs.votes
      const totalActions = calcInputs.votes + calcInputs.consultations + calcInputs.petitions
      
      const euros = totalVotes * euroPerVote
      const projects = Math.max(1, Math.round(totalVotes * projectsPerVotes * 100) / 100)
      const voices = totalActions
      
      // Impact national si 10% des Français (6.7M) faisaient pareil
      const frenchPop10Percent = 6700000
      const nationalBudget = (euros * frenchPop10Percent) / 1000000000 // en milliards
      const nationalProjects = Math.round(projects * frenchPop10Percent)
      
      return {
        euros: euros.toLocaleString('fr-FR'),
        projects: projects.toFixed(2),
        voices: voices,
        nationalImpact: nationalBudget.toFixed(1) + ' milliards €',
        nationalProjects: nationalProjects.toLocaleString('fr-FR')
      }
    })

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
        title: 'Budget participatif Paris',
        description: 'Propose ou vote pour des projets citoyens. 100M€ de budget, plus de 4 000 projets réalisés depuis 2014.',
        cta: 'decider.paris.fr',
        action: 'consultation',
        url: 'https://decider.paris.fr/decider/jsp/site/Portal.jsp?page=search-solr&items_per_page=20&sort_name=date&sort_order=desc&query=(type%3AFORMS_FORM_RESPONSE_1%20OR%20type%3ACONSULTATION)%20OR%20(type%3ADECIDER_BUDGET%20AND%20uid%3A*DECIDER_BUDGET%20AND%20-consultation_status_text%3ALAUREAT%20AND%20-consultation_status_text%3ANONLAUREAT)&facetlabel=DECIDER_BUDGET&facetname=type&fq=type:DECIDER_BUDGET&conf=default'
      },
      {
        icon: '💬',
        title: 'Decidim France',
        description: 'Plateforme open source de démocratie participative utilisée par 450+ villes dans le monde.',
        cta: 'decidim.org',
        action: 'group',
        url: 'https://decidim.org'
      },
      {
        icon: '📝',
        title: 'Make.org',
        description: 'Consultations citoyennes en ligne. Proposez vos idées, votez, construisez des projets concrets.',
        cta: 'make.org',
        action: 'petition',
        url: 'https://make.org'
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
      if (action.url) {
        window.open(action.url, '_blank')
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
      // Calculateur d'impact
      calcInputs, calculatedImpact, showCalcResults, calculateImpact,
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
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  cursor: pointer;
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
  background: linear-gradient(180deg, #0a1628 0%, #0f2847 100%);
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
  background: linear-gradient(180deg, #0f2847 0%, #061224 100%);
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

/* Decidim Visual */
.decidim-visual {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.decidim-stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--white-80);
}

.decidim-stat .stat-icon {
  font-size: 1rem;
}

/* Convention Visual */
.convention-visual {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.conv-label {
  font-size: 0.8rem;
  color: var(--white-60);
}

.conv-result {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--white-80);
}

.conv-arrow {
  color: var(--violet-accent);
  font-weight: bold;
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
  padding: 4rem 2rem;
  min-height: auto;
}

.simulator-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #061224 0%, #0a0a12 100%);
  z-index: 0;
}

.simulator-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(6, 182, 212, 0.12) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
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
  z-index: 0;
}

/* Consultations Container */
.consultations-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
}

.consultation-card {
  position: relative;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.consultation-card:hover {
  transform: translateY(-8px);
  background: rgba(15, 23, 42, 0.95);
  border-color: var(--cyan-electric);
  box-shadow: 0 20px 50px rgba(6, 182, 212, 0.2), 0 0 30px rgba(6, 182, 212, 0.15);
}

.consultation-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.5);
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 700;
  color: #10B981;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.consultation-badge.orange {
  background: rgba(245, 158, 11, 0.2);
  border-color: rgba(245, 158, 11, 0.5);
  color: #F59E0B;
}

.consultation-badge.violet {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
  color: #8B5CF6;
}

.consultation-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.consultation-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.75rem;
}

.consultation-desc {
  font-size: 0.9rem;
  color: var(--white-60);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.consultation-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(6, 182, 212, 0.05);
  border-radius: 12px;
}

.consultation-stats .stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.consultation-stats .stat-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--cyan-electric);
}

.consultation-stats .stat-label {
  font-size: 0.75rem;
  color: var(--white-40);
}

.consultation-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--cyan-electric), var(--cyan-dark));
  border: none;
  border-radius: 25px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--navy-cosmic);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consultation-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
}

.consultation-cta.orange {
  background: linear-gradient(135deg, #F59E0B, #D97706);
}

.consultation-cta.violet {
  background: linear-gradient(135deg, #8B5CF6, #7C3AED);
  color: white;
}

.consultation-cta svg {
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* ==========================================
   CALCULATEUR D'IMPACT CITOYEN
   ========================================== */
.section-subtitle {
  text-align: center;
  color: var(--white-40);
  font-size: 0.85rem;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}

.impact-calculator {
  position: relative;
  z-index: 10;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.calc-inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.calc-input-card {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.calc-input-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--cyan-electric), var(--cyan-dark));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.calc-input-card:hover {
  border-color: var(--cyan-electric);
  box-shadow: 0 10px 40px rgba(6, 182, 212, 0.2);
  transform: translateY(-5px);
}

.calc-input-card:hover::before {
  opacity: 1;
}

.calc-input-card.card-orange {
  border-color: rgba(245, 158, 11, 0.2);
}

.calc-input-card.card-orange::before {
  background: linear-gradient(90deg, #F59E0B, #D97706);
}

.calc-input-card.card-orange:hover {
  border-color: #F59E0B;
  box-shadow: 0 10px 40px rgba(245, 158, 11, 0.2);
}

.calc-input-card.card-orange .input-value {
  color: #F59E0B;
}

.calc-input-card.card-orange input[type="range"]::-webkit-slider-thumb {
  background: #F59E0B;
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
}

.calc-input-card.card-violet {
  border-color: rgba(139, 92, 246, 0.2);
}

.calc-input-card.card-violet::before {
  background: linear-gradient(90deg, #8B5CF6, #7C3AED);
}

.calc-input-card.card-violet:hover {
  border-color: #8B5CF6;
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);
}

.calc-input-card.card-violet .input-value {
  color: #8B5CF6;
}

.calc-input-card.card-violet input[type="range"]::-webkit-slider-thumb {
  background: #8B5CF6;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.card-icon-large {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.8rem;
  color: var(--white-60);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.calc-input-card label {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 1rem;
}

.input-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.input-row input[type="range"] {
  flex: 1;
  height: 8px;
  -webkit-appearance: none;
  appearance: none;
  background: rgba(6, 182, 212, 0.2);
  border-radius: 4px;
  outline: none;
}

.input-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--cyan-electric);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
  transition: transform 0.2s ease;
}

.input-row input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.input-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cyan-electric);
  min-width: 40px;
  text-align: center;
}

.input-hint {
  font-size: 0.75rem;
  color: var(--white-40);
  margin-top: 0.75rem;
  line-height: 1.4;
}

.input-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;
}

.example-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  font-size: 0.7rem;
  color: var(--white-60);
  transition: all 0.3s ease;
}

.example-tag:hover {
  background: rgba(6, 182, 212, 0.1);
  border-color: rgba(6, 182, 212, 0.3);
  color: var(--white-80);
}

.card-orange .example-tag:hover {
  background: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.3);
}

.card-violet .example-tag:hover {
  background: rgba(139, 92, 246, 0.1);
  border-color: rgba(139, 92, 246, 0.3);
}

/* Bouton Calculer */
.calc-button-container {
  text-align: center;
  margin-bottom: 1.5rem;
}

.calc-submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  background: linear-gradient(135deg, var(--cyan-electric), var(--cyan-dark));
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--navy-cosmic);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
}

.calc-submit-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 10px 40px rgba(6, 182, 212, 0.5);
}

.calc-submit-btn:active {
  transform: translateY(0) scale(0.98);
}

/* Résultats */
.calc-results {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  pointer-events: none;
  width: 100%;
}

.calc-results.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.calc-results h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--white);
  text-align: center;
  margin-bottom: 1.5rem;
}

.result-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.result-card {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.result-icon {
  font-size: 2rem;
}

.result-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--cyan-electric), var(--violet-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.result-label {
  font-size: 0.9rem;
  color: var(--white-80);
  font-weight: 500;
}

.result-source {
  font-size: 0.7rem;
  color: var(--white-40);
  margin-top: 0.5rem;
  line-height: 1.3;
}

.impact-comparison {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
}

.comparison-text {
  font-size: 0.95rem;
  color: var(--white-80);
  text-align: center;
  line-height: 1.6;
}

.comparison-text .highlight {
  color: var(--green-valid);
  font-weight: 700;
}

.cta-section {
  text-align: center;
}

.impact-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--cyan-electric), var(--cyan-dark));
  border: none;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--navy-cosmic);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.impact-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(6, 182, 212, 0.4);
}

.impact-cta svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

@media (max-width: 900px) {
  .calc-inputs {
    grid-template-columns: 1fr;
  }
  
  .result-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .consultations-container {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
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
  background: linear-gradient(180deg, #0a0a12 0%, #0d1a2d 50%, #0a1628 100%);
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
