
$(document).ready(function(){
    var $container = $('.masonry-container');
    $container.imagesLoaded( function () {
        $container.masonry({
            columnWidth: '.item',
            itemSelector: '.item'
        });
    });
});
reverseWords('The quick brown fox jumps over the lazy dog.');
function reverseWords(str) {
    var re = "";
    var temp = str.split(" ");
    for(var i=0;i<temp.length;i++){
        re = re + temp[i].split("").reverse().join("");
    }
    return re;
}