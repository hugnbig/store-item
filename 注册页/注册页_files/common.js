var M=M||{};var _LOAD_SCRIPT_=function(a,c){if(!a){return;}if(!c){_LOAD_SCRIPT_DELAY_(a);return;}var b=document.createElement("script");b.type="text/javascript";
b.async=true;b.src=a;setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(b);},0);};var _G_SCRIPT_lIST_=[];var _LOAD_SCRIPT_DELAY_=function(a){_G_SCRIPT_lIST_[_G_SCRIPT_lIST_.length]=a;
};var _RUNNING_LOAD_SCRIPT_=function(){if(_G_SCRIPT_lIST_&&_G_SCRIPT_lIST_.length>0){for(var a=0;a<_G_SCRIPT_lIST_.length;a++){_LOAD_SCRIPT_(_G_SCRIPT_lIST_[a],true);
}}};function _LOAD_VIRTUAL_FUNCTION_(b,a){if(!a){window[b]=function(){};}else{window[b]=function(){return a;};}}function reSortDom(e,c){if(!e||!e.length){return[];
}var f=[];for(var a=0,d=e.length;a<d;a++){if(e[a].nodeName=="#text"||e[a].nodeName=="#comment"){continue;}f.push([e[a],e[a].innerHTML]);}if(f.length>(c?0:1)){var b=f[0][0].parentNode;
if(b.tagName.toLowerCase()=="tr"||b.tagName.toLowerCase()=="table"){return;}f=f.sort(function(){return Math.random()-0.5;});b.innerHTML="";for(var a=0,d=f.length;
a<d;a++){if(typeof c=="string"){if(a===0){M.addClass(f[a][0],c);}}else{if(typeof firstClassFit=="function"){M.addClass(f[a][0],c(a));}}if(f[a][0].innerHTML===""){f[a][0].innerHTML=f[a][1];
}b.appendChild(f[a][0]);}}return f;}function _SET_CHAT_DATA_READY_(a){window._MCHAT_DATA_READY_=a;}var M={lightBox:function(n,p,i,q,e,r,a){p=p||{};q=q||300;
var l=document.createElement("div");var o=new Date();var c=o.getTime().toString(36);o="JS_lightBox_"+c;l.className="lightBox "+(a?a:"");l.id=o;if(e){l.style.cssText=e;
}l.style.zIndex=q;var m='<div class="htmls">'+(n+"").replace(/\{=id\}/g,c)+"</div>";var g="";var f=1;for(var j in p){g+='<a href="javascript:;" id="'+o+"_"+j+'" class="lightbox_btns_'+j+" lightbox_btnsi_"+f+'">'+j+"</a>";
f++;}if(g){g='<div class="btns">'+g+"</div>";}m=i?m+g:'<div class="in">'+m+g+"</div>";l.innerHTML=m;l._showMask=r;if(r){M.showMask(q-1);}document.body.appendChild(l);
var s=true;for(var j in p){var b=document.getElementById(o+"_"+j);if(p[j]=="close"){b.onclick=function(){M.closeLightBox(o);};}else{if(typeof p[j]==="function"){b.onclick=p[j];
}}if(s){b.focus();s=false;}}M.lightBoxId=o;M.lightBoxTempId=c;return l;},closeLightBox:function(c,b){if(!c){c=M.lightBoxId;}c="JS_lightBox_"+((c+"").replace("JS_lightBox_",""));
var a=M.$("#"+c);if(a){if(a._showMask){M.hideMask();}a.parentNode.removeChild(a);}if(typeof b=="function"){b(c);}},alert:function(a,b){b=M.extend({title:"提示",onOk:null,mask:true,type:"warn"},(b||{}));
h='<div class="clearfix title"><div class="Left"><i style="display:inline-block;"></i><span>'+b.title+'</span></div><a href="javascript:;" class="Right" onclick="M.closeLightBox( \'{=id}\' , M.alert.setting.onOk );">&times;</a></div><div class="content"><table style="width:100%"><tr><td class="icons_td"><span class="icons icons_'+b.type+'"></span></td><td class="content_td">'+a+"</td></tr></table></div>";
M.lightBox(h,{"确定":function(){M.closeLightBox(false,b.onOk);}},null,null,null,b.mask,"MALERT");M.alert.setting=b;},confirm:function(a,b){b=M.extend({title:"提示",onOk:null,onCancel:null,mask:true,type:"confirm"},(b||{}));
h='<div class="clearfix title"><div class="Left"><i style="display:inline-block;"></i><span>'+b.title+'</span></div><a href="javascript:;" class="Right" onclick="M.closeLightBox( \'{=id}\' , M.confirm.setting.onCancel );">&times;</a></div><div class="content"><table style="width:100%"><tr><td class="icons_td"><span class="icons icons_'+b.type+'"></span></td><td class="content_td">'+a+"</td></tr></table></div>";
M.lightBox(h,{"确定":function(){M.closeLightBox(false,b.onOk);},"取消":function(){M.closeLightBox(false,b.onCancel);}},null,null,null,b.mask,"MALERT MCONFIRM");
M.confirm.setting=b;},showMask:function(c){if(M.maskDom){M.hideMask();}c=c||290;var a=document.createElement("div"),b=(document.body.scrollHeight>=window.screen.availHeight)?document.body.scrollHeight:window.screen.availHeight;
a.id="JS_mask";a.className="c-mask";a.style.cssText="height:"+b+"px;width:100%;position:absolute;background:#000;z-index:900;top:0;left:0;opacity:0.5;filter:alpha(opacity=50);z-index:"+c;
document.body.appendChild(a);M.maskDom=a;},hideMask:function(){if(M.maskDom){M.maskDom.parentNode.removeChild(M.maskDom);M.maskDom=null;}},sendFrom:function(a,c,b){},getCaptcha:function(a){if(a._captchaLock){return;
}a._captchaLock=true;M.ajax({url:"/user/?act=get_captcha",cache:false,success:function(b){a.setAttribute("src",b);a._captchaLock=false;},error:function(){M.alert("获取验证码失败，请稍候再试");
a._captchaLock=false;}});},goExpr:function(e,a,d,c){if(!e){return;}if(e=="index.html"){M.setCookie("curr_page_sn","index",5,"meilele.com");M.setCookie("region_id",0,5,"meilele.com");
M.setCookie("region_pinyin","",-1,"meilele.com");M.setCookie("region_name","全国",5,"meilele.com");if(d==2){location.href="/expr.html";}else{location.href="/";
}}else{M.setCookie("curr_page_sn",0,5,"meilele.com");M.setCookie("region_id",a,5,"meilele.com");M.setCookie("region_pinyin",e,5,"meilele.com");if(c){M.setCookie("region_name",c,5,"meilele.com");
}else{M.setCookie("region_name","",-1,"meilele.com");}if(d==2){location.href="/"+e+"/expr.html";}else{var b=location.href.split("/");if(b[b.length-1]=="expr.html"){location.href="/"+e+"/expr.html";
}else{location.href="/"+e+"/";}}}},setCookie:function(a,d,c,b,f){c=c||360;f=f||"/";b=b?";domain="+b:";domain=meilele.com";var e=new Date();e.setTime(e.getTime()+parseInt(c,10)*24*60*60*1000);
document.cookie=a+"="+encodeURIComponent(d)+(c=="session"?"":";expires="+e.toGMTString())+b+";path="+f;},getCookie:function(a){var e;if(document.cookie&&document.cookie!==""){var d=document.cookie.split(";");
var f=d.length;for(var c=0;c<f;c++){var b=d[c].replace(/(^\s*)|(\s*$)/g,"");if(b.substring(0,a.length+1)==(a+"=")){e=decodeURIComponent(b.substring(a.length+1));
break;}}}return e;},showLoginBox:function(b,a){if(M.getCookie("meilele_login")=="1"&&M.getCookie("ECS[username]")){if(typeof b=="function"){b();}return;
}M.showLoginBox.dom=document.getElementById("MLL_login_box");if(!M.showLoginBox.dom){M.showLoginBox.dom=document.createElement("div");document.body.appendChild(M.showLoginBox.dom);
M.showLoginBox.dom.className="MLL_LOGIN_BOX";M.showLoginBox.dom.innerHTML='<div style="text-align:center; padding-top:30px;"><span style="padding:20px;display:inline-block; background:#fff;border:1px solid #ccc;border-radius:5px;">载入中，请稍候...</span></div>';
M.showLoginBox.dom.setAttribute("id","MLL_login_box");M.showLoginBox.dom.style.width="400px";}else{M.showLoginBox.dom.style.display="block";}M.showLoginBox.callback=b;
M.showLoginBox.refresh=a;if(M.showLoginBox.loginScript&&window.loginBox){loginBox.show();}else{M.showLoginBox.loginScript=document.createElement("script");
M.showLoginBox.loginScript.type="text/javascript";M.showLoginBox.loginScript.src=M.__IMG+"/themes/paipai/js/loginbox.min.js?150714";setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(M.showLoginBox.loginScript);
},0);}},searchSuggest:{init:function(c,b){var a=this;a.data=a.data||{};a.data.obj=c;b=b||window.event;a.data.event=b;a.data.v=c.value;a.data.l=document.getElementById("JS_search_suggest");
if(a.data.show&&(b.keyCode==38||b.keyCode==40)){a.data.focusOn=a.data.focusOn||0;a.data.arrow=b.keyCode-39;a.changeFocus();return false;}else{if(a.data.v===""){a.data.show=false;
a.data.l.style.display="none";}else{a.get();}}},changeFocus:function(){var c=this;var b=c.data.focusOn+c.data.arrow;if(b>=0&&b<=c.data.jsonLength+3){var d=c.data.l.childNodes[b-1];
for(var a=0;a<c.data.l.childNodes.length;a++){c.data.l.childNodes[a].className="";}if(!c.data.focusOn){c.data.oldValue=c.data.obj.value;}if(b>0){if(d.getAttribute("id")&&d.getAttribute("id").indexOf("none")===0){c.data.obj.value=c.data.oldValue;
}else{c.data.obj.value=d.innerHTML;}d.className="current";}if(b===0){c.data.obj.value=c.data.oldValue;}c.data.focusOn=b;}},get:function(){var a=this;a.data.cache=a.data.cache||{};
if(a.data.timer){clearTimeout(a.data.timer);}a.data.timer=setTimeout(function(){a.data.v=a.data.obj.value;if(a.data.v===""){return false;}if(a.data.cache[a.data.v]){a.response(a.data.cache[a.data.v]);
}else{if(M.searchSuggest.ajaxHolder&&M.searchSuggest.ajaxHolder.request){M.searchSuggest.ajaxHolder.request.abort();}M.searchSuggest.ajaxHolder=M.ajax({url:"/search_suggest.html?act=search_suggest&k="+encodeURIComponent(a.data.v),dataType:"json",cache:true,success:function(b){a.data.cache[a.data.v]=b;
a.response(b);M.searchSuggest.ajaxHolder=null;}});}},500);},response:function(b){var e=this;if(b&&b.length){e.data.focusOn=0;e.data.jsonLength=b.length;
var d="";for(var a=0;a<b.length;a++){d+='<a href="/keywords/'+b[a].pinyin+'/" target="'+(window._SearchDoNotNewWindow?"_self":"_blank")+'" onmouseout="this.className=\'\'">'+b[a].keyword+"</a>";
if(a===0){d+='<a id="none1" href="javascript:;" onclick="M.searchSuggest.getFormAction(0);">在<strong class="red">家具</strong>分类中搜索</a><a id="none2" href="javascript:;" onclick="M.searchSuggest.getFormAction(1);">在<strong class="red">建材</strong>分类中搜索</a><a id="none3" href="javascript:;" onclick="M.searchSuggest.getFormAction(2);">在<strong class="red">家居饰品</strong>分类中搜索</a>';
}}e.data.show=true;e.data.l.innerHTML=d;e.data.l.style.display="block";if(!e.data.blinkEvent){var c=document.body;if(c.addEventListener){c.addEventListener("click",function(){e.hide();
},false);}else{if(c.attachEvent){c.attachEvent("onclick",function(){e.hide();});}}e.data.blinkEvent=true;}}else{e.hide();}},getFormAction:function(a){var b=M.$("#JS_search_form");
b.action="/category-9999/mcat0-scat0-b0-max0-min0-st"+a+"-attr-page-1-sort-sort_order-order-asc.html";b.setAttribute("target",window._SearchDoNotNewWindow?"_self":"_blank");
b.submit();},hide:function(){var a=this;a.data.l.style.display="none";a.data.show=false;}},ajax:function(a){var b=this;return new b.ajax.prototype.init(a);
},sendSms:function(b,a){if($&&$.sendSms){return $.sendSms(b,a);}else{return new this.sendSms.prototype.init(b,a);}},orderQuery:function(c,a,b){M.orderQuery.orderSn=c;
M.orderQuery.phone=a;if(b){M.orderQuery.callback=b;}if(M.orderQuery.loginScript&&window.Query){window.Query.show();}else{M.orderQuery.loginScript=document.createElement("script");
M.orderQuery.loginScript.type="text/javascript";M.orderQuery.loginScript.src=M.__IMG+"/js/mll/order_query.min.js?0220";setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(M.orderQuery.loginScript);
},0);window._queryTmp=setInterval(function(){if(window.Query){window.Query.show();clearTimeout(window._queryTmp);}},500);}},costDownTip:function(a){if(M.costDown){M.costDown.init(a);
}else{M.costDownTip.loginScript=document.createElement("script");M.costDownTip.loginScript.type="text/javascript";M.costDownTip.loginScript.src=M.__IMG+"/js/mll/costdowntip.min.js?16325";
setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(M.costDownTip.loginScript);},0);M.costDownTip.timer=setInterval(function(){if(M.costDown){M.costDown.init(a);
clearTimeout(M.costDownTip.timer);}},100);}},offsetTop:function(c){var a=c;if(!c){return 0;}var b=0;while(a!=null&&a!=document.body){b+=a.offsetTop;a=a.offsetParent;
}return b;},addToCart:function(e,c,d,b,a){M.showMask();if(M.toCart){M.toCart.init(e,c,d,b,a);}else{M.addToCart.loginScript=document.createElement("script");
M.addToCart.loginScript.type="text/javascript";M.addToCart.loginScript.src=M.__IMG+"/js/mll/addtocart.min.js?0723";setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(M.addToCart.loginScript);
},0);M.addToCart.timer=setInterval(function(){if(M.toCart){M.toCart.init(e,c,d,b||"",a);clearTimeout(M.addToCart.timer);}},100);}},comment:function(a,c,b){if(M.comment.commentScript&&window.mllComment){window.mllComment.show(a,c);
}else{M.comment.commentScript=document.createElement("script");M.comment.commentScript.type="text/javascript";M.comment.commentScript.src="http://image.meilele.com/js/mll/mll_comment.min.js";
setTimeout(function(){document.getElementsByTagName("head")[0].appendChild(M.comment.commentScript);},0);window._commentTmp=setInterval(function(){if(window.mllComment){window.mllComment.show(a,c);
clearTimeout(window._commentTmp);}},100);}if(typeof b=="function"){b();}},hash:function(c){if(M._hash&&!c){return M._hash;}M._hash={};var e=(location.hash+"").replace("#","");
e=e.split("&");for(var a=0,d=e.length;a<d;a++){var b=e[a].split("=");M._hash[b[0]]=b[1];}return M._hash;},setWindowName:function(b){if(!b){return;}b=b.toUpperCase();
var a=Array.prototype.slice.call(arguments,1);window.name+=encodeURIComponent("|M#L#L|"+b+"|##|"+a.join("|#|")+"|M#L#L|");},getWindowName:function(){var a=window.name,g,c,b,f=/\|M#L#L\|(.*)\|M#L#L\|/;
a=decodeURIComponent(decodeURIComponent(a));g=f.exec(a);if(!g||!(g=g[1])){return false;}c=g.split("|##|");if(c[0]==="JS"){b=c[1].split("|#|");try{window[b[0]].apply(null,b.slice(1));
}catch(d){return false;}}a=a.replace(f,"");window.name=encodeURIComponent(a);}};M.ajax.prototype={init:function(c){var f=this;var g;f.type=c.type?c.type.toUpperCase():"GET";
f.dataType=c.dataType||"html";f.success=c.success||false;f.error=c.error||false;f.url=c.url||"";f.data=c.data||"";f.cache=c.cache===false?false:true;f.request=f.getRequest();
g=(f.url.indexOf("?")>-1)?"&":"?";if(M.typeOf(f.data)=="object"){var d="";for(var a in f.data){d+="&"+a+"="+f.data[a];}if(d){f.data=d.replace("&","");}d=null;
}if(f.type=="GET"){f.url+=f.data?(g+f.data):"";}if(!f.cache){var b=new Date();b=b.getTime();g=(f.url.indexOf("?")>-1)?"&":"?";f.url+=g+"_="+b;}if(f.request){var e=f.request;
e.onreadystatechange=f.bindFunction(f.stateChange,f);e.open(f.type,f.url,true);if(f.type=="POST"){e.setRequestHeader("Content-type","application/x-www-form-urlencoded");
e.send(f.data);}else{e.send(null);}}},getRequest:function(){if(window.ActiveXObject){return new ActiveXObject("Microsoft.XMLHTTP");}else{if(window.XMLHttpRequest){return new XMLHttpRequest();
}}return false;},bindFunction:function(b,a){return function(){return b.apply(a,[a]);};},stateChange:function(object){that=this;if(that.request.readyState==4){if(that.request.status==200){if(that.dataType=="json"){var json;
try{if(typeof JSON==="object"){json=JSON.parse(that.request.responseText);}else{json=eval("("+that.request.responseText+")");}}catch(e){if(that.error){that.error();
return false;}}if(typeof json==="object"){if(that.success){that.success(json,that.request.status,that.request);return true;}}else{if(that.error){that.error();
return false;}}}else{if(that.success){that.success(that.request.responseText,that.request.status,that.request);return true;}}}else{if(that.error){that.error(that.request);
return false;}}}}};M.ajax.prototype.init.prototype=M.ajax.prototype;M.sendSms.prototype={constructor:M.sendSms,bg:"http://image.meilele.com/images/zhuanti/upload/a_1374111909.gif",styleInserted:false,init:function(b,a){if(!b){return;
}if(M._currentSendSmsBox){M._currentSendSmsBox.remove();}this.setting=M.extend({type:"exprAddress",phoneNumber:false,autoSend:false,autoClose:true},a);
this.exprId=b;this.setStyleRule();this.dom=this.show();M._currentSendSmsBox=this;this.msgBox=M.$("#_JS_sndSms_msg_box_");this.inpt=M.$("#_JS_sndSms_input_");
this.btn=M.$("#_JS_sndSms_btn_");this.captcha=M.$("#_JS_sndSms_captcha_");this.captchaImg=M.$("#_JS_sndSms_captchaImg_");if(this.setting.phoneNumber&&this.setting.autoSend){this.send();
}this.getCaptcha(this.setting.captchaSrc);},setStyleRule:function(){if(!this.styleInserted){var a=[];var b;a.push(".sms_box {width:338px;padding-bottom:20px;border:5px solid #aaa;border-color:rgba(170,170,170,.8);background:#fff;margin:0px auto;overflow:hidden;}");
a.push(".sms_content {padding-left:26px;padding-top:19px;}");a.push(".sms_input {width:205px;height:28px;border:1px solid #c1c1c1;padding:0;margin:0;color:#555;padding-left:5px;line-height:28px;}");
a.push(".sms_captcha {width:34px;height:28px;border:1px solid #c7c7c7;padding:0;margin:0;vertical-align:top;color:#555;padding-left:5px;line-height:28px;}");
a.push(".sms_content label {height:28px; line-height: 28px;}");a.push(".sms_submit {height:31px;background:#d00 url("+this.bg+") 0px  0px;width:81px;color:#fff;text-align:center;border:none;margin:0;padding:0;font-weight:bold;}");
a.push(".sms_submit:hover {background-position: 0 -31px;}");try{b=document.createStyleSheet();b.cssText=a.join("");}catch(c){b=document.createElement("style");
b.type="text/css";b.textContent=a.join("");document.getElementsByTagName("HEAD").item(0).appendChild(b);}this.styleInserted=true;}},show:function(){var a="请输入您的手机号";
var b="";b+='<div class="sms_box" style="">';b+='<div class="clearfix" style="height:40px;line-height:40px;border-bottom:1px solid #dedede;padding-left:32px;color:#333;background:#f1f1f1 url('+this.bg+') -56px -62px no-repeat;"><div class="Left" style="font-size:16px;font-family:微软雅黑;">免费发送体验馆地址到手机</div><div class="Right" style="padding-right:10px;"><a style="font-size:18px;color:#909090;font-weight:bold;" href="javascript:;" onclick="M.closeLightBox(\'{=id}\');">&times;</a></div></div>';
b+='<div class="sms_content" style="">';b+='<div><label for="_JS_sndSms_input_">手机号：</label><input class="sms_input" value="'+(this.setting.phoneNumber||a)+'" onfocus="if(this.value==\''+a+'\')this.value=\'\'" onkeypress="M._currentSendSmsBox.keyPress(event);" id="_JS_sndSms_input_" name="_JS_sndSms_input_" /></div>';
b+='<div style="margin-top:10px;"><label for="_JS_sndSms_captcha_">验证码：</label><input class="sms_captcha" value="'+(this.setting.captcha||"")+'" onfocus="if(this.value==\'验证码\')this.value=\'\'" id="_JS_sndSms_captcha_" name="_JS_sndSms_captcha_" onkeypress="M._currentSendSmsBox.keyPress(event);" ><img src="http://image.meilele.com/themes/paipai/images/blank.gif" style="width:75px;margin-right:5px;height:30px;vertical-align:top;margin-left:8px;cursor:pointer" title="换一张" onclick="M._currentSendSmsBox.getCaptcha();return false;" id="_JS_sndSms_captchaImg_" /><input id="_JS_sndSms_btn_" type="button" style="" class="pointer sms_submit" onclick="M._currentSendSmsBox.send();" value=" " /></div>';
b+='<div style="margin-top:20px;"><a href="/topic/meilelegw.html" target="_blank">关注美乐乐微信公众号，关注有好礼，100%中奖！</a></div>';b+='<div style="color:#454545;padding-top:10px;" id="_JS_sndSms_msg_box_"></div>';
b+="</div>";b+="</div>";b+="";return M.lightBox(b,{},true);},getCaptcha:function(a){if(a){M._currentSendSmsBox.captchaImg.setAttribute("src",a);}else{M.ajax({url:"/user/?act=get_captcha",cache:false,success:function(b){M._currentSendSmsBox.captchaImg.setAttribute("src",b);
}});}},remove:function(){if(M._currentSendSmsBox&&M._currentSendSmsBox.dom&&M._currentSendSmsBox.dom.parentNode){M._currentSendSmsBox.dom.parentNode.removeChild(M._currentSendSmsBox.dom);
delete (M._currentSendSmsBox);}},send:function(){var c=parseInt(M._currentSendSmsBox.inpt.value.replace(/\D/g,""),10);var b=M._currentSendSmsBox.captcha.value;
M._currentSendSmsBox.inpt.value=c||"";if(!c){M._currentSendSmsBox.msg("请输入正确手机号码。");return;}if(!b||b=="验证码"){M._currentSendSmsBox.msg("请输入正确验证码。");return;
}M._currentSendSmsBox.msg("发送中...");M._currentSendSmsBox.btn.disabled=true;var d={};for(var a in M._currentSendSmsBox.setting){if(a!="captcha"&&a!=="captchaSrc"&&typeof M._currentSendSmsBox.setting[a]!="object"&&typeof M._currentSendSmsBox.setting[a]!="function"){d[a]=M._currentSendSmsBox.setting[a];
}}M.ajax({url:"/ajax_ajax.html?act=send_expr_message&expr_id="+M._currentSendSmsBox.exprId+"&mobile="+c+"&captcha="+b+"&url="+encodeURIComponent(location.href),data:d,type:"get",dataType:"json",success:function(e){M._currentSendSmsBox.getCaptcha();
if(e.error=="0"){var f=M.getCookie("MLLFROM");window._gaq=window._gaq||[];_gaq.push(["_trackEvent","sms",M._currentSendSmsBox.setting.type,((M.getCookie("MLLFROM")||M.getCookie("MLLSEO"))+"_undefined").split("_")[0]+(M._currentSendSmsBox.setting.click?("_"+M._currentSendSmsBox.setting.click):"")]);
if(M._currentSendSmsBox.setting.autoClose){e.msg+="<br />本窗口将在2秒后自动关闭。";setTimeout(M._currentSendSmsBox.remove,4000);}M._currentSendSmsBox.msg(e.msg,true);
if(M._currentSendSmsBox.setting.success){M._currentSendSmsBox.setting.success(e);}}else{M._currentSendSmsBox.msg(e.msg);M._currentSendSmsBox.btn.disabled=false;
}},error:function(){M._currentSendSmsBox.getCaptcha();M._currentSendSmsBox.msg("发送失败");M._currentSendSmsBox.btn.disabled=false;}});},msg:function(b,c){var a=c?"-42":"-27";
b='<span style="display:inline-block;vertical-align:middle;width:14px;height:14px;background:url('+this.bg+") "+a+'px -65px;margin-right:6px;"></span><span style="vertical-align:middle;color:#f24443;">'+b+"</span>";
M._currentSendSmsBox.msgBox.innerHTML=b;},keyPress:function(a){a=a||window.event;if(a.keyCode==13){M._currentSendSmsBox.send();}}};M.sendSms.prototype.init.prototype=M.sendSms.prototype;
function MLLBanner(lists,setting){if(!(lists&&lists.length)){return false;}var banner=[],doc=document,tmpId=(new Date()).getTime().toString(36),length=lists.length,now,next,over,outStep,inStep,countList=[],focus=true,must=false;
var defaultSetting={width:1190,height:60,domId:"JS_banner",delay:6000,inTimer:600,outTimer:300,stepTimer:40};var timeDefaultSetting={content:"$D天 $H:$I:$S",style_position:"absolute","style_margin-left":"600px","style_margin-top":"15px","style_font-size:":"16px"};
setting=mergeSetting(defaultSetting,setting);var bannerDom=doc.getElementById(setting.domId);if(!bannerDom){return false;}bannerDom.style.display="block";
outStep=100/(setting.outTimer/setting.stepTimer);inStep=100/(setting.inTimer/setting.stepTimer);var Banner=function(info,key){this.info=info||[];this.key=key;
this.opacity=0;this.createHTML();};Banner.prototype={createHTML:function(){this.html='<div id="JS_banner_box_'+this.key+"_"+tmpId+'" style="display:none;background:url(http://image.meilele.com/themes/paipai/images/loading.gif) center center no-repeat;filter:alpha(opacity=100);'+(window.LOAD?"":"margin-left:-105px;")+'">';
if(this.info[3]){try{eval("this.info[3]="+this.info[3]);}catch(e){}if(this.info[3]&&typeof this.info[3]=="object"&&this.info[3].endTime){this.timeSetting=mergeSetting(timeDefaultSetting,this.info[3]);
this.timeSetting.timeLeft=toSecond(this.timeSetting.endTime)-(new Date()).getTime();countList.push([this.key,this.timeSetting]);this.html+='<div style="'+styleToString(this.timeSetting)+'" id="JS_banner_time_'+this.key+"_"+tmpId+'"></div>';
}}this.html+='<a id="JS_banner_link_'+this.key+"_"+tmpId+'" href="'+(this.info[1]||"/")+'" title="'+(this.info[2]||"")+'" target="_blank"><img id="JS_banner_img_'+this.key+"_"+tmpId+'" src="'+this.info[0]+'" width="'+setting.width+'" height="'+setting.height+'"></a>';
this.html+="</div>";},changeOpacity:function(to){M.changeOpacity(this.box,to,true);this.opacity=to;}};function mergeSetting(defaultSetting,setting){setting=setting||{};
for(var k in defaultSetting){if(setting[k]===undefined){setting[k]=defaultSetting[k];}}return setting;}function switchBanner(){if(over&&!must){return;}if(!focus&&!must){return;
}next=(now+1)%length;if(banner[now].opacity>0){banner[now].changeOpacity(banner[now].opacity-outStep);must=true;setTimeout(switchBanner,setting.stepTimer);
}else{if(banner[next].opacity<100){banner[next].changeOpacity(banner[next].opacity+outStep);must=true;setTimeout(switchBanner,setting.stepTimer);}else{must=false;
now=next;}}}function styleToString(style){var r=[];for(var key in style){if(key.indexOf("style_")===0){r.push(key.replace("style_","")+":"+style[key]);
}}return r.join(";");}function toSecond(string){var t=string.split("-");var d=new Date(t[0],parseInt(t[1],10)-1,t[2]);return d.getTime();}function count(){for(var k=0,kk=countList.length;
k<kk;k++){var c=countList[k];if(c&&banner[c[0]]&&banner[c[0]].time){var dom=banner[c[0]].time;c[1].timeLeft-=1000;if(c[1].timeLeft<=0){c[1].timeLeft=0;
}dom.innerHTML=fixTime(c[1]);}}}function fixTime(time){var sec=parseInt(time.timeLeft/1000,10);if(sec<0){sec=0;}var s=sec%60;if(s<10){s="0"+s;}var m=parseInt(sec%3600/60,10);
if(m<10){m="0"+m;}var h=parseInt(sec%(3600*24)/3600,10);if(h<10){h="0"+h;}var d=parseInt(sec/(3600*24),10);if(time.content.indexOf("$D")<0){h=(d*24)-0+(h-0);
}return time.content.replace("$D",d).replace("$H",h).replace("$I",m).replace("$S",s);}var h="";for(var k=0,kk=length;k<kk;k++){banner[k]=new Banner(lists[k],k);
h+=banner[k].html;}bannerDom.innerHTML=h;bannerDom.onmouseover=function(){over=true;};bannerDom.onmouseout=function(){over=false;};for(var k=0,kk=length;
k<kk;k++){banner[k].box=doc.getElementById("JS_banner_box_"+k+"_"+tmpId);banner[k].link=doc.getElementById("JS_banner_link_"+k+"_"+tmpId);banner[k].img=doc.getElementById("JS_banner_img_"+k+"_"+tmpId);
banner[k].time=doc.getElementById("JS_banner_time_"+k+"_"+tmpId);if(!k){banner[k].opacity=100;banner[k].box.style.display="block";now=k;}}if(countList.length){setInterval(count,1000);
}if(length>1){setInterval(switchBanner,setting.delay);}}(function(d,c,e){e=e||{};var a=document.body,b=c.getElementsByTagName("head")[0];e.typeOf=function(f){return typeof f;
};e.extend=function(i,g){i=i||{};g=g||{};for(var f in g){i[f]=g[f];}return i;};e.addHandler=function(k,j,i,g){function f(m){var l=m?m:window.event;l.target=m.target||m.srcElement;
return i.apply(g||this,arguments);}k.eventHash=k.eventHash||{};(k.eventHash[j]=k.eventHash[j]||[]).push({name:j,handler:i,fn:f,scope:g});if(k.addEventListener){k.addEventListener(j,f,false);
}else{if(k.attachEvent){k.attachEvent("on"+j,f);}else{k["on"+j]=f;}}};e.removeHandler=function(m,l,k,j){m.eventHash=m.eventHash||{};var i=m.eventHash[l]||[],g=i.length;
if(g>0){for(;g--;){var f=i[g];if(f.name==l&&f.handler===k&&f.scope===j){if(m.removeEventListener){m.removeEventListener(l,f.fn,false);}else{if(m.detachEvent){m.detachEvent("on"+l,f.fn);
}else{m["on"+l]=null;}}i.splice(g,1);break;}}}};e.inArray=function(j,l){var g=-1;if(j&&l&&l.length){for(var f=0,i=l.length;f<i;f++){if(j==l[f]){return f;
}}}return g;};e.$=function(f,j){var l;if(!f){return false;}if(j===undefined){j=document;}if(e.typeOf(j)==="string"){j=e.$(j);}if(!j){return false;}if(f.indexOf("#")===0){l=j.getElementById(f.substr(1));
}else{if(f.indexOf(".")===0){if(j.getElementsByClassName&&0){l=j.getElementsByClassName(f.replace(".",""));}else{l=[];all=j.getElementsByTagName("*");for(var g=0;
g<all.length;g++){var k=all[g];var m=k.className;if(m){m=m.split(/\s/g);if(e.inArray(f.replace(".",""),m)>=0){l.push(k);}}}}}else{l=j.getElementsByTagName(f);
}}return l;};e.addClass=function(g,i){if(g){if(g&&g.classList&&g.classList.add){i=i.split(/\s/g);for(var f=0;f<i.length;f++){g.classList.add(i[f]);}}else{var j=(g.className+"").split(/\s/g)||[];
if(e.inArray(i,j)==-1){j.push(i);g.className=j.join(" ");}}}return g;};e.removeClass=function(l,m){if(l&&l.classList&&l.classList.remove){m=m.split(/\s/g);
for(var f=0;f<m.length;f++){l.classList.remove(m[f]);}}else{if(m&&typeof m=="string"&&l&&typeof l.className=="string"){var g=l.className.split(/\s/g);var i=[];
if(g&&g.length){for(var f=0,j=g.length;f<j;f++){if(g[f]!=m){i.push(g[f]);}}}l.className=i.join(" ");}}return l;};e.bindFunction=function(i,f){var g=Array.prototype.slice.call(arguments).slice(2);
return function(){return f.apply(i,g.concat(Array.prototype.slice.call(arguments)));};};})(window,document,window.M);window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b,a){window.setTimeout(b,1000/60);
};})();M.Animate=function(c,a,b,e,d){return new M.Animate.prototype.init(c,a,b,e,d);};M.Animate.prototype={init:function(e,c,d,g,f){var b=/opacity\s*=\s*([^)]*)/;
this.dom=e;this.time=d||300;this.preTime=10;this.list=c;this.callback=f;this.tweenType=g||"easeInOut";this._d=Math.ceil(this.time/this.preTime);this._t=0;
this._c={};this._b={};for(var a in this.list){this._b[a]=parseFloat(("opacity|".indexOf(a+"|")>-1&&e.currentStyle)?(b.test(e.currentStyle.filter)?(0.01*parseFloat(RegExp.$1)):1):(this.currentStyle()[a]||0));
this._c[a]=parseFloat(this.list[a])-this._b[a];}if(this.dom._animate){this.dom._animate.stop();}this.run();this.dom._animate=this;},currentStyle:function(){var a=this.dom;
return a.currentStyle||document.defaultView.getComputedStyle(a,null);},run:function(){if(this._t>this._d){if(M.typeOf(this.callback)=="function"){this.callback();
}return;}else{if(this._stop){return;}else{for(var a in this.list){var b=this.tween[this.tweenType](this._t,this._b[a],this._c[a],this._d)+(("opacity|".indexOf(a+"|")>-1)?"":"px");
this.dom.style[a]=b;if("opacity|".indexOf(a+"|")>-1){this.dom.style.filter="alpha(opacity="+b*100+")";}}this._t++;requestAnimFrame(M.bindFunction(this,this.run),this.preTime);
}}},stop:function(){this._stop=true;},tween:{easeIn:function(e,a,g,f){return g*(e/=f)*e*e*e+a;},easeOut:function(e,a,g,f){return -g*((e=e/f-1)*e*e*e-1)+a;
},easeInOut:function(e,a,g,f){if((e/=f/2)<1){return g/2*e*e*e*e+a;}return -g/2*((e-=2)*e*e*e-2)+a;},linear:function(e,a,g,f){return g*e/f+a;}}};M.Animate.prototype.init.prototype=M.Animate.prototype;
var taobao=1;function static_dynamic(page_sn){var dom=document.getElementById("static_dynamic");if(!dom){return;}page_sn=dom.getAttribute("page_sn");if(typeof page_sn=="undefined"||!page_sn||page_sn.length===0){var href=location.href;
if(href.substr(-4)==".com"||href.substr(-4)=="com/"){page_sn="index";}else{if(href.indexOf("category-")!=-1){if(href.indexOf("goods-")>href.indexOf("category-")){page_sn="goods";
}else{page_sn="category";}}else{if(href.indexOf("article_cat")!=-1){if(href.indexOf("article-")>href.indexOf("article_cat")){page_sn="article";}else{page_sn="article_cat";
}}}}}var url="/ajax_static_dynamic/?nojs&page_sn="+page_sn;goods_id=dom.getAttribute("goods_id");rgn_id=dom.getAttribute("rgn_id");debug=dom.getAttribute("debug");
if(typeof goods_id!="undefined"&&goods_id&&goods_id>0){url=url+"&goods_id="+goods_id;}if(typeof rgn_id!="undefined"&&rgn_id&&rgn_id>0){url=url+"&rgn_id="+rgn_id;
}if(typeof debug!="undefined"&&debug&&debug>0){url=url+"&debug=1";}M.ajax({url:url,dataType:"json",data:window._STATIC_DATA_||null,cache:false,success:function(json){var tmp={};
for(var k in json){var callback=null;var key=json[k].node_name;if(key){tmp[key]=json[k];}if(json[k].node_name&&json[k].html_content.toString().length&&document.getElementById(json[k].node_name)){document.getElementById(json[k].node_name).innerHTML=json[k].html_content;
}if(json[k].js_call_func_name){try{callback=eval(json[k].js_call_func_name);}catch(e){}if(callback&&typeof callback=="function"){callback(json[k]);}}}if(window._STATIC_DYNAMIC_CALLBACK&&typeof window._STATIC_DYNAMIC_CALLBACK=="function"){window._STATIC_DYNAMIC_CALLBACK(tmp);
}}});return true;}M.lazyImg={domList:{},waitList:[],downList:[],status:0,loader:false,start:function(b,a){if(this.status>1){return;}this.status=1;this.type=b;
this.setting=M.extend({scrollTimer:300,defaultLimit:30,attributeTag:"data-src",loaderNumber:4,offset:50,callback:null},a);this.init();},init:function(){this.initDomList();
if(!this.type||parseInt(this.type,10)>0){this.setRealType();}if(this.type=="scroll"||this.type=="both"){this.initDomOffsetTop();this.initEvent();this.scrollResponse();
}else{this.prepend(this.domList);}},setRealType:function(){if(!this.type){this.type=this.setting.defaultLimit;}if(parseInt(this.type,10)>0){this.type=(this.domListLength>=this.type)?"both":"lazy";
}},initDomList:function(){this.domListLength=0;var f=document.images;var e;for(var a=0,d=f.length;a<d;a++){if(Object.prototype.toString.apply(this.setting.attributeTag)==="[object Array]"){loopin:for(var b=0,c=this.setting.attributeTag.length;
b<c;b++){e=f[a].getAttribute(this.setting.attributeTag[b]);if(e){break loopin;}}}else{e=f[a].getAttribute(this.setting.attributeTag);}if(f[a]&&e){this.domList["init_"+a]={target:f[a],src:e};
this.domListLength++;}}},initDomOffsetTop:function(){for(var a in this.domList){if(this.domList[a]&&this.domList[a].target){this.domList[a]._offsetTop=M.offsetTop(this.domList[a].target);
}}},initEvent:function(){M.addHandler(window,"scroll",M.lazyImg.scrollResponse);M.addHandler(window,"resize",M.lazyImg.scrollResponse);},scrollResponse:function(){var a=M.lazyImg;
if(window.scrollTimer){clearTimeout(window.scrollTimer);}window.scrollTimer=window.setTimeout(function(){var d=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
var c=[];for(var b in a.domList){if(d+document.documentElement.clientHeight+a.setting.offset>a.domList[b]._offsetTop&&d-a.setting.offset<a.domList[b]._offsetTop+(a.domList[b].target.height||a.domList[b].target.cilentHeight)){c.push(a.domList[b]);
delete a.domList[b];}}a.prepend(c);c=null;},a.setting.scrollTimer);},prepend:function(a){if(this.status==="0"){this.start();}a=this.formatImglist(a);this.concatList(a,this.waitList);
},append:function(a){if(this.status==="0"){this.start();}a=this.formatImglist(a);this.concatList(this.waitList,a);},formatImglist:function(c){c=c||[];var b=[];
for(var a in c){if(typeof c[a]=="string"){c[a]={src:c[a]};}b.push(c[a]);}return b;},concatList:function(){this.waitList=Array.prototype.concat.apply([],arguments);
if(this.waitList.length>0){this.startLoad();}},initLoader:function(){this.loader=[];for(var a=0;a<this.setting.loaderNumber;a++){this.loader.push(new this.Loader(a));
}},checkAllLoaderIsReset:function(){var b=true;for(var a=0;a<this.loader.length;a++){if(this.loader[a].status=="1"){return false;}}return b;},startLoad:function(){if(!this.loader){this.initLoader();
arguments.callee.apply(this);return;}for(var a=0,b=this.loader.length;a<b;a++){this.loader[a].run();}},Loader:function(a){this.key=a;this.run();},loadPrototype:{run:function(){if(this.status==1||!M.lazyImg.waitList[0]){return;
}this.job=M.lazyImg.waitList.shift();if(this.job&&this.job.src){this.status=1;this.img=new Image;this.img.loaderKey=this.key;this.img.onload=this.img.onerror=function(){var a=this.loaderKey;
setTimeout(function(){M.lazyImg.onloadResponse(a);},0);this.onload=this.onerror=null;};this.img.src=this.job.src;}else{this.run();}}},onloadResponse:function(e){var a=M.lazyImg.loader[e];
if(a.job.target&&a.job.src){a.job.target.setAttribute("src",a.job.src);}a.status=2;var b=true;if(M.lazyImg.type=="scroll"||M.lazyImg.type=="both"){var d=[];
loop:for(var c in M.lazyImg.domList){if(M.lazyImg.type=="both"&&M.lazyImg.waitList.length===0){d.push(M.lazyImg.domList[c]);delete M.lazyImg.domList[c];
}b=false;break loop;}Array.prototype.unshift.apply(M.lazyImg.waitList,d);d=null;if(b){M.removeHandler(window,"scroll",M.lazyImg.scrollResponse);M.removeHandler(window,"resize",M.lazyImg.scrollResponse);
}}if(b&&typeof M.lazyImg.setting.callback=="function"&&!M.lazyImg.waitList[0]&&!M.lazyImg.called&&M.lazyImg.checkAllLoaderIsReset()){M.lazyImg.setting.callback();
M.lazyImg.called=true;}a.run();}};M.lazyImg.Loader.prototype=M.lazyImg.loadPrototype;M.changeOpacity=function(b,c,a){if(b.filters){b.filters.alpha.opacity=c;
}else{b.style.opacity=c/100;}if(a){if(c<=0){b.style.display="none";}else{b.style.display="block";}}};function _INIT_HEAD_PHONE_SCROLL_(){var a=document.getElementById("JS_header_phone");
if(!a){return;}a.innerHTML+="<br>"+a.innerHTML;_HEAD_PHONE_SCROLL_();}function _HEAD_PHONE_SCROLL_(){var c=document.getElementById("JS_header_phone");if(!c){return;
}var b=20;var d=c.innerHTML.toLowerCase().split(/<br\s?\/?>/g).length;var a=(parseInt(c.style.marginTop,10)||0)-1;if(a<0-b*d/2){a=-1;}c.style.marginTop=a+"px";
if(a%b){setTimeout(_HEAD_PHONE_SCROLL_,20);}else{setTimeout(_HEAD_PHONE_SCROLL_,5000);}}M.ad=M.ad2=function(tags,setting){var defaultTemplate='<a href="<%=ad[0].url%>" title="<%=ad[0].desc%>" target="<%=ad[0].target%>"><img src="<%=ad[0].src%>" width="<%=width%>" height="<%=height%>" alt="<%=ad[0].desc%>" /></a>';
var fill=function(d){M.ad._data=d;d.template=d.template||defaultTemplate;d.template=d.template.replace(/<\%=(.*?)%\>/g,function($0,$1){return eval("M.ad._data."+$1);
});d.dom.innerHTML=d.template;};setting=setting||{};var ck=M.getCookie("MLL_AD");var tag=setting.tag||ck||setting.defaultTag;var tagId=[];try{tag=encodeURIComponent(tag).replace(/%/g,"");
}catch(e){}if(!tag||tag=="undefined"||tag=="null"){tag="DEFAULT";}for(var k in tags){if(tags[k]&&tags[k].dom){tagId.push(k);}}M.ajax({url:"/ad_img/"+tag+"/"+tagId.join("_")+"/",dataType:"json",success:function(json){for(var k in json){if(json[k]&&json[k].length&&tags[k]){var d=tags[k];
var v=json[k];d.ad=v;if(!d.notFill){fill(d);}if(d.callback){d.callback(v);}}}}});};
/*dengyun:2016-04-07 15:24:16*/