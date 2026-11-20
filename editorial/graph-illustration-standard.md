# Grafikkstandard for matematikkboka

Denne standarden gjelder alle funksjonsgrafer og matematiske illustrasjoner i R1-boka. Målet er et rolig, presist og konsekvent lærebokuttrykk. Figurene skal støtte forklaringen, ikke konkurrere med teksten.

## 1. Teknisk løsning

- Bruk `docs/javascripts/math-graphs.js` som felles grafmotor.
- Definer figurer som matematiske data i grafmotorens `graphs`-objekt. Ikke tegn koordinatgrafer som frie SVG-kurver i Markdown.
- Bruk `data-math-graph="<nøkkel>"` på et element med klassen `.math-graph`.
- Pakk figuren inn i `.math-graph-frame` og legg en kort `.math-graph-caption` under.
- SVG-en genereres med viewBox og skaleres responsivt. Den skal fungere på mobil, desktop og i utskrift.
- Ikke last JSXGraph eller andre tunge interaktive grafbiblioteker for lærebokillustrasjoner.

Eksempel:

```html
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="asymptotes"
       role="img" aria-label="Rasjonal funksjon med vertikal og horisontal asymptote"></div>
  <p class="math-graph-caption">Vertikal asymptote x = 1 og horisontal asymptote y = 1.</p>
</div>
```

## 2. Kurver og koordinatsystem

- Funksjonskurver skal være tydelige, men ikke tykke. Standard linjetykkelse er omtrent 2,3–2,6 SVG-enheter.
- Akser og hjelpelinjer skal være visuelt svakere enn funksjonskurven.
- Rutenett brukes bare når det hjelper eleven å lese av koordinater eller sammenligne avstander. Ikke bruk rutenett som standard på alle figurer.
- Velg et stramt og pedagogisk utsnitt. Unngå unødvendig store tomme områder.
- Grafene skal være visuelt mindre og roligere enn hovedteksten. Vanlige kvadratiske grafer har maksbredde rundt 460 px.

## 3. Asymptoter

- Vertikale og horisontale asymptoter skal bruke en tynn, rolig, stiplet linje med tydelig etikett.
- Skrå asymptoter skal bruke samme visuelle språk som vertikale og horisontale asymptoter.
- For funksjonen \\(f(x)=x+2/x\\) skal begge grener tegnes langt nok inn mot \\(x=0\\) til at kurven ser ut til å fortsette mot den vertikale asymptoten. Ikke stopp grenene kunstig ved \\(x=-1\\) og \\(x=1\\).
- Samtidig skal utsnittet vise at grenene nærmer seg den skrå asymptoten \\(y=x\\) langt ute på begge sider.
- Kurvene klippes av tegneflatens grenser, ikke ved et vilkårlig endepunkt som gir et synlig bråstopp.

## 4. Punkter på grafer

- Fylte punkter tegnes direkte oppå grafen. Ikke legg en hvit halo eller hvit bakgrunnssirkel bak dem; grafen skal fortsette uavbrutt gjennom punktet.
- Åpne punkter tegnes som hvite sirkler med tydelig omriss. De viser at punktet ikke er med i den aktuelle grafen.
- Ikke legg til ekstra punktmarkører hvis de ikke formidler matematisk informasjon.
- Etiketter skal plasseres slik at de ikke kolliderer med kurven, andre etiketter eller viktige punkter.

## 5. Vektorer

- Vektorer skal ha synlige pilspisser som peker tydelig i riktig retning.
- Pilspissene skal være proporsjonale med vektorlengden og ikke drukne i linjen.
- Bruk moderat linjetykkelse. Vektorlinjene skal ikke være unødvendig bold.
- Ikke tegn punktmarkører i vektorendene med mindre oppgaven uttrykkelig handler om punktene.

## 6. Geometriske figurer og 3D

- Geometriske figurer skal være kompakte, med moderate linjetykkelser og tydelige markeringer.
- Ikke legg koordinatsystem rundt geometriske figurer med mindre koordinatsystemet er en del av det matematiske poenget.
- Skjulte kanter kan vises med en tynn stiplet linje.
- Geometriske illustrasjoner skal normalt ha maksbredde rundt 380 px og ikke dominere siden.
- 3D-figurer skal ha tydelige romlige kanter og etiketter, uten unødvendig dekorasjon.

## 7. Tilgjengelighet og bildetekster

- Hver figur skal ha en presis `aria-label` eller SVG-tittel og beskrivelse.
- Bildeteksten skal forklare hva eleven skal legge merke til, ikke bare gjenta figurens tittel.
- Farge skal aldri være eneste måte å skille matematisk informasjon på. Bruk også punktform, stipling eller tekstetiketter.

## 8. Kvalitetskontroll

- Kontroller at funksjonsforskrifter, intervaller, punkter og asymptoter stemmer matematisk.
- Kontroller at kurver ikke stopper unaturlig, at punkter ikke lager utilsiktede hull, og at etiketter er lesbare.
- Inspiser faktiske sider på desktop og mobil, og kontroller utskrift.
- Behold den ordinære bokkvalitetskontrollen og Zensical-byggingen. Ikke behold midlertidige pilotnettlesertester eller egne graf-pilot-workflows når figurstandarden er tatt i bruk i kapitlene.

## 9. Nummerering og henvisning til figurer
- Gi hver figur en unik, hierarkisk ID på formen `figur-kapittel-delkapittel-løpenummer`, og vis nummeret i bildeteksten, for eksempel «Figur 2.4.1.».
- Nummereringen starter på nytt i hvert delkapittel. Løpenummeret følger rekkefølgen figurene introduseres i.
- Sett et stabilt HTML-anker på hver figur, for eksempel `<a id="figur-2-4-1"></a>`.
- Henvis til figuren i den løpende teksten med en klikkbar henvisning, for eksempel `[figur 2.4.1](#figur-2-4-1)`. Ikke la figurer stå uten en tekstlig henvisning.
- Kontroller at nummer, anker, henvisning, bildetekst og `aria-label` beskriver samme matematiske innhold.
