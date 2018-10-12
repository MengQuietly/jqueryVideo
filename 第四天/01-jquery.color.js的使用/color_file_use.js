
$(document).ready(function () {

    // 修改 bgColor 默认无效果（jquery不支持颜色的渐变,颜色最好用16进制）；
    // 引入 jquer.color.js 插件（引入在 jquer.js 文件后引入）。
    $("div").animate({
        backgroundColor: "green"
    }, 3000, function () {

    });

});
