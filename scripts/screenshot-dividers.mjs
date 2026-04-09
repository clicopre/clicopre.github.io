// Capture the new header and each section divider in isolation.
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
await page.evaluate(() => {
  for (const el of document.querySelectorAll('.reveal')) el.classList.add('is-visible');
});
await new Promise((r) => setTimeout(r, 600));

// 1. Header (top of page)
await page.screenshot({ path: 'temporary_screenshots/divs_1_header.png', clip: { x: 0, y: 0, width: 1440, height: 110 } });

// 2-5. Each divider
const dividers = await page.$$('.section-divider');
console.log('found', dividers.length, 'dividers');
for (let i = 0; i < dividers.length; i++) {
  const box = await dividers[i].boundingBox();
  if (!box) continue;
  await page.evaluate((y) => window.scrollTo(0, y - 100), box.y);
  await new Promise((r) => setTimeout(r, 300));
  const fresh = await dividers[i].boundingBox();
  if (!fresh) continue;
  await page.screenshot({
    path: `temporary_screenshots/divs_${i + 2}_${i === 0 ? 'heatwave' : i === 1 ? 'dispatch' : i === 2 ? 'contour' : 'voice'}.png`,
    clip: { x: 0, y: fresh.y, width: 1440, height: fresh.height + 20 },
  });
}

// 6. Full page tall
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: 'temporary_screenshots/divs_6_fullpage.png', fullPage: true });

await browser.close();
console.log('done');
