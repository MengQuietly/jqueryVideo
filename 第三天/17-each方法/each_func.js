
$(document).ready(function () {

    // 使用 for 循环
    // for (var i = 0; i < $("li").length; i++) {
    //     $("li").eq(i).css("opacity", (i+1)/10);
    // }

    // 使用 each 方法；$(selector).each(function(index,element){});
    // element：当前元素，index：当前下标；
    $("li").each(function (index, element) {
       $(element).css("opacity", (index+1)/10);
    });
});
