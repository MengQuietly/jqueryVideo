
$(document).ready(function () {

    // 自定义插件一定要： return this；,否则调用方法不能使用链式；
    $("div").customBgColor("red").width(300);
});
