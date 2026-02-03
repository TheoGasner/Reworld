<template>
  <div class="capsule-page capsule-eco">
    <!-- Header Fixe -->
    <header class="capsule-header" :class="{ 'visible': headerVisible }">
      <router-link to="/" class="back-link">
        <svg viewBox="0 0 24 24" class="back-arrow"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span>Retour</span>
      </router-link>
    </header>

    <!-- SECTION 1: Hero Planétaire -->
    <section class="hero-planetary" ref="heroSection">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="matrix-rain">
          <span v-for="n in 50" :key="'rain-'+n" class="rain-char" :style="getRainStyle(n)">{{ getRandomChar() }}</span>
        </div>
        <div class="globe-container">
          <div class="globe-3d" ref="globe"></div>
          <div class="globe-glow"></div>
          <div class="globe-pulse"></div>
        </div>
      </div>
      
      <div class="hero-content" :class="{ 'show': showHero }">
        <h1 class="hero-title">
          <span class="title-gradient">Économie Régénératrice</span>
        </h1>
        <p class="hero-subtitle">2050 — Marchés planétaires où chaque euro régénère la planète</p>
        
        <div class="hero-ticker">
          <div class="ticker-content">
            <span class="ticker-item"><span class="ticker-dot"></span>Live : −67% CO₂ global</span>
            <span class="ticker-separator">|</span>
            <span class="ticker-item">+342% sols vivants</span>
            <span class="ticker-separator">|</span>
            <span class="ticker-item">8B connectés</span>
          </div>
        </div>
      </div>
      
      <button class="scroll-cta" @click="scrollToHub">
        <span>Explorer le Hub</span>
        <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </button>
    </section>

    <!-- SECTION 2: Hub Régénératif Mondial -->
    <section class="hub-section" ref="hubSection">
      <div class="hub-bg">
        <div class="flux-lines">
          <svg class="flux-svg" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path v-for="n in 8" :key="'flux-'+n" class="flux-path" :d="getFluxPath(n)" />
          </svg>
        </div>
      </div>
      
      <div class="hub-grid">
        <div class="hub-text">
          <h2 class="section-title">Le Hub Régénératif Global</h2>
          <div class="hub-narrative">
            <p>2050. Un réseau économique vivant connecte <strong>3 milliards de producteurs</strong>, 
            <strong>2 milliards d'artisans</strong> et <strong>8 milliards de citoyens</strong>.</p>
            <p>Chaque transaction régénère la planète. Les circuits courts représentent désormais 
            <strong>67%</strong> de l'approvisionnement mondial, réduisant l'empreinte carbone alimentaire 
            de <strong>2.4 à 0.8t</strong> par habitant.</p>
          </div>
          
          <div class="hub-stats">
            <div class="hub-stat" v-for="stat in hubStats" :key="stat.label">
              <span class="stat-icon">{{ stat.icon }}</span>
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
              <span class="stat-source">{{ stat.source }}</span>
            </div>
          </div>
        </div>
        
        <div class="hub-visual">
          <div class="hub-canvas">
            <!-- Cercles orbitaux -->
            <div class="orbit orbit-1"></div>
            <div class="orbit orbit-2"></div>
            <div class="orbit orbit-3"></div>
            
            <!-- Hub Central -->
            <div class="hub-center">
              <div class="center-glow"></div>
              <div class="center-core">
                <span class="center-icon">🌍</span>
              </div>
              <span class="center-label">Hub Central</span>
            </div>
            
            <!-- Nodes orbitaux -->
            <div class="orbit-node node-producers">
              <div class="node-dot"></div>
              <div class="node-info">
                <span class="node-icon">🌾</span>
                <span class="node-name">Producteurs</span>
                <span class="node-count">3 Mds</span>
              </div>
            </div>
            
            <div class="orbit-node node-artisans">
              <div class="node-dot"></div>
              <div class="node-info">
                <span class="node-icon">🔧</span>
                <span class="node-name">Artisans</span>
                <span class="node-count">2 Mds</span>
              </div>
            </div>
            
            <div class="orbit-node node-citizens">
              <div class="node-dot"></div>
              <div class="node-info">
                <span class="node-icon">👥</span>
                <span class="node-name">Citoyens</span>
                <span class="node-count">8 Mds</span>
              </div>
            </div>
            
            <!-- Particules de flux -->
            <div class="flux-particle" v-for="p in 6" :key="'particle-'+p" :style="getParticleStyle(p)"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Dashboard Données Planétaires -->
    <section class="dashboard-section" ref="dashboardSection">
      <div class="dashboard-bg"></div>
      
      <h2 class="section-title centered">Les chiffres planétaires 2050</h2>
      
      <div class="dashboard-grid">
        <!-- Card CO₂ -->
        <div class="data-card" :class="{ 'visible': cardsVisible }">
          <div class="card-header">
            <span class="card-icon">🌍</span>
            <span class="card-label">CO₂ Transport Alimentaire Global</span>
          </div>
          <div class="card-value">
            <span class="value-old">2.4t</span>
            <span class="value-arrow">→</span>
            <span class="value-new" ref="co2Value">{{ animatedCO2 }}t/hab</span>
          </div>
          <div class="card-chart">
            <div class="bar-chart">
              <div class="bar bar-old" :style="{ height: '100%' }">
                <span>2024</span>
              </div>
              <div class="bar bar-new" :style="{ height: `${(0.8/2.4)*100}%` }">
                <span>2050</span>
              </div>
            </div>
          </div>
          <p class="card-text">1.6 milliards de tonnes CO₂/an sauvées grâce aux circuits courts</p>
          <span class="card-source">Source: World Bank Data</span>
        </div>
        
        <!-- Card Sols -->
        <div class="data-card" :class="{ 'visible': cardsVisible }" style="--delay: 0.2s">
          <div class="card-header">
            <span class="card-icon">🌱</span>
            <span class="card-label">Rendements Sols Régénératifs</span>
          </div>
          <div class="card-value single">
            <span class="value-highlight green">+{{ animatedSoils }}%</span>
          </div>
          <div class="card-map">
            <div class="continent" v-for="cont in continents" :key="cont.name" 
              :style="{ left: cont.x, top: cont.y }" :class="cont.class">
              <span class="cont-pulse"></span>
            </div>
          </div>
          <p class="card-text">Capacité de nourrir 10 milliards d'humains atteinte</p>
          <span class="card-source">Source: Rodale Institute</span>
        </div>
        
        <!-- Card Climat -->
        <div class="data-card" :class="{ 'visible': cardsVisible }" style="--delay: 0.4s">
          <div class="card-header">
            <span class="card-icon">🌡️</span>
            <span class="card-label">Réchauffement Climatique Limité</span>
          </div>
          <div class="card-value single">
            <span class="value-highlight orange">+{{ animatedTemp }}°C</span>
          </div>
          <div class="card-thermo">
            <div class="thermo-body">
              <div class="thermo-fill" :style="{ height: `${(1.8/3)*100}%` }"></div>
              <div class="thermo-target"></div>
            </div>
            <div class="thermo-labels">
              <span class="label-danger">+2.5°C évité</span>
              <span class="label-safe">+1.8°C stabilisé</span>
            </div>
          </div>
          <p class="card-text">0.7°C de réchauffement évités par l'économie régénératrice</p>
          <span class="card-source">Source: NASA GISS</span>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Calculateur Impact Personnel -->
    <section class="calculator-section" ref="calcSection">
      <div class="calc-bg">
        <div class="calc-glow"></div>
      </div>
      
      <div class="calc-container">
        <h2 class="calc-title">Ton pouvoir × 8 milliards = planète sauvée</h2>
        
        <div class="calc-inputs">
          <div class="input-group">
            <label>Ton pays</label>
            <select v-model="calcInputs.country" class="calc-select">
              <option v-for="country in countries" :key="country.code" :value="country.code">
                {{ country.name }}
              </option>
            </select>
          </div>
          
          <div class="input-group">
            <label>Courses par semaine</label>
            <div class="range-container">
              <input type="range" v-model.number="calcInputs.trips" min="1" max="7" class="calc-range">
              <span class="range-value">{{ calcInputs.trips }}</span>
            </div>
          </div>
          
          <div class="input-group">
            <label>Distance marché (km)</label>
            <div class="range-container">
              <input type="range" v-model.number="calcInputs.distance" min="1" max="100" class="calc-range">
              <span class="range-value">{{ calcInputs.distance }} km</span>
            </div>
          </div>
        </div>
        
        <button class="calc-btn" @click="calculateImpact" :class="{ 'calculating': isCalculating }">
          <span>Calculer mon impact global →</span>
          <div class="btn-glow"></div>
        </button>
        
        <div class="calc-results" :class="{ 'show': showResults }">
          <div class="result-explosion">
            <div class="result-card">
              <span class="result-value">{{ results.co2 }} kg</span>
              <span class="result-label">CO₂ économisé/semaine</span>
            </div>
            <div class="result-card">
              <span class="result-value">{{ results.money }}€</span>
              <span class="result-label">économies/an</span>
            </div>
            <div class="result-card">
              <span class="result-value">{{ results.farms }}</span>
              <span class="result-label">ferme locale soutenue</span>
            </div>
          </div>
          
          <p class="result-global">
            <span class="global-multiplier">× 8 milliards =</span>
            <span class="global-value">{{ results.globalCO2 }}M tonnes/semaine sauvées</span>
          </p>
          
          <button class="save-btn" @click="saveProfile">
            <span>💾 Sauvegarder mon profil REWORLD</span>
          </button>
        </div>
      </div>
    </section>

    <!-- SECTION 5: Actions + Compteur Global -->
    <section class="actions-section" ref="actionsSection">
      <h3 class="actions-intro">8 milliards attendent ton nœud...</h3>
      
      <div class="action-cards-grid">
        <div class="action-card-warp" v-for="action in globalActions" :key="action.title" @click="handleAction(action)">
          <div class="card-inner">
            <span class="card-icon">{{ action.icon }}</span>
            <h4 class="card-title">{{ action.title }}</h4>
            <p class="card-desc">{{ action.desc }}</p>
            <span class="card-cta">{{ action.cta }} →</span>
          </div>
          <div class="card-warp-effect"></div>
        </div>
      </div>
      
      <div class="global-counter">
        <div class="counter-globe">
          <div class="globe-mini"></div>
        </div>
        <h4 class="counter-title">Impact REWORLD Live</h4>
        <div class="counter-stats">
          <div class="counter-stat">
            <span class="counter-value">{{ liveCounter.co2 }}M</span>
            <span class="counter-label">kg CO₂</span>
          </div>
          <div class="counter-stat">
            <span class="counter-value">{{ liveCounter.money }}M€</span>
            <span class="counter-label">économisés</span>
          </div>
          <div class="counter-stat">
            <span class="counter-value">{{ liveCounter.farms }}M</span>
            <span class="counter-label">fermes</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Capsules -->
    <section class="capsule-nav-section">
      <div class="capsule-nav">
        <router-link to="/" class="nav-capsule prev">← Accueil</router-link>
        <span class="nav-current">Capsule 01</span>
        <router-link to="/capsule-demo" class="nav-capsule next">Capsule 02 →</router-link>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'CapsuleEco',
  components: { AppFooter },
  setup() {
    // Refs
    const heroSection = ref(null)
    const hubSection = ref(null)
    const dashboardSection = ref(null)
    const calcSection = ref(null)
    const actionsSection = ref(null)
    
    // États
    const headerVisible = ref(false)
    const showHero = ref(false)
    const cardsVisible = ref(false)
    const isCalculating = ref(false)
    const showResults = ref(false)
    
    // Données animées
    const animatedCO2 = ref('0.0')
    const animatedSoils = ref(0)
    const animatedTemp = ref('0.0')
    
    // Inputs calculateur
    const calcInputs = reactive({
      country: 'FR',
      trips: 3,
      distance: 15
    })
    
    // Résultats calculateur
    const results = reactive({
      co2: '0.0',
      money: '0',
      farms: '0',
      globalCO2: '0'
    })
    
    // Live counter
    const liveCounter = reactive({
      co2: 247,
      money: 890,
      farms: 14
    })
    
    // Data
    const hubStats = [
      { icon: '🌾', value: '3B', label: 'sols régénérés (+342%)', source: 'Rodale Institute' },
      { icon: '🛠️', value: '2B', label: 'artisans circulaires', source: 'Ellen MacArthur Foundation' },
      { icon: '🌍', value: '8B', label: 'co-créateurs actifs', source: 'World Bank' }
    ]
    
    const continents = [
      { name: 'NA', x: '20%', y: '30%', class: 'active' },
      { name: 'SA', x: '30%', y: '60%', class: 'active' },
      { name: 'EU', x: '48%', y: '25%', class: 'active' },
      { name: 'AF', x: '50%', y: '50%', class: 'active' },
      { name: 'AS', x: '70%', y: '35%', class: 'active' },
      { name: 'OC', x: '80%', y: '65%', class: 'active' }
    ]
    
    const countries = [
      { code: 'FR', name: 'France' },
      { code: 'DE', name: 'Allemagne' },
      { code: 'ES', name: 'Espagne' },
      { code: 'IT', name: 'Italie' },
      { code: 'UK', name: 'Royaume-Uni' },
      { code: 'US', name: 'États-Unis' },
      { code: 'CA', name: 'Canada' },
      { code: 'BR', name: 'Brésil' },
      { code: 'JP', name: 'Japon' },
      { code: 'AU', name: 'Australie' },
      { code: 'IN', name: 'Inde' },
      { code: 'CN', name: 'Chine' }
    ]
    
    const globalActions = [
      { 
        icon: '📍', 
        title: 'Circuits courts locaux', 
        desc: 'Trouve les marchés et producteurs près de chez toi',
        cta: 'Géolocaliser',
        action: 'geo'
      },
      { 
        icon: '🛒', 
        title: 'Artisans planétaires', 
        desc: 'Marketplace mondiale d\'artisans régénératifs',
        cta: 'Explorer',
        action: 'marketplace'
      },
      { 
        icon: '⚡', 
        title: 'Hydrogène 2050', 
        desc: 'Découvre la prochaine capsule technologique',
        cta: 'Capsule 02',
        action: 'capsule2'
      }
    ]
    
    // Helpers visuels
    const getRainStyle = (n) => ({
      '--delay': `${Math.random() * 5}s`,
      '--duration': `${3 + Math.random() * 4}s`,
      '--x': `${Math.random() * 100}%`,
      opacity: 0.1 + Math.random() * 0.3
    })
    
    const getRandomChar = () => {
      const chars = '01アイウエオカキクケコ₿€$¥£∑∏∂∫'
      return chars[Math.floor(Math.random() * chars.length)]
    }
    
    const getFluxPath = (n) => {
      const y = 50 + n * 60
      return `M0,${y} Q300,${y + 30} 600,${y} T1200,${y}`
    }
    
    const getParticleStyle = (n) => {
      const delay = (n - 1) * 1.5
      const duration = 4 + Math.random() * 2
      return {
        '--particle-delay': `${delay}s`,
        '--particle-duration': `${duration}s`,
        '--particle-orbit': `${120 + (n % 3) * 30}px`
      }
    }
    
    // Scroll
    const scrollToHub = () => {
      hubSection.value?.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Animation compteurs
    const animateValue = (ref, target, duration = 2000, decimals = 1) => {
      const start = 0
      const startTime = performance.now()
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = start + (target - start) * eased
        
        ref.value = decimals > 0 ? current.toFixed(decimals) : Math.round(current)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
    
    // Calculateur
    const calculateImpact = async () => {
      isCalculating.value = true
      
      // Simulation calcul (API Carbon réelle à intégrer)
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const { trips, distance } = calcInputs
      const co2PerKm = 0.21 // kg CO2/km voiture moyenne
      const co2Saved = (distance * 2 * trips * co2PerKm * 0.67).toFixed(1) // 67% réduction circuits courts
      const moneySaved = Math.round(trips * 15 * 52) // ~15€ économisés/course/an
      
      results.co2 = co2Saved
      results.money = moneySaved.toString()
      results.farms = '1'
      results.globalCO2 = Math.round(parseFloat(co2Saved) * 8000 / 1000).toString()
      
      isCalculating.value = false
      showResults.value = true
      
      // Effet explosion
      triggerConfetti()
    }
    
    const triggerConfetti = () => {
      // Animation CSS confetti
      const calcEl = calcSection.value
      if (calcEl) {
        calcEl.classList.add('confetti-active')
        setTimeout(() => calcEl.classList.remove('confetti-active'), 2000)
      }
    }
    
    const saveProfile = () => {
      const profil = JSON.parse(localStorage.getItem('reworld') || '{}')
      profil.eco = {
        country: calcInputs.country,
        trips: calcInputs.trips,
        distance: calcInputs.distance,
        co2Total: (profil.eco?.co2Total || 0) + parseFloat(results.co2),
        lastUpdated: new Date().toISOString()
      }
      localStorage.setItem('reworld', JSON.stringify(profil))
      alert('Profil sauvegardé ! Ton impact est enregistré.')
    }
    
    const handleAction = (action) => {
      switch(action.action) {
        case 'geo':
          // Géolocalisation circuits courts
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
              const { latitude, longitude } = pos.coords
              window.open(`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=14/${latitude}/${longitude}`, '_blank')
            })
          }
          break
        case 'marketplace':
          window.open('https://www.etsy.com/market/artisan_local', '_blank')
          break
        case 'capsule2':
          // Navigation vers capsule tech
          window.location.href = '/capsule-tech'
          break
      }
    }
    
    // Scroll observer
    const handleScroll = () => {
      const scrollY = window.scrollY
      headerVisible.value = scrollY > 100
      
      // Check sections visibility
      const checkVisibility = (el, callback) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          callback()
        }
      }
      
      checkVisibility(dashboardSection.value, () => {
        if (!cardsVisible.value) {
          cardsVisible.value = true
          animateValue(animatedCO2, 0.8, 2000, 1)
          animateValue(animatedSoils, 342, 2500, 0)
          animateValue(animatedTemp, 1.8, 2000, 1)
        }
      })
    }
    
    // Live counter animation
    let counterInterval
    const startLiveCounter = () => {
      counterInterval = setInterval(() => {
        liveCounter.co2 += Math.floor(Math.random() * 3)
        liveCounter.money += Math.floor(Math.random() * 2)
        liveCounter.farms += Math.random() > 0.8 ? 1 : 0
      }, 3000)
    }
    
    onMounted(() => {
      setTimeout(() => showHero.value = true, 300)
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      startLiveCounter()
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      if (counterInterval) clearInterval(counterInterval)
    })
    
    return {
      // Refs
      heroSection, hubSection, dashboardSection, calcSection, actionsSection,
      // États
      headerVisible, showHero, cardsVisible, isCalculating, showResults,
      // Data
      animatedCO2, animatedSoils, animatedTemp,
      calcInputs, results, liveCounter,
      hubStats, continents, countries, globalActions,
      // Methods
      getRainStyle, getRandomChar, getFluxPath, getParticleStyle,
      scrollToHub, calculateImpact, saveProfile, handleAction
    }
  }
}
</script>

