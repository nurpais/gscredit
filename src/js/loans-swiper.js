import Swiper from "swiper";

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

if (document.querySelector(".loans-swiper")) {
  const swiperInfo = document.querySelectorAll(".swiper-info");

  const swiper = new Swiper(".loans-swiper", {
    loop: true,
    slidesPerView: 1.6,
    spaceBetween: 14,
    centeredSlides: true,

    breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".loans-swiper .swiper-button-next",
      prevEl: ".loans-swiper .swiper-button-prev",
    },
  });

  swiper.slideToLoop(2);

  // document.querySelector(".loans-swiper .swiper-button-next").addEventListener("click", function () {
  //   swiper.slideNext();
  // });

  // document.querySelector(".loans-swiper .swiper-button-prev").addEventListener("click", function () {
  //   swiper.slidePrev();
  // });

  swiperInfo[swiper.realIndex].style.display = "block";

  swiper.on("slideChange", function () {
    swiperInfo.forEach(function (el) {
      el.style.opacity = 0;
      setTimeout(() => {
        if (swiperInfo[swiper.realIndex]) {
          el.style.display = "none";
          swiperInfo[swiper.realIndex].style.display = "block";

          setTimeout(() => {
            el.style.opacity = 1;
          }, 10);
        }
      }, 200);
    });
  });
}
