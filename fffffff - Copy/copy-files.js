const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy manifest.json
fs.copyFileSync('manifest.json', 'dist/manifest.json');

// Copy background.js
fs.copyFileSync('background.js', 'dist/background.js');

// Copy popup files
fs.copyFileSync('popup.html', 'dist/popup.html');
fs.copyFileSync('popup.js', 'dist/popup.js');

// Copy settings files
fs.copyFileSync('settings.html', 'dist/settings.html');
fs.copyFileSync('settings.js', 'dist/settings.js');

// Copy icons
if (!fs.existsSync('dist/icons')) {
  fs.mkdirSync('dist/icons');
}
fs.readdirSync('icons').forEach(file => {
  fs.copyFileSync(path.join('icons', file), path.join('dist/icons', file));
});

console.log('Files copied successfully!'); 