<style scoped>
/* ==========================================
   VARIABLES CAPSULE ECO
   ========================================== */
.capsule-eco {
  --cyan-primary: #00D4FF;
  --cyan-glow: rgba(0, 212, 255, 0.4);
  --cyan-dark: #0099CC;
  --black-space: #000;
  --navy-galaxy: #0A0A2E;
  --slate-dark: #1A1A3E;
  --green-regen: #00C9A7;
  --orange-warm: #FF6B35;
}

.capsule-page {
  background: var(--black-space);
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
  display: flex;
  align-items: center;
  z-index: 100;
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  pointer-events: none;
}

.capsule-header.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.capsule-page-logo {
  width: 6rem;
  height: auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--cyan-primary);
}

.back-arrow {
  width: 20px;
  height: 20px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

/* ==========================================
   SECTION 1: HERO PLANÉTAIRE
   ========================================== */
.hero-planetary {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--black-space) 0%, var(--navy-galaxy) 50%, rgba(0, 212, 255, 0.1) 100%);
}

/* Matrix Rain Effect */
.matrix-rain {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.rain-char {
  position: absolute;
  top: -20px;
  left: var(--x);
  color: var(--cyan-primary);
  font-family: 'Courier New', monospace;
  font-size: 14px;
  animation: matrixFall var(--duration) var(--delay) linear infinite;
}

@keyframes matrixFall {
  0% { transform: translateY(-20px); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

/* Globe 3D */
.globe-container {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
}

.globe-3d {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--cyan-primary), var(--cyan-dark), var(--navy-galaxy));
  box-shadow: 
    0 0 60px var(--cyan-glow),
    inset -20px -20px 60px rgba(0,0,0,0.5);
  animation: globeFloat 6s ease-in-out infinite, globeRotate 20s linear infinite;
}

@keyframes globeFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes globeRotate {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

.globe-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
  animation: pulseGlow 3s ease-in-out infinite;
}

.globe-pulse {
  position: absolute;
  inset: -40px;
  border: 2px solid var(--cyan-primary);
  border-radius: 50%;
  opacity: 0;
  animation: pulseBorder 3s ease-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes pulseBorder {
  0% { transform: scale(0.8); opacity: 0.8; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease-out;
}

.hero-content.show {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  margin-bottom: 1.5rem;
}

.title-gradient {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--cyan-primary) 0%, #0066FF 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: holoScan 3s linear infinite;
}

@keyframes holoScan {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.2); }
}

