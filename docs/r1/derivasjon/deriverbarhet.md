# 3.5 Deriverbarhet

## Hva betyr det at en funksjon er deriverbar?

I forrige del lærte vi at den deriverte forteller oss stigningstallet til tangenten til en graf. Men er det alltid mulig å trekke en tangent til grafen med et veldefinert stigningstall?

En funksjon er **deriverbar i et punkt** dersom den deriverte eksisterer som et endelig tall i dette punktet.

De fleste vanlige, glatte grafer er deriverbare. Men det finnes også punkter der den deriverte ikke eksisterer.

!!! example "Eksempel 3.5.1 – En funksjon som ikke er deriverbar"

    Vi ser på funksjonen

    \[
    f(x)=|x-1|
    \]

    Grafen består av to rette linjer som møtes i punktet (1, 0).

    <figure markdown>
    <svg viewBox="0 0 360 230" role="img" aria-label="Grafen til f av x er absoluttverdien av x minus 1, med knekkpunkt ved x lik 1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" stroke-opacity="0.12" stroke-width="1">
        <path d="M40 35H330 M40 75H330 M40 115H330 M40 155H330 M40 195H330"/>
        <path d="M80 20V205 M120 20V205 M160 20V205 M200 20V205 M240 20V205 M280 20V205"/>
      </g>
      <g stroke="currentColor" stroke-width="1.4" fill="none">
        <path d="M30 155H338"/><path d="M160 210V14"/>
      </g>
      <g fill="currentColor" font-size="12">
        <text x="340" y="151">x</text><text x="168" y="17">y</text>
        <text x="145" y="172">0</text><text x="112" y="172">−1</text><text x="202" y="172">1</text>
        <text x="171" y="118">1</text><text x="171" y="78">2</text>
        <text x="238" y="42">f(x) = |x-1|</text>
      </g>
      <path d="M110 65 L200 155 L290 65" fill="none" stroke="#1671c5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="200" cy="155" r="4.5" fill="#1671c5"/>
      <text x="212" y="190" fill="currentColor" font-size="12">Knekkpunkt (1, 0)</text>
    </svg>
    <figcaption>Grafen til \(f(x)=|x-1|\). De to rette linjene møtes i et knekkpunkt ved \(x=1\).</figcaption>
    </figure>

    - Til venstre for \(x=1\) er stigningstallet \(-1\).
    - Til høyre for \(x=1\) er stigningstallet \(1\).

    I punktet \(x=1\) har grafen et **knekkpunkt**. Stigningstallet fra venstre og høyre er forskjellig, og derfor er funksjonen ikke deriverbar i dette punktet.

    Funksjonen er likevel kontinuerlig i \(x=1\). Dette viser at en funksjon kan være kontinuerlig uten å være deriverbar.

## Sammenhengen mellom kontinuitet og deriverbarhet

Hvis en funksjon er deriverbar i et punkt, må den også være kontinuerlig i dette punktet.

Det motsatte gjelder ikke alltid.

Vi kan oppsummere sammenhengen slik:

- En funksjon som ikke er kontinuerlig i et punkt, er heller ikke deriverbar der.
- En funksjon som er kontinuerlig i et punkt, trenger ikke å være deriverbar der.

Et knekkpunkt er et typisk eksempel på et punkt der funksjonen er kontinuerlig, men ikke deriverbar.

## Hvordan undersøker vi om en funksjon er deriverbar?

Vi kan undersøke deriverbarhet grafisk eller algebraisk.

### Grafisk metode

Når vi undersøker en graf, ser vi etter punkter der tangentstigningstallet ikke er veldefinert.

Dette kan for eksempel være:

- **Knekkpunkter:** Grafen skifter retning brått, slik som grafen til \(f(x)=|x-1|\) i \(x=1\).
- **Bruddpunkter:** Grafen er ikke kontinuerlig.

En graf kan altså være kontinuerlig og likevel ha punkter der den ikke er deriverbar.

### Algebraisk metode – ensidige grenseverdier

#### Hvor kommer formelen fra?

Vi starter med det vi allerede kjenner fra 3.1: Stigningstallet til en sekant gjennom punktene \( (a,f(a)) \) og \( (x,f(x)) \) er

\[
a_{\text{sekant}}=\dfrac{f(x)-f(a)}{x-a}.
\]

Når \(x\) nærmer seg \(a\), kommer punktet \( (x,f(x)) \) nærmere \( (a,f(a)) \). Sekanten nærmer seg da tangenten i \( (a,f(a)) \).

Hvis grenseverdien finnes som et endelig tall, får vi tangentens stigningstall ved å ta grensen:

!!! important "Definisjonen av den deriverte"

    \[
    f'(a)=\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}
    \]

Dette er altså ikke en ny formel vi bare må huske: Vi får den ved å la sekantens andre punkt nærme seg punktet der vi vil finne tangentens stigningstall.

Vi undersøker hva som skjer når \(x\) nærmer seg \(a\) fra venstre og fra høyre.

Fra venstre får vi

\[
f'_-(a) =\lim_{x\to a^-}\dfrac{f(x)-f(a)}{x-a}
\]

og fra høyre får vi

