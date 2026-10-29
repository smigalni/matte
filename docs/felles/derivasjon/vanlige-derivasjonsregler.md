# 3.2 Vanlige derivasjonsregler

Derivasjonsreglene gjør det mulig å finne den deriverte uten å bruke definisjonen hver gang. Lær reglene i små grupper, og øv på å kjenne igjen hvilken regel du skal bruke.

## Gjennomgang av hver regel

## Konstantregelen

En konstant funksjon har samme verdi uansett hvilken \(x\)-verdi vi velger. Grafen er en vannrett linje, og stigningstallet er derfor null.

!!! important "Konstantregelen"
    Hvis \(k\) er en konstant, gjelder

    \[
    (k)'=0
    \]

!!! example "Eksempel 1 – Deriver en konstant"

    Vi har funksjonen

    \[
    f(x)=7
    \]

    Siden funksjonen er konstant, er den deriverte null:

    \[
    f'(x)=0
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=0}}
    \]

## Potensregelen

Potensregelen bruker vi når \(x\) er opphøyd i en konstant eksponent. Vi ganger med eksponenten og trekker deretter 1 fra eksponenten.

!!! important "Potensregelen"
    \[
    (x^n)'=n\cdot x^{n-1}
    \]

!!! example "Eksempel 2 – Deriver en potens"

    Vi har funksjonen

    \[
    f(x)=x^5
    \]

    **Trinn 1:** Gange med eksponenten 5.

    **Trinn 2:** Trekke 1 fra eksponenten.

    \[
    f'(x)=5x^{5-1}=5x^4
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=5x^4}}
    \]

!!! example "Eksempel 3 – Potenser med koeffisient"

    Vi har funksjonen

    \[
    g(x)=3x^4
    \]

    Vi bruker potensregelen på \(x^4\) og beholder faktoren 3:

    \[
    g'(x)=3\cdot4x^{3}=12x^3
    \]

    **Svar:**

    \[
    \underline{\underline{g'(x)=12x^3}}
    \]

## Konstant faktor-regelen

Når en funksjon er multiplisert med en konstant, kan vi beholde konstanten og derivere funksjonen som står ved siden av.

!!! important "Konstant faktor-regelen"
    \[
    (k\cdot u(x))'=k\cdot u'(x)
    \]

!!! example "Eksempel 4 – Konstant faktor"

    Vi har funksjonen

    \[
    f(x)=5x^3
    \]

    Konstanten 5 blir stående. Vi deriverer \(x^3\):

    \[
    f'(x)=5\cdot3x^2=15x^2
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=15x^2}}
    \]

!!! example "Eksempel 5 – Konstant ganger en funksjon"

    Vi har

    \[
    g(x)=2(x^2+3x)
    \]

    Vi beholder konstanten 2 og deriverer uttrykket i parentesen:

    \[
    \begin{aligned}
    g'(x)&=2(2x+3)\\
    &=4x+6
    \end{aligned}
    \]

    **Svar:**

    \[
    \underline{\underline{g'(x)=4x+6}}
    \]

## Sumregelen

Hvis en funksjon består av flere ledd som legges sammen eller trekkes fra hverandre, kan vi derivere hvert ledd for seg. Ved subtraksjon beholder vi minustegnet.

!!! important "Sumregelen"
    \[
    (u(x)+v(x))'=u'(x)+v'(x)
    \]

    Tilsvarende gjelder

    \[
    (u(x)-v(x))'=u'(x)-v'(x)
    \]

!!! example "Eksempel 6 – Deriver et polynom"

    Vi har funksjonen

    \[
    f(x)=x^3+4x^2-5x+8
    \]

    Vi deriverer ett ledd om gangen:

    - \((x^3)'=3x^2\)
    - \((4x^2)'=8x\)
    - \((-5x)'=-5\)
    - \((8)'=0\)

    Dermed får vi

    \[
    f'(x)=3x^2+8x-5
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=3x^2+8x-5}}
    \]

## Derivasjon av eksponentialfunksjonen \(e^x\)

Tallet \(e\) er en matematisk konstant som er omtrent \(2{,}718\). Eksponentialfunksjonen \(e^x\) er spesiell fordi den deriverte er lik funksjonen selv.

!!! important "Derivasjon av \(e^x\)"
    \[
    (e^x)'=e^x
    \]

!!! example "Eksempel 7 – Deriver \(e^x\)"

    Hvis

    \[
    f(x)=e^x
    \]

    får vi direkte

    \[
    f'(x)=e^x
    \]

    Hvis funksjonen har en konstant faktor, bruker vi også konstant faktor-regelen:

    \[
    g(x)=4e^x \quad\Rightarrow\quad g'(x)=4e^x
    \]

## Derivasjon av den naturlige logaritmen \(\ln x\)

Den naturlige logaritmen \(\ln x\) er logaritmen med grunntall \(e\). Den deriverte av \(\ln x\) er \(1/x\), for \(x>0\).

!!! important "Derivasjon av \(\ln x\)"
    \[
    (\ln x)'=\frac{1}{x},\qquad x>0
    \]

!!! example "Eksempel 8 – Deriver \(\ln x\)"

    Vi har

    \[
    f(x)=\ln x
    \]

    Da er

    \[
    f'(x)=\frac{1}{x}
    \]

    Med en konstant faktor får vi for eksempel

    \[
    g(x)=5\ln x \quad\Rightarrow\quad g'(x)=\frac{5}{x}
    \]

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
