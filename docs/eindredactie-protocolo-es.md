# Eindredactie Spaanse tekst, productfilm op de home (protocolo)

Datum: 21-11-2026. Beoordeeld: `src/pages/index.astro`, het blok `<section class="film">` (regels 93 tot en met 207 in de stand van vandaag). Zoek bij het doorvoeren op de exacte tekst, niet op regelnummer.

## Oordeel

- Kan dit zo naar de klant: ja, na wijzigingen.
- Taal: geen fouten in spelling, accenten, grammatica of leestekens; de tú-vorm is consequent; harde spaties en het percentage met lidwoord kloppen; de vakwoorden zijn gangbaar in Spanje.
- Twee labels bij de peeling moeten eerst anders: "Con sal del mar Muerto" (de pot in beeld en de omschrijving van de fabrikant zeggen zeezout) en "Probado dermatológicamente" (zonder vermelding van de test in strijd met deel C3).

## Werkwijze en voorbehoud

- Volgorde: eerst zelf de Spaanse tekst beoordeeld, daarna bronnen gezocht, en pas daarna `redactie-protocolo-es.md` gelezen.
- Getoetst aan `merk-en-woordenlijst.md` (deel A, de tabel van de vijf producten; deel B; deel C) en aan de verpakkingsbeelden die de film zelf gebruikt (`public/tex`).
- Er is niets gewijzigd behalve dit rapport. baehr.com.es is niet bezocht en was uitgesloten van de zoekopdrachten.
- Oordelen: goed is correct en natuurlijk. Kan beter is correct, maar kan duidelijker; optioneel. Fout moet worden aangepast: een taalfout, of een bewering die niet aan de feiten of aan de regels van het project voldoet.
- Voorbehoud: ik ben een AI-model op moedertaalniveau en geen menselijke moedertaalspreker. Webpagina's kon ik niet zelf openen: het zoekhulpmiddel vat pagina's samen en geeft citaten terug. Waar een oordeel daarop steunt, staat dat erbij.

## Tabel per tekstdeel

In de tabel staat de zichtbare tekst; waar in de code `&nbsp;` staat, staat hier een gewone spatie. De harde spaties in de code staan goed: vóór ml, % en €, en in de titels (zie punt h).

### Sectie en openingsscherm

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Sectie, aria-label | El protocolo, paso a paso | Het protocol, stap voor stap | goed | |
| Hoofdkop | Cosmética profesional para pies, manos y uñas | Professionele cosmetica voor voeten, handen en nagels | goed | Eerder beoordeeld. |
| Intro, beide standen | Marca alemana fundada en 1949. BAEHR España es su distribuidor oficial. | Duits merk, opgericht in 1949. BAEHR España is de officiële distributeur ervan. | goed | Eerder beoordeeld. De opmerking van toen blijft staan: "su distribuidor oficial" leest als de enige, en exclusiviteit is in deel A niet geverifieerd. |
| Intro, alleen professional | Date de alta y compra a precio profesional. | Meld je aan en koop tegen de professionele prijs. | goed | Het eerdere voorstel is overgenomen. |
| Intro, alleen particulier | Envío gratuito en pedidos a partir de 60 €. | Gratis verzending bij bestellingen vanaf 60 €. | goed | De harde spatie vóór het euroteken staat er nu. Het bedrag staat niet in deel A. |
| Knop, alleen professional | Darme de alta | Mij aanmelden | goed | |
| Knop, beide standen | Ver el protocolo | Het protocol bekijken | goed | Nieuw. Gewone knoptekst. |
| Knop, alleen particulier | Soy profesional | Ik ben professional | goed | |
| Alt-tekst openingsbeeld | Los cinco productos BAEHR del protocolo: frasco de baño de pies, tarro de exfoliante, caja de mascarillas, tubo de crema y bote de crema en espuma. | De vijf BAEHR-producten van het protocol: fles voetbad, pot scrub, doos maskers, tube crème en bus crèmeschuim. | goed | "Productos BAEHR" klopt als overkoepelende naam, zie punt g. Het beeld zelf bestaat nog niet, zie onderaan. |

