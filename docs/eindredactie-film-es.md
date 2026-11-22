Kan dit zo naar een Spaanse klant: ja, zonder wijzigingen.

Beide nieuwe teksten zijn correct Spaans van Spanje, in de vorm die de rest van de site gebruikt, en ze lezen niet vertaald. Verplichte wijzigingen: geen. Voor de lijst met werkstoffen bestaat één optionele ontwerpvariant; die staat onderaan bij de alternatieven.

Werkwijze en voorbehoud

Datum: 22-11-2026. Beoordeeld: de link om de film over te slaan op de home (`film__skip` in `src/pages/index.astro`: de zichtbare tekst in twee lengtes en het aria-label) en de lijst onder "Activos clave" op de productpagina (`inside__list` in `src/pages/productos/crema-en-espuma-orange-lemongras.astro`: de zichtbare naam met toevoeging en de volledige vorm voor schermlezers). Getoetst aan `CLAUDE.md`, aan `docs/merk-en-woordenlijst.md` (deel A bij het crèmeschuim, deel B en deel C), aan `docs/es-referencias-tiendas.md` en aan de eerdere eindredactierapporten. baehr.com.es is niet bezocht. Er is niets gewijzigd behalve dit rapport.

Voorbehoud: ik ben een taalmodel en geen menselijke moedertaalspreker. Webpagina's heb ik niet zelf geopend: het zoekhulpmiddel geeft paginatitels, citaten en samenvattingen terug. De site zelf heb ik niet in een browser gezien. Waar een oordeel op taalgevoel rust, staat dat erbij.

Leeswijzer: waar in de code `&nbsp;` staat, staat in de tabellen een gewone spatie. In de lijst met werkstoffen staat de naam in de code met een beginhoofdletter; de opmaak toont hem in hoofdletters, met de toevoeging cursief ernaast.

De link om de film over te slaan (home)

| Plaats | Spaans | Nederlands | Oordeel | Toelichting |
|---|---|---|---|---|
| Link, breed scherm | Saltar la animación | De animatie overslaan | goed | Gewoon Spaans. Infinitief en lidwoord zoals de andere handelingsknoppen van de site ("Pausar el giro", "Ver el protocolo", "Añadir a la cesta"). Het accent op "animación" staat erin. |
| Link, smal scherm (telefoon) | Saltar | Overslaan | goed | Dezelfde korte vorm als de knop van YouTube in Spanje. |
| aria-label van de link | Saltar la animación | De animatie overslaan | goed | Bevat ook de korte zichtbare tekst, dus wie de link met de stem bedient, kan zeggen wat hij ziet. |

De alternatieven voor de link, met mijn keuze

| Vorm | Nederlands | Oordeel | Reden |
|---|---|---|---|
| Saltar la animación (staat er nu, lang) | De animatie overslaan | beste keuze | "Saltar" is het werkwoord dat in Spanje voor overslaan op een scherm wordt gebruikt. YouTube: volgens Xataka Android heet de knop "Saltar". Google schrijft in zijn hulp voor Spanje over advertenties "Los usuarios pueden saltarlos después de 5 segundos"; de Latijns-Amerikaanse versie zegt "que no se pueden omitir". Spaanse techbladen noemen de knop van Netflix "el botón de saltar intro" (Genbeta) en schrijven "saltar la intro" (El Español, Xataka Home). De lange vorm zegt bovendien wat je overslaat. |
| Saltar (staat er nu, kort) | Overslaan | goed waar de ruimte ontbreekt | Zie hierboven. Op een breed scherm is de lange vorm duidelijker. |
| Saltar intro | Intro overslaan | niet beter | De formule van streamingdiensten voor de begintune van een serie. De film is hier geen intro: hij toont het protocol en de producten. "Intro" is een losse afkorting die niet bij de toon van de site past. Taalgevoel. |
| Omitir | Weglaten, overslaan | correct, niet beter | Geen fout en ook in Spanje in gebruik: Netflix schrijft zelf "Omitir intro" en in de hulp voor Spanje "Omitir introducción", Plex ook. Het is wel het formelere softwarewoord. Genbeta legt de functie "Omitir introducción" van Plex in dezelfde kop uit met "saltar su cabecera": in gewone taal wordt het weer "saltar". Zonder object zegt "Omitir" ook niet wat je weglaat. |
| Ir al contenido | Naar de inhoud gaan | niet doen | Lijkt te veel op de skiplink "Saltar al contenido" die al op elke pagina staat, en de film is zelf inhoud. Netflix gebruikt "Ir al contenido" op zijn algemene Spaanstalige site en "Saltar al contenido" op de site voor Spanje. |

