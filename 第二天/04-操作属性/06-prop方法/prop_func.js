
$(document).ready(function () {

    // 布尔类型的属性：disabled，selected，checked，只能用 prop 方法；不能使用 attr 方法；
    // prop 用法跟 attr 方法一样。
    $("input").eq(0).click(function () {
        $("#ck").prop("checked", true);
    });
    $("input").eq(1).click(function () {
        $("#ck").prop("checked", false);
    });
});


