$(document).ready(function(){
  $("a[rel^='external']").each(function() { $(this).attr("target","_blank"); });

  $('nav, header, #right').localScroll({
    duration: 1000,
    axis: 'y'
  });

  $(window).scroll(function(){
    var posX = $(window).scrollTop() - ($(window).scrollTop() * 40/100) + "px";
    $("#home").css({backgroundPosition: "50% " + posX });
  });

});

