---
title: Potenser og logaritmer – elev
---

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · KAPITTEL 1</span>
  <button class="print-button" type="button" data-print-page>Skriv ut elevkapittelet</button>
</div>

# Potenser og logaritmer

**Elevutgave · Målrettet trening i R1**

<div class="chapter-meta" markdown="1">
  <div><strong>Fokus</strong><br>Presisjon · metodevalg · resonnering</div>
  <div><strong>Arbeidsmåte</strong><br>Vis mellomregning og forklar valgene dine</div>
  <div><strong>Mål</strong><br>Stabil kompetanse på høyt nivå</div>
  <div><strong>Tid</strong><br>Ca. 55–70 minutter</div>
</div>

Elev: ____________________________________    Dato: __________________

Dette er en målrettet treningspakke basert på sentrale temaer i R1 kapittel 1. Den er laget for å undersøke både regneferdigheter, metodevalg og matematisk forståelse.

## 1. Verktøykasse

### Potenser

$$
a^m\cdot a^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn}
$$

$$
a^{-n}=\frac{1}{a^n},\qquad
a^0=1\;(a\ne0),\qquad
a^{p/q}=\sqrt[q]{a^p}
$$

### Logaritmer

$$
\lg(ab)=\lg a+\lg b,\qquad
\lg\left(\frac ab\right)=\lg a-\lg b
$$

$$
\lg(a^r)=r\lg a,\qquad
\ln(e^x)=x,\qquad
\ln x=y\iff e^y=x
$$

<div class="math-note" markdown="1">
<strong>Husk definisjonsmengden:</strong> Argumentet i en logaritme må være positivt. Kontroller derfor alltid at alle logaritmeuttrykk er definert før du godtar en løsning.
</div>

Når du løser eksponentialligninger:
- Prøv først å skrive begge sider med samme grunntall.
- Hvis det ikke går, kan du ta logaritmen på begge sider.
- Hvis du ser både \(a^{2x}\) og \(a^x\), kan substitusjonen \(u=a^x\) gjøre ligningen enklere.

## 2. Potenser og røtter

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 1</span>

**Forenkle uttrykkene så langt som mulig.**

a) \(\displaystyle\frac{(x^{-2}y^3)^2}{x^{-1}y^{-2}}\)

b) \(16^{3/4}\cdot 8^{-2/3}\)

c) \(\displaystyle\frac{a^{2/3}\cdot a^{1/6}}{a^{1/2}}\)

Oppgi eventuelle forutsetninger for variablene.
</div>

<div class="task" markdown="1">
<span class="task-level">FORSTÅ · OPPGAVE 2</span>

En elev skriver:

$$\sqrt{x^2}=x\quad\text{for alle reelle }x.$$

Er påstanden riktig? Hvis ikke: korriger den, og forklar med et konkret eksempel hvorfor påstanden svikter.
</div>

<div class="task" markdown="1">
<span class="task-level">RESONNER · OPPGAVE 3</span>

Forklar hvorfor

$$\frac{a^m}{a^n}=a^{m-n}\quad(a\ne0).$$

Ta utgangspunkt i potensregelen for multiplikasjon. Vis hvorfor regelen virker.
</div>

## 3. Logaritmer og definisjonsmengde

<div class="task" markdown="1">
<span class="task-level">KJERNE · OPPGAVE 4</span>

**Forenkle eller vis at uttrykket har den oppgitte verdien.**

a) \(\displaystyle\ln\left(\frac{e^3\sqrt e}{e^{-2}}\right)\)

b) Vis at følgende uttrykk er lik 1 for alle \(x>0\):

$$2\lg x+\lg\left(\frac{100}{x}\right)-\lg(10x).$$

Vis hvilke logaritmeregler du bruker.
</div>

<div class="task" markdown="1">
<span class="task-level">METODE · OPPGAVE 5</span>

Løs ligningen og kontroller at løsningen er gyldig:

$$\lg x+\lg(x-3)=1.$$

Forklar hvorfor du må ta hensyn til definisjonsmengden.
</div>

<div class="task" markdown="1">
<span class="task-level">RESONNER · OPPGAVE 6</span>

En elev hevder at \(\ln(a+b)=\ln a+\ln b\).

a) Vis med et konkret tall-eksempel at påstanden ikke stemmer.

b) Skriv den korrekte regelen eleven kanskje har blandet den sammen med.

c) Forklar med ord hva regelen faktisk sier.
</div>

## 4. Eksponentialligninger og modellering

<div class="task" markdown="1">
<span class="task-level">METODE · OPPGAVE 7</span>

Løs ligningen:

$$3^{2x}-4\cdot3^x+3=0.$$

Tips: Kan uttrykket skrives som en andregradsligning i en ny variabel? Begrunn hvorfor substitusjonen er lovlig.
</div>

<div class="task" markdown="1">
<span class="task-level">METODE · OPPGAVE 8</span>

Løs ligningen:

$$e^{2x}-5e^x+6=0.$$

Løs den effektivt. Forklar kort hvorfor du ikke kan ta logaritmen direkte på hvert ledd.
</div>

<div class="model-box" markdown="1">
**Modell**

En populasjon beskrives av

$$N(t)=800\cdot1{,}12^t,$$

der \(t\) er antall år etter starttidspunktet.
</div>

<div class="task" markdown="1">
<span class="task-level">ANVEND · OPPGAVE 9</span>

a) Hva betyr tallene 800 og 1,12 i modellen?

b) Anslå når populasjonen passerer 1600.

c) Bestem tidspunktet mer nøyaktig ved regning. Vis framgangsmåten.

d) Nevn én grunn til at modellen ikke nødvendigvis beskriver utviklingen godt på lang sikt.
</div>

## 5. Utvidelse

<div class="task" markdown="1">
<span class="task-level">UTVIDELSE · OPPGAVE 10</span>

La \(0<x<10\) og definer

$$F(x)=\ln x+\ln(10-x).$$

a) Vis at \(F(x)=\ln(x(10-x))\).

b) Finn den største mulige verdien av \(F(x)\), uten å bruke derivasjon.

c) Forklar hvorfor verdien oppnås akkurat der du fant den.

Du må begrunne svaret. Et tall alene er ikke nok.
</div>

<div class="task" markdown="1">
<span class="task-level">SKAP · OPPGAVE 11</span>

Lag en eksponentialligning som har nøyaktig løsningene \(x=0\) og \(x=2\). Ligningen skal inneholde grunntallet 5 og kunne løses ved substitusjonen \(u=5^x\).

Løs ligningen du har laget, og forklar hvordan du vet at den har nøyaktig disse løsningene.
</div>

---

<div class="student-reflection" markdown="1">
## Egenvurdering

- Hvilke oppgaver løste jeg helt selvstendig?
- Hvor måtte jeg prøve en annen strategi?
- Hvilken feil oppdaget jeg eller lærte jeg av?
- Hva bør jeg øve mer på?
</div>
