// Slider https://kenwheeler.github.io/slick/

$('[data-slider]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
