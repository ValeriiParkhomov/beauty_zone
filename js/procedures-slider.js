const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.carousel-button.next',
        prevEl: '.carousel-button.prev',
    },

});