# 3. Derivasjon

## Læringsmål

Når du har arbeidet med kapittelet, skal du kunne:

- tolke den deriverte som momentan vekstfart og tangentens stigningstall
- bruke derivasjonsreglene for vanlige funksjoner
- bruke kjerneregelen, produktregelen og kvotientregelen
- avgjøre om en funksjon er deriverbar i et punkt
- bruke definisjonen av den deriverte i enkle situasjoner
- tilnærme deriverte numerisk og vurdere feilkilder
- bruke derivasjon til å løse problemer og tolke resultatene
- bruke programmering til å undersøke vekstfart og deriverte

Kapittelet bygger videre på 3.1 **Vekstfart og tangent**. Behold skillet mellom gjennomsnittlig vekstfart på et intervall og momentan vekstfart i ett punkt.

## 3.2 Vanlige derivasjonsregler

Derivasjonsreglene gjør det mulig å finne den deriverte uten å bruke definisjonen hver gang.

### Regler du må kunne

\[
(c)'=0,\qquad (x^n)'=nx^{n-1}
\]

\[
(cf(x))'=cf'(x),\qquad (f(x)+g(x))'=f'(x)+g'(x)
\]

I tillegg gjelder

\[
(e^x)'=e^x,\qquad (\ln x)'=\frac1x\quad(x>0).
\]

### Eksempel – deriver ledd for ledd

La \(f(x)=3x^4-2x^2+5x-7\).

\[
f'(x)=12x^3-4x+5.
\]

Konstantleddet \(-7\) blir 0. Hvert potensledd deriveres for seg.

### Eksempel – eksponential- og logaritmefunksjon

Hvis \(g(x)=4e^x+3\ln x\), er

\[
g'(x)=4e^x+\frac3x,\qquad x>0.
\]

Husk at logaritmeleddet begrenser definisjonsmengden.

### Oppgaver 3.2

**3.2.1** Deriver \(f(x)=5x^4-3x^3+2x-8\).

**3.2.2** Deriver \(g(x)=2e^x-5\ln x\), og oppgi hvor den deriverte er definert.

