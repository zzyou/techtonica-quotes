$(document).ready(function(){
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });

    $('.heartEmpty').click(function() {
        $(this).toggle();
        $('.heartRed').toggle();
    });

    $('.heartRed').click(function() {
        $(this).toggle();
        $('.heartEmpty').toggle();
    })
});