### Stap 1, voetbad

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Titel | Baño de pies | Voetbad | goed | Term 10 uit de woordenlijst. |
| Productregel | SPA Wellness Fußbad, 500 ml | Productnaam van de fabrikant, 500 ml | goed | Komt overeen met deel A en met het etiket op de fles. |
| Zin | Limpia con suavidad y refresca los pies cansados. | Reinigt zacht en verfrist vermoeide voeten. | goed | Dekt "zur milden Reinigung und Erfrischung strapazierter Füße". Zie punt a. |
| Label | Con hibisco y loto | Met hibiscus en lotus | goed | "Wichtige Inhaltsstoffe: Hibiskus, Lotus". |
| Label | Vegano | Veganistisch | goed | Mannelijke vorm, past bij "el baño". "Vegan: Ja". |
| Label | De 5 a 10 ml por baño | 5 tot 10 ml per bad | goed | Zie punt f. |
| Knop | Ver el baño de pies | Het voetbad bekijken | goed | |
| Alt-tekst | Frasco blanco de SPA Wellness Fußbad, con dosificador, junto a un cuenco blanco con agua en el que cae un chorro fino. | Witte fles SPA Wellness Fußbad, met doseerpomp, naast een witte kom met water waarin een dun straaltje valt. | goed | Past bij de beschrijving van het beeld. |

### Stap 2, peeling

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Titel | Exfoliación | Scrubben (letterlijk: exfoliatie) | goed | |
| Productregel | fresh feet Fußpeeling, 125 ml | Productnaam van de fabrikant, 125 ml | goed | Kleine letters in "fresh feet" zijn de officiële schrijfwijze. |
| Zin | Alisa la piel áspera de los pies. | Maakt de ruwe huid van de voeten glad. | goed | Dekt "glättet raue Fußhaut". |
| Label | Con sal del mar Muerto | Met zout uit de Dode Zee | fout | Wijzigen in `Con sal marina` (met zeezout). Reden: op de pot in beeld staat "Fußpeeling mit Meersalz", en volgens mijn zoekresultaten noemt de omschrijving van de fabrikant zeezout uit Frankrijk; alleen het kenmerkveld zegt "Totes Meer Salz". De taal zelf is correct, zie punt b. |
| Label | Probado dermatológicamente | Dermatologisch getest | fout | Wijzigen in `Con minerales y oligoelementos` (met mineralen en sporenelementen), of schrappen. Reden: deel C3 staat deze claim alleen toe met vermelding van de test, en deel A kent voor de peeling geen testgegevens. De taal zelf is correct, zie punt e. |
| Label | En 125 y 450 ml | In 125 en 450 ml | goed | Beknopt, maar gewoon op een label. |
| Knop | Ver el exfoliante | De scrub bekijken | goed | |
| Alt-tekst | Tarro abierto del exfoliante fresh feet Fußpeeling, con la tapa al lado y cristales de sal alrededor. | Open pot van de scrub fresh feet Fußpeeling, met het deksel ernaast en zoutkristallen eromheen. | goed | |

### Stap 3, masker

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Titel | Mascarilla | Masker | goed | |
| Productregel | Fuß-Vliesmaske Orange-Lemongras | Productnaam van de fabrikant | goed | Zo staat het op doos en sachet. |
| Zin | Mascarilla de tejido para el cuidado intensivo de la piel muy seca. | Masker van doek (vliesmasker) voor de intensieve verzorging van de zeer droge huid. | kan beter | Voorstel: `Mascarilla de tejido para el cuidado intensivo de la piel muy seca de los pies.` Reden: "mascarilla de tejido" is in Spaanse winkels vooral het gezichtsmasker, de Duitse zin zegt "Fußhaut", en nergens in dit hoofdstuk staat in het Spaans dat het om voeten gaat. Zie punt c. |
| Label | Con karité, macadamia y coco | Met shea, macadamia en kokos | goed | "Sheabutter, Macadamiaöl, Kokosnussextrakt". |
| Label | Vegana | Veganistisch | goed | Vrouwelijke vorm, past bij "la mascarilla". |
| Label | Caja de 5 pares | Doos van 5 paar | goed | Zie punt f. |
| Knop | Ver la mascarilla | Het masker bekijken | goed | |
| Alt-tekst | Caja de la mascarilla Fuß-Vliesmaske Orange-Lemongras, de la que salen cinco sobres en abanico. | Doos van het masker Fuß-Vliesmaske Orange-Lemongras, waaruit vijf sachets als een waaier naar buiten komen. | goed | |

