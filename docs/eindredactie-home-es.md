# Eindredactie Spaanse tekst, homepagina BAEHR España

Datum: 21-11-2026. Stand van de bestanden: 15:03 UTC.

## Werkwijze en voorbehoud

- Beoordeeld: alle zichtbare Spaanse tekst in `baehr-concept/src/pages/index.astro`, plus de tekst die via `src/scripts/ui.js` (menuknop) en `src/scripts/film.js` (etiketten op tube en bus) op de pagina komt. De etiketten staan ook ingebakken in de afbeeldingen in `public/posters`.
- Getoetst aan `merk-en-woordenlijst.md`: deel A (feiten), deel B (woordenlijst), deel C (claims).
- Er is niets gewijzigd behalve dit rapport. baehr.com.es is niet bezocht.
- De bestanden werden tijdens de beoordeling nog bewerkt (er kwamen drie alt-teksten bij). Zoek bij het doorvoeren op de exacte tekst en niet op regelnummer.
- Oordelen: goed is correct en natuurlijk. Kan beter is correct, maar kan natuurlijker, duidelijker of veiliger. Fout moet worden aangepast.
- Lengte en regelafbreking zijn niet beoordeeld.
- Voorbehoud: deze eindredactie is gedaan door een AI-model op moedertaalniveau, niet door een menselijke moedertaalspreker. Laat vóór livegang een Spaanse moedertaalspreker de eindtekst steekproefsgewijs nalezen, zoals het onderzoeksbestand ook adviseert.

## Oordeel in het kort

- Feit: geen spelfouten, accentfouten of congruentiefouten gevonden. De aanspreekvorm is overal tú (Date, compra, Arrastra, Desliza, Rellena, Repite, tu, tus, te). Er staat nergens een usted-vorm.
- Feit: de typografie klopt. Percentteken en euroteken hebben een spatie, maanden en talen staan met kleine letter, koppen staan in zinshoofdletters, tijden staan als 10:00. Er zijn geen vraagzinnen, uitroepzinnen of decimalen. De hoofdletters komen uit de opmaak en behouden hun accenten.
- Twee formuleringen zijn fout. Samen staan ze op vier plekken in de code en in de afbeeldingen van de tube.
- Dertien formuleringen kunnen beter. Vier daarvan raken aan claims of feiten en vragen een besluit van de opdrachtgever.
- Oordeel: geen enkele zin belooft een therapeutische of medische werking van een product. Eén seminartekst noemt een nagelaandoening naast de merknaam, zie de tabel bij Seminars.

## Tabel per onderdeel

In de tabellen staat de zichtbare tekst. Waar in de code `&nbsp;` staat, staat hier een gewone spatie. De exacte codetekst van de noodzakelijke wijzigingen staat verderop.

### Paginakop (title, beschrijving, gegevens voor zoekmachines)

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title en og:title | BAEHR España \| Cosmética profesional para pies, manos y uñas | BAEHR Spanje, professionele cosmetica voor voeten, handen en nagels | goed | |
| meta description en og:description | Distribuidor oficial de BAEHR en España. Cosmética profesional alemana para pies, manos y uñas: para salones, profesionales de manicura y pedicura, podólogos y particulares. | Officiële distributeur van BAEHR in Spanje. Duitse professionele cosmetica voor voeten, handen en nagels: voor salons, manicure- en pedicureprofessionals, podologen en particulieren. | kan beter | Voorstel: `Distribuidor oficial en España de la marca alemana BAEHR. Cosmética profesional para pies, manos y uñas: para salones de belleza, profesionales de manicura y pedicura, podólogos y particulares.` Reden: "cosmética alemana" leest als herkomst van het product en de productieplaats is niet geverifieerd; "salones de belleza" is in een los zoekresultaat duidelijker dan alleen "salones". |
| JSON-LD description (onzichtbaar, wel gelezen door zoekmachines) | BAEHR España es el distribuidor oficial en España de la marca alemana BAEHR, fundada en 1949 en Waiblingen. | BAEHR España is de officiële distributeur in Spanje van het Duitse merk BAEHR, opgericht in 1949 in Waiblingen. | goed | Opmerking: zie de noot over "el distribuidor oficial" bij de voettekst. |

