const particleHeart = document.querySelector('.particle-heart');

particleHeart.addEventListener('click', () => {
  particleHeart.classList.toggle('active');

  setTimeout(() => {
    particleHeart.classList.remove('active');
  }, 1000);
});