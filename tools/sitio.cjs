// Legt een openbare site vast voor ontwerponderzoek: schermen (desktop en telefoon), overzichtsbladen en meetwaarden.
// Gebruik: node sitio.cjs <url> <map> <naam> [schermen desktop=8] [schermen telefoon=6] [taal=es-ES]
// Leest alleen openbare pagina's. Bij een botfilter stopt het script: niet omzeilen.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const [url, dir, name, nd = 8, nm = 6, locale = 'es-ES'] = process.argv.slice(2);
const BLOCK = /just a moment|access denied|attention required|verify you are human|verifica que eres humano|captcha|pardon our interruption|are you a robot|request blocked|forbidden|bot detection|unusual traffic/i;
const REJECT = /^(rechazar( todo| todas| cookies)?|rechazarlas|denegar( todo)?|solo (las )?necesarias|sólo (las )?necesarias|continuar sin aceptar|reject( all)?|decline( all)?|deny|only necessary|necessary only|alle ablehnen|ablehnen|nur notwendige|tout refuser|refuser|weigeren|alles weigeren)$/i;
const ACCEPT = /^(aceptar( todo| todas| cookies| y cerrar)?|acepto|entendido|de acuerdo|accept( all( cookies)?)?|allow all|agree|i agree|got it|ok|alle akzeptieren|akzeptieren|zustimmen|tout accepter|accepter|accepteren|alles accepteren)$/i;

async function cookies(page) {
  for (const re of [REJECT, ACCEPT]) {
    for (const frame of page.frames()) {
      try {
        const els = await frame.$$('button, a[role="button"], [role="button"], input[type="button"], input[type="submit"]');
        for (const el of els.slice(0, 400)) {
          const t = ((await el.innerText().catch(() => '')) || (await el.getAttribute('value').catch(() => '')) || '').trim();
          if (t && t.length < 40 && re.test(t) && (await el.isVisible().catch(() => false))) {
            await el.click({ timeout: 2000 }).catch(() => {});
            await page.waitForTimeout(900);
            return t;
          }
        }
      } catch {}
    }
  }
  return null;
}

async function measure(page) {
  return page.evaluate(() => {
    const vis = (e) => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); return r.width > 2 && r.height > 2 && c.visibility !== 'hidden' && c.display !== 'none' && +c.opacity > 0.05; };
    const fam = (c) => c.fontFamily.split(',')[0].replace(/["']/g, '').trim();
    const heads = [...document.querySelectorAll('h1, h2, h3')].filter(vis).map((e) => { const c = getComputedStyle(e); return { tag: e.tagName, text: e.innerText.trim().replace(/\s+/g, ' ').slice(0, 48), px: Math.round(parseFloat(c.fontSize)), weight: c.fontWeight, font: fam(c), upper: c.textTransform === 'uppercase', ls: c.letterSpacing, lh: c.lineHeight }; });
    heads.sort((a, b) => b.px - a.px);
    const ps = [...document.querySelectorAll('p, li')].filter(vis).filter((e) => e.innerText.trim().length > 40).slice(0, 300);
    const count = {};
    for (const e of ps) { const c = getComputedStyle(e); const k = `${Math.round(parseFloat(c.fontSize))}px/${c.lineHeight} ${c.fontWeight} ${fam(c)}`; count[k] = (count[k] || 0) + 1; }
    const body = Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, n]) => `${k} (${n}x)`);
    const pinned = [];
    for (const el of document.querySelectorAll('body *')) {
      const c = getComputedStyle(el);
      if (c.position === 'sticky' && el.offsetHeight >= innerHeight * 0.6 && el.parentElement && el.parentElement.offsetHeight > innerHeight * 1.5)
        pinned.push({ el: (el.tagName + '.' + String(el.className).slice(0, 40)), scrollVh: +(el.parentElement.offsetHeight / innerHeight).toFixed(1) });
    }
    for (const el of document.querySelectorAll('.pin-spacer')) if (el.offsetHeight > innerHeight * 1.5) pinned.push({ el: 'pin-spacer (GSAP)', scrollVh: +(el.offsetHeight / innerHeight).toFixed(1) });
    const fixed = [...document.querySelectorAll('body *')].filter((e) => { const c = getComputedStyle(e); return (c.position === 'fixed' || c.position === 'sticky') && vis(e) && e.getBoundingClientRect().height < innerHeight * 0.35 && e.getBoundingClientRect().width > innerWidth * 0.5; }).slice(0, 8).map((e) => { const r = e.getBoundingClientRect(); return { el: (e.tagName + '.' + String(e.className).slice(0, 30)), top: Math.round(r.top), h: Math.round(r.height), text: e.innerText.trim().replace(/\s+/g, ' ').slice(0, 60) }; });
    const canv = [...document.querySelectorAll('canvas')].filter(vis).map((c) => `${c.width}x${c.height}`);
    const vids = [...document.querySelectorAll('video')].filter(vis).map((v) => ({ autoplay: v.autoplay, loop: v.loop, w: v.clientWidth, h: v.clientHeight }));
    const fonts = [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family.replace(/["']/g, '')))].slice(0, 12);
    const bg = getComputedStyle(document.body).backgroundColor;
    const buttons = [...document.querySelectorAll('button, a')].filter(vis).filter((e) => { const c = getComputedStyle(e); const r = e.getBoundingClientRect(); return r.height >= 30 && r.height <= 80 && r.width >= 80 && r.width < 420 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || c.borderTopWidth !== '0px') && e.innerText.trim().length > 2 && e.innerText.trim().length < 32; }).slice(0, 6).map((e) => { const c = getComputedStyle(e); const r = e.getBoundingClientRect(); return { text: e.innerText.trim().replace(/\s+/g, ' '), h: Math.round(r.height), radius: c.borderTopLeftRadius, bg: c.backgroundColor, px: Math.round(parseFloat(c.fontSize)), weight: c.fontWeight, upper: c.textTransform === 'uppercase' }; });
    return { title: document.title, lang: document.documentElement.lang, pageVh: +(document.documentElement.scrollHeight / innerHeight).toFixed(1), bodyBg: bg, fonts, headings: heads.slice(0, 8), bodyText: body, buttons, pinnedScroll: pinned.slice(0, 6), fixedBars: fixed, canvases: canv, videos: vids.slice(0, 4), images: document.images.length, modelViewer: document.querySelectorAll('model-viewer').length };
  });
}

