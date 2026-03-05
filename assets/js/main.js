/**
 * main.js — Entry point
 * Orquesta la inicialización de todos los módulos.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject config into DOM (must run first)
  ConfigInjector.init();

  // 2. After content is injected, run the rest
  requestAnimationFrame(() => {
    Navbar.init();
    WhatsApp.init();
    Counter.init();
    FAQ.init();

    // Carousels depend on catalog items being injected
    Carousel.init();

    // Scroll reveal — run after carousels populate items
    ScrollReveal.init();

    // Re-scan for dynamically created [data-reveal] elements
    setTimeout(() => ScrollReveal.refresh(), 100);
  });

  // ── Inicializar Lenis Smooth Scroll ──
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing inspirado en Apple
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

  // ── Smooth anchor scrolling con Lenis ──
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href').slice(1);
    if (!targetId || targetId === '') return;

    const target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight = document.querySelector('.navbar')?.offsetHeight || 72;
    // Scroll a través de lenis
    lenis.scrollTo(target, { offset: -navHeight - 16 });
  });

  // ── Contact form (basic) ──
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', async (e) => {
      const action = form.getAttribute('action');

      // If no real action configured, prevent default and show message
      if (!action || action === '#') {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          const orig = btn.textContent;
          btn.textContent = '✓ Mensaje recibido';
          btn.disabled = true;
          setTimeout(() => {
            btn.textContent = orig;
            btn.disabled = false;
            form.reset();
          }, 3000);
        }
        return;
      }
      // Otherwise let Formspree/Netlify handle it
    });
  }
});
