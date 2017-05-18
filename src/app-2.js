'use strict';

var isScroll = true;

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

$('#menu').on('touchstart', function () {
    var top = this.scrollTop,
        heightTotal = this.scrollHeight,
        heightView = this.offsetHeight;
    if (top == 0) {
        this.scrollTop = 1;
    }
    if (heightTotal - heightView == top) {
        this.scrollTop = top - 1;
    }
});

$('#menu').on('touchmove', function () {
    if ($('#menu')[0].offsetHeight < $('#menu')[0].scrollHeight) {
        isScroll = true;
    } else {
        isScroll = false;
    }
});

$('#panel').on('touchmove', function (event) {
    if ($('html').hasClass('slideout-open')) {
        event.preventDefault();
    }
});

$('body').on('touchmove', function (event) {
    if (!isScroll && $('html').hasClass('slideout-open')) {
        event.preventDefault();
    }
});
