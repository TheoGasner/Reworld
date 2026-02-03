<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Colonne Logo & Tagline -->
      <div class="footer-brand">
        <router-link to="/" class="footer-logo-link">
          <img src="/assets/images/logo-reworld.svg" alt="REWORLD" class="footer-logo">
        </router-link>
        <p class="footer-tagline">Réenchanter le monde,<br>une action à la fois.</p>
      </div>
      
      <!-- Colonne Liens -->
      <div class="footer-links">
        <h4 class="footer-title">Liens utiles</h4>
        <router-link to="/#concept" class="footer-link">Le Concept</router-link>
        <router-link to="/#capsules" class="footer-link">Les Capsules</router-link>
        <router-link to="/contact" class="footer-link">Contact</router-link>
      </div>
      
      <!-- Colonne Légal -->
      <div class="footer-legal">
        <h4 class="footer-title">Informations</h4>
        <router-link to="/mentions-legales" class="footer-link">Mentions légales</router-link>
        <router-link to="/politique-confidentialite" class="footer-link">Politique de confidentialité</router-link>
        <router-link to="/cgu" class="footer-link">CGU</router-link>
      </div>
      
      <!-- Colonne Contact & Réseaux -->
      <div class="footer-contact">
        <h4 class="footer-title">Nous suivre</h4>
        <div class="social-links">
          <a href="#" class="social-link social-instagram" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="social-link social-linkedin" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" class="social-link social-x" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-link social-youtube" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@reworld.fr&su=Contact%20via%20le%20site%20REWORLD" target="_blank" rel="noopener noreferrer" class="footer-email">contact@reworld.fr</a>
      </div>
    </div>
    
    <!-- Barre de séparation -->
    <div class="footer-divider"></div>
    
    <!-- Copyright -->
    <div class="footer-bottom">
      <p class="footer-credits">© 2026 REWORLD - Projet 3ème année BUT MMI - Théo GASNER</p>
      <p class="footer-rights">Tous droits réservés</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
/* Footer */
.footer {
  background: #0A0A0A;
  padding: 5rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo-link {
  display: inline-block;
  cursor: pointer;
}

.footer-logo {
  width: 16rem;
  height: auto;
  margin-bottom: 1.25rem;
  margin-left: -2.5rem;
  filter: none;
  transition: filter 0.3s ease, transform 0.3s ease;
}

.footer-logo-link:hover .footer-logo {
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.5)) !important;
  transform: scale(1.02);
}

.footer-tagline {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
}

.footer-links,
.footer-legal,
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-link {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #00C9A7;
  transform: translateX(5px);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  background: transparent;
}

.social-instagram {
  color: #E4405F;
  border-color: rgba(228, 64, 95, 0.3);
}
.social-instagram:hover {
  background: rgba(228, 64, 95, 0.15);
  border-color: #E4405F;
  box-shadow: 0 8px 20px rgba(228, 64, 95, 0.3);
}

.social-linkedin {
  color: #0A66C2;
  border-color: rgba(10, 102, 194, 0.3);
}
.social-linkedin:hover {
  background: rgba(10, 102, 194, 0.2);
  border-color: #0A66C2;
  box-shadow: 0 8px 20px rgba(10, 102, 194, 0.3);
}

.social-x {
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.2);
}
.social-x:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #FFFFFF;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}

.social-youtube {
  color: #FF0000;
  border-color: rgba(255, 0, 0, 0.3);
}
.social-youtube:hover {
  background: rgba(255, 0, 0, 0.15);
  border-color: #FF0000;
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-email {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-email:hover {
  color: #00C9A7;
}

/* Divider */
.footer-divider {
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin: 0 auto 1.5rem;
}

/* Bottom Bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-credits {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer-rights {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  
  .footer-brand {
    grid-column: 1 / -1;
    text-align: center;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 4rem 1.5rem 2rem;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-brand,
  .footer-links,
  .footer-legal,
  .footer-contact {
    align-items: center;
  }
  
  .footer-link:hover {
    transform: none;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
