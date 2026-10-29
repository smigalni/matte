# 3.7 Numerisk derivasjon

Numerisk derivasjon betyr å tilnærme den deriverte ved hjelp av funksjonsverdier. En vanlig tilnærming er

\[
f'(x)\approx\frac{f(x+h)-f(x)}h
\]

for liten \(h\). Dette er en differansekvotient, og den gir vanligvis ikke den eksakte deriverte. Mindre \(h\) gir ikke alltid bedre numerisk svar, fordi avrundingsfeil kan få større betydning.

En symmetrisk tilnærming er

\[
f'(x)\approx\frac{f(x+h)-f(x-h)}{2h}.
\]

## Oppgaver

!!! question "Oppgave 3.7.1 – Sammenlign tilnærming og eksakt verdi"

    Bruk differansekvotienten til å tilnærme den deriverte til \(f(x)=x^2\) i \(x=2\) med \(h=0,1\) og \(h=0,01\). Sammenlign med den eksakte verdien.

!!! question "Oppgave 3.7.2 – Vurder feilkilder"

    Forklar hvorfor en svært liten verdi av \(h\) kan gi numeriske problemer i et dataprogram.

!!! question "Oppgave 3.7.3 – Sammenlign to metoder"

    Bruk et digitalt verktøy til å sammenligne den ensidige og symmetriske tilnærmingen for \(f(x)=\ln x\) i \(x=1\). Undersøk minst tre verdier av \(h\), og kommenter nøyaktigheten.

## Fasit

??? note "Fasit – oppgave 3.7.1"

    Den eksakte deriverte er \(f'(x)=2x\), så \(f'(2)=4\).

    Framoverdifferansen gir

    \[
    \frac{(2+h)^2-2^2}{h}=4+h.
    \]

    Ved \(h=0,1\) får vi \(4,1\), og ved \(h=0,01\) får vi \(4,01\).

??? note "Fasit – oppgave 3.7.2"

    Når \(h\) er svært liten, trekkes to nesten like funksjonsverdier fra hverandre. Avrunding kan da få stor relativ betydning. Derfor gir ikke stadig mindre \(h\) nødvendigvis et mer nøyaktig svar.

??? note "Fasit – oppgave 3.7.3"

    Den eksakte verdien er \(f'(1)=1\). Den ensidige tilnærmingen er \(\ln(1+h)/h\), mens den symmetriske er \(\bigl(\ln(1+h)-\ln(1-h)\bigr)/(2h)\), for \(0<h<1\). Sammenlign resultatene med \(1\); den symmetriske tilnærmingen er vanligvis mer nøyaktig for samme \(h\).
