"use strict";

if (location.pathname !== "/" && location.pathname !== "/triangular-dots/") {
    $("body").html("");
    location.replace("notification.html");
} else {
    AOS.init({
        once: false,
        duration: 1500,
    });

    $(window).scroll(function () {
        var sticky = $("nav"),
            scroll = $(window).scrollTop();

        if (scroll >= 25) {
            sticky.addClass("shadow nav-fixed");
            $(".logo").attr("src", "icons/logo/logo-dark.png");
            $(".nav-link").removeClass("text-white").addClass("text-dark");
            $(".navbar-light .navbar-toggler-icon").css(
                "background-image",
                `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
            );
        } else {
            sticky.removeClass("shadow nav-fixed");
            $(".logo").attr("src", "icons/logo/logo-white.png");
            $(".nav-link").removeClass("text-dark").addClass("text-white");
            $(".navbar-light .navbar-toggler-icon").css(
                "background-image",
                `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
            );
        }
    });
}
