# 3.3 Kjerneregelen

Kjerneregelen bruker vi når en funksjon er satt sammen av en ytre funksjon og en indre funksjon. Hvis

\[
y=f(g(x)),
\]

så er

\[
y'=f'(g(x))\cdot g'(x).
\]

Med ord: Deriver den ytre funksjonen, behold den indre funksjonen, og gang med den deriverte av den indre funksjonen.

!!! example "Eksempel 1 – Bruk kjerneregelen"

    La \(f(x)=(3x^2+1)^4\).

    Den ytre funksjonen er «opphøyd i fjerde», og den indre er \(3x^2+1\).

    \[
    f'(x)=4(3x^2+1)^3\cdot 6x
    =24x(3x^2+1)^3.
    \]

    En vanlig feil er å glemme faktoren \(6x\).

## Oppgaver

!!! question "Oppgave 3.3.1 – Deriver en potens av en lineær funksjon"

    Deriver

    \[
    f(x)=(2x-5)^6.
    \]

!!! question "Oppgave 3.3.2 – Deriver en kvadratrot"

    Deriver

    \[
    g(x)=\sqrt{4x^2+1}.
    \]

    Skriv svaret med potensform eller brøk.

!!! question "Oppgave 3.3.3 – Deriver en eksponentialfunksjon"

    Deriver

    \[
    h(x)=e^{x^2-3x}.
    \]

!!! question "Oppgave 3.3.4 – Bestem en parameter"

    Bestem alle verdier av \(a\) slik at tangenten til

    \[
    f(x)=(x^2+a)^3
    \]

    ved \(x=1\) har stigningstall \(24\). Vis at du må bruke kjerneregelen, og undersøk om løsningen er entydig.

## Fasit

??? note "Fasit – oppgave 3.3.1"

    \[
    f'(x)=6(2x-5)^5\cdot 2=12(2x-5)^5.
    \]

??? note "Fasit – oppgave 3.3.2"

    Skriv funksjonen som \(g(x)=(4x^2+1)^{1/2}\). Da får vi

    \[
    g'(x)=\frac12(4x^2+1)^{-1/2}\cdot 8x
    =\frac{4x}{\sqrt{4x^2+1}}.
    \]

??? note "Fasit – oppgave 3.3.3"

    \[
    h'(x)=(2x-3)e^{x^2-3x}.
    \]

??? note "Fasit – oppgave 3.3.4"

    Ved kjerneregelen får vi

    \[
    f'(x)=3(x^2+a)^2\cdot 2x=6x(x^2+a)^2.
    \]

    Når \(x=1\), skal stigningstallet være \(24\):

    \[
    f'(1)=6(1+a)^2=24.
    \]

    Dermed er

    \[
    (1+a)^2=4
    \quad\Rightarrow\quad
    1+a=\pm2.
    \]

    Vi får \(a=1\) eller \(a=-3\). Det finnes altså to løsninger, så løsningen er ikke entydig.