De lijst "Activos clave" (productpagina)

| Rij | Zichtbaar: naam, toevoeging | Voor schermlezers | Nederlands | Oordeel | Toelichting |
|---|---|---|---|---|---|
| Urea | Urea, al 5 % | Urea al 5 % | Ureum, 5 % (letterlijk: ureum op 5 %) | goed | "Urea al 5 %" is de gewone Spaanse wending voor een concentratie; de rij leest van links naar rechts als één zin. De harde spatie voor het procentteken staat erin en het lidwoord zit in "al". |
| Pantenol | Pantenol | Pantenol | Panthenol | goed | Spaanse schrijfwijze. Een toevoeging is niet nodig. |
| Ginkgo | Ginkgo, extracto | Extracto de ginkgo | Ginkgo, extract; voluit: ginkgo-extract | goed | Leest als een regel uit een technische fiche: eerst de naam, dan de vorm. Geen lopende zin, wel gewoon Spaans voor een lijst. |
| Ginseng | Ginseng, extracto | Extracto de ginseng | Ginseng, extract; voluit: ginsengextract | goed | Als hierboven. |
| Limón | Limón, extracto | Extracto de limón | Citroen, extract; voluit: citroenextract | goed | Als hierboven. Het accent blijft op de hoofdletter staan (LIMÓN); dat hoort zo. |

Feiten en claims: de vijf stoffen zijn precies wat deel A bij het crèmeschuim noemt ("aus 5 % Urea, Panthenol und Extrakten aus Ginkgo, Ginseng und Zitrone"). Er staat geen werking bij, dus er is geen claim. Niets hiervan staat in deel A als niet geverifieerd en geen woord komt uit de lijst van deel C3.

De alternatieven voor de toevoeging, met mijn keuze

| Toevoeging | Zo ziet het eruit | Nederlands | Oordeel | Reden |
|---|---|---|---|---|
| al 5 % (staat er nu) | UREA al 5 % | ureum op 5 % | houden | De gewone wending. In de Google-suggesties van `es-referencias-tiendas.md` (deel 6) volgt op "crema con urea" telkens "al 20", "al 30", "al 40", "al 10". Het rapport `eindredactie-home-es.md` noemde "urea al 10 %" al correct. |
| 5 % | UREA 5 % | ureum 5 % | even goed, niet beter | De etiketvorm: een voetcrème van ISDIN heeft in de werkstoffenlijst "Urea 5%:" (gezien via Farmacia Jiménez). Korter, maar het cijfer "5 %" staat al groot in de feitenband erboven, en "al 5 %" leest als taal in plaats van als etiket. |
| extracto (staat er nu) | GINKGO extracto | ginkgo, extract | houden | Het juiste woord voor de vorm van de stof. "Extracto" achter de naam kent de Spaanse lezer van samenstellingslijsten: het register van Vademecum noemt de stof "Ginkgo biloba exto. seco". In lopende tekst is het altijd "extracto de" met de plant erachter (Druni: "extracto astringente de llantén"), en die vorm krijgt de schermlezer. |
| en extracto | GINKGO en extracto | ginkgo in extractvorm | niet beter | Grammaticaal goed, maar het is de wending voor de vorm waarin je een kruid inneemt ("en extracto", "en cápsulas"), en "en extracto" betekent in ambtelijk Spaans ook "in samenvatting". Taalgevoel. |
| extracto de | GINKGO extracto de | ginkgo, extract van | niet doen | Een voorzetsel aan het eind hoort in een alfabetisch register, niet op een productpagina. Het oogt als een afgebroken zin. |
| Eén rij voor de drie extracten | EXTRACTOS de ginkgo, ginseng y limón | extracten van ginkgo, ginseng en citroen | mag, ontwerpkeuze | De enige variant die net als "Urea al 5 %" als lopend Spaans leest; het zijn de woorden van de intro en de meta description. De lijst telt dan drie rijen in plaats van vijf. Nadeel: de plantnamen staan klein en cursief in plaats van groot. Geen taalcorrectie. |