In de eerste rij is de backslash vóór het streepje alleen nodig voor de tabel; in de code staat `BAEHR España | Cosmética profesional para pies, manos y uñas`.

### Koptekst en navigatie

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Skiplink | Saltar al contenido | Naar de inhoud springen | goed | |
| Actiebalk, lange versie | 5 + 1 gratis en productos BAEHR del mismo tamaño. Hasta el 30 de noviembre. | 5 + 1 gratis op BAEHR-producten van dezelfde maat. Tot en met 30 november. | goed | Opmerking: "hasta el 30" wordt gelezen als tot en met de dertigste. |
| Actiebalk, korte versie | 5 + 1 gratis hasta el 30 de noviembre. | 5 + 1 gratis tot en met 30 november. | goed | |
| Logo, aria-label | BAEHR España, inicio | BAEHR España, startpagina | goed | |
| Hoofdnavigatie, aria-label | Principal | Hoofdnavigatie (letterlijk: hoofd) | goed | |
| Navigatie (kop, mobiel menu, voet) | Tienda | Winkel | goed | |
| Navigatie | Protocolo | Protocol | goed | |
| Navigatie | Profesionales | Professionals | goed | |
| Navigatie | Seminarios | Seminars | goed | |
| Navigatie | La marca | Het merk | goed | |
| Klantschakelaar, aria-label | Tipo de cliente | Soort klant | goed | |
| Klantschakelaar | Profesional | Professional | goed | |
| Klantschakelaar | Particular | Particulier | goed | |
| Inloglink (kop en mobiel menu) | Acceder | Inloggen (letterlijk: toegang krijgen) | goed | |
| Winkelmand, aria-label | Cesta: 0 productos | Winkelmand: 0 producten | goed | |
| Winkelmand, zichtbaar | Cesta 0 en Cesta (0) | Winkelmand 0 | goed | |
| Menuknop en aria-label van het mobiele menu | Menú | Menu | goed | |
| Menuknop in geopende stand (ui.js) | Cerrar | Sluiten | goed | |

### Openingsscherm

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Sectie, aria-label | Presentación de producto | Productpresentatie | goed | |
| Hoofdkop | Cosmética profesional para pies, manos y uñas | Professionele cosmetica voor voeten, handen en nagels | goed | |
| Intro, beide standen | Marca alemana fundada en 1949. BAEHR España es su distribuidor oficial. | Duits merk, opgericht in 1949. BAEHR España is de officiële distributeur ervan. | goed | |
| Intro, alleen professional | Date de alta y compra con precios profesionales. | Meld je aan en koop met professionele prijzen. | kan beter | Voorstel: `Date de alta y compra a precio profesional.` (Meld je aan en koop tegen de professionele prijs.) Reden, oordeel: de vaste verbinding is "comprar a precio"; "con precios" is begrijpelijk maar klinkt vertaald. |
| Intro, alleen particulier | Envío gratuito en pedidos a partir de 60 €. | Gratis verzending bij bestellingen vanaf 60 €. | goed | Opmerking: zet in de code een harde spatie tussen 60 en € (`60&nbsp;€`), zoals al bij het percentteken is gedaan. |
| Knop, alleen professional | Darme de alta | Mij aanmelden | goed | Opmerking: gewone Spaanse knoptekst in de ik-vorm, net als "Inscribirme". |
| Knop, beide standen | Ver la tienda | De winkel bekijken | goed | Opmerking: verderop heet dezelfde actie "Ir a la tienda". Eén vorm kiezen mag, het hoeft niet. |
| Knop, alleen particulier | Soy profesional | Ik ben professional | goed | |

