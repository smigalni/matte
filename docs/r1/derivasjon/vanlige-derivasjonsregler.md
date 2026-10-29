# 3.2 Vanlige derivasjonsregler

I kapittel 3.1 lærte vi at den deriverte forteller oss den momentane vekstfarten til en funksjon, og at den er stigningstallet til tangenten i et punkt.

Når vi skal derivere funksjoner, trenger vi ikke å bruke definisjonen av den deriverte hver gang. Vi kan bruke regler som gjør arbeidet enklere. Reglene i dette kapittelet er grunnleggende og brukes både i S1 og R1.

## Konstantregelen

En konstant funksjon har samme verdi uansett hvilken \(x\)-verdi vi velger. Grafen er en vannrett linje, og stigningstallet er derfor null.

!!! important "Konstantregelen"
    Hvis \(k\) er en konstant, gjelder

    \[
    (k)'=0
    \]

!!! example "Eksempel 1 – Deriver en konstant"

    Vi har funksjonen

    \[
    f(x)=7
    \]

    Siden funksjonen er konstant, er den deriverte null:

    \[
    f'(x)=0
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=0}}
    \]

!!! question "Oppgave 1 – Konstantregelen"

    Deriver funksjonene.

    a) \(f(x)=4\)

    b) \(g(x)=-12\)

    c) \(h(x)=\pi\)

## Potensregelen

Potensregelen bruker vi når \(x\) er opphøyd i en konstant eksponent. Vi ganger med eksponenten og trekker deretter 1 fra eksponenten.

!!! important "Potensregelen"
    \[
    (x^n)'=n\cdot x^{n-1}
    \]

!!! example "Eksempel 2 – Deriver en potens"

    Vi har funksjonen

    \[
    f(x)=x^5
    \]

    **Trinn 1:** Gange med eksponenten 5.

    **Trinn 2:** Trekke 1 fra eksponenten.

    \[
    f'(x)=5x^{5-1}=5x^4
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=5x^4}}
    \]

!!! example "Eksempel 3 – Potenser med koeffisient"

    Vi har funksjonen

    \[
    g(x)=3x^4
    \]

    Vi bruker potensregelen på \(x^4\) og beholder faktoren 3:

    \[
    g'(x)=3\cdot4x^{3}=12x^3
    \]

    **Svar:**

    \[
    \underline{\underline{g'(x)=12x^3}}
    \]

!!! question "Oppgave 2 – Potensregelen"

    Deriver funksjonene.

    a) \(f(x)=x^3\)

    b) \(g(x)=x^7\)

    c) \(h(x)=4x^5\)

    d) \(p(x)=-2x^4\)

## Konstant faktor-regelen

Når en funksjon er multiplisert med en konstant, kan vi beholde konstanten og derivere funksjonen som står ved siden av.

!!! important "Konstant faktor-regelen"
    \[
    (k\cdot u(x))'=k\cdot u'(x)
    \]

!!! example "Eksempel 4 – Konstant faktor"

    Vi har funksjonen

    \[
    f(x)=5x^3
    \]

    Konstanten 5 blir stående. Vi deriverer \(x^3\):

    \[
    f'(x)=5\cdot3x^2=15x^2
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=15x^2}}
    \]

!!! example "Eksempel 5 – Konstant ganger en funksjon"

    Vi har

    \[
    g(x)=2(x^2+3x)
    \]

    Vi beholder konstanten 2 og deriverer uttrykket i parentesen:

    \[
    \begin{aligned}
    g'(x)&=2(2x+3)\\
    &=4x+6
    \end{aligned}
    \]

    **Svar:**

    \[
    \underline{\underline{g'(x)=4x+6}}
    \]

!!! question "Oppgave 3 – Konstant faktor"

    Deriver funksjonene.

    a) \(f(x)=6x^2\)

    b) \(g(x)=-3x^5\)

    c) \(h(x)=4(x^3-2x)\)

## Sumregelen

