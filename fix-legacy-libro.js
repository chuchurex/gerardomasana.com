#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix legacy/libro/2005 navigation links
const files = [
  'legacy/libro/2005/03/cuando-se-vender-en-mxico-y-el-resto.html',
  'legacy/libro/2005/03/habr-un-acto-de-presentacin-en-la.html',
  'legacy/libro/2005/03/qu-precio-se-vende-en-espaa-la.html',
  'legacy/libro/2005/03/se-puede-comprar-el-libro-por-internet.html',
  'legacy/libro/2005/03/se-vende-en-toda-espaa.html',
  'legacy/libro/2005/05/cundo-sale-la-venta.html'
];

console.log('Corrigiendo enlaces en archivos legacy/libro...\n');

files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);

  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf-8');
    let modified = false;

    // These files are at depth: legacy/libro/2005/03/ or legacy/libro/2005/05/
    // They need to go up 4 levels to reach root: ../../../../

    const replacements = [
      { old: '<a href="../index.html">Home</a>', new: '<a href="../../../../index.html">Home</a>' },
      { old: '<a href="../familia/index.html">Su familia</a>', new: '<a href="../../../../familia.html">Su familia</a>' },
      { old: '<a href="../vida/index.html">Su vida</a>', new: '<a href="../../../../vida.html">Su vida</a>' },
      { old: '<a href="../coro/index.html">En el coro</a>', new: '<a href="../../../../coro.html">En el coro</a>' },
      { old: '<a href="../espectaculos/index.html">Los comienzos</a>', new: '<a href="../../../../comienzos.html">Los comienzos</a>' },
      { old: '<a href="../luthiers/index.html">Les Luthiers</a>', new: '<a href="../../../../fundacion.html">Les Luthiers</a>' },
      { old: '<a href="../instrumentos/index.html">Sus instrumentos</a>', new: '<a href="../../../../instrumentos.html">Sus instrumentos</a>' },
      { old: '<a href="../canciones/index.html">Sus canciones</a>', new: '<a href="../../../../canciones.html">Sus canciones</a>' },
      { old: '<a href="../libro/index.html"', new: '<a href="../../../index.html"' },
      { old: '<a href="../contacto/index.html"', new: '<a href="../../../contacto/index.html"' }
    ];

    replacements.forEach(({ old, new: newStr }) => {
      if (content.includes(old)) {
        content = content.replace(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newStr);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(fullPath, content, 'utf-8');
      console.log(`✓ Corregido: ${filePath}`);
    }
  }
});

console.log('\n✅ Correcciones completadas.\n');
