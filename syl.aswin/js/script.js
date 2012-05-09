/* Author:

*/

(function(){
	
	
	var comp = {
		onLoad : function(){
			var self = this;
			this.tabInit();
			
			this.designsLoad();
			
			this.contactFormValidate();
			
			this.langLoad('mySkillsTab', 'mySkillsTabContent');
			
			this.topUlScrollAct();
			
			//this.appendShare();

		},
		resizeSkillBook:function(){
			var sTab = $('#mySkillsTab'),
				sTabCont = $('#mySkillsTabContent'),
				sTabb = $('.tabbable');
			
			//alert('Fired : ' + sTab.height());
					
			sTabCont.height(sTab.height() - 10);
			sTabCont.width(sTabb.width()-sTab.width()-10);
		},
		appendShare : function(){
			//alert('Hey');
			// $('<script />').html('(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1&appId=136190599838893"; fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));(function() {var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);})();')
			// 									.appendTo(document.body);
			// 			$('.like-btns').html('<div class="fb-like" data-send="false" data-layout="button_count" data-width="50" data-show-faces="true" data-font="segoe ui"></div><script src="//platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/Share" data-url="http://www.iamsyl.com" data-counter="right"></script><div class="g-plusone" data-size="medium" data-href="http://www.iamsyl.com"></div>')
			// 						   .find('div')
			// 						   .css('float', 'left')
			// 						   .end()
			// 						   .css('margin-top', '4px')
			// 						   .find('div:nth-child(1)')
			// 						   .css('width','77px');
			var addthis_config = {
		         ui_use_css : false
		     }
			addthis.init()
			
		},
		topUlScrollAct:function(){
			var self = this;
			$('#navbar ul').on('click', 'a', function(e){
				e.preventDefault();
				var $this = $(this);
				$this.closest('ul').find('.active').toggleClass('active');
				$this.closest('li').toggleClass('active');
				self.topUlScroll($this.attr('href'));
			});
		},
		topUlScroll:function(id){
			$("html:not(:animated),body:not(:animated)").animate({
	 			scrollTop: $(id).offset().top
	 			}, 500);
		},
		contactFormValidate : function(){
			var self = this;
			$('#contactform').validate({
				rules:{
					email :{
						email:true
					}
				},
				messages:{
					name : "Oops! You forgot your name.",
					email: {
						email : "I need a valid email buddy!!"
					},
					comments : 'Few lines please... Even 2 words should do good'
				},
				errorElement: "span",
				submitHandler: function(){
					self.sendMail();
				}
			});
		},
		sendMail: function(){
			$.ajax({
				type : "POST",
				url : "email.php",
				data : $('#contactform').serialize(),
				dataType : 'json',
				success : function(msg){
						if(msg.status == 'success'){
							var box = $('#contactformInfo');
							$('#contactform').slideUp(400, function(){
								box.find('div.alert')
									.addClass('alert-success')
									.append($('<span />').css({'margin-left':'10px', 'display':'inline-block'}).html('You Email has been sent successfully.'));
								box.find('i').addClass('icon-ok-sign');
								box.removeClass('hidden')
								   .slideDown(400);
							});
						}	else if(msg.status == 'error'){
								box.find('div.alert')
									.addClass('alert-error')
									.append($('<span />').css({'margin-left':'10px', 'display':'inline-block'}).html(msg.message));
								box.find('i').addClass('icon-remove-circle');
								box.removeClass('hidden')
								   .slideDown(300);
							}
				}
			});
			//alert('Hello');
		},
		designAddBorder : function(){
			var cont = $('#design .white-box > .span3');
			var contLen = cont.length,
				cutOff = 4,
				start = 1,
				j,
				tempEl;
			//alert(contLen);
			
			for (i=start; i<=contLen; i++){

				if (i === 1){
					j=i;
					j++;
					tempEl = cont.find('.design-a-bd').get(i-1);
					tempEl.className = tempEl.className + " design-a-bd-left";
					//alert('I am called 1');
				}else if (j ===1){
					j++
					tempEl = cont.find('.design-a-bd').get(i-1);
					tempEl.className = tempEl.className + " design-a-bd-left";
				}else if(j===4){
					j = 1;
					
				}else{
					j++;
				}
			}
		},
		designClickHandler : function(){
			//alert('Caled U');
			$('#design .white-box').on('click', 'a.design-a', function(e){
				e.preventDefault();
				$(this).zoom();
			});
		},
		designsOverInvike : function(){
			$('.design-wrap a').on('mouseenter', function(){
				$(this).find('.overlay').stop().animate({opacity:1}, 200);
				$(this).find('.design-a-bd').addClass('hover');
			}).on('mouseleave', function(){
				$(this).find('.overlay').stop().animate({opacity:0}, 200);
				$(this).find('.design-a-bd').removeClass('hover');
			});
			// .fancybox({
			// 				showCloseButton : true,
			// 				titleShow : 'true',
			// 				titlePosition : 'outside',
			// 				'transitionIn' : 'elastic',
			// 				'transitionOut'	:	'elastic',
			// 				'speedIn'		:	300, 
			// 				'speedOut'		:	200
			// 				});
		},
		twitterLoad: function(){
			JQTWEET.loadTweets();
			
			//if(this.checkMobileUA()){EXPERIENCE.genYear();}
			
		},
		loadTimeLine:function(){
			if(!this.checkMobileUA()){EXPERIENCE.genYear();}
		},
		checkMobileUA:function(){
			//alert(navigator.userAgent + " : " + navigator.userAgent.indexOf("Mobile"));
			return navigator.userAgent.indexOf("Mobile")>=0;
		},
		langLoad : function(ul, div){
			var ulEl = $('#' + ul),
				divEl = $('#' + div),
				self = this;
			if(!ulEl.length > 0){
				ulEl = $('<ul />').attr('id', ul);
			}
			if(!divEl.length > 0){
				divEl = $('<div />').attr('id', div);
			}
			//console.log('This is start of Lang Function');
			$.getJSON('design_load.php?q=lang', function(data){
				//console.log(data);
				$.each(data.tech, function(i, data){
					//console.log(data.name);
					tabCreate.config(data.name, data.id, data.lang);
					
					ulEl.append(tabCreate.ulliCreate());
					
					
					divEl.append(tabCreate.tabPaneCreate());
					
					
					
				});
				//console.log(ulEl);
				//console.log(divEl);
				
				self.tabLangInit(ul, div);
				self.scrollInit();
				
				self.resizeSkillBook();
			});
				
		},
		designTagLoad:function(){
			var self=this,
				hLeft1 = '<div class="tag-wrap"';
				hLeft2 = '><div class="tagBod"><h3>';
				hRight = '</h3></div></div>',
				finalHtml ='',
				temp = '';
				
			this.tags = ['html', 'css', 'feo', 'jquery', 'usability']
			
			
			//Code below is the create the tags	
			for (var i=0; i<this.tags.length; i++){
				temp = hLeft1 + ' data-get-tag="'+ this.tags[i] +'"' + hLeft2 + this.tags[i] + hRight;
				//console.log(temp);
				finalHtml += temp;
			}
			
			$('.white-top .span11').html(finalHtml);
			
			//Code Below is to Position the tags dynamically
			var initial = 0, 
				carry,
				applyValue;
			
			var tabEl = $('.white-top .tag-wrap'),
				elWidth;
				
			//console.log(tabEl);
			
			for(var i =0; i<tabEl.length;i++){
				elIns = tabEl.eq(i);
				elPrevIns = tabEl.eq(i-1);
				elWidth = elIns.width();
				elPreWidth = elPrevIns && elPrevIns.width();
				//console.log(elPreWidth + 'px');
				
				if(initial == 0){
					applyValue = initial;
					initial = elPreWidth + 20;
				}else{
					applyValue = initial + elPreWidth;
					//applyValue += 52;
					initial += elPreWidth + 62;
				}
				
				//console.log(initial +' :: ' + elWidth);
				elIns.css('left',applyValue + 'px')
					 .data('count', 0);
				
			}
			
		tabEl.on('mouseenter', function(){
			$(this).toggleClass('onhover');
		}).on('mouseleave', function(){
			$(this).toggleClass('onhover');
		});
				
			
			
		},
		designTagCountLoad:function(){
			var aL = $('.white-box a.design-a'),
				tagCl = $('.white-top'),
				alLen = aL.length,
				alObj,
				alValue,
				alCompare,
				count,
				inEle;
			
			//alert('Hi');
			//console.log(aL);
			//console.log(alLen);
			
			for (var j=0; j<alLen; j++){
				alObj = aL.eq(j).data('object');
				//alValue = alObj['use'];
				//console.log(alValue);
				alCompare = alObj.use;
				for (var k =0; k<this.tags.length;k++){
					alValue = this.tags[k];
					// console.log('==Starting== : ' + alValue + "\n");
					// console.log(alCompare.indexOf(alValue));
					if(alCompare.indexOf(alValue) >= 0){
						inEle = tagCl.find('div[data-get-tag="' + alValue + '"]');
						count = inEle.data('count');
						++count;
						// console.log(count)
						inEle.data('count', count);
						// console.log(alValue + inEle.data('count'));
					}
					// console.log('==Ending== : '  + alValue + "\n");
				}
				
				//console.log(alCompare)
				//if (.indexOf(this.tags[j]) > 1){console.log(this.tag[j]);}
				//console.log(this.tags);
				//console.log(aL.eq(j));
				//console.log("Obj " + alObj.use);
			}
			for (var k =0; k<this.tags.length;k++){
				alValue = this.tags[k];
				inEle = tagCl.find('div[data-get-tag="' + alValue + '"]');
				count = inEle.data('count');
				inEle.find('h3').html(alValue + " <span>(" + count + ")</span>");
			}
		},
		designsLoad : function(){
			//alert('I am called');
			var appendContaint = $('#design .white-box');
			var self = this, $o;
			// console.log('I am also here...');
			$.getJSON('design_load.php', function(data){
				// console.log(data);
				$.each(data.type, function(i, data){
					$o = data;
					//alert($o);
					// console.log(data.name);
					this.s3 = elCreate.span3();
					//console.log(this.s3);
					
					this.designWrap = elCreate.designWrap()
					this.aLnk = elCreate.designA(data["name"], data["image"], data["position"], data['title'], data['descp'], data['use'], $o);
					
					// console.log(this.aLnk);
					
					this.designWrap.append(this.aLnk);
					
					this.s3.append(this.designWrap);
					
					appendContaint.append(this.s3);
					
					// console.log(this.s3);
				});
				// console.log('Finished');
				self.designsOverInvike();
				self.designAddBorder();
				
				if (!self.checkMobileUA()){
					self.designClickHandler();
					
					self.designTagLoad();

					self.designTagCountLoad();
				}
				
				
				self.twitterLoad();
				
				self.loadTimeLine();
			});
			
		},
		tabLangInit : function(ul, div){
			var $msTab = $('#' + ul),
				$msTabCont = $('#' + div);
			
			$msTab.find('li').filter(':first').addClass('active');
			$msTabCont.find('div.tab-pane').filter(":first").addClass('active').addClass('in');
			
			
			$msTab.tab('show');
			$msTab.find('li').filter(':first').addClass('active');
		},
		tabInit : function(){

			var $myAboutTab = $('#myAboutTab');
			$myAboutTab.tab('show');
			$myAboutTab.find('li').filter(':first').addClass('active');
		},
		scrollInit : function(){
			$(document.body).attr('data-spy', 'scroll').attr('data-target', '#navbar');
			//$('#navbar').scrollspy();
			 //data-spy="scroll" data-target="#navbar"
			
			$(".accordion").collapse({
				parent : true,
				toggle : true
			});
			
			$('#accorWork').css('height', 'auto');
			
			$('.carousel').carousel({
			  interval: 50000
			})
			
			
		}
	}
	
	var tabCreate = {
		ulliCreate : function(){
			var li = $('<li></li>'),
				a = $('<a></a>');
			
			a.attr('data-target', this.id)
			 .attr('data-toggle', 'tab')
			 .html("<i class='skills-icon'></i>" + this.name);
			
			li.append(a);
			return li;
		},
		tabPaneCreate : function(){
			var d = $('<div></div>')
				u = $('<ul></ul>');
			d.addClass('tab-pane')
			 .addClass('fade')
			 .attr('id', this.id.substring(1));
			
			//u.append(this.liCreate(u)).appendTo(d);
			u = this.liCreate(u).appendTo(d);
			//d.append(u);
			return d;
			
			//console.log(d);
		},
		liCreate : function(u){
			var liAll = $([]), l, h, span, i, p1, p2;
			var self = this;
			$.each(this.lang, function(i, li){
				//console.log(li.name);
				l = $('<li />');
				h = $('<h2 />').html(li.name).appendTo(l);
				
				if (li.exp){p1 = '<p>Total Exp: <span>' + li.exp + '</span></p>';}else{p1=$();}
				if(li.rate){p2 = '<p>Rating: <span>' + li.rate + '</span></p>';}else{p2=$();}
				
				 if (li.screen == null || li.screen == undefined){
					span = $();
				}
				else{
					// span = $('<span />').addClass('label')
					// 										.append(self.iconCreate(li.screen, li['screen-name']))
					span = self.iconCreate(li.screen, li['screen-name']);
				 }
				
				//console.log(l);
				u.append(l.append(span)
						  .append(p1)
						  .append(p2)
						  );
				
			});
			
			//console.log(u);
			
			return u;
		},
		iconCreate : function(screen, screenName){
			var s, i, iTemp, sN, txt, $resSpan;
			
			if (screen == null || screen == undefined){
				return;
			}
			else if (screen.indexOf(',') > 0){
				s = screen.split(',');
				sN = screenName.split(',')
				// console.log(s);
				$resSpan = $('<span/>');
				//$resSpan = '';
				for (var j=0; j < s.length; j++){
					i = $('<span />').addClass('label');
					//console.log(i);
					txt = document.createTextNode(sN[j]);
					//console.log(txt);
					iTemp = $('<i />').addClass('icon-white').addClass(s[j]);
					iTemp.after(txt).appendTo(i);
					$resSpan.append(i)
					//i.append(iTemp);
				}
				return $resSpan;
			}else{
				$resSpan = $('<span />').addClass('label');
				txt = document.createTextNode(screenName);
				//console.log(txt);
				i = $('<i />').addClass('icon-white').addClass(screen);
				i.after(txt).appendTo($resSpan);
				//console.log(txt);
				return $resSpan;
			}
		},
		config : function(name, id, lang){
			this.name = name,
			this.id = id,
			this.lang = lang
		}
	}
	
	var elCreate = {
		span3 : function(){
			return $('<div></div>').addClass('span3');
		},
		designWrap : function(){
			return $('<div></div>').addClass('design-wrap');
		},
		config : function(name, img, position, title, descp, use, $o){
			this.position = position;
			this.title = title;
			this.name = name;
			this.img = img;
			this.descp = descp;
			this.use = use;
			this.ojb = $o;
		},
		designA : function(name, img, position, title, descp, use, $o){
			
			this.config(name, img, position, title, descp, use, $o);
			
			var aLnk = $('<a></a>');
			aLnk.addClass('design-a')
				.attr('href', this.img)
				.attr('title', this.title)
				.attr('rel', this.position)
				.data('object', $o);
				
				//alert($o.name);
			
			aLnk = this.designAInnerDiv(aLnk);
			
			//console.log(aLnk);
			
			return aLnk; //Return the merge a Tag
		},
		designAInnerDiv : function(aLnkMerge){
			var dMain = $('<div></div>').addClass('design-a-bd')
			var d1 = $('<div></div>').addClass('design-a-bd-id');
			var d2 = $('<div></div>').addClass('design-a-bd-wf');
			
			d2 = this.overlay(d2); //Append the Overlay Layer
			d2 = this.designMainImage(d2); //Append the image
			d2 = this.designName(d2); //Append Design Name
			d2 = this.designDescp(d2); //Append Design Descp
			d2 = this.designUse(d2); //Append Design Use
			
			dMain.append(d1)
				 .append(d2);
			
			aLnkMerge.append(dMain);
			
			//console.log(aLnkMerge);
			
			return aLnkMerge; //Return to the 2 div inside the a tag
		},
		overlay : function(d2){
			var s = $('<span></span>').addClass('overlay')
									  .css('opacity', '0');
			return d2.append(s);
		},
		designMainImage : function(d2){
			var i = $('<img />');
			i.addClass(this.position)
			 .attr('width', '210')
			 .attr('height', '160')
			 .attr('title', this.title)
			 .attr('src',  'img/spacer.gif');
			
			return d2.append(i);
		},
		designName : function(d2){
			var d = $('<div></div>');
			d.addClass('design-a-bd-txt')
			 .html(this.name);
			
			return d2.append(d);
		},
		designDescp : function(d2){
			var d = $('<div></div>');
			d.addClass('design-a-bd-desc')
			 .html(this.descp);
			
			return d2.append(d);
		},
		designUse : function(d2){
			var self = this;
			var d = $('<div></div>');
			d.addClass('design-a-bd-badge');
			
			var u = this.use.split(',');
			var uList, spanHold;
			for(var i = 0; i<u.length; i++){
				// spanHold = $('<span />');
				// 				spanHold.addClass('label')
				// 						.addClass('label-inverse')
				// 						.html(u[i]);
				d.append(self.splitUseSplit(u[i]));
			}
			
			return d2.append(d);
		},
		splitUseSplit : function(useTxt){
			//var u = use.split(',');
			var spanHold;
			spanHold = $('<span />');
			spanHold.addClass('label')
					.addClass('label-inverse')
					.html(useTxt);
					
			return spanHold;
			
		}
	}
	
	comp.onLoad();
	
	$(window).resize(function(){
		//alert('Resized');
		comp.resizeSkillBook();
	});
	
})();

