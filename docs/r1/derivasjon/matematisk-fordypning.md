# Matematisk fordypning – for spesielt sterke elever

<div class="advanced-hero">
  <p class="advanced-eyebrow">R1 · UTENFOR KJERNEPROGRESJONEN</p>
  <h2>Fra å bruke regler til å forstå hvorfor de virker</h2>
  <p>Denne fordypningen er for deg som vil undersøke matematikken bak metodene: følge et bevis, oppdage skjulte forutsetninger og bygge videre på kjente resultater.</p>
</div>

Dette delkapitlet er et frivillig fordypningsspor. Det erstatter ikke det ordinære pensumet, og oppgavene er ikke ment som ekstra mengdetrening. Her skal du arbeide langsommere, stille presise spørsmål og begrunne hvert steg.

**Slik arbeider du her**

- Les beviset aktivt. Skriv ned hvorfor hvert steg er lov.
- Skill mellom en påstand, en begrunnelse og en konklusjon.
- Undersøk hvilke forutsetninger beviset trenger.
- Prøv gjerne å finne en annen framgangsmåte før du leser løsningen.
- Bruk ikke CAS eller GeoGebra i bevisarbeidet.

<div class="advanced-roadmap">
  <div><span>01</span><strong>Forstå</strong><small>Hva skal vises?</small></div>
  <div><span>02</span><strong>Begrunne</strong><small>Hvorfor er steget gyldig?</small></div>
  <div><span>03</span><strong>Generalisere</strong><small>Kan resultatet utvides?</small></div>
</div>

## Bevis 1 – Den deriverte av ln x

I den vanlige gjennomgangen bruker vi

\[
\frac{d}{dx}\ln x=\frac1x,\qquad x>0.
\]

Men hvorfor er dette riktig? Vi skal utlede resultatet fra definisjonen av den deriverte. Beviset bygger på en sentral grenseverdi for logaritmen.

### Først: en grenseverdi vi trenger

Vi skal vise at

\[
\lim_{u\to0}\frac{\ln(1+u)}u=1.
\]

For å begrunne dette bruker vi integralframstillingen av den naturlige logaritmen:

\[
\ln b-\ln a=\int_a^b\frac1t\,dt
\qquad (a,b>0).
\]

Dette kan tolkes som arealet under grafen til \(1/t\), med fortegn når grensene byttes om.

Når \(u>0\), ligger \(1/t\) mellom \(1/(1+u)\) og \(1\) på intervallet fra \(1\) til \(1+u\). Derfor får vi

\[
\frac{u}{1+u}
\leq
\int_1^{1+u}\frac1t\,dt
\leq u.
\]

Siden integralet er \(\ln(1+u)\), kan vi dele på \(u>0\):

\[
\frac1{1+u}
\leq
\frac{\ln(1+u)}u
\leq1.
\]

Når \(u\to0^+\), går begge ytteruttrykkene mot 1. Skviseteoremet gir dermed grenseverdien 1 fra høyre.

For \(-1<u<0\) undersøker vi integralet fra \(1+u\) til \(1\). På dette intervallet er

\[
1\leq\frac1t\leq\frac1{1+u}.
\]

Dermed får vi

\[
-u\leq-\ln(1+u)\leq-\frac{u}{1+u}.
\]

Når vi deler på det negative tallet \(u\), snur ulikhetene:

\[
1\geq\frac{\ln(1+u)}u\geq\frac1{1+u}.
\]

Også her går begge ytteruttrykkene mot 1 når \(u\to0^-\).

Vi har dermed vist

\[
\boxed{\lim_{u\to0}\frac{\ln(1+u)}u=1}.
\]

!!! important "Nøkkelidé"
    Vi har ikke brukt den deriverte av \(\ln x\) for å bevise grenseverdien. Grenseverdien er derfor et selvstendig resultat vi kan bruke i selve derivasjonsbeviset.

### Selve beviset

Vi starter med definisjonen:

\[
(\ln x)'=
\lim_{h\to0}
\frac{\ln(x+h)-\ln x}{h}.
\]

Ved logaritmeregelen får vi

\[
\begin{aligned}
(\ln x)'&=
\lim_{h\to0}
\frac{\ln\left(\frac{x+h}{x}\right)}h\\
&=
\lim_{h\to0}
\frac{\ln\left(1+\frac hx\right)}h.
\end{aligned}
\]

Nå setter vi

