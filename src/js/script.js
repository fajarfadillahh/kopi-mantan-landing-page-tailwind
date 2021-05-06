// SHOW & HIDDEN HEADER MENU
const showMenu = (menuId, toggleId, closeId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };
    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle", "nav-close");

// REMOVE HEADER MENU WHEN CLICK THE NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// PARALLAX IMAGE MOUSEMOVE
document.addEventListener("mousemove", move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// GSAP ANIMATION
// === Header Section ===
gsap.from(".nav__logo, .nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  y: 10,
});

gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 0.8,
  y: 30,
  stagger: 0.2,
});

// === Home Section ===
gsap.from(".home__title", {
  opacity: 0,
  duration: 1.4,
  delay: 1.2,
  y: 30,
});

gsap.from(".home__text", {
  opacity: 0,
  duration: 1,
  delay: 1.6,
  y: 30,
});

gsap.from(".home__button", {
  opacity: 0,
  duration: 1,
  delay: 2,
  y: 30,
});

gsap.from(".home__img", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  y: 30,
});
