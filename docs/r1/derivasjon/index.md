# 3.1 Den deriverte i et punkt

## Læringsmål

Når du har arbeidet med dette delkapitlet, skal du kunne:

- forklare hva den deriverte i et punkt forteller
- tolke den deriverte som **momentan vekstfart**
- forklare at den deriverte er **stigningstallet til tangenten**
- finne likningen til en tangent ved hjelp av **et punkts formel**

I dette delkapitlet fokuserer vi på betydningen av den deriverte i et punkt. Vi venter med derivasjonsreglene til senere.

## Hvorfor bryr vi oss om den deriverte?

Den deriverte hjelper oss å beskrive **hvor raskt noe endrer seg akkurat nå**. Det er nyttig i mange situasjoner:

- **Fart:** Hvor fort kjører bilen akkurat i dette øyeblikket?
- **Aksjer og krypto:** Vi kan analysere hvordan en pris endrer seg, og bruke slike beregninger som én del av en algoritme eller en bot som handler automatisk. Den deriverte kan hjelpe oss å beskrive prisendringer, men kan ikke alene forutsi markedet eller garantere gevinst.
- **Grafer:** Hvor raskt øker eller minker en funksjon på et bestemt sted?

I alle disse eksemplene handler det om endring. Den deriverte gir oss et mål på hvor rask endringen er. I dette kapittelet skal vi se at den også kan forstås geometrisk: Den deriverte i et punkt er stigningstallet til tangenten til grafen i punktet.


## 1. Hva betyr den deriverte i et punkt?

Den deriverte til en funksjon \(f\) i punktet \(x=a\) skrives

\[
f'(a)
\]

