$(document).ready(function() {
        $(window).resize();
        
    });

    $(window).resize(function() {
        if( $(this).width() > 700 ) {
            $("#dropdown1").hover(function(){
                $("#menu1").fadeToggle();
               });
            $("#dropdown2").hover(function(){
                $("#menu2").fadeToggle();
               });
        }

        else if($(this).width() <= 700){
            $(".icon").click(function(){
                $("#navigation").slideToggle();
            });
            $("#dropdown1").click(function(){
                $("#menu1").slideToggle();
               });
            $("#dropdown2").click(function(){
                $("#menu2").slideToggle();
               });
        }
    });