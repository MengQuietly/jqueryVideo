
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() >= $(".topContent").height()) {
            $(".navBar").addClass("fixed");
            $(".page1").css("marginTop",$(".navBar").height());
        } else {
            $(".navBar").removeClass("fixed");
            $(".page1").css("marginTop", 0);
        }
    });

});
