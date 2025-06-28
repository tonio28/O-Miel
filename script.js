
document.addEventListener("DOMContentLoaded", () => {
    
    const burgerButton = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const closeButton = document.querySelector('.header__close');
    
    burgerButton.addEventListener('click', () => {
        const expanded = burgerButton.getAttribute('aria-expanded') === 'true';
        burgerButton.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');
        document.body.classList.toggle('no-scroll', nav.classList.contains('open'));
      });
      
      closeButton.addEventListener('click', () => {
        burgerButton.setAttribute('aria-expanded', false);
        nav.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
      
      document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
          burgerButton.setAttribute('aria-expanded', false);
          nav.classList.remove('open');
          document.body.classList.remove('no-scroll');
        });
    });
});
