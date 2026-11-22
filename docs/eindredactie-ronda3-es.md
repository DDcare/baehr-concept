Eindredactie ronde 3, Spaans (Spanje, tú-vorm), 22-11-2026

Ik ben een model en geen menselijke moedertaalspreker. Mijn oordeel steunt op de woordenlijst en de winkelreferentie in de repo, niet op eigen taalgevoel in Spanje. Er is niets in de broncode gewijzigd. De code is wel gelezen om te zien wat de teksten doen.

Tabel per tekst

| Tekst | Terugvertaling | Oordeel | Voorstel en uitleg | Bron |
|---|---|---|---|---|
| Imágenes del producto (aria-label van de groep) | Afbeeldingen van het product | goed | Geen wijziging nodig. Alternatief: "Galería de imágenes del producto", ook gangbaar, maar niet beter. | Geen van de bekeken winkels geeft dit in de pagina zelf weer; de referentie noemt alleen knop- en categorietaal. Niet geverifieerd bij een Spaanse winkel. |
| Imagen 1 de 3, Imagen 2 de 3, Imagen 3 de 3 (aria-label van de knoppen) | Afbeelding 1 van 3, enz. | goed, optioneel kan beter | Correct Spaans, congruent, geen accentfouten. Omdat het knoppen zijn en aria-pressed de gekozen stand al meldt, leest "Ver imagen 1 de 3" als actie en past het bij de bestaande "Ver el baño de pies en el protocolo" op dezelfde pagina. Optioneel. | Eigen oordeel; de vorm "Imagen X de Y" is de gewone Spaanse telling bij galerijen (aanname, niet uit de referentie). |
| Crema en espuma 125 ml (koopbalk, met harde spatie) | Crèmeschuim 125 ml | goed | Vorm, hoofdletter en spatie voor ml kloppen. "Crema en espuma" is de vakterm. Optioneel: "Crema en espuma Orange-Lemongras 125 ml" als er ruimte is, want de naam alleen is onderscheidend genoeg in het protocol maar niet naast andere schuimen. | Woordenlijst B2 nr. 3; Podoservice "Crema en espuma"; maatnotatie "75 ml" met spatie (PR, DG, PC, AV). |
| Añadir a la cesta (koopbalk) | In de cesta leggen | goed | Gelijk aan de knop in het formulier en elders op de site, dus consequent "cesta", geen mengsel met "carrito". | Referentie deel 1: "Añadir a la cesta" bij Perfumerías Avenida, Válquer, Salerm; mengen van cesta en carrito is het echte risico. |
| 5 + 1 gratis en productos BAEHR del mismo tamaño. Hasta el 30 de noviembre. (onder de koopknop) | 5 + 1 gratis op BAEHR-producten van dezelfde maat. Tot 30 november. | goed | Zin is correct en past direct onder de knop: het is daar het moment waarop iemand de hoeveelheid kiest. "Hasta el 30 de noviembre" is de gangbare einddatumvorm. Let op: de actie zelf staat niet in deel A van de woordenlijst; ik ga ervan uit dat D of de klant haar aanleverde. | Eigen oordeel; actie niet geverifieerd in de woordenlijst. |
| Añadir a la cesta (home, vaste knop) en Añadir (smal scherm) | In de cesta leggen / Toevoegen | goed | Beide vormen bestaan bij Spaanse winkels (in lijsten en op smalle schermen is "Añadir" alleen gewoon). Zie wel de opmerking over aria-label hieronder. | Referentie deel 1: "Añadir" alleen bij Podoservice in lijsten en bij Clarel op de productpagina. |
| Añadido (bevestiging op de knop) | Toegevoegd | goed, met een kanttekening | Taal klopt: "Añadido" is de korte bevestiging die Spanjaarden kennen ("Añadido al carrito"). De kanttekening is techniek: de knop heeft vast aria-label "Añadir a la cesta" en de tekst wordt in film.js met textContent vervangen. Schermlezers horen daardoor het label, niet "Añadido". Zie het voorstel hieronder. | "Añadido" staat niet in de winkelreferentie; wel dezelfde bevestiging als op profesionales.astro en in de cesta-melding "Añadido a la cesta." op de productpagina. |
| Baño | Bad | goed | Als bovenste stap in de stappenbalk en als tooltip duidelijk genoeg, want de volledige naam staat in de film ("Baño de pies"). | Rubriek "Baño de pies" bij Douglas; woordenlijst nr. 10. |
| Exfoliación | Exfoliatie | goed | Past bij de film. Het bijbehorende product heet elders "Exfoliante para pies"; geen probleem als stapnaam. | Woordenlijst nr. 7. |
| Mascarilla | Masker | goed | Gangbaar voor voetmasker. | Woordenlijst nr. 8; Douglas, Druni. |
| Crema | Crème | goed | Gangbaar. | Woordenlijst nr. 1. |
| Espuma | Schuim | goed | Consumentenwoord voor het schuim (Eucerin, Douglas "Espuma para pies"). Op de productpagina staat de stap als "Crema en espuma"; het verschil kort versus lang is verdedigbaar, de tooltip mag korter zijn. | Referentie deel 4, voetschuim. |

Wat verplicht is

Niets is fout in de Spaanse tekst zelf. De vijf punten zijn juist gespeld, congruent en in tú of neutraal geschreven, zonder medische of therapeutische claims. Wel verplicht om te regelen, als het concept toegankelijk moet zijn: de knop in de productfilm meldt "Añadido" niet aan schermlezers, omdat het aria-label vast blijft staan. Dat is een technische fout, geen taalfout.

Wat optioneel is

De drie knoppen van de galerij: "Ver imagen 1 de 3" in plaats van "Imagen 1 de 3", voor consistentie met de andere aria-labels op de pagina. Koopbalk: de geur toevoegen als de breedte het toelaat. Filmknop: het aria-label mee laten veranderen naar "Añadido a la cesta" tijdens de bevestiging, of een verborgen live-regio die "Añadido a la cesta" meldt, zoals het formulier op de productpagina al doet met role="status".

Wat ik niet zeker weet

Ik heb geen Spaanse winkel gezien die precies "Imagen 1 de 3" als aria-label gebruikt, omdat aria-labels in de referentie alleen als knoptekst voorkomen. De vorm is correct Spaans, maar de gangbaarheid is een aanname. "Añadido" als korte knopbevestiging staat niet in de winkelreferentie; mijn oordeel dat het gangbaar is berust op taalkennis van een model, niet op een gecontroleerde bron. Ik weet niet of de actie "5 + 1" en de einddatum 30 november zijn gecontroleerd, want ze staan niet in deel A van de woordenlijst. Een Spaanse moedertaalspreker moet de eindtekst steekproefsgewijs nalezen.
