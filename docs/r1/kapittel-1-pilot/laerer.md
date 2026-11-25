---
title: Potenser og logaritmer – lærer
---

<div class="chapter-toolbar" markdown="1">
  <span class="chapter-label">MATHPLATFORM · R1 · KAPITTEL 1 · LÆRERUTGAVE</span>
  <button class="print-button" type="button" data-print-page>Skriv ut lærerkapittelet</button>
</div>

# Lærerveiledning: Potenser og logaritmer

**Lærerutgave · To-timers undervisningsøkt · målrettet mot karakter 6**

<div class="teacher-warning" markdown="1">
<strong>KUN TIL UNDERVISER</strong>

Dette kapittelet inneholder løsningsforslag, vurderingsmomenter og forslag til videre arbeid. Ikke del denne visningen med eleven.
</div>

<div class="chapter-meta" markdown="1">
  <div><strong>Anbefalt tid</strong><br>120 minutter</div>
  <div><strong>Bruk</strong><br>Fordypningsøkt mot karakter 6</div>
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


## 3. Gjennomføring – 120 minutter

Målet er ikke å rekke flest mulig oppgaver. Prioriter kvaliteten i elevens valg, forklaringer og kontroll. La eleven arbeide selvstendig før du griper inn.

| Tid | Innhold | Lærerens oppgave |
|---|---|---|
| 0–10 min | Oppstart og mål | Forklar at målet er nivå 6-kompetanse, ikke en karaktertest. Be eleven tenke høyt ved metodevalg. |
| 10–30 min | Potenser og røtter: 1–3 | Se etter presisjon, vilkår og forklaring. Bruk oppgave 3 hvis eleven arbeider raskt. |
| 30–50 min | Logaritmer: 4–6 | Test logaritmeregler og definisjonsmengde. Be eleven forklare hvorfor en fristende feil er feil. |
| 50–70 min | Eksponentialligninger: 7–8 | La eleven velge mellom felles grunntall og substitusjon. Spør hvorfor substitusjonen er gyldig. |
| 70–85 min | Modellering: 9 | Be eleven tolke parametere, anslå grafisk og regne nøyaktig. |
| 85–105 min | Utvidelse: 10 og 13 eller 14 | Velg oppgave 13 hvis logaritmeligninger er et fokus, eller 14 hvis modellforståelse er viktigst. |
| 105–115 min | Feilanalyse: 15 | La eleven kritisere løsningen, finne feilen og rette den. |
| 115–120 min | Oppsummering | Eleven oppsummerer styrke, usikkerhet og neste steg. Avtal 2–3 målrettede hjemmeoppgaver. |

**Fleksibilitet:** Oppgave 1, 4, 7, 9, 10, 13, 14 og 15 er anbefalt hovedløype. Oppgave 2, 3, 5, 6 og 8 brukes etter behov. Oppgave 11, 12, 16 og 17 er ekstra utfordringer dersom eleven arbeider raskt eller viser svært høy sikkerhet. Ikke press inn alle oppgavene.

## 4. Tilleggsløsninger – fordypning

**Oppgave 12**

a) Logaritmen (\log_a x) er eksponenten (y) som oppfyller (a^y=x). Derfor må (x>0). Siden (a^0=1), går grafen gjennom ((1,0)).

b) Svarene er (3), (-3) og (1/2). De viser at logaritmen av en potens blir eksponenten multiplisert med logaritmen av grunntallet; her leses eksponentene direkte fordi grunntallet er 2.

c) For (a>1) er funksjonen voksende. For (0<a<1) er den avtakende. Begge har definisjonsmengde (x>0) og går gjennom ((1,0)).

**Oppgave 13**

Definisjonskravene er (x-1>0) og (x+1>0), altså (x>1).

$\ln((x-1)(x+1))=\ln k\iff x^2-1=k.$

Dermed (x=\pm\sqrt{k+1}). Bare

$x=\sqrt{k+1}$

oppfyller (x>1). Det finnes nøyaktig én gyldig løsning for hvert (k>0).

**Oppgave 14**

Startverdiene er 500 og 650. A har størst vekstfaktor (8 % mot 5 %).

Skjæringspunktet finnes fra

