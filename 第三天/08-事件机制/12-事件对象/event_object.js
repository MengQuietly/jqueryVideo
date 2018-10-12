
$(document).ready(function () {
    // jQuery事件对象：
    // screenX、screenY（对应屏幕最左上角的值）；
    // clientX、clientY（距离页面左上角位置，忽略滚动条）；
    // pageX、pageY（距离页面最顶部左上角位置，会计算滚动条距离）；
    // event.keyCode（按下键盘代码）；
    // event.data（存储绑定事件时传递的附加数据）；
    // event.stopPropagation() (阻止事件冒泡行为);
    // event.preventDefault() (阻止浏览器默认行为);
    // return false; (阻止事件冒泡+阻止浏览器默认行为)；

    var money = 100;
    // 使用on方法的时候，可以给data参数传一个值，可以在事件里面通过e.data获取到。
    $("div").on("click",100, function (e) {
        console.log(e);
        console.log("哈哈，我有"+e.data);
    });

    money = 0;
    $("p").on("click", function () {
        console.log("呜呜，我有"+0);
    });

    // 阻止事件冒泡
    $("#link").on("click", function (e) {


        // e.preventDefault(); // 阻止 默认
        //e.stopPropagation(); // 阻止事件冒泡行为
        //alert("呵呵");
        //return false;//既能阻止事件冒泡，也能阻止浏览器的默认行为。
        alert("呵呵");
    });




});
