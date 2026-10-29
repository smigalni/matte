# Blandede oppgaver – kapittel 3

Her får du arbeide med temaene i kapittel 3 på tvers av delkapitlene. Oppgavene er inspirert av oppgavetyper i løsningsforslaget til R1 kapittel 3, men er formulert på nytt med andre funksjoner, tall og situasjoner.

Oppgavene blander vekstfart og tangenter, derivasjonsregler, kjerneregelen, produktregelen, kvotientregelen og undersøkelse av deriverbarhet. Noen oppgaver ber deg også forklare framgangsmåten eller finne feil i en utregning.

**Tips:** Skriv mellomregning, og oppgi hvilken regel du bruker. Når du forenkler et uttrykk, kontroller at du ikke mister faktorer eller fortegn.

## Slik leser du nivåene

- 🟢 **Grønn – Grunnlag:** én sentral ferdighet om gangen.
- 🟡 **Gul – Kombinasjon:** flere steg eller flere regler i samme oppgave.
- 🔴 **Rød – Selvstendig problemløsing:** velg metode selv, begrunn og kombiner flere ideer.

## 🟢 Grønn – Grunnlag

!!! question "Oppgave 3.1 – Gjennomsnittlig vekstfart"
    Vi har funksjonen \(f(x)=x^2-3\).

    a) Finn \(f(1)\) og \(f(4)\).

    b) Finn den gjennomsnittlige vekstfarten fra \(x=1\) til \(x=4\).

    c) Forklar forskjellen på den gjennomsnittlige vekstfarten i intervallet og den momentane vekstfarten i ett punkt.

!!! question "Oppgave 3.2 – Deriver enkle funksjoner"
    Deriver funksjonene.

    a) \(f(x)=5x^4\)

    b) \(g(x)=3x^2-4x+7\)

    c) \(h(x)=\frac{2}{x}\)

    d) \(p(x)=4e^x-3\ln x\)

!!! question "Oppgave 3.3 – Deriverte i et bestemt punkt"
    Funksjonen er \(f(x)=x^3-2x^2+1\).

    a) Finn \(f'(x)\).

    b) Finn \(f'(2)\).

    c) Hva forteller tallet \(f'(2)\) geometrisk?

!!! question "Oppgave 3.4 – Tangentens likning"
    Grafen til en funksjon går gjennom punktet \(P=(2,5)\), og tangenten i punktet har stigningstall \(3\).

    a) Bruk ettpunktsformelen til å finne tangentens likning.

    b) Skriv svaret på formen \(y=ax+b\).

!!! question "Oppgave 3.5 – Kjerneregelen"
    Deriver funksjonene.

    a) \(f(x)=(2x+1)^5\)

    b) \(g(x)=e^{3x}\)

    c) \(h(x)=\ln(4x-2)\)

## 🟡 Gul – Kombinasjon

!!! question "Oppgave 3.6 – Flere derivasjonsregler"
    Deriver og forenkle så langt det er naturlig.

    a) \(f(x)=x^2e^x\)

    b) \(g(x)=(3x-1)\ln x\)

    c) \(h(x)=\frac{x^2+1}{x}\)

    d) \(p(x)=\frac{e^{2x}}{x+1}\)

!!! question "Oppgave 3.7 – Finn tangent til en funksjon"
    Vi har funksjonen \(f(x)=x^2-4x+6\).

    a) Finn den deriverte \(f'(x)\).

    b) Finn stigningstallet til tangenten når \(x=3\).

    c) Finn punktet på grafen når \(x=3\).

    d) Bestem tangentens likning på formen \(y=ax+b\).

!!! question "Oppgave 3.8 – Undersøk deriverbarhet"
    Vi har funksjonen

    \[
    f(x)=
    \begin{cases}
    x+2, & x<1,\\
    x^2+2, & x\geq 1.
    \end{cases}
    \]

    a) Undersøk om funksjonen er kontinuerlig i \(x=1\).

    b) Finn stigningstallet fra venstre og fra høyre ved \(x=1\).

    c) Avgjør om funksjonen er deriverbar i \(x=1\). Begrunn svaret.