Verdien \(f'(a)\) forteller hvor raskt funksjonen endrer seg akkurat når \(x=a\). Det er den **momentane vekstfarten**.

Geometrisk forteller den samme verdien oss **stigningstallet til tangenten** til grafen i punktet \((a,f(a))\).

### Figur 1 – Graf, punkt og tangent

Se på funksjonen \(f(x)=x^2\) og punktet \(P=(1,1)\).

<figure markdown>
<svg viewBox="0 0 360 270" role="img" aria-label="Grafen y lik x i andre og tangenten y lik 2x minus 1 i punktet 1,1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="plot1"><rect x="42" y="18" width="286" height="218"/></clipPath>
  </defs>
  <g stroke="currentColor" stroke-opacity="0.13" stroke-width="1">
    <path d="M60 20V236 M100 20V236 M140 20V236 M180 20V236 M220 20V236 M260 20V236 M300 20V236"/>
    <path d="M42 36H328 M42 76H328 M42 116H328 M42 156H328 M42 196H328 M42 236H328"/>
  </g>
  <g stroke="currentColor" stroke-width="1.4" fill="none">
    <path d="M42 196H333"/>
    <path d="M60 242V14"/>
  </g>
  <g fill="currentColor" font-size="10">
    <text x="334" y="191">x</text><text x="67" y="15">y</text>
    <text x="48" y="209">0</text><text x="96" y="209">1</text><text x="136" y="209">2</text><text x="176" y="209">3</text>
    <text x="44" y="160">1</text><text x="44" y="120">2</text><text x="44" y="80">3</text><text x="44" y="40">4</text>
  </g>
  <g clip-path="url(#plot1)">
    <path d="M60 196 C73.3 196 86.7 182.7 100 156 C113.3 129.3 126.7 89.3 140 36" fill="none" stroke="#16803d" stroke-width="3"/>
    <path d="M60 236 L140 76" fill="none" stroke="#d97706" stroke-width="2.5"/>
    <path d="M100 156 L140 156 L140 76" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 3"/>
  </g>
  <circle cx="100" cy="156" r="5" fill="#16803d" stroke="white" stroke-width="1.3"/>
  <g fill="currentColor" font-size="10">
    <text x="105" y="148">P = (1, 1)</text>
    <text x="104" y="171" fill="#d97706">1 rute bort</text>
    <text x="145" y="119" fill="#d97706">2 ruter opp</text>
    <text x="203" y="52" fill="#16803d">f(x) = x²</text>
  </g>
</svg>
<figcaption>Fra P går vi 1 rute mot høyre og 2 ruter opp langs tangenten. Stigningstallet er derfor 2/1 = 2. Tangenten berører grafen i P.</figcaption>
</figure>

For denne funksjonen er den deriverte i \(x=1\) lik \(f'(1)=2\). Det betyr at tangenten i punktet \((1,1)\) har stigningstall 2.

**Husk:** \(f'(1)\) er et tall – stigningstallet akkurat i punktet \(x=1\). \(f'(x)\) betegner derimot den deriverte som en funksjon av \(x\).

## 2. Momentan vekstfart

Tenk deg at \(s(t)\) beskriver hvor langt en syklist har beveget seg etter \(t\) sekunder.

- Gjennomsnittlig vekstfart beskriver endringen over et tidsintervall.
- Momentan vekstfart beskriver farten ved ett bestemt tidspunkt.
- Når grafen viser strekning som funksjon av tid, er den momentane vekstfarten stigningstallet til tangenten.

### Figur 2 – Strekning som funksjon av tid

<figure markdown>
<svg viewBox="0 0 360 255" role="img" aria-label="Strekning som funksjon av tid med tangent i et bestemt tidspunkt" xmlns="http://www.w3.org/2000/svg">
  <defs><clipPath id="plot2"><rect x="46" y="18" width="282" height="200"/></clipPath></defs>
  <g stroke="currentColor" stroke-opacity="0.13" stroke-width="1">
    <path d="M60 20V218 M110 20V218 M160 20V218 M210 20V218 M260 20V218 M310 20V218"/>
    <path d="M46 218H328 M46 178H328 M46 138H328 M46 98H328 M46 58H328 M46 18H328"/>
  </g>
  <g stroke="currentColor" stroke-width="1.4" fill="none">
    <path d="M46 218H334"/><path d="M60 228V12"/>
  </g>
  <g fill="currentColor" font-size="10">
    <text x="336" y="213">t (s)</text><text x="68" y="13">s(t) (m)</text>
    <text x="48" y="231">0</text><text x="106" y="231">1</text><text x="156" y="231">2</text><text x="206" y="231">3</text><text x="256" y="231">4</text>
  </g>
  <g clip-path="url(#plot2)">
    <path d="M60 218 Q160 218 260 18" fill="none" stroke="#16803d" stroke-width="3"/>
    <path d="M110 218 L260 68" fill="none" stroke="#d97706" stroke-width="2.5"/>
  </g>
  <circle cx="160" cy="168" r="5" fill="#16803d" stroke="white" stroke-width="1.3"/>
  <g fill="currentColor" font-size="11">
    <text x="169" y="159">Tidspunktet t = a</text>
    <text x="248" y="62" fill="#d97706">Tangent</text>
  </g>
</svg>
<figcaption>På en strekning–tid-graf er tangentens stigningstall den momentane farten på det aktuelle tidspunktet.</figcaption>
</figure>

- Hvis tangenten stiger mot høyre, er vekstfarten positiv.
- Hvis tangenten er vannrett, er vekstfarten null.
- Hvis tangenten synker mot høyre, er vekstfarten negativ.

I en strekning–tid-modell måles den momentane vekstfarten i for eksempel meter per sekund (m/s).

## 3. Tangentens likning – et punkts formel

En rett linje med stigningstall \(m\) som går gjennom punktet \((x_1,y_1)\), har likningen

\[
\boxed{y-y_1=m(x-x_1)}
\]

Dette kalles **et punkts formel**.

For tangenten til grafen til \(f\) i \(x=a\) kjenner vi både punktet og stigningstallet:

- Punktet er \((a,f(a))\).
- Stigningstallet er \(f'(a)\).

Dermed blir tangentens likning

\[
\boxed{y-f(a)=f'(a)(x-a)}
\]

### Eksempel – Finn tangentens likning

Vi bruker \(f(x)=x^2\) og finner tangenten i punktet der \(x=1\).

**Steg 1: Finn punktet på grafen.**

\[
f(1)=1^2=1
\]

Punktet er altså \(P=(1,1)\).

**Steg 2: Finn stigningstallet.**

Vi vet at den deriverte i dette punktet er \(f'(1)=2\).

**Steg 3: Bruk et punkts formel.**

Sett \(x_1=1\), \(y_1=1\) og \(m=2\):

\[
y-1=2(x-1)
\]

Gang ut parentesen og isoler \(y\):

\[
y-1=2x-2
\]

\[
\boxed{y=2x-1}
\]

Dette er tangentens likning.

## 4. Oppgaver

Prøv å løse oppgavene før du åpner fasiten. Vis mellomregning der du regner.

### Oppgave 1 – Forstå den deriverte

En funksjon har \(f'(2)=5\).

a) Hva er stigningstallet til tangenten når \(x=2\)?

b) Hva forteller tallet 5 om den momentane vekstfarten?

c) Hvis tangenten i et annet punkt har stigningstall 0, hva forteller det om den momentane vekstfarten der?

### Oppgave 2 – Fra stigningstall til tangent

En tangent går gjennom punktet \(P=(2,5)\) og har stigningstall \(m=3\).

a) Skriv opp et punkts formel.

b) Sett inn punktet og stigningstallet.

c) Finn likningen på formen \(y=ax+b\).

