# Funksjonsgrafer – teknisk pilot

Denne pilotsiden viser fem typer illustrasjoner laget med samme grafmotor og visuelle standard. Grafene er skalerbare og tilpasser seg skjermbredden.

Målet er å kontrollere matematisk presisjon, lesbarhet og mobilvisning før vi bruker systemet i de ordinære kapitlene.

## 1. Andregradsfunksjon

Grafen viser funksjonen \(f(x)=x^2-4\), med nullpunktene og bunnpunktet markert.

<div class="r1-graph-frame">
  <div id="r1-quadratic" class="jxgbox r1-function-graph" data-r1-graph="quadratic" role="img" aria-label="Andregradsfunksjon med nullpunkter og bunnpunkt"></div>
  <p class="r1-graph-caption">Nullpunktene er \(x=-2\) og \(x=2\). Bunnpunktet er \((0,-4)\).</p>
</div>

## 2. Tredjegradsfunksjon

Grafen viser \(f(x)=x^3-3x\), med toppunkt og bunnpunkt.

<div class="r1-graph-frame">
  <div id="r1-cubic" class="jxgbox r1-function-graph" data-r1-graph="cubic" role="img" aria-label="Tredjegradsfunksjon med toppunkt og bunnpunkt"></div>
  <p class="r1-graph-caption">Toppunktet er \((-1,2)\), og bunnpunktet er \((1,-2)\).</p>
</div>

## 3. Rasjonal funksjon og asymptoter

Grafen viser \(f(x)=1+\dfrac{3}{x-2}\).

<div class="r1-graph-frame">
  <div id="r1-rational" class="jxgbox r1-function-graph" data-r1-graph="rational" role="img" aria-label="Rasjonal funksjon med vertikal asymptote x lik 2 og horisontal asymptote y lik 1"></div>
  <p class="r1-graph-caption">Vertikal asymptote: \(x=2\). Horisontal asymptote: \(y=1\).</p>
</div>

## 4. Sekant og tangent

Vi bruker \(f(x)=x^2\). Sekanten går gjennom \((-1,1)\) og \((1,1)\), mens tangenten berører grafen i \((1,1)\).

<div class="r1-graph-frame">
  <div id="r1-tangent" class="jxgbox r1-function-graph" data-r1-graph="tangent" role="img" aria-label="Sekant og tangent til funksjonen x i andre"></div>
  <p class="r1-graph-caption">Tangenten i \(x=1\) har stigningstall \(f'(1)=2\). Sekanten har stigningstall 0.</p>
</div>

## 5. Åpent og fylt punkt

Grafen viser en delt forskrift med \(f(x)=x+2\) når \(x<0\), og \(f(x)=x^2+1\) når \(x\geq0\).

<div class="r1-graph-frame">
  <div id="r1-continuity" class="jxgbox r1-function-graph" data-r1-graph="continuity" role="img" aria-label="Delt funksjon med åpent punkt i 0,2 og fylt punkt i 0,1"></div>
  <p class="r1-graph-caption">Den åpne sirkelen viser at \((0,2)\) ikke er med. Den fylte sirkelen viser funksjonsverdien \(f(0)=1\).</p>
</div>

## Hva piloten kontrollerer

- Samme akser, rutenett, farger og typografi i alle grafene.
- Punkter og asymptoter plasseres fra matematiske koordinater, ikke ved manuell tegning.
- Grafene skalerer til mobil og større skjermer.
- Nettlesertester kontrollerer at alle fem grafene rendres, har synlig tegneflate og ikke lager horisontal sideskrolling.

Dette er en teknisk pilot. Grafene skal ikke kopieres inn i lærestoff før den matematiske og visuelle gjennomgangen er godkjent.