Hvis en funksjon består av flere ledd som legges sammen eller trekkes fra hverandre, kan vi derivere hvert ledd for seg. Ved subtraksjon beholder vi minustegnet.

!!! important "Sumregelen"
    \[
    (u(x)+v(x))'=u'(x)+v'(x)
    \]

    Tilsvarende gjelder

    \[
    (u(x)-v(x))'=u'(x)-v'(x)
    \]

!!! example "Eksempel 6 – Deriver et polynom"

    Vi har funksjonen

    \[
    f(x)=x^3+4x^2-5x+8
    \]

    Vi deriverer ett ledd om gangen:

    - \((x^3)'=3x^2\)
    - \((4x^2)'=8x\)
    - \((-5x)'=-5\)
    - \((8)'=0\)

    Dermed får vi

    \[
    f'(x)=3x^2+8x-5
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=3x^2+8x-5}}
    \]

!!! question "Oppgave 4 – Sumregelen"

    Deriver funksjonene.

    a) \(f(x)=x^2+3x\)

    b) \(g(x)=x^4-2x^2+1\)

    c) \(h(x)=3x^3+4x^2-7x+6\)

    d) \(p(x)=2x^5-3x^3+x-9\)

## Derivasjon av eksponentialfunksjonen \(e^x\)

Tallet \(e\) er en matematisk konstant som er omtrent \(2{,}718\). Eksponentialfunksjonen \(e^x\) er spesiell fordi den deriverte er lik funksjonen selv.

!!! important "Derivasjon av \(e^x\)"
    \[
    (e^x)'=e^x
    \]

!!! example "Eksempel 7 – Deriver \(e^x\)"

    Hvis

    \[
    f(x)=e^x
    \]

    får vi direkte

    \[
    f'(x)=e^x
    \]

    Hvis funksjonen har en konstant faktor, bruker vi også konstant faktor-regelen:

    \[
    g(x)=4e^x \quad\Rightarrow\quad g'(x)=4e^x
    \]

!!! question "Oppgave 5 – Eksponentialfunksjonen"

    Deriver funksjonene.

    a) \(f(x)=e^x\)

    b) \(g(x)=3e^x\)

    c) \(h(x)=2e^x+x^2\)

## Derivasjon av den naturlige logaritmen \(\ln x\)

Den naturlige logaritmen \(\ln x\) er logaritmen med grunntall \(e\). Den deriverte av \(\ln x\) er \(1/x\), for \(x>0\).

!!! important "Derivasjon av \(\ln x\)"
    \[
    (\ln x)'=\frac{1}{x},\qquad x>0
    \]

!!! example "Eksempel 8 – Deriver \(\ln x\)"

    Vi har

    \[
    f(x)=\ln x
    \]

    Da er

    \[
    f'(x)=\frac{1}{x}
    \]

    Med en konstant faktor får vi for eksempel

    \[
    g(x)=5\ln x \quad\Rightarrow\quad g'(x)=\frac{5}{x}
    \]

!!! question "Oppgave 6 – Den naturlige logaritmen"

    Deriver funksjonene.

    a) \(f(x)=\ln x\)

    b) \(g(x)=4\ln x\)

    c) \(h(x)=2\ln x+x^3\)

## Kjerneregelen

Noen funksjoner består av en funksjon inni en annen. Da kan vi bruke **kjerneregelen**. Vi deriverer den ytre funksjonen først, lar den indre funksjonen stå inni og ganger deretter med den deriverte av den indre funksjonen.

### Se funksjonen som to lag

Vi ser på funksjonen

\[
y=(3x+2)^4
\]

Først regner vi ut uttrykket inni parentesen. Deretter opphøyer vi resultatet i fjerde.

