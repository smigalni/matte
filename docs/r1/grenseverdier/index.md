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

### Oppgaver 2.1

**2.1.1** Oppgi funksjonstypen og definisjonsmengden til hver funksjon:

a) \(f(x)=4x-3\)

b) \(g(x)=x^2-4\)

c) \(h(x)=2^x\)

d) \(p(x)=\frac{x+1}{x-3}\)

e) \(q(x)=\ln(x-2)\)

**2.1.2** En funksjon er gitt ved

\[
r(x)=\frac{x^2-4}{x-2},\qquad x\ne2.
\]

a) Faktoriser telleren og forenkle uttrykket så langt det lar seg gjøre.

b) Oppgi definisjonsmengden.

c) Hva blir verdien av det forenklede uttrykket når du setter inn \(x=2\)?

d) Forklar hvorfor dette ikke betyr at den opprinnelige funksjonen automatisk er definert i \(x=2\).

??? note "Fasit – oppgaver 2.1"

    **2.1.1:**

    a) Lineær funksjon, \(D_f=\mathbb R\).

    b) Andregradsfunksjon, \(D_g=\mathbb R\).

    c) Eksponentialfunksjon, \(D_h=\mathbb R\).

    d) Rasjonal funksjon, \(D_p=\mathbb R\setminus\{3\}\).

    e) Logaritmefunksjon, \(D_q=(2,\infty)\).

    **2.1.2:** Vi faktoriserer \(x^2-4=(x-2)(x+2)\). For \(x\ne2\) får vi \(r(x)=x+2\). Definisjonsmengden er \(\mathbb R\setminus\{2\}\). Det forenklede uttrykket gir verdien 4 når vi setter inn \(x=2\), men den opprinnelige funksjonen er fortsatt ikke definert der. Forkortingen endrer ikke definisjonsmengden.

    **Resultat:** Det forenklede uttrykket gir \(\underline{\underline{4}}\), mens \(r(2)\) ikke er definert.


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

    \(\underline{\underline{g(1)=2,\;g(2)=3,\;g(3)=8}}\)

### Oppgaver 2.2

**2.2.1** La \(f(x)=\begin{cases}2x+1,&x<3,\\x^2-2,&x\geq3.\end{cases}\) Finn \(f(0)\), \(f(3)\) og \(f(4)\).

**2.2.2** Skriv \(|x-2|\) som en delt forskrift. Forklar hvorfor forskriften skifter ved \(x=2\).

**2.2.3** En funksjon er gitt ved \(g(x)=\begin{cases}ax+1,&x<2,\\x^2-1,&x\geq2.\end{cases}\). Bestem \(a\) slik at de to uttrykkene gir samme grenseverdi ved \(x=2\). Er funksjonen da nødvendigvis kontinuerlig? Begrunn.

**2.2.4** Lag en delt forskrift som har \(f(0)=4\), men der venstre grenseverdi når \(x\to0\) er 2 og høyre grenseverdi er 5. Forklar hvordan forskriften din viser dette.


??? note "Fasit – oppgaver 2.2"

    **2.2.1:** \(f(0)=1\), \(f(3)=7\) og \(f(4)=14\).

    **2.2.2:** \(|x-2|=2-x\) når \(x<2\), og \(|x-2|=x-2\) når \(x\geq2\).

    **2.2.3:** Vi må ha \(2a+1=3\), så \(a=1\). Da er også \(g(2)=3\), og funksjonen er kontinuerlig i \(x=2\).

    **2.2.4:** Ett eksempel er \(f(x)=2\) når \(x<0\), \(f(0)=4\) og \(f(x)=5\) når \(x>0\).

    **Resultat:** \(\underline{\underline{a=1}}\) i oppgave 2.2.3.

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


