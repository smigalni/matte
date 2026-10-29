# 3.7 Numerisk derivasjon

3.7 Numerisk derivasjon

Numerisk derivasjon betyr å tilnærme den deriverte ved hjelp av funksjonsverdier. En vanlig tilnærming er

\[
f'(x)\approx\frac{f(x+h)-f(x)}h
\]

for liten \(h\). Dette er en differansekvotient, og den gir vanligvis ikke den eksakte deriverte. Mindre \(h\) gir ikke alltid bedre numerisk svar, fordi avrundingsfeil kan få større betydning.

En symmetrisk tilnærming er

\[
f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}.
\]

### Oppgaver 3.7

**3.7.1** Bruk differansekvotienten til å tilnærme den deriverte til \(f(x)=x^2\) i \(x=2\) med \(h=0,1\) og \(h=0,01\). Sammenlign med den eksakte verdien.

**3.7.2** Forklar hvorfor en svært liten verdi av \(h\) kan gi numeriske problemer i et dataprogram.

**3.7.3** Bruk et digitalt verktøy til å sammenligne den ensidige og symmetriske tilnærmingen for \(f(x)=\ln x\) i \(x=1\). Undersøk flere verdier av \(h\), og kommenter nøyaktigheten.
