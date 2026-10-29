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

!!! warning "Vanlig feil"

    Produktregelen er **ikke**

    \[
    (uv)'=u'v'.
    \]

    Vi må ha med to ledd: \(u'v+uv'\).

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

!!! warning "Vanlig feil"

    Ikke bytt om på leddene i telleren. Rekkefølgen er

    \[
    u'v-uv',
    \]

    ikke \(uv'-u'v\). Husk også at hele nevneren skal opphøyes i andre.

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

!!! question "Oppgave 3.4.1 – Produktregelen"

    Deriver

    \[
    f(x)=(x^2-3)(2x+1).
    \]

    Bruk \(u\), \(v\), \(u'\) og \(v'\), og vis mellomregningen.

!!! question "Oppgave 3.4.2 – Kvotientregelen"

    Deriver

    \[
    g(x)=\dfrac{2x+1}{x^2+1}.
    \]

    Bruk \(u\) og \(v\), og oppgi eventuelle begrensninger.

!!! question "Oppgave 3.4.3 – Produkt med logaritme"

    Deriver

    \[
    h(x)=x^2\ln x.
    \]

    Husk å oppgi definisjonsmengden.

!!! question "Oppgave 3.4.4 – Finn og forklar feilen"

    En elev påstår at

    \[
    (uv)'=u'v'.
    \]

    Bruk \(u=x^2\) og \(v=x^3\) til å vise at påstanden er feil. Skriv også den riktige regelen.

!!! question "Oppgave 3.4.5 – Produkt med eksponentialfunksjon"

    Deriver

    \[
    p(x)=xe^x.
    \]

    Vis først hva du velger som \(u\) og \(v\).

!!! question "Oppgave 3.4.6 – Kvotient med en potens i telleren"

    Deriver

    \[
    q(x)=\dfrac{x^2+1}{x}.
    \]

    Bruk kvotientregelen, og forenkle svaret så langt som mulig. Husk at \(x\ne0\).

!!! question "Oppgave 3.4.7 – Pass på minustegnet"

    Deriver

    \[
    r(x)=\dfrac{x-3}{x+2}.
    \]

    Skriv telleren i kvotientregelen tydelig før du forenkler.

!!! question "Oppgave 3.4.8 – To produktledd"

    Deriver

    \[
    s(x)=(x^2+1)(x^3-2x).
    \]

    La \(u=x^2+1\) og \(v=x^3-2x\). Finn \(u'\) og \(v'\) før du bruker regelen.

!!! question "Oppgave 3.4.9 – Hvilken regel skal du bruke?"

    Velg produktregelen eller kvotientregelen, og deriver.

    a) \(\displaystyle a(x)=(3x-1)e^x\)

    b) \(\displaystyle b(x)=\frac{e^x}{x+1}\)

!!! question "Oppgave 3.4.10 – Kontroller en påstand"

    En elev sier at

    \[
    \left(\dfrac{u}{v}\right)'=\dfrac{u'}{v'}.
    \]

    Forklar hvorfor regelen er feil. Bruk gjerne \(u=x+1\) og \(v=x-2\) som eksempel.

## Fasit

??? note "Fasit – oppgave 3.4.1"

    Sett \(u=x^2-3\) og \(v=2x+1\). Da er \(u'=2x\) og \(v'=2\).

    \[
    \begin{aligned}
    f'(x)&=u'v+uv'\\
    &=2x(2x+1)+2(x^2-3)\\
    &=\underline{\underline{6x^2+2x-6}}.
    \end{aligned}
    \]

??? note "Fasit – oppgave 3.4.2"

    Sett \(u=2x+1\) og \(v=x^2+1\). Da er \(u'=2\) og \(v'=2x\).

    \[
    \begin{aligned}
    g'(x)&=\dfrac{u'v-uv'}{v^2}\\[4pt]
    &=\dfrac{2(x^2+1)-(2x+1)2x}{(x^2+1)^2}\\[4pt]
    &=\underline{\underline{\dfrac{-2x^2-2x+2}{(x^2+1)^2}}}.
    \end{aligned}
    \]

    Siden \(x^2+1>0\) for alle reelle \(x\), er funksjonen definert for alle reelle \(x\).

