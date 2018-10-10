
$(document).ready(function () {

    $("#btn").click(function () {
        //把这些动画存储到一个动画队列里面
        $("div").animate({left:600})
            .animate({top:400})
            .animate({width:300,height:300})
            .animate({top:50})
            .animate({left:0})
            .animate({width:100,height:100})
    });

});


