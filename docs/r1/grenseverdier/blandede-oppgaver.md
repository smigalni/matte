# 2.8 Blandede oppgaver

Oppgavene er delt etter forventet vanskelighetsgrad. Nivået er veiledende; krevende oppgaver kan kreve flere forklaringer enn regning.

## Grunnleggende

**Oppgave 2.8.1** Finn \(\lim_{x\to2}(3x-1)\).

??? note "Fasit – 2.8.1"

    \(5\).

    **Resultat:** \(\underline{\underline{5}}\)

**Oppgave 2.8.2** Finn de ensidige grenseverdiene for \(f(x)=\begin{cases}x+1,&x<0,\\2x+1,&x\geq0.\end{cases}\).

??? note "Fasit – 2.8.2"

    Begge ensidige grenseverdiene er \(1\).

    **Resultat:** \(\underline{\underline{1}}\)

**Oppgave 2.8.3** Finn den vertikale asymptoten til \(f(x)=\frac{1}{x+4}\).

??? note "Fasit – 2.8.3"

    Vertikal asymptote \(x=-4\).

    **Resultat:** \(\underline{\underline{x=-4}}\)

## Middels

**Oppgave 2.8.4** Bestem \(a\) slik at \(f(x)=\begin{cases}ax+2,&x<1,\\x^2+3,&x\geq1.\end{cases}\) er kontinuerlig i \(x=1\).

??? note "Fasit – 2.8.4"

    Kontinuitet gir \(a+2=4\), altså \(a=2\).

    **Resultat:** \(\underline{\underline{a=2}}\)

**Oppgave 2.8.5** Beregn \(\lim_{x\to4}\frac{x^2-16}{x-4}\), og forklar hvorfor svaret ikke er funksjonsverdien i \(x=4\).

??? note "Fasit – 2.8.5"

    Grenseverdien er \(8\). Funksjonen er ikke definert ved \(x=4\).

    **Resultat:** \(\underline{\underline{8}}\)

**Oppgave 2.8.6** Finn alle asymptotene til \(f(x)=\frac{2x^2+1}{x^2-9}\).

??? note "Fasit – 2.8.6"

    Vertikale asymptoter \(x=-3\) og \(x=3\), horisontal asymptote \(y=2\).

    **Resultat:** \(\underline{\underline{x=\pm3,\;y=2}}\)

## Krevende

**Oppgave 2.8.7 – krevende: kontinuitet og tangentstigningstall (bro til kapittel 3)** La

\[
f(x)=\begin{cases}
x^2+ax,&x<1,\\
bx+2,&x\geq1.
\end{cases}
\]

Bestem sammenhengen mellom \(a\) og \(b\) som gir kontinuitet i \(x=1\). Undersøk deretter hvilken sammenheng mellom \(a\) og \(b\) som gjør tangentstigningstallene til de to deluttrykkene like ved overgangen. Kan begge kravene oppfylles samtidig? Begrunn svaret.

*Merk: Del b er en smakebit på derivasjon og kan vente til kapittel 3 dersom klassen ikke har arbeidet med tangentstigningstall ennå.*

??? note "Fasit – 2.8.7"

    Kontinuitet gir \(b=a-1\). For at tangentstigningstallene til deluttrykkene skal være like, må \(a+2=b\), altså \(b=a+2\). De to sammenhengene er uforenlige, så kravene kan ikke oppfylles samtidig.
    
    **Resultat:** Kravene er uforenlige: \(\underline{\underline{b=a-1}}\) for kontinuitet og \(\underline{\underline{b=a+2}}\) for like stigningstall.

**Oppgave 2.8.8** En rasjonal funksjon har en vertikal asymptote ved \(x=2\) og en horisontal asymptote \(y=-1\). Lag et mulig uttrykk med disse egenskapene, og undersøk ensidige grenseverdier ved den vertikale asymptoten.

