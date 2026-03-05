/**
 * config-injector.js
 * Lee SITE_CONFIG y puebla todos los elementos del DOM.
 * No modificar — toda personalización va en site-config.js
 */

const ConfigInjector = (() => {

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // ── Helpers ────────────────────────────────────────────────
  function setText(sel, val) {
    const el = $(sel);
    if (el && val !== null && val !== undefined) el.textContent = val;
  }

  function setAttr(sel, attr, val) {
    const el = $(sel);
    if (el && val) el.setAttribute(attr, val);
  }

  function createEl(tag, cls, html) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html) el.innerHTML = html;
    return el;
  }

  // ── Brand ──────────────────────────────────────────────────
  function injectBrand(cfg) {
    const { name, tagline, logo } = cfg.brand;

    $$('[data-brand-name]').forEach(el => el.textContent = name);
    $$('[data-brand-tagline]').forEach(el => el.textContent = tagline);

    if (logo) {
      $$('[data-brand-logo-mark]').forEach(el => {
        el.innerHTML = `<img src="${logo}" alt="${name}" style="width:100%;height:100%;object-fit:contain;">`;
      });
    } else {
      $$('[data-brand-logo-mark]').forEach(el => {
        el.textContent = name.charAt(0).toUpperCase();
      });
    }

    if (cfg.brand.favicon) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = cfg.brand.favicon;
    }

    document.title = `${name} — ${tagline}`;
  }

  // ── Nav ────────────────────────────────────────────────────
  function injectNav(cfg) {
    const desktop = $('[data-nav-links]');
    const mobile = $('[data-nav-mobile]');
    const links = cfg.nav;

    if (!links?.length) return;

    const makeDesktopLink = ({ label, href }) =>
      `<a href="${href}" class="navbar__link">${label}</a>`;

    const makeMobileLink = ({ label, href }) =>
      `<a href="${href}" class="navbar__mobile-link">${label}</a>`;

    if (desktop) desktop.innerHTML = links.map(makeDesktopLink).join('');
    if (mobile) {
      mobile.innerHTML = links.map(makeMobileLink).join('') +
        `<a href="${cfg.contact.whatsapp ? `https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(cfg.contact.whatsappMessage || '')}` : '#'}"
            class="btn btn-primary navbar__mobile-cta" target="_blank" rel="noopener">
          Consultar por WhatsApp
        </a>`;
    }
  }

  // ── Hero ───────────────────────────────────────────────────
  function injectHero(cfg) {
    const { headline, subheadline, cta, ctaHref, image } = cfg.hero;

    setText('[data-hero-headline]', headline);
    setText('[data-hero-subtitle]', subheadline);
    setText('[data-hero-cta]', cta);
    setAttr('[data-hero-cta]', 'href', ctaHref);

    if (image) {
      const bg = $('[data-hero-bg]');
      if (bg) {
        bg.style.backgroundImage = `url('${image}')`;
        // Ken Burns effect trigger
        const img = new Image();
        img.onload = () => bg.classList.add('loaded');
        img.src = image;
      }
    }
  }

  // ── Stats ──────────────────────────────────────────────────
  function injectStats(cfg) {
    const container = $('[data-stats-grid]');
    if (!container || !cfg.stats?.length) return;

    container.innerHTML = cfg.stats.map(({ value, suffix, label }, i) => `
      <div class="stat-card" data-reveal data-delay="${i + 1}">
        <span class="stat-card__number">
          <span class="counter" data-target="${value}">0</span><span class="stat-card__suffix">${suffix || ''}</span>
        </span>
        <p class="stat-card__label">${label}</p>
      </div>
    `).join('');
  }

  // ── Partners ───────────────────────────────────────────────
  function injectPartners(cfg) {
    const container = $('[data-partners-row]');
    if (!container || !cfg.partners?.length) return;

    const html = cfg.partners.map(({ name, logo }) => `
      <div class="partner-pill">
        ${logo ? `<img src="${logo}" alt="${name}" style="height:20px;width:auto;">` : ''}
        <span>${name}</span>
      </div>
    `).join('');
    // duplicate for smooth infinite scroll
    container.innerHTML = html + html;
  }

  // ── About ──────────────────────────────────────────────────
  function injectAbout(cfg) {
    const { title, body, image } = cfg.about;
    setText('[data-about-title]', title);
    setText('[data-about-body]', body);

    if (image) {
      const img = $('[data-about-image]');
      if (img) { img.src = image; img.alt = title; }
    }
  }

  // ── Catalog ────────────────────────────────────────────────
  function injectCatalog(cfg) {
    const { title, subtitle, items } = cfg.catalog;

    setText('[data-catalog-title]', title);
    setText('[data-catalog-subtitle]', subtitle);

    const track = $('[data-catalog-track]');
    if (!track || !items?.length) return;

    track.innerHTML = items.map(({ title: t, price, location, specs, image, type }) => `
      <div class="card">
        <div class="card__image-wrap">
          <div class="card__price-badge">${price}</div>
          <img src="${image}" alt="${t}" class="card__image" loading="lazy">
        </div>
        <div class="card__body">
          <p class="card__meta"><i class="fas fa-map-marker-alt"></i> ${location} &nbsp;·&nbsp; ${type}</p>
          <h3 class="card__title">${t}</h3>
          <p class="card__specs"><i class="fas fa-ruler-combined"></i> ${specs}</p>
        </div>
      </div>
    `).join('');
  }

  // ── Process ────────────────────────────────────────────────
  function injectProcess(cfg) {
    const { title, subtitle, steps } = cfg.process;

    setText('[data-process-title]', title);
    setText('[data-process-subtitle]', subtitle);

    const grid = $('[data-process-grid]');
    if (!grid || !steps?.length) return;

    grid.innerHTML = steps.map(({ icon, title: t, body }, i) => `
      <div class="step-card" data-reveal data-delay="${(i % 2) + 1}">
        <div class="step-card__icon">${icon}</div>
        <div>
          <p class="step-card__number">Paso ${String(i + 1).padStart(2, '0')}</p>
          <h4 class="step-card__title">${t}</h4>
          <p class="step-card__text">${body}</p>
        </div>
      </div>
    `).join('');
  }

  // ── Testimonials ───────────────────────────────────────────
  function injectTestimonials(cfg) {
    const { title, subtitle } = cfg.process; // reuse section structure
    const testimonials = cfg.testimonials;

    const track = $('[data-testimonials-track]');
    if (!track || !testimonials?.length) return;

    track.innerHTML = testimonials.map(({ name, role, context, rating, text, avatar }) => {
      const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);
      const stars = Array(rating || 5).fill('<i class="fas fa-star" style="color:var(--color-accent); font-size:12px;"></i>').join('');
      return `
        <div class="testimonial-card">
          <div class="testimonial-card__stars">${stars}</div>
          <p class="testimonial-card__text">"${text}"</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">
              ${avatar ? `<img src="${avatar}" alt="${name}">` : initials}
            </div>
            <div>
              <p class="testimonial-card__name">${name}</p>
              <p class="testimonial-card__role">${role}</p>
              <p class="testimonial-card__context" style="font-size:11px; color:var(--color-text-muted); margin-top:2px;"><i class="fas fa-check-circle" style="color:var(--color-primary-mid)"></i> ${context}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ── Contact ────────────────────────────────────────────────
  function injectContact(cfg) {
    const { title, subtitle, formAction } = cfg.contactSection;
    const { phone, email, address, whatsapp, whatsappMessage } = cfg.contact;

    setText('[data-contact-title]', title);
    setText('[data-contact-subtitle]', subtitle);

    const form = $('[data-contact-form]');
    if (form && formAction) form.action = formAction;

    setText('[data-contact-phone]', phone);
    setText('[data-contact-email]', email);
    setText('[data-contact-address]', address);

    const phoneLink = $('[data-contact-phone-link]');
    const emailLink = $('[data-contact-email-link]');
    const mapLink = $('[data-contact-map-link]');

    if (phoneLink) phoneLink.href = `tel:${phone?.replace(/\s/g, '')}`;
    if (emailLink) emailLink.href = `mailto:${email}`;
    if (mapLink && cfg.contact.mapUrl) mapLink.href = cfg.contact.mapUrl;
  }

  // ── Footer ─────────────────────────────────────────────────
  function injectFooter(cfg) {
    const { copy, links } = cfg.footer;
    const { phone, email, address } = cfg.contact;

    setText('[data-footer-copy]', copy);

    const legalEl = $('[data-footer-legal]');
    if (legalEl && links?.length) {
      legalEl.innerHTML = links.map(({ label, href }) =>
        `<a href="${href}">${label}</a>`
      ).join('');
    }

    setText('[data-footer-phone]', phone);
    setText('[data-footer-email]', email);
    setText('[data-footer-address]', address);

    // Social links
    const socials = cfg.social;
    ['instagram', 'facebook', 'linkedin'].forEach(net => {
      const el = $(`[data-social-${net}]`);
      if (el) {
        if (socials[net]) {
          el.href = socials[net];
          el.style.display = 'flex';
        } else {
          el.style.display = 'none';
        }
      }
    });
  }

  // ── WhatsApp FAB ───────────────────────────────────────────
  function injectWhatsApp(cfg) {
    const { whatsapp, whatsappMessage } = cfg.contact;
    const fab = $('[data-whatsapp-fab]');
    if (!fab || !whatsapp) return;

    const msg = encodeURIComponent(whatsappMessage || '');
    fab.href = `https://wa.me/${whatsapp}?text=${msg}`;
  }

  // ── Navbar CTA ─────────────────────────────────────────────
  function injectNavCta(cfg) {
    const cta = $('[data-nav-cta]');
    if (!cta) return;
    const { whatsapp, whatsappMessage } = cfg.contact;
    if (whatsapp) {
      cta.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappMessage || '')}`;
      cta.target = '_blank';
      cta.rel = 'noopener noreferrer';
    }
  }

  // ── Public init ────────────────────────────────────────────
  function init() {
    if (typeof SITE_CONFIG === 'undefined') {
      console.error('[ConfigInjector] SITE_CONFIG no encontrado. ¿Cargaste config/site-config.js?');
      return;
    }

    const cfg = SITE_CONFIG;

    injectBrand(cfg);
    injectNav(cfg);
    injectNavCta(cfg);
    injectHero(cfg);
    injectStats(cfg);
    injectPartners(cfg);
    injectAbout(cfg);
    injectCatalog(cfg);
    injectProcess(cfg);
    injectTestimonials(cfg);
    injectContact(cfg);
    injectFooter(cfg);
    injectWhatsApp(cfg);
  }

  return { init };
})();
