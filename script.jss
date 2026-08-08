// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Mobile menu
const menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function () {

  const nav = document.querySelector(".nav-links");

  if (nav.style.display === "flex") {
    nav.style.display = "";
  } else {
    nav.style.display = "flex";
    nav.style.position = "absolute";
    nav.style.top = "76px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "25px";
    nav.style.flexDirection = "column";
    nav.style.background = "#090c15";
    nav.style.borderBottom = "1px solid rgba(255,255,255,.08)";
  }

});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {

  link.addEventListener("click", function() {

    if (window.innerWidth <= 900) {
      document.querySelector(".nav-links").style.display = "";
    }

  });

});
