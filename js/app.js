document.addEventListener("DOMContentLoaded", function () {


  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    var navLinks = siteNav.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (siteNav.classList.contains("is-open")) {
          siteNav.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

 
  var navList = document.querySelectorAll(".nav-list a");
  navList.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navList.forEach(function (item) {
        item.classList.remove("is-active");
      });
      link.classList.add("is-active");
    });
  });

});
