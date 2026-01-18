# Arquitectura Moderna - gerardomasana.com

## 🎯 Visión General

Sitio tributo a Gerardo Masana, fundador de Les Luthiers. Modernización completa manteniendo el contenido original pero con enfoque contemporáneo en experiencia de usuario y diseño.

---

## 📊 Análisis del Sitio Actual

### Estado Actual
- **Tecnología**: HTML estático (2004-2010)
- **Páginas**: 63 archivos HTML
- **Tamaño**: 3.6 MB
- **Estructura**: 9 secciones principales
- **Charset**: ISO-8859-1 (legacy)

### Secciones Principales
1. **Home** - Bienvenida y presentación
2. **Su familia** - Historia familiar
3. **Su vida** - Biografía
4. **En el coro** - Etapa coral
5. **Los comienzos** - Primeros espectáculos
6. **Les Luthiers** - Fundación del grupo
7. **Sus instrumentos** - Instrumentos informales
8. **Sus canciones** - Repertorio
9. **El Libro** - Publicación sobre su vida

---

## 🏗️ Arquitectura Propuesta

### Stack Tecnológico

#### Fase 1: Publicación Actual (Semana 1)
```
HTML estático legacy → Cloudflare Pages
├── Sin cambios en código
├── Deploy automático desde GitHub
└── CDN global + SSL automático
```

#### Fase 2: Rediseño Moderno (Semanas 2-4)
```
Astro + Tailwind CSS + TypeScript
├── Framework: Astro 4.x (SSG)
├── Styling: Tailwind CSS + Custom Design System
├── Content: Markdown + Collections
├── Imágenes: WebP/AVIF optimizadas
├── Fonts: Variable fonts modernas
└── Deploy: Cloudflare Pages
```

#### Fase 3: CMS Opcional (Futuro)
```
Sanity CMS (headless)
├── Gestión de contenido visual
├── Edición sin código
└── API GraphQL
```

---

## 🎨 Propuesta de Diseño

### Concepto Visual
**"Modernidad respetuosa del legado"**

- Tipografía elegante y legible (serif moderna para títulos, sans-serif para cuerpo)
- Paleta de colores sobria y sofisticada (tonos tierra, negro, blanco)
- Espacios amplios y respirables
- Diseño minimalista con foco en contenido
- Imágenes grandes y bien curadas
- Navegación intuitiva y fluida

### Componentes Clave

```
┌─────────────────────────────────────┐
│  HERO con foto emblemática          │
│  + Título elegante                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  NAVEGACIÓN horizontal moderna      │
│  con iconos sutiles                 │
└─────────────────────────────────────┘
┌──────────────┬──────────────────────┐
│   SIDEBAR    │    CONTENIDO         │
│   Timeline   │    Principal         │
│   Contextual │    + Galería         │
└──────────────┴──────────────────────┘
┌─────────────────────────────────────┐
│  FOOTER con enlaces y créditos      │
└─────────────────────────────────────┘
```

### Características Modernas

1. **Responsive Design**
   - Mobile-first
   - Breakpoints: 640px, 768px, 1024px, 1280px

2. **Performance**
   - Lighthouse Score: 95+
   - Lazy loading de imágenes
   - Fonts subsetting
   - Critical CSS inline

3. **Accesibilidad**
   - WCAG 2.1 AA compliance
   - Navegación por teclado
   - Screen reader friendly
   - Contraste adecuado

4. **SEO**
   - Meta tags optimizados
   - Open Graph + Twitter Cards
   - Schema.org markup (Person, Book)
   - Sitemap XML automático

---

## 📁 Estructura de Proyecto Moderna

