// JavaScript personnalisable

// Animation au clic sur le bouton
const mainButton = document.getElementById('mainButton');

mainButton.addEventListener('click', () => {
    alert('Tu peux personnaliser cette action !');
    // Exemple : redirection vers une autre page
    // window.location.href = 'about.html';
});

// Effet de parallaxe sur le scroll (optionnel)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const video = document.getElementById('bg-video');
    if (video) {
        video.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animation du titre au chargement
window.addEventListener('load', () => {
    console.log('Site chargé avec succès !');
    const title = document.querySelector('.title');
    title.style.letterSpacing = '0.1em';
});

// Tu peux ajouter d'autres interactions ici
// Exemples :
// - Changement de texte dynamique
// - Chargement de contenu via API
// - Effets au survol
// - Gestion de formulaires
// etc.