### Productfilm (tube en bus)

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Alt-tekst afbeelding tube | Tubo de crema para pies PEDIBAEHR con 10 % de urea | Tube voetcrème van PEDIBAEHR met 10 % ureum | fout | Voorstel: `Tubo de crema para pies PEDIBAEHR con un 10 % de urea`. Reden: zie de volgende rij. |
| Kop bij de tube | Crema para pies con 10 % de urea | Voetcrème met 10 % ureum | fout | Voorstel: `Crema para pies con un 10 % de urea`. Reden: in Spanje hoort vóór een percentage een lidwoord (Fundéu: "No es adecuado escribir la cantidad sin ningún determinante"); de pagina schrijft zelf ook "Con un 5 % de urea". |
| Etiket op de tube (film.js en de afbeeldingen in public/posters) | Crema para pies con 10 % de urea | Voetcrème met 10 % ureum | fout | Voorstel: `Crema para pies con un 10 % de urea`, of even lang als nu: `Crema para pies con urea al 10 %`. Reden: als in de vorige rij; de regel vult het etiket nu al bijna helemaal. |
| Label, alleen professional | Precio profesional tras el alta | Professionele prijs na aanmelding | goed | Opmerking: "el alta" is correct; een vrouwelijk woord met beklemtoonde a krijgt het lidwoord el. |
| Label, alleen particulier | Disponible en la tienda | Verkrijgbaar in de winkel | goed | |
| Aanwijzer bij de tube | Urea al 10 % | Ureum, 10 % | goed | |
| Aanwijzer bij de tube | De Waiblingen (Alemania), desde 1949 | Uit Waiblingen (Duitsland), sinds 1949 | kan beter | Voorstel: `BAEHR, en Waiblingen (Alemania) desde 1949` (BAEHR, in Waiblingen sinds 1949). Reden: op een productbeeld leest "De Waiblingen" als herkomst van de crème; waar de producten worden gemaakt is niet geverifieerd, dat BAEHR sinds 1949 in Waiblingen zit wel. |
| Aanwijzer bij de tube | PEDIBAEHR: productos para y por especialistas en el cuidado de los pies | PEDIBAEHR: producten voor en door specialisten in voetverzorging | fout | Voorstel: `PEDIBAEHR: productos creados por y para especialistas en el cuidado de los pies` (producten gemaakt door en voor specialisten in voetverzorging). Reden: woord voor woord vertaald uit het Duitse "für und von"; in het Spaans is de vaste volgorde "por y para" en hoort bij "por" een deelwoord. |
| Kop bij tube en bus | Dos texturas, una sola marca | Twee texturen, één merk | goed | |
| Bijschrift | Crema | Crème | goed | |
| Bijschrift, kop, protocolstap en etiket op de bus | Crema en espuma | Crèmeschuim (letterlijk: crème in schuimvorm) | goed | Opmerking: term 3 uit de woordenlijst. |
| Alt-tekst afbeelding tube en bus | Tubo de crema y bote de crema en espuma PEDIBAEHR | Tube crème en bus crèmeschuim van PEDIBAEHR | goed | |
| Tekst bij de bus | Espuma de textura ligera y rápida absorción. | Schuim met een lichte textuur dat snel intrekt. | goed | Opmerking: dekt de geverifieerde fabrikantzin "schnell einziehender Schaum mit leichter Textur". |
| Kenmerk | Orange-Lemongrass | Productnaam (sinaasappel en citroengras) | goed | Opmerking: zie de onzekerheid over de schrijfwijze onderaan. |
| Kenmerk | Con un 5 % de urea | Met 5 % ureum | goed | |
| Kenmerk | Vegana | Veganistisch | goed | Opmerking: vrouwelijke vorm, past bij "crema". |
| Knop | Ver cremas en espuma | Crèmeschuimen bekijken | goed | |
| Alt-tekst afbeelding bus | Bote de crema en espuma PEDIBAEHR Orange-Lemongrass | Bus crèmeschuim PEDIBAEHR Orange-Lemongrass | goed | |
| Aanwijzing | Arrastra para girar | Sleep om te draaien | goed | |
| Aanwijzing | Desliza | Schuif verder (scrol) | goed | |
| Etiketten, Duitstalig (film.js) | PEDIBAEHR, Fußcreme, mit 10 % Urea, Cremeschaum, Orange-Lemongrass, 125 ml, BAEHR | Duitse verpakkingstekst | goed | Opmerking: Duits, niet als Spaans beoordeeld. De productnaam "Fußcreme mit 10 % Urea" is niet geverifieerd, zie onderaan. |

