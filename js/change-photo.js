window.addEventListener('resize', updateImage);
window.addEventListener('load', updateImage);

function updateImage() {
  const heroImage = document.querySelector('.hero__image-item');
  const screenWidth = window.screen.width;

  if (screenWidth > 375) {
    heroImage.src = 'img/main-photo-big.jpg';
  } else {
    heroImage.src = 'img/main-photo-small.jpg';
  }
}
