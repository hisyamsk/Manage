function myFunction(x) {
  if (x.matches) {
    // If media query matches
    var swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    var swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    });
  }
}

var x = window.matchMedia("(max-width: 720px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

let modal = document.querySelector(".modal");
let hamburger = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  modal.style.display = "block";
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      hamburger.classList.toggle("open");
    }
  };
});
