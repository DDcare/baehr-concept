// Maakt van de voorsteltekst (Markdown) een vormgegeven pdf in de huisstijl van de conceptsite.
// Gebruik: node tools/voorstel.cjs <es|en> <uitvoermap> [naam van het bureau]
// De pdf en de html komen in de uitvoermap; zet die buiten git. De tekst wordt letterlijk overgenomen uit voorstel/*.md.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const [lang = 'es', outDir = '.', agency = ''] = process.argv.slice(2);
const ROOT = path.resolve(__dirname, '..');
const SRC = { es: 'voorstel/propuesta-es.md', en: 'voorstel/proposal-en.md' }[lang];
const T = {
  es: { date: '23 de noviembre de 2026', file: 'Propuesta-BAEHR-Espana', month: 'al mes', docLang: 'es' },
  en: { date: '23 November 2026', file: 'Proposal-BAEHR-Espana', month: 'a month', docLang: 'en' },
}[lang];
const PROTO = 'baehr-concept.vercel.app';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// harde spatie voor het euroteken en het procentteken, en tussen getal en "meses"/"months" niet nodig
const nb = (s) => esc(s).replace(/ €/g, ' €').replace(/ %/g, ' %');
const link = (s) => nb(s).replace(/skincomplete\.eu/g, '<a href="https://skincomplete.eu">skincomplete.eu</a>');

