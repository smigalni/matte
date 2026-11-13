# 2.9 Kapittelprøve – grenseverdier og kontinuitet

innelige funksjonen er ikke definert for \(x=a\) eller \(x=1\). Når \(x\to a\), får vi

    \[
    \lim_{x\to a}f_a(x)=\frac{2a}{a-1},
    \]

    så grafen har et hull i \(\left(a,\frac{2a}{a-1}\right)\). Siden \(a>1\), er telleren \(x+a\) ulik null ved \(x=1\), og dermed er \(x=1\) en vertikal asymptote. For \(x\to\pm\infty\) går brøken mot 1, så den horisontale asymptoten er \(y=1\).

    For ulikheten ser vi på fortegnene til \(x+a\) og \(x-1\). Siden \(-a<1\), er brøken positiv for \(x\leq-a\) og for \(x>1\), men null ved \(x=-a\). Vi må likevel utelate \(x=a\), der den opprinnelige funksjonen ikke er definert. Løsningen er derfor

    \[
    (-\infty,-a]\cup(1,a)\cup(a,\infty).
    \]

    Det forkortede uttrykket har samme funksjonsverdier som den opprinnelige funksjonen der begge er definert, men forkortingen fyller ikke inn de to punktene som manglet i den opprinnelige definisjonsmengden.

    **Resultat:** \(\underline{\underline{b=a-1}}\) for kontinuitet i oppgave 2.8.7.

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


??? note "Fasit – kapittelprøve 2.9"

    **2.P1.1:** Kontinuitet gir \(4+2a=8\), altså \(a=2\). Venstre stigningstall er da \(6\), mens høyre stigningstall er \(5\). De er ikke like.

    **2.P1.2:** Telleren faktoriseres til \((x-2)(x-3)\). Etter forkorting er grenseverdien \(1\).

    **2.P1.3:** Grenseverdien finnes og er \(4\), men funksjonsverdien er \(-2\). Funksjonen er ikke kontinuerlig.

    **2.P2.1:** \(g(x)=\frac{(x-1)(x-3)}{(x-2)(x-3)}=\frac{x-1}{x-2}\), for \(x\ne2,3\). Vertikal asymptote \(x=2\), horisontal asymptote \(y=1\), hull ved \((3,2)\).

    **2.P2.2:** Kontinuitet gir \(a=b\). Lik deriverte krever \(a=b+4\). Ingen par oppfyller begge kravene.

    **2.P2.3:** Ett eksempel er \(f(x)=x+\frac{1}{x-1}\), med vertikal asymptote \(x=1\) og skrå asymptote \(y=x\).

    **Resultat:** \(\underline{\underline{a=2}}\) i oppgave 2.P1.1.
