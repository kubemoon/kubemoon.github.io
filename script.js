// Smooth scroll pour tous les liens d'ancre
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-title');
    
    if (hero) {
        const opacity = 1 - (scrolled / 800);
        const translateY = scrolled * 0.5;
        
        hero.style.opacity = Math.max(0, opacity);
        hero.style.transform = `translateY(${translateY}px)`;
    }
});

// Animation du logo au scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const logo = document.querySelector('.animated-logo');
    
    if (logo) {
        if (currentScroll > lastScroll) {
            // Scroll down
            logo.style.transform = 'rotate(-5deg) scale(0.95)';
        } else {
            // Scroll up
            logo.style.transform = 'rotate(5deg) scale(0.95)';
        }
        
        // Reset après un délai
        setTimeout(() => {
            logo.style.transform = 'rotate(0deg) scale(1)';
        }, 150);
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation
document.querySelectorAll('.project-card, .gallery-item, .mission-item').forEach(el => {
    observer.observe(el);
});

// Effet de hover sur les cartes de projet
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console easter egg
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold;');
console.log('%cIntéressé par mon travail? Contactez-moi!', 'font-size: 14px;');
console.log('%cemilien.ozbal@premiertech.com', 'font-size: 12px; color: #d4ff00;');