Kan dit zo naar een Spaanse klant: ja, na wijzigingen.

Het Spaans is foutloos en leest op bijna alle plekken als origineel Spaans van Spanje; de tú-vorm is overal consequent en geen zin belooft een therapeutische of medische werking.

Verplicht zijn tien kleine ingrepen: drie wendingen op de merkpagina die vertaald klinken, "Envío gratuito" wordt op drie plekken "Envío gratis" zoals bij de grote Spaanse winkels, en vier koppen op de home missen de harde spatie vóór het laatste woord.

Werkwijze en voorbehoud

Datum: 21-11-2026. Beoordeeld: alle Spaanse tekst in `src/pages/index.astro`, `src/components/Alta.astro`, `src/pages/productos/crema-en-espuma-orange-lemongras.astro`, `src/pages/la-marca.astro` en de kop en voet van `src/layouts/Base.astro`, met title, meta description, JSON-LD, alt-teksten, aria-labels en de teksten die alleen in de stand Profesional of Particular zichtbaar zijn. De winkelmand (drawer) is niet beoordeeld, zoals gevraagd. Op deze pagina's zetten de scripts alleen "Menú" en "Cerrar" (`ui.js`) en "Pausar el giro" en "Reanudar el giro" (`visor.js`) neer; die zijn meegenomen.

Getoetst aan `docs/merk-en-woordenlijst.md` (deel A feiten, deel B vakwoorden, deel C claims), aan `CLAUDE.md` (ook de nieuwe eis van D: Spaans alsof een Spaans SEO-bureau het schreef, en knoppen, categorieën, verzendregels en paginatitels in de vorm van grote Spaanse beautywinkels) en aan de eerdere besluiten in `docs/redactie-protocolo-es.md`, `docs/eindredactie-protocolo-es.md` en `docs/eindredactie-home-es.md`. Het bestand `docs/es-referencias-tiendas.md` bestond tijdens deze controle niet; het zoekwerk naar Spaanse winkels heb ik zelf gedaan. baehr.com.es is niet bezocht. Er is niets gewijzigd behalve dit rapport.

Oordelen. Goed: correct en zo zou een Spaanse vakprofessional het schrijven. Kan beter: correct en niet vertaald, maar een Spaans bureau zou het anders of beter vindbaar schrijven; optioneel. Fout: een taalfout, een bewering buiten deel A, een overtreding van een projectregel uit `CLAUDE.md`, of een wending die een Spaanse lezer als vertaald herkent; moet worden aangepast.

Leeswijzer bij de tabellen: ze tonen de zichtbare tekst. Waar in de code `&nbsp;` staat, staat in de tabel een gewone spatie. `\|` in een tabel is het rechte streepje `|` uit de code. In de JavaScript-teksten van de productpagina en de merkpagina staan de harde spaties als letterlijk teken (U+00A0); dat is in orde.

Feit, over het geheel: de tú-vorm is overal consequent (Date, Rellena, Repite, Compra, Arrastra, Desliza, recorre, tu, tus, te); nergens usted. Accenten, ¿, kleine letters bij maanden, het lidwoord bij percentages in lopende tekst ("un 5 % de urea") en de harde spaties vóór %, ml en € kloppen. De verplichte punten uit eerdere rondes zijn verwerkt ("a precio profesional", "tu negocio", "Nombre comercial", "por y para", "Más de 40", "Con sal marina"). Twee eerdere aanbevelingen staan nog open: de maskerzin zonder "de los pies" en de seminartekst met "Onicólisis".

Voorbehoud: ik ben een taalmodel en geen menselijke moedertaalspreker. Webpagina's heb ik niet zelf geopend: het zoekhulpmiddel vat pagina's samen en geeft citaten terug. Waar een oordeel alleen op mijn taalgevoel rust, staat dat erbij.

