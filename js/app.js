$(document).ready(function () {
  // HERO SLIDER
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: ["<", ">"],
    responsive: {
      0: { nav: false, dots: true },
      768: { nav: true },
    },
  });

  // PROJECT SLIDER
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    margin: 24,
    navText: ["<", ">"],
    responsive: {
      0: { items: 1, nav: false, margin: 8 },
      768: { items: 2, margin: 16 },
      1140: { items: 2, center: true },
    },
  });
});

// to collapse navbar
// $("#navbarSupportedContent").on("show.bs.collapse", function () {
//   $("a.nav-link").click(function () {
//     $("#navbarSupportedContent").collapse("hide");
//   });
// });

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
