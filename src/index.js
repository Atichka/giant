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

// var reply_click = function()
// {
//   event.target.classList.toggle('gradient');
// }
// document.getElementById('0').onclick = reply_click;
// document.getElementById('1').onclick = reply_click;
// document.getElementById('2').onclick = reply_click;
// document.getElementById('3').onclick = reply_click;

// buttonBuy.addEventListener('click', function() {
//   alert(buttonBuy.id);
//   event.target.classList.toggle('gradient');
// });

// window.onload = function () {
  // var buttonBuy = document.getElementsByTagName("card__button");
  // for(var i = 0; i < buttonBuy.length; i++) {
  // buttonBuy[i].onclick = function () {
    // event.target.classList.toggle('gradient');
        //  }
        // }
// })

// window.onload = function () {
//   for(let i = 0; i < buttonBuy.length; i++) {
//     buttonBuy.se = i;
//   }
// }
