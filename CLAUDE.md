# BAEHR España, conceptsite

Ontwerpconcept voor de nieuwe winkel van BAEHR España. Techniek, commando's en opbouw staan in `README.md`.

## Afspraken

- Met D in het Nederlands, kort en kritisch. Feit, aanname en oordeel apart.
- Niets publiceren, versturen of openbaar zetten zonder akkoord van D. De openbare link baehr-concept.vercel.app toont `main` (openbaar met akkoord van D, 21-11; nieuwe versie erop met akkoord, 22-11; de derde ronde erop met akkoord, 22-11 avond; de vierde ronde met productpagina's, protocolpagina en nieuwe merkpagina erop met akkoord, 22-11 laat; de telefoonfix en de vollere home erop met akkoord, 22-11 laat; de vloeiende film en de telefoonlijst erop met akkoord, 23-11; de etalage, de vloeiendere beweging en de telefoonfixes erop met akkoord, 23-11). Werk op de tak `ontwerp` (preview achter de Vercel-login) en zet het pas op `main` met akkoord van D per keer.
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
- Geen rechthoekige blokken (D, 22-11: "geen vierkante blokken"). Elk groot blok is een hele capsule (`.dark`, `.quick`, `.proto`, `.cta`, `.statement`). Kleine kaarten hebben hoeken van 2 tot 3,2rem. Het aanmeldformulier staat zonder witte kaart direct op de capsule. Nooit meer een blok met één rond uiteinde en een geribbelde rand aan het andere: D keurde die tubevorm op 22-11 af ("lijkt op een condoom").
- Eén beeldwereld: buiten de film komen de beelden ook uit de rode 3D-studio (`public/img/estudio/`, maken met `node tools/retratos.cjs <url> public/img/estudio tools/retratos.json`). Productrijen, het merkblok en de galerij van de productpagina gebruiken ze. In de winkel is de productfoto het eerste beeld en verschijnt het studiobeeld bij aanwijzen.
- Geen lopende tekstband (marquee): D noemde die op 23-11 "ai slop". Geen clichés die elke site heeft.
- De home is kort en geen stapel blokken (D, 23-11: "1 lap onder elkaar", "niks unieks, elite, signature"). Na de film staat één eigen onderdeel, de etalage (`.vitrina`): het slotbeeld van de film met de vijf producten op de letters, met per product een aanwijspunt en eronder een zilveren band waarin je dat product bestelt. Daarna het aanmeldblok, de seminarregel en het merkblok. De zes merken staan op de merkpagina, niet op de home. Op de telefoon is er geen etalage maar een lijst van de vijf producten in een donker blok.
- Geen decoratieve nummering, geen labels boven koppen, geen pijltjes in knoppen, geen stockfoto's en geen gegenereerde mensen.
- Titels breken niet midden in een woord af en eindigen niet op één los woord.
- Controleer elke wijziging op desktop, tablet en telefoon, en ook de versie met "minder beweging".

## Besluiten van D over snelheid en 3D (22 november 2026, avond)

- 3D alleen op de home. Geen 3D op productpagina's, ook niet als betaalde optie, en het komt niet in het voorstel (elke 3D-pagina kost ongeveer 200 kB aan three.js plus model en etiket).
- Onthouden voor de bouw: het grootste snelheidsrisico zit straks in Shopify (eigen scripts en vooral apps). Zo weinig mogelijk apps en een vast budget per pagina, bijvoorbeeld hooguit 1 MB en een LCP onder 2,5 seconden op een telefoon.
- Home lichter: gedaan op 22-11 (etiketten 669 naar 288 kB, lettertypes 151 naar 82 kB, three.js 147 naar 121 kB). De lettertypes bevatten alleen onze tekens: draai na nieuwe tekst `python3 -I tools/fuentes.py --check` op de build. Newsreader bestaat alleen cursief in gewicht 400: gebruik het accentlettertype nooit vet.
- De 3D-viewer op de voorbeeldproductpagina is vervangen door een galerij van drie beelden (studio, productfoto, textuur), met akkoord van D op 22-11. De productpagina laadt geen three.js meer.

## 3D

- De productfilm zit in `src/scripts/film.js`. Het scrollen stuurt één waarde van 0 tot 1; camera en producten volgen vaste standen per moment.
- Beweging testen met Playwright en `reducedMotion: 'no-preference'`. De testbrowser rendert langzaam; wacht ruim voor een schermopname.
- Na wijzigingen in de 3D de stilstaande beelden opnieuw maken met `tools/posters.cjs`.
- Test de home ook op een laag telefoonvenster (bijvoorbeeld 393 bij 660): Safari op de iPhone houdt minder hoogte over dan de testbrowser. D zag op 22-11 op zijn iPhone de capsule over de knoppen vallen; de capsule begint sindsdien onder de gemeten onderkant van de knoppen (`fitHero` in `film.js`).
- Vloeiendheid op de telefoon (D, 23-11: "het stottert" op een iPhone 16 Pro). De 3D zelf is licht (hooguit 88 tekenopdrachten, rekentijd onder 0,5 ms per beeld). Wat stotteren gaf en nooit terug mag komen: een `clip-path` op het canvas terwijl het schermvullend is (nu weg via de klasse `is-open`), bij stilstaan maar de helft van de beelden tekenen, het canvas opnieuw opbouwen bij elke resize-melding (Safari stuurt die als de adresbalk beweegt), en per beeld de indeling van de pagina uitlezen. Zwakke Android-telefoons (`MODEST`) starten meteen op lagere kwaliteit. Niet op een echt toestel getest door Claude: D controleert op zijn iPhone.
- Beweging (23-11, na "nog steeds niet helemaal soepel" op telefoon en laptop): de film volgt het scrollen met een kritisch gedempte veer (`SPRING`), en de camera loopt in één doorgaande lijn langs de standen (monotone kubische interpolatie in `shotAt`). Eerder startte en stopte de camera bij elke stand en nam hij elke hapering van het scrollen over. Niet terug naar een eased overgang per stuk.
- Vangnet: een toestel dat bij de start ook op de laagste kwaliteit onder 25 beelden per seconde blijft, krijgt de stilstaande versie (`goStatic`). Op grote schermen tekent de film nooit meer dan ongeveer 2,3 miljoen pixels.
- De film heeft een maximumsnelheid (`MAX_SPEED`): na een snelle veeg loopt de camera stap voor stap door in plaats van te springen. Op staande schermen is de film 660vh, op liggende 520vh.

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

## Derde ronde (22 november 2026, avond), akkoord van D op het voorstel

- Letterlijk van D: "Het moet allemaal uniek strak elite zijn, eigen identiteit speels maar professioneel geen vierkante blokken", "Ze moeten morgen flabbergasted zijn van de site". Kopen tijdens de film moet kunnen; de productpagina op telefoon moest gefixt.
- Gebouwd op `ontwerp` en met akkoord van D op 22-11 's avonds ook op `main` gezet (de openbare link): studiobeelden door de hele site, tubevormige blokken, productpagina met galerij en een koopbalk die op telefoon meteen zichtbaar is en bij de voet verdwijnt, film van 520vh met een vaste knop "Añadir a la cesta" die het product van de getoonde stap in de cesta legt.
- Onderzoek en voorstel: `docs/onderzoek-sites.md`. Overdracht voor het vervolg op een ander model: `docs/OVERDRACHT.md`.

## Oordeel van D over de derde ronde (22 november 2026, laat) en wat daarop is gedaan

- Letterlijk: de tubeblokken "lijkt op een condoom"; "waarom is die H zwart" (letter in de voet); "Voor SEO/GEO moet de productpagina toch uitgebreider?"; alle vijf producten moeten naar een productpagina in plaats van naar de film; "Over het merk pagina nu is veel te basic en saai"; "ik snap niet waar protocolo bovenaan in het menu heen lijdt".
- Gedaan op `ontwerp`: blokken zijn hele capsules; de voetletters hebben een vaste kleur, ook als bezochte link; vijf productpagina's uit één sjabloon (`src/pages/productos/[slug].astro`, inhoud in `src/data/fichas.json`) met beschrijving, werkstoffen, gebruik waar de bron het noemt, vragen en structured data; een eigen pagina `/protocolo/` waar het menu naartoe gaat; de merkpagina is herontworpen.
- D wilde eerst zijn CRO-skill laten kijken, maar gaf op 22-11 laat toch opdracht de laatste versie op de openbare link te zetten (gedaan). De CRO-skill staat alleen op zijn eigen computer en is vanuit een cloudsessie niet te bereiken; D kan de tekst plakken, dan komt hij in het project.
- De GitHub-repo stond op 22-11 op openbaar. D wil dat mensen alleen de site kunnen zien: hij moet de repo zelf op privé zetten (Claude kan de zichtbaarheid niet wijzigen). Zet tot dat gebeurd is niets vertrouwelijks extra in de repo.
- Open vraag van D: welke rij hoort op de home van de echte winkel (categorieën, bestsellers of de vijf van het protocol). Advies van Claude staat in `docs/OVERDRACHT.md`.
- D op 22-11 laat: "Home oogt nog steeds kaal basic". Daarop is de home na de film voller gemaakt (lopende zilveren band, de vijf producten als donker blok met de capsules boven de rand, zes merken als gekleurde capsules, seminar op zilver). De eerste schermhoogte is niet veranderd; D heeft nog niet gezegd of hij die ook kaal vindt.
- D op 23-11: de film stottert op zijn iPhone 16 Pro, het productblok op de telefoon "ziet er raar uit en is niet gecentreerd", de site blijft "heel basic en mwah". Hij legt de klant uit dat het een concept is en wil snel door naar het voorstel: dus alles vloeiend en recht, geen nieuwe onderdelen. Gedaan: de oorzaken van het stotteren verwijderd (zie 3D), het productblok op de telefoon als nette lijst.
- D op 23-11, later: de film is "nog steeds niet helemaal soepel" op telefoon en laptop (daarna: veer en doorgaand camerapad, zie 3D); de lopende zilveren band is "ai slop"; de home is "1 lap onder elkaar" zonder iets unieks. Daarop: band weg, home ingekort, etalage in plaats van de stapel blokken. D wil vandaag door naar het voorstel en kunnen waarmaken wat hij presenteert.
- D op 23-11 over de telefoon, met schermafbeeldingen: het merkblok op de home ("Una marca alemana con oficio" met het brede beeld, de tekst en de zilveren cijfers) en de lijst van de vijf producten in het donkere blok zijn "oke". Die twee dus niet meer veranderen. Het merkblok was in de ronde daarvoor van de home gehaald en is teruggezet; op brede schermen heeft het een eigen beeld in perspectief (`baehr-lado.webp`), omdat de etalage daar het beeld van voren al toont.
- D op 23-11 over de telefoon: de zes gestapelde merkcapsules en het seminarblok "zien er niet uit". Daarop: de zes merken zijn op de telefoon een lijst met lijnen (ze staan alleen nog op de merkpagina), het seminarblok is compact (kleine datumcapsule links, tekst rechts, knop op eigen maat). Op de telefoon geen grote gestapelde capsules of knoppen over de volle breedte meer.
