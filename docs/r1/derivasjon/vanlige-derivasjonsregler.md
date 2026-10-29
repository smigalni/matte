# 3.2 Vanlige derivasjonsregler

Derivasjonsreglene gjør det mulig å finne den deriverte uten å bruke definisjonen hver gang.

## Regler du må kunne

\[
(c)'=0,\qquad (x^n)'=nx^{n-1}
\]

\[
(cf(x))'=cf'(x),\qquad (f(x)+g(x))'=f'(x)+g'(x)
\]

I tillegg gjelder

\[
(e^x)'=e^x,\qquad (\ln x)'=\frac1x\quad(x>0).
\]

!!! example "Eksempel 1 – Deriver ledd for ledd"

    La \(f(x)=3x^4-2x^2+5x-7\).

    \[
    f'(x)=12x^3-4x+5.
    \]

    Konstantleddet \(-7\) blir \(0\). Hvert potensledd deriveres for seg.

!!! example "Eksempel 2 – Eksponential- og logaritmefunksjon"

    Hvis \(g(x)=4e^x+3\ln x\), er

    \[
    g'(x)=4e^x+\frac3x,\qquad x>0.
    \]

    Husk at logaritmeleddet begrenser definisjonsmengden.

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
    f'(x)=20x^3-9x^2+2.
    \]

??? note "Fasit – oppgave 3.2.2"

    \[
    g'(x)=2e^x-\frac5x.
    \]

    Både \(g(x)\) og \(g'(x)\) er definert for \(x>0\).

??? note "Fasit – oppgave 3.2.3"

    Konstantleddet \(4\) blir \(0\), og \((7x^3)'=21x^2\). Riktig svar er \(h'(x)=21x^2\).

??? note "Fasit – oppgave 3.2.4"

    Av \(f'(x)=3ax^2+2bx+c=6x^2-4x+3\) får vi \(a=2\), \(b=-2\) og \(c=3\). Siden \(f(0)=d=5\), er også \(d=5\) bestemt. Dermed \(f(x)=2x^3-2x^2+3x+5\).
