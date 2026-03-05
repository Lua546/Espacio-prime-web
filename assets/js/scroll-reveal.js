/**
 * scroll-reveal.js — Intersection Observer based scroll animations
 */

const ScrollReveal = (() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  function init() {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      observer.observe(el);
    });
  }

  // Re-scan after dynamic content injected
  function refresh() {
    document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => {
      observer.observe(el);
    });
  }

  return { init, refresh };
})();
