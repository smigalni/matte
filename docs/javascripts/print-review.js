document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-print-page]");
  if (!button) return;
  window.print();
});
