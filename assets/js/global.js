var global = (function($) {
    'use strict';

    //creates the HTML for the title font differences - temporary, need to improve if header changes.
    function titleHTML(title) {
        var titleArr = title.split(' ');

        var titleString = '<h1>' + titleArr[0] + '</h1>' + '<h2><span class="red-highlight">' + titleArr[1] + ' ' + titleArr[2] + '</span>' + titleArr[3] + '</h2>';

        document.querySelector('.header-title').innerHTML = titleString;
    }

    return {
        titleHTML: titleHTML
    };

})(jQuery);