.hero-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 3rem;
}

/* Ticker */
.hero-ticker {
  display: inline-flex;
  padding: 1rem 2rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 50px;
  backdrop-filter: blur(10px);
}

.ticker-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--cyan-primary);
}

.ticker-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--cyan-primary);
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: tickerPulse 1.5s ease-in-out infinite;
}

@keyframes tickerPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.ticker-separator {
  color: rgba(255, 255, 255, 0.3);
}

/* Scroll CTA */
.scroll-cta {
  position: absolute;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: color 0.3s ease;
}

.scroll-cta:hover {
  color: var(--cyan-primary);
}

.scroll-cta span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
}

.scroll-cta svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  animation: bounceDown 2s ease-in-out infinite;
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
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-capsule:hover {
  color: var(--green-regen);
}

.nav-current {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--green-regen);
  padding: 0.5rem 1rem;
  background: rgba(0, 201, 167, 0.1);
  border-radius: 20px;
}

/* ==========================================
   SECTION 2: HUB RÉGÉNÉRATIF
   ========================================== */
.hub-section {
  position: relative;
  min-height: 100vh;
  padding: 8rem 2rem;
  overflow: hidden;
}

.hub-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--navy-galaxy) 0%, var(--black-space) 100%);
}

.flux-lines {
  position: absolute;
  inset: 0;
  opacity: 0.3;
}

