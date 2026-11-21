// Controle van de versie met "minder beweging": de film wordt panelen met stilstaande beelden.
// Gebruik: node tools/static-check.cjs <url> <uitvoermap>
const { chromium } = require('playwright');
(async () => {
  const [url, out] = process.argv.slice(2);
  const browser = await chromium.launch();
  for (const [name, w, h] of [['desk', 1440, 900], ['phone', 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce', deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
    });
    await page.waitForTimeout(1200);
    const imgs = await page.evaluate(() =>
      Array.from(document.querySelectorAll('.still__img, .still img')).map((i) => [i.currentSrc.split('/').pop(), i.complete && i.naturalWidth > 0, Math.round(i.getBoundingClientRect().width)])
    );
    const info = await page.evaluate(() => ({ static: document.documentElement.classList.contains('film-static'), overflowX: document.documentElement.scrollWidth - window.innerWidth }));
    console.log(name, JSON.stringify(info), JSON.stringify(imgs));
    await page.screenshot({ path: `${out}/static-${name}.png`, fullPage: true });
    await ctx.close();
  }
  await browser.close();
})();
