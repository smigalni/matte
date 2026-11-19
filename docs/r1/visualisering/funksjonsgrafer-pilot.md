# Funksjonsgrafer – ny visualiseringspilot

Denne siden er en arbeidsflate for å utvikle en felles standard for matematiske grafer. Målet er at hver figur skal vise akkurat det eleven trenger å se – uten unødvendig rutenett, pynt eller grafiske elementer.

Figurene er tegnet som skalerbar SVG. De skal være skarpe på mobil, stor skjerm og ved utskrift.

## 1. Parabel – ren kurve og utvalgte punkter

Vi ser på funksjonen

\[
f(x)=x^2.
\]

Her er det ikke behov for rutenett eller tall på aksene. Formen på grafen, symmetrien og de markerte punktene er det viktige.

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="parabola" role="img" aria-label="Parabelen f av x er lik x i andre"></div>
  <p class="math-graph-caption">Parabelen har bunnpunkt i origo og er symmetrisk om y-aksen.</p>
</div>

## 2. Rasjonal funksjon – asymptoter og punkter

Vi undersøker

\[
f(x)=1+\frac{2}{x-1}.
\]

Grafen har en vertikal asymptote og en horisontal asymptote. Punktene gjør det lettere å lese av hvordan grafen ligger i forhold til asymptotene.

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="asymptotes" role="img" aria-label="Rasjonal funksjon med vertikal og horisontal asymptote"></div>
  <p class="math-graph-caption">Den vertikale asymptoten er \(x=1\), og den horisontale asymptoten er \(y=1\).</p>
</div>

## 3. Grenseverdier – samme grense fra begge sider, annen funksjonsverdi

Vi definerer funksjonen ved

\[
f(x)=
\begin{cases}
x+1, & x\ne 1,\\
4, & x=1.
\end{cases}
\]

Når \(x\) nærmer seg 1 fra venstre og høyre, nærmer funksjonsverdien seg 2. Likevel er \(f(1)=4\).

\[
\begin{aligned}
\lim_{x\to 1^-} f(x)&=2,\\
\lim_{x\to 1^+} f(x)&=2,\\
\lim_{x\to 1} f(x)&=2,\qquad f(1)=4.
\end{aligned}
\]

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="limit" role="img" aria-label="Graf med åpent punkt ved 1, 2 og fylt punkt ved 1, 4"></div>
  <p class="math-graph-caption">Åpent punkt viser grenseverdien 2. Fylt punkt viser funksjonsverdien \(f(1)=4\).</p>
</div>

## 4. Sekant og tangent

For \(f(x)=x^2\) ser vi på punktet \(P=(1,1)\). Tangenten har stigningstall 2, mens sekanten gjennom \(P\) og \(Q=(2,4)\) har stigningstall 3.

\[
f'(1)=2.
\]

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="tangent" role="img" aria-label="Parabel med tangent og sekant"></div>
  <p class="math-graph-caption">Den heltrukne grønne linjen er tangenten. Den stiplede oransje linjen er sekanten.</p>
</div>


## 5. Vektorer – retning, lengde og komponenter

Vektorer tegnes i et koordinatsystem med rutenett. Hver rute tilsvarer én enhet, slik at både retning, komponenter og lengde kan leses direkte av figuren. Pilspissen viser retningen.

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="vectors" role="img" aria-label="To vektorer tegnet med pilspisser i koordinatrutenett"></div>
  <p class="math-graph-caption">Rutenettet gjør det enkelt å telle horisontal og vertikal komponent. Lengden kan deretter bestemmes med Pytagoras.</p>
</div>

## 6. Punkter i koordinatsystemet

Punktene skal være tydelige, og hjelpelinjer brukes når de gjør koordinatene enklere å lese.

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="points" role="img" aria-label="Tre punkter markert i koordinatsystem med rutenett"></div>
  <p class="math-graph-caption">Punktene A, B og C er markert med koordinater og hjelpelinjer.</p>
</div>

## 7. Plane geometriske figurer

Geometriske figurer skal ha et eget, rent tegnefelt – ikke et koordinatsystem med mindre koordinater faktisk er en del av oppgaven.

### Trekant

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="triangle" role="img" aria-label="Trekant med hjørner, grunnlinje og høyde"></div>
  <p class="math-graph-caption">Grunnlinje og høyde er markert separat.</p>
</div>

### Sirkel

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="circle" role="img" aria-label="Sirkel med sentrum, radius og diameter"></div>
  <p class="math-graph-caption">Radius går fra sentrum til sirkelperiferien. Diameteren går gjennom sentrum.</p>
</div>

### Rektangel

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="rectangle" role="img" aria-label="Rektangel med rette vinkler og sidelengder"></div>
  <p class="math-graph-caption">Rette vinkler og sidelengder skal være lette å skille fra hverandre.</p>
</div>

## 8. Romgeometri – kjegle og pyramide

3D-figurene tegnes i perspektiv. Synlige kanter er heltrukne, mens skjulte kanter vises stiplet. Høyde og grunnflate markeres med egne linjestiler.

### Kjegle

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="cone" role="img" aria-label="Kjegle med grunnflate, radius og høyde"></div>
  <p class="math-graph-caption">Den bakre delen av grunnflaten er stiplet for å vise at den ligger skjult.</p>
</div>

### Firkantet pyramide

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="pyramid" role="img" aria-label="Firkantet pyramide med høyde og grunnflate"></div>
  <p class="math-graph-caption">Pyramiden viser toppunkt, grunnflate og høyde. Skjulte kanter er stiplet.</p>
</div>

---

**Vurderingspunkt:** Før denne standarden brukes i lærebokkapitlene, skal grafene kontrolleres visuelt på mobil og desktop, i utskrift og mot de matematiske uttrykkene. Dette er en isolert pilot; eksisterende lærebokinnhold er ikke endret.