??? note "Fasit – oppgave 3.4.3"

    Sett \(u=x^2\) og \(v=\ln x\). Da er \(u'=2x\) og \(v'=\frac1x\).

    \[
    \begin{aligned}
    h'(x)&=u'v+uv'\\
    &=2x\ln x+x^2\cdot\dfrac1x\\
    &=\underline{\underline{2x\ln x+x}}.
    \end{aligned}
    \]

    Funksjonen er definert for \(x>0\).

??? note "Fasit – oppgave 3.4.4"

    Med \(u=x^2\) og \(v=x^3\) får vi \(uv=x^5\), så \((uv)'=5x^4\). Men \(u'v'=2x\cdot3x^2=6x^3\). Disse uttrykkene er ikke like for alle \(x\).

    Riktig regel er

    \[
    \underline{\underline{(uv)'=u'v+uv'}}.
    \]

??? note "Fasit – oppgave 3.4.5"

    Sett \(u=x\), \(v=e^x\), \(u'=1\) og \(v'=e^x\).

    \[
    \begin{aligned}
    p'(x)&=u'v+uv'\\
    &=e^x+xe^x\\
    &=\underline{\underline{e^x(1+x)}}.
    \end{aligned}
    \]

??? note "Fasit – oppgave 3.4.6"

    Sett \(u=x^2+1\), \(v=x\), \(u'=2x\) og \(v'=1\).

    \[
    \begin{aligned}
    q'(x)&=\dfrac{u'v-uv'}{v^2}\\[4pt]
    &=\dfrac{2x\cdot x-(x^2+1)\cdot1}{x^2}\\[4pt]
    &=\dfrac{x^2-1}{x^2}\\[4pt]
    &=\underline{\underline{1-\dfrac{1}{x^2}}}.
    \end{aligned}
    \]

    Her må \(x\ne0\).

??? note "Fasit – oppgave 3.4.7"

    Sett \(u=x-3\), \(v=x+2\), \(u'=1\) og \(v'=1\).

    \[
    \begin{aligned}
    r'(x)&=\dfrac{u'v-uv'}{v^2}\\[4pt]
    &=\dfrac{(x+2)-(x-3)}{(x+2)^2}\\[4pt]
    &=\underline{\underline{\dfrac{5}{(x+2)^2}}}.
    \end{aligned}
    \]

    Her må \(x\ne-2\).

??? note "Fasit – oppgave 3.4.8"

    Sett \(u=x^2+1\) og \(v=x^3-2x\). Da er \(u'=2x\) og \(v'=3x^2-2\).

    \[
    \begin{aligned}
    s'(x)&=u'v+uv'\\
    &=2x(x^3-2x)+(x^2+1)(3x^2-2)\\
    &=2x^4-4x^2+3x^4+x^2-2\\
    &=\underline{\underline{5x^4-3x^2-2}}.
    \end{aligned}
    \]

??? note "Fasit – oppgave 3.4.9"

    **a)** Produktregelen. Sett \(u=3x-1\), \(v=e^x\), \(u'=3\) og \(v'=e^x\).

    \[
    \begin{aligned}
    a'(x)&=3e^x+(3x-1)e^x\\
    &=\underline{\underline{e^x(3x+2)}}.
    \end{aligned}
    \]

    **b)** Kvotientregelen. Sett \(u=e^x\), \(v=x+1\), \(u'=e^x\) og \(v'=1\).

    \[
    \begin{aligned}
    b'(x)&=\dfrac{e^x(x+1)-e^x}{(x+1)^2}\\
    &=\underline{\underline{\dfrac{xe^x}{(x+1)^2}}}.
    \end{aligned}
    \]

    Her må \(x\ne-1\).

??? note "Fasit – oppgave 3.4.10"

    Med \(u=x+1\) og \(v=x-2\) er \(u'=1\) og \(v'=1\). Brøken \(\frac{u'}{v'}=1\) gir ikke den deriverte av \(\frac{x+1}{x-2}\).

    Riktig regel er

    \[
    \underline{\underline{\left(\dfrac{u}{v}\right)'=\dfrac{u'v-uv'}{v^2}}}.
    \]