.flux-svg {
  width: 100%;
  height: 100%;
}

.flux-path {
  fill: none;
  stroke: var(--green-regen);
  stroke-width: 1;
  stroke-dasharray: 10 5;
  animation: fluxFlow 3s linear infinite;
}

@keyframes fluxFlow {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -30; }
}

.hub-grid {
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
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
}

.section-title.centered {
  text-align: center;
}

.hub-narrative {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
}

.hub-narrative p {
  margin-bottom: 1.5rem;
}

.hub-narrative strong {
  color: var(--cyan-primary);
}

/* Hub Stats */
.hub-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.hub-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  flex: 1;
  min-width: 150px;
}

.stat-icon {
  font-size: 1.5rem;
}

.stat-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--cyan-primary);
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.stat-source {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
}

/* Hub Visual - Nouveau design orbital */
.hub-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hub-canvas {
  position: relative;
  width: 350px;
  height: 350px;
}

/* Orbites */
.orbit {
  position: absolute;
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbit-1 {
  width: 120px;
  height: 120px;
  border-color: rgba(0, 212, 255, 0.25);
}

.orbit-2 {
  width: 200px;
  height: 200px;
  animation: orbitPulse 4s ease-in-out infinite;
}

.orbit-3 {
  width: 280px;
  height: 280px;
  animation: orbitPulse 4s ease-in-out infinite 1s;
}

@keyframes orbitPulse {
  0%, 100% { border-color: rgba(0, 212, 255, 0.1); }
  50% { border-color: rgba(0, 212, 255, 0.3); }
}

/* Hub Central */
.hub-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
}

