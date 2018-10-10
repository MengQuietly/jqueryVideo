
$(document).ready(function () {

    /html:innerHTML  text:innerText
    // 1）获取 html & text 内容；
    var htmlTxt = $("div").html(); //<h3>我是标题</h3>
    var textTxt = $("div").text(); //我是标题

    // 2）设置 html & text 内容；
    //$("div").html("<p>我是文本</p>");
    $("div").text("<p>我是文本</p>");

});
