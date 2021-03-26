if (document.querySelector(".blog-category-wrapper")) {
  const blogCategoryWrapper = document.querySelector(".blog-category-wrapper");
  const blogCategory = document.querySelector(".blog-category");
  const blogCategoryIcon = document.querySelector(".blog-category-wrapper-icon");

  blogCategoryWrapper.addEventListener("click", function (ev) {
    blogCategory.style.height = blogCategory.scrollHeight + 10 + "px";
    blogCategory.style.paddingBottom = "22px";

    blogCategoryWrapper.classList.add("active");
  });

  blogCategoryWrapper.addEventListener("mouseleave", function (ev) {
    blogCategory.style.height = "50px";
    blogCategory.style.paddingBottom = "12px";
    blogCategoryWrapper.classList.remove("active");
  });

  //   blogCategoryIcon.addEventListener("click", function (ev) {
  //     blogCategory.style.height = "50px";
  //     blogCategory.style.paddingBottom = "12px";
  //     blogCategoryWrapper.classList.remove("active");
  //   });
}
