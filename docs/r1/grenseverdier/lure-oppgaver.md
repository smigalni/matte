# Lure oppgaver – vanlige feil i grenseverdier og kontinuitet

Disse oppgavene undersøker om du forstår hva grenseverdier, kontinuitet og asymptoter faktisk forteller. Flere av påstandene høres rimelige ut, men inneholder en feil. Begrunn alltid konklusjonen matematisk.

## Oppgave 1 – samme grenseverdi betyr ikke samme funksjonsverdi

En funksjon er gitt ved

\[
f(x)=
\begin{cases}
2x+1, & x<1,\\
4, & x=1,\\
x+2, & x>1.
\end{cases}
\]

a) Bestem venstre og høyre grenseverdi når \(x\to1\).

b) Bestem \(f(1)\).

c) Finnes den tosidige grenseverdien? Er funksjonen kontinuerlig i \(x=1\)?

d) En elev sier: «Grenseverdien er 3, så funksjonsverdien må også være 3.» Forklar feilen.

## Oppgave 2 – kontinuerlig, men ikke deriverbar

La

\[
g(x)=
\begin{cases}
2x+1, & x<1,\\
x+2, & x\geq1.
\end{cases}
\]

a) Undersøk om \(g\) er kontinuerlig i \(x=1\).

b) Sammenlign stigningstallene på hver side av \(x=1\).

c) Kan funksjonen være kontinuerlig, men ha en knekk? Forklar med utgangspunkt i funksjonen.

## Oppgave 3 – uendelig på begge sider

Vi har

\[
h(x)=\frac{1}{(x-2)^2}.
\]

a) Bestem grenseverdien når \(x\to2^-\).

b) Bestem grenseverdien når \(x\to2^+\).

c) Er \(x=2\) en vertikal asymptote?

d) Sammenlign med \(p(x)=\frac{1}{x-2}\). Hva er forskjellen på fortegnet til de ensidige grenseverdiene?

## Oppgave 4 – forkorting og definisjonsmengde

Vi har funksjonen

\[
q(x)=\frac{x^2-1}{x-1},\qquad x\ne1.
\]

En elev forkorter og skriver \(q(x)=x+1\), og konkluderer med at \(q(1)=2\).

a) Hvilke \(x\)-verdier er med i den opprinnelige definisjonsmengden?

b) Hva er grenseverdien når \(x\to1\)?

c) Er \(q(1)\) definert?

d) Hva måtte vi ha endret i definisjonen for at funksjonen skulle bli kontinuerlig i \(x=1\)?

## Oppgave 5 – asymptoten kan krysses

Vi har

\[
r(x)=\frac{x^2+x}{x^2+1}.
\]

a) Bestem den horisontale asymptoten når \(x\to\infty\).

b) Undersøk om grafen krysser den horisontale asymptoten.

c) En elev sier: «En graf kan ikke krysse en asymptote.» Forklar hvorfor påstanden er feil.

## Oppgave 6 – undersøk hver side, ikke bare nevneren

Vi har

\[
s(x)=\frac{x^2-1}{(x-1)^2}.
\]

a) Finn kandidaten til vertikal asymptote.

b) Faktoriser og forkort så langt det er mulig.

c) Bestem grenseverdiene fra venstre og høyre.

d) Forklar hvorfor det er nødvendig å undersøke fortegnet når \(x\) nærmer seg kandidaten.

## Oppgave 7 – grenseverdi ved uendelig fra to retninger

Vi har

\[
t(x)=\frac{x}{\sqrt{x^2+1}}.
\]

a) Bestem grenseverdien når \(x\to\infty\).

b) Bestem grenseverdien når \(x\to-\infty\).

c) Har funksjonen samme horisontale asymptote i begge retninger? Begrunn.

## Fasit og løsningsskisser

**Oppgave 1**

a) Fra venstre får vi \(2\cdot1+1=3\). Fra høyre får vi \(1+2=3\).

b) \(f(1)=4\).

c) Den tosidige grenseverdien finnes og er 3. Funksjonen er ikke kontinuerlig fordi \(f(1)\ne3\).

d) Grenseverdien beskriver hva funksjonsverdiene nærmer seg, ikke nødvendigvis verdien i selve punktet.

**Oppgave 2**

a) Venstre grenseverdi er \(2\cdot1+1=3\). Høyre grenseverdi og funksjonsverdien er \(1+2=3\). Funksjonen er kontinuerlig.

b) Stigningstallet er 2 til venstre og 1 til høyre.

c) Ja. Funksjonen er kontinuerlig, men stigningstallet endrer seg brått. Grafen har en knekk i \(x=1\), og funksjonen er ikke deriverbar der.

**Oppgave 3**

a) \(\lim_{x\to2^-}h(x)=+\infty\).

b) \(\lim_{x\to2^+}h(x)=+\infty\).

c) Ja, \(x=2\) er en vertikal asymptote.

d) For \(p(x)=1/(x-2)\) går funksjonen mot \(-\infty\) fra venstre og \(+\infty\) fra høyre. Kvadratet i nevneren til \(h\) gjør nevneren positiv på begge sider.

**Oppgave 4**

a) Den opprinnelige funksjonen er definert for alle reelle \(x\) unntatt \(x=1\).

b) \(q(x)=x+1\) for \(x\ne1\), så grenseverdien er 2.

c) Nei. Forkortingen gir et uttrykk som er lik funksjonen på den opprinnelige definisjonsmengden, men den legger ikke automatisk \(x=1\) til definisjonsmengden.

d) Vi kan definere \(q(1)=2\). Da blir funksjonen kontinuerlig i \(x=1\).

**Oppgave 5**

a) Ved å dele teller og nevner på \(x^2\) får vi horisontal asymptote \(y=1\) når \(x\to\infty\).

b) Vi løser
\[
\frac{x^2+x}{x^2+1}=1
\quad\Longrightarrow\quad
x^2+x=x^2+1
\quad\Longrightarrow\quad x=1.
\]
Grafen krysser derfor linjen \(y=1\) i punktet \((1,1)\).

c) En horisontal asymptote beskriver hva funksjonen nærmer seg når \(x\) går mot uendelig. Den sier ikke at grafen aldri kan møte eller krysse linjen ved en endelig \(x\)-verdi.

**Oppgave 6**

a) Nevneren blir null når \(x=1\).

b)
\[
s(x)=\frac{(x-1)(x+1)}{(x-1)^2}
=\frac{x+1}{x-1},\qquad x\ne1.
\]

c) Når \(x\to1^-\), går funksjonen mot \(-\infty\). Når \(x\to1^+\), går den mot \(+\infty\). Dermed er \(x=1\) en vertikal asymptote.

d) Fortegnet til \(x-1\) er negativt på venstre side og positivt på høyre side. Det avgjør hvilken uendelighet funksjonen går mot.

**Oppgave 7**

Vi skriver

\[
\frac{x}{\sqrt{x^2+1}}
=\frac{x}{|x|\sqrt{1+1/x^2}}.
\]

a) Når \(x\to\infty\), er \(x/|x|=1\), og grenseverdien er 1.

b) Når \(x\to-\infty\), er \(x/|x|=-1\), og grenseverdien er \(-1\).

c) Funksjonen har to ulike horisontale asymptoter: \(y=1\) mot høyre og \(y=-1\) mot venstre. Det er viktig å undersøke begge retningene.
