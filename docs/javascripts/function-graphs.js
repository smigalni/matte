/* Felles, responsiv grafmotor for funksjonsillustrasjoner i R1. */
(() => {
  "use strict";

  const COLORS = {
    curve: "#2457a6",
    secondary: "#0f8b8d",
    accent: "#d97706",
    axis: "#64748b",
    grid: "#e8edf4",
    text: "#334155"
  };

  const definitions = {
    quadratic: {
      title: "Andregradsfunksjon med nullpunkter og bunnpunkt",
      bounds: [-3.5, 5.5, 3.5, -5.5],
      draw(board) {
        board.create("functiongraph", [x => x * x - 4, -3.1, 3.1], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 300
        });
        [[-2, 0, "−2"], [2, 0, "2"]].forEach(([x, y, label]) => {
          board.create("point", [x, y], {
            name: "", size: 3.5, fixed: true, withLabel: false,
            fillColor: COLORS.secondary, strokeColor: COLORS.secondary
          });
          board.create("text", [x + 0.12, 0.55, label], {
            fontSize: 12, fixed: true, strokeColor: COLORS.text
          });
        });
        board.create("point", [0, -4], {
          name: "", size: 4, fixed: true, withLabel: false,
          fillColor: COLORS.accent, strokeColor: COLORS.accent
        });
        board.create("text", [0.18, -4.55, "B(0, −4)"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.text
        });
      }
    },
    cubic: {
      title: "Tredjegradsfunksjon med toppunkt og bunnpunkt",
      bounds: [-2.8, 4.2, 2.8, -4.2],
      draw(board) {
        board.create("functiongraph", [x => x * x * x - 3 * x, -2.1, 2.1], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 300
        });
        [[-1, 2, "T(−1, 2)"], [1, -2, "B(1, −2)"]].forEach(([x, y, label]) => {
          board.create("point", [x, y], {
            name: "", size: 4, fixed: true, withLabel: false,
            fillColor: COLORS.accent, strokeColor: COLORS.accent
          });
          board.create("text", [x + (x < 0 ? -1.15 : 0.15), y + 0.45, label], {
            fontSize: 12, fixed: true, strokeColor: COLORS.text
          });
        });
      }
    },
    rational: {
      title: "Rasjonal funksjon med vertikal og horisontal asymptote",
      bounds: [-5, 5, 6, -4],
      draw(board) {
        const f = x => 1 + 3 / (x - 2);
        board.create("functiongraph", [f, -5, 1.78], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 240
        });
        board.create("functiongraph", [f, 2.22, 6], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 240
        });
        board.create("line", [[2, -4], [2, 5]], {
          straightFirst: true, straightLast: true, strokeColor: COLORS.accent,
          strokeWidth: 2, dash: 2, fixed: true
        });
        board.create("line", [[-5, 1], [6, 1]], {
          straightFirst: true, straightLast: true, strokeColor: COLORS.secondary,
          strokeWidth: 2, dash: 2, fixed: true
        });
        board.create("text", [2.12, 4.35, "x = 2"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.accent
        });
        board.create("text", [4.05, 1.28, "y = 1"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.secondary
        });
      }
    },
    tangent: {
      title: "Sekant og tangent til funksjonen f(x) = x²",
      bounds: [-2.5, 5.2, 3.2, -2.2],
      draw(board) {
        board.create("functiongraph", [x => x * x, -2.1, 2.1], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 260
        });
        board.create("line", [[-1, 1], [1, 1]], {
          straightFirst: true, straightLast: true, strokeColor: COLORS.secondary,
          strokeWidth: 2.5, fixed: true
        });
        board.create("line", [[1, 1], [2, 3]], {
          straightFirst: true, straightLast: true, strokeColor: COLORS.accent,
          strokeWidth: 2.5, fixed: true
        });
        [[-1, 1], [1, 1]].forEach(([x, y]) => board.create("point", [x, y], {
          name: "", size: 3.5, fixed: true, withLabel: false,
          fillColor: COLORS.curve, strokeColor: COLORS.curve
        }));
        board.create("text", [-2.15, 1.45, "Sekant"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.secondary
        });
        board.create("text", [1.25, 3.15, "Tangent"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.accent
        });
      }
    },
    continuity: {
      title: "Delt forskrift med åpent og fylt punkt",
      bounds: [-3.5, 4.5, 3.5, -1.5],
      draw(board) {
        board.create("functiongraph", [x => x + 2, -3.2, 0], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 180
        });
        board.create("functiongraph", [x => x * x + 1, 0, 3.2], {
          strokeColor: COLORS.curve, strokeWidth: 3, numberPoints: 180
        });
        board.create("point", [0, 2], {
          name: "", size: 5, fixed: true, withLabel: false,
          fillColor: "#ffffff", strokeColor: COLORS.curve, strokeWidth: 2.5
        });
        board.create("point", [0, 1], {
          name: "", size: 5, fixed: true, withLabel: false,
          fillColor: COLORS.curve, strokeColor: COLORS.curve
        });
        board.create("text", [0.18, 2.25, "Åpen: (0, 2)"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.text
        });
        board.create("text", [0.18, 0.55, "Fylt: (0, 1)"], {
          fontSize: 12, fixed: true, strokeColor: COLORS.text
        });
      }
    }
  };

  const diagnostics = window.__R1_GRAPH_DIAGNOSTICS__ = {
    ready: [], errors: []
  };

  function initialize() {
    if (!window.JXG || !window.JXG.JSXGraph) {
      diagnostics.errors.push("JSXGraph-biblioteket ble ikke lastet.");
      return;
    }

    document.querySelectorAll("[data-r1-graph]").forEach((element, index) => {
      const key = element.dataset.r1Graph;
      const definition = definitions[key];
      if (!definition) {
        diagnostics.errors.push("Ukjent grafmal: " + key);
        return;
      }

      try {
        element.setAttribute("aria-label", definition.title);
        const board = JXG.JSXGraph.initBoard(element.id || (element.id = "r1-graph-" + index), {
          boundingbox: definition.bounds,
          axis: true,
          grid: true,
          showNavigation: false,
          showCopyright: false,
          pan: { enabled: false },
          zoom: { wheel: false, pinch: false, needShift: false },
          keepaspectratio: false,
          defaultAxes: {
            x: {
              name: "x",
              withLabel: true,
              label: { position: "rt", offset: [-8, 12] },
              strokeColor: COLORS.axis,
              highlight: false,
              ticks: { drawLabels: true, majorHeight: 5, minorTicks: 0, strokeColor: COLORS.axis }
            },
            y: {
              name: "y",
              withLabel: true,
              label: { position: "rt", offset: [12, -8] },
              strokeColor: COLORS.axis,
              highlight: false,
              ticks: { drawLabels: true, majorHeight: 5, minorTicks: 0, strokeColor: COLORS.axis }
            }
          }
        });
        definition.draw(board);
        board.fullUpdate();
        diagnostics.ready.push({ id: element.id, type: key });
        if ("ResizeObserver" in window) {
          const observer = new ResizeObserver(() => {
            const width = element.clientWidth;
            const height = element.clientHeight;
            if (width > 0 && height > 0) board.resizeContainer(width, height, true);
          });
          observer.observe(element);
        }
      } catch (error) {
        diagnostics.errors.push(key + ": " + (error?.message || String(error)));
      }
    });
    document.documentElement.dataset.r1GraphsReady = "true";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
