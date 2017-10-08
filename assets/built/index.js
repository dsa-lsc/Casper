var floatingHeader = (function($) {
    'use strict';

    /* -----------------
    |  TO DO:
    |  Direct copy from post JS, need to clean up.
    |
    |  QUESTION: Where in the JS besides here is jQuery being used? Scrap it here.
    -------------------*/

    var title;
    var progressBar = document.querySelector('progress');
    var header = document.querySelector('.floating-header');
    title = document.querySelector('.post-full-title');

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
        var trigger = title.getBoundingClientRect().top + window.scrollY;
        var triggerOffset = title.offsetHeight + 35;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0aW5nLWhlYWRlci5qcyIsImdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmbG9hdGluZ0hlYWRlciA9IChmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB8ICBUTyBETzpcbiAgICB8ICBEaXJlY3QgY29weSBmcm9tIHBvc3QgSlMsIG5lZWQgdG8gY2xlYW4gdXAuXG4gICAgfFxuICAgIHwgIFFVRVNUSU9OOiBXaGVyZSBpbiB0aGUgSlMgYmVzaWRlcyBoZXJlIGlzIGpRdWVyeSBiZWluZyB1c2VkPyBTY3JhcCBpdCBoZXJlLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Byb2dyZXNzJyk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1oZWFkZXInKTtcbiAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWZ1bGwtdGl0bGUnKTtcblxuICAgIC8vIEZvciBwYWdlcyB3aXRob3V0IGEgdGl0bGUgZGlzcGxheVxuICAgIGlmKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaXQncyBhIHBhZ2UvcG9zdCwgaW5pdCB2aWRlbyBsaWJyYXJ5XG4gICAgICAgIHZhciAkcG9zdENvbnRlbnQgPSAkKFwiLnBvc3QtZnVsbC1jb250ZW50XCIpO1xuICAgICAgICAkcG9zdENvbnRlbnQuZml0VmlkcygpO1xuICAgIH1cblxuICAgIHZhciBsYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBsYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBsYXN0RG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcbiAgICB2YXIgdGlja2luZyA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgIGxhc3RTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHJlcXVlc3RUaWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIGxhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGxhc3REb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xuICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RUaWNrKCkge1xuICAgICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSB0aXRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgdmFyIHRyaWdnZXJPZmZzZXQgPSB0aXRsZS5vZmZzZXRIZWlnaHQgKyAzNTtcbiAgICAgICAgdmFyIHByb2dyZXNzTWF4ID0gbGFzdERvY3VtZW50SGVpZ2h0IC0gbGFzdFdpbmRvd0hlaWdodDtcblxuICAgICAgICAvLyBzaG93L2hpZGUgZmxvYXRpbmcgaGVhZGVyXG4gICAgICAgIGlmIChsYXN0U2Nyb2xsWSA+PSB0cmlnZ2VyICsgdHJpZ2dlck9mZnNldCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0aW5nLWFjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zsb2F0aW5nLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZ3Jlc3NCYXIuc2V0QXR0cmlidXRlKCdtYXgnLCBwcm9ncmVzc01heCk7XG4gICAgICAgIHByb2dyZXNzQmFyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsYXN0U2Nyb2xsWSk7XG5cbiAgICAgICAgdGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgfTtcblxufSkoalF1ZXJ5KTtcbiIsInZhciBnbG9iYWwgPSAoZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vY3JlYXRlcyB0aGUgSFRNTCBmb3IgdGhlIHRpdGxlIGZvbnQgZGlmZmVyZW5jZXMgLSB0ZW1wb3JhcnksIG5lZWQgdG8gaW1wcm92ZSBpZiBoZWFkZXIgY2hhbmdlcy5cbiAgICBmdW5jdGlvbiB0aXRsZUhUTUwodGl0bGUpIHtcbiAgICAgICAgdmFyIHRpdGxlQXJyID0gdGl0bGUuc3BsaXQoJyAnKTtcblxuICAgICAgICB2YXIgdGl0bGVTdHJpbmcgPSAnPGgxPicgKyB0aXRsZUFyclswXSArICc8L2gxPicgKyAnPGgyPjxzcGFuIGNsYXNzPVwicmVkLWhpZ2hsaWdodFwiPicgKyB0aXRsZUFyclsxXSArICcgJyArIHRpdGxlQXJyWzJdICsgJzwvc3Bhbj4nICsgdGl0bGVBcnJbM10gKyAnPC9oMj4nO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItdGl0bGUnKS5pbm5lckhUTUwgPSB0aXRsZVN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUhUTUw6IHRpdGxlSFRNTFxuICAgIH07XG5cbn0pKGpRdWVyeSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
