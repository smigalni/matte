# Del 6 – Blandede oppgaver

Her møter du oppgaver fra hele grunnkurset: algoritmer, variabler, regning, betingelser og løkker. Prøv først å løse oppgavene på papir. Skriv ned mellomregning og følg variablene linje for linje.

Vi bruker både **vanskelighetsnivå og farger** for å vise hva slags utfordring du møter. Fargene er et ekstra hint, ikke en karakter.

## Slik leser du nivåene

- 🟢 **Grønn – Start:** én eller to enkle ideer. Målet er å bli trygg på grunnlaget.
- 🟡 **Gul – På vei:** flere steg, variabler som endres eller valg med `if` og `else`.
- 🔴 **Rød – Utfordring:** kombinerer flere ideer. Du må ofte planlegge eller spore programmet nøye.

Du trenger ikke gjøre alle oppgavene på én gang. Jobb deg oppover, og bruk fasiten til å kontrollere tankegangen din.

---

## 🟢 Grønn – Start

### Oppgave 1 – Følg variablene

Hva skrives ut?

```python
a = 4
b = 3
a = a + b
print(a)
```

### Oppgave 2 – Regning

Hva skrives ut?

```python
x = 6
y = 2 * x + 1
print(y)
```

### Oppgave 3 – Betingelse

Hva skrives ut?

```python
temperatur = -2

if temperatur < 0:
    print("Minus")
else:
    print("Null eller mer")
```

### Oppgave 4 – Enkel løkke

Skriv tallene som programmet skriver ut.

```python
for i in range(1, 4):
    print(i)
```

---

## 🟡 Gul – På vei

### Oppgave 5 – Spor flere variabler

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

### Oppgave 6 – Flere betingelser i riktig rekkefølge

Hva skriver programmet ut? Forklar hvorfor rekkefølgen på betingelsene betyr noe. Prøv også å endre rekkefølgen og beskriv hva som kan gå galt.

```python
poeng = 78

if poeng >= 90:
    karakter = "A"
elif poeng >= 75:
    karakter = "B"
elif poeng >= 60:
    karakter = "C"
else:
    karakter = "D"

print(karakter)
```

### Oppgave 7 – Summer utvalgte tall

Følg både `sum` og `antall` gjennom løkken. Hva skrives ut? Forklar hvilke tall som blir tatt med.

```python
sum = 0
antall = 0

for tall in range(1, 8):
    if tall % 2 != 0:
        sum = sum + tall
        antall = antall + 1

print(sum, antall)
```

### Oppgave 8 – Løkke inni løkke

Lag en tabell som viser verdiene til `i`, `j` og `produkt` hver gang linjen med `produkt = produkt + i * j` kjøres. Finn til slutt utskriften.

```python
produkt = 0

for i in range(1, 4):
    for j in range(1, 3):
        produkt = produkt + i * j

print(produkt)
```

---

## 🔴 Rød – Utfordring

### Oppgave 9 – Finn feilen og forklar hvorfor løkken stopper

En elev ønsker at programmet skal skrive ut 1, 2, 3 og 4. Programmet under oppfører seg ikke som ønsket.

```python
n = 1

while n <= 4:
    if n % 2 == 0:
        n = n + 1
    print(n)
```

a) Følg programmet linje for linje. Hva skjer faktisk? Vil løkken stoppe?

b) Forklar nøyaktig hvorfor programmet ikke gjør det eleven ønsker.

c) Skriv om programmet slik at det skriver ut 1, 2, 3 og 4 én gang hver og deretter stopper.

### Oppgave 10 – To løkker og en betingelse

Fyll ut en sporingstabell med `i`, `j`, `sum` og `antall` hver gang den innerste løkken kjører. Hva skrives ut til slutt?

```python
sum = 0
antall = 0

for i in range(1, 4):
    for j in range(i, 5):
        if (i + j) % 2 == 0:
            sum = sum + i * j
            antall = antall + 1

print(sum, antall)
```

### Oppgave 11 – Undersøk et tallmønster

Uten å kjøre programmet: finn all utskrift, og forklar hvorfor noen verdier av `x` ikke fører til at `sum` endres.

```python
sum = 0

for x in range(-3, 5):
    y = x * x - 2 * x
    if y > 0 and x % 2 != 0:
        sum = sum + y
    print(x, y, sum)

print("Sluttsum:", sum)
```

### Oppgave 12 – Lag en algoritme og et program

Skriv først en algoritme med vanlige norske setninger. Skriv deretter Python-kode som går gjennom heltallene fra 1 til 30 og:

