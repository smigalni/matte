# Lærerveiledning – R1 derivasjon, kapittel 3

**Lesson Kit:** LK-R1-3-01  
**Varighet:** 60 minutter  
**Målgruppe:** Privatundervisning, elev med svært høyt faglig nivå  
**Hjelpemidler:** Ingen kalkulator eller CAS

## Formål og avgrensning

Eleven skal vise dyp forståelse av deriverbarhet og definisjonen av den deriverte, og bruke derivasjon til å bevise en generell ulikhet. Økten dekker utvalgte deler av 3.5, 3.6 og 3.9. Den erstatter ikke gjennomgang av 3.7 numerisk derivasjon eller 3.8 programmering. Kapittel 3 skal ikke regnes som fullført før disse delene også er arbeidet med.

## 1. Gjennomføring – 60 minutter

| Tid | Del | Lærerens rolle |
|---|---|---|
| 0–4 min | Startspørsmål | Spør: «Kan en funksjon være kontinuerlig, men ikke deriverbar?» Be eleven gi et eksempel før dere regner. |
| 4–17 min | Oppgave 1 | La eleven sette opp kontinuitet først. Ikke gi den deriverte betingelsen før eleven har forklart hva som må være likt fra venstre og høyre. |
| 17–28 min | Oppgave 2 | Be eleven undersøke fortegn nær \(x=1\). Spør hva absoluttverdien gjør med fortegnet på hver side. |
| 28–43 min | Oppgave 3 | Krev full utledning fra definisjonen. Følg spesielt med på at eleven ikke setter \(\Delta x=0\) før uttrykket er forenklet. |
| 43–57 min | Oppgave 4 | La eleven finne en nødvendig øvre grense for \(k\) før beviset. Deretter bevis at grensen fungerer. |
| 57–60 min | Avslutning | Be eleven forklare én idé uten å se på arket. Noter hva som må repeteres. |

## 2. Løsningsforslag og hint

### Oppgave 1 – kontinuitet og deriverbarhet

**a) Kontinuitet:** Venstre grenseverdi må være lik funksjonsverdien fra høyre:

\[
a+b+1=1^2+3=4
\]

Dermed er \(a+b=3\).

**b) Deriverbarhet:** De ensidige stigningstallene må også være like. Venstre derivert ved 1 er \(2a+b\), høyre derivert er 2:

\[
2a+b=2.
\]

Sammen med \(a+b=3\) får vi

\[
\boxed{a=-1,\qquad b=4}.
\]

**c)** Deriverbarhet innebærer kontinuitet. Kontinuitet alene er ikke nok; et knekkpunkt kan være kontinuerlig uten å ha samme ensidige stigningstall.

**Hintstige**

1. Hva må være likt når \(x\) nærmer seg 1 fra venstre og fra høyre?
2. Skriv først \(f(1)\) fra høyre uttrykk. Deretter sammenligner du venstre grenseverdi med denne.
3. Deriver hvert uttrykk på sin egen side og sett \(x=1\). Sammenlign \(2a+b\) med 2.

### Oppgave 2 – absoluttverdi

**a)**

\[
x^2-2x+1=(x-1)^2\geq0.
\]

Dermed er \(f(x)=(x-1)^2\), og \(f'(x)=2(x-1)\). Funksjonen er deriverbar i \(x=1\), med \(f'(1)=0\).

**b)**

\[
x^2-4x+3=(x-1)(x-3).
\]

Nær \(x=1\) er \(x-3\) negativ. For \(x<1\) er produktet positivt, mens for \(x>1\) er produktet negativt.

Dermed blir

\[
g'_-(1)=-2,\qquad g'_+(1)=2.
\]

De ensidige deriverte er ulike, så \(g\) er ikke deriverbar i \(x=1\).

**c)** I første funksjon har uttrykket inni absoluttverdien et dobbelt nullpunkt og skifter ikke fortegn. I den andre har det et enkelt nullpunkt og skifter fortegn. Absoluttverdien skaper derfor en knekk i den andre, men ikke i den første.

**Hintstige**

