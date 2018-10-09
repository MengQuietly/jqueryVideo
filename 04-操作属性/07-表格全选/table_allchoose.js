
$(document).ready(function () {

    // 布尔类型的属性：disabled，selected，checked，只能用 prop 方法；不能使用 attr 方法；
    // prop 用法跟 attr 方法一样。
    $("#all").click(function () {
        $("#j_tb input").prop("checked", $(this).prop("checked"));
    });

    $("#j_tb input").click(function () {
        if ($("#j_tb input:checked").length == $("#j_tb input").length){
            $("#j_cbAll").prop("checked", true);
        } else {
            $("#j_cbAll").prop("checked", false);
        }
    });
});


