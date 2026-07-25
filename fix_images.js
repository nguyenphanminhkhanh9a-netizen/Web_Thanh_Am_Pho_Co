const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/app');
let count = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  const original = content;
  
  content = content.replace(/(https:\/\/upload\.wikimedia\.org\/[^\s"'>]*\.(?:jpg|jpeg|png|gif))\/AB6AXu[a-zA-Z0-9_\-]+/g, '$1');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    count++;
    console.log(`Fixed links in ${file}`);
  }
}

console.log(`Total files fixed: ${count}`);
