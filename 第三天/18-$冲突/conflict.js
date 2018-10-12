
$(document).ready(function () {

    // other.js 文件中的 $ 与 jquery.js 文件中的 $ 发生冲突；

    // 解决办法：
    // 1）jquery.js 文件 写于 other.js 文件 后；
    // 2.1）使用 $.noConflict(); // jQuery.js 释放$的控制权;
    // 3.1) 使用 jQuery(func) 重新定义；
    // 2.2) 或 使用 var $$ = $.noConflict(); // 定义；
    // 3.2）使用 $$(func) 重新定义；
    console.log($);

    // jQuery释放$的控制权
    $.noConflict();
    console.log($);
    jQuery(function () {
        console.log($);
    });

    // 释放$的控制权,并且把$的能力给了c
    // var $$ = $.noConflict();
    console.log($);
    // $$(function () {
    //     console.log($);
    // });


});
