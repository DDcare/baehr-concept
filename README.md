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

- `src/layouts/Base.astro`: kop, voet en gegevens die op elke pagina staan.
- `src/pages/index.astro`: de home met de productfilm en de rij met de vijf producten.
- `src/pages/productos/crema-en-espuma-orange-lemongras.astro`: voorbeeld van een productpagina, met een 3D-model om rond te draaien (`src/scripts/visor.js`).
- `src/pages/la-marca.astro`: de merkpagina.
- `src/pages/tienda.astro`: de winkel met filter per productsoort (ook via de adresregel, bijvoorbeeld `/tienda/?tipo=crema`).
- `src/pages/profesionales.astro`: voordelen, demo van snel bestellen, aanmelden of inloggen (`/profesionales/#acceso` opent inloggen), FAQ.
- `src/pages/contacto.astro` en `src/pages/404.astro`.
- `src/pages/mi-cuenta.astro`: demo van de professionele account (het B2B-portaal): eigen pas met de naam uit het aanmeldformulier, laatste bestelling herhalen, bestelgeschiedenis, facturen, gegevens. Voorbeeldgegevens, geen prijzen. Inloggen op `/profesionales/#acceso` leidt hierheen.
- `src/components/Alta.astro`: het aanmeldformulier met de professionele pas (home en professionals).
- `src/data/productos.ts`: de zes producten van het concept; `src/scripts/cart.js`: de cesta (schuiflade, bewaard in de browser).
- Links naar een stap in de film vanaf andere pagina's: `/#protocolo` of `/#paso-1` tot en met `/#paso-5`.
- `src/scripts/film.js`: de 3D-studio (licht, camera, de vijf stappen, de letters) en de koppeling met het scrollen.
- `src/scripts/productos.js`: de vijf verpakkingen en het sachet. `shapes.js` en `letras.js` zijn gegenereerd (zie `tools/`).
- `src/scripts/ui.js`: schakelaar professional of particulier, menu, voorbeeldformulier, verschijnen bij scrollen.
- `src/styles/site.css`: alle opmaak.
- `public/posters/`: stilstaande beelden voor bezoekers met "minder beweging" of zonder WebGL (`tools/posters.cjs`).
- `public/img/productos/`: productfoto's met doorzichtige achtergrond, gemaakt uit de foto's van de fabrikant.
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
node tools/overflow-check.cjs http://127.0.0.1:4321   # koppen en tekst die niet in hun vak passen
node tools/posters.cjs http://127.0.0.1:4321/ public/posters   # na wijzigingen in de 3D
python3 -I tools/fuentes.py           # lettertypes opnieuw maken (alleen onze tekens en gewichten)
python3 -I tools/fuentes.py --check   # na een build: staan alle tekens van de site in de lettertypes?
```

De getallen na de schermmaat zijn momenten in de productfilm, van 0 (bovenaan) tot 1 (einde).

## Stand op 22 november 2026

Werk op de tak `ontwerp`; `main` (de openbare link) toont nog de versie van 21-11 laat en wordt pas bijgewerkt met akkoord van D.

Aanleiding: D vond de tweede versie te groot en lomp, de 3D nog iets te langzaam, en twijfelde of een klant afhaakt als hij door de hele film moet scrollen.

Ontwerp:

- Eén letterschaal. Koppen blijven breed en zwaar (zoals het logo) maar zijn ruim de helft kleiner; lijnen 1px; inhoud hooguit 82rem breed; pagina's in een vast raster van twee kolommen (titel links, inhoud rechts).
- Wit palet (`#f5f5f3`) in plaats van warm beige, en de zilveren etiketband van de verpakking voor feiten, cijfers en de schakelaar Profesional of Particular.
- De lijst Activos clave is een compacte tabel in plaats van reuzenletters.
- Voetregel: het paginabrede woord is vervangen door vijf kleine omlijnde letters. Elke letter is een stap van het protocol (naam verschijnt bij aanwijzen, klik gaat naar de stap), net als in de film.
- Slotbeeld op telefoon en tablet: tekst en het woord BAEHR staan als één groep in het midden.

Film:

- Sneller: geen schaduwkaart meer (alleen contactschaduwen), vloer zonder lichtberekening per pixel, spiegelbeelden met onverlichte materialen, koepel en gloed in één laag. Gemeten in de testbrowser zonder grafische kaart, direct na elkaar op 1440 bij 900: 350, 268, 232 en 305 ms per beeld op de momenten 0,2, 0,33, 0,5 en 0,82, tegen 657, 573, 398 en 582 ms voor de versie van 21-11 laat. Dat is 42 tot 52 procent minder. Niet gemeten op een echte laptop of telefoon.
- Eén klik speelt alles af: "Ver el protocolo" en het menu-item Protocolo spelen de film in 27 seconden af; elke scroll, aanraking of toets stopt hem.
- Overslaan: de link "Saltar la animación" (op telefoon "Saltar") springt naar wat na de film komt.
- Korter: 660vh in plaats van 820vh (een vijfde minder scrollen), en de camera volgt het scrollen strakker.

Gecontroleerd op deze versie: passen van koppen en tekst op 360, 390, 820, 1024 en 1440 breed (`tools/overflow-check.cjs`, geen meldingen), axe-core op alle pagina's (geen fouten), afspelen, stoppen en overslaan van de film, de versie met "minder beweging". Spaanse eindredactie van de nieuwe teksten: `docs/eindredactie-film-es.md` (geen verplichte wijzigingen).

Lichter gemaakt (22-11 avond, op verzoek van D). Gemeten op de lokale build, tekstbestanden met brotli:

