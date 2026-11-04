# 3.4 Produktregelen og kvotientregelen

I dette delkapittelet lærer vi å derivere funksjoner som består av et produkt eller en brøk. Her er det lett å gjøre feil hvis vi bare deriverer teller og nevner hver for seg. Derfor bruker vi faste regler og arbeider systematisk.

## Produktregelen

Når to funksjoner multipliseres, bruker vi **produktregelen**.

!!! important "Produktregelen"

    Hvis

    $$
    f(x)=u(x)\cdot v(x),
    $$

    så er

    $$
    \boxed{f'(x)=u'(x)v(x)+u(x)v'(x)}.
    $$

    Med ord: Deriver den første funksjonen og behold den andre, pluss behold den første funksjonen og deriver den andre.

!!! example "Eksempel 3.4.1 – Produktregelen med u og v"

    Vi skal derivere

    \[
    f(x)=(x^2+1)e^x.
    \]

    **Trinn 1: Finn \(u\) og \(v\).**

    Vi lar den første faktoren være \(u\) og den andre faktoren være \(v\):

    \[
    u=x^2+1
    \qquad\text{og}\qquad
    v=e^x.
    \]

    **Trinn 2: Finn de deriverte \(u'\) og \(v'\).**

    \[
    u'=2x
    \qquad\text{og}\qquad
    v'=e^x.
    \]

    **Trinn 3: Sett inn i produktregelen.**

    \[
    \begin{aligned}
    f'(x)&=u'v+uv'\\
    &=2x\cdot e^x+(x^2+1)\cdot e^x\\
    &=e^x(2x+x^2+1).
    \end{aligned}
    \]

    **Svar:**

    \[
    \underline{\underline{f'(x)=e^x(x^2+2x+1)}}
    \]

## Kvotientregelen

Når én funksjon er delt på en annen, bruker vi **kvotientregelen**. Her er rekkefølgen i telleren spesielt viktig.

!!! important "Kvotientregelen"

    Hvis

    \[
    f(x)=\dfrac{u(x)}{v(x)},\qquad v(x)\ne0,
    \]

    så er

    \[
    \boxed{f'(x)=\dfrac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^2}}.
    \]

    Med ord: Derivert av teller ganger nevner, **minus** teller ganger derivert av nevner. Del på nevneren i andre.

!!! example "Eksempel 3.4.2 – Kvotientregelen med u og v"

    Vi skal derivere

    \[
    g(x)=\dfrac{x+1}{x-2}.
    \]

    **Trinn 1: Finn \(u\) og \(v\).**

    Telleren er \(u\), og nevneren er \(v\):

    \[
    u=x+1
    \qquad\text{og}\qquad
    v=x-2.
    \]

    **Trinn 2: Finn de deriverte \(u'\) og \(v'\).**

    \[
    u'=1
    \qquad\text{og}\qquad
    v'=1.
    \]

    **Trinn 3: Sett inn i kvotientregelen.**

    Vi skriver brøken stort og tar ett ledd om gangen:

    \[
    \begin{aligned}
    g'(x)
    &=\dfrac{u'v-uv'}{v^2}\\[6pt]
    &=\dfrac{1\cdot(x-2)-(x+1)\cdot1}{(x-2)^2}\\[6pt]
    &=\dfrac{x-2-x-1}{(x-2)^2}\\[6pt]
    &=\dfrac{-3}{(x-2)^2}.
    \end{aligned}
    \]

    **Svar:**

    \[
    \underline{\underline{g'(x)=\dfrac{-3}{(x-2)^2}}}
    \]

    Nevneren kan ikke være null, så \(x\ne2\).

## Slik bruker du \(u\) og \(v\)

Bruk samme framgangsmåte hver gang. Det gjør det enklere å holde styr på funksjonene og de deriverte.

<figure markdown>
<svg viewBox="0 0 360 300" role="img" aria-label="Framgangsmåte for produkt- og kvotientregelen: finn u og v, finn u-prime og v-prime, sett inn i riktig regel" xmlns="http://www.w3.org/2000/svg">
  <rect x="25" y="14" width="310" height="62" rx="10" fill="#dff3e5" stroke="#328653" stroke-width="1.5"/>
  <text x="180" y="38" text-anchor="middle" font-size="14" font-weight="600" fill="#17663a">1. Finn funksjonene</text>
  <text x="180" y="59" text-anchor="middle" font-size="17" fill="#17663a">u = første del, v = andre del</text>
  <path d="M180 77 V101" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M174 95 L180 103 L186 95" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="25" y="107" width="310" height="62" rx="10" fill="#e2ecff" stroke="#477bd1" stroke-width="1.5"/>
  <text x="180" y="131" text-anchor="middle" font-size="14" font-weight="600" fill="#174ea6">2. Deriver hver for seg</text>
  <text x="180" y="152" text-anchor="middle" font-size="17" fill="#174ea6">finn u′ og v′</text>
  <path d="M180 170 V194" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <path d="M174 188 L180 196 L186 188" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="25" y="200" width="310" height="78" rx="10" fill="#f1e4ff" stroke="#8b5cc7" stroke-width="1.5"/>
  <text x="180" y="224" text-anchor="middle" font-size="14" font-weight="600" fill="#5b2c91">3. Velg riktig regel</text>
  <text x="180" y="247" text-anchor="middle" font-size="14" fill="#5b2c91">Produkt: u′v + uv′</text>
  <text x="180" y="266" text-anchor="middle" font-size="14" fill="#5b2c91">Kvotient: (u′v − uv′) / v²</text>
</svg>
<figcaption>Finn først funksjonene og de deriverte. Velg deretter produktregelen eller kvotientregelen.</figcaption>
</figure>

## Oppgaver

Deriver funksjonene. Bestem først om du skal bruke produktregelen eller kvotientregelen. Bruk gjerne \(u\) og \(v\) slik eksemplene viser.

!!! question "Oppgave 3.4.1 – Produktregelen"

    Deriver \(f(x)=(x^2+1)(3x+2)\).

!!! question "Oppgave 3.4.2 – Produktregelen med eksponentialfunksjon"

    Deriver \(g(x)=xe^x\).

!!! question "Oppgave 3.4.3 – Kvotientregelen"

    Deriver \(h(x)=\frac{x+1}{x+2}\).

!!! question "Oppgave 3.4.4 – Kvotientregelen med en potens"

    Deriver \(p(x)=\frac{x^2+1}{x}\), der \(x\ne0\).

!!! question "Oppgave 3.4.5 – Velg riktig regel"

    Deriver begge funksjonene:

    a) \(a(x)=(2x-1)\ln x\)
    b) \(b(x)=\frac{e^x}{x}\)

## Fasit

??? note "Fasit – oppgave 3.4.1"

    Sett \(u=x^2+1\) og \(v=3x+2\). Da er \(u'=2x\) og \(v'=3\).

    \[
    f'(x)=2x(3x+2)+3(x^2+1)
    =\underline{\underline{9x^2+4x+3}}.
    \]

??? note "Fasit – oppgave 3.4.2"

    \[
    g'(x)=1\cdot e^x+x\cdot e^x
    =\underline{\underline{e^x(1+x)}}.
    \]

??? note "Fasit – oppgave 3.4.3"

    \[
    h'(x)=\frac{1\cdot(x+2)-(x+1)\cdot1}{(x+2)^2}
    =\underline{\underline{\frac1{(x+2)^2}}}.
    \]

??? note "Fasit – oppgave 3.4.4"

    \[
    p'(x)=\frac{2x\cdot x-(x^2+1)\cdot1}{x^2}
    =\underline{\underline{1-\frac1{x^2}}}.
    \]

??? note "Fasit – oppgave 3.4.5"

    a)
    \[
    a'(x)=2\ln x+(2x-1)\frac1x
    =\underline{\underline{2\ln x+2-\frac1x}}.
    \]

    b)
    \[
    b'(x)=\frac{e^x\cdot x-e^x}{x^2}
    =\underline{\underline{\frac{e^x(x-1)}{x^2}}}.
    \]
