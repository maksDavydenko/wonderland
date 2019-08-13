$(document).ready(function(){ 
       $('.sliderBtn').on('click', function(){
            $('.sliderBtn').removeClass('header-item__active'); 
            $(this).addClass('header-item__active');

            let imgPath = $(this).attr('data-src');
            $('.header-slide-item').css('background-image', imgPath);
    });  
});
