// CLICOPRE — Open Graph image generator
//
// Renders an HTML/CSS template at 1200×630 with Puppeteer and writes
// public/og.png. Run once and re-run whenever the wordmark/palette/copy
// changes. Depends on `puppeteer` (already a dev dependency).
//
// Usage:
//   node scripts/og-image.mjs

import puppeteer from 'puppeteer';
import path from 'node:path';

const OUT = path.resolve('public/og.png');

const html = /* html */ `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..700,30..100,0..1&family=IBM+Plex+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
<style>
  :root {
    --c-bg: #f4f1e8;
    --c-ink: #0e1d28;
    --c-ink-soft: #344552;
    --c-teal-deep: #0a8a7a;
    --c-line: #d6d1c0;
    --ws: #2c5d8a #5a8db5 #5a8db5 #9ebbd1 #9ebbd1 #d9d3c4 #d9d3c4 #9ebbd1
          #d9d3c4 #e8b88a #d9d3c4 #e8b88a #e8b88a #d97a4a #e8b88a #d97a4a
          #d97a4a #b8401f #d97a4a #b8401f;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1200px; height: 630px; }
  body {
    background: var(--c-bg);
    font-family: 'IBM Plex Mono', monospace;
    color: var(--c-ink);
    display: grid;
    grid-template-rows: 14px 1fr 14px;
  }
  .stripes { display: flex; width: 100%; height: 100%; }
  .stripes > i {
    flex: 1;
    height: 100%;
    display: block;
  }
  .stripes > i:nth-child(1)  { background: #2c5d8a; }
  .stripes > i:nth-child(2)  { background: #5a8db5; }
  .stripes > i:nth-child(3)  { background: #5a8db5; }
  .stripes > i:nth-child(4)  { background: #9ebbd1; }
  .stripes > i:nth-child(5)  { background: #9ebbd1; }
  .stripes > i:nth-child(6)  { background: #d9d3c4; }
  .stripes > i:nth-child(7)  { background: #d9d3c4; }
  .stripes > i:nth-child(8)  { background: #9ebbd1; }
  .stripes > i:nth-child(9)  { background: #d9d3c4; }
  .stripes > i:nth-child(10) { background: #e8b88a; }
  .stripes > i:nth-child(11) { background: #d9d3c4; }
  .stripes > i:nth-child(12) { background: #e8b88a; }
  .stripes > i:nth-child(13) { background: #e8b88a; }
  .stripes > i:nth-child(14) { background: #d97a4a; }
  .stripes > i:nth-child(15) { background: #e8b88a; }
  .stripes > i:nth-child(16) { background: #d97a4a; }
  .stripes > i:nth-child(17) { background: #d97a4a; }
  .stripes > i:nth-child(18) { background: #b8401f; }
  .stripes > i:nth-child(19) { background: #d97a4a; }
  .stripes > i:nth-child(20) { background: #b8401f; }
  main {
    padding: 78px 96px 60px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 22px;
  }
  .eyebrow {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #6b7985;
    display: inline-flex;
    align-items: center;
    gap: 14px;
  }
  .eyebrow::before {
    content: "";
    width: 38px;
    height: 1px;
    background: #6b7985;
  }
  h1 {
    font-family: 'Fraunces', Georgia, serif;
    font-variation-settings: "opsz" 144, "SOFT" 60, "WONK" 1;
    font-size: 96px;
    font-weight: 380;
    letter-spacing: -0.035em;
    line-height: 0.96;
    color: var(--c-ink);
    max-width: 17ch;
  }
  h1 em {
    font-style: italic;
    font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
    color: var(--c-teal-deep);
  }
  .footer {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 24px;
    border-top: 1px solid var(--c-line);
    padding-top: 22px;
  }
  .brand {
    font-family: 'Fraunces', Georgia, serif;
    font-variation-settings: "opsz" 144, "SOFT" 60, "WONK" 1;
    font-size: 36px;
    font-weight: 420;
    letter-spacing: -0.025em;
    line-height: 1;
    color: var(--c-ink);
  }
  .brand small {
    display: block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #6b7985;
    margin-top: 6px;
  }
  .meta {
    text-align: right;
    font-size: 14px;
    line-height: 1.55;
    color: #6b7985;
    letter-spacing: 0.02em;
  }
  .meta strong { color: var(--c-ink); font-weight: 500; }
</style>
</head>
<body>
  <div class="stripes">${'<i></i>'.repeat(20)}</div>
  <main>
    <span class="eyebrow">Climate shocks · Political response</span>
    <h1>How <em>climate shocks&nbsp;</em>&nbsp;shape political communication and the policy response.</h1>
    <div class="footer">
      <div class="brand">
        Clicopre
        <small>A research project</small>
      </div>
      <div class="meta">
        EU &middot; United States &middot; 1900–2024<br />
        <strong>MSCA Seal of Excellence · Università di Padova</strong>
      </div>
    </div>
  </main>
  <div class="stripes">${'<i></i>'.repeat(20)}</div>
</body>
</html>
`;

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle0' });
// give Fraunces a beat to swap in
await new Promise((r) => setTimeout(r, 600));
await page.screenshot({ path: OUT, type: 'png' });
await browser.close();
console.log(`✓ wrote ${OUT}`);