??? note "Fasit – 2.8.8"

    Ett eksempel er \(f(x)=-1+\frac{1}{x-2}\).

    **Resultat:** \(\underline{\underline{f(x)=-1+\frac{1}{x-2}}}\)

## Utfordrende

**Oppgave 2.8.9** En elev hevder: «Hvis telleren og nevneren begge blir null, finnes det ingen grenseverdi.» Lag et moteksempel, løs grenseverdien og forklar hvilken konklusjon eleven burde trekke i stedet.

??? note "Fasit – 2.8.9"

    For eksempel \(\lim_{x\to1}\frac{x^2-1}{x-1}=2\). Formen \(0/0\) er ubestemt, ikke et svar.

    **Resultat:** \(\underline{\underline{\lim_{x\to1}\frac{x^2-1}{x-1}=2}}\)

**Oppgave 2.8.10 – flere fenomener i samme funksjon**

Vi har funksjonen

\[
f_a(x)=\frac{x^2+(a-1)x-a}{x^2-1}.
\]

a) Faktoriser teller og nevner.

b) Undersøk hva som skjer ved \(x=1\) for alle verdier av \(a\).

c) Undersøk hva som skjer ved \(x=-1\). For hvilken verdi av \(a\) får vi et hull i stedet for en vertikal asymptote?

d) Bestem den horisontale asymptoten.

e) Forklar hvorfor det er viktig å undersøke hver kandidat separat, selv om de kommer fra samme nevner.

??? note "Fasit – 2.8.10"

    \(f_a(x)=\frac{(x-1)(x+a)}{(x-1)(x+1)}=\frac{x+a}{x+1}\), for \(x\ne-1,1\). Ved \(x=1\) er det alltid et hull med grenseverdi \((a+1)/2\). Ved \(x=-1\) er det vertikal asymptote når \(a\ne1\). Når \(a=1\), blir det også et hull, denne gangen i \((-1,1)\). Horisontal asymptote er \(y=1\).

    **Resultat:** \(\underline{\underline{y=1}}\)

**Oppgave 2.8.11 – R1 og T-matte: asymptoter og rasjonale ulikheter**

La \(a>1\), og definer

\[
f_a(x)=\frac{x^2-a^2}{(x-a)(x-1)}.
\]

a) Faktoriser og forenkle uttrykket. Oppgi samtidig definisjonsmengden til den opprinnelige funksjonen.

b) Undersøk hva som skjer når \(x\to a\). Finn koordinatene til hullet i grafen.

c) Bestem den vertikale og den horisontale asymptoten. Begrunn svarene med grenseverdier.

d) Bruk fortegnsskjema til å løse ulikheten \(f_a(x)\geq0\). Husk at den opprinnelige funksjonen ikke er definert i \(x=a\) eller \(x=1\).

e) Forklar hvorfor det ikke er tilstrekkelig å løse ulikheten bare for det forkortede uttrykket uten å ta hensyn til den opprinnelige definisjonsmengden.

Oppgaven kombinerer grenseverdier og asymptoter fra R1 med faktorisering, fortegnsskjema og rasjonale ulikheter fra T-matte.

??? note "Fasit – 2.8.11"

    Vi faktoriserer:
    
    **Svar:**
    
    \(\underline{\underline{(-\infty,-a]\cup(1,a)\cup(a,\infty)}}\).
    
    \[
    f_a(x)=\frac{(x-a)(x+a)}{(x-a)(x-1)}
    =\frac{x+a}{x-1},\qquad x\ne a,\;x\ne1.
    \]
    
    Den opprinnelige funksjonen er ikke definert for \(x=a\) eller \(x=1\). Når \(x\to a\), får vi
    
    \[
    \lim_{x\to a}f_a(x)=\frac{2a}{a-1},
    \]
    
    så grafen har et hull i \(\left(a,\frac{2a}{a-1}\right)\). Siden \(a>1\), er telleren \(x+a\) ulik null ved \(x=1\), og dermed er \(x=1\) en vertikal asymptote. For \(x\to\pm\infty\) går brøken mot 1, så den horisontale asymptoten er \(y=1\).
    
    For ulikheten ser vi på fortegnene til \(x+a\) og \(x-1\). Siden \(-a<1\), er brøken positiv for \(x<-a\) og for \(x>1\), og null ved \(x=-a\). Vi må likevel utelate \(x=a\), der den opprinnelige funksjonen ikke er definert. Løsningen er derfor
    
    \[
    (-\infty,-a]\cup(1,a)\cup(a,\infty).
    \]
    
    Det forkortede uttrykket har samme funksjonsverdier som den opprinnelige funksjonen der begge er definert, men forkortingen fyller ikke inn de to punktene som manglet i den opprinnelige definisjonsmengden.
    
    **Svar:** \(\underline{\underline{(-\infty,-a]\cup(1,a)\cup(a,\infty)}}\).

    **Resultat:** \(\underline{\underline{(-\infty,-a]\cup(1,a)\cup(a,\infty)}}\)

