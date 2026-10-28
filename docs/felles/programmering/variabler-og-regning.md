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
- `b` blir \(5\cdot4=20\).

Utskriften blir først 14 og deretter 20.

