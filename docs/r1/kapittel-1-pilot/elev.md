---
title: Potenser og logaritmer – elev
---

<div class="print-cover" aria-label="MathPlatform">
  <div class="print-cover__identity">
    <div class="print-cover__mark">M</div>
    <div class="print-cover__name">MathPlatform</div>
    <div class="print-cover__tagline">Matematikk · forståelse · mestring</div>
  </div>
</div>

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · KAPITTEL 1</span>
  <button class="print-button" type="button" data-print-page>Skriv ut elevkapittelet</button>
</div>

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

## Innledning

# Potenser og logaritmer

**Elevutgave · Fordypningsøkt mot karakter 6**

<div class="chapter-meta" markdown="1">
  <div><strong>Fokus</strong><br>Presisjon · metodevalg · resonnering</div>
  <div><strong>Arbeidsmåte</strong><br>Vis mellomregning og forklar valgene dine</div>
  <div><strong>Mål</strong><br>Mål: karakter 6 – presisjon, selvstendighet og resonnering</div>
  <div><strong>Tid</strong><br>Ca. 2 timer</div>
</div>

Elev: ____________________________________    Dato: __________________

Dette er en målrettet fordypningsøkt basert på sentrale temaer i R1 kapittel 1. Målet er å arbeide på nivå 6: velge effektive metoder, begrunne påstander, vurdere gyldighet og se sammenhenger.

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

## 6. Fordypning – arbeid mot karakter 6

<div class="task task--extension" markdown="1">
<div class="task-heading"><span class="task-level">UTVIDELSE</span><strong>Oppgave 18 · Faktoriser smart</strong></div>

Løs ligningen:

$$
2^x+2^{x+1}+2^{x+2}=56.
$$

Finn en effektiv framgangsmåte. Forklar hvordan du kan faktorisere uttrykket slik at du slipper å prøve deg fram.
</div>

<div class="task task--extension" markdown="1">
<div class="task-heading"><span class="task-level">UTVIDELSE</span><strong>Oppgave 19 · Andregradsligning i forkledning</strong></div>

Løs ligningen:

$$
(\lg x)^2+\lg x-2=0.
$$

Bruk en substitusjon for å gjøre ligningen om til en andregradsligning. Vis hvordan du finner alle løsningene, og kontroller at de er gyldige.
</div>


Disse oppgavene krever at du kombinerer flere ideer. Skriv en tydelig begrunnelse, og kommenter eventuelle begrensninger.

<div class="task" markdown="1">
<span class="task-level">FORDYPNING · OPPGAVE 12</span>

**Logaritmen som funksjon**

For \(a>0\), \(a\ne1\), er \(f(x)=\log_a x\).

a) Forklar hvorfor definisjonsmengden er \(x>0\), og hvorfor grafen alltid går gjennom punktet \((1,0)\).

b) Finn \(\log_2 8\), \(\log_2(1/8)\) og \(\log_2\sqrt 2\). Forklar sammenhengen mellom svarene.

c) Beskriv hvordan grafen endres når grunntallet går fra \(a>1\) til \(0<a<1\).
</div>

<div class="task" markdown="1">
<span class="task-level">FORDYPNING · OPPGAVE 13</span>

**En ligning med parameter**

Løs ligningen

$$
\ln(x-1)+\ln(x+1)=\ln(k)
$$

for \(k>0\).

a) Bestem definisjonsmengden.

b) Finn løsningene uttrykt ved \(k\).

c) Forklar hvorfor det bare finnes én gyldig løsning for hver \(k>0\).
</div>

<div class="task" markdown="1">
<span class="task-level">FORDYPNING · OPPGAVE 14</span>

**To eksponentielle modeller**

To modeller beskriver samme størrelse:

$$
A(t)=500\cdot1{,}08^t,\qquad B(t)=650\cdot1{,}05^t.
$$

a) Hvilken modell har størst startverdi? Hvilken har størst relativ vekst per tidsenhet?

b) Bestem når modellene gir samme verdi.

c) Hvilken modell gir størst verdi før og etter skjæringspunktet? Begrunn svaret uten å støtte deg bare på en graf.
</div>

<div class="task" markdown="1">
<span class="task-level">FORDYPNING · OPPGAVE 15</span>

**Finn og forklar feilen**

En elev løser

$$
\ln(x+2)+\ln(x-1)=\ln 5
$$

slik:

$$
\ln(2x+1)=\ln5\Rightarrow 2x+1=5\Rightarrow x=2.
$$

a) Er svaret riktig?

b) Undersøk om framgangsmåten er gyldig. Finn den korrekte løsningen og vis alle nødvendige kontroller.

c) Forklar hvilken kontroll som er viktigst i denne oppgaven.
</div>

<div class="task" markdown="1">
<span class="task-level">FORDYPNING · OPPGAVE 16</span>

**Lag en generell regel**

Anta at \(a>0\), \(a\ne1\), og \(x>0\).

a) Vis at

$$
\log_a x=\frac{\ln x}{\ln a}.
$$

b) Bruk regelen til å løse \(7^{2x-1}=11\).

c) Forklar hvorfor løsningen er entydig.
</div>

<div class="task" markdown="1">
<span class="task-level">MUNTLIG / RESONNERING · OPPGAVE 17</span>

Velg én av påstandene og forbered en presis forklaring:

- «En eksponentialfunksjon vokser alltid raskere jo større \(x\) blir.»
- «Hvis to eksponentialfunksjoner har ulik vekstfaktor, vil den med størst vekstfaktor alltid ligge øverst.»
- «Logaritmer gjør multiplikasjon om til addisjon, og derfor kan de brukes til å løse alle ligninger.»

Du skal enten begrunne påstanden eller gi et moteksempel og formulere en mer presis versjon.
</div>

---

<div class="student-reflection"
## Egenvurdering

- Hvilke oppgaver løste jeg helt selvstendig?
- Hvor måtte jeg prøve en annen strategi?
- Hvilken feil oppdaget jeg eller lærte jeg av?\n- Hvilken oppgave krevde mest selvstendig resonnering?\n- Hva ville jeg gjort mer effektivt hvis jeg startet på nytt?
- Hva bør jeg øve mer på?
</div>
