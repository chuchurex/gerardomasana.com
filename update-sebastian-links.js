#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'sebastian');
const files = [
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

console.log('Actualizando enlaces en archivos de /sebastian...\n');

files.forEach(file => {
  const filePath = path.join(baseDir, file);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Update asset references (css, js, assets)
    // From: href="css/ to href="../sebastian/css/
    // From: src="assets/ to src="../sebastian/assets/
    // From: src="js/ to src="../sebastian/js/
    
    // CSS links
    if (content.includes('href="css/')) {
      content = content.replace(/href="css\//g, 'href="css/');
      modified = true;
    }
    
    // JS scripts
    if (content.includes('src="js/')) {
      content = content.replace(/src="js\//g, 'src="js/');
      modified = true;
    }
    
    // Assets (images, etc)
    if (content.includes('src="assets/')) {
      content = content.replace(/src="assets\//g, 'src="assets/');
      modified = true;
    }
    
    // HTML page links - these need to stay relative within sebastian
    // They already reference other .html files correctly
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ ${file}: Enlaces actualizados`);
    } else {
      console.log(`  ${file}: Sin cambios necesarios`);
    }
  }
});

console.log('\n✅ Actualización completada.\n');
