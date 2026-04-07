// CLICOPRE — visual self-review screenshot loop
//
// Captures section-by-section screenshots of the running dev site
// (default: http://localhost:4321) into temporary_screenshots/ so
// the agent can visually verify the build.
//
// Naming convention: NN_section-name_pass-N.png
//
// Usage:
//   node scripts/screenshot.mjs              # pass 1, default URL
//   node scripts/screenshot.mjs --pass 2     # pass 2
//   node scripts/screenshot.mjs --url=http://localhost:4321
//
// Skip the screenshot loop for animated components — see CLAUDE.md §7.

import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);

const URL = args.url || 'http://localhost:4321/';
const PASS = String(args.pass || '1');
const OUT = path.resolve('temporary_screenshots');

const sections = [
  { id: 'hero',     name: 'hero',     selector: '.hero' },
  { id: 'research', name: 'research', selector: '#research' },
  { id: 'approach', name: 'approach', selector: '#approach' },
  { id: 'people',   name: 'people',   selector: '#people' },
  { id: 'outputs',  name: 'outputs',  selector: '#outputs' },
  { id: 'updates',  name: 'updates',  selector: '#updates' },
  { id: 'contact',  name: 'contact',  selector: '#contact' },
  { id: 'footer',   name: 'footer',   selector: '.site-footer' },
];

if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

console.log(`→ ${URL}`);
await page.goto(URL, { waitUntil: 'networkidle0' });

// Force scroll-reveal classes to be visible so screenshots aren't blank.
await page.evaluate(() => {
  for (const el of document.querySelectorAll('.reveal')) {
    el.classList.add('is-visible');
  }
});

// Full page first
const full = path.join(OUT, `00_full-page_pass-${PASS}.png`);
await page.screenshot({ path: full, fullPage: true });
console.log('  ✓', path.basename(full));

// Then each section
let i = 1;
for (const s of sections) {
  const handle = await page.$(s.selector);
  if (!handle) {
    console.log('  ✗ missing selector:', s.selector);
    continue;
  }
  const file = path.join(
    OUT,
    `${String(i).padStart(2, '0')}_${s.name}_pass-${PASS}.png`
  );
  await handle.screenshot({ path: file });
  console.log('  ✓', path.basename(file));
  i++;
}

await browser.close();
console.log(`done → ${OUT}`);
