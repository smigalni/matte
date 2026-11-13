# 2.7 Programmering: lese og skrive kode

ymptotene til \(g(x)=\frac{x^2-4}{x-2}\). Forklar hvorfor en verdi som gjør nevneren null, ikke automatisk gir en vertikal asymptote.

**2.6.3** Bruk polynomdivisjon til å bestemme eventuell skrå asymptote for \(h(x)=\frac{2x^2+3x-1}{x+1}\).

**2.6.4** En rasjonal funksjon har vertikal asymptote \(x=-2\) og horisontal asymptote \(y=3\). Lag et mulig funksjonsuttrykk og forklar hvordan du vet at uttrykket oppfyller kravene. Det finnes flere svar.


??? note "Fasit – oppgaver 2.6"

    **2.6.1:** Vertikal asymptote \(x=2\), horisontal asymptote \(y=3\).

    **2.6.2:** For \(x\ne2\) er funksjonen lik \(x+2\). Det er et hull i \((2,4)\), ikke en vertikal asymptote.

    **2.6.3:** Polynomdivisjon gir \(h(x)=2x+1-\frac{2}{x+1}\). Skrå asymptote er \(y=2x+1\), og vertikal asymptote er \(x=-1\).

    **2.6.4:** Ett mulig uttrykk er \(f(x)=3+\frac{1}{x+2}\). Det har vertikal asymptote \(x=-2\) og horisontal asymptote \(y=3\).

    **Resultat:** \(\underline{\underline{x=2,\;y=3}}\) i oppgave 2.6.1.

## 2.7 Programmering: lese og skrive kode

I dette delkapitlet skal du både lese andres kode og skrive egne programmer. Du skal trene like mye på begge deler. Når du leser kode, må du følge variabler og programflyt nøyaktig. Når du skriver kode, må du velge en framgangsmåte, teste programmet og tolke resultatene.

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
    **Resultat:** Programmet stopper ved \(\underline{\underline{x=2}}\) uten en kontroll.


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

 