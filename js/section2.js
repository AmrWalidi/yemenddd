
  $(document).ready(function() {
    $(window).resize();
    
});

$(window).resize(function() {
    if( $(this).width() > 700 ) {
      $(".section2-icons-2").click(function () {
        $(".section2-icons-2").css({"color":"rgb(61, 69, 212)", "transition":"0.3s"});
        $(".section2-icons-1").css("color","#333");
        $(".section2-icons-3").css("color","#333");
        $(" .paragraph-1").hide();
        $(" .paragraph-3").hide();
        $(" .paragraph-2").show();
      });

      $(".section2-icons-1").click(function () {
        $(".section2-icons-1").css({"color":"rgb(61, 69, 212)", "transition":"0.3s"});
        $(".section2-icons-2").css("color","#333");
        $(".section2-icons-3").css("color","#333");
        $(" .paragraph-3").hide();
        $(" .paragraph-2").hide();
        $(" .paragraph-1").show();
      });

      $(".section2-icons-3").click(function () {
        $(".section2-icons-3").css({"color":"rgb(61, 69, 212)", "transition":"0.3s"});
        $(".section2-icons-2").css("color","#333");
        $(".section2-icons-1").css("color","#333");
        $(" .paragraph-1").hide();
        $(" .paragraph-2").hide();
        $(" .paragraph-3").show().css("display","flex");
      });
    }

    else if($(this).width() <= 700){
      $(".section2-icons-2").click(function () {
        $(".section2-icons-2").css({"color":"rgb(61, 69, 212)", "transition":"0.3s"});
        $(".section2-icons-1").css("color","#333");
        $(".section2-icons-3").css("color","#333");
        $(" .paragraph-1").hide();
        $(" .paragraph-3").hide();
        $(" .paragraph-2").show();
      });

      $(".section2-icons-1").click(function () {
        $(".section2-icons-1").css({"color":"rgb(61, 69, 212)", "transition":"0.3s"});
        $(".section2-icons-2").css("color","#333");
        $(".section2-icons-3").css("color","#333");
        $(" .paragraph-3").hide();
        $(" .paragraph-2").hide();
        $(" .paragraph-1").show();
      });

      $(".section2-icons-3").click(function () {
        $(".section2-icons-3").css({"color":"rgb(61, 69, 212)", "transition":"0.3s"});
        $(".section2-icons-2").css("color","#333");
        $(".section2-icons-1").css("color","#333");
        $(" .paragraph-1").hide();
        $(" .paragraph-2").hide();
        $(" .paragraph-3").show();
      });
    }
});