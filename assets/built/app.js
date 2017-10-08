(function($) {
    'use strict';

    var App = require('ghost-app');

    function handlebarHelpers () {
        //Get the current page
        //hbs.registerHelper('page', function() {
            console.log(window.location.pathname);
        //    return window.location.pathname;
        //});
    }


    // All Functions/Variables to be loaded on ready
    $(function() {
      handlebarHelpers();
    });

})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgQXBwID0gcmVxdWlyZSgnZ2hvc3QtYXBwJyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGViYXJIZWxwZXJzICgpIHtcbiAgICAgICAgLy9HZXQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvL2hicy5yZWdpc3RlckhlbHBlcigncGFnZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgLy8gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgLy99KTtcbiAgICB9XG5cblxuICAgIC8vIEFsbCBGdW5jdGlvbnMvVmFyaWFibGVzIHRvIGJlIGxvYWRlZCBvbiByZWFkeVxuICAgICQoZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGViYXJIZWxwZXJzKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
