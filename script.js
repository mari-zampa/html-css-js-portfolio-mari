// script.js
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", String(isOpen));
}

// Close mobile menu if you resize up to desktop
window.addEventListener("resize", () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (window.innerWidth > 900 && menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
    icon.setAttribute("aria-expanded", "false");
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const wrapper = document.querySelector(".hamburger-menu");
  if (!menu || !icon || !wrapper) return;

  const clickedInside = wrapper.contains(e.target);
  if (!clickedInside && menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
    icon.setAttribute("aria-expanded", "false");
  }
});
