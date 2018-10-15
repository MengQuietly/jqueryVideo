
$(document).ready(function () {

    // // jquery插件的实质： 给jquery的原型上增加方法；
    //
    // // 1）使用 jQuery.prototype.funcName 添加 jQuery 方法 funcName；
    // jQuery.prototype.sayHi = function () {
    //     console.log("呵呵");
    // }
    // $(document).sayHi();
    //
    // // 2）$.fn  ==== jQuery.prototype；（常用）
    // $.fn.sayHay = function () {
    //     console.log("有意义");
    // }
    // $(document).sayHay();

    // 自定义bgColor方法
    $.fn.customBgColor = function (color) {
        // this是一个jq对象
        this.css("backgroundColor", color);

        // 为防止不能使用链式，需要return this ；
        return this;
    }

});