### Stap 4, crème

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Titel | Crema | Crème | goed | |
| Productregel | Fußcreme Orange-Lemongras, 125 ml | Productnaam van de fabrikant, 125 ml | goed | |
| Zin | Cuida la piel de los pies con aceites de naranja y de lemongrass. | Verzorgt de huid van de voeten met sinaasappelolie en lemongrassolie. | goed | De oliën staan in deel A en op de tube ("mit Orangen- und Lemongrasöl"). "Cuida" staat niet letterlijk in de tabel; het is de basisfunctie van een voetcrème en het veilige werkwoord uit deel C3. Zie punt d. |
| Label | Con urea | Met ureum | goed | Terecht zonder percentage: deel A noemt er geen. |
| Label | Vegana | Veganistisch | goed | |
| Label | En 30, 125 y 500 ml | In 30, 125 en 500 ml | goed | |
| Knop | Ver la crema | De crème bekijken | goed | |
| Alt-tekst | Tubo de la crema Fußcreme Orange-Lemongras, inclinado en el aire, con una espiral de crema debajo. | Tube van de crème Fußcreme Orange-Lemongras, schuin in de lucht, met een spiraal van crème eronder. | goed | |

### Stap 5, crèmeschuim

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Titel | Crema en espuma | Crèmeschuim (letterlijk: crème in schuimvorm) | goed | Term 3 uit de woordenlijst. |
| Productregel | Cremeschaum Orange-Lemongras, 125 ml | Productnaam van de fabrikant, 125 ml | goed | Op de bus in beeld staat "Lemongras" met één s. Mijn eerdere twijfel over de schrijfwijze is daarmee weg. |
| Zin | Espuma de textura ligera y rápida absorción. | Schuim met een lichte textuur dat snel intrekt. | goed | Eerder beoordeeld. Dekt "schnell einziehender Schaum mit leichter Textur". |
| Label | Con un 5 % de urea | Met 5 % ureum | goed | Lidwoord en harde spatie kloppen. |
| Label | Vegana | Veganistisch | goed | |
| Label | En 125 y 300 ml | In 125 en 300 ml | goed | |
| Knop | Ver la crema en espuma | Het crèmeschuim bekijken | goed | |
| Alt-tekst | Bote de la crema en espuma Cremeschaum Orange-Lemongras, inclinado en el aire, con una nube de espuma debajo. | Bus van het crèmeschuim Cremeschaum Orange-Lemongras, schuin in de lucht, met een wolk schuim eronder. | goed | |

### Slot, stappenbalk en aanwijzing

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Slot, titel | Cinco pasos, un protocolo | Vijf stappen, één protocol | goed | Zie punt g en h. |
| Slot, regel | Un producto BAEHR para cada paso. | Eén BAEHR-product voor elke stap. | goed | Zie punt g. |
| Slot, knop, alleen professional | Pedir los cinco productos | De vijf producten bestellen | goed | |
| Slot, knop, alleen particulier | Comprar los cinco productos | De vijf producten kopen | goed | |
| Stappenbalk, aria-label | Pasos del protocolo | Stappen van het protocol | goed | |
| Stappenbalk, knoppen | Baño, Exfoliación, Mascarilla, Crema, Espuma | Bad, Scrub, Masker, Crème, Schuim | goed | In een rij stappen is "Baño" duidelijk; de titel ernaast zegt "Baño de pies". |
| Aanwijzing | Desliza | Schuif verder (scrol) | goed | Eerder beoordeeld. Tú-vorm. |

De scripts (`film.js`, `productos.js`, `ui.js`) zetten in dit blok geen Spaanse tekst op de pagina. De etiketten op de vijf producten zijn foto's van de echte verpakking, in het Duits en Engels.

## Feiten en claims tegen deel A

