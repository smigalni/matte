# 4. Løkker: `for` og `while`

Løkker brukes når vi vil gjenta instruksjoner. I stedet for å skrive den samme koden mange ganger, kan vi la programmet gjøre jobben.

## 4.1 En enkel `for`-løkke

```python
for i in range(4):
    print(i)
```

Utskriften blir 0, 1, 2 og 3. `range(4)` starter på 0 og stopper før 4. Variabelen `i` får en ny verdi for hver runde.

Vi kan også velge start og stopp:

```python
for i in range(2, 6):
    print(i)
```

Dette skriver ut 2, 3, 4 og 5. Startverdien er med, men stoppverdien er ikke med.

## 4.2 Følg summen for hver runde

Programmet legger til én verdi av `i` i hver runde.

```python
summen = 0

for i in range(1, 4):
    summen = summen + i

print(summen)
```

**Start:** `summen = 0`

!!! note "Runde 1 · i = 1"
    `0 + 1 = 1`

    **Ny sum: 1**

!!! note "Runde 2 · i = 2"
    `1 + 2 = 3`

    **Ny sum: 3**

!!! note "Runde 3 · i = 3"
    `3 + 3 = 6`

    **Ny sum: 6**

Når løkken er ferdig, skriver `print(summen)` ut **6**.

## 4.3 Løkker og matematikk

```python
for x in range(1, 5):
    y = 2 * x + 1
    print(x, y)
```

Utskriften blir:

```text
1 3
2 5
3 7
4 9
```

Hver runde regner programmet ut \(y=2x+1\) for en ny verdi av \(x\). Slik kan vi lage en funksjonstabell.

## 4.4 `while`-løkker

En `while`-løkke gjentas så lenge betingelsen er sann.

```python
tall = 1

while tall <= 4:
    print(tall)
    tall = tall + 1
```

Programmet skriver ut 1, 2, 3 og 4. Når `tall` blir 5, er betingelsen `tall <= 4` usann, og løkken stopper.

### Pass på uendelige løkker

Hvis betingelsen aldri blir usann, kan programmet fortsette å kjøre uten å stoppe.

```python
tall = 1
while tall <= 4:
    print(tall)
```

Her endres aldri `tall`, så betingelsen forblir sann. På papir skal du kunne oppdage hvorfor løkken ikke stopper.

## 4.5 Velge mellom `for` og `while`

- Bruk ofte `for` når du vet hvor mange ganger noe skal gjentas, eller vil gå gjennom en rekke verdier.
- Bruk ofte `while` når gjentakelsen skal fortsette så lenge en betingelse er sann.

Det viktigste er å forstå når løkken starter, hva som skjer i hver runde, og når den stopper.

## 4.6 Hvorfor trenger vi både `for` og `while`?

Begge løkkene gjentar kode, men de passer best i ulike situasjoner.

- **`for`:** Vi bruker ofte `for` når vi vet hvilke verdier vi skal gå gjennom, eller hvor mange ganger vi skal gjenta noe. Det kan for eksempel være å lage en verditabell for fem x-verdier.
- **`while`:** Vi bruker ofte `while` når vi vil gjenta noe så lenge en betingelse er sann. Da vet vi ikke alltid på forhånd hvor mange runder det blir.

### Samme utskrift med begge løkkene

Vi kan skrive ut tallene fra 1 til 5 med begge løkketypene.

Med `for` vet vi på forhånd hvilke verdier vi skal bruke:

```python
for tall in range(1, 6):
    print(tall)
```

Med `while` fortsetter vi så lenge betingelsen `tall <= 5` er sann. Vi må selv passe på å endre variabelen:

```python
tall = 1

while tall <= 5:
    print(tall)
    tall = tall + 1
```

Begge programmene skriver ut 1, 2, 3, 4 og 5. Forskjellen er hvordan vi styrer gjentakelsen.

### To situasjoner – to naturlige valg

**Situasjon 1: Lage en verditabell**

Vi skal regne ut (y=2x+3) for (x=1,2,3,4,5). Vi vet hvilke fem x-verdier vi skal bruke. Da passer `for` godt.

```python
for x in range(1, 6):
    y = 2 * x + 3
    print(x, y)
```

**Situasjon 2: Gjenta til en grense er nådd**

Vi starter med tallet 1 og dobler tallet så lenge det er mindre enn 100. Vi vet ikke på forhånd hvor mange runder som trengs. Da passer `while` godt.

```python
tall = 1

while tall < 100:
    print(tall)
    tall = tall * 2
```

Programmet skriver ut 1, 2, 4, 8, 16, 32 og 64. Etter det blir `tall` lik 128, og betingelsen er ikke lenger sann.

**Husk:** `for` passer ofte når gjentakelsen følger en bestemt rekke eller et bestemt antall runder. `while` passer ofte når gjentakelsen styres av en betingelse. Noen oppgaver kan løses med begge, men det er viktig å velge løkken som gjør hensikten tydeligst.

## 4.7 Oppgaver

!!! question "Oppgave 1 – Hva skrives ut?"

    ```python
    for i in range(3):
        print(i)
    ```


??? note "Fasit – oppgave 1"
    Utskriften er 0, 1 og 2.


!!! question "Oppgave 2 – Start og stopp"

    Hvilke tall skrives ut?

    ```python
    for i in range(3, 7):
        print(i)
    ```


??? note "Fasit – oppgave 2"
    Tallene 3, 4, 5 og 6.


!!! question "Oppgave 3 – Følg summen"

    ```python
    sum_tall = 0
    for i in range(1, 5):
        sum_tall = sum_tall + i
    print(sum_tall)
    ```

    Hva blir utskriften? Vis verdien til `sum_tall` etter hver runde.


