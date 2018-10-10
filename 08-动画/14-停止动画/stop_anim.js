
$(document).ready(function () {

    $("input").eq(0).click(function () {
        $("div").slideDown(4000).slideUp(4000);
    });

    $("input").eq(1).click(function () {
        // 停止当前正在执行的动画：stop(clearQueue, jumpToEnd);
        // 是否清除队列、是否跳转到最终效果；
        $("div").stop(true , false);
    });
});


