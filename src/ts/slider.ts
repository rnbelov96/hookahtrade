export {};

const descSwiper = new Swiper('.desc__slider', {
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 25,
  enabled: true,
  pagination: {
    el: '.desc__slider-pagination',
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const shopsSwiper = new Swiper('.shops__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.shops__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.shops__slider-btn_next',
    prevEl: '.shops__slider-btn_prev',
  },
});

const clientsswiper = new Swiper('.clients__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.clients__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients__slider-btn_next',
    prevEl: '.clients__slider-btn_prev',
  },
});