(function($){
	$.fn.extend({
		
	});
})(jQuery);

(function($){
	$.fn.extend({
		createImage: function(options){
			var defaults = {
				create:true
			};
			var options = $.extend({}, defaults, options);
			
			return this.each(function(){	
				var $this = $(this),
					o = options,
					imgHold = $('<img />'),
					togPag = false,
					tIndCont = $('<div />').addClass(o.tDiv);
				//alert(o.height);
				$this.append(tIndCont);
				tIndCont.append(imgHold)
						.css('height', o.tIndHeight);
				console.log(o.src);
				imgHold.attr('src', o.src)
					   .attr('height', o.height)
					   .load(function(){
							if(parseInt(this.width, 10) > parseInt(this.height, 10)){
								$(this).attr('data-type','loaded');
								$this.closest('.'+o.tDiv).css('padding-top','45px')
							}
						});
			});
		}
	});
})(jQuery);

(function($){
	$.fn.extend({
		careerTip : function(options){
			var defaults = {
				show:true
			};
			var options = $.extend(defaults, options);
			
			return this.each(function(){
				var $this = $(this),
					toolWrap = $('<div />').addClass('cusTooltip'),
					ofTop,
					ofLeft,
					obj = $this.data('object'),
					o = options,
					hook = $this.data('name'),
					htmlD = '';
				ofTop = $this.offset().top - 45;
				ofLeft = $this.offset().left - 10;
				
				htmlD += '<h1>' + obj.name + '</h1>';
				htmlD += '<h2>' + obj.dept + '<i class="tooltip-' + obj.type + '"></i></h2>';
				obj.role ? htmlD += '<h3>' + obj.role + '</h3>':'';
				
				toolWrap.html(htmlD).css({
					'left' : ofLeft + 'px',
					'top' : ofTop + 'px',
					'opacity' : 0
				});
				
				// console.log(toolWrap.css('top'));
				if(o.show){
					toolWrap
						.attr('data-hook', hook)
						.appendTo(document.body);
						
					//console.log('h : ' + toolWrap.outerHeight());
					//console.log(parseInt(toolWrap.outerHeight(), 10));
					(parseInt(toolWrap.outerHeight(), 10) > 69 )  ? toolWrap.css('top', '-=' + (Math.round(parseInt(toolWrap.height(), 10)/2) + 13)) : toolWrap.css('top', '-=' + (Math.round(parseInt(toolWrap.height(), 10)/3) + 13))
					
					// console.log(toolWrap.css('top'));
					// console.log('---------');
					
					toolWrap.animate({
						'opacity' : 1
					});
				}else{
					$('div[data-hook="'+ hook +'"]')
						.fadeOut(400, function(){
							$(this).remove();
						});
				}
				//console.log($this.data('object'));
				//console.log(ofTop);
				//console.log(ofLeft);
			});
		}
	});
})(jQuery);

