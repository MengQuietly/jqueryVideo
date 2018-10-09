
$(document).ready(function () {
    // css(name, value)  : name-样式名 、 value-样式值


    //隐式迭代：
    // 设置操作的时候：会给jq内部的所有对象都设置上相同的值。
    // 获取的时候：只会返回第一个元素对应的值。

    // 修改单个样式:
    $(".single-css li").eq(0).css("fontSize", "20px");
    $(".single-css li").eq(1).css("fontSize", "35px");
    $(".single-css li").eq(2).css("fontSize", "23px");
    $(".single-css li").eq(3).css("fontSize", "29px");


    // 修改多个样式:
    $(".more-css li").eq(0).css({
        color: "red",
        fontSize: "30px",
        backgroundColor: "yellow"
    });

    // 获取样式: css(name);
   $(".get-css").text(
       $(".get-css").css("fontSize")
   );


});
