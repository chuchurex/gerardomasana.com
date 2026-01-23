#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const issues = {
  brokenLinks: [],
  missingImages: [],
  missingCSS: [],
  orphanedFiles: []
};

const baseDir = __dirname;
const allHTMLFiles = [];
const allLinkedResources = new Set();

// Find all HTML files
function findHTMLFiles(dir, relativePath = '') {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const relPath = path.join(relativePath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findHTMLFiles(fullPath, relPath);
    } else if (file.endsWith('.html')) {
      allHTMLFiles.push({ fullPath, relPath });
    }
  });
}

// Resolve relative path from HTML file
function resolvePathFromHTML(htmlPath, resourcePath) {
  if (resourcePath.startsWith('http://') || resourcePath.startsWith('https://') || resourcePath.startsWith('//')) {
    return null; // External link, skip
  }

  const htmlDir = path.dirname(htmlPath);
  const resolved = path.resolve(htmlDir, resourcePath);
  return resolved;
}

// Check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (e) {
    return false;
  }
}

// Extract matches from HTML content using regex
function extractMatches(content, pattern) {
  const matches = [];
  let match;
  while ((match = pattern.exec(content)) !== null) {
    matches.push(match);
  }
  return matches;
}

// Audit single HTML file
function auditHTMLFile(htmlFile) {
  const content = fs.readFileSync(htmlFile.fullPath, 'utf-8');

  // Check CSS links: <link rel="stylesheet" href="...">
  const cssPattern = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["'][^>]*>/gi;
  const cssPattern2 = /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']stylesheet["'][^>]*>/gi;

  extractMatches(content, cssPattern).forEach(match => {
    const href = match[1];
    if (href) {
      const resolvedPath = resolvePathFromHTML(htmlFile.fullPath, href);
      if (resolvedPath) {
        allLinkedResources.add(resolvedPath);
        if (!fileExists(resolvedPath)) {
          issues.missingCSS.push({
            file: htmlFile.relPath,
            resource: href,
            resolved: resolvedPath
          });
        }
      }
    }
  });

  extractMatches(content, cssPattern2).forEach(match => {
    const href = match[1];
    if (href && href.endsWith('.css')) {
      const resolvedPath = resolvePathFromHTML(htmlFile.fullPath, href);
      if (resolvedPath) {
        allLinkedResources.add(resolvedPath);
        if (!fileExists(resolvedPath)) {
          issues.missingCSS.push({
            file: htmlFile.relPath,
            resource: href,
            resolved: resolvedPath
          });
        }
      }
    }
  });

  // Check images: <img src="...">
  const imgPattern = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  extractMatches(content, imgPattern).forEach(match => {
    const src = match[1];
    if (src) {
      const resolvedPath = resolvePathFromHTML(htmlFile.fullPath, src);
      if (resolvedPath) {
        allLinkedResources.add(resolvedPath);
        if (!fileExists(resolvedPath)) {
          issues.missingImages.push({
            file: htmlFile.relPath,
            resource: src,
            resolved: resolvedPath
          });
        }
      }
    }
  });

  // Check links: <a href="...">
  const linkPattern = /<a[^>]+href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gi;
  extractMatches(content, linkPattern).forEach(match => {
    const href = match[1];
    const linkText = match[2].replace(/<[^>]*>/g, '').trim();

    if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('javascript:')) {
      const resolvedPath = resolvePathFromHTML(htmlFile.fullPath, href);
      if (resolvedPath) {
        allLinkedResources.add(resolvedPath);
        if (!fileExists(resolvedPath)) {
          issues.brokenLinks.push({
            file: htmlFile.relPath,
            resource: href,
            resolved: resolvedPath,
            linkText: linkText.substring(0, 50)
          });
        }
      }
    }
  });

  // Check background images in style attributes and CSS
  const bgPattern = /url\(['"]?([^'")\s]+)['"]?\)/gi;
  extractMatches(content, bgPattern).forEach(match => {
    const bgImage = match[1];
    if (!bgImage.startsWith('data:') && !bgImage.startsWith('http')) {
      const resolvedPath = resolvePathFromHTML(htmlFile.fullPath, bgImage);
      if (resolvedPath) {
        allLinkedResources.add(resolvedPath);
        if (!fileExists(resolvedPath)) {
          issues.missingImages.push({
            file: htmlFile.relPath,
            resource: bgImage,
            resolved: resolvedPath
          });
        }
      }
    }
  });
}

