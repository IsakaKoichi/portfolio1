$(function(){
    $('.nav-toggle').click(function() {
        if($('.nav-toggle, .nav').hasClass('show')){
        $('.nav-toggle, .nav').removeClass('show');
    } else {
        $('.nav-toggle, .nav').addClass('show');
    }
    
    });
});