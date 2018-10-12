
$(document).ready(function () {

    $(".navs li").mouseenter(function () {
        // alert("请认真听讲！！");
        $(this).children("span").stop().animate({top:0});
        var idx = $(this).index();
        //让对应的音乐播放, 音乐播放的方法时DOM对象。
        // $("audio").get(idx).load();
        // $("audio").get(idx).play();

        $(".mussic audio").get(idx).load()
        $(".mussic audio").get(idx).play();
        // $(".audio").eq(idx).load();
        // $(".audio").eq(idx).play();

    }).mouseleave(function () {
        $(this).children("span").stop().animate({top:60});
    });


    //////////-----------貌似无效果-----------
    // 节流阀  ：按下的时候，触发，如果没弹起，不让触发下一次
    //1. 定义一个flag
    var flag = true;

    //按下1-9这几个数字键，能触发对应的mouseenter事件
    $(document).on("keydown", function (e) {
        console.log(e.keyCode);

        // if(flag) {
        //     flag = false;
            //获取到按下的键
            var code = e.keyCode;
            if(code >= 49 && code <= 57){
                //触发对应的li的mouseenter事件
                $(".nav li").eq(code - 49).trigger("mouseenter");
            }
        // }

    });

    //弹起的时候，触发mouseleave事件
    $(document).on("keyup", function (e) {
        flag = true;

        //获取到按下的键
        var code = e.keyCode;
        if(code >= 49 && code <= 57){
            //触发对应的li的mouseenter事件
            $(".nav li").eq(code - 49).mouseleave();
        }
    });


});
