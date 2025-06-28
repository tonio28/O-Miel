document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const header = document.querySelector('.header');
  const closeButton = document.querySelector('.header__close');
  const faqButtons = document.querySelectorAll('.faq__question');

  const toggleNav = (open) => {
    burgerButton.setAttribute('aria-expanded', open);
    header.classList.toggle('open', open);
    document.body.classList.toggle('no-scroll', open);
  };

  burgerButton.addEventListener('click', () => {
    const expanded = burgerButton.getAttribute('aria-expanded') === 'true';
    toggleNav(!expanded);
  });

  closeButton.addEventListener('click', () => toggleNav(false));

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
  });

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answerId = button.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', !expanded);
      answer.hidden = expanded;
      button.parentElement.classList.toggle('active');
    });
  });

  gsap.registerPlugin(ScrollTrigger, SplitText);

  gsap.utils.toArray('.hero__product, .hero__decor, .brand__image, .product__feature, .testimonial, .faq__item').forEach(el => {
    gsap.from(el, {
      y: 20, opacity: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 80%' }
    });
  });

  document.fonts.ready.then(() => {
    gsap.utils.toArray('h2').forEach(heading => {
      const split = new SplitText(heading, { type: 'chars' });
      gsap.from(split.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%'
        }
      });
    });
  });

  gsap.from(".hero__content", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  document.fonts.ready.then(() => {
    gsap.set(".split", { opacity: 1 });
  
    gsap.utils.toArray('.split').forEach(el => {
      let splitInstance = SplitText.create(el, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true
      });
  
      gsap.from(splitInstance.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%"
        }
      });
    });
  });

  ScrollTrigger.refresh();
  
});