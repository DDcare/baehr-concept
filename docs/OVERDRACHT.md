# Overdracht na de derde ontwerpronde (22 november 2026, avond)

Voor de sessie die hierna verder werkt (D denkt aan Opus). Het ontwerp is gebouwd op de tak `ontwerp`. D heeft het nog niet gezien. `main` is de openbare link: daar alleen naartoe met akkoord van D per keer.

## Wat vaststaat (niet opnieuw ontwerpen)

- De vormen: capsule, ribbel, en het tubevormige blok (`.dark`, `.quick`, `.proto`), hele capsules voor `.cta` en `.statement`. De regels staan in `CLAUDE.md` onder Ontwerp.
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
