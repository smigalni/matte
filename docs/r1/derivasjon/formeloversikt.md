# 3.11 Formeloversikt – derivasjon

Denne siden samler de viktigste definisjonene, reglene og sammenhengene fra kapittel 3. Bruk den til repetisjon og som støtte når du arbeider med oppgaver.

## Vekstfart og tangent

**Gjennomsnittlig vekstfart** fra \(x=a\) til \(x=b\):

\[
\frac{f(b)-f(a)}{b-a}
\]

**Momentan vekstfart** i \(x=a\) er den deriverte:

\[
f'(a)
\]

**Tangentlikning** i punktet \(x=a\):

\[
y-f(a)=f'(a)(x-a)
\]

## Definisjonen av den deriverte

\[
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
\]

Grenseverdien må finnes som et endelig tall. Differansekvotienten må forenkles før vi lar \(h\) gå mot null.

## Vanlige derivasjonsregler

| Funksjon | Derivert |
|---|---|
| \(f(x)=c\) | \(f'(x)=0\) |
| \(f(x)=x^n\) | \(f'(x)=nx^{n-1}\) |
| \(f(x)=e^x\) | \(f'(x)=e^x\) |
| \(f(x)=e^{u(x)}\) | \(f'(x)=e^{u(x)}u'(x)\) |
| \(f(x)=\ln x\) | \(f'(x)=\frac1x\), \(x>0\) |
| \(f(x)=\ln(u(x))\) | \(f'(x)=\frac{u'(x)}{u(x)}\) |

## Kjerneregelen

Når \(f(x)=F(u(x))\):

\[
f'(x)=F'(u(x))\cdot u'(x)
\]

Deriver den ytre funksjonen, behold den indre, og gang med den indre deriverte.

## Produktregelen

Når \(f(x)=u(x)v(x)\):

\[
f'(x)=u'(x)v(x)+u(x)v'(x)
\]

## Brøkregelen

Når \(f(x)=\frac{u(x)}{v(x)}\), der \(v(x)\ne0\):

\[
f'(x)=\frac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^2}
\]

## Deriverbarhet

- Hvis en funksjon er deriverbar i et punkt, er den også kontinuerlig der.
- Kontinuitet er ikke nok til å garantere deriverbarhet.
- I et knekkpunkt kan stigningstallene fra venstre og høyre være forskjellige.

\[
f'_-(a)=f'_+(a)
\]

Når begge ensidige deriverte finnes som endelige tall, er funksjonen deriverbar i \(x=a\) dersom de er like.

## Numerisk derivasjon

**Framoverdifferanse:**

\[
f'(x)\approx\frac{f(x+h)-f(x)}{h}
\]

**Symmetrisk differansekvotient:**

\[
f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}
\]

Den symmetriske metoden gir ofte en bedre tilnærming når \(h\) er passe liten. En svært liten \(h\) kan gi større avrundingsfeil.

## Husk

- \(f'(a)\) er stigningstallet til tangenten i punktet der \(x=a\).
- En andregradsfunksjon har vanligvis ikke ett fast stigningstall. Stigningstallet varierer med \(x\).
- Når \(f'(x)>0\), vokser funksjonen.
- Når \(f'(x)<0\), avtar funksjonen.
- Når \(f'(x)=0\), har grafen en horisontal tangent. Punktet er ikke automatisk et topp- eller bunnpunkt.
