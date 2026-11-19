/* Lærebokgrafer i ren SVG – uten rutenett som standard og uten eksterne biblioteker. */
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
    parabola: {
      title: "Parabelen f(x) = x²",
      description: "En ren parabel med markerte punkter. Grafen har bunnpunkt i origo og er symmetrisk om y-aksen.",
      aspect: "square", x: [-2.5, 2.5], y: [-0.5, 4.5], grid: false, ticks: false,
      curves: [{ fn: x => x * x, from: -2.05, to: 2.05, color: COLORS.curve, width: 4.5 }],
      points: [
        { x: -2, y: 4 }, { x: -1, y: 1 }, { x: 0, y: 0, label: "O", dx: 10, dy: 20 },
        { x: 1, y: 1 }, { x: 2, y: 4, label: "(2, 4)", dx: 12, dy: -10 }
      ]
    },
    asymptotes: {
      title: "Rasjonal funksjon med asymptoter",
      description: "Grafen til f(x) = 1 + 2/(x − 1). Den vertikale asymptoten er x = 1 og den horisontale asymptoten er y = 1.",
      x: [-5, 7], y: [-6, 8], grid: false, ticks: true,
      curves: [
        { fn: x => 1 + 2 / (x - 1), from: -5, to: 0.65, color: COLORS.curve, width: 4, markerEnd: true },
        { fn: x => 1 + 2 / (x - 1), from: 1.35, to: 7, color: COLORS.curve, width: 4, markerStart: true }
      ],
      asymptotes: [
        { axis: "x", value: 1, label: "x = 1", color: "#d97706" },
        { axis: "y", value: 1, label: "y = 1", color: "#0f766e" }
      ],
      points: [
        { x: -1, y: 0, label: "(-1, 0)", dx: -58, dy: -12 },
        { x: 0, y: -1, label: "(0, −1)", dx: 10, dy: 18 },
        { x: 2, y: 3, label: "(2, 3)", dx: 10, dy: -12 },
        { x: 3, y: 2 }
      ]
    },
    limit: {
      title: "Like ensidige grenser, men en annen funksjonsverdi",
      description: "Grafen følger y = x + 1 på begge sider av x = 1. Det åpne punktet viser grenseverdien 2, mens det fylte punktet viser f(1) = 4.",
      x: [-2.5, 4.2], y: [-1, 5.5], grid: false, ticks: true,
      curves: [
        { fn: x => x + 1, from: -2.5, to: 0.985, color: COLORS.curve, width: 3.5 },
        { fn: x => x + 1, from: 1.015, to: 4.2, color: COLORS.curve, width: 3.5 }
      ],
      guides: [{ x1: 1, y1: 0, x2: 1, y2: 2, dash: "4 5" }],
      points: [
        { x: 1, y: 2, open: true, label: "Grenseverdi = 2", dx: 14, dy: -12 },
        { x: 1, y: 4, label: "f(1) = 4", dx: 14, dy: -8 }
      ],
      notes: [
        { x: -1.9, y: 4.7, text: "Venstregrense = 2", color: COLORS.secondary },
        { x: 2.1, y: 4.7, text: "Høyregrense = 2", color: COLORS.secondary }
      ]
    },
    tangent: {
      title: "Sekant og tangent til f(x) = x²",
      description: "Tangenten i punktet (1, 1) har stigningstall 2. Sekanten gjennom (1, 1) og (2, 4) har stigningstall 3.",
      x: [-1.1, 3.2], y: [-1.2, 6.2], grid: false, ticks: true,
      curves: [{ fn: x => x * x, from: -0.95, to: 2.5, color: COLORS.curve, width: 3.5 }],
      lines: [
        { fn: x => 2 * x - 1, color: COLORS.secondary, width: 2.8, label: "Tangent" },
        { fn: x => 3 * x - 2, color: COLORS.accent, width: 2.4, dash: "7 5", label: "Sekant" }
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
    const arrow = svgElement("marker", { id: `math-graph-arrow-${index}`, markerWidth: 8, markerHeight: 8, refX: 6, refY: 3, orient: "auto-start-reverse", markerUnits: "strokeWidth" });
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
      plot.append(svgElement("line", { ...attrs, stroke: a.color || COLORS.accent, "stroke-width": 1.5, "stroke-dasharray": "9 7", "stroke-linecap": "round", opacity: 0.85 }));
    });

    (graph.guides || []).forEach(g => {
      plot.append(svgElement("line", {
        x1: sx(g.x1), y1: sy(g.y1), x2: sx(g.x2), y2: sy(g.y2),
        stroke: COLORS.guide, "stroke-width": 1.5, "stroke-dasharray": g.dash || "4 5"
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

    const xAxisY = clamp(sy(0), pad.top, height - pad.bottom);
    const yAxisX = clamp(sx(0), pad.left, width - pad.right);
    svg.append(
      svgElement("line", { x1: pad.left, y1: xAxisY, x2: width - pad.right + 8, y2: xAxisY, stroke: COLORS.axis, "stroke-width": 1.5 }),
      svgElement("path", { d: `M ${width - pad.right + 8} ${xAxisY} l -7 -4 v 8 z`, fill: COLORS.axis }),
      svgElement("line", { x1: yAxisX, y1: height - pad.bottom, x2: yAxisX, y2: pad.top - 8, stroke: COLORS.axis, "stroke-width": 1.5 }),
      svgElement("path", { d: `M ${yAxisX} ${pad.top - 8} l -4 7 h 8 z`, fill: COLORS.axis }),
      svgElement("text", { x: width - pad.right + 12, y: xAxisY + 5, fill: COLORS.text, "font-size": 15 }, "x"),
      svgElement("text", { x: yAxisX + 9, y: pad.top - 13, fill: COLORS.text, "font-size": 15 }, "y")
    );

    if (graph.ticks) {
      const tickStepX = graph.tickStepX || 1, tickStepY = graph.tickStepY || 1;
      for (let x = Math.ceil(xmin / tickStepX) * tickStepX; x <= xmax; x += tickStepX) {
        if (Math.abs(x) < 1e-8) continue;
        const px = sx(x);
        svg.append(svgElement("line", { x1: px, y1: xAxisY - 4, x2: px, y2: xAxisY + 4, stroke: COLORS.axis, "stroke-width": 1 }));
        svg.append(svgElement("text", { x: px, y: xAxisY + 19, fill: COLORS.text, "font-size": 11, "text-anchor": "middle" }, String(x)));
      }
      for (let y = Math.ceil(ymin / tickStepY) * tickStepY; y <= ymax; y += tickStepY) {
        if (Math.abs(y) < 1e-8) continue;
        const py = sy(y);
        svg.append(svgElement("line", { x1: yAxisX - 4, y1: py, x2: yAxisX + 4, y2: py, stroke: COLORS.axis, "stroke-width": 1 }));
        svg.append(svgElement("text", { x: yAxisX - 10, y: py + 4, fill: COLORS.text, "font-size": 11, "text-anchor": "end" }, String(y)));
      }
      svg.append(svgElement("text", { x: yAxisX - 10, y: xAxisY + 17, fill: COLORS.text, "font-size": 11, "text-anchor": "end" }, "0"));
    }

    (graph.asymptotes || []).forEach(a => {
      const x = a.axis === "x" ? sx(a.value) + 7 : width - pad.right - 4;
      const y = a.axis === "x" ? pad.top + 16 : sy(a.value) - 8;
      svg.append(svgElement("text", { x, y, fill: a.color || COLORS.accent, "font-size": 13, "font-weight": 600 }, a.label));
    });

    (graph.points || []).forEach(p => {
      const cx = sx(p.x), cy = sy(p.y);
      svg.append(svgElement("circle", {
        cx, cy, r: p.open ? 6 : 4.8,
        fill: p.open ? "#ffffff" : COLORS.point,
        stroke: p.open ? COLORS.point : "#ffffff",
        "stroke-width": p.open ? 2.5 : 1.4
      }));
      if (p.label) svg.append(svgElement("text", {
        x: cx + (p.dx || 10), y: cy + (p.dy || -10),
        fill: COLORS.text, "font-size": 12, "font-weight": 500
      }, p.label));
    });

    (graph.notes || []).forEach(note => {
      svg.append(svgElement("text", {
        x: sx(note.x), y: sy(note.y), fill: note.color || COLORS.text,
        "font-size": 13, "font-weight": 600
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
