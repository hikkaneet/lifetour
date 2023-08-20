const attachVideoPlayer = () => {
  const heroSwiperContainer = document.querySelector('.hero__swiper');

  if (heroSwiperContainer) {
    heroSwiperContainer.addEventListener('click', (event) => {
      const clickedPlayButton = event.target.closest('.play-button');

      if (clickedPlayButton) {
        const heroVideo = clickedPlayButton.closest('.hero__video');
        if (heroVideo) {
          const iframe = document.createElement('iframe');
          iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
          iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          iframe.allowfullscreen = true;
          iframe.style.position = 'absolute';
          iframe.style.top = '0';
          iframe.style.zIndex = '2';
          iframe.style.border = '0';
          iframe.style.width = '100%';
          iframe.style.height = '100%';

          heroVideo.appendChild(iframe);
        }
      }
    });
  }
};

export {attachVideoPlayer};
