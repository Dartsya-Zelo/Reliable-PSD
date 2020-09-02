document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("menu").onclick = function(event) {
        if (event.target.nodeName != 'A') return;
        for (let el of document.getElementsByClassName('dropdown-content')) {
            el.classList.remove('dropdown-show');
        }
        event.target.parentNode.nextElementSibling.classList.add('dropdown-show');
        return false;
    };
    document.getElementById("menuToggler").onclick = function(event) {
        event.stopPropagation();
        this.nextElementSibling.classList.toggle('show');
        this.classList.toggle('close');
        for (let el of document.getElementsByClassName('dropdown-content')) {
            el.classList.remove('dropdown-show')
        }
    }
    window.onclick = function(event) {
        if (!event.target.matches('.sub-menu')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('dropdown-show')) {
                    openDropdown.classList.remove('dropdown-show');
                }
            }
        }
    }
});
$(window).on('load', function() {
    $('.slider').slick({
        fade: true,
        speed: 500,
        cssEase: 'linear',
        swipe: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});