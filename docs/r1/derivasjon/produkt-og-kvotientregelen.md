# 3.4 Produktregelen og kvotientregelen

3.4 Produktregelen og kvotientregelen

Når to funksjoner multipliseres, kan vi ikke bare derivere hver faktor og gange resultatene. Produktregelen er

\[
(fg)'=f'g+fg'.
\]

Når én funksjon deles på en annen, bruker vi kvotientregelen:

\[
\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2},\qquad g(x)\ne0.
\]

Legg merke til rekkefølgen i telleren: «derivert av teller ganger nevner, minus teller ganger derivert av nevner».

!!! example "Eksempel – produktregel"
    La \(f(x)=(x^2+1)e^x\). Da er

    \[
    f'(x)=2xe^x+(x^2+1)e^x
    =e^x(x^2+2x+1).
    \]

!!! example "Eksempel – kvotientregel"
    La \(g(x)=\frac{x+1}{x-2}\). Da er

    \[
    g'(x)=\frac{1\cdot(x-2)-(x+1)\cdot1}{(x-2)^2}
    =\frac{-3}{(x-2)^2}.
    \]

    Den deriverte er definert for \(x\ne2\).

### Oppgaver 3.4

**3.4.1** Deriver \(f(x)=(x^2-3)(2x+1)\) med produktregelen.

**3.4.2** Deriver \(g(x)=\frac{2x+1}{x^2+1}\). Oppgi eventuelle begrensninger.

**3.4.3** Deriver \(h(x)=x^2\ln x\), og oppgi definisjonsmengden.

**3.4.4** En elev påstår at \((fg)'=f'g'\). Bruk et konkret eksempel for å vise at påstanden er feil, og forklar den riktige regelen.
