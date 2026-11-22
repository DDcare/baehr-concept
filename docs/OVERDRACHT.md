# Overdracht na de derde ontwerpronde (22 november 2026, avond)

Voor de sessie die hierna verder werkt (D denkt aan Opus). Het ontwerp is gebouwd op de tak `ontwerp`. D heeft het nog niet gezien. `main` is de openbare link: daar alleen naartoe met akkoord van D per keer.

## Wat vaststaat (niet opnieuw ontwerpen)

- De vormen: capsule en ribbel. Elk groot blok is een hele capsule (`.dark`, `.quick`, `.proto`, `.cta`, `.statement`). De tubevorm met geribbelde rand is door D afgekeurd. De regels staan in `CLAUDE.md` onder Ontwerp.
- De letterschaal, de kleuren en de zilveren band.
- De studiobeelden in `public/img/estudio/`. Opnieuw maken: `node tools/retratos.cjs http://127.0.0.1:4321/ public/img/estudio tools/retratos.json` (het bestand `textura-a.webp` daarna hernoemen naar `espuma-textura.webp`, de varianten b en c weggooien).
- Besluiten van D: 3D alleen op de home, geen 3D op productpagina's.

## Controles die bij deze stand slagen

```
npm run build && npm run preview
node tools/overflow-check.cjs http://127.0.0.1:4321
python3 -I tools/fuentes.py --check
node tools/static-check.cjs http://127.0.0.1:4321/ shots
```

Daarnaast met eigen scripts gecontroleerd: axe-core op alle pagina's (geen fouten), afspelen, stoppen en overslaan van de film, de koopknop in de film, de koopbalk op telefoon, alle interne links.

## Nog te doen

- Oordeel van D over deze ronde verwerken.
- Niet getest: een echt toestel, Safari, en een scherm tussen 960 en 1100 breed (daar is de tube liggend en smal: nakijken).
- De pagina `/mi-cuenta/` en `/contacto/` hebben alleen rondere hoeken gekregen, geen nieuw beeld. Als D meer wil: het rode blok "¿Toca reponer?" kan een tube worden.
- Uit het onderzoek, maar pas met gegevens van de klant: een blok "Cómo se usa" op de productpagina, een leverregel onder de koopknop, wie zich mag aanmelden en binnen welke termijn, duur en hoeveelheid per stap van het protocol, rijkere seminarkaart. Zie `docs/onderzoek-sites.md`.
- De herkomst van de actie "5 + 1 gratis" en van "Envío gratis en pedidos a partir de 60 €" bij D navragen: ze staan op de site maar niet in deel A van de woordenlijst.
- Het voorstel (deadline maandag 23 november): de teksten staan in `voorstel/`. Nalopen met D, de optie 3D per product hoort er niet in, en het budget per pagina (hooguit 1 MB, LCP onder 2,5 seconden op een telefoon) mag er alleen in met akkoord van D op de getallen. Daarna in de huisstijl zetten.

## Spaans

Elke nieuwe of gewijzigde tekst gaat langs `redactor-es` en `corrector-es`, met Nederlandse terugvertaling. De eindredactie van deze ronde staat in `docs/eindredactie-ronda3-es.md` (geen verplichte tekstwijzigingen).

## Aanvulling 22 november, laat

Na het oordeel van D over de derde ronde is op `ontwerp` bijgekomen: vijf productpagina's uit één sjabloon (`src/pages/productos/[slug].astro` met `src/data/fichas.json`), de pagina `/protocolo/`, een herontworpen merkpagina. Geschreven door een schrijver op Sonnet en nagelezen door `corrector-es`: `docs/redactie-fichas-es.md`, `docs/eindredactie-fichas-es.md`. De elf aanbevolen (niet verplichte) wijzigingen uit dat rapport zijn nog niet beoordeeld.

Nieuwe korte teksten die nog niet langs de eindredactie zijn geweest: de tussenkoppen "Descripción" en "Cómo se usa", de koppen "El primer paso" tot "El cuarto paso", de knop "Verlo en 3D" op de protocolpagina, en de in vieren geknipte zinnen van de tijdlijn op de merkpagina.

D laat zijn CRO-skill naar de site kijken voordat deze stand naar `main` gaat.

Advies van Claude over de home van de echte winkel (D vroeg ernaar, nog niet besloten): de rij met de vijf producten hoort bij het protocol. Voor een echte winkel met het hele assortiment komen daar twee rijen bij: kopen per categorie (de zes merken van het huis, of per behoefte: pies, manos, uñas, aparatos, higiene) en de best verkochte producten. Welke producten dat zijn moet uit de verkoopcijfers van de klant komen.

Bij de peeling noemt de fabrikant in een kenmerkveld zout uit de Dode Zee; op het etiket staat alleen zeezout. De site zegt overal "sal marina" tot de klant het bevestigt.
