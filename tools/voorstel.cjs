// Maakt van de voorsteltekst (Markdown) een vormgegeven pdf in de huisstijl van de conceptsite.
// Gebruik: node tools/voorstel.cjs <es|en> <uitvoermap>
// De pdf en de html komen in de uitvoermap; zet die buiten git. De tekst wordt letterlijk overgenomen uit voorstel/*.md.
//
// Opbouw: zeven pagina's die elk een afgerond geheel zijn. Geen deel, lijst of alinea loopt door naar een volgende
// pagina. De lettergrootte van de lopende tekst wordt per taal zo groot gekozen als op alle pagina's past; de ruimte
// die op een pagina overblijft, gaat naar de tussenruimtes van die pagina. Past de tekst ook op de kleinste maat niet,
// dan stopt het script met een foutmelding in plaats van een afgekapte pagina te maken. Vaste maat proberen: FS=10.2.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const [lang = 'es', outDir = '.'] = process.argv.slice(2);
const ROOT = path.resolve(__dirname, '..');
const SRC = { es: 'voorstel/propuesta-es.md', en: 'voorstel/proposal-en.md' }[lang];
const T = {
  es: { date: '23 de noviembre de 2026', file: 'Propuesta-BAEHR-Espana', docLang: 'es' },
  en: { date: '23 November 2026', file: 'Proposal-BAEHR-Espana', docLang: 'en' },
}[lang];
const PROTO = 'baehr-concept.vercel.app';
const LINKS = { 'skincomplete.eu': 'https://skincomplete.eu', [PROTO]: `https://${PROTO}` };
const FS_MAX = 11.2;
const FS_MIN = 9.6;
const IMG = (name) => `file://${ROOT}/public/img/estudio/${name}.webp`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Lopende tekst: adressen worden links, bedragen en maten breken niet los van hun getal,
// en een samengesteld woord met streepje breekt niet af aan het eind van een regel.
function rich(s) {
  const held = [];
  let t = esc(s);
  for (const [domain, url] of Object.entries(LINKS)) {
    t = t.split(domain).join(`\u0000${held.push(`<a href="${url}">${domain}</a>`) - 1}\u0000`);
  }
  t = t
    .replace(/(\d) (€|%|ml)/g, '$1 $2')
    .replace(/[A-Za-zÀ-ÿ0-9]+(?:-[A-Za-zÀ-ÿ0-9]+)+/g, (w) => (w.length <= 22 ? `<span class="nw">${w}</span>` : w));
  return t.replace(/\u0000(\d+)\u0000/g, (_, i) => held[+i]);
}

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
// De pagina-indeling hieronder rekent op deze opbouw van de tekst.
const [sFound, sGoals, sShop, sPacks, sProof, sTime, sTerms, sEnd] = secs;
if (secs.length !== 8 || sGoals.subs.length !== 3 || sPacks.subs.length !== 3) {
  throw new Error(`Onverwachte opbouw van ${SRC}: ${secs.length} delen, ${sGoals && sGoals.subs.length} doelen, ${sPacks && sPacks.subs.length} blokken bij de pakketten. Pas de pagina-indeling in tools/voorstel.cjs aan.`);
}

const body = (bs) =>
  bs
    .map((b) => (b.t === 'p' ? `<p>${rich(b.text)}</p>` : `<ul class="ribs">${b.items.map((i) => `<li>${rich(i)}</li>`).join('')}</ul>`))
    .join('\n');

// Pakketregel: "Naam, 540 € al mes. Tekst" of "Name, €540 a month: text"
function pack(item) {
  const i = item.indexOf(', ');
  const m = item.slice(i + 2).match(/^(€[\d.,]+|[\d.,]+\s€)\s+(.*?)[.:]\s+(.*)$/);
  if (i < 0 || !m) throw new Error(`Pakketregel niet herkend: ${item}`);
  return { name: item.slice(0, i), price: m[1], unit: m[2], text: m[3].charAt(0).toUpperCase() + m[3].slice(1) };
}

const words = title.split(' ');
const [t1, t2] = [words[0], words.slice(1).join(' ')]; // "Propuesta" / "Proposal" op de eerste regel
const greeting = intro[0].text;
const letter = intro.slice(1);
const endPs = sEnd.body.filter((b) => b.t === 'p').map((b) => b.text);
const [ctaText, signOff = '', signName = '', agency = ''] = endPs;

