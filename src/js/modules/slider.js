export const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  slidesPerView: 2,
  autoHeight: true,
  slidersPerGroup: 1,

  navigation: {
    nextEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: {
      spaceBetween: 0,
    },
    768: {
      slideToClickedSlide: true,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
  },

  on: {
    slideChangeTransitionEnd: function () {
      if (window.innerWidth > 768) {
        const slides = this.slides;
        const activeIndex = this.activeIndex;

        slides.forEach(function (slide, index) {
          const slideContent = slide.querySelector('.slide__content');
          if (index === activeIndex) {
            slideContent.classList.add('small');
            slideContent.classList.remove('big');
          } else {
            slideContent.classList.add('big');
            slideContent.classList.remove('small');
          }
        });
      }
    },
  },
});
