---
title: Grenseverdier og kontinuitet – elev
---

<div class="print-cover" aria-label="MathPlatform">
  <div class="print-cover__identity">
    <div class="print-cover__mark">M</div>
    <div class="print-cover__name">MathPlatform</div>
    <div class="print-cover__tagline">Matematikk · forståelse · mestring</div>
  </div>
</div>

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · KAPITTEL 2</span>
  <button class="print-button" type="button" data-print-page>Skriv ut elevheftet</button>
</div>

## 1. Verktøykasse

### Grenseverdier

Når \(x\) nærmer seg \(a\), undersøker vi hvilken verdi \(f(x)\) nærmer seg:

\[
\lim_{x\to a}f(x)=L
\]

Den tosidige grenseverdien finnes bare når venstre og høyre grenseverdi finnes og er like:

\[
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L
\]

### Kontinuitet i et punkt

En funksjon er kontinuerlig i \(x=a\) når alle tre kravene er oppfylt:

1. \(f(a)\) er definert.
2. \(\lim_{x\to a}f(x)\) finnes.
3. \(\lim_{x\to a}f(x)=f(a)\).

### Ubestemt form og faktorisering

Hvis direkte innsetting gir \(0/0\), må uttrykket undersøkes videre. Faktoriser før du forkorter:

\[
\frac{x^2-a^2}{x-a}
=\frac{(x-a)(x+a)}{x-a}=x+a,\qquad x\ne a
\]

Forkorting endrer ikke grenseverdien, men den opprinnelige funksjonen er fortsatt ikke definert i punktet \(x=a\).

### Asymptoter

- Vertikal asymptote \(x=a\): funksjonsverdiene går mot \(+\infty\) eller \(-\infty\) når \(x\) nærmer seg \(a\) fra minst én side.
- Horisontal asymptote \(y=L\): \(f(x)\to L\) når \(x\to\infty\) eller \(x\to-\infty\).
- Skrå asymptote \(y=ax+b\): differansen mellom funksjonen og linjen går mot null når \(x\to\pm\infty\).

<div class="math-note" markdown="1">
<strong>Viktig:</strong> En grenseverdi er ikke nødvendigvis lik funksjonsverdien. Et hull, et sprang eller en asymptote må beskrives presist. En graf hjelper deg å se hva som skjer, men algebraen må begrunne konklusjonen.
</div>

## Innledning

# Grenseverdier og kontinuitet

**Elevutgave · Fordypningsøkt · R1 kapittel 2**

<div class="chapter-meta" markdown="1">
  <div><strong>Tid</strong><br>120 minutter</div>
  <div><strong>Fokus</strong><br>Grafer · grenseverdier · kontinuitet · asymptoter</div>
  <div><strong>Arbeidsmåte</strong><br>Vis mellomregning og begrunn svar</div>
  <div><strong>Mål</strong><br>Selvstendig metodevalg og presis argumentasjon</div>
</div>

Elev: ____________________________________    Dato: __________________

Arbeid først uten digitale hjelpemidler. Bruk figurene aktivt, men ikke stol på grafen alene når en algebraisk begrunnelse er mulig. Oppgavene er ordnet fra grunnleggende til krevende. Gå videre når du har begrunnet svaret ditt.

## 2. Lese og tolke grafer

<a id="figur-2-13-1"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="continuous" role="img" aria-label="Rett linje som går sammenhengende gjennom punktet x lik 1, y lik 2"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.1.</strong> En graf som går sammenhengende gjennom punktet. [Gå til oppgave 2.13.1](#oppgave-2-13-1).</p>
</div>

<a id="oppgave-2-13-1"></a>
<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE 2.13.1</span>
**Les av figur 2.13.1.**

a) Bestem \(\lim_{x\to1^-}f(x)\).

b) Bestem \(\lim_{x\to1^+}f(x)\).

c) Bestem \(f(1)\).

d) Er funksjonen kontinuerlig i \(x=1\)? Begrunn med de tre kontinuitetskravene.
</div>

<a id="figur-2-13-2"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="limit" role="img" aria-label="Graf med åpent punkt i en grenseverdi på 2 og fylt punkt med funksjonsverdi 4 ved x lik 1"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.2.</strong> Grafen nærmer seg samme høyde fra begge sider, men funksjonsverdien er en annen. [Gå til oppgave 2.13.2](#oppgave-2-13-2).</p>
</div>

<a id="oppgave-2-13-2"></a>
<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE 2.13.2</span>
**Skill mellom grenseverdi og funksjonsverdi.**

a) Bestem den tosidige grenseverdien når \(x\to1\).

