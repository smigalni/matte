# 3.2 Vanlige derivasjonsregler

Derivasjonsreglene gjør det mulig å finne den deriverte uten å bruke definisjonen hver gang. Lær reglene i små grupper, og øv på å kjenne igjen hvilken regel du skal bruke.

## Regler du må kunne

!!! info "1. Konstantregelen"

    \[
    (c)'=0
    \]

    Et konstant tall blir \(0\) når vi deriverer.

!!! info "2. Potensregelen"

    \[
    (x^n)'=nx^{n-1}
    \]

    Flytt eksponenten foran \(x\), og trekk \(1\) fra eksponenten.

!!! info "3. Konstant faktor"

    \[
    (cf(x))'=cf'(x)
    \]

    Konstanten foran funksjonen blir stående.

!!! info "4. Sum- og differanseregelen"

    \[
    (f(x)+g(x))'=f'(x)+g'(x)
    \]

    \[
    (f(x)-g(x))'=f'(x)-g'(x)
    \]

    Deriver hvert ledd for seg. Behold pluss- og minustegnene.

!!! info "5. Eksponential- og logaritmeregelen"

    \[
    (e^x)'=e^x,\qquad (\ln x)'=\frac{1}{x}\quad (x>0)
    \]

    \(e^x\) er sin egen deriverte. Logaritmen \(\ln x\) er bare definert for \(x>0\).

## Eksempler med mellomregning

!!! example "Eksempel 3.2.1 – Deriver et polynom"

    Vi skal derivere

    \[
    f(x)=3x^4-2x^2+5x-7.
    \]

    **Steg 1: Del opp uttrykket i ledd.**

    Vi bruker sum- og differanseregelen. Det betyr at vi kan derivere hvert ledd for seg.

    **Steg 2: Deriver hvert ledd, og vis hvilken regel vi bruker.**

    Konstant faktor og potensregel:

    \[
    \begin{aligned}
    (3x^4)'&=3\cdot(x^4)'\\
    &=3\cdot4x^{4-1}\\
    &=12x^3
    \end{aligned}
    \]

    Konstant faktor og potensregel:

    \[
    \begin{aligned}
    (-2x^2)'&=-2\cdot(x^2)'\\
    &=-2\cdot2x^{2-1}\\
    &=-4x
    \end{aligned}
    \]

    Potensregelen:

    \[
    \begin{aligned}
    (5x)'&=5\cdot(x)'\\
    &=5\cdot1x^{1-1}\\
    &=5
    \end{aligned}
    \]

    Konstantregelen:

    \[
    (-7)'=0
    \]

    **Steg 3: Sett sammen leddene.**

    \[
    \begin{aligned}
    f'(x)&=12x^3-4x+5+0\\
    &=\underline{\underline{12x^3-4x+5}}
    \end{aligned}
    \]

    **Husk:** Eksponenten reduseres med \(1\). Konstantleddet blir \(0\), og pluss- og minustegnene beholdes.

!!! example "Eksempel 3.2.2 – Eksponential- og logaritmeledd"

    Vi skal derivere

    \[
    g(x)=4e^x+3\ln x.
    \]

    **Steg 1: Identifiser reglene.**

    - Vi bruker sumregelen fordi leddene er addert.
    - Vi bruker regelen for konstant faktor fordi \(4\) og \(3\) står foran funksjonene.
    - Vi bruker \((e^x)'=e^x\) og \((\ln x)'=\frac{1}{x}\).

    **Steg 2: Deriver hvert ledd.**

    Første ledd:

    \[
    \begin{aligned}
    (4e^x)'&=4\cdot(e^x)'\\
    &=4e^x
    \end{aligned}
    \]

    Andre ledd:

    \[
    \begin{aligned}
    (3\ln x)'&=3\cdot(\ln x)'\\
    &=3\cdot\frac{1}{x}\\
    &=\frac{3}{x}
    \end{aligned}
    \]

    **Steg 3: Sett sammen leddene.**

    \[
    \begin{aligned}
    g'(x)&=4e^x+\frac{3}{x}\\
    &=\underline{\underline{4e^x+\frac{3}{x}}}
    \end{aligned}
    \]

    **Steg 4: Husk definisjonsmengden.**

    Siden \(\ln x\) bare er definert for \(x>0\), gjelder

    \[
    \boxed{x>0}.
    \]

    Både \(g(x)\) og \(g'(x)\) er definert for \(x>0\).

## Oppgaver

!!! question "Oppgave 3.2.1 – Deriver et polynom"

    Deriver \(f(x)=5x^4-3x^3+2x-8\).

!!! question "Oppgave 3.2.2 – Deriver eksponential- og logaritmeledd"

    Deriver \(g(x)=2e^x-5\ln x\), og oppgi hvor funksjonen og den deriverte er definert.

!!! question "Oppgave 3.2.3 – Finn feilen"

    En elev deriverer \(h(x)=7x^3+4\) til \(h'(x)=7x^2+4\).

    Finn feilen og forklar regelen som skal brukes.

!!! question "Oppgave 3.2.4 – Bestem en funksjon"

    Bestem \(a\), \(b\), \(c\) og \(d\) så langt det er mulig når

    \[
    f(x)=ax^3+bx^2+cx+d,\qquad f'(x)=6x^2-4x+3,\qquad f(0)=5.
    \]

    Forklar hvilke koeffisienter som kan bestemmes entydig.

## Fasit

??? note "Fasit – oppgave 3.2.1"

    \[
    \begin{aligned}
    f'(x)&=20x^3-9x^2+2\\
    &=\underline{\underline{20x^3-9x^2+2}}
    \end{aligned}
    \]

??? note "Fasit – oppgave 3.2.2"

    \[
    \begin{aligned}
    g'(x)&=2e^x-\frac{5}{x}\\
    &=\underline{\underline{2e^x-\frac{5}{x}}}
    \end{aligned}
    \]

    Både \(g(x)\) og \(g'(x)\) er definert for \(x>0\).

??? note "Fasit – oppgave 3.2.3"

    Konstantleddet \(4\) blir \(0\). Vi bruker konstant faktor og potensregelen:

    \[
    \begin{aligned}
    h'(x)&=(7x^3+4)'\\
    &=7\cdot(x^3)'+0\\
    &=7\cdot3x^2\\
    &=\underline{\underline{21x^2}}
    \end{aligned}
    \]

??? note "Fasit – oppgave 3.2.4"

    Vi deriverer ledd for ledd:

    \[
    f'(x)=3ax^2+2bx+c.
    \]

    Sammenligning med \(6x^2-4x+3\) gir \(a=2\), \(b=-2\) og \(c=3\). Fra \(f(0)=5\) får vi \(d=5\).

    \[
    f(x)=\underline{\underline{2x^3-2x^2+3x+5}}
    \]