Alleen als de ontwerper de laatste variant kiest. Bestand: `src/pages/productos/crema-en-espuma-orange-lemongras.astro`.

Oud (drie regels):

```
      <li class="stretch"><span class="inside__n" aria-hidden="true">Ginkgo</span><span class="inside__q" aria-hidden="true">extracto</span><span class="sr">Extracto de ginkgo</span></li>
      <li class="stretch"><span class="inside__n" aria-hidden="true">Ginseng</span><span class="inside__q" aria-hidden="true">extracto</span><span class="sr">Extracto de ginseng</span></li>
      <li class="stretch"><span class="inside__n" aria-hidden="true">Limón</span><span class="inside__q" aria-hidden="true">extracto</span><span class="sr">Extracto de limón</span></li>
```

Nieuw (één regel):

```
      <li class="stretch"><span class="inside__n" aria-hidden="true">Extractos</span><span class="inside__q" aria-hidden="true">de ginkgo, ginseng y limón</span><span class="sr">Extractos de ginkgo, ginseng y limón</span></li>
```

Terugvertaling nieuw: extracten van ginkgo, ginseng en citroen. "EXTRACTOS" is één letter langer dan "PANTENOL"; de breedte van de naamkolom nakijken.

Noodzakelijk en optioneel

Noodzakelijk (fout): niets.

Optioneel (kan beter): niets dat de taal verbetert. De ene variant hierboven is een ontwerpkeuze; de huidige tekst mag blijven staan.

Wat ik niet zeker weet

| Punt | Toelichting |
|---|---|
| Moedertaal | Ik ben een taalmodel en geen menselijke moedertaalspreker. Beide oordelen rusten deels op taalgevoel. |
| "GINKGO extracto" in beeld | De volgorde naam en dan "extracto" is ook de Engelse en Duitse volgorde ("lemon extract"). In een tabel met twee kolommen leest een Spanjaard het als naam plus vorm, niet als vertaling. Of het beeld die tabel duidelijk genoeg maakt, kan ik niet zien. Twijfelt een Spaanse lezer, dan is de ene rij "EXTRACTOS de ginkgo, ginseng y limón" de uitweg. |
| Geen voorbeeld van precies deze lijstvorm | Ik vond geen Spaanse productpagina met de naam links en "extracto" los ernaast. Het oordeel steunt op het register van Vademecum, op de etiketvorm van ISDIN en op taalgevoel. |
| Geen merksite met deze link | Ik vond geen Spaanse merksite met letterlijk "Saltar la animación" of "Saltar animación". De keuze steunt op YouTube, Google en de Spaanse pers. |
| De knop van Netflix in Spanje | Het zoekhulpmiddel was niet eenduidig: het gaf voor de Spaanse hulp "Omitir introducción" en schreef één keer "Saltar introducción" toe aan een artikel van Xataka. Welke tekst er vandaag op de knop staat, heb ik niet gezien. Mijn keuze hangt daar niet van af: beide woorden zijn goed Spaans. |
| "ginkgo" bij de RAE | Naar mijn kennis staat het woord zo in het woordenboek van de RAE (editie 2014). De pagina van de RAE kreeg ik niet te zien; Wiktionary verwijst ernaar. |
| "en extracto" als ambtelijke term | Naar mijn kennis, niet nagezocht. |

Buiten de taal, wel gezien

