# Opdracht: voorstel voor BAEHR España (alleen tekst, Spaans en Engels)

Overdracht van de ontwerpsessie van 21 november 2026. Lees eerst `CLAUDE.md` in de hoofdmap.

## Wie en wat

- D (Denis) heeft met een partner een bureau dat websites, merken en vindbaarheid bouwt. Hij schrijft met de klant in het Russisch en verstuurt alles zelf.
- De klant is Valeria van BAEHR España (Proxy Beauty Spain, S.L., Barcelona, baehr.com.es), de officiële Spaanse distributeur van het Duitse merk BAEHR (Gustav Baehr GmbH).
- Zij vroeg naar SEO en vindbaarheid in AI-antwoorden. Ze wil strategieën voor naamsbekendheid in Spanje, nieuwe professionele klanten en conversie, een voorstel met pakketten en prijzen, en een gesprek.
- Doelgroep volgens Valeria: salons en specialisten in manicure en pedicure, ook podologen en klinieken, en particulieren. Professionals registreren zich voor speciale prijzen. Er is geen vast advertentiebudget. De fabrikant stelt geen strenge ontwerpeisen.
- D heeft toegezegd dat het voorstel uiterlijk maandag 23 november 2026 komt. Het gaat samen met de link naar de conceptsite uit deze repo.

## Wat je maakt

- `voorstel/voorstel-nl.md`: de Nederlandse moedertekst, zodat D de inhoud kan controleren.
- `voorstel/propuesta-es.md`: Spaans van Spanje.
- `voorstel/proposal-en.md`: Engels, geschreven als native Engels.
- `voorstel/controle-es.md` en `voorstel/controle-en.md`: de verslagen van de onafhankelijke controle.

Alleen tekst in Markdown. De vormgeving (pdf in de huisstijl van de conceptsite) volgt later op een ander model. Raak `src/`, `public/` en `tools/` niet aan: ontwerp en 3D doet D alleen op Fable.

## Vaste inhoud (besloten door D)

Stand van 22 november 2026. Dit vervangt de vier pakketten van 480, 680, 1.140 en 1.480 euro uit de eerste overdracht (18 en 21 november): die gelden niet meer.

Drie pakketten die op elkaar stapelen: elk pakket bevat het vorige. Prijzen per maand. D op 22-11, letterlijk: "zeg dan 540, 1020 en 1560?" D op 23-11: het eerste pakket wordt 580 euro.

| Pakket | Per maand | Uren werk per maand |
|---|---|---|
| Winkel en SEO: nieuwe winkel, SEO, GEO en technische basis | 580 euro | 12 |
| Portaal en advertenties: daarbij het B2B-portaal, campagnes op elk kanaal en de beelden en content daarvoor (ons advies) | 1.020 euro | 16 |
| Volledig pakket: daarbij e-mailmarketing, beheer van social media, content voor social media en 3D-animaties | 1.560 euro | 24 |

Besluit van D en zijn partner op 23-11 (WhatsApp van de partner, door D doorgestuurd): het portaal verhuist van pakket één naar pakket twee, de pakketnamen veranderen, alles wordt uitgebreid beschreven en bij elk pakket staan de uren. "Het moet voelen alsof je heel veel krijgt als je grotere pakket kiest." De prijzen zijn op 23-11 niet gewijzigd. Oordeel van Claude, aan D gemeld: de uren zijn krap voor wat pakket twee en drie toevoegen; advies is één zin dat de uren het vaste werkbudget per maand zijn.

- Winkel en B2B-portaal komen op Shopify en hebben samen een waarde van 2.000 euro. Ze zijn gratis bij 12 maanden samenwerking. Bij eerder opzeggen betaalt de klant het resterende deel naar rato.
- Het Shopify-abonnement (Basic of Grow) betaalt de klant zelf, rechtstreeks aan Shopify. Geen exacte prijzen in het voorstel, alleen een richtprijs (D, 23-11).
- Het advertentiebudget staat los van het maandbedrag en gaat rechtstreeks naar Google en Meta. Ongeveer 1.000 euro per maand is ons advies; de klant zit er niet aan vast (D, 23-11).
- Planning: in de eerste twee weken metingen, toegang voor zoekmachines en ontwerp; in week drie en vier gaat de winkel live; in maand twee het portaal en de pagina's per dienst.
- Afzender: Denis, Meneer Marketing. De link baehr-concept.vercel.app staat in de tekst.
- Bewijs: voor Skin Complete (skincomplete.eu) heeft het bureau 80 nieuwe afnemers gerealiseerd, zonder periode erbij. D heeft Valeria zelf al naar skincomplete.eu verwezen.
- Geen 3D op productpagina's, ook niet als optie (zie het besluit onderaan).

De tekst is op 22-11 bijgewerkt in een aparte sessie op de tak `voorstel`. Die tak is op 23-11 samengevoegd met `ontwerp`. Werk voortaan alleen op `ontwerp`, anders bouwt de pdf op een oude tekst.

Aannames van Claude, nog niet bevestigd door D:

