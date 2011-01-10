$(document).ready(function() {
  
  $('#wrapper').fadeIn(500);
  
  //Page Link <a> tag highligting//
  var $hash = window.location.href ? window.location.href : window.location;
  var $arr = /(\w+\.(php|html))/g;
  $pageUri = $hash.match($arr);  
  if ($pageUri != "default.php")
    $("a[href*="+ $pageUri +"]").addClass('selected');
  
  //Replace the text with custom fonts
  Cufon.now();
  Cufon.replace('h3');
  Cufon.replace('p.highlight'); 
  
  //Project Gallery Display
  $("#gallery").children().find(".project").addClass("block");
  
  var $hoverObj = $("#gallery").children().find("a.project");
  
  var $galOver = $hoverObj.hover(
    function () {
      var $targetObj = $(this).find(".over");
      $targetObj.fadeIn(500);                  
    },
    function () {
      var $targetObj = $(this).find(".over");
      $targetObj.fadeOut(500);
    });
  
  //My Expertise Menu Display
  var $expHoverObj = $("ul#experience li");
  
  $("ul#experience li").hover(function () {
    
    $(this).addClass('hover');
    //alert($(this).find(".exp_tooltip").attr('class'))
    $(this).find('.exp_tooltip').fadeIn('fast');
    },
    function () {
     $(this).removeClass('hover');
     $(this).find('div.exp_tooltip').fadeOut(100);
      
    });
  
  
});