const foot = `<footer class="foot"><span>${esc(title)}</span><span>${esc(agency)}</span></footer>`;
const pg = (parts) => `<section class="pg"><div class="pg__in">${parts.join('\n')}${foot}</div></section>`;
const sec = (s) => `<section class="sec"><h2>${rich(s.h)}</h2><div class="body">${body(s.body)}</div></section>`;
const goal = (u) => `<div class="goal"><h3>${rich(u.h)}</h3><div class="body">${body(u.body)}</div></div>`;
const block = (u, kind) => `<div class="duo__${kind}"><h3>${rich(u.h)}</h3>${body(u.body)}</div>`;

const packsUl = sPacks.body.find((b) => b.t === 'ul');
const packsBefore = sPacks.body.slice(0, sPacks.body.indexOf(packsUl));
const packsAfter = sPacks.body.slice(sPacks.body.indexOf(packsUl) + 1);
const packs = packsUl.items.map(pack);
// het pakket dat de tekst aanraadt, krijgt de rode capsule
const advised = packs.findIndex((p) => packsAfter.some((b) => b.t === 'p' && b.text.includes(p.name)));
const tone = (i) => (i === advised ? 'red' : i > advised && advised >= 0 ? 'ink' : 'silver');

const html = [];

// 1. Omslag: de rode studio van de film, zonder kader
html.push(`<section class="pg cover">
  <img class="cover__img" src="${IMG('baehr')}" alt="" />
  <div class="cover__top"><span class="cover__by">${esc(agency)}</span><span>${esc(T.date)}</span></div>
  <div class="cover__base">
    <h1><span>${esc(t1)}</span><span>${esc(t2)}</span></h1>
    <a class="chip chip--white" href="https://${PROTO}">${PROTO}</a>
  </div>
  <i class="cover__ribs"></i>
</section>`);

// 2. Brief en wat we zagen
html.push(pg([
  `<div class="letter"><p class="hola">${esc(greeting).replace(' ', '<br>')}</p><div class="letter__body">${body(letter)}</div></div>`,
  sec(sFound),
]));

// 3. Voorstel per doel: de eerste twee doelen
html.push(pg([
  `<div class="goals"><h2>${rich(sGoals.h)}</h2>${goal(sGoals.subs[0])}</div>`,
  goal(sGoals.subs[1]),
]));

// 4. Het derde doel, de winkel en het portaal, en de vijf producten uit het prototype
html.push(pg([
  goal(sGoals.subs[2]),
  sec(sShop),
  `<a class="strip" href="https://${PROTO}">${['bano', 'exfoliante', 'mascarilla', 'crema', 'espuma'].map((n) => `<span style="background-image:url('${IMG(n)}')"></span>`).join('')}</a>`,
]));

// 5. De pakketten met wat erbij hoort
html.push(pg([
  `<section class="packs">
    <div class="packs__head"><h2>${rich(sPacks.h)}</h2><div>${body(packsBefore)}</div></div>
    <ol class="pk">${packs
      .map((p, i) => `<li class="pk__row pk__row--${tone(i)}"><span class="pk__n">${rich(p.name)}</span><span class="pk__d">${rich(p.text)}</span><span class="pk__p"><b>${rich(p.price)}</b><i>${rich(p.unit)}</i></span></li>`)
      .join('')}</ol>
    <div class="packs__after">${body(packsAfter)}</div>
  </section>`,
  `<div class="duo">${block(sPacks.subs[0], 'a')}${block(sPacks.subs[1], 'b')}</div>`,
]));

// 6. Advertentiebudget, bewijs en planning
html.push(pg([
  `<div class="duo">${block(sPacks.subs[2], 'b')}</div>`,
  `<section class="proof"><h2>${rich(sProof.h)}</h2><div class="proof__body">${body(sProof.body)}</div></section>`,
  `<section class="sec sec--time"><h2>${rich(sTime.h)}</h2><ol class="time" style="--n:${sTime.body.length}">${sTime.body.map((b) => `<li>${rich(b.text)}</li>`).join('')}</ol></section>`,
]));

