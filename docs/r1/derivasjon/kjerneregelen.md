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

!!! example "Eksempel – bruk kjerneregelen"
    La \(f(x)=(3x^2+1)^4\).

    Den ytre funksjonen er «opphøyd i fjerde», og den indre er \(3x^2+1\).

    \[
    f'(x)=4(3x^2+1)^3\cdot6x
    =24x(3x^2+1)^3.
    \]

    En vanlig feil er å glemme faktoren \(6x\).

### Oppgaver 3.3


!!! question "Oppgave 3.3.1 – Deriver \(f(x)=(2x-5)^6\)."


!!! question "Oppgave 3.3.2 – Deriver \(g(x)=\sqrt{4x^2+1}\). Skriv svaret med potensform eller brøk."


!!! question "Oppgave 3.3.3 – Deriver \(h(x)=e^{x^2-3x}\)."


!!! question "Oppgave 3.3.4 – Bestem alle verdier av \\(a\\) slik at tangenten til \\(f(x)=(x^2+a)^3\\) ved \\(x=1\\) har stigningstall 24. Vis at du må bruke kjerneregelen, og undersøk om løsningen er entydig."
