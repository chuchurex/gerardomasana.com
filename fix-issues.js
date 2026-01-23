#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const fixes = {
  applied: 0,
  errors: []
};

// Read the audit report
const auditReport = JSON.parse(fs.readFileSync('audit-report.json', 'utf-8'));

console.log('Iniciando corrección de problemas...\n');

// Fix broken links in modern site (root level HTML files)
const modernFiles = [
  'archivo.html',
  'canciones.html',
  'comienzos.html',
  'coro.html',
  'familia.html',
  'fundacion.html',
  'index.html',
  'instrumentos.html',
  'vida.html'
];

modernFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix broken link to contacto (should point to legacy)
    if (content.includes('../contacto/index.html')) {
      content = content.replace(/\.\.\/contacto\/index\.html/g, 'legacy/contacto/index.html');
      modified = true;
      console.log(`✓ ${file}: Corregido enlace a contacto`);
      fixes.applied++;
    }

    // Fix broken images - change ../ to legacy/
    // For comienzos.html: ../espectaculos/gfx/musicisti1.jpg -> legacy/espectaculos/gfx/musicisti1.jpg
    if (content.includes('../espectaculos/gfx/musicisti1.jpg')) {
      // Check if file exists in legacy
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/musicisti1.jpg'))) {
        content = content.replace(/\.\.\/espectaculos\/gfx\/musicisti1\.jpg/g, 'legacy/gfx/fotos/musicisti1.jpg');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen musicisti1.jpg`);
        fixes.applied++;
      }
    }

    // For coro.html: ../coro/gfx/coro4.png -> legacy/gfx/fotos/coro4.png
    if (content.includes('../coro/gfx/coro4.png')) {
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/coro4.png'))) {
        content = content.replace(/\.\.\/coro\/gfx\/coro4\.png/g, 'legacy/gfx/fotos/coro4.png');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen coro4.png`);
        fixes.applied++;
      }
    }

    // For coro.html: ../coro/gfx/modaton.png -> legacy/gfx/fotos/modaton.png
    if (content.includes('../coro/gfx/modaton.png')) {
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/modaton.png'))) {
        content = content.replace(/\.\.\/coro\/gfx\/modaton\.png/g, 'legacy/gfx/fotos/modaton.png');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen modaton.png`);
        fixes.applied++;
      }
    }

    // For familia.html: ../familia/gfx/*.png -> legacy/familia/gfx/*.png
    const familiaImages = ['enrique.png', 'gregorio.png', 'juan.png', 'antonia.png'];
    familiaImages.forEach(img => {
      if (content.includes(`../familia/gfx/${img}`)) {
        if (fs.existsSync(path.join(__dirname, `legacy/familia/gfx/${img}`))) {
          const regex = new RegExp(`\\.\\.\/familia\/gfx\/${img}`, 'g');
          content = content.replace(regex, `legacy/familia/gfx/${img}`);
          modified = true;
          console.log(`✓ ${file}: Corregida ruta de imagen ${img}`);
          fixes.applied++;
        }
      }
    });

    // For fundacion.html: ../luthiers/gfx/_grupo.jpg -> legacy/gfx/fotos/_grupo.jpg
    if (content.includes('../luthiers/gfx/_grupo.jpg')) {
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/_grupo.jpg'))) {
        content = content.replace(/\.\.\/luthiers\/gfx\/_grupo\.jpg/g, 'legacy/gfx/fotos/_grupo.jpg');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen _grupo.jpg`);
        fixes.applied++;
      }
    }

    // For fundacion.html: ../luthiers/gfx/_palmera.jpg -> legacy/gfx/fotos/_palmera.jpg
    if (content.includes('../luthiers/gfx/_palmera.jpg')) {
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/_palmera.jpg'))) {
        content = content.replace(/\.\.\/luthiers\/gfx\/_palmera\.jpg/g, 'legacy/gfx/fotos/_palmera.jpg');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen _palmera.jpg`);
        fixes.applied++;
      }
    }

    // For vida.html: ../vida/gfx/*.jpg -> legacy/vida/gfx/*.jpg (if they exist there)
    // First check if files exist in legacy/gfx/fotos/
    if (content.includes('../vida/gfx/arquitectos.jpg')) {
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/arquitectos.jpg'))) {
        content = content.replace(/\.\.\/vida\/gfx\/arquitectos\.jpg/g, 'legacy/gfx/fotos/arquitectos.jpg');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen arquitectos.jpg`);
        fixes.applied++;
      }
    }

    if (content.includes('../vida/gfx/casamiento.jpg')) {
      if (fs.existsSync(path.join(__dirname, 'legacy/gfx/fotos/casamiento.jpg'))) {
        content = content.replace(/\.\.\/vida\/gfx\/casamiento\.jpg/g, 'legacy/gfx/fotos/casamiento.jpg');
        modified = true;
        console.log(`✓ ${file}: Corregida ruta de imagen casamiento.jpg`);
        fixes.applied++;
      }
    }

    // Fix index.html special case: ../index.html should be removed or point to self
    if (file === 'index.html' && content.includes('../index.html')) {
      content = content.replace(/\.\.\/index\.html/g, 'index.html');
      modified = true;
      console.log(`✓ ${file}: Corregido enlace circular a index.html`);
      fixes.applied++;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
});

// Fix legacy/libro files - incorrect navigation paths
const legacyLibroPattern = /legacy\/libro\/2005\/(03|05)\/.+\.html$/;
auditReport.brokenLinks.forEach(issue => {
  if (legacyLibroPattern.test(issue.file)) {
    const filePath = path.join(__dirname, issue.file);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf-8');
      let modified = false;

      // These files have broken paths like ../index.html when they should be ../../index.html
      const pathFixes = {
        '../index.html': '../../index.html',
        '../familia/index.html': '../../familia/index.html',
        '../vida/index.html': '../../vida/index.html',
        '../coro/index.html': '../../coro/index.html',
        '../espectaculos/index.html': '../../espectaculos/index.html',
        '../luthiers/index.html': '../../luthiers/index.html',
        '../instrumentos/index.html': '../../instrumentos/index.html',
        '../canciones/index.html': '../../canciones/index.html',
        '../libro/index.html': '../../libro/index.html',
        '../contacto/index.html': '../../contacto/index.html'
      };

      Object.entries(pathFixes).forEach(([oldPath, newPath]) => {
        if (content.includes(oldPath)) {
          content = content.replace(new RegExp(oldPath.replace(/\//g, '\\/'), 'g'), newPath);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✓ ${issue.file}: Corregidos enlaces de navegación`);
        fixes.applied++;
      }
    }
  }
});

console.log('\n' + '='.repeat(80));
console.log('RESUMEN DE CORRECCIONES:');
console.log('-'.repeat(80));
console.log(`Total de correcciones aplicadas: ${fixes.applied}`);
console.log(`Errores encontrados: ${fixes.errors.length}`);

if (fixes.errors.length > 0) {
  console.log('\nErrores:');
  fixes.errors.forEach(err => console.log(`  - ${err}`));
}

console.log('='.repeat(80) + '\n');
console.log('💡 Ejecuta "node audit-site.js" nuevamente para verificar las correcciones.\n');
