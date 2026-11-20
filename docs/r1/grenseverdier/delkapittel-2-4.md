<a id="delkapittel-2-4"></a>

## 2.4 Kontinuitet

En funksjon er kontinuerlig i \(x=a\) når grafen henger sammen i punktet, uten hull eller sprang. For å avgjøre dette må vi kontrollere både grenseverdien og funksjonsverdien.

!!! rule "Kontinuitet i et punkt"
    En funksjon \(f\) er kontinuerlig i \(x=a\) når alle disse tre kravene er oppfylt:

    1. \(f(a)\) er definert.

    2. Den tosidige grenseverdien finnes:

    \[
    \lim\limits_{x\to a}f(x)=L.
    \]

    3. Grenseverdien er lik funksjonsverdien:

    \[
    \lim\limits_{x\to a}f(x)=f(a).
    \]

    Det er altså ikke nok at grafen nærmer seg samme høyde fra begge sider. Punktet må også være definert, og funksjonsverdien må være akkurat denne høyden.

### Tre situasjoner du må kunne skille mellom

**1. Kontinuerlig funksjon**

Grafen nærmer seg samme punkt fra begge sider, og punktet er med i grafen.

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="continuous" role="img" aria-label="Kontinuerlig funksjon med punkt på grafen"></div>
  <p class="math-graph-caption">Grafen er sammenhengende gjennom a, og det fylte punktet viser at f(a) er lik grenseverdien.</p>
</div>

Her er grenseverdien lik funksjonsverdien.

**2. Grenseverdi finnes, men funksjonsverdien er feil**

Grafen nærmer seg samme høyde fra begge sider, men funksjonen har en annen verdi i punktet \(x=a\).

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="limit" role="img" aria-label="Hull med grenseverdi ulik funksjonsverdi"></div>
  <p class="math-graph-caption">Den åpne sirkelen viser grenseverdien L, mens det fylte punktet viser en annen funksjonsverdi f(a).</p>
</div>

Dette er grunnen til at vi må kontrollere \(f(a)\). Selv om grenseverdien finnes, er funksjonen ikke kontinuerlig dersom \(f(a)\ne L\).

**3. Sprang**

Grafen nærmer seg ulike høyder fra venstre og høyre. Da finnes ikke den tosidige grenseverdien.

<div class="math-graph-frame">
  <div class="math-graph" data-math-graph="jump" role="img" aria-label="Sprangdiskontinuitet med ulike ensidige grenseverdier"></div>
  <p class="math-graph-caption">Den åpne sirkelen viser venstre grenseverdi, mens den fylte sirkelen viser funksjonsverdien fra høyre.</p>
</div>

Her er venstre og høyre grenseverdi ulike.

!!! example "Eksempel 2.4.1 – bestem en parameter for kontinuitet"
    La funksjonen være

    \[
    f(x)=
    \begin{cases}
    kx+1, & x<2,\\
    x^2-1, & x\geq2.
    \end{cases}
    \]

    For kontinuitet i \(x=2\) må venstre grenseverdi være lik funksjonsverdien.

    \[
    \lim\limits_{x\to2^-}f(x)=2k+1,
    \qquad
    f(2)=2^2-1=3.
    \]

    Dermed må \(2k+1=3\), altså \(k=1\).

    **Svar:** Funksjonen er kontinuerlig i \(x=2\) når \(k=1\).

    \(\underline{\underline{k=1}}\)

### Oppgaver 2.4

!!! question "Oppgave 2.4.2"

    Undersøk om funksjonen

    \[
    f(x)=
    \begin{cases}
    x+2, & x<1,\\
    2x, & x\geq1
    \end{cases}
    \]

    er kontinuerlig i \(x=1\). Vis alle tre kontrollpunktene.

??? note "Fasit – 2.4.2"

    Venstre grenseverdi er \(3\), mens høyre grenseverdi og funksjonsverdien er \(2\). Funksjonen er ikke kontinuerlig.

    **Resultat:** \(\underline{\underline{\lim\limits_{x\to1^-}f(x)=3,\;\lim\limits_{x\to1^+}f(x)=2=f(1)}}\)

!!! question "Oppgave 2.4.3"

    Bestem \(a\) slik at funksjonen

    \[
    f(x)=
    \begin{cases}
    ax-2, & x<3,\\
    x+4, & x\geq3
    \end{cases}
    \]

    er kontinuerlig i \(x=3\).

??? note "Fasit – 2.4.3"

    Kontinuitet gir \(3a-2=7\), altså \(a=3\).

    **Resultat:** \(\underline{\underline{a=3}}\)

!!! question "Oppgave 2.4.4"

    En funksjon har like ensidige grenseverdier 6 ved \(x=2\), men \(f(2)=0\). Er funksjonen kontinuerlig i punktet? Kan grenseverdien finnes? Begrunn.

??? note "Fasit – 2.4.4"

    Den tosidige grenseverdien finnes og er \(6\), men funksjonsverdien er \(0\). Funksjonen er derfor ikke kontinuerlig.

    **Resultat:** \(\underline{\underline{\lim\limits_{x\to2}f(x)=6\ne0=f(2)}}\)

!!! question "Oppgave 2.4.5"

    En funksjon er definert ved

    \[
    f(x)=\dfrac{x^2-4}{x-2},\qquad x\ne2,
    \]

    og \(f(2)=k\). Bestem \(k\) slik at funksjonen blir kontinuerlig i \(x=2\). Forklar hvorfor faktorisering er nyttig.

??? note "Fasit – 2.4.5"

    For \(x\ne2\) er brøken lik \(x+2\). Grenseverdien er \(4\), så \(k=4\) gir kontinuitet.

    **Resultat:** \(\underline{\underline{k=4}}\)