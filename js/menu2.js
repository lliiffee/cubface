
function getRootPath(){  
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
    var curWwwPath=window.document.location.href;  
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
    var pathName=window.document.location.pathname;  
    var pos=curWwwPath.indexOf(pathName);  
    //获取主机地址，如： http://localhost:8083  
    var localhostPaht=curWwwPath.substring(0,pos);  
    //获取带"/"的项目名，如：/uimcardprj  
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
    //return(localhostPaht+projectName);  
    return(projectName);  
}  

$(document).ready(function(){
	
 $('head').append('<link rel="stylesheet" href="'+getRootPath()+'/css/tm_docs.css" type="text/css" media="screen">');
  var menu1='<div id="panel"><div class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner" id="advanced"><span class="trigger"><strong></strong><em></em></span><div class="container"><div class="navbar-header"><button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"><ul class="nav navbar-nav"><li class="home"><a href="index.html" class="glyphicon glyphicon-home"></a></li><li class="divider-vertical"></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="关于我们">关于我们 <b class="caret"></b></a><ul class="dropdown-menu">  <li><a href="../aboutus/index.html" title="企业简介">企业简介</a></li><li><a href="../aboutus/history.html" title="发展历程">发展历程</a></li><li><a href="../aboutus/brand.html" title="品牌介绍">品牌介绍</a></li><li><a href="../aboutus/store.html" title="店铺分布">店铺分布</a></li><li><a href="../aboutus/team.html" title="团队介绍">团队介绍</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="合作范畴">合作范畴 <b class="caret"></b></a><ul class="dropdown-menu">  <li><a href="../cooperation/index.html" title="招商加盟">招商加盟</a></li><li><a href="../cooperation/independent.html" title="设计师加盟">设计师加盟</a></li><li><a href="../cooperation/international.html" title="品牌代理">品牌代理</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="产品展示">产品展示 <b class="caret"></b></a><ul class="dropdown-menu">  <li><a href="../collection/cubface/index.html" title="CUBFACE">CUBFACE</a></li></ul></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="新闻中心">新闻中心 <b class="caret"></b></a><ul class="dropdown-menu">    <li><a href="../pressroom/index.html" title="新闻发布">新闻发布</a></li>	<li><a href="../pressroom/photogallery.html" title="照相馆">照相馆</a></li>	<li><a href="../pressroom/corpimage.html" title="企业形象">企业形象</a></li>	<li><a href="../pressroom/presscontact.html" title="新闻联系">新闻联系</a></li></ul></li><li><a href="../aftersale/index.html" title="售后服务">售后服务</a></li><li><a href="../contactus/index.html" title="招聘信息">招聘信息</a></li><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" title="在线商城">在线商城 <b class="caret"></b></a><ul class="dropdown-menu">    <li><a href="../mall/index.html" title="FC垂直网站">FC垂直网站</a></li>	<li><a target="_blank" href="http://cubface.tmall.com" title="cubface天猫旗舰店">cubface天猫旗舰店</a></li></ul></li></ul></nav></div></div></div>';
  $('body').prepend(menu1);
 
 
var menu2= '<div class="container">'
+  '<div class="row">'
+		            '<article class="col-lg-12 col-md-12 col-sm-12">'
+		                '<div class="menuBox clearfix">'
+		                   ' <nav class="navbar navbar-default navbar-static-top tm_navbar clearfix" role="navigation">'
+		                        '<ul class="nav sf-menu clearfix">'
+		                            '<li class="active"><a href="#">首页1</a>'  
+		                            '</li>'
+		                            '<li class="sub-menu"><a href="#">关于我们<span></span></a>'
+		                            	'<ul class="submenu">'
+		                                    '<li><a href="aboutus/index.html">企业简介</a></li>'
+		                                    '<li><a href="aboutus/history.html">发展历程</a></li>'
+		                                    '<li><a href="aboutus/index.html">品牌介绍 </a></li>'
+		                                    '<li><a href="aboutus/store.html">店铺分布 </a></li>'
+		                                    '<li><a href="aboutus/team.html">团队介绍 </a></li>'
+		                               '</ul>'
+		                            '</li>'
+		                            '<li><a href="cooperation/index.html">合作范畴</a></li>'
+		                            '<li><a href="collection/cubface/index.html">产品展示</a></li>'
+		                            '<li><a href="pressroom/index.html">新闻中心</a></li>'
+		                            '<li><a href="aftersale/index.html">售后服务</a></li>'
+		                            '<li><a href="contactus/index.html">招聘信息</a></li>'
+		                            '<li><a href="mall/index.html">在线商城</a></li>'
+		                        '</ul>'
+		                  '  </nav>'
+		               ' </div>'
+		            '</article>'
+		       ' </div>'
+		    '</div>';

 $('#sub_menu').append(menu2);
 
 jQuery('.sf-menu').mobileMenu();
 
});

 