# Notas: scrollgestuurde productfilm, vergelijking met referenties (groep d)

Gemeten op 22-11-2026 met sitio.cjs (desktop 1440x900, telefoon 390x844) en een eigen aanvulling, `d/pinmeet.cjs`, die elke halve schermhoogte scrolt en kijkt welke grote elementen op dezelfde plek blijven staan (de lengte van een vastgezette scène). Alle paden hieronder zijn onder `/tmp/claude-0/-home-user/70b1906a-d9d5-5b32-9a85-0ea0d92fcb83/scratchpad/onderzoek/d/` tenzij anders vermeld; onze eigen beelden staan in `.../onderzoek/ours/`.

Voorbehoud vooraf: de testbrowser rendert WebGL via software, ik oordeel niet over snelheid. De meetmethode vindt alleen scènes die met `position: sticky` of vast staan; scènes die met transforms of scroll-hijacking werken kunnen ontbreken. Waar ik iets niet kon vaststellen staat "niet gezien".

## Per site

### Apple AirPods Pro 3
- URL: https://www.apple.com/es/airpods-pro/
- Techniek: video-scrub (`DIV.video-scrub-container` met `VIDEO#design`, geen canvas) en gewone video's; zichtbare video's 1260x680 tot 1728x912 op een 1440-scherm (op of boven schermresolutie). Op telefoon geen zichtbare video gemeten, maar de scène (ring "Lo nunca oído") staat er wel: niet vastgesteld of het video of beeld is.
- Lengte: hele pagina 30,8 schermhoogtes (telefoon 28,9). Eén vastgezette scène gemeten: `sticky-element`, ouder 2,5 schermhoogtes, 1,5 daarvan aantoonbaar stilstaand. Overige hoofdstukken scrollen gewoon. Andere vastgezette scènes niet gedetecteerd (dat sluit ze niet uit).
- Hoofdstukken: minstens vijf koppen van 96px/600 ("Lo nunca oído.", "Al compás de la ciencia.", "Solo para tus oídos.", "Nueva medición de frecuencia cardiaca.", "Protección Auditiva activa."), elk met één alinea van ongeveer 40 woorden eronder.
- Uitweg en regie: vaste lokale balk met Descripción / Especificaciones / Compara / Comprar (52px hoog, blijft staan, ook op telefoon). Carrousels hebben pauze-/afspeelknop en puntjes ("Más de cerca", "Lo principal"), plus link "Ver el vídeo". Geen "overslaan" van een scène: de scène is kort genoeg om dat niet nodig te hebben.
- Verkoop: al op het eerste scherm prijs en "Comprar" (249 €, blauwe knop rechtsonder, `airpods-d-0.jpg`); koopknop blijft in de vaste balk. Geen stap van verhaal naar bestellen: bestellen is altijd één klik weg.
- Beeld: wit tot zachtgrijs, product 50 tot 60 procent van het scherm, één grote zachte lichtbron, bijna geen schaduw, schone achtergrond; één kleuraccent per scène (de regenboogring). Dichtbij komen (het hulpstuk met gaas in beeld) maakt het materiaal voelbaar.
- Beelden: `airpods-d-hoja.jpg`, `airpods-d-0.jpg`, `airpods-d-4.jpg`, telefoon `airpods-m-hoja.jpg`.

### Apple iPhone (modelpagina)
- URL: https://www.apple.com/es/iphone-17-pro/ leidt door naar https://www.apple.com/es/iphone/ (overzichtspagina van alle modellen).
- Gemeten: geen vastgezette scène, geen canvas, geen video; pagina 11,7 schermhoogtes (telefoon 14,5). Dit is een keuzepagina met kaarten en prijzen, geen filmpagina: weinig bruikbaar voor onze vraag, wel een voorbeeld van "kaart met prijs en Comprar meteen". Beeld: `iphone-d-hoja.jpg`.

### Dyson
- URL geprobeerd: https://www.dyson.es/auriculares/dyson-ontrac gaf 404 (`dyson.json`, geen bruikbare opname). Daarna de startpagina https://www.dyson.es/ (`dyson2.json`): geen vastgezette scène, geen canvas of video gemeten, 5,4 schermhoogtes. Een Dyson-productpagina met scrollanimatie niet gezien.