**3.2.3** En elev deriverer \(h(x)=7x^3+4\) til \(h'(x)=7x^2+4\). Finn feilen og forklar regelen som skal brukes.

**3.2.4** Bestem en funksjon \(f(x)=ax^3+bx^2+cx+d\) når \(f'(x)=6x^2-4x+3\) og \(f(0)=5\). Forklar hvilke koeffisienter som kan bestemmes entydig.

## 3.3 Kjerneregelen

Kjerneregelen bruker vi når en funksjon er satt sammen av en ytre funksjon og en indre funksjon. Hvis

\[
y=f(g(x)),
\]

så er

\[
y'=f'(g(x))\cdot g'(x).
\]

Med ord: Deriver den ytre funksjonen, behold den indre funksjonen, og gang med den deriverte av den indre funksjonen.

!!! example "Eksempel – bruk kjerneregelen"
    La \(f(x)=(3x^2+1)^4\).

    Den ytre funksjonen er «opphøyd i fjerde», og den indre er \(3x^2+1\).

    \[
    f'(x)=4(3x^2+1)^3\cdot6x
    =24x(3x^2+1)^3.
    \]

    En vanlig feil er å glemme faktoren \(6x\).

### Oppgaver 3.3

**3.3.1** Deriver \(f(x)=(2x-5)^6\).

**3.3.2** Deriver \(g(x)=\sqrt{4x^2+1}\). Skriv svaret med potensform eller brøk.

**3.3.3** Deriver \(h(x)=e^{x^2-3x}\).

**3.3.4** Bestem \(a\) slik at tangenten til \(f(x)=(x^2+a)^3\) ved \(x=1\) har stigningstall 24. Vis at du må bruke kjerneregelen, og undersøk om løsningen er entydig.

## 3.4 Produktregelen og kvotientregelen

Når to funksjoner multipliseres, kan vi ikke bare derivere hver faktor og gange resultatene. Produktregelen er

\[
(fg)'=f'g+fg'.
\]

Når én funksjon deles på en annen, bruker vi kvotientregelen:

\[
\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2},\qquad g(x)\ne0.
\]

Legg merke til rekkefølgen i telleren: «derivert av teller ganger nevner, minus teller ganger derivert av nevner».

!!! example "Eksempel – produktregel"
    La \(f(x)=(x^2+1)e^x\). Da er

    \[
    f'(x)=2xe^x+(x^2+1)e^x
    =e^x(x^2+2x+1).
    \]

!!! example "Eksempel – kvotientregel"
    La \(g(x)=\frac{x+1}{x-2}\). Da er

    \[
    g'(x)=\frac{1\cdot(x-2)-(x+1)\cdot1}{(x-2)^2}
    =\frac{-3}{(x-2)^2}.
    \]

    Den deriverte er definert for \(x\ne2\).

### Oppgaver 3.4

**3.4.1** Deriver \(f(x)=(x^2-3)(2x+1)\) med produktregelen.

**3.4.2** Deriver \(g(x)=\frac{2x+1}{x^2+1}\). Oppgi eventuelle begrensninger.

**3.4.3** Deriver \(h(x)=x^2\ln x\), og oppgi definisjonsmengden.

**3.4.4** En elev påstår at \((fg)'=f'g'\). Bruk et konkret eksempel for å vise at påstanden er feil, og forklar den riktige regelen.

## 3.5 Deriverbarhet (R1)

En funksjon er deriverbar i \(x=a\) dersom den momentane vekstfarten finnes der. Derivasjon kan uttrykkes som grenseverdien

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h,
\]

forutsatt at grenseverdien finnes.

Deriverbarhet innebærer kontinuitet, men kontinuitet innebærer ikke nødvendigvis deriverbarhet. En funksjon kan være sammenhengende uten å ha én entydig tangentretning, for eksempel \(f(x)=|x|\) i \(x=0\).

### Slik undersøker du en delt funksjon

For å undersøke deriverbarhet ved et overgangspunkt:

1. Kontroller først at funksjonen er kontinuerlig.
2. Finn den deriverte fra venstre og høyre, eller bruk definisjonen.
3. Sammenlign de ensidige stigningstallene. De må være like.

!!! example "Eksempel – kontinuerlig, men ikke deriverbar"
    La \(f(x)=|x|\). For \(x<0\) er \(f(x)=-x\), med stigningstall \(-1\). For \(x>0\) er \(f(x)=x\), med stigningstall \(1\).

    Funksjonen er kontinuerlig i 0, men stigningstallene fra venstre og høyre er ulike. Derfor er den ikke deriverbar i 0.

### Oppgaver 3.5

**3.5.1** Forklar hvorfor \(f(x)=|x|\) er kontinuerlig, men ikke deriverbar i \(x=0\).

**3.5.2** Undersøk om \(f(x)=\begin{cases}x^2,&x<1,\\2x-1,&x\geq1.\end{cases}\) er kontinuerlig og deriverbar i \(x=1\).

**3.5.3** Bestem \(a\) slik at \(f(x)=\begin{cases}ax+2,&x<1,\\x^2+bx,&x\geq1.\end{cases}\) blir kontinuerlig i \(x=1\). Undersøk deretter hvilke ekstra krav som må gjelde for at funksjonen skal være deriverbar der.

## 3.6 Den deriverte definert ved grenseverdi (R1)

Definisjonen av den deriverte forteller hva derivasjon betyr, ikke bare hvordan vi regner med reglene. Brøken

\[
\frac{f(a+h)-f(a)}h
\]

er stigningstallet til en sekant. Når \(h\) nærmer seg null, nærmer sekanten seg tangenten, dersom grenseverdien finnes.

### Eksempel – finn den deriverte til \(f(x)=x^2\)

\[
\begin{aligned}
f'(x)&=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}\\
&=\lim_{h\to0}\frac{x^2+2xh+h^2-x^2}{h}\\
&=\lim_{h\to0}(2x+h)=2x.
\end{aligned}
\]

Nøkkelsteget er å faktorisere eller forkorte \(h\) etter at telleren er forenklet. Vi setter ikke \(h=0\) før forkortingen.

### Oppgaver 3.6

**3.6.1** Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=3x+2\).

**3.6.2** Bruk definisjonen til å finne \(f'(x)\) når \(f(x)=x^2+2x\).

**3.6.3** En elev setter \(h=0\) i differansekvotienten før forenkling. Forklar hvorfor dette gir et problem, og vis riktig framgangsmåte for \(f(x)=x^2\).

## 3.7 Numerisk derivasjon

Numerisk derivasjon betyr å tilnærme den deriverte ved hjelp av funksjonsverdier. En vanlig tilnærming er

\[
f'(x)\approx\frac{f(x+h)-f(x)}h
\]

for liten \(h\). Dette er en differansekvotient, og den gir vanligvis ikke den eksakte deriverte. Mindre \(h\) gir ikke alltid bedre numerisk svar, fordi avrundingsfeil kan få større betydning.

En symmetrisk tilnærming er

\[
f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}.
\]

