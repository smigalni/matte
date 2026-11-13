# 2.7 Programmering: lese og skrive kode

I dette delkapitlet skal du både lese andres kode og skrive egne programmer. Du skal trene like mye på begge deler. Når du leser kode, må du følge variabler og programflyt nøyaktig. Når du skriver kode, må du velge en framgangsmåte, teste programmet og tolke resultatene.

## Oppgaver

### Del A – les og forstå kode

!!! question "Oppgave 2.7.1 – Følg beregningene nær et hull"

    Les programmet:

    ```python
    def f(x):
        return (x**2 - 4) / (x - 2)

    for x in [1.9, 1.99, 2.01, 2.1]:
        print(x, round(f(x), 2))
    ```

    a) Hva skriver programmet ut?

    b) Hvilken verdi ser funksjonsverdiene ut til å nærme seg når \(x\) nærmer seg 2?

    c) Hvorfor får vi ikke undersøkt \(x=2\) med dette programmet?

    d) Forklar hvorfor tallene alene ikke er et fullstendig matematisk bevis.

??? note "Fasit – oppgave 2.7.1"

    For \(x\ne2\) kan vi faktorisere uttrykket:

    \[
    f(x)=\frac{(x-2)(x+2)}{x-2}=x+2.
    \]

    Programmet skriver ut:

    ```text
    1.9 3.9
    1.99 3.99
    2.01 4.01
    2.1 4.1
    ```

    Verdiene nærmer seg 4. Funksjonen er ikke definert ved \(x=2\), fordi den opprinnelige nevneren blir null. Faktoriseringen viser matematisk at grenseverdien er 4.
    **Resultat:** \(\underline{\underline{4}}\).


!!! question "Oppgave 2.7.2 – Les en undersøkelse fra begge sider"

    Les programmet:

    ```python
    for x in [2.9, 2.99, 3.01, 3.1]:
        y = 1 / (x - 3)
        print(x, round(y, 2))
    ```

    a) Hva skriver programmet ut?

    b) Hvilke x-verdier undersøker venstresiden, og hvilke undersøker høyresiden?

    c) Hva forteller fortegnene om de ensidige grenseverdiene til \(f(x)=1/(x-3)\)?

    d) Hvorfor er det viktig å undersøke begge sider?

??? note "Fasit – oppgave 2.7.2"

    Programmet skriver ut:

    ```text
    2.9 -10.0
    2.99 -100.0
    3.01 100.0
    3.1 10.0
    ```

    Verdiene 2.9 og 2.99 ligger til venstre for 3. Verdiene 3.01 og 3.1 ligger til høyre. Dermed ser vi at funksjonen går mot \(-\infty\) fra venstre og \(+\infty\) fra høyre. Dette viser hvorfor vi må undersøke begge retninger.
    **Resultat:** Fra venstre \(\underline{\underline{-\infty}}\), fra høyre \(\underline{\underline{+\infty}}\).


!!! question "Oppgave 2.7.3 – Finn feilen i programmet"

    En elev vil undersøke funksjonen

    \[
    f(x)=\frac{x^2-4}{x-2}
    \]

    og skriver:

    ```python
    def f(x):
        return (x**2 - 4) / (x - 2)

    for x in [1.9, 2, 2.1]:
        print(f(x))
    ```

    a) Hva skjer når programmet kommer til \(x=2\)?

    b) Hvorfor stopper programmet før det skriver ut alle verdiene?

    c) Foreslå en endring som gjør at programmet kan skrive ut en forklarende melding i stedet for å forsøke å dele på null.

??? note "Fasit – oppgave 2.7.3"

    Når \(x=2\), blir nevneren null. Python gir en `ZeroDivisionError`, og programmet stopper. En mulig løsning er å kontrollere verdien før funksjonen kalles:

    ```python
    def f(x):
        return (x**2 - 4) / (x - 2)

    for x in [1.9, 2, 2.1]:
        if x == 2:
            print("Funksjonen er ikke definert")
        else:
            print(round(f(x), 2))
    ```

    Da skriver programmet ut:

    ```text
    3.9
    Funksjonen er ikke definert
    4.1
    ```

    Her er sammenligningen `x == 2` trygg fordi programmet tester den eksakte heltallsverdien 2 fra listen. Ved beregninger med desimaltall bør vi vanligvis ikke teste likhet direkte, fordi flyttallsavrunding kan gi små avvik.

    **Resultat:** Programmet må håndtere \(\underline{\underline{x=2}}\) særskilt for å unngå deling på null.


