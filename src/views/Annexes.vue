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
      
      <!-- Section Réponse au Sujet -->
      <section class="annexe-section">
        <div class="section-header">
          <span class="section-number">01</span>
          <h2>Réponse au Sujet</h2>
        </div>
        <div class="section-content">
          <div class="theme-badge">Thème : « Réenchanter le monde »</div>
          
          <p>J'ai choisi de réaliser un projet intitulé <strong>REWORLD</strong>, en réponse au thème « Réenchanter le monde ». Ce projet propose une expérience de storytelling interactif et immersif qui projette les utilisateurs dans un futur positif et régénéré à l'horizon 2050. L'objectif est de remplacer les discours anxiogènes souvent associés à l'avenir par une vision inspirante, concrète et porteuse d'espoir.</p>
          
          <p>REWORLD s'articule autour de <strong>quatre capsules narratives</strong>, chacune explorant un domaine clé de la société :</p>
          
          <div class="capsules-grid">
            <div class="capsule-item eco">
              <span class="capsule-icon">💰</span>
              <span class="capsule-name">Économie</span>
            </div>
            <div class="capsule-item demo">
              <span class="capsule-icon">🗳️</span>
              <span class="capsule-name">Démocratie</span>
            </div>
            <div class="capsule-item tech">
              <span class="capsule-icon">🔗</span>
              <span class="capsule-name">Technologie</span>
            </div>
            <div class="capsule-item nature">
              <span class="capsule-icon">🌿</span>
              <span class="capsule-name">Nature</span>
            </div>
          </div>
          
          <p>À travers ces récits interactifs, l'utilisateur découvre un quotidien transformé, où des choix collectifs et des innovations ont permis d'améliorer la vie humaine et l'équilibre de la planète. Chaque capsule met en scène des situations réalistes et accessibles, montrant comment de petites évolutions peuvent produire de grands changements.</p>
          
          <div class="highlight-box">
            <p>Le projet vise à <strong>sensibiliser, inspirer et engager</strong> le public en proposant une autre manière de penser le futur. Plutôt que d'alerter par la peur, REWORLD invite à l'action par la projection positive et la compréhension des leviers de transformation possibles.</p>
          </div>
          
          <p>L'expérience numérique devient ainsi un outil de réflexion, d'espoir et de prise de conscience, illustrant comment il est possible de réenchanter le monde par l'imagination et l'innovation.</p>
        </div>
      </section>

      <!-- Section Piste UX & Communication -->
      <section class="annexe-section">
        <div class="section-header">
          <span class="section-number">02</span>
          <h2>Piste UX & Communication</h2>
        </div>
        <div class="section-content">
          <h3>🎯 Public cible et contexte d'usage</h3>
          <p>REWORLD s'adresse principalement aux <strong>jeunes adultes et adultes connectés</strong>, sensibles aux enjeux de société, d'écologie et d'innovation, et régulièrement exposés à des discours anxiogènes sur l'avenir. Le projet est pensé pour un usage personnel, dans un moment de découverte, de curiosité ou de réflexion.</p>
          
          <h3>✨ Promesse de l'expérience</h3>
          <p>REWORLD propose une <strong>expérience immersive de storytelling interactif</strong> qui projette l'utilisateur dans un futur régénéré en 2050. En remplaçant la peur par une vision positive et réaliste, le projet réenchante le monde en montrant que des transformations concrètes sont possibles et accessibles. L'expérience apporte inspiration, espoir et compréhension des leviers de changement.</p>
          
          <h3>📣 Objectifs de communication</h3>
          <ul class="objectives-list">
            <li>Sensibiliser aux grands enjeux actuels (économie, démocratie, technologie, nature)</li>
            <li>Changer le regard porté sur le futur en valorisant des scénarios positifs</li>
            <li>Inspirer et encourager une réflexion constructive</li>
            <li>Montrer que l'évolution du monde passe par des choix collectifs et des innovations</li>
          </ul>
          
          <h3>🛤️ Mécaniques de parcours</h3>
          <p>L'utilisateur découvre une introduction immersive avant d'accéder aux quatre capsules narratives, chacune centrée sur un thème. Chaque capsule propose un récit interactif mêlant <strong>textes courts, visuels, animations et choix simples</strong>, permettant d'explorer un quotidien transformé en 2050.</p>
          <p>Le ton est positif, accessible et immersif. Des éléments de médiation (chiffres clés, comparaisons présent/futur, messages d'impact) renforcent la compréhension et l'engagement.</p>
        </div>
      </section>

      <!-- Section Piste Technique -->
      <section class="annexe-section">
        <div class="section-header">
          <span class="section-number">03</span>
          <h2>Piste Technique</h2>
        </div>
        <div class="section-content">
          <p>Le projet prend la forme d'un <strong>site web immersif</strong>, servant à la fois d'expérience interactive et de support de rendu. Il est développé à l'aide de technologies web modernes, avec une attention particulière portée aux animations, transitions et à la narration visuelle.</p>
          
          <h3>🛠️ Stack technique</h3>
          <div class="tech-stack">
            <div class="tech-item">
              <span class="tech-icon">⚡</span>
              <span class="tech-name">Vue.js 3</span>
              <span class="tech-desc">Framework JavaScript réactif</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🚀</span>
              <span class="tech-name">Vite</span>
              <span class="tech-desc">Build tool ultra-rapide</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🎨</span>
              <span class="tech-name">CSS3 / Animations</span>
              <span class="tech-desc">Transitions fluides et effets visuels</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">📱</span>
              <span class="tech-name">Responsive Design</span>
              <span class="tech-desc">Adapté à tous les écrans</span>
            </div>
          </div>
          
          <h3>🎯 Intentions techniques</h3>
          <ul class="tech-list">
            <li>Création d'une introduction animée immersive</li>
            <li>Mise en place de parcours interactifs pour chaque capsule narrative</li>
            <li>Intégration de visuels, d'animations légères et d'effets de défilement</li>
            <li>Optimisation des performances (60fps) sur tous les supports</li>
          </ul>
          
          <h3>⚠️ Défis techniques</h3>
          <p>Les enjeux concernent l'équilibre entre immersion et performance, ainsi que la clarté de navigation. Les difficultés portent principalement sur la gestion des animations et la fluidité de l'expérience sur différents supports (responsive).</p>
        </div>
      </section>

      <!-- Section Pitch -->
      <section class="annexe-section pitch-section">
        <div class="section-header">
          <span class="section-number">04</span>
          <h2>Pitch</h2>
        </div>
        <div class="section-content">
          <div class="pitch-title">
            <h3>REWORLD</h3>
            <p class="pitch-tagline">Voyager dans un futur régénéré pour réenchanter le monde</p>
          </div>
          
          <div class="pitch-content">
            <p>REWORLD est une <strong>expérience de storytelling interactif</strong> qui plonge les utilisateurs en 2050, dans un quotidien transformé et positif. À travers quatre capsules narratives dédiées à l'économie, la démocratie, la technologie et la nature, le projet propose de découvrir comment le monde peut évoluer grâce à des choix collectifs et des innovations concrètes.</p>
            
            <p>Face aux discours anxiogènes sur l'avenir, REWORLD adopte une <strong>approche inspirante et accessible</strong>, montrant que le futur peut être porteur d'espoir. L'expérience mêle narration, interactions et immersion visuelle pour sensibiliser, faire réfléchir et encourager une vision constructive du monde de demain.</p>
            
            <div class="pitch-objective">
              <span class="objective-label">Objectif</span>
              <p>Réenchanter le monde en remplaçant la peur par l'imagination positive et actionnable, tout en valorisant les leviers de transformation possibles à l'échelle individuelle et collective.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Figma -->
      <section class="annexe-section figma-section">
        <div class="section-header">
          <span class="section-number">05</span>
          <h2>Maquettes Figma</h2>
        </div>
        <div class="section-content">
          <p>Retrouvez l'ensemble des maquettes, wireframes et prototypes du projet sur Figma :</p>
          
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

      <!-- Crédits -->
      <section class="annexe-section credits-section">
        <div class="section-header">
          <span class="section-number">06</span>
          <h2>Crédits</h2>
        </div>
        <div class="section-content">
          <div class="credits-grid">
            <div class="credit-item">
              <span class="credit-role">Conception & Design</span>
              <span class="credit-name">Théo GASNER</span>
            </div>
            <div class="credit-item">
              <span class="credit-role">Développement</span>
              <span class="credit-name">Théo GASNER</span>
            </div>
            <div class="credit-item">
              <span class="credit-role">Rédaction</span>
              <span class="credit-name">Théo GASNER</span>
            </div>
            <div class="credit-item">
              <span class="credit-role">Formation</span>
              <span class="credit-name">BUT MMI 3 - Spé Communication</span>
            </div>
          </div>
          
          <p class="credits-note">Projet réalisé dans le cadre du BUT Métiers du Multimédia et de l'Internet, 3ème année, spécialisation Communication.</p>
        </div>
      </section>
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'Annexes',
  components: { AppFooter }
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
  color: #FFFFFF;
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

/* Sections */
.annexe-section {
  margin-bottom: 4rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  transition: all 0.4s ease;
}

.annexe-section:hover {
  border-color: rgba(0, 201, 167, 0.2);
  background: rgba(255, 255, 255, 0.03);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.section-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0066FF;
  background: rgba(0, 102, 255, 0.15);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
}

.section-header h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0;
}