1. skriver ut tallet hvis det er delelig med både 2 og 3
2. ellers skriver ut tallet hvis det er delelig med 2
3. ellers hopper over tallet

Til slutt skal programmet skrive ut hvor mange tall som ble skrevet ut, og summen av disse tallene.

**Ekstra utfordring:** Løs oppgaven uten å bruke en liste. Forklar hvorfor rekkefølgen på betingelsene er viktig.

---

## Fasit

??? note "Fasit – oppgave 1"
    Programmet skriver ut 7. Først regner det ut \(4+3=7\) og lagrer 7 i `a`.

??? note "Fasit – oppgave 2"
    Programmet skriver ut 13, fordi \(2\cdot6+1=13\).

??? note "Fasit – oppgave 3"
    Det skriver ut `Minus`, fordi \(-2<0\).

??? note "Fasit – oppgave 4"
    ```text
    1
    2
    3
    ```

??? note "Fasit – oppgave 5"
    `a` starter på 2 og øker med `i` hver runde. `b` øker med `i` når `i` er oddetall, og med den oppdaterte verdien av `a` når `i` er partall.

    | Runde | `i` | `a` etter oppdatering | Endring i `b` | `b` etter runden |
    |---:|---:|---:|---:|---:|
    | 1 | 1 | 3 | +1 | 2 |
    | 2 | 2 | 5 | +5 | 7 |
    | 3 | 3 | 8 | +3 | 10 |
    | 4 | 4 | 12 | +12 | 22 |

    Programmet skriver ut `12 22`.

??? note "Fasit – oppgave 6"
    Programmet skriver ut `B`, fordi 78 ikke er minst 90, men er minst 75. Betingelsene testes ovenfra og ned; så snart én betingelse er sann, hoppes resten over. Hvis `poeng >= 75` stod først, ville også en elev med 95 poeng fått B.

??? note "Fasit – oppgave 7"
    Løkken tar med oddetallene 1, 3, 5 og 7. Summen blir \(1+3+5+7=16\), og antallet er 4. Utskriften er `16 4`.

??? note "Fasit – oppgave 8"
    Den indre løkken summerer produktene for \(i=1,2,3\) og \(j=1,2\):
    \[
    1\cdot1+1\cdot2+2\cdot1+2\cdot2+3\cdot1+3\cdot2
    =1+2+2+4+3+6=18.
    \]
    Programmet skriver ut 18.

??? note "Fasit – oppgave 9"
    a) Programmet skriver ut `1` om og om igjen. Når `n=1`, er `n` oddetall, så betingelsen `n % 2 == 0` er usann. Variabelen `n` blir derfor aldri endret, og utskriften gjentas for alltid.

    b) Feilen er at `n` bare økes når det er partall. Programmet starter på 1 og kommer aldri videre til 2. Derfor forblir `n <= 4` sann hele tiden.

    c) Én riktig løsning er:

    ```python
    n = 1
    while n <= 4:
        print(n)
        n = n + 1
    ```

??? note "Fasit – oppgave 10"
    Vi tar bare med produkter når \(i+j\) er partall.

    - Når \(i=1\), er \(j=1,3\) med: \(1\cdot1+1\cdot3=4\).
    - Når \(i=2\), er \(j=2,4\) med: \(2\cdot2+2\cdot4=12\).
    - Når \(i=3\), er \(j=3\) med: \(3\cdot3=9\).

    Summen blir \(4+12+9=25\), og fem produkter ble lagt til. Utskriften er `25 5`.

??? note "Fasit – oppgave 11"
    Programmet skriver ut:

    ```text
    -3 15 15
    -2 8 15
    -1 3 18
    0 0 18
    1 -1 18
    2 0 18
    3 3 21
    4 8 21
    Sluttsum: 21
    ```

    `sum` endres bare når både `y > 0` og `x` er oddetall. For eksempel er \(x=1\) oddetall, men \(y=-1\), så summen øker ikke.

??? note "Fasit – oppgave 12"
    Én mulig løsning:

    ```python
    antall = 0
    sum = 0

    for tall in range(1, 31):
        if tall % 6 == 0:
            print(tall)
            antall = antall + 1
            sum = sum + tall
        elif tall % 2 == 0:
            print(tall)
            antall = antall + 1
            sum = sum + tall

    print("Antall:", antall)
    print("Sum:", sum)
    ```

    Tallene som skrives ut, er alle partall fra 2 til 30. Det er 15 tall, og summen er \(2+4+\cdots+30=240\). Tall som er delelige med både 2 og 3, må testes først hvis vi vil skille dem fra de andre partallene. Her blir de skrevet ut én gang hver.
