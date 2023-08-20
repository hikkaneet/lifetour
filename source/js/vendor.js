// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import './vendor/leaflet/leaflet';

const initHeroSwiper = () => {
  const swiperElement = document.querySelector('.hero__swiper');
  const paginationElement = document.querySelector('.hero__pagination');

  if (swiperElement && paginationElement) {
    // eslint-disable-next-line
    const heroSwiper = new Swiper(swiperElement, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: paginationElement,
        clickable: true,
      },
      speed: 300,
      /* eslint-disable */
      on: {
        init: function () {
          updateFocus(this.realIndex + 1);
        },
        slideChange: function () {
          updateFocus(this.realIndex + 1);
        },
      },
      /* eslint-enable */
    });
  }
};

function updateFocus(index) {
  const slides = document.querySelectorAll('.hero__slide');

  slides.forEach((slide, i) => {
    const elementsToFocus = slide.querySelectorAll('a, button');
    elementsToFocus.forEach((element) => {
      if (i === index) {
        element.removeAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });
  });
}

const initToursSwiper = () => {
  const swiperElement = document.querySelector('.nearest-tours__swiper');
  const nextButton = document.querySelector('.nearest-tours__button-next');
  const prevButton = document.querySelector('.nearest-tours__button-prev');

  if (swiperElement && nextButton && prevButton) {
    // eslint-disable-next-line
    const toursSwiper = new Swiper(swiperElement, {
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
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
};

const initTrainingSwiper = () => {
  const swiperElement = document.querySelector('.training__swiper');
  const nextButton = document.querySelector('.training__button-next');
  const prevButton = document.querySelector('.training__button-prev');

  if (swiperElement && nextButton && prevButton) {
    // eslint-disable-next-line
    const trainingSwiper = new Swiper(swiperElement, {
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
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
};

const initReviewsSwiper = () => {
  const swiperElement = document.querySelector('.reviews__swiper');
  const nextButton = document.querySelector('.reviews__button-next');
  const prevButton = document.querySelector('.reviews__button-prev');

  if (swiperElement && nextButton && prevButton) {
    // eslint-disable-next-line
    const reviewsSwiper = new Swiper(swiperElement, {
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
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
};

const initAdvantagesSwiper = () => {
  const advantagesSwiper = document.querySelector('.advantages__swiper');
  const buttonNext = document.querySelector('.advantages__button-next');
  const buttonPrev = document.querySelector('.advantages__button-prev');

  if (advantagesSwiper && buttonNext && buttonPrev) {
    let swiper;

    const initSwiper = () => {
      // eslint-disable-next-line
      swiper = new Swiper('.advantages__swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.advantages__button-next',
          prevEl: '.advantages__button-prev',
        },
      });
    };

    if (window.innerWidth > 1199) {
      initSwiper();
    }

    window.addEventListener('resize', () => {
      if (swiper && window.innerWidth <= 1199) {
        swiper.destroy();
      } else if (!swiper && window.innerWidth > 1199) {
        initSwiper();
      }
    });

  }
};

const initGallerySwiper = () => {
  const gallerySwiper = document.querySelector('.photo-gallery__swiper');
  const nextButton = document.querySelector('.photo-gallery__button-next');
  const prevButton = document.querySelector('.photo-gallery__button-prev');

  if (gallerySwiper && nextButton && prevButton) {
    // eslint-disable-next-line
    const gallerySwiper = new Swiper('.photo-gallery__swiper', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 5,
      centeredSlides: true,
      navigation: {
        nextEl: '.photo-gallery__button-next',
        prevEl: '.photo-gallery__button-prev',
      },
    });
    // gallerySwiper.slideTo(2);
  }
};

const initMap = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    // eslint-disable-next-line
    const map = L.map('map').setView([55.774836, 37.632664], 15);
    // eslint-disable-next-line
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    // eslint-disable-next-line
    const pin = L.icon({
      iconUrl: '../img/svg/pin-filled.svg',
      iconSize: [16, 20],
      iconAnchor: [8, 19],
    });
    // eslint-disable-next-line
    L.marker([55.774836, 37.632664], { icon: pin }).addTo(map);
  }
};

initHeroSwiper();
initToursSwiper();
initTrainingSwiper();
initReviewsSwiper();
initAdvantagesSwiper();
initGallerySwiper();
initMap();
