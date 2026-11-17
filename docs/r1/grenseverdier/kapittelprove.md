# 2.9 Kapittelprøve – grenseverdier og kontinuitet

**Anbefaling:** Bruk Del 1 uten digitale hjelpemidler og Del 2 med digitale hjelpemidler dersom dette passer med vurderingsformen i klassen. Oppgavene skal utfordre elevene til å begrunne framgangsmåter og konklusjoner. Vis mellomregning.

## Del 1 – uten digitale hjelpemidler

!!! question "Oppgave 2.9.1"

    En funksjon er gitt ved

    \[
    f(x)=\begin{cases}
    x^2+ax,&x<2,\\
    5x-2,&x\geq2.
    \end{cases}
    \]

    Bestem \(a\) slik at funksjonen er kontinuerlig i \(x=2\). Vis hvilke tre krav du kontrollerer, og forklar hvorfor det er tilstrekkelig.

??? note "Fasit – 2.9.1"

    Kontinuitet krever at venstre grenseverdi er lik funksjonsverdien i \(x=2\): \(4+2a=8\). Dermed er \(a=2\). Da er funksjonen definert i punktet, grenseverdien finnes, og den er lik funksjonsverdien.

    **Resultat:** \(\underline{\underline{a=2}}\)

!!! question "Oppgave 2.9.2"

    Beregn

    \[
    \lim\limits_{x\to3}\dfrac{x^2-5x+6}{x-3}.
    \]

    En elev forkorter med \(x-3\) direkte i telleren uten først å faktorisere. Forklar hvorfor metoden er ugyldig, og vis korrekt framgangsmåte.

??? note "Fasit – 2.9.2"

    Telleren faktoriseres til \((x-2)(x-3)\). Etter forkorting er grenseverdien \(1\).

    **Resultat:** \(\underline{\underline{1}}\)

!!! question "Oppgave 2.9.3"

    En funksjon har \(\lim\limits_{x\to a^-}f(x)=4\), \(\lim\limits_{x\to a^+}f(x)=4\) og \(f(a)=-2\). Drøft om grenseverdien finnes og om funksjonen er kontinuerlig. Lag en enkel delt forskrift som illustrerer situasjonen.

??? note "Fasit – 2.9.3"

    Grenseverdien finnes og er \(4\), men funksjonsverdien er \(-2\). Funksjonen er ikke kontinuerlig.

    **Resultat:** \(\underline{\underline{\lim\limits_{x\to a}f(x)=4,\;f(a)=-2}}\)

## Del 2 – med digitale hjelpemidler

!!! question "Oppgave 2.9.4"

    Undersøk funksjonen

    \[
    g(x)=\dfrac{x^2-4x+3}{x^2-5x+6}.
    \]

    Bestem definisjonsmengden, finn eventuelle hull og asymptoter, og skisser grafen. Bruk algebra til å begrunne resultatene; grafen alene er ikke tilstrekkelig.

??? note "Fasit – 2.9.4"

    \(g(x)=\frac{(x-1)(x-3)}{(x-2)(x-3)}=\frac{x-1}{x-2}\), for \(x\ne2,3\). Vertikal asymptote \(x=2\), horisontal asymptote \(y=1\), hull ved \((3,2)\).

    **Resultat:** \(\underline{\underline{x=2,\;y=1,\;(3,2)}}\)

!!! question "Oppgave 2.9.5"

    En modell er definert stykkevis:

    \[
    h(t)=\begin{cases}
    at+4,&t<2,\\
    t^2+bt,&t\geq2.
    \end{cases}
    \]

    Bestem alle par \((a,b)\) som gjør \(h\) kontinuerlig i \(t=2\). Vis at betingelsen gir en sammenheng mellom parameterne, og oppgi tre ulike parameterpar som oppfyller kravet.

??? note "Fasit – 2.9.5"

    Kontinuitet gir \(2a+4=4+2b\), altså \(a=b\). Tre mulige par er \((0,0)\), \((1,1)\) og \((2,2)\). Det finnes uendelig mange løsninger.

    **Resultat:** \(\underline{\underline{a=b}}\)

