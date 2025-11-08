# KUBEMOON - Brand Creation & Experience Design

Site web moderne pour une agence de design de marque, avec design responsive et éléments arrondis.

## 🚀 Déploiement sur GitHub Pages

### Méthode 1: Via l'interface GitHub

1. **Créer un nouveau repository sur GitHub**
   - Nom suggéré: `kubemoon-website` ou `[votre-username].github.io`
   - Cocher "Public"

2. **Uploader les fichiers**
   - Cliquez sur "Add file" → "Upload files"
   - Glissez-déposez les fichiers: `index.html`, `style.css`, `script.js`
   - **IMPORTANT**: Assurez-vous d'avoir un dossier `Photos/` avec:
     - photo1.jpg à photo10.jpg
     - video.mp4 (pour le lecteur vidéo)
   - Commit les changements

3. **Activer GitHub Pages**
   - Allez dans Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (ou `master`), dossier: `/ (root)`
   - Cliquez sur "Save"

4. **Accéder à votre site**
   - URL: `https://[votre-username].github.io/[nom-du-repo]/`

## 📁 Structure des fichiers

```
/
├── index.html          # Structure HTML du site
├── style.css           # Styles et animations
├── script.js           # Interactions JavaScript
├── README.md           # Ce fichier
└── Photos/             # Dossier pour les images et vidéos
    ├── photo1.jpg
    ├── photo2.jpg
    ├── ...
    ├── photo10.jpg
    └── video.mp4
```

## ✨ Nouvelles fonctionnalités

- ✅ **Titre changé en KUBEMOON**
- ✅ **Curseur personnalisé supprimé**
- ✅ **Images carrées** (ratio 1:1) affichées depuis le dossier Photos/
- ✅ **Lecteur vidéo intégré** qui tourne en boucle automatiquement
- ✅ **Tous les éléments arrondis** (border-radius: 20-25px)
- ✅ **100% responsive** avec grilles adaptatives
- ✅ **Tous les liens pointent vers premiertech.com**

## 🎨 Personnalisation

### Modifier les couleurs
Dans `style.css`, cherchez:
- Jaune/Vert fluo: `#CFFF04`
- Noir: `#000`
- Gris foncé: `#111`

### Ajouter vos images
1. Créez un dossier `Photos/` à la racine
2. Ajoutez vos images nommées `photo1.jpg` à `photo10.jpg`
3. Ajoutez votre vidéo nommée `video.mp4`
4. Les images doivent être carrées (ou seront recadrées en carré)

### Modifier les liens
Actuellement tous les liens pointent vers `https://www.premiertech.com`.
Pour changer, recherchez dans `index.html` et remplacez les URLs.

## 🎯 Caractéristiques responsive

- **Mobile** (< 768px): Grille à 1 colonne
- **Tablette** (768px - 1024px): Grille à 2 colonnes
- **Desktop** (> 1024px): Grille à 3-4 colonnes

Tous les éléments s'adaptent automatiquement!

## 📱 Compatibilité

- Chrome, Firefox, Safari, Edge (versions récentes)
- iOS Safari, Chrome Mobile
- Vidéo avec autoplay (peut nécessiter interaction sur mobile)

## 🎬 À propos de la vidéo

La vidéo:
- ✅ Tourne en boucle automatiquement
- ✅ Est en mode muet (requis pour autoplay)
- ✅ Supporte le format MP4
- ✅ S'adapte au conteneur carré

Si la vidéo ne démarre pas automatiquement sur certains appareils, c'est normal (restrictions des navigateurs).

## 📧 Contact

Pour toute question, contacte-moi!

---

**Créé avec ❤️ pour Premier Tech**
