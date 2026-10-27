const siteHeader = document.querySelector(".site-header");
const menuToggle = siteHeader?.querySelector(".menu-toggle");
const siteNavigation = siteHeader?.querySelector(".site-nav");

if (siteHeader && menuToggle && siteNavigation) {
  const mobileViewport = window.matchMedia("(max-width: 900px)");

  siteHeader.classList.add("has-menu-toggle");

  const setMenuOpen = (isOpen) => {
    siteHeader.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteHeader.classList.contains("menu-open")) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  mobileViewport.addEventListener("change", () => setMenuOpen(false));
}
