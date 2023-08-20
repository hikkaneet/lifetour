const attachMobileMenu = () => {
  const mainHeaderContainer = document.querySelector('.main-header__container');
  const mainNavigation = document.querySelector('.main-navigation');
  const menuToggle = document.querySelector('.main-header__menu-toggle');
  const menuToggleIconMenu = document.querySelector('.main-header__icon-menu');
  const menuToggleIconCross = document.querySelector('.main-header__icon-cross');
  const menuItems = document.querySelectorAll('.main-navigation__link');
  const mainHeaderPhone = document.querySelector('.main-header__phone');
  const pageContainer = document.querySelector('.page__container');
  const body = document.body;

  if (!mainHeaderContainer || !mainNavigation || !menuToggle || !menuToggleIconMenu || !menuToggleIconCross || !mainHeaderPhone || !pageContainer) {
    return;
  }

  mainHeaderContainer.classList.remove('main-header__container--no-js');
  mainNavigation.classList.remove('main-navigation--no-js');
  mainNavigation.classList.add('main-navigation--closed');

  const openMenu = () => {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--opened');
    mainHeaderContainer.classList.add('main-header__container--opened');
    menuToggleIconMenu.classList.add('visually-hidden');
    menuToggleIconCross.classList.remove('visually-hidden');
    pageContainer.classList.add('page__container--overlay');
    menuItems.forEach((item) => {
      item.classList.remove('menu-item--light');
      item.classList.add('menu-item--dark');
    });
    mainHeaderPhone.classList.remove('link--light');
    mainHeaderPhone.classList.add('link--dark');
    body.style.position = 'fixed';
  };

  const closeMenu = () => {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--opened');
    mainHeaderContainer.classList.remove('main-header__container--opened');
    menuToggleIconMenu.classList.remove('visually-hidden');
    menuToggleIconCross.classList.add('visually-hidden');
    pageContainer.classList.remove('page__container--overlay');
    menuItems.forEach((item) => {
      item.classList.remove('menu-item--dark');
      item.classList.add('menu-item--light');
    });
    mainHeaderPhone.classList.remove('link--dark');
    mainHeaderPhone.classList.add('link--light');
    body.style.position = 'static';
  };

  menuToggle.addEventListener('click', () => {
    if (mainNavigation.classList.contains('main-navigation--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (!mainNavigation.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
};

export {attachMobileMenu};
