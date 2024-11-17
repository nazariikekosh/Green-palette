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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll(".form__input");
  const submitButton = form.querySelector(".form__btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    let isValid = true;

    // Перевірка кожного інпута
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("error"); // Додаємо клас для стилізації помилки
        isValid = false;
      } else {
        input.classList.remove("error"); // Видаляємо клас, якщо поле заповнено
      }
    });

    if (isValid) {
      alert("Дані надіслано!");
      form.reset(); // Очищуємо форму
    } else {
      alert("Будь ласка, заповніть всі поля!");
    }
  });

  // Видалення класу помилки при введенні тексту
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (input.value.trim()) {
        input.classList.remove("error");
      }
    });
  });
});