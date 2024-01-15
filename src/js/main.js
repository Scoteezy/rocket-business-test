import "swiper/css/bundle";

import "../scss/style.scss";
import Swiper from "swiper/bundle";
// import Swiper styles
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobile-nav");
  const menuItem = document.querySelectorAll(".nav__link");
  const hamburger = document.querySelector(".hamburger");
  const modalBtns = document.querySelectorAll(
    '.button[data-modal="consultation"]'
  );
  const overlay = document.querySelector(".overlay");
  const consultationModal = document.getElementById("consultation");
  const exitModal = document.querySelector(".modal__close");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("mobile-nav_active");
  });
  window.addEventListener("scroll", function () {
    if (menu.classList.contains("mobile-nav_active")) {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.remove("mobile-nav_active");
    }
  });
  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.remove("mobile-nav_active");
    });
  });
  modalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlay.style.display = "block";
      consultationModal.style.display = "flex";
      consultationModal.classList.add("animate__fadeIn");
      consultationModal.classList.remove("animate__fadeOut");
      hamburger.classList.remove("hamburger_active");
      menu.classList.remove("mobile-nav_active");
    });
  });
  exitModal.addEventListener("click", () => {
    consultationModal.classList.remove("animate__fadeIn");
    consultationModal.classList.add("animate__fadeOut");
    setTimeout(() => {
      overlay.style.display = "none";
      consultationModal.style.display = "none";
    }, 500);
  });
  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
