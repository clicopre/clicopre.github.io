// Capture each theme as a hero + signature screenshot.
import puppeteer from 'puppeteer';

const themes = ['default', 'dispatch', 'frequency', 'cartograph'];

const browser = await puppeteer.launch({ headless: 'new' });

for (const theme of themes) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
  await page.evaluate((t) => {
    if (t === 'default') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
    for (const el of document.querySelectorAll('.reveal')) el.classList.add('is-visible');
  }, theme);
  // give fonts + animations a moment to settle
  await new Promise((r) => setTimeout(r, 700));

  // 1. hero
  await page.screenshot({ path: `temporary_screenshots/theme_${theme}_1_hero.png` });

  // 2. signature strip closeup
  const sig = await page.$('.hero__signature-inner');
  if (sig) await sig.screenshot({ path: `temporary_screenshots/theme_${theme}_2_signature.png` });

  // 3. footer (scroll to bottom)
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `temporary_screenshots/theme_${theme}_3_footer.png` });

  await page.close();
  console.log('captured:', theme);
}

await browser.close();
console.log('done');
