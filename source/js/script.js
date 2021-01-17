// Выбор эелемента

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var mainNavList = document.querySelector('.main-nav__list');

// Событие при клике

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainNavList.classList.add('main-nav__list--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    mainNavList.classList.remove('main-nav__list--opened');
  }
});