### Protocol (beide standen)

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop | El protocolo en cabina | Het protocol in de cabine (de behandelruimte van de salon) | goed | |
| Intro | Cuatro pasos y un producto para cada uno. Todo de la misma marca. | Vier stappen en voor elke stap een product. Alles van hetzelfde merk. | goed | |
| Knop | Ver los productos de cada paso | De producten van elke stap bekijken | goed | |
| Stap, naam | Baño | Bad | kan beter | Voorstel: `Baño de pies` (voetbad). Reden: los staand betekent "baño" ook badkamer; "baño de pies" is de vakterm uit de woordenlijst (term 10). |
| Stap, tekst | Prepara la piel antes de empezar. | Bereidt de huid voor voordat je begint. | goed | |
| Stap, naam | Exfoliación | Scrub (exfoliatie) | goed | |
| Stap, tekst | Retira la piel seca. | Verwijdert de droge huid. | goed | |
| Stap, naam | Mascarilla | Masker | goed | |
| Stap, tekst | Cuidado intensivo durante el servicio. | Intensieve verzorging tijdens de behandeling. | goed | |
| Stap, tekst | El cierre de cada servicio. | De afsluiting van elke behandeling. | goed | |

### Professionals (alleen in de stand Profesional)

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop | Alta profesional en dos minutos | Professionele aanmelding in twee minuten | kan beter | Voorstel: `Solicita tu alta profesional en dos minutos` (Vraag je professionele aanmelding aan in twee minuten). Reden: de aanvraag kost twee minuten, de aanmelding is pas rond na de controle van één werkdag; zo belooft de kop niet meer dan de tekst eronder. |
| Intro | Rellena los datos de tu salón. Revisamos la solicitud en un día laborable y activamos tus precios profesionales. | Vul de gegevens van je salon in. We beoordelen de aanvraag binnen één werkdag en activeren je professionele prijzen. | kan beter | Voorstel: `Rellena los datos de tu negocio. Revisamos la solicitud en un día laborable y activamos tus precios profesionales.` (de gegevens van je zaak). Reden: een podoloog heeft een "clínica" of "consulta" en een zzp'er vaak geen salon; "negocio" past bij alle doelgroepen die de pagina zelf noemt. |
| Voordeel | Precios profesionales | Professionele prijzen | goed | |
| Voordeel | Pedido rápido por lista | Snel bestellen per lijst | kan beter | Voorstel: `Pedido rápido por referencia` (snel bestellen op artikelnummer) als dat de functie is, anders alleen `Pedido rápido`. Reden: "por lista" is geen gangbare term en zegt niet wat de functie doet. |
| Voordeel | Repite tu último pedido con un clic | Herhaal je laatste bestelling met één klik | goed | Opmerking: "clic" is de Spaanse spelling. |
| Voordeel | Facturas e historial en tu cuenta | Facturen en geschiedenis in je account | kan beter | Voorstel: `Facturas e historial de pedidos en tu cuenta` (facturen en bestelgeschiedenis). Reden: "historial" alleen zegt niet waarvan. Het voegwoord "e" in plaats van "y" vóór de i-klank is correct. |
| Formulierlabel | Nombre del salón | Naam van de salon | kan beter | Voorstel: `Nombre comercial` (handelsnaam). Reden: gebruikelijk veld op Spaanse zakelijke formulieren en passend voor salon, praktijk en zzp'er. |
| Formulierlabel | NIF o CIF | NIF of CIF (Spaans fiscaal nummer) | goed | Opmerking: naar mijn kennis heet het nummer officieel sinds 2008 alleen NIF; CIF is in de praktijk nog gewoon en helpt de invuller. |
| Formulierlabel | Correo electrónico | E-mailadres | goed | |
| Knop | Solicitar el alta | De aanmelding aanvragen | goed | |
| Melding na verzenden | Solicitud enviada. Te respondemos en un día laborable. | Aanvraag verzonden. We antwoorden je binnen één werkdag. | goed | Opmerking: wie de termijn waterdicht wil, schrijft `en el plazo de un día laborable`. |
| Noot onder het formulier | Demostración de diseño: no se envía ningún dato. | Ontwerpdemonstratie: er worden geen gegevens verzonden. | goed | |

