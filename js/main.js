const swiper = new Swiper('.reviews__slider', {

  slidesPerView: 2,
  spaceBetween: 22,
  loop: true,

  navigation: {
    nextEl: '.reviews__item-prev',
    prevEl: '.reviews__item-next',
  },
});