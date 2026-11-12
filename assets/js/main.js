(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#global-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const opened = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!opened));
    nav.classList.toggle("is-open", !opened);
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
})();