.center-glow {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
  border-radius: 50%;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.3); opacity: 0.3; }
}

.center-core {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--cyan-primary), var(--cyan-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px var(--cyan-glow), inset 0 0 20px rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
}

.center-icon {
  font-size: 1.8rem;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.center-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--cyan-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Nodes orbitaux */
.orbit-node {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 5;
}

.node-producers {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.node-artisans {
  bottom: 20%;
  left: 5%;
}

.node-citizens {
  bottom: 20%;
  right: 5%;
}

.node-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--green-regen);
  box-shadow: 0 0 15px rgba(0, 201, 167, 0.6);
  animation: nodePulse 2s ease-in-out infinite;
}

.node-artisans .node-dot {
  background: #FFD700;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
  animation-delay: 0.5s;
}

.node-citizens .node-dot {
  background: #00A8E8;
  box-shadow: 0 0 15px rgba(0, 168, 232, 0.6);
  animation-delay: 1s;
}

@keyframes nodePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}

.node-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.node-icon {
  font-size: 1.2rem;
}

.node-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #FFFFFF;
}

.node-count {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Particules de flux */
.flux-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--cyan-primary);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  box-shadow: 0 0 10px var(--cyan-primary);
  animation: orbitParticle var(--particle-duration, 4s) linear infinite;
  animation-delay: var(--particle-delay, 0s);
  --orbit-radius: var(--particle-orbit, 100px);
}

