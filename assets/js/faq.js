/**
 * faq.js — Accordion para sección FAQ (disponible para páginas futuras)
 */

const FAQ = (() => {
  function init(containerSel = '[data-faq]') {
    const container = document.querySelector(containerSel);
    if (!container) return;

    const items = container.querySelectorAll('[data-faq-item]');

    items.forEach(item => {
      const trigger = item.querySelector('[data-faq-trigger]');
      const body    = item.querySelector('[data-faq-body]');

      if (!trigger || !body) return;

      // Set initial height
      body.style.height = '0px';
      body.style.overflow = 'hidden';
      body.style.transition = 'height 0.4s cubic-bezier(0.22, 1, 0.36, 1)';

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all
        items.forEach(i => {
          const b = i.querySelector('[data-faq-body]');
          i.classList.remove('open');
          if (b) b.style.height = '0px';
        });

        // Open clicked (if was closed)
        if (!isOpen) {
          item.classList.add('open');
          body.style.height = body.scrollHeight + 'px';
        }
      });
    });
  }

  return { init };
})();
