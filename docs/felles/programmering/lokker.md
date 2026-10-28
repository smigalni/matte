# Del 4 – Løkker: `for` og `while`

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

## 4.2 Følg variablene for hver runde

```python
sum_tall = 0

for i in range(1, 4):
    sum_tall = sum_tall + i

print(sum_tall)
```

| Runde | `i` | `sum_tall` etter oppdatering |
|---:|---:|---:|
| Start | – | 0 |
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |

Til slutt skriver programmet ut 6, fordi det regner ut \(1+2+3\).

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

## 4.6 Oppgaver

## 🟢 Grønn – Grunnlag

!!! question "Oppgave 1 – Hva skrives ut?"

    ```python
    for i in range(3):
        print(i)
    ```

!!! question "Oppgave 2 – Start og stopp"

    Hvilke tall skrives ut?

    ```python
    for i in range(3, 7):
        print(i)
    ```

!!! question "Oppgave 3 – Følg summen"

    ```python
    sum_tall = 0
    for i in range(1, 5):
        sum_tall = sum_tall + i
    print(sum_tall)
    ```

    Hva blir utskriften? Vis verdien til `sum_tall` etter hver runde.

!!! question "Oppgave 4 – Funksjonstabell"

    Fyll ut tabellen på papir og finn utskriften.

    ```python
    for x in range(0, 4):
        y = x * x
        print(x, y)
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

!!! question "Oppgave 6 – Finn feilen"

    Hvorfor stopper ikke denne løkken? Hvordan kan du rette den?

    ```python
    n = 1
    while n < 4:
        print(n)
    ```

!!! question "Oppgave 7 – Lag en løkke"

    Skriv en `for`-løkke som skriver ut tallene fra 1 til 10.

!!! question "Oppgave 8 – Matematikk"

    Skriv en løkke som regner ut og skriver ut \(y=3x-2\) for \(x=1,2,3,4,5\).

## Fasit

??? note "Fasit – oppgave 1"
    Utskriften er 0, 1 og 2.

??? note "Fasit – oppgave 2"
    Tallene 3, 4, 5 og 6.

??? note "Fasit – oppgave 3"
    Verdiene til `sum_tall` blir 1, 3, 6 og 10. Utskriften er 10.

??? note "Fasit – oppgave 4"
    ```text
    0 0
    1 1
    2 4
    3 9
    ```

??? note "Fasit – oppgave 5"
    ```text
    3
    2
    1
    Ferdig
    ```

??? note "Fasit – oppgave 6"
    `n` blir aldri endret. Legg til `n = n + 1` inne i løkken:

    ```python
    n = 1
    while n < 4:
        print(n)
        n = n + 1
    ```

??? note "Fasit – oppgave 7"
    ```python
    for i in range(1, 11):
        print(i)
    ```

    Stoppverdien i `range` er ikke med, derfor bruker vi 11 for å få med 10.

??? note "Fasit – oppgave 8"
    ```python
    for x in range(1, 6):
        y = 3 * x - 2
        print(x, y)
    ```

    Verdiene for \(y\) blir 1, 4, 7, 10 og 13.
