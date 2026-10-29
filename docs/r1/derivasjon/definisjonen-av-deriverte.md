# 3.6 Den deriverte definert ved grenseverdi

Definisjonen av den deriverte forteller hva derivasjon betyr, ikke bare hvordan vi regner med reglene. Brøken

\[
\frac{f(a+h)-f(a)}h
\]

er stigningstallet til en sekant. Når \(h\) nærmer seg null, nærmer sekanten seg tangenten, dersom grenseverdien finnes.

!!! example "Eksempel – Finn den deriverte til \(f(x)=x^2\)"

    \[
    \begin{aligned}
    f'(x)&=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}\\
    &=\lim_{h\to0}\frac{x^2+2xh+h^2-x^2}{h}\\
    &=\lim_{h\to0}\frac{2xh+h^2}{h}\\
    &=\lim_{h\to0}(2x+h)=2x.
    \end{aligned}
    \]

    Nøkkelsteget er å faktorisere eller forkorte \(h\) etter at telleren er forenklet. Vi setter ikke \(h=0\) før forkortingen.

## Oppgaver

!!! question "Oppgave 3.6.1 – Lineær funksjon"

    Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=3x+2\).

!!! question "Oppgave 3.6.2 – Andregradsfunksjon"

    Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=x^2+2x\).

!!! question "Oppgave 3.6.3 – Forklar en vanlig feil"

    En elev setter \(h=0\) i differansekvotienten før forenkling.

    Forklar hvorfor dette gir et problem, og vis riktig framgangsmåte for \(f(x)=x^2\).

## Fasit

??? note "Fasit – oppgave 3.6.1"

    \[
    f'(x)=\lim_{h\to0}\frac{3(x+h)+2-(3x+2)}h
    =\lim_{h\to0}\frac{3h}{h}=3.
    \]

??? note "Fasit – oppgave 3.6.2"

    \[
    \begin{aligned}
    f'(x)&=\lim_{h\to0}\frac{(x+h)^2+2(x+h)-(x^2+2x)}h\\
    &=\lim_{h\to0}\frac{2xh+h^2+2h}{h}\\
    &=\lim_{h\to0}(2x+h+2)=2x+2.
    \end{aligned}
    \]

??? note "Fasit – oppgave 3.6.3"

    Når \(h=0\), blir nevneren i differansekvotienten \(0\), og uttrykket er ikke definert. For \(f(x)=x^2\) må telleren først forenkles til \(2xh+h^2\). Deretter forkortes \(h\), og først da lar vi \(h\to0\). Resultatet er \(f'(x)=2x\).
