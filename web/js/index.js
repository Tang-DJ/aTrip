
$(document).ready(function(){
    var $container = $('.masonry-container');
    $container.imagesLoaded( function () {
        $container.masonry({
            columnWidth: '.item',
            itemSelector: '.item'
        });
    });

    $('#popular').click(function () {
        music("流行",'../audio/popular.mp3');
    });
    $('#privacy').click(function () {
        music("Privacy",'../audio/privacy.mp3');
    });
    $('#fireworks').click(function () {
        music("焰火",'../audio/fireworks.mp3');
    });
    $('#earphones').click(function () {
        music("耳机",'../audio/earphones.mp3');
    });
    $('#accent').click(function () {
        music("口音",'../audio/accent.mp3');
    });
    $('#rain').click(function () {
        music("今天雨，可是我们在一起",'../audio/rain.mp3');
    });$('#shakeIt').click(function () {
        music("Shake It",'../audio/shakeIt.mp3');
    });
    $('#aPopSong').click(function () {
        music("A Pop Song",'../audio/aPopSong.mp3');
    });
    $('#young').click(function () {
        music("年轻气盛",'../audio/young.mp3');
    });
    $('#aTrip').click(function () {
        music("一趟",'../audio/aTrip.mp3');
    });

    function music(name,src) {
        $('#music_name').text(name);
        $('#music_src').attr("src",src);
        $('#music_src').attr("autoplay","true");
        $('.music').css("display",'block');

    }



});
