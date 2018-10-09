
$(document).ready(function () {

    console.log($("img").attr("alt"));

    //对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。

    // 设置单个属性
    $("img").attr("alt", "图破了");
    $("img").attr("title", "newTitle");

    // 设置多个属性
    $("img").attr({
        alt: "图图",
        title: "嘿嘿",
        aa: "bb"
    });

    // 获取属性
    var getresult = $("img").attr("aa");
    console.log(getresult);
});
