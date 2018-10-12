
$(document).ready(function () {

    // 给 P 自己注册事件（简单事件）；
    $("p").click(function () {
        alert("呵呵哒");
    });

    //给div自己执行的（简单事件）
    $("div").on("click", function () {
        alert("呜呜呜");
    });

    //给div里面的p执行 委托事件
    $("div").on("click", "p", function () {
        alert("嘿嘿嘿")
    });

    $("#btn").on("click", function () {
        $("<p>我是新建的p元素</p>").appendTo("div");
    });

    // 非动态的事件执行顺序：click-on-on（简单）；
    // 动态的事件执行顺序：on-on（简单）；
});
