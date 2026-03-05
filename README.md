# Espacio Prime — Inmobiliaria Comercial
### Plantilla web institucional · Ciudad del Este, Paraguay

---

## 🚀 Inicio rápido

1. Descarga y descomprime el proyecto.
2. Abre **`config/site-config.js`** y personaliza los datos del cliente.
3. Reemplaza las imágenes en `assets/img/` (opcional — por defecto usa URLs de Unsplash).
4. Sube todos los archivos al hosting (funciona en cualquier hosting estático).
5. Abre `index.html` en el navegador.

> ⚠️ Para formularios de contacto funcionales, configura `formAction` en `site-config.js` con un endpoint de [Formspree](https://formspree.io) o [Netlify Forms](https://netlify.com/products/forms/).

---

## 📁 Estructura del proyecto

```
Inmobiliaria/
│
├── index.html                 ← Estructura HTML (no modificar salvo nuevas secciones)
│
├── config/
│   └── site-config.js        ← ⭐ ÚNICO ARCHIVO A MODIFICAR POR CLIENTE
│
├── assets/
│   ├── css/
│   │   ├── variables.css      ← Tokens de diseño (colores, tipografía, espaciado)
│   │   ├── base.css           ← Reset y tipografía global
│   │   ├── components.css     ← Botones, cards, badges, inputs
│   │   ├── sections.css       ← Estilos por sección
│   │   └── responsive.css     ← Media queries (mobile-first)
│   │
│   ├── js/
│   │   ├── main.js            ← Entry point — orquesta todos los módulos
│   │   ├── config-injector.js ← Lee site-config.js y puebla el DOM
│   │   ├── navbar.js          ← Smart navbar con scroll y menú mobile
│   │   ├── carousel.js        ← Carrusel (catálogo + testimonios)
│   │   ├── scroll-reveal.js   ← Animaciones al hacer scroll
│   │   ├── counter.js         ← Contadores animados
│   │   ├── faq.js             ← Acordeón FAQ (para páginas futuras)
│   │   └── whatsapp.js        ← Botón flotante de WhatsApp
│   │
│   └── img/
│       └── (imágenes del cliente)
│
└── README.md
```

---

## ✏️ Personalización

### Solo editar `config/site-config.js`

El archivo está completamente documentado con comentarios. Permite configurar:

| Sección | Qué se puede cambiar |
|---|---|
| `brand` | Nombre, tagline, logo |
| `contact` | WhatsApp, teléfono, email, dirección |
| `social` | Instagram, Facebook, LinkedIn |
| `nav` | Links del menú |
| `hero` | Título, subtítulo, imagen de fondo, CTA |
| `stats` | Números y etiquetas de estadísticas |
| `partners` | Nombres y logos de empresas aliadas |
| `about` | Texto "Nosotros" e imagen |
| `catalog` | Título, descripción y cards de propiedades |
| `process` | Pasos del proceso de trabajo |
| `testimonials` | Testimonios de clientes |
| `contactSection` | Textos y endpoint del formulario |
| `footer` | Copyright y links legales |

---

## 📄 Agregar nuevas páginas

El proyecto está preparado para escalar. Para agregar, por ejemplo, una página "Nosotros":

1. Crear `nosotros.html` con la misma cabecera/footer que `index.html`.
2. Incluir los mismos scripts en el mismo orden.
3. Usar los mismos componentes CSS.
4. Agregar el link en `site-config.js → nav`.

---

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con Custom Properties
- JavaScript vanilla (ES2020+, sin dependencias)
- Google Fonts: Playfair Display + DM Sans
- Imágenes: Unsplash (reemplazables)

---

## 📦 Hosting recomendado

- [Netlify](https://netlify.com) — drag & drop, gratis
- [Vercel](https://vercel.com) — gratis para sitios estáticos
- [GitHub Pages](https://pages.github.com) — gratis
- Cualquier hosting cPanel con soporte de archivos estáticos

---

*Desarrollado como plantilla de portafolio de agencia web · 2025*