// ---------- Markdown naar blokken ----------
const lines = fs.readFileSync(path.join(ROOT, SRC), 'utf8').split('\n');
const blocks = [];
let para = [];
let list = null;
const flush = () => {
  if (para.length) blocks.push({ t: 'p', text: para.join(' ') });
  para = [];
  if (list) blocks.push({ t: 'ul', items: list });
  list = null;
};
for (const raw of lines) {
  const l = raw.trimEnd();
  if (!l.trim()) { flush(); continue; }
  let m;
  if ((m = l.match(/^(#{1,3}) (.*)$/))) { flush(); blocks.push({ t: 'h' + m[1].length, text: m[2] }); continue; }
  if ((m = l.match(/^- (.*)$/))) { if (para.length) flush(); (list = list || []).push(m[1]); continue; }
  if (list) flush();
  para.push(l.trim());
}
flush();

// ---------- Indelen in delen ----------
const title = blocks.find((b) => b.t === 'h1').text;
const firstH2 = blocks.findIndex((b) => b.t === 'h2');
const intro = blocks.slice(1, firstH2);
const secs = [];
for (const b of blocks.slice(firstH2)) {
  if (b.t === 'h2') secs.push({ h: b.text, body: [], subs: [] });
  else if (b.t === 'h3') secs[secs.length - 1].subs.push({ h: b.text, body: [] });
  else {
    const s = secs[secs.length - 1];
    (s.subs.length ? s.subs[s.subs.length - 1].body : s.body).push(b);
  }
}

const body = (bs) =>
  bs
    .map((b) => (b.t === 'p' ? `<p>${link(b.text)}</p>` : `<ul class="ribs">${b.items.map((i) => `<li>${link(i)}</li>`).join('')}</ul>`))
    .join('\n');

// Kop in twee regels: de eerste helft rood (zoals de paginatitels van de site)
function splitTitle(s) {
  const w = s.split(' ');
  const cut = lang === 'es' ? 1 : 1; // "Propuesta" / "Proposal"
  return [w.slice(0, cut).join(' '), w.slice(cut).join(' ')];
}

// Pakketregel: "Naam, 480 € al mes. Tekst" of "Name, €480 a month: text"
function pack(item) {
  const i = item.indexOf(', ');
  const name = item.slice(0, i);
  const rest = item.slice(i + 2);
  const m = rest.match(/^(€[\d.,]+|[\d.,]+\s€)\s+(.*?)[.:]\s+(.*)$/);
  return { name, price: m[1], unit: m[2], text: m[3] };
}

const [t1, t2] = splitTitle(title);
const greeting = intro[0].text;
const letter = intro.slice(1);

const html = [];
html.push(`<section class="cover">
  <div class="cover__top"><span>${esc(T.date)}</span><a class="chip" href="https://${PROTO}">${PROTO}</a></div>
  <img class="cover__img" src="file://${ROOT}/public/img/estudio/baehr.webp" alt="" />
  <h1><span>${esc(t1)}</span><span>${esc(t2)}</span></h1>
  <div class="letter">
    <p class="hola">${esc(greeting)}</p>
    <div class="letter__body">${body(letter)}</div>
  </div>
</section>`);

secs.forEach((s, k) => {
  if (k === 3) {
    // de vier pakketten
    const ul = s.body.find((b) => b.t === 'ul');
    const before = s.body.slice(0, s.body.indexOf(ul));
    const after = s.body.slice(s.body.indexOf(ul) + 1);
    html.push(`<section class="packs">
      <div class="packs__main">
      <div class="packs__head"><h2>${nb(s.h)}</h2><div>${body(before)}</div></div>
      <ol class="pk">${ul.items
        .map(pack)
        .map((p, i) => `<li class="pk__row pk__row--${i + 1}"><span class="pk__n">${nb(p.name)}</span><span class="pk__d">${nb(p.text)}</span><span class="pk__p"><b>${nb(p.price)}</b><i>${nb(p.unit)}</i></span></li>`)
        .join('')}</ol>
      <div class="packs__after">${body(after)}</div>
      </div>
      <div class="duo">
        <div class="duo__a"><h3>${nb(s.subs[0].h)}</h3>${body(s.subs[0].body)}</div>
        <div class="duo__b"><h3>${nb(s.subs[1].h)}</h3>${body(s.subs[1].body)}</div>
      </div>
    </section>`);
    return;
  }
  if (k === 4) {
    html.push(`<section class="proof"><h2>${nb(s.h)}</h2><div class="proof__body">${body(s.body)}</div></section>`);
    return;
  }
  if (k === 5) {
    html.push(`<section class="sec sec--time"><h2>${nb(s.h)}</h2><ol class="time">${s.body.map((b) => `<li>${link(b.text)}</li>`).join('')}</ol></section>`);
    return;
  }
  if (k === secs.length - 1) {
    const ps = s.body.filter((b) => b.t === 'p').map((b) => b.text).filter((x) => !/^\[.*\]$/.test(x));
    const sign = ps.slice(1);
    html.push(`<div class="fin"><section class="cta"><h2>${nb(s.h)}</h2><p>${link(ps[0])}</p><a class="chip chip--white" href="https://${PROTO}">${PROTO}</a></section>
    <section class="sign"><p>${esc(sign[0] || '')}</p><p class="sign__n">${esc(sign[1] || '')}</p>${agency ? `<p class="sign__a">${esc(agency)}</p>` : ''}</section></div>`);
    return;
  }
  // korte delen blijven bij elkaar: geen kop onderaan de ene pagina en de tekst op de volgende
  const keep = k === 2 || k === 6;
  html.push(`<section class="sec${keep ? ' sec--keep' : ''}"><h2>${nb(s.h)}</h2><div class="sec__body">${body(s.body)}${s.subs
    .map((u) => `<div class="sub"><h3>${nb(u.h)}</h3>${body(u.body)}</div>`)
    .join('')}</div></section>`);
});

const css = `
@font-face { font-family: 'Archivo Variable'; font-weight: 400 900; font-stretch: 62% 125%; src: url('file://${ROOT}/src/fonts/archivo-baehr.woff2') format('woff2-variations'); }
@font-face { font-family: 'Newsreader Variable'; font-style: italic; font-weight: 400; src: url('file://${ROOT}/src/fonts/newsreader-italica-baehr.woff2') format('woff2'); }
@page { size: A4; margin: 14mm 0 13mm; }
@page :first { margin-top: 0; }
:root { --red: #a60d1c; --ink: #18181a; --paper: #f5f5f3; --muted: #56575a; --line: rgba(24,24,26,0.14);
  --silver: linear-gradient(180deg, #dfe0e2 0%, #f7f7f7 40%, #e9eaeb 62%, #cdced1 100%);
  --ribs: repeating-linear-gradient(90deg, currentColor 0 0.5mm, transparent 0.5mm 1.8mm); --pad: 17mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: 'Archivo Variable', sans-serif; font-size: 10.4pt; line-height: 1.5; color: var(--ink); }
a { color: inherit; text-decoration: none; }
p + p, p + ul, ul + p { margin-top: 3mm; }
h1, h2, h3, .pk__n { font-weight: 800; font-variation-settings: 'wdth' 118; text-transform: uppercase; }
h2 { font-size: 15.5pt; line-height: 1.04; letter-spacing: -0.01em; text-wrap: balance; }
h3 { font-size: 10.6pt; line-height: 1.15; margin-bottom: 2mm; text-wrap: balance; }
ul.ribs { list-style: none; border-top: 0.25mm solid var(--line); }
ul.ribs li { position: relative; padding: 2.3mm 0 2.3mm 9mm; border-bottom: 0.25mm solid var(--line); break-inside: avoid; }
ul.ribs li::before { content: ''; position: absolute; left: 0; top: 4.1mm; width: 4.6mm; height: 2.6mm; color: var(--red); background: var(--ribs); }
.chip { display: inline-flex; align-items: center; height: 8.4mm; padding: 0 5mm; border-radius: 99mm; background: var(--red); color: #fff; font-weight: 700; font-size: 9pt; }
.chip--white { background: #fff; color: var(--red); }

.cover { padding: 14mm var(--pad) 0; }
.cover__top { display: flex; justify-content: space-between; align-items: center; font-size: 9pt; font-weight: 600; color: var(--muted); }
.cover__img { display: block; width: 100%; height: 74mm; object-fit: cover; border-radius: 99mm; margin-top: 9mm; background: #5a0710; }
h1 { margin-top: 11mm; font-size: 33pt; line-height: 0.9; letter-spacing: -0.025em; }
h1 span { display: block; }
h1 span:first-child { color: var(--red); }
.letter { display: grid; grid-template-columns: 44mm 1fr; gap: 0 10mm; margin-top: 11mm; }
.hola { font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 17pt; line-height: 1.1; color: var(--red); }
.letter__body { font-size: 10.8pt; }

.sec { display: grid; grid-template-columns: 44mm 1fr; gap: 0 10mm; padding: 10mm var(--pad) 0; }

.sec--keep { break-inside: avoid; }
.sub { position: relative; margin-top: 6.4mm; padding-top: 5.2mm; }
.sub::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 2.6mm; color: var(--red); background: var(--ribs); }
.sub h3 { font-size: 11.4pt; margin-bottom: 2.6mm; }

.packs { padding: 12mm var(--pad) 0; }
.packs__main { break-inside: avoid; }
.packs__head { display: grid; grid-template-columns: 1fr 52mm; gap: 10mm; align-items: end; }
.packs__head h2 { font-size: 21pt; line-height: 0.98; }
.packs__head div { font-size: 9.6pt; color: var(--muted); text-align: right; }
.pk { list-style: none; margin-top: 7mm; display: grid; gap: 2.6mm; }
.pk__row { display: grid; grid-template-columns: 43mm 1fr 33mm; gap: 6mm; align-items: center; min-height: 21mm; padding: 3.6mm 9mm 3.6mm 10mm; border-radius: 99mm; break-inside: avoid; }
.pk__row--1 { background: var(--paper); box-shadow: inset 0 0 0 0.25mm var(--line); }
.pk__row--2 { background: var(--silver); box-shadow: inset 0 0.3mm 0 rgba(255,255,255,0.9), inset 0 -0.3mm 0 rgba(0,0,0,0.08); }
.pk__row--3 { background: var(--red); color: #fff; }
.pk__row--4 { background: var(--ink); color: #fff; }
.pk__n { font-size: 11.6pt; line-height: 1.05; }
.pk__d { font-size: 9.2pt; line-height: 1.38; }
.pk__p { text-align: right; line-height: 1; white-space: nowrap; }
.pk__p b { display: block; font-weight: 800; font-variation-settings: 'wdth' 118; font-size: 19pt; letter-spacing: -0.02em; }
.pk__p i { display: block; margin-top: 1.2mm; font-style: normal; font-size: 8.4pt; opacity: 0.8; }
.packs__after { margin-top: 6mm; padding-left: 10mm; max-width: 150mm; font-size: 10.8pt; }
.duo { display: grid; gap: 3mm; margin-top: 7mm; font-size: 9.8pt; line-height: 1.45; }
.duo > div { display: grid; grid-template-columns: 50mm 1fr; gap: 0 8mm; padding: 7mm 11mm 7mm 10mm; border-radius: 13mm; break-inside: avoid; }
.duo > div > h3 { grid-row: 1 / span 9; }
.duo > div > p { grid-column: 2; }
.duo__a { background: var(--silver); box-shadow: inset 0 0.3mm 0 rgba(255,255,255,0.9), inset 0 -0.3mm 0 rgba(0,0,0,0.08); }
.duo__b { background: var(--paper); box-shadow: inset 0 0 0 0.25mm var(--line); }
.duo h3 { font-size: 10.4pt; margin-bottom: 0; }

.proof { margin: 11mm var(--pad) 0; padding: 12mm 20mm 12mm; border-radius: 22mm; background: var(--red); color: #fff; break-inside: avoid; }
.proof h2 { font-size: 17pt; }
.proof__body { margin-top: 5mm; font-size: 10.6pt; }
.proof a { text-decoration: underline; text-underline-offset: 0.8mm; }

.sec--time { display: block; }
.time { list-style: none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 7mm; margin-top: 6mm; }
.time li { position: relative; padding-top: 5.4mm; font-size: 9.8pt; break-inside: avoid; }
.time li::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 2.6mm; color: var(--red); background: var(--ribs); }

.cta { margin: 12mm var(--pad) 0; padding: 12mm 22mm; border-radius: 99mm; background: var(--ink); color: #fff; text-align: center; break-inside: avoid; }
.cta h2 { font-size: 19pt; }
.cta p { max-width: 118mm; margin: 4mm auto 5mm; font-size: 10.6pt; }
.fin { break-inside: avoid; }
.sign { padding: 8mm var(--pad) 0; }
.sign__n { margin-top: 1mm; font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 17pt; color: var(--red); }
.sign__a { margin-top: 0.5mm; font-weight: 700; }
`;

const doc = `<!doctype html><html lang="${T.docLang}"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${css}</style></head><body>${html.join('\n')}</body></html>`;

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const htmlPath = path.join(outDir, `${T.file}.html`);
  fs.writeFileSync(htmlPath, doc);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(htmlPath), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const pdf = path.join(outDir, `${T.file}.pdf`);
  await page.pdf({ path: pdf, format: 'A4', printBackground: true, preferCSSPageSize: true });
  // controlebeeld van elke pagina
  await page.emulateMedia({ media: 'print' });
  await page.setViewportSize({ width: 794, height: 1123 });
  await page.screenshot({ path: path.join(outDir, `${T.file}-vista.png`), fullPage: true });
  await browser.close();
  console.log(pdf, Math.round(fs.statSync(pdf).size / 1024) + ' kB');
})();
