import 'slick.min.js';
// import 
window.addEventListener('DOMContentLoaded', () => {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp");
    } else {
      document.querySelector("body").classList.add("no-webp");
    }
  });

  $('.solution__slider').slick({
    speed: 700,
    // autoplay: true,
    // prevArrow: '<img class ="slick-prev" src="img/arr-left.png" alt="slide">',
    // nextArrow: '<img class="slick-next" src="img/arr-right.png">',
  });


})

$(document).ready(function () {
  $('.solution__slider').slick({
    speed: 700,
    // autoplay: true,
    // prevArrow: '<img class ="slick-prev" src="img/arr-left.png" alt="slide">',
    // nextArrow: '<img class="slick-next" src="img/arr-right.png">',
  });
});