"use strict";

const text = document.querySelector("h1").textContent;
document.querySelector("h1").textContent = " ";
const typingDelay = 200;
let count = 1;
function type() {
  if (count < text.length) {
    document.querySelector(".typewritten").textContent = text.substring(0, count);
    count++;
    setTimeout(type, typingDelay);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  type();
});
