$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

        $('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css" />'); //подключение файла mobile.css если мобильник

    } else {

        $('head').append('<link rel="stylesheet" type="text/css" href="js/vendor/jquery.fullPage/jquery.fullPage.css" />'); //подключение файла jquery.fullPage.css если не мобильник


        function initialization(){
            $('#page').fullpage({
                css3: true,
                verticalCentered: false,
                navigation: true,
                slidesNavigation: false,
                navigationPosition: 'right',
                showActiveTooltip: true,
                responsive: 980,
                navigationTooltips: ['Главная', 'Экономия', 'Услуги', 'Гарантии', 'Преимущества', 'Отзывы', 'Как мы работаем', 'Акция']
            });
        }

        initialization();

        $('.next').click(function(e){
            e.preventDefault();
            $.fn.fullpage.moveSlideRight();
        });

        $('.page-prev').click(function(e){
            e.preventDefault();
            $.fn.fullpage.moveSlideLeft();
        });
    }

});


$(".popup, .certificate-img").fancybox({
    padding     : '0'
});

$('.stick').slick({
    infinite: true,
    slidesToShow : 1,
    prevArrow: '<span class="slide-nav prev mini-prev"></span>',
    nextArrow: '<span class="slide-nav next mini-next"></span>'
});


$(".advantages li").hover(
    function () {
        $("li").removeClass("active");
        $(this).addClass("active");
    },
    function () {
        $(this).removeClass("active");
    }
);


/* Поле отправки файла */

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

(function($) {
    $(function() {

        $('select').styler();

    });
})(jQuery);