- Letterlijk gedekt: de vijf productnamen en de maten; "Vegano" en "Vegana" bij vier producten; hibiscus en lotus; 5 tot 10 ml; de ruwe huid gladmaken; shea, macadamia en kokos; 5 paar; sinaasappel- en lemongrassolie; urea; 5 % urea; lichte textuur die snel intrekt.
- Terecht weggelaten: "Vegano" bij de peeling ("Vegan: Nein"), de vochtcijfers (114 % en 143 %), "innovatives", de Dermatest-zegels. Nergens staat dat het hele protocol veganistisch is.
- Vrij weergegeven, zonder meer te beloven: "pies cansados" (punt a); "piel muy seca" (de site van de fabrikant zegt "extrem trockener Fußhaut", doos en sachet zeggen "sehr trockene, raue Haut"; het Spaans volgt de verpakking); "caja" voor "Pack" (het beeld toont een doos).
- Niet in de tabel: "Cuida la piel de los pies" bij de crème (basisfunctie, acceptabel) en het protocol van vijf stappen zelf (eigen opzet van de site, zie onderaan).
- Niet in orde: de twee labels bij de peeling, zie hieronder.
- Oordeel: geen enkele zin belooft een therapeutische of medische werking. Van de te vermijden woorden uit deel C3 komt alleen "probado dermatológicamente" voor.
- Ter informatie: op de verpakking in beeld staan wel claims van de fabrikant in het Duits en Engels (bus: "verdoppelte Feuchtigkeit bei sehr trockener, rauer Haut"; doos, sachet en tube: Dermatest-zegel). Dat is de echte verpakking; de Spaanse tekst herhaalt die claims niet, en dat is goed.

## Verplichte wijzigingen

Beide in `src/pages/index.astro`, hoofdstuk Exfoliación. In geen van beide nieuwe teksten hoort een harde spatie. Na de wijziging luiden de drie labels: Con sal marina, Con minerales y oligoelementos, En 125 y 450 ml.

- Eerste label van de peeling.
  - Oud: `<li>Con sal del mar Muerto</li>`
  - Nieuw: `<li>Con sal marina</li>`
  - Reden, zelf gezien: op de pot die in de film in beeld is staat "Fußpeeling mit Meersalz" (`public/tex/tarro.webp`). Deel A noemt datzelfde etiket.
  - Reden, via het zoekhulpmiddel: bij zes zoekopdrachten hetzelfde beeld, waarvan drie zonder dat ik zelf naar Frankrijk vroeg. Op de productpagina van de fabrikant zegt de omschrijving dat het zeezout uit Frankrijk komt en begint de ingrediëntenlijst met "Maris Sal (Sea Salt)"; alleen het kenmerkveld zegt "Totes Meer Salz". Deel A heeft dat kenmerkveld overgenomen. "Con sal marina" klopt met het etiket, de omschrijving en de ingrediëntenlijst.
  - Voorwaarde: het label mag blijven als de fabrikant bevestigt dat het zout uit de Dode Zee komt. Bron: https://www.fusspflege.com/fresh-feet-fusspeeling/v20 en https://www.fusspflege.com/fresh-feet-fusspeeling-125-ml/11328
- Tweede label van de peeling.
  - Oud: `<li>Probado dermatológicamente</li>`
  - Nieuw: `<li>Con minerales y oligoelementos</li>`
  - Reden: deel C3 staat "probado dermatológicamente" alleen toe voor het product waarvoor de fabrikant de test heeft, met vermelding van de test. Deel A heeft voor de peeling alleen de woorden "dermatologisch geprüft", zonder instituut, datum of opzet. De nieuwe tekst komt uit de zin van de fabrikant in deel A ("mit Mineralstoffen und Spurenelementen aus Meersalz") en noemt alleen wat erin zit.
  - Alternatief: het label schrappen (twee labels in dit hoofdstuk). Terugzetten mag zodra de fabrikant de testgegevens geeft en die bij het product worden vermeld. Dit is een regel van het project, geen wettelijk verbod; D kan er bewust van afwijken. Zie punt e.

Werk na het doorvoeren ook de twee rijen en de toelichting bij de peeling in `docs/redactie-protocolo-es.md` bij.

## Aanbevolen, niet verplicht

