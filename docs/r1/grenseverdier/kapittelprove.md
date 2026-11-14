# 2.9 Kapittelprøve – grenseverdier og kontinuitet

**Anbefaling:** Bruk Del 1 uten digitale hjelpemidler og Del 2 med digitale hjelpemidler dersom dette passer med vurderingsformen i klassen. Oppgavene skal utfordre elevene til å begrunne framgangsmåter og konklusjoner. Vis mellomregning.

## Del 1 – uten digitale hjelpemidler

**2.P1.1** En funksjon er gitt ved

\[
f(x)=\begin{cases}
x^2+ax,&x<2,\\
5x-2,&x\geq2.
\end{cases}
\]

Bestem \(a\) slik at funksjonen er kontinuerlig i \(x=2\). Vis hvilke tre krav du kontrollerer, og forklar hvorfor det er tilstrekkelig.

**2.P1.2** Beregn

\[
\lim_{x\to3}\frac{x^2-5x+6}{x-3}.
\]

En elev forkorter med \(x-3\) direkte i telleren uten først å faktorisere. Forklar hvorfor metoden er ugyldig, og vis korrekt framgangsmåte.

**2.P1.3** En funksjon har \(\lim_{x\to a^-}f(x)=4\), \(\lim_{x\to a^+}f(x)=4\) og \(f(a)=-2\). Drøft om grenseverdien finnes og om funksjonen er kontinuerlig. Lag en enkel delt forskrift som illustrerer situasjonen.

## Del 2 – med digitale hjelpemidler

**2.P2.1** Undersøk funksjonen

\[
g(x)=\frac{x^2-4x+3}{x^2-5x+6}.
\]

Bestem definisjonsmengden, finn eventuelle hull og asymptoter, og skisser grafen. Bruk algebra til å begrunne resultatene; grafen alene er ikke tilstrekkelig.

**2.P2.2** En modell er definert stykkevis:

\[
h(t)=\begin{cases}
at+4,&t<2,\\
t^2+bt,&t\geq2.
\end{cases}
\]

Bestem alle par \((a,b)\) som gjør \(h\) kontinuerlig i \(t=2\). Vis at betingelsen gir en sammenheng mellom parameterne, og oppgi tre ulike parameterpar som oppfyller kravet.

**2.P2.3** Lag en funksjon med både en vertikal og en skrå asymptote. Bruk et digitalt verktøy til å undersøke grafen, og bruk deretter grenseverdier eller polynomdivisjon til å bevise asymptotene. Forklar hvorfor den numeriske grafen bare er støtte for argumentasjonen.


??? note "Fasit – kapittelprøve 2.9"

    **2.P1.1:** Kontinuitet krever at venstre grenseverdi er lik funksjonsverdien i \(x=2\): \(4+2a=8\). Dermed er \(a=2\). Da er funksjonen definert i punktet, grenseverdien finnes, og den er lik funksjonsverdien.

    **2.P1.2:** Telleren faktoriseres til \((x-2)(x-3)\). Etter forkorting er grenseverdien \(1\).

    **2.P1.3:** Grenseverdien finnes og er \(4\), men funksjonsverdien er \(-2\). Funksjonen er ikke kontinuerlig.

    **2.P2.1:** \(g(x)=\frac{(x-1)(x-3)}{(x-2)(x-3)}=\frac{x-1}{x-2}\), for \(x\ne2,3\). Vertikal asymptote \(x=2\), horisontal asymptote \(y=1\), hull ved \((3,2)\).

    **2.P2.2:** Kontinuitet gir \(2a+4=4+2b\), altså \(a=b\). Tre mulige par er \((0,0)\), \((1,1)\) og \((2,2)\). Det finnes uendelig mange løsninger.

    **2.P2.3:** Ett eksempel er \(f(x)=x+\frac{1}{x-1}\), med vertikal asymptote \(x=1\) og skrå asymptote \(y=x\).

    **Resultat:** \(\underline{\underline{a=2}}\) i oppgave 2.P1.1.
