# Del 2 – Variabler og regning

## 2.1 Variabler – navn som lagrer verdier

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

## 2.2 Regning i Python

Python kan utføre vanlige regneoperasjoner. Disse symbolene er spesielt viktige:

| Operasjon | Symbol i Python | Eksempel | Resultat |
|---|---|---|---:|
| Addisjon | `+` | `6 + 2` | 8 |
| Subtraksjon | `-` | `6 - 2` | 4 |
| Multiplikasjon | `*` | `6 * 2` | 12 |
| Divisjon | `/` | `6 / 2` | 3 |
| Heltallsrest (modulo) | `%` | `7 % 3` | 1 |
| Potens | `**` | `2 ** 3` | 8 |

Legg merke til at multiplikasjon skrives med `*`, potens skrives med `**`, og modulo skrives med `%`. Vi skriver altså `2 ** 3` for \(2^3\).

### Hva betyr modulo (`%`)?

Operatoren `%` gir **resten etter heltallsdivisjon**. For eksempel:

- `7 % 3` gir 1, fordi \(7=2\cdot3+1\).
- `8 % 3` gir 2, fordi \(8=2\cdot3+2\).
- `12 % 3` gir 0, fordi 12 går opp i 3 uten rest.

Dette er nyttig når vi vil undersøke om et tall er delelig med et annet. Hvis `tall % 2 == 0`, er `tall` et partall. Hvis `tall % 2 != 0`, er det et oddetall.

Eksempel:

```python
for tall in range(1, 5):
    print(tall % 2)
```

Utskriften blir:

```text
1
0
1
0
```

Resten veksler mellom 1 og 0, så vi kan bruke `%` til å finne partall og oddetall.

Python følger vanlige regneregler for parenteser og regnerekkefølge:

```python
a = 2 + 3 * 4
b = (2 + 3) * 4
print(a)
print(b)
```

- `a` blir \(2+12=14\).
- `b` blir \(5\cdot4=20\).

Utskriften blir først 14 og deretter 20.
