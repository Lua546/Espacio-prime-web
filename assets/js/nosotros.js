/**
 * nosotros.js — Lógica de navegación y utilidades para nosotros.html
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Lenis Smooth Scroll para esta página
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 2. Corregir enlaces dinámicos del Navbar 
    setTimeout(() => {
        document.querySelectorAll('.navbar__link, .navbar__mobile-link, .footer__link').forEach(link => {
            const href = link.getAttribute('href');
            // Si el enlace es puramente un ancla ('#proceso', '#contacto') redirgirlo al home
            if (href && href.startsWith('#')) {
                link.setAttribute('href', 'index.html' + href);
            }
        });

        // 3. Inicializar Scroll Reveal una vez que las cards y navbar estén preparadas
        if (typeof ScrollReveal !== 'undefined') {
            ScrollReveal.init();
        }
    }, 100);

});