- Etiketten voor de 3D: 669 kB naar 288 kB, opnieuw gemaakt uit de bronfoto's op kleinere maat (`tools/texturas.py`). Op 1440 bij 900 is geen verschil in scherpte te zien.
- Lettertypes: 151 kB naar 82 kB. Archivo houdt beide assen maar alleen onze tekens (63 kB), Newsreader cursief is één vast gewicht (19 kB). Eigen bestanden in `src/fonts/`, gemaakt met `tools/fuentes.py`; Archivo wordt vooraf geladen. Komt er tekst bij met een nieuw teken, draai dan de controle.
- three.js: 147 kB naar 121 kB. De viewer van de productpagina haalde de hele bibliotheek dynamisch binnen, waardoor niets weggelaten kon worden; hij importeert nu alleen wat hij gebruikt (`src/scripts/tres.js`).
- Stilstaande beelden: iets lagere kwaliteit, het eerste beeld van de home 64 kB naar 46 kB.
- Home in totaal ongeveer 1.060 kB naar 570 kB.
- Productpagina: de 3D start niet meer met de pagina. three.js wordt pas gehaald als de pagina geladen en de browser in rust is, of zodra iemand de viewer aanraakt. Met databesparing of een trage verbinding alleen bij aanraken. Voor het eerste beeld is nu ongeveer 140 kB nodig.

Besluit van D (22-11 avond): 3D alleen op de home, geen 3D op productpagina's en niet als optie in het voorstel. Voor de bouw in Shopify: zo weinig mogelijk apps en een vast budget per pagina (bijvoorbeeld hooguit 1 MB en een LCP onder 2,5 seconden op een telefoon).

Open:

- Oordeel van D over deze versie, en akkoord om hem op `main` te zetten.
- Blijft de 3D-viewer op de voorbeeldproductpagina staan nu de optie vervalt?
- Snelheid op de laptop en telefoon van D, en een test in Safari.
- Het onderzoek naar sites van bekende merken (opdracht van 21-11) is niet gedaan; alleen skincomplete.eu is bekeken.
- De open punten voor de klant van 21-11 hieronder gelden nog (prijzen, termijn voor aanmeldingen, privacytekst, officiële etiketbestanden).

## Stand op 21 november 2026, laat

Werk op de tak `ontwerp`; `main` is de openbare link en blijft staan tot D akkoord geeft.

Nieuw in deze ronde:

- Snelheid: schaduwen met PCF in plaats van VSM (VSM tekende elke frame ook de hele vloer in de schaduwkaart), lichtere letters en goedkope reflecties van de letters, CSS-variabelen alleen schrijven als ze veranderen, geen korrel of wazige achtergrond over het 3D-beeld, resolutie hooguit 1,5 en zakt vanzelf als het apparaat het niet bijhoudt, 30 beelden per seconde in rust, film korter (820vh). Op de productpagina laadt three.js pas als de viewer in beeld komt.
- Mobiel: de camera draait minder zodat de letters recht staan, het slotbeeld toont het woord van voren, feiten en stappen staan in rechte lijsten.
- Merkelementen: de ribbelrand als zegel boven elk blok, letters die uitrekken (breedte-as van Archivo), een professionele pas die meeschrijft in het aanmeldformulier, een groot BAEHR onderaan dat uitrekt, zachte overgangen tussen pagina's, een deelafbeelding (`public/og.jpg`).
- Pagina's: home, productpagina met 3D-viewer, merkpagina, winkel, professionals, accountdemo, contact, 404, en een cesta die op elke pagina werkt.
- Trage apparaten: de film schaalt zichzelf terug als hij het niet bijhoudt (mediaan over 30 beelden): eerst de resolutie tot 0,75, dan de spiegelingen in de vloer, dan de schaduwen. Alle shaders worden bij het laden vooraf gecompileerd, zodat er geen hapering is bij aankomst in een nieuwe stap.
- Snelheid gemeten (testbrowser zonder grafische kaart, zelfde resolutie): de film is per beeld 2,1 tot 3 keer sneller dan de versie van 21-11 middag.
- Gecontroleerd: koppen en tekst passen op 360, 390, 820, 1024 en 1440 breed (`tools/overflow-check.cjs`), alle interne links bestaan, toegankelijkheid met axe-core.

Open voor de ontwerpronde van morgen:

- Het slotbeeld op de telefoon is recht maar klein (22-11: tekst en woord staan nu als één groep; het woord zelf blijft klein omdat het in de breedte moet passen).
- De 3D kan eliter (D, 21-11); ontwerp alleen op Fable.
- Spaanse eindredactie van winkel, professionals, contact, cesta en 404 (zie `docs/`).
- Prijzen ontbreken bewust: die staan niet in de bron.
- Termijn voor de controle van een professionele aanmelding: bewust weggelaten, want de klant heeft geen termijn genoemd. Een vaste belofte (bijvoorbeeld binnen één werkdag) werkt sterk voor conversie: voorleggen aan de klant en dan terugzetten op home, professionals en in het formulier.
- Woordkeus winkelmand: overal "cesta" (El Corte Inglés, Fresco Podología); grote beautywinkels zeggen "carrito". Beide goed; niet mengen.
- Toegankelijkheid (axe-core, WCAG 2.1 A en AA, alle pagina's): geen fouten, op één na. Het grote BAEHR in de voet haalt het contrast niet (2,3 tegen 3,0). Dat is bewust: WCAG stelt geen contrasteis aan een logo of merknaam, en het element is verborgen voor schermlezers.
- Privacy: het vakje "He leído y acepto la política de privacidad" staat erin; de basisinformatie van de AEPD bij het formulier moet van de jurist van de klant komen.

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
