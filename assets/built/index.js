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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0aW5nLWhlYWRlci5qcyIsImdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmxvYXRpbmdIZWFkZXIgPSAoZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfCAgVE8gRE86XG4gICAgfCAgLSBEaXJlY3QgY29weSBmcm9tIHBvc3QgSlMsIG5lZWQgdG8gY2xlYW4gdXAuXG4gICAgfCAgLSBOZWVkIHRvIERlLWFjdGl2YXRlIHRoaXMgaWYgbW9iaWxlIVxuICAgIHxcbiAgICB8ICBXaGVyZSBpbiB0aGUgSlMgYmVzaWRlcyBoZXJlIGlzIGpRdWVyeSBiZWluZyB1c2VkPyBTY3JhcCBpdCBoZXJlLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Byb2dyZXNzJyk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1oZWFkZXInKTtcbiAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWZ1bGwtdGl0bGUnKTtcbiAgICB2YXIgbWFpbkhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcblxuICAgIC8vIEZvciBwYWdlcyB3aXRob3V0IGEgdGl0bGUgZGlzcGxheVxuICAgIGlmKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaXQncyBhIHBhZ2UvcG9zdCwgaW5pdCB2aWRlbyBsaWJyYXJ5XG4gICAgICAgIHZhciAkcG9zdENvbnRlbnQgPSAkKFwiLnBvc3QtZnVsbC1jb250ZW50XCIpO1xuICAgICAgICAkcG9zdENvbnRlbnQuZml0VmlkcygpO1xuICAgIH1cblxuICAgIHZhciBsYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBsYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBsYXN0RG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcbiAgICB2YXIgdGlja2luZyA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgIGxhc3RTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHJlcXVlc3RUaWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIGxhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGxhc3REb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xuICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RUaWNrKCkge1xuICAgICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBtYWluSGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB2YXIgdHJpZ2dlck9mZnNldCA9IG1haW5IZWFkZXIub2Zmc2V0SGVpZ2h0IC0gMjU7XG4gICAgICAgIHZhciBwcm9ncmVzc01heCA9IGxhc3REb2N1bWVudEhlaWdodCAtIGxhc3RXaW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgLy8gc2hvdy9oaWRlIGZsb2F0aW5nIGhlYWRlclxuICAgICAgICBpZiAobGFzdFNjcm9sbFkgPj0gdHJpZ2dlciArIHRyaWdnZXJPZmZzZXQpIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmbG9hdGluZy1hY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdmbG9hdGluZy1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2dyZXNzQmFyLnNldEF0dHJpYnV0ZSgnbWF4JywgcHJvZ3Jlc3NNYXgpO1xuICAgICAgICBwcm9ncmVzc0Jhci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbGFzdFNjcm9sbFkpO1xuXG4gICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgIH07XG5cbn0pKGpRdWVyeSk7XG4iLCJ2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvL2NyZWF0ZXMgdGhlIEhUTUwgZm9yIHRoZSB0aXRsZSBmb250IGRpZmZlcmVuY2VzIC0gdGVtcG9yYXJ5LCBuZWVkIHRvIGltcHJvdmUgaWYgaGVhZGVyIGNoYW5nZXMuXG4gICAgZnVuY3Rpb24gdGl0bGVIVE1MKHRpdGxlKSB7XG4gICAgICAgIHZhciB0aXRsZUFyciA9IHRpdGxlLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgdmFyIHRpdGxlU3RyaW5nID0gJzxoMT4nICsgdGl0bGVBcnJbMF0gKyAnPC9oMT4nICsgJzxoMj48c3BhbiBjbGFzcz1cInJlZC1oaWdobGlnaHRcIj4nICsgdGl0bGVBcnJbMV0gKyAnICcgKyB0aXRsZUFyclsyXSArICc8L3NwYW4+JyArIHRpdGxlQXJyWzNdICsgJzwvaDI+JztcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXRpdGxlJykuaW5uZXJIVE1MID0gdGl0bGVTdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVIVE1MOiB0aXRsZUhUTUxcbiAgICB9O1xuXG59KShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
