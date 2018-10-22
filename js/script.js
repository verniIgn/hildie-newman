$(function() {
  
  var tabs = $('.tabs');

  tabs.find('section').hide();

  $("a.acor1").on('click', function() {
  	$(".tab-content1").slideToggle();
  	$(".tab-content2").hide();
  	$(".tab-content3").hide();
    return false;
  });

   $("a.acor2").on('click', function() {
  	$(".tab-content2").slideToggle();
  	$(".tab-content1").hide();
  	$(".tab-content3").hide();
    return false;
  });

 $("a.acor3").on('click', function() {
   $(".tab-content3").slideToggle();
   $(".tab-content1").hide();
   $(".tab-content2").hide();
   return false;
  });

});
