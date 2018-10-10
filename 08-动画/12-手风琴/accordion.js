
$(document).ready(function () {

    var $li = $("#box li");
    for (var i = 0; i < $li.length; i++) {
        $li.eq(i).css("backgroundImage", "url(img/" + (i + 1) + ".jpg)");
    }

    $li.mouseenter(function () {
        $(this).stop().animate({width:800}).siblings().stop().animate({width:100});
    }).mouseleave(function () {
        $li.stop().animate({width:240});
    });

});


