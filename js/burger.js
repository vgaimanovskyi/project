$(document).ready(function () {
    $(".js-hamburger").click(function () {
        $(this).toggleClass("hamburger--open")
        /* open */
        $(".menu__block--player").toggle();
        $(".menu__block--achieves").toggle();
        /* close */
        if (window.innerWidth >= 480) {
            $(".menu__block--avatar").toggle();
        }
        $(".menu__block--pos").toggle();
        $(".menu__block--lives").toggle();
        if (window.innerWidth < 480) {
            $(".menu__block--step").toggle();
            $(".menu__block--btn").toggle();
        }
        $(".menu__block--admin").toggle();

    })
})