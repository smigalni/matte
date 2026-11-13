# 3.8 Programmering: lese og skrive kode

I dette delkapitlet skal du øve både på å **lese Python-kode** og på å **skrive egne programmer**. Du skal trene like mye på begge deler. Når du leser kode, følger du variabler og programflyt steg for steg. Når du skriver kode, må du velge en framgangsmåte, teste programmet og tolke resultatene.

## Oppgaver

### Del A – les og forstå kode

!!! question "Oppgave 3.8.1 – Variabler og utskrift"

    Les programmet:

    ```python
    x = 3
    y = x**2
    print(y)
    print(x + y)
    ```

    a) Hva skriver programmet ut?

    b) Forklar kort hvordan programmet finner verdien til \(y\).

??? note "Fasit – oppgave 3.8.1"

    Først er \(x=3\). Deretter blir \(y=3^2=9\).

    Programmet skriver ut:

    ```text
    9
    12
    ```

    Den siste utskriften er \(x+y=3+9=12\).

    **Resultat:** \(\underline{\underline{9,\;12}}\).

!!! question "Oppgave 3.8.2 – Funksjon og returverdi"

    Les programmet:

    ```python
    def f(x):
        return x**2 + 1

    print(f(2))
    print(f(4))
    ```

    a) Hva returnerer funksjonen når \(x=2\)?

    b) Hva skriver programmet ut?

??? note "Fasit – oppgave 3.8.2"

    Når \(x=2\), får vi \(f(2)=2^2+1=5\). Når \(x=4\), får vi \(f(4)=4^2+1=17\).

    Programmet skriver ut:

    ```text
    5
    17
    ```

    **Resultat:** \(\underline{\underline{5,\;17}}\).

!!! question "Oppgave 3.8.3 – Gjennomsnittlig vekstfart"

    Les programmet:

    ```python
    def f(x):
        return x**2

    x1 = 1
    x2 = 3
    vekstfart = (f(x2) - f(x1)) / (x2 - x1)
    print(vekstfart)
    ```

    a) Hva er verdiene til \(f(x_1)\) og \(f(x_2)\)?

    b) Hva skriver programmet ut?

    c) Hva forteller tallet om grafen?

??? note "Fasit – oppgave 3.8.3"

    Vi får \(f(1)=1\) og \(f(3)=9\). Dermed blir

    \[
    \frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4.
    \]

    Programmet skriver ut:

    ```text
    4.0
    ```

    Tallet er stigningstallet til sekanten, altså den gjennomsnittlige vekstfarten fra \(x=1\) til \(x=3\).

    **Resultat:** \(\underline{\underline{4}}\).

!!! question "Oppgave 3.8.4 – En løkke"

    Les programmet:

    ```python
    for x in [1, 2, 3, 4]:
        print(x**2)
    ```

    a) Hvilke verdier får \(x\) etter tur?

    b) Hva skriver programmet ut?

    c) Hvilken sammenheng ser du mellom tallene som skrives ut?

??? note "Fasit – oppgave 3.8.4"

    Løkken bruker først \(x=1\), deretter \(x=2\), \(x=3\) og til slutt \(x=4\). Hver gang skriver den ut \(x^2\).

    Programmet skriver ut:

    ```text
    1
    4
    9
    16
    ```

    Tallene er funksjonsverdiene til \(f(x)=x^2\) for de fire x-verdiene.

    **Resultat:** \(\underline{\underline{1,\;4,\;9,\;16}}\).

!!! question "Oppgave 3.8.5 – En løkke med beregning"

    Les programmet:

    ```python
    for x in [1, 2, 3]:
        y = 2*x + 1
        print(y)
    ```

    a) Hva blir verdien til \(y\) hver gang løkken kjøres?

    b) Hva skriver programmet ut?

    c) Hvilken funksjon beskriver beregningen?

??? note "Fasit – oppgave 3.8.5"

    Når \(x=1\), blir \(y=3\). Når \(x=2\), blir \(y=5\). Når \(x=3\), blir \(y=7\).

    Programmet skriver ut:

    ```text
    3
    5
    7
    ```

    Beregningen beskriver funksjonen \(f(x)=2x+1\).

    **Resultat:** \(\underline{\underline{3,\;5,\;7}}\).

### Del B – skriv egne programmer

!!! question "Oppgave 3.8.6 – Undersøk fortegnet til den deriverte"

    Vi har funksjonen \(f(x)=x^2\). Skriv et program som går gjennom x-verdiene -2, 0 og 2.

    a) Beregn \(f'(x)=2x\) for hver x-verdi.

    b) Bruk en betingelse til å skrive ut «positiv» når den deriverte er større enn null, og «ikke positiv» ellers.

    c) Skriv ut både x-verdien og teksten som beskriver fortegnet.

