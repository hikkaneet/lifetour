const attachAudioPlayer = () => {
  const audioPlayerContainer = document.querySelector('.hero__swiper');

  if (audioPlayerContainer) {
    audioPlayerContainer.addEventListener('click', (event) => {
      const clickedButton = event.target.closest('.audio-player__play-button');

      if (clickedButton) {
        const audioPlayer = clickedButton.closest('.audio-player');
        if (audioPlayer) {
          const iframe = document.createElement('iframe');
          iframe.src = 'https://music.yandex.ru/iframe/#album/25474374';
          iframe.style.position = 'absolute';
          iframe.style.top = '0';
          iframe.style.zIndex = '4';
          iframe.style.border = '0';
          iframe.style.width = '100%';
          iframe.style.height = '100%';

          audioPlayer.appendChild(iframe);
        }
      }
    });
  }
};

export {attachAudioPlayer};