```
gerardomasana.com/
├── legacy/                          # Sitio original (respaldo)
│   ├── index.html
│   ├── css/
│   ├── gfx/
│   └── [todas las carpetas actuales]
│
├── src/                             # Código fuente moderno
│   ├── components/                  # Componentes reutilizables
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── Layout.astro
│   │   ├── ui/
│   │   │   ├── Timeline.astro
│   │   │   ├── ImageGallery.astro
│   │   │   ├── Card.astro
│   │   │   └── Button.astro
│   │   └── sections/
│   │       ├── Hero.astro
│   │       ├── Biography.astro
│   │       └── BookSection.astro
│   │
│   ├── content/                     # Contenido en Markdown
│   │   ├── config.ts               # Configuración de colecciones
│   │   ├── biografia/              # Sección biografía
│   │   │   ├── familia.md
│   │   │   ├── vida.md
│   │   │   └── coro.md
│   │   ├── obra/                   # Obra artística
│   │   │   ├── espectaculos.md
│   │   │   ├── luthiers.md
│   │   │   ├── instrumentos.md
│   │   │   └── canciones.md
│   │   └── libro/                  # Información del libro
│   │       ├── index.md
│   │       └── faq.md
│   │
│   ├── layouts/                     # Layouts de página
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── SectionLayout.astro
│   │
│   ├── pages/                       # Rutas del sitio
│   │   ├── index.astro             # Home
│   │   ├── biografia/
│   │   │   ├── familia.astro
│   │   │   ├── vida.astro
│   │   │   └── coro.astro
│   │   ├── obra/
│   │   │   ├── espectaculos.astro
│   │   │   ├── luthiers.astro
│   │   │   ├── instrumentos.astro
│   │   │   └── canciones.astro
│   │   ├── libro/
│   │   │   ├── index.astro
│   │   │   └── faq.astro
│   │   └── contacto.astro
│   │
│   ├── styles/                      # Estilos globales
│   │   ├── global.css
│   │   ├── typography.css
│   │   └── utilities.css
│   │
│   └── assets/                      # Assets optimizados
│       ├── images/
│       │   ├── hero/
│       │   ├── gallery/
│       │   └── book/
│       └── fonts/
│
├── public/                          # Assets públicos
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/                     # Imágenes que no requieren procesamiento
│
├── scripts/                         # Scripts de utilidad
│   ├── migrate-content.js          # Migrar HTML → Markdown
│   ├── optimize-images.js          # Optimizar imágenes
│   └── deploy.sh                   # Deploy a Cloudflare Pages
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD automático
│
├── astro.config.mjs                # Configuración de Astro
├── tailwind.config.mjs             # Configuración de Tailwind
├── tsconfig.json                   # TypeScript config
├── package.json
├── .gitignore
├── .env                            # Variables de entorno (NO commitear)
├── .env.example                    # Template de .env
└── README.md
```

---

## 🚀 Plan de Implementación

### FASE 1: Publicación Inmediata (1-2 días)

**Objetivo**: Sitio actual en producción con dominio Cloudflare

```bash
# 1. Inicializar repositorio Git
cd /Users/chuchurex/Sites/prod/gerardomasana.com
git init
git add .
git commit -m "Initial commit: legacy site 2004-2010"

# 2. Renombrar directorio actual
mv /Users/chuchurex/Sites/prod/gerardomasana.com /Users/chuchurex/Sites/prod/gerardomasana.com/legacy

# 3. Conectar con GitHub
git remote add origin https://github.com/chuchurex/gerardomasana.com
git branch -M main
git push -u origin main

# 4. Configurar Cloudflare Pages
# - Conectar repositorio
# - Build command: (none)
# - Output directory: /
# - Deploy automático
```

**DNS en Cloudflare**:
- A record: `@` → IP Cloudflare Pages
- CNAME: `www` → `gerardomasana.com`

### FASE 2: Rediseño Moderno (2-4 semanas)

#### Semana 1: Setup y Migración de Contenido
- [ ] Inicializar proyecto Astro
- [ ] Configurar Tailwind CSS
- [ ] Migrar contenido HTML → Markdown
- [ ] Optimizar imágenes (JPG → WebP/AVIF)
- [ ] Configurar colecciones de contenido

#### Semana 2: Componentes y Layout
- [ ] Diseñar sistema de diseño
- [ ] Crear componentes base
- [ ] Implementar layouts responsive
- [ ] Desarrollar navegación
- [ ] Hero section + Timeline

#### Semana 3: Páginas y Funcionalidades
- [ ] Implementar todas las páginas
- [ ] Galería de imágenes
- [ ] Sección del libro
- [ ] FAQ interactivo
- [ ] Formulario de contacto

#### Semana 4: Optimización y Launch
- [ ] Optimización de performance
- [ ] SEO completo
- [ ] Testing cross-browser
- [ ] Accesibilidad audit
- [ ] Deploy a producción

### FASE 3: CMS Opcional (Futuro)

