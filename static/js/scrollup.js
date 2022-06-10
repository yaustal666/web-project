'use strict';

function scrollUp() {
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -10);
    setTimeout(scrollUp, 0);
    }
}

var goTopBtn = document.querySelector('.scrollup');

goTopBtn.addEventListener('click', scrollUp);