**Oppgave 2.8.12 – R1 og T-matte: polynomdivisjon, asymptoter og fortegn**

La funksjonen være

\[
g(x)=\frac{(x-1)(x^2+2x+3)}{(x-1)(x+1)}.
\]

a) Oppgi definisjonsmengden og forenkle uttrykket så langt det lar seg gjøre.

b) Bruk polynomdivisjon til å skrive funksjonen som et polynom pluss en brøk. Bestem den skrå asymptoten.

c) Undersøk hva som skjer når \(x\to1\), og finn koordinatene til et eventuelt hull.

d) Undersøk grenseverdiene når \(x\to-1^-\) og \(x\to-1^+\). Bestem den vertikale asymptoten.

e) Bruk fortegn og egenskapene til andregradsuttrykket \(x^2+2x+3\) til å løse ulikheten \(g(x)\geq0\). Ta hensyn til den opprinnelige definisjonsmengden.

Oppgaven kombinerer grenseverdier fra R1 med polynomdivisjon, andregradsuttrykk og fortegnsvurdering fra T-matte.

??? note "Fasit – 2.8.12"

    Definisjonsmengden er \(\mathbb R\setminus\{-1,1\}\). For \(x\ne-1,1\) forkorter vi med \(x-1\):
    
    **Svar:**
    
    \(\underline{\underline{y=x+1}}\).
    
    \[
    g(x)=\frac{x^2+2x+3}{x+1}
    =x+1+\frac{2}{x+1}.
    \]
    
    Polynomdivisjonen viser at den skrå asymptoten er \(y=x+1\). Når \(x\to1\), får vi grenseverdien
    
    \[
    \lim_{x\to1}g(x)=\frac{1+2+3}{2}=3,
    \]
    
    så grafen har et hull i \((1,3)\). Når \(x\to-1\), går telleren mot \(2\), mens nevneren går mot null. Derfor går funksjonen mot \(-\infty\) fra venstre og \(+\infty\) fra høyre. Den vertikale asymptoten er \(x=-1\).
    
    For ulikheten skriver vi
    
    \[
    x^2+2x+3=(x+1)^2+2>0.
    \]
    
    Telleren er altså positiv for alle reelle \(x\). Fortegnet bestemmes av \(x+1\), så brøken er positiv når \(x>-1\). Vi må utelate \(x=1\), der den opprinnelige funksjonen ikke er definert. Løsningen er
    
    \[
    (-1,1)\cup(1,\infty).
    \]
    
    **Svar:**
    
    Skrå asymptote: \(\underline{\underline{y=x+1}}\).
    
    Hull: \(\underline{\underline{(1,3)}}\).
    
    Vertikal asymptote: \(\underline{\underline{x=-1}}\).
    
    
    Ulikheten: \(\underline{\underline{(-1,1)\cup(1,\infty)}}\).

    **Resultat:** \(\underline{\underline{y=x+1}}\)

**Oppgave 2.8.13 – R1: logaritmer, nullpunkter, asymptoter og kontinuitet**

La

