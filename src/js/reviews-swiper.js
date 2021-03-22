import Swiper from "swiper";

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

if (document.querySelector(".reviews-swiper")) {
  const swiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 25,

    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 25,
      },

      1000: {
        slidesPerView: 3,
        spaceBetween: 35,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 94,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-swiper-next",
      prevEl: ".reviews-swiper-prev",
    },
  });
}
