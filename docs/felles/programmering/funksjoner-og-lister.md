# Del 5 – Funksjoner og lister

Funksjoner og lister hjelper oss å lage større programmer uten å miste oversikten. En funksjon samler en oppgave under et navn. En liste samler flere verdier i en bestemt rekkefølge.

Vi begynner med funksjoner, går videre til lister og kombinerer dem til slutt.

## 5.1 Funksjoner: gi kode et navn

En funksjon er en navngitt kodeblokk som utfører en oppgave. Vi definerer den med `def`, et navn, parenteser og kolon. Koden i funksjonen må rykkes inn.

```python
def hils():
    print("Hei!")
```

Definisjonen lager funksjonen, men kjører den ikke. For å utføre koden må vi **kalle** funksjonen:

```python
hils()
```

### Parametere og argumenter

En funksjon kan ta imot verdier. Navnet i definisjonen kalles en **parameter**. Verdien vi sender inn når vi kaller funksjonen, kalles et **argument**.

```python
def hils_navn(navn):
    print("Hei,", navn)

hils_navn("Ada")
```

Her er `navn` parameteren, og `"Ada"` argumentet. Utskriften blir `Hei, Ada`.

### `print` eller `return`?

Dette skillet er helt sentralt:

- `print(verdi)` viser verdien på skjermen.
- `return verdi` sender verdien tilbake til stedet funksjonen ble kalt fra. Da kan resultatet lagres eller brukes i en ny beregning.

```python
def dobbelt(tall):
    return 2 * tall

svar = dobbelt(6)
print(svar + 1)
```

Funksjonen returnerer 12. Deretter lagres 12 i `svar`, og programmet skriver ut 13.

!!! important "Husk"
    - Funksjonen må kalles før den utfører oppgaven.
    - Parametere er navn på verdier funksjonen mottar.
    - Kodeblokken må ha riktig innrykk.
    - `return` avslutter funksjonskallet og gir tilbake en verdi.

## 🟢 Grønn – Grunnlag

!!! question "Oppgave 1 – Forstå funksjoner"
    **a)** Skriv en funksjon `kvadrat(tall)` som returnerer kvadratet av tallet. Test med 5.

    **b)** Hva skrives ut?

    ```python
    def pluss_tre(x):
        return x + 3

    a = pluss_tre(4)
    print(a * 2)
    ```

    **c)** Skriv en funksjon `kvadratrot(tall)` som returnerer kvadratroten av tallet. Test med 9.

    **Hint:** Skriv kvadratroten som en potens med eksponent `1/2`.

    **d)** Forklar forskjellen på `print(x)` og `return x`. Gi ett eksempel på når du trenger `return`.

## 5.2 Lister: lagre flere verdier

En liste lagrer flere verdier i en bestemt rekkefølge. Vi bruker hakeparenteser og komma mellom elementene.

```python
temperatur = [12, 15, 11, 18]
navn = ["Ada", "Ola", "Mina"]
tom_liste = []
```

### Indekser starter på 0

Det første elementet har indeks 0, det andre indeks 1 og så videre.

```python
temperatur = [12, 15, 11, 18]
print(temperatur[0])  # 12
print(temperatur[2])  # 11
```

Hvis en liste har fire elementer, er indeksene 0, 1, 2 og 3. En indeks som ikke finnes, gir en feil.

### Endre, legge til og telle elementer

```python
tall = [4, 7, 2]
tall[1] = 10
tall.append(8)
print(tall)       # [4, 10, 2, 8]
print(len(tall))  # 4
```

- `tall[1] = 10` endrer elementet med indeks 1.
- `append(8)` legger 8 bakerst.
- `len(tall)` gir antall elementer i listen.

### Gå gjennom en liste

En `for`-løkke kan behandle elementene ett etter ett:

```python
tall = [4, 7, 2]
for x in tall:
    print(x)
```

