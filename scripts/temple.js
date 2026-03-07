// JavaScript for the Hamburger
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#primary-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Dynamic Copyright Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified Date
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;