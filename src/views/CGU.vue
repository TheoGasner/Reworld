<template>
  <div class="legal-page">
    <div class="legal-container">
      <router-link to="/" class="back-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Retour à l'accueil
      </router-link>
      
      <h1 class="legal-title">Conditions Générales d'Utilisation</h1>
      <p class="legal-update">Dernière mise à jour : 31 janvier 2026</p>
      
      <section class="legal-section">
        <h2>1. Objet</h2>
        <p>Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation du site REWORLD.</p>
        <p>REWORLD est une expérience web immersive présentant quatre « capsules temporelles » décrivant des visions optimistes et désirables du futur, réalisée dans le cadre d'un projet étudiant BUT MMI.</p>
      </section>
      
      <section class="legal-section">
        <h2>2. Acceptation des CGU</h2>
        <p>L'accès et l'utilisation du site impliquent l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser le site.</p>
        <p>L'éditeur se réserve le droit de modifier les CGU à tout moment. Les utilisateurs sont invités à les consulter régulièrement.</p>
      </section>
      
      <section class="legal-section">
        <h2>3. Accès au site</h2>
        <p>Le site REWORLD est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les coûts afférents à l'accès au site (matériel informatique, logiciels, connexion internet, etc.) sont à la charge de l'utilisateur.</p>
        <p>L'éditeur met en œuvre tous les moyens raisonnables pour assurer un accès de qualité au site, mais n'est tenu à aucune obligation d'y parvenir. L'éditeur ne peut être tenu responsable de tout dysfonctionnement du réseau ou des serveurs.</p>
      </section>
      
      <section class="legal-section">
        <h2>4. Contenu du site</h2>
        <h3>4.1 Nature du contenu</h3>
        <p>REWORLD présente des visions fictives de futurs désirables à travers quatre capsules temporelles :</p>
        <ul>
          <li><strong>Économie régénératrice :</strong> Vision d'une économie circulaire et solidaire</li>
          <li><strong>Démocratie participative :</strong> Vision d'une gouvernance citoyenne renforcée</li>
          <li><strong>Tech au service du lien :</strong> Vision d'une technologie humaniste</li>
          <li><strong>Nature reconnectée :</strong> Vision d'une harmonie entre urbain et nature</li>
        </ul>
        
        <h3>4.2 Caractère fictif</h3>
        <p>Les scénarios présentés sont des projections imaginaires à visée inspirationnelle. Ils ne constituent en aucun cas des prédictions, des promesses ou des conseils. Les « actions concrètes » suggérées sont des pistes de réflexion et n'engagent pas la responsabilité de l'éditeur.</p>
      </section>
      
      <section class="legal-section">
        <h2>5. Propriété intellectuelle</h2>
        <p>Tous les éléments du site (textes, images, graphismes, logo, animations, code source, etc.) sont la propriété exclusive de l'éditeur ou font l'objet d'une autorisation d'utilisation.</p>
        <p>Toute reproduction, représentation, modification ou exploitation non autorisée est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.</p>
        <p><strong>Usages autorisés :</strong></p>
        <ul>
          <li>Consultation du site à des fins personnelles</li>
          <li>Partage de liens vers le site sur les réseaux sociaux</li>
          <li>Citation avec mention de la source dans un cadre éducatif</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2>6. Comportement de l'utilisateur</h2>
        <p>L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et à ne pas :</p>
        <ul>
          <li>Porter atteinte à l'intégrité ou au fonctionnement du site</li>
          <li>Tenter d'accéder à des parties non autorisées du site</li>
          <li>Utiliser le contenu du site à des fins commerciales sans autorisation</li>
          <li>Reproduire ou copier le site ou son contenu de manière non autorisée</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2>7. Liens externes</h2>
        <p>Le site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques.</p>
      </section>
      
      <section class="legal-section">
        <h2>8. Limitation de responsabilité</h2>
        <p>L'éditeur ne pourra être tenu responsable :</p>
        <ul>
          <li>Des dommages directs ou indirects résultant de l'utilisation du site</li>
          <li>Des interruptions temporaires du site pour maintenance ou mise à jour</li>
          <li>De l'interprétation ou de l'utilisation du contenu par les utilisateurs</li>
          <li>Des actions entreprises par les utilisateurs suite à la consultation du site</li>
        </ul>
      </section>
      
      <section class="legal-section">
        <h2>9. Protection des données</h2>
        <p>Pour toute information concernant la collecte et le traitement de vos données personnelles, veuillez consulter notre <router-link to="/politique-confidentialite">Politique de confidentialité</router-link>.</p>
      </section>
      
      <section class="legal-section">
        <h2>10. Droit applicable et juridiction</h2>
        <p>Les présentes CGU sont soumises au droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.</p>
      </section>
      
      <section class="legal-section">
        <h2>11. Contact</h2>
        <p>Pour toute question relative aux présentes CGU, contactez-nous à : <a href="mailto:contact@reworld.fr">contact@reworld.fr</a></p>
      </section>
    </div>
    
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'CGU',
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
