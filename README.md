# BAEHR España, conceptsite

Ontwerpconcept voor de nieuwe winkel van BAEHR España (Proxy Beauty Spain, S.L., Barcelona), de officiële Spaanse distributeur van het Duitse merk BAEHR. Dit is een concept, niet de live site. De huidige site staat op baehr.com.es.

Gebouwd met Astro en three.js. De producten zijn 3D-modellen die in de code worden opgebouwd; er zijn geen externe 3D-bestanden.

## Commando's

```
npm install
npm run dev       # lokaal ontwikkelen
npm run build     # bouwen naar dist/
npm run preview   # de gebouwde versie lokaal bekijken
```

## Opbouw

- `src/pages/index.astro`: de home, met alle Spaanse teksten.
- `src/scripts/film.js`: de 3D-studio (tube, bus, schuim, licht, camera) en de koppeling met het scrollen.
- `src/scripts/ui.js`: schakelaar professional of particulier, menu, voorbeeldformulier, verschijnen bij scrollen.
- `src/styles/site.css`: alle opmaak.
- `public/posters/`: stilstaande beelden voor bezoekers met "minder beweging" of zonder WebGL.
- `docs/merk-en-woordenlijst.md`: geverifieerde merkfeiten, Spaanse vakwoordenlijst met bronnen en regels voor cosmeticaclaims.
- `docs/eindredactie-home-es.md`: rapport van de Spaanse eindredactie, met Nederlandse terugvertaling per zin.
- `tools/`: schermopnamen en stilstaande beelden maken met Playwright.
- `.claude/agents/`: de Spaanse schrijver en de Spaanse eindredacteur.

## Testen

De testbrowser heeft WebGL via software nodig. De scripts in `tools/` regelen dat.

```
npm run build && npm run preview
node tools/film-shots.js http://127.0.0.1:4321/ shots d 1440 900 0,0.3,0.56,0.84 1
node tools/film-shots.js http://127.0.0.1:4321/ shots m 390 844 0,0.3,0.56,0.84 2
node tools/static-check.js http://127.0.0.1:4321/ shots
node tools/posters.js http://127.0.0.1:4321/ public/posters   # na wijzigingen in de 3D
```

De getallen na de schermmaat zijn momenten in de productfilm, van 0 (bovenaan) tot 1 (einde).

## Stand op 21 november 2026

Getest in een testbrowser op 1440 bij 900, 1100 bij 720, 820 bij 1180 en 390 bij 844. Nog niet getest op een echte telefoon of in Safari.

Bewust zo gekozen:

- De etiketten zijn gestileerd nagemaakt. Scherpe productbeelden en het logo als vectorbestand ontbreken nog.
- Er staat "distribuidor oficial" en niet "exclusivo": de fabrikant noemt Proxy Beauty Spain als exportpartner, zonder het woord exclusief.
- Er staat niet "fabricado en Alemania": die claim staat niet op de pagina's van de fabrikant.
- De pagina staat op noindex.
