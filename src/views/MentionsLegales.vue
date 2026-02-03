<template>
  <div class="legal-page">
    <div class="legal-container">
      <router-link to="/" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Retour à l'accueil
      </router-link>
      
      <h1 class="legal-title">Mentions Légales</h1>
      <p class="legal-update">Dernière mise à jour : 31 janvier 2026</p>
      
      <section class="legal-section">
        <h2>1. Éditeur du site</h2>
        <p>Le site REWORLD est un projet étudiant réalisé dans le cadre du BUT MMI (Métiers du Multimédia et de l'Internet), 3ème année, spécialisation Communication.</p>
        <ul>
          <li><strong>Responsable de publication :</strong> Théo GASNER</li>
          <li><strong>Contact :</strong> contact@reworld.fr</li>
          <li><strong>Établissement :</strong> IUT - Département MMI</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2>2. Hébergement</h2>
        <p>Ce site est hébergé par :</p>
        <ul>
          <li><strong>Hébergeur :</strong> [Nom de l'hébergeur]</li>
          <li><strong>Adresse :</strong> [Adresse de l'hébergeur]</li>
          <li><strong>Contact :</strong> [Contact de l'hébergeur]</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2>3. Propriété intellectuelle</h2>
        <p>L'ensemble du contenu présent sur le site REWORLD (textes, images, graphismes, logo, icônes, animations, vidéos, etc.) est protégé par les dispositions du Code de la propriété intellectuelle.</p>
        <p>Toute reproduction, représentation, modification, publication, transmission, ou plus généralement toute exploitation non autorisée du site ou de son contenu, est interdite sans accord préalable écrit de l'éditeur.</p>
        <p>Le concept REWORLD, les capsules temporelles et leur contenu sont des créations originales dans le cadre d'un projet pédagogique.</p>
      </section>
      
      <section class="legal-section">
        <h2>4. Crédits</h2>
        <h3>Conception et développement</h3>
        <ul>
          <li>Direction artistique : Théo GASNER</li>
          <li>Développement web : Théo GASNER</li>
          <li>Design UX/UI : Théo GASNER</li>
        </ul>
        <h3>Technologies utilisées</h3>
        <ul>
          <li>Vue.js 3</li>
          <li>Vite</li>
          <li>Spline (éléments 3D)</li>
        </ul>
        <h3>Typographies</h3>
        <ul>
          <li>Montserrat - Google Fonts</li>
          <li>Quicksand - Google Fonts</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2>5. Limitation de responsabilité</h2>
        <p>REWORLD est un projet fictif à visée pédagogique présentant des visions de futurs désirables. Les informations présentées dans les capsules temporelles sont des projections imaginaires et ne constituent pas des prédictions ou des conseils.</p>
        <p>L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qui y sont contenues.</p>
      </section>
      
      <section class="legal-section">
        <h2>6. Liens hypertextes</h2>
        <p>Le site REWORLD peut contenir des liens vers d'autres sites internet. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
      </section>
      
      <section class="legal-section">
        <h2>7. Droit applicable</h2>
        <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
      </section>
      
      <section class="legal-section">
        <h2>8. Contact</h2>
        <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@reworld.fr">contact@reworld.fr</a></p>
      </section>
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'MentionsLegales',
  components: { AppFooter }
}
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: #0A0A0A;
  padding: 6rem 2rem 4rem;
}

.legal-container {
  max-width: 800px;
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

.legal-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #FFFFFF, #00C9A7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.legal-update {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  margin-bottom: 3rem;
}

.legal-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.legal-section:last-child {
  border-bottom: none;
}

.legal-section h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #00C9A7;
  margin-bottom: 1rem;
}

.legal-section h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 1.5rem 0 0.75rem;
}

.legal-section p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.legal-section ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.legal-section li {
  color: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.legal-section li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #00C9A7;
}

.legal-section li strong {
  color: rgba(255, 255, 255, 0.9);
}

.legal-section a {
  color: #00C9A7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-section a:hover {
  color: #FFFFFF;
}

@media (max-width: 768px) {
  .legal-page {
    padding: 5rem 1.5rem 3rem;
  }
}
</style>