Programmet skriver ut 4, 7 og 2. Variabelen `x` får verdien til ett element for hver runde.

!!! question "Oppgave 2 – Forstå lister"
    Gitt listen `tall = [3, 6, 9, 12]`:

    **a)** Hva gir `tall[1]`? Forklar hvorfor det ikke er 3.

    **b)** Skriv kode som endrer det andre elementet til 10 og legger 15 bakerst.

    **c)** Hva skrives ut?

    ```python
    tall = [2, 5, 8]
    tall[0] = 4
    tall.append(11)
    print(len(tall))
    print(tall)
    ```

    **d)** Skriv en `for`-løkke som skriver ut hvert element i `farger = ["rød", "blå", "grønn"]`.

## 5.3 Kombiner funksjoner, lister og løkker

Funksjoner blir særlig nyttige når de behandler lister. En god funksjon har en tydelig oppgave, mottar det den trenger som parametere og returnerer et resultat.

Se hvordan vi regner ut summen av en liste:

```python
def sum_liste(tall):
    sum_tall = 0
    for x in tall:
        sum_tall = sum_tall + x
    return sum_tall

print(sum_liste([3, 5, 2]))  # 10
```

Sporing:

| Runde | `x` | `sum_tall` etter oppdatering |
|---:|---:|---:|
| Før løkken | – | 0 |
| 1 | 3 | 3 |
| 2 | 5 | 8 |
| 3 | 2 | 10 |

Først går løkken gjennom alle elementene. Etter løkken returneres summen. Legg merke til at `return` står **utenfor** løkken; ellers ville funksjonen stoppet før den hadde behandlet alle elementene.

## 🔴 Rød – Selvstendig problemløsing

!!! question "Oppgave 3 – Kombiner verktøyene"
    **a)** Lag `tell_positive(tall)`, som returnerer hvor mange elementer som er større enn 0. Test med `[-2, 4, 0, 7, -1, 3]`.

    **b)** Lag `doble_liste(tall)`, som returnerer en ny liste der hvert element er dobbelt så stort som før. Den opprinnelige listen skal ikke endres.

    **c)** Lag `over_grense(tall, grense)`, som returnerer en ny liste med elementene som er større enn `grense`, i samme rekkefølge. Test med `[3, 8, 2, 10]` og grensen 5.

## 5.4 Fasit

??? note "Fasit – oppgave 1"
    **a)**
    ```python
    def kvadrat(tall):
        return tall * tall

    print(kvadrat(5))  # 25
    ```

    **b)** `a` blir 7, og programmet skriver ut 14.

    **c)** `print` viser en verdi. `return` gir en verdi tilbake slik at den kan brukes videre, for eksempel `svar = kvadrat(5)`.

??? note "Fasit – oppgave 2"
    **a)** 6. Indeksering starter på 0, så indeks 1 viser til det andre elementet.

    **b)**
    ```python
    tall = [3, 6, 9, 12]
    tall[1] = 10
    tall.append(15)
    ```

    **c)** Først skrives 4 ut, deretter `[4, 5, 8, 11]`.

    **d)**
    ```python
    farger = ["rød", "blå", "grønn"]
    for farge in farger:
        print(farge)
    ```

??? note "Fasit – oppgave 3"
    **a)**
    ```python
    def tell_positive(tall):
        antall = 0
        for x in tall:
            if x > 0:
                antall += 1
        return antall
    ```
    Resultatet er 3.

    **b)**
    ```python
    def doble_liste(tall):
        ny = []
        for x in tall:
            ny.append(2 * x)
        return ny
    ```
    En ny liste opprettes, slik at originalen beholdes uendret.

    **c)**
    ```python
    def over_grense(tall, grense):
        ny = []
        for x in tall:
            if x > grense:
                ny.append(x)
        return ny
    ```
    Kallet `over_grense([3, 8, 2, 10], 5)` gir `[8, 10]`.
