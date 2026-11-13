# Lure oppgaver – derivasjon

Disse oppgavene trener deg i å oppdage konklusjoner som kan virke riktige, men som ikke følger av det vi vet. Les påstanden nøye, undersøk den matematisk og begrunn konklusjonen.

**Arbeidsmåte**

1. Les påstanden eller den fristende konklusjonen.
2. Undersøk med regning og relevante definisjoner.
3. Still kontrollspørsmålet: Hva vet vi faktisk – og hva vet vi ikke?
4. Skriv en presis konklusjon.

Oppgavene løses med algebra og forklaringer. **Du skal ikke bruke CAS eller GeoGebra.**

## Oppgaver

!!! question "Oppgave L3.1 – Når den deriverte er null"

    En elev sier:

    «Hvis (f'(a)=0), må grafen ha et toppunkt eller bunnpunkt ved (x=a).»

    Undersøk påstanden ved å bruke funksjonen (f(x)=x^3).

    a) Bestem (f'(x)) og (f'(0)).

    b) Undersøk fortegnet til (f'(x)) på hver side av null.

    c) Har funksjonen toppunkt eller bunnpunkt ved (x=0)? Begrunn.

??? note "Fasit – oppgave L3.1"

    Vi har (f'(x)=3x^2), så (f'(0)=0). Men (f'(x)>0) både for (x<0) og (x>0). Funksjonen vokser på begge sider av null og har ikke toppunkt eller bunnpunkt der.

    **Konklusjon:** (f'(a)=0) betyr at tangenten er horisontal. Det er ikke alene nok til å avgjøre om punktet er et topp- eller bunnpunkt.

!!! question "Oppgave L3.2 – Kontinuerlig betyr ikke deriverbar"

    En elev sier:

    «Hvis grafen er sammenhengende uten hull, må funksjonen være deriverbar.»

    Bruk (f(x)=|x|) til å undersøke påstanden.

    a) Skriv funksjonen som en delt forskrift.

    b) Forklar hvorfor funksjonen er kontinuerlig i (x=0).

    c) Bestem stigningstallet fra venstre og fra høyre i (x=0).

    d) Er funksjonen deriverbar i punktet?

??? note "Fasit – oppgave L3.2"

    Vi kan skrive
    [
    f(x)=\begin{cases}-x,&x<0,\\x,&x\geq0.\end{cases}
    ]
    Begge ensidige grenseverdiene og funksjonsverdien er 0. Funksjonen er derfor kontinuerlig. Fra venstre er stigningstallet (-1), mens det fra høyre er (1). De er ulike, så den deriverte finnes ikke i (x=0).

    **Konklusjon:** Kontinuitet er nødvendig for deriverbarhet, men er ikke tilstrekkelig.

!!! question "Oppgave L3.3 – Horisontal tangent er ikke et nullpunkt"

    En elev finner (f'(2)=0) og skriver at punktet på grafen derfor er ((2,0)).

    Undersøk påstanden for
    [
    f(x)=(x-2)^2+3.
    ]

    a) Finn (f'(x)) og (f'(2)).

    b) Finn (f(2)).

    c) Skriv koordinatene til punktet der tangenten er horisontal.

??? note "Fasit – oppgave L3.3"

    Vi får (f'(x)=2(x-2)), så (f'(2)=0). Men (f(2)=3). Punktet er derfor ((2,3)), ikke ((2,0)).

    **Konklusjon:** (f'(2)) er tangentens stigningstall. Det er ikke funksjonsverdien (f(2)).

!!! question "Oppgave L3.4 – Positiv derivert betyr ikke positiv funksjon"

    En elev sier:

    «Når (f'(x)>0), må (f(x)>0).»

    Bruk (f(x)=x-5) til å undersøke påstanden.

    a) Bestem (f'(x)).

    b) Finn (f(2)) og (f(7)).

    c) Forklar hva den positive deriverte forteller, og hva den ikke forteller.