### Oppgaver 3.7

**3.7.1** Bruk differansekvotienten til å tilnærme den deriverte til \(f(x)=x^2\) i \(x=2\) med \(h=0,1\) og \(h=0,01\). Sammenlign med den eksakte verdien.

**3.7.2** Forklar hvorfor en svært liten verdi av \(h\) kan gi numeriske problemer i et dataprogram.

**3.7.3** Bruk et digitalt verktøy til å sammenligne den ensidige og symmetriske tilnærmingen for \(f(x)=\ln x\) i \(x=1\). Undersøk flere verdier av \(h\), og kommenter nøyaktigheten.

## 3.8 Programmering: deriverte og vekstfart

### Oppgave 3.8.1 – numerisk tilnærming

Skriv en funksjon i Python som tar inn en funksjon, et punkt \(x\) og en liten verdi \(h\), og beregner

\[
\frac{f(x+h)-f(x)}h.
\]

Test på \(f(x)=x^2\) ved \(x=3\). Sammenlign resultatet for flere verdier av \(h\) med den eksakte deriverte.

### Oppgave 3.8.2 – sammenlign to metoder

Utvid programmet til også å beregne den symmetriske tilnærmingen. Lag en tabell over resultatene og forklar hvilken metode som er mest nøyaktig i testene dine. Ikke konkluder bare fra én enkelt verdi.

### Oppgave 3.8.3 – bevegelse

La \(s(t)=t^3-6t^2+9t\) beskrive posisjon i meter etter \(t\) sekunder i et relevant tidsintervall. Skriv et program som beregner tilnærmet fart ved flere tidspunkter. Bruk deretter den deriverte til å finne den eksakte farten, og sammenlign. Drøft hva fortegnet på den deriverte betyr i modellen.

## 3.9 Blandede oppgaver

### Grønt nivå – grunnleggende

**3.9.1** Deriver \(f(x)=4x^3-2x+1\).

**3.9.2** Finn tangentens stigningstall til \(f(x)=x^2+1\) ved \(x=2\).

**3.9.3** Deriver \(g(x)=(2x+1)^3\).

### Gult nivå – anvendelse

**3.9.4** Finn tangentlikningen til \(f(x)=x^3-2x\) ved \(x=1\). Vis først hvordan du finner punktet og stigningstallet.

**3.9.5** Deriver \(f(x)=\frac{x^2+1}{x-1}\), og bestem hvor den deriverte er definert.

**3.9.6** Undersøk om \(f(x)=\begin{cases}x^2,&x<2,\\4x-4,&x\geq2.\end{cases}\) er kontinuerlig og deriverbar i \(x=2\).

### Rødt nivå – utfordring

**3.9.7** La \(f(x)=x^3+ax^2+bx\). Bestem \(a\) og \(b\) slik at grafen har en horisontal tangent ved \(x=1\), og tangentens stigningstall ved \(x=-1\) er 6. Undersøk om betingelsene gir én entydig løsning.