| Wat | Waar |
|---|---|
| De stukjes tekst staan in de code zonder spatie achter elkaar. Een programma dat alleen de kale tekst uit de HTML haalt, krijgt "Saltar la animaciónSaltar", "Ureaal 5 %Urea al 5 %" en "GinkgoextractoExtracto de ginkgo". Een spatie tussen de `span`-elementen lost dat op en verandert naar mijn inschatting niets aan het beeld. Of een zoekmachine de tekst zo leest, heb ik niet nagekeken. | home en productpagina |

Bronnen

| Wat | Hoe gezien | Adres |
|---|---|---|
| Xataka Android: de knop "Saltar" van YouTube ("ya no aparece el botón "Saltar" con el contador de cinco segundos") | citaat via het zoekhulpmiddel | https://www.xatakandroid.com/aplicaciones-android/anuncios-youtube-para-android-cambian-sea-dificil-saltarlos-no-todo-esta-perdido |
| Google Ads, hulp voor Spanje: "Los usuarios pueden saltarlos después de 5 segundos." | citaat via het zoekhulpmiddel | https://support.google.com/google-ads/answer/2375497?hl=es |
| YouTube, hulp voor Latijns-Amerika: "Anuncios de video que no se pueden omitir" | paginatitel in het zoekresultaat | https://support.google.com/youtube/answer/188038?hl=es-419 |
| Genbeta: "gracias al botón de saltar intro" | paginatitel in het zoekresultaat | https://www.genbeta.com/actualidad/netflix-dice-que-usuarios-se-han-ahorrado-195-anos-tiempo-perdido-gracias-al-boton-saltar-intro |
| El Español: "Netflix prueba un botón para saltar la intro de las series" | paginatitel in het zoekresultaat | https://www.elespanol.com/omicrono/20170317/netflix-prueba-boton-saltar-intro-series/201480616_0.html |
| Xataka Home: "¿Quieres saltar la "intro" de las series en Netflix?" | paginatitel in het zoekresultaat | https://www.xatakahome.com/servicios-de-smart-tv/quieres-saltar-la-intro-de-las-series-en-netflix-si-es-tu-caso-ya-es-posible-hacerlo-con-esta-funcion/amp |
| Netflix, algemene Spaanstalige site: skiplink "Ir al contenido", knop "Omitir intro" | paginatitel en citaat via het zoekhulpmiddel | https://about.netflix.com/es/news/looking-back-on-the-origin-of-skip-intro-five-years-later |
| Netflix, site voor Spanje: skiplink "Saltar al contenido" | paginatitel in het zoekresultaat | https://about.netflix.com/es_es/news/looking-back-on-the-origin-of-skip-intro-five-years-later |
| Netflix, hulp voor Spanje: "Omitir introducción" | samenvatting van het zoekhulpmiddel | https://help.netflix.com/es-es/node/24855 |
| Genbeta over Plex: "Plex Pass habilita la función 'Omitir introducción': así analiza tus series para lograr que puedas saltar su cabecera" | paginatitel in het zoekresultaat | https://www.genbeta.com/multimedia/plex-pass-habilita-funcion-omitir-introduccion-asi-analiza-tus-series-para-lograr-que-puedas-saltar-su-cabecera |
| Farmacia Jiménez, voetcrème van ISDIN: "Urea 5%: hidrata la piel y restaura la barrera cutánea." | citaat via het zoekhulpmiddel | https://farmaciajimenez.com/nuestras-marcas/isdin-dermatologia/ureadin-hidratacion/ureadin-podos-db-crema-reparadora-pies-fragiles-100-ml |
| Druni, voetcrème van Vis Plantis: "extracto astringente de llantén y manteca de karité" | citaat via het zoekhulpmiddel | https://www.druni.es/crema-pies-consuelda-urea-vis-plantis-regeneradora |
| Vademecum, register van werkzame stoffen: "Ginkgo biloba exto. seco" | samenvatting van het zoekhulpmiddel | https://www.vademecum.es/medicamentos-principio-activo-ginkgo+biloba+exto.+seco_4702_1 |
