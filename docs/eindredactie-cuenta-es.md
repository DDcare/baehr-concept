Kan dit zo naar een Spaanse klant: ja, na drie kleine wijzigingen.
Het Spaans is foutloos, overal in tú en klinkt als Spanje, niet als vertaling. De accountwoorden (Mi cuenta, Historial de pedidos, Repetir pedido, Descargar factura, Cerrar sesión en de drie statussen) zijn gangbaar Spaans, "¿Toca reponer?" en "Así es la cuenta profesional por dentro" zitten goed in de toon (speels maar zakelijk), en alle koppen hebben al een harde spatie vóór het laatste woord.
Verplicht: twee schermlezerlabels wijken af van de zichtbare knoptekst, en het menu op tablet en telefoon zegt op de accountpagina nog "Acceder" in plaats van "Mi cuenta".

Onafhankelijke eindredactie Spaans, 21 november 2026. Beoordeeld: alle tekst in `src/pages/mi-cuenta.astro` (het object T, de opmaak met aria-labels, meldingen en voorbeeldgegevens, en het script dat naam en datums invult), de link "Ver una cuenta de ejemplo" in `src/pages/index.astro` en `src/pages/profesionales.astro`, en de accountlink in de kop van `src/layouts/Base.astro`, met het mobiele menu in dezelfde kop. Om te zien wat wanneer zichtbaar is, heb ik ook `src/components/Alta.astro`, `src/scripts/ui.js`, `src/scripts/cart.js` en de CSS van de accountpagina gelezen. Getoetst aan `CLAUDE.md`, `docs/merk-en-woordenlijst.md` (deel A, B en C), `docs/es-referencias-tiendas.md` en de besluiten in `docs/eindredactie-tienda-pro-es.md` en `docs/eindredactie-paginas-es.md`.

Werkwijze en voorbehoud:

- Ik heb niets gewijzigd behalve dit rapport. baehr.com.es is niet bezocht.
- Oordelen, zoals in de vorige rapporten. Goed: correct, en zo zou een Spaanse vakprofessional het schrijven. Kan beter: correct, maar duidelijker of toegankelijker kan; optioneel. Fout: een taalfout, een overtreding van een projectregel uit `CLAUDE.md`, een tegenstrijdigheid met een keuze die al gemaakt is, of een label dat niet klopt met wat op het scherm staat; moet anders.
- De tabel toont de zichtbare tekst. Waar in de code `&nbsp;` of het teken U+00A0 staat, staat hier een gewone spatie. `\|` in de tabel is het rechte streepje `|` uit de code.
- Harde spaties: in `mi-cuenta.astro` staan ze als het onzichtbare teken U+00A0, niet als `&nbsp;`. Bij gewoon lezen lijken het gewone spaties; ik heb ze met een zoekopdracht op dat teken gecontroleerd.
- Voorbehoud: ik ben een AI-model en geen menselijke moedertaalspreker. Webpagina's heb ik niet zelf geopend; het zoekhulpmiddel vat ze samen en geeft citaten terug. Accountpagina's van Spaanse winkels zitten achter een inlog; daarvan zag ik alleen hulppagina's en zoekresultaten.

Wat over de hele linie goed is (feit, na controle van elke zin):

