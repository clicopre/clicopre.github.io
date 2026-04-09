// One-shot mobile screenshot for visual verification.
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
await page.evaluate(() => {
  for (const el of document.querySelectorAll('.reveal')) {
    el.classList.add('is-visible');
  }
});

// 1. Hero closed
await page.screenshot({ path: 'temporary_screenshots/m1_hero-closed.png' });

// 2. Open the mobile menu
await page.click('.nav-toggle');
await new Promise((r) => setTimeout(r, 800));
const navState = await page.evaluate(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.site-nav');
  const inner = document.querySelector('.site-header__inner');
  const brand = document.querySelector('.brand__word');
  return {
    open: header?.getAttribute('data-nav-open'),
    navItems: document.querySelectorAll('.site-nav li').length,
    navRect: nav ? JSON.parse(JSON.stringify(nav.getBoundingClientRect())) : null,
    innerRect: inner ? JSON.parse(JSON.stringify(inner.getBoundingClientRect())) : null,
    headerRect: header ? JSON.parse(JSON.stringify(header.getBoundingClientRect())) : null,
    headerZ: header ? getComputedStyle(header).zIndex : null,
    headerPos: header ? getComputedStyle(header).position : null,
    brandText: brand?.textContent,
    brandColor: brand ? getComputedStyle(brand).color : null,
    innerZ: inner ? getComputedStyle(inner).zIndex : null,
    innerPos: inner ? getComputedStyle(inner).position : null,
    navZ: nav ? getComputedStyle(nav).zIndex : null,
  };
});
console.log('nav state:', navState);
await page.screenshot({ path: 'temporary_screenshots/m2_menu-open.png' });

// 3. Close, then full page
await page.click('.nav-toggle');
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: 'temporary_screenshots/m3_full-mobile.png', fullPage: true });

await browser.close();
console.log('done');
