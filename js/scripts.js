$(document).ready(function() {
  $("p#intro").click(function(){
    $("#intro").addClass("highlight");
    $("#first").removeClass();
    $("#second").removeClass();
  });
  $("p#first").click(function(){
    $("#intro").removeClass();
    $("#second").removeClass();
    $("#first").addClass("highlight");
  });

  $("p#second").click(function(){
    $("#intro").removeClass();
    $("#first").removeClass();
    $("#second").addClass("highlight");
  });


});
