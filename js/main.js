$(document).ready(function () {

$(".newsimg").magnificPopup({
    type:'image'
    });

    var menuButton = document.querySelector('.knp-fon');
    var menbut = document.querySelector('.menu-button');
    var menu = document.querySelector('.header');

    menuButton.addEventListener('click', function () {
        menbut.classList.toggle('menu-button-active');
        menu.classList.toggle('header-active');
    });

});