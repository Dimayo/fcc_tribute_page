//Smooth scrolling
(function smoothScrolling() {
    "use strict";
    const navLink = document.querySelector('.header__nav-link');

    navLink.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(navLink.hash).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });
})();
