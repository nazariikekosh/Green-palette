const swiper = new Swiper('.reviews__slider', {
  slidesPerView: 2,
  spaceBetween: 22,
  loop: true,

  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  }
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  menuBtn.classList.toggle('menu__btn--open');
});
