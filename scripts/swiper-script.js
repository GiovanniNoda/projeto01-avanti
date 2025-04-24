new Swiper('.swiper', {
   loop: false,
   spaceBetween: 8,

   pagination: {
       el: '.swiper-pagination',
       clickable: true,
       dynamicBullets: true
   },

   navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
   },

   breakpoints: {
       0: {
           slidesPerView: 1,
       },
       375: {
           slidesPerView: 2,
       },
       768: {
           slidesPerView: 3,
       },
       1024: {
           slidesPerView: 5,
       }
    }
})