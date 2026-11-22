// Proef: staande beelden van elk product in de rode studio, als beeldmateriaal voor de rest van de site
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [url, out] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
  const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' })).newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__film && window.__film.loaded(), null, { timeout: 60000 });
  await page.waitForTimeout(2500);
  const shots = JSON.parse(fs.readFileSync(process.argv[4], 'utf8'));
  for (const s of shots) {
    const data = await page.evaluate(([v, w, h, shot]) => window.__film.still(v, w, h, shot), [s.v, s.w, s.h, s.shot]);
    fs.writeFileSync(`${out}/${s.name}.webp`, Buffer.from(data.split(',')[1], 'base64'));
    console.log(s.name);
  }
  await browser.close();
})();
