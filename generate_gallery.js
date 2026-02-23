const fs = require('fs');
const files = fs.readdirSync('C:/Users/juan/Desktop/photsconvert').filter(f => f.endsWith('.png'));

// Write an HTML file to view
let html = '<html><body style="display:flex;flex-wrap:wrap;background:#222;color:white;font-family:sans-serif;">';
files.slice(0, 100).forEach(f => { // just first 100 to not overload the subagent
    html += `<div style="width:200px;margin:10px;text-align:center;">
        <img src="file:///C:/Users/juan/Desktop/photsconvert/${f}" style="width:100%;height:150px;object-fit:cover;"/>
        <p style="font-size:12px;">${f}</p>
    </div>`;
});
html += '</body></html>';

fs.writeFileSync('C:/Users/juan/Desktop/photsconvert/gallery.html', html);

// Generar src/data/allPhotos.ts con todas las fotos
let tsFile = 'export const allPhotos = [\n';
files.forEach(f => {
    tsFile += `  "/images/v2_updates/${f}",\n`;
});
tsFile += '];\n';
fs.writeFileSync('src/data/allPhotos.ts', tsFile);

console.log('Archivos generados con exito.');
