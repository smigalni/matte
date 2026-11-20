# Pilot: Elev View og Teacher View – 3.1 Vekstfart og tangent

Dette er en avgrenset prototype for å teste to måter å bruke det samme faglige innholdet på. Velg visning øverst. Piloten endrer ikke den ordinære læreboksiden.

<div class="dual-view-switch" role="group" aria-label="Velg visning">
  <button type="button" class="dual-view-button is-active" data-view-target="student" aria-pressed="true">Elev View</button>
  <button type="button" class="dual-view-button" data-view-target="teacher" aria-pressed="false">Teacher View</button>
</div>

<div id="student-view" class="dual-view-panel" data-view-panel="student" markdown="1">

## Elev View – lær i ditt eget tempo

### Læringsmål

Når du er ferdig, skal du kunne:

- forklare forskjellen på gjennomsnittlig og momentan vekstfart
- finne gjennomsnittlig vekstfart mellom to punkter
- forklare sammenhengen mellom momentan vekstfart og tangentens stigningstall
- finne likningen til en tangent når punktet og stigningstallet er kjent

### To måter å beskrive endring på

**Gjennomsnittlig vekstfart** beskriver hvor mye en funksjon endrer seg mellom to x-verdier. På grafen er dette stigningstallet til en sekant.

\[
a=\frac{f(x_2)-f(x_1)}{x_2-x_1}
\]

**Momentan vekstfart** beskriver hvor raskt funksjonen endrer seg i ett bestemt punkt. Geometrisk er dette stigningstallet til tangenten i punktet.

### Se på funksjonen \(f(x)=x^2\)

Vi velger punktet \(P=(1,1)\). Når vi flytter et annet punkt \(Q\) på grafen nærmere \(P\), dreier sekanten seg mot tangenten.

For \(f(x)=x^2\) er den deriverte \(f'(x)=2x\). I punktet \(x=1\) er derfor tangentens stigningstall

\[
f'(1)=2.
\]

Tangentens likning finner vi med ettpunktsformelen:

\[
y-y_1=f'(x_1)(x-x_1).
\]

Setter vi inn punktet \((1,1)\) og stigningstallet 2, får vi

\[
y-1=2(x-1)
\]

\[
\boxed{y=2x-1}
\]

### Sjekk at du har forstått

1. Hva er forskjellen på en sekant og en tangent?
2. Hva forteller stigningstallet til tangenten i et punkt?
3. Hvorfor nærmer sekantens stigningstall seg tangentens stigningstall når punkt \(Q\) nærmer seg \(P\)?

</div>

<div id="teacher-view" class="dual-view-panel" data-view-panel="teacher" hidden>

<h2>Teacher View – utforsk sammen med klassen</h2>

<p><strong>Undervisningsidé:</strong> La elevene først forutsi hva som skjer med sekantens stigningstall når punkt Q flyttes mot P. Bruk deretter modellen til å undersøke hypotesen.</p>

<div class="teacher-model">
  <div class="teacher-model-heading">
    <div>
      <span class="teacher-eyebrow">INTERAKTIV MODELL</span>
      <h3>Sekant blir tangent</h3>
      <p>Funksjon: <strong>f(x) = x²</strong></p>
    </div>
    <span class="teacher-model-tag">Dra i punktene</span>
  </div>

  <div class="teacher-graph-wrap">
    <svg id="slope-graph" viewBox="0 0 620 410" role="img" aria-label="Interaktiv graf av funksjonen f av x lik x i andre. Punkt P og Q kan flyttes langs grafen. Sekant og tangent vises.">
      <defs>
        <clipPath id="slope-plot-clip"><rect x="62" y="26" width="520" height="330"/></clipPath>
      </defs>
      <g class="graph-grid">
        <path d="M62 26V356 M149 26V356 M236 26V356 M322 26V356 M409 26V356 M496 26V356 M582 26V356"/>
        <path d="M62 26H582 M62 92H582 M62 158H582 M62 224H582 M62 290H582 M62 356H582"/>
      </g>
      <g class="graph-axes">
        <path d="M62 356H590 M149 365V20"/>
      </g>
      <g class="graph-labels">
        <text x="594" y="361">x</text><text x="137" y="17">y</text>
        <text x="142" y="374">0</text><text x="229" y="374">1</text><text x="315" y="374">2</text><text x="402" y="374">3</text><text x="489" y="374">4</text><text x="576" y="374">5</text>
        <text x="45" y="294">1</text><text x="45" y="228">4</text><text x="39" y="162">9</text><text x="33" y="96">16</text>
      </g>
      <g clip-path="url(#slope-plot-clip)">
        <path id="function-curve" class="function-curve" d=""/>
        <path id="secant-line" class="secant-line" d=""/>
        <path id="tangent-line" class="tangent-line" d=""/>
      </g>
      <circle id="point-p" class="graph-point point-p" r="7" cx="0" cy="0" tabindex="0" role="slider" aria-label="Punkt P på grafen"/>
      <circle id="point-q" class="graph-point point-q" r="7" cx="0" cy="0" tabindex="0" role="slider" aria-label="Punkt Q på grafen"/>
      <g class="graph-point-labels"><text id="label-p" x="0" y="0">P</text><text id="label-q" x="0" y="0">Q</text></g>
    </svg>
  </div>

  <div class="teacher-legend">
    <span><i class="legend-dot curve-dot"></i> Grafen f(x) = x²</span>
    <span><i class="legend-dot secant-dot"></i> Sekant PQ</span>
    <span><i class="legend-dot tangent-dot"></i> Tangent i P</span>
  </div>

  <div class="teacher-controls">
    <div class="teacher-control">
      <label for="point-a">Flytt punkt P – x = <output id="point-a-value">1,00</output></label>
      <input id="point-a" type="range" min="-0.5" max="3.5" step="0.01" value="1">
    </div>
    <div class="teacher-control">
      <label for="delta-h">Avstand h mellom P og Q – h = <output id="delta-h-value">1,00</output></label>
      <input id="delta-h" type="range" min="0.05" max="2.5" step="0.01" value="1">
    </div>
  </div>

  <div class="teacher-readouts" aria-live="polite">
    <div><span>Stigningstall sekant</span><strong id="secant-slope">3,00</strong></div>
    <div><span>Stigningstall tangent</span><strong id="tangent-slope">2,00</strong></div>
    <div><span>Forskjell</span><strong id="slope-difference">1,00</strong></div>
  </div>

  <p class="teacher-explanation" id="model-explanation">Når h blir mindre, nærmer sekantens stigningstall seg tangentens stigningstall.</p>
  <div class="teacher-prompt">
    <strong>Spør klassen:</strong> Hva skjer med forskjellen mellom stigningstallene når h nærmer seg 0? Hva tror dere skjer hvis P flyttes til et annet sted på grafen?
  </div>
  <p class="teacher-model-note">Tips: Du kan dra P og Q direkte i grafen, bruke skyveknappene eller fokusere på et punkt og bruke piltastene.</p>
</div>

<h3>Faglig oppsummering</h3>

For \(f(x)=x^2\), med \(P=(a,a^2)\) og \(Q=(a+h,(a+h)^2)\), er sekantens stigningstall

\[
\frac{(a+h)^2-a^2}{h}=2a+h.
\]

Når \(h\to 0\), går dette mot \(2a\), som er tangentens stigningstall \(f'(a)\).

</div>

<p class="dual-view-footnote">Pilot for delkapittel 3.1 · Innholdet er under utprøving.</p>
