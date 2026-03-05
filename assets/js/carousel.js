/**
 * carousel.js — Generic carousel for catalog and testimonials
 */

const Carousel = (() => {

  function create({ trackSel, prevSel, nextSel, dotsSel, autoplay = 0, visibleFn }) {
    const track = document.querySelector(trackSel);
    if (!track) return;

    const wrap  = track.parentElement;
    let current = 0;
    let timer   = null;

    function count() {
      return track.children.length;
    }

    function visible() {
      if (typeof visibleFn === 'function') return visibleFn();
      const wrapWidth = wrap.offsetWidth;
      const cardWidth = track.children[0]?.offsetWidth || wrapWidth;
      return Math.round(wrapWidth / cardWidth) || 1;
    }

    function maxIndex() {
      return Math.max(0, count() - visible());
    }

    function goTo(idx) {
      const max = maxIndex();
      current = Math.min(Math.max(0, idx), max);

      const cardWidth = track.children[0]?.offsetWidth || 0;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${current * (cardWidth + gap)}px)`;

      updateDots();
    }

    function buildDots() {
      const container = document.querySelector(dotsSel);
      if (!container) return;

      const total = maxIndex() + 1;
      container.innerHTML = '';

      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
        dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
        container.appendChild(dot);
      }
    }

    function updateDots() {
      const container = document.querySelector(dotsSel);
      if (!container) return;
      container.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function next() { goTo(current + 1 > maxIndex() ? 0 : current + 1); }
    function prev() { goTo(current - 1 < 0 ? maxIndex() : current - 1); }

    function startAutoplay() {
      if (!autoplay) return;
      timer = setInterval(next, autoplay);
    }

    function resetAutoplay() {
      clearInterval(timer);
      startAutoplay();
    }

    // Events
    const prevBtn = document.querySelector(prevSel);
    const nextBtn = document.querySelector(nextSel);

    prevBtn?.addEventListener('click', () => { prev(); resetAutoplay(); });
    nextBtn?.addEventListener('click', () => { next(); resetAutoplay(); });

    // Touch / drag
    let startX = 0, isDragging = false;

    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      if (!isDragging) return;
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        diff > 0 ? next() : prev();
        resetAutoplay();
      }
      isDragging = false;
    }, { passive: true });

    // Rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        goTo(Math.min(current, maxIndex()));
        buildDots();
      }, 200);
    });

    // Init
    buildDots();
    goTo(0);
    startAutoplay();

    return { goTo, next, prev };
  }

  function init() {
    create({
      trackSel: '[data-catalog-track]',
      prevSel:  '[data-catalog-prev]',
      nextSel:  '[data-catalog-next]',
      dotsSel:  '[data-catalog-dots]',
      autoplay: 5000,
    });

    create({
      trackSel: '[data-testimonials-track]',
      prevSel:  '[data-testimonials-prev]',
      nextSel:  '[data-testimonials-next]',
      dotsSel:  '[data-testimonials-dots]',
      autoplay: 6000,
    });
  }

  return { init };
})();
