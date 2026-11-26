---
title: Derivasjon, kontinuitet og asymptoter – elev
---

<div class="print-cover" aria-label="MathPlatform">
  <div class="print-cover__identity">
    <div class="print-cover__mark">M</div>
    <div class="print-cover__name">MathPlatform</div>
    <div class="print-cover__tagline">Matematikk · forståelse · mestring</div>
  </div>
</div>

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · INTENSIVØKT</span>
  <button class="print-button" type="button" data-print-page>Skriv ut elevheftet</button>
</div>

## 1. Verktøykasse

### Derivasjonsregler

\[
\begin{aligned}
(c)'&=0\\
(x^n)'&=nx^{n-1}\\
(ku)'&=ku'\\
(u+v)'&=u'+v'\\
(uv)'&=u'v+uv'\\
\left(\frac uv\right)'&=\frac{u'v-uv'}{v^2}\\
(u(v(x)))'&=u'(v(x))\cdot v'(x)
\end{aligned}
\]

**Kjerneregel:** Deriver det ytre uttrykket først. Multipliser deretter med den deriverte av det indre uttrykket.

### Definisjonen av den deriverte

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
\]

Brøken kalles en **Newtonsk kvotient**. Den viser stigningstallet til en sekant. Når \(h\) nærmer seg null, nærmer sekanten seg tangenten.

### Tangentlikningen

\[
y-f(a)=f'(a)(x-a)
\]

Punktet er \((a,f(a))\), og stigningstallet er \(f'(a)\).

### Kontinuitet og deriverbarhet

En funksjon er kontinuerlig i \(x=a\) når:
1. \(f(a)\) er definert.
2. Grenseverdien når \(x\to a\) finnes.
3. Grenseverdien er lik \(f(a)\).

Deriverbarhet betyr at den deriverte finnes som et endelig tall. Er funksjonen deriverbar, er den også kontinuerlig. Det motsatte gjelder ikke alltid.

### Asymptoter

- Vertikal: \(x=a\), når funksjonsverdiene går mot uendelig eller minus uendelig.
- Horisontal: \(y=L\), når \(f(x)\to L\) for \(x\to\infty\) eller \(x\to-\infty\).
- Skrå: \(y=ax+b\), når avstanden mellom grafen og linjen går mot null.

<div class="math-note" markdown="1">
<strong>Arbeidsregel:</strong> Vis mellomregning. Skriv hvilken regel du bruker. Når du undersøker kontinuitet eller deriverbarhet i et skjøtepunkt, må du alltid kontrollere venstre og høyre side hver for seg.
</div>

# R1 – Derivasjon, kontinuitet og asymptoter

**Elevutgave · Fire timers intensivøkt**

<div class="chapter-meta" markdown="1">
  <div><strong>Varighet</strong><br>240 minutter</div>
  <div><strong>Fokus</strong><br>Derivasjon · Newtonsk kvotient · tangent · kontinuitet · asymptoter</div>
  <div><strong>Arbeidsform</strong><br>Selvstendig regning · figurer · faglig forklaring</div>
  <div><strong>Mål</strong><br>Sikker metodebruk og presis begrunnelse</div>
</div>

Elev: ____________________________________    Dato: __________________

Oppgavene er laget for elever som arbeider raskt. Det er flere oppgaver enn du normalt rekker dersom du viser full mellomregning. Arbeid grundig med hovedoppgavene, og bruk utfordringsoppgavene når du er ferdig. Ikke hopp over begrunnelser.

## 2. Derivasjon – velg riktig regel

### Kort repetisjon

Potensregelen brukes på potenser av \(x\). Produktregelen brukes når to uttrykk multipliseres. Kvotientregelen brukes når ett uttrykk deles på et annet. Kjerneregelen brukes når en funksjon er satt inn i en annen.

!!! example "Eksempel – kjerneregelen"

    Vi deriverer \(f(x)=(3x^2-1)^4\).

    Ytre funksjon gir \(4(3x^2-1)^3\). Indre funksjon \(3x^2-1\) har derivert \(6x\).

    \[
    f'(x)=4(3x^2-1)^3\cdot6x
    =\underline{\underline{24x(3x^2-1)^3}}
    \]

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE R.1.1</span>
Deriver funksjonene.

a) \(f(x)=7x^5-3x^2+4x-8\)

b) \(g(x)=\dfrac{4}{x^3}+2\sqrt{x}\)

c) \(h(x)=5x^{-2}-3x^{-1}+6\)

d) \(p(x)=\dfrac{x^4-2x^2+1}{x^2}\). Forenkle først.
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.1.2</span>
Bruk kjerneregelen.

a) \(f(x)=(2x+5)^6\)

b) \(g(x)=(x^2-4x+1)^3\)

c) \(h(x)=\sqrt{5x^2+2x+4}\)

