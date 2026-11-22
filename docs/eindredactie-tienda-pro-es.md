Kan dit zo naar een Spaanse klant: ja, na wijzigingen.

Het Spaans is correct en klinkt als Spanje, niet als vertaling. Eén zin is fout en staat op twee plekken: "Los precios se muestran al conectar la tienda." (winkel en winkelmand).

Eén besluit voordat de klant het ziet: de belofte dat een aanvraag "en un día laborable" wordt beoordeeld staat op zes plekken en komt uit geen enkele bron in het project. Laat de klant die termijn bevestigen, of haal hem weg met de teksten verderop.

Onafhankelijke eindredactie Spaans, 21 november 2026. Beoordeeld: `src/pages/tienda.astro`, `src/data/productos.ts` (de productsoorten), `src/pages/profesionales.astro` met `src/components/Alta.astro` (het aanmeldformulier dat op die pagina staat), `src/pages/contacto.astro`, `src/pages/404.astro` en in `src/layouts/Base.astro` alleen het blok `id="cesta"`. Ook gelezen: `src/scripts/cart.js` (zet de productsoort in de winkelmand), `CLAUDE.md`, `docs/merk-en-woordenlijst.md`, de twee eerdere eindredacties en `voorstel/propuesta-es.md`, omdat de klant site en voorstel samen krijgt.

Werkwijze en voorbehoud:

- Ik heb niets gewijzigd behalve dit rapport. baehr.com.es is niet bezocht.
- Stand van de bestanden: tijdens mijn werk kwam in `Alta.astro` en `contacto.astro` een toestemmingsvakje bij ("He leído y acepto la política de privacidad."). Dat is meegenomen. De andere bestanden heb ik aan het eind opnieuw gelezen; ze waren niet veranderd.
- `docs/es-referencias-tiendas.md` bestond tijdens mijn werk niet. Ik heb zelf gezocht bij Spaanse winkels en vakleveranciers.
- Oordelen: goed is correct en natuurlijk. Kan beter is correct, maar kan natuurlijker, duidelijker of beter vindbaar; optioneel. Fout moet anders: een taalfout, een zin die een Spanjaard niet zo schrijft, een tegenstrijdigheid waar om een keuze is gevraagd, of een bewering die niet aan de feiten of de claimregels voldoet.
- In de tabellen staat de zichtbare tekst. Waar in de code `&nbsp;` of de harde spatie U+00A0 staat, staat hier een gewone spatie. Zoek bij het doorvoeren op de exacte tekst, niet op regelnummer.
- Voorbehoud: ik ben een AI-model en geen menselijke moedertaalspreker. Webpagina's heb ik niet zelf geopend; het zoekhulpmiddel vat pagina's samen en geeft citaten terug. Laat vóór livegang een Spaanse moedertaalspreker de eindtekst nalezen.

Wat over de hele linie goed is (feit, na controle van elke zin):

- Spelling, accenten, openingstekens ¿ en ¡, hoofdletters en leestekens: geen fouten gevonden. "Solo" zonder accent en "el alta" met mannelijk lidwoord zijn volgens de norm.
- Aanspreekvorm: overal tú (Compra, Inicia sesión, Rellena, Busca, Repite, Escribe, Usa, tu, tus, te). Nergens usted.
- Woorden van Spanje en niet van Latijns-Amerika: cesta (niet carrito), tramitar pedido, rellena (niet llena of completa), alta, "¿Has olvidado tu contraseña?" (niet "¿Olvidaste...?"), "Iniciar sesión" (niet "Ingresar"), "contacta con" (in Spanje de voorkeursvorm volgens het Diccionario panhispánico de dudas).
- Typografie: percentage met lidwoord en harde spatie; harde spatie tussen getal en ml, % en pares. In `productos.ts` staat het teken U+00A0 en niet de code `&nbsp;`. Dat is juist: de winkelmand zet de productsoort als platte tekst, en daar zou `&nbsp;` letterlijk verschijnen.
- Koppen: vóór het laatste woord staat een harde spatie waar het nodig is (para casa, tu negocio, como profesional, pedido rápido, Así funciona, tu alta, nos preguntan, está vacío). Alleen in de code gecontroleerd, niet in een browser.
- Claims: geen enkel woord uit de lijst van deel C3 (geen tratamiento, cura, previene, terapéutico). Productnamen, maten en merken kloppen met deel A. Geen bewering die deel A "niet geverifieerd" noemt: geen made in Germany, geen exclusief, geen aantal landen, geen ISO.
- De functies van het portaal (snel bestellen, laatste bestelling herhalen, facturen en bestelgeschiedenis) komen overeen met wat het voorstel aan de klant belooft (`voorstel/propuesta-es.md`).

