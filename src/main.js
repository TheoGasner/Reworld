import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

// Import des pages
import Home from './views/Home.vue'
import CapsuleEco from './views/CapsuleEco.vue'
import CapsuleDemo from './views/CapsuleDemo.vue'
import CapsuleTech from './views/CapsuleTech.vue'
import CapsuleNature from './views/CapsuleNature.vue'
import MentionsLegales from './views/MentionsLegales.vue'
import CGU from './views/CGU.vue'
import PolitiqueConfidentialite from './views/PolitiqueConfidentialite.vue'
import Annexes from './views/Annexes.vue'
import IdentiteVisuelle from './views/IdentiteVisuelle.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'

// Configuration du router
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/capsule-eco', name: 'CapsuleEco', component: CapsuleEco },
  { path: '/capsule-demo', name: 'CapsuleDemo', component: CapsuleDemo },
  { path: '/capsule-tech', name: 'CapsuleTech', component: CapsuleTech },
  { path: '/capsule-nature', name: 'CapsuleNature', component: CapsuleNature },
  { path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegales },
  { path: '/cgu', name: 'CGU', component: CGU },
  { path: '/politique-confidentialite', name: 'PolitiqueConfidentialite', component: PolitiqueConfidentialite },
  { path: '/annexes', name: 'Annexes', component: Annexes },
  { path: '/identite-visuelle', name: 'IdentiteVisuelle', component: IdentiteVisuelle },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Retour en haut de page lors d'un changement de route
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