### Oura
- URL: https://ouraring.com/ (leidt naar /es). 7,5 schermhoogtes (telefoon 9,6), geen vastgezette scène, geen canvas, geen video gemeten. Eerste scherm: beige, twee ringen op een zachte lichtband, kop 80px; een vaste kop van 90px met winkelwagen. Wat opvalt: de eerste kop was tijdens de opname nog in wazige animatie (`oura-d-hoja.jpg`, eerste vlak), de rest is een gewone verkooppagina met een app-showcase. Rust in compositie en één product per beeld zijn goed; geen scrollfilm.

### Nothing
- URL: https://nothing.tech/ . 10 schermhoogtes (telefoon 9), geen vastgezette scène, geen canvas, geen autoplay-video gemeten (een filmblok met afspeelknop stond onder in de pagina). Vaste gele aanbiedingsbalk bovenaan (100px) met navigatie, dus kopen blijft altijd bereikbaar. Beeld: productfoto's dominant en uitgesneden (hero: koptelefoon en oordopjes overvol in beeld), donkere sectie voor de Headphone (1) Pro met één lichtrand (`nothing-d-hoja.jpg`, derde vlak). Geen scrollscène om mee te vergelijken; wel goed voorbeeld van donker beeld met één lichtrand.

### teenage engineering
- URL: https://teenage.engineering/ . Pagina 5,8 schermhoogtes (telefoon 4,8). De vastgezette-scènemeting vond niets (`pin-teenage-d.txt`), geen canvas of video in beeld gemeten; toch ziet het eruit als een scroll-gestuurde productscène (EP/BC cd-speler): niet vastgesteld hoe die technisch werkt en hoe lang hij duurt.
- Beeld (wat wel te beoordelen is): bijna zwarte achtergrond, product schuin en heel dichtbij, een enkel accent (blauwe PLAY-toets, rode ledcijfers, oranje schuif), mat grijs tegen glanzend gespiegeld vlak. Tekst klein, techno-label stijl, prijs ("ONLY $329") in beeld in het hoofdstuk. Beelden: `teenage-d-hoja.jpg`, `teenage-d-4.jpg` (het sterkste beeld voor "duur zonder zware nabewerking").

### Polestar 3
- URL: https://www.polestar.com/es/polestar-3/ . Pagina 14,7 schermhoogtes. Eén vastgezette scène gemeten: 2,3 (desktop) tot 2,6 (telefoon) schermhoogtes, maar de cookiemuur (waar de tool niet doorheen klikte) staat over alle opnamen: de beelden zijn bruikbaar voor lay-out, niet voor beeldkwaliteit. Gemeten pinmeet op desktop vond alleen de cookiefilter, dus de scène is alleen via sitio gezien (`polestar.json`).
- Techniek: videoloops (1440x772 desktop, 390x752 portret op telefoon: aparte stafkopieën voor telefoon), geen canvas.
- Uitweg: vaste lokale balk met Performance / Interior / Tecnología / Seguridad / Especificaciones, "Test drive" en "Comprar" rechtsboven die blijven staan (`polestar-d-hoja.jpg`). Tekst: kleine regel (ongeveer 20px) links onder, lichte kleur, 2 tot 4 regels per hoofdstuk, geen knoppen in het beeld behalve "Test drive".
- Prijs staat in het tweede hoofdstuk ("desde 495 €/mes").

### Rhode
- URL: https://www.rhodeskin.com/ . 8,6 schermhoogtes, geen vastgezette scène, geen canvas; twee autoplay-loopvideo's (1375x810 en 1375x481), 199 afbeeldingen. Geen scrollfilm: een winkelpagina met productkaarten, prijzen en koop-knoppen in het eerste scherm (`rhode-d-hoja.jpg`). Voor ons vooral nuttig als tegenvoorbeeld (zie onder): de sfeer komt van mensen en lifestyle-beeld, dat wij niet hebben.

### SŌM (Awwwards Site of the Day, april 2026, 3D/WebGL/GSAP)
- URL: https://www.drinksom.eu/ (gevonden via Awwwards). 9 schermhoogtes, één canvas 640x854 (kleiner dan het scherm), geen vastgezette scène gemeten, vaste kop met "Shop SŌM Power". De landen- en cookiemelding stonden over alle opnamen (`som-d-hoja.jpg`): de 3D en de "Product Details Scroll Experience" waren niet te beoordelen. Het product (doos) in een gewoon blok met reviewscore en "Proceed to checkout" in beeld.

