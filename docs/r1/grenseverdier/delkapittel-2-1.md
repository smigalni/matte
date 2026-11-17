<a id="delkapittel-2-1"></a>

## 2.1 Repetisjon av funksjonstyper

Vi har allerede møtt flere typer funksjoner. Her får du en kort oversikt over hvordan de vanligvis skrives, hvordan grafene ser ut, og hvilke egenskaper det er viktig å kjenne igjen.

### Konstant funksjon

Den generelle formen er

\[
f(x)=c
\]

der \(c\) er et fast tall.

- Grafen er en vannrett linje.
- Definisjonsmengde: \(D_f=\mathbb R\).
- Verdimengde: \(V_f=\{c\}\).

<div class="r1-graph-frame">
  <div id="r1-21-constant" class="r1-function-graph" data-r1-graph="constant" role="img" aria-label="Konstant funksjon f(x) = 2"></div>
  <p class="r1-graph-caption">Vannrett graf y = 2. Rutenettet viser at funksjonsverdien er den samme for alle x.</p>
</div>

### Lineær funksjon

Den generelle formen er

\[
f(x)=ax+b,\qquad a\ne0
\]

- Grafen er en rett linje.
- \(a\) er stigningstallet.
- \(b\) er skjæringspunktet med y-aksen.
- Definisjonsmengde og verdimengde er \(\mathbb R\).

<div class="r1-graph-frame">
  <div id="r1-21-linear" class="r1-function-graph" data-r1-graph="linear" role="img" aria-label="Lineær funksjon f(x) = 0,8x + 1"></div>
  <p class="r1-graph-caption">Rett linje med stigningstall 0,8 og skjæring med y-aksen i 1.</p>
</div>

### Andregradsfunksjon

Den generelle formen er

\[
f(x)=ax^2+bx+c,\qquad a\ne0
\]

- Grafen er en parabel.
- Når \(a>0\), vender parabelen oppover. Når \(a<0\), vender den nedover.
- Topp- eller bunnpunktet ligger ved

\[
x=-\frac{b}{2a}.
\]

- Definisjonsmengde: \(D_f=\mathbb R\).
- Hvis \(a>0\), er verdimengden \([y_v,\infty)\). Hvis \(a<0\), er den \((-\infty,y_v]\), der \(y_v\) er y-koordinaten til topp- eller bunnpunktet.

<div class="r1-graph-frame">
  <div id="r1-21-quadratic-basic" class="r1-function-graph" data-r1-graph="quadratic-basic" role="img" aria-label="Andregradsfunksjon f(x) = x² − 2x − 3"></div>
  <p class="r1-graph-caption">Parabel med nullpunktene −1 og 3 og bunnpunktet (1, −4).</p>
</div>

### Potensfunksjon

En vanlig generell form er

\[
f(x)=ax^n
\]

der \(a\ne0\) og \(n\) er et positivt heltall.

- Grafens form avhenger av eksponenten \(n\).
- Når \(n\) er partall, er grafen symmetrisk om y-aksen.
- Når \(n\) er oddetall, er grafen symmetrisk om origo.
- Når \(n\) er partall, er verdimengden \([0,\infty)\) hvis \(a>0\), og \((-\infty,0]\) hvis \(a<0\). Når \(n\) er oddetall, er verdimengden \(\mathbb R\).
- Definisjonsmengde: \(D_f=\mathbb R\).

<div class="r1-graph-frame">
  <div id="r1-21-power" class="r1-function-graph" data-r1-graph="power" role="img" aria-label="Potensfunksjon f(x) = x³"></div>
  <p class="r1-graph-caption">En typisk tredjegrads potensfunksjon, symmetrisk om origo.</p>
</div>

### Eksponentialfunksjon

Den generelle formen er

\[
f(x)=a^x,\qquad a>0,\quad a\ne1
\]

- Den ukjente \(x\) står i eksponenten.
- Grafen ligger over x-aksen.
- Når \(a>1\), vokser funksjonen. Når \(0<a<1\), avtar den.
- Definisjonsmengde: \(D_f=\mathbb R\).
- Verdimengde: \(V_f=(0,\infty)\).
- x-aksen, \(y=0\), er en horisontal asymptote.

<div class="r1-graph-frame">
  <div id="r1-21-exponential" class="r1-function-graph" data-r1-graph="exponential" role="img" aria-label="Eksponentialfunksjon f(x) = 2ˣ"></div>
  <p class="r1-graph-caption">Voksende eksponentialfunksjon som passerer (0, 1); y = 0 er asymptote.</p>
