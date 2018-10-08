
$(document).ready(function () {


    $("#btn").click(function () {

        if ($("#txt").val().trim().length == 0){
            return;
        }

        // 获取文本值 ： $("#txt").val()
        $("<li></li>").text($("#txt").val()).prependTo("#ul");
        $("#txt").val("");
    });

});