## Niet kunnen bekijken
- Cartier Watches & Wonders (https://www.cartier.com/en-fr/watchesandwonders): 403, botfilter. Genoteerd, niet omzeild.
- Oryzo (https://oryzo.ai/, Lusion): de testbrowser sloot tijdens het renderen (software-WebGL te zwaar), geen opname.
- Polestar en SŌM: cookie- of landenmelding over alle beelden; scrollscène wel gedeeltelijk gemeten, beeldkwaliteit niet te beoordelen.
- Dyson-productpagina: 404 op de geraden URL; alleen de startpagina gezien.
- ouraring.com, nothing.tech, teenage.engineering: geen 3D getoond of niet vast te stellen; ze zijn gebruikt voor beeld en opbouw, niet voor lengte.
- Geen bekroonde site gevonden die cosmetica of verzorging met scrollgestuurde 3D verkoopt (twee zoekopdrachten); de bekroonde voorbeelden (SŌM, Oryzo, Cartier) zijn voeding, fictief product en horloges.
- Geen enkele site toont zijn echte scrolgedrag in bewegende beelden: alles is afgeleid uit stilstaande opnamen en meetwaarden.

## Tabel

| Site | Scène (schermhoogtes) | Hoofdstukken | Afspelen / overslaan | Koopbalk tijdens scène | Telefoon |
|---|---|---|---|---|---|
| Apple AirPods Pro 3 | 2,5 (één vastgezette scène); hele pagina 30,8 | 5+ | pauze/afspelen op carrousels, geen overslaan | ja: vaste balk met "Comprar", prijs op eerste scherm | zelfde opbouw, kleiner (28,9), balk blijft |
| Apple iPhone | geen scène; pagina 11,7 | n.v.t. | n.v.t. | prijs en Comprar op kaarten | gewone kaarten |
| Dyson (alleen startpagina) | geen scène gezien | n.v.t. | n.v.t. | niet gezien | niet gezien |
| Oura | geen scène; pagina 7,5 | n.v.t. | n.v.t. | vaste kop met winkelwagen | gewone kolom, 9,6 |
| Nothing | geen scène; pagina 10 | n.v.t. | n.v.t. | ja: vaste gele balk | zelfde, 9 |
| teenage engineering | niet vastgesteld; pagina 5,8 | niet vastgesteld | niet gezien | prijs in beeld, geen vaste balk | 4,8, niet beoordeeld |
| Polestar 3 | 2,3 tot 2,6 (één scène); pagina 14,7 | 5 (vaste menu-ankers) | videoloops, geen bediening gezien | ja: vaste balk met Comprar en Test drive | eigen portretvideo's (390x752) |
| Rhode | geen scène; pagina 8,6 | n.v.t. | autoplay-lus | kopen op kaarten | 8,1 |
| SŌM | niet vast te stellen (melding over beeld); pagina 9 | niet gezien | niet gezien | vaste kop met Shop | niet beoordeeld |
| Onze film | 6,6 aaneengesloten | 5 + slotbeeld | één klik speelt af (27 s), "Saltar la animación" | alleen kop met Cesta; knop per stap naar productpagina, slotknop "Pedir los cinco productos" | zelfde film, tekstblok bovenin, "Saltar" klein onderin |

## Voorstellen, gerangschikt op effect

1. **Vaste actie tijdens de film.** Een kleine vaste knop/balk met "Pedir los cinco productos" (of de huidige stap toevoegen) naast Cesta, vanaf het eerste hoofdstuk. Referentie: `airpods-d-hoja.jpg` (balk met Comprar blijft staan), `polestar-d-hoja.jpg`. Moeite: klein. Snelheid: geen. Botst niet (geen pijltje in de knop, capsulevorm).
2. **Film inkorten van 6,6 naar ongeveer 5 schermhoogtes.** Per stap ongeveer 1 in plaats van 1,3, de afspeelversie blijft 27 s of korter. Referentie: de langste door mij gemeten vastgezette scène is 2,5 (`airpods-d-hoja.jpg`) en Polestar 2,3 tot 2,6 (`polestar-d-hoja.jpg`); wij zitten op 6,6 aaneengesloten. Het exacte aantal is mijn inschatting, geen meting. Moeite: klein (de waarde 660vh en de standen per moment). Snelheid: geen (licht: minder scrollrekenwerk). Botst niet.
3. **Eén grote zachte lichtbron en één accent per stap.** Een brede zachte lichtvlek op vloer en letters (gradiënttextuur, geen schaduwkaart) en een heldere rand op één product, zoals de ene hete lichtrand bij Nothing en de ene blauwe toets bij teenage engineering. Referentie: `teenage-d-4.jpg`, `nothing-d-hoja.jpg` (derde vlak), onze `home-film-0.48.png` blijft vlakker en rood-op-rood. Moeite: middel. Snelheid: licht. Botst niet met kleuren (de studio blijft diep rood).
4. **Eén dichtbij-moment.** In één stap (bijvoorbeeld de exfoliant met de zoutkorrels) de camera dicht bij etiket en rand, mat tegen glans, zodat het materiaal voelbaar wordt. Referentie: `teenage-d-4.jpg`, `airpods-d-hoja.jpg` (gaas in close-up). Moeite: middel (textuurresolutie voor dat ene product). Snelheid: licht. Botst niet.
5. **Tekstblok korter.** Nu kop, cursieve productnaam, zin, drie feiten en knop (zeven regels). Apple: kop plus één alinea; Polestar: 2 tot 4 regels. Voorstel: kop, naam, zin, één regel feiten ("Vegana · 125 ml") en knop. Referentie: `home-film-0.48.png` (links) tegenover `airpods-d-hoja.jpg`. Moeite: klein. Snelheid: geen. Botst niet (geen nummering, geen label boven koppen).
6. **Slotbeeld groter en rustiger.** Op `home-film-0.95.png` zijn de vijf producten klein onder de letters en de kop staat boven in lege ruimte. Voorstel: camera eindigt dichterbij op drie tot vijf producten, kop en knop dichter bij de producten. Referentie: `airpods-d-0.jpg` (product 60 procent van het scherm, kop eronder, prijs en knop). Moeite: middel. Snelheid: geen. Botst niet, maar de afspraak "BAEHR-woord klein" geldt alleen voor de voet.
7. **Telefoon korter of apart.** Telefoon op ongeveer 4 schermhoogtes, vergroot de knop "Saltar" (nu klein onderin, `home-film-m-0.33.png`) en laat de vaste actie uit voorstel 1 blijven. Referentie: Polestar levert eigen portretbeelden voor telefoon (390x752) en houdt de scène even lang (2,6); Apple houdt balk met Comprar vast (`airpods-m-hoja.jpg`). Moeite: middel. Snelheid: licht. Botst niet.
8. **Pauzeknop erbij.** Naast "Ver el protocolo" een pauze/afspeelknop in de indicator, zoals de carrousels van Apple (`airpods-d-hoja.jpg`, tweede en derde vlak). Moeite: klein. Snelheid: geen. Botst niet (capsulevorm, geen pijltje).

## Wat onze film al beter doet
- Eén product per scherm, groot, met één steunkleur (citrus) tegen een rustige achtergrond; Apple-pagina's en Nothing hebben meer rommel eromheen (kaartenrijen, banners). Zie `home-d-hoja.jpg`.
- Een indicator met de vijf stappen, een zichtbare overslaan-link en een knop die de film in 27 s afspeelt: dat is meer regie dan ik bij Apple, Polestar en Nothing zag (daar geen overslaan, alleen vaste menu-ankers en carrousel-pauze).
- Het eerste scherm is een gewone pagina die al verkoopt ("Darme de alta") en de film staat daaronder; en na de film volgt direct "Los cinco, de un vistazo", dus de stap van verhaal naar bestellen is klein (`home-d-hoja.jpg`).

## Wat we niet moeten overnemen
- Apple-koppen van 96px en een pagina van 30 schermhoogtes: breekt onze letterschaal (hero hooguit 73,6px) en onze snelheidswens.
- Teenage-stijl heel donker met piepkleine labels en schuine, bijna onleesbare tekst: past niet bij leesbare Spaanse verkoopteksten en bij onze lichte pagina.
- Rhode-stijl (mensen, lifestyle, video): wij hebben alleen packshots en 3D, geen gegenereerde mensen.
- Polestar-lichte tekst op wisselende achtergrond (slecht contrast) en een cookiemuur voor het beeld.

## Antwoord op de twijfel (geen meetgegevens over afhaken)
Wat de sites doen, niet wat bezoekers doen: de langste vastgezette scène die ik mat is 2,5 schermhoogtes (Apple) en 2,3 tot 2,6 (Polestar); alle andere geteste sites hebben geen aaneengesloten vastgezette scène en laten de bezoeker op gewone pagina's scrollen. Hun uitwegen zijn geen "overslaan", maar een vaste koopknop en vaste ankers naar onderdelen. Onze 6,6 aaneengesloten is dus 2,5 keer zo lang als wat deze sites durven, met een kleinere uitweg bij kopen. Mijn oordeel (geen feit): houd de film als wow, maak hem korter en geef de bezoeker tijdens de film een vaste koopactie en pauze. Dat past bij wat deze sites doen en kost de snelheid niets.