async function pass(browser, kind, w, h, n, out) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, locale, deviceScaleFactor: 1, isMobile: kind === 'm', hasTouch: kind === 'm', reducedMotion: 'no-preference',
    userAgent: kind === 'm' ? 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Mobile Safari/537.36' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' });
  const page = await ctx.newPage();
  const res = { kind, shots: [] };
  try {
    const r = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    res.status = r ? r.status() : null;
    res.finalUrl = page.url();
    await page.waitForTimeout(4000);
    const head = (await page.title()) + ' ' + (await page.evaluate(() => (document.body ? document.body.innerText.slice(0, 400) : '')).catch(() => ''));
    const small = await page.evaluate(() => document.querySelectorAll('body *').length).catch(() => 0);
    if ((res.status && res.status >= 400) || (BLOCK.test(head) && small < 250)) {
      res.blocked = true;
      res.note = head.replace(/\s+/g, ' ').slice(0, 160);
      await ctx.close();
      return res;
    }
    res.cookieButton = await cookies(page);
    await page.waitForTimeout(600);
    res.metrics = await measure(page);
    for (let i = 0; i < n; i++) {
      const f = path.join(dir, `${name}-${kind}-${i}.jpg`);
      await page.screenshot({ path: f, type: 'jpeg', quality: 74 });
      res.shots.push(f);
      const before = await page.evaluate(() => scrollY);
      if (kind === 'm') await page.evaluate((d) => scrollBy({ top: d, behavior: 'instant' }), Math.round(h * 0.9));
      else await page.mouse.wheel(0, Math.round(h * 0.9));
      await page.waitForTimeout(1300);
      const after = await page.evaluate(() => scrollY);
      if (after === before && i > 0) break;
    }
  } catch (e) {
    res.error = String(e).slice(0, 200);
  }
  await ctx.close();
  return res;
}

(async () => {
  fs.mkdirSync(dir, { recursive: true });
  // WebGL via software, zodat sites met 3D ook iets tonen (traag: geen oordeel over hun snelheid mogelijk)
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl'] });
  const out = { url, name, when: new Date().toISOString(), passes: [] };
  out.passes.push(await pass(browser, 'd', 1440, 900, +nd, out));
  if (!out.passes[0].blocked) out.passes.push(await pass(browser, 'm', 390, 844, +nm, out));
  await browser.close();
  for (const p of out.passes) {
    if (!p.shots || !p.shots.length) continue;
    try {
      p.sheet = path.join(dir, `${name}-${p.kind}-hoja.jpg`);
      execFileSync('python3', ['-I', path.join(__dirname, 'hoja.py'), p.sheet, p.kind, ...p.shots]);
    } catch (e) { p.sheetError = String(e).slice(0, 120); }
  }
  fs.writeFileSync(path.join(dir, `${name}.json`), JSON.stringify(out, null, 1));
  const brief = out.passes.map((p) => ({ kind: p.kind, status: p.status, blocked: p.blocked || false, note: p.note, error: p.error, shots: (p.shots || []).length, sheet: p.sheet, cookieButton: p.cookieButton, pageVh: p.metrics && p.metrics.pageVh }));
  console.log(JSON.stringify({ json: path.join(dir, `${name}.json`), passes: brief }, null, 1));
})();
