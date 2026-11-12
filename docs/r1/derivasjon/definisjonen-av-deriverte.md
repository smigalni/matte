# 3.6 Den deriverte definert ved grenseverdi

Definisjonen av den deriverte forteller hva derivasjon betyr, ikke bare hvordan vi regner med reglene. Vi lar et punkt på grafen nærme seg punktet der vi vil undersøke tangentens stigningstall.

!!! important "Definisjonen av den deriverte"

    \[
    f'(x)=\lim_{\Delta x\to0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}
    \]

    Brøken er stigningstallet til en sekant. Når \(h\) nærmer seg null, nærmer sekanten seg tangenten. Grenseverdien gir tangentens stigningstall dersom den finnes som et endelig tall.

!!! example "Eksempel 3.6.1 – Finn den deriverte til \(f(x)=x^2\)"

    \[
    \begin{aligned}
    f'(x)&=\lim_{\Delta x\to0}\dfrac{(x+\Delta x)^2-x^2}{\Delta x}\\
    &=\lim_{\Delta x\to0}\dfrac{x^2+2x\Delta x+\Delta x^2-x^2}{\Delta x}\\
    &=\lim_{\Delta x\to0}\dfrac{2x\Delta x+\Delta x^2}{\Delta x}\\
    &=\lim_{\Delta x\to0}(2x+\Delta x)=2x.
    \end{aligned}
    \]

    Nøkkelsteget er å faktorisere eller forkorte \(\Delta x\) etter at telleren er forenklet. Vi setter ikke \(\Delta x=0\) før forkortingen.

## Oppgaver

!!! question "Oppgave 3.6.1 – Lineær funksjon"

    Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=3x+2\).

??? note "Fasit – oppgave 3.6.1"

    \[
    f'(x)=\lim_{\Delta x\to0}\dfrac{3(x+\Delta x)+2-(3x+2)}{\Delta x}
    =\lim_{\Delta x\to0}\dfrac{3\Delta x}{\Delta x}=3.
    \]

!!! question "Oppgave 3.6.2 – Andregradsfunksjon"

    Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=x^2+2x\).

??? note "Fasit – oppgave 3.6.2"

    \[
    \begin{aligned}
    f'(x)&=\lim_{\Delta x\to0}\dfrac{(x+\Delta x)^2+2(x+\Delta x)-(x^2+2x)}{\Delta x}\\
    &=\lim_{\Delta x\to0}\dfrac{2x\Delta x+\Delta x^2+2\Delta x}{\Delta x}\\
    &=\lim_{\Delta x\to0}(2x+\Delta x+2)=2x+2.
    \end{aligned}
    \]

!!! question "Oppgave 3.6.3 – Andregradsfunksjon"

    Bruk definisjonen av den deriverte til å finne \(f'(x)\) når

    \[
    f(x)=x^2+3x-1.
    \]

    Vis mellomregningen, og forklar hvorfor vi må forenkle uttrykket før vi lar \(h\) gå mot null.

??? note "Fasit – oppgave 3.6.3"

    \[
    \begin{aligned}
    f'(x)
    &=\lim_{\Delta x\to0}\dfrac{(x+\Delta x)^2+3(x+\Delta x)-1-(x^2+3x-1)}{\Delta x}\\
    &=\lim_{\Delta x\to0}\dfrac{2x\Delta x+\Delta x^2+3\Delta x}{\Delta x}\\
    &=\lim_{\Delta x\to0}(2x+\Delta x+3)\\
    &=\underline{\underline{2x+3}}.
    \end{aligned}
    \]

    Vi kan ikke sette \(\(\Delta x=0\)\) med en gang, fordi det gir null i nevneren. Først forenkler vi og forkorter \(\Delta x\).
