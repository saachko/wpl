const shadow = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav__list');

const toggleBurgerMenu = () => {
  shadow.classList.toggle('overlay_active');
  document.body.classList.toggle('lock_scroll');
  burgerMenu.classList.toggle('burger-menu_active');

  if (!navList.classList.contains('burger-menu__nav')) {
    navList.classList.add('burger-menu__nav');
    setTimeout(() => {
      navList.classList.add('burger-menu__nav_active');
    }, 0);
  } else {
    navList.classList.remove('burger-menu__nav_active');
    setTimeout(() => {
      navList.classList.remove('burger-menu__nav');
    }, 200);
  }
};

burgerMenu.addEventListener('click', toggleBurgerMenu);
shadow.addEventListener('click', toggleBurgerMenu);

const accordions = document.getElementsByClassName('accordion');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', () => {
    accordions[i].classList.toggle('active');
    const panel = accordions[i].nextElementSibling;
    panel.classList.toggle('panel_active');
  });
}