\[
f'_+(a) =\lim_{x\to a^+}\dfrac{f(x)-f(a)}{x-a}
\]

Funksjonen er deriverbar i \(x=a\) dersom begge grensene eksisterer som endelige tall og er like:

!!! important "Kriterium for deriverbarhet"

    \[
    f'_-(a)=f'_+(a)
    \]

Hvis grenseverdiene er forskjellige, er funksjonen ikke deriverbar i punktet.

!!! example "Eksempel 3.5.2 – Undersøk deriverbarheten"

    Vi har funksjonen

    \[
    f(x)=
    \begin{cases}
    x+1, & x<1,\\
    2x, & x\geq 1.
    \end{cases}
    \]

    Undersøk om funksjonen er deriverbar i \(x=1\).

    **Trinn 1: Undersøk kontinuiteten.**

    Fra venstre får vi

    \[
    \lim_{x\to1^-}f(x)=1+1=2
    \]

    Fra høyre får vi

    \[
    \lim_{x\to1^+}f(x)=2\cdot1=2
    \]

    Dessuten er \(f(1)=2\). Funksjonen er derfor kontinuerlig i \(x=1\).

    **Trinn 2: Undersøk stigningstallet fra venstre.**

    Vi bruker uttrykket for \(x<1\):

    \[
    \begin{aligned}
    f'_-(1)
    &=\lim_{x\to1^-}\dfrac{f(x)-f(1)}{x-1}\\
    &=\lim_{x\to1^-}\dfrac{x+1-2}{x-1}\\
    &=\lim_{x\to1^-}\dfrac{x-1}{x-1}\\
    &=1
    \end{aligned}
    \]

    **Trinn 3: Undersøk stigningstallet fra høyre.**

    Vi bruker uttrykket for \(x\geq1\):

    \[
    \begin{aligned}
    f'_+(1)
    &=\lim_{x\to1^+}\dfrac{f(x)-f(1)}{x-1}\\
    &=\lim_{x\to1^+}\dfrac{2x-2}{x-1}\\
    &=\lim_{x\to1^+}\dfrac{2(x-1)}{x-1}\\
    &=2
    \end{aligned}
    \]

    **Konklusjon:**

    Vi har fått

    \[
    f'_-(1)=1\neq2=f'_+(1)
    \]

    De ensidige grenseverdiene er forskjellige. Derfor er funksjonen ikke deriverbar i \(x=1\), selv om den er kontinuerlig der.

    **Svar:**

    \[\underline{\underline{\text{Ikke deriverbar i }x=1}}\]

## Oppgaver

Oppgavene trener på kontinuitet, knekkpunkt og sammenligning av ensidige stigningstall.

!!! question "Oppgave 3.5.1 – Deriverbarhet og kontinuitet"

    a) Hva betyr det at en funksjon er deriverbar i et punkt?

    b) Må en funksjon være kontinuerlig for å være deriverbar? Forklar.

??? note "Fasit – oppgave 3.5.1"

    a) Den deriverte finnes som et endelig tall i punktet.

    b) Ja. Deriverbarhet innebærer kontinuitet.

!!! question "Oppgave 3.5.2 – Undersøk et knekkpunkt"

    Vi har funksjonen \(f(x)=|x-1|\).

    a) Er funksjonen kontinuerlig i \(x=1\)?

    b) Hva er stigningstallet til venstre for \(x=1\)?

    c) Hva er stigningstallet til høyre for \(x=1\)?

    d) Er funksjonen deriverbar i \(x=1\)?

??? note "Fasit – oppgave 3.5.2"

    a) Ja, funksjonen er kontinuerlig i \(x=1\), siden \(f(1)=0\) og grafen ikke har noe brudd.

    b) Til venstre for 1 er funksjonen \(f(x)=1-x\), så stigningstallet er \(-1\).

    c) Til høyre for 1 er funksjonen \(f(x)=x-1\), så stigningstallet er \(1\).

    d) Nei. De ensidige stigningstallene er ulike.

    \[\underline{\underline{\text{Ikke deriverbar i }x=1}}\]

!!! question "Oppgave 3.5.3 – Stigningstall for en andregradsfunksjon"

    Vi ser på andregradsfunksjonen

    \[
    g(x)=x^2+2.
    \]

    a) Finn den deriverte \(g'(x)\).

    b) Bestem stigningstallet til tangenten når \(x=1\).

    c) Forklar hvorfor en andregradsfunksjon ikke har ett fast stigningstall.

    d) Finn likningen til tangenten når \(x=1\).

??? note "Fasit – oppgave 3.5.3"

    a) Deriverer vi funksjonen, får vi

    \[
    g'(x)=2x.
    \]

    b) Tangentens stigningstall ved \(x=1\) er

    \[
    g'(1)=2.
    \]

    c) Den deriverte avhenger av \(x\). Stigningstallet varierer derfor langs grafen. Det er tangentens stigningstall i et bestemt punkt vi finner ved å sette punktets \(x\)-verdi inn i den deriverte.

    d) Vi har \(g(1)=3\) og \(g'(1)=2\). Tangentlikningen blir

    \[
    y-3=2(x-1)
    \quad\Rightarrow\quad
    \underline{\underline{y=2x+1}}.
    \]
