# gerardomasana.com

Sitio web tributo a **Gerardo Masana**, fundador de Les Luthiers.

---

## 🎯 Sobre el Proyecto

Este sitio web es un homenaje a Gerardo Masana, músico, compositor y fundador del legendario grupo argentino Les Luthiers. Creado originalmente por Sebastián Masana (hijo de Gerardo) en 2004, el sitio está siendo modernizado manteniendo todo su contenido original.

### Contenido del Sitio

- Biografía completa de Gerardo Masana
- Historia de la fundación de Les Luthiers
- Catálogo de sus instrumentos informales
- Repertorio de canciones
- Información sobre el libro "Gerardo Masana y la fundación de Les Luthiers"

---

## 🚀 Estado del Proyecto

### Fase Actual: **Fase 1 - Publicación Legacy**
- [x] Credenciales configuradas
- [ ] Repositorio Git inicializado
- [ ] Conectado a GitHub
- [ ] Deploy a Cloudflare Pages
- [ ] DNS configurado

### Próxima Fase: **Fase 2 - Rediseño Moderno**
Stack: Astro + Tailwind CSS + TypeScript

---

## 📂 Estructura

```
gerardomasana.com/
├── legacy/              # Sitio original (2004-2010)
├── src/                 # Código moderno (Fase 2)
├── public/              # Assets públicos
├── scripts/             # Scripts de utilidad
└── docs/                # Documentación
```

---

## 🛠️ Tecnologías

### Fase 1 (Actual)
- HTML estático
- CSS tradicional
- Cloudflare Pages

### Fase 2 (En desarrollo)
- [Astro](https://astro.build) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- TypeScript - Type safety
- Markdown - Content management

---

## 💻 Desarrollo Local

### Requisitos
- Node.js 18+
- npm o pnpm

### Instalación (Fase 2)

```bash
# Clonar repositorio
git clone https://github.com/chuchurex/gerardomasana.com.git
cd gerardomasana.com

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# Servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3015`

---

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Producción
npm run build            # Build para producción
npm run preview          # Preview del build

# Utilidades
npm run format           # Formatear código
npm run lint             # Linter
```

---

## 🌐 Deploy

### Automático
Push a `main` → Deploy automático en Cloudflare Pages

### Manual
```bash
npm run build
# Upload dist/ a Cloudflare Pages
```

---

## 📝 Credenciales

Las credenciales están en `.env` (NO commitear):
- Cloudflare API
- Hostinger SSH
- Sanity CMS (opcional)
- Anthropic API (opcional)

Ver `.env.example` para template.

---

## 🎨 Diseño

Ver `ARQUITECTURA.md` para:
- Propuesta de diseño completa
- Sistema de colores
- Tipografía
- Componentes
- Wireframes

---

## 📚 Documentación

- `ARQUITECTURA.md` - Arquitectura completa del proyecto
- `CHANGELOG.md` - Historial de cambios (próximamente)
- `CONTRIBUTING.md` - Guía de contribución (próximamente)

---

## 🔗 Enlaces

- **Sitio en producción**: https://gerardomasana.com
- **Repositorio**: https://github.com/chuchurex/gerardomasana.com
- **Libro**: "Gerardo Masana y la fundación de Les Luthiers" (Editorial Belacqva, 2004)

---

## 👤 Autor

**Sebastián Masana** - Autor del contenido y sitio original (2004)

**Modernización**: chuchurex (2026)

---

## 📄 Licencia

Copyright © 2004-2026, Sebastián Masana. Todos los derechos reservados.

---

## 🙏 Agradecimientos

- Familia Masana por preservar el legado
- Les Luthiers por su contribución al arte
- Comunidad de fans de Les Luthiers
