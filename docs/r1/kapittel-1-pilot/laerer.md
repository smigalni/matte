---
title: Potenser og logaritmer – lærer
---

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · KAPITTEL 1 · LÆRERUTGAVE</span>
  <button class="print-button" type="button" data-print-page>Skriv ut lærerkapittelet</button>
</div>

# Lærerveiledning: Potenser og logaritmer

**Lærerutgave · Diagnostisk økt og oppfølging**

<div class="teacher-warning" markdown="1">
<strong>KUN TIL UNDERVISER</strong>

Dette kapittelet inneholder løsningsforslag, vurderingsmomenter og forslag til videre arbeid. Ikke del denne visningen med eleven.
</div>

<div class="chapter-meta" markdown="1">
  <div><strong>Anbefalt tid</strong><br>55–70 minutter</div>
  <div><strong>Bruk</strong><br>Første kartlegging + samtale</div>
  <div><strong>Vurder</strong><br>Selvstendighet og presisjon</div>
  <div><strong>Unngå</strong><br>Å gjøre økten til en karakterprøve</div>
</div>

## 1. Formål og faglig fokus

Heftet skal avdekke mer enn om eleven kan reglene. Se særlig etter om eleven:
- velger hensiktsmessig strategi
- kontrollerer definisjonsmengde og vilkår
- kan forklare hvorfor framgangsmåten virker
- vurderer om et svar er rimelig og gyldig

Oppgavene er en diagnostisk seleksjon basert på temaene i R1 kapittel 1, ikke en fullstendig prøve i hele kapittelet. Oppgave 10 og 11 er egne overførings- og utvidelsesoppgaver.

## 2. Løsningsforslag

### Oppgaver 1–3 · Potenser og røtter

**Oppgave 1**

a)

$$\frac{(x^{-2}y^3)^2}{x^{-1}y^{-2}}
=\frac{x^{-4}y^6}{x^{-1}y^{-2}}
=x^{-3}y^8.$$

Forutsetning: \(x\ne0\) og \(y\ne0\).

b)

$$16^{3/4}=(2^4)^{3/4}=2^3=8,$$

$$8^{-2/3}=(2^3)^{-2/3}=2^{-2}=\frac14.$$

Produktet er \(8\cdot\frac14=2\).

c)

$$\frac{a^{2/3}a^{1/6}}{a^{1/2}}
=a^{2/3+1/6-1/2}=a^{1/3}.$$

Oppgi gjerne \(a>0\) som en enkel og trygg forutsetning for reelle potensuttrykk.

**Oppgave 2**

Påstanden er ikke riktig for alle reelle \(x\). Korrekt identitet er

$$\sqrt{x^2}=|x|.$$

Eksempel: \(x=-3\) gir \(\sqrt9=3\), ikke \(-3\). For \(x\ge0\) er \(\sqrt{x^2}=x\).

**Oppgave 3**

For \(a\ne0\) kan vi skrive

$$a^m=a^n\cdot a^{m-n}.$$

Dividerer vi med \(a^n\), får vi

$$\frac{a^m}{a^n}=a^{m-n}.$$

Vurder om eleven forklarer hvorfor divisjon med \(a^n\) er tillatt.

### Oppgaver 4–6 · Logaritmer

**Oppgave 4**

a)

$$\ln\left(\frac{e^3\sqrt e}{e^{-2}}\right)
=\ln(e^{3+1/2+2})=5{,}5.$$

b) For \(x>0\):

$$
\begin{aligned}
2\lg x+\lg\left(\frac{100}{x}\right)-\lg(10x)
&=2\lg x+2-1-\lg x-\lg x\\
&=1.
\end{aligned}
$$

**Oppgave 5**

Definisjonskravene gir \(x>0\) og \(x-3>0\), altså \(x>3\).

$$
\begin{aligned}
\lg x+\lg(x-3)&=1\\
\lg(x(x-3))&=1\\
x^2-3x&=10\\
(x-5)(x+2)&=0.
\end{aligned}
$$

Vi får \(x=5\) eller \(x=-2\). Bare \(x=5\) oppfyller \(x>3\).

**Oppgave 6**

Velg \(a=b=1\). Venstre side blir \(\ln2\), mens høyre side blir 0. Påstanden er derfor feil.

Korrekt regel er