\[
u=\frac hx.
\]

Da er \(h=xu\), og når \(h\to0\), går også \(u\to0\). Dermed får vi

\[
\begin{aligned}
(\ln x)'&=
\lim_{u\to0}
\frac{\ln(1+u)}{xu}\\
&=
\frac1x
\lim_{u\to0}\frac{\ln(1+u)}u\\
&=\frac1x\cdot1.
\end{aligned}
\]

Altså:

\[
\boxed{\frac{d}{dx}\ln x=\frac1x,\qquad x>0.}
\]

### Hva var det vanskelige?

Det avgjørende var ikke algebraen i siste del. Det var å finne og begrunne grenseverdien

\[
\lim_{u\to0}\frac{\ln(1+u)}u=1.
\]

Dette er et typisk trekk ved matematiske bevis: En tilsynelatende enkel påstand kan være avhengig av et eget resultat som må etableres først.

## Bevis 2 – Den deriverte av en invers funksjon

Et annet viktig resultat er sammenhengen mellom den deriverte til en funksjon og den deriverte til den inverse funksjonen.

Anta at \(f\) er deriverbar, at \(f'(a)\ne0\), og at den inverse funksjonen \(f^{-1}\) finnes i området vi undersøker. Sett

\[
g=f^{-1},\qquad g(f(a))=a.
\]

Vi bruker definisjonen av den deriverte til \(g\):

\[
g'(f(a))
=
\lim_{y\to f(a)}
\frac{g(y)-g(f(a))}{y-f(a)}.
\]

Sett \(y=f(x)\). Når \(y\to f(a)\), går \(x\to a\), og fordi \(g(f(x))=x\), får vi

\[
\begin{aligned}
g'(f(a))
&=
\lim_{x\to a}
\frac{x-a}{f(x)-f(a)}\\
&=
\frac1{
\displaystyle\lim_{x\to a}
\frac{f(x)-f(a)}{x-a}
}\\
&=\frac1{f'(a)}.
\end{aligned}
\]

Dermed har vi

\[
\boxed{(f^{-1})'(f(a))=\frac1{f'(a)}}.
\]

Dette resultatet forklarer hvorfor derivasjonen av inverse funksjoner ofte gir en brøk.

!!! example "Bruk resultatet på eksponentialfunksjonen"
    Vi vet at den naturlige logaritmen er den inverse funksjonen til \(e^x\). Når \(y=e^x\), får vi derfor

    \[
    (\ln y)'=\frac1{(e^x)'}.
    \]

    Siden \((e^x)'=e^x=y\), følger det at

    \[
    \frac{d}{dy}\ln y=\frac1y.
    \]

    Dette er en alternativ vei til resultatet. Legg merke til at beviset forutsetter at vi allerede kjenner den deriverte av \(e^x\).

## Bevis 3 – Den deriverte av a^x

Vi kan bruke resultatet for \(\ln x\) til å finne den deriverte av en generell eksponentialfunksjon \(a^x\), der \(a>0\).

Vi skriver

\[
a^x=e^{\ln(a^x)}=e^{x\ln a}.
\]

Ved kjerneregelen får vi

\[
\begin{aligned}
\frac{d}{dx}a^x
&=\frac{d}{dx}e^{x\ln a}\\
&=e^{x\ln a}\cdot\ln a\\
&=a^x\ln a.
\end{aligned}
\]

Altså:

\[
\boxed{\frac{d}{dx}a^x=a^x\ln a,\qquad a>0.}
\]

For \(a=e\) er \(\ln e=1\), og vi får det kjente resultatet

\[
\frac{d}{dx}e^x=e^x.
\]

## Oppgaver – bevis og generalisering

Oppgavene er ment å løses skriftlig. Et godt svar består ikke bare av riktig sluttresultat, men av en sammenhengende begrunnelse.

!!! question "F1 – Finn det skjulte premisset"

    I beviset for den deriverte av \(\ln x\) brukte vi

    \[
    \ln b-\ln a=\int_a^b\frac1t\,dt.
    \]

    a) Forklar hvorfor dette gir en øvre og en nedre grense for \(\ln(1+u)\) når \(u>0\).

    b) Hvorfor må vi behandle \(u<0\) separat?

    c) Forklar hvorfor vi ikke kan dele en ulikhet på \(u\) uten å undersøke fortegnet til \(u\).

    d) Hvilken rolle spiller skviseteoremet i beviset?

