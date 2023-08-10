// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const initHeroSwiper = () => {
  // eslint-disable-next-line
  const heroSwiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    speed: 300,
  });
};

const initToursSwiper = () => {
  // eslint-disable-next-line
  const heroSwiper = new Swiper('.nearest-tours__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.nearest-tours__button-next',
      prevEl: '.nearest-tours__button-prev',
    },
  });
};

const initTrainingSwiper = () => {
  // eslint-disable-next-line
  const heroSwiper = new Swiper('.training__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.training__button-next',
      prevEl: '.training__button-prev',
    },
  });
};

const initReviewsSwiper = () => {
  // eslint-disable-next-line
  const heroSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });
};

initHeroSwiper();
initToursSwiper();
initTrainingSwiper();
initReviewsSwiper();


