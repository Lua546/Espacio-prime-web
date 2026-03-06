/**
 * servicios.js — Lógica de filtrado para el catálogo de servicios de Espacio Prime
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.servicesCatalog) return;

  // 1. Inicializar Lenis Smooth Scroll para esta página
  if (typeof Lenis !== 'undefined') {
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
  }

  // 2. Corregir enlaces del Navbar dinámicos para que envíen a index.html cuando sean anclas
  // Retrasamos un tick para asegurarnos de que config-injector.js haya populado el Navbar
  setTimeout(() => {
    document.querySelectorAll('.navbar__link, .navbar__mobile-link, .footer__link').forEach(link => {
      const href = link.getAttribute('href');
      // Si el enlace es puramente un ancla, o si empieza por '#'
      if (href && href.startsWith('#')) {
        link.setAttribute('href', 'index.html' + href);
      }
    });
  }, 100);

  // 2. Extraer parámetros de búsqueda
  const urlParams = new URLSearchParams(window.location.search);
  const filterCity = urlParams.get('city') || '';
  const filterType = urlParams.get('type') || '';
  const filterPrice = urlParams.get('price') || '';

  // 3. Setear los valores del formulario actual
  const form = document.getElementById('services-search-form');
  if (form) {
    if (filterCity) form.querySelector('#search-city').value = filterCity;
    if (filterType) form.querySelector('#search-type').value = filterType;
    if (filterPrice) form.querySelector('#search-price').value = filterPrice;
  }

  // 4. Función de filtrado y renderizado
  function renderCatalog() {
    // Tomar valores reales del formulario
    const currentCity = form ? form.querySelector('#search-city').value : '';
    const currentType = form ? form.querySelector('#search-type').value : '';
    const currentPrice = form ? form.querySelector('#search-price').value : '';

    const catalog = SITE_CONFIG.servicesCatalog.filter(item => {
      let match = true;
      if (currentCity && item.city !== currentCity) match = false;
      if (currentType && item.type !== currentType) match = false;
      if (currentPrice && item.price > parseInt(currentPrice)) match = false;
      return match;
    });

    const grid = document.getElementById('services-grid-container');
    if (!grid) return;

    if (catalog.length === 0) {
      grid.innerHTML = `
        <div class="no-results" data-reveal="fade-up">
          <i class="fas fa-search-minus"></i>
          <h3>No se encontraron propiedades</h3>
          <p style="color:var(--color-text-muted);">Intenta ajustar o eliminar los filtros de búsqueda.</p>
          <button type="button" class="btn btn-ghost" style="margin-top: 1rem;" onclick="window.location.href='catalogo.html'">Ver todas las propiedades</button>
        </div>
      `;
      ScrollReveal.init();
      return;
    }

    grid.innerHTML = catalog.map((item, index) => `
      <div class="card" data-reveal="fade-up" data-delay="${(index % 3) + 1}">
        <div class="card__image-wrap">
          <div class="card__price-badge">${item.priceText}</div>
          <img src="${item.image}" alt="${item.title}" class="card__image" loading="lazy" style="height: 240px; object-fit: cover;">
        </div>
        <div class="card__body">
          <p class="card__meta"><i class="fas fa-map-marker-alt"></i> ${item.location} &nbsp;·&nbsp; <span style="text-transform: capitalize;">${item.type}</span></p>
          <h3 class="card__title" style="min-height: 56px;">${item.title}</h3>
          <p class="card__specs"><i class="fas fa-ruler-combined"></i> ${item.specs}</p>
          <a href="https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hola, me interesa la propiedad: ' + item.title)}" class="btn btn-primary" style="width: 100%; margin-top: 1rem; justify-content: center;" target="_blank" rel="noopener">Consultar</a>
        </div>
      </div>
    `).join('');

    // Re-initialize scroll reveal for new elements
    ScrollReveal.init();
  }

  // 5. Carga inicial
  renderCatalog();

  // 6. Listeners para filtrado en tiempo real
  if (form) {
    const selects = form.querySelectorAll('select');
    selects.forEach(select => {
      select.addEventListener('change', renderCatalog);
    });

    // También evitamos que el formulario recargue la página si el usuario le da click a "Filtrar"
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      renderCatalog();

      // Actualizamos la URL sigilosamente para mantener el estado
      const currentCity = form.querySelector('#search-city').value;
      const currentType = form.querySelector('#search-type').value;
      const currentPrice = form.querySelector('#search-price').value;

      const newUrl = new URL(window.location);
      if (currentCity) newUrl.searchParams.set('city', currentCity); else newUrl.searchParams.delete('city');
      if (currentType) newUrl.searchParams.set('type', currentType); else newUrl.searchParams.delete('type');
      if (currentPrice) newUrl.searchParams.set('price', currentPrice); else newUrl.searchParams.delete('price');
      window.history.replaceState({}, '', newUrl);
    });
  }
});

