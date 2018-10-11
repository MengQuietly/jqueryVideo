
$(document).ready(function () {
    //获取元素的相对于document的位置
    console.log($(".son").offset()); // father 的 margin 100 + son 的 top 100；

    //获取元素相对于有定位的父元素的位置
    console.log($(".son").position()); //  son 的 top 100；
});
