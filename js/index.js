console.log("testing");

$(document).ready(function () {
    $('.hero').hide().fadeIn(2500);
});

$('.redline p').hover(function() {
    $(this).stop().animate({ fontSize : '16px' });
},
function() {
    $(this).stop().animate({ fontSize : '15px' });
});