.section-content {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
}

.section-content p {
  margin-bottom: 1.25rem;
}

.section-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 2rem 0 1rem;
}

.section-content strong {
  color: #00C9A7;
}

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

.capsule-item:hover {
  transform: translateY(-3px);
}

.capsule-item.eco { border-color: rgba(0, 201, 167, 0.3); }
.capsule-item.demo { border-color: rgba(139, 92, 246, 0.3); }
.capsule-item.tech { border-color: rgba(6, 182, 212, 0.3); }
.capsule-item.nature { border-color: rgba(34, 197, 94, 0.3); }

.capsule-icon {
  font-size: 1.75rem;
}

.capsule-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Highlight Box */
.highlight-box {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(0, 201, 167, 0.1));
  border-left: 3px solid #00C9A7;
  padding: 1.5rem;
  border-radius: 0 12px 12px 0;
  margin: 2rem 0;
}

.highlight-box p {
  margin: 0;
  font-size: 1.05rem;
}

/* Objectives List */
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

.tech-icon {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.tech-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFFFFF;
}

.tech-desc {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Tech List */
.tech-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.tech-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
}

.tech-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #0066FF;
}

/* Pitch Section */
.pitch-section .pitch-title {
  text-align: center;
  margin-bottom: 2rem;
}

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

