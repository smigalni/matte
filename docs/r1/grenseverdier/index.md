# 2. Grenseverdier og kontinuitet

## Læringsmål

Når du har arbeidet med kapittelet, skal du kunne:

- kjenne igjen sentrale funksjonstyper og bruke egenskapene deres
- tolke og arbeide med funksjoner som har delte forskrifter
- forklare og beregne ensidige grenseverdier og grenseverdier
- avgjøre om en funksjon er kontinuerlig i et punkt
- beregne grenseverdier ved blant annet faktorisering og forkorting
- bestemme vertikale, horisontale og skrå asymptoter
- bruke digitale verktøy og programmering til å undersøke funksjoner

## 2.1 Repetisjon av funksjonstyper

Før vi arbeider med grenseverdier, repeterer vi hva som kjennetegner funksjonstypene. Det er nyttig å kunne lese forskriften, kjenne igjen grafens form og vite hvilke regler som gjelder.

| Funksjonstype | Eksempel | Kjennetegn |
|---|---|---|
| Konstant | \(f(x)=4\) | Horisontal graf. Verdien endrer seg ikke. |
| Lineær | \(f(x)=2x-3\) | Rett linje med stigningstall 2. |
| Andregradsfunksjon | \(f(x)=x^2-4x+3\) | Parabel. Topp- eller bunnpunkt finnes ved symmetri eller derivasjon. |
| Potensfunksjon | \(f(x)=x^3\) | Formen avhenger av eksponenten. |
| Eksponentialfunksjon | \(f(x)=2^x\) | Positiv graf som vokser når grunntallet er større enn 1. |
| Logaritmefunksjon | \(f(x)=\ln x\) | Definert for \(x>0\). |
| Rasjonal funksjon | \(f(x)=\frac{1}{x-2}\) | Brøk av polynomer; nevneren kan gi hull i definisjonsmengden eller asymptoter. |
| Absoluttverdi | \(f(x)=|x|\) | V-formet graf; uttrykket kan skrives stykkevis. |

### Dette må du huske

- For en brøk må nevneren være ulik null.
- For \(\ln x\) må \(x>0\).
- En andregradsfunksjon har graf som er en parabel.
- En absoluttverdi kan skrives med to forskrifter: \(|x|=x\) når \(x\geq 0\), og \(|x|=-x\) når \(x<0\).
- En graf kan nærme seg en verdi selv om funksjonen ikke er definert i punktet.

Det er ingen egne oppgaver i denne repetisjonen. Bruk tabellen som oppslagsverk når du arbeider videre.

## 2.2 Funksjoner med delte forskrifter

En funksjon med delt forskrift bruker ulike uttrykk på ulike deler av definisjonsmengden. Vi må derfor alltid undersøke hvilken forskrift som gjelder på hver side av grensepunktet.

Eksempel:

\[
f(x)=\begin{cases}
x+2, & x<1,\\
x^2, & x\geq 1.
\end{cases}
\]

Når \(x<1\), bruker vi \(x+2\). Når \(x\geq 1\), bruker vi \(x^2\). I punktet \(x=1\) er funksjonsverdien derfor \(f(1)=1\).

**Slik leser du grafen:** En åpen sirkel viser ofte at endepunktet ikke er med i den aktuelle delen. En fylt sirkel viser at punktet er med. Kontroller alltid selve ulikheten i forskriften.

!!! example "Eksempel – finn funksjonsverdien"
    La
    \[
    g(x)=\begin{cases}
    3-x, & x<2,\\
    x^2-1, & x\geq 2.
    \end{cases}
    \]
    Finn \(g(1)\), \(g(2)\) og \(g(3)\).

    - \(g(1)=3-1=2\), fordi \(1<2\).
    - \(g(2)=2^2-1=3\), fordi grensepunktet er med i den andre forskriften.
    - \(g(3)=3^2-1=8\).

    **Svar:** \(g(1)=2\), \(g(2)=3\) og \(g(3)=8\).

