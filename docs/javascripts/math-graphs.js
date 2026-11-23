/* Lærebokgrafer i ren SVG – individuelt utsnitt, tydelige asymptoter og redaksjonell lesbarhet. */
(() => {
  "use strict";

  const NS = "http://www.w3.org/2000/svg";
  const COLORS = {
    curve: "#2457a6",
    secondary: "#0f766e",
    point: "#173b67",
    accent: "#c56a18",
    axis: "#475569",
    guide: "#94a3b8",
    text: "#334155"
  };

  const graphs = {
    constant: {
      title: "Konstant funksjon f(x) = 2",
      description: "En vannrett graf med samme funksjonsverdi for alle x.",
      aspect: "square", x: [-4, 4], y: [-1, 4], grid: true, ticks: true, tickStepX: 2, tickStepY: 1,
      curves: [{ fn: () => 2, from: -4, to: 4, color: COLORS.curve, width: 2.4 }]
    },
    linear: {
      title: "Lineær funksjon f(x) = 0,8x + 1",
      description: "En rett linje med stigningstall 0,8 og skjæring med y-aksen i 1.",
      aspect: "wide", x: [-6, 6], y: [-2.2, 4.15], grid: true, ticks: true, tickStepX: 1, tickStepY: 1,
      curves: [{ fn: x => 0.8 * x + 1, from: -6, to: 6, color: COLORS.curve, width: 2.4 }]
    },
    quadraticBasic: {
      title: "Andregradsfunksjon f(x) = x² − 2x − 3",
      description: "Parabel med nullpunktene minus 1 og 3 og bunnpunktet (1, minus 4).",
      aspect: "square", x: [-3, 5], y: [-5, 5], grid: true, ticks: true, tickStepX: 1, tickStepY: 1,
      curves: [{ fn: x => x * x - 2 * x - 3, from: -2.2, to: 4.2, color: COLORS.curve, width: 2.4 }],
      points: [
        { x: -1, y: 0, label: "N₁(−1, 0)", dx: -72, dy: -12 },
        { x: 3, y: 0, label: "N₂(3, 0)", dx: 10, dy: -12 },
        { x: 1, y: -4, label: "B(1, −4)", dx: 10, dy: 20 }
      ]
    },
    power: {
      title: "Potensfunksjon f(x) = x³",
      description: "Tredjegrads potensfunksjon som er symmetrisk om origo.",
      aspect: "square", x: [-3, 3], y: [-4, 4], grid: false, ticks: true, tickStepX: 1, tickStepY: 1,
      curves: [{ fn: x => x * x * x, from: -1.58, to: 1.58, color: COLORS.curve, width: 2.4 }],
      points: [{ x: 0, y: 0, label: "O", dx: 10, dy: 18 }]
    },
    exponential: {
      title: "Eksponentialfunksjon f(x) = 2ˣ",
      description: "Voksende eksponentialfunksjon som passerer (0, 1) og nærmer seg x-aksen mot venstre.",
      aspect: "square", x: [-4, 4], y: [-1, 9], grid: true, ticks: true, tickStepX: 1, tickStepY: 2,
      curves: [{ fn: x => Math.pow(2, x), from: -4, to: 3.15, color: COLORS.curve, width: 2.4 }],
      lines: [{ fn: () => 0, color: COLORS.secondary, width: 1.7, dash: "7 5", label: "y = 0" }],
      points: [{ x: 0, y: 1, label: "(0, 1)", dx: 10, dy: -12 }]
    },
    logarithm: {
      title: "Logaritmefunksjon f(x) = log₂(x)",
      description: "Voksende logaritmefunksjon som passerer (1, 0) og har vertikal asymptote x = 0.",
      aspect: "square", x: [-1, 8], y: [-4, 4], grid: false, ticks: true, tickStepX: 1, tickStepY: 1,
      curves: [{ fn: x => Math.log(x) / Math.log(2), from: 0.04, to: 8, color: COLORS.curve, width: 2.4 }],
      asymptotes: [{ axis: "x", value: 0, label: "x = 0", color: COLORS.secondary }],
      points: [{ x: 1, y: 0, label: "(1, 0)", dx: 10, dy: -12 }]
    },
    rationalBasic: {
      title: "Rasjonal funksjon f(x) = 1 + 3/(x − 2)",
      description: "Rasjonal funksjon med vertikal asymptote x = 2 og horisontal asymptote y = 1.",
      aspect: "square", x: [-5, 7], y: [-5, 7], grid: false, ticks: true, tickStepX: 2, tickStepY: 2,
      curves: [
        { fn: x => 1 + 3 / (x - 2), from: -5, to: 1.45, color: COLORS.curve, width: 2.4 },
        { fn: x => 1 + 3 / (x - 2), from: 2.55, to: 7, color: COLORS.curve, width: 2.4 }
      ],
      asymptotes: [
        { axis: "x", value: 2, label: "x = 2", color: "#b45309" },
        { axis: "y", value: 1, label: "y = 1", color: "#0f766e" }
      ]
    },
    piecewise: {
      title: "Delt funksjon med åpent og fylt punkt",
      description: "Grafen viser f(x) = x + 2 for x mindre enn 1 og f(x) = x² for x større enn eller lik 1.",
      aspect: "square", x: [-2, 4], y: [-1, 8], grid: false, ticks: true,
      curves: [
        { fn: x => x + 2, from: -2, to: 1, color: COLORS.curve, width: 2.4 },
        { fn: x => x * x, from: 1, to: 2.7, color: COLORS.curve, width: 2.4 }
      ],
      points: [
        { x: 1, y: 3, open: true, label: "(1, 3)", dx: 10, dy: -12 },
        { x: 1, y: 1, label: "(1, 1)", dx: 10, dy: 18 }
      ]
    },
    rationalReconstruction: {
      title: "Rasjonal funksjon med to asymptoter og et kjent punkt",
      description: "Grafen har vertikal asymptote x = 2, horisontal asymptote y = 1 og går gjennom punktet (0, 0).",
      aspect: "wide", x: [-5, 8], y: [-3.5, 3.4], grid: false, ticks: true, tickStepX: 1, tickStepY: 1,
      curves: [
        { fn: x => 1 + 2 / (x - 2), from: -5, to: 1.42, color: COLORS.curve, width: 2.4 },
        { fn: x => 1 + 2 / (x - 2), from: 2.58, to: 8, color: COLORS.curve, width: 2.4 }
      ],
      asymptotes: [
        { axis: "x", value: 2, label: "x = 2", color: "#b45309" },
        { axis: "y", value: 1, label: "y = 1", color: "#0f766e" }
      ],
      points: [{ x: 0, y: 0 }]
    },
    continuous: {
      title: "Kontinuerlig funksjon",
      description: "Grafen er sammenhengende gjennom punktet a, og funksjonsverdien er lik grenseverdien.",
      aspect: "square", x: [-3, 4], y: [-2, 5], grid: false, ticks: true,
      curves: [{ fn: x => x + 1, from: -3, to: 4, color: COLORS.curve, width: 2.4 }],
      points: [{ x: 1, y: 2, label: "f(a) = L", dx: -78, dy: 26 }]
    },
    jump: {
      title: "Sprangdiskontinuitet",
      description: "Venstre og høyre grenseverdi er ulike. Det åpne punktet viser venstre grenseverdi, og det fylte punktet viser funksjonsverdien.",
      aspect: "square", x: [-3, 4], y: [-1, 5], grid: false, ticks: true,
      curves: [
        { fn: () => 3, from: -3, to: 1, color: COLORS.curve, width: 2.4 },
        { fn: () => 1, from: 1, to: 4, color: COLORS.curve, width: 2.4 }
      ],
      points: [
        { x: 1, y: 3, open: true },
        { x: 1, y: 1 }
      ]
    },
    verticalAsymptote: {
      title: "Vertikal asymptote x = 2",
      description: "Funksjonen går mot minus uendelig fra venstre og pluss uendelig fra høyre når x nærmer seg 2.",
      aspect: "square", x: [-5, 7], y: [-6, 6], grid: false, ticks: true, tickStepX: 1, tickStepY: 2,
      curves: [
        { fn: x => 1 / (x - 2), from: -5, to: 1.82, color: COLORS.curve, width: 2.4 },
        { fn: x => 1 / (x - 2), from: 2.18, to: 7, color: COLORS.curve, width: 2.4 }
      ],
      asymptotes: [{ axis: "x", value: 2, label: "x = 2", color: "#b45309" }]
    },
    horizontalAsymptote: {
      title: "Horisontal asymptote y = 1",
      description: "Grafen til f(x) = 1 + 2/(x² + 1) nærmer seg y = 1 både når x går mot pluss og minus uendelig.",
      aspect: "square", x: [-8, 8], y: [0, 4], grid: false, ticks: true, tickStepX: 2, tickStepY: 1,
      curves: [{ fn: x => 1 + 2 / (x * x + 1), from: -8, to: 8, color: COLORS.curve, width: 2.4 }],
      asymptotes: [{ axis: "y", value: 1, label: "y = 1", color: "#0f766e" }]
    },
    slantAsymptoteChapter2: {
      title: "Skrå asymptote y = x + 1",
      description: "Grafen til f(x) = (x² + 1)/(x − 1) nærmer seg den skrå asymptoten y = x + 1 og har vertikal asymptote x = 1.",
      aspect: "square", x: [-8, 8], y: [-9, 10], grid: false, ticks: true, tickStepX: 2, tickStepY: 2,
      curves: [
        { fn: x => (x * x + 1) / (x - 1), from: -8, to: 0.85, color: COLORS.curve, width: 2.3 },
        { fn: x => (x * x + 1) / (x - 1), from: 1.15, to: 8, color: COLORS.curve, width: 2.3 }
      ],
      lines: [{ fn: x => x + 1, color: COLORS.accent, width: 1.7, dash: "7 5" }],
      asymptotes: [{ axis: "x", value: 1, label: "x = 1", color: "#b45309" }],
      notes: [{ x: -7, y: -5.4, text: "Skrå asymptote: y = x + 1", color: COLORS.accent }]
    },
    parabola: {
      title: "Parabelen f(x) = x²",
      description: "En ren parabel med markerte punkter. Grafen har bunnpunkt i origo og er symmetrisk om y-aksen.",
      aspect: "square", x: [-3, 3], y: [-0.5, 4.5], grid: false, ticks: false,
      curves: [{ fn: x => x * x, from: -2, to: 2, color: COLORS.curve, width: 2.6 }],
      points: [
        { x: -2, y: 4 }, { x: -1, y: 1 }, { x: 0, y: 0, label: "O", dx: 10, dy: 20 },
        { x: 1, y: 1 }, { x: 2, y: 4, label: "(2, 4)", dx: 12, dy: -10 }
      ]
    },
    asymptotes: {
      title: "Rasjonal funksjon med asymptoter",
      description: "Grafen til f(x) = 1 + 2/(x − 1). Den vertikale asymptoten er x = 1 og den horisontale asymptoten er y = 1.",
      aspect: "square", x: [-8, 10], y: [-5, 7], grid: false, ticks: true, tickStepX: 2,
      curves: [
        { fn: x => 1 + 2 / (x - 1), from: -8, to: 0.68, color: COLORS.curve, width: 2.5, markerEnd: true },
        { fn: x => 1 + 2 / (x - 1), from: 1.32, to: 10, color: COLORS.curve, width: 2.5, markerStart: true }
      ],
      asymptotes: [
        { axis: "x", value: 1, label: "x = 1", color: "#b45309" },
        { axis: "y", value: 1, label: "y = 1", color: "#0f766e" }
      ],
      points: [
        { x: -1, y: 0, label: "(-1, 0)", dx: -58, dy: -12 },
        { x: 0, y: -1, label: "(0, −1)", dx: 10, dy: 18 },
        { x: 2, y: 3, label: "(2, 3)", dx: 10, dy: -12 },
        { x: 3, y: 2 }
      ]
    },
    slantAsymptoteGrid: {
      title: "Skrå asymptote – med rutenett",
      description: "Grafen til f(x) = x + 2/x nærmer seg den skrå asymptoten y = x når x går mot pluss eller minus uendelig. Rutenettet gjør avstanden synlig.",
      aspect: "square", x: [-8, 8], y: [-8, 8], grid: true, ticks: true, tickStepX: 2, tickStepY: 2,
      curves: [
        { fn: x => x + 2 / x, from: -8, to: -0.2, color: COLORS.curve, width: 2.3, markerStart: true },
        { fn: x => x + 2 / x, from: 0.2, to: 8, color: COLORS.curve, width: 2.3, markerEnd: true }
      ],
      lines: [{ fn: x => x, color: COLORS.accent, width: 1.7, dash: "7 5" }],
      notes: [{ x: -7, y: 6.2, text: "Skrå asymptote: y = x", color: COLORS.accent }]
    },
    slantAsymptotePlain: {
      title: "Skrå asymptote – uten rutenett",
      description: "Grafen til f(x) = x + 2/x nærmer seg den skrå asymptoten y = x når x går mot pluss eller minus uendelig. Uten rutenett kommer kurvene tydeligere fram.",
      aspect: "square", x: [-8, 8], y: [-8, 8], grid: false, ticks: true, tickStepX: 2, tickStepY: 2,
      curves: [
        { fn: x => x + 2 / x, from: -8, to: -0.2, color: COLORS.curve, width: 2.3, markerStart: true },
        { fn: x => x + 2 / x, from: 0.2, to: 8, color: COLORS.curve, width: 2.3, markerEnd: true }
      ],
      lines: [{ fn: x => x, color: COLORS.accent, width: 1.7, dash: "7 5" }],
      notes: [{ x: -7, y: 6.2, text: "Skrå asymptote: y = x", color: COLORS.accent }]
    },
    limit: {
      title: "Like ensidige grenser, men en annen funksjonsverdi",
      description: "Grafen følger y = x + 1 på begge sider av x = 1. Det åpne punktet viser grenseverdien 2, mens det fylte punktet viser f(1) = 4.",
      x: [-2.5, 4.2], y: [-1, 5.5], grid: false, ticks: true,
      curves: [
        { fn: x => x + 1, from: -2.5, to: 0.985, color: COLORS.curve, width: 2.4 },
        { fn: x => x + 1, from: 1.015, to: 4.2, color: COLORS.curve, width: 3.5 }
      ],
      guides: [{ x1: 1, y1: 0, x2: 1, y2: 2, dash: "4 5" }],
      points: [
        { x: 1, y: 2, open: true, label: "Grenseverdi = 2", dx: 18, dy: 28 },
        { x: 1, y: 4, label: "f(1) = 4", dx: -72, dy: -12 }
      ],
      notes: [
        { x: -1.9, y: 4.7, text: "Venstregrense = 2", color: COLORS.secondary },
        { x: 2.1, y: 4.7, text: "Høyregrense = 2", color: COLORS.secondary }
      ]
    },
    vectors: {
      title: "Vektorer i koordinatsystemet",
      description: "Koordinatrutenett med vektorene a fra origo til 3, 2 og b fra 1, minus 2 til 4, 1.",
      x: [-5, 6], y: [-4, 5], grid: true, gridStepX: 1, gridStepY: 1, ticks: true,
      vectors: [
        { x1: 0, y1: 0, x2: 3, y2: 2, label: "a = (3, 2)", color: COLORS.curve, dx: 12, dy: -12 },
        { x1: 1, y1: -2, x2: 4, y2: 1, label: "b = (3, 3)", color: COLORS.secondary, dx: 12, dy: 20 }
      ],
    },
    points: {
      title: "Punkter og koordinater",
      description: "Punktene A, B og C er markert i et koordinatsystem med rutenett og hjelpelinjer.",
      x: [-4, 5], y: [-3, 5], grid: true, ticks: true,
      guides: [
        { x1: 2, y1: 0, x2: 2, y2: 3, dash: "4 4" },
        { x1: 0, y1: 3, x2: 2, y2: 3, dash: "4 4" },
        { x1: -2, y1: 0, x2: -2, y2: -1, dash: "4 4" },
        { x1: 0, y1: -1, x2: -2, y2: -1, dash: "4 4" }
      ],
      points: [
        { x: 2, y: 3, label: "A(2, 3)", dx: 12, dy: -12 },
        { x: -2, y: -1, label: "B(−2, −1)", dx: 12, dy: 20 },
        { x: 3, y: -2, label: "C(3, −2)", dx: 12, dy: 20 }
      ]
    },
    triangle: {
      title: "Trekant",
      description: "En trekant med markerte hjørner og sidelengder.",
      illustration: {
        shapes: [
          { d: "M 110 285 L 410 285 L 245 65 Z", fill: "#e8f0fb", stroke: "#2457a6", width: 4 },
          { d: "M 245 65 L 245 285", fill: "none", stroke: "#94a3b8", width: 1.6, dash: "6 5" }
        ],
        labels: [
          { x: 95, y: 305, text: "A" }, { x: 415, y: 305, text: "B" },
          { x: 245, y: 48, text: "C", anchor: "middle" },
          { x: 275, y: 180, text: "h", color: "#64748b" },
          { x: 245, y: 330, text: "Grunnlinje", anchor: "middle", small: true }
        ]
      }
    },
    circle: {
      title: "Sirkel med radius og diameter",
      description: "En sirkel med sentrum, radius og diameter tydelig markert.",
      illustration: {
        shapes: [
          { d: "M 260 180 m -112 0 a 112 112 0 1 0 224 0 a 112 112 0 1 0 -224 0", fill: "#edf5f7", stroke: "#0f766e", width: 4 },
          { d: "M 148 180 L 372 180", fill: "none", stroke: "#2457a6", width: 3 },
          { d: "M 260 180 L 339 101", fill: "none", stroke: "#c56a18", width: 3 }
        ],
        labels: [
          { x: 260, y: 198, text: "O", anchor: "middle" },
          { x: 300, y: 130, text: "r", color: "#a65310" },
          { x: 260, y: 165, text: "d", color: "#2457a6", anchor: "middle" }
        ]
      }
    },
    rectangle: {
      title: "Rektangel",
      description: "Et rektangel med rette vinkler og markerte sidelengder.",
      illustration: {
        shapes: [
          { d: "M 105 85 L 415 85 L 415 275 L 105 275 Z", fill: "#f0f5ff", stroke: "#2457a6", width: 4 },
          { d: "M 105 105 L 125 105 L 125 85 M 395 85 L 395 105 L 415 105 M 415 255 L 395 255 L 395 275 M 125 275 L 125 255 L 105 255", fill: "none", stroke: "#0f766e", width: 2.5 }
        ],
        labels: [
          { x: 260, y: 65, text: "a", anchor: "middle" },
          { x: 435, y: 185, text: "b" },
          { x: 260, y: 315, text: "Areal = a · b", anchor: "middle", small: true }
        ]
      }
    },
    cone: {
      title: "Kjegle",
      description: "En romlig kjegle med grunnflate, sidekant, høyde og skjult bakre del av grunnflaten.",
      illustration: {
        shapes: [
          { d: "M 260 48 L 105 278 M 260 48 L 415 278", fill: "none", stroke: "#2457a6", width: 4 },
          { d: "M 105 278 A 155 42 0 0 0 415 278", fill: "none", stroke: "#2457a6", width: 3 },
          { d: "M 105 278 A 155 42 0 0 1 415 278", fill: "none", stroke: "#94a3b8", width: 2, dash: "6 5" },
          { d: "M 260 48 L 260 278", fill: "none", stroke: "#0f766e", width: 2.5, dash: "7 5" },
          { d: "M 260 278 L 415 278", fill: "none", stroke: "#c56a18", width: 3 }
        ],
        labels: [
          { x: 278, y: 170, text: "h", color: "#0f766e" },
          { x: 340, y: 268, text: "r", color: "#a65310" },
          { x: 260, y: 28, text: "Toppunkt", anchor: "middle", small: true }
        ]
      }
    },
    pyramid: {
      title: "Firkantet pyramide",
      description: "En firkantet pyramide i perspektiv med høyde, grunnflate og skjult bakre kant.",
      illustration: {
        shapes: [
          { d: "M 260 45 L 95 245 L 260 315 L 425 245 Z", fill: "#edf3fb", stroke: "#2457a6", width: 3.5 },
          { d: "M 260 45 L 95 245 M 260 45 L 425 245 M 260 45 L 260 280", fill: "none", stroke: "#2457a6", width: 3.5 },
          { d: "M 95 245 L 260 280 L 425 245", fill: "none", stroke: "#94a3b8", width: 2, dash: "6 5" },
          { d: "M 260 45 L 260 280", fill: "none", stroke: "#0f766e", width: 2.5, dash: "7 5" }
        ],
        labels: [
          { x: 278, y: 165, text: "h", color: "#0f766e" },
          { x: 260, y: 28, text: "Toppunkt", anchor: "middle", small: true },
          { x: 260, y: 340, text: "Kvadratisk grunnflate", anchor: "middle", small: true }
        ]
      }
    },
    tangent: {
      title: "Sekant og tangent til f(x) = x²",
      description: "Tangenten i punktet (1, 1) har stigningstall 2. Sekanten gjennom (1, 1) og (2, 4) har stigningstall 3.",
      x: [-1.1, 3.2], y: [-1.2, 6.2], grid: false, ticks: true,
      curves: [{ fn: x => x * x, from: -0.95, to: 2.5, color: COLORS.curve, width: 2.4 }],
      lines: [
        { fn: x => 2 * x - 1, color: COLORS.secondary, width: 2.1, label: "Tangent" },
        { fn: x => 3 * x - 2, color: COLORS.accent, width: 1.9, dash: "7 5", label: "Sekant" }
      ],
      points: [
        { x: 1, y: 1, label: "P(1, 1)", dx: 12, dy: 20 },
        { x: 2, y: 4, label: "Q(2, 4)", dx: 12, dy: -10 }
      ]
    }
  };

  function svgElement(name, attrs = {}, textContent = null) {
    const node = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    if (textContent !== null) node.textContent = textContent;
    return node;
  }

  function render(container, graph, index) {
    if (graph.illustration) {
      const svg = svgElement("svg", {
        viewBox: "0 0 520 380", class: "math-graph-svg math-graph-svg--illustration",
        role: "img", "aria-labelledby": `math-graph-title-${index} math-graph-desc-${index}`,
        preserveAspectRatio: "xMidYMid meet"
      });
      svg.append(
        svgElement("title", { id: `math-graph-title-${index}` }, graph.title),
        svgElement("desc", { id: `math-graph-desc-${index}` }, graph.description)
      );
      (graph.illustration.shapes || []).forEach(shape => {
        svg.append(svgElement("path", {
          d: shape.d, fill: shape.fill || "none", stroke: shape.stroke || COLORS.curve,
          "stroke-width": shape.width || 2.2, "stroke-linejoin": "round",
          "stroke-linecap": "round", ...(shape.dash ? { "stroke-dasharray": shape.dash } : {})
        }));
      });
      (graph.illustration.labels || []).forEach(label => {
        svg.append(svgElement("text", {
          x: label.x, y: label.y, fill: label.color || COLORS.text,
          "font-size": label.small ? 11 : 14, "font-weight": 650,
          "text-anchor": label.anchor || "start"
        }, label.text));
      });
      container.replaceChildren(svg);
      container.dataset.rendered = "true";
      return;
    }
    const width = graph.aspect === "square" ? 520 : 680;
    const height = graph.aspect === "square" ? 480 : 390;
    const pad = { left: 62, right: 28, top: 30, bottom: 48 };
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;
    const [xmin, xmax] = graph.x, [ymin, ymax] = graph.y;
    const sx = x => pad.left + (x - xmin) / (xmax - xmin) * plotW;
    const sy = y => pad.top + (ymax - y) / (ymax - ymin) * plotH;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const svg = svgElement("svg", {
      viewBox: `0 0 ${width} ${height}`, class: graph.aspect === "square" ? "math-graph-svg math-graph-svg--square" : "math-graph-svg", role: "img",
      "aria-labelledby": `math-graph-title-${index} math-graph-desc-${index}`,
      preserveAspectRatio: "xMidYMid meet"
    });
    svg.append(
      svgElement("title", { id: `math-graph-title-${index}` }, graph.title),
      svgElement("desc", { id: `math-graph-desc-${index}` }, graph.description)
    );

    const defs = svgElement("defs");
    const arrow = svgElement("marker", { id: `math-graph-arrow-${index}`, markerWidth: 7, markerHeight: 7, refX: 5.5, refY: 3, orient: "auto-start-reverse", markerUnits: "userSpaceOnUse" });
    arrow.append(svgElement("path", { d: "M 0 0 L 6 3 L 0 6 z", fill: COLORS.curve }));
    defs.append(arrow);
    const clipId = `math-graph-clip-${index}`;
    const clip = svgElement("clipPath", { id: clipId });
    clip.append(svgElement("rect", { x: pad.left, y: pad.top, width: plotW, height: plotH }));
    defs.append(clip);
    svg.append(defs);

    const plot = svgElement("g", { "clip-path": `url(#${clipId})` });
    if (graph.grid) {
      const stepX = graph.gridStepX || 1, stepY = graph.gridStepY || 1;
      for (let x = Math.ceil(xmin / stepX) * stepX; x <= xmax; x += stepX) {
        plot.append(svgElement("line", { x1: sx(x), y1: pad.top, x2: sx(x), y2: height - pad.bottom, stroke: "#e8edf4", "stroke-width": 1 }));
      }
      for (let y = Math.ceil(ymin / stepY) * stepY; y <= ymax; y += stepY) {
        plot.append(svgElement("line", { x1: pad.left, y1: sy(y), x2: width - pad.right, y2: sy(y), stroke: "#e8edf4", "stroke-width": 1 }));
      }
    }

    (graph.asymptotes || []).forEach(a => {
      const attrs = a.axis === "x"
        ? { x1: sx(a.value), y1: pad.top, x2: sx(a.value), y2: height - pad.bottom }
        : { x1: pad.left, y1: sy(a.value), x2: width - pad.right, y2: sy(a.value) };
      plot.append(svgElement("line", { ...attrs, stroke: a.color || COLORS.accent, "stroke-width": 1.5, "stroke-dasharray": "6 5", "stroke-linecap": "round", opacity: 0.95 }));
    });

    (graph.guides || []).forEach(g => {
      plot.append(svgElement("line", {
        x1: sx(g.x1), y1: sy(g.y1), x2: sx(g.x2), y2: sy(g.y2),
        stroke: COLORS.guide, "stroke-width": 1.1, "stroke-dasharray": g.dash || "4 5"
      }));
    });

    (graph.curves || []).forEach(curve => {
      const samples = 320;
      let d = "";
      for (let i = 0; i <= samples; i++) {
        const x = curve.from + (curve.to - curve.from) * i / samples;
        const y = curve.fn(x);
        const px = sx(x), py = sy(y);
        d += (i === 0 ? "M" : "L") + px.toFixed(2) + " " + py.toFixed(2) + " ";
      }
      plot.append(svgElement("path", {
        d, fill: "none", stroke: curve.color || COLORS.curve,
        "stroke-width": curve.width || 3.5, "stroke-linecap": "round", "stroke-linejoin": "round",
        ...(curve.markerStart ? { "marker-start": `url(#math-graph-arrow-${index})` } : {}),
        ...(curve.markerEnd ? { "marker-end": `url(#math-graph-arrow-${index})` } : {})
      }));
    });

    (graph.lines || []).forEach(line => {
      const x1 = xmin, x2 = xmax;
      const y1 = line.fn(x1), y2 = line.fn(x2);
      plot.append(svgElement("line", {
        x1: sx(x1), y1: sy(y1), x2: sx(x2), y2: sy(y2),
        stroke: line.color || COLORS.secondary, "stroke-width": line.width || 2.5,
        "stroke-dasharray": line.dash || "none"
      }));
    });

    svg.append(plot);

    (graph.vectors || []).forEach((v, vectorIndex) => {
      const markerId = `math-vector-arrow-${index}-${vectorIndex}`;
      const marker = svgElement("marker", {
        id: markerId, markerWidth: 16, markerHeight: 16, refX: 14.5, refY: 8,
        orient: "auto", markerUnits: "userSpaceOnUse", viewBox: "0 0 16 16"
      });
      marker.append(svgElement("path", {
        d: "M 1 1 L 15 8 L 1 15 L 4.5 8 z",
        fill: v.color || COLORS.curve,
        stroke: "#ffffff",
        "stroke-width": 0.9,
        "stroke-linejoin": "round"
      }));
      defs.append(marker);
      plot.append(svgElement("line", {
        x1: sx(v.x1), y1: sy(v.y1), x2: sx(v.x2), y2: sy(v.y2),
        stroke: v.color || COLORS.curve, "stroke-width": 2.5,
        "stroke-linecap": "round", "marker-end": `url(#${markerId})`
      }));
      if (v.label) svg.append(svgElement("text", {
        x: sx(v.x2) + (v.dx || 10), y: sy(v.y2) + (v.dy || -10),
        fill: v.color || COLORS.curve, "font-size": 12, "font-weight": 600,
        "paint-order": "stroke", stroke: "#ffffff", "stroke-width": 5, "stroke-linejoin": "round"
      }, v.label));
    });

    const xAxisY = clamp(sy(0), pad.top, height - pad.bottom);
    const yAxisX = clamp(sx(0), pad.left, width - pad.right);
    svg.append(
      svgElement("line", { x1: pad.left, y1: xAxisY, x2: width - pad.right + 8, y2: xAxisY, stroke: COLORS.axis, "stroke-width": 1.15 }),
      svgElement("path", { d: `M ${width - pad.right + 8} ${xAxisY} l -7 -4 v 8 z`, fill: COLORS.axis }),
      svgElement("line", { x1: yAxisX, y1: height - pad.bottom, x2: yAxisX, y2: pad.top - 8, stroke: COLORS.axis, "stroke-width": 1.5 }),
      svgElement("path", { d: `M ${yAxisX} ${pad.top - 8} l -4 7 h 8 z`, fill: COLORS.axis }),
      svgElement("text", { x: width - pad.right + 12, y: xAxisY + 5, fill: COLORS.text, "font-size": 12, "font-weight": 500 }, "x"),
      svgElement("text", { x: yAxisX + 9, y: pad.top - 13, fill: COLORS.text, "font-size": 12, "font-weight": 500 }, "y")
    );

    if (graph.ticks) {
      const tickStepX = graph.tickStepX || 1, tickStepY = graph.tickStepY || 1;
      for (let x = Math.ceil(xmin / tickStepX) * tickStepX; x <= xmax; x += tickStepX) {
        if (Math.abs(x) < 1e-8) continue;
        const px = sx(x);
        svg.append(svgElement("line", { x1: px, y1: xAxisY - 4, x2: px, y2: xAxisY + 4, stroke: COLORS.axis, "stroke-width": 1 }));
        svg.append(svgElement("text", { x: px, y: xAxisY + 19, fill: COLORS.text, "font-size": 11, "font-weight": 500, "text-anchor": "middle" }, String(x)));
      }
      for (let y = Math.ceil(ymin / tickStepY) * tickStepY; y <= ymax; y += tickStepY) {
        if (Math.abs(y) < 1e-8) continue;
        const py = sy(y);
        svg.append(svgElement("line", { x1: yAxisX - 4, y1: py, x2: yAxisX + 4, y2: py, stroke: COLORS.axis, "stroke-width": 1 }));
        svg.append(svgElement("text", { x: yAxisX - 10, y: py + 4, fill: COLORS.text, "font-size": 13, "font-weight": 500, "text-anchor": "end" }, String(y)));
      }
      svg.append(svgElement("text", { x: yAxisX - 10, y: xAxisY + 17, fill: COLORS.text, "font-size": 13, "font-weight": 500, "text-anchor": "end" }, "0"));
    }

    (graph.asymptotes || []).forEach(a => {
      const x = a.axis === "x" ? sx(a.value) + 7 : width - pad.right - 4;
      const y = a.axis === "x" ? pad.top + 16 : sy(a.value) - 8;
      svg.append(svgElement("text", { x, y, fill: a.color || COLORS.accent, "font-size": 13, "font-weight": 600, "paint-order": "stroke", stroke: "#ffffff", "stroke-width": 5, "stroke-linejoin": "round" }, a.label));
    });

    (graph.points || []).forEach(p => {
      const cx = sx(p.x), cy = sy(p.y);
      // Fylte punkter legges direkte oppå kurven uten å lage et avbrudd.
      // Åpne punkter beholder hvitt sentrum for å vise at punktet ikke er med.
      svg.append(svgElement("circle", {
        cx, cy, r: p.open ? 5 : 3.6,
        fill: p.open ? "#ffffff" : COLORS.point,
        stroke: p.open ? COLORS.point : "none",
        "stroke-width": p.open ? 2 : 0
      }));
      if (p.label) svg.append(svgElement("text", {
        x: cx + (p.dx || 10), y: cy + (p.dy || -10),
        fill: COLORS.text, "font-size": 14, "font-weight": 600
      }, p.label));
    });

    (graph.notes || []).forEach(note => {
      svg.append(svgElement("text", {
        x: sx(note.x), y: sy(note.y), fill: note.color || COLORS.text,
        "font-size": 12, "font-weight": 600
      }, note.text));
    });

    container.replaceChildren(svg);
    container.dataset.rendered = "true";
  }

  function initialize() {
    document.querySelectorAll("[data-math-graph]").forEach((container, index) => {
      const graph = graphs[container.dataset.mathGraph];
      if (!graph) {
        container.textContent = "Grafen kunne ikke lastes.";
        return;
      }
      render(container, graph, index);
    });
    document.documentElement.dataset.mathGraphsReady = "true";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
