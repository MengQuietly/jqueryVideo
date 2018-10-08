
$(document).ready(function () {

    // 动态添加节点
    // 方法一： 通过JS 添加
    // var box = document.getElementById("box");
    //
    // var a = document.createElement('a');
    // a.setAttribute("href", "http://www.baidu.com");
    // a.setAttribute("target","_blank");
    // a.innerHTML = "百度一下";
    // box.appendChild(a);

    // 方法一： 通过JQuery 添加
    $("#box").append('<a href="http://www.baidu.com" target="_blank">百度一下</a>');

    // 通过JQuery 添加
    // 1）创建 JQuery 对象
    var $li = $('<a href="http://www.baidu.com" target="_blank">百度一下</a>');

    // 2）添加 JQuery 对象
    $(".jquery_box").append($li);


    // 通过JQuery 添加: 演练
    // 1) 添加到子元素最后面
    // $(".div_box").append($(".p_box"));
    // $(".p_box").appendTo($(".div_box"));

    // 2) 添加到子元素最前面
    // $(".div_box").prepend($(".p_box"));
    // $(".p_box").prependTo($(".div_box"));

    // 3) 添加到子元素最前面、后面
    // $(".div_box").after($(".p_box"));
    $(".div_box").before($(".p_box"));  
});