### Oppgaver 2.2

**2.2.1** La \(f(x)=\begin{cases}2x+1,&x<3,\\x^2-2,&x\geq3.\end{cases}\) Finn \(f(0)\), \(f(3)\) og \(f(4)\).

**2.2.2** Skriv \(|x-2|\) som en delt forskrift. Forklar hvorfor forskriften skifter ved \(x=2\).

**2.2.3** En funksjon er gitt ved \(g(x)=\begin{cases}ax+1,&x<2,\\x^2-1,&x\geq2.\end{cases}\). Bestem \(a\) slik at de to uttrykkene gir samme grenseverdi ved \(x=2\). Er funksjonen da nødvendigvis kontinuerlig? Begrunn.

**2.2.4** Lag en delt forskrift som har \(f(0)=4\), men der venstre grenseverdi når \(x\to0\) er 2 og høyre grenseverdi er 5. Forklar hvordan forskriften din viser dette.

## 2.3 Ensidige grenseverdier og grenseverdier

En grenseverdi beskriver hvilken verdi funksjonen nærmer seg når \(x\) nærmer seg et bestemt tall. Vi skriver

\[
\lim_{x\to a}f(x)=L.
\]

Dette betyr at funksjonsverdiene nærmer seg \(L\) når \(x\) nærmer seg \(a\). Det betyr ikke nødvendigvis at \(f(a)=L\), eller at \(f(a)\) er definert.

Vi skiller mellom to retninger:

\[
\lim_{x\to a^-}f(x) \quad\text{og}\quad
\lim_{x\to a^+}f(x).
\]

- \(x\to a^-\): Vi nærmer oss \(a\) fra venstre, med x-verdier mindre enn \(a\).
- \(x\to a^+\): Vi nærmer oss \(a\) fra høyre, med x-verdier større enn \(a\).

Den vanlige grenseverdien \(\lim_{x\to a}f(x)\) finnes bare når begge ensidige grenseverdiene finnes og er like.

!!! example "Eksempel – grenseverdi fra graf eller forskrift"
    La \(f(x)=\begin{cases}x+1,&x<2,\\5-x,&x\geq2.\end{cases}\)

    Fra venstre nærmer \(x+1\) seg 3:
    \[
    \lim_{x\to2^-}f(x)=3.
    \]
    Fra høyre nærmer \(5-x\) seg også 3:
    \[
    \lim_{x\to2^+}f(x)=3.
    \]
    De ensidige grensene er like, så \(\lim_{x\to2}f(x)=3\). Funksjonsverdien er likevel \(f(2)=3\) her bare fordi den andre forskriften gir 3.

### Oppgaver 2.3

**2.3.1** Bestem de ensidige grenseverdiene og avgjør om den vanlige grenseverdien finnes:
\[
f(x)=\begin{cases}2x-1,&x<1,\\x+3,&x\geq1.\end{cases}
\]

**2.3.2** En graf nærmer seg \(y=4\) fra begge sider når \(x\to2\), men punktet \((2,1)\) er fylt. Hva er grenseverdien, og hva er \(f(2)\)? Forklar forskjellen.

**2.3.3** Undersøk de ensidige grenseverdiene til \(f(x)=\frac{1}{x-3}\) når \(x\to3\). Forklar hvorfor den vanlige grenseverdien ikke finnes som et endelig tall.

**2.3.4** Lag en funksjon der \(\lim_{x\to1^-}f(x)=2\), mens \(\lim_{x\to1^+}f(x)=5\). Vis at den vanlige grenseverdien ikke finnes.

## 2.4 Kontinuitet

En funksjon er kontinuerlig i \(x=a\) når grafen ikke har et brudd der. For å kontrollere kontinuitet må tre forhold være oppfylt:

