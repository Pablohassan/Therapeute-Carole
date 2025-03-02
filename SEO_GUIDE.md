# Guide d'Optimisation SEO pour Carole Lagardère

Ce guide détaille les optimisations SEO mises en place pour le site web de Carole Lagardère et fournit des recommandations pour maintenir et améliorer le référencement du site.

## Table des matières

1. [Fichiers techniques](#fichiers-techniques)
2. [Balises Meta et SEO](#balises-meta-et-seo)
3. [Données structurées](#données-structurées)
4. [Optimisation des images](#optimisation-des-images)
5. [Performance et Core Web Vitals](#performance-et-core-web-vitals)
6. [Bonnes pratiques de contenu](#bonnes-pratiques-de-contenu)
7. [Suivi et analyse](#suivi-et-analyse)

## Fichiers techniques

### robots.txt

Le fichier `robots.txt` est situé à la racine du site et contrôle l'accès des robots des moteurs de recherche à votre site.

```
# robots.txt pour carole-lagardere.fr
User-agent: *
Allow: /

# Interdire les pages d'administration et d'authentification
Disallow: /sign-in/
Disallow: /sign-up/
Disallow: /dashboard/
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://www.carole-lagardere.fr/sitemap.xml
```

### sitemap.xml

Le fichier `sitemap.xml` liste toutes les pages importantes de votre site pour faciliter leur indexation par les moteurs de recherche.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.carole-lagardere.fr/</loc>
    <lastmod>2024-03-01T12:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Autres URLs -->
</urlset>
```

### manifest.json

Le fichier `manifest.json` est utilisé pour les fonctionnalités PWA (Progressive Web App) et améliore l'expérience mobile.

## Balises Meta et SEO

### Composant SEO

Le composant `SEO.tsx` est utilisé sur toutes les pages pour gérer les balises meta. Voici comment l'utiliser :

```tsx
import SEO from "../components/SEO";

function MaPage() {
  return (
    <>
      <SEO
        title="Titre de la page"
        description="Description détaillée de la page (150-160 caractères)"
        keywords={["mot-clé1", "mot-clé2"]}
        canonicalUrl="https://www.carole-lagardere.fr/page-url"
        ogImage="/images/og-image-specifique.jpg"
      />
      {/* Contenu de la page */}
    </>
  );
}
```

### Balises Meta importantes

- **Title** : Chaque page doit avoir un titre unique de 50-60 caractères
- **Description** : 150-160 caractères décrivant précisément le contenu de la page
- **Canonical URL** : Évite les problèmes de contenu dupliqué
- **Open Graph** : Optimise le partage sur les réseaux sociaux
- **Structured Data** : Améliore la compréhension du contenu par les moteurs de recherche

## Données structurées

Les données structurées (Schema.org) sont utilisées pour aider les moteurs de recherche à comprendre le contenu de votre site.

### Types de données structurées implémentés

1. **HealthAndBeautyBusiness** : Informations sur le cabinet de thérapie
2. **Service** : Détails sur les services de thérapie proposés
3. **Person** : Informations sur Carole Lagardère en tant que thérapeute
4. **FAQPage** : Questions fréquemment posées

### Exemple d'utilisation

```tsx
import { therapyPracticeData } from "../constants/structuredData";

<SEO title="À propos" description="..." structuredData={therapyPracticeData} />;
```

## Optimisation des images

### Composant OptimizedImage

Utilisez le composant `OptimizedImage` pour toutes les images du site :

```tsx
import { OptimizedImage } from "../utils/imageOptimization";

<OptimizedImage
  src="/images/hero.webp"
  alt="Description détaillée de l'image"
  width={800}
  height={600}
  priority={true} // Pour les images above-the-fold
/>;
```

### Bonnes pratiques pour les images

1. Utilisez le format WebP pour une meilleure compression
2. Spécifiez toujours width et height pour éviter les CLS (Cumulative Layout Shift)
3. Utilisez des noms de fichiers descriptifs (ex: therapie-familiale-bordeaux.webp)
4. Ajoutez des attributs alt détaillés et pertinents
5. Lazy-loadez les images below-the-fold

## Performance et Core Web Vitals

Les Core Web Vitals sont des métriques de performance qui influencent le classement SEO.

### LCP (Largest Contentful Paint)

- Optimisez l'image principale (hero) avec l'attribut `priority`
- Préchargez les ressources critiques
- Utilisez le lazy loading pour le contenu non critique

### FID (First Input Delay) / INP (Interaction to Next Paint)

- Minimisez le JavaScript non essentiel
- Utilisez le code splitting et le lazy loading des composants
- Évitez les calculs lourds sur le thread principal

### CLS (Cumulative Layout Shift)

- Spécifiez toujours les dimensions des images
- Réservez l'espace pour les éléments dynamiques
- Évitez d'insérer du contenu au-dessus du contenu existant

## Bonnes pratiques de contenu

### Structure des pages

1. Utilisez une hiérarchie de titres logique (H1, H2, H3...)
2. Limitez-vous à un seul H1 par page
3. Incluez des mots-clés pertinents dans les titres et sous-titres
4. Structurez le contenu avec des paragraphes courts et des listes

### Mots-clés

1. Recherchez les mots-clés pertinents pour la thérapie familiale et de couple
2. Intégrez naturellement les mots-clés dans le contenu
3. Utilisez des variations de mots-clés (synonymes, questions, etc.)
4. Créez du contenu spécifique pour les mots-clés à forte intention

### Liens internes

1. Créez des liens internes pertinents entre les pages
2. Utilisez des ancres de texte descriptives
3. Liez les pages importantes depuis la page d'accueil
4. Créez une structure de navigation claire

## Suivi et analyse

### Google Search Console

1. Vérifiez régulièrement les performances dans Google Search Console
2. Surveillez les erreurs d'indexation et de crawl
3. Soumettez le sitemap.xml
4. Analysez les requêtes de recherche qui génèrent du trafic

### Google Analytics

1. Suivez le comportement des utilisateurs
2. Analysez les pages les plus performantes
3. Identifiez les opportunités d'amélioration
4. Mesurez les conversions (prises de rendez-vous)

## Checklist SEO

Utilisez cette checklist pour chaque nouvelle page ou mise à jour majeure :

- [ ] Titre unique et descriptif (50-60 caractères)
- [ ] Meta description pertinente (150-160 caractères)
- [ ] URL propre et descriptive
- [ ] Balise canonique correctement définie
- [ ] Balises Open Graph complètes
- [ ] Données structurées appropriées
- [ ] Images optimisées avec attributs alt
- [ ] Contenu de qualité avec mots-clés pertinents
- [ ] Liens internes vers et depuis d'autres pages
- [ ] Performance optimisée (Core Web Vitals)
- [ ] Mobile-friendly
