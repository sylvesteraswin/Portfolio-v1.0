(function(){var a={onLoad:function(){this.tabInit();this.designsLoad();this.contactFormValidate();this.langLoad("mySkillsTab","mySkillsTabContent");this.topUlScrollAct();this.appendShare()},resizeSkillBook:function(){var a=$("#mySkillsTab");$("#mySkillsTabContent").height(a.height()-10)},appendShare:function(){$("<script />").html('(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1&appId=136190599838893"; fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));(function() {var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);})();').appendTo(document.body);
$(".like-btns").html('<div class="fb-like" data-send="false" data-layout="button_count" data-width="50" data-show-faces="true" data-font="segoe ui"></div><script src="//platform.linkedin.com/in.js" type="text/javascript"><\/script><script type="IN/Share" data-url="http://www.iamsyl.com" data-counter="right"><\/script><div class="g-plusone" data-size="medium" data-href="http://www.iamsyl.com"></div>').find("div").css("float","left").end().css("margin-top","4px").find("div:nth-child(1)").css("width",
"77px")},topUlScrollAct:function(){var a=this;$("#navbar ul").on("click","a",function(b){b.preventDefault();b=$(this);b.closest("ul").find(".active").toggleClass("active");b.closest("li").toggleClass("active");a.topUlScroll(b.attr("href"))})},topUlScroll:function(a){$("html:not(:animated),body:not(:animated)").animate({scrollTop:$(a).offset().top},500)},contactFormValidate:function(){var a=this;$("#contactform").validate({rules:{email:{email:!0}},messages:{name:"Oops! You forgot your name.",email:{email:"I need a valid email buddy!!"},
comments:"Few lines please... Even 2 words should do good"},errorElement:"span",submitHandler:function(){a.sendMail()}})},sendMail:function(){$.ajax({type:"POST",url:"email.php",data:$("#contactform").serialize(),dataType:"json",success:function(a){if(a.status=="success"){var b=$("#contactformInfo");$("#contactform").slideUp(400,function(){b.find("div.alert").addClass("alert-success").append($("<span />").css({"margin-left":"10px",display:"inline-block"}).html("You Email has been sent successfully."));
b.find("i").addClass("icon-ok-sign");b.removeClass("hidden").slideDown(400)})}else a.status=="error"&&(b.find("div.alert").addClass("alert-error").append($("<span />").css({"margin-left":"10px",display:"inline-block"}).html(a.message)),b.find("i").addClass("icon-remove-circle"),b.removeClass("hidden").slideDown(300))}})},designAddBorder:function(){var a=$("#design .white-box > .span3"),b=a.length,d,c;for(i=1;i<=b;i++)i===1?(d=i,d++,c=a.find(".design-a-bd").get(i-1),c.className+=" design-a-bd-left"):
d===1?(d++,c=a.find(".design-a-bd").get(i-1),c.className+=" design-a-bd-left"):d===4?d=1:d++},designClickHandler:function(){$("#design .white-box").on("click","a.design-a",function(a){a.preventDefault();$(this).zoom()})},designsOverInvike:function(){$(".design-wrap a").on("mouseenter",function(){$(this).find(".overlay").stop().animate({opacity:1},200);$(this).find(".design-a-bd").addClass("hover")}).on("mouseleave",function(){$(this).find(".overlay").stop().animate({opacity:0},200);$(this).find(".design-a-bd").removeClass("hover")})},
twitterLoad:function(){JQTWEET.loadTweets()},loadTimeLine:function(){this.checkMobileUA()||EXPERIENCE.genYear()},checkMobileUA:function(){return navigator.userAgent.indexOf("Mobile")>=0},langLoad:function(a,b){var d=$("#"+a),c=$("#"+b),f=this;!d.length>0&&(d=$("<ul />").attr("id",a));!c.length>0&&(c=$("<div />").attr("id",b));$.getJSON("design_load.php?q=lang",function(k){$.each(k.tech,function(a,b){g.config(b.name,b.id,b.lang);d.append(g.ulliCreate());c.append(g.tabPaneCreate())});f.tabLangInit(a,
b);f.scrollInit();f.resizeSkillBook()})},designTagLoad:function(){hLeft2='><div class="tagBod"><h3>';hRight="</h3></div></div>";finalHtml="";temp="";this.tags=["html","css","feo","jquery","usability"];for(var a=0;a<this.tags.length;a++)temp='<div class="tag-wrap" data-get-tag="'+this.tags[a]+'"'+hLeft2+this.tags[a]+hRight,finalHtml+=temp;$(".white-top .span11").html(finalHtml);for(var b=0,d,c=$(".white-top .tag-wrap"),a=0;a<c.length;a++)elIns=c.eq(a),elPrevIns=c.eq(a-1),elIns.width(),elPreWidth=elPrevIns&&
elPrevIns.width(),b==0?(d=b,b=elPreWidth+20):(d=b+elPreWidth,b+=elPreWidth+62),elIns.css("left",d+"px").data("count",0);c.on("mouseenter",function(){$(this).toggleClass("onhover")}).on("mouseleave",function(){$(this).toggleClass("onhover")})},designTagCountLoad:function(){for(var a=$(".white-box a.design-a"),b=$(".white-top"),d=a.length,c,f,k,g,e=0;e<d;e++){c=a.eq(e).data("object");f=c.use;for(var l=0;l<this.tags.length;l++)c=this.tags[l],f.indexOf(c)>=0&&(g=b.find('div[data-get-tag="'+c+'"]'),k=
g.data("count"),++k,g.data("count",k))}for(l=0;l<this.tags.length;l++)c=this.tags[l],g=b.find('div[data-get-tag="'+c+'"]'),k=g.data("count"),g.find("h3").html(c+" <span>("+k+")</span>")},designsLoad:function(){var a=$("#design .white-box"),b=this,d;$.getJSON("design_load.php",function(c){$.each(c.type,function(b,c){d=c;this.s3=f.span3();this.designWrap=f.designWrap();this.aLnk=f.designA(c.name,c.image,c.position,c.title,c.descp,c.use,d);this.designWrap.append(this.aLnk);this.s3.append(this.designWrap);
a.append(this.s3)});b.designsOverInvike();b.designAddBorder();b.checkMobileUA()||(b.designClickHandler(),b.designTagLoad(),b.designTagCountLoad());b.twitterLoad();b.loadTimeLine()})},tabLangInit:function(a,b){var d=$("#"+a),c=$("#"+b);d.find("li").filter(":first").addClass("active");c.find("div.tab-pane").filter(":first").addClass("active").addClass("in");d.tab("show");d.find("li").filter(":first").addClass("active")},tabInit:function(){var a=$("#myAboutTab");a.tab("show");a.find("li").filter(":first").addClass("active")},
scrollInit:function(){$(document.body).attr("data-spy","scroll").attr("data-target","#navbar");$(".accordion").collapse({parent:!0,toggle:!0});$("#accorWork").css("height","auto");$(".carousel").carousel({interval:5E4})}},g={ulliCreate:function(){var a=$("<li></li>"),b=$("<a></a>");b.attr("data-target",this.id).attr("data-toggle","tab").html("<i class='skills-icon'></i>"+this.name);a.append(b);return a},tabPaneCreate:function(){var a=$("<div></div>");u=$("<ul></ul>");a.addClass("tab-pane").addClass("fade").attr("id",
this.id.substring(1));u=this.liCreate(u).appendTo(a);return a},liCreate:function(a){$([]);var b,d,c,f,g=this;$.each(this.lang,function(j,e){b=$("<li />");$("<h2 />").html(e.name).appendTo(b);c=e.exp?"<p>Total Exp: <span>"+e.exp+"</span></p>":$();f=e.rate?"<p>Rating: <span>"+e.rate+"</span></p>":$();d=e.screen==null||e.screen==void 0?$():g.iconCreate(e.screen,e["screen-name"]);a.append(b.append(d).append(c).append(f))});return a},iconCreate:function(a,b){var d,c,f,g,j,e;if(!(a==null||a==void 0)){if(a.indexOf(",")>
0){d=a.split(",");g=b.split(",");e=$("<span/>");for(var l=0;l<d.length;l++)c=$("<span />").addClass("label"),j=document.createTextNode(g[l]),f=$("<i />").addClass("icon-white").addClass(d[l]),f.after(j).appendTo(c),e.append(c)}else e=$("<span />").addClass("label"),j=document.createTextNode(b),c=$("<i />").addClass("icon-white").addClass(a),c.after(j).appendTo(e);return e}},config:function(a,b,d){this.name=a;this.id=b;this.lang=d}},f={span3:function(){return $("<div></div>").addClass("span3")},designWrap:function(){return $("<div></div>").addClass("design-wrap")},
config:function(a,b,d,c,f,g,j){this.position=d;this.title=c;this.name=a;this.img=b;this.descp=f;this.use=g;this.ojb=j},designA:function(a,b,d,c,f,g,j){this.config(a,b,d,c,f,g,j);a=$("<a></a>");a.addClass("design-a").attr("href",this.img).attr("title",this.title).attr("rel",this.position).data("object",j);return a=this.designAInnerDiv(a)},designAInnerDiv:function(a){var b=$("<div></div>").addClass("design-a-bd"),d=$("<div></div>").addClass("design-a-bd-id"),c=$("<div></div>").addClass("design-a-bd-wf"),
c=this.overlay(c),c=this.designMainImage(c),c=this.designName(c),c=this.designDescp(c),c=this.designUse(c);b.append(d).append(c);a.append(b);return a},overlay:function(a){var b=$("<span></span>").addClass("overlay").css("opacity","0");return a.append(b)},designMainImage:function(a){var b=$("<img />");b.addClass(this.position).attr("width","210").attr("height","160").attr("title",this.title).attr("src","img/spacer.gif");return a.append(b)},designName:function(a){var b=$("<div></div>");b.addClass("design-a-bd-txt").html(this.name);
return a.append(b)},designDescp:function(a){var b=$("<div></div>");b.addClass("design-a-bd-desc").html(this.descp);return a.append(b)},designUse:function(a){var b=$("<div></div>");b.addClass("design-a-bd-badge");for(var d=this.use.split(","),c=0;c<d.length;c++)b.append(this.splitUseSplit(d[c]));return a.append(b)},splitUseSplit:function(a){var b;b=$("<span />");b.addClass("label").addClass("label-inverse").html(a);return b}};a.onLoad();$(window).resize(function(){a.resizeSkillBook()})})();(function(a){a.fn.extend({})})(jQuery);
(function(a){a.fn.extend({createImage:function(g){g=a.extend({},{create:!0},g);return this.each(function(){var f=a(this),h=g,b=a("<img />"),d=a("<div />").addClass(h.tDiv);f.append(d);d.append(b).css("height",h.tIndHeight);console.log(h.src);b.attr("src",h.src).attr("height",h.height).load(function(){parseInt(this.width,10)>parseInt(this.height,10)&&(a(this).attr("data-type","loaded"),f.closest("."+h.tDiv).css("padding-top","45px"))})})}})})(jQuery);
(function(a){a.fn.extend({careerTip:function(g){g=a.extend({show:!0},g);return this.each(function(){var f=a(this),h=a("<div />").addClass("cusTooltip"),b,d=f.data("object"),c=g,n=f.data("name"),k="";b=f.offset().top-45;f=f.offset().left-10;k+="<h1>"+d.name+"</h1>";k+="<h2>"+d.dept+'<i class="tooltip-'+d.type+'"></i></h2>';d.role&&(k+="<h3>"+d.role+"</h3>");h.html(k).css({left:f+"px",top:b+"px",opacity:0});c.show?(h.attr("data-hook",n).appendTo(document.body),parseInt(h.outerHeight(),10)>69?h.css("top",
"-="+(Math.round(parseInt(h.height(),10)/2)+13)):h.css("top","-="+(Math.round(parseInt(h.height(),10)/3)+13)),h.animate({opacity:1})):a('div[data-hook="'+n+'"]').fadeOut(400,function(){a(this).remove()})})}})})(jQuery);
(function(a){a.fn.extend({zoom:function(){return this.each(function(){var g=a(this),f=a(window).width(),h=a(window).height(),b=a(document).height(),d=g.data("object"),c=["overview","details"],n=a("<div />").addClass("design-hc-over"),k=a("<div />").addClass("design-hc-wrap"),j=a("<div />").addClass("design-hc-dlog"),g=a("<div />").addClass("design-hc-close-btn"),e=a("<div />").addClass("design-hc-head").appendTo(j),l=a("<div />").addClass("design-hc-menu").appendTo(j),p=a("<div />").addClass("design-hc-content").appendTo(j);
p.css("height",h-140-21);n.css({width:"100%",height:b,display:"none"});n.appendTo(document.body).fadeIn(200);k.css("display","none").appendTo(document.body).fadeIn(500);g.html('<a class="close">&times;</a>').appendTo(j);a(document.body).addClass("zoomed");var e=a("<div />").addClass("design-hc-head-inside").appendTo(e),b=a("<div />").addClass("design-hc-head-logo").appendTo(e),m='<a href="#" class="company '+d.position.substring(d.position.indexOf("-")+1)+'" alt="'+d.title+'"><img src="img/spacer.gif" alt="Akamai Technologies" /></a>';
dlogHeadInCont=a("<div />").addClass("design-hc-head-inside-cont");dlogInh1=a("<h1 />");dlogSpan=a("<span />").addClass("design-hc-info");dlogSpanInfo=a("<span />").addClass("icon-info-sign").appendTo(dlogSpan);dlogSpanSep=a("<span />").addClass("design-hc-span-sep");dlogUrlClick=a("<a />").addClass("design-hc-url-click").attr("href",d.url[0].href).attr("target","_blank").appendTo(e);dlogUrlClickBtnDiv=a("<div />").addClass("design-hc-url-click-div").addClass("btn-blue-grad").html("View Website").appendTo(dlogUrlClick);
b.append(m);for(var m=d.use.split(","),s,b=0;b<m.length;b++)s=a("<span />").addClass("design-info-text"),s.html(m[b]),dlogSpan.append(s);dlogInh1.html(d.title).appendTo(dlogHeadInCont);dlogHeadInCont.append("<br />").append(dlogSpan);dlogHeadInCont.appendTo(e);for(b=e=0;b<c.length;b++)m=a("<div />").addClass("design-hc-cus-tab-menu").attr("data-cus-target",c[b].toLowerCase()).appendTo(l),m=a("<div />").addClass("design-hc-cus-tab-inside").appendTo(m),a("<div />").addClass("design-hc-cus-tab-txt").appendTo(m).html(c[b]),
e+=159;m=a("<div />").addClass("design-hc-cus-tab-menu").appendTo(l).css({width:980-e-2,"border-right":"none"});m=a("<div />").addClass("design-hc-cus-tab-inside").appendTo(m);a("<div />").addClass("design-hc-cus-tab-txt").appendTo(m).html("&nbsp;");for(var o,r,t,q,b=0;b<c.length;b++)c[b]=="overview"?(e=a("<div />").addClass("design-hc-tb-cont-wrap").attr("id",c[b].toLowerCase()).appendTo(p),e=a("<div />").addClass("design-hc-tb-cont-in").appendTo(e).css("height",p.height()-80),o=a("<div />").addClass("design-hc-tb-left").addClass("slider-wrapper").addClass("theme-default").appendTo(e).css("height",
e.height()-40),e=a("<div />").addClass("design-hc-tb-right").appendTo(e).css("height",e.height()),r=a("<div />").addClass("design-hc-tb-slide").addClass("nivoSlider").attr("id","slider").appendTo(o).css("height",o.height()-24),t=a("<div />").addClass("design-hc-tb-slide-collection").appendTo(r).css("height",o.height()-24),typeof d.image=="object"?a.each(d.image,function(a,b){t.createImage({height:r.height(),src:"img/proj/"+b.value,tDiv:"design-hc-tb-slide-individual",create:!0,tIndHeight:o.height()-
24})}):t.createImage({height:r.height(),src:"img/proj/"+d.image,tDiv:"design-hc-tb-slide-individual",create:!0,tIndHeight:o.height()-24}),e=a("<div />").addClass("design-hc-overview").html("<h3>"+d.descp+"</h3>").appendTo(e),a("<p />").html(d.descpLong).appendTo(e),o.append(a("<div/>").addClass("design-hc-tb-slide-btns").attr("id","sliderBtns"))):c[b]=="details"&&(e=a("<div />").addClass("design-hc-tb-cont-wrap").attr("id",c[b].toLowerCase()).css("display","none").appendTo(p),e=a("<div />").addClass("design-hc-tb-cont-details").appendTo(e).css("height",
p.height()-80),o=a("<div />").addClass("design-hc-tb-left").appendTo(e),e=a("<div />").addClass("design-hc-tb-right").appendTo(e),e="<h2>Description</h2><h3>"+d.descp+"</h3><p>"+d.descpLong+"</p>",d.response&&(q='<h2 class="second">Responsibility</h2>',q+="<ul>",a.each(d.response,function(a,b){q+="<li>"+b.value+"</li>"}),q+="</ul>",e+=q),o.html(e));j.css("height",h-20).appendTo(k);h=a("#slider .design-hc-tb-slide-individual").length;a("#slider .design-hc-tb-slide-collection").css("width",h*600);k.css({left:(f-
k.outerWidth())/2,top:a(window).scrollTop()});a(".design-hc-menu .design-hc-cus-tab-menu").filter(":first").addClass("design-hc-cus-tab-selected");l.on("click","div[data-cus-target]",function(){var b=a(this);a(".design-hc-menu .design-hc-cus-tab-selected").toggleClass("design-hc-cus-tab-selected");b.toggleClass("design-hc-cus-tab-selected");a(".design-hc-content > div").fadeOut(100);a("#"+b.attr("data-cus-target")).fadeIn(300)});a(document).on("keydown",function(b){switch(b.which){case 27:n.remove(),
k.remove(),a(document.body).removeClass("zoomed")}});l=a(".design-hc-tb-cont-in .design-hc-tb-left");f=l.find(".design-hc-tb-slide-individual").length;h=a("#sliderBtns");l=l.find(".design-hc-tb-slide-individual");for(j=d=0;j<f;j++)c=a("<a />").attr("rel",j+1).attr("data-postion",d),h.append(c),l[j].setAttribute("data-ref",j+1),d-=600;h.find("a:first").addClass("show");h.on("mouseenter","a",function(b){b.preventDefault();b=a(this).attr("data-postion");a(this).closest(".design-hc-tb-slide-btns").find(".show").toggleClass("show").end().end().addClass("show");
a("#slider .design-hc-tb-slide-collection").animate({left:b})});g.on("click","a",function(a){a.preventDefault();v()});n.on("click",function(a){a.preventDefault();v()});var v=function(){n.fadeOut(300,function(){a(this).remove()});k.fadeOut(100,function(){a(this).remove()});a(document).off("keydown");a(document.body).removeClass("zoomed")}})}})})(jQuery);
EXPERIENCE={startYear:2001,timeDiv:".timeBar",divLeft:'<div class="year" data-year="',divRight:'"><div class="dot"></div></div>',endDate:function(){this.curYear=(new Date).getFullYear()+1},genYear:function(){var a=$(this.timeDiv).closest("div.row-fluid");console.log(a);a.find(".mainblock").show();a.find(".shadow").show();this.endDate();this.yearSlot=this.curYear-this.startYear;this.computeSlotWidth();this.genDiv();this.genLife()},computeSlotWidth:function(){this.refWidth=$(this.timeDiv).width();this.timeWidth=
this.refWidth/this.yearSlot-5},genDiv:function(){var a;this.current=this.startYear;this.currentWidth=10;for(var g=0;g<=this.yearSlot;g++)a==void 0?a=this.divLeft+this.current+'" style="left:'+this.currentWidth+"px"+this.divRight:a+=this.divLeft+this.current+'" style="left:'+this.currentWidth+"px"+this.divRight,this.current++,this.currentWidth+=this.timeWidth;$(this.timeDiv).html(a)},genLife:function(){var a,g=this,f,h,b,d,c,n;$.getJSON("design_load.php?q=exp",function(k){$.each(k.career,function(j,
e){f=parseInt(e.year,10);h=parseInt($(g.timeDiv).find('div[data-year="'+f.toString()+'"]').css("left"),10);b=parseInt($(g.timeDiv).find('div[data-year="'+f.toString()+'"]').next("div").css("left"),10);d=b-h;n=e.name.substring(0,4)+e.year+"."+e.month;c=h+d/10*parseInt(e.month,10);a=$("<div />").addClass("life").data("object",e).data("name",n).css("left",c+"px");a.appendTo(g.timeDiv)})});this.activateLife()},activateLife:function(){$(this.timeDiv).on("mouseenter",".life",function(a){a.preventDefault();
$(this).careerTip()}).on("mouseleave",".life",function(a){a.preventDefault();$(this).careerTip({show:!1})})}};
JQTWEET={user:"saswin4u",numTweets:1,appendTo:"#jstwitter",loadTweets:function(){$.ajax({url:"http://api.twitter.com/1/statuses/user_timeline.json/",type:"GET",dataType:"jsonp",data:{screen_name:JQTWEET.user,include_rts:!0,count:JQTWEET.numTweets,include_entities:!0},success:function(a){for(var g=0;g<a.length;g++)$(JQTWEET.appendTo).append('<div class="tweet"><span class="twitterIcon"></span>TWEET_TEXT<div class="time">AGO</div>'.replace("TWEET_TEXT",JQTWEET.ify.clean(a[g].text)).replace(/USER/g,
a[g].user.screen_name).replace("AGO",JQTWEET.timeAgo(a[g].created_at)).replace(/ID/g,a[g].id_str))},statusCode:{400:function(){alert("Hello")}}})},timeAgo:function(a){var g=new Date,f=new Date(a);$.browser.msie&&(f=Date.parse(a.replace(/( \+)/," UTC$1")));a=g-f;return isNaN(a)||a<0?"":a<2E3?"right now":a<6E4?Math.floor(a/1E3)+" seconds ago":a<12E4?"about 1 minute ago":a<36E5?Math.floor(a/6E4)+" minutes ago":a<72E5?"about 1 hour ago":a<864E5?Math.floor(a/36E5)+" hours ago":a>864E5&&a<1728E5?"yesterday":
a<31536E6?Math.floor(a/864E5)+" days ago":"over a year ago"},ify:{link:function(a){return a.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g,function(a,f,h,b,d){return'<a class="twtr-hyperlink" target="_blank" href="'+(h.match(/w/)?"http://":"")+f+'">'+(f.length>25?f.substr(0,24)+"...":f)+"</a>"+d})},at:function(a){return a.replace(/\B[@\uff20]([a-zA-Z0-9_]{1,20})/g,function(a,f){return'<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name='+f+
'">@'+f+"</a>"})},list:function(a){return a.replace(/\B[@\uff20]([a-zA-Z0-9_]{1,20}\/\w+)/g,function(a,f){return'<a target="_blank" class="twtr-atreply" href="http://twitter.com/'+f+'">@'+f+"</a>"})},hash:function(a){return a.replace(/(^|\s+)#(\w+)/gi,function(a,f,h){return f+'<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23'+h+'">#'+h+"</a>"})},clean:function(a){return this.hash(this.at(this.list(this.link(a))))}}};
