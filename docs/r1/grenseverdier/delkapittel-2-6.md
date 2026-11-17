<a id="delkapittel-2-6"></a>

## 2.6 Asymptoter

En asymptote er en rett linje som grafen nærmer seg. Vi undersøker tre vanlige typer.

### Vertikal asymptote

Linjen \(x=a\) er en vertikal asymptote når funksjonsverdiene går mot \(+\infty\) eller \(-\infty\) når \(x\) nærmer seg \(a\) fra minst én side.

!!! example "Eksempel 2.6.1 – vertikal asymptote"
    Undersøk grenseverdiene til

    \[
    f(x)=\dfrac{1}{x-2}.
    \]

    Når \(x\) nærmer seg 2 fra venstre, er nevneren negativ og nærmer seg 0. Fra høyre er nevneren positiv og nærmer seg 0:

    \[
    \lim_{x\to2^-}f(x)=-\infty,
    \qquad
    \lim_{x\to2^+}f(x)=+\infty.
    \]

    Minst én ensidig grenseverdi går mot uendelig i absoluttverdi. Derfor er

    **Svar:** Den vertikale asymptoten er

    \[
    \underline{\underline{x=2}}.
    \]

### Horisontal asymptote

Linjen \(y=L\) er en horisontal asymptote dersom

\[
\lim_{x\to\infty}f(x)=L
\quad\text{eller}\quad
\lim_{x\to-\infty}f(x)=L.
\]

De to grensene kan gi ulike horisontale asymptoter.

### Skrå asymptote

En skrå asymptote har formen \(y=ax+b\), der \(a\ne0\). For rasjonale funksjoner kan polynomdivisjon ofte avsløre den.

!!! example "Eksempel 2.6.2 – finn skrå asymptote med polynomdivisjon"
    Bestem den skrå asymptoten til funksjonen

    \[
    f(x)=\dfrac{x^2+1}{x-1}.
    \]

    **1. Utfør polynomdivisjonen**

    Vi deler \(x^2+0x+1\) på \(x-1\).

    Først deler vi det første leddet i telleren på det første leddet i nevneren:

    \[
    \dfrac{x^2}{x}=x.
    \]

    Vi ganger \(x\) med \(x-1\) og trekker fra:

    \[
    \begin{aligned}
    &(x^2+0x+1)-(x^2-x)\\
    &\qquad=x+1.
    \end{aligned}
    \]

    Deretter deler vi \(x\) på \(x\), som gir \(1\). Vi ganger \(1\) med \(x-1\) og trekker fra:

    \[
    (x+1)-(x-1)=2.
    \]

    Kvotienten er \(x+1\), og resten er \(2\). Dermed får vi

    \[
    \dfrac{x^2+1}{x-1}
    =x+1+\dfrac{2}{x-1}.
    \]

    **2. Undersøk restleddet**

    Når \(x\to\infty\) eller \(x\to-\infty\), går

    \[
    \dfrac{2}{x-1}\to0.
    \]

    Funksjonen nærmer seg derfor linjen \(y=x+1\).

    **Svar:** Den skrå asymptoten er

    \[
    \underline{\underline{y=x+1}}.
    \]

### Oppgaver 2.6

!!! question "Oppgave 2.6.3"

    Finn vertikal og horisontal asymptote til \(f(x)=\frac{3x+1}{x-2}\). Begrunn med grenseverdier.

??? note "Fasit – 2.6.3"

    Vertikal asymptote \(x=2\), horisontal asymptote \(y=3\).

    **Resultat:** \(\underline{\underline{x=2,\;y=3}}\)

!!! question "Oppgave 2.6.4"

    Undersøk asymptotene til \(g(x)=\frac{x^2-4}{x-2}\). Forklar hvorfor en verdi som gjør nevneren null, ikke automatisk gir en vertikal asymptote.

??? note "Fasit – 2.6.4"

    For \(x\ne2\) er funksjonen lik \(x+2\). Grafen ligger derfor på linjen \(y=x+2\), bortsett fra et hull i \((2,4)\). Linjen \(y=x+2\) er den skrå asymptoten. Det er ingen vertikal asymptote ved \(x=2\), fordi grenseverdiene er endelige.

    **Resultat:** \(\underline{\underline{y=x+2}}\)

!!! question "Oppgave 2.6.5"

    Bruk polynomdivisjon til å bestemme eventuell skrå asymptote for \(h(x)=\frac{2x^2+3x-1}{x+1}\).

??? note "Fasit – 2.6.5"

    Polynomdivisjon gir \(h(x)=2x+1-\frac{2}{x+1}\). Skrå asymptote er \(y=2x+1\), og vertikal asymptote er \(x=-1\).

    **Resultat:** \(\underline{\underline{x=-1,\;y=2x+1}}\)

!!! question "Oppgave 2.6.6"

    En rasjonal funksjon har vertikal asymptote \(x=-2\) og horisontal asymptote \(y=3\). Lag et mulig funksjonsuttrykk og forklar hvordan du vet at uttrykket oppfyller kravene. Det finnes flere svar.

??? note "Fasit – 2.6.6"

    Ett mulig uttrykk er \(f(x)=3+\frac{1}{x+2}\). Det har vertikal asymptote \(x=-2\) og horisontal asymptote \(y=3\).

    **Resultat:** \(\underline{\underline{x=-2,\;y=3}}\)
