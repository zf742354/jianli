$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: false,

        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination'
        },

        on:{
            init: function(){
                swiperAnimateCache(this); //���ض���Ԫ��
                swiperAnimate(this); //��ʼ����ɿ�ʼ����
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //ÿ��slide�л�����ʱҲ���е�ǰslide����
            }
        }
        //// �����Ҫǰ�����˰�ť
        //navigation: {
        //    nextEl: '.swiper-button-next',
        //    prevEl: '.swiper-button-prev',
        //},
        //
        //// �����Ҫ������
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