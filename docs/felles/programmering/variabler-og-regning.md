# Del 2 – Variabler og regning

En variabel lagrer en verdi under et navn. Når vi leser kode, må vi følge hvordan verdiene endres fra linje til linje. Denne ferdigheten er grunnlaget for å forstå betingelser, løkker og funksjoner senere.

## 2.1 Variabler og tilordning

```python
alder = 17
print(alder)
```

Variabelen `alder` får verdien 17. I Python betyr `=` **tilordning**: verdien på høyre side beregnes og lagres i variabelen på venstre side. Det er ikke det samme som å undersøke om to uttrykk er like.

### En variabel kan endres

```python
x = 4
x = 10
print(x)
```

Utskriften er 10. Den andre tilordningen erstatter den første verdien.

### Følg verdiene i en tabell

```python
x = 4
y = 3
x = x + y
print(x)
```

Når `x = x + y` utføres, brukes de gjeldende verdiene (x=4) og (y=3). Resultatet 7 lagres i `x`.

| Etter linjen | `x` | `y` |
|---|---:|---:|
| `x = 4` | 4 | – |
| `y = 3` | 4 | 3 |
| `x = x + y` | 7 | 3 |

**Metode:** Oppdater tabellen etter hver linje som endrer en variabel. Ikke behold den gamle verdien etter at den er overskrevet.

## 2.2 Regning i Python

| Operasjon | Python | Eksempel | Resultat |
|---|---|---|---:|
| Addisjon | `+` | `6 + 2` | 8 |
| Subtraksjon | `-` | `6 - 2` | 4 |
| Multiplikasjon | `*` | `6 * 2` | 12 |
| Divisjon | `/` | `6 / 2` | 3.0 |
| Heltallsrest (modulo) | `%` | `7 % 3` | 1 |
| Potens | `**` | `2 ** 3` | 8 |

### Modulo: resten etter divisjon

- `7 % 3` gir 1, fordi (7=2\cdot3+1).
- `12 % 3` gir 0, fordi 12 er delelig med 3.
- `tall % 2 == 0` kan brukes til å undersøke om et heltall er partall.

### Regnerekkefølge

```python
a = 2 + 3 * 4
b = (2 + 3) * 4
print(a)
print(b)
```

Utskriften er 14 og 20. Multiplikasjon utføres før addisjon, med mindre parenteser bestemmer noe annet.

## 2.3 Tren på å spore kode

Prøv å løse oppgavene uten PC. Skriv mellomregning og fyll ut tabeller før du ser på fasiten.

!!! question "Oppgave 1 – Følg utskriften"
    Hva skriver programmet ut?

    ```python
    print(3)
    print(8)
    print(3 + 8)
    ```

!!! question "Oppgave 2 – En verdi blir erstattet"
    Hva skriver programmet ut? Forklar hvorfor svaret ikke er 6.

    ```python
    x = 6
    x = 2
    print(x)
    ```

!!! question "Oppgave 3 – Oppdater to variabler"
    Fyll ut tabellen og finn utskriften.

    ```python
    a = 5
    b = 2
    a = a + b
    b = a - b
    print(a)
    print(b)
    ```

    | Etter linjen | `a` | `b` |
    |---|---:|---:|
    | `a = 5` | | |
    | `b = 2` | | |
    | `a = a + b` | | |
    | `b = a - b` | | |

!!! question "Oppgave 4 – Regnerekkefølge"
    Finn verdiene til `x` og `y`.

    ```python
    x = 5 + 2 * 3
    y = (5 + 2) * 3
    ```

!!! question "Oppgave 5 – Potenser"
    Hva skriver programmet ut?

    ```python
    a = 2 ** 3
    b = 3 ** 2
    print(a + b)
    ```

!!! question "Oppgave 6 – Finn feilen i tankegangen"
    En elev sier at programmet skriver ut 4, fordi `x` først får verdien 4. Forklar feilen.

    ```python
    x = 4
    x = x + 3
    print(x)
    ```

!!! question "Oppgave 7 – Skriv kode på papir"
    Skriv et program som lagrer 12 i `a`, 5 i `b`, regner ut summen i en tredje variabel og skriver ut summen.

!!! question "Oppgave 8 – Fra algoritme til kode"
    Skriv først en algoritme med norske setninger som finner gjennomsnittet av 8 og 14. Skriv deretter Python-kode som gjør det samme.

## 2.4 Fasit

??? note "Fasit – oppgave 1–4"
    **1.**
    ```text
    3
    8
    11
    ```

    **2.** Utskriften er 2. Den andre tilordningen erstatter verdien 6.

    **3.**

    | Etter linjen | `a` | `b` |
    |---|---:|---:|
    | `a = 5` | 5 | – |
    | `b = 2` | 5 | 2 |
    | `a = a + b` | 7 | 2 |
    | `b = a - b` | 7 | 5 |

    Utskriften er 7 og deretter 5.

    **4.** (x=11) og (y=21).

??? note "Fasit – oppgave 5–8"
    **5.** (2^3=8) og (3^2=9). Summen er 17.

    **6.** Linjen `x = x + 3` bruker den gjeldende verdien 4, regner ut 7 og lagrer 7. Utskriften er 7.

    **7.**
    ```python
    a = 12
    b = 5
    sum_tall = a + b
    print(sum_tall)
    ```
    Utskriften er 17.

    **8.** Algoritme: legg sammen 8 og 14, del summen på 2, og skriv ut resultatet.

    ```python
    a = 8
    b = 14
    gjennomsnitt = (a + b) / 2
    print(gjennomsnitt)
    ```
    Resultatet er 11.0.
