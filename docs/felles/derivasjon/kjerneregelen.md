# 3.3 Kjerneregelen

Kjerneregelen bruker vi når en funksjon er satt sammen av en ytre funksjon og en indre funksjon. Hvis

\[
y=f(g(x)),
\]

så er

\[
y'=f'(g(x))\cdot g'(x).
\]

Med ord: Deriver den ytre funksjonen, behold den indre funksjonen, og gang med den deriverte av den indre funksjonen.


## Se funksjonen som to lag

Vi ser på funksjonen

\[
y=(3x+2)^4.
\]

Uttrykket inni parentesen er den **indre funksjonen**. Deretter bruker vi dette uttrykket i den **ytre funksjonen**, som opphøyer det i fjerde.

<figure markdown>
<svg viewBox="0 0 360 300" role="img" aria-label="Kjerneregelen vist som to lag: indre funksjon u lik 3x pluss 2 og ytre funksjon y lik u opphøyd i fjerde" xmlns="http://www.w3.org/2000/svg">
  <rect x="35" y="18" width="290" height="82" rx="12" fill="#dff3e5" stroke="#328653" stroke-width="1.5"/>
  <text x="180" y="42" text-anchor="middle" font-size="14" font-weight="600" fill="#17663a">1. Indre funksjon</text>
  <text x="180" y="68" text-anchor="middle" font-size="21" font-weight="600" fill="#17663a">u = 3x + 2</text>
  <text x="180" y="87" text-anchor="middle" font-size="11" fill="#17663a">Uttrykket inni parentesen</text>
  <path d="M180 101 V126" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M174 120 L180 128 L186 120" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="35" y="132" width="290" height="82" rx="12" fill="#e2ecff" stroke="#477bd1" stroke-width="1.5"/>
  <text x="180" y="156" text-anchor="middle" font-size="14" font-weight="600" fill="#174ea6">2. Ytre funksjon</text>
  <text x="180" y="182" text-anchor="middle" font-size="21" font-weight="600" fill="#174ea6">y = u⁴</text>
  <text x="180" y="201" text-anchor="middle" font-size="11" fill="#174ea6">Opphøy resultatet i fjerde</text>
  <path d="M180 215 V240" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M174 234 L180 242 L186 234" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="180" y="264" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Deriver begge lagene</text>
  <text x="180" y="285" text-anchor="middle" font-size="12" fill="currentColor">Gang de deriverte sammen</text>
</svg>
<figcaption>Funksjonen består av to lag. Begge må tas med når vi deriverer.</figcaption>
</figure>

