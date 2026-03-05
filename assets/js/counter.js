/**
 * counter.js — Animated number counters triggered on scroll
 */

const Counter = (() => {
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start    = performance.now();

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.round(easeOut(progress) * target);

      el.textContent = value.toLocaleString('es-PY');

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  function init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter[data-target]');
          counters.forEach(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    // Observe the stats section
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);
  }

  return { init };
})();
