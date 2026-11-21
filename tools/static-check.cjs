const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  for (const [name, w, h] of [['desk', 1440, 900], ['phone', 390, 844]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce', deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(process.argv[2], { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelector('.beat--b').scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(1200);
    const ok = await page.evaluate(() => Array.from(document.querySelectorAll('.still__img, .still img')).map((i) => [i.currentSrc.split('/').pop(), i.complete && i.naturalWidth > 0, Math.round(i.getBoundingClientRect().width), Math.round(i.getBoundingClientRect().height)]));
    console.log(name, JSON.stringify(ok));
    await page.screenshot({ path: `${process.argv[3]}/static-${name}-duo.png` });
    if (name === 'phone') { await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(400); await page.screenshot({ path: `${process.argv[3]}/static-phone-top.png` }); }
    await ctx.close();
  }
  await browser.close();
})();