(function($){
	$.fn.extend({
		zoom : function(){
			return this.each(function(){
				var $this = $(this),
					wWidth = $(window).width(),
					wHeight = $(window).height(),
					dHeight = $(document).height(),
					$o = $this.data('object'),
					menus = ['overview', 'details'];
					
					//console.log($o.title);
				//alert('Yay');
				var zoom = $('<div />').addClass('design-hc-over'),
					wrap = $('<div />').addClass('design-hc-wrap'),
					dlog = $('<div />').addClass('design-hc-dlog'),
					dClose = $('<div />').addClass('design-hc-close-btn'),
					dlogHead = $('<div />').addClass('design-hc-head').appendTo(dlog),
					dlogMenu = $('<div />').addClass('design-hc-menu').appendTo(dlog),
					dlogContent = $('<div />').addClass('design-hc-content').appendTo(dlog);
					
					dlogContent.css('height', wHeight - 140 -21);
					
				zoom.css({
					'width' : '100%',
					'height' : dHeight,
					'display' : 'none'
				});//.css('width', '100%').css('height', dHeight).css('display','none');
				zoom.appendTo(document.body).fadeIn(200);
				
				wrap.css('display','none')
					.appendTo(document.body)
					.fadeIn(500);
				dClose.html('<a class="close">&times;</a>')
					  .appendTo(dlog);
				
				$(document.body).addClass('zoomed');
				
				//Start of Head Section//
				var dlogHeadIn = $('<div />').addClass('design-hc-head-inside').appendTo(dlogHead),
					dlogHeadLogo = $('<div />').addClass('design-hc-head-logo').appendTo(dlogHeadIn),
					dlogLogoImg = '<a href="#" class="company '+ $o.position.substring($o.position.indexOf('-')+1) +'" alt="' + $o.title +'"><img src="img/spacer.gif" alt="Akamai Technologies" /></a>'
					dlogHeadInCont = $('<div />').addClass('design-hc-head-inside-cont'),
					dlogInh1 = $('<h1 />'),
					dlogSpan = $('<span />').addClass('design-hc-info'),
					dlogSpanInfo = $('<span />').addClass('icon-info-sign').appendTo(dlogSpan),
					dlogSpanSep = $('<span />').addClass('design-hc-span-sep'),
					dlogUrlClick = $('<a />').addClass('design-hc-url-click')
											 .attr('href', $o.url[0].href)
											 .attr('target', '_blank')
											 .appendTo(dlogHeadIn),
					dlogUrlClickBtnDiv = $('<div />').addClass('design-hc-url-click-div')
													 .addClass('btn-blue-grad')
													 .html('View Website')
													 .appendTo(dlogUrlClick);
					
				dlogHeadLogo.append(dlogLogoImg);
				
				var u = $o.use.split(','),
					spanHold;
				for(var i =0; i<u.length; i++){
					spanHold = $('<span />').addClass('design-info-text');
					spanHold.html(u[i]);
					dlogSpan.append(spanHold);
				}
					
				dlogInh1.html($o.title)
					  .appendTo(dlogHeadInCont);
				dlogHeadInCont.append('<br />')
							  .append(dlogSpan);
					
				dlogHeadInCont.appendTo(dlogHeadIn);
				//End of Head Section//
				
				//Start of Menu Section //
				var dlogMenuD1, dlogMenuD2, dlogMenuDIn, cumWidh = 0;
				
				for(var i = 0; i<menus.length; i++){
					//alert(menus[i]);
					dlogMenuD1 = $('<div />').addClass('design-hc-cus-tab-menu')
											 .attr('data-cus-target', menus[i].toLowerCase())
											 .appendTo(dlogMenu);
					dlogMenuD2 = $('<div />').addClass('design-hc-cus-tab-inside')
											 .appendTo(dlogMenuD1);
					dlogMenuDIn = $('<div />').addClass('design-hc-cus-tab-txt')
											  .appendTo(dlogMenuD2)
											  .html(menus[i]);
					cumWidh += 159;						
				}
				dlogMenuD1 = $('<div />').addClass('design-hc-cus-tab-menu')
										 .appendTo(dlogMenu)
										 .css({
											'width' : 980 - cumWidh - 2,
											'border-right' : 'none'
										  });
										 // .css('width', 980 - cumWidh - 2)
										 // 										 .css('border-right', 'none');
				dlogMenuD2 = $('<div />').addClass('design-hc-cus-tab-inside')
										 .appendTo(dlogMenuD1);
				dlogMenuDIn = $('<div />').addClass('design-hc-cus-tab-txt')
										  .appendTo(dlogMenuD2)
										  .html('&nbsp;');
				
				//End of Menu Section
				
				var dlogContD1, dlogContD2, dlogContLeft, dlogContRight, dlogContLeftD1, dlogContLeftD2, dlogContLeftD3, dlogContLeftD1Img, dlogContRightD1, dlogContRightD2, dlogContRightD3, toggleHeight = false;
				for(var i = 0; i<menus.length; i++){
					if (menus[i] == 'overview'){
						dlogContD1 = $('<div />').addClass('design-hc-tb-cont-wrap')
												 .attr('id', menus[i].toLowerCase())
												 .appendTo(dlogContent);
						dlogContD2 = $('<div />').addClass('design-hc-tb-cont-in')
												 .appendTo(dlogContD1)
												 .css('height', dlogContent.height() - 80);
						dlogContLeft = $('<div />').addClass('design-hc-tb-left')
												   .addClass('slider-wrapper')
												   .addClass('theme-default')
												   .appendTo(dlogContD2)
												   .css('height', dlogContD2.height()-40);
						dlogContRight = $('<div />').addClass('design-hc-tb-right')
												   .appendTo(dlogContD2)
												   .css('height', dlogContD2.height());
						dlogContLeftD1 = $('<div />').addClass('design-hc-tb-slide')
													 .addClass('nivoSlider')
													 .attr('id', 'slider')
													 .appendTo(dlogContLeft)
													 .css('height', dlogContLeft.height() - 24);
						dlogContLeftD2 = $('<div />').addClass('design-hc-tb-slide-collection')
													 .appendTo(dlogContLeftD1)
													 .css('height', dlogContLeft.height() - 24);
	
						if(typeof $o.image == 'object'){
							//console.log($o.image.length);
							//console.log($o.image);
							
							$.each($o.image, function(i, data){
								dlogContLeftD2.createImage({
									'height': dlogContLeftD1.height(),
									'src': 'img/proj/' + data.value,
									'tDiv': 'design-hc-tb-slide-individual',
									'create':true,
									'tIndHeight': dlogContLeft.height() - 24
								});
							});

						}else{
							dlogContLeftD2.createImage({
								'height': dlogContLeftD1.height(),
								'src': 'img/proj/' + $o.image,
								'tDiv': 'design-hc-tb-slide-individual',
								'create':true,
								'tIndHeight': dlogContLeft.height() - 24
							});
						}
						

						
						dlogContRightD2 = $('<div />').addClass('design-hc-overview')
													  .html('<h3>' + $o.descp + '</h3>')
													  .appendTo(dlogContRight);
						dlogContRightD3 = $('<p />').html($o.descpLong)
													  .appendTo(dlogContRightD2);
						// for(var j =1; j<=2; j++){
						// 							dlogContLeftD3 = $('<div />').addClass('design-hc-tb-slide-individual')
						// 														 .appendTo(dlogContLeftD2);
						// 							dlogContLeftD1Img = $('<img />')//.css('height', dlogContLeftD1.height())
						// 															.attr('height', dlogContLeftD1.height())
						// 															.attr('src', 'img/proj/' + $o.image)
						// 															.appendTo(dlogContLeftD3);
						// 						}
						dlogContLeft.append($('<div/>').addClass('design-hc-tb-slide-btns')
													  .attr('id', 'sliderBtns'));
					}else if(menus[i] == 'details'){
						dlogContD1 = $('<div />').addClass('design-hc-tb-cont-wrap')
												 .attr('id', menus[i].toLowerCase())
												 .css('display','none')
												 .appendTo(dlogContent);
						dlogContD2 = $('<div />').addClass('design-hc-tb-cont-details')
												 .appendTo(dlogContD1)
												 .css('height', dlogContent.height()-80);
						dlogContLeft = $('<div />').addClass('design-hc-tb-left')
												   .appendTo(dlogContD2);
						dlogContRight = $('<div />').addClass('design-hc-tb-right')
									    			.appendTo(dlogContD2);
						dlogContLeftD1Img = '<h2>Description</h2><h3>' + 	$o.descp + '</h3><p>' + $o.descpLong + '</p>';
						if($o['response']){
							//alert('')
							dlogContRightD1 = '<h2 class="second">Responsibility</h2>';
							dlogContRightD1 += '<ul>';
							$.each($o['response'], function(i, res){
								dlogContRightD1 += '<li>' + res.value + '</li>';
							});
							dlogContRightD1 += '</ul>';
							dlogContLeftD1Img += dlogContRightD1;
						}
						dlogContLeft.html(dlogContLeftD1Img);
					}
				}
				
				
				
				dlog.css('height', wHeight - 20).appendTo(wrap);
				//elCreate.splitUseSplit
				
				var len = $('#slider .design-hc-tb-slide-individual').length;
				$('#slider .design-hc-tb-slide-collection').css('width', len * 600);
				
				
				wrap.css({
					'left' : (wWidth - wrap.outerWidth())/2,
					'top' : $(window).scrollTop()
				});
				// .css('left', (wWidth - wrap.outerWidth())/2)
				// 					.css('top', $(window).scrollTop());
						
				
				$('.design-hc-menu .design-hc-cus-tab-menu').filter(':first').addClass('design-hc-cus-tab-selected');
				
				dlogMenu.on('click', 'div[data-cus-target]', function(){
					var $this = $(this);
					$('.design-hc-menu .design-hc-cus-tab-selected').toggleClass('design-hc-cus-tab-selected');
					$this.toggleClass('design-hc-cus-tab-selected');
					$('.design-hc-content > div').fadeOut(100);
					$('#' + $this.attr('data-cus-target')).fadeIn(300);
				});
				
				// $('#slider').nivoSlider({
				// 					effect : 'fade',
				// 					directionNav : false
				// 				});
				
				$(document).on('keydown', function(e){
					switch(e.which){
						case 27:
							//alert('I am fired');
							zoom.remove();
							wrap.remove();
							$(document.body).removeClass('zoomed');
							break;
					}
				});
				
				var dum = $('.design-hc-tb-cont-in .design-hc-tb-left'),
					count = dum.find('.design-hc-tb-slide-individual').length,
					container = $('#sliderBtns'),
					containerRef = dum.find('.design-hc-tb-slide-individual'),
					startPos = 0,
					insertA;
					//console.log(containerRef)
				for (var j=0; j<count; j++){
					insertA = $('<a />').attr('rel', j + 1)
										.attr('data-postion', startPos);
					container.append(insertA);
					//container.html('Hello')
					//console.log(insertA);
					containerRef[j].setAttribute('data-ref',j + 1);
					startPos = startPos - 600;
				}
				container.find('a:first').addClass('show');
				container.on('mouseenter', 'a', function(e){
					e.preventDefault();
					var pos = $(this).attr('data-postion');
					$(this).closest('.design-hc-tb-slide-btns')
						   .find('.show')
						   .toggleClass('show')
						   .end()
						   .end()
						   .addClass('show')
					$('#slider .design-hc-tb-slide-collection').animate({
						left : pos
					});
				});
				
				dClose.on('click', 'a', function(e){
					e.preventDefault();
					executeClose()
				});
				zoom.on('click', function(e){
					e.preventDefault();
					executeClose()
				});
				
				var executeClose = function(){
					//e.preventDefault();
					zoom.fadeOut(300, function(){
						$(this).remove();
					});
					wrap.fadeOut(100, function(){
						$(this).remove()
					});
					$(document).off('keydown');
					$(document.body).removeClass('zoomed');
				};
				
				
			});
		}
	});
})(jQuery);

