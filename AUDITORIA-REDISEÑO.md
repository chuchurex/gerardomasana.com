# AUDITORÍA Y PLAN DE REDISEÑO
## Sitio web gerardomasana.com

**Fecha:** 18 de enero de 2026
**Estado:** Fase de planificación para rediseño completo

---

## TABLA DE CONTENIDOS

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Mapa de Contenidos](#mapa-de-contenidos)
3. [Problemas Detectados](#problemas-detectados)
4. [Plan de Corrección](#plan-de-corrección)
5. [Cronograma](#cronograma)

---

## RESUMEN EJECUTIVO

### Estado Actual
- **Total de archivos HTML:** 63 páginas
- **Tamaño total:** 3.6 MB (90% en imágenes)
- **Tecnología:** HTML estático (2004-2010) con charset ISO-8859-1
- **Problemas críticos encontrados:**
  - 63 enlaces rotos (404s)
  - 63 archivos con problemas de codificación de caracteres
  - Referencias a dominio antiguo (.com.ar)

### Problemas Principales Identificados

#### 🔴 CRÍTICO - Codificación de caracteres
- **63 archivos** muestran `Sebastián` como `Sebasti�n`
- Todos los archivos usan ISO-8859-1 pero se visualizan incorrectamente

#### 🔴 CRÍTICO - Enlaces rotos (404)
- **63 enlaces rotos** en total
- Las páginas en `/libro/2005/03/` y `/libro/2005/05/` tienen rutas relativas incorrectas
- El archivo `Untitled-1.html` tiene enlaces a recursos inexistentes de UChile

#### 🟡 IMPORTANTE - Dominio antiguo
- Referencias a `www.gerardomasana.com.ar` en 4 ubicaciones
- Debe actualizarse a `www.gerardomasana.com`

---

## MAPA DE CONTENIDOS

### Estructura del Sitio (9 Secciones Principales)

```
gerardomasana.com/
│
├── 🏠 HOME (/)
│   └── index.html (103 líneas, 4 KB)
│       - Bienvenida
│       - Introducción al sitio
│       - Link al libro
│
├── 👨‍👩‍👧‍👦 SU FAMILIA (/familia/)
│   └── index.html (149 líneas, 68 KB)
│       - Historia familiar
│       - Árbol genealógico
│       - Fotos familiares
│
├── 📖 SU VIDA (/vida/)
│   └── index.html (225 líneas, 28 KB)
│       - Biografía completa
│       - Cronología
│       - Hitos importantes
│
├── 🎵 EN EL CORO (/coro/)
│   └── index.html (215 líneas, 28 KB)
│       - Etapa en el Coro Universitario
│       - Fotos y anécdotas
│       - Primeras composiciones
│
├── 🎭 LOS COMIENZOS (/espectaculos/)
│   └── index.html (154 líneas, 28 KB)
│       - I Musicisti di Quattraquatro
│       - Primeros espectáculos
│       - Antecedentes de Les Luthiers
│
├── 🎪 LES LUTHIERS (/luthiers/)
│   └── index.html (316 líneas, 44 KB) ⭐ PÁGINA MÁS GRANDE
│       - Fundación del grupo
│       - Primeras giras
│       - Historia completa 1967-1973
│       - 10 fotos vinculadas
│
├── 🎸 SUS INSTRUMENTOS (/instrumentos/)
│   └── index.html (173 líneas, 20 KB)
│       - Instrumentos informales creados
│       - Descripción técnica
│       - Innovaciones
│
├── 🎼 SUS CANCIONES (/canciones/)
│   └── index.html (200 líneas, 16 KB)
│       - Repertorio completo
│       - Obras destacadas
│       - Análisis musical
│
└── 📚 EL LIBRO (/libro/)
    ├── index.html (115 líneas)
    ├── faq.html (124 líneas)
    ├── 2005_03_01_archive.html
    ├── 2005_05_01_archive.html
    └── 2005/
        ├── 03/ (5 artículos)
        │   ├── se-puede-comprar-el-libro-por-internet.html
        │   ├── habr-un-acto-de-presentacin-en-la.html
        │   ├── qu-precio-se-vende-en-espaa-la.html
        │   ├── cuando-se-vender-en-mxico-y-el-resto.html
        │   └── se-vende-en-toda-espaa.html
        └── 05/ (1 artículo)
            └── cundo-sale-la-venta.html

    📁 TOTAL: 308 KB - Sección más grande
```

### Galería de Fotos (/gfx/fotos/)

**49 páginas HTML** con fotos ampliadas:

#### Fotos de Les Luthiers
- abril.html - Debut oficial (2 oct 1967)
- blancanieves.html - Blancanieves y los 7 pecados (1969)
- friue.html - Primer disco
- opus.html - Opus Pi
- grupo.html - Grupo completo (1972)
- libone.html - Foto publicitaria profesional
- palmera.html - Gira Venezuela (1973)
- malagente.html - Programa TV (1968)
- facetoface.html - Núñez Cortés y Masana

#### Fotos del Coro
- coro.html, coro4.html, coro6.html, coro10.html
- anios_coro.html

#### Fotos Familiares y Personales
- gero_nuri.html - Con Nuri (esposa)
- casamiento.html
- gero_ilfiglio.html
- gero_pirata.html
- nuri.html

#### Fotos de I Musicisti
- musicisti1.html, musicisti2.html
- carta_f.html - Carta sobre fundación Les Luthiers
- carta_m.html

#### Fotos Históricas
- campamento.html
- edificio1.html
- bonifacio.html
- thales.html
- arquitectos.html
- peluca.html
- maragno.html
- program_yayo.html
- punta_color.html
- logotucu.html
- mens_sana.html
- en_nazca.html
- apuntes.html
- loscalvos.html
- modaton.html
- instrum.html
- bailando.html
- mscl.html

### Sistema de Navegación

Todas las páginas comparten el mismo menú:
1. Home
2. Su familia
3. Su vida
4. En el coro
5. Los comienzos
6. Les Luthiers
7. Sus instrumentos
8. Sus canciones
9. El Libro

### Estadísticas de Contenido

| Métrica | Valor |
|---------|-------|
| **Páginas principales** | 9 secciones |
| **Páginas del libro** | 9 páginas (FAQ + archivos) |
| **Galería de fotos** | 49 páginas |
| **Páginas de utilidad** | 3 (contacto, contactok, test) |
| **Archivos sin usar** | 1 (Untitled-1.html) |
| **TOTAL** | 71 archivos HTML |
| **Líneas de código** | ~2,471 líneas HTML |
| **Imágenes** | 3.0 MB (90% del proyecto) |
| **CSS** | 1 archivo (primera.css, 210 líneas) |
| **JavaScript** | 1 archivo (contacto.js, 102 líneas) |

---

## PROBLEMAS DETECTADOS

### 🔴 PROBLEMA 1: Codificación de Caracteres

#### Descripción
Los archivos HTML están guardados en **ISO-8859-1** pero al visualizarse en navegadores modernos (que esperan UTF-8 por defecto), los caracteres especiales se muestran incorrectamente.

#### Evidencia
```html
<!-- Aparece como: -->
© Copyright 2004, Sebastián Masana.

<!-- Pero en el código HTML es: -->
� Copyright 2004, Sebasti�n Masana.
```

#### Archivos Afectados (63 archivos)

**Páginas principales (9):**
- index.html
- familia/index.html
- vida/index.html
- coro/index.html
- espectaculos/index.html
- luthiers/index.html
- instrumentos/index.html
- canciones/index.html
- contacto/index.html
- contacto/contactok.html

**Sección libro (10):**
- libro/index.html
- libro/faq.html
- libro/2005_03_01_archive.html
- libro/2005_05_01_archive.html
- libro/2005/03/se-puede-comprar-el-libro-por-internet.html
- libro/2005/03/habr-un-acto-de-presentacin-en-la.html
- libro/2005/03/qu-precio-se-vende-en-espaa-la.html
- libro/2005/03/cuando-se-vender-en-mxico-y-el-resto.html
- libro/2005/03/se-vende-en-toda-espaa.html
- libro/2005/05/cundo-sale-la-venta.html

**Galería de fotos (44):**
- gfx/fotos/abril.html
- gfx/fotos/anios_coro.html
- gfx/fotos/apuntes.html
- gfx/fotos/arquitectos.html
- gfx/fotos/bailando.html
- gfx/fotos/blancanieves.html
- gfx/fotos/bonifacio.html
- gfx/fotos/campamento.html
- gfx/fotos/carta_f.html
- gfx/fotos/carta_m.html
- gfx/fotos/casamiento.html
- gfx/fotos/coro.html
- gfx/fotos/coro4.html
- gfx/fotos/coro6.html
- gfx/fotos/coro10.html
- gfx/fotos/edificio1.html
- gfx/fotos/en_nazca.html
- gfx/fotos/facetoface.html
- gfx/fotos/friue.html
- gfx/fotos/gero_ilfiglio.html
- gfx/fotos/gero_nuri.html
- gfx/fotos/gero_pirata.html
- gfx/fotos/grupo.html
- gfx/fotos/instrum.html
- gfx/fotos/libone.html
- gfx/fotos/logotucu.html
- gfx/fotos/loscalvos.html
- gfx/fotos/malagente.html
- gfx/fotos/maragno.html
- gfx/fotos/mens_sana.html
- gfx/fotos/modaton.html
- gfx/fotos/mscl.html
- gfx/fotos/musicisti1.html
- gfx/fotos/musicisti2.html
- gfx/fotos/nuri.html
- gfx/fotos/opus.html
- gfx/fotos/palmera.html
- gfx/fotos/peluca.html
- gfx/fotos/program_yayo.html
- gfx/fotos/punta_color.html
- gfx/fotos/thales.html

#### Caracteres Afectados Comunes
- `á é í ó ú ñ ü ¿ ¡ ©` se muestran como `� � � � � � � � � �`
- Afecta principalmente:
  - Copyright con ©
  - Nombre "Sebastián"
  - Palabras con tildes (creación, música, también, etc.)

#### Impacto
- **Severidad:** 🔴 CRÍTICA
- **Visibilidad:** Alta (aparece en TODOS los footers)
- **SEO:** Negativo (contenido mal codificado)
- **Experiencia de usuario:** Muy negativa

---

### 🔴 PROBLEMA 2: Enlaces Rotos (404)

#### Descripción
Las páginas dentro de `/libro/2005/03/` y `/libro/2005/05/` tienen rutas relativas mal calculadas que apuntan a ubicaciones inexistentes.

#### Causa Raíz
Las páginas están en `/libro/2005/03/` (3 niveles de profundidad) pero usan `../` solo una vez, cuando deberían usar `../../../` para llegar a la raíz.

#### Ejemplo del Error
```html
<!-- En: libro/2005/03/habr-un-acto-de-presentacin-en-la.html -->

<!-- INCORRECTO (actual): -->
<a href="../index.html">Home</a>
<!-- Busca en: /libro/2005/index.html ❌ (no existe) -->

<!-- CORRECTO (debería ser): -->
<a href="../../../index.html">Home</a>
<!-- Busca en: /index.html ✅ -->
```

#### Enlaces Rotos Detectados (63 total)

**Por archivo en /libro/2005/03/ (6 archivos × 9 enlaces = 54 enlaces rotos):**

Cada uno de estos 6 archivos tiene 9 enlaces rotos en su navegación:
1. `cuando-se-vender-en-mxico-y-el-resto.html`
2. `habr-un-acto-de-presentacin-en-la.html`
3. `qu-precio-se-vende-en-espaa-la.html`
4. `se-puede-comprar-el-libro-por-internet.html`
5. `se-vende-en-toda-espaa.html`
6. (Falta el 6to archivo si existe)

Enlaces rotos en cada uno:
- `../index.html` → debería ser `../../../index.html`
- `../familia/index.html` → debería ser `../../../familia/index.html`
- `../vida/index.html` → debería ser `../../../vida/index.html`
- `../coro/index.html` → debería ser `../../../coro/index.html`
- `../espectaculos/index.html` → debería ser `../../../espectaculos/index.html`
- `../luthiers/index.html` → debería ser `../../../luthiers/index.html`
- `../instrumentos/index.html` → debería ser `../../../instrumentos/index.html`
- `../canciones/index.html` → debería ser `../../../canciones/index.html`
- `../libro/index.html` → debería ser `../../../libro/index.html`

**Por archivo en /libro/2005/05/ (1 archivo × 9 enlaces = 9 enlaces rotos):**
- `cundo-sale-la-venta.html` (mismos 9 enlaces rotos)

**TOTAL:** 63 enlaces rotos (7 archivos × 9 enlaces cada uno)

#### Archivos con enlaces a recursos externos rotos

**Untitled-1.html** (archivo sin usar):
- `/mi/framework/skeletons/miuchile/css/layout.css`
- `/mi/framework/skins/miuchile/css/miuchile.css`
- `/mi/framework/skins/miuchile/css/gfdynamicfeedcontrol.css`

**Recomendación:** Eliminar `Untitled-1.html` ya que es un archivo de la Universidad de Chile que no pertenece al sitio.

#### Impacto
- **Severidad:** 🔴 CRÍTICA
- **Páginas afectadas:** 7 páginas del archivo del libro
- **Enlaces rotos:** 63 en total
- **Experiencia de usuario:** Navegación completamente rota en la sección FAQ del libro

---

### 🟡 PROBLEMA 3: Referencias al Dominio Antiguo

#### Descripción
Existen referencias hardcodeadas al dominio antiguo `www.gerardomasana.com.ar` que debe actualizarse a `www.gerardomasana.com`.

#### Archivos Afectados (4 ubicaciones)

1. **index.html (línea ~30)**
   ```html
   en internet de <a href="http://www.gerardomasana.com.ar">www.gerardomasana.com.ar</a>
   ```

2. **libro/faq.html (línea 7)**
   ```html
   <link rel="Shortcut Icon" type="image/ico" href="http://www.gerardomasana.com.ar/favicon.ico"/>
   ```

3. **libro/faq.html (línea 25)**
   ```html
   <img src="http://www.gerardomasana.com.ar/gfx/top.jpg" alt="...">
   ```

4. **libro/faq.html (línea ~50)**
   ```html
   <img src="http://www.gerardomasana.com.ar/gfx/libro.jpg" alt="...">
   ```

#### Impacto
- **Severidad:** 🟡 IMPORTANTE
- **Visibilidad:** Media (solo en 2 páginas)
- **Funcionalidad:** Baja (probablemente aún funciona con redirect)
- **SEO:** Podría causar confusión con dominio duplicado

---

### 🔵 PROBLEMA 4: Archivos Sin Usar

#### Descripción
Archivos que no forman parte del sitio oficial y deberían eliminarse.

#### Lista
1. **Untitled-1.html** - Archivo de la Universidad de Chile (no relacionado)
2. **test.html** - Página de prueba (4 líneas vacías)

#### Impacto
- **Severidad:** 🔵 MENOR
- **Espacio:** Mínimo (<10 KB)
- **Confusión:** Podría indexarse en Google

---

### 🔵 PROBLEMA 5: Optimización de Imágenes

#### Descripción
Las imágenes ocupan 3.0 MB (90% del sitio) y están en formatos antiguos (JPG, GIF).

#### Oportunidad
- Convertir a **WebP** o **AVIF**: Reducción del 30-70%
- Tamaño estimado post-optimización: **900 KB - 2.1 MB**
- Mejora en tiempo de carga significativa

#### Impacto
- **Severidad:** 🔵 MENOR (funciona, pero no optimizado)
- **Performance:** Mejora potencial de 50-70% en tiempo de carga
- **SEO:** Mejora en Core Web Vitals

---

## PLAN DE CORRECCIÓN

### FASE 1: Correcciones Críticas (Urgentes)

#### 1.1 Corregir Codificación de Caracteres ⏱️ 15 minutos

**Opción A: Migrar a UTF-8 (RECOMENDADO)**

Convertir todos los archivos de ISO-8859-1 a UTF-8:

```bash
# Script de conversión automática
find . -name "*.html" -type f -exec sh -c '
  iconv -f ISO-8859-1 -t UTF-8 "$1" > "$1.tmp" && mv "$1.tmp" "$1"
' sh {} \;

# Actualizar meta charset en todos los archivos
find . -name "*.html" -type f -exec sed -i '' \
  's/charset=iso-8859-1/charset=UTF-8/g' {} \;
```

**Resultado esperado:**
- ✅ `Sebastián` se mostrará correctamente
- ✅ Todos los caracteres especiales (©, á, é, í, ó, ú, ñ) funcionarán
- ✅ Compatible con navegadores modernos
- ✅ Mejor SEO

**Archivos a modificar:** 63 archivos

**Validación:**
```bash
# Verificar que todos usen UTF-8
file -I *.html | grep -v "utf-8"
# (no debería mostrar nada)
```

---

#### 1.2 Corregir Enlaces Rotos ⏱️ 10 minutos

**Script de corrección automática:**

```bash
# Corregir archivos en /libro/2005/03/
find ./libro/2005/03/ -name "*.html" -type f -exec sed -i '' \
  's|href="../\(.*\)/index.html"|href="../../../\1/index.html"|g' {} \;

# Caso especial para home
find ./libro/2005/03/ -name "*.html" -type f -exec sed -i '' \
  's|href="../index.html"|href="../../../index.html"|g' {} \;

# Corregir archivos en /libro/2005/05/
find ./libro/2005/05/ -name "*.html" -type f -exec sed -i '' \
  's|href="../\(.*\)/index.html"|href="../../../\1/index.html"|g' {} \;

find ./libro/2005/05/ -name "*.html" -type f -exec sed -i '' \
  's|href="../index.html"|href="../../../index.html"|g' {} \;
```

**Archivos a modificar:** 7 archivos
- `libro/2005/03/cuando-se-vender-en-mxico-y-el-resto.html`
- `libro/2005/03/habr-un-acto-de-presentacin-en-la.html`
- `libro/2005/03/qu-precio-se-vende-en-espaa-la.html`
- `libro/2005/03/se-puede-comprar-el-libro-por-internet.html`
- `libro/2005/03/se-vende-en-toda-espaa.html`
- `libro/2005/05/cundo-sale-la-venta.html`
- (Verificar si hay más archivos)

**Validación:**
```bash
# Probar que los enlaces funcionen
# Abrir cada página y verificar navegación
```

---

#### 1.3 Actualizar Referencias de Dominio ⏱️ 5 minutos

**Script de reemplazo:**

```bash
# Reemplazar www.gerardomasana.com.ar → www.gerardomasana.com
find . -name "*.html" -type f -exec sed -i '' \
  's|www.gerardomasana.com.ar|www.gerardomasana.com|g' {} \;

find . -name "*.html" -type f -exec sed -i '' \
  's|http://www.gerardomasana.com.ar|https://www.gerardomasana.com|g' {} \;
```

**Archivos a modificar:** 4 ubicaciones en 2 archivos
- index.html
- libro/faq.html

**Validación:**
```bash
# Verificar que no queden referencias al .com.ar
grep -r "gerardomasana.com.ar" --include="*.html" .
# (no debería mostrar nada)
```

---

### FASE 2: Limpieza y Mejoras (Importante)

#### 2.1 Eliminar Archivos Sin Usar ⏱️ 2 minutos

```bash
# Eliminar archivos no utilizados
rm Untitled-1.html
rm test.html
```

#### 2.2 Actualizar URLs Absolutas a Relativas ⏱️ 10 minutos

Reemplazar URLs absolutas como:
```html
<!-- ANTES -->
<link rel="Shortcut Icon" href="http://www.gerardomasana.com/favicon.ico"/>

<!-- DESPUÉS -->
<link rel="Shortcut Icon" href="/favicon.ico"/>
```

**Beneficios:**
- ✅ Funciona en localhost y producción
- ✅ Compatible con HTTPS/HTTP
- ✅ Más rápido (menos bytes)

---

### FASE 3: Optimizaciones (Opcional)

#### 3.1 Optimizar Imágenes ⏱️ 30 minutos

**Herramientas recomendadas:**
- **ImageOptim** (Mac) - Reducción lossless
- **cwebp** - Conversión a WebP
- **squoosh-cli** - Conversión batch

```bash
# Ejemplo con cwebp
find ./gfx -name "*.jpg" -exec sh -c '
  cwebp -q 85 "$1" -o "${1%.jpg}.webp"
' sh {} \;
```

**Resultado esperado:**
- Reducción de 3.0 MB → 900 KB - 2.1 MB
- Mejora en PageSpeed Insights
- Mejor experiencia móvil

#### 3.2 Minificar CSS/HTML ⏱️ 5 minutos

```bash
# Minificar CSS (opcional)
npx cssnano css/primera.css css/primera.min.css

# Actualizar referencias
sed -i '' 's/primera.css/primera.min.css/g' *.html
```

**Ahorro:** ~2-3 KB (pequeño pero ayuda)

---

### FASE 4: Rediseño Moderno (Futuro)

Esta fase está documentada en `ARQUITECTURA.md` e incluye:

1. **Migración a Astro 4.x** (2-3 semanas)
   - Convertir HTML → Markdown + Components
   - Sistema de diseño con Tailwind CSS
   - Optimización automática de imágenes
   - SEO mejorado

2. **Deploy Automático** (1 día)
   - GitHub Actions → Cloudflare Pages
   - SSL automático
   - CDN global

3. **CMS Opcional** (1 semana)
   - Sanity CMS para edición sin código
   - Panel de administración
   - Preview en tiempo real

---

## CRONOGRAMA

### ✅ PLAN RÁPIDO (30-45 minutos)

**Recomendado ejecutar HOY:**

| Tarea | Tiempo | Prioridad | Archivos |
|-------|--------|-----------|----------|
| 1. Convertir charset a UTF-8 | 15 min | 🔴 CRÍTICO | 63 archivos |
| 2. Corregir enlaces rotos | 10 min | 🔴 CRÍTICO | 7 archivos |
| 3. Actualizar dominio .com.ar → .com | 5 min | 🟡 IMPORTANTE | 2 archivos |
| 4. Eliminar archivos sin usar | 2 min | 🔵 MENOR | 2 archivos |
| 5. Validación y testing | 10 min | ✅ VERIFICACIÓN | Todos |
| **TOTAL** | **42 min** | | **74 archivos** |

### 📅 PLAN COMPLETO

**Semana 1 (HOY):**
- ✅ Fase 1: Correcciones críticas (30 min)
- ✅ Fase 2: Limpieza (12 min)
- ✅ Testing completo (10 min)
- ✅ Commit y deploy

**Semana 2 (Opcional):**
- Fase 3: Optimización de imágenes (30 min)
- Minificación CSS/HTML (5 min)
- Performance testing

**Semanas 3-6 (Rediseño):**
- Ver `ARQUITECTURA.md` para plan detallado
- Migración a Astro
- Nuevo sistema de diseño
- CMS opcional

---

## SCRIPTS DE EJECUCIÓN

### Script Completo de Corrección

```bash
#!/bin/bash
# fix-critical-issues.sh
# Ejecuta todas las correcciones críticas automáticamente

echo "=== INICIANDO CORRECCIÓN DE SITIO GERARDOMASANA.COM ==="
echo ""

# Backup
echo "1. Creando backup..."
tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz ./*.html ./familia ./vida ./coro ./espectaculos ./luthiers ./instrumentos ./canciones ./contacto ./libro ./gfx
echo "✅ Backup creado"
echo ""

# Fase 1.1: Convertir a UTF-8
echo "2. Convirtiendo archivos a UTF-8..."
find . -name "*.html" -type f -not -path "./backup-*" -exec sh -c '
  iconv -f ISO-8859-1 -t UTF-8 "$1" > "$1.tmp" 2>/dev/null && mv "$1.tmp" "$1"
' sh {} \;

find . -name "*.html" -type f -exec sed -i '' \
  's/charset=iso-8859-1/charset=UTF-8/gi' {} \;
echo "✅ Codificación actualizada a UTF-8"
echo ""

# Fase 1.2: Corregir enlaces rotos
echo "3. Corrigiendo enlaces rotos en /libro/2005/..."
find ./libro/2005 -name "*.html" -type f -exec sed -i '' \
  's|href="\.\./index\.html"|href="../../../index.html"|g' {} \;

find ./libro/2005 -name "*.html" -type f -exec sed -i '' \
  's|href="\.\./\([^"]*\)/index\.html"|href="../../../\1/index.html"|g' {} \;
echo "✅ Enlaces corregidos"
echo ""

# Fase 1.3: Actualizar dominio
echo "4. Actualizando dominio .com.ar → .com..."
find . -name "*.html" -type f -exec sed -i '' \
  's|www\.gerardomasana\.com\.ar|www.gerardomasana.com|g' {} \;

find . -name "*.html" -type f -exec sed -i '' \
  's|http://www\.gerardomasana\.com\.ar|https://www.gerardomasana.com|g' {} \;
echo "✅ Dominio actualizado"
echo ""

# Fase 2: Eliminar archivos sin usar
echo "5. Eliminando archivos sin usar..."
[ -f "Untitled-1.html" ] && rm Untitled-1.html && echo "  - Eliminado: Untitled-1.html"
[ -f "test.html" ] && rm test.html && echo "  - Eliminado: test.html"
echo "✅ Archivos innecesarios eliminados"
echo ""

# Validación
echo "6. Validando correcciones..."
echo ""
echo "  Verificando charset UTF-8:"
UTF8_COUNT=$(find . -name "*.html" -exec grep -l "charset=UTF-8" {} \; | wc -l)
echo "  ✓ $UTF8_COUNT archivos con UTF-8"
echo ""

echo "  Verificando dominio antiguo:"
OLD_DOMAIN=$(grep -r "gerardomasana.com.ar" --include="*.html" . | wc -l)
if [ "$OLD_DOMAIN" -eq 0 ]; then
  echo "  ✓ No se encontraron referencias al dominio antiguo"
else
  echo "  ⚠️  Aún hay $OLD_DOMAIN referencias al dominio antiguo"
fi
echo ""

echo "=== CORRECCIÓN COMPLETADA ==="
echo ""
echo "Siguiente paso: git add . && git commit -m 'Fix: charset UTF-8, enlaces rotos, dominio'"
```

### Uso

```bash
# Dar permisos de ejecución
chmod +x fix-critical-issues.sh

# Ejecutar
./fix-critical-issues.sh
```

---

## VALIDACIÓN POST-CORRECCIÓN

### Checklist Manual

- [ ] Abrir index.html y verificar que "© Copyright 2004, Sebastián Masana" se ve correctamente
- [ ] Navegar desde libro/2005/03/habr-un-acto-de-presentacin-en-la.html a Home
- [ ] Verificar que todas las páginas del menú funcionan
- [ ] Buscar en todo el sitio referencias a .com.ar (no debería haber)
- [ ] Verificar que no existan Untitled-1.html ni test.html
- [ ] Testing en navegadores: Chrome, Firefox, Safari

### Testing Automatizado

```bash
# Verificar enlaces rotos con herramienta
npx broken-link-checker http://localhost:8000 -ro

# Verificar charset
grep -r "charset=" --include="*.html" . | grep -v "UTF-8"
# (no debería mostrar nada)

# Verificar encoding de archivos
file -I $(find . -name "*.html") | grep -v "utf-8"
# (no debería mostrar nada)
```

---

## RECURSOS Y DOCUMENTACIÓN

### Archivos Relacionados
- `README.md` - Documentación principal del proyecto
- `ARQUITECTURA.md` - Plan de rediseño completo con Astro
- `QUICKSTART.md` - Guía rápida de deploy
- `RESUMEN.md` - Resumen ejecutivo del proyecto
- `INDEX.md` - Índice de toda la documentación

### Scripts Disponibles
- `scripts/init-git.sh` - Inicializar repositorio Git
- `scripts/deploy-legacy.sh` - Deploy a Hostinger
- `fix-critical-issues.sh` - Corrección automática (crear después de aprobar plan)

### Herramientas Recomendadas
- **iconv** - Conversión de charset (ya instalado en macOS/Linux)
- **sed** - Edición de texto en batch (ya instalado)
- **ImageOptim** - Optimización de imágenes (Mac)
- **cwebp** - Conversión a WebP
- **broken-link-checker** - Validación de enlaces

---

## NOTAS FINALES

### Consideraciones Importantes

1. **Backup:** El script crea automáticamente un backup antes de hacer cambios
2. **Git:** Hacer commit después de cada fase para poder revertir si es necesario
3. **Testing:** Probar en servidor local antes de deploy a producción
4. **Encoding:** Algunos editores podrían revertir a ISO-8859-1, usar editores que respeten UTF-8

### Próximos Pasos Recomendados

1. ✅ **Ejecutar el plan de corrección** (30-45 minutos)
2. ✅ **Validar en localhost** (10 minutos)
3. ✅ **Commit y push a GitHub** (5 minutos)
4. ✅ **Deploy a Cloudflare Pages** (automático)
5. ✅ **Testing en producción** (10 minutos)
6. 📋 **Planificar rediseño completo** (ver ARQUITECTURA.md)

---

**Documento creado:** 18 de enero de 2026
**Última actualización:** 18 de enero de 2026
**Autor:** Claude Code (Anthropic) + Sebastián Masana
**Estado:** ✅ Listo para ejecutar
