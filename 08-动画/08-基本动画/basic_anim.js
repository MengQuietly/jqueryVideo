
$(document).ready(function () {


    // 1、基本动画：显示、隐藏
    $(".sigle").eq(0).click(function () {
        // 1）无动画（无参无动画）：show()
        // $(".content").show();

        // 2）有动画时间的动画：show(speed)；
        // speed:动画的持续时间  可以是毫秒值 还可以是固定字符串 或者 其他字符串。
        // fast:200ms 、normal:400ms 、slow:600；
        // $(".content").show(2000);
        // $(".content").show("ddd");

        // 3）有动画时间+回调的动画：show(speed, [callback])
        $(".content").show(2000, function () {
            console.log("哈哈，动画执行完成回调啦");
        })
    });

    $(".sigle").eq(1).click(function () {
        $(".content").hide();
    });

    $(".sigle").eq(2).click(function () {
        $(".content").toggle(2000);
    });



    // 2、滑入、滑出动画：（slideDown(无参)，默认值normal）
    // 滑入: slideDown(）  滑出：slideUp();
    $(".slide").eq(0).click(function () {
        $(".content").slideDown(2000,function () {

        });
    });

    $(".slide").eq(1).click(function () {
        $(".content").slideUp(2000);
    });

    $(".slide").eq(2).click(function () {
        $(".content").slideToggle(2000);
    });


    // 3、淡入、淡出动画：（fadeIn(无参)，默认值normal）
    // 淡入: fadeIn(）  淡出：fadeOut();
    $(".fade").eq(0).click(function () {
        $(".content").fadeIn(2000,function () {

        });
    });

    $(".fade").eq(1).click(function () {
        $(".content").fadeOut(2000);
    });

    $(".fade").eq(2).click(function () {
        $(".content").fadeToggle(2000);
    });


});


