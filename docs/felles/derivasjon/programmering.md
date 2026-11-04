# 3.8 Programmering: deriverte og vekstfart

## Oppgaver

!!! question "Oppgave 3.8.1 – Numerisk tilnærming"

    Skriv en funksjon i Python som tar inn en funksjon, et punkt \(x\) og en liten verdi \(h\), og beregner

    \[
    \frac{f(x+h)-f(x)}h.
    \]

    Test på \(f(x)=x^2\) ved \(x=3\). Sammenlign resultatet for flere verdier av \(h\) med den eksakte deriverte.

!!! question "Oppgave 3.8.2 – Sammenlign to metoder"

    Utvid programmet til også å beregne den symmetriske tilnærmingen. Lag en tabell over resultatene og forklar hvilken metode som er mest nøyaktig i testene dine. Ikke konkluder bare fra én enkelt verdi.

!!! question "Oppgave 3.8.3 – Bevegelse"

    La \(s(t)=t^3-6t^2+9t\) beskrive posisjon i meter etter \(t\) sekunder for \(0\leq t\leq5\).

    Skriv et program som beregner tilnærmet fart ved flere tidspunkter. Bruk deretter den deriverte til å finne den eksakte farten, og sammenlign. Drøft hva fortegnet på den deriverte betyr i modellen.

## Flere programmeringsoppgaver

Disse oppgavene bruker Python til å beregne vekstfart og tangentlikninger. De bygger videre på funksjoner, variabler, input og utskrift.

!!! question "Oppgave 3.8.4 – Beregn gjennomsnittlig vekstfart"

    Vi bruker funksjonen \(f(x)=x^2\) og formelen for gjennomsnittlig vekstfart:

    \[
    a=\frac{f(x_2)-f(x_1)}{x_2-x_1}
    \]

    a) Lag en Python-funksjon med `def` som beregner \(f(x)=x^2\). Funksjonen skal ta inn en x-verdi og returnere funksjonsverdien.

    b) Bruk funksjonen til å beregne \(f(x_1)\) og \(f(x_2)\) når \(x_1=1\) og \(x_2=3\).

    c) Beregn den gjennomsnittlige vekstfarten fra \(x=1\) til \(x=3\).

    d) Gjenta beregningen fra \(x=2\) til \(x=4\). Sammenlign svarene og forklar hvorfor vekstfarten er forskjellig.

!!! question "Oppgave 3.8.5 – Vekst i praksis"

    En plante er 12 cm høy etter én uke og 27 cm høy etter fire uker.

    a) Lag et program som beregner den gjennomsnittlige vekstfarten per uke.

    b) Skriv ut svaret sammen med teksten `cm per uke`.

    c) Endre programmet slik at det også kan brukes med andre start- og sluttverdier.

!!! question "Oppgave 3.8.6 – Finn tangentens likning"

    En tangent går gjennom punktet \((x_1,y_1)=(2,5)\) og har stigningstall \(a=3\).

    Bruk ettpunktsformelen

    \[
    y-y_1=a(x-x_1)
    \]

    a) Lag en funksjon `finn_konstant(x1, y1, a)` som returnerer konstanten \(b\) i likningen \(y=ax+b\).

    b) Bruk funksjonen til å finne \(b\) for punktet og stigningstallet ovenfor.

    c) Skriv ut hele tangentens likning, for eksempel på formen `y = 3x - 1`.

    **Hint:** Sett punktet inn i \(y=ax+b\), og løs likningen \(b=y_1-ax_1\).

!!! question "Oppgave 3.8.7 – Sammenlign tangenter"

    Lag et program som finner tangentlikninger for rette linjer gjennom samme punkt \((3,4)\).

    a) Bruk funksjonen fra oppgave 3.8.6 med stigningstall \(2\).

    b) Gjenta med stigningstall \(-1\).

    c) Skriv ut begge likningene. Forklar hvorfor de går gjennom samme punkt, men har ulike stigningstall.

!!! question "Oppgave 3.8.8 – Fra funksjonsverdier til tangent"

    Vi arbeider med funksjonen \(f(x)=x^2+1\). Når \(x=2\), er \(f(2)=5\), og den deriverte er \(f'(2)=4\).

    a) Lag variabler for punktets x-verdi, funksjonsverdi og tangentens stigningstall.

    b) Bruk funksjonen fra oppgave 3.8.6 til å finne konstanten \(b\).

    c) Skriv ut tangentens likning på formen \(y=ax+b\).

    d) Kontroller resultatet ved å sette punktet \((2,5)\) inn i tangentlikningen.

!!! question "Oppgave 3.8.9 – Lag en kalkulator for gjennomsnittlig vekstfart"

    Lag et program som ber brukeren skrive inn to x-verdier \(x_1\) og \(x_2\), og funksjonsverdiene \(f(x_1)\) og \(f(x_2)\).

    Programmet skal beregne og skrive ut den gjennomsnittlige vekstfarten.

    a) Bruk `input()` til å lese inn verdiene, og gjør dem om til tall med `float()`.

    b) Beregn vekstfarten ved hjelp av formelen.

    c) Test programmet med \(f(x)=x^2\), først fra \(x=1\) til \(x=3\), og deretter fra \(x=2\) til \(x=4\).

    d) Hva bør programmet gjøre dersom brukeren skriver inn samme x-verdi for \(x_1\) og \(x_2\)? Endre programmet slik at det gir en forståelig melding i stedet for å dele på null.

## Fasit og løsningsskisser

??? note "Fasit – oppgave 3.8.1"

    \`\`\`python
    def framoverdifferanse(f, x, h):
        return (f(x + h) - f(x)) / h

    f = lambda x: x**2
    for h in [0.1, 0.01, 0.001]:
        print(h, framoverdifferanse(f, 3, h))
    \`\`\`

    Den eksakte deriverte er \(f'(x)=2x\), så \(f'(3)=6\). Tilnærmingene blir henholdsvis \(6,1\), \(6,01\) og \(6,001\).

??? note "Fasit – oppgave 3.8.2"

    Den symmetriske tilnærmingen er \(\frac{f(x+h)-f(x-h)}{2h}\). For \(f(x)=x^2\) ved \(x=3\) gir den eksakt \(6\) i ideell regning, fordi uttrykket forenkles til \(6\). I flyttallsregning kan avrunding likevel forekomme.

??? note "Fasit – oppgave 3.8.3"

    \[
    s'(t)=3t^2-12t+9=3(t-1)(t-3).
    \]

    Den eksakte farten med fortegn er negativ for \(1<t<3\), positiv for \(0\leq t<1\) og \(3<t\leq5\), og lik null ved \(t=1\) og \(t=3\). Den numeriske tilnærmingen bør ligge nær \(s'(t)\) når \(h\) er tilstrekkelig liten.