??? note "Løsningsskisse – F1"

    På intervallet \([1,1+u]\), når \(u>0\), er

    \[
    \frac1{1+u}\leq\frac1t\leq1.
    \]

    Integrasjon gir

    \[
    \frac{u}{1+u}\leq\ln(1+u)\leq u.
    \]

    Når \(u<0\), byttes integralgrensene om. Dessuten snur en ulikhet retning når vi deler på et negativt tall. Derfor må tilfellet \(u<0\) behandles med riktig fortegn. Skviseteoremet brukes fordi begge ytteruttrykkene går mot 1.

!!! question "F2 – Bevis produktregelen"

    Bruk definisjonen av den deriverte til å vise at

    \[
    (u(x)v(x))'=u'(x)v(x)+u(x)v'(x).
    \]

    Start med differansekvotienten. Legg til og trekk fra et uttrykk som gjør at du kan dele opp brøken i to grenseverdier.

??? note "Løsningsskisse – F2"

    Vi starter med

    \[
    \frac{u(x+h)v(x+h)-u(x)v(x)}h.
    \]

    Legg til og trekk fra \(u(x)v(x+h)\):

    \[
    \begin{aligned}
    &\frac{u(x+h)v(x+h)-u(x)v(x)}h\\
    &=
    \frac{u(x+h)-u(x)}h\,v(x+h)
    +u(x)\frac{v(x+h)-v(x)}h.
    \end{aligned}
    \]

    Når \(h\to0\), går \(v(x+h)\to v(x)\). De to grenseverdiene blir henholdsvis \(u'(x)v(x)\) og \(u(x)v'(x)\). Dermed følger produktregelen.

!!! question "F3 – Generaliser eksponentialregelen"

    Bruk identiteten \(a^x=e^{x\ln a}\) til å vise at

    \[
    \frac{d}{dx}a^{kx}=ka^{kx}\ln a,
    \]

    der \(a>0\) og \(k\) er en konstant.

    Forklar nøyaktig hvor kjerneregelen brukes.

??? note "Løsningsskisse – F3"

    Vi skriver \(a^{kx}=e^{kx\ln a}\). Den indre funksjonen er \(kx\ln a\), med derivert \(k\ln a\). Dermed får vi

    \[
    \frac{d}{dx}e^{kx\ln a}
    =e^{kx\ln a}\cdot k\ln a
    =ka^{kx}\ln a.
    \]

!!! question "F4 – Når kan vi derivere den inverse funksjonen?"

    I bevis 2 krevde vi at \(f'(a)\ne0\).

    a) Forklar hvorfor uttrykket \(1/f'(a)\) ikke gir mening dersom \(f'(a)=0\).

    b) Bruk \(f(x)=x^3\) og den inverse funksjonen \(g(x)=\sqrt[3]{x}\). Undersøk hva som skjer med \(g'(0)\).

    c) Hva forteller eksemplet om hvorfor forutsetningen \(f'(a)\ne0\) er viktig?

??? note "Løsningsskisse – F4"

    Vi har \(f'(0)=0\), så formelen fra bevis 2 kan ikke brukes i \(a=0\). Den inverse funksjonen er \(g(x)=\sqrt[3]{x}\). Differansekvotienten i null blir

    \[
    \frac{g(h)-g(0)}h
    =\frac{\sqrt[3]h}{h}
    =\frac1{h^{2/3}}.
    \]

    Dette går mot \(+\infty\) når \(h\to0\). Den inverse funksjonen har derfor ikke en endelig derivert i null. Eksemplet viser at kravet \(f'(a)\ne0\) ikke er en formalitet.

---

## Videre utfordringer

Når du behersker bevisene over, kan du prøve å undersøke følgende uten å slå opp en ferdig løsning:

1. Kan du utlede kvotientregelen fra produktregelen ved å skrive \(u/v=u\cdot v^{-1}\)?
2. Kan du bevise kjerneregelen fra definisjonen av den deriverte?
3. Kan du finne en annen begrunnelse for grenseverdien \(\lim_{u\to0}\ln(1+u)/u=1\)?
4. Hvilke deler av bevisene er avhengige av at funksjonene er kontinuerlige eller deriverbare?

**Et siste råd:** I et matematisk bevis er det helt greit å bruke tid på ett enkelt ledd. Målet er ikke å komme raskest fram, men å vite nøyaktig hvorfor konklusjonen følger.
