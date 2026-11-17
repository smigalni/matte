const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    page.on("pageerror", error => failures.push("JavaScript-feil: " + error.message));
    page.on("console", message => {
      if (message.type() === "error") failures.push("Konsollfeil: " + message.text());
    });

    await page.goto("http://127.0.0.1:8000/r1/funksjonsgrafer-pilot/", { waitUntil: "networkidle" });
    await page.waitForFunction(() => document.documentElement.dataset.r1GraphsReady === "true", { timeout: 15000 });
    await page.waitForFunction(() => window.__R1_GRAPH_DIAGNOSTICS__?.ready?.length === 5, { timeout: 15000 });

    const desktop = await page.evaluate(() => {
      const boards = [...document.querySelectorAll("[data-r1-graph]")];
      return {
        count: boards.length,
        graphs: boards.map(element => {
          const rect = element.getBoundingClientRect();
          return {
            id: element.id,
            width: rect.width,
            height: rect.height,
            svg: Boolean(element.querySelector("svg")),
            paths: element.querySelectorAll("svg path").length
          };
        }),
        errors: window.__R1_GRAPH_DIAGNOSTICS__.errors,
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
      };
    });

    if (desktop.count !== 5) failures.push("Forventet fem grafer, fant " + desktop.count);
    if (desktop.errors.length) failures.push(...desktop.errors);
    for (const graph of desktop.graphs) {
      if (!graph.svg || graph.paths < 2) failures.push(graph.id + " mangler synlig grafinnhold");
      if (graph.width < 300 || graph.height < 180) failures.push(graph.id + " har for liten tegneflate");
    }
    if (desktop.overflow) failures.push("Desktop har horisontal sideskrolling");

    fs.mkdirSync("artifacts/function-graphs", { recursive: true });
    await page.screenshot({ path: "artifacts/function-graphs/desktop.png", fullPage: true });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(500);
    const mobile = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
      graphs: [...document.querySelectorAll("[data-r1-graph]")].map(element => {
        const rect = element.getBoundingClientRect();
        return { id: element.id, width: rect.width, height: rect.height, svg: Boolean(element.querySelector("svg")) };
      })
    }));
    if (mobile.page > mobile.viewport + 1) failures.push("Mobil har horisontal sideskrolling");
    for (const graph of mobile.graphs) {
      if (graph.width < 280 || graph.height < 160 || !graph.svg) failures.push(graph.id + " er ikke lesbar i mobilvisning");
    }
    await page.screenshot({ path: "artifacts/function-graphs/mobile.png", fullPage: true });

    console.log(JSON.stringify({ desktop, mobile }, null, 2));
    if (failures.length) {
      console.error(failures.join("\n"));
      process.exitCode = 1;
    } else {
      console.log("Alle nettlesertester for R1-funksjonsgrafene bestått.");
    }
  } finally {
    await browser.close();
  }
})();
