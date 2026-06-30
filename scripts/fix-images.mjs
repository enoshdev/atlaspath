import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

function findTsxFiles(dir) {
  const results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      results.push(...findTsxFiles(fullPath));
    } else if (entry.name.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findTsxFiles('src');
const allIds = {};
const fileIds = {};

for (const f of files) {
  const content = readFileSync(f, 'utf8');
  const matches = [...content.matchAll(/photo-([a-f0-9-]+)\?w=/g)];
  const ids = [...new Set(matches.map(m => m[1]))];
  fileIds[f] = ids;
  for (const id of ids) {
    if (!allIds[id]) allIds[id] = [];
    allIds[id].push(f);
  }
}

console.log('=== Cross-file duplicates ===');
for (const [id, files] of Object.entries(allIds).sort()) {
  if (files.length > 1) {
    console.log(`${id}: ${files.join(', ')}`);
  }
}

const cdFile = 'src\\components\\CountryDetail.tsx';
const ueFile = 'src\\components\\UniversityExplorer.tsx';

const cdIds = fileIds[cdFile] || [];
const ueIds = fileIds[ueFile] || [];
const overlap = cdIds.filter(id => ueIds.includes(id));

console.log(`\n=== Overlap between CountryDetail and UniExplorer ===`);
console.log(`${overlap.length} IDs overlap`);
overlap.forEach(id => console.log(id));

// New verified IDs available (not in any project file)
const newIds = [
  '1606761568499-6d2451b23c66',
  '1513542789411-b6a5d4f31634',
  '1481627834876-b7833e8f5570',
  '1520607162513-77705c0f0d4a'
];

console.log(`\n=== Available new IDs (${newIds.length}) ===`);
newIds.forEach(id => console.log(id));

// Find IDs from other files that aren't in CountryDetail or UniExplorer
const otherFileIds = {};
for (const [f, ids] of Object.entries(fileIds)) {
  if (f === cdFile || f === ueFile) continue;
  otherFileIds[f] = ids.filter(id => !cdIds.includes(id) && !ueIds.includes(id));
}

console.log('\n=== IDs available from other files (not in CD or UE) ===');
for (const [f, ids] of Object.entries(otherFileIds).sort()) {
  console.log(`\n${f} (${ids.length} available):`);
  ids.forEach(id => console.log(`  ${id}`));
}