!!! question "Oppgave 3.9 – Finn og forklar feilen"
    En elev skal derivere \(f(x)=e^{2x}(x-1)\), og skriver

    \[
    f'(x)=e^{2x}+e^{2x}=2e^{2x}.
    \]

    a) Hvilke derivasjonsregler må brukes?

    b) Forklar hva eleven har gjort feil.

    c) Finn riktig uttrykk for \(f'(x)\).

!!! question "Oppgave 3.10 – Bestem en parameter"
    Funksjonen er \(f(x)=x^3+kx\).

    Bestem \(k\) slik at tangenten til grafen i \(x=1\) har stigningstall \(5\).

!!! question "Oppgave 3.11 – Derivasjon av en brøk"
    Vi har funksjonen

    \[
    f(x)=\frac{x^2+3}{x-1},\qquad x\ne 1.
    \]

    a) Bruk kvotientregelen til å finne \(f'(x)\).

    b) Skriv telleren i den deriverte så enkelt som mulig.

    c) Finn \(f'(2)\).

## 🔴 Rød – Selvstendig problemløsing

!!! question "Oppgave 3.12 – Produkt eller kjerneregel?"
    Vi har funksjonen \(f(x)=x^2e^{-2x}\).

    a) Forklar hvorfor produktregelen må brukes.

    b) Deriver funksjonen. Husk også å derivere eksponenten i \(e^{-2x}\).

    c) Faktoriser svaret slik at det blir tydelig hvor den deriverte er lik null.

!!! question "Oppgave 3.13 – Finn en funksjon ut fra informasjon"
    En andregradsfunksjon har formen \(f(x)=ax^2+bx+c\). Grafen går gjennom punktet \((0,2)\), og tangentens stigningstall ved \(x=1\) er \(4\). Dessuten er \(f(1)=5\).

    a) Bruk opplysningene til å lage likninger for \(a\), \(b\) og \(c\).

    b) Bestem funksjonen.

    c) Kontroller at funksjonen oppfyller alle opplysningene.

!!! question "Oppgave 3.14 – Deriverbarhet og parameter"
    Vi har funksjonen

    \[
    g(x)=
    \begin{cases}
    kx+1, & x<2,\\
    x^2-1, & x\geq 2.
    \end{cases}
    \]

    a) Bestem \(k\) slik at funksjonen er kontinuerlig i \(x=2\).

    b) Bestem \(k\) slik at stigningstallene fra venstre og høyre er like ved \(x=2\).

    c) Finnes det en verdi av \(k\) som gjør funksjonen deriverbar i \(x=2\)? Begrunn.

!!! question "Oppgave 3.15 – Sammenlign to metoder"
    Vi har funksjonen \(f(x)=x^2+2x\).

    a) Finn \(f'(x)\) ved å bruke de vanlige derivasjonsreglene.

    b) Bruk definisjonen

    \[
    f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}
    \]

    til å utlede den deriverte.

    c) Sammenlign metodene. Hvorfor gir de samme svar?

!!! question "Oppgave 3.16 – Modellering og tolkning"
    Høyden til en ball over bakken er modellert ved

    \[
    h(t)=-5t^2+20t+1,
    \]

    der \(h\) måles i meter og \(t\) i sekunder.

    a) Finn den momentane vekstfarten \(h'(t)\).

    b) Finn vekstfarten etter \(1\) sekund.

    c) Når er vekstfarten lik null?

    d) Forklar hva tidspunktet i c betyr for ballens bevegelse, og finn høyden da.

---

## Fasit

Prøv oppgavene først. Åpne deretter fasiten og sammenlign framgangsmåten din.

??? note "Fasit – oppgave 3.1"
    a) \(f(1)=-2\) og \(f(4)=13\).

    b) \[
    \frac{f(4)-f(1)}{4-1}=\frac{13-(-2)}{3}=5.
    \]

    c) Gjennomsnittlig vekstfart gjelder et helt intervall; momentan vekstfart gjelder ett bestemt punkt og er stigningstallet til tangenten.

??? note "Fasit – oppgave 3.2"
    a) \(f'(x)=20x^3\).

    b) \(g'(x)=6x-4\).

    c) \(h(x)=2x^{-1}\), så \(h'(x)=-2x^{-2}=-\frac{2}{x^2}\).

    d) \(p'(x)=4e^x-\frac{3}{x}\), for \(x>0\).

??? note "Fasit – oppgave 3.3"
    a) \(f'(x)=3x^2-4x\).

    b) \(f'(2)=12-8=4\).

    c) Tangentens stigningstall ved \(x=2\) er 4.

??? note "Fasit – oppgave 3.4"
    \[
    y-5=3(x-2)\quad\Rightarrow\quad \boxed{y=3x-1}.
    \]

??? note "Fasit – oppgave 3.5"
    a) \(f'(x)=10(2x+1)^4\).

    b) \(g'(x)=3e^{3x}\).

    c) \(h'(x)=\frac{4}{4x-2}\), for \(x>\frac12\).

??? note "Fasit – oppgave 3.6"
    a) \(f'(x)=2xe^x+x^2e^x=e^x(x^2+2x)\).

    b) \(g'(x)=3\ln x+\frac{3x-1}{x}=3\ln x+3-\frac1x\), for \(x>0\).

    c) \(h(x)=x+\frac1x\), så \(h'(x)=1-\frac1{x^2}\).

    d) \[
    p'(x)=\frac{2e^{2x}(x+1)-e^{2x}}{(x+1)^2}
    =\frac{e^{2x}(2x+1)}{(x+1)^2}.
    \]

