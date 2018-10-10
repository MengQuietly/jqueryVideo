
$(document).ready(function () {

    $("input").eq(0).click(function () {
        // animate(prop, [speed], [swing/linear], [callback])
        // prop： 动画样式 ,例：{left: 100};
        // 执行效果: swing-摇摆，linear-匀速 ；
        $("#box1").animate({left:600}, 6000);
        $("#box2").animate({left:600}, 6000, "swing");
        $("#box3").animate({left:600}, 6000, "linear", function () {
            $("#box3").css("left", "0px");
        });
    });


});


