
$(document).ready(function() {

    function initialization(){
        $('#page').fullpage({
            css3: true,
            verticalCentered: false,
            navigation: true,
            slidesNavigation: false,
            navigationPosition: 'right'
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

});


$(".popup, .certificate-img").fancybox({
    padding     : '0'
});

$('.stick').slick({
    autoplaySpeed: 2000,
    prevArrow: '<span class="slide-nav prev mini-prev"></span>',
    nextArrow: '<span class="slide-nav next mini-next"></span>'
});

/*


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