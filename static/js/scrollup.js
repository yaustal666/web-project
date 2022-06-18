'use strict';

function scrollUp() {
    if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(scrollUp, 0);
    }
}

var scrollupButton = document.querySelector('.scrollup');

scrollupButton.addEventListener('click', scrollUp);