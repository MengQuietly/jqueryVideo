
$(document).ready(function () {


    // 1）获取元素的 width/height (直接获取的数字);
    $("input").eq(0).click(function () {
        $("p").text("width:" + $("div").width());
        // $("p").text("padding+width:" + $("div").innerWidth());
        // $("p").text("padding+border+width:" + $("div").outerWidth());
        // $("p").text("padding+border+margin+width:" + $("div").outerWidth(true));
    });

    $("input").eq(1).click(function () {
        $("p").text("height:" + $("div").height());
    });

    // 2）设置元素的 width/height;
    $("input").eq(2).click(function () {
        $("div").width(300);
        $("div").height(400);
        $("p").text("width:" + $("div").width() + " && height:" + $("div").height());
    });


    // 3)获取页面可视区域的 width/height；（感觉有问题）
    // $(window).resize(function () {
    //     console.log($(window).width);
    //     console.log($(window).height);
    // });





});
