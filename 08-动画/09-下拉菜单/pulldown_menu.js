
$(document).ready(function () {

    // mouseover: 鼠标经过、mouseout：鼠标离开；
    // mouseenter：鼠标进入、mouseleave：鼠标离开；

    var $li = $(".wrapper>ul>li");
    $li.mouseenter(function () {
        // stop(): 停止正在执行的动画；
        $(this).children("ul").stop().slideDown();
    });

    $li.mouseleave(function () {
        $(this).children("ul").stop().slideUp();
    });
});


