$(document).ready(function () {
    $(".js-hamburger").click(function () {
        $(this).toggleClass("hamburger--open")
        /* open */
        $(".menu__block--player").toggle();
        $(".menu__block--achieves").toggle();
        /* close */
        $(".menu__block--pos").toggle();
        $(".menu__block--avatar").toggle();
        $(".menu__block--lives").toggle();
        $(".menu__block--admin").toggle();

    })
})