# Kapittel 3 – Derivasjon

## Læringsmål

Når du har arbeidet med dette kapitlet, skal du kunne:

- forklare hva den deriverte forteller oss om en funksjon
- bruke sentrale derivasjonsregler
- derivere summer, produkter, brøker og sammensatte funksjoner når reglene er relevante
- bruke den deriverte til å undersøke vekst, topp- og bunnpunkter
- vise en ryddig matematisk løsning og begrunne metodevalget

Tilpass læringsmålene til den konkrete læreboken og undervisningsplanen dere følger.

## 3.1 Hva betyr derivasjon?

Den deriverte beskriver hvor raskt en funksjon endrer seg. Geometrisk kan den deriverte i et punkt tolkes som stigningstallet til tangenten til grafen i punktet.

Hvis funksjonen er \(f(x)\), skriver vi den deriverte som

\[
f'(x)
\]

Verdien \(f'(a)\) forteller hvor raskt funksjonen endrer seg når \(x=a\).

### Eksempel 1 – En enkel derivasjon

La

\[
f(x)=x^2.
\]

Da er

\[
f'(x)=2x.
\]

I punktet \(x=3\) er stigningstallet

\[
f'(3)=2\cdot 3=6.
\]

Tangenten til grafen når \(x=3\), har altså stigningstall 6.

## 3.2 Grunnleggende derivasjonsregler

### Konstantregelen

Hvis \(f(x)=c\), der \(c\) er en konstant, er

\[
f'(x)=0.
\]

Eksempel:

\[
f(x)=7 \quad\Rightarrow\quad f'(x)=0.
\]

### Potensregelen

For en passende potensfunksjon gjelder

\[
\frac{d}{dx}x^n=nx^{n-1}.
\]

Eksempel:

\[
f(x)=x^5 \quad\Rightarrow\quad f'(x)=5x^4.
\]

### Sumregelen

Deriver hvert ledd for seg:

\[
\frac{d}{dx}\big(f(x)+g(x)\big)=f'(x)+g'(x).
\]

Eksempel:

\[
h(x)=3x^4+2x^2-5x+8
\]

Dermed er

\[
h'(x)=12x^3+4x-5.
\]

Husk at den deriverte av konstantleddet 8 er 0.

## 3.3 Produktregelen

Når to funksjoner multipliseres, kan vi bruke produktregelen:

\[
(fg)'=f'g+fg'.
\]

Med ord: Deriver den første og behold den andre, pluss behold den første og deriver den andre.

### Eksempel 2

Deriver

\[
p(x)=x^2(x+3).
\]

Sett \(f(x)=x^2\) og \(g(x)=x+3\). Da er

\[
f'(x)=2x,\qquad g'(x)=1.
\]

Bruk produktregelen:

\[
p'(x)=2x(x+3)+x^2\cdot 1.
\]

Forenkle:

\[
p'(x)=2x^2+6x+x^2=3x^2+6x.
\]

**Vanlig feil:** Produktregelen er ikke \((fg)'=f'g'\).

## 3.4 Brøkregelen

Når en funksjon er skrevet som en brøk av to funksjoner, kan vi bruke brøkregelen, forutsatt at nevneren ikke er null:

\[
\left(\frac{f(x)}{g(x)}\right)'
=
\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}.
\]

Husk rekkefølgen i telleren: *deriver øverst ganger nederst, minus øverst ganger deriver nederst*.

### Eksempel 3

Deriver

\[
h(x)=\frac{x^2+1}{x+2}.
\]

Vi setter

\[
f(x)=x^2+1,\qquad g(x)=x+2.
\]

Da er

\[
f'(x)=2x,\qquad g'(x)=1.
\]

Sett inn i brøkregelen:

\[
h'(x)=\frac{2x(x+2)-(x^2+1)\cdot 1}{(x+2)^2}.
\]

Gang ut og trekk sammen telleren:

\[
h'(x)=\frac{2x^2+4x-x^2-1}{(x+2)^2}
=\frac{x^2+4x-1}{(x+2)^2}.
\]

Funksjonen og den deriverte er definert for \(x\neq -2\).

**Vanlige feil**

- Glemme å kvadrere hele nevneren.
- Glemme minustegnet mellom leddene i telleren.
- Derivere bare telleren og nevneren hver for seg. Det er ikke en generell regel for derivasjon av en brøk.

## 3.5 Kjerneregelen

Når en funksjon er sammensatt av en ytre og en indre funksjon, bruker vi kjerneregelen:

\[
(f(g(x)))'=f'(g(x))\cdot g'(x).
\]

Med ord: Deriver den ytre funksjonen, behold den indre, og gang med den deriverte av den indre funksjonen.

### Eksempel 4

Deriver

\[
q(x)=(3x+1)^4.
\]

Den ytre funksjonen er \(u^4\), og den indre funksjonen er \(u=3x+1\).

Dermed får vi

\[
q'(x)=4(3x+1)^3\cdot 3
=12(3x+1)^3.
\]

**Vanlig feil:** Ikke glem å gange med den deriverte av det som står inni parentesen.

## 3.6 Hvilken regel skal jeg velge?

| Uttrykk | Typisk metode |
|---|---|
| \(x^5+3x^2-1\) | Potensregel og sumregel |
| \(x^2(x+3)\) | Produktregel, eventuelt utvid først |
| \(\frac{x^2+1}{x+2}\) | Brøkregel, eventuelt omskriving hvis det er mulig |
| \((3x+1)^4\) | Kjerneregel |

Noen uttrykk kan løses på flere måter. Velg en metode som er korrekt og gjør utregningen oversiktlig.

## 3.7 Oppgaver

Prøv selv før du åpner løsningsforslagene.

### Oppgave A – Grunnleggende

1. Deriver \(f(x)=4x^3-2x+7\).
2. Deriver \(g(x)=x^6+3x^2\).
3. Deriver \(h(x)=(2x-1)^3\).

### Oppgave B – Velg riktig regel

4. Deriver \(p(x)=x^2(x+4)\).
5. Deriver \(r(x)=\frac{x^2+3}{x-1}\).
6. Deriver \(s(x)=(x^2+2)^3\).

### Oppgave C – Forklar

7. Forklar med egne ord hva \(f'(2)=5\) forteller om grafen til \(f\).
8. En elev hevder at \((f(x)g(x))'=f'(x)g'(x)\). Forklar hvorfor dette ikke er riktig.

??? note "Fasit – åpne når du har prøvd selv"

    1. \(f'(x)=12x^2-2\)
    2. \(g'(x)=6x^5+6x\)
    3. \(h'(x)=6(2x-1)^2\)
    4. \(p'(x)=2x(x+4)+x^2=3x^2+8x\)
    5. \(r'(x)=\frac{2x(x-1)-(x^2+3)}{(x-1)^2}=\frac{x^2-2x-3}{(x-1)^2}\), for \(x\neq 1\)
    6. \(s'(x)=3(x^2+2)^2\cdot 2x=6x(x^2+2)^2\)
    7. Tangenten til grafen i \(x=2\) har stigningstall 5.
    8. Produktregelen er \((fg)'=f'g+fg'\), ikke \(f'g'\).

## Oppsummering

- Den deriverte beskriver momentan vekstfart og tangentens stigningstall.
- Bruk potensregelen og sumregelen på polynomer.
- Bruk produktregelen på produkter og brøkregelen på brøker når det er hensiktsmessig.
- Bruk kjerneregelen på sammensatte funksjoner.
- Vis mellomregning, og kontroller fortegn og parenteser.

*Læreren bør tilpasse rekkefølge, oppgavenivå og terminologi til læreboken og kompetansemålene klassen arbeider med.*
