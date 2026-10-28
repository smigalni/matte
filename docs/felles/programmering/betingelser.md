# Del 4 – Betingelser: \`if\`, \`else\` og \`elif\`

Et program kan gjøre forskjellige ting avhengig av en betingelse. I Python bruker vi \`if\` («hvis»), \`else\` («ellers») og noen ganger \`elif\` («ellers hvis»).

## 4.1 Sammenligninger

| Operator | Betydning | Eksempel |
|---|---|---|
| \`==\` | er lik | \`x == 5\` |
| \`!=\` | er ulik | \`x != 5\` |
| \`>\` | større enn | \`x > 5\` |
| \`<\` | mindre enn | \`x < 5\` |
| \`>=\` | større enn eller lik | \`x >= 5\` |
| \`<=\` | mindre enn eller lik | \`x <= 5\` |

**Viktig:** Ett likhetstegn (\`=\`) gir en variabel en verdi. To likhetstegn (\`==\`) undersøker om to verdier er like.

\`\`\`python
x = 5
print(x == 5)
print(x > 8)
\`\`\`

Utskriften blir \`True\` og deretter \`False\`.

## 4.2 \`if\` og \`else\`

\`\`\`python
alder = 17

if alder >= 18:
    print("Du er myndig")
else:
    print("Du er ikke myndig")
\`\`\`

Programmet undersøker om \`alder >= 18\` er sant. Det er usant, så det skriver ut \`Du er ikke myndig\`.

Kolonet \`:\` starter en blokk. Linjene i blokken må ha innrykk. Innrykket viser hvilke instruksjoner som hører til betingelsen.

## 4.3 Flere valg med \`elif\`

\`\`\`python
poeng = 72

if poeng >= 90:
    print("Karakter 6")
elif poeng >= 80:
    print("Karakter 5")
elif poeng >= 60:
    print("Karakter 4")
else:
    print("Karakter 3 eller lavere")
\`\`\`

Programmet undersøker betingelsene ovenfra og ned. Så snart én betingelse er sann, kjøres den tilhørende blokken. Her skriver programmet ut \`Karakter 4\`.

## 4.4 En fast metode for å lese betingelser

1. Skriv ned verdien til hver variabel.
2. Undersøk betingelsen nøyaktig slik den står.
3. Marker om den er sann eller usann.
4. Følg bare blokken som passer.
5. Les av utskriften.

## 4.5 Oppgaver

**Oppgave 1 – Sant eller usant?**

\`\`\`python
x = 7
print(x > 5)
print(x == 5)
print(x != 7)
\`\`\`

Hva skrives ut?

**Oppgave 2 – Hvilken blokk kjører?**

\`\`\`python
temperatur = 3

if temperatur < 0:
    print("Frost")
else:
    print("Ikke frost")
\`\`\`

Hva blir utskriften?

**Oppgave 3 – Flere valg**

\`\`\`python
x = 12

if x > 20:
    print("A")
elif x > 10:
    print("B")
elif x > 5:
    print("C")
else:
    print("D")
\`\`\`

Hva skriver programmet ut? Forklar hvorfor det ikke skriver ut de andre bokstavene.

**Oppgave 4 – Matematikk**

Skriv en algoritme og deretter Python-kode som undersøker om et tall er positivt eller ikke-positivt. Test med tallene 8, 0 og -3.

**Oppgave 5 – Feilsøking**

Hva er feil med denne koden? Skriv den riktig.

\`\`\`python
x = 4
if x == 4:
print("Fire")
else:
print("Ikke fire")
\`\`\`

## Fasit

??? note "Fasit – oppgave 1"
    \`\`\`text
    True
    False
    False
    \`\`\`

??? note "Fasit – oppgave 2"
    Programmet skriver ut \`Ikke frost\`, fordi 3 ikke er mindre enn 0.

??? note "Fasit – oppgave 3"
    Programmet skriver ut \`B\`. Den første betingelsen er usann, men \`x > 10\` er sann. Da hoppes resten av valgene over.

??? note "Fasit – oppgave 4"
    \`\`\`python
    tall = -3

    if tall > 0:
        print("Positivt")
    else:
        print("Ikke-positivt")
    \`\`\`

    For 8 blir utskriften \`Positivt\`. For 0 og -3 blir den \`Ikke-positivt\`.

??? note "Fasit – oppgave 5"
    Begge \`print\`-linjene må ha innrykk fordi de hører til hver sin blokk:

    \`\`\`python
    x = 4
    if x == 4:
        print("Fire")
    else:
        print("Ikke fire")
    \`\`\`
