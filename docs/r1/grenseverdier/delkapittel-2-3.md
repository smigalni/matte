<a id="delkapittel-2-3"></a>

## 2.3 Ensidige grenseverdier og grenseverdier

En grenseverdi beskriver hvilken verdi funksjonen nærmer seg når \(x\) nærmer seg et bestemt tall. Vi skriver

\[
\lim_{x\to a}f(x)=L.
\]

Dette betyr at funksjonsverdiene nærmer seg \(L\) når \(x\) nærmer seg \(a\). Det betyr ikke nødvendigvis at \(f(a)=L\), eller at \(f(a)\) er definert.

Vi skiller mellom to retninger:

\[
\lim_{x\to a^-}f(x) \quad\text{og}\quad
\lim_{x\to a^+}f(x).
\]

- \(x\to a^-\): Vi nærmer oss \(a\) fra venstre, med x-verdier mindre enn \(a\).
- \(x\to a^+\): Vi nærmer oss \(a\) fra høyre, med x-verdier større enn \(a\).

Den vanlige grenseverdien \(\lim_{x\to a}f(x)\) finnes bare når begge ensidige grenseverdiene finnes og er like.

!!! example "Eksempel 2.3.1 – grenseverdi fra graf eller forskrift"
    La \(f(x)=\begin{cases}x+1,&x<2,\\5-x,&x\geq2.\end{cases}\)

    Fra venstre nærmer \(x+1\) seg 3:

    \[
    \lim_{x\to2^-}f(x)=3.
    \]

    Fra høyre nærmer \(5-x\) seg også 3:

    \[
    \lim_{x\to2^+}f(x)=3.
    \]

    De ensidige grensene er like, så \(\lim_{x\to2}f(x)=3\). Funksjonsverdien er likevel \(f(2)=3\) her bare fordi den andre forskriften gir 3.

### Oppgaver 2.3

!!! question "Oppgave 2.3.2"

    Bestem de ensidige grenseverdiene og avgjør om den vanlige grenseverdien finnes:

    \[
    f(x)=\begin{cases}2x-1,&x<1,\\x+3,&x\geq1.\end{cases}
    \]

??? note "Fasit – 2.3.2"

    Venstre grenseverdi er \(1\), mens høyre grenseverdi er \(4\). Den tosidige grenseverdien finnes ikke.

    **Resultat:** \(\underline{\underline{\lim_{x\to1^-}f(x)=1,\;\lim_{x\to1^+}f(x)=4}}\)

!!! question "Oppgave 2.3.3"

    En graf nærmer seg \(y=4\) fra begge sider når \(x\to2\), men punktet \((2,1)\) er fylt. Hva er grenseverdien, og hva er \(f(2)\)? Forklar forskjellen.

??? note "Fasit – 2.3.3"

    Grenseverdien er \(4\), mens \(f(2)=1\). Funksjonen er ikke kontinuerlig i \(x=2\).

    **Resultat:** \(\underline{\underline{\lim_{x\to2}f(x)=4,\;f(2)=1}}\)

!!! question "Oppgave 2.3.4"

    Undersøk de ensidige grenseverdiene til \(f(x)=\frac{1}{x-3}\) når \(x\to3\). Forklar hvorfor den vanlige grenseverdien ikke finnes som et endelig tall.

??? note "Fasit – 2.3.4"

    Fra venstre går funksjonen mot \(-\infty\), og fra høyre mot \(+\infty\). Den har vertikal asymptote \(x=3\).

    **Resultat:** \(\underline{\underline{\lim_{x\to3^-}f(x)=-\infty,\;\lim_{x\to3^+}f(x)=+\infty}}\)

!!! question "Oppgave 2.3.5"

    Lag en funksjon der \(\lim_{x\to1^-}f(x)=2\), mens \(\lim_{x\to1^+}f(x)=5\). Vis at den vanlige grenseverdien ikke finnes.

??? note "Fasit – 2.3.5"

    Ett eksempel er \(f(x)=2\) når \(x<1\), \(f(1)=3\) og \(f(x)=5\) når \(x>1\).

    **Resultat:** \(\underline{\underline{\lim_{x\to1^-}f(x)=2\ne5=\lim_{x\to1^+}f(x)}}\)
