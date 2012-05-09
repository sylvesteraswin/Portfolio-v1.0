<?php
	//header('Cache-Control: no-cache, must-revalidate');
	//header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	header('Content-type: application/json');
	
	$value = $_GET['q'];
	
	switch($value){
		case "lang" :
		$item = '{"tech":[{"name":"Mark Up","id":"#mp","lang":[{"name":"XHTML","screen":"icon-move","screen-name":"Desktop","exp":"5+ Years","rate":"9/10"},{"name" : "XHTML","screen" : "icon-signal","screen-name":"Mobile","exp" : "<2 Years","rate" : "9/10"},{"name" : "HTML5","screen" : "icon-signal","screen-name":"Mobile","exp" : "<1.5 Years","rate" : "6/10"},{"name" : "CSS 2.0","screen" : "icon-move","screen-name":"Desktop","exp" : "5+ Years","rate" : "9/10"},{"name" : "CSS 2.0","screen" : "icon-signal","screen-name":"Mobile","exp" : "2+ Years","rate" : "9/10"},{"name" : "CSS 3.0","screen" : "icon-move, icon-signal","screen-name":"Desktop,Mobile","exp" : "2+ Years","rate" : "7/10"}]},{"name":"Client-Side","id":"#cs","lang":[{"name":"JavaScript","screen":"icon-move","screen-name":"Desktop","exp":"3+ Years","rate":"8/10"},{"name" : "JavaScript","screen" : "icon-signal","screen-name":"Mobile","exp" : "<2 Years","rate" : "7/10"},{"name" : "jQuery","screen" : "icon-move","screen-name":"Desktop","exp" : "3+ Years","rate" : "8/10"},{"name" : "jQuery Mobile","screen" : "icon-signal","screen-name":"Mobile","exp" : "1+ Years","rate" : "8/10"},{"name" : "OO JavaScript","screen" : "icon-move","screen-name":"Desktop","exp" : "<1 Years","rate" : "6/10"}]},{"name":"Design Tools","id":"#dt","lang":[{"name":"Photoshop","screen":"icon-th-large","screen-name":"Web Design","exp":"5+ Years","rate":"8.5/10"},{"name" : "Photoshop","screen" : "icon-camera","screen-name":"Photo Editing","exp" : "5+ Years","rate" : "8/10"},{"name" : "PhotoShop","screen" : "icon-leaf","screen-name":"Logo Design","exp" : "2+ Years","rate" : "7/10"},{"name" : "Illustrator","exp" : "1+ Years","rate" : "5/10"}]},{"name":"Usability","id":"#us","lang":[{"name":"User Analysis","screen" : "icon-move, icon-signal","screen-name":"Desktop,Mobile","exp":"2 Years"},{"name" : "Accessibility","screen" : "icon-move, icon-signal","screen-name":"Desktop,Mobile","exp" : "2 Years"},{"name" : "Color Blindness","screen" : "icon-move, icon-signal","screen-name":"Desktop,Mobile","exp" : "2 Years"},{"name" : "Prototyping","screen" : "icon-move, icon-signal","screen-name":"Desktop,Mobile","exp" : "2+ Years"},{"name" : "Ethics","exp" : "2 Years"}]},{"name":"Server Side","id":"#ss","lang":[{"name":"PHP","exp":"2+ Years","rate":"5/10"},{"name" : "mySQL","exp" : "2+ Years","rate" : "5/10"}]},{"name":"IDE","id":"#ide","lang":[{"name":"Dreamweaver","exp":"3+ Years","rate":"7/10"},{"name" : "Coda","exp" : "<2 Years","rate" : "7/10"},{"name" : "Komodo Edit","exp" : "2+ Years","rate" : "8/10"},{"name" : "NotePad++","exp" : "4+ Years","rate" : "8/10"}]},{"name":"SVN","id":"#sv","lang":[{"name":"GIT","exp":"2+ Years","rate":"8/10"},{"name" : "GitHub","exp" : "1+ Years","rate" : "6/10"}]},{"name":"FEO","id":"#fe","lang":[{"name":"Front End Optimization","screen":"icon-move","screen-name":"Desktop","exp":"1+ Years","rate":"5/10"},{"name" : "Front End Optimization","screen" : "icon-signal","screen-name":"Mobile","exp" : "1+ Years","rate" : "6/10"}]}]}';
		break;
		case "exp" :
			$item = '{"career":[{"name" : "Stanes A.I. School","dept" : "10th","type" : "school","year" : "2001","month" : "4"},{"name" : "Stanes A.I. School","dept" : "12th","type" : "school","year" : "2003","month" : "4"},{"name" : "Karunya University","dept" : "B.E (E.E.E)","type" : "collage - start","year" : "2003","month" : "6"},{"name" : "Karunya University","dept" : "B.E (E.E.E)","type" : "collage - end","year" : "2007","month" : "3"},{"name" : "IDC CCR","dept" : "Marketing","type" : "company","year" : "2007","role" : "Web Designer & Graphic Designer","month" : "6"},{"name" : "Tesco HSC","dept" : "DotCom","type" : "company","year" : "2009","role" : "Web Designer","month" : "6"},{"name" : "Akamai Technologies","dept" : "Mobile PS","type" : "company","year" : "2010","role" : "Mobile Consultant","month" : "7"},{"name" : "Yahoo India","dept" : "YCRM","type" : "company","year" : "2012","role" : "Senior Software Engineer","month" : "3"}]}';
			break;
		default:
		$item = '{"type":[{"name":"m.aldoshoes.com","title":"Aldoshoes","descp":"Mobile Content Adaptation for US, UK, CA (eng & fre) site","image":[{"value":"pro_3_big.jpg"},{"value":"pro_3_big.jpg"},{"value":"pro_3_big.jpg"}],"position":"design-aldo","form":"mobile","company":"Akamai","descpLong":"Integrate the website in to the Akamai Content Adaptation Engine. Write Akamai specific configurations for the system to identify the request and serve the users a mobile specific pages. Create UI templates and user click paths which will make the users experience easier and faster. Make sure the website is accessible in all form factors and different browsers so the users view a uniqued data output with compromise on the UI depending on the compatibility of the device the users are accessing the website.","url":[{"name":"m.aldoshoes.com/us","href":"http://m.aldoshoes.com/us"},{"name":"m.aldoshoes.com/uk","href":"http://m.aldoshoes.com/uk"},{"name":"m.aldoshoes.com/ca-eng","href":"http://m.aldoshoes.com/ca-eng"},{"name":"m.aldoshoes.com/ca-fre","href":"http://m.aldoshoes.com/ca-fre"}],"use":"html,css,jquery,feo,usability","response":[{"value":"Integrate customer desktop site to Akamai content adaptation engine. (Akamai Config)"},{"value":"Develop the UI from mockups. (XHTML, CSS2, CSS3)"},{"value":"Define User Experience for the mobile user. (JavaScript, jQuery, XHTML)"},{"value":"Define functions and features depending on the capabilities of mobile devices. (jQuery, HTML)"},{"value":"Perform Usability Tests on the website and improve the overall usability. (Users)"},{"value":"Analyze last mile acceleration of the mobile pages and improve download time. (YSlow, FireBug & HTTP Archieve)"},{"value":"Perform Regression testing on the site. (Selenium IDE)"}]},{"name":"m.rockler.com","title":"Rockler","descp":"Mobile Content Adaptation","image":"pro_1_big.jpg","position":"design-rockler","form":"mobile","company":"Akamai","descpLong":"Implement the mobile content adaptation platform to create a mobile site on the fly.","url":[{"name":"m.rockler.com/","href":"http://m.rockler.com/"}],"use":"html,css,jquery,usability","response":[{"value":"Integrate customer desktop site to Akamai content adaptation engine. (Akamai Config)"},{"value":"Develop the UI from mockups. (XHTML, CSS2, CSS3)"},{"value":"Define User Experience for the mobile user. (JavaScript, jQuery, XHTML)"},{"value":"Define functions and features depending on the capabilities of mobile devices. (jQuery, HTML)"},{"value":"Perform Usability Tests on the website and improve the overall usability. (Users)"},{"value":"Perform Regression testing on the site. (Selenium IDE)"}]},{"name":"m.officedepot.com","title":"Officedepot","descp":"Mobile Content Adaptation","image":"pro_2_big.jpg","position":"design-officedepot","form":"mobile","company":"Akamai","descpLong":"Implement the mobile content adaptation platform to create a mobile site on the fly.","url":[{"name":"m.officedepot.com/","href":"http://m.officedepot.com/"}],"use":"html,css,jquery","response":[{"value":"Integrate customer desktop site to Akamai content adaptation engine. (Akamai Config)"},{"value":"Develop the UI from mockups. (XHTML, CSS2, CSS3)"},{"value":"Define User Experience for the mobile user. (JavaScript, jQuery, XHTML)"},{"value":"Define functions and features depending on the capabilities of mobile devices. (jQuery, HTML)"},{"value":"Perform Regression testing on the site. (Selenium IDE)"}]},{"name":"m.biglots.com","title":"Biglots","descp":"Mobile Content Adaptation","image":"pro_4_big.jpg","position":"design-biglots","form":"mobile","company":"Akamai","descpLong":"Implement the mobile content adaptation platform to create a mobile site on the fly.","url":[{"name":"m.biglots.com/","href":"http://m.biglots.com/"}],"use":"html,css,jquery","response":[{"value":"Develop the UI from mockups. (XHTML, CSS2, CSS3)"},{"value":"Define User Experience for the mobile user. (JavaScript, jQuery, XHTML)"},{"value":"Define functions and features depending on the capabilities of mobile devices. (jQuery, HTML)"}]},{"name":"m.biglots.com","title":"Biglots","descp":"Mobile Content Adaptation","image":"pro_4_big.jpg","position":"design-biglots","form":"mobile","company":"Akamai","descpLong":"Implement the mobile content adaptation platform to create a mobile site on the fly.","url":[{"name":"m.biglots.com/","href":"http://m.biglots.com/"}],"use":"html,css,jquery"},{"name":"m.usga.org","title":"USGA","descp":"Mobile Content Adaptation","image":"pro_5_big.jpg","position":"design-usga","form":"mobile","company":"Akamai","descpLong":"Implement the mobile content adaptation platform to create a mobile site on the fly.","url":[{"name":"m.usga.org/","href":"http://m.usga.org/"}],"use":"html,css","response":[{"value":"Integrate customer desktop site to Akamai content adaptation engine. (Akamai Config)"},{"value":"Develop the UI from mockups. (XHTML, CSS2, CSS3)"},{"value":"Perform Regression testing on the site. (Selenium IDE)"}]}]}';
		break;
	}


 echo $item;
?>