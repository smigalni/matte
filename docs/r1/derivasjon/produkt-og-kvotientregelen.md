# 3.4 Produktregelen og kvotientregelen

Når to funksjoner multipliseres, kan vi ikke bare derivere hver faktor og gange resultatene. Produktregelen er

\[
(fg)'=f'g+fg'.
\]

Når én funksjon deles på en annen, bruker vi kvotientregelen:

\[
\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2},\qquad g(x)\ne0.
\]

Legg merke til rekkefølgen i telleren: «derivert av teller ganger nevner, minus teller ganger derivert av nevner».

!!! example "Eksempel 1 – Produktregelen"

    La \(f(x)=(x^2+1)e^x\). Da er

    \[
    f'(x)=2xe^x+(x^2+1)e^x
    =e^x(x^2+2x+1).
    \]

!!! example "Eksempel 2 – Kvotientregelen"

    La \(g(x)=\frac{x+1}{x-2}\). Da er

    \[
    g'(x)=\frac{1\cdot(x-2)-(x+1)\cdot1}{(x-2)^2}
    =\frac{-3}{(x-2)^2}.
    \]

    Den deriverte er definert for \(x\ne2\).

## Oppgaver

!!! question "Oppgave 3.4.1 – Bruk produktregelen"

    Deriver \(f(x)=(x^2-3)(2x+1)\) med produktregelen.

!!! question "Oppgave 3.4.2 – Bruk kvotientregelen"

    Deriver

    \[
    g(x)=\frac{2x+1}{x^2+1}.
    \]

    Oppgi eventuelle begrensninger.

!!! question "Oppgave 3.4.3 – Produkt med logaritme"

    Deriver \(h(x)=x^2\ln x\), og oppgi definisjonsmengden.

!!! question "Oppgave 3.4.4 – Finn og forklar feilen"

    En elev påstår at \((fg)'=f'g'\).

    Bruk et konkret eksempel for å vise at påstanden er feil, og forklar den riktige regelen.

## Fasit

??? note "Fasit – oppgave 3.4.1"

    \[
    f'(x)=2x(2x+1)+2(x^2-3)=6x^2+2x-6.
    \]

??? note "Fasit – oppgave 3.4.2"

    \[
    g'(x)=\frac{2(x^2+1)-(2x+1)2x}{(x^2+1)^2}
    =\frac{2-2x^2-2x}{(x^2+1)^2}.
    \]

    Nevneren er aldri \(0\), så den deriverte er definert for alle reelle \(x\).

??? note "Fasit – oppgave 3.4.3"

    \[
    h'(x)=2x\ln x+x.
    \]

    Funksjonen er definert for \(x>0\).

??? note "Fasit – oppgave 3.4.4"

    Velg for eksempel \(f(x)=x^2\) og \(g(x)=x^3\). Da er \(fg=x^5\), så \((fg)'=5x^4\), mens \(f'g'=2x\cdot3x^2=6x^3\). Uttrykkene er ikke like generelt. Riktig regel er \((fg)'=f'g+fg'\).
