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
