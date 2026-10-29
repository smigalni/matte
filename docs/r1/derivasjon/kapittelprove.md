# 3.10 Kapittelprøve – derivasjon

**Anbefaling:** Del 1 kan gjennomføres uten digitale hjelpemidler og Del 2 med digitale hjelpemidler, hvis dette samsvarer med vurderingsformen. Oppgavene er laget for høyt nivå. Vis metodevalg, mellomregning og tolkning.

## Del 1 – uten digitale hjelpemidler

!!! question "Oppgave 3.P1.1 – Stasjonært punkt og tangent"

    Funksjonen \(f(x)=x^3+ax^2+bx\) har et stasjonært punkt ved \(x=1\), og tangenten ved \(x=-1\) har stigningstall \(5\).

    Bestem \(a\) og \(b\). Undersøk om punktet ved \(x=1\) er et toppunkt, bunnpunkt eller noe annet.

!!! question "Oppgave 3.P1.2 – Produktregel og horisontale tangenter"

    La \(g(x)=(x^2-1)e^{2x}\).

    Finn \(g'(x)\), bestem alle punkter der tangenten er horisontal, og forklar hvordan du vet at du har funnet alle løsningene.

!!! question "Oppgave 3.P1.3 – Deriverbarhet for en delt funksjon"

    En delt funksjon er gitt ved

    \[
    h(x)=
    \begin{cases}
    ax+1,&x<2,\\
    x^2+b,&x\geq2.
    \end{cases}
    \]

    Bestem betingelsen mellom \(a\) og \(b\) for kontinuitet ved \(x=2\). Bestem deretter betingelsen for deriverbarhet, og avgjør om begge kravene kan oppfylles samtidig.

## Del 2 – med digitale hjelpemidler

!!! question "Oppgave 3.P2.1 – Bevegelse og ekstremalverdier"

    En modell for høyde er

    \[
    s(t)=t^3-6t^2+9t+2,\qquad 0\leq t\leq5.
    \]

    Bruk algebra og et digitalt verktøy til å undersøke når objektet står stille, når det beveger seg oppover eller nedover, og hvilke lokale og globale ekstremalverdier det har i intervallet. Forklar hvordan den deriverte knytter sammen alle delene av svaret.

!!! question "Oppgave 3.P2.2 – Bestem parametere"

    En funksjon \(f(x)=(x^2+a)e^{bx}\) går gjennom punktet \((0,3)\), og tangenten i dette punktet har stigningstall \(2\).

    Bestem \(a\) og \(b\). Bruk deretter et digitalt verktøy til å undersøke grafen, men begrunn parametrene analytisk.

!!! question "Oppgave 3.P2.3 – Numerisk derivasjon"

    Undersøk numerisk og analytisk hvor godt differansekvotienten til \(f(x)=\ln x\) tilnærmer den deriverte ved \(x=1\).

    Sammenlign minst fire verdier av \(h\), forklar eventuelle avvik og bruk den eksakte deriverte som kontroll.

## Fasit og løsningsskisser

??? note "Fasit – oppgave 3.P1.1"

    Vi har

    \[
    f'(x)=3x^2+2ax+b.
    \]

    Stasjonært punkt ved \(x=1\) gir \(3+2a+b=0\). Tangentstigningstall \(5\) ved \(x=-1\) gir \(3-2a+b=5\).

    Ved å trekke den første likningen fra den andre får vi \(-4a=2\), altså \(a=-\frac12\). Da blir \(b=-2\).

    Siden \(f''(x)=6x+2a\), får vi \(f''(1)=5>0\). Punktet ved \(x=1\) er derfor et lokalt bunnpunkt.

??? note "Fasit – oppgave 3.P1.2"

    Produktregelen gir

    \[
    g'(x)=2xe^{2x}+(x^2-1)2e^{2x}
    =2e^{2x}(x^2+x-1).
    \]

    Siden \(e^{2x}\ne0\), er \(g'(x)=0\) når \(x^2+x-1=0\). Dermed

    \[
    x=\frac{-1\pm\sqrt5}{2}.
    \]

    Dette er alle løsningene fordi andregradslikningen har akkurat disse to røttene.

??? note "Fasit – oppgave 3.P1.3"

    Kontinuitet krever at venstre grenseverdi og funksjonsverdien er like:

    \[
    2a+1=4+b.
    \]

    Deriverbarhet krever i tillegg at de ensidige stigningstallene er like. Venstre stigningstall er \(a\), og høyre stigningstall er \(2x=4\) ved \(x=2\). Altså \(a=4\). Da gir kontinuitetskravet \(8+1=4+b\), så \(b=5\). Begge kravene kan oppfylles samtidig med \(a=4\) og \(b=5\).

??? note "Fasit – oppgave 3.P2.1"

    \[
    s'(t)=3t^2-12t+9=3(t-1)(t-3).
    \]

    Objektet står stille ved \(t=1\) og \(t=3\). Den deriverte er positiv for \(0\leq t<1\), negativ for \(1<t<3\) og positiv for \(3<t\leq5\). Objektet beveger seg derfor oppover, nedover og deretter oppover.

    Funksjonsverdiene er \(s(0)=2\), \(s(1)=6\), \(s(3)=2\) og \(s(5)=22\). Globalt minimum i intervallet er \(2\), ved \(t=0\) og \(t=3\), og globalt maksimum er \(22\), ved \(t=5\). Det lokale maksimumet er \(s(1)=6\), og det lokale minimumet er \(s(3)=2\).

??? note "Fasit – oppgave 3.P2.2"

    Fra \(f(0)=3\) får vi \(a=3\). Derivasjon gir

    \[
    f'(x)=e^{bx}\bigl(2x+b(x^2+a)\bigr).
    \]

    Dermed er \(f'(0)=ab=3b=2\), så \(b=\frac23\).

??? note "Fasit – oppgave 3.P2.3"

    Den eksakte deriverte er \(f'(x)=1/x\), så \(f'(1)=1\). Framoverdifferansen er

    \[
    \frac{\ln(1+h)-\ln 1}{h}=\frac{\ln(1+h)}h.
    \]

    Verdiene bør nærme seg \(1\) når \(h\) blir mindre. For svært små \(h\) kan avrundingsfeil påvirke resultatet, så mindre \(h\) gir ikke alltid bedre tilnærming.
