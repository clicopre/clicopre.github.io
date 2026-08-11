import { readdir } from 'node:fs/promises';
import { basename, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const publicRoot = join(projectRoot, 'public');
const forbidden = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
    } else if (entry.isFile() && basename(path).startsWith('.')) {
      forbidden.push(relative(projectRoot, path));
    }
  }
}

await walk(publicRoot);

if (forbidden.length > 0) {
  console.error('Refusing to build with hidden files in public/:');
  for (const path of forbidden.sort()) console.error(`  - ${path}`);
  process.exitCode = 1;
}
