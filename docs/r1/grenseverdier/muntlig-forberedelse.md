# Forberedelse til muntlig prøve – kapittel 2

Målet med en muntlig framføring er å vise at du forstår begrepene og kan forklare hvorfor metodene virker. Du skal ikke bare presentere en utregning, men også tolke resultatet og vurdere om konklusjonen er gyldig.

## Temaer du bør kunne forklare

### 1. Grenseverdi og ensidige grenseverdier

- Forklar hva det betyr at \(f(x)\) nærmer seg en verdi når \(x\to a\).
- Forklar forskjellen på \(x\to a^-\) og \(x\to a^+\).
- Hvorfor må de ensidige grenseverdiene være like for at den vanlige grenseverdien skal finnes?
- Forklar hvorfor \(f(a)\) ikke nødvendigvis er lik grenseverdien.

### 2. Kontinuitet

- Gjør rede for de tre kravene til kontinuitet i et punkt.
- Gi et eksempel på en funksjon som har en grenseverdi i punktet, men ikke er kontinuerlig der.
- Forklar forskjellen på et hull og et sprang.

### 3. Beregning av grenseverdier

- Vis hvordan faktorisering kan gjøre det mulig å beregne en grenseverdi.
- Forklar hvorfor \(0/0\) ikke er et svar.
- Forklar hvorfor vi kan forkorte en felles faktor selv om faktoren blir null i grensepunktet.

### 4. Asymptoter

- Forklar hvordan du undersøker om en kandidat \(x=a\) er en vertikal asymptote.
- Forklar hvorfor nevner lik null ikke er tilstrekkelig.
- Vis forskjellen på et hull og en vertikal asymptote med to eksempler.
- Forklar hvordan du finner horisontale og skrå asymptoter.

### 5. Utforsking og anvendelser

- Hvordan kan et digitalt verktøy hjelpe deg med å undersøke en grenseverdi?
- Hvorfor er en graf eller en tabell med tall ikke alltid et matematisk bevis?
- Gi et eksempel på en praktisk situasjon der det er nyttig å forstå hva en funksjon nærmer seg.

## Øvingsoppgaver til muntlig framføring

!!! question "Muntlig oppgave 1 – grenseverdi eller funksjonsverdi?"

    En funksjon har

    \[
    \lim_{x\to2^-}f(x)=4,\qquad
    \lim_{x\to2^+}f(x)=4,\qquad f(2)=1.
    \]

    Forklar om den vanlige grenseverdien finnes. Er funksjonen kontinuerlig i \(x=2\)? Begrunn svaret ved å bruke definisjonen av kontinuitet.

??? note "Momenter i et godt svar"

    De ensidige grenseverdiene er like, så den vanlige grenseverdien finnes og er 4. Men \(f(2)=1\), så grenseverdien er ikke lik funksjonsverdien. Funksjonen er derfor ikke kontinuerlig i punktet.

!!! question "Muntlig oppgave 2 – et hull eller en vertikal asymptote?"

    Sammenlign funksjonene

    \[
    f(x)=\frac{x^2-4}{x-2}
    \qquad\text{og}\qquad
    g(x)=\frac{x^2-4}{(x-2)^2}.
    \]

    Begge har en nevner som blir null når \(x=2\).

    Forklar hvorfor den ene har et hull og den andre har en vertikal asymptote. Bruk faktorisering og ensidige grenseverdier.

??? note "Momenter i et godt svar"

    For \(f\) kan vi forkorte faktoren \(x-2\), og uttrykket blir \(x+2\) for \(x\ne2\). Grenseverdien er 4 fra begge sider, så grafen har et hull.

    For \(g\) får vi \((x+2)/(x-2)\). Funksjonen går mot \(-\infty\) fra venstre og \(+\infty\) fra høyre. Dermed er \(x=2\) en vertikal asymptote.

!!! question "Muntlig oppgave 3 – hvorfor undersøker vi begge sider?"

    En elev undersøker bare grenseverdien fra høyre og konkluderer med at den vanlige grenseverdien finnes.

    Forklar hvorfor framgangsmåten ikke er tilstrekkelig. Lag et eksempel der høyre og venstre grenseverdi er forskjellige.

??? note "Momenter i et godt svar"

    Den tosidige grenseverdien finnes bare dersom begge ensidige grenseverdiene finnes og er like. Et eksempel er \(f(x)=\frac{1}{x}\) når \(x\to0\): fra venstre går funksjonen mot \(-\infty\), og fra høyre mot \(+\infty\).

!!! question "Muntlig oppgave 4 – grenseverdi ved faktorisering"

    Bestem

    \[
    \lim_{x\to3}\frac{x^2-9}{x-3}.
    \]

    Forklar hvorfor direkte innsetting ikke gir svaret, og hvorfor forkortingen er lovlig i grenseprosessen.

??? note "Momenter i et godt svar"

    Vi får først \(0/0\), som er en ubestemt form. Telleren faktoriseres til \((x-3)(x+3)\). For \(x\ne3\) kan vi forkorte \(x-3\), og grenseverdien blir 6. Vi endrer ikke funksjonsverdien i \(x=3\); vi undersøker verdiene nær punktet.

!!! question "Muntlig oppgave 5 – horisontal og skrå asymptote"

    Sammenlign

    \[
    f(x)=\frac{3x^2+1}{x^2-2}
    \qquad\text{og}\qquad
    g(x)=\frac{x^2+1}{x}.
    \]

    Bestem asymptotene og forklar hvilke grenseverdier eller algebraiske metoder du bruker.

??? note "Momenter i et godt svar"

    For \(f\) deler vi teller og nevner på \(x^2\). Den horisontale asymptoten er \(y=3\). For \(g\) skriver vi \(g(x)=x+1/x\). Siden \(1/x\to0\) når \(x\to\pm\infty\), er \(y=x\) en skrå asymptote.

## Kjennetegn på en god muntlig framføring

- Du bruker matematiske begreper presist.
- Du forklarer hvorfor du velger en metode.
- Du skiller mellom funksjonsverdi og grenseverdi.
- Du undersøker ensidige grenseverdier når det er nødvendig.
- Du vurderer om en konklusjon følger av utregningen.
- Du kan forklare vanlige feil og moteksempler.
