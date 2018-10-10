
$(document).ready(function () {

    $("#gallery a").click(function () {

        // 获取属性
        var href = $(this).attr("href");
        // 设置属性
        $("#image").attr("src", href);

        var title = $(this).attr("title");
        $("#des").text(title);

        // 阻止默认操作
        return false;
    });

});
