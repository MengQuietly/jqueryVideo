
$(document).ready(function () {

    //对于布尔类型的属性，不要attr方法，应该用prop方法 prop用法跟attr方法一样。
    $("input").eq(0).click(function () {
        $("#ck").prop("checked", true);
    });
    $("input").eq(1).click(function () {
        $("#ck").prop("checked", false);
    });
});


