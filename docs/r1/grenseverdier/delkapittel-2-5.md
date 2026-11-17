<a id="delkapittel-2-5"></a>

## 2.5 Teknikker for å beregne grenseverdier

Når funksjonen er kontinuerlig i punktet og uttrykket er definert der, kan vi ofte sette inn x-verdien direkte. Hvis direkte innsetting gir \(\frac00\), må vi undersøke uttrykket nærmere. Formen \(\frac00\) er ikke svaret; den viser at vi trenger en annen metode.

### Faktorisering og forkorting

**Faktorisering** betyr å skrive et uttrykk som et produkt av faktorer. For eksempel kan vi skrive

\[
x^2-4=(x-2)(x+2).
\]

**Forkorting** av en brøk betyr at vi deler teller og nevner på den samme faktoren, forutsatt at faktoren ikke er null. Vi kan for eksempel forkorte

\[
\dfrac{(x-2)(x+2)}{x-2}=x+2,
\]

men bare når \(x\ne2\). Vi forkorter faktorer, ikke ledd som er lagt sammen eller trukket fra hverandre.

Når vi faktoriserer og forkorter en rasjonal funksjon, må vi passe på definisjonsmengden. Nevneren i den opprinnelige funksjonen kan ikke være null. Selv om en faktor forkortes bort, blir derfor ikke den tilhørende x-verdien automatisk tillatt.

!!! rule "Definisjonsmengde ved forkorting"
    Bestem først hvilke verdier som gjør den opprinnelige nevneren lik null. Disse verdiene skal utelates fra definisjonsmengden, også etter at du har forkortet uttrykket.

!!! example "Eksempel 2.5.1 – faktorisering og forkorting"

    \[
    \lim_{x\to2}\dfrac{x^2-4}{x-2}.
    \]

    Direkte innsetting gir \(\frac00\). Vi faktoriserer telleren:

    \[
    x^2-4=(x-2)(x+2).
    \]

    For \(x\ne2\) kan vi forkorte faktoren \(x-2\):

    \[
    \dfrac{(x-2)(x+2)}{x-2}=x+2.
    \]

    Derfor er

    \[
    \lim_{x\to2}\dfrac{x^2-4}{x-2}
    =\lim_{x\to2}(x+2)=4.
    \]

    Vi har ikke endret funksjonsverdien i \(x=2\); brøken er fortsatt ikke definert der. Vi har funnet hvilken verdi funksjonen nærmer seg. Definisjonsmengden er fortsatt \(\mathbb R\setminus\{2\}\).

    Grafen har et hull i \((2,4)\), ikke en vertikal asymptote.

### Grenseverdier når x går mot uendelig

Når \(x\) blir svært stor, vokser potenser med høy eksponent raskere enn potenser med lavere eksponent. Derfor er leddene med lavere potenser mindre viktige for hvordan brøken oppfører seg langt ute.

Vi deler teller og nevner på den høyeste potensen av \(x\) som forekommer. Da blir alle ledd med lavere potenser brøker der nevneren inneholder \(x\), og disse går mot 0 når \(x\to\infty\). På den måten står vi igjen med de leddene som bestemmer grenseverdien.

!!! example "Eksempel 2.5.2 – grenseverdi når x går mot uendelig"

    \[
    \lim_{x\to\infty}\dfrac{3x^2+1}{x^2-4}
    =\lim_{x\to\infty}\dfrac{3+1/x^2}{1-4/x^2}=3.
    \]

    Siden \(1/x^2\to0\), nærmer funksjonen seg 3.

### Oppgaver 2.5

!!! question "Oppgave 2.5.3"

    Beregn \(\lim_{x\to3}\frac{x^2-9}{x-3}\). Vis faktoriseringen og forklar hvorfor forkortingen er lovlig i grenseprosessen.

??? note "Fasit – 2.5.3"

    \(x^2-9=(x-3)(x+3)\), så grenseverdien er \(6\).

    **Resultat:** \(\underline{\underline{6}}\)

!!! question "Oppgave 2.5.4"

    Beregn \(\lim_{x\to-2}\frac{x^2+5x+6}{x+2}\).

??? note "Fasit – 2.5.4"

    \(x^2+5x+6=(x+2)(x+3)\), så grenseverdien er \(1\).

    **Resultat:** \(\underline{\underline{1}}\)

!!! question "Oppgave 2.5.5"

    Beregn \(\lim_{x\to1}\frac{x^2-1}{x^2-3x+2}\). Forklar hva som skjer med telleren og nevneren etter faktorisering.

??? note "Fasit – 2.5.5"

    Etter faktorisering og forkorting får vi \((x+1)/(x-2)\). Grenseverdien er \(-2\).

    **Resultat:** \(\underline{\underline{-2}}\)

!!! question "Oppgave 2.5.6"

    Beregn \(\lim_{x\to\infty}\frac{5x^2-2x+1}{2x^2+7}\), og begrunn svaret ved å dele på riktig potens av \(x\).

??? note "Fasit – 2.5.6"

    Teller og nevner har samme grad. Grenseverdien er forholdet mellom koeffisientene foran \(x^2\), altså \(5/2\).

    **Resultat:** \(\underline{\underline{\frac52}}\)

!!! question "Oppgave 2.5.7"

    En elev sier at \(\lim_{x\to2}\frac{x^2-4}{x-2}\) ikke finnes fordi uttrykket gir \(0/0\). Forklar presist hva som er feil i argumentet, og vis en korrekt løsning.

??? note "Fasit – 2.5.7"

    \(0/0\) er en ubestemt form. Faktorisering gir \((x-2)(x+2)/(x-2)=x+2\), så grenseverdien er \(4\).

    **Resultat:** \(\underline{\underline{4}}\)
