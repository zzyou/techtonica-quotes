$(document).ready(function(){
    $('.navbar-brand')
      .mouseenter(function() {
        $(this).css("font-size", "30px");
      })
      .mouseleave(function() {
        $(this).css("font-size", "20px");
    });


    $('.nav-link')
      .mouseenter(function() {
        $(this).css("font-size", "20px");
      })
      .mouseleave(function() {
        $(this).css("font-size", "12px");
      });

    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function(){
        $(this).toggleClass('open');
    });

    $('.heartEmpty').click(function() {
        $(this).toggle();
        $(this).siblings().toggle();
    });

    $('.heartRed').click(function() {
        $(this).toggle();
        $(this).siblings().toggle();
    });
});
