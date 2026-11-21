# BAEHR España, conceptsite

Ontwerpconcept voor de nieuwe winkel van BAEHR España. Techniek, commando's en opbouw staan in `README.md`.

## Afspraken

- Met D in het Nederlands, kort en kritisch. Feit, aanname en oordeel apart.
- Niets publiceren, versturen of openbaar zetten zonder akkoord van D. De preview op Vercel blijft afgeschermd tot D anders zegt.
- Niets ophalen van baehr.com.es: de site zit achter een botfilter. Werk met schermafbeeldingen van D.
- Na elk afgerond onderdeel committen. Geen node_modules of buildmappen in git.

## Teksten

- De site is in het Spaans van Spanje, in de tú-vorm. Schrijf direct in het Spaans, niet vertaald.
- Elke nieuwe of gewijzigde tekst gaat langs de agents `redactor-es` (schrijven) en `corrector-es` (onafhankelijk nalezen). D leest geen Spaans, dus lever elke tekst met een Nederlandse terugvertaling.
- Feiten alleen uit `docs/merk-en-woordenlijst.md`. Wat daar "niet geverifieerd" heet, komt niet op de site.
- Cosmeticaclaims: niets therapeutisch of medisch, en niet meer beloven dan de Duitse tekst van de fabrikant. De regels en de lijst met te vermijden woorden staan in deel C van hetzelfde document.
- Percentages met lidwoord en harde spatie: "con un 10 % de urea".

## Ontwerp

- Eén vormtaal: de capsule (van tube en bus) en de ribbel (van de dichtgeknepen tuberand). Geen andere vormen.
- Lettertypes: Archivo Variable (breed en zwaar voor koppen) en Newsreader cursief voor accenten. Geen andere.
- Kleuren: BAEHR-rood `#A60D1C`, inkt `#18181A`, papier `#F2EEE7`, wit. De 3D-studio is dieper rood.
- Geen decoratieve nummering, geen labels boven koppen, geen pijltjes in knoppen, geen stockfoto's en geen gegenereerde mensen.
- Titels breken niet midden in een woord af en eindigen niet op één los woord.
- Controleer elke wijziging op desktop, tablet en telefoon, en ook de versie met "minder beweging".

## 3D

- De productfilm zit in `src/scripts/film.js`. Het scrollen stuurt één waarde van 0 tot 1; camera en producten volgen vaste standen per moment.
- Beweging testen met Playwright en `reducedMotion: 'no-preference'`. De testbrowser rendert langzaam; wacht ruim voor een schermopname.
- Na wijzigingen in de 3D de stilstaande beelden opnieuw maken met `tools/posters.cjs`.

## Oordeel van D over de eerste versie (21 november 2026)

- Letterlijk: "voor 1e ontwerp oke, maar ben niet helemaal content", "ziet er te simpel basic uit", "ik wil elite, uniek, eigen identiteit, speels maar professioneel".
- De site reageert traag op zijn laptop. Eerst de snelheid oplossen, dan pas meer effecten toevoegen.
- Verdeling van D: ontwerp en 3D alleen op Fable, Opus alleen voor tekst (het voorstel in het Spaans en Engels).
- Voorstel van Claude, nog niet bevestigd door D: de volgende ontwerpronde begint met twee of drie stijlbeelden van één stap waaruit D kiest, daarna pas de hele film ombouwen.
