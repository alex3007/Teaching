// Main init
$('document').ready(function () {

    //fancybox    
    $(".fancybox").fancybox();

    //onePageNav  

    $('.navbar-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {}
    });

    //owlSlider
    // $("#owl-demo").owlCarousel();

    //wow
    new WOW().init();

    //flexSlider
    $('#main-slider').flexslider({
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: false,

        // Usability features
        pauseOnAction: true,
        pauseOnHover: false,
        useCSS: true,
        touch: true,
        video: false,

        // Primary Controls
        controlNav: false,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",

        // Secondary Navigation
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: 'Pause',
        playText: 'Play',

        // Special properties
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
    });

});