Tabel winkel (`src/pages/tienda.astro`):

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title en og:title | Tienda online de cosmética profesional \| BAEHR España | Onlinewinkel voor professionele cosmetica \| BAEHR España | goed | 53 tekens. "Tienda online" is wat Spanjaarden zoeken; het Spaanse "en línea" klinkt in Spanje stijf. Voor vindbaarheid zie de aanbeveling met "para pies". |
| meta description | Compra cosmética profesional BAEHR: baño de pies, exfoliante, mascarilla, crema, crema en espuma y una crema con un 10 % de urea. | Koop professionele BAEHR-cosmetica: voetbad, scrub, masker, crème, crèmeschuim en een crème met 10 % ureum. | kan beter | Voorstel: `Compra cosmética profesional BAEHR para el cuidado de los pies: baño, exfoliante, mascarilla, crema, crema en espuma y crema con un 10 % de urea.` Het zoekwoord "pies" staat er nu alleen bij het bad, en "una" breekt de rij kale zelfstandige naamwoorden; 145 tekens. |
| JSON-LD (onzichtbaar) | CollectionPage "Tienda BAEHR España", zes producten met Duitse naam en merk | Collectiepagina Winkel BAEHR España | goed | Merken kloppen met deel A: BAEHR BEAUTY CONCEPT voor het voetbad, PEDIBAEHR voor de rest (CARE & PROTECT is een PEDIBAEHR-lijn). Technische noot bij de aanbevelingen. |
| H1 | Tienda para la cabina y para casa | Winkel voor de behandelcabine en voor thuis | goed | "Cabina" is het vakwoord voor de behandelruimte van de salon (IMPP0108: "cabinas de belleza"); cabina tegenover casa is gewone vaktaal. |
| Intro | Los cinco productos del protocolo y una crema con un 10 % de urea. | De vijf producten van het protocol en een crème met 10 % ureum. | goed | Lidwoord en harde spatie kloppen. Feit uit deel A: Schutzcreme mit 10 % Urea, 125 ml. |
| Filtergroep, aria-label | Filtrar por tipo | Filteren op soort | goed | |
| Filters | Todos, Baños de pies, Exfoliantes, Mascarillas, Cremas, Cremas en espuma | Alle, Voetbaden, Scrubs, Maskers, Crèmes, Crèmeschuimen | goed | Termen 3, 7, 8 en 10 uit de woordenlijst, in het meervoud zoals winkelrubrieken. De Schutzcreme valt terecht onder Cremas. |
| Prijsregel, alleen Profesional | Inicia sesión para ver tus precios profesionales. Iniciar sesión | Log in om je professionele prijzen te zien. Inloggen | kan beter | Voorstel: maak "Inicia sesión" in de zin zelf de link en laat de losse link vallen (code bij de aanbevelingen). Nu staat dezelfde oproep twee keer achter elkaar. |
| Prijsregel, alleen Particular | Los precios se muestran al conectar la tienda. | De prijzen worden getoond bij het koppelen van de winkel. | fout | Nieuw: `Precios pendientes de publicar.` "Conectar la tienda" is een technische notitie die een klant niet kan plaatsen (koppelen aan wat?), en de productpagina zegt "Precio pendiente de publicar.". |
| Kaart, productnaam | SPA Wellness Fußbad, fresh feet Fußpeeling, Fuß-Vliesmaske Orange-Lemongras, Fußcreme Orange-Lemongras, Cremeschaum Orange-Lemongras, Schutzcreme mit 10 % Urea | Duitse productnamen van de fabrikant | goed | Gelijk aan deel A en terecht met `lang="de"`. Niet als Spaans beoordeeld. |
| Kaart, productsoort | zie de tabel van `productos.ts` | | | |
| Kaart, link | Ver la ficha | Productpagina bekijken | goed | "Ficha" is het gewone winkelwoord; de home gebruikt dezelfde knop. |
| Kaart, link | Ver en el protocolo | Bekijken in het protocol | goed | |
| Kaart, knop | Añadir a la cesta | In de winkelmand leggen | goed | Vaste knop in Spanje (El Corte Inglés; Fresco Podología: "se habrán añadido a tu cesta"). |
| Kaart, afbeelding | alt="" (leeg) | | goed | Naam en soort staan als tekst op de kaart. |
| Sectie, aria-label | Productos | Producten | goed | |
| Lege staat | No hay productos de este tipo. | Er zijn geen producten van deze soort. | goed | |
| Lege staat, knop | Ver todos los productos | Alle producten bekijken | goed | |
| Slotblok, kop | ¿Compras para tu negocio? | Koop je voor je zaak? | goed | |
| Slotblok, tekst | Date de alta y compra a precio profesional: la solicitud te lleva dos minutos. | Meld je aan en koop tegen professionele prijs: de aanvraag kost je twee minuten. | goed | "Comprar a precio profesional" is de vaste verbinding. Twee minuten voor drie velden leest niet als garantie en klopt met het voorstel. |
| Slotblok, knop | Darme de alta | Mij aanmelden | goed | Gewone knop in de ik-vorm. Op de professionalspagina heet dezelfde actie "Solicitar el alta"; beide zijn goed. |

Tabel productsoorten (`src/data/productos.ts`; staan op de kaarten, in de winkelmand en in de demo van snel bestellen):

| Product | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Voetbad | Baño de pies, 500 ml | Voetbad, 500 ml | goed | Maat volgens deel A. |
| Peeling | Exfoliante, 125 ml | Scrub, 125 ml | kan beter | Voorstel: `Exfoliante para pies, 125 ml`. Zonder "pies" ziet een Spanjaard niet dat het om voeten gaat; Druni noemt de rubriek "Exfoliantes para Pies". |
| Masker | Mascarilla, caja de 5 pares | Masker, doos met 5 paar | kan beter | Voorstel: `Mascarilla para pies, caja de 5 pares`. "Mascarilla" alleen leest als gezichtsmasker; Druni: "Mascarilla para pies". |
| Crème | Crema, 125 ml | Crème, 125 ml | kan beter | Voorstel: `Crema para pies, 125 ml`. Primor noemt de rubriek "Cremas para pies". |
| Crèmeschuim | Crema en espuma, 125 ml | Crèmeschuim, 125 ml | kan beter | Voorstel: `Crema en espuma para pies, 125 ml`. Zelfde reden. |
| Schutzcreme | Crema con un 10 % de urea, 125 ml | Crème met 10 % ureum, 125 ml | goed | Lidwoord en harde spaties kloppen; zegt niets wat deel A niet zegt. Worden de rijen hierboven overgenomen, dan wordt dit `Crema para pies con un 10 % de urea, 125 ml`, gelijk aan de home. "Protectora" (Schutz) mag ook, beschermen is een cosmetische functie, maar is niet nodig. |

