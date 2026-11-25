# Lærernotat – målrettet trening før fredag

Dette arket er laget ut fra observasjonene fra kapittel 1. Det er ikke ment som en ny prøve, men som en kort treningsøkt som avdekker om eleven klarer å hente fram grunnreglene selvstendig.

## Hva vi undersøker

| Oppgave | Kompetanse | Se spesielt etter |
|---|---|---|
| A1 | Potensregler og røtter | Fortegn i eksponenter, potens av potens, brøkeksponent |
| A2 | Logaritmelover | Produkt-, kvotient- og potensregel; ikke finne på sumregel |
| B1 | Eksponentiallikning | Ser felles faktor \(2^x\) |
| B2 | Logaritmelikning | Definisjonsmengde, logaritmeregler og kontroll |
| B3 | Nullprodukt og logaritmer | Håndterer at \(x>3\) utelukker den ene kandidatverdien |
| B4 | Sammensatt likning | Bytter korrekt mellom logaritme- og potensuttrykk; holder styr på ulike grunntall |
| C1 | Identitet | Skiller utsagn som gjelder for alle \(x\), fra vanlige likninger |
| C2 | Produktregelen | Ser produkt av to funksjoner og deriverer begge faktorene korrekt |
| D1 | Brøkregning | Fellesnevner og fortegn |
| D2 | Formelomforming | Samler \(x\)-ledd, isolerer \(x\), finner forbudt \(y\)-verdi |

## Fasit og løsningsskisser

### A1 – potensregler

a) \(2^{5-2-2}=2\).

b) \(x^{3\cdot2-4}=x^2\).

c) \(a^{1/2+3/2}=a^2\).

d) \(x^{3/2}=\sqrt{x^3}\) (eventuelt \(x\sqrt{x}\) når \(x\geq0\)).

### A2 – logaritmeregler

a) \(\lg(4\cdot25)=\lg100=2\).

b) \(\ln(x^2/3)\), for \(x>0\).

c) \(3-1=2\).

d) Logaritmen omformer produkt til sum, ikke sum til sum: \(\lg(ab)=\lg a+\lg b\), men ingen tilsvarende regel gjelder for \(\lg(a+b)\).

### B1 – eksponentiallikning

\[
2^x(1+2+4)=56
\]
\[
7\cdot2^x=56\Rightarrow2^x=8=2^3
\]
Svar: \(x=3\).

### B2 – logaritmelikning

Definisjonsmengde: \(2x-1>0\) og \(x+1>0\), altså \(x>\frac12\).

\[
\lg((2x-1)(x+1))=1
\]
\[
(2x-1)(x+1)=10
\]
\[
2x^2+x-1=10
\]
\[
2x^2+x-11=0
\]
\[
x=\frac{-1\pm\sqrt{89}}4
\]

Bare \(x=\frac{-1+\sqrt{89}}4\) ligger i definisjonsmengden.

### B3 – produkt lik null

Definisjonsmengde: \(x>3\).

\[
\lg x-\lg3=0\quad\text{eller}\quad\lg(x-3)=0
\]

Første faktor gir \(x=3\), men dette er ikke tillatt fordi \(x>3\).

Andre faktor gir \(x-3=1\), altså \(x=4\).

Svar: \(x=4\).

### B4 – sammensatt likning

\[
(4x-1)\ln2=(3x+15)\ln2+4(1-2x)
\]
\[
(4x-1)\ln2=(3x+15)\ln2+4-8x
\]
\[
x\ln2+8x=16\ln2+4
\]
\[
\boxed{x=\frac{16\ln2+4}{\ln2+8}}
\]

Omtrent \(x\approx1{,}74\). Godta eksakt svar eller tilstrekkelig presis tilnærming.

### C1 – identitet eller likning?

a) Identitet: sann for alle \(x\).

b) Ingen løsning: etter forkorting får vi \(-6=-5\).

c) Identitet: kvadratsetningen gir samme uttrykk på begge sider.

### C2 – produktregelen

\[
f'(x)=2x\ln x+(x^2+1)\frac1x
\]

Godta algebraisk ekvivalente uttrykk. Se etter at eleven deriverer begge faktorene og bruker produktregelen, ikke bare deriverer faktorene hver for seg.

### D1 – ryddig algebra

Multipliser med 12:

\[
4(x+1)-3(2x-1)=10
\]
\[
4x+4-6x+3=10
\]
\[
-2x=3
\]
Svar: \(x=-\frac32\).

### D2 – formelomforming

\[
y(x+4)=3x-2
\]
\[
yx+4y=3x-2
\]
\[
x(y-3)=-2-4y
\]
\[
\boxed{x=\frac{2+4y}{3-y}}
\]

\(y\ne3\). Verdien \(y=3\) er umulig.

## Bruk av resultatene

Ikke gi hint med en gang. Be eleven forklare hva han tenker å gjøre. Registrer deretter:

- **Selvstendig:** velger og gjennomfører riktig metode uten hjelp.
- **Hint:** kommer videre etter et lite muntlig hint.
- **Ikke mestret:** velger feil metode eller kommer ikke videre.
- **Regnefeil:** metoden er riktig, men algebraen svikter.

Prioriter særlig B2–B4 og C2 dersom tiden er knapp. Det er oppgavene som best tester om reglene sitter når flere ideer må kombineres.