1. \(f(a)\) er definert.
2. Den tosidige grenseverdien \(\lim_{x\to a}f(x)\) finnes.
3. Grenseverdien er lik funksjonsverdien: \(\lim_{x\to a}f(x)=f(a)\).

Det er nyttig å tenke på dette som tre kontrollspørsmål. At de ensidige grensene er like, er nødvendig for at den tosidige grenseverdien skal finnes, men det er ikke nok alene: grenseverdien må også være lik funksjonsverdien.

!!! example "Eksempel – bestem en parameter for kontinuitet"
    La
    \[
    f(x)=\begin{cases}
    kx+1,&x<2,\\
    x^2-1,&x\geq2.
    \end{cases}
    \]
    For kontinuitet i \(x=2\) må venstre grenseverdi være lik \(f(2)\).

    \[
    \lim_{x\to2^-}f(x)=2k+1,\qquad f(2)=2^2-1=3.
    \]
    Dermed må \(2k+1=3\), altså \(k=1\).

    **Svar:** Funksjonen er kontinuerlig i \(x=2\) når \(k=1\).

### Oppgaver 2.4

**2.4.1** Undersøk om \(f(x)=\begin{cases}x+2,&x<1,\\2x,&x\geq1.\end{cases}\) er kontinuerlig i \(x=1\). Vis alle tre kontrollpunktene.

**2.4.2** Bestem \(a\) slik at \(f(x)=\begin{cases}ax-2,&x<3,\\x+4,&x\geq3.\end{cases}\) er kontinuerlig i \(x=3\).

**2.4.3** En funksjon har like ensidige grenseverdier 6 ved \(x=2\), men \(f(2)=0\). Er funksjonen kontinuerlig i punktet? Kan grenseverdien finnes? Begrunn.

**2.4.4** En funksjon er definert ved \(f(x)=\frac{x^2-4}{x-2}\) for \(x\ne2\), og \(f(2)=k\). Bestem \(k\) slik at funksjonen blir kontinuerlig i \(x=2\). Forklar hvorfor faktorisering er nyttig.

## 2.5 Teknikker for å beregne grenseverdier

Når funksjonen er kontinuerlig i punktet og uttrykket er definert der, kan vi ofte sette inn x-verdien direkte. Hvis direkte innsetting gir \(\frac00\), må vi undersøke uttrykket nærmere. Formen \(\frac00\) er ikke svaret; den viser at vi trenger en annen metode.

### Faktorisering og forkorting

Eksempel:

\[
\lim_{x\to2}\frac{x^2-4}{x-2}.
\]

Direkte innsetting gir \(\frac00\). Vi faktoriserer telleren:

\[
x^2-4=(x-2)(x+2).
\]

For \(x\ne2\) kan vi forkorte faktoren \(x-2\):

\[
\frac{(x-2)(x+2)}{x-2}=x+2.
\]

Derfor er

\[
\lim_{x\to2}\frac{x^2-4}{x-2}
=\lim_{x\to2}(x+2)=4.
\]

Vi har ikke endret funksjonsverdien i \(x=2\); brøken er fortsatt ikke definert der. Vi har funnet hvilken verdi funksjonen nærmer seg.

### Grenseverdier når x går mot uendelig

For en rasjonal funksjon kan vi ofte dele teller og nevner på den høyeste potensen av \(x\) i nevneren. Eksempel:

\[
\lim_{x\to\infty}\frac{3x^2+1}{x^2-4}
=\lim_{x\to\infty}\frac{3+1/x^2}{1-4/x^2}=3.
\]

Siden \(1/x^2\to0\), nærmer funksjonen seg 3.

### Oppgaver 2.5

**2.5.1** Beregn \(\lim_{x\to3}\frac{x^2-9}{x-3}\). Vis faktoriseringen og forklar hvorfor forkortingen er lovlig i grenseprosessen.

**2.5.2** Beregn \(\lim_{x\to-2}\frac{x^2+5x+6}{x+2}\).

