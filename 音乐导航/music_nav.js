
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
});
