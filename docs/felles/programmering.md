# Programmering – fra algoritme til kode

## Hva skal du lære?

I dette kapittelet skal du lære å forstå og skrive enkle programmer. Du trenger ikke ha programmert før.

Når du har arbeidet med kapittelet, skal du kunne:

- forklare hva en algoritme er
- lese et kort program og finne ut hva det gjør
- følge verdiene til variabler fra linje til linje
- regne ut hva et program skriver ut
- bruke regneoperasjoner i kode
- finne og rette enkle feil
- skrive enkle programmer på papir

**Du trenger ikke PC for å løse oppgavene.** Målet er først og fremst at du skal forstå koden. Vi bruker Python som programmeringsspråk, men begynner med ideen bak programmering.

## 1. Hva er programmering?

Et program er en samling instruksjoner som en datamaskin følger. Instruksjonene må være tydelige og stå i riktig rekkefølge.

Tenk at du skal forklare en robot hvordan den skal lage en kopp te:

1. Fyll vann i en vannkoker.
2. Kok opp vannet.
3. Legg en tepose i en kopp.
4. Hell vannet i koppen.
5. Vent noen minutter.

Dette er en **algoritme**: en oppskrift med trinn som løser en oppgave. En algoritme trenger ikke være skrevet i et programmeringsspråk.

En datamaskin tolker instruksjoner svært bokstavelig. Hvis en instruksjon er uklar, eller står på feil sted, kan resultatet bli feil.

!!! example "Eksempel – en matematisk algoritme"
    Vi vil finne summen av tallene 7 og 5.

    1. Start med tallet 7.
    2. Legg til 5.
    3. Skriv ned resultatet.

    Resultatet er 12. Senere skal vi skrive instruksjonene i Python.

## 2. Les kode linje for linje

Et program utføres vanligvis fra øverst til nederst. La oss se på et lite Python-program:

```python
print(4)
print(9)
```

Kommandoen `print(...)` betyr at programmet skal skrive ut det som står mellom parentesene.

Programmet skriver derfor ut:

```text
4
9
```

Rekkefølgen betyr noe. Hvis vi bytter om på linjene, blir utskriften også byttet om.

!!! note "Viktig når du løser oppgaver på papir"
    Les én linje om gangen. Ikke hopp rett til svaret. Skriv gjerne ned hva hver linje gjør, og oppdater notatene dine etter hver instruksjon.

## 3. Variabler – navn som lagrer verdier

En **variabel** er et navn vi bruker for å holde styr på en verdi. Tenk på den som en liten boks med et navn på.

```python
alder = 17
print(alder)
```

Her lagrer vi verdien 17 i variabelen `alder`. Når programmet kommer til `print(alder)`, skriver det ut verdien som variabelen inneholder.

Utskrift:

```text
17
```

I Python brukes likhetstegnet `=` til **tilordning**: Vi legger en verdi inn i en variabel. Det betyr ikke helt det samme som at vi skriver en likning i matematikk.

### En variabel kan få en ny verdi

```python
x = 4
x = 10
print(x)
```

Først får `x` verdien 4. På neste linje blir den erstattet med 10. Derfor skriver programmet ut 10, ikke 4.

### Følg variablene i en tabell

Se på programmet:

```python
x = 4
y = 3
x = x + y
print(x)
```

Når programmet leser `x = x + y`, bruker det de gjeldende verdiene: \(x=4\) og \(y=3\). Det regner ut \(4+3=7\) og lagrer 7 i `x`. 

| Etter linjen | Verdien til `x` | Verdien til `y` |
|---|---:|---:|
| `x = 4` | 4 | – |
| `y = 3` | 4 | 3 |
| `x = x + y` | 7 | 3 |

Utskriften blir 7.

**Husk:** På høyre side av tilordningen regner programmet ut uttrykket først. Deretter lagrer det resultatet i variabelen på venstre side.

## 4. Regning i Python

Python kan utføre vanlige regneoperasjoner. Disse symbolene er spesielt viktige:

| Operasjon | Symbol i Python | Eksempel | Resultat |
|---|---|---|---:|
| Addisjon | `+` | `6 + 2` | 8 |
| Subtraksjon | `-` | `6 - 2` | 4 |
| Multiplikasjon | `*` | `6 * 2` | 12 |
| Divisjon | `/` | `6 / 2` | 3 |
| Potens | `**` | `2 ** 3` | 8 |

Legg merke til at multiplikasjon skrives med `*`, og at potens skrives med `**`. Vi skriver altså `2 ** 3` for \(2^3\).

Python følger vanlige regneregler for parenteser og regnerekkefølge:

```python
a = 2 + 3 * 4
b = (2 + 3) * 4
print(a)
print(b)
```

- `a` blir \(2+12=14\).
- `b` blir (5\cdot4=20).

Utskriften blir først 14 og deretter 20.

## 5. En enkel metode for å lese kode

Når du får et program på papir, bruk denne framgangsmåten:

1. Les programmet én gang for å forstå hva det prøver å gjøre.
2. Start på første linje.
3. Skriv ned nye variabler og verdiene deres.
4. Oppdater en verdi hver gang variabelen får en ny verdi.
5. Regn ut uttrykk med vanlig regnerekkefølge.
6. Finn nøyaktig hva hver `print`-kommando skriver ut.

Ikke anta at en variabel beholder den første verdien den fikk. Følg med på alle endringene.

## 6. Oppgaver

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

## Fasit

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