- Spelling, accenten, ¿, de komma na "Hola" en de punten: geen fouten gevonden.
- Aanspreekvorm: overal tú (Repite, consulta, descarga, Solicita, Busca, añade, te falte, Descarga, necesites, tu, tus, ¿Es tu caso?). Nergens usted.
- Datums: het script maakt ze met `Intl.DateTimeFormat('es-ES')` met twee cijfers voor dag en maand, dus 20/11/2026. Dat is de Spaanse volgorde dag, maand, jaar met schuine streep.
- Harde spaties: elke kop bindt de laatste twee woorden (Tu último pedido, ¿Toca reponer?, Historial de pedidos, Tus facturas, Tus datos), net als de voorbeeldnaam Salón Ejemplar, de statussen "En camino" en "En preparación" en het getal met "productos". Dat volgt de projectregel. Omdat het teken onzichtbaar is, ziet wie de tekst later bewerkt het niet; de productpagina en de merkpagina doen het in hun scripts ook zo, dus geen wijziging nodig.
- Consistent met de rest van de site: cesta, Ver la cesta, Solicita el alta, Iniciar sesión en Cerrar sesión, pedido rápido, Nombre comercial, NIF o CIF, Correo electrónico, en de doelgroep "salones, podólogos y profesionales de manicura y pedicura".
- Claims: geen productclaim op deze pagina, geen woord uit deel C3, niets wat deel A "niet geverifieerd" noemt. De functies (herhalen, geschiedenis, facturen) staan niet in deel A maar komen uit het voorstel aan de klant, zoals de vorige rapporten al vaststelden.
- Voorbeeldgegevens: duidelijk als voorbeeld leesbaar. De regel onder de groet zegt "con datos de ejemplo", onder de tabel staat "Datos de ejemplo.", en de waarden zijn zichtbaar nep (zie de tabel).

