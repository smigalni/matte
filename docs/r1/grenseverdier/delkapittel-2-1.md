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

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen til en konstant funksjon er en vannrett linje." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M28 68 H218" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/></svg>

### Lineær funksjon

Den generelle formen er

\[
f(x)=ax+b,\qquad a\ne0
\]

- Grafen er en rett linje.
- \(a\) er stigningstallet.
- \(b\) er skjæringspunktet med y-aksen.
- Definisjonsmengde og verdimengde er \(\mathbb R\).

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen til en lineær funksjon er en rett linje." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M25 112 L215 24" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/></svg>

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
- Verdimengden bestemmes av topp- eller bunnpunktet.

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen til en andregradsfunksjon er en parabel." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M28 25 Q120 165 212 25" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/></svg>

### Potensfunksjon

En vanlig generell form er

\[
f(x)=ax^n
\]

der \(a\ne0\) og \(n\) er et positivt heltall.

- Grafens form avhenger av eksponenten \(n\).
- Når \(n\) er partall, er grafen symmetrisk om y-aksen.
- Når \(n\) er oddetall, er grafen symmetrisk om origo.
- For positiv \(a\) er verdimengden \([0,\infty)\) når \(n\) er partall, og \(\mathbb R\) når \(n\) er oddetall.
- Definisjonsmengde: \(D_f=\mathbb R\).

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen viser en typisk tredjegradsfunksjon." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M25 118 C65 118 78 108 105 82 C135 52 155 32 215 18" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/></svg>

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

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen viser en voksende eksponentialfunksjon." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M25 105 C85 105 115 99 142 75 C168 48 185 28 215 16" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/></svg>

### Logaritmefunksjon

Den generelle formen er

\[
f(x)=\log_a x,\qquad a>0,\quad a\ne1
\]

- Logaritmen er den omvendte funksjonen til eksponentialfunksjonen.
- Definisjonsmengde: \(D_f=(0,\infty)\).
- Verdimengde: \(V_f=\mathbb R\).
- Grafen skjærer x-aksen i \(x=1\).
- y-aksen, \(x=0\), er en vertikal asymptote.

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen viser en voksende logaritmefunksjon." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M47 119 C62 91 82 72 112 57 C150 38 180 27 215 20" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/></svg>

### Rasjonal funksjon

En rasjonal funksjon kan skrives som

\[
f(x)=\frac{P(x)}{Q(x)},\qquad Q(x)\ne0
\]

der \(P(x)\) og \(Q(x)\) er polynomer.

- Definisjonsmengden inneholder alle reelle tall unntatt dem som gjør nevneren lik null.
- Grafen kan ha hull og asymptoter.
- Verdimengden avhenger av funksjonsuttrykket. Den må undersøkes i hvert tilfelle.

<svg viewBox="0 0 240 140" width="100%" height="140" role="img" aria-label="Grafen viser en typisk rasjonal funksjon med vertikal og horisontal asymptote." xmlns="http://www.w3.org/2000/svg"><path d="M20 110 H225 M45 125 V12" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M25 36 C60 38 87 52 110 109 M130 16 C153 63 177 70 215 72" fill="none" stroke="#2878b8" stroke-width="2.8" stroke-linecap="round"/><path d="M120 12 V126 M20 70 H225" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity=".65"/></svg>

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

    **Resultat:** \(\underline{\underline{r(2)\text{ er ikke definert}}}\`
