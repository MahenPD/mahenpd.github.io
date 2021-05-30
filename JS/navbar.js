var changeIcon = true;

function menuOpen() {
  var overlay = document.querySelector(".overlay");
  var nav = document.querySelector("nav");
  var header = document.querySelector("header");
  var icon = document.querySelector(".menu-toggle i");

  overlay.classList.toggle("menu-open");
  nav.classList.toggle("menu-open");
  header.classList.toggle("menu-open");

  if (changeIcon) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");

    changeIcon = false;
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    changeIcon = true;
  }
}
