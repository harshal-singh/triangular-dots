"use strict";

AOS.init({
    once: false,
    duration: 1500,
});

$(window).scroll(function () {
    var sticky = $("nav"),
        scroll = $(window).scrollTop();

    if (scroll >= 25) {
        sticky.addClass("shadow nav-fixed");
    } else {
        sticky.removeClass("shadow nav-fixed");
    }
});