EXPERIENCE = {
	startYear : 2001,
	timeDiv : '.timeBar',
	divLeft:'<div class="year" data-year="',
	divRight:'"><div class="dot"></div></div>',
	endDate : function(){
		var d = new Date(),
			y = d.getFullYear();
			
		this.curYear = y + 1;
	},
	genYear: function(){
		
		var ref = $(this.timeDiv).closest('div.row-fluid');
		console.log(ref);
		ref.find('.mainblock').show();
		ref.find('.shadow').show();
		
		
		this.endDate();
		this.yearSlot = this.curYear - this.startYear;
		this.computeSlotWidth();
		this.genDiv();
		
		this.genLife();
		//console.log(this.yearSlot);
	},
	computeSlotWidth: function(){
		this.refWidth = $(this.timeDiv).width();
		this.timeWidth = (this.refWidth/this.yearSlot) - 5;
		
		//console.log(this.timeWidth);
	},
	genDiv: function(){
		var newCum;
		this.current = this.startYear;
		this.currentWidth = 10;
		for(var i=0; i<=this.yearSlot; i++){
			(newCum == undefined) ? newCum = this.divLeft + this.current + '" style="left:' + this.currentWidth + 'px' + this.divRight : newCum += this.divLeft + this.current + '" style="left:' + this.currentWidth + 'px' + this.divRight;
			
		this.current++;
		this.currentWidth = this.currentWidth + this.timeWidth
		}
		$(this.timeDiv).html(newCum);
		//console.log(newCum);
	},
	genLife :function(){
		var dLife,
			self = this,
			slotYear,
			slotLeft,
			slotNextLeft,
			slotDiff,
			slotSpot,
			slotName;
		
		$.getJSON('design_load.php?q=exp', function(data){
			$.each(data.career, function(i,data){
				//console.log(data.name);
				slotYear = parseInt(data.year, 10);
				//console.log(slotYear);
				slotLeft = parseInt($(self.timeDiv).find('div[data-year="'+ slotYear.toString() +'"]').css('left'), 10);
				slotNextLeft = parseInt($(self.timeDiv).find('div[data-year="'+ slotYear.toString() +'"]').next('div').css('left'), 10);
				slotDiff = slotNextLeft - slotLeft;
				//console.log(slotLeft);
				//console.log(slotDiff);
				slotName = data.name.substring(0,4) + data.year + '.' + data.month;
				
				slotSpot = slotLeft + ((slotDiff/10) * parseInt(data.month, 10));
				
				dLife = $('<div />').addClass('life')
									.data('object', data)
									.data('name', slotName)
									.css('left', slotSpot + 'px');
				dLife.appendTo(self.timeDiv);
			});
		});
		
		this.activateLife();
		//dLife = $('<div />').addClass('life');
		//dLife.appendTo(this.timeDiv);
	},
	activateLife : function(){
		$(this.timeDiv).on('mouseenter', '.life', function(e){
			e.preventDefault();
			$(this).careerTip();
		}).on('mouseleave', '.life', function(e){
					e.preventDefault();
					$(this).careerTip({show:false});
				});	
	}
}

