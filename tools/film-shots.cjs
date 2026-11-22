// Schermopnamen van het concept op vaste momenten in de productfilm.
// Gebruik: node film-shots.js <url> <uitvoermap> <naam> <breedte> <hoogte> <p1,p2,...> [schaal]
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const [url, outDir, name, w, h, list, scale] = process.argv.slice(2);

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
  });
  const ctx = await browser.newContext({
    viewport: { width: +w, height: +h },
    deviceScaleFactor: +(scale || 1),
    reducedMotion: 'no-preference',
    hasTouch: +w < 900,
    isMobile: +w < 900,
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text());
  });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => window.__film && window.__film.loaded && window.__film.loaded(), null, { timeout: 30000 }).catch(() => {});
  await page.evaluate(() => window.__film && window.__film.fixDpr && window.__film.fixDpr(1));
  await page.waitForTimeout(3200);
  const info = await page.evaluate(() => ({
    filmReady: document.documentElement.classList.contains('film-ready'),
    filmStatic: document.documentElement.classList.contains('film-static'),
    hasHook: !!window.__film,
    overflowX: document.documentElement.scrollWidth - window.innerWidth,
  }));
  console.log(JSON.stringify(info));
  for (const item of list.split(',')) {
    if (item.startsWith('y')) {
      // gewone scrollpositie in pixels, voor de rustige secties
      await page.evaluate(() => window.__film && window.__film.release());
      await page.evaluate((y) => window.scrollTo(0, y), +item.slice(1));
      await page.waitForTimeout(1300);
    } else if (item.startsWith('#')) {
      await page.evaluate(() => window.__film && window.__film.release());
      await page.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'start' }), item);
      await page.waitForTimeout(1300);
    } else {
      const p = +item;
      await page.evaluate((v) => {
        const film = document.querySelector('.film');
        const total = film.offsetHeight - window.innerHeight;
        window.scrollTo(0, film.offsetTop + total * v);
        window.__film && window.__film.set(v);
      }, p);
      await page.waitForTimeout(700);
    }
    const file = path.join(outDir, `${name}-${item.replace(/[^a-z0-9.]/gi, '')}.png`);
    await page.screenshot({ path: file });
  }
  if (errors.length) console.log('ERRORS', errors.slice(0, 6));
  await browser.close();
})();