**2.5.3** Beregn \(\lim_{x\to1}\frac{x^2-1}{x^2-3x+2}\). Forklar hva som skjer med telleren og nevneren etter faktorisering.

**2.5.4** Beregn \(\lim_{x\to\infty}\frac{5x^2-2x+1}{2x^2+7}\), og begrunn svaret ved å dele på riktig potens av \(x\).

**2.5.5** En elev sier at \(\lim_{x\to2}\frac{x^2-4}{x-2}\) ikke finnes fordi uttrykket gir \(0/0\). Forklar presist hva som er feil i argumentet, og vis en korrekt løsning.

## 2.6 Asymptoter

En asymptote er en rett linje som grafen nærmer seg. Vi undersøker tre vanlige typer.

### Vertikal asymptote

Linjen \(x=a\) er en vertikal asymptote når funksjonsverdiene går mot \(+\infty\) eller \(-\infty\) når \(x\) nærmer seg \(a\) fra minst én side.

Eksempel: \(f(x)=\frac{2}{x-1}\) har vertikal asymptote \(x=1\), fordi nevneren nærmer seg null mens telleren er ulik null.

### Horisontal asymptote

Linjen \(y=L\) er en horisontal asymptote dersom

\[
\lim_{x\to\infty}f(x)=L
\quad\text{eller}\quad
\lim_{x\to-\infty}f(x)=L.
\]

De to grensene kan gi ulike horisontale asymptoter.

### Skrå asymptote

En skrå asymptote har formen \(y=ax+b\), der \(a\ne0\). For rasjonale funksjoner kan polynomdivisjon ofte avsløre den.

Eksempel:

\[
f(x)=\frac{x^2+1}{x}=x+\frac1x.
\]

Når \(x\to\pm\infty\), går \(1/x\to0\). Derfor er \(y=x\) en skrå asymptote.

### Oppgaver 2.6

**2.6.1** Finn vertikal og horisontal asymptote til \(f(x)=\frac{3x+1}{x-2}\). Begrunn med grenseverdier.

**2.6.2** Undersøk asymptotene til \(g(x)=\frac{x^2-4}{x-2}\). Forklar hvorfor en verdi som gjør nevneren null, ikke automatisk gir en vertikal asymptote.

**2.6.3** Bruk polynomdivisjon til å bestemme eventuell skrå asymptote for \(h(x)=\frac{2x^2+3x-1}{x+1}\).

**2.6.4** En rasjonal funksjon har vertikal asymptote \(x=-2\) og horisontal asymptote \(y=3\). Lag et mulig funksjonsuttrykk og forklar hvordan du vet at uttrykket oppfyller kravene. Det finnes flere svar.

## 2.7 Programmering: undersøke grenseverdier

Programmering kan hjelpe oss å undersøke hva som skjer nær et punkt. Numeriske verdier kan gi en idé om grenseverdien, men de beviser ikke alene at grenseverdien finnes.

### Oppgave 2.7.1 – verdier nær et hull

La \(f(x)=\frac{x^2-4}{x-2}\). Skriv et program som beregner funksjonsverdien for x-verdier nær 2, for eksempel 1,9; 1,99; 2,01 og 2,1.

- Hva ser du at verdiene nærmer seg?
- Hvorfor kan ikke programmet beregne funksjonsverdien ved nøyaktig \(x=2\)?
- Hvordan kan algebra bekrefte resultatet?

### Oppgave 2.7.2 – ensidige grenser

Lag et program som skriver ut verdier for \(f(x)=1/(x-3)\) når x nærmer seg 3 fra venstre og høyre.

- Sammenlign fortegn og størrelser.
- Formuler en konklusjon om de ensidige grensene.
- Forklar hvorfor avrunding og begrenset presisjon kan gjøre numeriske undersøkelser misvisende.

### Oppgave 2.7.3 – kontinuitet med parameter

