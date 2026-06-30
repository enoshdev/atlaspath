import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Helper to recursively get files
function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, fileList);
    } else if (name.endsWith('.html')) {
      fileList.push(name);
    }
  }
  return fileList;
}

const htmlFiles = getFiles(DIST_DIR);
const allRoutes = htmlFiles.map(f => {
  let relative = path.relative(DIST_DIR, f).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) {
    return '/' + relative.substring(0, relative.length - 10);
  }
  return '/' + relative;
});

console.log(`\nFound ${allRoutes.length} built routes:`);
allRoutes.forEach(r => console.log(`  - ${r}`));

const brokenLinks = [];
const validLinks = new Set();
const linkCount = {};
const incomingLinks = {}; // route -> set of parent files

allRoutes.forEach(r => {
  incomingLinks[r] = new Set();
});

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const parentRoute = '/' + path.relative(DIST_DIR, file).replace(/\\/g, '/');
  
  // Extract all hrefs
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const rawLink = match[1];
    
    // Ignore external or hash-only links
    if (
      rawLink.startsWith('http://') || 
      rawLink.startsWith('https://') || 
      rawLink.startsWith('mailto:') || 
      rawLink.startsWith('tel:') || 
      rawLink.startsWith('whatsapp:') ||
      rawLink.startsWith('//')
    ) {
      continue;
    }
    
    // Clean up query parameters or hash fragments
    let cleanLink = rawLink.split('?')[0].split('#')[0];
    if (!cleanLink) {
      // It was a hash-only link on the same page (e.g. href="#about")
      continue;
    }
    
    // Normalize path
    if (cleanLink.endsWith('/')) {
      cleanLink = cleanLink.slice(0, -1);
    }
    if (!cleanLink.startsWith('/')) {
      // Relative path, resolve it relative to parent
      const parentDir = path.dirname(parentRoute);
      cleanLink = path.normalize(path.join(parentDir, cleanLink)).replace(/\\/g, '/');
    }
    
    linkCount[cleanLink] = (linkCount[cleanLink] || 0) + 1;
    
    // Verify if it points to an existing file
    let targetFile = '';
    if (cleanLink === '' || cleanLink === '/') {
      targetFile = path.join(DIST_DIR, 'index.html');
    } else {
      // Check if it's dynamic or folder index
      targetFile = path.join(DIST_DIR, cleanLink, 'index.html');
      if (!fs.existsSync(targetFile)) {
        targetFile = path.join(DIST_DIR, cleanLink);
      }
    }
    
    const resolvedRoute = cleanLink === '' ? '/' : cleanLink;
    
    if (fs.existsSync(targetFile)) {
      validLinks.add(resolvedRoute);
      if (incomingLinks[resolvedRoute]) {
        incomingLinks[resolvedRoute].add(parentRoute);
      }
    } else {
      brokenLinks.push({
        source: parentRoute,
        link: rawLink,
        resolved: resolvedRoute
      });
    }
  }
});

// Identify unused routes (built routes with 0 incoming links, except home route)
const unusedRoutes = allRoutes.filter(r => r !== '/' && (!incomingLinks[r] || incomingLinks[r].size === 0));

console.log('\n======================================');
console.log('PHASE 6 — LINK VALIDATION REPORT');
console.log('======================================');

console.log(`\n[✓] VALID INTERNAL ROUTES LINKED (${validLinks.size}):`);
Array.from(validLinks).sort().forEach(l => {
  console.log(`  - ${l} (Incoming links: ${incomingLinks[l]?.size || 0})`);
});

console.log(`\n[✗] BROKEN INTERNAL ROUTES (${brokenLinks.length}):`);
if (brokenLinks.length === 0) {
  console.log('  None found!');
} else {
  brokenLinks.forEach(b => {
    console.log(`  - Link "${b.link}" in page ${b.source} resolves to non-existent "${b.resolved}"`);
  });
}

console.log(`\n[!] UNUSED BUILT ROUTES (${unusedRoutes.length}):`);
if (unusedRoutes.length === 0) {
  console.log('  None found!');
} else {
  unusedRoutes.forEach(r => {
    console.log(`  - ${r} is built but has no incoming internal links.`);
  });
}

process.exit(brokenLinks.length > 0 ? 1 : 0);
