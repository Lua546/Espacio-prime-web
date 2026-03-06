/**
 * ⭐ SITE CONFIG — ÚNICO ARCHIVO A MODIFICAR POR CLIENTE
 * =====================================================
 * Edita este archivo para personalizar toda la landing page.
 * No es necesario tocar ningún otro archivo.
 */

const SITE_CONFIG = {

  // ─── IDENTIDAD ────────────────────────────────────────────
  brand: {
    name: "Espacio Prime",
    tagline: "Inmobiliaria Comercial",
    logo: "assets/img/espacio-prime-logo.png",
    favicon: "assets/img/espacio-prime-logo.png",
  },

  // ─── CONTACTO ─────────────────────────────────────────────
  contact: {
    whatsapp: "595981000000",          // número con código de país, sin +
    whatsappMessage: "Hola, me interesa una propiedad.",
    phone: "+595 981 000 000",
    email: "info@espacioprime.com.py",
    address: "Av. Monseñor Rodríguez 1234, Ciudad del Este, Alto Paraná",
    mapUrl: "https://maps.google.com/?q=Ciudad+del+Este+Paraguay",
  },

  // ─── REDES SOCIALES ───────────────────────────────────────
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: null,
  },

  // ─── NAVEGACIÓN ───────────────────────────────────────────
  nav: [
    { label: "Nosotros", href: "nosotros.html" },
    { label: "Servicios", href: "servicios.html" },
    { label: "Cat\u00e1logo", href: "catalogo.html" },
    { label: "Contacto", href: "#contacto" },
  ],

  // ─── HERO ─────────────────────────────────────────────────
  hero: {
    headline: "Encuentra propiedades en Ciudad del Este",
    subheadline: "Casas, departamentos y locales disponibles hoy.",
    cta: "Ver propiedades",
    ctaHref: "#catalogo",
    // Imagen de fondo del hero (URL externa o ruta local)
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
  },

  // ─── ESTADÍSTICAS ─────────────────────────────────────────
  stats: [
    { value: 120, suffix: "+", label: "Propiedades vendidas" },
    { value: 8, suffix: "", label: "Años en CDE" },
    { value: 200, suffix: "+", label: "Clientes confiaron" },
  ],

  // ─── LOGOS CLIENTES / PARTNERS ────────────────────────────
  partners: [
    { name: "Constructora Itaipú", logo: null },
    { name: "Grupo Iguazú", logo: null },
    { name: "Paraná Invest", logo: null },
    { name: "CDE Capital", logo: null },
    { name: "Andes Group", logo: null },
  ],

  // ─── NOSOTROS ─────────────────────────────────────────────
  about: {
    title: "Expertos en el mercado inmobiliario del Este",
    body: "Somos una agencia especializada en inmuebles comerciales en Ciudad del Este. Ayudamos a empresas y emprendedores a encontrar el espacio ideal — desde oficinas y locales hasta depósitos y terrenos. Ofrecemos un servicio integral: búsqueda, evaluación, documentación y cierre de operación.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  },

  // ─── PROPIEDADES DESTACADAS ────────────────────────────────────
  catalog: {
    title: "Propiedades Destacadas",
    subtitle: "Selección de las mejores oportunidades disponibles hoy en Ciudad del Este.",
    items: [
      {
        title: "Local Comercial Premium sobre Av. San Blas",
        price: "$ 1,200 / mes",
        location: "Centro, Ciudad del Este",
        type: "Local",
        specs: "120 m² | 1 Baño | Estacionamiento",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
      },
      {
        title: "Piso de Oficinas Corporativas",
        price: "$ 2,500 / mes",
        location: "Área 1, Ciudad del Este",
        type: "Oficina",
        specs: "300 m² | 4 Baños | 6 Cocheras",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      },
      {
        title: "Galpón Logístico con Rampa",
        price: "$ 4,000 / mes",
        location: "Parque Industrial, Minga Guazú",
        type: "Depósito",
        specs: "1,000 m² | Rampa | Trifásica",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      },
      {
        title: "Terreno Comercial en Esquina",
        price: "$ 150,000",
        location: "Km 7, Ciudad del Este",
        type: "Terreno",
        specs: "800 m² | Alto tránsito",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
      },
    ],
  },

  // ─── SERVICIOS / CATÁLOGO COMPLETO ────────────────────────────────────
  servicesCatalog: [
    {
      title: "Casa Moderna en Barrio Cerrado",
      price: 1500, // Valor numérico para filtros
      priceText: "$ 1,500 / mes",
      location: "Paraná Country Club",
      city: "parana", // para el filtro
      type: "casa",   // para el filtro
      specs: "450 m² | 3 Habitaciones | Piscina",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    },
    {
      title: "Casa Familiar con Amplio Patio",
      price: 800,
      priceText: "$ 800 / mes",
      location: "Área 1, Ciudad del Este",
      city: "area1",
      type: "casa",
      specs: "200 m² | 3 Habitaciones | Garaje Doble",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    },
    {
      title: "Casa de Verano con Quincho",
      price: 1800,
      priceText: "$ 1,800 / mes",
      location: "Paraná Country Club",
      city: "parana",
      type: "casa",
      specs: "500 m² | 4 Habitaciones | Quincho",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    },
    {
      title: "Casa Céntrica de Estilo Colonial",
      price: 1100,
      priceText: "$ 1,100 / mes",
      location: "Centro, Ciudad del Este",
      city: "centro",
      type: "casa",
      specs: "300 m² | 3 Habitaciones | Jardín Trasero",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80",
    },
    {
      title: "Departamento Amoblado Premium",
      price: 1200,
      priceText: "$ 1,200 / mes",
      location: "Centro, Ciudad del Este",
      city: "centro",
      type: "departamento",
      specs: "100 m² | 2 Habitaciones | Gimnasio",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    },
    {
      title: "Departamento Céntrico Ideal Estudiantes",
      price: 450,
      priceText: "$ 450 / mes",
      location: "Centro, Ciudad del Este",
      city: "centro",
      type: "departamento",
      specs: "60 m² | 1 Habitación | Balcón",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    },
    {
      title: "Penthouse Exclusivo con Vista Panorámica",
      price: 2500,
      priceText: "$ 2,500 / mes",
      location: "Paraná Country Club",
      city: "parana",
      type: "departamento",
      specs: "200 m² | 3 Habitaciones | Terraza Privada",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&q=80",
    },
    {
      title: "Departamento Económico y Acogedor",
      price: 350,
      priceText: "$ 350 / mes",
      location: "Área 1, Ciudad del Este",
      city: "area1",
      type: "departamento",
      specs: "50 m² | 1 Habitación | Piso 3",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    },
    {
      title: "Local Comercial Premium sobre Av. San Blas",
      price: 1200,
      priceText: "$ 1,200 / mes",
      location: "Centro, Ciudad del Este",
      city: "centro",
      type: "local",
      specs: "120 m² | 1 Baño | Estacionamiento",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    },
    {
      title: "Local Amplio para Supermercado o Tienda",
      price: 4500,
      priceText: "$ 4,500 / mes",
      location: "Área 1, Ciudad del Este",
      city: "area1",
      type: "local",
      specs: "800 m² | 4 Baños | 10 Cocheras",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    },
    {
      title: "Pequeño Local para Cafetería",
      price: 800,
      priceText: "$ 800 / mes",
      location: "Centro, Ciudad del Este",
      city: "centro",
      type: "local",
      specs: "60 m² | 1 Baño | Vitrina hacia la calle",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    },
    {
      title: "Gran Depósito Industrial",
      price: 3200,
      priceText: "$ 3,200 / mes",
      location: "Paraná Country Club",
      city: "parana",
      type: "local",
      specs: "600 m² | Rampa Carga | Oficina Interna",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    }
  ],


  // ─── PROCESO ──────────────────────────────────────────────
  process: {
    title: "¿Cómo trabajamos?",
    subtitle: "Un proceso simple, claro y acompañado en cada etapa.",
    steps: [
      { icon: '<i class="fas fa-search"></i>', title: "Requisitos", body: "Analizamos tu negocio y filtramos las mejores opciones de propiedades en la región." },
      { icon: '<i class="fas fa-building"></i>', title: "Visitas", body: "Coordinamos los recorridos y brindamos asesoramiento experto durante cada visita." },
      { icon: '<i class="fas fa-handshake"></i>', title: "Cierre Rápido", body: "Gestionamos toda la documentación para una entrega de llaves rápida y segura." },
    ],
  },

  // ─── TESTIMONIOS ──────────────────────────────────────────
  testimonials: [
    {
      name: "Gabriela Martínez",
      role: "Empresaria Retail",
      context: "Alquiló local en Centro CDE",
      rating: 5,
      text: "Encontramos el local perfecto en menos de dos semanas. La atención fue impecable y el proceso muy transparente.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Diego Fernández",
      role: "Director de Logística",
      context: "Alquiló galpón en Km 7",
      rating: 5,
      text: "Nos asesoraron en la búsqueda de un galpón con requisitos muy específicos. Excelente equipo y respuesta rápida.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Laura Benítez",
      role: "Fundadora de Startup",
      context: "Compró oficina en Área 1",
      rating: 5,
      text: "Profesionales de verdad. Gestionaron toda la documentación sin contratiempos. Los recomiendo ampliamente.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ],

  // ─── FORMULARIO DE CONTACTO ───────────────────────────────
  contactSection: {
    title: "¿Hablamos?",
    subtitle: "Cuéntanos qué necesitas y te respondemos a la brevedad.",
    // Endpoint donde se envía el formulario (puedes usar Formspree, Netlify Forms, etc.)
    formAction: "#", // reemplazar con URL real
  },

  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    copy: "© 2025 Espacio Prime Inmobiliaria. Todos los derechos reservados.",
    links: [
      { label: "Política de privacidad", href: "#" },
      { label: "Términos de uso", href: "#" },
    ],
  },

};

// No modificar debajo de esta línea
if (typeof module !== "undefined") module.exports = SITE_CONFIG;