@keyframes orbitParticle {
  0% {
    transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius));
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius));
    opacity: 0;
  }
}

/* ==========================================
   SECTION 3: DASHBOARD DONNÉES
   ========================================== */
.dashboard-section {
  position: relative;
  padding: 8rem 2rem;
  min-height: 100vh;
}

.dashboard-bg {
  position: absolute;
  inset: 0;
  background: var(--slate-dark);
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
  background: linear-gradient(145deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 24px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
  transition-delay: var(--delay, 0s);
}

.data-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.data-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 32px 64px var(--cyan-glow);
  border-color: var(--cyan-primary);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 1.5rem;
}

.card-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-value {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-value.single {
  justify-content: center;
}

.value-old {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: line-through;
}

.value-arrow {
  font-size: 1.5rem;
  color: var(--cyan-primary);
}

.value-new {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: var(--cyan-primary);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.value-highlight {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 900;
}

.value-highlight.green {
  color: var(--green-regen);
  text-shadow: 0 0 30px rgba(0, 201, 167, 0.5);
}

.value-highlight.orange {
  background: linear-gradient(135deg, var(--orange-warm), var(--cyan-primary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Bar Chart */
.card-chart {
  height: 120px;
  margin-bottom: 1.5rem;
}

.bar-chart {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  height: 100%;
}

.bar {
  width: 60px;
  background: linear-gradient(180deg, var(--cyan-primary), var(--cyan-dark));
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.5rem;
  transition: height 2s ease-out;
}

.bar span {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
}

.bar-old {
  background: rgba(255, 255, 255, 0.2);
}

/* Map */
.card-map {
  position: relative;
  height: 100px;
  margin-bottom: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

.continent {
  position: absolute;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
}

.continent.active .cont-pulse {
  width: 100%;
  height: 100%;
  background: var(--green-regen);
  border-radius: 50%;
  animation: contPulse 2s ease-out infinite;
}

@keyframes contPulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

/* Thermometer */
.card-thermo {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 120px;
  margin-bottom: 1.5rem;
}

.thermo-body {
  width: 30px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}

.thermo-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, var(--orange-warm), var(--cyan-primary));
  border-radius: 15px;
  transition: height 2s ease-out;
}

.thermo-target {
  position: absolute;
  top: 17%;
  left: -5px;
  right: -5px;
  height: 2px;
  background: #ff4444;
}

.thermo-labels {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.label-danger {
  font-size: 0.75rem;
  color: #ff4444;
}

.label-safe {
  font-size: 0.75rem;
  color: var(--green-regen);
}

.card-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-source {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-style: italic;
}

/* ==========================================
   SECTION 4: CALCULATEUR
   ========================================== */
.calculator-section {
  position: relative;
  padding: 8rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.calc-bg {
  position: absolute;
  inset: 0;
  background: var(--black-space);
}

.calc-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%);
  opacity: 0.3;
}

.calc-container {
  position: relative;
  z-index: 10;
  max-width: 800px;
  width: 100%;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 32px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 60px rgba(0, 212, 255, 0.2);
}

.calc-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--cyan-primary);
  text-align: center;
  margin-bottom: 3rem;
}

.calc-inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-group label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
}

.calc-select {
  padding: 1rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.calc-select:focus {
  outline: none;
  border-color: var(--cyan-primary);
}

.calc-select option {
  background: var(--navy-galaxy);
}

.range-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.calc-range {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  background: rgba(0, 212, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;
}

.calc-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  background: var(--cyan-primary);
  border-radius: 50%;
  box-shadow: 0 0 15px var(--cyan-glow);
  cursor: pointer;
}

.range-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--cyan-primary);
  min-width: 60px;
  text-align: right;
}

