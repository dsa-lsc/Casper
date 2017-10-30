var mobile = (function($, window) {
    'use strict';

    //controls mobile menu
    function mobileMenuTouch() {
        var navMenu = document.querySelector('.site-nav');
        var displayStyle = window.getComputedStyle(navMenu, null).getPropertyValue('display');

        if(displayStyle == 'none') {
            document.querySelector('nav.site-nav').style.display = 'block';
        } else {
            document.querySelector('nav.site-nav').style.display = 'none';
        }
    }

    return {
        mobileMenuTouch: mobileMenuTouch
    };

})(jQuery, window);