### Oppgave 3 – Tangent til en parabel

Grafen til \(f(x)=x^2\) har punktet \(P=(2,4)\). Den deriverte i dette punktet er \(f'(2)=4\).

a) Hva er tangentens stigningstall?

b) Bruk et punkts formel til å finne tangentens likning.

c) Skriv svaret på formen \(y=ax+b\).

### Oppgave 4 – Momentan fart

Posisjonen til en syklist beskrives av \(s(t)\), der \(t\) måles i sekunder og \(s(t)\) i meter. Ved \(t=3\) er \(s(3)=20\) og \(s'(3)=6\).

a) Hva er syklistens momentane vekstfart ved \(t=3\)?

b) Hva er stigningstallet til tangenten på strekning–tid-grafen ved \(t=3\)?

c) Finn tangentens likning. Bruk \(t\) på den vannrette aksen og \(s\) på den loddrette aksen.

### Oppgave 5 – Tegn og tolk

Tegn en skisse av en funksjonsgraf med et punkt \(P\) der tangenten har positivt stigningstall.

a) Tegn tangenten i punktet.

b) Forklar hva stigningstallet forteller om den momentane vekstfarten.

c) Lag en ny skisse der tangenten har negativt stigningstall. Hva er forskjellen?

### Oppgave 6 – Finn to ulike tangenter

En rett linje går gjennom punktet \(P=(3,4)\).

a) Finn likningen til linjen når stigningstallet er \(m=2\).

b) Finn likningen til en annen linje gjennom samme punkt når stigningstallet er \(m=-1\).

c) Tegn begge linjene i samme koordinatsystem. Hva er likt, og hva er forskjellig?

??? note "Fasit – åpne når du har prøvd selv"

    **Oppgave 1**

    a) Stigningstallet er 5.

    b) Funksjonen øker momentant med 5 enheter i \(y\) for hver enhet i \(x\), ved \(x=2\). I en fysisk modell avhenger enhetene av hva \(x\) og \(y\) beskriver.

    c) Den momentane vekstfarten er 0; tangenten er vannrett.

    **Oppgave 2**

    \[
    y-5=3(x-2)
    \]

    \[
    y-5=3x-6
    \]

    \[
    \boxed{y=3x-1}
    \]

    **Oppgave 3**

    a) Stigningstallet er \(f'(2)=4\).

    b)

    \[
    y-4=4(x-2)
    \]

    c)

    \[
    \boxed{y=4x-4}
    \]

    **Oppgave 4**

    a) Den momentane vekstfarten er \(6\text{ m/s}\).

    b) Tangentens stigningstall er 6.

    c)

    \[
    s-20=6(t-3)
    \]

    \[
    \boxed{s=6t+2}
    \]

    **Oppgave 5**

    a–c) Tegningene kan variere. Positivt stigningstall betyr at tangenten stiger mot høyre; negativt stigningstall betyr at den synker mot høyre.

    **Oppgave 6**

    a)

    \[
    y-4=2(x-3)\quad\Rightarrow\quad \boxed{y=2x-2}
    \]

    b)

    \[
    y-4=-(x-3)\quad\Rightarrow\quad \boxed{y=-x+7}
    \]

    c) Begge linjene går gjennom \((3,4)\), men de har ulike stigningstall.

## Oppsummering

- \(f'(a)\) er den momentane vekstfarten når \(x=a\).
- Geometrisk er \(f'(a)\) stigningstallet til tangenten i punktet \((a,f(a))\).
- Et punkts formel er \(y-y_1=m(x-x_1)\).
- Tangentens likning kan skrives \(y-f(a)=f'(a)(x-a)\).

Neste delkapittel kan bygge videre på dette. Foreløpig går vi ikke inn på produktregelen, brøkregelen eller andre derivasjonsregler.
