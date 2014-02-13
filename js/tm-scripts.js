/* panel */
include('jquery.cookie.js');
//----Include-Function----
function include(url){
  document.write('<script src="js/'+ url + '"></script>'); 
  return false;
}
$(document).ready(function(){
  $('head').append('<link rel="stylesheet" href="css/tm_docs.css" type="text/css" media="screen">');
  $('body').prepend('<div id="panel"><div class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner" id="advanced"><span class="trigger"><strong></strong><em></em></span><div class="container"><div class="navbar-header"><button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"><ul class="nav navbar-nav"><li class="home"><a href="index.html" class="glyphicon glyphicon-home"></a></li><li class="divider-vertical"></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="关于我们">关于我们 <b class="caret"></b></a><ul class="dropdown-menu">  <li><a href="../aboutus/index.html" title="企业简介">企业简介</a></li><li><a href="../aboutus/history.html" title="发展历程">发展历程</a></li><li><a href="../aboutus/brand.html" title="品牌介绍">品牌介绍</a></li><li><a href="../aboutus/store.html" title="店铺分布">店铺分布</a></li><li><a href="../aboutus/team.html" title="团队介绍">团队介绍</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="合作范畴">合作范畴 <b class="caret"></b></a><ul class="dropdown-menu">  <li><a href="../cooperation/index.html" title="招商加盟">招商加盟</a></li><li><a href="../cooperation/independent.html" title="设计师加盟">设计师加盟</a></li><li><a href="../cooperation/international.html" title="品牌代理">品牌代理</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="产品展示">产品展示 <b class="caret"></b></a><ul class="dropdown-menu">  <li><a href="../collection/cubface/index.html" title="CUBFACE">CUBFACE</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="新闻中心">新闻中心 <b class="caret"></b></a><ul class="dropdown-menu">    <li><a href="../pressroom/index.html" title="新闻发布">新闻发布</a></li>	<li><a href="../pressroom/photogallery.html" title="照相馆">照相馆</a></li>	<li><a href="../pressroom/corpimage.html" title="企业形象">企业形象</a></li>	<li><a href="../pressroom/presscontact.html" title="新闻联系">新闻联系</a></li></ul></li><li><a href="../aftersale/index.html" title="售后服务">售后服务</a></li><li><a href="../contactus/index.html" title="招聘信息">招聘信息</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="在线商城">在线商城 <b class="caret"></b></a><ul class="dropdown-menu">    <li><a href="../mall/index.html" title="FC垂直网站">FC垂直网站</a></li>	<li><a target="_blank" href="http://cubface.tmall.com" title="cubface天猫旗舰店">cubface天猫旗舰店</a></li></ul></li></ul></nav></div></div></div>');
}); 
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

jQuery(function(){
      jQuery('.sf-menu').mobileMenu();
    })
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