// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import './vendor/leaflet/leaflet';

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

const initAdvantagesSwiper = () => {
  const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (viewportWidth > 1199) {
    const advantagesSwiper = document.querySelector('.advantages__swiper');
    const buttonNext = document.querySelector('.advantages__button-next');
    const buttonPrev = document.querySelector('.advantages__button-prev');

    if (advantagesSwiper && buttonNext && buttonPrev) {
      // eslint-disable-next-line
      const heroSwiper = new Swiper('.advantages__swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoHeight: true,
        navigation: {
          nextEl: '.advantages__button-next',
          prevEl: '.advantages__button-prev',
        },
      });
    }
  }
};

const initGallerySwiper = () => {
  // eslint-disable-next-line
  const heroSwiper = new Swiper('.photo-gallery__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 5,
    centeredSlides: true,
    navigation: {
      nextEl: '.photo-gallery__button-next',
      prevEl: '.photo-gallery__button-prev',
    },
  });
};

const initMap = () => {
  // eslint-disable-next-line
  let map = L.map('map').setView([55.774836, 37.632664], 15);

  // eslint-disable-next-line
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // eslint-disable-next-line
  let pin = L.icon({
    iconUrl: '../img/svg/pin-filled.svg',
    iconSize: [16, 20],
    iconAnchor: [8, 19],
  });

  // eslint-disable-next-line
  L.marker([55.774836, 37.632664], {icon: pin}).addTo(map);
};


initHeroSwiper();
initToursSwiper();
initTrainingSwiper();
initReviewsSwiper();
initAdvantagesSwiper();
initGallerySwiper();
initMap();