1. Faktoriser uttrykkene inni absoluttverdien.
2. Undersøk fortegnet på hver side av \(x=1\).
3. Skriv \(g\) som et vanlig polynom på hver side av 1, og finn de to ensidige deriverte.

### Oppgave 3 – definisjonen av den deriverte

Bruk

\[
f'(x)=\lim_{\Delta x\to0}\frac{f(x+\Delta x)-f(x)}{\Delta x}.
\]

Da får vi

\[
\begin{aligned}
f'(x)
&=\lim_{\Delta x\to0}\frac{(x+\Delta x)^3-2(x+\Delta x)-(x^3-2x)}{\Delta x}\\
&=\lim_{\Delta x\to0}\frac{3x^2\Delta x+3x(\Delta x)^2+(\Delta x)^3-2\Delta x}{\Delta x}\\
&=\lim_{\Delta x\to0}\left(3x^2+3x\Delta x+(\Delta x)^2-2\right)\\
&=3x^2-2.
\end{aligned}
\]

Ved \(x=1\): \(f(1)=-1\) og \(f'(1)=1\). Tangenten blir

\[
y+1=1(x-1)\quad\Rightarrow\quad\boxed{y=x-2}.
\]

Det er lov å forkorte med \(\Delta x\) fordi grenseuttrykket vurderes for \(\Delta x\neq0\), og deretter lar vi \(\Delta x\) nærme seg 0.

**Hintstige**

1. Skriv \(f(x+\Delta x)\) før du setter inn i definisjonen.
2. Multipliser ut leddene i tredje potens.
3. Faktoriser \(\Delta x\) i hele telleren før du forkorter.

### Oppgave 4 – optimal konstant

**a) Finn en øvre grense:** Sett \(x=1\) i ulikheten. Da får vi

\[
8\geq4k\quad\Rightarrow\quad k\leq2.
\]

Ingen større \(k\) kan fungere.

**b) Bevis at \(k=2\) fungerer:** For \(x\neq-1\) definerer vi

\[
q(x)=\frac{x^4+4x+3}{(x+1)^2}=x^2-2x+3.
\]

Da er

\[
q'(x)=2x-2.
\]

Funksjonen avtar når \(x<1\) og vokser når \(x>1\). Minimum er derfor

\[
q(1)=2.
\]

Vi kan også se direkte at

\[
q(x)=(x-1)^2+2\geq2.
\]

Dermed gjelder ulikheten for \(k=2\) når \(x\neq-1\). For \(x=-1\) er begge sider 0. Største mulige verdi er derfor

\[
\boxed{k=2}.
\]

**Hintstige**

1. Hvilken x-verdi kan du velge for å få en øvre grense for \(k\)?
2. Prøv \(x=1\). For å bevise at \(k=2\) fungerer, se på differansen mellom venstre og høyre side.
3. For \(x\neq-1\): sett \(q(x)=\frac{x^4+4x+3}{(x+1)^2}=x^2-2x+3\). Deriver \(q\).

## 3. PC-aktivitet – valgfri

Hvis eleven blir ferdig tidlig, bruk GeoGebra til å plotte

\[
f(x)=|x^2-2x+1|,\qquad g(x)=|x^2-4x+3|.
\]

La eleven sammenligne grafene nær \(x=1\) og forklare grafisk det algebraiske resultatet. Skjermen skal bekrefte argumentasjonen, ikke erstatte den.

## 4. Observasjonsskjema

- [ ] Skiller eleven tydelig mellom kontinuitet og deriverbarhet?
- [ ] Kan eleven bruke ensidige deriverte og forklare hvorfor de må være like?
- [ ] Kan eleven utlede en derivert fra definisjonen uten å sette \(\Delta x=0\) for tidlig?
- [ ] Kan eleven lage både en nødvendig betingelse og et tilstrekkelig bevis?
- [ ] Forklarer eleven resonnementet presist, ikke bare regneoperasjonene?

## Etter timen

Noter hvilke oppgaver eleven løste selvstendig, hvor hint måtte gis, og hva som bør repeteres. Neste økt må også dekke 3.7 numerisk derivasjon og 3.8 programmering før kapittel 3 kan regnes som fullført.
