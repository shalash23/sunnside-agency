const sections = document.querySelectorAll("section");
const footer = [...document.querySelector(".footer").children];
const navigationMenu = document.getElementById("navigation-menu");
const hamburgerIcon = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
  if (navigationMenu.classList.contains("is-hidden")) {
    navigationMenu.classList.add("is-active");
    navigationMenu.classList.remove("is-hidden");
    return;
  }
  if (navigationMenu.classList.contains("is-active")) {
    navigationMenu.classList.remove("is-active");
    navigationMenu.classList.add("is-hidden");
    return;
  }
});
