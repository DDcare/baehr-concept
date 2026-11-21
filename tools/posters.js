// Maakt stilstaande beelden uit de 3D-studio voor de versie zonder beweging.
// Gebruik: node posters.js <url> <uitvoermap>
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const [url, outDir] = process.argv.slice(2);

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
  });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, reducedMotion: 'no-preference' });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => !!window.__film, null, { timeout: 20000 });
  await page.waitForTimeout(3500);
  const jobs = [
    ['tubo', 0, 900, 1320, { sx: 0, sy: 0.035, hf: 0.66, az: 0.2 }],
    ['duo', 0.56, 1400, 900, null],
    ['espuma', 0.86, 1400, 900, null],
  ];
  for (const [name, p, w, h, shot] of jobs) {
    const data = await page.evaluate(([v, ww, hh, s]) => window.__film.still(v, ww, hh, s), [p, w, h, shot]);
    fs.writeFileSync(path.join(outDir, `${name}.webp`), Buffer.from(data.split(',')[1], 'base64'));
    console.log(name, w, h, Math.round(data.length * 0.75 / 1024) + ' kB');
  }
  await browser.close();
})();
