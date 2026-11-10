# 6. Blandede oppgaver

Disse oppgavene samler hele programmeringskurset: variabler, regning, betingelser, løkker, funksjoner og lister. Nå skal du selv avgjøre hvilke verktøy som passer.

**Arbeidsmåte:** Spor koden på papir før du prøver å løse den. Skriv ned mellomresultater. På de mer krevende oppgavene skal du også forklare hvorfor løsningen virker.

## Middels

!!! question "Oppgave 1 – Følg variablene"
    Hva skrives ut?

    ```python
    a = 4
    b = 3
    a = a + b
    print(a)
    ```


??? note "Fasit – oppgave 1"
    **1.** 7.


!!! question "Oppgave 2 – Betingelse"
    Hva skrives ut?

    ```python
    temperatur = -2
    if temperatur < 0:
        print("Minus")
    else:
        print("Null eller mer")
    ```


??? note "Fasit – oppgave 2"
    **2.** Programmet skriver ut \(\underline{\underline{\text{Minus}}}\), fordi \(-2<0\).


!!! question "Oppgave 3 – Løkke"
    Skriv nøyaktig hva programmet skriver ut.

    ```python
    for i in range(1, 4):
        print(i * i)
    ```


??? note "Fasit – oppgave 3"
    **3.**
    ```text
    1
    4
    9
    ```


!!! question "Oppgave 4 – Funksjon"
    Hva skrives ut? Forklar hvilken verdi funksjonen returnerer.

    ```python
    def beregn(x):
        return 2 * x + 1

    svar = beregn(4)
    print(svar)
    ```


??? note "Fasit – oppgave 4"
    **4.** Funksjonen returnerer \(2\cdot4+1=\underline{\underline{9}}\), og programmet skriver ut 9.


!!! question "Oppgave 5 – Liste"
    Gitt `tall = [6, 2, 9]`, skriv kode som endrer det andre elementet til 5 og legger 12 bakerst. Hva blir listen?


??? note "Fasit – oppgave 5"
    **5.**
    ```python
    tall = [6, 2, 9]
    tall[1] = 5
    tall.append(12)
    ```
    Listen blir `[6, 5, 9, 12]`.


## Vanskelig

!!! question "Oppgave 6 – Spor flere variabler"
    Fyll ut en tabell med verdiene til `i`, `a` og `b` for hver runde. Hva skrives ut til slutt?

    ```python
    a = 2
    b = 1
    for i in range(1, 5):
        a = a + i
        if i % 2 == 0:
            b = b + a
        else:
            b = b + i
    print(a, b)
    ```


??? note "Fasit – oppgave 6"
    **6.** Etter hver runde blir `(a,b)`: (3, 2), (5, 7), (8, 10), (12, 22). Utskrift: `12 22`.


!!! question "Oppgave 7 – Summer utvalgte tall"
    Følg både `sum_tall` og `antall`. Hvilke tall blir tatt med?

    ```python
    sum_tall = 0
    antall = 0
    for tall in range(1, 8):
        if tall % 2 != 0:
            sum_tall += tall
            antall += 1
    print(sum_tall, antall)
    ```


??? note "Fasit – oppgave 7"
    **7.** Oddetallene 1, 3, 5 og 7 tas med. Summen er 16, antallet er 4. Utskrift: `16 4`.


!!! question "Oppgave 8 – Funksjon som teller"
    Skriv funksjonen `tell_storre(tall, grense)`, som returnerer hvor mange elementer i listen som er større enn grensen. Test med `[7, 2, 9, 4]` og grensen 5.


??? note "Fasit – oppgave 8"
    **8.**
    ```python
    def tell_storre(tall, grense):
        antall = 0
        for x in tall:
            if x > grense:
                antall += 1
        return antall
    ```
    Resultatet er 2.


!!! question "Oppgave 9 – Lag en ny liste"
    Skriv funksjonen `kvadrater(tall)`, som returnerer en ny liste med kvadratet av hvert element. Test med `[-2, 3, 4]`. Forklar hvorfor resultatet er en ny liste.


??? note "Fasit – oppgave 9"
    **9.**
    ```python
    def kvadrater(tall):
        ny = []
        for x in tall:
            ny.append(x * x)
        return ny
    ```
    Resultatet er `[4, 9, 16]`. En ny liste bygges opp uten å endre originalen.


!!! question "Oppgave 10 – Løkke inni løkke"
    Finn utskriften og vis hvordan summen bygges opp.

    ```python
    sum_tall = 0
    for i in range(1, 4):
        for j in range(1, 3):
            sum_tall += i * j
    print(sum_tall)
    ```


??? note "Fasit – oppgave 10"
    **10.** Summen er \(1\cdot1+1\cdot2+2\cdot1+2\cdot2+3\cdot1+3\cdot2=\underline{\underline{18}}\).


!!! question "Oppgave 11 – Grense og rekkefølge"
    Hva skriver programmet ut? Hva ville skjedd hvis den første betingelsen ble flyttet under den andre?

    ```python
    poeng = 92
    if poeng >= 60:
        print("Bestått")
    elif poeng >= 90:
        print("Svært høyt")
    else:
        print("Ikke bestått")
    ```


