const page = document.querySelector('.page__body');
const button = document.querySelector('.header__button');

button.addEventListener('click', () => {
  page.classList.toggle('page__body--dark');
})

new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