??? note "Fasit – oppgaver 2.3"

    **2.3.1:** Venstre grenseverdi er \(1\), mens høyre grenseverdi er \(4\). Den tosidige grenseverdien finnes ikke.

    **2.3.2:** Grenseverdien er \(4\), mens \(f(2)=1\). Funksjonen er ikke kontinuerlig i \(x=2\).

    **2.3.3:** Fra venstre går funksjonen mot \(-\infty\), og fra høyre mot \(+\infty\). Den har vertikal asymptote \(x=3\).

    **2.3.4:** Ett eksempel er \(f(x)=2\) når \(x<1\), \(f(1)=3\) og \(f(x)=5\) når \(x>1\).

    **Resultat:** \(\underline{\underline{\lim_{x\to1^-}f(x)=2,\quad \lim_{x\to1^+}f(x)=5}}\) i oppgave 2.3.4.

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

    **Svar:** Funksjonen er kontinuerlig i x=2 når k=1.

    \(\underline{\underline{k=1}}\)

### Oppgaver 2.4

**2.4.1** Undersøk om \(f(x)=\begin{cases}x+2,&x<1,\\2x,&x\geq1.\end{cases}\) er kontinuerlig i \(x=1\). Vis alle tre kontrollpunktene.

**2.4.2** Bestem \(a\) slik at \(f(x)=\begin{cases}ax-2,&x<3,\\x+4,&x\geq3.\end{cases}\) er kontinuerlig i \(x=3\).

**2.4.3** En funksjon har like ensidige grenseverdier 6 ved \(x=2\), men \(f(2)=0\). Er funksjonen kontinuerlig i punktet? Kan grenseverdien finnes? Begrunn.

**2.4.4** En funksjon er definert ved \(f(x)=\frac{x^2-4}{x-2}\) for \(x\ne2\), og \(f(2)=k\). Bestem \(k\) slik at funksjonen blir kontinuerlig i \(x=2\). Forklar hvorfor faktorisering er nyttig.


??? note "Fasit – oppgaver 2.4"

    **2.4.1:** Venstre grenseverdi er \(3\), mens høyre grenseverdi og funksjonsverdien er \(2\). Funksjonen er ikke kontinuerlig.

    **2.4.2:** Kontinuitet gir \(3a-2=7\), altså \(a=3\).

    **2.4.3:** Den tosidige grenseverdien finnes og er \(6\), men funksjonsverdien er \(0\). Funksjonen er derfor ikke kontinuerlig.

    **2.4.4:** For \(x\ne2\) er brøken lik \(x+2\). Grenseverdien er \(4\), så \(k=4\) gir kontinuitet.

    **Resultat:** \(\underline{\underline{k=4}}\) i oppgave 2.4.4.

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


??? note "Fasit – oppgaver 2.5"

    **2.5.1:** \(x^2-9=(x-3)(x+3)\), så grenseverdien er \(6\).

    **2.5.2:** \(x^2+5x+6=(x+2)(x+3)\), så grenseverdien er \(1\).

    **2.5.3:** Etter faktorisering og forkorting får vi \((x+1)/(x-2)\). Grenseverdien er \(-2\).

    **2.5.4:** Teller og nevner har samme grad. Grenseverdien er forholdet mellom koeffisientene foran \(x^2\), altså \(5/2\).

    **2.5.5:** \(0/0\) er en ubestemt form. Faktorisering gir \((x-2)(x+2)/(x-2)=x+2\), så grenseverdien er \(4\).

    **Resultat:** \(\underline{\underline{6,\;1,\;-2,\;\frac52,\;4}}\) i oppgave 2.5.1–2.5.5.

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


??? note "Fasit – oppgaver 2.6"

    **2.6.1:** Vertikal asymptote \(x=2\), horisontal asymptote \(y=3\).

    **2.6.2:** For \\(x\\ne2\\) er funksjonen lik \\(x+2\\). Grafen ligger derfor på linjen \\(y=x+2\\), bortsett fra et hull i \\((2,4)\\). Linjen \\(y=x+2\\) er den skrå asymptoten. Det er ingen vertikal asymptote ved \\(x=2\\), fordi grenseverdiene er endelige.

    **2.6.3:** Polynomdivisjon gir \(h(x)=2x+1-\frac{2}{x+1}\). Skrå asymptote er \(y=2x+1\), og vertikal asymptote er \(x=-1\).

    **2.6.4:** Ett mulig uttrykk er \(f(x)=3+\frac{1}{x+2}\). Det har vertikal asymptote \(x=-2\) og horisontal asymptote \(y=3\).

    **Resultat:** \(\underline{\underline{x=2,\;y=3}}\) i oppgave 2.6.1.
