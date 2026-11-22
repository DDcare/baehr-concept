Eindredactie van de Spaanse productpagina's en de protocolpagina (src/data/fichas.json)

Beoordeeld door een model, niet door een menselijke moedertaalspreker. Bron van de regels: CLAUDE.md, docs/merk-en-woordenlijst.md (deel A, B, C) en docs/es-referencias-tiendas.md. De broncode is niet gewijzigd. De productfoto's van voetbad, peeling, masker en crème zijn bekeken om de alt-teksten te controleren (witte flacon met pomp, pot, doos, tube: kloppen).

Uitkomst in het kort: vier verplichte wijzigingen, negen aanbevolen. Geen feit of claim gevonden dat in deel A "niet geverifieerd" heet, behalve de productielocatie bij het voetbad (verplicht 1). Geen therapeutische of medische claim. Geen gedachtestreepjes in het bestand, alle percentages hebben lidwoord en harde spatie, alle titels zijn hooguit 60 tekens en eindigen op " | BAEHR España", alle zes descriptions zijn 140 tot 160 tekens (gemeten met een zoekpatroon; de protocolbeschrijving zit er op 159 vlak onder).

Over harde spaties: in fichas.json staan harde spaties voor "ml", voor "%" en in de h1's ("Crema en espuma", "Cinco pasos, un protocolo"). In dit rapport staat [nbsp] waar dat voor de exacte oude tekst telt. In het JSON-bestand staat dat als  . Bij de overige voorstellen: laat de bestaande harde spaties rond getal en eenheid staan en zet er een harde spatie bij waar ik een eenheid toevoeg (bijvoorbeeld "36 a 38 °C").

Verplicht

Elk item: product-id, veld, oude tekst, nieuwe tekst, reden, terugvertaling. De oude tekst is een uniek fragment van het veld waar dat staat; het volledige veld hoeft niet te worden vervangen. Zelfde lijst machinaal in docs/eindredactie-fichas-es.json.

V1. id bano, veld faq, index 4, subveld a
Oud: Lo fabrica Gustav Baehr GmbH, en Waiblingen (Alemania).
Nieuw: La marca pertenece a Gustav Baehr GmbH, una empresa familiar con sede en Waiblingen (Alemania).
Reden: "lo fabrica ... en Waiblingen" zegt waar het product gemaakt wordt; dat staat in deel A als niet geverifieerd (alleen: Gustav Baehr GmbH is de eigenaar van het merk en zit in Waiblingen). De nieuwe vorm volgt de reeds nagelezen tekst van het crèmeschuim.
Terugvertaling nieuw: Het merk is van Gustav Baehr GmbH, een familiebedrijf met zetel in Waiblingen (Duitsland).

V2. id mascarilla, veld descripcion, index 2
Oud: Cada caja contiene 5 pares y también existe en formato de 30 pares. Es el tercer paso del protocolo BAEHR de cinco pasos.
Nieuw: Cada caja contiene 5 pares. También hay un formato de 30 pares. Es el tercer paso del protocolo BAEHR de cinco pasos.
Reden: in de oude zin is "cada caja" ook het onderwerp van "existe en formato de 30 pares", wat niet klopt; twee zinnen met elk hun eigen onderwerp lossen dat op.
Terugvertaling nieuw: Elke doos bevat 5 paar. Er is ook een uitvoering van 30 paar. Het is de derde stap van het BAEHR-protocol van vijf stappen.

V3. id crema, veld faq, index 3, subveld a
Oud: La crema para pies lleva aceites de naranja y de lemongrass. La crema en espuma lleva
Nieuw: Las dos llevan urea. La crema para pies lleva además aceites de naranja y de lemongrass. La crema en espuma lleva
Reden: het antwoord noemt ureum alleen bij het schuim (5 %) en zo lijkt de crème geen ureum te hebben; het gehalte van de crème staat niet in deel A. De pagina van het schuim zegt al "Las dos llevan urea".
Terugvertaling nieuw: Beide bevatten ureum. De voetcrème bevat daarnaast sinaasappel- en lemongrasolie. Het crèmeschuim bevat (vervolg van de bestaande zin: 5 % ureum, panthenol en extracten van ginkgo, ginseng en citroen, in een lichte schuim).

V4. id espuma, veld h1
Oud: Crema en[nbsp]espuma
Nieuw: Crema en[nbsp]espuma para[nbsp]pies
Reden: "crema en espuma" alleen is dubbelzinnig in Spanje (gezichtsreiniger, eetbare slagroom); kopers zoeken "espuma para pies" en de vier andere h1's hebben "pies" ook. De korte kop in de film kan blijven.
Terugvertaling nieuw: Crèmeschuim voor voeten.

Aanbevolen

Elk item in dezelfde vorm. Alles hieronder is optioneel (kan beter).

