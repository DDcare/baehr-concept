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

Vier pakketten die op elkaar stapelen: elk pakket bevat het vorige. Prijzen per maand.

| Pakket | Per maand |
|---|---|
| Site en Google | 480 euro |
| Plus portal | 680 euro |
| Plus campagnes (ons advies) | 1.140 euro |
| Plus social | 1.480 euro |

- Webwinkel en B2B-portaal samen hebben een waarde van 1.500 euro. Ze zijn gratis bij 12 maanden samenwerking. Bij eerder opzeggen betaalt de klant 125 euro per resterende maand.
- Het advertentiebudget staat los van het maandbedrag en gaat rechtstreeks naar Google en Meta.
- Bewijs: voor Skin Complete (skincomplete.eu) heeft het bureau 80 nieuwe afnemers gerealiseerd. D heeft Valeria zelf al naar skincomplete.eu verwezen.

Aannames van Claude, nog niet bevestigd door D:

- Advertentiebudget vanaf 1.000 euro per maand: 600 euro Google en 400 euro Meta.
- Inhoud per pakket, gereconstrueerd uit het eerdere gesprek:
  - Site en Google: nieuwe site met webwinkel, vindbaarheid in Google en in AI-antwoorden, onderhoud en een maandrapport.
  - Plus portal: daarbij het B2B-portaal waar salons en professionals zich aanmelden en direct bestellen tegen professionele prijzen.
  - Plus campagnes: daarbij het beheer van Google-advertenties.
  - Plus social: daarbij social media en Meta-advertenties.
- Of de prijzen exclusief btw zijn, en wat de opzegtermijn is.

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
- Niets versturen of publiceren. Committen en pushen naar `main` van deze privé-repo mag: de preview blijft achter de Vercel-login.

## Toevoeging 21 november, avond: 3D per product als optie

Besluit van D en zijn partner:

- De 3D-productfilm komt hoe dan ook op de home.
- Op productpagina's is een ronddraaiend 3D-model mogelijk, maar alleen als optie. In de conceptsite staat één voorbeeld: de productpagina van het Cremeschaum Orange-Lemongras (`/productos/crema-en-espuma-orange-lemongras/`).
- Biedt het aan als optie met een prijs per product ("als je dit voor alle producten wilt, betaal je X per product"). Het bedrag X bepaalt D.
- Leg in het voorstel eerlijk uit dat dit veel werk is per product (vorm, etiket rondom, controle) en dat het ten koste gaat van de laadsnelheid van die pagina. Voor een echte 360 graden zijn foto's van alle kanten of de etiketbestanden van de fabrikant nodig: nu is alleen de voorkant echt.