Tabel professionals (`src/pages/profesionales.astro` en `src/components/Alta.astro`):

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title en og:title | Alta profesional: precios y pedido rápido \| BAEHR España | Professionele aanmelding: prijzen en snel bestellen \| BAEHR España | goed | 56 tekens. "Alta" is in Spanje het woord voor je aanmelden als klant. |
| meta description | Envía tu solicitud de alta en dos minutos; la revisamos en un día laborable. Precios profesionales, pedido rápido por referencia y facturas en tu cuenta. | Stuur je aanvraag in twee minuten; we beoordelen hem binnen één werkdag. Professionele prijzen, snel bestellen op artikelnummer en facturen in je account. | goed, met besluit | Taal goed, 153 tekens. De werkdag: zie het besluit onder de verplichte wijzigingen. |
| JSON-LD (onzichtbaar) | FAQPage met de vier vragen en antwoorden hieronder | | goed | Gelijk aan de zichtbare tekst. Feit: Google toont sinds augustus 2023 alleen bij gezaghebbende overheids- en zorgsites FAQ-resultaten; het schaadt niet, het levert ook niets op. |
| H1 | Compra como profesional | Koop als professional | goed | "Como profesional" zonder lidwoord betekent "in de hoedanigheid van", zoals bedoeld. |
| Intro | Para salones, podólogos y profesionales de manicura y pedicura. Solicita tu alta en dos minutos: revisamos la solicitud en un día laborable y activamos tus precios profesionales. | Voor salons, podologen en manicure- en pedicureprofessionals. Vraag je aanmelding aan in twee minuten: we beoordelen de aanvraag binnen één werkdag en activeren je professionele prijzen. | goed, met besluit | Taal goed. Werkdag: zie het besluit. |
| Knop | Solicitar el alta | De aanmelding aanvragen | goed | |
| Voordelen, aria-label | Ventajas | Voordelen | goed | |
| Voordeel, kop | Precio profesional | Professionele prijs | goed | |
| Voordeel, tekst | Activamos tus precios al aprobar tu alta y los ves al iniciar sesión. | We activeren je prijzen wanneer we je aanmelding goedkeuren, en je ziet ze als je inlogt. | kan beter | Voorstel: `Activamos tus precios al aprobar tu alta y los verás al iniciar sesión.` De toekomende tijd past bij iets wat later gebeurt en sluit aan op de FAQ ("verás"). |
| Voordeel, kop | Pedido rápido | Snel bestellen | goed | Gangbare naam voor deze functie (RS Online Spanje: "Pedido rápido"). |
| Voordeel, tekst | Busca por nombre o referencia y añade productos sin recorrer la tienda. | Zoek op naam of artikelnummer en voeg producten toe zonder de hele winkel door te lopen. | goed | |
| Voordeel, kop | Lo de siempre | Het gebruikelijke (wat je in een café zegt: "het vaste") | goed | Idiomatisch en speels; past bij herhaalbestellingen. |
| Voordeel, tekst | Repite tu último pedido con un clic. | Herhaal je laatste bestelling met één klik. | goed | "Clic" is de Spaanse spelling. |
| Voordeel, kop | Tus facturas | Je facturen | goed | |
| Voordeel, tekst | En tu cuenta, junto con tu historial de pedidos. | In je account, samen met je bestelgeschiedenis. | goed | |
| Demo, kop | Prueba el pedido rápido | Probeer snel bestellen | goed | |
| Demo, intro | Escribe un nombre o una referencia y añade el producto a tu pedido. | Typ een naam of artikelnummer en voeg het product toe aan je bestelling. | goed | Feit: de demo kent geen artikelnummers; wie er een intypt, krijgt de melding "geen product". Zie aanbevelingen. |
| Demo, noot | Demostración de diseño: no se envía ningún pedido. | Ontwerpdemonstratie: er wordt geen bestelling verstuurd. | goed | |
| Zoekveld, label voor schermlezers | Buscar producto | Product zoeken | goed | |
| Zoekveld, placeholder | Busca por nombre | Zoek op naam | goed | |
| Regel, knop | Añadir | Toevoegen | goed | |
| Regel, knop na klik | Añadido | Toegevoegd | goed | Mannelijk, past bij "producto". |
| Geen resultaat | No encontramos ningún producto con ese nombre o referencia. | We vinden geen product met die naam of dat artikelnummer. | kan beter | Voorstel: `No hay ningún producto con ese nombre o referencia.` "Encontramos" kan ook als verleden tijd gelezen worden, en zo klinkt het Latijns-Amerikaans; "No hay" sluit aan op de lege staat van de winkel en op El Corte Inglés. |
| Demo, label | Tu pedido | Je bestelling | kan beter | Voorstel: `Tu cesta`. Het lijstje is de inhoud van de winkelmand en de knop eronder zegt "Ver la cesta"; dezelfde zaak, hetzelfde woord. |
| Demo, lege staat | Aún no has añadido ningún producto. | Je hebt nog geen product toegevoegd. | goed | Voltooide tijd, zoals in Spanje. |
| Demo, regel | Duitse naam en het teken × met het aantal | | goed | |
| Demo, knop | Ver la cesta | Winkelmand bekijken | goed | Zelfde knop als op de productpagina. |
| Kop | Así funciona | Zo werkt het | goed | |
| Stap | Solicita: Rellena los datos de tu negocio en dos minutos. | Vraag aan: vul in twee minuten de gegevens van je zaak in. | goed | |
| Stap | Revisamos: Comprobamos tu solicitud en un día laborable. | We controleren: we controleren je aanvraag binnen één werkdag. | goed, met besluit | Taal goed. Werkdag: zie het besluit. |
| Stap | Compra: Inicia sesión y haz tu pedido a precio profesional. | Koop: log in en plaats je bestelling tegen professionele prijs. | goed | |
| Kop aanmeldblok | Solicita tu alta | Vraag je aanmelding aan | goed | Taal goed. Feit: na een klik op "Acceder" opent de tab Iniciar sesión en blijft deze kop boven het inlogformulier staan. Zie de eerste aanbeveling. |
| Intro aanmeldblok | Solo te pedimos tres datos de tu negocio. | We vragen je maar drie gegevens van je zaak. | goed | Zelfde opmerking als bij de kop. Klopt nog met het nieuwe toestemmingsvakje: dat is geen gegeven. |
| Schakelaar, aria-label | Alta o acceso | Aanmelding of toegang | goed | |
| Tab (toegevoegd door D) | Solicitar el alta | De aanmelding aanvragen | goed | Infinitief zoals in tabs en knoppen gebruikelijk; "el alta" is juist. |
| Tab (toegevoegd door D) | Iniciar sesión | Inloggen | goed | De vorm van Spanje. |
| Pasje (verborgen voor schermlezers) | Profesional, Nombre comercial, NIF o CIF | Professional, handelsnaam, NIF of CIF | goed | |
| Aanmelden, label | Nombre comercial | Handelsnaam | goed | |
| Aanmelden, label | NIF o CIF | NIF of CIF (Spaans fiscaal nummer) | goed | Officieel heet het sinds 2008 NIF; "CIF" helpt de invuller. |
| Aanmelden, label | Correo electrónico | E-mailadres | goed | |
| Aanmelden, toestemming (nieuw) | He leído y acepto la política de privacidad. | Ik heb het privacybeleid gelezen en ga ermee akkoord. | goed | De gangbare Spaanse formule. De link gaat in het concept naar de startpagina. Zie de aanbeveling over privacy. |
| Aanmelden, knop | Solicitar el alta | De aanmelding aanvragen | goed | |
| Aanmelden, melding | Solicitud enviada. Te respondemos en un día laborable. | Aanvraag verzonden. We antwoorden je binnen één werkdag. | goed, met besluit | Tegenwoordige tijd voor de nabije toekomst is gewoon Spaans. Werkdag: zie het besluit. Dit onderdeel staat ook op de home. |
| Aanmelden, noot | Demostración de diseño: no se envía ningún dato. | Ontwerpdemonstratie: er worden geen gegevens verzonden. | goed | |
| Inloggen, label (D) | Correo electrónico | E-mailadres | goed | |
| Inloggen, label (D) | Contraseña | Wachtwoord | goed | |
| Inloggen, link (D) | ¿Has olvidado tu contraseña? | Ben je je wachtwoord vergeten? | goed | Precies de vorm van de Spaanse vakleverancier Fresco Podología (deel B3); "¿Olvidaste tu contraseña?" zou Latijns-Amerikaans klinken. |
| Inloggen, knop (D) | Iniciar sesión | Inloggen | goed | |
| Inloggen, melding na klikken (D) | Demostración de diseño: no se inicia ninguna sesión. | Ontwerpdemonstratie: er wordt niet ingelogd (letterlijk: er wordt geen enkele sessie gestart). | goed | Correct en gelijk gebouwd als de andere demomeldingen. Na het klikken staan er wel twee regels onder elkaar die met "Demostración de diseño" beginnen; zie aanbevelingen. |
| Inloggen, noot | Demostración de diseño: no se envía ningún dato. | Ontwerpdemonstratie: er worden geen gegevens verzonden. | goed | |
| FAQ, kop | Lo que más nos preguntan | Wat ons het vaakst gevraagd wordt | goed | |
| Vraag | ¿Qué necesito para darme de alta? | Wat heb ik nodig om me aan te melden? | goed | |
| Antwoord | Tu nombre comercial, tu NIF o CIF y un correo electrónico. Rellenar la solicitud te lleva unos dos minutos. | Je handelsnaam, je NIF of CIF en een e-mailadres. Het invullen kost je ongeveer twee minuten. | goed | |
| Vraag | ¿Cuándo podré comprar a precio profesional? | Wanneer kan ik tegen professionele prijs kopen? | goed | |
| Antwoord | Revisamos tu solicitud en un día laborable. Cuando la aprobemos, inicia sesión y verás tus precios profesionales. | We beoordelen je aanvraag binnen één werkdag. Zodra we hem goedkeuren, log je in en zie je je professionele prijzen. | goed, met besluit | "Cuando la aprobemos" met aanvoegende wijs is juist. Werkdag: zie het besluit. |
| Vraag | ¿Puedo pedir por referencia? | Kan ik op artikelnummer bestellen? | goed | |
| Antwoord | Sí. Con el pedido rápido buscas por nombre o referencia y añades los productos sin recorrer la tienda. También puedes repetir tu último pedido con un clic. | Ja. Met snel bestellen zoek je op naam of artikelnummer en voeg je de producten toe zonder de winkel door te lopen. Je kunt ook je laatste bestelling met één klik herhalen. | goed | |
| Vraag | ¿Dónde encuentro mis facturas? | Waar vind ik mijn facturen? | goed | |
| Antwoord | En tu cuenta, junto con tu historial de pedidos. | In je account, samen met je bestelgeschiedenis. | goed | |

