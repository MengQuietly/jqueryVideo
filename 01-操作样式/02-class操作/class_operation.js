
$(document).ready(function () {

    $("input").eq(0).click(function () {

        // 添加一个类
        $("li").addClass("basic");
    });

    $("input").eq(1).click(function () {
        $("li").addClass("bigger");
    });


    $("input").eq(2).click(function () {

        //移除一个类
        $("li").removeClass("bigger");
    });


    $("input").eq(3).click(function () {

        // 判断类
        if ($("li").hasClass("bigger") == false) {
            $("li").addClass("green-color");
        }
    });


    $("input").eq(4).click(function () {

        //判断li有没有basic类，如果有，就移除他，如果没有，添加他
        //toggle
        $("li").toggleClass("basic");
    });

});
