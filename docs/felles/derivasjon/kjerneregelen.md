# 3.3 Kjerneregelen

Kjerneregelen bruker vi når en funksjon er satt sammen av en ytre funksjon og en indre funksjon.

!!! important "Kjerneregelen"

    Hvis

    \[
    y=f(g(x)),
    \]

    så er

    \[
    y'=f'(g(x))\cdot g'(x)
    \]

    Deriver den ytre funksjonen, behold den indre funksjonen, og gang med den deriverte av den indre funksjonen.

## Se funksjonen som to lag

Vi ser på funksjonen

\[
y=(3x+2)^4.
\]

Uttrykket inni parentesen er den **indre funksjonen**. Deretter bruker vi dette uttrykket i den **ytre funksjonen**, som opphøyer det i fjerde.

!!! example "Eksempel 3.3.1 – Kjerneregelen med u-metoden"

    Vi skal derivere

    \[
    y=(3x+2)^4.
    \]

    **Trinn 1: Finn den indre funksjonen.**

    Sett

    \[
    u=3x+2.
    \]

    **Trinn 2: Skriv den ytre funksjonen ved hjelp av \(u\).**

    \[
    y=f(u)=u^4.
    \]

    **Trinn 3: Deriver hver funksjon for seg.**

    Den ytre funksjonen:

    \[
    f'(u)=4u^3.
    \]

    Den indre funksjonen:

    \[
    u'=3.
    \]

    **Trinn 4: Gang de deriverte sammen og sett inn \(u=3x+2\).**

    \[
    \begin{aligned}
    y'&=f'(u)\cdot u'\\
    &=4u^3\cdot3\\
    &=4(3x+2)^3\cdot3.
    \end{aligned}
    \]

    **Svar:**

    \[
    \underline{\underline{y'=12(3x+2)^3}}
    \]

### Huskeregel

**Kort oppskrift:**

1. Finn kjernen og kall den \(u\).
2. Skriv den ytre funksjonen som \(f(u)\).
3. Deriver den ytre og den indre funksjonen hver for seg.
4. Gang de deriverte sammen, og sett inn uttrykket for \(u\).

!!! example "Eksempel 3.3.2 – Bruk kjerneregelen"

    La \(f(x)=(3x^2+1)^4\).

    Den ytre funksjonen er «opphøyd i fjerde», og den indre er \(3x^2+1\).

    **Svar:**

    \[
    \begin{aligned}
    f'(x)&=4(3x^2+1)^3\cdot 6x\\
    &=\underline{\underline{24x(3x^2+1)^3}}.
    \end{aligned}
    \]

    En vanlig feil er å glemme faktoren \(6x\).

## Oppgaver

Deriver funksjonene ved hjelp av kjerneregelen. Finn den indre funksjonen, og husk å gange med den deriverte av den indre funksjonen.

!!! question "Oppgave 3.3.1 – Potens av en lineær funksjon"

    Deriver \(f(x)=(2x+3)^4\).

??? note "Fasit – oppgave 3.3.1"

    \[
    f'(x)=4(2x+3)^3\cdot2
    =\underline{\underline{8(2x+3)^3}}.
    \]

!!! question "Oppgave 3.3.2 – Potens av et polynom"

    Deriver \(g(x)=(x^2+1)^3\).

??? note "Fasit – oppgave 3.3.2"

    \[
    g'(x)=3(x^2+1)^2\cdot2x
    =\underline{\underline{6x(x^2+1)^2}}.
    \]

!!! question "Oppgave 3.3.3 – Eksponentialfunksjon"

    Deriver \(h(x)=e^{3x}\).

??? note "Fasit – oppgave 3.3.3"

    \[
    h'(x)=\underline{\underline{3e^{3x}}}.
    \]

!!! question "Oppgave 3.3.4 – Logaritmefunksjon"

    Deriver \(p(x)=\ln(3x)\). Vis hva som er den indre funksjonen.

??? note "Fasit – oppgave 3.3.4"

    Den indre funksjonen er \(u=3x\), og \(u'=3\).

    \[
    p'(x)=\dfrac{1}{3x}\cdot3
    =\underline{\underline{\frac1x}}.
    \]