d) \(p(x)=\dfrac{1}{(3x-2)^4}\)
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.1.3</span>
Bruk produktregelen. La \(u\) være den første faktoren og \(v\) den andre. Vis \(u\), \(v\), \(u'\), \(v'\) før du setter inn i regelen.

a) \(f(x)=(x^2+3)(2x-1)\)

b) \(g(x)=x^3(4x^2-5)\)

c) \(h(x)=(2x-3)\sqrt{x}\)
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.1.4</span>
Bruk kvotientregelen. Vis \(u\), \(v\), \(u'\), \(v'\), og pass på rekkefølgen \(u'v-uv'\).

a) \(f(x)=\dfrac{x^2+1}{x-2}\)

b) \(g(x)=\dfrac{3x-1}{x^2+4}\)

c) \(h(x)=\dfrac{x^2-4x}{2x+1}\)

d) Oppgi definisjonsmengden til hver funksjon.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.1.5</span>
En funksjon er gitt ved

\[
f(x)=(x^2-1)^3(2x+1).
\]

a) Finn \(f'(x)\) ved å kombinere produktregelen og kjerneregelen.

b) Faktoriser svaret så langt det er naturlig.

c) Bestem \(f'(1)\) og \(f'(-1)\).

d) Forklar hvorfor det er lurt å la faktoriseringen stå i svaret.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE R.1.6</span>
En elev deriverer

\[
q(x)=\frac{(x^2+1)^3}{x-1}
\]

og skriver

\[
q'(x)=\frac{3(x^2+1)^2\cdot2x}{1}.
\]

a) Finn alle feilene i elevens løsning.

b) Deriver funksjonen riktig.

c) Oppgi eventuelle verdier av \(x\) som ikke er tillatt.

d) Forklar kort når produktregelen og når kvotientregelen skal brukes.
</div>

## 3. Definisjonen av den deriverte og Newtonsk kvotient

### Hva måler kvotienten?

\[
\frac{f(a+h)-f(a)}h
\]

Når \(h\ne0\), er dette stigningstallet til sekanten mellom \(x=a\) og \(x=a+h\). Den deriverte får vi ved å undersøke grenseverdien når \(h\) går mot null.

<a id="figur-r-1"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="parabola" role="img" aria-label="Parabelen f av x lik x i andre"></div>
  <p class="math-graph-caption"><strong>Figur R.1.</strong> Bruk parabelen som utgangspunkt når du forklarer sekant, tangent og stigningstall.</p>
</div>

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE R.2.1</span>
Forklar med egne ord.

a) Hva er en Newtonsk kvotient?

b) Hva representerer \(h\)?

c) Hvorfor kan vi ikke sette \(h=0\) direkte i brøken?

d) Hva skjer geometrisk når \(h\) nærmer seg null?
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.2.2</span>
Bruk definisjonen til å finne den deriverte.

a) \(f(x)=x^2\)

b) \(g(x)=3x+4\)

c) \(h(x)=x^2-4x+1\)

Vis alle mellomregningene. Ikke bruk derivasjonsreglene som snarvei.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.2.3</span>
Bruk definisjonen til å finne \(f'(a)\) når

\[
f(x)=x^2-3x+2.
\]

a) Sett opp Newtonsk kvotient.

b) Regn ut \(f(a+h)\) og \(f(a)\).

c) Forenkle telleren og forkort \(h\).

d) La \(h\) gå mot null.

e) Kontroller svaret ved å bruke en vanlig derivasjonsregel.
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.2.4</span>
Vi bruker \(f(x)=x^2\) og \(a=2\).

a) Beregn Newtonsk kvotient når \(h=1\), \(h=0,1\) og \(h=0,01\).

b) Sammenlign svarene med den eksakte verdien \(f'(2)\).

c) Forklar hvorfor kvotienten ikke er lik den deriverte når \(h\) er ulik null.

d) Hva ville skjedd dersom \(h\) var negativ?
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE R.2.5</span>
En funksjon har

\[
f(a)=7,\qquad f(a+h)=7+5h+2h^2.
\]

a) Sett opp Newtonsk kvotient.

b) Forenkle uttrykket.

c) Bestem \(f'(a)\).

d) Bestem den momentane vekstfarten dersom \(a=3\).

e) Forklar hvorfor du ikke trenger å kjenne hele funksjonsuttrykket for å løse oppgaven.
</div>

## 4. Tangentlikning og tolkning

!!! example "Eksempel – tangent til en funksjon"

    Vi har \(f(x)=x^2+1\) og skal finne tangenten når \(x=2\).

    \[
    f(2)=5,\qquad f'(x)=2x,\qquad f'(2)=4
    \]

    \[
    y-5=4(x-2)
    \]

    \[
    \underline{\underline{y=4x-3}}
    \]

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE R.3.1</span>
Finn tangentlikningen.