### Del B – skriv egne programmer

!!! question "Oppgave 2.7.4 – Lag en verditabell"

    Skriv et Python-program som undersøker funksjonen

    \[
    f(x)=\frac{x^2-9}{x-3}
    \]

    for \(x\)-verdiene 2.9, 2.99, 3.01 og 3.1.

    a) Lag en funksjon `f(x)` som beregner uttrykket.

    b) Bruk en `for`-løkke til å skrive ut x-verdien og funksjonsverdien.

    c) Rund av utskriften til to desimaler.

    d) Forklar hva tallene antyder om grenseverdien når \(x\to3\).

??? note "Fasit – oppgave 2.7.4"

    ```python
    def f(x):
        return (x**2 - 9) / (x - 3)

    for x in [2.9, 2.99, 3.01, 3.1]:
        print(x, round(f(x), 2))
    ```

    Programmet skriver ut:

    ```text
    2.9 5.9
    2.99 5.99
    3.01 6.01
    3.1 6.1
    ```

    Verdiene nærmer seg 6. Ved faktorisering får vi \(f(x)=x+3\) for \(x\ne3\), og dermed er grenseverdien 6.
    **Resultat:** \(\underline{\underline{6}}\).


!!! question "Oppgave 2.7.5 – Undersøk venstre og høyre side"

    Skriv et program som undersøker

    \[
    g(x)=\frac{1}{x-1}
    \]

    for x-verdier nær 1 fra begge sider.

    a) Bruk minst to x-verdier mindre enn 1 og minst to x-verdier større enn 1.

    b) Skriv ut både x-verdien og funksjonsverdien.

    c) Bruk utskriften til å beskrive hva som skjer fra venstre og fra høyre.

??? note "Fasit – oppgave 2.7.5"

    Ett mulig program er:

    ```python
    def g(x):
        return 1 / (x - 1)

    verdier = [0.9, 0.99, 1.01, 1.1]

    for x in verdier:
        print(x, round(g(x), 2))
    ```

    Programmet skriver ut:

    ```text
    0.9 -10.0
    0.99 -100.0
    1.01 100.0
    1.1 10.0
    ```

    Verdiene går mot \(-\infty\) fra venstre og \(+\infty\) fra høyre. Derfor er \(x=1\) en vertikal asymptote.
    **Resultat:** Vertikal asymptote \(\underline{\underline{x=1}}\).


!!! question "Oppgave 2.7.6 – Test kontinuitet med en parameter"

    Vi har funksjonen

    \[
    h(x)=
    \begin{cases}
    kx+1, & x<2,\\
    x^2-1, & x\geq2.
    \end{cases}
    \]

    Skriv et program som:

    - undersøker flere verdier for \(k\)
    - beregner funksjonsverdier for x-verdier like til venstre for 2
    - beregner \(h(2)\)
    - skriver ut verdiene slik at du kan sammenligne dem

    Test minst \(k=0\), \(k=1\) og \(k=2\). Bruk deretter algebra til å bestemme nøyaktig hvilken verdi av \(k\) som gir kontinuitet.

??? note "Fasit – oppgave 2.7.6"

    Ett mulig program er:

    ```python
    for k in [0, 1, 2]:
        def h(x):
            if x < 2:
                return k*x + 1
            else:
                return x**2 - 1

        print("k =", k)
        for x in [1.9, 1.99, 1.999]:
            print(x, round(h(x), 3))
        print("h(2) =", h(2))
    ```

    Programmet viser at venstreverdiene nærmer seg 1 når \(k=0\), 3 når \(k=1\) og 5 når \(k=2\). I alle tilfellene er \(h(2)=3\).

    Algebraisk må vi ha

    \[
    2k+1=2^2-1=3.
    \]

    Dermed er \(k=1\). Programmet undersøker tallverdier, mens likningen gir den eksakte begrunnelsen.
    **Resultat:** Kontinuitet fås for \(\underline{\underline{k=1}}\).



