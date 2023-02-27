const hamburgerMenu = document.querySelector("img.hamburger-menu");
const main = document.querySelector("main");
const mobileNav = document.querySelector("nav.mobile-nav");
let hamburgerMenuState = 0;

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenuState === 0) {
    hamburgerMenuState = 1;
    main.style.display = "none";
    mobileNav.style.display = "flex";
  } else {
    hamburgerMenuState = 0;
    main.style.display = "";
    mobileNav.style.display = "";
  }
});