\[
g(x)=\ln(x^2-4x+3).
\]

a) Faktoriser uttrykket inne i logaritmen, og bestem definisjonsmengden til \(g\).

b) Bestem nullpunktene til \(g\).

c) Bestem de vertikale asymptotene. Undersøk de relevante ensidige grenseverdiene, og forklar hvorfor vi ikke undersøker funksjonen fra begge sider av hvert punkt.

d) Bestem verdimengden til \(g\). Begrunn svaret.

e) Skriv \(g\) som en sammensetning av to funksjoner. Bruk dette til å forklare hvorfor \(g\) er kontinuerlig på hele definisjonsmengden.

??? note "Fasit – 2.8.13"

    Vi faktoriserer uttrykket inne i logaritmen:
    
    \[
    x^2-4x+3=(x-1)(x-3).
    \]
    
    **a)** Logaritmen krever at \((x-1)(x-3)>0\). Dermed er
    
    **Svar:**
    
    \(\underline{\underline{D_g=(-\infty,1)\cup(3,\infty)}}\).
    
    **b)** Nullpunktene finnes ved å løse
    
    \[
    \ln(x^2-4x+3)=0
    \]
    
    som gir
    
    \[
    x^2-4x+3=1
    \quad\Longrightarrow\quad
    x^2-4x+2=0.
    \]
    
    Andregradslikningen gir \(x=2\pm\sqrt2\). Begge verdiene ligger i definisjonsmengden.
    
    **Svar:**
    
    \(\underline{\underline{x=2-\sqrt2\quad\text{og}\quad x=2+\sqrt2}}\).
    
    **c)** Når \(x\to1^-\), går \((x-1)(x-3)\) mot \(0\) gjennom positive verdier. Derfor går logaritmen mot \(-\infty\). Tilsvarende skjer når \(x\to3^+\).
    
    \[
    \lim_{x\to1^-}g(x)=-\infty,
    \qquad
    \lim_{x\to3^+}g(x)=-\infty.
    \]
    
    **Svar:**
    
    \(\underline{\underline{x=1\quad\text{og}\quad x=3}}\) er vertikale asymptoter. Vi bruker bare grensene fra venstre ved \(x=1\) og fra høyre ved \(x=3\), fordi funksjonen ikke er definert i intervallet \(1<x<3\).
    
    **d)** Uttrykket \((x-1)(x-3)\) kan anta alle positive verdier når \(x<1\) eller \(x>3\). Logaritmen av positive tall kan anta alle reelle verdier.
    
    **Svar:**
    
    \(\underline{\underline{V_g=\mathbb R}}\).
    
    **e)** Sett \(p(x)=x^2-4x+3\) og \(h(x)=\ln x\). Da er \(g=h\circ p\). Polynomfunksjonen \(p\) er kontinuerlig for alle reelle \(x\), og logaritmefunksjonen \(h\) er kontinuerlig for positive argumenter. Siden \(p(x)>0\) akkurat på \(D_g\), er sammensetningen kontinuerlig på hele definisjonsmengden.

    **Resultat:** \(\underline{\underline{D_g=(-\infty,1)\cup(3,\infty)}}\)

## Flere blandede oppgaver

**Oppgave 2.8.14 – hull eller vertikal asymptote?**

For \(a\in\mathbb R\) er funksjonen gitt ved

\[
f_a(x)=\frac{x^2+(a-2)x-2a}{x^2-4}.
\]

a) Faktoriser teller og nevner, og oppgi den opprinnelige definisjonsmengden.

b) Undersøk hva som skjer når \(x\to2\). Finn koordinatene til et eventuelt hull.

c) Undersøk hva som skjer når \(x\to-2\). For hvilken verdi av \(a\) får vi et hull i stedet for en vertikal asymptote?

d) Bestem den horisontale asymptoten.