/* Calc Button */
.calc-btn {
  position: relative;
  display: block;
  width: 100%;
  padding: 1.25rem 2rem;
  background: linear-gradient(135deg, var(--cyan-primary) 0%, var(--cyan-dark) 100%);
  border: none;
  border-radius: 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--black-space);
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 16px 48px var(--cyan-glow);
}

.calc-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 64px var(--cyan-glow);
}

.calc-btn.calculating {
  opacity: 0.7;
  pointer-events: none;
}

.calc-btn .btn-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: width 0.6s, height 0.6s;
}

.calc-btn:hover .btn-glow {
  width: 400px;
  height: 400px;
}

/* Results */
.calc-results {
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  pointer-events: none;
}

.calc-results.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.result-explosion {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.result-card {
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  animation: resultPop 0.6s ease-out backwards;
}

.result-card:nth-child(1) { animation-delay: 0.1s; }
.result-card:nth-child(2) { animation-delay: 0.2s; }
.result-card:nth-child(3) { animation-delay: 0.3s; }

@keyframes resultPop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.result-value {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--cyan-primary);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.result-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.result-global {
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 201, 167, 0.1);
  border: 1px solid rgba(0, 201, 167, 0.3);
  border-radius: 16px;
  margin-bottom: 2rem;
}

.global-multiplier {
  display: block;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
}

