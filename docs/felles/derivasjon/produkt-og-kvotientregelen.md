# 3.4 Produktregelen og kvotientregelen (brøkregelen)

I dette delkapittelet lærer vi å derivere funksjoner som består av et produkt eller en brøk. Her er det lett å gjøre feil hvis vi bare deriverer teller og nevner hver for seg. Derfor bruker vi faste regler og arbeider systematisk.

## Produktregelen

Når to funksjoner multipliseres, bruker vi **produktregelen**.

!!! important "Produktregelen"

    \[
    f'(x)=u'v+uv'
    \]

    Deriver den første faktoren og behold den andre. Deretter beholder du den første faktoren og deriverer den andre. Legg sammen uttrykkene.

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

    Hvis

    \[
    f(x)=\frac{u}{v},\qquad v\ne0,
    \]

    så er

    \[
    \frac{u'v-uv'}{v^2}
    \]

    Derivert av teller ganger nevner, minus teller ganger derivert av nevner. Del på nevneren i andre.

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

!!! question "Oppgave 3.4.2 – Produktregelen med eksponentialfunksjon"

    Deriver \(g(x)=xe^x\).

!!! question "Oppgave 3.4.3 – Kvotientregelen"

    Deriver \(h(x)=\dfrac{x+1}{x+2}\).

!!! question "Oppgave 3.4.4 – Kvotientregelen med en potens"

    Deriver \(p(x)=\dfrac{x^2+1}{x}\), der \(x\ne0\).

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