JQTWEET = {
	
	// Set twitter username, number of tweets & id/class to append tweets
	user: 'saswin4u',
	numTweets: 1,
	appendTo: '#jstwitter',

	// core function of jqtweet
	loadTweets: function() {
		$.ajax({
			url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
			type: 'GET',
			dataType: 'jsonp',
			data: {
				screen_name: JQTWEET.user,
				include_rts: true,
				count: JQTWEET.numTweets,
				include_entities: true
			},
			success: function(data, textStatus, xhr) {

			 var html = '<div class="tweet"><span class="twitterIcon"></span>TWEET_TEXT<div class="time">AGO</div>';

				 // append tweets into page
				 for (var i = 0; i < data.length; i++) {
					$(JQTWEET.appendTo).append(
						html.replace('TWEET_TEXT', JQTWEET.ify.clean(data[i].text))
							.replace(/USER/g, data[i].user.screen_name)
							.replace('AGO', JQTWEET.timeAgo(data[i].created_at))
							.replace(/ID/g, data[i].id_str)
					);

				 }
			},
			statusCode:({
				400 : function(){
					alert('Hello')
				}
			})	

		});
		
	}, 
	
		
	/**
      * relative time calculator FROM TWITTER
      * @param {string} twitter date string returned from Twitter API
      * @return {string} relative time like "2 minutes ago"
      */
    timeAgo: function(dateString) {
		var rightNow = new Date();
		var then = new Date(dateString);
		
		if ($.browser.msie) {
			// IE can't parse these crazy Ruby dates
			then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
		}

		var diff = rightNow - then;

		var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24,
		week = day * 7;

		if (isNaN(diff) || diff < 0) {
			return ""; // return blank string if unknown
		}

		if (diff < second * 2) {
			// within 2 seconds
			return "right now";
		}

		if (diff < minute) {
			return Math.floor(diff / second) + " seconds ago";
		}

		if (diff < minute * 2) {
			return "about 1 minute ago";
		}

		if (diff < hour) {
			return Math.floor(diff / minute) + " minutes ago";
		}

		if (diff < hour * 2) {
			return "about 1 hour ago";
		}

		if (diff < day) {
			return  Math.floor(diff / hour) + " hours ago";
		}

		if (diff > day && diff < day * 2) {
			return "yesterday";
		}

		if (diff < day * 365) {
			return Math.floor(diff / day) + " days ago";
		}

		else {
			return "over a year ago";
		}
	}, // timeAgo()
    
	
    /**
      * The Twitalinkahashifyer!
      * http://www.dustindiaz.com/basement/ify.html
      * Eg:
      * ify.clean('your tweet text');
      */
    ify:  {
      link: function(tweet) {
        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
          var http = m2.match(/w/) ? 'http://' : '';
          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
        });
      },

      at: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
        });
      },

      list: function(tweet) {
        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
        });
      },

      hash: function(tweet) {
        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
        });
      },

      clean: function(tweet) {
        return this.hash(this.at(this.list(this.link(tweet))));
      }
    } // ify

	
};





