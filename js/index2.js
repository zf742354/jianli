$(function(){
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){

        } else {
            window.location.href="../html/index3.html";
        }
    }
    browserRedirect();
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: false,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination'
        },

        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
        //// 如果需要前进后退按钮
        //navigation: {
        //    nextEl: '.swiper-button-next',
        //    prevEl: '.swiper-button-prev',
        //},
        //
        //// 如果需要滚动条
        //scrollbar: {
        //    el: '.swiper-scrollbar',
        //},
    });
    //var mySwiper = $('.zhuti').swiper({
    //    direction: 'vertical',
    //    mode:'horizontal',
    //    loop: false,
    //    autoResize:true,
    //    pagination:'.banner .swiper-pagination',
    //    paginationClickable :true,
    //    autoplay : 3000
    //});

    $('.thfll').click(function(){
        window.location.href='https://zf742354.github.io/fll/html/index4.html'
    });

    $('.qrj').click(function(){
        window.location.href='https://zf742354.github.io/qrj/html/index.html'
    });




});