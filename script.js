"use strict";

const header = document.querySelector(".header");
const burgerBtn = header.querySelector(".menu-btn");
const overlay = header.querySelector(".overlay");

burgerBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

function toggleMenu() {
  header.classList.toggle("menu--open");
  document.querySelector("body").classList.toggle("overflow-hidden");
}