b) Bestem \(f(1)\).

c) Er funksjonen kontinuerlig i \(x=1\)?

d) Beskriv hvordan grafen måtte vært endret for at funksjonen skulle blitt kontinuerlig uten å endre grafen ellers.
</div>

<a id="figur-2-13-3"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="jump" role="img" aria-label="Sprangdiskontinuitet med ulike ensidige grenseverdier og fylt punkt ved x lik 1"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.3.</strong> Venstre og høyre side nærmer seg ulike verdier. [Gå til oppgave 2.13.3](#oppgave-2-13-3).</p>
</div>

<a id="oppgave-2-13-3"></a>
<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE 2.13.3</span>
**Undersøk spranget i figur 2.13.3.**

a) Bestem venstre grenseverdi når \(x\to1\).

b) Bestem høyre grenseverdi når \(x\to1\).

c) Finnes den tosidige grenseverdien?

d) Bestem \(f(1)\), og forklar hvorfor funksjonen ikke er kontinuerlig.
</div>

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE 2.13.4</span>
**Tre ulike typer diskontinuitet.**

Forklar forskjellen mellom:

a) Et hull i grafen.

b) Et sprang i grafen.

c) En vertikal asymptote.

Lag en liten skisse av hver type. Marker åpne og fylte punkter der det er relevant.
</div>

## 3. Kontinuitet og delte forskrifter

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.5</span>
En funksjon er gitt ved

\[
f(x)=
\begin{cases}
ax+2, & x<1,\\
x^2+3, & x\geq1.
\end{cases}
\]

a) Bestem venstre grenseverdi når \(x\to1\).

b) Bestem høyre grenseverdi og \(f(1)\).

c) Bestem \(a\) slik at funksjonen er kontinuerlig i \(x=1\).

d) Forklar hvorfor det ikke er nok å kontrollere at \(f(1)\) er definert.
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.6</span>
Avgjør om funksjonene er kontinuerlige i det oppgitte punktet. Vis alle tre kravene.

a) \(f(x)=\dfrac{x^2-1}{x-1}\) i \(x=1\).

b) \(g(x)=\begin{cases}x+1,&x<0,\\2x+1,&x\geq0.\end{cases}\) i \(x=0\).

c) \(h(x)=\begin{cases}x+1,&x<0,\\x+2,&x\geq0.\end{cases}\) i \(x=0\).
</div>

<a id="figur-2-13-4"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="piecewise" role="img" aria-label="Delt funksjon med åpent punkt ved koordinatene 1, 3 og fylt punkt ved 1, 1"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.4.</strong> En delt funksjon der funksjonsverdien er bestemt av den høyre forskriften. [Gå til oppgave 2.13.7](#oppgave-2-13-7).</p>
</div>

<a id="oppgave-2-13-7"></a>
<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.7</span>
**Bruk figur 2.13.4.**

a) Skriv en delt forskrift som passer til grafen.

b) Bestem venstre og høyre grenseverdi når \(x\to1\).

c) Bestem \(f(1)\).

d) Er funksjonen kontinuerlig i \(x=1\)? Begrunn.

e) Endre bare én av forskriftene eller punktverdien slik at funksjonen blir kontinuerlig.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.8</span>
En funksjon er gitt ved

\[
f_a(x)=
\begin{cases}
x^2+ax, & x<2,\\
5x-2, & x\geq2.
\end{cases}
\]

a) Bestem \(a\) slik at funksjonen er kontinuerlig i \(x=2\).

b) Tegn en skisse av funksjonen når \(a\) har verdien du fant.

c) Forklar hvorfor kontinuitet i ett punkt ikke betyr at funksjonen er lineær eller glatt overalt.
</div>

## 4. Beregne grenseverdier algebraisk

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE 2.13.9</span>
Beregn grenseverdiene ved direkte innsetting.

a) \(\displaystyle\lim_{x\to2}(3x^2-1)\)

b) \(\displaystyle\lim_{x\to-1}(x^2+4x)\)

c) \(\displaystyle\lim_{x\to3}\sqrt{x+6}\)

d) Forklar hvorfor direkte innsetting fungerer i disse tre tilfellene.
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.10</span>
Beregn grenseverdiene. Faktoriser før du forkorter.

a) \(\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}\)

b) \(\displaystyle\lim_{x\to3}\frac{x^2-5x+6}{x-3}\)

c) \(\displaystyle\lim_{x\to1}\frac{x^2+x-2}{x-1}\)