A1. id bano, veld uso, index 0
Oud: Reparte de 5 a 10 ml de producto en agua de 36 a 38 grados.
Nieuw: Añade de 5 a 10 ml de producto al agua templada (36 a 38 °C).
Reden: "repartir" is een letterlijke vertaling van "verteilen"; een Spaanse gebruiksaanwijzing zegt "añade" en geeft de temperatuur in °C.
Terugvertaling: Voeg 5 tot 10 ml product toe aan het lauwwarme water (36 tot 38 °C).
Toepassen als fragmenten: "Reparte de" wordt "Añade de"; "producto en agua de 36 a 38 grados." wordt "producto al agua templada (36 a 38 °C)." (de harde spatie voor "ml" blijft staan).

A2. id bano, veld uso, index 1
Oud: Baña los pies durante unos 10 minutos.
Nieuw: Sumerge los pies durante unos 10 minutos.
Reden: "bañar los pies" klinkt als wassen; "sumergir" of "remojar" is wat men bij een voetbad zegt.
Terugvertaling: Dompel de voeten ongeveer 10 minuten onder.

A3. id bano, veld faq, index 0, subveld a
Oud (fragment): en agua de 36 a 38 grados. Los pies se bañan durante unos 10 minutos.
Nieuw: en agua templada (36 a 38 °C). Se sumergen los pies durante unos 10 minutos.
Reden: zelfde formulering als bij A1 en A2, zodat gebruik en antwoord niet uiteenlopen.
Terugvertaling: in lauwwarm water (36 tot 38 °C). De voeten worden ongeveer 10 minuten ondergedompeld.

A4. id bano, veld descripcion, index 2
Oud (fragment): , pensado para profesionales en cabina y para el cuidado en casa.
Nieuw: , para profesionales y para el cuidado en casa.
Reden: "pensado para" schrijft het ontwerpdoel aan de fabrikant toe, en dat staat niet in deel A; "cabina" past bij een salon maar niet bij PEDIBAEHR, dat voor voetverzorgingsspecialisten is. Hetzelfde geldt voor de intro van de protocolpagina (A9).
Terugvertaling: , voor professionals en voor verzorging thuis.

A5. id exfoliante, veld descripcion, index 1
Oud (fragment): Su ingrediente es la sal del Mar Muerto.
Nieuw: Lleva sal del Mar Muerto.
Reden: "su ingrediente es" is een vertaling van "Werkstoff"; Spaanse productteksten zeggen "lleva" of "con".
Terugvertaling: Het bevat zout uit de Dode Zee.

A6. id mascarilla, veld tamanos, index 1
Oud: 30 pares
Nieuw: Formato de 30 pares
Reden: of de uitvoering van 30 paar een doos is, staat niet in deel A; "formato" is neutraal en loopt gelijk met de beschrijving.
Terugvertaling: Uitvoering van 30 paar.

A7. id mascarilla, veld faq, index 0
Oud (q): ¿Cuántos pares trae la caja?
Nieuw (q): ¿Cuántos pares incluye la caja?
Oud (a): La caja trae 5 pares. También existe el formato de 30 pares.
Nieuw (a): La caja incluye 5 pares. También hay un formato de 30 pares.
Reden: "traer" in de zin van "bevatten" is meer Latijns-Amerikaans; "incluye" is neutraal.
Terugvertaling: Hoeveel paar zitten er in de doos? De doos bevat 5 paar. Er is ook een uitvoering van 30 paar.

A8. id espuma, veld description
Oud (fragment): Crema en espuma PEDIBAEHR con
Nieuw: Crema en espuma para pies PEDIBAEHR con
Reden: "crema en espuma" zonder "para pies" is dubbelzinnig; de description komt dan op 159 tekens (grens 160, na het toepassen opnieuw tellen). In de description staat de harde spatie tussen "en" en "espuma" al of niet; laat die zoals hij is.
Terugvertaling: Crèmeschuim voor voeten PEDIBAEHR met (5 % ureum, enzovoort).

A9. id protocolo, veld intro
Oud (fragment 1): mascarilla, crema y crema en espuma.
Nieuw: mascarilla, crema para pies y crema en espuma.
Reden: "crema y crema en espuma" leest als een herhaling; met "para pies" is het duidelijk.
Terugvertaling: masker, voetcrème en crèmeschuim.
Oud (fragment 2): Es para profesionales en cabina y para quien quiere el mismo cuidado en casa.
Nieuw: Es para profesionales y para quien quiere el mismo cuidado en casa.
Reden: zie A4 over "cabina".
Terugvertaling: Het is voor professionals en voor wie dezelfde verzorging thuis wil.

A10. id protocolo, veld cierre
Oud: Compra los cinco productos en la tienda o, si eres profesional, solicita tu alta profesional.
Nieuw: Compra los cinco productos en la tienda o, si eres profesional, crea tu cuenta profesional.
Reden: "cuenta profesional" is de gangbare naam (Válquer, Salerm); "alta profesional" als zelfstandig naamwoord is in de referentielijst nergens gezien. Maar de home ("Solicita tu alta profesional") en de contactpagina gebruiken "alta profesional" al: alleen doorvoeren als dat overal tegelijk gebeurt, anders liever laten staan.
Terugvertaling: Koop de vijf producten in de winkel of, als je professional bent, maak je professionele account aan.

