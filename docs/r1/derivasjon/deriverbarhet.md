# 3.5 Deriverbarhet

## Hva betyr det at en funksjon er deriverbar?

I forrige del lærte vi at den deriverte forteller oss stigningstallet til tangenten til en graf. Men er det alltid mulig å trekke en tangent til grafen med et veldefinert stigningstall?

En funksjon er **deriverbar i et punkt** dersom den deriverte eksisterer som et endelig tall i dette punktet.

De fleste vanlige, glatte grafer er deriverbare. Men det finnes også punkter der den deriverte ikke eksisterer.

!!! example "Eksempel 1 – En funksjon som ikke er deriverbar"

    Vi ser på funksjonen

    \[
    f(x)=|x|
    \]

    Grafen består av to rette linjer som møtes i origo.

    <figure markdown>
    <svg viewBox="0 0 360 230" role="img" aria-label="Grafen til f av x er absoluttverdien av x, en V-formet graf med knekkpunkt i origo" xmlns="http://www.w3.org/2000/svg">
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
        <text x="238" y="42">f(x) = |x|</text>
      </g>
      <path d="M70 65 L160 155 L250 65" fill="none" stroke="#1671c5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="160" cy="155" r="4.5" fill="#1671c5"/>
      <text x="172" y="190" fill="currentColor" font-size="12">Knekkpunkt (0, 0)</text>
    </svg>
    <figcaption>Grafen til \(f(x)=|x|\). De to rette linjene møtes i et knekkpunkt ved \(x=0\).</figcaption>
    </figure>

    - Til venstre for \(x=0\) er stigningstallet \(-1\).
    - Til høyre for \(x=0\) er stigningstallet \(1\).

    I punktet \(x=0\) har grafen et **knekkpunkt**. Stigningstallet fra venstre og høyre er forskjellig, og derfor er funksjonen ikke deriverbar i dette punktet.

    Funksjonen er likevel kontinuerlig i \(x=0\). Dette viser at en funksjon kan være kontinuerlig uten å være deriverbar.

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

- **Knekkpunkter:** Grafen skifter retning brått, slik som grafen til \(f(x)=|x|\) i \(x=0\).
- **Bruddpunkter:** Grafen er ikke kontinuerlig.

En graf kan altså være kontinuerlig og likevel ha punkter der den ikke er deriverbar.

### Algebraisk metode – ensidige grenseverdier

#### Hvor kommer formelen fra?

Vi starter med det vi allerede kjenner fra 3.1: Stigningstallet til en sekant gjennom punktene \( (a,f(a)) \) og \( (x,f(x)) \) er

\[
a_{\text{sekant}}=\frac{f(x)-f(a)}{x-a}.
\]

Når \(x\) nærmer seg \(a\), kommer punktet \( (x,f(x)) \) nærmere \( (a,f(a)) \). Sekanten nærmer seg da tangenten i \( (a,f(a)) \).

Hvis grenseverdien finnes som et endelig tall, får vi tangentens stigningstall ved å ta grensen:

!!! important "Definisjonen av den deriverte"
    \[
    f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}
    \]

Dette er altså ikke en ny formel vi bare må huske: Vi får den ved å la sekantens andre punkt nærme seg punktet der vi vil finne tangentens stigningstall.

Vi undersøker hva som skjer når \(x\) nærmer seg \(a\) fra venstre og fra høyre.

Fra venstre får vi

\[
f'_-(a) =\lim_{x\to a^-}\frac{f(x)-f(a)}{x-a}
\]

og fra høyre får vi

\[
f'_+(a) =\lim_{x\to a^+}\frac{f(x)-f(a)}{x-a}
\]

Funksjonen er deriverbar i \(x=a\) dersom begge grensene eksisterer som endelige tall og er like:

!!! important "Kriterium for deriverbarhet"
    \[
    f'_-(a)=f'_+(a)
    \]

Hvis grenseverdiene er forskjellige, er funksjonen ikke deriverbar i punktet.

!!! example "Eksempel 2 – Undersøk deriverbarheten"

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
    &=\lim_{x\to1^-}\frac{f(x)-f(1)}{x-1}\\
    &=\lim_{x\to1^-}\frac{x+1-2}{x-1}\\
    &=\lim_{x\to1^-}\frac{x-1}{x-1}\\
    &=1
    \end{aligned}
    \]

    **Trinn 3: Undersøk stigningstallet fra høyre.**

    Vi bruker uttrykket for \(x\geq1\):

    \[
    \begin{aligned}
    f'_+(1)
    &=\lim_{x\to1^+}\frac{f(x)-f(1)}{x-1}\\
    &=\lim_{x\to1^+}\frac{2x-2}{x-1}\\
    &=\lim_{x\to1^+}\frac{2(x-1)}{x-1}\\
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

!!! question "Oppgave 3.5.2 – Undersøk et knekkpunkt"

    Vi har funksjonen \(f(x)=|x|\).

    a) Er funksjonen kontinuerlig i \(x=0\)?
    b) Hva er stigningstallet til venstre for null?
    c) Hva er stigningstallet til høyre for null?
    d) Er funksjonen deriverbar i \(x=0\)?

!!! question "Oppgave 3.5.3 – Sammenlign ensidige stigningstall"

    Vi har funksjonen

    \[
    f(x)=
    \begin{cases}
    2x+1, & x<1,\\
    x^2+2, & x\geq1.
    \end{cases}
    \]

    a) Undersøk om funksjonen er kontinuerlig i \(x=1\).
    b) Finn stigningstallet fra venstre og fra høyre.
    c) Er funksjonen deriverbar i \(x=1\)?

## Fasit

??? note "Fasit – oppgave 3.5.1"

    a) Den deriverte finnes som et endelig tall i punktet.

    b) Ja. Deriverbarhet innebærer kontinuitet.

??? note "Fasit – oppgave 3.5.2"

    a) Ja, \(f(x)=|x|\) er kontinuerlig i null.
    b) Stigningstallet fra venstre er \(-1\).
    c) Stigningstallet fra høyre er \(1\).
    d) Nei, fordi de ensidige stigningstallene er ulike.

??? note "Fasit – oppgave 3.5.3"

    a) Fra venstre er grenseverdien \(3\), og funksjonsverdien fra høyre er \(3\). Funksjonen er kontinuerlig.
    b) Fra venstre er stigningstallet \(2\). Fra høyre er den deriverte \(2x\), som gir \(2\) ved \(x=1\).
    c) Ja, funksjonen er deriverbar i \(x=1\) fordi de ensidige stigningstallene er like.