d) Forklar hvorfor den opprinnelige brøken ikke er definert i grensepunktet, selv om grenseverdien finnes.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.11</span>
En elev sier: «Når jeg får \(0/0\), er grenseverdien null.»

a) Forklar hvorfor påstanden er feil.

b) Lag et eksempel der grenseverdien er et positivt tall.

c) Lag et eksempel der grenseverdien er et negativt tall.

d) Lag et eksempel der grenseverdien ikke finnes.
</div>

## 5. Asymptoter og grafisk analyse

<a id="figur-2-13-5"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="verticalAsymptote" role="img" aria-label="Rasjonal graf med vertikal asymptote x lik 2"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.5.</strong> Grafen går mot uendelig med motsatt fortegn på hver side av den vertikale asymptoten. [Gå til oppgave 2.13.12](#oppgave-2-13-12).</p>
</div>

<a id="oppgave-2-13-12"></a>
<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.12</span>
**Undersøk figur 2.13.5.**

a) Les av den vertikale asymptoten.

b) Bestem fortegnet til venstre grenseverdi når \(x\to2\).

c) Bestem fortegnet til høyre grenseverdi når \(x\to2\).

d) Hvilket enkelt funksjonsuttrykk kan ha denne grafen? Begrunn.
</div>

<a id="figur-2-13-6"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="horizontalAsymptote" role="img" aria-label="Graf som nærmer seg den horisontale asymptoten y lik 1 på begge sider"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.6.</strong> En horisontal asymptote beskriver oppførselen langt ute på x-aksen. [Gå til oppgave 2.13.13](#oppgave-2-13-13).</p>
</div>

<a id="oppgave-2-13-13"></a>
<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.13</span>
**Undersøk figur 2.13.6.**

a) Bestem den horisontale asymptoten.

b) Skriv grenseverdiene når \(x\to\infty\) og \(x\to-\infty\).

c) Kan grafen krysse en horisontal asymptote? Forklar.

d) Kan du ut fra figuren alene bevise grenseverdien? Begrunn.
</div>

<a id="figur-2-13-7"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="rationalReconstruction" role="img" aria-label="Rasjonal funksjon med vertikal asymptote x lik 2, horisontal asymptote y lik 1 og punktet 0, 0"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.7.</strong> To asymptoter og ett kjent punkt kan være nok til å bestemme en enkel rasjonal funksjon. [Gå til oppgave 2.13.14](#oppgave-2-13-14).</p>
</div>

<a id="oppgave-2-13-14"></a>
<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.14</span>
Grafen i figur 2.13.7 har vertikal asymptote \(x=2\), horisontal asymptote \(y=1\) og går gjennom \((0,0)\).

a) Foreslå en funksjon på formen \(f(x)=1+\dfrac{k}{x-2}\).

b) Bestem \(k\) ved å bruke punktet \((0,0)\).

c) Kontroller at funksjonen har de oppgitte asymptotene.

d) Bestem de ensidige grenseverdiene ved \(x=2\).
</div>

<a id="figur-2-13-8"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="slantAsymptoteChapter2" role="img" aria-label="Rasjonal funksjon med vertikal asymptote x lik 1 og skrå asymptote y lik x pluss 1"></div>
  <p class="math-graph-caption"><strong>Figur 2.13.8.</strong> Den stiplede linjen er en skrå asymptote. [Gå til oppgave 2.13.15](#oppgave-2-13-15).</p>
</div>

<a id="oppgave-2-13-15"></a>
<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.15</span>
**Bruk figur 2.13.8.**

a) Bestem den vertikale asymptoten.

b) Les av den skrå asymptoten.

c) Utfør polynomdivisjonen

\[
\frac{x^2+1}{x-1}.
\]

d) Forklar hvorfor restleddet ikke påvirker den skrå asymptoten når \(x\to\pm\infty\).
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.16</span>
Vi har funksjonen

\[
h(x)=\frac{2x^2+x}{x^2+1}.
\]

a) Bestem den horisontale asymptoten.

b) Undersøk om grafen krysser asymptoten.

c) Finn eventuelt skjæringspunktet.

d) Forklar hvorfor det ikke er en motsigelse at grafen krysser en asymptote.
</div>

## 6. Anvendelser og sammensatte problemer

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 2.13.17</span>
En parkeringsplass har følgende pris \(P(t)\), målt i kroner, etter \(t\) timer:

\[
P(t)=
\begin{cases}
25, & 0\leq t<1,\\
40, & 1\leq t<2,\\
55, & t\geq2.
\end{cases}
\]