$500\cdot1{,}08^t=650\cdot1{,}05^t,$

$t=\frac{\ln(1{,}3)}{\ln(1{,}08/1{,}05)}.$

Før skjæringspunktet er B størst; etter skjæringspunktet er A størst. Begrunn gjerne ved å se på forholdet (A(t)/B(t)), som øker med (t).

**Oppgave 15**

Definisjonsmengden er (x>1). Riktig sammenslåing er

$\ln((x+2)(x-1))=\ln5.$

Da får vi (x^2+x-2=5), altså (x^2+x-7=0). Løsningene er

$x=\frac{-1\pm\sqrt{29}}2.$

Bare (x=\frac{-1+\sqrt{29}}2\approx2{,}19) er gyldig. Feilen er at ((x+2)(x-1)) ikke er (2x+1).

**Oppgave 16**

Ta naturlig logaritme på begge sider:

$ (2x-1)\ln7=\ln11.$

Dermed

$x=\frac{1+\frac{\ln11}{\ln7}}2.$

Entydighet følger av at (7^u) er strengt voksende.

**Oppgave 17**

Vurder om eleven skiller mellom vekstfaktor og startverdi, mellom vekst og vekstfart, og om han bruker presise vilkår. Et godt svar korrigerer påstanden og underbygger med et eksempel eller en generell begrunnelse.

## 5. Vurdering og oppfølging

Se etter kvaliteten i framgangsmåten – ikke bare om sluttresultatet er riktig.

| Område | Tegn på sterk kompetanse | Typiske varsellamper |
|---|---|---|
| Potenser | Samler eksponenter ryddig og angir vilkår | Behandler eksponenter som grunntall |
| Logaritmer | Bruker reglene presist og kjenner kravene | Fordeler logaritmen over sum/differanse |
| Ligninger | Velger mellom samme grunntall, logaritmer og substitusjon | Tar logaritmen leddvis eller godtar ugyldige løsninger |
| Resonnering | Begrunner og bruker moteksempel | Gir bare svar eller gjentar en regel |
| Modell | Tolker startverdi og vekstfaktor | Blander prosent og vekstfaktor |

### Slik skriver du lærerkommentarer underveis

Skriv korte, konkrete observasjoner – ikke generelle karakteristikker som «flink» eller «svak». Noter hva eleven faktisk gjorde, hva du måtte bidra med, og hva det betyr for neste økt.

Bruk denne faste notasjonen:

- **S** – løste selvstendig, uten hjelp.
- **H1** – trengte ett lite hint.
- **H2** – trengte flere eller tydelige hint.
- **M** – valgte en hensiktsmessig metode.
- **B** – ga en matematisk begrunnelse.
- **K** – kontrollerte definisjonsmengde, vilkår eller svar.
- **F** – gjorde en feil; skriv kort hvilken type.
- **R** – oppdaget og rettet feilen selv.

**Skriv én linje per viktig observasjon:**

`Tid – oppgave – kode – konkret observasjon – hva du gjorde – neste steg`

Eksempel:

> 34 min – oppg. 5 – H1, K – Eleven slo sammen logaritmene riktig, men glemte kravet (x>3). Jeg spurte «Når er begge logaritmene definert?». Eleven fant selv (x>3) og forkastet den negative løsningen. Neste steg: øv på definisjonsmengde før løsning.

Eksempel på høy måloppnåelse:

> 58 min – oppg. 7 – S, M, B – Valgte substitusjon (u=3^x) uten hint, forklarte at (u>0), og fant begge løsningene. Neste steg: la eleven begrunne hvorfor løsningen er fullstendig.

**Viktig:** Skill mellom en feil eleven retter selv og en feil som først rettes etter hjelp. Det sier mye om selvstendighet. Noter gjerne elevens egne formuleringer i anførselstegn når de viser forståelse eller en misoppfatning.

### Observasjonsskjema under økten

| Tid / oppgave | Kode | Hva gjorde eleven konkret? | Hva gjorde jeg? | Neste steg |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

### Mestringslogg

Bruk skalaen som et læringsverktøy, ikke som karakter. Vurder både korrekthet, selvstendighet og evne til å forklare:

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
