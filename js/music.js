document.addEventListener('DOMContentLoaded', function () {
  const audio = new Audio('assets/music.mp3');
  const playButton = document.querySelector('.js-play-music');

  playButton.addEventListener('click', function () {
    audio.play();
  });
});