Het formulier toont geen foutmelding in tekst als een veld leeg of ongeldig is. Er is dus geen Spaanse foutmelding om te beoordelen.

### Particulieren (alleen in de stand Particular)

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop | Lo que usa tu profesional, también en casa | Wat jouw professional gebruikt, ook thuis | kan beter | Voorstel: `Lo que usan los profesionales, también en casa` (Wat de professionals gebruiken, ook thuis). Reden, oordeel: "tu profesional" zonder zelfstandig naamwoord klinkt onaf; gewoon is "tu esteticista", "tu podólogo" of het algemene "los profesionales". |
| Intro | Compra los mismos productos para el cuidado diario. Envío gratuito en pedidos a partir de 60 €. | Koop dezelfde producten voor de dagelijkse verzorging. Gratis verzending bij bestellingen vanaf 60 €. | goed | Opmerking: ook hier een harde spatie vóór het euroteken. |
| Knop | Ir a la tienda | Naar de winkel | goed | |

### Seminars

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop | Seminarios para profesionales | Seminars voor professionals | goed | |
| Datum | 26 nov | 26 nov | goed | Opmerking: een afkorting krijgt volgens de regel een punt (nov.); in een datumblokje is de vorm zonder punt gangbaar. |
| Titel | Beauty Expert: maratón formativo online | Beauty Expert: online opleidingsmarathon | goed | |
| Tekst | Onicólisis y cuidado profesional BAEHR. Online, de 10:00 a 12:00 (hora peninsular). En ruso con traducción al español. | Onycholyse en professionele BAEHR-verzorging. Online, van 10:00 tot 12:00 uur (tijd van het Spaanse vasteland). In het Russisch met vertaling naar het Spaans. | kan beter | Voorstel als de opdrachtgever geen risico wil: `Cuidado profesional de las uñas con BAEHR. De 10:00 a 12:00 (hora peninsular). En ruso con traducción al español.` (Professionele nagelverzorging met BAEHR.) Reden, oordeel: "onicólisis" is een nagelaandoening; naast de merknaam kan dat lezen als een product voor een aandoening, en nagelaandoeningen behandelen is in Spanje voorbehouden aan zorgverleners zoals de podólogo. De taal van de huidige zin is correct. "Online" staat al in de titel. |
| Knop | Inscribirme | Mij inschrijven | goed | |
| Link | Ver todos los seminarios | Alle seminars bekijken | goed | |

### Het merk

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Kop | Una marca alemana con oficio | Een Duits merk met vakmanschap | goed | |
| Tekst | BAEHR nació en 1949 en Waiblingen, cerca de Stuttgart, y sigue siendo una empresa familiar. BAEHR España distribuye sus productos a salones, profesionales de manicura y pedicura, podólogos y particulares. | BAEHR ontstond in 1949 in Waiblingen, bij Stuttgart, en is nog altijd een familiebedrijf. BAEHR España levert de producten aan salons, manicure- en pedicureprofessionals, podologen en particulieren. | goed | |
| Cijfer | 1949, año de fundación | 1949, oprichtingsjaar | goed | |
| Cijfer | 41, países con distribuidor oficial | 41, landen met een officiële distributeur | kan beter | Voorstel: getal `Más de 40` (meer dan 40), bijschrift ongewijzigd. Reden: 41 is een eigen telling van de partnerlijst (41 landen plus de regio Arabisch Schiereiland) en geen cijfer van de fabrikant; "más de 40" blijft kloppen als de lijst verandert. |
| Cijfer | 7, tipos de piel en el sistema PEDIBAEHR | 7, huidtypen in het PEDIBAEHR-systeem | goed | |