??? note "Fasit – 2.8.14"

    Vi faktoriserer:

    \[
    f_a(x)=\frac{(x-2)(x+a)}{(x-2)(x+2)}
    =\frac{x+a}{x+2},\qquad x\ne-2,2.
    \]

    Ved \(x=2\) får vi alltid et hull. Grenseverdien er \((a+2)/4\), så hullet ligger i

    \[
    \left(2,\frac{a+2}{4}\right).
    \]

    Ved \(x=-2\) er telleren etter forkorting \(a-2\). Når \(a\ne2\), får vi en vertikal asymptote. Når \(a=2\), forkortes også faktoren \(x+2\), og punktet blir et hull. Da er grenseverdien 1, så hullet ligger i \((-2,1)\).

    Teller og nevner har samme grad, og forholdet mellom de ledende koeffisientene er 1. Den horisontale asymptoten er \(y=1\).

    **Resultat:** Hull ved \(x=2\) for alle \(a\). Ved \(x=-2\): vertikal asymptote når \(a\ne2\), hull når \(a=2\). Horisontal asymptote: \(\underline{\underline{y=1}}\).

**Oppgave 2.8.15 – kontinuitet med en parameter**

Funksjonen er gitt ved

\[
f_a(x)=
\begin{cases}
\dfrac{x^2-9}{x-3}, & x<3,\\
ax+b, & x\geq3.
\end{cases}
\]

a) Bestem venstre grenseverdi når \(x\to3\).

b) Finn betingelsen mellom \(a\) og \(b\) som gjør funksjonen kontinuerlig i \(x=3\).

c) Finn to ulike par \((a,b)\) som gjør funksjonen kontinuerlig. Forklar hvorfor det finnes uendelig mange slike par.

??? note "Fasit – 2.8.15"

    For \(x\ne3\) er

    \[
    \frac{x^2-9}{x-3}=x+3.
    \]

    Dermed er venstre grenseverdi 6. Kontinuitet krever at funksjonsverdien fra høyre også er 6:

    \[
    3a+b=6.
    \]

    Eksempler er \((a,b)=(0,6)\) og \((a,b)=(1,3)\). Alle par som oppfyller \(b=6-3a\), gir kontinuitet.

    **Resultat:** \(\underline{\underline{b=6-3a}}\).

**Oppgave 2.8.16 – en horisontal asymptote som kan krysses**

La

\[
g_a(x)=\frac{3x^2+ax-1}{x^2-4x+5}.
\]

a) Bestem den horisontale asymptoten når \(x\to\infty\).

b) Undersøk om grafen kan krysse asymptoten. Finn eventuelt skjæringspunktet uttrykt ved \(a\).

c) Finn verdien av \(a\) som gjør at grafen ikke krysser asymptoten.

??? note "Fasit – 2.8.16"

    Teller og nevner har samme grad, så den horisontale asymptoten er \(y=3\).

    For å finne skjæringspunkt med asymptoten setter vi \(g_a(x)=3\):

    \[
    3x^2+ax-1=3(x^2-4x+5)
    \]

    \[
    (a+12)x=16.
    \]

    Når \(a\ne-12\), får vi skjæringspunkt ved \(x=16/(a+12)\). Nevneren er alltid positiv, siden \(x^2-4x+5=(x-2)^2+1\), så uttrykket er definert for alle reelle \(x\).

    Når \(a=-12\), får vi likningen \(0=16\), som ikke har noen løsning. Grafen krysser da ikke asymptoten.

    **Resultat:** Horisontal asymptote \(\underline{\underline{y=3}}\). Ingen kryssing når \(\underline{\underline{a=-12}}\).

**Oppgave 2.8.17 – et hull og en skrå asymptote**

Vi har funksjonen

\[
h(x)=\frac{x^2-1}{x-1}.
\]

a) Bestem definisjonsmengden.

b) Forenkle uttrykket, og bestem grenseverdien når \(x\to1\).

c) Finn koordinatene til hullet i grafen.

d) Bestem en skrå asymptote når \(x\to\infty\), og forklar hvorfor grafen likevel ikke er lik en rett linje i alle punkter.

