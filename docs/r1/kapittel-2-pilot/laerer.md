---
title: Grenseverdier og kontinuitet – lærer
---

<div class="print-cover" aria-label="MathPlatform">
  <div class="print-cover__identity">
    <div class="print-cover__mark">M</div>
    <div class="print-cover__name">MathPlatform</div>
    <div class="print-cover__tagline">Matematikk · forståelse · mestring</div>
  </div>
</div>

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · KAPITTEL 2 · LÆRERUTGAVE</span>
  <button class="print-button" type="button" data-print-page>Skriv ut lærerveiledningen</button>
</div>

# Lærerveiledning: Grenseverdier og kontinuitet

**Lærerutgave · 120 minutters økt · R1 kapittel 2**

<div class="teacher-warning" markdown="1">
<strong>KUN TIL UNDERVISER</strong>

Denne utgaven inneholder løsningsforslag, hint, vurderingsmomenter og observasjonsskjema. Ikke del lærerutgaven med eleven.
</div>

<div class="chapter-meta" markdown="1">
  <div><strong>Varighet</strong><br>120 minutter</div>
  <div><strong>Hovedtema</strong><br>Grenseverdier og kontinuitet</div>
  <div><strong>Arbeidsform</strong><br>Elevregning og faglig samtale</div>
  <div><strong>Vurder</strong><br>Begrepsforståelse og selvstendighet</div>
</div>

## 1. Formål og faglig avgrensning

Økten skal undersøke om eleven kan gå mellom grafisk, numerisk og algebraisk forståelse av grenseverdier. Kapittel 2 har særlig to hovedområder:

- utforske, bestemme og argumentere for grenseverdier
- begrunne om funksjoner er kontinuerlige eller diskontinuerlige, og tolke diskontinuitet i praktiske situasjoner

Derivasjon, logistisk vekst, omvendte funksjoner, vektorer og parameterframstillinger er ikke del av denne økten.

Se spesielt etter om eleven:

- skiller mellom \(f(a)\) og \(\lim_{x\to a}f(x)\)
- leser venstre og høyre grenseverdi hver for seg
- bruker alle tre kontinuitetskravene
- forstår at \(0/0\) er en ubestemt form, ikke et svar
- faktoriserer før forkorting og bevarer den opprinnelige definisjonsmengden
- skiller mellom hull, sprang og vertikal asymptote
- begrunner asymptoter algebraisk, ikke bare ved å peke på en graf

## 2. Forslag til gjennomføring – 120 minutter

| Tid | Del | Oppgaver | Hva du undersøker |
|---|---|---|---|
| 0–10 min | Oppstart og begreper | Muntlig samtale, figur 2.13.1–2.13.3 | Grenseverdi kontra funksjonsverdi |
| 10–30 min | Graflesing | 2.13.1–2.13.4 | Ensidige grenser, hull og sprang |
| 30–50 min | Kontinuitet | 2.13.5–2.13.8 | Tre krav, delte forskrifter og parameter |
| 50–55 min | Kort pause | – | – |
| 55–75 min | Algebraiske grenser | 2.13.9–2.13.11 | Direkte innsetting, faktorisering, \(0/0\) |
| 75–100 min | Asymptoter | 2.13.12–2.13.16 | Vertikal, horisontal og skrå asymptote |
| 100–115 min | Anvendelser og syntese | 2.13.17–2.13.20 | Overføring og argumentasjon |
| 115–120 min | Oppsummering | Egenkontroll | Elevens egen vurdering og neste steg |

**Tempo:** Dette er en rask elevs økt. Oppgavene 2.13.1–2.13.20 utgjør hovedløpet. Dersom eleven arbeider raskt, gå videre til utfordringene 2.13.21–2.13.25. Ikke bruk tiden på å presse gjennom alle oppgavene hvis en sentral misoppfatning trenger å bli undersøkt.

## 3. Slik registrerer du mestring

