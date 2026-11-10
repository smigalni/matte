# 3.4 Produktregelen og kvotientregelen (brøkregelen)

I dette delkapittelet lærer vi å derivere funksjoner som består av et produkt eller en brøk. Her er det lett å gjøre feil hvis vi bare deriverer teller og nevner hver for seg. Derfor bruker vi faste regler og arbeider systematisk.

## Produktregelen

Når to funksjoner multipliseres, bruker vi **produktregelen**.

!!! important "Produktregelen"

    Når

    \[
    f(x)=u(x)\cdot v(x)
    \]

    er den deriverte

    \[
    f'(x)=u'(x)v(x)+u(x)v'(x).
    \]

    Vi deriverer den første funksjonen og lar den andre stå. Deretter lar vi den første stå og deriverer den andre. Til slutt legger vi sammen uttrykkene.

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

## Kvotientregelen (brøkregelen)

Når én funksjon er delt på en annen, bruker vi **brøkregelen**. Her er rekkefølgen i telleren spesielt viktig.

!!! important "Brøkregelen"

    Når

    \[
    f(x)=\dfrac{u(x)}{v(x)},\qquad v(x)\ne0,
    \]

    er den deriverte

    \[
    f'(x)=\dfrac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^2}.
    \]

    Vi deriverer telleren og ganger med nevneren, trekker fra telleren ganget med den deriverte av nevneren, og deler på nevneren i andre.

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

## Oppgaver

Deriver funksjonene. Bestem først om du skal bruke produktregelen eller kvotientregelen. Bruk gjerne \(u\) og \(v\) slik eksemplene viser.

!!! question "Oppgave 3.4.1 – Produktregelen"

    Deriver \(f(x)=(x^2+1)(3x+2)\).

??? note "Fasit – oppgave 3.4.1"

    Vi skriver funksjonen som et produkt:
    \[ f(x)=uv=(x^2+1)(3x+2). \]
    Da er \(u=x^2+1\), \(v=3x+2\), \(u'=2x\) og \(v'=3\).
    Produktregelen gir
    \[
    f'(x)=u'v+uv'
    =2x(3x+2)+(x^2+1)\cdot3
    =9x^2+4x+3.
    \]
    **Svar:**
    \[f'(x)=9x^2+4x+3.\]

!!! question "Oppgave 3.4.2 – Produktregelen med eksponentialfunksjon"

    Deriver \(g(x)=xe^x\).

??? note "Fasit – oppgave 3.4.2"

    Vi skriver funksjonen som et produkt:
    \[g(x)=uv=x\cdot e^x.\]
    Da er \(u=x\), \(v=e^x\), \(u'=1\) og \(v'=e^x\).
    Produktregelen gir
    \[
    g'(x)=u'v+uv'
    =1\cdot e^x+x\cdot e^x
    =e^x(1+x).
    \]

!!! question "Oppgave 3.4.3 – Kvotientregelen"

    Deriver \(h(x)=\dfrac{x+1}{x+2}\).

??? note "Fasit – oppgave 3.4.3"

    Vi skriver funksjonen som en brøk:
    \[h(x)=\dfrac{u}{v}=\dfrac{x+1}{x+2}.\]
    Da er \(u=x+1\), \(v=x+2\), \(u'=1\) og \(v'=1\).
    Brøkregelen gir
    \[
    h'(x)=\dfrac{u'v-uv'}{v^2}
    =\dfrac{1\cdot(x+2)-(x+1)\cdot1}{(x+2)^2}
    =\dfrac{1}{(x+2)^2}.
    \]

!!! question "Oppgave 3.4.4 – Kvotientregelen med en potens"

    Deriver \(p(x)=\dfrac{x^2+1}{x}\), der \(x\ne0\).

??? note "Fasit – oppgave 3.4.4"

    Vi skriver funksjonen som en brøk:
    \[p(x)=\dfrac{u}{v}=\dfrac{x^2+1}{x}.\]
    Da er \(u=x^2+1\), \(v=x\), \(u'=2x\) og \(v'=1\).
    Brøkregelen gir
    \[
    p'(x)=\dfrac{u'v-uv'}{v^2}
    =\dfrac{2x\cdot x-(x^2+1)\cdot1}{x^2}
    =\dfrac{x^2-1}{x^2}=1-\dfrac1{x^2}.
    \]

!!! question "Oppgave 3.4.5 – Velg riktig regel"

    Deriver begge funksjonene:

    a) \(a(x)=(2x-1)\ln x\)

    b) \(b(x)=\dfrac{e^x}{x}\)

??? note "Fasit – oppgave 3.4.5"

    **a) Produktregelen**

    Vi skriver funksjonen som et produkt og setter \(u\) lik første faktor og \(v\) lik andre faktor:

    \[
    \begin{aligned}
    a(x)&=uv=(2x-1)\ln x\\
    u&=2x-1,\qquad v=\ln x\\
    u'&=2,\qquad v'=\dfrac1x
    \end{aligned}
    \]

    Deretter bruker vi produktregelen:

    \[
    \begin{aligned}
    a'(x)&=u'v+uv'\\
    &=2\ln x+(2x-1)\cdot\dfrac1x\\
    &=2\ln x+2-\dfrac1x.
    \end{aligned}
    \]

    **b) Brøkregelen**

    Vi skriver funksjonen som en brøk:

    \[
    \begin{aligned}
    b(x)&=\dfrac{u}{v}=\dfrac{e^x}{x}\\
    u&=e^x,\qquad v=x\\
    u'&=e^x,\qquad v'=1
    \end{aligned}
    \]

    Deretter bruker vi brøkregelen:

    \[
    \begin{aligned}
    b'(x)&=\dfrac{u'v-uv'}{v^2}\\
    &=\dfrac{e^x\cdot x-e^x\cdot1}{x^2}\\
    &=\dfrac{e^x(x-1)}{x^2}.
    \end{aligned}
    \]