a) \(f(x)=x^2+3\) når \(x=1\).

b) \(g(x)=x^3-2x\) når \(x=2\).

c) \(h(x)=3x^2-4x+1\) når \(x=-1\).

Vis punktet, stigningstallet og tangentlikningen.
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.3.2</span>
Tangenten til \(f(x)=x^2+ax\) i \(x=2\) har stigningstall 7.

a) Bestem \(a\).

b) Bestem punktet på grafen.

c) Finn tangentlikningen.

d) Kontroller at tangentens stigningstall stemmer.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.3.3</span>
En tangent til grafen går gjennom punktet \(P=(1,4)\) og har stigningstall \(-3\).

a) Finn tangentlikningen.

b) En funksjon \(f\) har \(f(1)=4\). Hva må \(f'(1)\) være for at tangenten skal være den samme?

c) Forklar hva fortegnet til stigningstallet forteller om funksjonen akkurat i punktet.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.3.4</span>
En funksjon er gitt ved

\[
f(x)=x^3-3x^2-9x+4.
\]

a) Finn \(f'(x)\).

b) Bestem alle punkter der tangenten er vannrett.

c) Finn tangentlikningen i \(x=0\).

d) Forklar forskjellen mellom et punkt der \(f(x)=0\), og et punkt der \(f'(x)=0\).
</div>

## 5. Deriverbarhet – også når funksjonen er delt

En funksjon kan være kontinuerlig uten å være deriverbar. I et skjøtepunkt må vi først kontrollere kontinuitet. Deretter sammenligner vi stigningstallene fra venstre og høyre.

<a id="figur-r-2"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="piecewise" role="img" aria-label="Delt funksjon med ulike verdier fra venstre og høyre i skjøtepunktet"></div>
  <p class="math-graph-caption"><strong>Figur R.2.</strong> Grafen har et sprang. En funksjon som ikke er kontinuerlig i punktet, kan heller ikke være deriverbar der.</p>
</div>

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE R.4.1</span>
Forklar forskjellen.

a) Hva betyr kontinuitet?

b) Hva betyr deriverbarhet?

c) Hvorfor må en deriverbar funksjon være kontinuerlig?

d) Kan en kontinuerlig funksjon mangle en derivert? Lag et eksempel.
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.4.2</span>
Vi har

\[
f(x)=|x-2|.
\]

a) Skriv funksjonen som en delt forskrift.

b) Undersøk om funksjonen er kontinuerlig i \(x=2\).

c) Finn stigningstallet fra venstre og fra høyre.

d) Er funksjonen deriverbar i \(x=2\)? Begrunn.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.4.3</span>
Funksjonen er gitt ved

\[
f(x)=
\begin{cases}
ax+1, & x<2,\\
x^2+b, & x\geq2.
\end{cases}
\]

a) Finn sammenhengen mellom \(a\) og \(b\) som gir kontinuitet i \(x=2\).

b) Finn sammenhengen som gir like stigningstall fra venstre og høyre.

c) Bestem \(a\) og \(b\) slik at funksjonen både er kontinuerlig og deriverbar.

d) Kontroller begge kravene.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE R.4.4</span>
Undersøk funksjonen

\[
g(x)=
\begin{cases}
x^2+2x, & x<0,\\
cx+2, & x\geq0.
\end{cases}
\]

a) Bestem \(c\) slik at funksjonen er kontinuerlig i \(x=0\).

b) Er funksjonen deriverbar i \(x=0\) for denne verdien av \(c\)?

c) Kan du endre konstantleddet i høyre forskrift slik at funksjonen blir både kontinuerlig og deriverbar? Begrunn.
</div>

## 6. Kontinuitet, grenseverdier og asymptoter

<a id="figur-r-3"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="verticalAsymptote" role="img" aria-label="Graf med vertikal asymptote x lik 2"></div>
  <p class="math-graph-caption"><strong>Figur R.3.</strong> Vertikal asymptote. Bestem hva som skjer fra venstre og høyre.</p>
</div>

<a id="figur-r-4"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="horizontalAsymptote" role="img" aria-label="Graf med horisontal asymptote y lik 1"></div>
  <p class="math-graph-caption"><strong>Figur R.4.</strong> Horisontal asymptote. Undersøk oppførselen når \(x\) går mot pluss og minus uendelig.</p>
</div>

<div class="task" markdown="1">
<span class="task-level">GRUNNLEGGENDE · OPPGAVE R.5.1</span>
Undersøk kontinuitet i skjøtepunktet.

\[
f(x)=
\begin{cases}
2x+1, & x<1,\\
x^2+2, & x\geq1.
\end{cases}
\]

a) Finn venstre grenseverdi når \(x\to1\).

b) Finn høyre grenseverdi.

c) Finn \(f(1)\).

