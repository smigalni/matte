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

<svg viewBox="0 0 250 135" width="100%" height="135" role="img" aria-label="Kontinuerlig graf med fylt punkt på kurven ved x lik a." xmlns="http://www.w3.org/2000/svg">
  <path d="M18 112 H235 M125 122 V10" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M25 102 C75 90 95 65 125 58 C160 50 185 30 225 18" stroke="#2878b8" stroke-width="2.8" fill="none"/>
  <circle cx="125" cy="58" r="5" fill="#2878b8"/>
  <text x="130" y="126" font-size="10" fill="currentColor">a</text>
</svg>

Her er grenseverdien lik funksjonsverdien.

**2. Grenseverdi finnes, men funksjonsverdien er feil**

Grafen nærmer seg samme høyde fra begge sider, men funksjonen har en annen verdi i punktet \(x=a\).

<svg viewBox="0 0 250 135" width="100%" height="135" role="img" aria-label="Graf med åpent punkt på kurven ved grenseverdien og fylt punkt lavere ved samme x-verdi." xmlns="http://www.w3.org/2000/svg">
  <path d="M18 112 H235 M125 122 V10" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M25 102 C75 90 95 65 125 45 M125 45 C160 38 185 30 225 18" stroke="#2878b8" stroke-width="2.8" fill="none"/>
  <circle cx="125" cy="45" r="5.5" fill="white" stroke="#2878b8" stroke-width="2.5"/>
  <circle cx="125" cy="91" r="5.5" fill="#2878b8"/>
  <text x="132" y="49" font-size="10" fill="currentColor">L</text>
  <text x="132" y="95" font-size="10" fill="currentColor">f(a)</text>
  <text x="130" y="126" font-size="10" fill="currentColor">a</text>
</svg>

Dette er grunnen til at vi må kontrollere \(f(a)\). Selv om grenseverdien finnes, er funksjonen ikke kontinuerlig dersom \(f(a)\ne L\).

**3. Sprang**

Grafen nærmer seg ulike høyder fra venstre og høyre. Da finnes ikke den tosidige grenseverdien.

<svg viewBox="0 0 250 135" width="100%" height="135" role="img" aria-label="Sprangdiskontinuitet med åpent punkt på venstre gren og fylt punkt på høyre gren." xmlns="http://www.w3.org/2000/svg">
  <path d="M18 112 H235 M125 122 V10" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <path d="M25 42 H125 M125 88 H225" stroke="#2878b8" stroke-width="2.8" fill="none"/>
  <circle cx="125" cy="42" r="5.5" fill="white" stroke="#2878b8" stroke-width="2.5"/>
  <circle cx="125" cy="88" r="5.5" fill="#2878b8"/>
  <text x="130" y="126" font-size="10" fill="currentColor">a</text>
</svg>

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

    **Resultat:** \(\underline{\underline{k=4}}\`
