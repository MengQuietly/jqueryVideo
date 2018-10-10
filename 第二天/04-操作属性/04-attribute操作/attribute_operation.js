
$(document).ready(function () {

    console.log($("img").attr("alt"));

    // 布尔类型的属性：disabled，selected，checked，只能用 prop 方法；不能使用 attr 方法；
    // prop 用法跟 attr 方法一样。

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

    // 移除某个属性
    $("img").removeAttr("aa");

});
