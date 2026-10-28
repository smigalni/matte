# Del 1 – Algoritmer og å lese kode

## 1.1 Hva er programmering?

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


## 1.2 Les kode linje for linje

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


## 1.3 En metode for å lese kode

Når du får et program på papir, bruk denne framgangsmåten:

1. Les programmet én gang for å forstå hva det prøver å gjøre.
2. Start på første linje.
3. Skriv ned nye variabler og verdiene deres.
4. Oppdater en verdi hver gang variabelen får en ny verdi.
5. Regn ut uttrykk med vanlig regnerekkefølge.
6. Finn nøyaktig hva hver `print`-kommando skriver ut.

Ikke anta at en variabel beholder den første verdien den fikk. Følg med på alle endringene.