Bruk samme observasjonskoder som i kapittel 1-piloten:

| Kode | Betydning |
|---|---|
| S | Selvstendig og korrekt |
| H1 | Korrekt etter ett lite hint |
| H2 | Korrekt etter flere eller tydelige hint |
| M | Metode-/begrepsfeil |
| B | Beregningsfeil, men riktig metode |
| K | Klarer å forklare og begrunne |
| F | Får det ikke til ennå |
| R | Retter selv feilen etter å ha oppdaget den |

Registrer kort og konkret:

**Tid – oppgave – kode – konkret observasjon – hva du gjorde – neste steg**

Ikke registrer bare «riktig» eller «feil». Skill mellom:
- feil begrep
- feil valg av metode
- korrekt metode med regnefeil
- manglende begrunnelse
- selvstendig oppdagelse og retting

## 4. Løsningsforslag

### Oppgaver 2.13.1–2.13.4 · Lese og tolke grafer

**Oppgave 2.13.1**

Figur 2.13.1 viser \(f(x)=x+1\), også gjennom \(x=1\).

\[
\lim_{x\to1^-}f(x)=2,\qquad
\lim_{x\to1^+}f(x)=2,\qquad f(1)=2.
\]

Funksjonen er kontinuerlig fordi funksjonsverdien er definert, grenseverdien finnes, og de to er like.

**Oppgave 2.13.2**

\[
\lim_{x\to1^-}f(x)=\lim_{x\to1^+}f(x)=2,
\qquad f(1)=4.
\]

Grenseverdien finnes og er 2, men funksjonen er ikke kontinuerlig fordi \(f(1)\ne2\). Sett \(f(1)=2\) for å fylle hullet.

**Oppgave 2.13.3**

\[
\lim_{x\to1^-}f(x)=3,\qquad
\lim_{x\to1^+}f(x)=1,\qquad f(1)=1.
\]

Den tosidige grenseverdien finnes ikke fordi de ensidige grenseverdiene er ulike. Funksjonen er ikke kontinuerlig.

**Oppgave 2.13.4**

- Hull: De ensidige grensene er like, men funksjonen mangler verdi i punktet eller har en annen verdi.
- Sprang: De ensidige grenseverdiene er ulike.
- Vertikal asymptote: Funksjonsverdiene går mot uendelig eller minus uendelig fra minst én side.

Vurder om eleven kan skille mellom «grenseverdien finnes ikke» ved sprang og «grenseverdien er uendelig» ved vertikal asymptote.

### Oppgaver 2.13.5–2.13.8 · Kontinuitet

**Oppgave 2.13.5**

Ved \(x=1\):

\[
\lim_{x\to1^-}f(x)=a+2,
\qquad
\lim_{x\to1^+}f(x)=f(1)=4.
\]

Kontinuitet krever \(a+2=4\), altså

\[
\underline{\underline{a=2}}.
\]

**Oppgave 2.13.6**

a) For \(x\ne1\) er

\[
\frac{x^2-1}{x-1}=x+1.
\]

Grenseverdien er 2, men den opprinnelige funksjonen er ikke definert ved \(x=1\). Ikke kontinuerlig.

b) Begge grenser og funksjonsverdien er 1. Kontinuerlig.

c) Venstre grenseverdi er 1, høyre grenseverdi er 2. Den tosidige grenseverdien finnes ikke. Ikke kontinuerlig.

**Oppgave 2.13.7**

Grafen viser

\[
f(x)=
\begin{cases}
x+2,&x<1,\\
x^2,&x\geq1.
\end{cases}
\]

Venstre grenseverdi er 3, høyre grenseverdi er 1, og \(f(1)=1\). Ikke kontinuerlig. For å få kontinuitet må grensene bli like; én mulig endring er å endre venstre forskrift til \(x\), slik at venstre grenseverdi blir 1.

**Oppgave 2.13.8**

Kontinuitet gir

\[
4+2a=8
\quad\Longrightarrow\quad
\underline{\underline{a=2}}.
\]

