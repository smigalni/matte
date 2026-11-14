# Formeloversikt – grenseverdier og kontinuitet

Denne oversikten samler sentrale definisjoner og framgangsmåter fra kapittel 2.

## Ensidige grenseverdier

Fra venstre:

\[
\lim_{x\to a^-}f(x)
\]

Fra høyre:

\[
\lim_{x\to a^+}f(x)
\]

Den vanlige grenseverdien finnes når begge ensidige grenseverdiene finnes og er like:

\[
\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L
\]

Da skriver vi

\[
\lim_{x\to a}f(x)=L.
\]

## Kontinuitet i et punkt

En funksjon er kontinuerlig i \(x=a\) når alle tre kravene er oppfylt:

1. \(f(a)\) er definert.
2. \(\lim_{x\to a}f(x)\) finnes.
3. \(\lim_{x\to a}f(x)=f(a)\).

## Grenseverdier ved faktorisering

Hvis direkte innsetting gir \(0/0\), er formen ubestemt. Faktoriser og undersøk om felles faktorer kan forkortes:

\[
\lim_{x\to a}\frac{(x-a)g(x)}{x-a}
=
\lim_{x\to a}g(x),
\]

forutsatt at uttrykkene er definert for \(x\ne a\) nær punktet.

Forkortingen endrer ikke den opprinnelige funksjonens definisjonsmengde. Funksjonen kan fortsatt være udefinert i \(x=a\).

## Vertikale asymptoter

Linjen \(x=a\) er en vertikal asymptote dersom minst én av de ensidige grenseverdiene går mot \(+\infty\) eller \(-\infty\):

\[
\lim_{x\to a^-}f(x)=\pm\infty
\quad\text{eller}\quad
\lim_{x\to a^+}f(x)=\pm\infty.
\]

**Husk:** At nevneren blir null, gir bare en kandidat. Faktoriser, forkort eventuelle felles faktorer og undersøk grenseverdiene.

## Horisontale asymptoter

Linjen \(y=L\) er en horisontal asymptote dersom

\[
\lim_{x\to\infty}f(x)=L
\]

eller

\[
\lim_{x\to-\infty}f(x)=L.
\]

De to grensene kan gi ulike horisontale asymptoter.

## Skrå asymptoter

En skrå asymptote har formen

\[
y=ax+b,\qquad a\ne0.
\]

Ved rasjonale funksjoner kan polynomdivisjon ofte brukes til å skrive funksjonen som

\[
f(x)=ax+b+r(x),
\]

der \(r(x)\to0\) når \(x\to\pm\infty\). Da er \(y=ax+b\) en skrå asymptote.

## Viktige skiller

- **Grenseverdi:** Verdien funksjonen nærmer seg.
- **Funksjonsverdi:** Verdien funksjonen faktisk har i punktet.
- **Hull:** Grenseverdien er endelig, men funksjonen er ikke definert i punktet eller har en annen funksjonsverdi.
- **Sprang:** De ensidige grenseverdiene er endelige, men ulike.
- **Vertikal asymptote:** Minst én ensidig grenseverdi går mot uendelig i absoluttverdi.
- **\(0/0\):** En ubestemt form, ikke et svar og ikke i seg selv et bevis på at grenseverdien mangler.
