const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("show");
});

const header = document.querySelector(".header");
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const cart = document.getElementById("cart");
const shoppingcart = document.getElementById("shoppingcart");

cart.addEventListener("click", () => {
  cart.classList.toggle("active");
  shoppingcart.classList.toggle("show");
});