A11. id crema, veld descripcion, index 0
Oud (fragment): Cuida la piel de los pies con aceites de naranja y de lemongrass.
Nieuw: Cuida la piel de los pies. Lleva aceites de naranja y de lemongrass.
Reden: de oude zin laat de oliën het verzorgende werk doen; voor de crème heeft deel A geen werkingszin van de fabrikant, alleen de ingrediënten (ingrediëntclaim, deel C regel 6).
Terugvertaling: Verzorgt de huid van de voeten. Bevat sinaasappel- en lemongrasolie.

Tabel van elke zin

Oordeel: goed, kan beter, fout. Bij "kan beter" of "fout" verwijst het voorstel naar V (verplicht) of A (aanbevolen) hierboven.

Voetbad (bano)

| Veld | Spaans | Terugvertaling | Oordeel | Voorstel en uitleg |
|---|---|---|---|---|
| h1 | Baño de pies | Voetbad | goed | Kop zoals Douglas ("Baño de pies"). |
| nombre | SPA Wellness Fußbad | (merknaam) | goed | Duitse naam alleen als originele naam. |
| title | Baño de pies SPA Wellness con hibisco y loto \| BAEHR España | Voetbad SPA Wellness met hibiscus en lotus | goed | 59 tekens. |
| description | Baño de pies SPA Wellness de BAEHR BEAUTY CONCEPT con hibisco y loto. Limpia con suavidad y refresca los pies cansados. Vegano. Frasco de 500 ml. | zie titel; reinigt zacht en verfrist vermoeide voeten; vegan; flacon van 500 ml | goed | 145 tekens. Staat in deel A (mild reinigen en verfrissen, vegan ja, 500 ml). |
| chips | BAEHR BEAUTY CONCEPT | (merk) | goed | Klopt met het etiket. |
| lead | Baño de pies para limpiar con suavidad y refrescar los pies cansados. Lleva hibisco y loto. Vegano, en frasco con dosificador de 500 ml. | Voetbad om vermoeide voeten zacht te reinigen en te verfrissen. Bevat hibiscus en lotus. Vegan, in flacon met pomp van 500 ml. | goed | "Dosificador" is de gangbare naam voor een pomp. |
| tamanos | 500 ml | 500 ml | goed | |
| hechos 0 | Hibisco y loto, ingredientes destacados | Hibiscus en lotus, belangrijkste ingrediënten | goed | Deel A: "Wichtige Inhaltsstoffe". |
| hechos 1 | Vegano, sin ingredientes de origen animal | Vegan, zonder ingrediënten van dierlijke oorsprong | goed | Vegan: ja; formulering toegestaan volgens het AEMPS-document. |
| hechos 2 | 500 ml, frasco con dosificador | 500 ml, flacon met pomp | goed | |
| hechos 3 | 5 a 10 ml, por baño | 5 tot 10 ml, per bad | goed | Gelijk aan de gebruiksaanwijzing van de fabrikant. |
| activos 0 tot 2 | Hibisco, Loto, Bambú (extracto) | Hibiscus, lotus, bamboe (extract) | goed | Bamboe staat alleen op het etiket (productfoto bevestigt: "Bambus-, Lotus- und Hibiskusextrakt"). |
| descripcion 0 | SPA Wellness Fußbad es el baño de pies de BAEHR BEAUTY CONCEPT. Limpia con suavidad y refresca los pies cansados. Lleva hibisco aromático y factores humectantes especiales. | (Idem) Bevat aromatische hibiscus en bijzondere vochtbindende factoren. | goed | Volgt de Duitse tekst. |
| descripcion 1 | Sus ingredientes destacados son el hibisco y el loto. En la etiqueta consta también el extracto de bambú. Es un producto vegano. | De belangrijkste ingrediënten zijn hibiscus en lotus. Op het etiket staat ook bamboe-extract. Het is een veganistisch product. | goed | Eerlijk over wat uit het etiket komt. |
| descripcion 2 | Se presenta en un frasco con dosificador de 500 ml. Es el primer paso del protocolo BAEHR de cinco pasos, pensado para profesionales en cabina y para el cuidado en casa. | Het zit in een flacon met pomp van 500 ml. Het is de eerste stap van het BAEHR-protocol van vijf stappen, bedoeld voor professionals in de cabine en voor verzorging thuis. | kan beter | A4. |
| uso 0 | Reparte de 5 a 10 ml de producto en agua de 36 a 38 grados. | Verdeel 5 tot 10 ml product in water van 36 tot 38 graden. | kan beter | A1. Inhoud klopt met de bron (5 tot 10 ml, 36 tot 38 °C). |
| uso 1 | Baña los pies durante unos 10 minutos. | Bad de voeten ongeveer 10 minuten. | kan beter | A2. Inhoud klopt (ca. 10 minuten). |
| protocolo | Es el primer paso del protocolo de cinco pasos y va seguido del exfoliante para pies. | Het is de eerste stap van het protocol van vijf stappen en wordt gevolgd door de voetpeeling. | goed | Volgorde is een conceptkeuze van de site, geen fabrieksfeit (zie twijfels). |
| faq 0 q | ¿Cuánto producto se usa por baño? | Hoeveel product gebruik je per bad? | goed | |
| faq 0 a | De 5 a 10 ml en agua de 36 a 38 grados. Los pies se bañan durante unos 10 minutos. | 5 tot 10 ml in water van 36 tot 38 graden. De voeten worden ongeveer 10 minuten gebaad. | kan beter | A3. |
| faq 1 | ¿Qué ingredientes destacan? / El hibisco y el loto. En la etiqueta figura también el extracto de bambú. | Welke ingrediënten vallen op? / Hibiscus en lotus. Op het etiket staat ook bamboe-extract. | goed | |
| faq 2 | ¿Es vegano? / Sí, es vegano. | Is het vegan? / Ja. | goed | Vegan: ja. |
| faq 3 | ¿Qué tamaño tiene? / Se vende en un frasco con dosificador de 500 ml. | Welke maat heeft het? / Flacon met pomp van 500 ml. | goed | |
| faq 4 q | ¿De qué marca es? | Van welk merk is het? | goed | |
| faq 4 a | Es de BAEHR BEAUTY CONCEPT, no de PEDIBAEHR. Lo fabrica Gustav Baehr GmbH, en Waiblingen (Alemania). | Het is van BAEHR BEAUTY CONCEPT, niet van PEDIBAEHR. Gustav Baehr GmbH maakt het, in Waiblingen (Duitsland). | fout | V1. Productielocatie is niet geverifieerd. Eerste zin klopt. |
| alt | Frasco blanco con dosificador del baño de pies SPA Wellness Fußbad, de BAEHR BEAUTY CONCEPT, con la etiqueta de frente. | Witte flacon met pomp van het voetbad ..., met het etiket aan de voorkant. | goed | Foto bevestigt. |

