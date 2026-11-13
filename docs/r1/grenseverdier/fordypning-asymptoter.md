# Fordypning – når er det faktisk en asymptote?

I arbeidet med rasjonale funksjoner er det lett å trekke en for rask konklusjon: Hvis nevneren blir null for (x=a), må (x=a) være en vertikal asymptote. Det stemmer ikke.

At nevneren blir null, betyr bare at (a) er en **kandidat** vi må undersøke. Grafen kan ha en vertikal asymptote, men den kan også ha et hull.

## En systematisk kontroll

Når du undersøker om (x=a) er en vertikal asymptote:

1. Finn hvilke (x)-verdier som gjør den opprinnelige nevneren lik null. Dette er kandidater.
2. Faktoriser teller og nevner så langt det lar seg gjøre.
3. Forkort felles faktorer, men husk at forkortingen bare gjelder for (x)-verdier der den opprinnelige funksjonen er definert.
4. Undersøk uttrykket som står igjen når (x) nærmer seg kandidaten fra venstre og høyre.
5. Hvis minst én av de ensidige grenseverdiene går mot (+infty) eller (-infty), har grafen en vertikal asymptote der. Hvis grenseverdien er endelig, har vi ikke en vertikal asymptote.

**Viktig:** Selv om både teller og nevner blir null, kan vi ikke konkludere. Det kan bli et hull, eller en vertikal asymptote.

## To eksempler som ser like ut – men ikke er det

### Eksempel A – et hull

Vi undersøker

\[
f(x)=\frac{x^2-4}{x-2}.
\]

Nevneren blir null når (x=2). Vi faktoriserer:

\[
f(x)=\frac{(x-2)(x+2)}{x-2}=x+2,\qquad x\ne2.
\]

Dermed får vi

\[
\lim_{x\to2^-}f(x)=4
\qquad\text{og}\qquad
\lim_{x\to2^+}f(x)=4.
\]

Grenseverdiene er endelige. Grafen har et **hull** i ((2,4)), ikke en vertikal asymptote.

### Eksempel B – en vertikal asymptote

Vi undersøker

\[
g(x)=\frac{x-2}{(x-2)^2}.
\]

Både teller og nevner blir null når (x=2). Vi forkorter én felles faktor:

\[
g(x)=\frac{1}{x-2},\qquad x\ne2.
\]

Da får vi

\[
\lim_{x\to2^-}g(x)=-\infty
\qquad\text{og}\qquad
\lim_{x\to2^+}g(x)=+\infty.
\]

Grafen har derfor en **vertikal asymptote** (x=2).

## Oppgaver – undersøk kandidatene

For hver oppgave skal du ikke bare finne verdiene som gjør nevneren null. Du skal avgjøre om kandidaten gir et hull, en vertikal asymptote eller ingen av delene. Begrunn med faktorisering og grenseverdier fra begge sider der det er relevant.

!!! question "Oppgave A – kandidaten er ikke alltid en asymptote"

    Vi har funksjonen

    \[
    f(x)=\frac{x^2-9}{x-3}.
    \]

    a) Finn kandidaten til en vertikal asymptote.

    b) Faktoriser og forenkle uttrykket.

    c) Bestem de ensidige grenseverdiene når (x\to3).

    d) Forklar hvorfor (x=3) ikke er en vertikal asymptote.

!!! question "Oppgave B – begge blir null"

    Vi har funksjonen

    \[
    g(x)=\frac{x^2-4}{(x-2)^2}.
    \]

    a) Finn kandidaten.

    b) Faktoriser og forkort uttrykket så langt det er mulig.

    c) Bestem grenseverdien fra venstre og høyre.

    d) Forklar hvorfor det ikke er nok å se at både teller og nevner blir null.

!!! question "Oppgave C – to kandidater, to ulike konklusjoner"

    Vi har funksjonen

    \[
    h(x)=\frac{x^2-1}{x^2-3x+2}.
    \]

    a) Finn alle kandidater til vertikale asymptoter.

    b) Faktoriser teller og nevner.

    c) Undersøk hver kandidat separat.

    d) Oppgi eventuelle hull og vertikale asymptoter.

