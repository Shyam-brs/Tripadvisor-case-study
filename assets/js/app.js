$(document).ready(function () {
  //inti side nav
  $(".button-collapse").sideNav();

  //inti slider

  $(".slider").slider({
    indicator: false,
    height: 500,
    transition: 500,
    interval: 6000,
  });

  //init scrollspy
  $(".scrollspy").scrollSpy();
});
