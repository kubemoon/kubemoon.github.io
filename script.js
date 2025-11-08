// Scroll smooth vers la galerie
const scrollButton = document.getElementById('scrollButton');
const gallerySection = document.querySelector('.gallery-section');

if (scrollButton && gallerySection) {
    scrollButton.addEventListener('click', () => {
        gallerySection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Gestion de la galerie interactive
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Si l'item est déjà agrandi, on le réduit
        if (this.classList.contains('expanded')) {
            this.classList.remove('expanded');
        } else {
            // On réduit tous les autres items
            galleryItems.forEach(otherItem => {
                otherItem.classList.remove('expanded');
            });
            // On agrandit l'item cliqué
            this.classList.add('expanded');
        }
    });
});

// Animation du titre au chargement
window.addEventListener('load', () => {
    console.log('Site Kubemoon chargé avec succès !');
    const title = document.querySelector('.title');
    if (title) {
        title.style.letterSpacing = '0.1em';
    }
});

// Effet de parallaxe sur le scroll (optionnel)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const video = document.getElementById('bg-video');
    if (video && scrolled < window.innerHeight) {
        video.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});