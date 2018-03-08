$(document).ready(function(){
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

    var blurloaded = false;
    var vidloaded = false;

    myVid = document.getElementById('myVideoBlur');
    myVid.onloadeddata = playVideos('blur');

    myVid = document.getElementById('myVideo');
    myVid.onloadeddata = playVideos('video');

    function playVideos(video) {
        if (video == 'blur') {
            blurloaded = true;
        } else if (video == 'video') {
            vidloaded = true;
        }
        
        if (blurloaded && vidloaded) {
            document.getElementById('myVideo').play();
            document.getElementById('myVideoBlur').play();
        }
    }
});
