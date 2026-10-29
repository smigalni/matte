# 3.6 Den deriverte definert ved grenseverdi

3.6 Den deriverte definert ved grenseverdi 

Definisjonen av den deriverte forteller hva derivasjon betyr, ikke bare hvordan vi regner med reglene. Brøken

\[
\frac{f(a+h)-f(a)}h
\]

er stigningstallet til en sekant. Når \(h\) nærmer seg null, nærmer sekanten seg tangenten, dersom grenseverdien finnes.

!!! example "Eksempel – finn den deriverte til \(f(x)=x^2\)"

    \[
    \begin{aligned}
    f'(x)&=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}\\
    &=\lim_{h\to0}\frac{x^2+2xh+h^2-x^2}{h}\\
    &=\lim_{h\to0}(2x+h)=2x.
    \end{aligned}
    \]

    Nøkkelsteget er å faktorisere eller forkorte \(h\) etter at telleren er forenklet. Vi setter ikke \(h=0\) før forkortingen.

### Oppgaver 3.6

**3.6.1** Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=3x+2\).

**3.6.2** Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=x^2+2x\).

**3.6.3** En elev setter \(h=0\) i differansekvotienten før forenkling. Forklar hvorfor dette gir et problem, og vis riktig framgangsmåte for \(f(x)=x^2\).
