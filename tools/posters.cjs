// Stilstaande beelden van de productfilm voor bezoekers met "minder beweging" of zonder WebGL.
// Gebruik: node tools/posters.cjs <url> <map>   (bijvoorbeeld public/posters)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const [url, outDir] = process.argv.slice(2);
// moment in de film, maat, en een eigen kader: het product in het midden in plaats van naast de tekst
const SHOTS = [
  { name: 'conjunto', v: 0.0, w: 1000, h: 1120, shot: { sx: 0, sy: 0.06, hf: 0.6, az: 0.2 } },
  { name: 'paso-1', v: 0.16, w: 1400, h: 900, shot: { sx: 0, sy: 0.03 } },
  { name: 'paso-2', v: 0.32, w: 1400, h: 900, shot: { sx: 0, sy: 0.05 } },
  { name: 'paso-3', v: 0.5, w: 1400, h: 900, shot: { sx: 0, sy: 0.02 } },
  { name: 'paso-4', v: 0.66, w: 1400, h: 900, shot: { sx: 0, sy: 0.03 } },
  { name: 'paso-5', v: 0.82, w: 1400, h: 900, shot: { sx: 0, sy: 0.05 } },
];

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'],
  });
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' })).newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__film && window.__film.loaded(), null, { timeout: 60000 });
  await page.waitForTimeout(2500);
  for (const s of SHOTS) {
    const data = await page.evaluate(([v, w, h, shot]) => window.__film.still(v, w, h, shot), [s.v, s.w, s.h, s.shot]);
    const file = path.join(outDir, `${s.name}.webp`);
    fs.writeFileSync(file, Buffer.from(data.split(',')[1], 'base64'));
    console.log(file, Math.round(fs.statSync(file).size / 1024), 'kB');
  }
  await browser.close();
})();
