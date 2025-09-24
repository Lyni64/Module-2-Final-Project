const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav__links--active");
});
