/* panel */
include('jquery.cookie.js');
//----Include-Function----
function include(url){
  document.write('<script src="js/'+ url + '"></script>'); 
  return false;
}
 
 $(window).scroll(function(){if ($(this).scrollTop() > 0) {$("#advanced").css({position:'fixed'});} else {$("#advanced").css({position:'relative'});}});  
$(function(){
  
  $.cookie("panel");  
  $.cookie("panel2"); 
  var strCookies = $.cookie("panel");
  var strCookies2 = $.cookie("panel2");
  var tglflg1,tglflg2
  if(strCookies=='boo')
  {
    if(strCookies2=='opened'){$("#advanced").css({marginTop:'0px'}).removeClass('closed')}else{$("#advanced").css({marginTop:'-50px'}).addClass('closed')}
    $("#advanced .trigger").click(function(){
    if(tglflg1=!tglflg1){
      $(this).find('strong').animate({opacity:0}).parent().parent('#advanced').removeClass('closed').animate({marginTop:'0px'},"fast");
      strCookies2=$.cookie("panel2",'opened');
      strCookies=$.cookie("panel",null);
    }else{
      $(this).find('strong').animate({opacity:1}).parent().parent('#advanced').addClass('closed').animate({marginTop:'-50px'},"fast")
      strCookies2=$.cookie("panel2",null);
      strCookies=$.cookie("panel",'boo');
    }
   })
  }
  else {
    $("#advanced").css({marginTop:'0px'}).removeClass('closed');
    $("#advanced .trigger").click(function(){
    if(tglflg2=!tglflg2){
      $(this).find('strong').animate({opacity:1}).parent().parent('#advanced').addClass('closed').animate({marginTop:'-50px'},"fast");
      strCookies2=$.cookie("panel2",null);
      strCookies=$.cookie("panel",'boo');
    }else{
      $(this).find('strong').animate({opacity:0}).parent().parent('#advanced').removeClass('closed').animate({marginTop:'0px'},"fast")
      strCookies2=$.cookie("panel2",'opened');
      strCookies=$.cookie("panel",null);
    }
   })
  }
});
/*--------- end panel *------------*/

//year sccript

var currentYear = (new Date).getFullYear();
$(document).ready(function() {
$("#copyright-year").text( (new Date).getFullYear() );
});


$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,
 
    gestureStart = function () {
        viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
    },
 
    scaleFix = function () {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };
scaleFix();

// Menu Android
if(window.orientation!=undefined){
 var regM = /ipod|ipad|iphone/gi,
  result = ua.match(regM)
 if(!result) {
  $('.sf-menu li').each(function(){

   if($(">ul", this)[0]){
    $(">a", this).toggle(
     function(){
      return false;
     },
     function(){
      window.location.href = $(this).attr("href");
     }
    );
   } 
  })
 }
}
});
/* ------ fi fixed position on Android -----*/
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
/*--------------*/