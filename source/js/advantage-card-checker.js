const updateAdvantagesSlides = () => {
  const wrapper = document.querySelector('.advantages__swiper-wrapper');
  const slides = wrapper.querySelectorAll('.advantage-card');

  if (!wrapper || !slides.length) {
    return;
  }

  const windowWidth = window.innerWidth;

  if (windowWidth >= 767 && windowWidth <= 1199) {
    if (slides.length % 2 !== 0) {
      slides[slides.length - 1].classList.add('advantage-card--wide');
    } else {
      slides[slides.length - 1].classList.remove('advantage-card--wide');
    }
  } else {
    slides[slides.length - 1].classList.remove('advantage-card--wide');
  }
};

document.addEventListener('DOMContentLoaded', updateAdvantagesSlides);
window.addEventListener('resize', updateAdvantagesSlides);

const observer = new MutationObserver(() => {
  updateAdvantagesSlides();
});

const wrapper = document.querySelector('.advantages__swiper-wrapper');

if (wrapper) {
  observer.observe(wrapper, {childList: true});
}

export {updateAdvantagesSlides};