!!! question "Oppgave D – vurder en påstand"

    En elev sier:

    «Hvis nevneren blir null, har funksjonen en vertikal asymptote. Hvis telleren også blir null, er det alltid et hull.»

    Er påstanden riktig? Bruk minst to konkrete eksempler fra dette arket for å argumentere.

!!! question "Oppgave E – lag selv"

    Lag to rasjonale funksjoner som begge har en nevner som blir null når (x=1):

    - én funksjon som har et hull ved (x=1)
    - én funksjon som har en vertikal asymptote ved (x=1)

    Vis ved faktorisering og grenseverdier at eksemplene dine har de egenskapene du hevder.

!!! question "Oppgave F – krevende: parameter og asymptote"

    Vi har funksjonen

    \[
    p_a(x)=\frac{x^2-4}{x^2-4x+4+a}.
    \]

    a) For hvilke verdier av (a) blir nevneren null for minst én reell (x)-verdi?

    b) Undersøk spesielt (a=0). Finn ut om kandidaten (x=2) gir et hull eller en vertikal asymptote.

    c) Undersøk (a=-4). Finn nullpunktene til nevneren, og avgjør om de gir vertikale asymptoter.

    d) Forklar hvorfor en parameteroppgave krever at vi undersøker både teller og nevner ved hver kandidat.

## Fasit og løsningsskisser

Fasitene står samlet etter oppgavene. I oppgaver der eleven skal lage egne eksempler, finnes det flere riktige svar.

**Oppgave A**

\[
f(x)=\frac{(x-3)(x+3)}{x-3}=x+3,\qquad x\ne3.
\]

Begge ensidige grenseverdiene er 6. Det er et hull i ((3,6)), ikke en vertikal asymptote.

**Oppgave B**

\[
g(x)=\frac{(x-2)(x+2)}{(x-2)^2}
=\frac{x+2}{x-2},\qquad x\ne2.
\]

Når (x\to2^-), går funksjonen mot (-\infty). Når (x\to2^+), går den mot (+\infty). Dermed er (x=2) en vertikal asymptote, selv om både teller og nevner i det opprinnelige uttrykket blir null.

**Oppgave C**

\[
h(x)=\frac{(x-1)(x+1)}{(x-1)(x-2)}
=\frac{x+1}{x-2},\qquad x\ne1,2.
\]

- Ved (x=1) er grenseverdien (-2). Dette gir et hull i ((1,-2)).
- Ved (x=2) går funksjonen mot uendelig i absoluttverdi. Dette gir en vertikal asymptote (x=2).

**Oppgave D**

Påstanden er feil i begge deler. Oppgave A viser at nevner lik null kan gi et hull. Oppgave B viser at både teller og nevner lik null også kan gi en vertikal asymptote.

**Oppgave E**

Mulige eksempler:

\[
f(x)=\frac{x^2-1}{x-1}=x+1,\qquad x\ne1
\]

gir et hull ved (x=1), mens

\[
g(x)=\frac{1}{x-1}
\]

gir en vertikal asymptote (x=1).

**Oppgave F**

Nevneren er

\[
x^2-4x+4+a=(x-2)^2+a.
\]

a) Likningen ((x-2)^2+a=0) har reelle løsninger når (a\leq0).

b) Når (a=0), får vi

\[
p_0(x)=\frac{(x-2)(x+2)}{(x-2)^2}
=\frac{x+2}{x-2},\qquad x\ne2.
\]

Dermed er (x=2) en vertikal asymptote.

c) Når (a=-4), blir nevneren

\[
(x-2)^2-4=(x-4)x.
\]

Da er

\[
p_{-4}(x)=\frac{(x-2)(x+2)}{x(x-4)}.
\]

Nevnerens nullpunkter er (x=0) og (x=4). Telleren er ulik null i begge punktene, så begge gir vertikale asymptoter.

d) Vi må kontrollere hver kandidat. En felles faktor kan forkortes og gi et hull, mens en faktor som står igjen i nevneren kan gi en vertikal asymptote. Grenseverdiene avgjør.
