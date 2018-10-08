
$(document).ready(function () {

    var colors = ["red", "orange", "yellor", "green","yellorgreen","cyan","purple","pink"];

    // 设置内容
    $("#btn").click(function () {

        var randomColor = parseInt(Math.random() * colors.length);
        var randomY = parseInt(Math.random() * 400);

        $("<span></span>") // 创建 span 标签
            .text($("#text").val())  // 设置内容
            .css("color", colors[randomColor]) // 设置 color 值
            .css("left","99%") // 设置 left 值
            .css("top",randomY) // 设置 top 值
            .animate({left: "-10%"}, 10000, "linear", function () {
                // 删除控件
                $(this).remove();
            }) // 添加动画
            .appendTo("#boxDom");

        $("#text").val("");
    });

    // 回车事件
    $("#text").keyup(function (e) {
        if (e.keyCode == 13) {
            $("#btn").click();
        }
    });

});
