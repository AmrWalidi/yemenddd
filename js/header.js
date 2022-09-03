$(document).ready(function() {
    window.resize();
});


$(window).resize(function(){
if(window.innerWidth > 700){
$("#dropdown1").hover(function(){
    $("#menu1").fadeToggle();
   });
$("#dropdown2").hover(function(){
    $("#menu2").fadeToggle();
   });
}
})

     