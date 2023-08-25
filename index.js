document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            const altColors = document.getElementsByClassName("alt-item")
            var mainMenuItems = document.querySelectorAll('.main-item-color');
            var altMenuItems = document.querySelectorAll('.alt-item-color');

            altMenuItems.forEach(function(item) {
                item.classList.toggle('alt-menu-color');
            });

            mainMenuItems.forEach(function(item) {
                item.classList.toggle('main-menu-color');
            });

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
});