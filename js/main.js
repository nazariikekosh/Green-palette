const swiper = new Swiper('.reviews__slider', {

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row'
      },
      navigation: {
        nextEl: '.reviews__item-next',
        prevEl: '.reviews__item-prev',
      },
      loop: true,
      spaceBetween: 22,
    },

    655: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 22,
      navigation: {
        nextEl: '.reviews__item-next',
        prevEl: '.reviews__item-prev',
      },
    }
  },

});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  menuBtn.classList.toggle('menu__btn--open');
});

const accordeonTitle = document.querySelectorAll('.accordeon__title');

accordeonTitle.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    if (parent.classList.contains('accordeon__item--active')) {
      parent.classList.remove('accordeon__item--active');
    } else {
      accordeonTitle.forEach(element => {
        element.parentNode.classList.remove('accordeon__item--active');
      })
      parent.classList.add('accordeon__item--active');
    }
  })
})