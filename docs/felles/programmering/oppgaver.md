# Del 3 – Oppgaver og fasit

## 3.1 Oppgaver

Prøv å løse oppgavene uten PC. Skriv gjerne en tabell over variablene. Fasiten ligger nederst, slik at du kan kontrollere arbeidet etterpå.

!!! question "Oppgave 1 – Forstå utskriften"
    Hva skriver programmet ut?

    ```python
    print(3)
    print(8)
    print(3 + 8)
    ```

!!! question "Oppgave 2 – Følg en variabel"
    Hva skriver programmet ut?

    ```python
    x = 6
    x = 2
    print(x)
    ```

    Forklar hvorfor svaret ikke er 6.

!!! question "Oppgave 3 – Oppdater verdier"
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
    | `a = 5` |  |  |
    | `b = 2` |  |  |
    | `a = a + b` |  |  |
    | `b = a - b` |  |  |

!!! question "Oppgave 4 – Regnerekkefølge"
    Finn verdien til `x` og `y`.

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
    En elev sier at programmet under skriver ut 4, fordi `x` først får verdien 4.

    ```python
    x = 4
    x = x + 3
    print(x)
    ```

    Forklar hvorfor eleven tar feil, og finn riktig utskrift.

!!! question "Oppgave 7 – Skriv kode på papir"
    Skriv et Python-program som:

    1. lagrer tallet 12 i variabelen `a`
    2. lagrer tallet 5 i variabelen `b`
    3. lagrer summen av tallene i variabelen `sum`
    4. skriver ut summen

!!! question "Oppgave 8 – Lag en algoritme"
    Skriv først en algoritme med vanlige norske setninger som finner gjennomsnittet av tallene 8 og 14. Skriv deretter et kort Python-program som gjør det samme.

## 3.2 Fasit

??? note "Oppgave 1"
    Programmet skriver ut:

    ```text
    3
    8
    11
    ```

??? note "Oppgave 2"
    Utskriften er 2. Den andre tilordningen erstatter verdien 6 med 2.

??? note "Oppgave 3"
    Tabellen blir:

    | Etter linjen | `a` | `b` |
    |---|---:|---:|
    | `a = 5` | 5 | – |
    | `b = 2` | 5 | 2 |
    | `a = a + b` | 7 | 2 |
    | `b = a - b` | 7 | 5 |

    Utskriften blir først 7 og deretter 5.

??? note "Oppgave 4"
    \(x=5+2\cdot3=11\) og \(y=(5+2)\cdot3=21\).

??? note "Oppgave 5"
    \(a=8\) og \(b=9\). Programmet skriver ut 17.

??? note "Oppgave 6"
    Når linjen `x = x + 3` utføres, bruker programmet den gamle verdien 4 og regner ut \(4+3=7\). Deretter lagres 7 i `x`.  Utskriften er 7.

??? note "Oppgave 7"
    Én mulig løsning:

    ```python
    a = 12
    b = 5
    sum = a + b
    print(sum)
    ```

    Programmet skriver ut 17.

??? note "Oppgave 8"
    Algoritme:
    1. Legg sammen 8 og 14.
    2. Del summen på 2.
    3. Skriv ut resultatet.

    Python:

    ```python
    a = 8
    b = 14
    gjennomsnitt = (a + b) / 2
    print(gjennomsnitt)
    ```

    Resultatet er 11.0 i Python.
