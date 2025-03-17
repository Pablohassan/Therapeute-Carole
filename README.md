# Carole Project

## 🚀 Vue d'ensemble

Ce projet est une application web moderne construite avec React, TypeScript et Vite. Il utilise Tailwind CSS pour le styling et intègre plusieurs bibliothèques modernes pour une expérience utilisateur optimale.

## 🛠️ Technologies principales

- **Framework**: React 19 avec TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Gestionnaire de paquets**: pnpm 10.4
- **Animations**: Framer Motion
- **Formulaires**: React Hook Form
- **Routing**: React Router
- **SEO**: React Helmet Async
- **Calendrier**: React Calendly & React Datepicker
- **Icons**: Heroicons & React Icons

## 📁 Structure du projet

```
src/
├── assets/         # Ressources statiques (images, fonts, etc.)
├── components/     # Composants réutilisables
├── contexts/       # Contextes React
├── hooks/          # Custom hooks
├── pages/          # Pages de l'application
├── constants/      # Constantes et configurations
└── App.tsx         # Composant racine
```

## 🚀 Installation

1. **Prérequis**

   - Node.js (version LTS recommandée)
   - pnpm 10.4 ou supérieur

2. **Installation des dépendances**

   ```bash
   pnpm install
   ```

3. **Variables d'environnement**
   - Copier le fichier `.env.example` vers `.env`
   - Configurer les variables d'environnement nécessaires

## 🛠️ Scripts disponibles

- `pnpm dev` : Lance le serveur de développement
- `pnpm build` : Compile le projet pour la production
- `pnpm preview` : Prévisualise la version de production
- `pnpm lint` : Vérifie le code avec ESLint

## 🐳 Docker

Le projet inclut une configuration Docker pour le déploiement :

```bash
# Build de l'image
docker build -t carole-project .

# Lancement du conteneur
docker run -p 80:80 carole-project
```

## 📱 Responsive Design

Le projet suit une approche mobile-first et utilise Tailwind CSS pour le responsive design. Les breakpoints sont configurés dans `tailwind.config.js`.

## 🔒 Sécurité

- Les variables sensibles sont stockées dans les variables d'environnement

## 🎨 UI/UX

- Animations fluides avec Framer Motion
- Design system cohérent avec Tailwind CSS

## 📈 Performance

- Lazy load des composants non critiques
- Optimisation des images avec WebP
- Mise en cache des ressources statiques
- Code splitting automatique avec Vite

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Documentation

La documentation du projet est en cours de développement. Actuellement disponible :

- Guide d'optimisation des images mobiles (`docs/MOBILE_IMAGES.md`) : Instructions détaillées sur l'implémentation et l'utilisation d'images optimisées pour mobile
- Documentation des composants via JSDoc dans le code source
- Documentation des types TypeScript via TSDoc

La documentation complète sera enrichie au fur et à mesure du développement du projet.

## 🔍 SEO

Le projet suit les meilleures pratiques SEO :

- Meta tags dynamiques avec React Helmet Async
- Structure sémantique HTML
- Optimisation des images
- Sitemap généré automatiquement

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue dans le dépôt GitHub.

## 📄 Licence

Ce projet est privé et tous droits réservés.
