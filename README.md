# DO/UNDO - Brand Creation & Experience Design

Site web moderne pour une agence de design de marque, inspiré par l'esthétique minimaliste et audacieuse.

## 🚀 Déploiement sur GitHub Pages

### Méthode 1: Via l'interface GitHub

1. **Créer un nouveau repository sur GitHub**
   - Nom suggéré: `do-undo-website` ou `[votre-username].github.io`
   - Cocher "Public"

2. **Uploader les fichiers**
   - Cliquez sur "Add file" → "Upload files"
   - Glissez-déposez les 3 fichiers: `index.html`, `style.css`, `script.js`
   - Commit les changements

3. **Activer GitHub Pages**
   - Allez dans Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (ou `master`), dossier: `/ (root)`
   - Cliquez sur "Save"

4. **Accéder à votre site**
   - URL: `https://[votre-username].github.io/[nom-du-repo]/`
   - Ou `https://[votre-username].github.io/` si vous avez nommé le repo `[votre-username].github.io`

### Méthode 2: Via Git en ligne de commande

```bash
# Cloner votre repository
git clone https://github.com/[votre-username]/[nom-du-repo].git
cd [nom-du-repo]

# Copier les fichiers dans le dossier
# Puis:
git add .
git commit -m "Initial commit: DO/UNDO website"
git push origin main

# Activer GitHub Pages via les paramètres du repository
```

## 📁 Structure des fichiers

```
/
├── index.html      # Structure HTML du site
├── style.css       # Styles et animations
├── script.js       # Interactions JavaScript
└── README.md       # Ce fichier
```

## 🎨 Personnalisation

### Modifier les couleurs
Dans `style.css`, cherchez ces variables:
- Jaune/Vert fluo: `#CFFF04`
- Noir: `#000`
- Gris foncé: `#111`

### Remplacer les images
Les images utilisent actuellement des placeholders. Pour ajouter vos propres images:

1. Créez un dossier `images/` dans votre repository
2. Uploadez vos images
3. Dans `index.html`, remplacez les URLs:
   ```html
   <img src="images/votre-image.jpg" alt="Description">
   ```

### Modifier le contenu
- **Titre**: Ligne 24 de `index.html`
- **Sous-titre**: Ligne 25 de `index.html`
- **Email**: Lignes 16 et 123 de `index.html`
- **Clients**: Section `.clients-grid` (lignes 102-117)

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations au scroll
- ✅ Effet parallax sur le titre
- ✅ Curseur personnalisé
- ✅ Grille de portfolio
- ✅ Section clients interactive
- ✅ CTA (Call-to-action) proéminent
- ✅ Performance optimisée

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript Vanilla (ES6+)
- Aucune dépendance externe

## 📱 Compatibilité

- Chrome, Firefox, Safari, Edge (versions récentes)
- Responsive: Desktop, Tablette, Mobile

## 📝 Notes

- Les images sont actuellement des placeholders (via placeholder.com)
- Remplacez-les par vos véritables images de projets
- Personnalisez les noms de clients selon vos besoins
- Le site est optimisé pour le SEO de base

## 🎯 Prochaines étapes

1. Remplacer les images placeholder par vos vraies images
2. Ajouter vos vrais projets et descriptions
3. Personnaliser les textes selon votre agence
4. Ajouter Google Analytics (optionnel)
5. Configurer un domaine personnalisé (optionnel)

## 📧 Contact

Pour toute question, contactez-moi!

---

**Créé avec ❤️ pour Premier Tech**
