import "./style.css";

import Swiper from 'swiper';
const buttonBuy = document.querySelector('.card__button');
const buttonPrice = document.querySelector('.card__price');

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  fadeEffect: {
    crossFade: 'true'
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.customers__button-next',
    prevEl: '.customers__button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

