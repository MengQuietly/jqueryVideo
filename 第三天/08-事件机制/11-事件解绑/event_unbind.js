
$(document).ready(function () {

    // 事件解绑
    // 1）unbind 方式（弃用）
    // $(selector).unbind(); // 解绑所有事件
    // $(selector).unbind("click"); // 解绑click事件
    // 2）undelegate 方式（弃用）
    // $(selector).undelegate(); // 解绑所有事件
    // $(selector).undelegate("click"); // 解绑click事件
    // 3) off 方式（推荐）
    // $(selector).undelegate(); // 解绑所有事件
    // $(selector).undelegate("click"); // 解绑click事件


    $("p").on("click mouseenter", function () {
       alert("呵呵");
    });

    // $("p").off(); // 解绑所有事件
    $("p").off("mouseenter"); // 解绑mouseenter事件


    //4） 触发 click 事件；
    // toggle() 切换 、 trigger() 触发；
    $("button").on("click", function () {
        // $("p").click(); // 触发 click 事件；
        $("p").trigger("click"); //  触发 click 事件；
    });
});