- Maskerzin, het sterkst aanbevolen. Oud: `<p class="chap__text">Mascarilla de tejido para el cuidado intensivo de la piel muy seca.</p>` Nieuw: `<p class="chap__text">Mascarilla de tejido para el cuidado intensivo de la piel muy seca de los pies.</p>` (vliesmasker voor de intensieve verzorging van de zeer droge huid van de voeten).
- Sokvorm. Laat iemand de productpagina van het masker openen. Staat daar inderdaad "Vlies-Fußsocken" in de gebruiksaanwijzing (zie punt c), zet dat dan in deel A. Daarna kan de zin herkenbaarder: `Mascarilla en forma de calcetín para el cuidado intensivo de la piel muy seca de los pies.` (masker in sokvorm). Dat is nieuwe tekst en moet opnieuw langs schrijver en eindredactie.
- Deel A aanvullen bij de peeling: de tegenstrijdigheid tussen het kenmerkveld ("Totes Meer Salz") en de omschrijving (zeezout uit Frankrijk), na controle op de pagina.
- Wil D een dermatologische claim op de home, zet hem dan bij een product waarvan deel A de test kent (masker 07/2020, crème 03/2018, schuim 09/2025) en noem de test. Dat is nieuwe tekst voor de schrijver.
- Technisch, geen tekstwijziging: zet `lang="de"` op de vijf productregels (`<p class="chap__prod" lang="de">`). De pagina staat op `lang="es"`; een schermlezer spreekt de Duitse namen anders met Spaanse klanken uit. In alt-teksten is dat niet op te lossen.
- Leg de zes alt-teksten naast de stilstaande beelden zodra die zijn gemaakt.

## Antwoorden op de punten a tot en met h

### Punt a, "pies cansados" voor "strapazierte Füße"