Het inlog- en het aanmeldformulier tonen geen foutmelding in tekst als een veld leeg of ongeldig is of het vakje niet is aangevinkt. Er is dus geen Spaanse foutmelding om te beoordelen; voorstellen staan bij de aanbevelingen.

Tabel contact (`src/pages/contacto.astro`):

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title en og:title | Contacto y dirección en Barcelona \| BAEHR España | Contact en adres in Barcelona \| BAEHR España | goed | 48 tekens, met de plaatsnaam als zoekwoord. |
| meta description | Contacta con BAEHR España por WhatsApp, Telegram, Instagram, Facebook o el formulario. Calle Perelló, 34, 08005 Barcelona. | Neem contact op met BAEHR España via WhatsApp, Telegram, Instagram, Facebook of het formulier. Calle Perelló 34, 08005 Barcelona. | kan beter | Voorstel: `Contacta con BAEHR España por WhatsApp, Telegram, Instagram, Facebook o a través del formulario. Calle Perelló, 34, 08005 Barcelona.` "Por el formulario" loopt stroef; "a través del formulario" is de gewone verbinding. "Contacta con" zelf is goed. |
| H1 | Escríbenos | Schrijf ons | goed | |
| Intro | ¿Una duda sobre un producto, un pedido o tu alta profesional? Usa el canal que prefieras. Atendemos a profesionales y particulares. | Een vraag over een product, een bestelling of je professionele aanmelding? Gebruik het kanaal dat je het liefst gebruikt. We helpen professionals en particulieren. | goed | |
| Kanaal WhatsApp | Para tus consultas por mensaje. | Voor je vragen per bericht. | goed | |
| Kanaal Telegram | Para escribirnos si usas Telegram. | Om ons te schrijven als je Telegram gebruikt. | goed | |
| Kanaal Instagram | Para seguir nuestras novedades. | Om ons nieuws te volgen. | goed | |
| Kanaal Facebook | Para estar al día. | Om op de hoogte te blijven. | goed | |
| Kop | Dirección | Adres | goed | |
| Adres | BAEHR España, Proxy Beauty Spain, S.L., Calle Perelló, 34, 08005 Barcelona | | goed | Gelijk aan deel A. De komma tussen straat en huisnummer is de Spaanse schrijfwijze. |
| Label | Nombre | Naam | goed | |
| Label | Correo electrónico | E-mailadres | goed | |
| Keuze | Soy: Profesional, Particular | Ik ben: professional, particulier | goed | |
| Label | Mensaje | Bericht | goed | |
| Toestemming (nieuw) | He leído y acepto la política de privacidad. | Ik heb het privacybeleid gelezen en ga ermee akkoord. | goed | Zelfde formule als bij aanmelden. |
| Knop | Enviar mensaje | Bericht versturen | goed | |
| Melding | Mensaje enviado. Gracias por escribirnos. | Bericht verzonden. Bedankt voor je bericht. | goed | |
| Noot | Demostración de diseño: no se envía ningún dato. | Ontwerpdemonstratie: er worden geen gegevens verzonden. | goed | |

