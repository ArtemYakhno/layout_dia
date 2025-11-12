const togglers = document.querySelectorAll('.menu__burger, .header__burger');
const menu = document.querySelector('.page__menu');

togglers.forEach(btn =>
  btn.addEventListener('click', () => {
    menu.classList.toggle('page__menu--is-open');
  })
);
