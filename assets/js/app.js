

function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }
<<<<<<< HEAD










































































  const y = new Date();
let Year = y.getFullYear();
document.getElementById("year2").innerHTML = Year
=======
  $('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: ".prev",
  nextArrow: ".next",
 

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
      }
    },
  ]
});
>>>>>>> af6ae698005acba120c8bad7c70d76aa1d4946db
