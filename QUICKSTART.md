# 🚀 Quick Start - gerardomasana.com

Guía rápida para poner el sitio en producción.

---

## ✅ Prerequisitos Completados

- [x] Dominio comprado en Cloudflare: **gerardomasana.com**
- [x] Credenciales configuradas (.env)
- [x] Sitio legacy respaldado
- [x] Arquitectura documentada

---

## 🎯 FASE 1: Publicar Sitio Actual (15 minutos)

### Opción A: Cloudflare Pages (Recomendado - GRATIS)

#### 1. Inicializar Git y Subir a GitHub

```bash
cd /Users/chuchurex/Sites/prod/gerardomasana.com

# Ejecutar script automático
./scripts/init-git.sh

# Push a GitHub
git push -u origin main
```

#### 2. Configurar Cloudflare Pages

1. Ir a: https://dash.cloudflare.com/
2. **Pages** → **Create a project** → **Connect to Git**
3. Seleccionar repositorio: `chuchurex/gerardomasana.com`
4. Configuración:
   - **Production branch**: `main`
   - **Build command**: (dejar vacío)
   - **Build output directory**: `/`
   - **Root directory**: `/`
5. **Save and Deploy**

#### 3. Configurar DNS

1. En Cloudflare Dashboard → **DNS**
2. Agregar/Modificar records:

```
Type    Name    Content                      Proxy
----    ----    -------                      -----
CNAME   @       gerardomasana.pages.dev      ✅ Proxied
CNAME   www     gerardomasana.pages.dev      ✅ Proxied
```

3. **Esperar 1-5 minutos** para propagación DNS

#### 4. Verificar

Abrir en navegador: https://gerardomasana.com

✅ **LISTO! Sitio en producción**

---

### Opción B: Hostinger (Tradicional)

```bash
cd /Users/chuchurex/Sites/prod/gerardomasana.com

# Deploy directo via SSH/rsync
./scripts/deploy-legacy.sh
```

**DNS en Cloudflare**:
```
Type    Name    Content          Proxy
----    ----    -------          -----
A       @       195.35.41.9      ✅ Proxied
CNAME   www     gerardomasana.com ✅ Proxied
```

---

## 🎨 FASE 2: Rediseño Moderno (Cuando estés listo)

### 1. Crear Branch de Desarrollo

```bash
git checkout -b redesign
```

### 2. Inicializar Astro

```bash
# Instalar Astro
npm create astro@latest . -- --template minimal --typescript strict

# Instalar dependencias
npm install -D tailwindcss @astrojs/tailwind
npm install -D @astrojs/sitemap
npm install -D @astrojs/mdx

# Configurar Tailwind
npx astro add tailwind
```

### 3. Estructura del Proyecto

```bash
# Mover sitio legacy
mkdir legacy
mv *.html legacy/
mv gfx legacy/
mv css legacy/
mv [todas las carpetas actuales] legacy/

# Crear estructura moderna
mkdir -p src/{components,layouts,pages,styles,content,assets}
mkdir -p public
```

### 4. Migrar Contenido

```bash
# Script de migración HTML → Markdown
node scripts/migrate-content.js
```

### 5. Desarrollo Local

```bash
# Servidor de desarrollo
npm run dev

# Abrir: http://localhost:3015
```

### 6. Deploy Redesign

```bash
# Cuando esté listo
git add .
git commit -m "feat: modern redesign with Astro + Tailwind"
git push origin redesign

# Crear Pull Request en GitHub
# Merge a main → Auto-deploy en Cloudflare Pages
```

---

## 📋 Checklist de Deploy

### Pre-Deploy
- [ ] .env configurado (NO commitear)
- [ ] .gitignore creado
- [ ] Git inicializado
- [ ] Repository en GitHub

### Cloudflare Pages
- [ ] Proyecto conectado a GitHub
- [ ] Build settings configurados
- [ ] Deploy exitoso
- [ ] DNS configurado
- [ ] SSL activo (automático)

### Post-Deploy
- [ ] Verificar todas las páginas
- [ ] Verificar imágenes
- [ ] Verificar links
- [ ] Test en mobile
- [ ] Test en diferentes browsers

---

## 🔧 Troubleshooting

### Git push falla
```bash
# Si el repositorio ya existe
git pull origin main --allow-unrelated-histories
git push -u origin main --force
```

### DNS no resuelve
- Esperar 5-10 minutos
- Limpiar caché DNS: `sudo dscacheutil -flushcache`
- Verificar en: https://dnschecker.org/

### Build falla en Cloudflare
- Verificar que no haya archivos con caracteres especiales
- Revisar logs en Cloudflare Pages

---

## 📞 Soporte

### Documentación
- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Astro: https://docs.astro.build/
- Tailwind CSS: https://tailwindcss.com/docs

### Recursos
- `ARQUITECTURA.md` - Arquitectura completa
- `README.md` - Documentación general
- `.env.example` - Template de variables

---

## ⏱️ Tiempos Estimados

- **Fase 1 (Cloudflare)**: 15 minutos
- **Fase 1 (Hostinger)**: 5 minutos
- **Fase 2 Setup**: 1-2 horas
- **Fase 2 Desarrollo**: 2-4 semanas

---

## 🎯 Siguiente Paso Recomendado

**Ejecutar ahora**:
```bash
cd /Users/chuchurex/Sites/prod/gerardomasana.com
./scripts/init-git.sh
```

¡Listo para comenzar! 🚀
