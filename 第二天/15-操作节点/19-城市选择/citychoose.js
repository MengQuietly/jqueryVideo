
$(document).ready(function () {

    // 全选
    $("#btn1").click(function () {
        $("#src-city>option").appendTo("#tar-city");
    });

    $("#btn2").click(function () {
        $("#src-city").append($("#tar-city>option"));
    });

    // 选中的元素
    $("#btn3").click(function () {
        $("#src-city>option:selected").appendTo("#tar-city");
    });

    $("#btn4").click(function () {
        $("#src-city").append($("#tar-city>option:selected"));
    });
});
