'use strict';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 30, //隙間の余白
    // centeredSlides: true,  //スライドの中央ぞろえ
    autoplay: {
        delay: 2000, //再生時間
        disableOnInteraction: false,
    },
    slidesPerView: 5, //一度に表示する枚数
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });