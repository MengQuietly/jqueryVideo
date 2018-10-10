
$(document).ready(function () {

    // 获取焦点： focus();
    $("#txt").focus(function () {

        // 1）获取 value: val();
        if ($(this).val() === "请输入内容") {
            // 2）设置 value：val("内容");
            $(this).val("");
        }
    });

    // 失去焦点： blur();
    $("#txt").blur(function () {
        if ($(this).val() === "") {
            $("#txt").val("请输入内容");
        }
    });

});
