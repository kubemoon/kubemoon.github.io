# kubemoon.github.io - Portfolio avec Galerie Interactive

## 🚀 Mise à jour : Galerie interactive ajoutée !

Ton site contient maintenant :
- ✅ Page d'accueil avec vidéo ralentie en arrière-plan
- ✅ Galerie de 10 photos carrées
- ✅ Interaction : clic pour agrandir x2
- ✅ Animation fluide et responsive

---

## 📸 Comment ajouter tes photos

### Étape 1 : Préparer tes photos

1. **Tes photos doivent être carrées** (1:1 aspect ratio)
   - Idéalement : 1000x1000 pixels ou 1080x1080 pixels
   - Format : JPG ou PNG
   - Poids : < 500KB par photo (compresse si nécessaire)

2. **Nomme tes photos exactement comme ceci :**
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - ... jusqu'à `photo10.jpg`

### Étape 2 : Créer le dossier "photos" sur GitHub

1. Va sur ton repository `kubemoon.github.io`
2. Clique sur **"Add file"** → **"Create new file"**
3. Dans le nom du fichier, tape : `photos/.gitkeep`
4. Clique sur **"Commit changes"**
   
   → Cela crée un dossier "photos" vide

### Étape 3 : Uploader tes photos

1. Clique sur le dossier **"photos"** que tu viens de créer
2. Clique sur **"Add file"** → **"Upload files"**
3. **Glisse tes 10 photos** (photo1.jpg à photo10.jpg)
4. Clique sur **"Commit changes"**

### Étape 4 : Voir le résultat

1. Attends 1-2 minutes
2. Va sur `https://kubemoon.github.io`
3. Clique sur "Découvrir" pour scroller vers la galerie
4. **Clique sur une photo** → Elle s'agrandit x2 !
5. **Re-clique** → Elle revient à la taille normale

---

## 🎨 Où trouver des photos carrées gratuites ?

- [Unsplash](https://unsplash.com/) - Photos haute qualité
- [Pexels](https://www.pexels.com/) - Large sélection
- [Pixabay](https://pixabay.com/) - Gratuit sans attribution

**Astuce :** Cherche avec le filtre "Square" ou recadre tes photos en 1:1.

---

## 🛠️ Personnalisation

### Changer le nombre de colonnes de la galerie

Dans `style.css`, ligne de la grille :
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```
Change `250px` pour ajuster la taille des photos.

### Changer la vitesse de la vidéo

Dans `index.html`, ligne de la vidéo :
```html
onloadedmetadata="this.playbackRate = 0.25;"
```
Change `0.25` (0.5 = moitié vitesse, 1 = normal, 2 = double vitesse).

### Modifier les textes

Dans `index.html` :
- `<h1 class="title">` : Titre principal
- `<p class="subtitle">` : Sous-titre
- `<h2 class="gallery-title">` : Titre de la galerie

---

## 📱 Responsive

La galerie s'adapte automatiquement :
- **Desktop** : Grille fluide (3-4 colonnes selon la taille)
- **Tablette** : 2 colonnes
- **Mobile** : 1 colonne

---

## 🎯 Structure des fichiers

```
kubemoon.github.io/
├── index.html          (page principale avec galerie)
├── style.css           (tous les styles)
├── script.js           (interactions de la galerie)
├── README.md           (ce fichier)
├── video.mp4           (vidéo de fond)
└── photos/             (dossier des photos)
    ├── photo1.jpg
    ├── photo2.jpg
    ├── ...
    └── photo10.jpg
```

---

## ❓ Besoin d'aide ?

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Guide CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

Bon codage ! 🎉
