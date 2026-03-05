/**
 * navbar.js — Smart navbar with scroll detection + mobile menu
 */

const Navbar = (() => {
  let navbar, hamburger, mobileMenu;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  function init() {
    navbar      = document.querySelector('.navbar');
    hamburger   = document.querySelector('.navbar__hamburger');
    mobileMenu  = document.querySelector('.navbar__mobile');

    if (!navbar) return;

    // Initial state
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', toggleMenu);

      // Close on link click
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) closeMenu();
      });
    }

    // Active link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link, .navbar__mobile-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  return { init };
})();
