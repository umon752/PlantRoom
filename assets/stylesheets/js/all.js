// animated-fadeIn
$(document).ready(function () {
    $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();

        $('.animated').each(function(){
        var thisPos = $(this).offset().top;
            if((windowHeight + scrollPos) >= thisPos){
            $(this).addClass('fadeIn');
            }
        });
    });
});