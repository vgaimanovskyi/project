$(document).ready(function () {

    /* ------ panel-carousel ------ */
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
    /* quest 1 */
    $(".panel-carousel--quest1 .slick-prev").click(function () {
        $(".panel-block__col--quest1 .panel__photo--show").removeClass("panel__photo--show").prev().addClass("panel__photo--show");
    });
    $(".panel-carousel--quest1 .slick-next").click(function () {
        $(".panel-block__col--quest1 .panel__photo--show").removeClass("panel__photo--show").next().addClass("panel__photo--show");
    });
    /* quest 20 */
    $(".panel-carousel--quest20 .slick-prev").click(function () {
        $(".panel-block__col--quest20 .panel__photo--show").removeClass("panel__photo--show").prev().addClass("panel__photo--show");
    });
    $(".panel-carousel--quest20 .slick-next").click(function () {
        $(".panel-block__col--quest20 .panel__photo--show").removeClass("panel__photo--show").next().addClass("panel__photo--show");
    });
    /* quest 23 */
    $(".panel-carousel--quest23 .slick-prev").click(function () {
        $(".panel-block__col--quest23 .panel__photo--show").removeClass("panel__photo--show").prev().addClass("panel__photo--show");
    });
    $(".panel-carousel--quest23 .slick-next").click(function () {
        $(".panel-block__col--quest23 .panel__photo--show").removeClass("panel__photo--show").next().addClass("panel__photo--show");
    });

    /* ------ start-carousel ------ */
    $(".start-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        touchMove: false,
        fade: true,
        swipe: false
    });

    /* ------ main-carousel ------ */
    $(".main-carousel").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        appendDots: $(".aside-menu"),
        arrows: false,
        touchMove: false,
        fade: true,
        swipe: false
    });
    $(".aside-menu #slick-slide-control00").text("О проекте");
    $(".aside-menu #slick-slide-control01").text("Управление");
    $(".aside-menu #slick-slide-control02").text("Квесты");
    $(".aside-menu #slick-slide-control03").text("Благодарность");
})