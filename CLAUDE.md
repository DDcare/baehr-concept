# BAEHR España, conceptsite

Ontwerpconcept voor de nieuwe winkel van BAEHR España. Techniek, commando's en opbouw staan in `README.md`.

## Afspraken

- Met D in het Nederlands, kort en kritisch. Feit, aanname en oordeel apart.
- Niets publiceren, versturen of openbaar zetten zonder akkoord van D. De openbare link baehr-concept.vercel.app toont `main` (openbaar met akkoord van D, 21-11; nieuwe versie erop met akkoord, 22-11). Werk op de tak `ontwerp` (preview achter de Vercel-login) en zet het pas op `main` met akkoord van D per keer.
- Niets ophalen van baehr.com.es: de site zit achter een botfilter. Werk met schermafbeeldingen van D.
- Na elk afgerond onderdeel committen. Geen node_modules of buildmappen in git.

## Teksten

- De site is in het Spaans van Spanje, in de tú-vorm. Schrijf direct in het Spaans, niet vertaald.
- Elke nieuwe of gewijzigde tekst gaat langs de agents `redactor-es` (schrijven) en `corrector-es` (onafhankelijk nalezen). D leest geen Spaans, dus lever elke tekst met een Nederlandse terugvertaling.
- Feiten alleen uit `docs/merk-en-woordenlijst.md`. Wat daar "niet geverifieerd" heet, komt niet op de site.
- Cosmeticaclaims: niets therapeutisch of medisch, en niet meer beloven dan de Duitse tekst van de fabrikant. De regels en de lijst met te vermijden woorden staan in deel C van hetzelfde document.
- Percentages met lidwoord en harde spatie: "con un 10 % de urea".
- Eis van D (21-11): het Spaans moet lezen alsof een Spaans SEO-bureau het schreef, nooit vertaald. Knoppen, categorieën, verzendregels en paginatitels volgen de vormen van grote Spaanse beautywinkels; de referentielijst met bronnen staat in `docs/es-referencias-tiendas.md`. Een fout in het Spaans kost de klant.

## Ontwerp

- Eén vormtaal: de capsule (van tube en bus) en de ribbel (van de dichtgeknepen tuberand). Geen andere vormen.
- Lettertypes: Archivo Variable (breed en zwaar voor koppen) en Newsreader cursief voor accenten. Geen andere.
- Koppen zijn breed en zwaar maar klein: één letterschaal via de tokens `--fs-hero`, `--fs-page`, `--fs-h2`, `--fs-h3` en `--fs-lead` in `src/styles/site.css`. Geen kop groter dan de hero (hooguit 4,6rem), geen losse lettergroottes ernaast. Lijnen zijn 1px.
- Kleuren: BAEHR-rood `#A60D1C`, inkt `#18181A`, papier `#F5F5F3` (helder wit zoals de verpakking, geen warm beige) en de zilveren band `--silver` (de etiketband van tube en bus) voor feiten, cijfers en de schakelaar in de kop. De 3D-studio is dieper rood.
- Het woordmerk onderaan is klein: vijf omlijnde letters over de breedte, elke letter leidt naar zijn stap in het protocol. Niet terug naar een paginabreed gevuld woord (D, 22-11: "groot lomp").
- Geen decoratieve nummering, geen labels boven koppen, geen pijltjes in knoppen, geen stockfoto's en geen gegenereerde mensen.
- Titels breken niet midden in een woord af en eindigen niet op één los woord.
- Controleer elke wijziging op desktop, tablet en telefoon, en ook de versie met "minder beweging".

## Besluiten van D over snelheid en 3D (22 november 2026, avond)

- 3D alleen op de home. Geen 3D op productpagina's, ook niet als betaalde optie, en het komt niet in het voorstel (elke 3D-pagina kost ongeveer 200 kB aan three.js plus model en etiket).
- Onthouden voor de bouw: het grootste snelheidsrisico zit straks in Shopify (eigen scripts en vooral apps). Zo weinig mogelijk apps en een vast budget per pagina, bijvoorbeeld hooguit 1 MB en een LCP onder 2,5 seconden op een telefoon.
- Home lichter: gedaan op 22-11 (etiketten 669 naar 288 kB, lettertypes 151 naar 82 kB, three.js 147 naar 121 kB). De lettertypes bevatten alleen onze tekens: draai na nieuwe tekst `python3 -I tools/fuentes.py --check` op de build. Newsreader bestaat alleen cursief in gewicht 400: gebruik het accentlettertype nooit vet.
- De 3D-viewer op de voorbeeldproductpagina start pas als de pagina geladen is of bij aanraken (gedaan 22-11). Open: of die viewer in het concept blijft nu de optie vervalt (voorstel van Claude: vervangen door stilstaande studiobeelden; nog niet bevestigd door D).

## 3D

- De productfilm zit in `src/scripts/film.js`. Het scrollen stuurt één waarde van 0 tot 1; camera en producten volgen vaste standen per moment.
- Beweging testen met Playwright en `reducedMotion: 'no-preference'`. De testbrowser rendert langzaam; wacht ruim voor een schermopname.
- Na wijzigingen in de 3D de stilstaande beelden opnieuw maken met `tools/posters.cjs`.

## Oordeel van D over de eerste versie (21 november 2026)

- Letterlijk: "voor 1e ontwerp oke, maar ben niet helemaal content", "ziet er te simpel basic uit", "ik wil elite, uniek, eigen identiteit, speels maar professioneel".
- De site reageert traag op zijn laptop. Eerst de snelheid oplossen, dan pas meer effecten toevoegen.
- Verdeling van D: ontwerp en 3D in principe op Fable. Op 21-11 's avonds liet D Opus wel aan de site werken (snelheid, mobiel, nieuwe pagina's, merkelementen); de laatste ontwerpronde doet Fable. Het voorstel in het Spaans en Engels volgt op 22-11.
- Voorstel van Claude, nog niet bevestigd door D: de volgende ontwerpronde begint met twee of drie stijlbeelden van één stap waaruit D kiest, daarna pas de hele film ombouwen.
- Lat voor "elite" volgens D (21-11): skincomplete.eu, een eigen site van het bureau. De nieuwe site mag daar niet op lijken. Bekijk die site aan het begin van de volgende ontwerpronde om het niveau te begrijpen, en kies bewust een andere vormtaal.

## Oordeel van D over de tweede versie (22 november 2026)

- Letterlijk: "ik vind dit te groot" (de lijst Activos clave op de productpagina), "meerdere dingen op site zijn nog beetje lomp", "3d is nog steeds een klein beetje langzaam ziet er wel geweldig uit op de homepage", "In footer hoe baehr komt is niet verkeerd maar oogt ook zo groot lomp".
- Twijfel van D: haakt een klant af als hij door de hele film moet scrollen, of is dat juist het wow-effect?
- Opdracht: kritisch naar het ontwerp kijken en het echt passend bij het merk maken. De 3D op de home blijft.
- Verwerkt op 22-11 op de tak `ontwerp` (D heeft deze versie nog niet beoordeeld en hij staat nog niet op `main`): koppen ruim de helft kleiner, wit palet met zilveren band, voetregel klein, schakelaar in de kop licht, film 42 tot 52 procent minder rekentijd per beeld (testbrowser), één klik speelt de film af, een link slaat hem over, de film is korter (660vh).
- Antwoord van Claude op de twijfel (oordeel, geen meting): de film is een wow bij het eerste bezoek en wrijving voor een terugkerende koper. Daarom kort, over te slaan en nooit verplicht. Bij een echte lancering scrolldiepte en klikken op "Saltar la animación" meten en daarna beslissen.
