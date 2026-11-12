# 3.12 Forberedelse til muntlig prøve – kapittel 3

Denne delen hjelper deg med å forberede deg til en muntlig prøve i derivasjon. Målet er ikke bare å kunne regne, men også å forklare hva du gjør, hvorfor metoden virker, og hvordan du tolker resultatene.

## Slik kan du forberede deg

Velg et tema, forklar det med egne ord, og vis et eksempel på tavle eller papir. Øv på å snakke mens du løser oppgaven. Bruk matematiske begreper og skriv mellomregning tydelig.

## Temaer du bør kunne forklare

### 1. Vekstfart og tangent

- Forklar forskjellen på gjennomsnittlig og momentan vekstfart.
- Vis hvordan en sekant nærmer seg en tangent.
- Forklar hva den deriverte forteller oss.
- Utled eller forklar tangentlikningen.

### 2. Derivasjonsreglene

- Forklar potensregelen og de vanlige derivasjonsreglene.
- Forklar når vi bruker kjerneregelen.
- Forklar produktregelen og brøkregelen.
- Vis et eksempel på hver regel, og begrunn hvorfor regelen passer.

### 3. Deriverbarhet

- Forklar hva det betyr at en funksjon er deriverbar.
- Forklar sammenhengen mellom kontinuitet og deriverbarhet.
- Vis hvorfor (f(x)=|x-1|) ikke er deriverbar i (x=1).
- Forklar hvordan vi kan undersøke ensidige stigningstall.

### 4. Definisjonen av den deriverte

- Forklar hva differansekvotienten beskriver.
- Vis hvordan vi bruker grenseverdien til å finne den deriverte.
- Forklar hvorfor vi ikke kan sette (h=0) før uttrykket er forenklet.
- Finn den deriverte av en enkel andregradsfunksjon ved hjelp av definisjonen.

### 5. Numerisk derivasjon

- Forklar hvordan vi kan tilnærme den deriverte med en differansekvotient.
- Sammenlign framoverdifferanse og symmetrisk differansekvotient.
- Forklar hvordan valg av (h) påvirker nøyaktigheten.

### 6. Bruk av den deriverte

- Forklar hvordan den deriverte kan brukes til å undersøke vekst og avtakning.
- Forklar hva en horisontal tangent betyr.
- Vis hvordan vi finner tangentlikningen i et bestemt punkt.
- Tolk svaret i en praktisk situasjon dersom oppgaven har en kontekst.

## Øvingsoppgaver til muntlig framføring

!!! question "Muntlig oppgave 1 – Fra sekant til tangent"

    Forklar forskjellen på gjennomsnittlig og momentan vekstfart. Tegn eller beskriv en graf, og vis hvordan sekanten nærmer seg tangenten.

??? note "Momenter i et godt svar"

    - Gjennomsnittlig vekstfart er stigningstallet til en sekant mellom to punkter.
    - Momentan vekstfart er stigningstallet til tangenten i ett punkt.
    - Når det ene punktet på sekanten nærmer seg det andre, nærmer sekanten seg tangenten.

!!! question "Muntlig oppgave 2 – Velg riktig derivasjonsregel"

    Du får funksjonen

    \[
    f(x)=(x^2+1)e^{3x}.
    \]

    Forklar hvilke derivasjonsregler du må bruke, og finn (f'(x)). Begrunn rekkefølgen du arbeider i.

??? note "Momenter i et godt svar"

    Vi bruker produktregelen fordi funksjonen er et produkt av to funksjoner. I derivasjonen av (e^{3x}) bruker vi også kjerneregelen.

    \[
    \begin{aligned}
    f'(x)&=2xe^{3x}+(x^2+1)3e^{3x}\\
    &=e^{3x}(2x+3x^2+3).
    \end{aligned}
    \]

!!! question "Muntlig oppgave 3 – Kontinuerlig, men ikke deriverbar"

    Bruk funksjonen (f(x)=|x-1|). Forklar hvorfor funksjonen er kontinuerlig, men ikke deriverbar i (x=1).

??? note "Momenter i et godt svar"

    Funksjonen har ingen brudd i (x=1), og (f(1)=0). Til venstre for 1 er stigningstallet (-1), mens det til høyre er (1). De ensidige stigningstallene er ulike, så funksjonen er ikke deriverbar der.

!!! question "Muntlig oppgave 4 – Den deriverte fra definisjonen"

    Bruk definisjonen til å finne den deriverte av (f(x)=x^2+2x). Forklar hvert steg.

??? note "Momenter i et godt svar"

    \[
    \begin{aligned}
    f'(x)&=\lim_{h\to0}\frac{(x+h)^2+2(x+h)-(x^2+2x)}h\\
    &=\lim_{h\to0}\frac{2xh+h^2+2h}{h}\\
    &=\lim_{h\to0}(2x+h+2)\\
    &=2x+2.
    \end{aligned}
    \]

    Det er viktig å forenkle og forkorte (h) før vi lar (h) gå mot null.

!!! question "Muntlig oppgave 5 – Tangent og tolkning"

    Vi har funksjonen (g(x)=x^2-4x+1).

    a) Finn (g'(x)).

    b) Bestem tangentens stigningstall når (x=3).

    c) Finn tangentlikningen i dette punktet.

    d) Forklar hva stigningstallet forteller om grafen akkurat der.

??? note "Momenter i et godt svar"

    \[
    g'(x)=2x-4,\qquad g'(3)=2.
    \]

    Vi har (g(3)=-2). Tangenten blir

    \[
    y+2=2(x-3)
    \quad\Rightarrow\quad
    y=2x-8.
    \]

    Stigningstallet 2 betyr at grafen stiger med 2 enheter i y-retning per enhet i x-retning akkurat ved (x=3).

## Kjennetegn på en god muntlig framføring

- Du bruker riktige matematiske begreper.
- Du forklarer hvorfor du velger en metode.
- Du viser mellomregning og holder orden på notasjonen.
- Du tolker resultatet, ikke bare oppgir et svar.
- Du kan svare på oppfølgingsspørsmål og reflektere over vanlige feil.

Du trenger ikke lære formuleringene utenat. Målet er at du skal forstå sammenhengene godt nok til å forklare dem med egne ord.