Tabel

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop, accountlink op desktop (alleen op de accountpagina) | Mi cuenta | Mijn account | goed | De vaste Spaanse vorm in de kop (Druni, Arenal, Primor, Douglas, Clarel, Podoservice volgens `es-referencias-tiendas.md`). `aria-current="page"` klopt. |
| Kop, mobiel menu op de accountpagina (tablet en telefoon) | Acceder | Inloggen (letterlijk: toegang krijgen) | fout | Moet op deze pagina ook "Mi cuenta" zijn. Tot 1080 pixels breed is de koplink verborgen en staat alleen dit menu; daar biedt de pagina inloggen aan terwijl ze je als ingelogde klant begroet. Zie verplichte wijzigingen. |
| Home, blok voor professionals, link | Ver una cuenta de ejemplo | Een voorbeeldaccount bekijken | goed | Infinitief zoals de andere links op de site ("Ver el protocolo", "Ver la ficha"). "De ejemplo" sluit aan op "datos de ejemplo" op de accountpagina. |
| Professionals, blok snel bestellen, knop | Ver una cuenta de ejemplo | Een voorbeeldaccount bekijken | goed | Zelfde tekst als op de home. |
| title en og:title | Mi cuenta profesional \| BAEHR España | Mijn professionele account \| BAEHR España | goed | 36 tekens. Bij een echte winkel staat een accountpagina op noindex; vindbaarheid speelt hier geen rol. |
| meta description | Repite tu último pedido, consulta tu historial y descarga tus facturas desde tu cuenta profesional de BAEHR España. Demostración con datos de ejemplo. | Herhaal je laatste bestelling, bekijk je geschiedenis en download je facturen vanuit je professionele account van BAEHR España. Demonstratie met voorbeeldgegevens. | goed | 150 tekens. Vier keer tu of tus is in Spaanse accountteksten gewoon ("consulta tus pedidos y descarga tus facturas"); "historial" alleen is na "último pedido" duidelijk. |
| H1 | Hola, Salón Ejemplar | Hallo, Salón Ejemplar (letterlijk: Voorbeeldige Salon) | goed | Komma na de aanhef is de norm. "Ejemplar" betekent voorbeeldig en knipoogt naar "ejemplo"; met de regel eronder leest het als voorbeeld, niet als echte klant. Geen bestaande zaak met die naam gevonden. Afbreken: zie "Buiten de taal". |
| Intro | Así es la cuenta profesional por dentro, con datos de ejemplo. | Zo ziet de professionele account er vanbinnen uit, met voorbeeldgegevens. | goed | "Así es ... por dentro" is een vaste Spaanse formule voor een rondleiding (krantenkoppen, apps). Toon: maakt nieuwsgierig en blijft zakelijk. |
| Melding, alleen in de stand Particular | La cuenta profesional es para salones, podólogos y profesionales de manicura y pedicura. ¿Es tu caso? | De professionele account is voor salons, podologen en manicure- en pedicureprofessionals. Geldt dat voor jou? | goed | Zelfde doelgroep en volgorde als op de professionalspagina. "¿Es tu caso?" is gewoon Spaans. |
| Link na de melding | Solicita el alta | Vraag de aanmelding aan | goed | Gelijk aan de productpagina. |
| Pasje naast de groet (verborgen voor schermlezers) | Profesional / Salón Ejemplar / B00000000 | Professional / naam / fiscaal nummer | goed | Een NIF van een S.L. is een B met acht tekens erachter; alleen nullen leest als nep. |
| Kaart, kop | Tu último pedido | Je laatste bestelling | goed | De harde spatie vóór "pedido" staat er al. |
| Kaart, regel (door het script ingevuld) | Realizado el 20/11/2026, con 4 productos | Geplaatst op 20/11/2026, met 4 producten | goed | "Pedido realizado" is de vaste Spaanse verbinding (Druni heeft er een pagina "pedido-realizado" voor); "Realizado" sluit aan op "pedido" in de kop. "Productos" telt hier stuks (2 + 2), zoals Amazon.es in de winkelmand doet. Het enkelvoud bij 1 zit in de code, en tussen getal en woord staat een harde spatie. |
| Kaart, aantallen bij de plaatjes | × 2 (met de Duitse productnaam alleen voor schermlezers) | × 2 | kan beter | Een schermlezer leest eerst het aantal en daarna pas de naam. Voorstel bij "Aanbevolen". |
| Kaart, knop | Repetir pedido | Bestelling herhalen | goed | Knop in de infinitief, zoals in Spanje gebruikelijk, en gelijk aan "Repite tu último pedido" elders op de site. "Volver a pedir" en "Pedir de nuevo" bestaan ook; niet nodig. |
| Melding na de knop (ook onder de tabel) | Productos añadidos a la cesta. Ver la cesta | Producten toegevoegd aan de winkelmand. Winkelmand bekijken | goed | Zelfde bouw als op de productpagina ("Añadido a la cesta. Ver la cesta"). |
| Rode kaart, kop | ¿Toca reponer? | Tijd om aan te vullen? | goed | "Toca" met een infinitief is gewoon Spaans van Spanje voor "het is tijd om", en "reponer" is aanvullen wat op is. Speels, maar een salon herkent het als zakelijke vraag. Harde spatie staat er al. |
| Rode kaart, tekst | Busca por nombre o referencia y añade a la cesta lo que te falte. | Zoek op naam of artikelnummer en leg in de winkelmand wat je nog mist. | goed | "Lo que te falte" met aanvoegende wijs is juist en past bij de kop. |
| Rode kaart, knop | Hacer un pedido rápido | Snel bestellen (letterlijk: een snelle bestelling plaatsen) | goed | "Hacer un pedido" is in Spanje de gewone uitdrukking; "pedido rápido" is de naam van de functie op de hele site. |
| Sectie, kop | Historial de pedidos | Bestelgeschiedenis | goed | De vaste Spaanse naam (Podoservice, PrestaShop). Harde spatie staat er al. |
| Tabel, kolomkoppen | Pedido / Fecha / Productos / Estado | Bestelling / Datum / Producten / Status | goed | De gangbare kolommen van een Spaanse bestellijst. |
| Tabel, kolom voor de knoppen (alleen schermlezers) | Acciones | Acties | goed | |
| Tabel, bestelnummers | 10517 / 10498 / 10436 / 10372 | | goed | |
| Tabel, datums | vier datums, 1, 3, 17 en 31 dagen terug, in de vorm 20/11/2026 | | goed | Zie "over de hele linie". |
| Tabel, aantallen | 4 / 6 / 6 / 9 | | kan beter | Op de telefoon zijn de kolomkoppen verborgen; dan staat er een los getal naast de plaatjes ("9" naast vier plaatjes). Voorstel bij "Aanbevolen". |
| Tabel, statussen | Entregado / En camino / En preparación | Geleverd / Onderweg / In voorbereiding | goed | "Entregado" is mannelijk, zoals "pedido". Nespresso Pro Spanje gebruikt "En preparación" en "Entregado", Zara "En preparación", "Enviado" en "Entregado a cliente". "Enviado" (verzonden) kan ook in plaats van "En camino"; niet nodig. |
| Tabel, knop | Repetir pedido | Bestelling herhalen | goed | |
| Tabel, aria-label van die knop | Repetir el pedido 10517 | De bestelling 10517 herhalen | fout | `Repetir pedido 10517`. Spaans correct, maar door "el" staat de zichtbare tekst "Repetir pedido" niet meer aaneengesloten in het label. Zie verplichte wijzigingen. |
| Tabel, knop (niet bij "En preparación") | Descargar factura | Factuur downloaden | goed | Gangbaar; ook een Spaans B2B-portaal spreekt van "descargar ... sus facturas". |
| Tabel, aria-label van die knop | Descargar la factura del pedido 10498 | De factuur van bestelling 10498 downloaden | fout | `Descargar factura del pedido 10498`. Zelfde reden. |
| Melding na "Descargar factura" | Demostración de diseño: no se descarga ninguna factura. | Ontwerpdemonstratie: er wordt geen factuur gedownload. | goed | Zelfde bouw als de andere demomeldingen op de site. |
| Noot onder de tabel | Datos de ejemplo. | Voorbeeldgegevens. | goed | |
| Vak, kop | Tus facturas | Je facturen | goed | Zelfde kop als het voordeel op de professionalspagina. Harde spatie staat er al. |
| Vak, tekst | Descarga las facturas de tus pedidos cuando las necesites. | Download de facturen van je bestellingen wanneer je ze nodig hebt. | goed | Aanvoegende wijs na "cuando" is juist. |
| Vak, knop | Ver todas las facturas | Alle facturen bekijken | kan beter | De knop springt naar de bestelgeschiedenis, niet naar een lijst met facturen. Voorstel bij "Aanbevolen". |
| Vak, kop | Tus datos | Je gegevens | goed | Druni noemt dit onderdeel "Mis datos"; "Tus" past bij de andere koppen op deze pagina. Beide goed. Harde spatie staat er al. |
| Gegevens, labels | Nombre comercial / NIF o CIF / Correo electrónico / Dirección de envío | Handelsnaam / NIF of CIF / E-mailadres / Verzendadres | goed | Gelijk aan het aanmeldformulier; "Dirección de envío" is de vaste term. |
| Gegevens, voorbeeldwaarden | Salón Ejemplar / B00000000 / hola@example.com / Calle Ejemplo, 1, 08000 Barcelona | Voorbeeldige Salon / nummer met nullen / voorbeeld-e-mailadres / Voorbeeldstraat 1, 08000 Barcelona | goed | Zichtbaar nep: example.com is het gereserveerde voorbeelddomein, 08000 is geen postcode van de stad Barcelona. Komma's in het adres volgens de Spaanse schrijfwijze. Niet vervangen door "ejemplo.es": dat kan een bestaand domein zijn. |
| Vak, knop | Modificar datos | Gegevens wijzigen | goed | Gangbaar; Druni zet "Editar" op die knop. Beide goed. |
| Melding na die knop | Demostración de diseño: los datos no se pueden modificar. | Ontwerpdemonstratie: de gegevens kunnen niet worden gewijzigd. | goed | |
| Link onderaan | Cerrar sesión | Uitloggen | goed | De vaste vorm; past bij "Iniciar sesión" op de professionalspagina. |
| Script, naam en NIF | de naam en het NIF uit het aanmeldformulier, het NIF gemaskeerd als B1······· | | goed | Taal: niets op aan te merken. Wel een afbreekrisico, zie "Buiten de taal". |