Kop en voet (`src/layouts/Base.astro`, op alle drie de pagina's)

| Plaats | Spaans | Nederlands | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| Skiplink | Saltar al contenido | Naar de inhoud springen | goed | |
| Actiebalk, lang | 5 + 1 gratis en productos BAEHR del mismo tamaño. Hasta el 30 de noviembre. | 5 + 1 gratis op BAEHR-producten van dezelfde maat. Tot en met 30 november. | goed | "5 + 1" is in de Spaanse vakhandel een gewone formule. De actie zelf staat niet in deel A. |
| Actiebalk, kort | 5 + 1 gratis hasta el 30 de noviembre. | 5 + 1 gratis tot en met 30 november. | goed | |
| Logo, aria-label | BAEHR España, inicio | BAEHR España, startpagina | goed | |
| Hoofdnavigatie, aria-label | Principal | Hoofdnavigatie | goed | |
| Navigatie (kop, mobiel menu, voet) | Tienda / Protocolo / Profesionales / Seminarios / La marca / Contacto | Winkel / Protocol / Professionals / Seminars / Het merk / Contact | goed | Over "Seminarios" of "Formación": zie "Wat ik niet kon verifiëren". |
| Klantschakelaar, aria-label | Tipo de cliente | Soort klant | goed | |
| Klantschakelaar | Profesional / Particular | Professional / Particulier | goed | |
| Inloglink (kop en mobiel menu) | Acceder | Inloggen (letterlijk: toegang krijgen) | kan beter | Correct en gangbaar Spaans. Maar de pagina waar de link heen gaat zegt "Iniciar sesión", net als de winkel en de winkelmand, en Sephora.es heeft "Iniciar sesión" in de kop. Kies één woord voor de hele site. |
| Winkelmand | Cesta 0 | Winkelmand 0 | goed | "Cesta" is de Spaanse winkelvorm; "carrito" komt ook voor, bijvoorbeeld bij Druni. |
| Menuknop, dicht en open | Menú / Cerrar | Menu / Sluiten | goed | |
| Mobiel menu, aria-label | Menú | Menu | goed | |
| Voet, regel onder het logo | BAEHR España es el distribuidor oficial de BAEHR en España. | BAEHR España is de officiële distributeur van BAEHR in Spanje. | kan beter | `Distribuidor oficial de BAEHR en España.` Twee keer "España" in één korte zin; "el" leest als de enige, en exclusiviteit is in deel A niet geverifieerd. |
| Voet, adres | Proxy Beauty Spain, S.L. Calle Perelló, 34, 08005 Barcelona. | Proxy Beauty Spain, S.L., Calle Perelló 34, 08005 Barcelona. | goed | |
| Voet, aria-labels | Secciones / Redes sociales / Legal | Onderdelen / Sociale media / Juridisch | goed | |
| Voet, links | Aviso legal / Política de privacidad / Política de cookies | Juridische kennisgeving / Privacybeleid / Cookiebeleid | goed | De vaste namen in Spanje. |
| Voet, slotregel | Concepto de diseño, noviembre de 2026. | Ontwerpconcept, november 2026. | goed | |
| JSON-LD organisatie (onzichtbaar) | BAEHR España es el distribuidor oficial en España de la marca alemana BAEHR, fundada en 1949 en Waiblingen. | BAEHR España is de officiële distributeur in Spanje van het Duitse merk BAEHR, opgericht in 1949 in Waiblingen. | kan beter | Alleen als D niet zeker weet dat er geen tweede officiële distributeur is: "es distribuidor oficial" zonder "el". |

Home (`src/pages/index.astro`, met het aanmeldformulier uit `src/components/Alta.astro`)

| Plaats | Spaans | Nederlands | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title | BAEHR España \| Cosmética profesional para pies, manos y uñas | BAEHR Spanje, professionele cosmetica voor voeten, handen en nagels | goed | 60 tekens; het merk vooraan is gewoon op een home. |
| meta description | BAEHR España, distribuidor oficial de la marca alemana BAEHR. Cosmética profesional para pies, manos y uñas: para salones, profesionales de manicura y pedicura, podólogos y particulares. | BAEHR España, officiële distributeur van het Duitse merk BAEHR. Professionele cosmetica voor voeten, handen en nagels: voor salons, manicure- en pedicureprofessionals, podologen en particulieren. | kan beter | 186 tekens; Google toont er ongeveer 155, dus "podólogos y particulares" valt weg. "para ...: para" staat dubbel. Voorstel bij "Aanbevolen". |
| Sectie, aria-label | El protocolo, paso a paso | Het protocol, stap voor stap | goed | |
| H1 | Cosmética profesional para pies, manos y uñas | Professionele cosmetica voor voeten, handen en nagels | goed | |
| Intro, beide standen | Marca alemana fundada en 1949. BAEHR España es su distribuidor oficial. | Duits merk, opgericht in 1949. BAEHR España is er de officiële distributeur van. | goed | "su" leest als de enige; zie exclusiviteit bij "Aanbevolen". |
| Intro, Profesional | Date de alta y compra a precio profesional. | Meld je aan en koop tegen professionele prijs. | goed | |
| Intro, Particular | Envío gratuito en pedidos a partir de 60 €. | Gratis verzending bij bestellingen vanaf 60 €. | fout | `Envío gratis en pedidos a partir de 60&nbsp;€.` Projectregel: de grote Spaanse winkels schrijven "envío gratis". Taalkundig is "gratuito" correct. |
| Knop, Profesional | Darme de alta | Mij aanmelden | goed | |
| Knop, beide standen | Ver el protocolo | Het protocol bekijken | goed | |
| Knop, Particular | Soy profesional | Ik ben professional | goed | |
| Alt openingsbeeld | Los cinco productos BAEHR del protocolo: frasco de baño de pies, tarro de exfoliante, caja de mascarillas, tubo de crema y bote de crema en espuma. | De vijf BAEHR-producten van het protocol: fles voetbad, pot scrub, doos maskers, tube crème en bus crèmeschuim. | goed | |
| Voetbad, kop | Baño de pies | Voetbad | goed | |
| Voetbad, productregel | SPA Wellness Fußbad, 500 ml | productnaam, 500 ml | goed | |
| Voetbad, zin | Limpia con suavidad y refresca los pies cansados. | Reinigt zacht en verfrist vermoeide voeten. | goed | |
| Voetbad, labels | Con hibisco y loto / Vegano / De 5 a 10 ml por baño | Met hibiscus en lotus / Veganistisch / 5 tot 10 ml per bad | goed | |
| Voetbad, knop | Ver el baño de pies | Het voetbad bekijken | goed | |
| Voetbad, alt | Frasco blanco de SPA Wellness Fußbad, con dosificador, junto a un cuenco blanco con agua en el que cae un chorro fino. | Witte fles SPA Wellness Fußbad, met pompje, naast een witte kom water waarin een dun straaltje valt. | goed | |
| Peeling, kop | Exfoliación | Scrubben (exfoliatie) | goed | |
| Peeling, productregel | fresh feet Fußpeeling, 125 ml | productnaam, 125 ml | goed | |
| Peeling, zin | Alisa la piel áspera de los pies. | Maakt de ruwe huid van de voeten glad. | goed | |
| Peeling, labels | Con sal marina / Con minerales y oligoelementos / En 125 y 450 ml | Met zeezout / Met mineralen en sporenelementen / In 125 en 450 ml | goed | |
| Peeling, knop | Ver el exfoliante | De scrub bekijken | goed | |
| Peeling, alt | Tarro abierto del exfoliante fresh feet Fußpeeling, con la tapa al lado y cristales de sal alrededor. | Open pot van de scrub fresh feet Fußpeeling, met het deksel ernaast en zoutkristallen eromheen. | goed | |
| Masker, kop | Mascarilla | Masker | goed | |
| Masker, productregel | Fuß-Vliesmaske Orange-Lemongras | productnaam | goed | |
| Masker, zin | Mascarilla de tejido para el cuidado intensivo de la piel muy seca. | Doekmasker voor de intensieve verzorging van de zeer droge huid. | kan beter | Open uit de vorige ronde: voeg "de los pies" toe. "Mascarilla de tejido" is in Spaanse winkels vooral een gezichtsmasker. |
| Masker, labels | Con karité, macadamia y coco / Vegana / Caja de 5 pares | Met shea, macadamia en kokos / Veganistisch / Doos met 5 paar | goed | |
| Masker, knop | Ver la mascarilla | Het masker bekijken | goed | |
| Masker, alt | Caja de la mascarilla Fuß-Vliesmaske Orange-Lemongras, de la que salen cinco sobres en abanico. | Doos van het masker Fuß-Vliesmaske Orange-Lemongras, waaruit vijf sachets in een waaier komen. | goed | |
| Crème, kop | Crema | Crème | goed | |
| Crème, productregel | Fußcreme Orange-Lemongras, 125 ml | productnaam, 125 ml | goed | |
| Crème, zin | Cuida la piel de los pies con aceites de naranja y de lemongrass. | Verzorgt de huid van de voeten met sinaasappel- en lemongrassolie. | goed | |
| Crème, labels | Con urea / Vegana / En 30, 125 y 500 ml | Met ureum / Veganistisch / In 30, 125 en 500 ml | goed | |
| Crème, knop | Ver la crema | De crème bekijken | goed | |
| Crème, alt | Tubo de la crema Fußcreme Orange-Lemongras, inclinado en el aire, con una espiral de crema debajo. | Tube van de crème Fußcreme Orange-Lemongras, schuin in de lucht, met een spiraal crème eronder. | goed | |
| Schuim, kop | Crema en espuma | Crèmeschuim | goed | |
| Schuim, productregel | Cremeschaum Orange-Lemongras, 125 ml | productnaam, 125 ml | goed | |
| Schuim, zin | Espuma de textura ligera y rápida absorción. | Schuim met een lichte textuur dat snel intrekt. | goed | |
| Schuim, labels | Con un 5 % de urea / Vegana / En 125 y 300 ml | Met 5 % ureum / Veganistisch / In 125 en 300 ml | goed | |
| Schuim, knop | Ver la crema en espuma | Het crèmeschuim bekijken | goed | |
| Schuim, alt | Bote de la crema en espuma Cremeschaum Orange-Lemongras, inclinado en el aire, con una nube de espuma debajo. | Bus van het crèmeschuim Cremeschaum Orange-Lemongras, schuin in de lucht, met een wolk schuim eronder. | goed | |
| Slot, kop | Cinco pasos, un protocolo | Vijf stappen, één protocol | goed | |
| Slot, zin | Un producto BAEHR para cada paso. | Eén BAEHR-product voor elke stap. | goed | |
| Slot, knop Profesional | Pedir los cinco productos | De vijf producten bestellen | goed | |
| Slot, knop Particular | Comprar los cinco productos | De vijf producten kopen | goed | |
| Stappenbalk, aria-label | Pasos del protocolo | Stappen van het protocol | goed | |
| Stappenbalk | Baño / Exfoliación / Mascarilla / Crema / Espuma | Bad / Scrubben / Masker / Crème / Schuim | goed | |
| Aanwijzing | Desliza | Scrol verder | goed | |
| Rij, kop | Los cinco, de un vistazo | De vijf in één oogopslag | goed | Vaste Spaanse kopformule ("La semana, de un vistazo"). |
| Rij, intro | En el orden del protocolo, del baño de pies a la crema en espuma. | In de volgorde van het protocol, van voetbad tot crèmeschuim. | kan beter | `Por orden de uso, del baño de pies a la crema en espuma.` Correct, maar stijf. Taalgevoel. |
| Rij, soorten | Baño de pies / Exfoliante de pies / Mascarilla de pies / Crema de pies / Crema en espuma | Voetbad / Voetscrub / Voetmasker / Voetcrème / Crèmeschuim | goed | |
| Rij, maten | 500 ml / 125 y 450 ml / Caja de 5 pares / 30, 125 y 500 ml / 125 y 300 ml | dezelfde maten | goed | |
| Rij, links | Ver en el protocolo / Ver la ficha | In het protocol bekijken / De productfiche bekijken | goed | "Ficha" is het gewone Spaanse winkelwoord. |
| Rij, aria-labels | Ver el baño de pies en el protocolo / Ver el exfoliante en el protocolo / Ver la mascarilla en el protocolo / Ver la crema de pies en el protocolo / Ver la ficha de la crema en espuma | Het voetbad, de scrub, het masker, de voetcrème in het protocol bekijken / De productfiche van het crèmeschuim bekijken | goed | |
| Professionals, kop | Solicita tu alta profesional en dos minutos | Vraag in twee minuten je professionele account aan | fout | Taal goed. De harde spatie ontbreekt: `en dos&nbsp;minutos`. Projectregel voor titels. |
| Professionals, intro | Rellena los datos de tu negocio. Revisamos la solicitud en un día laborable y activamos tus precios profesionales. | Vul de gegevens van je zaak in. We beoordelen de aanvraag binnen één werkdag en zetten je professionele prijzen aan. | goed | |
| Professionals, voordelen | Precios profesionales / Pedido rápido por referencia / Repite tu último pedido con un clic / Facturas e historial de pedidos en tu cuenta | Professionele prijzen / Snel bestellen op artikelnummer / Herhaal je laatste bestelling met één klik / Facturen en bestelgeschiedenis in je account | goed | |
| Pas bij het formulier | Profesional / Nombre comercial / NIF o CIF | Professional / Handelsnaam / NIF of CIF | goed | |
| Formulier, labels | Nombre comercial / NIF o CIF / Correo electrónico | Handelsnaam / NIF of CIF (Spaans fiscaal nummer) / E-mailadres | goed | |
| Formulier, knop | Solicitar el alta | De aanmelding aanvragen | goed | |
| Formulier, melding | Solicitud enviada. Te respondemos en un día laborable. | Aanvraag verzonden. We antwoorden je binnen één werkdag. | goed | |
| Formulier, noot | Demostración de diseño: no se envía ningún dato. | Ontwerpdemonstratie: er worden geen gegevens verzonden. | goed | |
| Particulieren, kop | Lo que usan los profesionales, también en casa | Wat de professionals gebruiken, ook thuis | fout | Taal goed. De harde spatie ontbreekt: `también en&nbsp;casa`. |
| Particulieren, intro, zin 1 | Compra los mismos productos para el cuidado diario. | Koop dezelfde producten voor de dagelijkse verzorging. | kan beter | `Compra los mismos productos para el cuidado de tus pies.` Scrub en masker zijn geen dagelijkse producten, en "dagelijks" staat niet in deel A; de schrijver schrapte het eerder bij de crème om dezelfde reden. |
| Particulieren, intro, zin 2 | Envío gratuito en pedidos a partir de 60 €. | Gratis verzending bij bestellingen vanaf 60 €. | fout | `Envío gratis en pedidos a partir de 60&nbsp;€.` Zie hierboven. |
| Particulieren, knop | Ver el protocolo | Het protocol bekijken | goed | |
| Seminars, kop | Seminarios para profesionales | Seminars voor professionals | fout | Taal goed. De harde spatie ontbreekt: `para&nbsp;profesionales`. |
| Seminars, datum | 26 nov | 26 nov | goed | In een datumblokje is de afkorting zonder punt gangbaar. |
| Seminars, titel | Beauty Expert: maratón formativo online | Beauty Expert: online opleidingsmarathon | kan beter | `maratón formativo&nbsp;online`. Kaarttitel, zelfde regel als de koppen. |
| Seminars, tekst | Onicólisis y cuidado profesional BAEHR. Online, de 10:00 a 12:00 (hora peninsular). En ruso con traducción al español. | Onycholyse en professionele BAEHR-verzorging. Online, van 10.00 tot 12.00 uur (tijd van het Spaanse vasteland). In het Russisch met vertaling in het Spaans. | kan beter | Open uit de vorige ronde; voorstel bij "Aanbevolen". De taal zelf is correct. |
| Seminars, knop en link | Inscribirme / Ver todos los seminarios | Mij inschrijven / Alle seminars bekijken | goed | |
| Merk, kop | Una marca alemana con oficio | Een Duits merk met vakmanschap | fout | Taal goed. De harde spatie ontbreekt: `con&nbsp;oficio`. |
| Merk, zin 1 | BAEHR nació en 1949 en Waiblingen, cerca de Stuttgart, y sigue siendo una empresa familiar. | BAEHR ontstond in 1949 in Waiblingen, bij Stuttgart, en is nog altijd een familiebedrijf. | goed | "Cerca de Stuttgart" staat niet in deel A (algemene kennis). |
| Merk, zin 2 | BAEHR España distribuye sus productos a salones, profesionales de manicura y pedicura, podólogos y particulares. | BAEHR España distribueert de producten aan salons, manicure- en pedicureprofessionals, podologen en particulieren. | kan beter | `BAEHR España lleva sus productos a salones, ...` "Distribuir" is groothandel en past slecht bij "particulares". Taalgevoel. |
| Merk, cijfer | 1949 / año de fundación | 1949 / oprichtingsjaar | goed | |
| Merk, cijfer | +40 / países con distribuidor oficial | 40+ / landen met een officiële distributeur | kan beter | `Más de 40`, zoals op de merkpagina: één vorm voor hetzelfde cijfer. |
| Merk, cijfer | 7 / tipos de piel en el sistema PEDIBAEHR | 7 / huidtypen in het PEDIBAEHR-systeem | goed | |
| Merk, link | Conocer la marca | Het merk leren kennen | goed | |

Productpagina (`src/pages/productos/crema-en-espuma-orange-lemongras.astro`)

| Plaats | Spaans | Nederlands | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title | Crema en espuma para pies Orange-Lemongras \| BAEHR España | Crèmeschuim voor de voeten Orange-Lemongras, BAEHR Spanje | goed | 57 tekens; "espuma para pies" zit erin, de zoekvorm die ook Eucerin Spanje gebruikt. Optioneel PEDIBAEHR erbij, zie "Aanbevolen". |
| meta description en JSON-LD Product | Crema en espuma PEDIBAEHR con un 5 % de urea, pantenol y extractos de ginkgo, ginseng y limón. Ligera y de rápida absorción. Vegana. En 125 y 300 ml. | Crèmeschuim van PEDIBAEHR met 5 % ureum, panthenol en extracten van ginkgo, ginseng en citroen. Licht en snel intrekkend. Veganistisch. In 125 en 300 ml. | goed | 149 tekens. |
| Kruimelpad, aria-label | Ruta de navegación | Navigatiepad | goed | |
| Kruimelpad, zichtbaar en JSON-LD | Inicio / Tienda / Cremas en espuma / Orange-Lemongras | Start / Winkel / Crèmeschuimen / Orange-Lemongras | kan beter | Laatste stap `Crema en espuma Orange-Lemongras`. Spaanse winkels eindigen met de productnaam; "Orange-Lemongras" alleen is de serie. |
| JSON-LD Product, naam | Cremeschaum Orange-Lemongras | productnaam van de fabrikant | goed | |
| 3D, aria-label | Modelo 3D giratorio del bote de Cremeschaum Orange-Lemongras | Draaibaar 3D-model van de bus Cremeschaum Orange-Lemongras | goed | |
| 3D, alt stilstaand beeld | Bote blanco de la crema en espuma Cremeschaum Orange-Lemongras, de PEDIBAEHR, con la etiqueta de frente. | Witte bus van het crèmeschuim Cremeschaum Orange-Lemongras, van PEDIBAEHR, met het etiket naar voren. | goed | |
| 3D, aanwijzing | Arrastra para girar | Sleep om te draaien | goed | |
| 3D, knop | Pausar el giro / Reanudar el giro | Draaien pauzeren / Draaien hervatten | goed | |
| H1 | Crema en espuma + Cremeschaum Orange-Lemongras | Crèmeschuim + productnaam | goed | |
| Labels, aria-label | Marca, línea y serie | Merk, lijn en serie | goed | |
| Labels | PEDIBAEHR / Línea WELLNESS / Serie Orange-Lemongras | Merk / lijn WELLNESS / serie Orange-Lemongras | goed | |
| Intro | Espuma ligera y de rápida absorción para el cuidado de los pies. Lleva un 5 % de urea, pantenol y extractos de ginkgo, ginseng y limón. Vegana. | Licht, snel intrekkend schuim voor de verzorging van de voeten. Bevat 5 % ureum, panthenol en extracten van ginkgo, ginseng en citroen. Veganistisch. | goed | |
| Maat | Tamaño: 125 ml / 300 ml | Maat: 125 ml / 300 ml | goed | |
| Prijs, Profesional, label | Precio profesional | Professionele prijs | goed | |
| Prijs, Profesional, tekst | Lo verás al acceder a tu cuenta. | Je ziet hem zodra je inlogt op je account. | goed | Zie "Acceder" bij de kop. |
| Prijs, Profesional, link | Acceder | Inloggen | goed | De link gaat naar het aanmeldblok, zie "Buiten de taal". |
| Prijs, Profesional, regel | ¿Aún no tienes cuenta? Solicitar el alta | Nog geen account? Aanmelding aanvragen | kan beter | `Solicita el alta`. Na een vraag in tú loopt de gebiedende wijs door; de infinitief klinkt als een losse knop. |
| Prijs, Particular, label | Precio para particulares | Prijs voor particulieren | goed | |
| Prijs, Particular, tekst | Precio pendiente de publicar. | Prijs nog te publiceren. | kan beter | `Precio disponible próximamente.` "Pendiente de publicar" klinkt ambtelijk. |
| Aantal, aria-labels | Cantidad / Uno menos / Uno más | Aantal / Eén minder / Eén meer | goed | |
| Knop (ook in de balk onderaan) | Añadir a la cesta | In de winkelmand | goed | Spaanse winkelvorm, bijvoorbeeld Farmacia Jiménez; "Añadir al carrito" komt ook voor. |
| Melding | Añadido a la cesta. Ver la cesta | Toegevoegd aan de winkelmand. Winkelmand bekijken | goed | |
| Service, Particular | Envío gratuito en pedidos a partir de 60 €. | Gratis verzending bij bestellingen vanaf 60 €. | fout | `Envío gratis en pedidos a partir de 60&nbsp;€.` Zie de home. |
| Service | Fabricante: Gustav Baehr GmbH, Waiblingen (Alemania). | Fabrikant: Gustav Baehr GmbH, Waiblingen (Duitsland). | goed | |
| Service | Vendido por BAEHR España, distribuidor oficial de la marca. | Verkocht door BAEHR España, officieel distributeur van het merk. | goed | |
| Feitenband, aria-label | Datos del producto | Productgegevens | goed | |
| Feitenband | 5 % / de urea | 5 % / ureum | goed | In een cijferblok is de vorm zonder lidwoord gewoon. |
| Feitenband | 5 estrellas / en tolerancia cutánea, según Dermatest (09/2025) | 5 sterren / voor huidverdraagzaamheid, volgens Dermatest (09/2025) | goed | Met instituut en datum, zoals deel C3 vraagt. |
| Feitenband | Vegana / sin ingredientes de origen animal | Veganistisch / zonder ingrediënten van dierlijke oorsprong | goed | Het voorbeeld dat de AEMPS toestaat (deel C2). |
| Feitenband | 2 tamaños / 125 y 300 ml | 2 maten / 125 en 300 ml | goed | |
| Activos, kop | Sus activos | Zijn werkzame stoffen | kan beter | `Activos&nbsp;clave`. Gangbare kop; Eucerin Spanje spreekt van "ingredientes clave". "Sus activos" is correct, maar klinkt als "Seine Wirkstoffe". |
| Activos, lijst | Urea (Urea al 5 %) / Pantenol / Ginkgo (Extracto de ginkgo) / Ginseng (Extracto de ginseng) / Limón (Extracto de limón) | Ureum 5 % / Panthenol / Ginkgo-extract / Ginseng-extract / Citroenextract | goed | |
| Textuur, kop | Textura ligera | Lichte textuur | goed | |
| Textuur, citaat | Una espuma de rápida absorción que deja un tacto aterciopelado. | Een snel intrekkend schuim dat een fluweelzacht gevoel achterlaat. | goed | Dekt "für samtweiche Pflege". |
| Textuur, noot | Según BAEHR, las espumas para pies se absorben más rápido que las pomadas y apenas dejan residuos. | Volgens BAEHR trekken voetschuimen sneller in dan zalven en laten ze nauwelijks resten achter. | goed | Letterlijk de eigen uitleg van de fabrikant. |
| Protocol, kop | El último paso | De laatste stap | goed | |
| Protocol, intro | Cierra el protocolo de cinco pasos que te proponemos en la página de inicio. | Sluit het protocol van vijf stappen af dat we je op de startpagina voorstellen. | kan beter | `Esta espuma cierra el protocolo ...` Zonder onderwerp leest "Cierra" ook als opdracht aan de lezer (tú). |
| Protocol, knop | Ver el protocolo | Het protocol bekijken | goed | |
| Protocol, stappen | Baño de pies / Exfoliación / Mascarilla / Crema / Crema en espuma | Voetbad / Scrubben / Masker / Crème / Crèmeschuim | goed | |
| Kaarten, kop | Los otros cuatro pasos | De andere vier stappen | goed | |
| Kaarten, soorten | Baño de pies con hibisco y loto / Exfoliante de pies con sal marina / Mascarilla de tejido para pies muy secos / Crema de pies con aceites de naranja y de lemongrass | Voetbad met hibiscus en lotus / Voetscrub met zeezout / Doekmasker voor zeer droge voeten / Voetcrème met sinaasappel- en lemongrassolie | goed | |
| Kaarten, maten | 500 ml / 125 y 450 ml / Caja de 5 pares / 30, 125 y 500 ml | dezelfde maten | goed | |
| Kaarten, link en aria-labels | Ver en el protocolo / Ver el baño de pies en el protocolo / Ver el exfoliante en el protocolo / Ver la mascarilla en el protocolo / Ver la crema de pies en el protocolo | In het protocol bekijken | goed | |
| FAQ, kop | Preguntas y respuestas | Vragen en antwoorden | kan beter | `Preguntas&nbsp;frecuentes`. De vaste Spaanse kop voor een FAQ op productpagina's. |
| FAQ, vraag 1 | ¿Cuánta urea lleva? | Hoeveel ureum zit erin? | goed | |
| FAQ, antwoord 1 | La crema en espuma Cremeschaum Orange-Lemongras lleva un 5 % de urea. Sus otros principios activos son el pantenol y los extractos de ginkgo, ginseng y limón. | Het crèmeschuim Cremeschaum Orange-Lemongras bevat 5 % ureum. De andere werkzame stoffen zijn panthenol en de extracten van ginkgo, ginseng en citroen. | kan beter | De volledige productnaam staat in vier antwoorden; zie "Aanbevolen". |
| FAQ, vraag 2 | ¿En qué se diferencia de la crema de pies Orange-Lemongras? | Waarin verschilt het van de voetcrème Orange-Lemongras? | goed | |
| FAQ, antwoord 2 | Las dos llevan urea, pero difieren en la textura y en el resto de los activos. La crema de pies Orange-Lemongras lleva aceites de naranja y de lemongrass; la crema en espuma, un 5 % de urea, pantenol y extractos de ginkgo, ginseng y limón, en una espuma ligera de rápida absorción. | Beide bevatten ureum, maar ze verschillen in textuur en in de overige werkzame stoffen. De voetcrème bevat sinaasappel- en lemongrassolie; het crèmeschuim 5 % ureum, panthenol en extracten van ginkgo, ginseng en citroen, in een licht, snel intrekkend schuim. | goed | |
| FAQ, vraag 3 | ¿Qué indica el sello de cinco estrellas? | Wat geeft het vijfsterrenzegel aan? | kan beter | `¿Qué es el sello de cinco estrellas?` Het antwoord zegt wat het zegel is, niet wat de sterren aangeven; dat staat ook niet in deel A. |
| FAQ, antwoord 3 | Es el sello de tolerancia cutánea de Dermatest GmbH. El de la crema en espuma Cremeschaum Orange-Lemongras es de septiembre de 2025 y se basa en una prueba clínica de 4 semanas con 20 voluntarios. | Het is het zegel voor huidverdraagzaamheid van Dermatest GmbH. Dat van dit crèmeschuim is van september 2025 en berust op een klinische test van 4 weken met 20 proefpersonen. | goed | Feiten gedekt door deel A. Herhaling van de naam: zie "Aanbevolen". |
| FAQ, vraag en antwoord 4 | ¿Es vegana? Sí. La crema en espuma Cremeschaum Orange-Lemongras es vegana. | Is het veganistisch? Ja. Het crèmeschuim Cremeschaum Orange-Lemongras is veganistisch. | goed | Herhaling van de naam: zie "Aanbevolen". |
| FAQ, vraag 5 | ¿Quién es el fabricante? | Wie is de fabrikant? | goed | |
| FAQ, antwoord 5 | Gustav Baehr GmbH, una empresa familiar con sede en Waiblingen (Alemania). En España la distribuye BAEHR España, distribuidor oficial de la marca. | Gustav Baehr GmbH, een familiebedrijf met zetel in Waiblingen (Duitsland). In Spanje distribueert BAEHR España het, officieel distributeur van het merk. | kan beter | `En España, este producto lo vende BAEHR España, ...` "La" slaat grammaticaal terug op "una empresa familiar"; in de losse JSON-LD-tekst is er geen product om naar te verwijzen. |

Merkpagina (`src/pages/la-marca.astro`)

| Plaats | Spaans | Nederlands | Oordeel | Voorstel en reden |
|---|---|---|---|---|
| title | La marca BAEHR, empresa familiar desde 1949 \| BAEHR España | Het merk BAEHR, familiebedrijf sinds 1949, BAEHR Spanje | kan beter | `BAEHR, empresa familiar alemana desde 1949 \| BAEHR España` (58 tekens). Een merk is geen bedrijf; zo is het één bewering. |
| meta description | BAEHR, empresa familiar alemana fundada en 1949 en Waiblingen: su historia, sus seis marcas y su distribuidor oficial en España. | BAEHR, Duits familiebedrijf opgericht in 1949 in Waiblingen: de geschiedenis, de zes merken en de officiële distributeur in Spanje. | goed | 127 tekens. "su distribuidor oficial": zie exclusiviteit bij "Aanbevolen". |
| H1 | BAEHR, de cerca | BAEHR van dichtbij | goed | |
| Intro, zin 1 | BAEHR nació en 1949 en Waiblingen (Alemania) y sigue siendo una empresa familiar. | BAEHR ontstond in 1949 in Waiblingen (Duitsland) en is nog altijd een familiebedrijf. | goed | |
| Intro, zin 2 | Fabrica y distribuye productos para la podología, el cuidado de los pies, la cosmética y el diseño de uñas. | Het maakt en distribueert producten voor de podologie, de voetverzorging, de cosmetica en het nageldesign. | kan beter | `Fabrica y distribuye productos de podología, cuidado de los pies, cosmética y diseño de uñas.` "Productos para la cosmética" schuurt; "productos de ..." is de cataloguswending. |
| Intro, zin 3 | BAEHR España es distribuidor oficial de la marca. | BAEHR España is officieel distributeur van het merk. | goed | |
| Geschiedenis, kop | De 1949 a hoy | Van 1949 tot nu | goed | |
| Geschiedenis, zin 1 | Gustav Baehr, comerciante de Hamburgo, fundó en 1949 en Waiblingen la empresa Technik Baehr. | Gustav Baehr, koopman uit Hamburg, richtte in 1949 in Waiblingen het bedrijf Technik Baehr op. | goed | |
| Geschiedenis, zin 2 | Sus primeros clientes fueron orfebres y dentistas; los profesionales de la pedicura y la estética llegaron después. | De eerste klanten waren goudsmeden en tandartsen; pedicures en schoonheidsspecialisten kwamen later. | goed | |
| Geschiedenis, zin 3 | En 1969 se convirtió en sociedad limitada, Gustav Baehr GmbH, y en 1977 tomaron el relevo dos hijos del fundador. | In 1969 werd het een besloten vennootschap, Gustav Baehr GmbH, en in 1977 namen twee zonen van de oprichter het over. | goed | |
| Geschiedenis, zin 4 | Hoy sigue siendo una empresa familiar, con casi 135 personas en plantilla y sede con showroom en Waiblingen. | Vandaag is het nog altijd een familiebedrijf, met bijna 135 mensen in dienst en een hoofdzetel met showroom in Waiblingen. | kan beter | `Hoy cuenta con una plantilla de casi 135 personas y tiene su sede, con sala de exposición, en Waiblingen.` Het familiebedrijf staat al in de intro; "con ... y sede con showroom" stapelt "con". |
| Cijferband, aria-label | BAEHR en cifras | BAEHR in cijfers | goed | |
| Cijferband | 1949 / fundación en Waiblingen | 1949 / oprichting in Waiblingen | goed | |
| Cijferband | 1977 / relevo generacional | 1977 / generatiewissel | goed | |
| Cijferband | Casi 135 / personas en plantilla | Bijna 135 / mensen in dienst | goed | |
| Cijferband | Más de 40 / países con socio de exportación | Meer dan 40 / landen met een exportpartner | fout | `países con distribuidor oficial`. "Socio de exportación" is "Exportpartner" woord voor woord; de home zegt over hetzelfde feit al "países con distribuidor oficial". |
| Merken, kop | Seis marcas de la casa | Zes merken van het huis | goed | |
| Merken, intro | Todo lo que BAEHR firma con su nombre se reparte en seis marcas. | Alles wat BAEHR met zijn naam ondertekent, is verdeeld over zes merken. | goed | |
| Merken, PEDIBAEHR | El cuidado de los pies: cremas, espumas, exfoliantes, baños y mascarillas. | Voetverzorging: crèmes, schuimen, scrubs, baden en maskers. | goed | |
| Merken, BAEHR BEAUTY CONCEPT | Un sistema de cuidado para el salón de belleza, con series como Aloe Vera, Detox o Time Expert. | Een verzorgingssysteem voor de schoonheidssalon, met series als Aloe Vera, Detox of Time Expert. | goed | |
| Merken, BAEHR BEAUTY CONCEPT NAILS | Para el diseño de uñas. | Voor nageldesign. | goed | |
| Merken, BAEHR Instrumental y Fresas | Instrumental de las líneas PODOLINE y ECO, además de fresas. | Instrumenten van de lijnen PODOLINE en ECO, en daarnaast frezen. | goed | "Instrumental" en "fresas" zijn de vakwoorden uit deel B. |
| Merken, BAEHR Equipamiento y Tecnología | Aparatos con aspiración o con spray para el cuidado de los pies, como BAEHR TEC A2000 y BAEHR PUR. | Apparaten met afzuiging of spray voor de voetverzorging, zoals BAEHR TEC A2000 en BAEHR PUR. | goed | Wat PUR is, staat niet in deel A; zie "Wat ik niet kon verifiëren". |
| Merken, BAEHR Higiene | La higiene, también con marca propia. | Hygiëne, ook met een eigen merk. | kan beter | `Productos de higiene, también de marca propia.` "La higiene, ..." is vaag; "productos de marca propia" is de Spaanse handelsterm. |
| Stelling, kop | Del gremio, para el gremio | Uit het vak, voor het vak | goed | "Ser del gremio" is gewoon Spaans voor "uit hetzelfde vak komen". |
| Stelling, zin 1 | PEDIBAEHR es la marca de BAEHR para el cuidado de los pies, con productos creados por y para especialistas. | PEDIBAEHR is het merk van BAEHR voor voetverzorging, met producten gemaakt door en voor specialisten. | goed | |
| Stelling, zin 2 | Detrás de su desarrollo hay más de setenta años de experiencia e investigación, y sus fórmulas combinan principios activos modernos y clásicos. | Achter de ontwikkeling zitten meer dan zeventig jaar ervaring en onderzoek, en de formules combineren moderne en klassieke werkzame stoffen. | goed | |
| Stelling, zin 3 | La gama cubre todas las necesidades del cuidado de los pies y se ordena por tipo de piel, del 1 al 7. | Het assortiment dekt alle behoeften van de voetverzorging en is ingedeeld naar huidtype, van 1 tot 7. | goed | "Todas las necesidades" belooft niet meer dan "für alle Problemstellungen" van de fabrikant. |
| Stelling, citaat (Duits) | „Produkte für und von Fußpflegespezialisten“, PEDIBAEHR | Duits citaat van de fabrikant | goed | Staat met `lang="de"`. |
| Kennis, kop | El saber se comparte | Kennis is er om te delen | goed | |
| Kennis, tekst | BAEHR comparte con gusto lo que sabe con los profesionales. Por eso organiza seminarios. | BAEHR deelt graag wat het weet met de professionals. Daarom organiseert het seminars. | fout | `BAEHR comparte lo que sabe con los profesionales en sus seminarios.` "Con gusto" is het Duitse "gerne" woord voor woord, "con ... con" staat dubbel, en "Por eso ..." leest als een vertaald "Deshalb ...". |
| Kennis, link | Ver los seminarios | De seminars bekijken | goed | |
| Spanje, kop | BAEHR en España | BAEHR in Spanje | goed | |
| Spanje, zin 1 | BAEHR España es Proxy Beauty Spain, S.L., distribuidor oficial de la marca, con sede en Barcelona. | BAEHR España is Proxy Beauty Spain, S.L., officieel distributeur van het merk, gevestigd in Barcelona. | goed | |
| Spanje, zin 2 | La empresa figura en la lista de socios de exportación que publica BAEHR. | Het bedrijf staat op de lijst van exportpartners die BAEHR publiceert. | fout | `Figura como tal en la lista de distribuidores internacionales que publica BAEHR.` Zelfde vertaalde wending "socios de exportación". |
| Spanje, zin 3 | Atendemos a salones, profesionales de manicura y pedicura, podólogos y particulares. | We bedienen salons, manicure- en pedicureprofessionals, podologen en particulieren. | goed | |
| Spanje, adres | Proxy Beauty Spain, S.L. / Calle Perelló, 34 / 08005 Barcelona | Proxy Beauty Spain, S.L., Calle Perelló 34, 08005 Barcelona | goed | |
| Slot, kop | ¿Empezamos? | Zullen we beginnen? | goed | |
| Slot, tekst | Date de alta como profesional o recorre el protocolo, producto a producto. | Meld je aan als professional of loop het protocol door, product voor product. | goed | |
| Slot, knoppen | Darme de alta / Ver el protocolo | Mij aanmelden / Het protocol bekijken | goed | |

Feiten en claims

Oordeel: geen zin op deze pagina's belooft een therapeutische of medische werking, en geen woord uit de lijst in deel C3 komt voor. Het dermatologische zegel staat alleen bij het product waarvan deel A de test kent, met instituut en datum, zoals deel C3 vraagt.

| Bewering | Waar | Stand tegen deel A |
|---|---|---|
| 5 % urea, panthenol, extracten van ginkgo, ginseng en citroen; vegan; 125 en 300 ml; licht en snel intrekkend | product, home | gedekt |
| 5 sterren huidverdraagzaamheid, Dermatest, 09/2025, 20 proefpersonen, 4 weken | product | gedekt, met vermelding van de test |
| Schuim trekt sneller in dan zalf en laat nauwelijks resten achter | product | gedekt, en toegeschreven ("Según BAEHR") |
| Fluweelzacht gevoel | product | gedekt door "für samtweiche Pflege" |
| Zonder ingrediënten van dierlijke oorsprong | product | toegestane formulering bij vegan (deel C2) |
| 1949, Waiblingen, koopman uit Hamburg, goudsmeden en tandartsen, 1969 GmbH, 1977 twee zonen, bijna 135 mensen, showroom, familiebedrijf | merkpagina, home, product | gedekt |
| Zes merkwerelden, PODOLINE en ECO, A2000 en PUR, afzuiging of spray | merkpagina | gedekt; wat PUR precies is, staat niet in deel A |
| Meer dan zeventig jaar, moderne en klassieke werkstoffen, alle behoeften, huidtypen 1 tot 7, door en voor specialisten, kennis delen en seminars | merkpagina | gedekt |
| Meer dan 40 landen | home, merkpagina | eigen telling (41) van de partnerlijst; de fabrikant noemt zelf geen getal |
| "el" of "su distribuidor oficial" | home, voet, JSON-LD, meta merkpagina | leest als de enige; exclusiviteit is niet geverifieerd |
| Cerca de Stuttgart | home | niet in deel A |
| 5 + 1 tot 30 november, gratis verzending vanaf 60 €, beoordeling binnen één werkdag, het seminar, de accountfuncties | kop, home, product | niet in deel A; zakelijke gegevens |

Verplichte wijzigingen

Tien ingrepen in drie bestanden. Zoek op de exacte oude tekst, niet op regelnummer: de bestanden werden tijdens deze controle nog bewerkt. De oude teksten hieronder zijn letterlijk uit de code overgenomen.

Verzendregel in het openingsscherm van de home, stand Particular. Bestand: `src/pages/index.astro`.

Oud:

```
<span data-when="home">Envío gratuito en pedidos a partir de 60&nbsp;€.</span>
```

Nieuw:

```
<span data-when="home">Envío gratis en pedidos a partir de 60&nbsp;€.</span>
```

Verzendregel in het blok voor particulieren op de home. Bestand: `src/pages/index.astro`.

Oud:

```
Compra los mismos productos para el cuidado diario. Envío gratuito en pedidos a partir de 60&nbsp;€.
```

Nieuw:

```
Compra los mismos productos para el cuidado diario. Envío gratis en pedidos a partir de 60&nbsp;€.
```

Wordt ook de aanbevolen wijziging van de eerste zin overgenomen, dan wordt de hele regel: `Compra los mismos productos para el cuidado de tus pies. Envío gratis en pedidos a partir de 60&nbsp;€.`

Verzendregel in de servicelijst van de productpagina, stand Particular. Bestand: `src/pages/productos/crema-en-espuma-orange-lemongras.astro`.

Oud:

```
<li data-when="home">Envío gratuito en pedidos a partir de 60&nbsp;€.</li>
```

Nieuw:

```
<li data-when="home">Envío gratis en pedidos a partir de 60&nbsp;€.</li>
```

Reden voor deze drie: `CLAUDE.md` schrijft voor dat verzendregels de vorm van de grote Spaanse beautywinkels volgen, en die schrijven "envío gratis". Druni: "¡Envío gratis desde 20,00 €!" (https://www.druni.es/ayuda/envio-y-seguimiento-del-pedido). Primor: "GRATIS desde 25€" (https://www.primor.eu/es_es/envios-y-devoluciones). Sephora: "Envío gratis, por compras superiores a 30€" (https://www.sephora.es/LAROC-HubPage.html). Vakleverancier Podoservice: "ENVÍOS GRATIS a partir de 140 €" (https://podoservice.es/, uit het vorige rapport). "Envío gratuito" is taalkundig correct; de wijziging is er alleen voor de winkelconventie. In `src` staat "Envío gratuito" alleen op deze drie plekken.

Harde spatie in vier koppen op de home. Bestand: `src/pages/index.astro`. Het zijn vier losse regels op verschillende plekken in het bestand.

Oud:

```
<h2 class="h2 rv">Solicita tu alta profesional en dos minutos</h2>
<h2 class="h2 rv">Lo que usan los profesionales, también en casa</h2>
<h2 class="h2 rv">Seminarios para profesionales</h2>
<h2 class="h2 rv">Una marca alemana con oficio</h2>
```

Nieuw:

```
<h2 class="h2 rv">Solicita tu alta profesional en dos&nbsp;minutos</h2>
<h2 class="h2 rv">Lo que usan los profesionales, también en&nbsp;casa</h2>
<h2 class="h2 rv">Seminarios para&nbsp;profesionales</h2>
<h2 class="h2 rv">Una marca alemana con&nbsp;oficio</h2>
```

Reden: `CLAUDE.md` zegt dat titels niet op één los woord eindigen. Alle andere koppen op deze drie pagina's binden de laatste twee woorden met `&nbsp;`; deze vier niet. Het zijn grote koppen in hoofdletters over meerdere regels, dus "MINUTOS", "CASA", "PROFESIONALES" of "OFICIO" kan alleen op de laatste regel belanden. De taal van de koppen is goed. Ik heb de weergave niet in een browser gezien; de afbreking zelf blijft een ontwerpzaak.

Cijferband op de merkpagina. Bestand: `src/pages/la-marca.astro`.

Oud:

```
<div class="band__item rv"><dt>Más de 40</dt><dd>países con socio de exportación</dd></div>
```

Nieuw:

```
<div class="band__item rv"><dt>Más de 40</dt><dd>países con distribuidor oficial</dd></div>
```

Terugvertaling nieuw: meer dan 40 landen met een officiële distributeur.

Reden: "socio de exportación" is het Duitse "Exportpartner" of het Engelse "export partner" woord voor woord. Ik vond geen Spaans gebruik van die combinatie; een Spaanse tekst spreekt van distribuidor of importador. Daarnaast zegt de home over hetzelfde feit al "países con distribuidor oficial", en twee pagina's horen hetzelfde te zeggen. Spaans gebruik bij een vakleverancier: Averio noemt zich "distribuidores oficiales de marcas europeas de referencia en el sector" (https://proveedores.com/proveedores/averio/). Feit: deel A, eigen telling van 41 landen op de partnerlijst van de fabrikant.

Zin over de partnerlijst in het blok "BAEHR en España". Bestand: `src/pages/la-marca.astro`. De zin loopt in de code over twee regels; hieronder staan beide regels, met hun inspringing.

Oud:

```
        BAEHR España es Proxy Beauty Spain, S.L., distribuidor oficial de la marca, con sede en Barcelona. La empresa figura en
        la lista de socios de exportación que publica BAEHR. Atendemos a salones, profesionales de manicura y pedicura,
```

Nieuw:

```
        BAEHR España es Proxy Beauty Spain, S.L., distribuidor oficial de la marca, con sede en Barcelona. Figura como tal en
        la lista de distribuidores internacionales que publica BAEHR. Atendemos a salones, profesionales de manicura y pedicura,
```

Terugvertaling nieuwe zin: het staat als zodanig op de lijst van internationale distributeurs die BAEHR publiceert.

Reden: dezelfde vertaalde wending "socios de exportación", en "La empresa" herhaalt onnodig het onderwerp. "Figura como tal" sluit aan op "distribuidor oficial" in de zin ervoor. Alternatief: de zin schrappen; de alinea zegt al dat BAEHR España officieel distributeur is. Let op: de fabrikant noemt zijn pagina "Export partners"; "distribuidores internacionales" is de Spaanse weergave daarvan, geen letterlijke vertaling.

Zin over de seminars in het blok "El saber se comparte". Bestand: `src/pages/la-marca.astro`.

Oud:

```
<p class="lead">BAEHR comparte con gusto lo que sabe con los profesionales. Por eso organiza seminarios.</p>
```

Nieuw:

```
<p class="lead">BAEHR comparte lo que sabe con los profesionales en sus seminarios.</p>
```

Terugvertaling nieuw: BAEHR deelt wat het weet met de professionals in zijn seminars.

Reden: "con gusto" is het Duitse "gerne" ("Wir geben unser Wissen gerne an Sie weiter!") woord voor woord, en "con gusto ... con los profesionales" stapelt twee keer "con". De tweede zin "Por eso organiza seminarios." leest als een vertaald "Deshalb ...". Dit oordeel rust op taalgevoel, niet op een bron. Feit: deel A noemt kennis delen en seminars.

Aanbevolen, niet verplicht

Correct Spaans dat een Spaans bureau anders of beter vindbaar zou schrijven, of punten die een besluit van D vragen. Gerangschikt van belangrijk naar minder belangrijk.

| Bestand | Oud | Nieuw | Reden |
|---|---|---|---|
| productpagina | `<h2 class="h2 rv">Preguntas y&nbsp;respuestas</h2>` | `<h2 class="h2 rv">Preguntas&nbsp;frecuentes</h2>` | De vaste kop voor een FAQ in Spaanse winkels, ook op productpagina's (Soin et Nature, Nutritienda; Primor heeft een pagina "Preguntas frecuentes"). "Preguntas y respuestas" is bij Amazon de kop voor vragen van klanten. |
| index, Base, productpagina | Hero `BAEHR España es su distribuidor oficial.`; JSON-LD `BAEHR España es el distribuidor oficial en España de la marca alemana BAEHR, fundada en 1949 en Waiblingen.`; meta merkpagina `su distribuidor oficial en España` | Hero `BAEHR España es distribuidor oficial de la marca.`; JSON-LD `BAEHR España es distribuidor oficial en España de la marca alemana BAEHR, fundada en 1949 en Waiblingen.`; meta `su distribución oficial en España` | Alleen als D niet zeker weet dat Proxy Beauty Spain de enige officiële distributeur is. "El" en "su" lezen als de enige; exclusiviteit is in deel A niet geverifieerd. Deel A noemt wel maar één Spaanse partner op de lijst van de fabrikant. |
| Base | `<p class="foot__lead">BAEHR España es el distribuidor oficial de BAEHR en España.</p>` | `<p class="foot__lead">Distribuidor oficial de BAEHR en España.</p>` | Geen dubbele "España", geen "el". Leest als een slogan onder het logo. |
| index | meta description, zie de tabel van de home | `'Cosmética profesional para pies, manos y uñas de la marca alemana BAEHR. Distribuidor oficial en España para salones, podólogos y particulares.'` | 143 in plaats van 186 tekens, de zoekterm vooraan, geen dubbel "para". Nadeel: "profesionales de manicura y pedicura" valt weg. |
| Base, productpagina | `Acceder` (kop, mobiel menu, prijsblok) en `Lo verás al acceder a tu cuenta.` | `Iniciar sesión` en `Lo verás al iniciar sesión.` | De doelpagina, de winkel en de winkelmand zeggen "Iniciar sesión"; Sephora.es ook. Of omgekeerd: houd "Acceder" en pas die andere plekken aan. "Iniciar sesión" is twee keer zo lang; ontwerp nakijken. |
| index | `Mascarilla de tejido para el cuidado intensivo de la piel muy seca.` | `Mascarilla de tejido para el cuidado intensivo de la piel muy seca de los pies.` | Open uit de vorige ronde. Sephora Spanje hangt "Mascarilla tejido" onder gezichtsmaskers. |
| index | `Onicólisis y cuidado profesional BAEHR. Online, de 10:00 a 12:00 (hora peninsular). En ruso con` (loopt door op de volgende regel) | `Cuidado profesional de las uñas con BAEHR. De 10:00 a 12:00 (hora peninsular). En ruso con` | Open uit de vorige ronde. "Onicólisis" is een nagelaandoening; naast de merknaam kan het lezen als product voor een aandoening. "Online" staat al in de titel. Alleen houden als het de officiële titel van de organisator is. |
| index | `Compra los mismos productos para el cuidado diario.` | `Compra los mismos productos para el cuidado de tus pies.` | Scrub en masker zijn geen dagelijkse producten; "dagelijks" staat niet in deel A. Combineren met de verplichte verzendregel in dezelfde regel. |
| index | `En el orden del protocolo, del baño de pies a la crema en espuma.` | `Por orden de uso, del baño de pies a la crema en espuma.` | Vaste wending; het origineel is correct maar stijf. Taalgevoel. |
| index | `España distribuye sus productos a salones, profesionales de manicura y pedicura, podólogos y` | `España lleva sus productos a salones, profesionales de manicura y pedicura, podólogos y` | "Distribuir" is groothandel en past slecht bij "particulares". Taalgevoel. |
| index | `<dt>+40</dt>` | `<dt>Más de 40</dt>` | Zelfde cijfer als op de merkpagina, in dezelfde vorm. |
| index | `<h3>Beauty Expert: maratón formativo online</h3>` | `<h3>Beauty Expert: maratón formativo&nbsp;online</h3>` | Kaarttitel; dezelfde regel als bij de koppen. |
| productpagina | antwoord 1: `'La crema en espuma Cremeschaum Orange-Lemongras lleva un 5 % de urea. Sus otros principios activos son el pantenol y los extractos de ginkgo, ginseng y limón.'` | `'Lleva un 5 % de urea. Sus otros principios activos son el pantenol y los extractos de ginkgo, ginseng y limón.'` | De volledige naam staat in vier antwoorden en leest als tekst voor een zoekmachine. Losse, volledige antwoorden leveren naar mijn kennis weinig meer op: Google toont sinds 2023 FAQ-resultaten bijna alleen nog bij overheid en zorg. ` ` is de harde spatie; het letterlijke teken dat er nu staat mag ook. |
| productpagina | antwoord 3: `'... El de la crema en espuma Cremeschaum Orange-Lemongras es de septiembre de 2025 ...'` | `'... El de esta crema en espuma es de septiembre de 2025 ...'` | Zelfde reden. |
| productpagina | antwoord 4: `'Sí. La crema en espuma Cremeschaum Orange-Lemongras es vegana.'` | `'Sí, es vegana.'` | Zelfde reden. |
| productpagina | antwoord 5: `'... En España la distribuye BAEHR España, distribuidor oficial de la marca.'` | `'... En España, este producto lo vende BAEHR España, distribuidor oficial de la marca.'` | "La" slaat grammaticaal terug op "una empresa familiar". |
| productpagina | vraag 3: `q: '¿Qué indica el sello de cinco estrellas?',` | `q: '¿Qué es el sello de cinco estrellas?',` | Het antwoord zegt wat het zegel is, niet wat de sterren aangeven. |
| productpagina | `<span aria-current="page">Orange-Lemongras</span>` en in de JSON-LD `name: 'Orange-Lemongras'` | `<span aria-current="page">Crema en espuma Orange-Lemongras</span>` en `name: 'Crema en espuma Orange-Lemongras'` | Spaanse winkels eindigen het kruimelpad met de productnaam. |
| productpagina | `<h2 class="h2 rv">Sus&nbsp;activos</h2>` | `<h2 class="h2 rv">Activos&nbsp;clave</h2>` | Gangbare kop; Eucerin Spanje spreekt van "ingredientes clave". `Ingredientes&nbsp;clave` kan ook. Breedte van de kop nakijken. |
| productpagina | `¿Aún no tienes cuenta? <a class="textlink" href="/profesionales/#alta">Solicitar el alta</a>` | `¿Aún no tienes cuenta? <a class="textlink" href="/profesionales/#alta">Solicita el alta</a>` | Na een vraag in tú loopt de gebiedende wijs door. |
| productpagina | `<p class="price__text">Precio pendiente de publicar.</p>` | `<p class="price__text">Precio disponible próximamente.</p>` | "Pendiente de publicar" klinkt ambtelijk. |
| productpagina | `Cierra el protocolo de cinco pasos que te proponemos en la página de inicio.` | `Esta espuma cierra el protocolo de cinco pasos que te proponemos en la página de inicio.` | Zonder onderwerp leest "Cierra" ook als opdracht aan de lezer. |
| productpagina | `const title = 'Crema en espuma para pies Orange-Lemongras \| BAEHR España';` | `const title = 'Crema en espuma para pies PEDIBAEHR Orange-Lemongras \| BAEHR España';` | Het merk op de verpakking in de title, zoals Spaanse winkels het merk in de productnaam zetten. 67 tekens; alleen het eind kan wegvallen. |
| merkpagina | `const title = 'La marca BAEHR, empresa familiar desde 1949 \| BAEHR España';` | `const title = 'BAEHR, empresa familiar alemana desde 1949 \| BAEHR España';` | Een merk is geen bedrijf; zo is het één bewering. 58 tekens. |
| merkpagina | `Fabrica y distribuye productos para` en op de volgende regel `la podología, el cuidado de los pies, la cosmética y el diseño de uñas.` | `Fabrica y distribuye productos de` en `podología, cuidado de los pies, cosmética y diseño de uñas.` | "Productos para la cosmética" schuurt; "productos de ..." is de cataloguswending. |
| merkpagina | `Hoy` en op de volgende regel `sigue siendo una empresa familiar, con casi 135 personas en plantilla y sede con showroom en Waiblingen.` | `Hoy` en `cuenta con una plantilla de casi 135 personas y tiene su sede, con sala de exposición, en Waiblingen.` | Het familiebedrijf staat al in de intro; "con ... y sede con showroom" stapelt "con". Fundéu raadt naar mijn kennis "sala de exposición" aan voor "showroom". |
| merkpagina | `t: 'La higiene, también con marca propia.'` | `t: 'Productos de higiene, también de marca propia.'` | "La higiene, ..." is vaag; "productos de marca propia" is de Spaanse handelsterm. |

Wat ik niet kon verifiëren

| Punt | Toelichting |
|---|---|
| Moedertaal | Ik ben een taalmodel en geen menselijke moedertaalspreker. Laat vóór livegang een Spaanse moedertaalspreker uit de branche de eindtekst lezen, vooral de merkpagina. |
| Bronnen via samenvatting | Ik heb geen enkele pagina zelf geopend; het zoekhulpmiddel vat samen en citeert. De letterlijke knopteksten van Notino, Douglas, Arenal, El Corte Inglés en Promofarma kreeg ik niet te zien. |
| Inlogwoord | Alleen voor Sephora.es meldde het hulpmiddel "Iniciar sesión" in de kop; Druni toont "Mi cuenta". Dat "Acceder" de Spaanse WordPress-vertaling van inloggen is, is mijn kennis, niet nagekeken. Daarom staat "Acceder" niet bij de verplichte wijzigingen. |
| "Socio de exportación" | Geen Spaans gebruik gevonden. Dat het een vertaalde wending is, is mijn oordeel. |
| "Con gusto" | Mijn oordeel dat de zin vertaald klinkt; geen bron. |
| Exclusiviteit | Of Proxy Beauty Spain de enige officiële distributeur is, staat niet in deel A. Het raakt "su distribuidor oficial" (home), "el distribuidor oficial" (voet en JSON-LD) en "su distribuidor oficial en España" (meta van de merkpagina). |
| De partnerlijst | De fabrikant noemt de pagina "Export partners". "Distribuidor oficial" en "distribuidores internacionales" zijn een Spaanse weergave, geen letterlijke vertaling. De site gebruikt die weergave al voor Spanje (README). |
| Aantal landen | "Más de 40" rust op een eigen telling (41) uit deel A; de fabrikant noemt zelf geen getal. |
| BAEHR PUR | Deel A zegt niet wat PUR is. Een brochure bij een derde (canonbury.com) noemt het een "drytec"-voetverzorgingsapparaat met sterke afzuiging. Dat past bij de zin over afzuiging of spray; bij de fabrikant zelf niet gezien. |
| Zakelijke gegevens | De actie 5 + 1 tot 30 november, gratis verzending vanaf 60 €, beoordeling binnen één werkdag, het seminar (datum, tijd, taal, onderwerp) en de accountfuncties staan niet in deel A. |
| Cerca de Stuttgart | Klopt naar algemene kennis, staat niet in deel A. |
| Koppen | Niet in een browser bekeken. Ik heb alleen gekeken of de code een harde spatie heeft. |
| "Formación" of "Seminarios" | Spaanse vakleveranciers lijken hun opleidingsmenu vaak "Formación" of "Cursos" te noemen; daar vond ik geen bron voor. "Seminarios" is correct en blijft staan. |
| "Prueba clínica" | Correct en begrijpelijk; in Spaanse cosmeticateksten komt "estudio clínico" ook veel voor. Geen telling gemaakt. |
| Lengte title en meta | Ongeveer 60 en 155 tekens zijn vuistregels naar mijn kennis. |
| FAQ in Google | Dat Google sinds 2023 FAQ-resultaten bijna alleen nog bij overheid en zorg toont: naar mijn kennis, niet nagekeken. |
| Fundéu over "showroom" | Naar mijn kennis, niet nagekeken. |
| Referentielijst | `docs/es-referencias-tiendas.md` bestond tijdens deze controle niet. Komt die lijst er, leg dit rapport er dan naast. |

Buiten de taal, wel gezien

| Wat | Waar |
|---|---|
| De link "Acceder" in het prijsblok gaat naar `/profesionales/#alta` (aanmelden), niet naar `#acceso` (inloggen). | productpagina |
| In het kruimelpad van de JSON-LD wijst "Tienda" naar `https://baehr.com.es/#tienda`; de zichtbare link gaat naar `/tienda/`. | productpagina |
| In de stand Particular springt "Soy profesional" naar `#profesionales`, waar in die stand alleen het blok voor particulieren zichtbaar is; voor zover ik in `ui.js` zie, zet de knop de stand niet om. | home |
| Het aanmeldformulier heeft geen privacytekst of toestemmingsvakje. In Spanje is dat vóór livegang nodig; naar mijn kennis, buiten deze opdracht. | home |

Bronnen

| Wat | Adres |
|---|---|
| Druni: "¡Envío gratis desde 20,00 €!" | https://www.druni.es/ayuda/envio-y-seguimiento-del-pedido |
| Druni: winkelmand "Carrito", accountlink "Mi cuenta" | https://www.druni.es/ayuda |
| Primor: "GRATIS desde 25€" (thuisbezorging), "GRATIS desde 15€" (ophalen in de winkel) | https://www.primor.eu/es_es/envios-y-devoluciones |
| Primor: pagina "Preguntas frecuentes" | https://www.primor.eu/content/9-preguntas-frecuentes |
| Sephora: "Envío gratis, por compras superiores a 30€" | https://www.sephora.es/LAROC-HubPage.html |
| Sephora: "Iniciar sesión" in de kop, "Mi cuenta" | https://www.sephora.es/mis-favoritos |
| Sephora: rubriek "Mascarilla tejido" onder gezichtsmaskers (vorig rapport) | https://www.sephora.es/Tratamiento/Mascarilla-facial/Mascarillatejido/C313703 |
| Podoservice: "ENVÍOS GRATIS a partir de 140 €" (vorig rapport, niet opnieuw gelezen) | https://podoservice.es/ |
| Farmacia Jiménez: knop "Añadir a la cesta" | https://farmaciajimenez.com/nuestras-marcas/cerave/cerave-sa-crema-renovadora-de-pies-88-ml |
| Farmacias En Ante: knop "Añadir al carrito" | https://farmaciasenante.com/higiene/pies-higiene/hidratacion-pies |
| Soin et Nature, Spaanse site: blok "Preguntas frecuentes" op productpagina's | https://www.soin-et-nature.com/es/26041-gomenol-crema-protectora-pies-secos-75ml.html |
| Eucerin Spanje: "Espuma para pies", "ingredientes clave" | https://eucerin.es/productos/urea-repair-plus/foot-foam-10-percent-urea |
| Averio: "distribuidores oficiales de marcas europeas de referencia en el sector" | https://proveedores.com/proveedores/averio/ |
| Brochure BAEHR PUR bij een derde | https://www.canonbury.com/media/pdf/55935%20Beahr%20PUR%20Brochure%20PUR%20RZ2%20Full.pdf |
