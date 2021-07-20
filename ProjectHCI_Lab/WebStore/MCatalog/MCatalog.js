$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        var currentTxt = $('.Tactive');
        var nextTxt = currentTxt.next();

        if(nextImg.length && nextTxt.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
            currentTxt.removeClass('Tactive').css('z-index', -10);
            nextTxt.addClass('Tactive').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        var currentTxt = $('.Tactive');
        var prevTxt = currentTxt.prev();

        if(prevImg.length && prevTxt.length){
            currentImg.removeClass('active').css('z-index', 10);
            prevImg.addClass('active').css('z-index', -10);
            currentTxt.removeClass('Tactive').css('z-index', -10);
            prevTxt.addClass('Tactive').css('z-index', 10);
        }
    });
})