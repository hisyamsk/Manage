// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         var swiper = new Swiper('.swiper-container', {
//             autoplay: {
//                 delay: 5000,
//                 disableOnInteraction: false,
//             },
//             loop: true,
//             slidesPerView: 1,
//             spaceBetween: 0,
//             centeredSlides: true,
//             pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//             },
//         });
//     } else {
//         var swiper = new Swiper('.swiper-container', {
//             autoplay: {
//                 delay: 5000,
//                 disableOnInteraction: false,
//             },
//             loop: true,
//             slidesPerView: 3,
//             spaceBetween: 30,
//             centeredSlides: true,
//         });
//     }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});