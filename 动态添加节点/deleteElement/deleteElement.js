
$(document).ready(function () {

    // 清空节点（自己还存在）
    // 方法一：会内存泄露（只清内容，不清除事件）；
    // $("div").html();
    // 方法二：清空节点；
    // $("div").empty();

    // 删除节点（包括自己一起移除）
    // $("div").remove();

    // var $more = $(".more-box").clone();
    // $("div").append($more);

    // 复制节点： 默认 clone(false)，表深复制，不会复制事件；true可以复制事件
    $(".more-box").clone().appendTo("div");

});
