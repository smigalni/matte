# 3.10 Kapittelprøve – derivasjon

3.10 Kapittelprøve – derivasjon

**Anbefaling:** Del 1 kan gjennomføres uten digitale hjelpemidler og Del 2 med digitale hjelpemidler, hvis dette samsvarer med vurderingsformen. Oppgavene er laget for høyt nivå. Vis metodevalg, mellomregning og tolkning.

### Del 1 – uten digitale hjelpemidler

**3.P1.1** Funksjonen \(f(x)=x^3+ax^2+bx\) har et stasjonært punkt ved \(x=1\), og tangenten ved \(x=-1\) har stigningstall 5. Bestem \(a\) og \(b\). Undersøk om punktet ved \(x=1\) er et toppunkt, bunnpunkt eller noe annet.

**3.P1.2** La \(g(x)=(x^2-1)e^{2x}\). Finn \(g'(x)\), bestem alle punkter der tangenten er horisontal, og forklar hvordan du vet at du har funnet alle løsningene.

**3.P1.3** En delt funksjon er gitt ved
\[
h(x)=\begin{cases}
ax+1,&x<2,\\
x^2+b,&x\geq2.
\end{cases}
\]
Bestem betingelsen mellom \(a\) og \(b\) for kontinuitet ved \(x=2\). Bestem deretter betingelsen for deriverbarhet, og avgjør om begge kravene kan oppfylles samtidig.

### Del 2 – med digitale hjelpemidler

**3.P2.1** En modell for høyde er \(s(t)=t^3-6t^2+9t+2\), for \(0\leq t\leq5\). Bruk algebra og et digitalt verktøy til å undersøke når objektet står stille, når det beveger seg oppover eller nedover, og hvilke lokale ekstremalverdier det har i intervallet. Forklar hvordan den deriverte knytter sammen alle delene av svaret.

**3.P2.2** En funksjon \(f(x)=(x^2+a)e^{bx}\) går gjennom punktet \((0,3)\), og tangenten i dette punktet har stigningstall 2. Bestem \(a\) og \(b\). Bruk deretter et digitalt verktøy til å undersøke grafen, men begrunn parametrene analytisk.

**3.P2.3** Undersøk numerisk og analytisk hvor godt differansekvotienten til \(f(x)=\ln x\) tilnærmer den deriverte ved \(x=1\). Sammenlign minst fire verdier av \(h\), forklar eventuelle avvik og bruk den eksakte deriverte som kontroll.

## Fasit og løsningsskisser

- **3.2.1:** \(20x^3-9x^2+2\).
- **3.2.2:** \(2e^x-5/x\), for \(x>0\).
- **3.2.3:** Konstantleddet blir 0, så svaret er \(21x^2\).
- **3.2.4:** \(a=2\), \(b=-2\), \(c=3\), \(d=5\).
- **3.3.1:** \(12(2x-5)^5\).
- **3.3.2:** \(4x/\sqrt{4x^2+1}\).
- **3.3.3:** \\((2x-3)e^{x^2-3x}\\).
- **3.3.4:** \\(f'(1)=6(1+a)^2=24\\), så \\(a=1\\) eller \\(a=-3\\); løsningen er ikke entydig.
- **3.4.1:** \\(6x^2+2x-6\\).
- **3.4.2:** \((2-2x^2-2x)/(x^2+1)^2\); definert for alle reelle x.
- **3.4.3:** \(2x\ln x+x\), for \(x>0\).
- **3.5.2:** Kontinuerlig i 1; venstrederivert 2 og høyrederivert 2, altså deriverbar.
- **3.6.1:** \(f'(x)=3\).
- **3.6.2:** \(f'(x)=2x+2\).
- **3.7.1:** Eksakt verdi er 4; framoverdifferanse gir omtrent 4,1 for \(h=0,1\) og 4,01 for \(h=0,01\).
- **3.9.1:** \(12x^2-2\).
- **3.9.2:** 4.
- **3.9.3:** \(6(2x+1)^2\).
- **3.9.4:** \(f'(x)=3x^2-2\), ved 1 er stigningstallet 1 og punktet \((1,-1)\). Tangent: \(y=x-2\).
- **3.9.5:** \(f'(x)=\frac{x^2-2x-1}{(x-1)^2}\), for \(x\ne1\).
- **3.9.6:** Kontinuerlig, men ikke deriverbar: venstrederivert 4, høyrederivert 4? Kontroller overgangsleddet: venstrederivert \(2x\) gir 4 og høyrederivert gir 4. Dermed er funksjonen deriverbar i 2.
- **3.P1.1:** Betingelsene gir \\(3+2a+b=0\\) og \\(3-2a+b=5\\), altså \\(a=-5/4\\), \\(b=-1/2\\). Siden \\(f''(1)=7/2>0\\), er punktet ved \\(x=1\\) et lokalt bunnpunkt.
- **3.P1.2:** \(g'(x)=e^{2x}(2x+2x^2-2)\). Horisontale tangenter finnes når \(x^2+x-1=0\), altså \(x=(-1\pm\sqrt5)/2\).
- **3.P1.3:** Kontinuitet krever \(2a+1=4+b\). Deriverbarhet krever \(a=4\). Kombinert gir \(b=5\).
- **3.P2.1:** \(s'(t)=3(t-1)(t-3)\). Står stille ved \(t=1,3\); fortegnet bestemmer opp-/nedoverbevegelse. Kontroller endepunkter og kritiske punkter for ekstremalverdier.
- **3.P2.2:** \\(a=3\\) fra funksjonsverdien. \\(f'(0)=ab=3b=2\\), så \\(b=2/3\\).
- **3.P2.3:** \(f'(1)=1\). Numeriske verdier bør nærme seg 1 når \(h\) blir mindre, men avrunding kan etter hvert påvirke resultatet.

**Viktig faglig kontroll før bruk:** I oppgave 3.9.6 er funksjonen både kontinuerlig og deriverbar ved \(x=2\), siden både funksjonsverdiene og stigningstallene samsvarer.
