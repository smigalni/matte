<a id="delkapittel-2-2"></a>

## 2.2 Funksjoner med delte forskrifter

En funksjon med delt forskrift bruker ulike uttrykk på ulike deler av definisjonsmengden. Vi må derfor alltid undersøke hvilken forskrift som gjelder på hver side av grensepunktet.

!!! example "Eksempel 2.2.1 – lese en delt forskrift"
    Vi ser på funksjonen

    \[
    f(x)=\begin{cases}
    x+2, & x<1,\\
    x^2, & x\geq 1.
    \end{cases}
    \]

    Når \(x<1\), bruker vi \(x+2\). Når \(x\geq 1\), bruker vi \(x^2\). I punktet \(x=1\) er funksjonsverdien derfor \(f(1)=1\).

**Slik leser du grafen:** En åpen sirkel viser ofte at endepunktet ikke er med i den aktuelle delen. En fylt sirkel viser at punktet er med. Kontroller alltid selve ulikheten i forskriften.

!!! example "Eksempel 2.2.2 – finn funksjonsverdien"
    La

    \[
    g(x)=\begin{cases}
    3-x, & x<2,\\
    x^2-1, & x\geq 2.
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

    La \(f(x)=\begin{cases}2x+1,&x<3,\\x^2-2,&x\geq3.\end{cases}\) Finn \(f(0)\), \(f(3)\) og \(f(4)\).

??? note "Fasit – 2.2.3"

    \(f(0)=1\), \(f(3)=7\) og \(f(4)=14\).

    **Resultat:** \(\underline{\underline{f(0)=1,\;f(3)=7,\;f(4)=14}}\)

!!! question "Oppgave 2.2.4"

    En funksjon er gitt ved \(g(x)=\begin{cases}ax+1,&x<2,\\x^2-1,&x\geq2.\end{cases}\). Bestem \(a\) slik at de to uttrykkene gir samme grenseverdi ved \(x=2\). Er funksjonen da nødvendigvis kontinuerlig? Begrunn.

??? note "Fasit – 2.2.4"

    Vi må ha \(2a+1=3\), så \(a=1\). Da er også \(g(2)=3\), og funksjonen er kontinuerlig i \(x=2\).

    **Resultat:** \(\underline{\underline{a=1}}\)

!!! question "Oppgave 2.2.5"

    Lag en delt forskrift som har \(f(0)=4\), men der venstre grenseverdi når \(x\to0\) er 2 og høyre grenseverdi er 5. Forklar hvordan forskriften din viser dette.

??? note "Fasit – 2.2.5"

    Ett eksempel er \(f(x)=2\) når \(x<0\), \(f(0)=4\) og \(f(x)=5\) når \(x>0\).

    **Resultat:** \(\underline{\underline{f(0)=4,\;\lim_{x\to0^-}f(x)=2,\;\lim_{x\to0^+}f(x)=5}}\)