Peeling (exfoliante)

| Veld | Spaans | Terugvertaling | Oordeel | Voorstel en uitleg |
|---|---|---|---|---|
| h1 | Exfoliante para pies | Peeling voor voeten | goed | Punt 1 van de schrijver: houden. Dit is de vorm van Douglas, Druni en Oops Nails; "peeling" zou bij Spanjaarden aan de exfoliërende sok doen denken. De kortere kop in de film mag afwijken. |
| title | Exfoliante para pies fresh feet \| BAEHR España | Peeling voor voeten fresh feet | goed | 46 tekens. |
| description | Exfoliante para pies fresh feet de PEDIBAEHR con sal del Mar Muerto. Alisa la piel áspera de los pies con minerales y oligoelementos. En 125 y 450 ml. | Peeling voor voeten ... met Dode Zee-zout. Maakt de ruwe huid van de voeten glad met mineralen en sporenelementen. In 125 en 450 ml. | goed | 152 tekens. Volgt "glättet raue Fußhaut". |
| chips | PEDIBAEHR, Serie fresh feet | PEDIBAEHR, serie fresh feet | goed | "Serie" is de term van de fabrikant (filter Serie), anders dan "Línea" bij WELLNESS. Deel B stelt "Línea fresh feet" voor, maar de fabrikant noemt het een serie; consequent blijven. |
| lead | Exfoliante para pies con sal marina. Alisa la piel áspera y revitaliza las zonas secas con minerales y oligoelementos. En 125 y 450 ml. | Peeling voor voeten met zeezout. Maakt ruwe huid glad en vitaliseert droge plekken met mineralen en sporenelementen. In 125 en 450 ml. | goed | |
| tamanos | 125 ml, 450 ml | idem | goed | |
| hechos 0 | Sal marina, del Mar Muerto | Zeezout, uit de Dode Zee | goed | |
| hechos 1 | Minerales, y oligoelementos de la sal marina | Mineralen, en sporenelementen uit zeezout | goed | |
| hechos 2 | 2 tamaños, 125 y 450 ml | 2 maten | goed | |
| activos 0 | Sal marina, del Mar Muerto | Zeezout, uit de Dode Zee | goed | |
| descripcion 0 | fresh feet Fußpeeling es el exfoliante para pies de PEDIBAEHR, de la serie fresh feet. En la etiqueta figura como exfoliante para pies con sal marina. | ... Op het etiket staat hij als peeling voor voeten met zeezout. | goed | Etiket: "Fußpeeling mit Meersalz". |
| descripcion 1 | Alisa la piel áspera de los pies y revitaliza las zonas secas con minerales y oligoelementos de la sal marina. Su ingrediente es la sal del Mar Muerto. Según el fabricante, no es vegano. | ... Het ingrediënt is zout uit de Dode Zee. Volgens de fabrikant is het niet vegan. | kan beter | A5 voor "Su ingrediente es". De vegan-zin: zie punt 5 onder twijfels; feit klopt (Vegan: Nein). |
| descripcion 2 | Se vende en 125 y 450 ml. Es el segundo paso del protocolo BAEHR de cinco pasos, después del baño de pies. | Hij is er in 125 en 450 ml. Het is de tweede stap ... na het voetbad. | goed | |
| uso | (null) | (geen) | goed | Geen gebruik in de bron; terecht leeg. |
| protocolo | Es el segundo paso del protocolo de cinco pasos: va después del baño de pies y antes de la mascarilla. | Het is de tweede stap: na het voetbad en voor het masker. | goed | |
| faq 0 | ¿Qué lleva este exfoliante? / Lleva sal del Mar Muerto, con minerales y oligoelementos de la sal marina. | Wat zit erin? / Dode Zee-zout, met mineralen en sporenelementen uit zeezout. | goed | |
| faq 1 | ¿Para qué sirve? / Alisa la piel áspera de los pies y revitaliza las zonas secas. | Waarvoor dient het? / Maakt ruwe voethuid glad en vitaliseert droge plekken. | goed | Cosmetische functie, geen medische claim. |
| faq 2 | ¿Es vegano? / No. Según el fabricante, este exfoliante no es vegano. | Is het vegan? / Nee. Volgens de fabrikant niet. | goed | Eerlijk en gecontroleerd; zie twijfels. |
| faq 3 | ¿En qué tamaños se vende? / En 125 y 450 ml. | In welke maten? | goed | |
| faq 4 | ¿Qué es la serie fresh feet? / Es una serie de PEDIBAEHR, la marca de BAEHR para profesionales del cuidado de los pies. | ... het merk van BAEHR voor professionals in voetverzorging. | goed | Deel A: "Produkte für und von Fußpflegespezialisten". |
| alt | Tarro del exfoliante para pies fresh feet Fußpeeling, de PEDIBAEHR, con la etiqueta de frente. | Pot van de peeling ... met het etiket aan de voorkant. | goed | Foto bevestigt: pot. "Made in Germany" terecht niet overgenomen. |

