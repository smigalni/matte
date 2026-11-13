# Anvendelser av grenseverdier og diskontinuitet

Grenseverdier er nyttige når vi vil beskrive hva en størrelse nærmer seg. Kontinuitet og diskontinuitet kan også brukes til å undersøke modeller der en verdi endrer seg brått.

## Eksempel – betaling for parkering

En parkeringsplass tar 30 kr for parkering i inntil én time, 60 kr for mer enn én og inntil to timer, og 90 kr for mer enn to og inntil tre timer.

La \(P(t)\) være prisen i kroner når bilen har stått parkert i \(t\) timer:

\[
P(t)=
\begin{cases}
30, & 0<t\leq1,\\
60, & 1<t\leq2,\\
90, & 2<t\leq3.
\end{cases}
\]

Når \(t\) nærmer seg 1 time fra venstre, er prisen 30 kr. Når \(t\) nærmer seg 1 time fra høyre, er prisen 60 kr:

\[
\lim_{t\to1^-}P(t)=30,\qquad
\lim_{t\to1^+}P(t)=60.
\]

De ensidige grenseverdiene er ulike. Modellen er derfor diskontinuerlig ved \(t=1\). Det beskriver et prishopp: En liten økning i parkeringstiden kan gi en større endring i prisen.

## Oppgaver

!!! question "Oppgave 1 – undersøk prishoppet"

    Bruk parkeringsmodellen ovenfor.

    a) Bestem \(P(1)\), \(P(1{,}5)\) og \(P(2)\).

    b) Bestem de ensidige grenseverdiene når \(t\to1\) og når \(t\to2\).

    c) Er modellen kontinuerlig ved \(t=1\) og \(t=2\)? Begrunn ved å sammenligne funksjonsverdien og de ensidige grenseverdiene.

    d) Forklar med egne ord hvorfor en modell med prishopp ikke er kontinuerlig, og hvorfor dette likevel kan være en fornuftig modell.

!!! question "Oppgave 2 – velg en modell"

    En bedrift vurderer to prismodeller for en tjeneste. \(x\) er antall timer tjenesten brukes.

    Modell A:

    \[
    A(x)=
    \begin{cases}
    100, & 0\leq x\leq2,\\
    100+40(x-2), & x>2.
    \end{cases}
    \]

    Modell B:

    \[
    B(x)=
    \begin{cases}
    100, & 0\leq x\leq2,\\
    180+40(x-2), & x>2.
    \end{cases}
    \]

    a) Undersøk om hver modell er kontinuerlig ved \(x=2\).

    b) Sammenlign prisene rett før og rett etter to timer.

    c) Hvilken modell gir et prishopp? Hvor stort er hoppet?

    d) Drøft hvilken modell som er mest forutsigbar for kunden. Begrunn med matematikk og ikke bare en mening.

!!! question "Oppgave 3 – grenseverdi i en beregning"

    I en matematisk modell inngår uttrykket

    \[
    Q(x)=\frac{x^2-16}{x-4},\qquad x\ne4.
    \]

    a) Bestem \(\lim_{x\to4}Q(x)\).

    b) Forklar hvorfor \(Q(4)\) ikke er definert, selv om grenseverdien finnes.

    c) En elev hevder at modellen må være ugyldig fordi uttrykket ikke kan beregnes når \(x=4\). Forklar hvorfor dette ikke nødvendigvis følger.

    d) Gi et eksempel på en situasjon der det kan være nyttig å vite hvilken verdi en modell nærmer seg, selv om modellen ikke er definert akkurat i grensepunktet.

## Fasit og løsningsskisser

**Oppgave 1**

a) \(P(1)=30\), \(P(1{,}5)=60\) og \(P(2)=60\).

b) Ved \(t=1\):

\[
\lim_{t\to1^-}P(t)=30,\qquad
\lim_{t\to1^+}P(t)=60.
\]

Ved \(t=2\):

\[
\lim_{t\to2^-}P(t)=60,\qquad
\lim_{t\to2^+}P(t)=90.
\]

c) Modellen er diskontinuerlig ved begge tidspunktene fordi de ensidige grenseverdiene er ulike.

d) Modellen har sprang ved grensepunktene. Den kan likevel være praktisk fordi parkeringsplassen faktisk tar betalt per påbegynte tidsintervall.

**Oppgave 2**

a) For modell A er venstre grenseverdi 100 og høyre grenseverdi også 100. Dessuten er \(A(2)=100\). Modellen er kontinuerlig.

For modell B er venstre grenseverdi 100, mens høyre grenseverdi er 180. Modellen er diskontinuerlig.

b) Modell A endrer seg gradvis etter to timer. Modell B hopper fra 100 kr til 180 kr rett etter to timer.

c) Modell B har et prishopp på 80 kr.

d) Modell A er mer forutsigbar fordi prisen ikke hopper brått ved to timer. Eleven må begrunne vurderingen med grenseverdiene og prisforskjellen.

**Oppgave 3**

a) Vi faktoriserer:

\[
Q(x)=\frac{(x-4)(x+4)}{x-4}=x+4,\qquad x\ne4.
\]

Dermed er

\[
\lim_{x\to4}Q(x)=8.
\]

b) Den opprinnelige definisjonen har \(x-4\) i nevneren, så \(Q(4)\) er ikke definert.

c) En grenseverdi beskriver hva funksjonen nærmer seg. At funksjonen mangler en verdi i ett punkt, hindrer ikke at grenseverdien finnes.

d) Flere svar kan godtas. Eleven bør forklare at en grenseverdi kan beskrive en forventet eller tilnærmet verdi nær en grense, selv om selve punktet ikke inngår i modellen.