### Voettekst

| Plaats | Spaanse tekst | Terugvertaling | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Tekst | BAEHR España es el distribuidor oficial de BAEHR en España. | BAEHR España is de officiële distributeur van BAEHR in Spanje. | goed | Opmerking: "el distribuidor" leest als de enige officiële distributeur. Is dat niet zeker, schrijf dan `BAEHR España, distribuidor oficial de BAEHR en España.` |
| Adres | Proxy Beauty Spain, S.L. Calle Perelló, 34, 08005 Barcelona. | Proxy Beauty Spain, S.L. Calle Perelló 34, 08005 Barcelona. | goed | Opmerking: strikt volgens de spellingsregel met spatie (S. L.); in handelsnamen is S.L. de gewone vorm. |
| Navigatie in de voet, aria-label | Tienda | Winkel | kan beter | Voorstel: `Secciones` (onderdelen). Reden: het label herhaalt de eerste link; een schermlezer zegt nu twee keer "Tienda". |
| Navigatie, aria-label | Redes sociales | Sociale media | goed | |
| Links | Instagram, Facebook, Telegram, WhatsApp | Merknamen | goed | |
| Navigatie, aria-label | Legal | Juridisch | goed | |
| Link | Aviso legal | Juridische kennisgeving (colofon) | goed | |
| Link | Política de privacidad | Privacybeleid | goed | |
| Link | Política de cookies | Cookiebeleid | goed | |
| Slotregel | Concepto de diseño, noviembre de 2026. | Ontwerpconcept, november 2026. | goed | |

## Vaktermen waar om gevraagd is

| Term | Oordeel | Onderbouwing |
|---|---|---|
| cabina | goed | Feit: het officiële vakcertificaat IMPP0108 schrijft "cabinas de belleza en hoteles y gimnasios". Nuance, oordeel: het is het woord van de schoonheidssalon; een podoloog zegt "consulta". Voor deze kop is het goed. |
| protocolo | goed | Feit: IMPP0108 schrijft "Realizar protocolos de tratamientos estéticos de manos y pies"; de Thuya-catalogus schrijft "Técnicas profesionales con exclusivos protocolos". |
| servicio | goed | Feit: IMPP0108 schrijft "antes de cada servicio" en "servicios de manicura y pedicura". Het woord vermijdt bovendien "tratamiento". |
| crema en espuma | goed | Feit: term 3 uit de woordenlijst (Callusan bij Podoservice). |
| alta profesional, darme de alta | goed | Oordeel: "darse de alta" is het gewone Spaanse woord voor je inschrijven als klant. Ik heb geen vakwinkel kunnen openen die precies deze woorden toont. |

## Noodzakelijke wijzigingen (fout)

Twee formuleringen, vier plekken in de code. Regelnummers volgens de stand van 15:03 UTC.

- `index.astro` regel 124, kop bij de tube. Oud: `Crema para pies con 10&nbsp;% de urea`. Nieuw: `Crema para pies con un 10&nbsp;% de urea`.
- `index.astro` regel 115, alt-tekst. Oud: `Tubo de crema para pies PEDIBAEHR con 10 % de urea`. Nieuw: `Tubo de crema para pies PEDIBAEHR con un 10 % de urea`.
- `film.js` regel 224, Spaanse regel op het etiket van de tube. Oud: `'Crema para pies con 10 % de urea'`. Nieuw: `'Crema para pies con un 10 % de urea'`. Past de regel niet meer op het etiket, gebruik dan `'Crema para pies con urea al 10 %'`: even lang als de huidige tekst en net zo correct. Maak daarna `public/posters/tubo.webp` en `public/posters/duo.webp` opnieuw, want in beide staat de oude regel op de tube.
- `index.astro` regel 131, aanwijzer bij de tube. Oud: `PEDIBAEHR: productos para y por especialistas en el cuidado de los pies`. Nieuw: `PEDIBAEHR: productos creados por y para especialistas en el cuidado de los pies`. Korter alternatief dat ook goed is: `PEDIBAEHR: por y para especialistas en el cuidado de los pies`.