Skriv et program som tester funksjonen

\[
f(x)=\begin{cases}
kx+1,&x<2,\\
x^2-1,&x\geq2
\end{cases}
\]

for flere verdier av \(k\). Sammenlign funksjonsverdien ved 2 med verdier like til venstre for 2. Bruk deretter algebra til å bestemme den eksakte verdien av \(k\) som gir kontinuitet.

## 2.8 Blandede oppgaver

Oppgavene er delt etter forventet vanskelighetsgrad. Nivået er veiledende; krevende oppgaver kan kreve flere forklaringer enn regning.

### Grønt nivå – grunnleggende

**2.8.1** Finn \(\lim_{x\to2}(3x-1)\).

**2.8.2** Finn de ensidige grenseverdiene for \(f(x)=\begin{cases}x+1,&x<0,\\2x+1,&x\geq0.\end{cases}\).

**2.8.3** Finn den vertikale asymptoten til \(f(x)=\frac{1}{x+4}\).

### Gult nivå – anvendelse

**2.8.4** Bestem \(a\) slik at \(f(x)=\begin{cases}ax+2,&x<1,\\x^2+3,&x\geq1.\end{cases}\) er kontinuerlig i \(x=1\).

**2.8.5** Beregn \(\lim_{x\to4}\frac{x^2-16}{x-4}\), og forklar hvorfor svaret ikke er funksjonsverdien i \(x=4\).

**2.8.6** Finn alle asymptotene til \(f(x)=\frac{2x^2+1}{x^2-9}\).

### Rødt nivå – utfordring

**2.8.7** La
\[
f(x)=\begin{cases}
x^2+ax,&x<1,\\
bx+2,&x\geq1.
\end{cases}
\]
Bestem sammenhengen mellom \(a\) og \(b\) som gir kontinuitet i \(x=1\). Finn deretter en sammenheng som også gjør de to uttrykkenes stigningstall like ved overgangen. Forklar forskjellen på kravene.

**2.8.8** En rasjonal funksjon har en vertikal asymptote ved \(x=2\) og en horisontal asymptote \(y=-1\). Lag et mulig uttrykk med disse egenskapene, og undersøk ensidige grenseverdier ved den vertikale asymptoten.

**2.8.9** En elev hevder: «Hvis telleren og nevneren begge blir null, finnes det ingen grenseverdi.» Lag et moteksempel, løs grenseverdien og forklar hvilken konklusjon eleven burde trekke i stedet.

## 2.9 Kapittelprøve – grenseverdier og kontinuitet

**Anbefaling:** Bruk Del 1 uten digitale hjelpemidler og Del 2 med digitale hjelpemidler dersom dette passer med vurderingsformen i klassen. Alle oppgaver er ment å utfordre på høyt nivå. Vis mellomregning og begrunn konklusjonene.

### Del 1 – uten digitale hjelpemidler

**2.P1.1** En funksjon er gitt ved
\[
f(x)=\begin{cases}
x^2+ax,&x<2,\\
5x-2,&x\geq2.
\end{cases}
\]
Bestem \(a\) slik at funksjonen er kontinuerlig i \(x=2\). Undersøk deretter om de to forskriftene også har samme stigningstall ved overgangen. Forklar hva resultatet forteller.

**2.P1.2** Beregn
\[
\lim_{x\to3}\frac{x^2-5x+6}{x-3}.
\]
En elev forkorter med \(x-3\) direkte i telleren uten først å faktorisere. Forklar hvorfor metoden er ugyldig, og vis korrekt framgangsmåte.

**2.P1.3** En funksjon har \(\lim_{x\to a^-}f(x)=4\), \(\lim_{x\to a^+}f(x)=4\) og \(f(a)=-2\). Drøft om grenseverdien finnes og om funksjonen er kontinuerlig. Lag en enkel delt forskrift som illustrerer situasjonen.