Verplichte wijzigingen

Drie ingrepen in twee bestanden. Zoek op de exacte oude tekst, niet op regelnummer.

Schermlezerlabels van de knoppen in de tabel. Bestand: `src/pages/mi-cuenta.astro`.

Oud:

```
  againAria: (n: string) => `Repetir el pedido ${n}`,
```

Nieuw:

```
  againAria: (n: string) => `Repetir pedido ${n}`,
```

Oud:

```
  invoiceAria: (n: string) => `Descargar la factura del pedido ${n}`,
```

Nieuw:

```
  invoiceAria: (n: string) => `Descargar factura del pedido ${n}`,
```

Terugvertaling nieuw: "Bestelling 10517 herhalen" en "Factuur van bestelling 10498 downloaden".

Reden: een aria-label vervangt de zichtbare tekst als naam van de knop. Volgens WCAG 2.5.3 (Label in Name, niveau A) hoort de zichtbare tekst in die naam terug te komen; de toetsregel van het W3C (ACT-regel 2ee8b8) en de controle van axe (label-content-name-mismatch) eisen dat de zichtbare tekst er als aaneengesloten geheel in staat. "Repetir el pedido" en "Descargar la factura" breken "Repetir pedido" en "Descargar factura" open met een lidwoord. Wie met spraak bedient en "Repetir pedido" zegt, vindt de knop dan niet. Zonder lidwoord is het Spaans even natuurlijk; zo schrijft men knoplabels.