??? note "Fasit – oppgave 3.8.6"

    Ett mulig program er:

    ```python
    for x in [-2, 0, 2]:
        y = 2*x
        if y > 0:
            print(x, "positiv")
        else:
            print(x, "ikke positiv")
    ```

    Programmet skriver ut:

    ```text
    -2 ikke positiv
    0 ikke positiv
    2 positiv
    ```

    Den deriverte er negativ ved \(x=-2\), null ved \(x=0\) og positiv ved \(x=2\).

    **Resultat:** \(\underline{\underline{f'(-2)=-4,\;f'(0)=0,\;f'(2)=4}}\).

!!! question "Oppgave 3.8.7 – Finn den største verdien"

    Skriv et program som finner den største verdien i listen

    \[
    verdier=[3,7,2,5].
    \]

    a) Sett først den største verdien lik det første tallet i listen.

    b) Gå gjennom listen med en løkke.

    c) Bruk en betingelse til å oppdatere den største verdien når du finner et større tall.

    d) Skriv ut den største verdien.

??? note "Fasit – oppgave 3.8.7"

    Ett mulig program er:

    ```python
    verdier = [3, 7, 2, 5]
    storst = verdier[0]

    for tall in verdier:
        if tall > storst:
            storst = tall

    print(storst)
    ```

    Programmet sammenligner hvert tall med den største verdien det har funnet så langt. Det skriver ut 7.

    **Resultat:** \(\underline{\underline{7}}\).

!!! question "Oppgave 3.8.8 – Beregn en differansekvotient"

    Vi har funksjonen \(f(x)=x^2\). Skriv et program som beregner differansekvotienten i \(x=3\) når \(\Delta x=0,1\).

    a) Lag en funksjon som beregner \(f(x)\).

    b) Beregn differansekvotienten

    \[
    \frac{f(3+\Delta x)-f(3)}{\Delta x}.
    \]

    c) Skriv ut svaret med to desimaler.

    d) Sammenlign med den eksakte verdien av \(f'(3)\).

??? note "Fasit – oppgave 3.8.8"

    Ett mulig program er:

    ```python
    def f(x):
        return x**2

    x = 3
    delta_x = 0.1
    svar = (f(x + delta_x) - f(x)) / delta_x
    print(round(svar, 2))
    ```

    Programmet skriver ut 6.1. Den eksakte deriverte er \(f'(x)=2x\), så \(f'(3)=6\).

    **Resultat:** \(\underline{\underline{6,1}}\) som tilnærming og \(\underline{\underline{6}}\) som eksakt derivert verdi.

!!! question "Oppgave 3.8.9 – Undersøk hva som skjer når steget blir mindre"

    Vi har fortsatt \(f(x)=x^2\). Skriv et program som beregner differansekvotienten i \(x=3\) for

    \[
    \Delta x=1,\quad 0,1,\quad 0,01.
    \]

    a) Bruk en liste med de tre steglengdene og en løkke.

    b) Skriv ut differansekvotienten for hver steglengde.

    c) Forklar hvilken verdi svarene nærmer seg, og hvorfor.

??? note "Fasit – oppgave 3.8.9"

    Ett mulig program er:

    ```python
    def f(x):
        return x**2

    for delta_x in [1, 0.1, 0.01]:
        svar = (f(3 + delta_x) - f(3)) / delta_x
        print(round(svar, 3))
    ```

    Programmet skriver ut:

    ```text
    7.0
    6.1
    6.01
    ```

    Svarene nærmer seg 6, som er \(f'(3)\). Når \(\Delta x\) nærmer seg null, nærmer differansekvotienten seg den deriverte.

    **Resultat:** \(\underline{\underline{f'(3)=6}}\).

!!! question "Oppgave 3.8.10 – Lag et program som finner tangenten"

    Vi har funksjonen \(f(x)=x^2\). Skriv et program som finner tangentens likning når \(x_1=2\).

    a) Lag en funksjon for \(f(x)\) og en funksjon for den deriverte.

    b) Beregn \(y_1=f(x_1)\) og stigningstallet \(a=f'(x_1)\).

    c) Bruk \(b=y_1-ax_1\) til å finne konstantleddet.

    d) Skriv ut verdiene og tangentens likning.

??? note "Fasit – oppgave 3.8.10"

    Ett mulig program er:

    ```python
    def f(x):
        return x**2

    def derivert(x):
        return 2*x

    x1 = 2
    y1 = f(x1)
    a = derivert(x1)
    b = y1 - a*x1

    print(y1)
    print(a)
    print("y =", a, "x +", b)
    ```

    Programmet skriver ut:

    ```text
    4
    4
    y = 4 x + -4
    ```

    Vi får \(y_1=4\), \(a=4\) og \(b=-4\). Tangentens likning er \(y=4x-4\).

    **Resultat:** \(\underline{\underline{y=4x-4}}\).


---
