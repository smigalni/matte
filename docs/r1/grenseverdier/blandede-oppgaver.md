# 2.8 Blandede oppgaver

Oppgavene er delt etter forventet vanskelighetsgrad. Nivået er veiledende; krevende oppgaver kan kreve flere forklaringer enn regning.

### Grunnleggende

**2.8.1** Finn \(\lim_{x\to2}(3x-1)\).

**2.8.2** Finn de ensidige grenseverdiene for \(f(x)=\begin{cases}x+1,&x<0,\\2x+1,&x\geq0.\end{cases}\).

**2.8.3** Finn den vertikale asymptoten til \(f(x)=\frac{1}{x+4}\).

### Middels

**2.8.4** Bestem \(a\) slik at \(f(x)=\begin{cases}ax+2,&x<1,\\x^2+3,&x\geq1.\end{cases}\) er kontinuerlig i \(x=1\).

**2.8.5** Beregn \(\lim_{x\to4}\frac{x^2-16}{x-4}\), og forklar hvorfor svaret ikke er funksjonsverdien i \(x=4\).

**2.8.6** Finn alle asymptotene til \(f(x)=\frac{2x^2+1}{x^2-9}\).

### Krevende

**2.8.7** La

\[
f(x)=\begin{cases}
x^2+ax,&x<1,\\
bx+2,&x\geq1.
\end{cases}
\]

Bestem sammenhengen mellom \(a\) og \(b\) som gir kontinuitet i \(x=1\). Finn deretter en sammenheng som også gjør de to uttrykkenes stigningstall like ved overgangen. Forklar forskjellen på kravene.

**2.8.8** En rasjonal funksjon har en vertikal asymptote ved \(x=2\) og en horisontal asymptote \(y=-1\). Lag et mulig uttrykk med disse egenskapene, og undersøk ensidige grenseverdier ved den vertikale asymptoten.

### Utfordrende

**2.8.9** En elev hevder: «Hvis telleren og nevneren begge blir null, finnes det ingen grenseverdi.» Lag et moteksempel, løs grenseverdien og forklar hvilken konklusjon eleven burde trekke i stedet.

**2.8.10 – flere fenomener i samme funksjon**

Vi har funksjonen

\[
f_a(x)=\frac{x^2+(a-1)x-a}{x^2-1}.
\]

a) Faktoriser teller og nevner.

b) Undersøk hva som skjer ved \(x=1\) for alle verdier av \(a\).

c) Undersøk hva som skjer ved \(x=-1\). For hvilken verdi av \(a\) får vi et hull i stedet for en vertikal asymptote?

d) Bestem den horisontale asymptoten.

e) Forklar hvorfor det er viktig å undersøke hver kandidat separat, selv om de kommer fra samme nevner.

**2.8.11 – R1 og T-matte: asymptoter og rasjonale ulikheter**

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

??? note "Fasit – blandede oppgaver 2.8"

    **2.8.1:** \(5\).

    **2.8.2:** Begge ensidige grenseverdiene er \(1\).

    **2.8.3:** Vertikal asymptote \(x=-4\).

    **2.8.4:** Kontinuitet gir \(a+2=4\), altså \(a=2\).

    **2.8.5:** Grenseverdien er \(8\). Funksjonen er ikke definert ved \(x=4\).

    **2.8.6:** Vertikale asymptoter \(x=-3\) og \(x=3\), horisontal asymptote \(y=2\).

    **2.8.7:** Kontinuitet gir \(b=a-1\). Like stigningstall gir \(b=a+2\). Kravene kan ikke oppfylles samtidig.

    **2.8.8:** Ett eksempel er \(f(x)=-1+\frac{1}{x-2}\).

    **2.8.9:** For eksempel \(\lim_{x\to1}\frac{x^2-1}{x-1}=2\). Formen \(0/0\) er ubestemt, ikke et svar.

    **2.8.10:** \(f_a(x)=\frac{(x-1)(x+a)}{(x-1)(x+1)}=\frac{x+a}{x+1}\), for \(x\ne-1,1\). Ved \(x=1\) er det alltid et hull med grenseverdi \((a+1)/2\). Ved \(x=-1\) er det vertikal asymptote når \(a\ne1\), og hull når \(a=1\). Horisontal asymptote er \(y=1\).

    **2.8.11:** Vi faktoriserer:

    \[
    f_a(x)=\frac{(x-a)(x+a)}{(x-a)(x-1)}
    =\frac{x+a}{x-1},\qquad x\ne a,\;x\ne1.
    \]

    Den opprinnelige funksjonen er ikke definert for \(x=a\) eller \(x=1\). Når \(x\to a\), får vi

    \[
    \lim_{x\to a}f_a(x)=\frac{2a}{a-1},
    \]

    så grafen har et hull i \(\left(a,\frac{2a}{a-1}\right)\). Siden \(a>1\), er telleren \(x+a\) ulik null ved \(x=1\), og dermed er \(x=1\) en vertikal asymptote. For \(x\to\pm\infty\) går brøken mot 1, så den horisontale asymptoten er \(y=1\).

    For ulikheten ser vi på fortegnene til \(x+a\) og \(x-1\). Siden \(-a<1\), er brøken positiv for \(x\leq-a\) og for \(x>1\), men null ved \(x=-a\). Vi må likevel utelate \(x=a\), der den opprinnelige funksjonen ikke er definert. Løsningen er derfor

    \[
    (-\infty,-a]\cup(1,a)\cup(a,\infty).
    \]

    Det forkortede uttrykket har samme funksjonsverdier som den opprinnelige funksjonen der begge er definert, men forkortingen fyller ikke inn de to punktene som manglet i den opprinnelige definisjonsmengden.

    **Resultat:** \(\underline{\underline{b=a-1}}\) for kontinuitet i oppgave 2.8.7.