- Configurar Sanity Studio
- Migrar contenido Markdown → Sanity
- Integrar con Astro
- Panel de administración

---

## 🎯 Mejoras Propuestas

### UX/UI
1. **Navegación mejorada**
   - Breadcrumbs
   - Barra de progreso de lectura
   - Búsqueda de contenido

2. **Contenido enriquecido**
   - Timeline interactiva de vida
   - Galería de fotos lightbox
   - Audio player para canciones (si hay material)
   - Vídeos embebidos (YouTube/Vimeo)

3. **Engagement**
   - Compartir en redes sociales
   - Sección de comentarios/testimonios
   - Newsletter opcional

### Técnicas
1. **Performance**
   - Image lazy loading
   - Route prefetching
   - Service Worker para offline
   - Compresión Brotli/Gzip

2. **Analytics** (opcional)
   - Cloudflare Web Analytics (privacy-friendly)
   - No cookies, no tracking

3. **Internacionalización** (futuro)
   - Español (principal)
   - Inglés (opcional)

---

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@astrojs/mdx": "^2.0.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.10",
    "sharp": "^0.33.0",
    "prettier": "^3.1.0",
    "prettier-plugin-astro": "^0.12.0"
  }
}
```

---

## 🔐 Seguridad

- HTTPS obligatorio (Cloudflare SSL)
- Headers de seguridad (CSP, X-Frame-Options)
- Sin backend, sin vulnerabilidades de servidor
- Rate limiting en Cloudflare
- DDoS protection incluida

---

## 💰 Costos

### Hosting
- **Cloudflare Pages**: GRATIS
  - Builds ilimitados
  - Bandwidth ilimitado
  - SSL incluido
  - CDN global

### Dominio
- **gerardomasana.com**: Ya comprado en Cloudflare
  - ~$10-15/año (renovación)

### Opcional
- **Sanity CMS**: Plan gratuito hasta 10k documentos
- **Cloudflare Pro**: $20/mes (opcional, features avanzadas)

**Total**: $0/mes (solo dominio ~$1/mes)

---

## 📈 Métricas de Éxito

### Performance
- Lighthouse Score: 95+ en todas las categorías
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Bundle Size: < 100KB (sin imágenes)

### SEO
- Google PageSpeed: 90+
- Core Web Vitals: ✅ All green
- Schema markup implementado
- Open Graph completo

### Accesibilidad
- WCAG 2.1 AA: 100%
- Keyboard navigation: ✅
- Screen reader compatible: ✅

---

## 🎨 Referencias de Diseño

### Inspiración Visual
- **Minimalismo elegante**: Apple.com
- **Biografías modernas**: Medium longform articles
- **Sitios musicales**: Nils Frahm, Max Richter
- **Museos digitales**: MoMA, Guggenheim

### Paleta de Colores Propuesta

```css
/* Tonos principales */
--color-primary: #2C1810;      /* Marrón oscuro */
--color-secondary: #8B7355;    /* Marrón medio */
--color-accent: #D4AF37;       /* Dorado elegante */

/* Neutros */
--color-bg: #FDFBF7;           /* Blanco cálido */
--color-text: #1A1A1A;         /* Negro suave */
--color-text-muted: #666666;   /* Gris medio */

/* Soporte */
--color-border: #E5E5E5;       /* Gris claro */
--color-hover: #F5F5F0;        /* Hover sutil */
```

### Tipografía Propuesta

```css
/* Títulos */
font-family: 'Playfair Display', serif;
/* Elegante, clásica, sofisticada */

/* Cuerpo */
font-family: 'Inter', sans-serif;
/* Moderna, legible, profesional */

/* Monospace (opcional) */
font-family: 'JetBrains Mono', monospace;
/* Para código o detalles técnicos */
```

---

## 📞 Próximos Pasos

1. ✅ **Credenciales configuradas** (.env creado)
2. ⏳ **Inicializar Git** y conectar con GitHub
3. ⏳ **Deploy Fase 1** (sitio legacy a Cloudflare Pages)
4. ⏳ **Setup Astro** para Fase 2
5. ⏳ **Migración de contenido** HTML → Markdown
6. ⏳ **Diseño y desarrollo** del nuevo sitio

---

**¿Comenzamos con la Fase 1 o prefieres ir directo a la Fase 2?**