??? note "Fasit – oppgave 3.7"
    a) \(f'(x)=2x-4\).

    b) \(f'(3)=2\).

    c) \(f(3)=9-12+6=3\), altså \((3,3)\).

    d) \(y-3=2(x-3)\), altså \(\boxed{y=2x-3}\).

??? note "Fasit – oppgave 3.8"
    a) Fra venstre er grenseverdien \(1+2=3\). Fra høyre er funksjonsverdien \(1^2+2=3\). Funksjonen er kontinuerlig.

    b) Fra venstre er stigningstallet 1. Fra høyre er den deriverte av \(x^2+2\) lik \(2x\), som gir 2 ved \(x=1\).

    c) Funksjonen er ikke deriverbar fordi stigningstallene fra venstre og høyre er ulike.

??? note "Fasit – oppgave 3.9"
    a) Produktregelen og kjerneregelen.

    b) Eleven har ikke derivert faktoren \(x-1\) korrekt i produktregelen: den deriverte av \(x-1\) er 1, men den andre termen må fortsatt multipliseres med \(x-1\). Dessuten er \((e^{2x})'=2e^{2x}\).

    c) \[
    f'(x)=2e^{2x}(x-1)+e^{2x}
    =e^{2x}(2x-1).
    \]

??? note "Fasit – oppgave 3.10"
    \(f'(x)=3x^2+k\). Kravet \(f'(1)=5\) gir \(3+k=5\), altså \(\boxed{k=2}\).

??? note "Fasit – oppgave 3.11"
    a) \[
    f'(x)=\frac{2x(x-1)-(x^2+3)}{(x-1)^2}.
    \]

    b) Telleren blir \(2x^2-2x-x^2-3=x^2-2x-3\). Dermed

    \[
    f'(x)=\frac{x^2-2x-3}{(x-1)^2}.
    \]

    c) \(f'(2)=\frac{4-4-3}{1}=-3\).

??? note "Fasit – oppgave 3.12"
    a) Funksjonen er et produkt av \(x^2\) og \(e^{-2x}\).

    b) \[
    f'(x)=2xe^{-2x}+x^2e^{-2x}(-2)
    =e^{-2x}(2x-2x^2).
    \]

    c) \(f'(x)=2xe^{-2x}(1-x)\). Siden \(e^{-2x}\) aldri er null, er den deriverte null når \(x=0\) eller \(x=1\).

??? note "Fasit – oppgave 3.13"
    a) \(f(0)=2\) gir \(c=2\). Videre er \(f(1)=a+b+c=5\), så \(a+b=3\). Den deriverte er \(f'(x)=2ax+b\), og \(f'(1)=4\) gir \(2a+b=4\).

    b) Ved å trekke likningene fra hverandre får vi \(a=1\), dermed \(b=2\) og \(c=2\). Altså \(\boxed{f(x)=x^2+2x+2}\).

    c) \(f(0)=2\), \(f(1)=5\), og \(f'(1)=2+2=4\).

??? note "Fasit – oppgave 3.14"
    a) Kontinuitet krever \(2k+1=2^2-1=3\), altså \(k=1\).

    b) Stigningstallet fra venstre er \(k\), mens stigningstallet fra høyre er \(2x=4\) ved \(x=2\). Dermed krever like stigningstall \(k=4\).

    c) Nei. Kontinuitet krever \(k=1\), mens like stigningstall krever \(k=4\). Ingen verdi oppfyller begge kravene.

??? note "Fasit – oppgave 3.15"
    a) \(f'(x)=2x+2\).

    b) \[
    \begin{aligned}
    f'(x)&=\lim_{h\to0}\frac{(x+h)^2+2(x+h)-(x^2+2x)}{h}\\
    &=\lim_{h\to0}\frac{2xh+h^2+2h}{h}\\
    &=\lim_{h\to0}(2x+h+2)=2x+2.
    \end{aligned}
    \]

    c) Begge metodene beskriver den samme grenseverdien. Derivasjonsreglene gjør beregningen kortere, mens definisjonen viser hvorfor resultatet gjelder.

??? note "Fasit – oppgave 3.16"
    a) \(h'(t)=-10t+20\).

    b) \(h'(1)=10\) m/s.

    c) \(-10t+20=0\) gir \(t=2\) sekunder.

    d) Ballen er på sitt høyeste punkt når den momentane vertikale vekstfarten er null. Høyden er \(h(2)=-20+40+1=21\) meter.
