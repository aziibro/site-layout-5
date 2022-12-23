$(function () {
  $('.kickstart__slider').slick({
    arrows: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });
});