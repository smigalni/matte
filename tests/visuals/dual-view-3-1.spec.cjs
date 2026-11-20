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

  await page.waitForFunction(() => !!window.MathJax?.startup?.promise);
  await page.getByRole("button", { name: "Teacher View" }).click();
  await page.waitForFunction(() => document.querySelector("#teacher-view")?.dataset.modelReady === "true");
  await page.waitForFunction(() => document.querySelector("#function-curve")?.getAttribute("d")?.length > 100);
  if (!(await page.locator("#teacher-view h2").first().isVisible())) throw new Error("Læreroverskriften ble ikke rendret som Markdown/HTML.");
  if (!(await page.locator(".teacher-prompt strong").isVisible())) throw new Error("Undervisningsspørsmålet ble ikke formatert korrekt.");
  await page.waitForSelector("#teacher-view mjx-container");

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

  const graphBox = await page.locator("#slope-graph").boundingBox();
  const qBox = await page.locator("#point-q").boundingBox();
  const targetX = graphBox.x + ((149 + 2.60 * (520 / 6)) / 620) * graphBox.width;
  await page.mouse.move(qBox.x + qBox.width / 2, qBox.y + qBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(targetX, qBox.y + qBox.height / 2, { steps: 8 });
  await page.mouse.up();
  const draggedH = Number((await page.locator("#delta-h-value").textContent()).replace(",", "."));
  if (draggedH < 0.55 || draggedH > 0.65) throw new Error("Dra-og-slipp på Q endrer ikke h som forventet.");

  await page.screenshot({ path: "dual-view-teacher-desktop.png", fullPage: true });
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  mobilePage.on("pageerror", error => errors.push(error.message));
  await mobilePage.goto("file://" + file);
  await mobilePage.getByRole("button", { name: "Teacher View" }).click();
  await mobilePage.waitForFunction(() => document.querySelector("#teacher-view")?.dataset.modelReady === "true");
  await mobilePage.screenshot({ path: "dual-view-teacher-mobile.png", fullPage: true });
  const mobile = await mobilePage.evaluate(() => ({
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
