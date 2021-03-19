if (document.querySelector(".navbar")) {
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", function () {
    document.documentElement.classList.toggle("navbar-active");
  });

  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 30) {
      document.querySelector(".navbar").classList.add("navbar--sticky");
    } else {
      document.querySelector(".navbar").classList.remove("navbar--sticky");
    }
  });
}
