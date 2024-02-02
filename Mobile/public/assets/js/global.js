$(document).ready(function () {
    var packages = $(".slick-wrapper");
    if (packages.length) {
        packages.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: null,
            nextArrow: null,
            centerMode: true,
            focusOnSelect: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
    $("#failed_button").on("click", function (e) {
        e.preventDefault();
        $("#formModal").css("opacity", 0.5);
        $("#formFailed").modal("show");
    });

    $("#success_button").on("click", function (e) {
        e.preventDefault();
        $("#formModal").css("opacity", 0.5);
        $("#formSuccess").modal("show");
    });

    $(".modal").on("hidden.bs.modal", function () {
        $("#formModal").css("opacity", 1);
    });
});
