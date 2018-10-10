
$(document).ready(function () {

    $(".tab-item").mouseenter(function () {

        // 筛选选择器：
        // parent()：父类；
        // children()：子类；
        // siblings():兄弟节点；next()：下一个兄弟；prev()：上一次兄弟；
        // find():找后代；
        $(this).addClass("active").siblings().removeClass("active");
        var idx = $(this).index();

        // 过滤选择器：
        // :odd():奇数 even():偶数
        // :eq(index):指定下标 :first():首个 :last():尾个  :gt(index):下标>index的元素； :lt(index):下标<index的元素；
        $(".main").eq(idx).addClass("selected").siblings().removeClass("selected");
    });
});
