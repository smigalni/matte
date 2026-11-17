<a id="delkapittel-2-2"></a>

## 2.2 Funksjoner med delte forskrifter

En funksjon med delt forskrift bruker ulike uttrykk på ulike deler av definisjonsmengden. Vi må derfor alltid undersøke hvilken forskrift som gjelder på hver side av grensepunktet.

!!! example "Eksempel 2.2.1 – lese en delt forskrift"
    Vi ser på funksjonen

    \[
    f(x)=
    \begin{cases}
    x+2, & x<1,\\
    x^2, & x\geq1.
    \end{cases}
    \]

    Når \(x<1\), bruker vi \(x+2\). Når \(x\geq1\), bruker vi \(x^2\). I punktet \(x=1\) gjelder den andre forskriften, og derfor er \(f(1)=1\).

    I grafen er punktet \((1,3)\) markert med en **åpen sirkel**. Det betyr at punktet ikke er med på grafen til den første delen, fordi \(x=1\) ikke oppfyller kravet \(x<1\). Punktet \((1,1)\) er markert med en **fylt sirkel**. Det er den faktiske funksjonsverdien, fordi \(x=1\) er med i den andre delen.

    <svg viewBox="0 0 260 160" width="100%" height="160" role="img" aria-label="Graf av en delt funksjon. Åpen sirkel ved punktet 1,3 og fylt sirkel ved punktet 1,1." xmlns="http://www.w3.org/2000/svg">
      <path d="M24 132 H245 M52 145 V12" fill="none" stroke="currentColor" stroke-width="1.3"/>
      <path d="M52 82 L145 25" fill="none" stroke="#2878b8" stroke-width="2.8"/>
      <path d="M145 82 Q178 75 218 30" fill="none" stroke="#2878b8" stroke-width="2.8"/>
      <path d="M145 12 V145" stroke="currentColor" stroke-dasharray="4 4" opacity=".4"/>
      <circle cx="145" cy="25" r="5.5" fill="white" stroke="#2878b8" stroke-width="2.5"/>
      <circle cx="145" cy="82" r="5.5" fill="#2878b8" stroke="#2878b8" stroke-width="2"/>
      <text x="151" y="20" font-size="10" fill="currentColor">(1, 3)</text>
      <text x="153" y="94" font-size="10" fill="currentColor">(1, 1)</text>
      <text x="235" y="146" font-size="10" fill="currentColor">x</text>
      <text x="40" y="14" font-size="10" fill="currentColor">y</text>
    </svg>

!!! rule "Åpen og fylt sirkel"
    - **Åpen sirkel:** Punktet er ikke med i grafen til den aktuelle forskriften.
    - **Fylt sirkel:** Punktet er med i grafen og viser funksjonsverdien.
    - Les alltid ulikhetstegnet. \(x<a\) gir ikke funksjonsverdi i \(a\), mens \(x\leq a\) gjør det.

!!! example "Eksempel 2.2.2 – finn funksjonsverdien"
    La

    \[
    g(x)=
    \begin{cases}
    3-x, & x<2,\\
    x^2-1, & x\geq2.
    \end{cases}
    \]

    Finn \(g(1)\), \(g(2)\) og \(g(3)\).

    - \(g(1)=3-1=2\), fordi \(1<2\).
    - \(g(2)=2^2-1=3\), fordi grensepunktet er med i den andre forskriften.
    - \(g(3)=3^2-1=8\).

    **Svar:** \(g(1)=2\), \(g(2)=3\) og \(g(3)=8\).

    \(\underline{\underline{g(1)=2,\;g(2)=3,\;g(3)=8}}\)

### Oppgaver 2.2

!!! question "Oppgave 2.2.3"

    La funksjonen være

    \[
    f(x)=
    \begin{cases}
    2x+1, & x<3,\\
    x^2-2, & x\geq3.
    \end{cases}
    \]

    Finn \(f(0)\), \(f(3)\) og \(f(4)\).

??? note "Fasit – 2.2.3"

    \(f(0)=1\), \(f(3)=7\) og \(f(4)=14\).

    **Resultat:** \(\underline{\underline{f(0)=1,\;f(3)=7,\;f(4)=14}}\)

!!! question "Oppgave 2.2.4"

    En funksjon er gitt ved

    \[
    g(x)=
    \begin{cases}
    ax+1, & x<2,\\
    x^2-1, & x\geq2.
    \end{cases}
    \]

    Bestem \(a\) slik at de to uttrykkene gir samme grenseverdi ved \(x=2\). Er funksjonen da nødvendigvis kontinuerlig? Begrunn.

??? note "Fasit – 2.2.4"

    Venstre grenseverdi er \(2a+1\), mens funksjonsverdien fra den andre forskriften er \(g(2)=3\). Vi må derfor ha \(2a+1=3\), så \(a=1\). Da er funksjonen kontinuerlig i \(x=2\).

    **Resultat:** \(\underline{\underline{a=1}}\)

!!! question "Oppgave 2.2.5"

    Lag en delt forskrift som har \(f(0)=4\), men der venstre grenseverdi når \(x\to0\) er 2 og høyre grenseverdi er 5. Forklar hvordan forskriften din viser dette.

??? note "Fasit – 2.2.5"

    Ett eksempel er \(f(x)=2\) når \(x<0\), \(f(0)=4\) og \(f(x)=5\) når \(x>0\).

    **Resultat:** \(\underline{\underline{f(0)=4,\;\lim\limits_{x\to0^-}f(x)=2,\;\lim\limits_{x\to0^+}f(x)=5}}\`
