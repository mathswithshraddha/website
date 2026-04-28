const fs = require('fs');
const glob = require('glob');

const files = glob.sync('components/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
  // Actually, blind replace will break attributes like className="xxx".
  // Let's just fix the specific lines by knowing they are in text nodes.
});