Da møtes delgrafene i \((2,8)\). Kontinuitet i ett punkt sier ikke at funksjonen er lineær eller glatt andre steder.

### Oppgaver 2.13.9–2.13.11 · Algebraiske grenseverdier

**Oppgave 2.13.9**

a) \(3\cdot2^2-1=11\).

b) \((-1)^2+4(-1)=-3\).

c) \(\sqrt{3+6}=3\).

Alle uttrykkene er kontinuerlige i de aktuelle punktene, så direkte innsetting fungerer.

**Oppgave 2.13.10**

a)

\[
\lim_{x\to2}\frac{x^2-4}{x-2}
=\lim_{x\to2}(x+2)=4.
\]

b)

\[
\lim_{x\to3}\frac{(x-2)(x-3)}{x-3}=1.
\]

c)

\[
\lim_{x\to1}\frac{(x+2)(x-1)}{x-1}=3.
\]

De opprinnelige funksjonene er ikke definert i grensepunktene, men grenseverdiene finnes.

**Oppgave 2.13.11**

\(0/0\) er ubestemt. Eksempler:

- Positiv grenseverdi: \(\lim_{x\to1}\frac{x^2-1}{x-1}=2\).
- Negativ grenseverdi: \(\lim_{x\to1}\frac{1-x^2}{x-1}=-2\).
- Grenseverdi finnes ikke: \(\lim_{x\to0}\frac{x}{|x|}\) har venstre grenseverdi \(-1\) og høyre grenseverdi \(1\).

### Oppgaver 2.13.12–2.13.16 · Asymptoter

**Oppgave 2.13.12**

Figuren viser \(f(x)=1/(x-2)\).

\[
\lim_{x\to2^-}f(x)=-\infty,\qquad
\lim_{x\to2^+}f(x)=+\infty.
\]

Vertikal asymptote: \(\underline{\underline{x=2}}\).

**Oppgave 2.13.13**

Figuren viser \(f(x)=1+\frac{2}{x^2+1}\). Den horisontale asymptoten er

\[
\underline{\underline{y=1}}.
\]

Begge grenseverdiene er 1. Grafen krysser ikke asymptoten fordi brøkleddet alltid er positivt. En graf gir visuell støtte, men et algebraisk argument beviser grenseverdien.

**Oppgave 2.13.14**

Punktet \((0,0)\) gir

\[
0=1+\frac{k}{-2}
\quad\Longrightarrow\quad k=2.
\]

Dermed

\[
f(x)=1+\frac{2}{x-2}.
\]

Vertikal asymptote \(x=2\), horisontal asymptote \(y=1\), og

\[
\lim_{x\to2^-}f(x)=-\infty,\qquad
\lim_{x\to2^+}f(x)=+\infty.
\]

**Oppgave 2.13.15**

Polynomdivisjon:

\[
\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1}.
\]

Vertikal asymptote \(x=1\), skrå asymptote

\[
\underline{\underline{y=x+1}}.
\]

Restleddet går mot null når \(x\to\pm\infty\).

**Oppgave 2.13.16**

Teller og nevner har samme grad. Horisontal asymptote er \(y=2\). Skjæring med asymptoten:

\[
\frac{2x^2+x}{x^2+1}=2
\quad\Longrightarrow\quad x=2.
\]

Skjæringspunkt: \(\underline{\underline{(2,2)}}\). En horisontal asymptote beskriver oppførselen når \(x\) går mot uendelig; den er ikke en sperrelinje.

### Oppgaver 2.13.17–2.13.20 · Anvendelser og syntese

**Oppgave 2.13.17**

Ved \(t=1\): venstre grenseverdi 25, høyre grenseverdi 40.

Ved \(t=2\): venstre grenseverdi 40, høyre grenseverdi 55.

Funksjonen har sprang ved begge tidspunktene. I modellen endres prisen momentant når kunden passerer en tidsgrense.

