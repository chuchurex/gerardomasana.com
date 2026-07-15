# gerardomasana.com

Sitio web tributo estático a Gerardo Masana (fundador de Les Luthiers). HTML/CSS plano, sin build. El contenido real vive en `sebastian/`; el `index.html` raíz es un placeholder del rediseño pendiente.

## Stack
- HTML y CSS estáticos (sin framework, sin `package.json`).
- Scripts de utilidad en Node.js (auditoría y fixes) y shell (git/deploy).
- Deploy en Vercel (`vercel.json`), sitio estático sin paso de build.

## Comandos
No hay `package.json`; los `npm run dev/build` del README son aspiracionales (Fase 2 Astro, no implementada). Comandos reales:

```bash
# Servir localmente (puerto sugerido en .env: LOCAL_PORT=3015)
python3 -m http.server 3015

# Scripts de auditoría / correccion (Node)
node audit-site.js
node fix-issues.js
node fix-legacy-libro.js
node update-sebastian-links.js

# Scripts de git y deploy legacy (shell)
sebastian/scripts/init-git.sh
sebastian/scripts/deploy-legacy.sh

# Deploy en Vercel
vercel          # preview
vercel --prod   # produccion
```

## Estructura
- `index.html` - raíz, placeholder del rediseño (vacío).
- `sebastian/` - sitio modernizado (páginas `.html`: vida, familia, coro, canciones, instrumentos, fundacion, etc.) con `assets/`, `css/`, `js/`.
- `sebastian/legacy/` - sitio original 2004-2010 preservado.
- `sebastian/scripts/` - `init-git.sh`, `deploy-legacy.sh`.
- `vercel.json` - config de deploy (rewrites para `/` y `/sebastian`, headers de seguridad).
- `*.md` en raíz - documentación de proyecto (ARQUITECTURA, AUDITORIA-REDISEÑO, QUICKSTART, RESUMEN, etc.).
- `audit-report.json` / `AUDIT-REPORT.md` - salida de `audit-site.js`.

## Notas
- `.env` (gitignored) define credenciales/config. Variables por nombre: `DOMAIN`, `PROJECT_NAME`, `CF_API_KEY`, `CF_EMAIL`, `CF_ZONE_ID`, `UPLOAD_HOST`, `UPLOAD_PORT`, `UPLOAD_USER`, `UPLOAD_PASS`, `UPLOAD_DIR`, `HOSTINGER_API_TOKEN`, `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_TOKEN`, `ANTHROPIC_API_KEY`, `LOCAL_PORT`. Ver `.env.example`. Nunca commitear valores reales.
- `CREDENTIALS.md` está gitignored; contiene credenciales, no exponer.
- El README describe un stack Astro + Tailwind que aún no existe en el repo (Fase 2 planificada).
- Deploy alternativo a Hostinger vía SSH/rsync con `deploy-legacy.sh` (usa vars `UPLOAD_*`).

## Infraestructura (deploy y datos SEO)

El deploy en Cloudflare y el acceso a datos SEO (Search Console / Analytics) usan credenciales
gestionadas localmente por el mantenedor, fuera del repositorio. No hay secretos versionados:
tokens y service accounts viven solo en el entorno local, nunca en el repo.