Masker (mascarilla)

| Veld | Spaans | Terugvertaling | Oordeel | Voorstel en uitleg |
|---|---|---|---|---|
| h1 | Mascarilla para pies | Masker voor voeten | goed | Punt 1: houden. Let op dat Spanjaarden bij "mascarilla para pies" ook aan exfoliërende sokken denken; de tekst eronder maakt duidelijk dat het om verzorging gaat. |
| title | Mascarilla para pies Orange-Lemongras \| BAEHR España | Masker voor voeten Orange-Lemongras | goed | 52 tekens. Serienaam zoals de fabrikant (Lemongras). |
| description | Mascarilla de tejido para pies PEDIBAEHR Orange-Lemongras con karité, macadamia y coco. Cuidado intensivo para pies muy secos. Vegana. Caja de 5 pares. | Vliesmasker voor voeten ... met sheaboter, macadamia en kokos. Intensieve verzorging voor zeer droge voeten. Vegan. Doos van 5 paar. | goed | 151 tekens. Zie twijfel 2 over "de tejido". |
| chips | PEDIBAEHR, Línea WELLNESS, Serie Orange-Lemongras | idem | goed | Zo ook in de filters van de fabrikant. |
| lead | Mascarilla de tejido para el cuidado intensivo de la piel muy seca de los pies. Lleva manteca de karité, aceite de macadamia y extracto de coco. Vegana. | Vliesmasker voor de intensieve verzorging van de zeer droge huid van de voeten. Bevat sheaboter, macadamiaolie en kokosextract. Vegan. | goed | Doos zegt "very dry, rough skin"; "muy seca" klopt. |
| tamanos 0 | Caja de 5 pares | Doos van 5 paar | goed | |
| tamanos 1 | 30 pares | 30 paar | kan beter | A6 (punt 3 van de schrijver). |
| hechos 0 | Piel muy seca, cuidado intensivo | Zeer droge huid, intensieve verzorging | goed | |
| hechos 1 | Karité, con macadamia y coco | Sheaboter, met macadamia en kokos | goed | |
| hechos 2 | Vegana, sin ingredientes de origen animal | Vegan, zonder ... | goed | Vegan: ja. |
| hechos 3 | 5 pares, por caja | 5 paar, per doos | goed | |
| activos 0 tot 2 | Manteca de karité, aceite de macadamia, extracto de coco | sheaboter, macadamiaolie, kokosextract | goed | |
| descripcion 0 | Fuß-Vliesmaske Orange-Lemongras es una mascarilla de tejido para pies de PEDIBAEHR, de la línea WELLNESS. Según el fabricante, es un tratamiento wellness innovador para el cuidado intensivo de la piel extremadamente seca de los pies. | ... Volgens de fabrikant is het een innovatieve wellnessbehandeling voor de intensieve verzorging van extreem droge voethuid. | goed | Punt 2: houden. Volgt "innovatives Wellness-Treatment" letterlijk, met bronvermelding "Según el fabricante" (dat dekt "innovador"). "Tratamiento wellness" is cosmetisch en geen medische claim; deel C vermijdt "tratamiento médico" en tratamiento van aandoeningen. "Wellness" als leenwoord is gangbaar in Spanje. |
| descripcion 1 | Sus ingredientes destacados son la manteca de karité, el aceite de macadamia y el extracto de coco. Es una mascarilla vegana. | ... Het is een veganistisch masker. | goed | |
| descripcion 2 | Cada caja contiene 5 pares y también existe en formato de 30 pares. Es el tercer paso del protocolo BAEHR de cinco pasos. | Elke doos bevat 5 paar en er bestaat ook een uitvoering van 30 paar. ... derde stap. | fout | V2. |
| uso | (null) | (geen) | goed | |
| protocolo | Es el tercer paso del protocolo de cinco pasos: va después del exfoliante y antes de la crema para pies. | Derde stap: na de peeling en voor de voetcrème. | goed | |
| faq 0 | ¿Cuántos pares trae la caja? / La caja trae 5 pares. También existe el formato de 30 pares. | Hoeveel paar zitten er in de doos? / 5 paar. Er is ook een uitvoering van 30 paar. | kan beter | A7. |
| faq 1 | ¿Qué ingredientes lleva? / Manteca de karité, aceite de macadamia y extracto de coco. | | goed | |
| faq 2 | ¿Para qué tipo de piel es? / Es para el cuidado intensivo de la piel muy seca de los pies. | Voor welke huid? / ... | goed | |
| faq 3 | ¿Es vegana? / Sí, es vegana. | Is het vegan? / Ja. | goed | |
| faq 4 | ¿De qué línea es? / Es de PEDIBAEHR, línea WELLNESS, serie Orange-Lemongras. | Uit welke lijn? / ... | goed | |
| alt | Caja de la mascarilla de tejido para pies Fuß-Vliesmaske Orange-Lemongras, de PEDIBAEHR, con la etiqueta de frente. | Doos van het vliesmasker ... met het etiket aan de voorkant. | goed | Foto bevestigt: doos. Dermatest-zegel 07/2020 terecht niet gebruikt. |

