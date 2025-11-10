'use strict';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,

  navigation: {
    nextEl: '.slider__navigation--next',
    prevEl: '.slider__navigation--prev',
  },
});

document.documentElement.style.setProperty(
  '--scrollbar-width',
  `${window.innerWidth - document.documentElement.clientWidth}px`
);

