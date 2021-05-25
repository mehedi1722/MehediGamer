$(document).ready(function(){
    // -----owl carousel ---
    $(".Slider_items").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navSpeed: 1000,
        autoplaySpeed: 1000,
        dotsSpeed: 1000,
        lazyLoadEager: 1
    });

    $('.popup').magnificPopup({
        type: 'iframe'
    });

    $(".free_fire").magnificPopup({
        type: 'iframe'
    })

    // animate js  

    new WOW().init();
    
});