- Verdeling van het advertentieadvies: 600 euro Google en 400 euro Meta.
- Dat pakket twee en drie 1.020 en 1.560 euro blijven nu het eerste 580 euro is, en dat pakket drie alleen het beheer van de social media is.
- Prijzen exclusief btw, geen vaste looptijd, een maand opzegtermijn.
- Tot het portaal live is (maand twee) betaalt de klant 580 euro, welk pakket ze ook kiest.

Het oude Russische voorstel staat in `voorstel/archief/voorstel-ru-oud.html`. Gebruik het als bron voor de uitwerking per onderdeel. De pakketnamen en prijzen hierboven gaan voor: het oude bestand kan andere bedragen noemen.

## Strategieën die erin moeten

Drie doelen: naamsbekendheid in Spanje, nieuwe professionele klanten, conversie. Bevindingen uit het onderzoek:

- Zoekopdrachten op merk en distributeur gaan nu naar Duitse winkels. Daar ligt de snelste winst.
- De professionele niche (pedicure, podologie) is haalbaar in drie tot zes maanden. Brede consumententermen zijn dat niet.
- Russischtalige professionals in Spanje zijn waarschijnlijk de huidige basis: er is een Telegram-kanaal en het seminar is in het Russisch met Spaanse vertaling. Dit is een aanname op basis van schermafbeeldingen.
- Het registratieformulier voor professionals heeft 14 velden. Dat is de grootste rem op conversie. De conceptsite laat een aanmelding in twee minuten zien.

Eerlijkheid is afgesproken: geen garantie op verkeer of posities. Zeg wat realistisch is en binnen welke termijn.

## Vorm

Zoals het voorbeeld dat D liet zien (een pakkettenpagina voor een andere klant, "Rodenburg"): vier pakketten naast elkaar die opstapelen, daaronder wat gratis is bij 12 maanden, het advertentiebudget apart, het bewijs en de volgende stap (een gesprek). Kort, concreet en gericht op een ja. Feiten en cijfers, geen grote woorden.

## Taal

- Spaans: laat de agent `redactor-es` schrijven en `corrector-es` onafhankelijk nalezen. Die agents zijn gemaakt voor sitetekst; zeg erbij dat dit een zakelijk voorstel is. Laat de schrijver kiezen tussen tú en usted voor een eerste voorstel aan een prospect in Spanje, met reden.
- Engels: zelf schrijven, daarna laten nalezen door een agent die als native Engelse eindredacteur leest (false friends, Nederlandse zinsbouw).
- D leest geen Spaans. Lever de Spaanse tekst met de Nederlandse moedertekst ernaast, zodat hij zin voor zin kan vergelijken.
- Productfeiten alleen uit `docs/merk-en-woordenlijst.md`. Niet "exclusief distributeur" en niet "made in Germany" als algemene claim.
- Niets ophalen van baehr.com.es (botfilter).

## Open punten voor D (in één ronde vragen)

- De advertentiebudgetten.
- De periode waarin de 80 nieuwe afnemers bij Skin Complete kwamen.
- De naam van het bureau als afzender.
- Of het eigen team de Google- en Meta-campagnes beheert.
- Btw en opzegtermijn.

## Afspraken

- Met D in het Nederlands, kort en kritisch. Geen nummering als opmaak, geen sterretjes, geen em dashes of en dashes, geen AI-taal.
- Niets versturen of publiceren. Werk op de tak `ontwerp`. `main` is sinds 21-11 de openbare link (baehr-concept.vercel.app): daar alleen naartoe met akkoord van D per keer.

## Toevoeging 21 november, avond: 3D per product als optie

Besluit van D en zijn partner:

- De 3D-productfilm komt hoe dan ook op de home.
- Op productpagina's is een ronddraaiend 3D-model mogelijk, maar alleen als optie. In de conceptsite staat één voorbeeld: de productpagina van het Cremeschaum Orange-Lemongras (`/productos/crema-en-espuma-orange-lemongras/`).
- Biedt het aan als optie met een prijs per product ("als je dit voor alle producten wilt, betaal je X per product"). Het bedrag X bepaalt D.
- Leg in het voorstel eerlijk uit dat dit veel werk is per product (vorm, etiket rondom, controle) en dat het ten koste gaat van de laadsnelheid van die pagina. Voor een echte 360 graden zijn foto's van alle kanten of de etiketbestanden van de fabrikant nodig: nu is alleen de voorkant echt.

## Besluit 22 november, avond: geen 3D op productpagina's, ook niet als optie

Besluit van D (22-11), dit vervangt de toevoeging van 21-11 hierboven:

- 3D alleen op de home. Geen 3D op productpagina's en de optie "3D per product" komt niet in het voorstel.
- Reden: elke 3D-pagina haalt three.js binnen (ongeveer 200 kB) plus model en etiket, en dan gaat de snelheidswinst verloren die we de klant beloven.
- Te onthouden voor de bouw (advies, door D bevestigd met "onthouden"): het grootste snelheidsrisico zit straks in Shopify, niet in de 3D. Shopify voegt eigen scripts toe en vooral apps maken een winkel traag. Dus zo weinig mogelijk apps en een vast budget per pagina, bijvoorbeeld hooguit 1 MB en een LCP onder 2,5 seconden op een telefoon. Geschikt als toezegging in het voorstel, maar alleen met akkoord van D op de getallen.