!!! example "Eksempel 3.3.1 – Kjerneregelen med u-metoden"

    Vi skal derivere

    \[
    y=(3x+2)^4.
    \]

    **Trinn 1: Finn den indre funksjonen.**

    Sett

    \[
    u=3x+2.
    \]

    **Trinn 2: Skriv den ytre funksjonen ved hjelp av \(u\).**

    \[
    y=f(u)=u^4.
    \]

    **Trinn 3: Deriver hver funksjon for seg.**

    Den ytre funksjonen:

    \[
    f'(u)=4u^3.
    \]

    Den indre funksjonen:

    \[
    u'=3.
    \]

    **Trinn 4: Gang de deriverte sammen og sett inn \(u=3x+2\).**

    \[
    \begin{aligned}
    y'&=f'(u)\cdot u'\\
    &=4u^3\cdot3\\
    &=4(3x+2)^3\cdot3.
    \end{aligned}
    \]

    **Svar:**

    \[
    \underline{\underline{y'=12(3x+2)^3}}
    \]

### Huskeregel

<figure markdown>
<svg viewBox="0 0 360 230" role="img" aria-label="Huskeregel for kjerneregelen: deriver den ytre funksjonen og gang med den deriverte av den indre funksjonen" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="324" height="66" rx="10" fill="#e2ecff" stroke="#477bd1" stroke-width="1.5"/>
  <text x="180" y="42" text-anchor="middle" font-size="13" font-weight="600" fill="#174ea6">1. Deriver den ytre funksjonen</text>
  <text x="180" y="66" text-anchor="middle" font-size="17" fill="#174ea6">f′(u)</text>
  <text x="180" y="111" text-anchor="middle" font-size="19" font-weight="600" fill="currentColor">×</text>
  <rect x="18" y="130" width="324" height="66" rx="10" fill="#dff3e5" stroke="#328653" stroke-width="1.5"/>
  <text x="180" y="154" text-anchor="middle" font-size="13" font-weight="600" fill="#17663a">2. Gang med den indre deriverte</text>
  <text x="180" y="178" text-anchor="middle" font-size="17" fill="#17663a">u′</text>
  <text x="180" y="220" text-anchor="middle" font-size="12" fill="currentColor">Ytre derivert · indre derivert</text>
</svg>
</figure>

**Kort oppskrift:**

1. Finn kjernen og kall den \(u\).
2. Skriv den ytre funksjonen som \(f(u)\).
3. Deriver den ytre og den indre funksjonen hver for seg.
4. Gang de deriverte sammen, og sett inn uttrykket for \(u\).


!!! example "Eksempel 3.3.2 – Bruk kjerneregelen"

    La \(f(x)=(3x^2+1)^4\).

    Den ytre funksjonen er «opphøyd i fjerde», og den indre er \(3x^2+1\).

    **Svar:**

    \[
    \begin{aligned}
    f'(x)&=4(3x^2+1)^3\cdot 6x\\
    &=\underline{\underline{24x(3x^2+1)^3}}.
    \end{aligned}
    \]

    En vanlig feil er å glemme faktoren \(6x\).

## Oppgaver

!!! question "Oppgave 3.3.1 – Deriver en potens av en lineær funksjon"

    Deriver

    \[
    f(x)=(2x-5)^6.
    \]

!!! question "Oppgave 3.3.2 – Deriver en kvadratrot"

    Deriver

    \[
    g(x)=\sqrt{4x^2+1}.
    \]

    Skriv svaret med potensform eller brøk.

!!! question "Oppgave 3.3.3 – Deriver en eksponentialfunksjon"

    Deriver

    \[
    h(x)=e^{x^2-3x}.
    \]

!!! question "Oppgave 3.3.4 – Bestem en parameter"

    Bestem alle verdier av \(a\) slik at tangenten til

    \[
    f(x)=(x^2+a)^3
    \]

    ved \(x=1\) har stigningstall \(24\). Vis at du må bruke kjerneregelen, og undersøk om løsningen er entydig.

!!! question "Oppgave 3.3.5 – Deriver en logaritmefunksjon"

    Deriver funksjonen

    \[
    f(x)=\ln(3x).
    \]

    Vis tydelig hva som er den ytre og den indre funksjonen, og bruk kjerneregelen.

## Fasit

??? note "Fasit – oppgave 3.3.1"

    \[
    f'(x)=6(2x-5)^5\cdot 2=\underline{\underline{12(2x-5)^5}}.
    \]

??? note "Fasit – oppgave 3.3.2"

    Skriv funksjonen som \(g(x)=(4x^2+1)^{1/2}\). Da får vi

    \[
    g'(x)=\frac12(4x^2+1)^{-1/2}\cdot 8x
    =\underline{\underline{\frac{4x}{\sqrt{4x^2+1}}}}.
    \]

??? note "Fasit – oppgave 3.3.3"

    \[
    h'(x)=\underline{\underline{(2x-3)e^{x^2-3x}}}.
    \]

??? note "Fasit – oppgave 3.3.4"

    Ved kjerneregelen får vi

    \[
    f'(x)=3(x^2+a)^2\cdot 2x=6x(x^2+a)^2.
    \]

    Når \(x=1\), skal stigningstallet være \(24\):

    \[
    f'(1)=6(1+a)^2=24.
    \]

    Dermed er

    \[
    (1+a)^2=4
    \quad\Rightarrow\quad
    1+a=\pm2.
    \]

    Vi får

    \[
    \underline{\underline{a=1 \quad\text{eller}\quad a=-3}}.
    \]

    Det finnes altså to løsninger, så løsningen er ikke entydig.

??? note "Fasit – oppgave 3.3.5"

    Den ytre funksjonen er \(\ln(u)\), og den indre funksjonen er \(u=3x\).

    Derivert av den ytre funksjonen er \(1/u\), og den deriverte av den indre funksjonen er \(3\). Derfor får vi

    \[
    f'(x)=\frac{1}{3x}\cdot 3=\underline{\underline{\frac{1}{x}}}.
    \]