</div>

### Logaritmefunksjon

Den generelle formen er

\[
f(x)=\log_a x,\qquad a>0,\quad a\ne1
\]

- Logaritmen er den omvendte funksjonen til eksponentialfunksjonen.
- Definisjonsmengde: \(D_f=(0,\infty)\).
- Verdimengde: \(V_f=\mathbb R\).
- Når \(a>1\), er grafen voksende. Når \(0<a<1\), er den avtakende.
- Grafen skjærer x-aksen i \(x=1\).
- y-aksen, \(x=0\), er en vertikal asymptote.

<div class="r1-graph-frame">
  <div id="r1-21-logarithm" class="r1-function-graph" data-r1-graph="logarithm" role="img" aria-label="Logaritmefunksjon f(x) = log₂(x)"></div>
  <p class="r1-graph-caption">Voksende logaritmefunksjon som passerer (1, 0); x = 0 er vertikal asymptote.</p>
</div>

### Rasjonal funksjon

En rasjonal funksjon kan skrives som

\[
f(x)=\frac{P(x)}{Q(x)},\qquad Q(x)\ne0
\]

der \(P(x)\) og \(Q(x)\) er polynomer.

- Definisjonsmengden inneholder alle reelle tall unntatt dem som gjør nevneren lik null.
- Grafen kan ha hull og asymptoter.
- Verdimengden avhenger av funksjonsuttrykket. Den må undersøkes i hvert tilfelle.

<div class="r1-graph-frame">
  <div id="r1-21-rational-basic" class="r1-function-graph" data-r1-graph="rational-basic" role="img" aria-label="Rasjonal funksjon f(x) = 1 + 3/(x − 2)"></div>
  <p class="r1-graph-caption">Vertikal asymptote x = 2 og horisontal asymptote y = 1.</p>
</div>

### Dette bør du kunne kjenne igjen

- Se på uttrykket og avgjør hvilken funksjonstype du har.
- Bruk den generelle formen til å kjenne igjen viktige egenskaper.
- Sjekk alltid definisjonsmengden før du regner videre.
- Bruk grafen til å forstå formen, men begrunn matematiske konklusjoner med egenskapene til funksjonen.

### Oppgaver 2.1

!!! question "Oppgave 2.1.1"

    Oppgi funksjonstypen og definisjonsmengden til hver funksjon:

    a) \(f(x)=4x-3\)

    b) \(g(x)=x^2-4\)

    c) \(h(x)=2^x\)

    d) \(p(x)=\)

    \[
    \dfrac{x+1}{x-3}
    \]

    e) \(q(x)=\ln(x-2)\)

??? note "Fasit – 2.1.1"

    a) Lineær funksjon, \(D_f=\mathbb R\).

    b) Andregradsfunksjon, \(D_g=\mathbb R\).

    c) Eksponentialfunksjon, \(D_h=\mathbb R\).

    d) Rasjonal funksjon, \(D_p=\mathbb R\setminus\{3\}\).

    e) Logaritmefunksjon, \(D_q=(2,\infty)\).

    **Resultat:** \(\underline{\underline{D_q=(2,\infty)}}\)

!!! question "Oppgave 2.1.2"

    En funksjon er gitt ved

    \[
    r(x)=\dfrac{x^2-4}{x-2},\qquad x\ne2.
    \]

    a) Faktoriser telleren og forenkle uttrykket så langt det lar seg gjøre.

    b) Oppgi definisjonsmengden.

    c) Hva blir verdien av det forenklede uttrykket når du setter inn \(x=2\)?

    d) Forklar hvorfor dette ikke betyr at den opprinnelige funksjonen automatisk er definert i \(x=2\).

??? note "Fasit – 2.1.2"

    Vi faktoriserer \(x^2-4=(x-2)(x+2)\). For \(x\ne2\) får vi \(r(x)=x+2\). Definisjonsmengden er \(\mathbb R\setminus\{2\}\). Det forenklede uttrykket gir verdien 4 når vi setter inn \(x=2\), men den opprinnelige funksjonen er fortsatt ikke definert der. Forkortingen endrer ikke definisjonsmengden.

    **Resultat:** \(\underline{\underline{r(2)\text{ er ikke definert}}}\)