<figure markdown>
<svg viewBox="0 0 360 300" role="img" aria-label="Visualisering av kjerneregelen: den indre funksjonen 3x pluss 2 går inn i den ytre funksjonen opphøyd i fjerde" xmlns="http://www.w3.org/2000/svg">
  <rect x="35" y="18" width="290" height="82" rx="12" fill="#dff3e5" stroke="#328653" stroke-width="1.5"/>
  <text x="180" y="42" text-anchor="middle" font-size="14" font-weight="600" fill="#17663a">1. Indre funksjon – kjernen</text>
  <text x="180" y="68" text-anchor="middle" font-size="21" font-weight="600" fill="#17663a">u = 3x + 2</text>
  <text x="180" y="87" text-anchor="middle" font-size="11" fill="#17663a">Det som står inni parentesen</text>
  <path d="M180 101 V126" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M174 120 L180 128 L186 120" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="35" y="132" width="290" height="82" rx="12" fill="#e2ecff" stroke="#477bd1" stroke-width="1.5"/>
  <text x="180" y="156" text-anchor="middle" font-size="14" font-weight="600" fill="#174ea6">2. Ytre funksjon</text>
  <text x="180" y="182" text-anchor="middle" font-size="21" font-weight="600" fill="#174ea6">y = u⁴</text>
  <text x="180" y="201" text-anchor="middle" font-size="11" fill="#174ea6">Opphøy resultatet i fjerde</text>
  <path d="M180 215 V240" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M174 234 L180 242 L186 234" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="180" y="264" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Deriver begge lagene</text>
  <text x="180" y="285" text-anchor="middle" font-size="12" fill="currentColor">Gang de deriverte sammen</text>
</svg>
<figcaption>Den indre funksjonen går inn i den ytre. Når vi deriverer, må vi ta hensyn til begge lagene.</figcaption>
</figure>

### Eksempel 9 – Bruk kjerneregelen

Vi skal derivere

\[
y=(3x+2)^4
\]

**Trinn 1: Finn kjernen.**

Vi kaller uttrykket inni parentesen for \(u\):

\[
u=3x+2
\]

**Trinn 2: Skriv den ytre funksjonen ved hjelp av \(u\).**

\[
y=f(u)=u^4
\]

**Trinn 3: Deriver begge funksjonene hver for seg.**

Den ytre funksjonen:

\[
f'(u)=4u^3
\]

Den indre funksjonen:

\[
u'=3
\]

**Trinn 4: Gang de deriverte sammen.**

\[
\begin{aligned}
y'&=f'(u)\cdot u'\\
&=4u^3\cdot3\\
&=4(3x+2)^3\cdot3
\end{aligned}
\]

**Svar:**

\[
\underline{\underline{y'=12(3x+2)^3}}
\]

### Huskeregel

<figure markdown>
<svg viewBox="0 0 360 230" role="img" aria-label="Kjerneregelen: deriver den ytre funksjonen, gang med den deriverte av den indre funksjonen" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="324" height="66" rx="10" fill="#e2ecff" stroke="#477bd1" stroke-width="1.5"/>
  <text x="180" y="42" text-anchor="middle" font-size="13" font-weight="600" fill="#174ea6">1. Deriver den ytre funksjonen</text>
  <text x="180" y="66" text-anchor="middle" font-size="17" fill="#174ea6">f′(u)</text>
  <text x="180" y="111" text-anchor="middle" font-size="19" font-weight="600" fill="currentColor">×</text>
  <rect x="18" y="130" width="324" height="66" rx="10" fill="#dff3e5" stroke="#328653" stroke-width="1.5"/>
  <text x="180" y="154" text-anchor="middle" font-size="13" font-weight="600" fill="#17663a">2. Gang med den indre deriverte</text>
  <text x="180" y="178" text-anchor="middle" font-size="17" fill="#17663a">u′</text>
  <text x="180" y="220" text-anchor="middle" font-size="12" fill="currentColor">Ytre derivert · indre derivert</text>
</svg>
</figure>

**Kort oppskrift:**

1. Finn kjernen og kall den \(u\).
2. Skriv den ytre funksjonen som \(f(u)\).
3. Deriver den ytre og den indre funksjonen hver for seg.
4. Gang de deriverte sammen, og sett inn uttrykket for \(u\).

!!! question "Oppgave 11 – Kjerneregelen"
    Deriver funksjonene ved å bruke \(u\)-metoden.

    a) \(f(x)=(2x+1)^3\)

    b) \(g(x)=(5x-2)^2\)

    c) \(h(x)=(x^2+4)^3\)