.global-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--green-regen);
}

.save-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 2px solid var(--cyan-primary);
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--cyan-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.save-btn:hover {
  background: var(--cyan-primary);
  color: var(--black-space);
}

/* Confetti Effect */
.calculator-section.confetti-active .calc-container {
  animation: shake 0.1s ease-in-out 3;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* ==========================================
   SECTION 5: ACTIONS + COMPTEUR
   ========================================== */
.actions-section {
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--black-space) 0%, var(--navy-galaxy) 100%);
}

.actions-intro {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  color: var(--cyan-primary);
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.8;
}

.action-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 6rem;
}

.action-card-warp {
  position: relative;
  padding: 2.5rem;
  background: linear-gradient(145deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 0, 0, 0.4) 100%);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
}

.action-card-warp:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 32px 64px var(--cyan-glow);
  border-color: var(--cyan-primary);
}

.card-inner {
  position: relative;
  z-index: 2;
}

.action-card-warp .card-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.action-card-warp .card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
}

.action-card-warp .card-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.action-card-warp .card-cta {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--cyan-primary);
}

.card-warp-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, var(--cyan-glow) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.action-card-warp:hover .card-warp-effect {
  opacity: 0.3;
}

/* Global Counter */
.global-counter {
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 3rem;
  background: rgba(0, 212, 255, 0.05);
  border: 2px solid var(--cyan-primary);
  border-radius: 32px;
  text-align: center;
  box-shadow: 0 0 60px rgba(0, 212, 255, 0.2);
}

.counter-globe {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
}

.globe-mini {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--cyan-primary), var(--cyan-dark));
  box-shadow: 0 0 40px var(--cyan-glow);
  animation: globeFloat 4s ease-in-out infinite;
}

.counter-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
}

.counter-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
}

.counter-stat {
  text-align: center;
}

.counter-value {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 900;
  color: var(--cyan-primary);
  text-shadow: 0 0 20px var(--cyan-glow);
}

.counter-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 1024px) {
  .hub-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hub-visual {
    order: -1;
    height: 320px;
  }
  
  .hub-canvas {
    width: 280px;
    height: 280px;
  }
  
  .orbit-3 {
    width: 240px;
    height: 240px;
  }
  
  .orbit-2 {
    width: 170px;
    height: 170px;
  }
  
  .node-producers {
    top: 5%;
  }
  
  .node-artisans,
  .node-citizens {
    bottom: 15%;
  }
  
  .dashboard-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .calc-inputs {
    grid-template-columns: 1fr;
  }
  
  .result-explosion {
    grid-template-columns: 1fr;
  }
  
  .action-cards-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
  
  .counter-stats {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .globe-container {
    display: none;
  }
  
  .hero-content {
    padding: 1rem;
  }
  
  .title-gradient {
    font-size: clamp(2rem, 10vw, 4rem);
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .ticker-content {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .ticker-separator {
    display: none;
  }
  
  .hub-stats {
    flex-direction: column;
  }
  
  .calc-container {
    padding: 1.5rem;
  }
  
  .value-highlight {
    font-size: 3rem;
  }
}
</style>
