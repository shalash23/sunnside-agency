const sections = document.querySelectorAll("section");
const footer = [...document.querySelector(".footer").children];
const navigationMenu = document.getElementById("navigation-menu");
const hamburgerIcon = document.querySelector(".hamburger-menu");
gsap.registerPlugin(ScrollTrigger);

// sections.forEach((section) => {
//   gsap.from(section, {
//     scrollTrigger: section,
//     x: "random(-100, 100, 5)",
//     y: "random(-100, 100, 5)",
//     duration: 1,
//     stagger: 0.5,
//     ease: "power2.out",
//   });
// });

// footer.forEach((foot) => {
//   gsap.from(foot, {
//     scrollTrigger: foot,

//     opacity: 0.3,
//     skewY: "30deg",
//     rotation: 80,
//     ease: Power0.easeIn,
//     duration: 0.5,
//     stagger: 0.5,
//   });
// });

// hamburgerIcon.addEventListener("click", function () {
//   if (navigationMenu.style.opacity === "1") {
//     navigationMenu.style.opacity === "0";
//     gsap.to(navigationMenu, {
//       opacity: 0,
//       duration: 0.5,
//     });
//     return;
//   }
//   navigationMenu.style.opacity === "1";
//   gsap.to(navigationMenu, {
//     opacity: 1,
//     y: 50,
//     duration: 0.5,
//   });
//   return;

//   // navigationMenu.classList.remove("is-hidden");
//   // navigationMenu.classList.add("is-active");
// });

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
