
$(document).ready(function () {

    // siblings("li"): 兄弟是li的所有元素；
    var count = 0;

    $(".arrow-right").click(function () {
        count++;
        if (count == $(".slide li").length) {
            count = 0;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    });

    $(".arrow-left").click(function () {
        count--;
        if (count == -1) {
            count = $(".slide li").length - 1;
        }
        $(".slider li").eq(count).fadeIn().siblings("li").fadeOut();
    });

});


