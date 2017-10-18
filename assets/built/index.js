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
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            //Mobile, do not activate floating menu.
            console.log(navigator.userAgent);
        } else {
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

    //Controls the sub-navigation scrolling
    function subNavScroll(id) {
        var header = document.getElementById(id);
        var offset = header.offsetTop + 200;

        //temporarily using jQuery here to add a animation quickly.
        $('html, body').animate({ scrollTop: offset }, 300);
    }

    return {
        titleHTML: titleHTML,
        subNavScroll: subNavScroll
    };

})(jQuery);

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0aW5nLWhlYWRlci5qcyIsImdsb2JhbC5qcyIsIm1vYmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmxvYXRpbmdIZWFkZXIgPSAoZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfCAgVE8gRE86XG4gICAgfCAgLSBEaXJlY3QgY29weSBmcm9tIHBvc3QgSlMsIG5lZWQgdG8gY2xlYW4gdXAuXG4gICAgfCAgLSBOZWVkIHRvIERlLWFjdGl2YXRlIHRoaXMgaWYgbW9iaWxlIVxuICAgIHxcbiAgICB8ICBXaGVyZSBpbiB0aGUgSlMgYmVzaWRlcyBoZXJlIGlzIGpRdWVyeSBiZWluZyB1c2VkPyBTY3JhcCBpdCBoZXJlLlxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgdmFyIHRpdGxlO1xuICAgIHZhciBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Byb2dyZXNzJyk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbG9hdGluZy1oZWFkZXInKTtcbiAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LWZ1bGwtdGl0bGUnKTtcbiAgICB2YXIgbWFpbkhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcblxuICAgIC8vIEZvciBwYWdlcyB3aXRob3V0IGEgdGl0bGUgZGlzcGxheVxuICAgIGlmKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbG9nbycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vaXQncyBhIHBhZ2UvcG9zdCwgaW5pdCB2aWRlbyBsaWJyYXJ5XG4gICAgICAgIHZhciAkcG9zdENvbnRlbnQgPSAkKFwiLnBvc3QtZnVsbC1jb250ZW50XCIpO1xuICAgICAgICAkcG9zdENvbnRlbnQuZml0VmlkcygpO1xuICAgIH1cblxuICAgIHZhciBsYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIHZhciBsYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBsYXN0RG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcbiAgICB2YXIgdGlja2luZyA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgIGxhc3RTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIHJlcXVlc3RUaWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIGxhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGxhc3REb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xuICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RUaWNrKCkge1xuICAgICAgICBpZiAoIXRpY2tpbmcpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxCQnxQbGF5Qm9va3xJRU1vYmlsZXxXaW5kb3dzIFBob25lfEtpbmRsZXxTaWxrfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAvL01vYmlsZSwgZG8gbm90IGFjdGl2YXRlIGZsb2F0aW5nIG1lbnUuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gbWFpbkhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyT2Zmc2V0ID0gbWFpbkhlYWRlci5vZmZzZXRIZWlnaHQgLSAyNTtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzc01heCA9IGxhc3REb2N1bWVudEhlaWdodCAtIGxhc3RXaW5kb3dIZWlnaHQ7XG5cbiAgICAgICAgICAgIC8vIHNob3cvaGlkZSBmbG9hdGluZyBoZWFkZXJcbiAgICAgICAgICAgIGlmIChsYXN0U2Nyb2xsWSA+PSB0cmlnZ2VyICsgdHJpZ2dlck9mZnNldCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmbG9hdGluZy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zsb2F0aW5nLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zZXRBdHRyaWJ1dGUoJ21heCcsIHByb2dyZXNzTWF4KTtcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBsYXN0U2Nyb2xsWSk7XG5cbiAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICB9O1xuXG59KShqUXVlcnkpO1xuIiwidmFyIGdsb2JhbCA9IChmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy9jcmVhdGVzIHRoZSBIVE1MIGZvciB0aGUgdGl0bGUgZm9udCBkaWZmZXJlbmNlcyAtIHRlbXBvcmFyeSwgbmVlZCB0byBpbXByb3ZlIGlmIGhlYWRlciBjaGFuZ2VzLlxuICAgIGZ1bmN0aW9uIHRpdGxlSFRNTCh0aXRsZSkge1xuICAgICAgICB2YXIgdGl0bGVBcnIgPSB0aXRsZS5zcGxpdCgnICcpO1xuXG4gICAgICAgIHZhciB0aXRsZVN0cmluZyA9ICc8aDE+JyArIHRpdGxlQXJyWzBdICsgJzwvaDE+JyArICc8aDI+PHNwYW4gY2xhc3M9XCJyZWQtaGlnaGxpZ2h0XCI+JyArIHRpdGxlQXJyWzFdICsgJyAnICsgdGl0bGVBcnJbMl0gKyAnPC9zcGFuPicgKyB0aXRsZUFyclszXSArICc8L2gyPic7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci10aXRsZScpLmlubmVySFRNTCA9IHRpdGxlU3RyaW5nO1xuICAgIH1cblxuICAgIC8vQ29udHJvbHMgdGhlIHN1Yi1uYXZpZ2F0aW9uIHNjcm9sbGluZ1xuICAgIGZ1bmN0aW9uIHN1Yk5hdlNjcm9sbChpZCkge1xuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gaGVhZGVyLm9mZnNldFRvcCArIDIwMDtcblxuICAgICAgICAvL3RlbXBvcmFyaWx5IHVzaW5nIGpRdWVyeSBoZXJlIHRvIGFkZCBhIGFuaW1hdGlvbiBxdWlja2x5LlxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogb2Zmc2V0IH0sIDMwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVIVE1MOiB0aXRsZUhUTUwsXG4gICAgICAgIHN1Yk5hdlNjcm9sbDogc3ViTmF2U2Nyb2xsXG4gICAgfTtcblxufSkoalF1ZXJ5KTtcbiIsInZhciBtb2JpbGUgPSAoZnVuY3Rpb24oJCwgd2luZG93KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy9jb250cm9scyBtb2JpbGUgbWVudVxuICAgIGZ1bmN0aW9uIG1vYmlsZU1lbnVUb3VjaCgpIHtcbiAgICAgICAgdmFyIG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1uYXYnKTtcbiAgICAgICAgdmFyIGRpc3BsYXlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdk1lbnUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKTtcblxuICAgICAgICBpZihkaXNwbGF5U3R5bGUgPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYuc2l0ZS1uYXYnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdi5zaXRlLW5hdicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtb2JpbGVNZW51VG91Y2g6IG1vYmlsZU1lbnVUb3VjaFxuICAgIH07XG5cbn0pKGpRdWVyeSwgd2luZG93KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