a) Bestem venstre og høyre grenseverdi ved \(t=1\).

b) Bestem venstre og høyre grenseverdi ved \(t=2\).

c) Er prisfunksjonen kontinuerlig ved disse tidspunktene?

d) Forklar hva sprangene betyr i den praktiske situasjonen.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.18</span>
Temperaturen i en modell er gitt ved

\[
T(t)=20+\frac{60}{t+1},\qquad t\geq0.
\]

a) Beregn \(T(0)\), \(T(1)\), \(T(4)\) og \(T(9)\).

b) Bestem \(\lim_{t\to\infty}T(t)\).

c) Tolk grenseverdien i den praktiske situasjonen.

d) Forklar hvorfor modellen ikke sier at temperaturen faktisk blir lik 20 grader etter et endelig antall minutter.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.19</span>
La

\[
f_a(x)=\frac{x^2+(a-1)x-a}{x^2-1}.
\]

a) Faktoriser teller og nevner.

b) Oppgi den opprinnelige definisjonsmengden.

c) Undersøk hva som skjer når \(x\to1\). Finn koordinatene til hullet.

d) Undersøk hva som skjer når \(x\to-1\). For hvilken verdi av \(a\) får vi et hull i stedet for en vertikal asymptote?

e) Bestem den horisontale asymptoten.

f) Forklar hvorfor du må undersøke \(x=1\) og \(x=-1\) hver for seg.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE 2.13.20</span>
En elev hevder:

«Hvis venstre og høyre grenseverdi er like, er funksjonen automatisk kontinuerlig.»

a) Forklar hva som mangler i argumentet.

b) Bruk figur 2.13.2 som moteksempel.

c) Lag selv et annet eksempel på en funksjon der grenseverdien finnes, men funksjonen ikke er kontinuerlig.

d) Oppsummer de tre kravene for kontinuitet med egne ord.
</div>

## 7. Utfordringer – hvis du blir tidlig ferdig

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE 2.13.21</span>
Konstruer en rasjonal funksjon som har:

- et hull ved \(x=1\)
- en vertikal asymptote ved \(x=3\)
- en horisontal asymptote \(y=2\)

Oppgi funksjonsuttrykk, definisjonsmengde og koordinatene til hullet. Begrunn alle tre egenskapene.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE 2.13.22</span>
Finn en rasjonal funksjon med en skrå asymptote \(y=2x-1\) og en vertikal asymptote \(x=-2\). Lag deretter en variant som har et hull i tillegg. Forklar hvordan du kan endre uttrykket uten å endre grafen ellers.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE 2.13.23</span>
Kan en funksjon være kontinuerlig i alle punkter i definisjonsmengden sin, men likevel ha en vertikal asymptote? Lag et eksempel og forklar nøye hva som menes med «i definisjonsmengden».
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE 2.13.24</span>
En funksjon \(f\) har

\[
\lim_{x\to2^-}f(x)=5,\qquad
\lim_{x\to2^+}f(x)=5.
\]

Lag tre ulike funksjoner som oppfyller disse grensebetingelsene, men som har ulik status i \(x=2\):

a) Kontinuerlig i \(x=2\).

b) Ikke definert i \(x=2\).

c) Definert i \(x=2\), men ikke kontinuerlig.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE 2.13.25</span>
Forklar hvorfor en horisontal asymptote ikke nødvendigvis er en linje grafen aldri krysser. Lag et eksempel med minst to skjæringspunkter mellom grafen og den horisontale asymptoten.
</div>

## 8. Egenkontroll

Før du avslutter, skal du kunne svare ja på disse punktene:

- [ ] Jeg skiller mellom grenseverdi og funksjonsverdi.
- [ ] Jeg kan lese av og tolke åpne og fylte punkter.
- [ ] Jeg kan beregne ensidige og tosidige grenseverdier.
- [ ] Jeg kan bruke alle tre kravene for kontinuitet.
- [ ] Jeg kan faktorisere før jeg forkorter i en grenseverdi.
- [ ] Jeg husker at forkorting ikke endrer den opprinnelige definisjonsmengden.
- [ ] Jeg kan finne og begrunne vertikale, horisontale og skrå asymptoter.
- [ ] Jeg kan forklare hva en diskontinuitet betyr i en praktisk situasjon.

**Refleksjon:** Hvilken oppgavetype måtte du bruke mest tid på, og hvorfor?

____________________________________________________________________

____________________________________________________________________
