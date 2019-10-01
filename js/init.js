var initScripts = {
    adaptation: function () {
        var portfolio = $('#portfolio');
        var items = $('.items', portfolio);
        var filters = $('.filters li a', portfolio);

        items.imagesLoaded(function () {
            items.isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows',
                transitionDuration: '0.4s'
            });
        });

        filters.click(function () {
            var el = $(this);
            filters.removeClass('active');
            el.addClass('active');
            var selector = el.attr('data-filter');
            items.isotope({
                filter: selector
            });
            return false;
        });
    },
    
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {},
            end: function () {

                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }

            },
            scrollChange: function ($currentListItem) {

                //I get fired when you enter a section and I pass the list item of the section
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }
            }
        });

    },

    owlSlider: function () {
        $("#owl-demo").owlCarousel();

    },

    init: function () {
        initScripts.adaptation();
        initScripts.onePageNav();
        initScripts.fancybox();
        initScripts.owlSlider();
    }
}


$('document').ready(function () {

    initScripts.init();
    
    new WOW().init();

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
        controlNav: true,
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