// 7. Voorwaarden en het gesprek
html.push(pg([
  sec(sTerms),
  `<a class="shot" href="https://${PROTO}" style="background-image:url('${IMG('baehr-lado')}')"></a>`,
  `<div class="fin"><section class="cta"><h2>${rich(sEnd.h)}</h2><p>${rich(ctaText)}</p><a class="chip chip--white" href="https://${PROTO}">${PROTO}</a></section>
    <section class="sign"><p>${esc(signOff)}</p><p class="sign__n">${esc(signName)}</p><p class="sign__a">${esc(agency)}</p></section></div>`,
]));

const css = `
@font-face { font-family: 'Archivo Variable'; font-weight: 400 900; font-stretch: 62% 125%; src: url('file://${ROOT}/src/fonts/archivo-baehr.woff2') format('woff2-variations'); }
@font-face { font-family: 'Newsreader Variable'; font-style: italic; font-weight: 400; src: url('file://${ROOT}/src/fonts/newsreader-italica-baehr.woff2') format('woff2'); }
@page { size: A4; margin: 0; }
:root { --red: #a60d1c; --ink: #18181a; --paper: #f5f5f3; --muted: #56575a; --line: rgba(24,24,26,0.14);
  --silver: linear-gradient(180deg, #dfe0e2 0%, #f7f7f7 40%, #e9eaeb 62%, #cdced1 100%);
  --ribs: repeating-linear-gradient(90deg, currentColor 0 0.5mm, transparent 0.5mm 1.8mm);
  --pad: 17mm; --ind: 32mm; --fs: 10.4pt; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: 'Archivo Variable', sans-serif; font-size: var(--fs); line-height: 1.5; color: var(--ink); }
a { color: inherit; text-decoration: none; }
p, li { text-wrap: pretty; }
.nw { white-space: nowrap; }
p + p, p + ul, ul + p { margin-top: 0.82em; }
h1, h2, h3, .pk__n, .cover__by { font-weight: 800; font-variation-settings: 'wdth' 118; text-transform: uppercase; }
h2 { font-size: 17pt; line-height: 1.04; letter-spacing: -0.01em; text-wrap: balance; }
h3 { font-size: 11.6pt; line-height: 1.12; text-wrap: balance; }
ul.ribs { list-style: none; border-top: 0.25mm solid var(--line); }
ul.ribs li { position: relative; padding: 0.62em 0 0.62em 9mm; border-bottom: 0.25mm solid var(--line); }
ul.ribs li::before { content: ''; position: absolute; left: 0; top: calc(0.62em + 0.42em); width: 4.6mm; height: 2.6mm; color: var(--red); background: var(--ribs); }
.chip { display: inline-flex; align-items: center; height: 8.6mm; padding: 0 5.2mm; border-radius: 99mm; background: var(--red); color: #fff; font-weight: 700; font-size: 9pt; }
.chip--white { background: #fff; color: var(--red); }

/* Elke pagina is een vast vel; de inhoud wordt erin verdeeld */
.pg { position: relative; width: 210mm; height: 297mm; overflow: hidden; break-after: page; }
.pg:last-child { break-after: auto; }
.pg__in { height: 100%; padding: 17mm var(--pad) 10mm; display: flex; flex-direction: column; gap: var(--gap, 9mm); }
.pg__in > * { flex: none; }
.foot { margin-top: auto; padding-top: 2.6mm; border-top: 0.25mm solid var(--line); display: flex; justify-content: space-between; font-size: 7.6pt; font-weight: 600; color: var(--muted); }
.body { margin-left: var(--ind); }

/* Omslag */
.cover { color: #fff; background: linear-gradient(180deg, #43050c 0mm, #660813 74mm, #700512 116mm, #790213 160mm, #790213 206mm, #57060f 297mm); }
.cover__img { position: absolute; left: 0; top: 72mm; width: 210mm; height: 88.67mm; object-fit: cover;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 15%, #000 88%, transparent 100%); mask-image: linear-gradient(180deg, transparent 0%, #000 15%, #000 88%, transparent 100%); }
.cover__top { position: absolute; left: var(--pad); right: var(--pad); top: 17mm; display: flex; justify-content: space-between; align-items: baseline; font-size: 9pt; font-weight: 600; }
.cover__by { font-size: 9.4pt; letter-spacing: 0.02em; }
.cover__base { position: absolute; left: var(--pad); right: var(--pad); top: 190mm; }
h1 { font-size: 38pt; line-height: 0.92; letter-spacing: -0.025em; }
h1 span { display: block; }
.cover .chip { margin-top: 9mm; }
.cover__ribs { position: absolute; left: var(--pad); right: var(--pad); bottom: 15mm; height: 2.6mm; color: rgba(255,255,255,0.42); background: var(--ribs); }

/* Brief */
.letter { display: grid; grid-template-columns: 24mm 1fr; gap: 0 8mm; }
.hola { font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 17pt; line-height: 1.08; color: var(--red); }
.letter__body { font-size: 1.05em; }
.letter__body a, .body a { color: var(--red); font-weight: 600; }

/* Delen */
.sec > .body { margin-top: 5mm; }
.goals > h2 { margin-bottom: 6.5mm; }
.goal { position: relative; padding-top: 5.6mm; }
.goal::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 2.6mm; color: var(--red); background: var(--ribs); }
.goal > .body { margin-top: 3.6mm; }
.shot { display: block; flex: 1 1 0; min-height: 44mm; max-height: 74.3mm; border-radius: 99mm; background: #5a0710 center / cover no-repeat; }
.strip { display: grid; grid-template-columns: repeat(5, 1fr); gap: 5mm; }
.strip span { aspect-ratio: 2 / 3; border-radius: 11mm; background: #5a0710 center / cover no-repeat; }

/* Pakketten */
.packs__head { display: grid; grid-template-columns: 1fr auto; gap: 10mm; align-items: end; }
.packs__head h2 { font-size: 22pt; line-height: 0.98; }
.packs__head div { font-size: 9.6pt; color: var(--muted); text-align: right; white-space: nowrap; }
.pk { list-style: none; margin-top: 7mm; display: grid; grid-auto-rows: 1fr; gap: 2.8mm; }
.pk__row { display: grid; grid-template-columns: 48mm 1fr 30mm; gap: 5mm; align-items: center; min-height: 23mm; padding: 3.6mm 10mm 3.6mm 11mm; border-radius: 99mm; }
.pk__row--silver { background: var(--silver); box-shadow: inset 0 0.3mm 0 rgba(255,255,255,0.9), inset 0 -0.3mm 0 rgba(0,0,0,0.08); }
.pk__row--red { background: var(--red); color: #fff; }
.pk__row--ink { background: var(--ink); color: #fff; }
.pk__n { font-size: 11.2pt; line-height: 1.05; white-space: nowrap; }
.pk__d { font-size: 0.9em; line-height: 1.4; }
.pk__p { text-align: right; line-height: 1; white-space: nowrap; }
.pk__p b { display: block; font-weight: 800; font-variation-settings: 'wdth' 118; font-size: 21pt; letter-spacing: -0.02em; }
.pk__p i { display: block; margin-top: 1.3mm; font-style: normal; font-size: 8.4pt; opacity: 0.8; }
.packs__after { margin-top: 6.5mm; padding: 0 10mm 0 11mm; font-size: 1.03em; }
.duo { display: grid; gap: 3mm; font-size: 0.92em; line-height: 1.46; }
.duo > div { display: grid; grid-template-columns: 48mm 1fr; gap: 0 8mm; padding: 6.4mm 11mm 6.4mm 11mm; border-radius: 13mm; }
.duo > div > h3 { grid-row: 1 / span 9; font-size: 9.6pt; }
.duo > div > p { grid-column: 2; }
.duo__a { background: var(--silver); box-shadow: inset 0 0.3mm 0 rgba(255,255,255,0.9), inset 0 -0.3mm 0 rgba(0,0,0,0.08); }
.duo__b { background: var(--paper); box-shadow: inset 0 0 0 0.25mm var(--line); }

/* Bewijs en planning */
.proof { padding: 11mm 20mm; border-radius: 22mm; background: var(--red); color: #fff; }
.proof__body { margin-top: 4.6mm; font-size: 1.02em; }
.proof a { text-decoration: underline; text-underline-offset: 0.8mm; }
.time { list-style: none; display: grid; grid-template-columns: repeat(var(--n), 1fr); gap: 9mm; margin-top: 6mm; }
.time li { position: relative; padding-top: 5.6mm; font-size: 0.97em; }
.time li::before { content: ''; position: absolute; inset: 0 0 auto 0; height: 2.6mm; color: var(--red); background: var(--ribs); }

/* Slot */
.cta { padding: 11mm 22mm; border-radius: 99mm; background: var(--ink); color: #fff; text-align: center; }
.cta h2 { font-size: 19pt; }
.cta p { max-width: 118mm; margin: 4mm auto 5mm; font-size: 1.02em; }
.sign { padding-top: 7mm; }
.sign__n { margin-top: 0.6mm; font-family: 'Newsreader Variable', serif; font-style: italic; font-size: 17pt; line-height: 1.15; color: var(--red); }
.sign__a { margin-top: 0.4mm; font-weight: 700; }
`;