Voetcrème (crema)

| Veld | Spaans | Terugvertaling | Oordeel | Voorstel en uitleg |
|---|---|---|---|---|
| h1 | Crema para pies | Voetcrème | goed | Punt 1: houden. Zelfde vorm als de categorie bij Douglas, Druni, Arenal en Primor. |
| title | Crema para pies Orange-Lemongras con urea \| BAEHR España | Voetcrème Orange-Lemongras met ureum | goed | 56 tekens. |
| description | Crema para pies PEDIBAEHR Orange-Lemongras con urea y aceites de naranja y de lemongrass. Cuida la piel de los pies. Vegana. En 30, 125 y 500 ml. | Voetcrème ... met ureum en sinaasappel- en lemongrasolie. Verzorgt de huid van de voeten. Vegan. In 30, 125 en 500 ml. | goed | 145 tekens. Ureumgehalte terecht niet genoemd. |
| chips | PEDIBAEHR, Línea WELLNESS, Serie Orange-Lemongras | | goed | |
| lead | Crema para pies con aceites de naranja y de lemongrass y urea. Cuida la piel de los pies. Vegana, en 30, 125 y 500 ml. | Voetcrème met sinaasappel- en lemongrasolie en ureum. Verzorgt de huid van de voeten. Vegan, in 30, 125 en 500 ml. | goed | |
| tamanos | 30 ml, 125 ml, 500 ml | | goed | |
| hechos 0 | Con urea, y aceites de naranja y de lemongrass | Met ureum, en sinaasappel- en lemongrasolie | goed | |
| hechos 1 | Vegana, sin ingredientes de origen animal | | goed | Vegan: ja. |
| hechos 2 | 3 tamaños, 30, 125 y 500 ml | | goed | |
| activos 0 tot 2 | Aceite de lemongrass, aceite de naranja, urea | | goed | |
| descripcion 0 | Fußcreme Orange-Lemongras es la crema para pies de PEDIBAEHR, de la línea WELLNESS y la serie Orange-Lemongras. Cuida la piel de los pies con aceites de naranja y de lemongrass. | ... Verzorgt de huid van de voeten met sinaasappel- en lemongrasolie. | kan beter | A11. |
| descripcion 1 | Entre sus ingredientes destacados figuran el aceite de lemongrass, el aceite de naranja y la urea. Es una crema vegana. | Tot de belangrijkste ingrediënten horen ... Het is een veganistische crème. | goed | |
| descripcion 2 | Se vende en tres tamaños: 30, 125 y 500 ml. Es el cuarto paso del protocolo BAEHR de cinco pasos. | | goed | |
| uso | (null) | (geen) | goed | |
| protocolo | Es el cuarto paso del protocolo de cinco pasos: va después de la mascarilla y antes de la crema en espuma. | Vierde stap: na het masker en voor het crèmeschuim. | goed | |
| faq 0 | ¿Qué lleva esta crema para pies? / Aceite de lemongrass, aceite de naranja y urea. | | goed | |
| faq 1 | ¿Es vegana? / Sí, es vegana. | | goed | |
| faq 2 | ¿En qué tamaños se vende? / En 30, 125 y 500 ml. | | goed | |
| faq 3 q | ¿En qué se diferencia de la crema en espuma Orange-Lemongras? | Wat is het verschil met het crèmeschuim? | goed | |
| faq 3 a | La crema para pies lleva aceites de naranja y de lemongrass. La crema en espuma lleva un 5 % de urea, pantenol y extractos de ginkgo, ginseng y limón, en una espuma ligera. | De voetcrème heeft sinaasappel- en lemongrasolie. Het crèmeschuim heeft 5 % ureum, panthenol en extracten van ginkgo, ginseng en citroen, in een lichte schuim. | fout | V3. |
| faq 4 | ¿De qué línea es? / Es de PEDIBAEHR, línea WELLNESS, serie Orange-Lemongras. | | goed | |
| alt | Tubo de la crema para pies Fußcreme Orange-Lemongras, de PEDIBAEHR, con la etiqueta de frente. | Tube van de voetcrème ... | goed | Foto bevestigt: tube. |

