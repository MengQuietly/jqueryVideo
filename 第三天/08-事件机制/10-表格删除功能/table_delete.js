
$(document).ready(function () {

    // 1、清空tbody；
    $("#clear").on("click" , function () {
        $("#j_tb").empty();
    });

    // 2、添加行
    $("#add").on("click", function () {
        $('<tr> <td>未知店铺</td> <td>红烧肉（new）</td> <td><a href="javascrip:;" class="get">DELETE</a></td> </tr>').appendTo("#j_tb");
    });


    // 3、删除当前行（动态事件，无响应）；
    // $(".get").on("click", function () {
    //    $(this).parent().parent().remove();
    // });

    // 4、删除当前行（动态事件，有响应）；
    $("#j_tb").on("click", ".get", function () {
        $(this).parent().parent().remove();
    });

});
