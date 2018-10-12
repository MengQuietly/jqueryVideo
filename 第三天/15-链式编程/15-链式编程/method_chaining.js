
$(document).ready(function () {

    // 设置性操作：可以链式编程;
    // 获取性操作，不能链式，因为获取性操作，数值，字符串，
    // 判断是否是 设置性操作：返回值是不是一个jq对象。
    console.log($("div").width(200).height(200).css("backgroundColor", "pink").width());

});
