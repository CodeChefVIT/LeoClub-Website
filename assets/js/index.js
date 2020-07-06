(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // AOS Animations
    AOS.init();

})(jQuery);

// Navbar
$('nav > .navbar-collapse > ul > li > a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
});

