// Выбор эелемента

const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const mainNavList = document.querySelector('.main-nav__list');

navToggle.onclick = function () {
    mainNav.classList.toggle('main-nav--closed');
    mainNav.classList.toggle('main-nav--opened');
    mainNavList.classList.toggle('main-nav__list--opened');
  }