Accountlink in het mobiele menu. Bestand: `src/layouts/Base.astro`, in `<nav class="sheet" id="menu-movil" ...>`. De oude regel komt in het bestand maar één keer voor; de regel in de kop heeft `class="bar__link"` en is al goed.

Oud:

```
        <a href="/profesionales/#acceso">Acceder</a>
```

Nieuw:

```
        {page === 'cuenta' ? (
          <a href="/mi-cuenta/" aria-current="page">Mi cuenta</a>
        ) : (
          <a href="/profesionales/#acceso">Acceder</a>
        )}
```

Terugvertaling: op de accountpagina "Mijn account", op alle andere pagina's "Inloggen".

Reden: de koplink met "Mi cuenta" is tot 1080 pixels breed verborgen (in de CSS staat `.bar__link` binnen `@media (max-width: 1080px)` op `display: none`). Op tablet en telefoon staat alleen het menu, en dat zegt op de accountpagina nog "Acceder". De pagina begroet je dan als ingelogde klant en het menu biedt tegelijk inloggen aan. Het is dezelfde keuze als in de koplink, dus geen nieuwe tekst. Controleer daarna het menu op telefoon en tablet.

Aanbevolen, niet verplicht

Van belangrijk naar minder belangrijk. Alles in `src/pages/mi-cuenta.astro`.

Knop in het vak "Tus facturas". Hij belooft alle facturen, maar springt naar de bestelgeschiedenis, waar per bestelling een factuurknop staat.

Oud:

```
  invoicesBtn: 'Ver todas las facturas',
```

Nieuw:

```
  invoicesBtn: 'Ir al historial de pedidos',
```

Terugvertaling: "Naar de bestelgeschiedenis". Alternatief: de tekst laten staan en in het echte portaal een lijst met facturen bouwen.

Aantal in de bestellijst. Op de telefoon zijn de kolomkoppen verborgen en staat er alleen een getal naast de plaatjes. Met het woord erbij is het overal duidelijk, met dezelfde woorden en dezelfde harde spatie als "con 4 productos" in de kaart. Op desktop staat dan onder "Productos" bijvoorbeeld "9 productos"; dubbel, maar gewoon.

Oud:

```
                <span>{total(o.items)}</span>
```

Nieuw:

