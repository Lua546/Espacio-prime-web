/**
 * whatsapp.js — Floating WhatsApp button visibility control
 */

const WhatsApp = (() => {
  function init() {
    const fab = document.querySelector('[data-whatsapp-fab]');
    if (!fab) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Show FAB once hero is out of view
      fab.classList.toggle('visible', !entry.isIntersecting);
    }, { threshold: 0.1 });

    const hero = document.querySelector('.hero');
    if (hero) {
      observer.observe(hero);
    } else {
      // Fallback: show after 2s
      setTimeout(() => fab.classList.add('visible'), 2000);
    }
  }

  return { init };
})();
