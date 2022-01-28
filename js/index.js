const menu = document.getElementById("menu-icon");
const NavMenu = document.querySelector(".nav-items");
const main = document.querySelector(".all-part");
const imageOverlay = document.querySelector(".img-overlay");
const changeName = document.getElementById("change-name");
const monsary = document.querySelector(".monsary");

function toggleNavbar() {
  NavMenu.classList.toggle("open-nav");
  main.classList.toggle("main-none");
  imageOverlay.style.height = "100vh";
  menu.classList.toggle("new-menu");
  changeName.innerHTML = "ATB";
  monsary.style.display = "none";
}
