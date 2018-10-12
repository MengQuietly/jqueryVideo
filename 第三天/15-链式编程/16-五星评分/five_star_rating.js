
$(document).ready(function () {

    var star_k = "☆";
    var star_s = "★";

    //1. 给li注册鼠标经过事件，让自己和前面所有的兄弟都变成实心
    $(".comment>li").on("mouseenter", function () {
        // prevAll() 获得当前匹配元素集合中每个元素的前面的同胞元素
       $(this).text(star_s).prevAll().text(star_s);
        $(this).nextAll().text(star_k);
    });

    //2. 给ul注册鼠标离开时间，让所有的li都变成空心
    $(".comment").on("mouseleave", function () {

        $(this).children().text(star_k);
        //再做一件事件，找到current，让current和current前面的变成实心就行。
        $("li.current").text(star_s).prevAll().text(star_s);
    });

    //3. 给li注册点击事件
    $(".comment>li").on("click", function () {
        $(this).addClass("current").siblings().removeClass("current");
    });
});