Tabel 404 (`src/pages/404.astro`):

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title | Página no encontrada \| BAEHR España | Pagina niet gevonden \| BAEHR España | goed | |
| meta description | Esta página no existe o se ha movido. | Deze pagina bestaat niet of is verplaatst. | goed | |
| H1 | Este tubo está vacío | Deze tube is leeg | goed | Speels en natuurlijk. |
| Tekst | Por más que apretamos, no sale nada: esta página no existe o se ha movido. | Hoe hard we ook knijpen, er komt niets uit: deze pagina bestaat niet of is verplaatst. | goed | "Por más que" met aantonende wijs beschrijft wat echt gebeurt; juist. |
| Knop | Volver al inicio | Terug naar de startpagina | goed | |
| Knop | Ir a la tienda | Naar de winkel | goed | |

Tabel winkelmand (`src/layouts/Base.astro`, blok `id="cesta"`):

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop en naam van het venster | Tu cesta | Je winkelmand | goed | |
| Knop | Cerrar | Sluiten | goed | |
| Lege staat | Tu cesta está vacía. | Je winkelmand is leeg. | goed | Vaste formule. |
| Lege staat, knop | Seguir comprando | Verder winkelen | goed | |
| Prijsregel, alleen Profesional | Inicia sesión para ver tus precios profesionales. | Log in om je professionele prijzen te zien. | goed | Er staat geen link bij; zie aanbevelingen. |
| Prijsregel, alleen Particular | Los precios se muestran al conectar la tienda. | De prijzen worden getoond bij het koppelen van de winkel. | fout | Nieuw: `Precios pendientes de publicar.` Zelfde reden als in de winkel. |
| Knop | Tramitar pedido | Bestelling afronden | goed | Vaste knop in Spanje (El Corte Inglés: "Ver/tramitar pedido"; Fresco Podología: "tramitar el pedido"). |
| Melding | Demostración de diseño: no se envía ningún pedido. | Ontwerpdemonstratie: er wordt geen bestelling verstuurd. | goed | |
| Regel, aantal, aria-label | Cantidad | Aantal | goed | |
| Regel, knoppen min en plus, aria-label | Uno menos, Uno más | Eén minder, één meer | kan beter | Voorstel: `Reducir cantidad` en `Aumentar cantidad`. Begrijpelijk, maar schermlezerteksten in Spaanse winkels noemen meestal de handeling. Op de productpagina staan dezelfde labels; daar gelijk houden. |
| Regel, knop | Eliminar | Verwijderen | goed | Vaste formule. |
| Regel, naam en soort | Duitse naam en productsoort uit `productos.ts` | | goed | |
| Regel, afbeelding | alt="" (leeg) | | goed | |

Verplichte wijzigingen (fout):

Twee regels, dezelfde zin.

- Bestand `src/pages/tienda.astro`, prijsregel in de stand Particular.
  - Oud: `<p class="catalog__note" data-when="home">Los precios se muestran al conectar la tienda.</p>`
  - Nieuw: `<p class="catalog__note" data-when="home">Precios pendientes de publicar.</p>`
- Bestand `src/layouts/Base.astro`, blok `id="cesta"`, prijsregel in de stand Particular.
  - Oud: `<p class="drawer__price" data-when="home">Los precios se muestran al conectar la tienda.</p>`
  - Nieuw: `<p class="drawer__price" data-when="home">Precios pendientes de publicar.</p>`
