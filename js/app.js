document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.addEventListener("click", function () {
    var isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
