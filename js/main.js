const swiper = new Swiper('.reviews__slider', {
  navigation: {
    nextEl: '.reviews__item-next',
    prevEl: '.reviews__item-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row'
      },
      loop: true,
      spaceBetween: 22,
    },
    655: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 22,
    }
  },
});


const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
  menuBtn.classList.toggle('menu__btn--open');
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
    menuBtn.classList.remove('menu__btn--open');
  });
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