- Oordeel: goed, laten staan.
- Feit: "strapaziert" betekent letterlijk zwaar belast of afgemat. Langenscheidt geeft bij huid en haar het Engelse "ill-treated": https://en.langenscheidt.com/german-english/strapaziert. Het letterlijkere Spaans is "castigados"; dat zegt de schrijver zelf ook.
- Feit: de fabrikant zet beide woorden naast elkaar. Een rubriek op zijn site heet "müde, strapazierte Füße" (vermoeide, afgematte voeten): https://www.fusspflege.com/pedibaehr-muede-fuesse. Alleen de titel gezien, in een zoekresultaat.
- Feit: in een Duitse handleiding van een voetbad staat "Lauwarme Fußbäder mit Lavendel oder Thymian sind eine Wohltat für strapazierte Füße": https://res.cloudinary.com/beurer/image/upload/v1718618055/stibo-live/63705_FB35_2024-05-29_07_IM1_BEU.pdf. Het zoekhulpmiddel meldde één keer dat de Spaanse tekst van dezelfde meertalige handleiding hier "pies cansados" heeft (https://pim.beurer.com/images/attribut/637.05_FB35_2021-03-30_04_IM1_BEU.pdf). Bij vier vervolgzoekopdrachten kreeg ik de Spaanse zin niet te zien. Een aanwijzing dus, geen hard bewijs.
- Feit: in Spaanse vakwinkels zijn beide woorden in gebruik. "Bálsamo Relajante Pies cansados" bij Podoservice (deel B, https://podoservice.es/560-cremas); zout "para pies cansados" en een crème "para pies castigados" bij https://www.esteticacarmenseijo.com/cuidado-pies_ca15895. Deel C3 noemt "para pies cansados" als veilige formulering.
- Oordeel: "refresca" hoort in het Spaans bij "pies cansados"; "castigados" past beter bij verzorgen of herstellen. De Spaanse zin belooft niet meer dan de Duitse. Op de fles zelf staat een derde variant, "pflegebedürftiger Füße" (voeten die verzorging nodig hebben).

### Punt b, "mar Muerto" of "Mar Muerto"

- Oordeel: op een commerciële site in Spanje is "mar Muerto" juist. De schrijver had gelijk.
- Feit, norm: het Diccionario panhispánico de dudas zegt dat "mar" vóór de naam van een zee mannelijk is en een kleine letter krijgt ("el mar Caribe, el mar Mediterráneo, el mar Rojo"): https://www.rae.es/dpd/mar. De Ortografía, hoofdstuk IV, zegt hetzelfde over soortnamen zoals océano, mar en lago: https://www.rae.es/ortografía/lugares. Fundéu herhaalt het: https://www.bbva.com/es/fundeu-bbva-recuerda-que-mar-volcan-y-otros-accidentes-geograficos-se-escriben-en-minuscula/. "Mar Muerto" zelf staat in die drie bronnen niet als voorbeeld; de regel is er wel zonder twijfel op van toepassing.
- Feit, handel: Spaanse winkels schrijven meestal twee hoofdletters, "Sales del Mar Muerto" (https://aromasartesanales.es/producto/najel-sales-del-mar-muerto-180gr/ en https://www.thedeadseacare.com/sales-del-mar-muerto), en soms alles klein, "Sal del mar muerto" (https://www.naturitas.es/p/cosmetica-e-higiene/cuidado-corporal/exfoliante-corporal/sal-del-mar-muerto-180-g-najel).
- Oordeel: "Mar Muerto" is een gewoonte van de handel, geen norm. Weinig lezers zien het als fout, maar de site volgt elders de norm (maanden klein, zinshoofdletters), dus de kleine letter is consequent.
- De vraag vervalt als het label wordt vervangen. Bevestigt de fabrikant de Dode Zee en komt het label terug, houd dan de kleine m.

### Punt c, "mascarilla de tejido" voor "Fuß-Vliesmaske"

- Oordeel: goed en gangbaar, maar voeg "de los pies" toe. "Calcetines" kan pas na controle van de bron.
- Feit: "mascarilla de tejido" is in de Spaanse detailhandel de naam van dit soort masker. Sephora España heeft de rubriek "Mascarilla tejido", die onder "Mascarilla facial" hangt: https://www.sephora.es/Tratamiento/Mascarilla-facial/Mascarillatejido/C313703. Product "la minimascarilla de tejido": https://www.sephora.es/p/the-good-fight-antimperfecciones---la-minimascarilla-de-tejido-P10013636.html.
- Feit: voor voeten bestaat de combinatie ook. "Loua mascarilla exfoliante de tejido para pies": https://drolim.com/cuidado-de-pies/24054-loua-mascarilla-exfoliante-de-tejido-para-pies-40ml-3450270016725.html. "Loua Mascarilla de Pies en Tejido": https://www.sanareva.es/loua-mascarilla-de-pies-en-tejido-ultra-hidratate-1-unidad.html.
- Feit: de herkenbaarste marktterm voor dit soort voetmasker gebruikt het woord sok. "Calcetines mascarilla": https://expertosenestetica.es/calcetines-mascarilla/. "Mascarilla pies, calcetines hidratantes": https://laescuelina.com/mascarillas/1819-mascarilla-pies-calcetines-hidratantes. El Español schrijft dat deze maskers werken als "un calcetín impregnado": https://www.elespanol.com/imprescindibles/20210822/mascarillas-pies-producto-definitivo-cuidar-sin-esfuerzo/603690193_0.html. De woordgroep "mascarilla en forma de calcetín" kwam uit een zoekresultaat over een Spaanse winkel, zonder duidelijke pagina erbij.
- Feit, nieuw en niet zelf gelezen: volgens het zoekhulpmiddel staat in de gebruiksaanwijzing op de productpagina van de fabrikant "Vlies-Fußsocken über die gereinigten, trockenen Füße ziehen und aufdrücken": https://www.fusspflege.com/fuss-vliesmaske-orange-lemongras/v2. Klopt dat, dan staat de sokvorm wel in de bron, alleen nog niet in deel A. Op doos en sachet zelf staat alleen het pictogram met twee sokvormen en de Engelse naam "Foot fleece mask" (zelf gezien in `public/tex/caja.webp` en `sobre.webp`).
- Oordeel over het voorstel van de schrijver ("Mascarilla en calcetines para el cuidado intensivo de pies muy secos."): begrijpelijk, maar "mascarilla en calcetines" klinkt minder gewoon dan "mascarilla en forma de calcetín" of "calcetines mascarilla". Voor dat verschil heb ik geen bron; het is mijn oordeel.
- "Vellón" is terecht niet gebruikt.

### Punt d, "lemongrass" als los woord

- Oordeel: goed, laten staan.
- Feit: Spaanse winkels gebruiken het woord onvertaald. "Aceite esencial de lemongrass": https://www.jabonariumshop.com/aceite-esencial-de-lemongrass, https://www.higiaeco.es/aceite-esencial-lemongrass en https://drorganic.es/products/aceite-esencial-de-lemongrass-bio-y-100-puro. Eén winkel zet het Spaanse woord ervoor, "Aceite Esencial Hierbalimón (Lemongrass)": https://www.cremas-caseras.es/aceites-esenciales/643-aceite-esencial-hierbalimon-lemongrass-bio.html.
- Feit: de verpakking in beeld gebruikt het woord zelf. Op de tube staat "with orange and lemongrass oil" (`public/tex/tubo.webp`, zelf gezien).
- Feit, norm: een onaangepast vreemd woord hoort volgens de RAE cursief of tussen aanhalingstekens: https://www.rae.es/ortografía/extranjerismos-crudos. Spaanse woorden bestaan: "hierba limón", regionaal "limoncillo"; "citronela" is dubbelzinnig omdat het ook een verwante plant aanduidt: https://www.directoalpaladar.com/ingredientes-y-alimentos/que-es-el-lemon-grass. Een advies van Fundéu over dit woord vond ik niet.
- Oordeel: het is het handelswoord, het sluit aan op de productnaam en op de tube, en "hierba limón" is in cosmetica minder gewoon. Cursief zetten raad ik af: de site laadt geen cursieve Archivo, dus de browser zou de letters kunstmatig schuin zetten. Wie de norm strikt wil volgen, schrijft "hierba limón".
- Geen tikfout: de productregel erboven heeft de Duitse spelling "Lemongras" met één s, de zin de Engelse met twee. Beide staan zo op de verpakking.

### Punt e, "Probado dermatológicamente" zonder vermelding van de test

- Oordeel: nee, niet volgens deel C3. Wettelijk is het verdedigbaar.
- Feit: deel C3 zegt bij deze claim: "alleen overnemen voor het product waarvoor de fabrikant de test heeft, met vermelding van de test".
- Feit: deel A geeft voor de peeling alleen de woorden "dermatologisch geprüft". Voor masker, crème en schuim staat er een Dermatest-zegel met datum. Ook een zoekopdracht leverde voor de peeling geen instituut of datum op; fabrikant en winkels noemen alleen "dermatologisch geprüft": https://www.fusspflege.com/fresh-feet-fusspeeling/v20.
- Feit, wet: Verordening 655/2013 eist dat een claim door bewijs wordt gedragen en niet verder gaat dan dat bewijs: https://www.boe.es/doue/2013/190/L00031-00034.pdf. Het Europese technische document over cosmeticaclaims zegt volgens deel C2 dat "probado dermatológicamente" betekent: getest op mensen onder toezicht van een dermatoloog, en dat een distributeur de claim van de fabrikant zo moet vertalen dat de kern behouden blijft. Spaanse vertaling van de AEMPS: https://www.aemps.gob.es/cosmeticos-cuidado-personal/docs/doc-tec-reivindicaciones-cosmeticos.pdf. Origineel: https://ec.europa.eu/docsroom/documents/24847.
- Naar mijn kennis, niet opnieuw gelezen: dat document eist niet dat de test in de claim zelf wordt genoemd. Het bewijs moet er zijn bij de verantwoordelijke persoon, hier de fabrikant. "Probado dermatológicamente" is de juiste Spaanse term voor "dermatologisch geprüft".
- Oordeel: de regel van het project is strenger dan de wet, en volgens die regel mag het label zo niet. De redenering van de schrijver (alleen hier, omdat de fabrikant hier geen testgegevens geeft) is het omgekeerde van wat C3 vraagt: de claim hoort juist bij de producten waarvan de test bekend is.
- Bijkomend: de doos, het sachet en de tube in beeld dragen een Dermatest-zegel, de pot niet. Het label staat nu dus bij een product waarvan de verpakking in beeld geen zegel toont.

### Punt f, "De 5 a 10 ml por baño" en "Caja de 5 pares"

- "De 5 a 10 ml por baño": goed en natuurlijk (oordeel). Het dekt de gebruiksaanwijzing uit deel A (5 tot 10 ml in warm water verdelen). Voor de letterlijke woordgroep "ml por baño" vond ik geen bron; Spaanse productteksten die ik vond geven de dosis in andere bewoordingen, bijvoorbeeld https://www.cebanatural.com/bano-con-hierbas-para-los-pies-p-168-25.html.
- "Caja de 5 pares": goed en natuurlijk. "5 pares" is de gewone verkoopeenheid voor voetmaskers, bijvoorbeeld "Mascarilla exfoliante pies, 5 pares": https://www.amazon.es/Mascarilla-exfoliante-calcetines-exfoliantes-dermatol%C3%B3gicamente/dp/B0BKZ9Y9JT. "Caja" klopt met het beeld; de fabrikant zegt "1 Pack (5 Paar)".

### Punt g, "Cinco pasos, un protocolo" en "Un producto BAEHR para cada paso."

- Natuurlijk: ja, allebei. De bouw van de titel is gewoon Spaans.
- Feitelijk juist: ja, wat het merk betreft. Op de fles staat "BAEHR BEAUTY CONCEPT", op de andere vier "PEDIBAEHR" (zelf gezien in `public/tex`). Beide zijn eigen merken van hetzelfde huis: deel A noemt zes eigen merkwerelden (https://www.fusspflege.com/) en "BAEHR-Eigenmarkenprodukte" (https://www.fusspflege.com/vorteile-mit-baehr). "Producto BAEHR" is dus een juiste overkoepelende naam. De eerdere versie "una sola marca" was aanvechtbaar; deze niet.
- Niet geverifieerd: dat de fabrikant deze vijf producten zelf als één protocol voorschrijft of verkoopt. Dat staat niet in deel A; het is de opzet van de site.

### Punt h, de titels

- Oordeel: in orde, voor zover uit tekst en opmaakregels te beoordelen. Ik heb de pagina niet in een browser gezien.
- Feit: `.chap__h` en `.fin__h` hebben `text-wrap: balance`. Nergens in `src` staat `hyphens`, `overflow-wrap`, `word-break` of een zacht afbreekteken. Een woord kan dus niet midden worden afgebroken; past het niet, dan steekt het uit.
- "Baño de pies": 12 tekens, past op één regel. Breekt het toch, dan alleen na "Baño", door de harde spatie; de laatste regel is "de pies".
- "Exfoliación" (11), "Mascarilla" (10) en "Crema" (5): één woord, korter dan 16 tekens.
- "Crema en espuma": 15 tekens, past net op één regel. Breekt het, dan als "Crema" en "en espuma".
- "Cinco pasos, un protocolo": breekt als "Cinco pasos," (12) en "un protocolo" (12). De harde spatie houdt "un protocolo" bij elkaar.
- Hoofdkop: "Cosmética" (9) en "profesional" (11) staan elk op een eigen regel. De derde regel, "para pies, manos y uñas", heeft geen harde spatie vóór "uñas". Naar mijn schatting past die regel bij elke schermbreedte op één regel. Wie zekerheid wil, schrijft `y&nbsp;uñas`.

## Waar ik anders oordeel dan de schrijver

- Zout: de schrijver volgde deel A. Deel A is hier onvolledig; het etiket en de omschrijving van de fabrikant zeggen zeezout.
- Dermatologisch getest: zie punt e.
- De sokzin: zie punt c.
- Eens, nu met bron: "mar Muerto", "lemongrass", "pies cansados", "mascarilla de tejido", "protocolo".

## Wat ik niet kon verifiëren

- Ik ben een model en geen menselijke moedertaalspreker. Laat vóór livegang een Spaanse moedertaalspreker de eindtekst nalezen.
- Geen enkele webpagina heb ik zelf geopend. Citaten van internet komen via een hulpmiddel dat samenvat. Dat geldt het zwaarst voor twee punten: de herkomst van het zout (omschrijving en ingrediëntenlijst op de pagina van de fabrikant) en het woord "Vlies-Fußsocken". Laat iemand beide pagina's openen.
- De Spaanse zin in de handleiding bij punt a.
- De tekst van bijlage II van het technische document bij punt e. De map `bronnen` waar de woordenlijst naar verwijst staat niet in `docs`.
- Of "lemongrass" in het academische woordenboek staat. Niet nagekeken; naar mijn kennis niet.
- De beelden. In `public/posters` staan alleen `tubo.webp`, `duo.webp` en `espuma.webp`. De zes beelden waar dit blok naar verwijst (`conjunto.webp` en `paso-1.webp` tot en met `paso-5.webp`) bestaan nog niet. De alt-teksten zijn dus getoetst aan de beschrijving in de opdracht, niet aan de beelden. Zolang die bestanden ontbreken, toont de versie met minder beweging op die plekken geen beeld.
- De regelafbreking in een echte browser.
- Het protocol als geheel. Of een Spaanse professional in één behandeling eerst een crème en daarna een crèmeschuim gebruikt, is een vakinhoudelijke vraag voor de klant. Taalkundig is er niets mis mee.
- Buiten deel A en niet gecontroleerd: gratis verzending vanaf 60 €, de professionele prijs na aanmelding, en dat BAEHR España de enige officiële distributeur is.