### Del 2 – med digitale hjelpemidler

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
Bestem alle par \((a,b)\) som gjør \(h\) kontinuerlig i \(t=2\). Undersøk om noen av disse parene også gir samme deriverte fra begge sider i overgangspunktet, og forklar hvordan du kontrollerer dette.

**2.P2.3** Lag en funksjon med både en vertikal og en skrå asymptote. Bruk et digitalt verktøy til å undersøke grafen, og bruk deretter grenseverdier eller polynomdivisjon til å bevise asymptotene. Forklar hvorfor den numeriske grafen bare er støtte for argumentasjonen.

## Fasit og løsningsskisser

Fasiten viser sentrale steg. I oppgaver der eleven skal lage et eksempel, finnes det flere riktige svar.

- **2.2.1:** \(f(0)=1\), \(f(3)=7\), \(f(4)=14\).
- **2.2.2:** \(|x-2|=2-x\) for \(x<2\), og \(x-2\) for \(x\geq2\).
- **2.2.3:** \(2a+1=3\), altså \(a=1\). Da er funksjonen også kontinuerlig siden \(f(2)=3\).
- **2.3.1:** Venstre grenseverdi 1, høyre grenseverdi 4; tosidig grenseverdi finnes ikke.
- **2.3.3:** Fra venstre går funksjonen mot \(-\infty\), fra høyre mot \(+\infty\).
- **2.4.1:** Venstre grenseverdi 3, høyre grenseverdi og funksjonsverdi 2; ikke kontinuerlig.
- **2.4.2:** \(3a-2=7\), altså \(a=3\).
- **2.4.4:** For \(x\ne2\) er brøken \(x+2\), så \(k=4\).
- **2.5.1:** \(6\).
- **2.5.2:** \(1\).
- **2.5.3:** Etter faktorisering er uttrykket \((x+1)/(2-x)\), og grenseverdien er \(2\).
- **2.5.4:** \(5/2\).
- **2.6.1:** Vertikal asymptote \(x=2\); horisontal asymptote \(y=3\).
- **2.6.2:** For \(x\ne2\) er funksjonen lik \(x+2\), så det er et hull ved \(x=2\), ikke vertikal asymptote.
- **2.6.3:** \(h(x)=2x+1-2/(x+1)\); skrå asymptote \(y=2x+1\), vertikal asymptote \(x=-1\).
- **2.8.1:** 5.
- **2.8.2:** Begge ensidige grenser er 1.
- **2.8.3:** \(x=-4\).
- **2.8.4:** \(a=4\).
- **2.8.5:** 8; funksjonen er ikke definert ved \(x=4\).
- **2.8.6:** Vertikale asymptoter \(x=\pm3\); horisontal asymptote \(y=2\).
- **2.P1.1:** Kontinuitet gir \(4+2a=8\), altså \(a=2\). Stigningstallene er da 4 og 5, så de er ikke like.
- **2.P1.2:** Telleren faktoriseres til \((x-2)(x-3)\). Etter forkorting er grenseverdien \(3-2=1\).
- **2.P2.1:** \(g(x)=\frac{(x-1)(x-3)}{(x-2)(x-3)}=\frac{x-1}{x-2}\) for \(x\ne2,3\). Vertikal asymptote \(x=2\), horisontal asymptote \(y=1\), hull ved \((3,2)\).
- **2.P2.2:** Kontinuitet gir \(2a+4=4+2b\), altså \(a=b\). Lik deriverte krever \(a=4+b\). Samlet gir \(a=b\) og \(a=b+4\), som ikke kan oppfylles samtidig. Ingen par gir begge egenskapene.
- **2.P2.3:** Ett eksempel er \(f(x)=x+\frac{1}{x-1}\), med vertikal asymptote \(x=1\) og skrå asymptote \(y=x\).

**Merk:** Løsningsskissene til de åpne oppgavene viser en mulig løsning; full uttelling krever tydelig argumentasjon.