```
                <span>{total(o.items)}&nbsp;{total(o.items) === 1 ? 'producto' : 'productos'}</span>
```

Terugvertaling: "9 producten". Alternatief voor de ontwerper: de kolomnaam op de telefoon tonen; de cellen hebben er al een `data-label` voor, maar de CSS gebruikt het niet.

Schermlezer bij de plaatjes van de laatste bestelling. Nu leest een schermlezer eerst "× 2" (het teken als "por" of "multiplicado por") en daarna pas de Duitse naam. Met deze wijziging hoort hij de naam en dan het aantal in stuks; "unidades" is het gewone Spaanse woord daarvoor (Primor: "Unidades: 2 uds.").

Oud:

```
              <span class="acct-thumbs__q">× {q}</span>
              <span class="sr" lang="de">{byId[id].name}</span>
```

Nieuw:

```
              <span class="acct-thumbs__q" aria-hidden="true">× {q}</span>
              <span class="sr"><span lang="de">{byId[id].name}</span>, {q} {q === 1 ? 'unidad' : 'unidades'}</span>
```

Terugvertaling van wat de schermlezer dan zegt: "Cremeschaum Orange-Lemongras, 2 stuks".

Buiten de taal, wel gezien

- Afbreken van de naam in de groet. De voorbeeldnaam heeft een harde spatie ("Salón Ejemplar" is één onbreekbaar geheel), en het script zet een harde spatie vóór het laatste woord van de naam die de bezoeker zelf intypte. De CSS van die regel staat `overflow-wrap: anywhere` toe. Past zo'n onbreekbaar geheel niet op de regel, dan breekt de browser midden in een woord af. Bij een eigen naam van twee woorden zoals "Peluquería Montserrat" gebeurt dat naar schatting op elke telefoon, en juist als de klant de demo met de eigen salonnaam test; "Salón Ejemplar" wordt rond 320 pixels breed krap. Dat botst met de regel uit `CLAUDE.md` dat titels niet midden in een woord afbreken. Niet in een browser gezien. De oplossing is ontwerp, bijvoorbeeld de harde spatie alleen bij drie of meer woorden, of een lettergrootte die de naam laat passen.
- Bestellijst op de telefoon. De kolomkoppen zijn verborgen en de rijen staan als grid. Bestelnummer, datum en aantal staan dan zonder uitleg. Naar mijn kennis laten sommige browsers (Safari met VoiceOver) bij `display: grid` op tabelrijen de tabelstructuur vallen, zodat ook een schermlezer de kolomnamen niet meer noemt.
- Datums. Het `datetime`-attribuut komt uit `toISOString()` en is dus de UTC-datum, de zichtbare datum is de lokale. In Spanje verschillen die tussen middernacht en 01.00 uur (in de zomer 02.00 uur) een dag. Onzichtbaar voor de bezoeker.
- Gemengde gegevens. Wie eerder het aanmeldformulier invulde, ziet de eigen naam en een gemaskeerd NIF, met daarnaast het voorbeeld-e-mailadres en het voorbeeldadres. De regel "con datos de ejemplo" dekt dat; geen tekstwijziging nodig.
- Voor het echte portaal, niet voor deze demo: Spaanse B2B-portalen tonen in de bestellijst meestal ook het totaalbedrag (met of zonder btw) en bieden naast de factuur vaak de pakbon (albarán). Prijzen staan niet in de bron, dus het totaal ontbreekt nu terecht.

Wat ik niet kon verifiëren