- Terugvertaling van de nieuwe tekst: "Prijzen nog niet gepubliceerd."
- Reden, oordeel: "al conectar la tienda" is een notitie van de bouwer en geen klanttekst. Een Spanjaard vraagt zich af wat er gekoppeld wordt, en de tegenwoordige tijd ("se muestran") past niet bij iets wat nog moet gebeuren.
- Keuze voor de hele site: op de productpagina blijft "Precio pendiente de publicar." staan (één product, enkelvoud); in winkel en winkelmand komt het meervoud "Precios pendientes de publicar.". Zo heet het overal hetzelfde.
- Bron: de productpagina zelf (`src/pages/productos/crema-en-espuma-orange-lemongras.astro`). Betekenis van "pendiente": "Que está por resolverse o terminarse" (https://dle.rae.es/pendiente); voorbeeld "la ley está pendiente de aprobación" (https://www.rae.es/diccionario-estudiante/pendiente).

Verplicht, tenzij de klant de termijn van één werkdag bevestigt:

Feit: "en un día laborable" staat niet in deel A, niet in `voorstel/OPDRACHT.md` en niet in het voorstel aan de klant; dat belooft alleen een aanvraag van twee minuten. Oordeel: zoals het er staat leest het als een toezegging namens de klant ("Revisamos tu solicitud en un día laborable"), en het voorstel vraagt de klant juist om naar het alta te kijken. Heeft D de termijn niet van de klant, haal hem dan weg:

- Bestand `src/pages/profesionales.astro`, meta description.
  - Oud: `en dos minutos; la revisamos en un día laborable. Precios`
  - Nieuw: `en dos minutos. Precios`
- Bestand `src/pages/profesionales.astro`, intro bovenaan.
  - Oud: `revisamos la solicitud en un día laborable y activamos`
  - Nieuw: `revisamos la solicitud y activamos`
- Bestand `src/pages/profesionales.astro`, stap Revisamos.
  - Oud: `t: 'Comprobamos tu solicitud en un día laborable.'`
  - Nieuw: `t: 'Comprobamos tus datos y aprobamos tu alta.'`
- Bestand `src/pages/profesionales.astro`, tweede FAQ-antwoord (de JSON-LD komt uit dezelfde lijst en verandert mee).
  - Oud: `a: 'Revisamos tu solicitud en un día laborable. Cuando la aprobemos, inicia sesión y verás tus precios profesionales.'`
  - Nieuw: `a: 'En cuanto aprobemos tu solicitud: inicia sesión y verás tus precios profesionales.'`
- Bestand `src/components/Alta.astro`, melding na verzenden (staat ook op de home).
  - Oud: `Solicitud enviada. Te respondemos en un día laborable.`
  - Nieuw: `Solicitud enviada. La revisaremos lo antes posible.`
- Buiten mijn deel, voor de eindredacteur van de home: in `src/pages/index.astro` wordt `Revisamos la solicitud en un día laborable y activamos` dan `Revisamos la solicitud y activamos`.
- Terugvertaling van de nieuwe teksten: "in twee minuten. Prijzen..."; "we beoordelen de aanvraag en activeren..."; "We controleren je gegevens en keuren je aanmelding goed."; "Zodra we je aanvraag goedkeuren: log in en je ziet je professionele prijzen."; "Aanvraag verzonden. We beoordelen hem zo snel mogelijk."
- Noemt de klant een andere termijn, vul dan die in op dezelfde plekken. Niet zelf een termijn kiezen.

Aanbevolen, niet verplicht (in volgorde van belang):

- Kop boven het inlogformulier. Wie op "Acceder" klikt, ziet "Solicita tu alta" en "Solo te pedimos tres datos de tu negocio." boven een inlogformulier. Bestand `src/pages/profesionales.astro`.
  - Oud: `<h2 class="h2 rv">Solicita tu&nbsp;alta</h2>`
  - Nieuw: `<h2 class="h2 rv">Tu cuenta&nbsp;profesional</h2>` (Je professionele account)
  - Oud: `<p class="lead rv">Solo te pedimos tres datos de tu negocio.</p>`
  - Nieuw: `<p class="lead rv">Solicita el alta con tres datos de tu negocio o inicia sesión si ya tienes cuenta.</p>` (Vraag de aanmelding aan met drie gegevens van je zaak, of log in als je al een account hebt.)
  - Alternatief: kop en intro laten wisselen met de tab; dat is werk in het script.
- Dubbele inlogoproep in de winkel. Bestand `src/pages/tienda.astro`.
  - Oud: `<p class="catalog__note" data-when="pro">Inicia sesión para ver tus precios profesionales. <a class="textlink" href="/profesionales/#acceso">Iniciar sesión</a></p>`
  - Nieuw: `<p class="catalog__note" data-when="pro"><a class="textlink" href="/profesionales/#acceso">Inicia sesión</a> para ver tus precios profesionales.</p>`
- Inloglink in de winkelmand, zodat de zin ook iets doet. Bestand `src/layouts/Base.astro`. Controleer daarna de opmaak van de link in het paneel.
  - Oud: `<p class="drawer__price" data-when="pro">Inicia sesión para ver tus precios profesionales.</p>`
  - Nieuw: `<p class="drawer__price" data-when="pro"><a class="textlink" href="/profesionales/#acceso">Inicia sesión</a> para ver tus precios profesionales.</p>`
- Productsoorten met "para pies", voor duidelijkheid en vindbaarheid, zoals Druni en Primor hun rubrieken noemen. Bestand `src/data/productos.ts`. Ik vervang alleen het deel vóór de komma, zodat de harde spaties blijven staan.
  - Oud: `type: 'Exfoliante,` Nieuw: `type: 'Exfoliante para pies,`
  - Oud: `type: 'Mascarilla,` Nieuw: `type: 'Mascarilla para pies,`
  - Oud: `type: 'Crema,` Nieuw: `type: 'Crema para pies,`
  - Oud: `type: 'Crema en espuma,` Nieuw: `type: 'Crema en espuma para pies,`
  - Oud: `type: 'Crema con un 10` Nieuw: `type: 'Crema para pies con un 10`
  - De productpagina schrijft "Exfoliante de pies" en "Crema de pies", de home "Crema para pies". Beide zijn goed Spaans; kies er één als de pagina's naast elkaar komen.
- Meta description van de winkel. Bestand `src/pages/tienda.astro`, twee vervangingen (de harde spatie vóór % blijft staan).
  - Oud: `'Compra cosmética profesional BAEHR: baño de pies,` Nieuw: `'Compra cosmética profesional BAEHR para el cuidado de los pies: baño,`
  - Oud: `crema en espuma y una crema con un 10` Nieuw: `crema en espuma y crema con un 10`
- Paginatitel van de winkel, alleen zolang de winkel uitsluitend voetproducten heeft. Bestand `src/pages/tienda.astro`.
  - Oud: `'Tienda online de cosmética profesional | BAEHR España'`
  - Nieuw: `'Tienda online de cosmética profesional para pies | BAEHR España'` (63 tekens; Google kan "España" afkappen, de zoekterm blijft staan)
- Geen resultaat in snel bestellen. Bestand `src/pages/profesionales.astro`.
  - Oud: `No encontramos ningún producto con ese nombre o referencia.`
  - Nieuw: `No hay ningún producto con ese nombre o referencia.`
- Eén woord voor de winkelmand in de demo. Bestand `src/pages/profesionales.astro`.
  - Oud: `<p class="quick__label">Tu pedido</p>` Nieuw: `<p class="quick__label">Tu cesta</p>`
  - Oud: `y añade el producto a tu pedido.` Nieuw: `y añade el producto a la cesta.`
- Toekomende tijd in het voordeel Precio profesional. Bestand `src/pages/profesionales.astro`.
  - Oud: `y los ves al iniciar sesión.` Nieuw: `y los verás al iniciar sesión.`
- Meta description van contact. Bestand `src/pages/contacto.astro`.
  - Oud: `Facebook o el formulario.` Nieuw: `Facebook o a través del formulario.`
- Labels van de min- en plusknop in de winkelmand. Bestand `src/layouts/Base.astro`; daarna ook op de productpagina.
  - Oud: `aria-label="Uno menos"` Nieuw: `aria-label="Reducir cantidad"`
  - Oud: `aria-label="Uno más"` Nieuw: `aria-label="Aumentar cantidad"`
- Foutmeldingen, voor als de formulieren ze krijgen. In Spanje is het werkwoord "Introduce"; "Ingresa" en "Ingrese" zijn Latijns-Amerikaans. Leeg verplicht veld: `Este campo es obligatorio.` Ongeldig e-mailadres: `Introduce un correo electrónico válido.` Leeg wachtwoord: `Introduce tu contraseña.` Vakje niet aangevinkt: `Acepta la política de privacidad para continuar.` Inloggen mislukt (echte site): `El correo electrónico o la contraseña no son correctos.`
- Privacy, vóór livegang. Het nieuwe vakje bij aanmelden en contact is goed Spaans. Volgens de AEPD hoort daarnaast de basisinformatie (verantwoordelijke, doel, rechtsgrond, ontvangers, rechten, link naar het volledige beleid) bij het formulier zelf te staan, en is alleen "het beleid accepteren" niet altijd genoeg. Die tekst moet van de juridisch adviseur van de klant komen; ik schrijf hem niet zonder die gegevens.
- Demo van snel bestellen: de intro nodigt uit een artikelnummer te typen, maar de zoekdata hebben er geen. Voeg de artikelnummers van de fabrikant toe aan de zoekdata (deel A noemt er alleen één: 11328 voor fresh feet Fußpeeling 125 ml), of laat het zo en weet dat een test van de klant met een nummer "geen product" geeft.
- Na een klik op Iniciar sesión staan twee regels met "Demostración de diseño" onder elkaar. Wie dat rustiger wil: melding `No se ha iniciado ninguna sesión.` (Er is niet ingelogd.) en de vaste noot eronder laten staan.
- Technisch, geen tekstwijziging: zet `lang="de"` op de Duitse productnaam in de resultaten van snel bestellen (`qline__name`) en in de regel van de winkelmand (`line__name`), zoals op de winkelkaarten. Laat het zoeken accentongevoelig werken ("bano" vindt nu geen "baño") en behandel de harde spatie als spatie ("125 ml" met een gewone spatie vindt nu niets). In de JSON-LD van de winkel staan Products zonder prijs; Google vraagt voor productresultaten offers, review of aggregateRating. Voeg offers toe zodra er prijzen zijn.
- Inhoud, buiten mijn macht: de contactpagina noemt geen telefoonnummer en geen e-mailadres. Een Spaanse vakklant verwacht die. Alleen toevoegen als de klant ze geeft.
- Buiten mijn deel, voor de eindredacteur van de productpagina: de link "Acceder" daar gaat naar `/profesionales/#alta` en opent dus de aanmeldtab; `#acceso` opent de inlogtab.

Consistentie met de rest van de site, mijn keuzes:

- Prijs voor particulieren: "Precio pendiente de publicar." per product, "Precios pendientes de publicar." in lijsten. Zie verplichte wijzigingen.
- Inloggen: "Iniciar sesión" voor knoppen, tabs en zinnen; "Acceder" alleen als korte link in de kop. Die verdeling is gewoon in Spaanse winkels en hoeft niet anders.
- Aanmelden: "Darme de alta" en "Date de alta" als wervende knop en zin, "Solicitar el alta" op de pagina waar de aanvraag echt gebeurt. Beide goed; wie het strak wil, gebruikt overal "Solicitar el alta", omdat er een goedkeuring op volgt.
- Winkelmand: overal "cesta", ook in de demo (aanbeveling "Tu cesta").

Wat ik niet kon verifiëren:

- Ik ben een model en geen menselijke moedertaalspreker. Mijn oordelen over natuurlijkheid zijn oordelen, geen tellingen.
- De knoppen in de winkelmand van Druni, Primor, Notino, Sephora, Arenal, Douglas en Promofarma kreeg ik via het zoekhulpmiddel niet te zien. Het bewijs voor "Añadir a la cesta", "Tramitar pedido" en "Tu cesta está vacía" komt uit hulppagina's van El Corte Inglés, de koopvoorwaarden van Fresco Podología en de winkelmand van Bugaboo Spanje, aangevuld met mijn eigen kennis.
- "Inicia sesión para ver ... precios" vond ik letterlijk alleen bij een Mexicaanse vakwinkel (Home Depot México Pro: "Inicia sesión para ver tu precio Pro preferencial"). Dat bewijst het patroon, niet het gebruik in Spanje. Een Spaanse vakleverancier met verborgen prijzen vond ik niet.
- "Precio(s) pendiente(s) de publicar" vond ik niet als winkeltekst. Mijn keuze steunt op de betekenis in het woordenboek en op het feit dat de productpagina het al zo zegt. Een commerciëler alternatief is "Precio disponible próximamente", maar dat belooft een termijn.
- "No hay" boven "No encontramos", "Reducir cantidad" boven "Uno menos" en "Lo de siempre" als kop: oordelen. Voor de laatste vond ik alleen een verwante formule van Repsol ("tu bombona de siempre"), geen winkel die het als kop gebruikt.
- Niet in deel A en niet door mij te controleren: de termijn van één werkdag; de functies van het portaal (wel in het voorstel aan de klant, nog niet gebouwd); het WhatsApp-nummer en de adressen van Telegram, Instagram en Facebook; "Atendemos a profesionales y particulares".
- Dat de Schutzcreme een voetcrème is, leid ik af uit de PEDIBAEHR-lijn CARE & PROTECT. Deel A zegt niet waartegen de crème beschermt. De Spaanse tekst noemt alleen het ureumgehalte en loopt daardoor geen risico.
- De juridische toereikendheid van het toestemmingsvakje: niet beoordeeld, alleen de taal.
- De weergave in een browser: regelafbreking, de vier korte koppen van de voordelen (zonder harde spatie) en de opmaak van een link in de winkelmand heb ik niet bekeken. Dat is ontwerp.
- `docs/es-referencias-tiendas.md` bestond niet toen ik werkte. Verschijnt het later en wijkt het af van dit rapport, dan gaat het onderzoek met bronnen voor.

Bronnen:

- El Corte Inglés, hulppagina supermarkt ("Ver/tramitar pedido"): https://www.elcorteingles.es/supermercado/ayuda/es/comprar/pasos-para-comprar/
- El Corte Inglés, levering op dezelfde dag ("Añadir a la cesta"): https://www.elcorteingles.es/entrega-2h/
- El Corte Inglés, zoekpagina zonder resultaat ("No hay productos relacionados con la búsqueda"): https://www.elcorteingles.es/deportes/ciclismo/cascos-ciclismo/15
- Fresco Podología, koopvoorwaarden ("se habrán añadido a tu cesta", "tramitar el pedido"): https://lawwwing.com/documents/cd8907b6-01cf-4365-bb43-d0e019ba4565/purchase-conditions/es/
- Fresco Podología, "¿Has olvidado tu contraseña?" (deel B3 van de woordenlijst): https://podologia.fresco.es/pedicura-fresco
- Bugaboo Spanje, winkelmand ("Tu cesta de compras está vacía"): https://www.bugaboo.com/es-es/cart/
- Druni, rubrieken "Exfoliantes para Pies" en "Mascarilla para pies": https://www.druni.es/cosmetica/exfoliantes/pies en https://www.druni.es/parafarmacia/cuidados/pies/mascarillas
- Primor, rubriek "Cremas para pies": https://www.primor.eu/es_ic/cremas-para-pies
- RS Online Spanje, "Pedido rápido": https://es.rs-online.com/web/content/ayuda/indice/realizar-pedido
- Repsol, app voor butaanflessen ("tu bombona de siempre"): https://apps.apple.com/es/app/id1466778474
- Home Depot México Pro ("Inicia sesión para ver tu precio Pro preferencial"): https://pro.homedepot.com.mx/pro/materiales-de-construccion/madera-dimensionada
- Diccionario panhispánico de dudas, "contactar" (in Spanje bij voorkeur met "con"): https://www.rae.es/dpd/contactar
- Diccionario de la lengua española, "pendiente": https://dle.rae.es/pendiente
- Diccionario del estudiante, "pendiente": https://www.rae.es/diccionario-estudiante/pendiente
- Fundéu over alternatieven voor "online": https://www.bbva.com/es/fundeu-bbva-ofrece-alternativas-online/
- Google, wijziging FAQ-resultaten augustus 2023: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Google, productresultaten: https://developers.google.com/search/docs/appearance/structured-data/product-snippet
- AEPD, welke informatie bij het verzamelen van gegevens: https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/6-el-deber-de-informacion/FAQ-0217-que-informacion-debe-facilitarse-cuando-los-datos-se-obtengan-directamente-del-afectado
- AEPD, decálogo over privacybeleid (aanvaarding van het beleid als geheel is niet genoeg): https://www.aepd.es/documento/decalogo-politicas-de-privacidad-adaptacion-RGPD.pdf
- Vakcertificaat IMPP0108 ("cabinas de belleza"), via de woordenlijst: https://web.lanbide.eus/descargas/egailancas/certificados/catalogo/IMPP0108_FIC.pdf

De webpagina's zijn gelezen via een hulpmiddel dat pagina's samenvat en citaten teruggeeft, niet rechtstreeks.
