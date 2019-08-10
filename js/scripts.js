$(document).ready( function(){
    $('#portfolio-btn').click( function(){
        $('html, body').animate({
            scrollTop: $('#portfolio-section').offset().top
        }, 1500);
    });
});