- Ik ben een AI-model en geen menselijke moedertaalspreker. Of "¿Toca reponer?", "Así es la cuenta profesional por dentro" en "¿Es tu caso?" natuurlijk klinken, is mijn taalgevoel, gesteund door het woordenboek (DLE, "tocar": het moment voor iets is gekomen), niet door een telling. "¿Toca reponer?" vond ik nergens letterlijk als kop. Laat vóór livegang een Spaanse moedertaalspreker uit de branche de pagina lezen.
- De accountpagina's van Spaanse winkels zitten achter een inlog. "Repetir pedido" als knop vond ik niet bij een Spaanse beautywinkel; wel "repetir pedidos de reposición" in de brochure van een Spaans B2B-portaal (partner van Sage), "volver a pedir" bij Vistaprint Spanje en "Pedir de nuevo" bij Ádivin. Alle drie zijn goed Spaans; "Repetir pedido" sluit aan op de rest van de site.
- Statussen: "En preparación" en "Entregado" zag ik bij Nespresso Pro Spanje; "Enviado" bij Zara, maar op de hulppagina van de Colombiaanse Zara-site. "En camino" vond ik alleen in een forum over Amazon.es.
- "Historial de pedidos" steunt op de voetlink van Podoservice (in `es-referencias-tiendas.md`) en op PrestaShop. De kolomnamen "Pedido", "Fecha", "Estado" en "Acciones" ken ik van de Spaanse versie van WooCommerce; niet nagekeken.
- WCAG: gelezen via samenvattingen van de W3C-pagina's en de axe-regel. Of de Spaanse toegankelijkheidswet voor deze winkel geldt (kleine bedrijven kunnen vrijgesteld zijn), heb ik niet onderzocht. De wijziging is ook zonder die plicht goedkoop en beter.
- Hoe Spaanse schermlezers het teken × uitspreken: mijn kennis.
- Weergave: niets in een browser bekeken. Het afbreken van de naam heb ik geschat uit de CSS.
- Dat 08000 geen postcode van de stad Barcelona is (de stad loopt van 08001 tot ongeveer 08042): mijn kennis.
- Dat "Salón Ejemplar" geen bestaande zaak is: één zoekopdracht zonder treffer, geen volledige controle.

Bronnen

- Projectbestand `docs/es-referencias-tiendas.md`: "Mi cuenta" in de kop bij Druni, Arenal, Primor, Douglas, Clarel en Podoservice; voetlink "Historial de pedidos" bij Podoservice; datum in de vorm 26/11/2026 bij Perfume's Club; "Unidades: 2 uds." bij Primor.
- Druni, hulp over de account ("Mis Datos", knop "Editar", facturen in de account): https://www.druni.es/tienda-web/
- Druni, pagina over de bestelstatus (Enviado, Entregado, Cancelado; "Solicitar factura"): https://www.druni.es/pedido-realizado/
- Nespresso Pro Spanje, statussen ("En preparación", "Entregado"): https://www.nespresso.com/pro/es/es/seguimiento-pedido
- Zara, statussen ("En preparación", "Enviado", "Entregado a cliente"), Colombiaanse site: https://www.zara.com/co/es/help-center/OrderStatus
- Partner van Sage, Spaans B2B-portaal ("repetir pedidos de reposición", "descargar en cualquier momento sus facturas y albaranes"): https://marketplacepartners.sage.com/wp-content/uploads/2024/09/CP_Portal-de-Venta-B2B_SAGE_12-5-23_compressed.pdf
- Vistaprint Spanje ("Historial de compras y volver a pedir"): https://www.vistaprint.com/es/atencion-al-cliente/centro-de-ayuda/360050499971
- Ádivin ("Pedir de nuevo"): https://intercom.help/adivin/es/articles/9673671-como-puedo-repetir-un-pedido-antiguo
- W3C, Understanding 2.5.3 Label in Name: https://www.w3.org/WAI/WCAG21/Understanding/label-in-name
- W3C, ACT-regel "Visible label is part of accessible name": https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/
- Deque, axe-regel label-content-name-mismatch: https://dequeuniversity.com/rules/axe/4.11/label-content-name-mismatch
- Diccionario de la lengua española, "tocar": https://dle.rae.es/tocar

De webpagina's zijn gelezen via een hulpmiddel dat pagina's samenvat en citaten teruggeeft, niet rechtstreeks.