Crèmeschuim (espuma). Voor consistentie bekeken met de al nagelezen pagina; lead, chips, vier feiten, activos, vijf vragen en alt komen letterlijk overeen en zijn niet opnieuw beoordeeld, behalve waar hieronder vermeld.

| Veld | Spaans | Terugvertaling | Oordeel | Voorstel en uitleg |
|---|---|---|---|---|
| h1 | Crema en espuma | Crèmeschuim | fout | V4. |
| title | Crema en espuma para pies Orange-Lemongras \| BAEHR España | Crèmeschuim voor voeten Orange-Lemongras | goed | 57 tekens; het eerder 68 tekens lange titel is ingekort. |
| description | Crema en espuma PEDIBAEHR con un 5 % de urea, pantenol y extractos de ginkgo, ginseng y limón. Ligera y de rápida absorción. Vegana. En 125 y 300 ml. | Crèmeschuim PEDIBAEHR met 5 % ureum, panthenol en extracten van ginkgo, ginseng en citroen. Licht en snel opgenomen. Vegan. In 125 en 300 ml. | kan beter | A8. 149 tekens; percentage met lidwoord en harde spatie is goed. |
| descripcion 0 | Cremeschaum Orange-Lemongras es la crema en espuma para pies de PEDIBAEHR, de la línea WELLNESS. Es una espuma de textura ligera y rápida absorción que deja un tacto aterciopelado. | ... Het is een schuim met lichte textuur en snelle opname dat een fluweelzacht gevoel geeft. | goed | Volgt "schnell einziehender Schaum mit leichter Textur für samtweiche Pflege". |
| descripcion 1 | Lleva un 5 % de urea, pantenol y extractos de ginkgo, ginseng y limón. Es vegana y cuenta con el sello de cinco estrellas en tolerancia cutánea de Dermatest GmbH (09/2025). | Bevat 5 % ureum ... Het is vegan en heeft het vijfsterrenzegel voor huidverdraagzaamheid van Dermatest GmbH (09/2025). | goed | Zegel met jaartal, zoals deel C vraagt; de testgegevens staan in de faq. |
| descripcion 2 | Según BAEHR, las espumas para pies se absorben más rápido que las pomadas y apenas dejan residuos. Esta se vende en 125 y 300 ml. | Volgens BAEHR worden voetschuimen sneller opgenomen dan zalven en laten ze nauwelijks residu achter. Dit schuim is er in 125 en 300 ml. | goed | Uitleg van de fabrikant, met bronvermelding. |
| protocolo | Es el quinto y último paso del protocolo de cinco pasos y va después de la crema para pies. | Vijfde en laatste stap, na de voetcrème. | goed | |
| faq 4 (bestaand) | Gustav Baehr GmbH, una empresa familiar con sede en Waiblingen (Alemania). En España, este producto lo vende BAEHR España, distribuidor oficial de la marca. | | goed | Zie twijfels over "distribuidor oficial". |

Protocolpagina

| Veld | Spaans | Terugvertaling | Oordeel | Voorstel en uitleg |
|---|---|---|---|---|
| title | Protocolo de cuidado de pies en cinco pasos \| BAEHR España | Protocol voor voetverzorging in vijf stappen | goed | 58 tekens. |
| description | El protocolo BAEHR para el cuidado de los pies en cinco pasos: baño de pies, exfoliante, mascarilla, crema y crema en espuma. Para profesionales y para casa. | Het BAEHR-protocol voor voetverzorging in vijf stappen: voetbad, peeling, masker, crème en crèmeschuim. Voor professionals en voor thuis. | goed | 159 tekens, vlak onder de grens; bij elke aanpassing opnieuw tellen. "Crema y crema en espuma" is hier niet aan te passen zonder over 160 te komen. |
| h1 | Cinco pasos, un protocolo | Vijf stappen, één protocol | goed | Gelijk aan de home. |
| intro zin 1 | El protocolo BAEHR reúne cinco productos para el cuidado de los pies, uno para cada paso: baño de pies, exfoliante, mascarilla, crema y crema en espuma. | Het BAEHR-protocol bundelt vijf producten ... | kan beter | A9 (crema para pies). |
| intro zin 2 | Es para profesionales en cabina y para quien quiere el mismo cuidado en casa. | Het is voor professionals in de cabine en voor wie dezelfde verzorging thuis wil. | kan beter | A9 (cabina). |
| cierre | Compra los cinco productos en la tienda o, si eres profesional, solicita tu alta profesional. | Koop de vijf producten in de winkel of, als je professional bent, vraag je professionele account aan. | kan beter | A10. |

