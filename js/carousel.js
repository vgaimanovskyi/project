$(document).ready(function () {

    $(".panel-carousel").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        touchMove: false,
        swipe: false
    });
    $(".panel-carousel .slick-prev").text("Назад");
    $(".panel-carousel .slick-next").text("Далее");

    $(".panel-carousel .slick-prev").click(function () {
        $(".panel__photo--show").removeClass("panel__photo--show").prev().addClass("panel__photo--show");
    });
    $(".panel-carousel .slick-next").click(function () {
        $(".panel__photo--show").removeClass("panel__photo--show").next().addClass("panel__photo--show");
    });

    $(".start-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        touchMove: false,
        fade: true,
        swipe: false
    });
})