??? note "Fasit – oppgave 3"
    Verdiene til `sum_tall` blir 1, 3, 6 og 10. Utskriften er 10.


!!! question "Oppgave 4 – Funksjonstabell"

    Fyll ut tabellen på papir og finn utskriften.

    ```python
    for x in range(0, 4):
        y = x * x
        print(x, y)
    ```


??? note "Fasit – oppgave 4"
    ```text
    0 0
    1 1
    2 4
    3 9
    ```


!!! question "Oppgave 5 – `while`"

    ```python
    n = 3
    while n > 0:
        print(n)
        n = n - 1
    print("Ferdig")
    ```

    Hva skriver programmet ut?


??? note "Fasit – oppgave 5"
    ```text
    3
    2
    1
    Ferdig
    ```


!!! question "Oppgave 6 – Finn feilen"

    Hvorfor stopper ikke denne løkken? Hvordan kan du rette den?

    ```python
    n = 1
    while n < 4:
        print(n)
    ```


??? note "Fasit – oppgave 6"
    `n` blir aldri endret. Legg til `n = n + 1` inne i løkken:

    ```python
    n = 1
    while n < 4:
        print(n)
        n = n + 1
    ```


!!! question "Oppgave 7 – Lag en løkke"

    Skriv en `for`-løkke som skriver ut tallene fra 1 til 10.


??? note "Fasit – oppgave 7"
    ```python
    for i in range(1, 11):
        print(i)
    ```

    Stoppverdien i `range` er ikke med, derfor bruker vi 11 for å få med 10.


!!! question "Oppgave 8 – Matematikk"

    Skriv en løkke som regner ut og skriver ut \(y=3x-2\) for \(x=1,2,3,4,5\).


??? note "Fasit – oppgave 8"
    ```python
    for x in range(1, 6):
        y = 3 * x - 2
        print(x, y)
    ```

    Verdiene for \(y\) blir \(\underline{\underline{1,\;4,\;7,\;10,\;13}}\).

!!! question "Oppgave 9 – Velg riktig løkke"

    Hvilken løkke passer best i hver situasjon: `for` eller `while`? Begrunn svarene.

    a) Du skal skrive ut tallene fra 1 til 20.

    b) Du skal doble et tall helt til det blir større enn 1000.

    c) Du skal regne ut (y=3x-1) for (x=0,1,2,3,4).

    d) Et program skal fortsette å trekke fra 5 så lenge en poengsum er større enn 0.


??? note "Fasit – oppgave 9"
    a) `for`, fordi vi vet at vi skal gå gjennom tallene 1 til 20.

    b) `while`, fordi vi gjentar til tallet passerer 1000. Antall runder bestemmes av betingelsen.

    c) `for`, fordi vi har en bestemt rekke med fem x-verdier.

    d) `while`, fordi løkken skal fortsette så lenge poengsummen er større enn 0.


!!! question "Oppgave 10 – Samme resultat, ulik løkke"

    Begge programmene skal skrive ut tallene fra 2 til 6.

    **Program A**

    ```python
    for tall in range(2, 7):
        print(tall)
    ```

    **Program B**

    ```python
    tall = 2
    while tall <= 6:
        print(tall)
        tall = tall + 1
    ```

    a) Hva skriver hvert program ut?

    b) Hvilken linje gjør at program B til slutt stopper?

    c) Hvorfor trenger program B en slik linje, mens program A ikke trenger en egen oppdatering av variabelen?


??? note "Fasit – oppgave 10"
    a) Begge skriver ut 2, 3, 4, 5 og 6.

    b) Linjen `tall = tall + 1` øker verdien for hver runde. Til slutt blir `tall` lik 7, og betingelsen `tall <= 6` blir usann.

    c) I `for`-løkken henter Python neste verdi fra `range(2, 7)` automatisk. I `while`-løkken må programmet selv endre variabelen slik at betingelsen etter hvert kan bli usann.


!!! question "Oppgave 11 – Skriv to løsninger"

    Skriv to programmer som skriver ut tallene 1, 2, 3, 4 og 5:

    a) Bruk en `for`-løkke.

    b) Bruk en `while`-løkke.

    c) Forklar hvilken av løkkene du synes passer best her, og hvorfor.


??? note "Fasit – oppgave 11"
    a)

    ```python
    for tall in range(1, 6):
        print(tall)
    ```

    b)

    ```python
    tall = 1
    while tall <= 5:
        print(tall)
        tall = tall + 1
    ```

    c) `for` passer best fordi vi vet at vi skal skrive ut en bestemt rekke med fem tall. Begge løsningene fungerer.


!!! question "Oppgave 12 – Når vet vi ikke antall runder?"

    Et program starter med `tall = 3`. I hver runde dobles tallet. Programmet skal skrive ut verdien så lenge den er mindre enn 200.

    a) Hvilken løkke passer best? Begrunn valget.

    b) Skriv programmet.

    c) Hvilke tall blir skrevet ut?

    d) Hva blir verdien av `tall` når løkken stopper?


??? note "Fasit – oppgave 12"
    a) `while` passer best. Vi vet ikke på forhånd hvor mange doblinger som trengs før tallet blir minst 200.

    b)

    ```python
    tall = 3
    while tall < 200:
        print(tall)
        tall = tall * 2
    ```

    c) Programmet skriver ut 3, 6, 12, 24, 48, 96 og 192.

    d) Når løkken stopper, er `tall = 384`. Da er betingelsen `tall < 200` usann.
\n