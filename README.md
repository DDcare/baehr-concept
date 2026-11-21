# BAEHR España, conceptsite

Ontwerpconcept voor de nieuwe winkel van BAEHR España (Proxy Beauty Spain, S.L., Barcelona), de officiële Spaanse distributeur van het Duitse merk BAEHR. Dit is een concept, niet de live site. De huidige site staat op baehr.com.es.

Gebouwd met Astro en three.js. De producten zijn 3D-modellen die in de code worden opgebouwd uit de omtrek en het etiket van de productfoto's van de fabrikant; er zijn geen externe 3D-bestanden.

## Commando's

```
npm install
npm run dev       # lokaal ontwikkelen
npm run build     # bouwen naar dist/
npm run preview   # de gebouwde versie lokaal bekijken
```

## Opbouw

- `src/pages/index.astro`: de home, met alle Spaanse teksten.
- `src/scripts/film.js`: de 3D-studio (licht, camera, de vijf stappen, de letters) en de koppeling met het scrollen.
- `src/scripts/productos.js`: de vijf verpakkingen en het sachet. `shapes.js` en `letras.js` zijn gegenereerd (zie `tools/`).
- `src/scripts/ui.js`: schakelaar professional of particulier, menu, voorbeeldformulier, verschijnen bij scrollen.
- `src/styles/site.css`: alle opmaak.
- `public/posters/`: stilstaande beelden voor bezoekers met "minder beweging" of zonder WebGL.
- `docs/merk-en-woordenlijst.md`: geverifieerde merkfeiten, Spaanse vakwoordenlijst met bronnen en regels voor cosmeticaclaims.
- `docs/eindredactie-home-es.md`: rapport van de Spaanse eindredactie, met Nederlandse terugvertaling per zin.
- `tools/`: schermopnamen en stilstaande beelden maken met Playwright; `texturas.py` maakt texturen en omtrekken uit de productfoto's, `letras.py` haalt de letteromtrekken uit het lettertype.
- `docs/redactie-protocolo-es.md` en `docs/eindredactie-protocolo-es.md`: Spaanse tekst van de productfilm met terugvertaling, en de onafhankelijke controle.
- `.claude/agents/`: de Spaanse schrijver en de Spaanse eindredacteur.

## Testen

De testbrowser heeft WebGL via software nodig. De scripts in `tools/` regelen dat.

```
npm run build && npm run preview
node tools/film-shots.cjs http://127.0.0.1:4321/ shots d 1440 900 0,0.3,0.56,0.84 1
node tools/film-shots.cjs http://127.0.0.1:4321/ shots m 390 844 0,0.3,0.56,0.84 2
node tools/static-check.cjs http://127.0.0.1:4321/ shots
node tools/posters.cjs http://127.0.0.1:4321/ public/posters   # na wijzigingen in de 3D
```

De getallen na de schermmaat zijn momenten in de productfilm, van 0 (bovenaan) tot 1 (einde).

## Stand op 21 november 2026 (avond)

De home is omgebouwd tot "het protocol in één shot": vijf stappen (voetbad, peeling, masker, crème, crèmeschuim), elk met één echt product, elk voor één grote letter. Aan het eind trekt de camera terug en vormen de vijf letters het woord BAEHR.

Getest in een testbrowser (WebGL via software) op 1920 bij 1080, 1440 bij 900, 1100 bij 720, 1024 bij 768, 820 bij 1180 en 390 bij 844. Nog niet getest op een echte telefoon, in Safari of op snelheid.

Nog te doen:

- De stilstaande beelden voor "minder beweging" opnieuw maken. `tools/posters.cjs` maakt nog de oude namen; de pagina verwacht `conjunto.webp` en `paso-1.webp` tot en met `paso-5.webp`. Tot dan toont die modus lege beelden.
- De laatste opmaakwijziging (menu op 1024 breed, titelbreedte op grote schermen) is gebouwd maar nog niet met een schermopname nagekeken.
- De aanbevolen (niet verplichte) punten uit `docs/eindredactie-protocolo-es.md` beoordelen.
- Productpagina en aanmeldpad voor professionals.

Bewust zo gekozen:

- De etiketten komen uit de productfoto's van de fabrikant (`tools/texturas.py`). Voor definitief gebruik zijn de officiële etiketbestanden of toestemming van de fabrikant nodig.
- De vijf letters komen uit het koplettertype van de site (`tools/letras.py`), in de stand van het logo.
- Er staat "distribuidor oficial" en niet "exclusivo": de fabrikant noemt Proxy Beauty Spain als exportpartner, zonder het woord exclusief.
- Er staat niet "fabricado en Alemania": die claim is alleen op het etiket van één product gezien.
- Bij de peeling staat "Con sal marina": op de pot staat "mit Meersalz", een kenmerkveld van de fabrikant noemt de Dode Zee. Navragen bij de klant.
- De pagina staat op noindex.