d) Er funksjonen kontinuerlig i \(x=1\)?
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.5.2</span>
Bestem parameteren \(a\) slik at funksjonen er kontinuerlig.

\[
g(x)=
\begin{cases}
x^2+a, & x<2,\\
3x-1, & x\geq2.
\end{cases}
\]

a) Sett venstre grenseverdi lik høyre grenseverdi.

b) Bestem \(a\).

c) Undersøk om funksjonen også er deriverbar i \(x=2\).
</div>

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE R.5.3</span>
Undersøk asymptotene til

\[
f(x)=\frac{2x+1}{x-3}.
\]

a) Bestem definisjonsmengden.

b) Finn den vertikale asymptoten.

c) Finn den horisontale asymptoten.

d) Bestem de ensidige grenseverdiene når \(x\to3\).

e) Kan grafen krysse den horisontale asymptoten? Begrunn.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.5.4</span>
Undersøk funksjonen

\[
g(x)=\frac{x^2+2x+3}{x-1}.
\]

a) Utfør polynomdivisjon.

b) Bestem den vertikale asymptoten.

c) Bestem den skrå asymptoten.

d) Forklar hvorfor restleddet ikke påvirker den skrå asymptoten når \(x\) går mot uendelig.
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.5.5</span>
En rasjonal funksjon har vertikal asymptote \(x=-2\), horisontal asymptote \(y=3\), og grafen går gjennom punktet \((0,2)\).

Anta at funksjonen kan skrives på formen

\[
f(x)=3+\frac{k}{x+2}.
\]

a) Bestem \(k\).

b) Skriv funksjonen på én brøk.

c) Kontroller asymptotene.

d) Bestem skjæringspunktet med x-aksen.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE R.5.6</span>
En elev sier: «En graf kan aldri krysse en asymptote.»

a) Forklar hvorfor påstanden er feil.

b) Finn skjæringspunktet mellom grafen til

\[
h(x)=\frac{2x^2+x}{x^2+1}
\]

og dens horisontale asymptote.

c) Begrunn den horisontale asymptoten algebraisk.
</div>

## 7. Blandede utfordringer

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.6.1</span>
Vi har funksjonen

\[
f(x)=\frac{x^2-4}{x-2},\qquad x\ne2.
\]

a) Forenkle funksjonsuttrykket.

b) Finn grenseverdien når \(x\to2\).

c) Er funksjonen kontinuerlig i \(x=2\)?

d) Kan vi si at funksjonen er deriverbar i \(x=2\)? Forklar.

e) Hva må endres for at funksjonen skal bli kontinuerlig og deriverbar i \(x=2\)?
</div>

<div class="task" markdown="1">
<span class="task-level">KREVENDE · OPPGAVE R.6.2</span>
Funksjonen er

\[
p(x)=x^3-6x^2+9x+2.
\]

a) Finn \(p'(x)\).

b) Bestem alle stasjonære punkter.

c) Finn tangentlikningen i \(x=1\).

d) Undersøk om hvert stasjonært punkt er toppunkt, bunnpunkt eller terrassepunkt.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE R.6.3</span>
Lag en delt funksjon som er kontinuerlig i \(x=1\), men ikke deriverbar der.

a) Skriv funksjonen som en delt forskrift.

b) Vis at venstre og høyre grenseverdi er like.

c) Vis at funksjonsverdien er lik grenseverdien.

d) Vis at de ensidige stigningstallene er ulike.

e) Tegn en skisse.
</div>

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE R.6.4</span>
En funksjon har en vertikal asymptote \(x=1\) og en skrå asymptote \(y=2x-3\).

a) Lag et rasjonalt funksjonsuttrykk som har disse asymptotene.

b) Kontroller den vertikale asymptoten.

c) Kontroller den skrå asymptoten ved polynomdivisjon.

d) Lag en ny funksjon med samme asymptoter, men som også har et hull. Oppgi hvor hullet ligger.
</div>

## 8. Egenkontroll

Før du avslutter, skal du kunne:

- [ ] velge riktig derivasjonsregel og vise mellomregning
- [ ] bruke potensregelen, kjerneregelen, produktregelen og kvotientregelen
- [ ] forklare og bruke Newtonsk kvotient
- [ ] finne den deriverte ved definisjonen
- [ ] finne tangentens likning fra punkt og stigningstall
- [ ] skille mellom kontinuitet og deriverbarhet
- [ ] undersøke venstre og høyre stigningstall i et skjøtepunkt
- [ ] undersøke kontinuitet for delte forskrifter
- [ ] finne vertikale, horisontale og skrå asymptoter
- [ ] begrunne svar algebraisk og tolke grafer

**Refleksjon:** Hvilke to oppgavetyper krevde mest arbeid, og hva var det konkrete problemet?

____________________________________________________________________

____________________________________________________________________
