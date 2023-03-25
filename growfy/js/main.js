'use strict';

const burger = document.querySelector('.icon-menu');
const curtain = document.querySelector('.menu__body');

burger.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth <= 767.98) {
        // краще бургеривішати на шосб глобальне bofy, html, ( так на сайті ютубу )
        // тому що якщо ми хочемо занімувати іконку бургер, яка не є в menu__body, то це зробити буде не можливо
        // menu__body.burger_open .icon-menu це помилка
        // body.burger_open .icon-menu а так ок
        document.body.classList.toggle('burger_open');
    }
})

curtain.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth <= 767.98 && !e.target.closest('.menu__list')) {
        document.body.classList.toggle('burger_open');
    }
})