const doc = `<!doctype html><html lang="${T.docLang}"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${css}</style></head><body>${html.join('\n')}</body></html>`;

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const htmlPath = path.join(outDir, `${T.file}.html`);
  fs.writeFileSync(htmlPath, doc);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  await page.emulateMedia({ media: 'print' });
  await page.goto('file://' + path.resolve(htmlPath), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  // Lettergrootte kiezen en de overgebleven ruimte per pagina verdelen
  const fit = await page.evaluate(
    ({ max, min, fixed }) => {
      const mm = 96 / 25.4;
      const MIN_GAP = 9 * mm;
      const MAX_GAP = 26 * mm;
      const root = document.documentElement;
      const sheets = [...document.querySelectorAll('.pg__in')];
      // Ruimte boven de voetregel bij de kleinste tussenruimte. Een beeld dat meegroeit (.shot) vult die ruimte zelf:
      // voor de pascontrole telt dan mee hoeveel dat beeld nog kan krimpen.
      const measure = (withShot) =>
        sheets.map((el) => {
          const kids = [...el.children];
          const last = kids[kids.length - 2];
          const foot = kids[kids.length - 1];
          const shot = el.querySelector(':scope > .shot');
          const give = withShot && shot ? shot.getBoundingClientRect().height - parseFloat(getComputedStyle(shot).minHeight) : 0;
          return foot.getBoundingClientRect().top - last.getBoundingClientRect().bottom - MIN_GAP - (el.scrollHeight - el.clientHeight) + give;
        });
      let size = null;
      const sizes = fixed ? [fixed] : Array.from({ length: Math.round((max - min) * 10) + 1 }, (_, i) => +(max - i / 10).toFixed(1));
      for (const f of sizes) {
        root.style.setProperty('--fs', f + 'pt');
        if (measure(true).every((r) => r >= 1.5 * mm)) { size = f; break; }
      }
      const room = measure(true).map((r) => +(r / mm).toFixed(1));
      if (size === null) return { size, left: room };
      // wat echt overblijft, gaat naar de tussenruimtes (een meegroeiend beeld houdt zijn ruimte)
      const left = measure(false).map((r) => +(r / mm).toFixed(1));
      const gaps = sheets.map((el, i) => {
        const n = el.children.length - 1; // tussenruimtes tussen de blokken plus die boven de voetregel
        const gap = Math.min(MIN_GAP + Math.max(0, left[i] * mm) / n, MAX_GAP);
        el.style.setProperty('--gap', gap + 'px');
        return +(gap / mm).toFixed(1);
      });
      const over = sheets.map((el) => el.scrollHeight - el.clientHeight);
      return { size, left: room, gaps, over };
    },
    { max: FS_MAX, min: FS_MIN, fixed: process.env.FS ? Number(process.env.FS) : 0 },
  );
  if (fit.size === null) {
    await browser.close();
    throw new Error(`De tekst past niet op de pagina's, ook niet op ${FS_MIN} pt. Ruimte per pagina in mm (negatief is te veel tekst): ${fit.left.join(', ')}`);
  }
  if (fit.over.some((o) => o > 0)) {
    await browser.close();
    throw new Error(`Na het verdelen loopt een pagina over: ${fit.over.join(', ')}`);
  }

  const pdf = path.join(outDir, `${T.file}.pdf`);
  await page.pdf({ path: pdf, format: 'A4', printBackground: true, preferCSSPageSize: true });
  const sheetsCount = await page.evaluate(() => document.querySelectorAll('.pg').length);
  await browser.close();
  console.log(`${pdf}  ${Math.round(fs.statSync(pdf).size / 1024)} kB  ${sheetsCount} pagina's  tekst ${fit.size} pt`);
  console.log(`  ruimte over per pagina (mm): ${fit.left.join(', ')}  tussenruimte (mm): ${fit.gaps.join(', ')}`);
})();