// Generate report
function generateReport() {
  console.log('\n' + '='.repeat(80));
  console.log('AUDITORÍA COMPLETA DEL SITIO - gerardomasana.com');
  console.log('='.repeat(80) + '\n');

  console.log(`Total de archivos HTML analizados: ${allHTMLFiles.length}\n`);

  // Missing CSS
  if (issues.missingCSS.length > 0) {
    console.log('🚨 ARCHIVOS CSS FALTANTES (' + issues.missingCSS.length + '):');
    console.log('-'.repeat(80));
    issues.missingCSS.forEach(issue => {
      console.log(`  Archivo: ${issue.file}`);
      console.log(`  Busca: ${issue.resource}`);
      console.log(`  Ruta esperada: ${issue.resolved}`);
      console.log('');
    });
  } else {
    console.log('✅ CSS: Todos los archivos CSS están correctamente vinculados\n');
  }

  // Missing Images
  if (issues.missingImages.length > 0) {
    console.log('🚨 IMÁGENES FALTANTES (' + issues.missingImages.length + '):');
    console.log('-'.repeat(80));
    issues.missingImages.forEach(issue => {
      console.log(`  Archivo: ${issue.file}`);
      console.log(`  Busca: ${issue.resource}`);
      console.log(`  Ruta esperada: ${issue.resolved}`);
      console.log('');
    });
  } else {
    console.log('✅ IMÁGENES: Todas las imágenes están correctamente vinculadas\n');
  }

  // Broken Links
  if (issues.brokenLinks.length > 0) {
    console.log('🚨 ENLACES ROTOS (' + issues.brokenLinks.length + '):');
    console.log('-'.repeat(80));
    issues.brokenLinks.forEach(issue => {
      console.log(`  Archivo: ${issue.file}`);
      console.log(`  Enlace: ${issue.resource}`);
      console.log(`  Texto: "${issue.linkText}"`);
      console.log(`  Ruta esperada: ${issue.resolved}`);
      console.log('');
    });
  } else {
    console.log('✅ ENLACES: Todos los enlaces internos funcionan correctamente\n');
  }

  // Summary
  console.log('='.repeat(80));
  console.log('RESUMEN:');
  console.log('-'.repeat(80));
  console.log(`  Archivos HTML: ${allHTMLFiles.length}`);
  console.log(`  Enlaces rotos: ${issues.brokenLinks.length}`);
  console.log(`  Imágenes faltantes: ${issues.missingImages.length}`);
  console.log(`  CSS faltantes: ${issues.missingCSS.length}`);
  console.log(`  Total de problemas: ${issues.brokenLinks.length + issues.missingImages.length + issues.missingCSS.length}`);
  console.log('='.repeat(80) + '\n');

  // Write JSON report
  fs.writeFileSync(
    path.join(baseDir, 'audit-report.json'),
    JSON.stringify(issues, null, 2)
  );
  console.log('📄 Reporte detallado guardado en: audit-report.json\n');
}

// Main execution
console.log('Iniciando auditoría del sitio...\n');
findHTMLFiles(baseDir);
console.log(`Encontrados ${allHTMLFiles.length} archivos HTML\n`);
console.log('Analizando enlaces, imágenes y estilos...\n');

allHTMLFiles.forEach(htmlFile => {
  auditHTMLFile(htmlFile);
});

generateReport();
