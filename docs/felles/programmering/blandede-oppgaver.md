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

### Oppgave 5 – Oppdatering flere ganger

Fyll ut verdiene til `n` etter hver runde. Hva skrives til slutt?

```python
n = 2

for i in range(3):
    n = n + 2

print(n)
```

### Oppgave 6 – Flere valg

Hva skriver programmet ut? Forklar hvorfor.

```python
poeng = 65

if poeng >= 80:
    print("A")
elif poeng >= 60:
    print("B")
else:
    print("C")
```

### Oppgave 7 – Summer tall

Følg med på `sum` for hver runde. Hva blir sluttverdien?

```python
sum = 0

for tall in range(2, 6):
    sum = sum + tall

print(sum)
```

### Oppgave 8 – Løkke med betingelse

Hvilke tall skrives ut?

```python
for x in range(1, 7):
    if x % 2 == 0:
        print(x)
```

Hint: `%` gir resten etter divisjon.

---

## 🔴 Rød – Utfordring

### Oppgave 9 – Finn feilen

Programmet skal skrive ut tallene 1, 2, 3 og 4, men det stopper ikke. Forklar hvorfor og rett koden.

```python
n = 1

while n <= 4:
    print(n)
```

### Oppgave 10 – To variabler endres

Fyll ut en tabell med `a`, `b` og `i` for hver runde. Hva skrives ut?

```python
a = 1
b = 2

for i in range(3):
    a = a + b
    b = b + 1

print(a, b)
```

### Oppgave 11 – Matematisk mønster

Programmet lager verdier for en funksjon. Fyll ut tabellen for \(x\) og \(y\), og forklar mønsteret.

```python
for x in range(-2, 3):
    y = x * x - 1
    print(x, y)
```

### Oppgave 12 – Lag programmet selv

Skriv Python-kode som går gjennom heltallene fra 1 til 10 og:

1. skriver ut tallet hvis det er delelig med 3
2. ellers skriver ut teksten `Ikke delelig med 3`

Prøv først å lage en algoritme med vanlige ord.

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
    `n` starter på 2 og øker med 2 tre ganger: 4, 6, 8. Programmet skriver ut 8.

??? note "Fasit – oppgave 6"
    Programmet skriver ut `B`, fordi 65 ikke er minst 80, men er minst 60.

??? note "Fasit – oppgave 7"
    Løkken legger sammen 2, 3, 4 og 5. Sluttverdien er 14.

??? note "Fasit – oppgave 8"
    ```text
    2
    4
    6
    ```

??? note "Fasit – oppgave 9"
    Variabelen `n` endres aldri. Øk den med 1 inne i løkken:

    ```python
    n = 1
    while n <= 4:
        print(n)
        n = n + 1
    ```

??? note "Fasit – oppgave 10"
    Etter rundene er `a` lik 3, 6 og 10. `b` blir 3, 4 og 5. Programmet skriver ut `10 5`.

??? note "Fasit – oppgave 11"
    ```text
    -2 3
    -1 0
    0 -1
    1 0
    2 3
    ```

    Verdiene er symmetriske rundt \(x=0\), fordi \(x^2\) har samme verdi for \(x\) og \(-x\).

??? note "Fasit – oppgave 12"
    Én mulig løsning:

    ```python
    for tall in range(1, 11):
        if tall % 3 == 0:
            print(tall)
        else:
            print("Ikke delelig med 3")
    ```
