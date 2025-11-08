// Smooth scroll for anchor links
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

// Add scroll animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.mission, .clients, .cta');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Ensure videos autoplay properly
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.play().catch(err => {
            console.log('Autoplay was prevented:', err);
        });
    });
});

// Parallax effect on scroll (subtle)
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle && currentScrollY < window.innerHeight) {
        heroTitle.style.transform = `translateY(${currentScrollY * 0.3}px)`;
        heroTitle.style.opacity = 1 - (currentScrollY / window.innerHeight) * 0.5;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('KUBEMOON - Site loaded successfully');