$$\ln(ab)=\ln a+\ln b,\qquad a>0,\;b>0.$$

Logaritmen av et produkt er summen av logaritmene – ikke logaritmen av en sum.

### Oppgaver 7–11 · Strategi og anvendelse

**Oppgave 7**

Sett \(u=3^x\). Da er \(u>0\), og ligningen blir

$$u^2-4u+3=0=(u-1)(u-3).$$

Dermed er \(u=1\) eller \(u=3\). Altså \(x=0\) eller \(x=1\).

**Oppgave 8**

Sett \(u=e^x\). Siden \(e^x>0\), får vi

$$u^2-5u+6=0=(u-2)(u-3).$$

Dermed er \(e^x=2\) eller \(e^x=3\), og løsningene er

$$x=\ln2\quad\text{eller}\quad x=\ln3.$$

Eleven bør forstå at logaritmen ikke kan fordeles over en sum eller differanse.

**Oppgave 9**

a) 800 er startverdien. 1,12 er vekstfaktoren, som tilsvarer 12 % vekst per år.

b) Grafen bør gi et anslag på litt over 6 år.

c)

$$800\cdot1{,}12^t=1600
\iff 1{,}12^t=2,$$

$$t=\frac{\ln2}{\ln1{,}12}\approx6{,}12.$$

d) Mulige begrensninger: begrensede ressurser, endrede forhold, metning eller at vekstraten ikke er konstant.

**Oppgave 10**

Logaritmeregelen gir

$$F(x)=\ln(x(10-x)).$$

Videre:

$$x(10-x)=25-(x-5)^2\le25.$$

Siden logaritmen er voksende, er \(F(x)\le\ln25\). Likhet oppnås når \(x=5\). Maksimalverdien er derfor \(\ln25\).

**Oppgave 11**

Én mulig konstruksjon er

$$(5^x-1)(5^x-25)=0.$$

Med \(u=5^x\) får vi \((u-1)(u-25)=0\), altså \(u=1\) eller \(u=25\). Dermed er \(x=0\) eller \(x=2\). Andre korrekt konstruerte ligninger godtas.

## 3. Vurdering og oppfølging

Se etter kvaliteten i framgangsmåten – ikke bare om sluttresultatet er riktig.

| Område | Tegn på sterk kompetanse | Typiske varsellamper |
|---|---|---|
| Potenser | Samler eksponenter ryddig og angir vilkår | Behandler eksponenter som grunntall |
| Logaritmer | Bruker reglene presist og kjenner kravene | Fordeler logaritmen over sum/differanse |
| Ligninger | Velger mellom samme grunntall, logaritmer og substitusjon | Tar logaritmen leddvis eller godtar ugyldige løsninger |
| Resonnering | Begrunner og bruker moteksempel | Gir bare svar eller gjentar en regel |
| Modell | Tolker startverdi og vekstfaktor | Blander prosent og vekstfaktor |

### Mestringslogg

Bruk skalaen som et læringsverktøy, ikke som karakter:

- 0 – ikke forsøkt / ikke vurdert
- 1 – trenger gjennomgang
- 2 – løser med flere hint
- 3 – løser med ett hint
- 4 – selvstendig med mindre feil
- 5 – selvstendig, korrekt og kan forklare

| Område | 0–5 | Notat / neste steg |
|---|---:|---|
| Potenser og røtter | | |
| Logaritmeregler | | |
| Logaritmeligninger | | |
| Eksponentialligninger | | |
| Modell og resonnering | | |

### Forslag til hjemmearbeid

Ikke gi alle oppgavene på nytt. Velg 2–4 målrettede oppgaver ut fra det du observerte. Eleven bør:
1. forsøke selv før løsningsforslaget brukes
2. rette i en annen farge
3. skrive én setning om hva han endret eller forstod

Be eleven svare kort før neste økt:
- Hva løste du selv?
- Hvor stoppet du?
- Hvilken feil oppdaget du da du rettet?
- Hva vil du spørre om?

---

<div class="teacher-source" markdown="1">
**Kildegrunnlag:** Opplastet «Fullstendig løsning R1-1 (2).pdf», kapittel 1, oppgaver 1.1–1.79. Oppgavene i dette pilotheftet er nyformulert og valgt ut som en diagnostisk treningspakke.
</div>
