const { chromium } = require("playwright");
const assert = require("node:assert/strict");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("http://127.0.0.1:4173/r1/visualisering/funksjonsgrafer-pilot/", { waitUntil: "networkidle" });
  await page.waitForFunction(() => document.documentElement.dataset.mathGraphsReady === "true");

  const desktop = await page.evaluate(() => ({
    graphs: [...document.querySelectorAll("[data-math-graph]")].map(node => ({
      id: node.dataset.mathGraph,
      rendered: node.dataset.rendered === "true",
      svg: Boolean(node.querySelector("svg")),
      paths: node.querySelectorAll("svg path").length,
      circles: node.querySelectorAll("svg circle").length
    })),
    pageWidth: document.documentElement.scrollWidth,
    contentWidth: document.documentElement.clientWidth,
    viewportWidth: window.innerWidth
  }));
  assert.equal(desktop.graphs.length, 4, "All four graph examples should exist");
  assert.ok(desktop.graphs.every(graph => graph.rendered && graph.svg), "Every graph should render as SVG");
  assert.ok(desktop.graphs.every(graph => graph.paths > 0), "Every graph should contain curve paths");
  assert.ok(desktop.pageWidth <= desktop.contentWidth, "Desktop page should not overflow horizontally");
  assert.deepEqual(errors, [], "No browser JavaScript errors");
  await page.screenshot({ path: "artifacts/graphs-desktop.png", fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForFunction(() => document.documentElement.dataset.mathGraphsReady === "true");
  const mobile = await page.evaluate(() => ({
    pageWidth: document.documentElement.scrollWidth,
    contentWidth: document.documentElement.clientWidth,
    viewportWidth: window.innerWidth,
    graphWidths: [...document.querySelectorAll(".math-graph svg")].map(svg => Math.round(svg.getBoundingClientRect().width))
  }));
  assert.ok(mobile.pageWidth <= mobile.contentWidth, "Mobile page should not overflow horizontally");
  assert.equal(mobile.graphWidths.length, 4, "All four graphs should remain visible on mobile");
  assert.ok(mobile.graphWidths.every(width => width > 300 && width <= mobile.contentWidth), "SVG graphs should scale to the mobile content width");
  await page.screenshot({ path: "artifacts/graphs-mobile.png", fullPage: true });

  await page.emulateMedia({ media: "print" });
  const print = await page.evaluate(() => ({
    graphCount: document.querySelectorAll(".math-graph svg").length,
    hiddenGraphs: [...document.querySelectorAll(".math-graph svg")].filter(svg => getComputedStyle(svg).display === "none").length
  }));
  assert.equal(print.graphCount, 4, "Print layout should retain all graphs");
  assert.equal(print.hiddenGraphs, 0, "Print layout should not hide graphs");

  console.log(JSON.stringify({ desktop, mobile, print, errors }, null, 2));
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});
