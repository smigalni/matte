<a id="delkapittel-2-6"></a>

## 2.6 Asymptoter

En asymptote er en rett linje som grafen nærmer seg. Vi undersøker tre vanlige typer.

### Vertikal asymptote

Linjen \(x=a\) er en vertikal asymptote når funksjonsverdiene går mot \(+\infty\) eller \(-\infty\) når \(x\) nærmer seg \(a\) fra minst én side.

Se [figur 2.6.1](#figur-2-6-1).

<a id="figur-2-6-1"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="verticalAsymptote" role="img" aria-label="Graf med vertikal asymptote x = 2"></div>
  <p class="math-graph-caption"><strong>Figur 2.6.1.</strong> Grafen går mot uendelig i absoluttverdi når x nærmer seg 2. Den vertikale asymptoten er x = 2.</p>
</div>

!!! example "Eksempel 2.6.1 – vertikal asymptote"
    Undersøk grenseverdiene til

    \[
    f(x)=\dfrac{1}{x-2}.
    \]

    Når \(x\) nærmer seg 2 fra venstre, er nevneren negativ og nærmer seg 0. Fra høyre er nevneren positiv og nærmer seg 0:

    \[
    \lim\limits_{x\to2^-}f(x)=-\infty,
    \qquad
    \lim\limits_{x\to2^+}f(x)=+\infty.
    \]

    Minst én ensidig grenseverdi går mot uendelig i absoluttverdi. Derfor er den vertikale asymptoten

    \[
    \underline{\underline{x=2}}.
    \]

### Horisontal asymptote

Linjen \(y=L\) er en horisontal asymptote dersom

\[
\lim\limits_{x\to\infty}f(x)=L
\quad\text{eller}\quad
\lim\limits_{x\to-\infty}f(x)=L.
\]

De to grensene kan gi ulike horisontale asymptoter.

Se [figur 2.6.2](#figur-2-6-2).

<a id="figur-2-6-2"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="horizontalAsymptote" role="img" aria-label="Graf med horisontal asymptote y = 1"></div>
  <p class="math-graph-caption"><strong>Figur 2.6.2.</strong> Grafen nærmer seg linjen y = 1 både når x går mot pluss og minus uendelig.</p>
</div>

### Skrå asymptote

En skrå asymptote har formen \(y=ax+b\), der \(a\ne0\). For rasjonale funksjoner kan polynomdivisjon ofte avsløre den.

Se [figur 2.6.3](#figur-2-6-3).

<a id="figur-2-6-3"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="slantAsymptoteChapter2" role="img" aria-label="Graf med skrå asymptote y = x + 1 og vertikal asymptote x = 1"></div>
  <p class="math-graph-caption"><strong>Figur 2.6.3.</strong> Grafen til f(x) = (x² + 1)/(x − 1) nærmer seg den skrå asymptoten y = x + 1. Den vertikale asymptoten er x = 1.</p>
</div>

!!! example "Eksempel 2.6.2 – finn skrå asymptote med polynomdivisjon"
    Bestem den skrå asymptoten til funksjonen

    \[
    f(x)=\dfrac{x^2+1}{x-1}.
    \]

    **1. Still opp polynomdivisjonen**

    Vi skriver \(x^2+1\) som \(x^2+0x+1\), slik at alle potenser er med.

    \[
    \begin{array}{lcc}
    (x^2+0x+1):(x-1)&=&x\\
    \overline{-(x^2-x)}&&\\
    x+1&&
    \end{array}
    \]

    Vi deler det første leddet i resten, \(x\), på \(x\). Det gir \(1\), som blir neste ledd i kvotienten. Vi multipliserer \(1\) med \(x-1\) og trekker fra:

    \[
    \begin{array}{lcc}
    (x^2+0x+1):(x-1)&=&x+1\\
    \overline{-(x^2-x)}&&\\
    x+1&&\\
    \overline{-(x-1)}&&\\
    2&&
    \end{array}
    \]

    Kvotienten er \(x+1\), og resten er \(2\). Derfor får vi

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

    Finn vertikal og horisontal asymptote til

    \[
    f(x)=\dfrac{3x+1}{x-2}.
    \]

    Begrunn med grenseverdier.

??? note "Fasit – 2.6.3"

    Vertikal asymptote \(x=2\), horisontal asymptote \(y=3\).

    **Resultat:** \(\underline{\underline{x=2,\;y=3}}\)

!!! question "Oppgave 2.6.4"

    Undersøk asymptotene til

    \[
    g(x)=\dfrac{x^2-4}{x-2}.
    \]

    Forklar hvorfor en verdi som gjør nevneren null, ikke automatisk gir en vertikal asymptote.

??? note "Fasit – 2.6.4"

    For \(x\ne2\) er funksjonen lik \(x+2\). Grafen ligger derfor på linjen \(y=x+2\), bortsett fra et hull i \((2,4)\). Linjen \(y=x+2\) er den skrå asymptoten. Det er ingen vertikal asymptote ved \(x=2\), fordi grenseverdiene er endelige.

    **Resultat:** \(\underline{\underline{y=x+2}}\)

!!! question "Oppgave 2.6.5"

    Bruk polynomdivisjon til å bestemme eventuell skrå asymptote for

    \[
    h(x)=\dfrac{2x^2+3x-1}{x+1}.
    \]

??? note "Fasit – 2.6.5"

    Polynomdivisjon gir \(h(x)=2x+1-\frac{2}{x+1}\). Skrå asymptote er \(y=2x+1\), og vertikal asymptote er \(x=-1\).

    **Resultat:** \(\underline{\underline{x=-1,\;y=2x+1}}\)