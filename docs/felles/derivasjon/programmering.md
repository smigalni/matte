# 3.8 Programmering: deriverte og vekstfart

## Oppgaver

!!! question "Oppgave 3.8.1 – Numerisk tilnærming"

    Skriv en funksjon i Python som tar inn en funksjon, et punkt \(x\) og en liten verdi \(h\), og beregner

    \[
    \frac{f(x+h)-f(x)}h.
    \]

    Test på \(f(x)=x^2\) ved \(x=3\). Sammenlign resultatet for flere verdier av \(h\) med den eksakte deriverte.

!!! question "Oppgave 3.8.2 – Sammenlign to metoder"

    Utvid programmet til også å beregne den symmetriske tilnærmingen. Lag en tabell over resultatene og forklar hvilken metode som er mest nøyaktig i testene dine. Ikke konkluder bare fra én enkelt verdi.

!!! question "Oppgave 3.8.3 – Bevegelse"

    La \(s(t)=t^3-6t^2+9t\) beskrive posisjon i meter etter \(t\) sekunder for \(0\leq t\leq5\).

    Skriv et program som beregner tilnærmet fart ved flere tidspunkter. Bruk deretter den deriverte til å finne den eksakte farten, og sammenlign. Drøft hva fortegnet på den deriverte betyr i modellen.

## Fasit og løsningsskisser

??? note "Fasit – oppgave 3.8.1"

    \`\`\`python
    def framoverdifferanse(f, x, h):
        return (f(x + h) - f(x)) / h

    f = lambda x: x**2
    for h in [0.1, 0.01, 0.001]:
        print(h, framoverdifferanse(f, 3, h))
    \`\`\`

    Den eksakte deriverte er \(f'(x)=2x\), så \(f'(3)=6\). Tilnærmingene blir henholdsvis \(6,1\), \(6,01\) og \(6,001\).

??? note "Fasit – oppgave 3.8.2"

    Den symmetriske tilnærmingen er \(\frac{f(x+h)-f(x-h)}{2h}\). For \(f(x)=x^2\) ved \(x=3\) gir den eksakt \(6\) i ideell regning, fordi uttrykket forenkles til \(6\). I flyttallsregning kan avrunding likevel forekomme.

??? note "Fasit – oppgave 3.8.3"

    \[
    s'(t)=3t^2-12t+9=3(t-1)(t-3).
    \]

    Den eksakte farten med fortegn er negativ for \(1<t<3\), positiv for \(0\leq t<1\) og \(3<t\leq5\), og lik null ved \(t=1\) og \(t=3\). Den numeriske tilnærmingen bør ligge nær \(s'(t)\) når \(h\) er tilstrekkelig liten.
