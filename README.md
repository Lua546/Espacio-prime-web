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
├── index.html                 ← Estructura HTML (Landing page principal)
├── catalogo.html             ← Página de Catálogo filtrable
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
│   │   ├── contador.js        ← Contadores animados
│   │   ├── faq.js             ← Acordeón FAQ (para páginas futuras)
│   │   ├── servicios.js       ← Lógica de búsqueda y filtrado en tiempo real
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
| `catalog` | Título, descripción y cards de propiedades destacadas |
| `servicesCatalog` | El inventario completo para la ruta /catalogo.html |
| `process` | Pasos del proceso de trabajo |
| `testimonials` | Testimonios de clientes |
| `contactSection` | Textos y endpoint del formulario |
| `footer` | Copyright y links legales |

---

## 📄 Agregar nuevas páginas

El proyecto está preparado para escalar. Para agregar nuevas páginas:

1. Usar la estructura base de cabecera/footer vista en `index.html` o `catalogo.html`.
2. Incluir los mismos scripts globales (`lenis`, `config-injector`, `navbar`).
3. Usar los mismos componentes CSS definidos en el UI Kit.
4. Agregar el link en `site-config.js → nav`.

---

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con Custom Properties
- JavaScript vanilla (ES2020+, sin dependencias pesadas)
- Animaciones de Scroll fluido vía **Lenis**
- Google Fonts: Playfair Display + Lato
- Imágenes: Unsplash (reemplazables)

---

## 📦 Hosting recomendado

- [Netlify](https://netlify.com) — drag & drop, gratis
- [Vercel](https://vercel.com) — gratis para sitios estáticos
- [GitHub Pages](https://pages.github.com) — gratis
- Cualquier hosting cPanel con soporte de archivos estáticos

---

*Desarrollado como plantilla de portafolio de agencia web · 2025*