??? note "Fasit – oppgave L3.4"

    Vi har (f'(x)=1>0) for alle (x). Likevel er (f(2)=-3), mens (f(7)=2).

    **Konklusjon:** Positiv derivert betyr at funksjonen vokser. Den sier ikke at funksjonsverdiene er positive.

!!! question "Oppgave L3.5 – Produktregelen"

    En elev deriverer (f(x)=x^2e^x) slik:
    [
    f'(x)=2x\cdot e^x.
    ]

    a) Hvilken del av produktregelen har eleven glemt?

    b) Finn riktig uttrykk for (f'(x)).

    c) Kontroller svaret ved å beregne (f'(1)).

??? note "Fasit – oppgave L3.5"

    Produktregelen er (u'v+uv'). Her er (u=x^2) og (v=e^x), slik at
    [
    f'(x)=2xe^x+x^2e^x=e^x(2x+x^2).
    ]
    Dermed er (f'(1)=3e). Elevens uttrykk ville gitt (2e).

    **Konklusjon:** Når vi deriverer et produkt, må begge faktorene bidra i hvert sitt ledd.

!!! question "Oppgave L3.6 – Kjerneregelen"

    En elev skriver
    [
    \frac{d}{dx}(3x-1)^4=4(3x-1)^3.
    ]

    a) Hvilket uttrykk er den indre funksjonen?

    b) Hva er den deriverte av den indre funksjonen?

    c) Finn riktig derivert uttrykk.

??? note "Fasit – oppgave L3.6"

    Den indre funksjonen er (u=3x-1), og (u'=3). Kjerneregelen gir
    [
    4(3x-1)^3\cdot3=\underline{\underline{12(3x-1)^3}}.
    ]

    **Konklusjon:** Vi må multiplisere med den deriverte av den indre funksjonen.

!!! question "Oppgave L3.7 – Kvotientregelen"

    En elev deriverer
    [
    f(x)=\frac{x+1}{x-1}
    ]
    og får (f'(x)=\frac{-2}{x-1}).

    a) Finn riktig derivert uttrykk.

    b) Pek på feilen i elevens svar.

    c) Bestem (f'(0)).

??? note "Fasit – oppgave L3.7"

    Kvotientregelen gir
    [
    f'(x)=\frac{1\cdot(x-1)-(x+1)\cdot1}{(x-1)^2}
    =\frac{-2}{(x-1)^2}.
    ]
    Dermed er (f'(0)=-2). Eleven har glemt å kvadrere nevneren.

    **Konklusjon:** I kvotientregelen skal nevneren i resultatet være (v^2).

!!! question "Oppgave L3.8 – Husk endepunktene"

    En elev skal finne største og minste verdi til
    [
    f(x)=x^2
    ]
    på intervallet ([-1,2]). Eleven løser (f'(x)=0), finner (x=0) og konkluderer med at maksimum og minimum begge er 0.

    a) Finn de stasjonære punktene i intervallet.

    b) Beregn funksjonsverdiene i begge endepunktene og i det stasjonære punktet.

    c) Bestem globalt maksimum og minimum.

??? note "Fasit – oppgave L3.8"

    Vi har (f'(x)=2x), så det stasjonære punktet er (x=0). Vi må også undersøke endepunktene:
    [
    f(-1)=1,\qquad f(0)=0,\qquad f(2)=4.
    ]
    Globalt minimum er 0 ved (x=0), og globalt maksimum er 4 ved (x=2).

    **Konklusjon:** På et lukket intervall må vi kontrollere både stasjonære punkter og endepunktene.

!!! question "Oppgave L3.9 – Tangenten kan møte grafen igjen"

    En elev sier:

    «En tangent berører grafen i ett punkt, så den kan ikke skjære grafen andre steder.»

    Bruk (f(x)=x^3) og tangenten i (x=1).

    a) Finn tangentens likning.

    b) Løs likningen mellom grafen og tangenten.

    c) Hvor mange ulike skjæringspunkter får vi?

??? note "Fasit – oppgave L3.9"

    Vi har (f'(x)=3x^2), (f(1)=1) og (f'(1)=3). Tangenten er
    [
    y-1=3(x-1),\qquad y=3x-2.
    ]
    Skjæringspunktene finner vi fra
    [
    x^3=3x-2
    \quad\Longleftrightarrow\quad
    (x-1)^2(x+2)=0.
    ]
    Dermed er (x=1) og (x=-2). Tangenten møter grafen i to ulike punkter.

    **Konklusjon:** Tangenten har samme lokale retning som grafen i tangeringspunktet, men kan skjære grafen igjen andre steder.
