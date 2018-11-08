/*计算rem高度*/
(function (win, doc) {
    win.onresize = function () {
        change();
    };
    change();

    function change() {
        var oFs = doc.documentElement.clientWidth / (640 / 100);
        doc.documentElement.style.fontSize = oFs + 'px';
    }
})(window, document);


$(function(){
    //点击更多按钮
    $(".menu").on("click",function(){
        $(this).toggleClass('active');
    });

    //底部悬浮点击事件
    $(".float-box .float-item").on("click",function(){
        stopEventBubble();
        $(".float-item").removeClass('active');
        $(this).addClass('active');
    });

    //点击返回返回之前页面
    $(".header-left").on("click",function(){
        window.history.back(-1);
    });

    //点击展开导航
    $(".unfold").on("click",function(){
        $(this).toggleClass('expand-zt');
        if ($(this).hasClass('expand-zt')) {
            $(".expand-box").stop().fadeIn();
            $(".header-left,.header-title").stop().fadeOut();
            $("body,html").css({'overflow':'hidden'});
        } else {
            $(".expand-box").stop().fadeOut();
            $(".header-left,.header-title").stop().fadeIn();
            $("body,html").css({'overflow':'auto','height':'auto'});
        }
    })
});

function stopEventBubble(event) {
    var e = event || window.event;
    if (e && e.stopPropagation) {
        e.stopPropagation()
    } else {
        e.cancelBubble = true
    }
}