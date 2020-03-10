$(document).ready(function () {
    $("#news-slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            '<img src="img/icon/left.svg" alt="">',
            '<img src="img/icon/right.svg" alt="">'

        ],
        pagination: true,
        autoPlay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});