.pitch-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

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
  letter-spacing: 1px;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.pitch-objective p {
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
}

/* Figma Section */
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
  margin-top: 1.5rem;
}

.figma-link:hover {
  background: rgba(162, 89, 255, 0.15);
  border-color: rgba(162, 89, 255, 0.4);
  transform: translateX(5px);
}

.figma-icon {
  flex-shrink: 0;
}

.figma-content {
  flex: 1;
}

.figma-title {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.25rem;
}

.figma-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
}

.figma-arrow {
  flex-shrink: 0;
  color: rgba(162, 89, 255, 0.7);
  transition: transform 0.3s ease;
}

.figma-link:hover .figma-arrow {
  transform: translate(3px, -3px);
  color: #A259FF;
}

/* Credits Section */
.credits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.credit-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
}

.credit-role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.credit-name {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #FFFFFF;
}

.credits-note {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-style: italic;
  margin: 0;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

/* Responsive */
@media (max-width: 768px) {
  .annexes-page {
    padding: 5rem 1.25rem 3rem;
  }
  
  .annexe-section {
    padding: 1.5rem;
  }
  
  .capsules-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tech-stack {
    grid-template-columns: 1fr;
  }
  
  .credits-grid {
    grid-template-columns: 1fr;
  }
  
  .figma-link {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .figma-arrow {
    display: none;
  }
}

@media (max-width: 480px) {
  .capsules-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
