
$(document).ready(function () {

    // 简单事件绑定-bind事件绑定-delegate事件绑定-on事件绑定（推荐）

    // 1）简单事件(是给自己注册的事件): click()、mouseenter()、mouseleave()；
    // 动态创建的标签元素，无事件；
    // 缺点：一次只能注册一个事件
    $("#btn").click(function () {
        alert("简单事件：click");
        $("<p>我是click事件添加的标签内容</p>").appendTo("div");
    });

    // 2）bind 事件：可实现多个事件。
    // 动态创建的标签元素，无事件；
    // $("p").bind({
    //    click:function () {
    //        alert("呵呵")
    //    } ,
    //     mouseenter: function () {
    //         alert("哈哈")
    //     }
    // });

    // 3）delegate事件：
    // 动态创建的标签元素也能有事件（因为事件作用在div上，通过div去寻找P）；
    // 缺点：只能注册委托事件；
    // 给父元素注册委托事件，最终还是有子元素来执行。
    // 第一个参数：selector:事件最终由谁来执行。
    // 第二个参数：事件的类型
    // 第三个参数：函数，要做什么
    // $("div").delegate("p", "click", function () {
    //     alert("delegate事件：click");
    // });

    // 4）on事件：on(types, selector, data, callback);
    // 1> p 给 自己注册的事件（简单事件，动态创建的标签不会添加事件）;
    $("p").on("click", function () {
        alert("on事件1：click");
    });
    // 2> 给 div 里的 P 注册的事件（动态创建的标签会添加事件） ;
    $("div").on("click", "p", function () {
        alert("on事件2：click");
    });



});
