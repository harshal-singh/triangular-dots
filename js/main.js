"use strict";

AOS.init({
    once: false,
    duration: 1000,
});

$(window).scroll(function () {
    var sticky = $("nav"),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("sticky");
    else sticky.removeClass("sticky");
});
