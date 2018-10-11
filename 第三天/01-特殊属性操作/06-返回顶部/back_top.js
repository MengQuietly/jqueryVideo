
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1000) {
            $(".backTop").fadeIn(1000);
        } else  {
            $(".backTop").fadeOut(1000);
        }

        console.log($(window).scrollTop());
    });

    $(".backTop").click(function () {
        // window 无 scrollTop() 方法；
        $("html,body").animate({scrollTop: 0}, 2000);
    });


    // function getScroll() {
    //     return left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
    //         top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    // }
});