!!! question "Oppgave 2.9.6"

    Lag en funksjon med både en vertikal og en skrå asymptote. Bruk et digitalt verktøy til å undersøke grafen, og bruk deretter grenseverdier eller polynomdivisjon til å bevise asymptotene. Forklar hvorfor den numeriske grafen bare er støtte for argumentasjonen.

??? note "Fasit – 2.9.6"

    Ett eksempel er \(f(x)=x+\frac{1}{x-1}\), med vertikal asymptote \(x=1\) og skrå asymptote \(y=x\).
    
    **Resultat:** \(\underline{\underline{x=1,\;y=x}}\).


!!! question "Oppgave 2.9.7 – polynomdivisjon og skrå asymptote"

    Vi har funksjonen

    \[
    f(x)=\dfrac{x^2+1}{x-1}.
    \]

    a) Utfør polynomdivisjonen, og skriv funksjonen som et polynom pluss en brøk.

    b) Bestem den vertikale asymptoten.

    c) Bestem den skrå asymptoten, og forklar hvorfor restleddet ikke påvirker asymptoten når \(x\) går mot uendelig.

??? note "Fasit – 2.9.7"

    Polynomdivisjonen gir

    \[
    f(x)=x+1+\dfrac{2}{x-1}.
    \]

    Nevneren blir null ved \(x=1\), og telleren er ikke null der. Dermed er \(x=1\) vertikal asymptote. Restleddet går mot null når \(x\to\pm\infty\), så den skrå asymptoten er \(y=x+1\).

    **Resultat:** \(\underline{\underline{x=1,\;y=x+1}}\)
!!! question "Oppgave 2.9.8 – les en graf og vurder kontinuitet"

    En funksjon er gitt ved

    \[
    g(x)=
    \begin{cases}
    x+2, & x<0,\\
    x^2+1, & x\geq0.
    \end{cases}
    \]

    a) Bestem venstre grenseverdi når \(x\to0\).

    b) Bestem høyre grenseverdi og funksjonsverdien \(g(0)\).

    c) Finnes den tosidige grenseverdien? Er funksjonen kontinuerlig i \(x=0\)?

    d) Skisser grafen, og marker åpen og fylt sirkel. Forklar hva sirklene viser.

??? note "Fasit – 2.9.8"

    Venstre grenseverdi er \(2\). Høyre grenseverdi er \(1\), og \(g(0)=1\). De ensidige grenseverdiene er ulike, så den tosidige grenseverdien finnes ikke. Funksjonen er ikke kontinuerlig i \(x=0\). Grafen har en åpen sirkel i \((0,2)\) og en fylt sirkel i \((0,1)\).

    **Resultat:** \(\underline{\underline{\lim\limits_{x\to0^-}g(x)=2,\;\lim\limits_{x\to0^+}g(x)=1,\;g(0)=1}}\)
!!! question "Oppgave 2.9.9 – en asymptote kan krysses"

    Vi har funksjonen

    \[
    h(x)=\dfrac{2x^2+x}{x^2+1}.
    \]

    a) Bestem den horisontale asymptoten.

    b) Undersøk om grafen krysser asymptoten. Finn eventuelt skjæringspunktet.

    c) Forklar hvorfor det ikke er noe problem at grafen krysser en horisontal asymptote.

??? note "Fasit – 2.9.9"

    Teller og nevner har samme grad, så den horisontale asymptoten er \(y=2\). Vi setter \(h(x)=2\):

    \[
    2x^2+x=2(x^2+1)
    \quad\Longrightarrow\quad
    x=2.
    \]

    Grafen krysser asymptoten i \((2,2)\). En horisontal asymptote beskriver grenseverdien når \(x\) går mot uendelig, og grafen kan derfor krysse linjen ved en endelig x-verdi.

    **Resultat:** \(\underline{\underline{y=2,\;(2,2)}}\)