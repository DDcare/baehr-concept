// Vindt koppen en tekst die breder zijn dan hun vak of dan het scherm, op vijf schermbreedtes en alle pagina's.
// De body verbergt horizontale overloop, dus 'overflowX 0' in de andere tools bewijst niets. Gebruik: node tools/overflow-check.cjs [basis-url]
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const pages = ['/', '/tienda/', '/productos/crema-en-espuma-orange-lemongras/', '/profesionales/', '/la-marca/', '/contacto/', '/cuenta/', '/404.html'];
  let found = 0;
  for (const [w, h] of [[360, 760], [390, 844], [820, 1180], [1024, 768], [1440, 900]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' });
    for (const p of pages) {
      const page = await ctx.newPage();
      await page.goto((process.argv[2] || 'http://127.0.0.1:4321') + p, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(250);
      const bad = await page.evaluate((vw) => {
        const out = [];
        const els = document.querySelectorAll('h1, h2, h3, .stretch, .chap__h, .fin__h, .card__name, .pill, .facts li, .filters, .band__item dt, .years__y, .channel__n, .worlds__n, .cta__h, .pdp__big, .acct-hero__name, .status, .otable, .quick__box, .pass__card, .seminar');
        els.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (!r.width || getComputedStyle(el).visibility === 'hidden') return;
          const clipped = el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX !== 'auto';
          const off = r.right > vw + 1 || r.left < -1;
          if ((clipped && !el.closest('.filters, .shop__row')) || (off && !el.closest('.shop__row, .filters, .film'))) {
            out.push(`${el.tagName.toLowerCase()}.${(el.className || '').toString().split(' ')[0]} "${(el.textContent || '').trim().slice(0, 40)}" right=${Math.round(r.right)} sw=${el.scrollWidth} cw=${el.clientWidth}`);
          }
        });
        return out;
      }, w);
      if (bad.length) { found += bad.length; console.log(w, p, '\n  ' + bad.join('\n  ')); }
      await page.close();
    }
    await ctx.close();
  }
  console.log('totaal', found);
  await browser.close();
})();
