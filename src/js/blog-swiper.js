import Swiper from "swiper";

// core version + navigation, pagination modules:
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

if (document.querySelector(".blog-swiper")) {
  const swiper = new Swiper(".blog-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: ".blog-swiper .swiper-pagination",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 32,
        loop: true,
      },
    },
  });
}
