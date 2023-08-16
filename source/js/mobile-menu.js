const attachMobileMenu = () => {

  let mainHeaderContainer = document.querySelector('.main-header__container');
  let mainNavigation = document.querySelector('.main-navigation');
  let menuToggle = document.querySelector('.main-header__menu-toggle');
  let menuToggleIconMenu = document.querySelector('.main-header__icon-menu');
  let menuToggleIconCross = document.querySelector('.main-header__icon-cross');
  let menuItems = document.querySelectorAll('.menu-item');
  let mainHeaderPhone = document.querySelector('.main-header__phone');

  if (!mainHeaderContainer || !mainNavigation || !menuToggle || !menuToggleIconMenu || !menuToggleIconCross || !mainHeaderPhone) {
    return;
  }

  mainHeaderContainer.classList.remove('main-header__container--no-js');
  mainNavigation.classList.remove('main-navigation--no-js');
  mainNavigation.classList.add('main-navigation--closed');

  menuToggle.addEventListener('click', function () {
    if (mainNavigation.classList.contains('main-navigation--closed')) {
      mainNavigation.classList.remove('main-navigation--closed');
      mainNavigation.classList.add('main-navigation--opened');
      mainHeaderContainer.classList.add('main-header__container--opened');
      menuToggleIconMenu.classList.add('visually-hidden');
      menuToggleIconCross.classList.remove('visually-hidden');
      menuItems.forEach((item) => {
        item.classList.remove('menu-item--light');
        item.classList.add('menu-item--dark');
      });
      mainHeaderPhone.classList.remove('link--light');
      mainHeaderPhone.classList.add('link--dark');
    } else {
      mainNavigation.classList.add('main-navigation--closed');
      mainNavigation.classList.remove('main-navigation--opened');
      mainHeaderContainer.classList.remove('main-header__container--opened');
      menuToggleIconMenu.classList.remove('visually-hidden');
      menuToggleIconCross.classList.add('visually-hidden');
      menuItems.forEach((item) => {
        item.classList.remove('menu-item--dark');
        item.classList.add('menu-item--light');
      });
      mainHeaderPhone.classList.remove('link--dark');
      mainHeaderPhone.classList.add('link--light');
    }
  });
};

export {attachMobileMenu};
