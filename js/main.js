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

if (location.pathname !== "/triangular-dots/") {
    document.querySelector(
        "body"
    ).innerHTML = `<section class="bg-light d-flex align-items-center justify-content-center" style="width: 100vw; height: 100vh"><div class="container text-center"><h2>⚠</h2><h4 class="font-b mb-5 mt-4">You need permission <br /> to view this page!
    </h4> <a href="/triangular-dots/" class="btn btn-outline-dark">Go to Home Page</a> </div></section>`;
} else {
    console.log("home page");
}
