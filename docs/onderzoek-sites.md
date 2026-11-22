# Onderzoek naar andere sites en voorstel voor de laatste ronde (22 november 2026)

Opdracht van D: andere sites bekijken (op Sonnet), conclusies trekken en een voorstel doen. Het concept is volgens D nog niet goed genoeg; hij wil het op 23-11 's ochtends afmaken. D heeft dit voorstel nog niet beoordeeld.

Vier Sonnet-agents legden samen ruim 80 pagina's vast met `tools/sitio.cjs` (schermen op desktop en telefoon, lettergroottes, vaste balken, scrollengte). Hun volledige notities staan in `docs/onderzoek/`. De schermopnamen stonden in een tijdelijke map en zijn niet bewaard; opnieuw maken kan met hetzelfde gereedschap. Geblokkeerde sites zijn niet omzeild.

## Feiten uit het onderzoek

- Scrollengte. De langste vastgezette scène die is gemeten is 2,5 schermhoogtes (Apple AirPods Pro) en 2,3 tot 2,6 (Polestar). Onze film is 6,6 schermhoogtes aan één stuk. Voorbehoud: de meting ziet alleen vastgezette scènes. Dit zijn geen cijfers over afhaken.
- Kopen tijdens het verhaal. Apple, Polestar en Nothing houden een vaste balk met de koopactie in beeld. Bij ons staat tijdens de film alleen de cesta in de kop.
- Productpagina op telefoon. Spaanse winkels (Laconicum, Freshly) tonen titel, prijs en knop op het eerste scherm. Bij ons vult de capsule het eerste scherm en staat de knop op het tweede. Onze vaste koopbalk kapt de naam af en blijft over de voet staan. Door Claude zelf nagekeken aan de beelden.
- Wat een Spaanse productpagina toont en de onze niet: een leverregel onder de knop (4 van de 6 sites boven de vouw), een blok "Cómo se usa" of "Modo de empleo" (4 van de 6), een strook met verzending, retour, betalen en hulp.
- Premium merken (Typology, Susanne Kaufmann, Augustinus Bader, La Roche-Posay): koppen in gewicht 100 tot 500, rechthoekige knoppen, hoogste kop 24 tot 80 px, veel beeld van de textuur van het product, accordeons op de productpagina.
- Professionals. Groothandels en merken zeggen vooraf wie zich mag aanmelden, welk bewijs nodig is en hoe snel het account actief is (Ruck: 1 tot 2 uur). Geen enkele bekeken site toont een protocol stap voor stap met hoeveelheid en tijd; ons protocol is het meest uitgewerkte, maar mist duur, hoeveelheid en cabinemaat.
- Eigen waarneming van Claude: na de film zakt onze site in. De film is rijk en eigen, de rest is een nette winkel met losse packshots op lichte vlakken.

## Voorstel, op volgorde van effect

Eén beeldwereld (grootste effect op "elite en eigen"). De 3D-studio levert zelf beeld voor de rest van de site: staande beelden van elk product in de rode studio (`node tools/retratos.cjs <url> <map> tools/retratos.json`). Proef: `docs/onderzoek/proef-productrij-nu-en-straks.jpg`. Toepassen op de productrij van de home, als tweede beeld bij aanwijzen in de winkel, op de merkpagina, en op de productpagina in plaats van de 3D-viewer (past bij het besluit van D: geen 3D op productpagina's). Tegenargument: meer rood op de witte pagina's, en een studiobeeld toont het etiket minder duidelijk dan een packshot. Daarom blijft in de winkel de packshot het eerste beeld.

Productpagina als een Spaanse winkel, maar rustig. Op telefoon de capsule hooguit ruim de helft van het scherm, zodat titel en knop op het eerste scherm staan. Vaste koopbalk met korte naam, alleen als de eigen knop uit beeld is, en weg bij de voet. De actie "5 + 1 gratis" ook als regel onder de knop. Een blok "Cómo se usa" kan pas met gebruiksaanwijzingen van de fabrikant: die staan niet in `docs/merk-en-woordenlijst.md`.

Film korter en met een uitweg naar kopen. Van 660vh naar ongeveer 520vh (één veeg per stap), en een vaste actie "Pedir los cinco productos" in de balk onderin naast overslaan. Afspelen in één klik blijft 27 seconden. Tegenargument: korter is minder tijd voor het wow-effect, en de partner van D vindt de film juist sterk.

Professionals: zeggen wie, wat en wanneer. Boven het formulier wie zich kan aanmelden (salons, podologen, manicure en pedicure: staat in de merkdocumentatie). Een veld "tipo de negocio". Termijn van activeren en gevraagd bewijs moeten van de klant komen. Seminar: knop om de datum in de agenda te zetten.

Niet overnemen: lichtere koppen en rechthoekige knoppen (dan verliezen we de eigen stem en lijken we op skincomplete), pop-ups, aftellers, doorgestreepte prijzen, sterren zonder reviews.

## Nodig van de klant

Verzendkosten en levertijd, retourregel, betaalmethoden, termijn en bewijs voor professionele aanmelding, gebruiksaanwijzing per product, duur en hoeveelheid per stap van het protocol, gegevens van seminars (niveau, docent, prijs).