## Optionele wijzigingen (kan beter)

Aanbevolen, omdat ze aan claims of feiten raken. Besluit van de opdrachtgever:

- Cijfer `41` wordt `Más de 40`, of laat de fabrikant het getal bevestigen.
- `De Waiblingen (Alemania), desde&nbsp;1949` wordt `BAEHR, en Waiblingen (Alemania) desde&nbsp;1949`.
- Seminartekst: `Onicólisis y cuidado profesional BAEHR.` wordt `Cuidado profesional de las uñas con BAEHR.` en het woord `Online,` in de zin erna vervalt. Houd de huidige tekst alleen aan als dit de officiële titel van de organisator is.
- Meta description: `Cosmética profesional alemana` vervalt en "alemana" verhuist naar het merk, zie het voorstel in de tabel.

Stijl en duidelijkheid:

- `Date de alta y compra con precios profesionales.` wordt `Date de alta y compra a precio profesional.`
- `Baño` wordt `Baño de pies`.
- `Alta profesional en dos minutos` wordt `Solicita tu alta profesional en dos minutos`.
- `Rellena los datos de tu salón.` wordt `Rellena los datos de tu negocio.`
- `Nombre del salón` wordt `Nombre comercial`.
- `Pedido rápido por lista` wordt `Pedido rápido por referencia` of `Pedido rápido`.
- `Facturas e historial en tu cuenta` wordt `Facturas e historial de pedidos en tu cuenta`.
- `Lo que usa tu profesional, también en casa` wordt `Lo que usan los profesionales, también en casa`.
- Aria-label van de navigatie in de voet: `Tienda` wordt `Secciones`.
- Technisch, geen tekstwijziging: `60 €` wordt op beide plekken `60&nbsp;€`.

## Onzeker of niet geverifieerd

Taal:

- Oordeel, niet met een bron gestaafd: de voorstellen "a precio profesional", "Lo que usan los profesionales", "Solicita tu alta profesional", "tu negocio" en "Nombre comercial". Het zijn redactionele oordelen. Tellingen uit Spaanse vakwinkels kon ik niet maken: het zoekhulpmiddel gaf geen bruikbare treffers op exacte woordgroepen.
- "por y para": één bron gevonden (Unión Profesional: "Creado por y para profesionales de tu sector"). Dat "para y por" ongebruikelijk is, is mijn oordeel.
- Lidwoord bij percentages: de Fundéu-regel is gelezen in een krant die de tekst overneemt (Hoy, 31-07-2023). fundeu.es en rae.es weigerden het hulpmiddel. Nuance: op etiketten en in productnamen komt de vorm zonder lidwoord in de praktijk voor. Ik noem het toch fout, omdat de norm duidelijk is en de pagina het zelf op een andere plek wel goed doet.
- "alta profesional" en "darme de alta": mijn oordeel is goed. Niet met een vakbron gestaafd.
- "Pedido rápido por lista": aanname dat een bestellijst is bedoeld. Welke functie de winkel krijgt weet ik niet; het voorstel hangt daarvan af.
- "Orange-Lemongrass": de fabrikant schrijft het zelf wisselend. Op de categoriepagina staat "Cremeschaum Orange-Lemongrass" naast "Fußcreme Orange-Lemongras" en de serie "Orange-Lemongras". De pagina volgt de naam van het schuim. Controleer de verpakking.
- Seminartekst: dat "onicólisis" naast de merknaam een claimrisico is, is mijn oordeel. Ik heb geen regel gelezen die een seminartitel als deze verbiedt.

Feiten op de pagina die deel A als niet geverifieerd markeert:

- Productieplaats en "Made in Germany": geraakt door "De Waiblingen (Alemania), desde 1949" en door "Cosmética profesional alemana".
- Aantal landen: de fabrikant noemt zelf geen getal. De 41 is een eigen telling, zonder de regio Arabisch Schiereiland. De lijst heet bij de fabrikant exportpartners; "distribuidor oficial" is daar een eigen weergave van.
- Exclusiviteit: "el distribuidor oficial" en "su distribuidor oficial" lezen als de enige officiële distributeur. Het woord exclusief staat nergens, dat is goed.

Feiten op de pagina die niet in deel A staan en die ik niet kon controleren:

- De actie 5 + 1 en de einddatum 30 november.
- Gratis verzending vanaf 60 €.
- Beoordeling van de aanvraag binnen één werkdag.
- Het seminar: datum, tijd, naam, onderwerp en taal.
- De accountfuncties: snel bestellen, bestelling herhalen, facturen en geschiedenis.
- De adressen van de sociale media en het WhatsApp-nummer.
- Het protocol van vier stappen als protocol van het merk. Deel A bevestigt alleen dat PEDIBAEHR voetbaden, peelings, maskers en schuimen voert.
- "cerca de Stuttgart": klopt volgens algemene kennis (Waiblingen ligt ongeveer tien kilometer van Stuttgart), maar staat niet in deel A.
- Het product "Fußcreme mit 10 % Urea", in het Spaans "Crema para pies con 10 % de urea". Eigen controle op de categoriepagina van de fabrikant, gelezen via een samenvattend hulpmiddel en mogelijk onvolledig: daar staan "Schutzcreme mit 10 % Urea" en "Sensitivbalsam soft mit 10 % Urea", geen "Fußcreme mit 10 % Urea". Is de Schutzcreme bedoeld, dan is het Spaans "Crema protectora con un 10 % de urea".

Wel gedekt door deel A: 1949, Waiblingen, familiebedrijf (Engelse bedrijfspagina van de fabrikant), zeven huidtypen, de zin over PEDIBAEHR en specialisten, 5 % urea, vegan, lichte textuur die snel intrekt, 125 ml.

Buiten de opdracht, wel nodig bij livegang, naar mijn kennis en niet nagekeken: een privacyregel met link bij het formulier en een Aviso legal met NIF en registergegevens.

## Bronnen bij de taaloordelen

- Fundéu over percentages, overgenomen door Hoy (31-07-2023): https://www.hoy.com.py/rae/el-porcentaje-las-dudas-y-las-formas-correctas-en-espanol
- Vakcertificaat IMPP0108, lokale kopie `bronnen/impp0108-fic.txt`: regel 153 (cabinas de belleza), 256 en 257 en 270 (cada servicio), 298 (protocolos), 406 en 407 (baño antes de comenzar el tratamiento), 442 en 443 (exfoliantes), 933 (servicios de manicura y pedicura).
- Thuya-catalogus, lokale kopie `bronnen/thuya-manosypies-2020.txt`: regel 22 (protocolos), regel 393 ("on un 20% de Urea", lees "con un 20 % de urea"), regel 455 ("suavizan y preparan las manos/pies").
- Unión Profesional, "Creado por y para profesionales de tu sector": https://upro.es/
- Industrias Oriol, "Todo para el día a día del salón profesional.": https://www.industriasoriol.com/
- Dizma, "Si eres profesional, propietario de un salón de peluquería o estética" en "Carrito: 0 Productos": https://www.tiendadepeluqueria-dizma.es/
- Podoservice, "ENVÍOS GRATIS a partir de 140 €": https://podoservice.es/
- Fabrikant, categoriepagina crèmes en schuimen (productnamen en schrijfwijze Lemongrass): https://www.fusspflege.com/podologie-fusspflege/fusspflegebedarf/cremes-und-schaeume/

De webpagina's zijn gelezen via een hulpmiddel dat de pagina samenvat en citaten teruggeeft. De twee lokale kopieën zijn rechtstreeks gelezen.