??? note "Fasit – oppgave 11"
    **11.** Programmet skriver ut `Bestått`, fordi første betingelse er sann. Hvis `poeng >= 90` testes først, blir utskriften `Svært høyt`. Mer generelle betingelser kan fange opp verdier før mer spesifikke betingelser.


## Svært vanskelig

!!! question "Oppgave 12 – Feilsøk løkken"
    En elev vil skrive ut tallene 1, 2, 3 og 4, men har skrevet:

    ```python
    n = 1
    while n <= 4:
        if n % 2 == 0:
            n = n + 1
        print(n)
    ```

    **a)** Spor programmet fra starten. Hva skjer faktisk? Stopper det?

    **b)** Forklar den konkrete årsaken til feilen.

    **c)** Skriv en rettet versjon som skriver ut 1, 2, 3 og 4 én gang hver og deretter stopper.


??? note "Fasit – oppgave 12"
    **12.** Programmet blir stående på `n = 1`: tallet er oddetall, så `n` økes aldri. En retting er:

    ```python
    n = 1
    while n <= 4:
        print(n)
        n = n + 1
    ```


!!! question "Oppgave 13 – Lag en robust listefunksjon"
    Lag funksjonen `statistikk(tall)`, som returnerer både summen og antallet positive tall i listen. Du skal ikke bruke innebygde funksjoner for sum eller antall positive tall.

    Test med `[-3, 4, 0, 2, -1]`. Hva bør funksjonen returnere for en tom liste? Begrunn svaret, og velg en tydelig løsning.


??? note "Fasit – oppgave 13"
    **13.**
    ```python
    def statistikk(tall):
        sum_tall = 0
        positive = 0
        for x in tall:
            sum_tall += x
            if x > 0:
                positive += 1
        return sum_tall, positive
    ```
    For listen i oppgaven returneres `(2, 2)`. For tom liste returneres `(0, 0)`, som er en konsistent løsning fordi ingen elementer er behandlet.


!!! question "Oppgave 14 – Finn og rett to feil"
    Funksjonen skal returnere en ny liste med bare partall større enn en grense. Den inneholder to feil:

    ```python
    def velg_partall(tall, grense):
        ny = []
        for x in tall:
            if x % 2 == 0:
                ny.append(x)
            return ny
    ```

    **a)** Finn begge feilene i forhold til oppgaven.

    **b)** Rett funksjonen.

    **c)** Vis resultatet av `velg_partall([2, 7, 8, 10, 3], 5)`.


??? note "Fasit – oppgave 14"
    **14.** `return ny` står inne i løkken, så funksjonen avsluttes for tidlig. Grensen brukes heller ikke. Riktig versjon:

    ```python
    def velg_partall(tall, grense):
        ny = []
        for x in tall:
            if x % 2 == 0 and x > grense:
                ny.append(x)
        return ny
    ```
    Resultatet er `[8, 10]`.


!!! question "Oppgave 15 – Undersøk en matematisk regel"
    Lag en funksjon som mottar en liste med heltall og returnerer summen av tallene som er både positive og delelige med 3.

    Test med `[-6, 3, 4, 9, 12, -3, 0]`.

    **a)** Skriv først en algoritme med ord.

    **b)** Skriv funksjonen i Python.

    **c)** Forklar hvordan betingelsene sørger for at negative tall og null ikke tas med.


??? note "Fasit – oppgave 15"
    **15.**
    ```python
    def sum_positive_delelig_med_tre(tall):
        sum_tall = 0
        for x in tall:
            if x > 0 and x % 3 == 0:
                sum_tall += x
        return sum_tall
    ```
    Resultatet er \(3+9+12=\underline{\underline{24}}\). Kravet `x > 0` utelukker negative tall og null.


!!! question "Oppgave 16 – Finn et mønster og begrunn det"
    Se på summen av de første \(n\) positive oddetallene. Vi mistenker at summen er \(n^2\).

    **a)** Skriv en funksjon som beregner summen av de første \(n\) positive oddetallene ved hjelp av en løkke.

    **b)** Bruk funksjonen til å undersøke påstanden for \(n=1,2,3,4,5,10\).

    **c)** Forklar hvorfor testene støtter påstanden, men ikke alene beviser at den gjelder for alle positive heltall \(n\).


??? note "Fasit – oppgave 16"
    **16.**
    ```python
    def sum_oddetall(n):
        sum_tall = 0
        for i in range(1, n + 1):
            sum_tall += 2 * i - 1
        return sum_tall
    ```
    For \(n=1,2,3,4,5,10\) blir summene \(1,4,9,16,25,100\), lik \(\underline{\underline{n^2}}\) i alle testene. Testene støtter påstanden, men et endelig antall tester utelukker ikke at det finnes et moteksempel for en større verdi. Et generelt bevis krever et matematisk argument, for eksempel induksjon.


---
