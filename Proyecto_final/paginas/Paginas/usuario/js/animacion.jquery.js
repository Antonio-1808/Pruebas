$(document).ready(function(){
    $('.img1').mousedown(function(){
        $(this).css("width","1000px");

    }),
        $('.img1').mouseup(function(){
            $(this).css("width","500px");
        });
        $(".ZoomImagen").hover(function(){
            $(this).animate({"opacity":"1","height":"500px","width":"370px"});
        },function(){
            $(this).animate({"opacity":"1","height":"300px","width":"370px"});
        });            
});

