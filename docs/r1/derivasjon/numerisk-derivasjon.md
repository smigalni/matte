# 3.7 Numerisk derivasjon

Numerisk derivasjon betyr å tilnærme den deriverte ved hjelp av funksjonsverdier. En vanlig tilnærming er

\[
f'(x)\approx\dfrac{f(x+h)-f(x)}h
\]

for liten \(h\). Dette er en differansekvotient, og den gir vanligvis ikke den eksakte deriverte. Mindre \(h\) gir ikke alltid bedre numerisk svar, fordi avrundingsfeil kan få større betydning.

En symmetrisk tilnærming er

\[
f'(x)\approx\dfrac{f(x+h)-f(x-h)}{2h}.
\]

### Fra sekant til tangent

Se [figur 3.7.1](#figur-3-7-1). Vi bruker \(f(x)=x^2\) og undersøker stigningstallet ved \(x=2\).

<a id="figur-3-7-1"></a>
<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="numericalSecants" role="img" aria-label="Grafen f(x) = x² med to sekanter fra punktet (2, 4) og tangenten i samme punkt"></div>
  <p class="math-graph-caption"><strong>Figur 3.7.1.</strong> Når h blir mindre, flyttes det andre punktet på sekanten nærmere P. Sekantens stigningstall nærmer seg tangentens stigningstall, som er 4.</p>
</div>

For \(h=1\) får vi sekantstigningstall 5. For \(h=0,5\) får vi 4,5. Tangentens stigningstall er 4. Figuren viser den geometriske ideen bak numerisk derivasjon.

## Oppgaver

!!! question "Oppgave 3.7.1 – Sammenlign tilnærming og eksakt verdi"

    Bruk differansekvotienten til å tilnærme den deriverte til \(f(x)=x^2\) i \(x=2\) med \(h=0,1\) og \(h=0,01\). Sammenlign med den eksakte verdien.

??? note "Fasit – oppgave 3.7.1"

    Den eksakte deriverte er \(f'(x)=2x\), så \(f'(2)=4\).

    Framoverdifferansen gir

    \[
    \dfrac{(2+h)^2-2^2}{h}=4+h.
    \]

    Ved \(h=0,1\) får vi \(4,1\), og ved \(h=0,01\) får vi \(4,01\).

!!! question "Oppgave 3.7.2 – Vurder feilkilder"

    Forklar hvorfor en svært liten verdi av \(h\) kan gi numeriske problemer i et dataprogram.

??? note "Fasit – oppgave 3.7.2"

    Når \(h\) er svært liten, trekkes to nesten like funksjonsverdier fra hverandre. Avrunding kan da få stor relativ betydning. Derfor gir ikke stadig mindre \(h\) nødvendigvis et mer nøyaktig svar.

!!! question "Oppgave 3.7.3 – Sammenlign to metoder"

    Beregn den ensidige og symmetriske tilnærmingen for \(f(x)=\ln x\) i \(x=1\), med \(h=0,1\), \(h=0,01\) og \(h=0,001\). Sammenlign med den eksakte verdien, og kommenter nøyaktigheten.

??? note "Fasit – oppgave 3.7.3"

    Den eksakte verdien er \(f'(1)=1\). Vi får omtrent:

    | \(h\) | Ensidig tilnærming | Symmetrisk tilnærming |
    |---:|---:|---:|
    | 0,1 | 0,953102 | 1,003354 |
    | 0,01 | 0,995033 | 1,000033 |
    | 0,001 | 0,999500 | 1,000000 |

    Den symmetriske tilnærmingen er her nærmere 1 for samme \(h\). Når \(h\) blir svært liten, kan avrundingsfeil likevel påvirke resultatet.