**Oppgave 2.13.18**

\[
T(0)=80,\quad T(1)=50,\quad T(4)=32,\quad T(9)=26.
\]

\[
\lim_{t\to\infty}T(t)=20.
\]

Modellen nærmer seg 20 grader uten å nå verdien etter et endelig tidspunkt.

**Oppgave 2.13.19**

\[
f_a(x)=
\frac{(x-1)(x+a)}{(x-1)(x+1)}
=\frac{x+a}{x+1},\qquad x\ne-1,1.
\]

Ved \(x=1\) får vi alltid et hull:

\[
\left(1,\frac{a+1}{2}\right).
\]

Ved \(x=-1\) får vi vertikal asymptote når \(a\ne1\). Når \(a=1\), forkortes også \(x+1\), og punktet blir et hull med grenseverdi 1. Horisontal asymptote er \(y=1\).

**Oppgave 2.13.20**

Påstanden mangler kravet om at funksjonen må være definert i punktet, og at funksjonsverdien må være lik grenseverdien. Figur 2.13.2 er et moteksempel: grenseverdien er 2, mens funksjonsverdien er 4.

### Utfordringer 2.13.21–2.13.25

**Oppgave 2.13.21**

Ett mulig svar:

\[
f(x)=2+\frac{1}{x-3}
\]

med et ekstra hull ved \(x=1\), for eksempel

\[
g(x)=\frac{(x-1)\left(2+\frac{1}{x-3}\right)}{x-1},
\qquad x\ne1,3.
\]

Hullet ligger ved \((1,\,\frac32)\), vertikal asymptote \(x=3\), horisontal asymptote \(y=2\).

**Oppgave 2.13.22**

Et eksempel er

\[
f(x)=2x-1+\frac{1}{x+2}.
\]

Vertikal asymptote \(x=-2\), skrå asymptote \(y=2x-1\). For å lage et hull kan man multiplisere teller og nevner med en felles faktor, for eksempel

\[
g(x)=\frac{(x-1)\left((2x-1)(x+2)+1\right)}{(x-1)(x+2)},
\]

med \(x\ne1,-2\). Dette gir et hull ved \(x=1\) uten å endre funksjonsverdiene ellers.

**Oppgave 2.13.23**

Ja. For eksempel \(f(x)=1/x\) er kontinuerlig i hvert punkt i definisjonsmengden \(\mathbb R\setminus\{0\}\), samtidig som \(x=0\) er en vertikal asymptote. Kontinuitet vurderes bare i punkter der funksjonen er definert.

**Oppgave 2.13.24**

a) \(f(x)=5\), med \(f(2)=5\).

b) \(g(x)=5\) for \(x\ne2\), ikke definert i \(x=2\).

c) \(h(x)=5\) for \(x\ne2\), og \(h(2)=0\).

**Oppgave 2.13.25**

Et eksempel er

\[
f(x)=2+\frac{\sin x}{x},\qquad x\ne0.
\]

Den horisontale asymptoten er \(y=2\), og grafen krysser linjen når \(\sin x=0\) for ikke-null \(x\), altså ved \(x=n\pi\), \(n\in\mathbb Z\setminus\{0\}\).

## 5. Observasjonsskjema

| Tid | Oppgave | Kode | Konkret observasjon | Hint / støtte | Neste steg |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

## 6. Oppsummering etter økten

**Dette mestret eleven selvstendig:**

____________________________________________________________________

**Dette krevde hint eller støtte:**

____________________________________________________________________

**Viktigste begrepsmessige hull:**

____________________________________________________________________

**Viktigste regne-/metodefeil:**

____________________________________________________________________

**Anbefalt hjemmelekse eller neste økt:**

____________________________________________________________________

**Lærernotat:** Ikke gi eleven en generell repetisjonsliste hvis observasjonene peker på ett eller to konkrete hull. Velg heller målrettede oppgaver som trener akkurat disse ferdighetene.
