var floatingHeader = (function($) {
    'use strict';

    /* -----------------
    |  TO DO:
    |  - Direct copy from post JS, need to clean up.
    |  - Need to De-activate this if mobile!
    |
    |  Where in the JS besides here is jQuery being used? Scrap it here.
    -------------------*/

    var title;
    var progressBar = document.querySelector('progress');
    var header = document.querySelector('.floating-header');
    title = document.querySelector('.post-full-title');
    var mainHeader = document.getElementById('header');

    // For pages without a title display
    if(!title) {
        title = document.querySelector('.header-logo');
    } else {
        //it's a page/post, init video library
        var $postContent = $(".post-full-content");
        $postContent.fitVids();
    }

    var lastScrollY = window.scrollY;
    var lastWindowHeight = window.innerHeight;
    var lastDocumentHeight = $(document).height();
    var ticking = false;

    window.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onResize, false);

    function onScroll() {
        lastScrollY = window.scrollY;
        requestTick();
    }

    function onResize() {
        lastWindowHeight = window.innerHeight;
        lastDocumentHeight = $(document).height();
        requestTick();
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }

    function update() {
        var trigger = mainHeader.getBoundingClientRect().top + window.scrollY;
        var triggerOffset = mainHeader.offsetHeight - 25;
        var progressMax = lastDocumentHeight - lastWindowHeight;

        // show/hide floating header
        if (lastScrollY >= trigger + triggerOffset) {
            header.classList.add('floating-active');
        } else {
            header.classList.remove('floating-active');
        }

        progressBar.setAttribute('max', progressMax);
        progressBar.setAttribute('value', lastScrollY);

        ticking = false;
    }

    return {
        update: update
    };

})(jQuery);
