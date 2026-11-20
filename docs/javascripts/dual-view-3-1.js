(() => {
  "use strict";

  const init = () => {
    const root = document.getElementById("teacher-view");
    if (!root || root.dataset.modelReady === "true") return;
    const svg = root.querySelector("#slope-graph");
    const pointP = root.querySelector("#point-p");
    const pointQ = root.querySelector("#point-q");
    const sliderA = root.querySelector("#point-a");
    const sliderH = root.querySelector("#delta-h");
    if (!svg || !pointP || !pointQ || !sliderA || !sliderH) return;

    root.dataset.modelReady = "true";
    const NS = "http://www.w3.org/2000/svg";
    const xMin = -1;
    const xMax = 5;
    const px = x => 149 + x * (520 / 6);
    const py = y => 356 - y * 13.2;
    const fmt = value => value.toFixed(2).replace(".", ",");
    let a = Number(sliderA.value);
    let h = Number(sliderH.value);
    let dragging = null;

    const curve = root.querySelector("#function-curve");
    const secant = root.querySelector("#secant-line");
    const tangent = root.querySelector("#tangent-line");
    const labelP = root.querySelector("#label-p");
    const labelQ = root.querySelector("#label-q");

    const graphX = clientX => {
      const point = svg.createSVGPoint();
      point.x = clientX;
      point.y = 0;
      return point.matrixTransform(svg.getScreenCTM().inverse()).x;
    };
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const render = () => {
      h = Math.min(h, 5 - a);
      const q = a + h;
      const pY = a * a;
      const qY = q * q;
      const tangentSlope = 2 * a;
      const secantSlope = 2 * a + h;
      const lineY = (x, slope) => pY + slope * (x - a);
      const curvePoints = [];
      for (let x = xMin; x <= xMax + 0.001; x += 0.05) {
        curvePoints.push((curvePoints.length ? "L" : "M") + px(x).toFixed(2) + " " + py(x * x).toFixed(2));
      }
      curve.setAttribute("d", curvePoints.join(" "));
      secant.setAttribute("d", `M ${px(xMin)} ${py(lineY(xMin, secantSlope))} L ${px(xMax)} ${py(lineY(xMax, secantSlope))}`);
      tangent.setAttribute("d", `M ${px(xMin)} ${py(lineY(xMin, tangentSlope))} L ${px(xMax)} ${py(lineY(xMax, tangentSlope))}`);

      pointP.setAttribute("cx", px(a));
      pointP.setAttribute("cy", py(pY));
      pointQ.setAttribute("cx", px(q));
      pointQ.setAttribute("cy", py(qY));
      labelP.setAttribute("x", px(a) - 18);
      labelP.setAttribute("y", py(pY) - 15);
      labelQ.setAttribute("x", px(q) + 10);
      labelQ.setAttribute("y", py(qY) - 12);

      sliderA.value = a.toFixed(2);
      sliderH.max = Math.max(0.05, 5 - a).toFixed(2);
      sliderH.value = h.toFixed(2);
      root.querySelector("#point-a-value").textContent = fmt(a);
      root.querySelector("#delta-h-value").textContent = fmt(h);
      root.querySelector("#secant-slope").textContent = fmt(secantSlope);
      root.querySelector("#tangent-slope").textContent = fmt(tangentSlope);
      root.querySelector("#slope-difference").textContent = fmt(Math.abs(secantSlope - tangentSlope));

      pointP.setAttribute("aria-valuenow", a.toFixed(2));
      pointP.setAttribute("aria-valuetext", `x er ${fmt(a)}`);
      pointQ.setAttribute("aria-valuenow", q.toFixed(2));
      pointQ.setAttribute("aria-valuetext", `x er ${fmt(q)}`);

      const explanation = root.querySelector("#model-explanation");
      if (h < 0.15) {
        explanation.textContent = "h er svært liten. Sekantens stigningstall ligger nå svært nær tangentens. Når h går mot 0, går sekantens stigningstall mot 2a.";
      } else if (h < 0.6) {
        explanation.textContent = "Sekanten har begynt å legge seg tett inntil tangenten. Prøv å gjøre h enda mindre.";
      } else {
        explanation.textContent = "Flytt Q mot P ved å redusere h. Legg merke til hvordan sekantens stigningstall nærmer seg tangentens stigningstall.";
      }
    };

    const movePoint = clientX => {
      const x = (graphX(clientX) - 149) / (520 / 6);
      if (dragging === pointP) {
        a = clamp(x, -0.5, Math.min(3.5, 5 - h));
      } else if (dragging === pointQ) {
        h = clamp(x - a, 0.05, 5 - a);
      }
      render();
    };

    [pointP, pointQ].forEach(point => {
      point.addEventListener("pointerdown", event => {
        dragging = point;
        point.setPointerCapture(event.pointerId);
        event.preventDefault();
      });
      point.addEventListener("pointermove", event => {
        if (dragging === point) movePoint(event.clientX);
      });
      point.addEventListener("pointerup", () => { dragging = null; });
      point.addEventListener("pointercancel", () => { dragging = null; });
      point.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        const step = event.shiftKey ? 0.1 : 0.01;
        if (point === pointP) a = clamp(a + (event.key === "ArrowRight" ? step : -step), -0.5, Math.min(3.5, 5 - h));
        else h = clamp(h + (event.key === "ArrowRight" ? step : -step), 0.05, 5 - a);
        render();
      });
    });

    sliderA.addEventListener("input", () => { a = Number(sliderA.value); render(); });
    sliderH.addEventListener("input", () => { h = Number(sliderH.value); render(); });
    render();
  };

  const setupSwitch = () => {
    const buttons = document.querySelectorAll("[data-view-target]");
    const panels = document.querySelectorAll("[data-view-panel]");
    if (!buttons.length || !panels.length) return;
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const target = button.dataset.viewTarget;
        buttons.forEach(item => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        panels.forEach(panel => {
          panel.hidden = panel.dataset.viewPanel !== target;
        });
        if (target === "teacher") {
          init();
          const panel = document.getElementById("teacher-view");
          const mathJax = window.MathJax;
          if (panel && mathJax?.startup?.promise && panel.dataset.mathReady !== "true") {
            mathJax.startup.promise.then(() => mathJax.typesetPromise([panel])).then(() => {
              panel.dataset.mathReady = "true";
            });
          }
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupSwitch, { once: true });
  } else setupSwitch();
})();