Wat niet is gevonden

Geen therapeutische of medische woorden, geen "antibacteriano", geen "hidratante", geen meetclaims (114 en 143 % vochtigheid), geen "dermatológicamente probado", geen "Made in Germany", geen ureumgehalte bij de crème, geen gedachtestreepjes, geen usted. De vegan-vermeldingen kloppen met deel A (voetbad, masker, crème, schuim ja; peeling nee).

Twijfelpunten van de schrijver, beantwoord

Punt 1, de h1's: houden. Ze zijn wat een Spaanse koper intypt en volgen de kopnamen van Douglas, Druni en Arenal. De korte koppen in de film horen bij een ander doel en hoeven niet gelijk te zijn. Alleen de h1 van het schuim moet langer (V4).

Punt 2, "tratamiento wellness": houden. De fabrikant zegt het zelf (op de doos "Wellness-Treatment") en de tekst schrijft het toe aan de fabrikant. Het is cosmetisch bedoeld; wel het woord "innovador" niet buiten de bronvermelding laten komen.

Punt 3, "30 pares": begrijpelijk, maar "Formato de 30 pares" is veiliger omdat niet bekend is of het een doos is (A6), en de zin in descripcion 2 moet gecorrigeerd (V2).

Punt 4, volgorde van het protocol en "cabina" of "casa": de volgorde (bad, peeling, masker, crème, schuim) is een keuze van de site en staat niet in deel A. Dat is toegestaan zolang de tekst het "protocolo BAEHR" noemt zoals de home al doet en D dat akkoord heeft gegeven. "Cabina" liever weglaten (A4, A9); "en casa" kan blijven.

Punt 5, vegan bij de peeling: laat de vraag in de faq staan. Het feit klopt (Vegan: Nein), kopers van vegan producten zoeken het, en omdat vier van de vijf pagina's vegan zijn, zou stilte bij de peeling een foutieve indruk wekken. In descripcion 1 mag de zin ook weg als D geen ontkenning in de lopende tekst wil; dat is een commerciële keuze, geen taalfout.

Wat ik niet zeker weet

Ik ben een model en geen menselijke moedertaalspreker, dus lees de punten hieronder met dat voorbehoud.

Of "mascarilla de tejido para pies" in Spanje wordt begrepen: in de referentielijst staat dat de combinatie voor voeten nergens is gezien (voor gezichtsmaskers wel). De fabrikant noemt het een "Foot fleece mask". Een Spaanse vakprofessional of de fabrikant zou kunnen zeggen of "mascarilla de tejido", "mascarilla de vellón" of "calcetines mascarilla" gangbaarder is.

Of "distribuidor oficial" (faq van het schuim) in deel A gedekt is: het staat er niet letterlijk. Spanje staat wel op de exportpartnerlijst van de fabrikant, maar "exclusief" is niet geverifieerd en "oficial" is een stap verder dan "exportpartner". Vraag de fabrikant of D akkoord is met dat woord.

Of de producten voor gebruik thuis bedoeld zijn: deel A zegt dat de B2B-webshop alleen voor zakelijke klanten is en dat pedibaehr.de "direkt vom Hersteller" verkoopt. De formulering "para quien quiere el mismo cuidado en casa" volgt de home, maar de fabrikant zegt dit niet uitdrukkelijk.

Of "protocolo BAEHR" als merkbegrip mag: het is een concept van de site. Als de fabrikant het protocol niet zo noemt, kan de uitdrukking de indruk wekken dat het een officieel fabrikantsprotocol is (AEMPS: een distributeur wordt verantwoordelijk voor claims die verder gaan dan de fabrikant). Laat dat bevestigen.

Of "revitaliza las zonas secas" en "alisa la piel áspera" precies de toon van een Spaans SEO-bureau hebben: ze volgen de Duitse bron nauw; "suaviza" is mogelijk gangbaarder dan "alisa", maar dat is mijn taalgevoel en niet door een bron bevestigd.

De tekenaantallen zijn gemeten met zoekpatronen, niet met een teller; de descriptions zijn alle binnen 140 tot 160 maar bij de protocolpagina (159) en bij A8 (159 na toepassen) is er geen marge.

Alle verwijzingen naar gebruik van Spaanse winkels (bijvoorbeeld "incluye" tegenover "trae") steunen op mijn taalkennis en op de referentielijst, die zelf deels uit zoekresultaten bestaat.