??? note "Fasit – 2.8.17"

    Definisjonsmengden er \(\mathbb R\setminus\{1\}\). Vi faktoriserer:

    \[
    h(x)=\frac{(x-1)(x+1)}{x-1}=x+1,\qquad x\ne1.
    \]

    Dermed er

    \[
    \lim_{x\to1}h(x)=2.
    \]

    Grafen har et hull i punktet \((1,2)\). Når \(x\to\infty\), er avstanden til linjen \(y=x+1\) lik null; linjen er derfor en skrå asymptote. Grafen følger linjen overalt der funksjonen er definert, men punktet \((1,2)\) mangler.

    **Resultat:** Hull i \(\underline{\underline{(1,2)}}\), skrå asymptote \(\underline{\underline{y=x+1}}\).

**Oppgave 2.8.18 – grenseverdi ved uendelig med kvadratrot**

Undersøk grensene

\[
\lim_{x\to\infty}\left(\sqrt{x^2+3x}-x\right)
\]

og

\[
\lim_{x\to-\infty}\left(\sqrt{x^2+3x}+x\right).
\]

Forklar hvorfor du må være oppmerksom på fortegnet til \(x\) når du forenkler kvadratroten.

??? note "Fasit – 2.8.18"

    Vi ganger med konjugatet.

    For den første grensen får vi

    \[
    \sqrt{x^2+3x}-x
    =\frac{3x}{\sqrt{x^2+3x}+x}
    =\frac{3}{\sqrt{1+3/x}+1}.
    \]

    Grensen er \(3/2\).

    For den andre grensen må vi bruke at \(x<0\), slik at \(\sqrt{x^2}=|x|=-x\):

    \[
    \sqrt{x^2+3x}+x
    =-x\sqrt{1+3/x}+x
    =x\left(1-\sqrt{1+3/x}\right).
    \]

    Vi rasjonaliserer:

    \[
    x\left(1-\sqrt{1+3/x}\right)
    =\frac{-3}{1+\sqrt{1+3/x}}.
    \]

    Når \(x\to-\infty\), går dette mot \(-3/2\).

    **Resultat:** \(\underline{\underline{3/2}}\) og \(\underline{\underline{-3/2}}\).

**Oppgave 2.8.19 – definisjonsmengde, grenseverdier og kontinuitet**

La

\[
p(x)=\ln(x^2-5x+6).
\]

a) Bestem definisjonsmengden.

b) Bestem de vertikale asymptotene ved å undersøke relevante ensidige grenseverdier.

c) Bestem nullpunktene.

d) Forklar hvorfor funksjonen er kontinuerlig på hele definisjonsmengden.

??? note "Fasit – 2.8.19"

    Vi faktoriserer uttrykket inne i logaritmen:

    \[
    x^2-5x+6=(x-2)(x-3).
    \]

    Logaritmen krever positivt argument. Derfor er definisjonsmengden

    \[
    D_p=(-\infty,2)\cup(3,\infty).
    \]

    Når \(x\to2^-\), går argumentet mot null gjennom positive verdier, og logaritmen går mot \(-\infty\). Det samme skjer når \(x\to3^+\). De vertikale asymptotene er derfor \(x=2\) og \(x=3\).

    Nullpunktene finnes ved å løse

    \[
    \ln(x^2-5x+6)=0
    \quad\Longleftrightarrow\quad
    x^2-5x+6=1.
    \]

    Dermed får vi \(x=(5\pm\sqrt5)/2\). Begge ligger i definisjonsmengden.

    Polynomuttrykket er kontinuerlig, og logaritmen er kontinuerlig for positive argumenter. Sammensetningen er derfor kontinuerlig på hele definisjonsmengden.

    **Resultat:** \(\underline{\underline{D_p=(-\infty,2)\cup(3,\infty)}}\), asymptoter \(\underline{\underline{x=2,\;x=3}}\), nullpunkter \(\underline{\underline{x=(5\pm\sqrt5)/2}}\).
