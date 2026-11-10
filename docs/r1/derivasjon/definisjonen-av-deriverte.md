# 3.6 Den deriverte definert ved grenseverdi

Definisjonen av den deriverte forteller hva derivasjon betyr, ikke bare hvordan vi regner med reglene. Brøken

\[
\dfrac{f(a+\Delta x)-f(a)}\Delta x
\]

er stigningstallet til en sekant. Når \(\Delta x\) nærmer seg null, nærmer sekanten seg tangenten, dersom grenseverdien finnes.

!!! example "Eksempel – Finn den deriverte til \(f(x)=x^2\)"

    \[
    \begin{aligned}
    f'(x)&=\lim_{\Delta x\to0}\dfrac{(x+\Delta x)^2-x^2}{\Delta x}\\
    &=\lim_{\Delta x\to0}\dfrac{x^2+2xh+\Delta x^2-x^2}{\Delta x}\\
    &=\lim_{\Delta x\to0}\dfrac{2xh+\Delta x^2}{\Delta x}\\
    &=\lim_{\Delta x\to0}(2x+\Delta x)=2x.
    \end{aligned}
    \]

    Nøkkelsteget er å faktorisere eller forkorte \(\Delta x\) etter at telleren er forenklet. Vi setter ikke \(\Delta x=0\) før forkortingen.

## Oppgaver

!!! question "Oppgave 3.6.1 – Lineær funksjon"

    Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=3x+2\).

??? note "Fasit – oppgave 3.6.1"

    \[
    f'(x)=\lim_{\Delta x\to0}\dfrac{3(x+\Delta x)+2-(3x+2)}\Delta x
    =\lim_{\Delta x\to0}\dfrac{3h}{\Delta x}=3.
    \]

!!! question "Oppgave 3.6.2 – Andregradsfunksjon"

    Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=x^2+2x\).

??? note "Fasit – oppgave 3.6.2"

    \[
    \begin{aligned}
    f'(x)&=\lim_{\Delta x\to0}\dfrac{(x+\Delta x)^2+2(x+\Delta x)-(x^2+2x)}\Delta x\\
    &=\lim_{\Delta x\to0}\dfrac{2xh+\Delta x^2+2h}{\Delta x}\\
    &=\lim_{\Delta x\to0}(2x+\Delta x+2)=2x+2.
    \end{aligned}
    \]

!!! question "Oppgave 3.6.3 – Forklar en vanlig feil"

    En elev setter \(\Delta x=0\) i differansekvotienten før forenkling.

    Forklar hvorfor dette gir et problem, og vis riktig framgangsmåte for \(f(x)=x^2\).

??? note "Fasit – oppgave 3.6.3"

    Når \(\Delta x=0\), blir nevneren i differansekvotienten \(0\), og uttrykket er ikke definert. For \(f(x)=x^2\) må telleren først forenkles til \(2xh+\Delta x^2\). Deretter forkortes \(\Delta x\), og først da lar vi \(\Delta x\to0\). Resultatet er \(f'(x)=2x\).
