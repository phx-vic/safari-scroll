'use strict';

var sidebar = {};

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
});

$('.menu').on('click', function (event) {
    event.preventDefault();
    slideout.toggle();
});

$('#menu').on('touchstart', function (event) {
    sidebar.allowUp = this.scrollTop > 0;
    sidebar.allowDown = this.scrollTop < (this.scrollHeight - this.offsetHeight);
    sidebar.prevTop = null;
    sidebar.prevBot = null;
    sidebar.lastY = event.originalEvent.touches[0].pageY;
});

$('#menu').on('touchmove', function (event) {
    var up = event.originalEvent.touches[0].pageY > sidebar.lastY,
        down = !up;
    sidebar.lastY = event.originalEvent.touches[0].pageY;
    if ((up && sidebar.allowUp) || (down && sidebar.allowDown)) {
        event.stopPropagation();
    } else {
        event.preventDefault();
    }
});

$('#panel').on('touchmove', function (event) {
    if ($('html').hasClass('slideout-open')) {
        event.preventDefault();
    }
});
