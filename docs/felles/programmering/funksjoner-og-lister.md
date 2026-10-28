# Del 7 – Funksjoner og lister

I dette delkapittelet lærer du to nyttige verktøy i Python. **Funksjoner** lar oss samle kode under et navn og bruke den flere ganger. **Lister** lar oss lagre flere verdier i én variabel.

## 7.1 Hvordan definerer vi en funksjon?

En funksjon er en navngitt kodeblokk som utfører en oppgave. Vi definerer den med nøkkelordet `def`, et navn, parenteser og kolon. Koden som hører til funksjonen, må rykkes inn.

```python
def hils():
    print("Hei!")
```

Funksjonen kjører ikke bare fordi vi har definert den. Vi må kalle den:

```python
hils()
```

### Funksjoner med parametere

En funksjon kan ta imot verdier. Navnene i definisjonen kalles **parametere**.

```python
def hils_navn(navn):
    print("Hei,", navn)

hils_navn("Ada")
```

Utskriften blir `Hei, Ada`. Her er `navn` parameteren, mens `"Ada"` er argumentet vi sender inn når vi kaller funksjonen.

### `return` – gi tilbake en verdi

Bruk `return` når funksjonen skal gi tilbake en verdi som resten av programmet kan bruke. `print()` viser noe på skjermen, mens `return` sender verdien tilbake til stedet funksjonen ble kalt fra.

```python
def dobbelt(tall):
    return 2 * tall

svar = dobbelt(6)
print(svar)  # 12
```

Først regner funksjonen ut (2\cdot6=12). Deretter blir 12 lagret i variabelen `svar`.

!!! important "Husk"
    - `def` starter en funksjonsdefinisjon.
    - Kolon og innrykk er nødvendige.
    - Funksjonen må kalles for at koden skal kjøre.
    - `return` gir tilbake en verdi; `print` skriver ut en verdi.

!!! question "Oppgave 1 – Funksjoner"
    a) Skriv en funksjon `hei()` som skriver ut `Hei!`, og kall funksjonen.

    b) Skriv en funksjon `kvadrat(tall)` som returnerer tallet ganget med seg selv. Test med 5.

    c) Hva blir skrevet ut?

    ```python
    def pluss_tre(x):
        return x + 3

    a = pluss_tre(4)
    print(a * 2)
    ```

    d) Forklar forskjellen på `print(x)` og `return x`.

## 7.2 Hvordan lager vi en liste?

En liste lagrer flere verdier i en bestemt rekkefølge. Vi lager en liste med hakeparenteser `[]`, og skiller verdiene med komma.

```python
tall = [4, 7, 2, 9]
navn = ["Ada", "Ola", "Mina"]
tom_liste = []
```

### Hente ut elementer

Python teller listeposisjoner fra **0**. Det første elementet har indeks 0, det andre indeks 1 og så videre.

```python
tall = [4, 7, 2, 9]
print(tall[0])  # 4
print(tall[2])  # 2
```

### Endre og legge til elementer

```python
tall = [4, 7, 2]
tall[1] = 10       # endrer elementet på indeks 1
tall.append(8)     # legger til 8 bakerst
print(tall)        # [4, 10, 2, 8]
```

Funksjonen `len(liste)` gir antall elementer. En `for`-løkke kan gå gjennom elementene ett etter ett:

```python
tall = [4, 7, 2]
for x in tall:
    print(x)
```

Dette skriver ut 4, 7 og 2 på hver sin linje.

!!! question "Oppgave 2 – Lister"
    a) Lag en liste som inneholder tallene 3, 6, 9 og 12.

    b) Hva skriver `print(tall[1])` ut dersom `tall = [3, 6, 9, 12]`?

    c) Skriv kode som legger tallet 15 bakerst i listen `tall`.

    d) Hva blir resultatet av koden?

    ```python
    tall = [2, 5, 8]
    tall[0] = 4
    tall.append(11)
    print(len(tall))
    print(tall)
    ```

    e) Bruk en `for`-løkke til å skrive ut hvert element i `farger = ["rød", "blå", "grønn"]`.

## 7.3 Fasit

??? note "Fasit – oppgave 1"
    **a)**
    ```python
    def hei():
        print("Hei!")

    hei()
    ```

    **b)**
    ```python
    def kvadrat(tall):
        return tall * tall

    print(kvadrat(5))  # 25
    ```

    **c)** Først blir `a = 4 + 3 = 7`. Deretter skrives 14 ut.

    **d)** `print(x)` viser verdien på skjermen. `return x` sender verdien tilbake fra funksjonen, slik at den kan lagres eller brukes videre.

??? note "Fasit – oppgave 2"
    **a)** `tall = [3, 6, 9, 12]`

    **b)** 6, fordi indeks 1 viser til det andre elementet.

    **c)** `tall.append(15)`

    **d)** Først skrives 3 ut, og deretter listen med fire elementer:
    ```text
    4
    [4, 5, 8, 11]
    ```

    **e)**
    ```python
    farger = ["rød", "blå", "grønn"]
    for farge in farger:
        print(farge)
    ```
