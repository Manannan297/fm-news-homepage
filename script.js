"use strict";

const header = document.querySelector(".header");
const burgerBtn = header.querySelector(".menu-btn");

burgerBtn.addEventListener("click", () => {
  header.classList.toggle("menu--open");
  document.querySelector("body").classList.toggle("overflow-hidden");
});
