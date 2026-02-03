# REWORLD - Instructions Copilot

## 📋 Contexte Projet
Projet étudiant BUT MMI 3e année (spécialisation Communication). Site web immersif présentant 4 "capsules temporelles" de futurs désirables.

## 🎨 Charte Graphique (OBLIGATOIRE)
```
Couleurs: #0A0A0A (noir) | #FFFFFF | #0066FF (bleu) | #00C9A7 (vert) | #00A8E8 (cyan) | #FFD700 (or)
Typos: Montserrat (titres, Bold/800) | Quicksand (texte)
Style: Futuriste, néon sur fond sombre, glassmorphism subtil
```

## 🏗️ Architecture
```
REWORLD/
├── index.html              # Hero + grille 2x2 capsules
├── capsule-eco.html        # Économie régénératrice
├── capsule-demo.html       # Démocratie participative
├── capsule-tech.html       # Tech au service du lien
├── capsule-nature.html     # Nature reconnectée
├── css/style.css           # Styles centralisés
├── js/main.js              # Animations + transitions
└── assets/images/          # SVG animés (logo, globe, capsules)
```

## 🎬 Animations Critiques
- **Transition warp** : effet voyage temporel 2.5s (particules + lignes vitesse + glitch)
- **Globe hero** : rotation continue + float
- **Capsules** : hover glow 3D + scale
- **Cursor** : personnalisé avec trail (désactivé tactile)
- **Parallax** : scroll + mouse sur hero

## 📐 Patterns de Code

### Structure page capsule
```html
<body class="capsule-page">
  <header class="capsule-header">[logo + retour]</header>
  <section class="capsule-hero">[titre + story 4 lignes]</section>
  <div class="capsule-visual">[image 100vw]</div>
  <section class="capsule-actions">[3 actions #00C9A7]</section>
</body>
```

### Bouton principal
```html
<button class="btn-primary">
  <span>TEXTE</span>
  <div class="btn-glow"></div>
</button>
```

## ⚡ Conventions
- HTML/CSS/JS vanilla uniquement (pas de framework)
- Performance 60fps obligatoire
- Mobile-first, responsive
- Cursor personnalisé → `cursor: none` sur éléments interactifs
- Touch devices → désactiver cursor custom via `@media (hover: none)`

## 🎯 Ton Éditorial
Futuriste confiant, optimiste pragmatique. Pas de dystopie. Chaque capsule = expérience + 3 actions concrètes immédiates.

## 🔧 Commandes Dev
```bash
# Serveur local
npx serve .
# ou
python -m http.server 8000
```
