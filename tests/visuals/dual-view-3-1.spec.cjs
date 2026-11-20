const { chromium } = require("playwright");
const path = require("node:path");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));

  const file = path.resolve("site/r1/derivasjon/pilot-3-1-elev-laerer/index.html");
  await page.goto("file://" + file);
  await page.getByRole("button", { name: "Elev View" }).waitFor();
  if (!(await page.locator("#student-view").isVisible())) throw new Error("Elev View skal være synlig først.");
  if (await page.locator("#teacher-view").isVisible()) throw new Error("Teacher View skal være skjult ved oppstart.");

  await page.getByRole("button", { name: "Teacher View" }).click();
  await page.waitForFunction(() => document.querySelector("#teacher-view")?.dataset.modelReady === "true");
  await page.waitForFunction(() => document.querySelector("#function-curve")?.getAttribute("d")?.length > 100);

  const initial = await page.evaluate(() => ({
    secant: document.querySelector("#secant-slope").textContent,
    tangent: document.querySelector("#tangent-slope").textContent,
    h: document.querySelector("#delta-h-value").textContent,
    p: document.querySelector("#point-p").getAttribute("cx"),
    q: document.querySelector("#point-q").getAttribute("cx"),
  }));
  if (!initial.secant || !initial.tangent || !initial.h || initial.p === initial.q) {
    throw new Error("Grafen eller startverdiene ble ikke rendret korrekt.");
  }

  await page.locator("#delta-h").evaluate(el => {
    el.value = "0.10";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  const close = await page.evaluate(() => ({
    secant: Number(document.querySelector("#secant-slope").textContent.replace(",", ".")),
    tangent: Number(document.querySelector("#tangent-slope").textContent.replace(",", ".")),
    difference: Number(document.querySelector("#slope-difference").textContent.replace(",", ".")),
  }));
  if (Math.abs(close.secant - close.tangent) > 0.11 || close.difference > 0.11) {
    throw new Error("Sekantens stigningstall nærmer seg ikke tangentens når h blir liten.");
  }

  await page.locator("#point-a").evaluate(el => {
    el.value = "2.00";
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
  const moved = await page.evaluate(() => ({
    tangent: document.querySelector("#tangent-slope").textContent,
    p: document.querySelector("#point-p").getAttribute("cx"),
  }));
  if (moved.tangent !== "4,00" || moved.p === initial.p) {
    throw new Error("Flytting av P oppdaterer ikke tangentens stigningstall og punkt.");
  }

  await page.screenshot({ path: "dual-view-teacher-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "dual-view-teacher-mobile.png", fullPage: true });
  const mobile = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    graphWidth: document.querySelector("#slope-graph").getBoundingClientRect().width,
  }));
  if (mobile.scrollWidth > mobile.width + 1) throw new Error("Teacher View har horisontal sideskrolling på mobil.");
  if (mobile.graphWidth > mobile.width + 1) throw new Error("Grafen går utenfor mobilbredden.");

  await page.getByRole("button", { name: "Elev View" }).click();
  if (!(await page.locator("#student-view").isVisible())) throw new Error("Bytte tilbake til Elev View fungerer ikke.");
  if (errors.length) throw new Error("JavaScript-feil: " + errors.join("; "));

  console.log(JSON.stringify({ initial, close, moved, mobile, pageErrors: errors }, null, 2));
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});