??? note "Fasit – oppgave 11"
    **a)** Sett \(u=2x+1\). Da er \(f(u)=u^3\), \(f'(u)=3u^2\) og \(u'=2\).

    \[
    \underline{\underline{f'(x)=6(2x+1)^2}}
    \]

    **b)** Sett \(u=5x-2\). Da er \(g(u)=u^2\), \(g'(u)=2u\) og \(u'=5\).

    \[
    \underline{\underline{g'(x)=10(5x-2)}}
    \]

    **c)** Sett \(u=x^2+4\). Da er \(h(u)=u^3\), \(h'(u)=3u^2\) og \(u'=2x\).

    \[
    \underline{\underline{h'(x)=6x(x^2+4)^2}}
    \]

## Blandede oppgaver

!!! question "Oppgave 7 – Grunnleggende regler"

    Deriver funksjonene.

    a) \(f(x)=9\)

    b) \(g(x)=x^6\)

    c) \(h(x)=7x^3\)

    d) \(p(x)=e^x\)

    e) \(q(x)=\ln x\)

!!! question "Oppgave 8 – Flere ledd"

    Deriver funksjonene og forenkle svarene.

    a) \(f(x)=x^3+2x^2-4x+1\)

    b) \(g(x)=5x^4-3x^2+8\)

    c) \(h(x)=3e^x+2x^3\)

    d) \(p(x)=4\ln x-x^2\)

!!! question "Oppgave 9 – Finn og forklar feilen"

    En elev deriverer funksjonen \(f(x)=2x^4+3x^2-5\) slik:

    \[
    f'(x)=2x^3+3x-5
    \]

    a) Finn feilene i elevens løsning.

    b) Skriv riktig derivert.

    c) Forklar hvorfor konstantleddet ikke er med i svaret.

!!! question "Oppgave 10 – Sett sammen reglene"

    En funksjon er gitt ved

    \[
    f(x)=3x^4-2x^2+5e^x-\ln x
    \]

    a) Deriver hvert ledd for seg.

    b) Skriv \(f'(x)\) som ett uttrykk.

    c) Hvilke derivasjonsregler brukte du?

??? note "Fasit – åpne når du har prøvd selv"

    **Oppgave 1:** a) \(0\) b) \(0\) c) \(0\)

    **Oppgave 2:** a) \(3x^2\) b) \(7x^6\) c) \(20x^4\) d) \(-8x^3\)

    **Oppgave 3:** a) \(12x\) b) \(-15x^4\) c) \(12x^2-8\)

    **Oppgave 4:** a) \(2x+3\) b) \(4x^3-4x\) c) \(9x^2+8x-7\) d) \(10x^4-9x^2+1\)

    **Oppgave 5:** a) \(e^x\) b) \(3e^x\) c) \(2e^x+2x\)

    **Oppgave 6:** a) \(1/x\) b) \(4/x\) c) \(2/x+3x^2\)

    **Oppgave 7:** a) \(0\) b) \(6x^5\) c) \(21x^2\) d) \(e^x\) e) \(1/x\)

    **Oppgave 8:** a) \(3x^2+4x-4\) b) \(20x^3-6x\) c) \(3e^x+6x^2\) d) \(4/x-2x\)

    **Oppgave 9:** Potensregelen er brukt feil i begge potensleddene, og konstantleddet skal bli null. Riktig svar er \(f'(x)=8x^3+6x\).

    **Oppgave 10:** \(f'(x)=12x^3-4x+5e^x-1/x\), for \(x>0\).
