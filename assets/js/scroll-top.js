
window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".scroll-top");
    scroll.classList.toggle("scroll-top-sticky", window.scrollY > 0)
  })