**3.9.8** En funksjon \(f(x)=(x^2+a)e^{bx}\) har \(f(0)=2\) og \(f'(0)=3\). Bestem \(a\) og \(b\), og kontroller svaret ved derivasjon.

**3.9.9** Konstruer en delt funksjon som er kontinuerlig, men ikke deriverbar i overgangspunktet. Lag deretter en annen delt funksjon som er deriverbar i overgangspunktet. Begrunn begge konstruksjonene.

## 3.10 Kapittelprøve – derivasjon

**Anbefaling:** Del 1 kan gjennomføres uten digitale hjelpemidler og Del 2 med digitale hjelpemidler, hvis dette samsvarer med vurderingsformen. Oppgavene er laget for høyt nivå. Vis metodevalg, mellomregning og tolkning.

### Del 1 – uten digitale hjelpemidler

**3.P1.1** Funksjonen \(f(x)=x^3+ax^2+bx\) har et stasjonært punkt ved \(x=1\), og tangenten ved \(x=-1\) har stigningstall 5. Bestem \(a\) og \(b\). Undersøk om punktet ved \(x=1\) er et toppunkt, bunnpunkt eller noe annet.

**3.P1.2** La \(g(x)=(x^2-1)e^{2x}\). Finn \(g'(x)\), bestem alle punkter der tangenten er horisontal, og forklar hvordan du vet at du har funnet alle løsningene.

**3.P1.3** En delt funksjon er gitt ved
\[
h(x)=\begin{cases}
ax+1,&x<2,\\
x^2+b,&x\geq2.
\end{cases}
\]
Bestem betingelsen mellom \(a\) og \(b\) for kontinuitet ved \(x=2\). Bestem deretter betingelsen for deriverbarhet, og avgjør om begge kravene kan oppfylles samtidig.

### Del 2 – med digitale hjelpemidler

**3.P2.1** En modell for høyde er \(s(t)=t^3-6t^2+9t+2\), for \(0\leq t\leq5\). Bruk algebra og et digitalt verktøy til å undersøke når objektet står stille, når det beveger seg oppover eller nedover, og hvilke lokale ekstremalverdier det har i intervallet. Forklar hvordan den deriverte knytter sammen alle delene av svaret.

**3.P2.2** En funksjon \(f(x)=(x^2+a)e^{bx}\) går gjennom punktet \((0,3)\), og tangenten i dette punktet har stigningstall 2. Bestem \(a\) og \(b\). Bruk deretter et digitalt verktøy til å undersøke grafen, men begrunn parametrene analytisk.

**3.P2.3** Undersøk numerisk og analytisk hvor godt differansekvotienten til \(f(x)=\ln x\) tilnærmer den deriverte ved \(x=1\). Sammenlign minst fire verdier av \(h\), forklar eventuelle avvik og bruk den eksakte deriverte som kontroll.

## Fasit og løsningsskisser

- **3.2.1:** \(20x^3-9x^2+2\).
- **3.2.2:** \(2e^x-5/x\), for \(x>0\).
- **3.2.3:** Konstantleddet blir 0, så svaret er \(21x^2\).
- **3.2.4:** \(a=2\), \(b=-2\), \(c=3\), \(d=5\).
- **3.3.1:** \(12(2x-5)^5\).
- **3.3.2:** \(4x/\sqrt{4x^2+1}\).
- **3.3.3:** \((2x-3)e^{x^2-3x}\).
- **3.4.1:** \(6x^2-6x-3\).
- **3.4.2:** \((2-2x^2-2x)/(x^2+1)^2\); definert for alle reelle x.
- **3.4.3:** \(2x\ln x+x\), for \(x>0\).
- **3.5.2:** Kontinuerlig i 1; venstrederivert 2 og høyrederivert 2, altså deriverbar.
- **3.6.1:** \(f'(x)=3\).
- **3.6.2:** \(f'(x)=2x+2\).
- **3.7.1:** Eksakt verdi er 4; framoverdifferanse gir omtrent 4,1 for \(h=0,1\) og 4,01 for \(h=0,01\).
- **3.9.1:** \(12x^2-2\).
- **3.9.2:** 4.
- **3.9.3:** \(6(2x+1)^2\).
- **3.9.4:** \(f'(x)=3x^2-2\), ved 1 er stigningstallet 1 og punktet \((1,-1)\). Tangent: \(y=x-2\).
- **3.9.5:** \(f'(x)=\frac{x^2-2x-1}{(x-1)^2}\), for \(x\ne1\).
- **3.9.6:** Kontinuerlig, men ikke deriverbar: venstrederivert 4, høyrederivert 4? Kontroller overgangsleddet: venstrederivert \(2x\) gir 4 og høyrederivert gir 4. Dermed er funksjonen deriverbar i 2.
- **3.P1.1:** \(f'(x)=3x^2+2ax+b\). Betingelsene gir \(3+2a+b=0\) og \(3-2a+b=5\). Løsning: \(a=-1/2\), \(b=-2\). Klassifiser punktet ved å undersøke fortegnet til \(f''(1)\).
- **3.P1.2:** \(g'(x)=e^{2x}(2x+2x^2-2)\). Horisontale tangenter finnes når \(x^2+x-1=0\), altså \(x=(-1\pm\sqrt5)/2\).
- **3.P1.3:** Kontinuitet krever \(2a+1=4+b\). Deriverbarhet krever \(a=4\). Kombinert gir \(b=5\).
- **3.P2.1:** \(s'(t)=3(t-1)(t-3)\). Står stille ved \(t=1,3\); fortegnet bestemmer opp-/nedoverbevegelse. Kontroller endepunkter og kritiske punkter for ekstremalverdier.
- **3.P2.2:** \(a=3\) fra funksjonsverdien, og \(f'(0)=2b=2\), så \(b=1\).
- **3.P2.3:** \(f'(1)=1\). Numeriske verdier bør nærme seg 1 når \(h\) blir mindre, men avrunding kan etter hvert påvirke resultatet.

**Viktig faglig kontroll før bruk:** I oppgave 3.9.6 er funksjonen både kontinuerlig og deriverbar ved \(x=2\), siden både funksjonsverdiene og stigningstallene samsvarer.
