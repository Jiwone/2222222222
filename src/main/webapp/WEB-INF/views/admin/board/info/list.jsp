<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="path" value="${pageContext.request.contextPath}" />


<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="description" content="생활감성채널 10x10(텐바이텐)은 디자인소품, 아이디어상품, 독특한 인테리어 및 패션 상품 등으로 고객에게 즐거운 경험을 주는 디자인전문 쇼핑몰 입니다." />
	<meta name="keywords" content="커플, 선물, 커플선물, 감성디자인, 디자인, 아이디어상품, 디자인용품, 판촉, 스타일, 10x10, 텐바이텐, 큐브" />
	<meta name="classification" content="비즈니스와 경제, 쇼핑과 서비스(B2C, C2C), 선물, 특별상품" />
	<meta name="application-name" content="텐바이텐" />
	<meta name="msapplication-task" content="name=텐바이텐;action-uri=http://www.10x10.co.kr/;icon-uri=/icons/10x10_140616.ico" />
	<meta name="msapplication-tooltip" content="생활감성채널 텐바이텐" />
	<meta name="msapplication-navbutton-color" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="/lib/ico/mstileLogo144.png"/>
	<meta name="msapplication-TileColor" content="#c91314"/>
	<meta name="msapplication-starturl" content="/" />
	<meta name="format-detection" content="telephone=no" />
	<meta property="og:title" content="텐바이텐 10X10 : 감성채널 감성에너지" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="http://www.10x10.co.kr/lib/ico/10x10TouchIcon_150303.png" />
	<link rel="image_src" href="http://www.10x10.co.kr/lib/ico/10x10TouchIcon_150303.png" />

	<link rel="SHORTCUT ICON" href="http://fiximage.10x10.co.kr/icons/10x10_140616.ico" />
	<link rel="apple-touch-icon" href="/lib/ico/10x10TouchIcon_150303.png" />
	<link rel="search" type="application/opensearchdescription+xml" href="/lib/util/10x10_brws_search.xml" title="텐바이텐 상품검색" />
	<link rel="alternate" type="application/rss+xml" href="/shoppingtoday/shoppingchance_rss.asp" title="텐바이텐 신상품소식 구독" />
	<link rel="alternate" type="application/rss+xml" href="/just1day/just1day_rss.asp" title="텐바이텐 Just 1Day 구독" />
	<link rel="alternate" type="application/rss+xml" href="http://www.thefingers.co.kr/lecture/lecture_rss.xml" title="더핑거스 새로운 강좌 구독" />
	<title>텐바이텐 10X10 : 감성채널 감성에너지</title>
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/info/default.css" />
	<%-- <link rel="stylesheet" type="text/css" href="${path}/resource/css/preVst/common.css" /> --%>
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/preVst/common.css" />
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/preVst/content.css" />
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/preVst/mytenten.css" />
	<!--[if IE]>
		<link rel="stylesheet" type="text/css" href="/lib/css/preVst/ie.css" />
	<![endif]-->
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/info/commonV15.css" />
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/info/productV15.css" />
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/info/contentV15.css" />
	<link rel="stylesheet" type="text/css" href="${path}/resource/css/info/mytentenV15.css" />
	<!--[if lt IE 9]>
		<script src="/lib/js/respond.min.js"></script>
	<![endif]-->
	<link rel="stylesheet" href="https://js.appboycdn.com/web-sdk/1.6/appboy.min.css" />
	<link rel="manifest" href="${path}/resource/js/manifest.js" />
	<script type="text/javascript" src="${path}/resource/js/jquery-1.7.1.min.js"></script>
	<script type="text/javascript" src="${path}/resource/js/jquery-ui-1.10.3.custom.min.js"></script>
	<script type="text/javascript" src="${path}/resource/js/jquery.slides.min.js"></script>
	<script type="text/javascript" src="${path}/resource/js/swiper-2.1.min.js"></script>
	<script type="text/javascript" src="${path}/resource/js/common.js"></script>
	<script type="text/javascript" src="${path}/resource/js/tenbytencommon.js?v=1.0"></script>
	<script type="text/javascript" src="${path}/resource/js/keyMovePage.js"></script>
	<script type="text/javascript" src="${path}/resource/js/jwplayer/jwplayer.js"></script>
	<script type="text/javascript">jwplayer.key="P9MZ5f3kkEhaXthU7+yJJV3OxYlVLljqPrWnxmHPNUo=";</script>
	<script type="text/javascript" src="${path}/resource/js/buildV63.js"></script>
	<script type="text/javascript" src="${path}/resource/js/amplitude.js"></script>

<link rel="stylesheet" type="text/css" href="${path}/resource/css/info/mainV15.css" /> 
<style type="text/css">
/* HELLO! 10X10 CHINA */
.helloChina {display:none; position:absolute; top:28px; left:0; z-index:2; width:100%; height:620px; background:#bd0b0b url(http://webimage.10x10.co.kr/eventIMG/2015/67697/bg_parttern.png) no-repeat 50% 0;}
#mainWrapV15 .helloChina {display:block;}
#mainWrapV15 .helloChina img {vertical-align:top;}
#mainWrapV15 .helloChina .inner {position:relative; width:1140px; margin:0 auto; padding-top:80px; text-align:center;}
#mainWrapV15 .helloChina .deco {position:absolute; top:30px; left:162px;}
#mainWrapV15 .helloChina .btnChina {margin-top:29px;}
#mainWrapV15 .helloChina .closeMsg {margin-top:20px; padding-right:15px; text-align:right;}
#mainWrapV15 .helloChina .closeMsg input {width:16px; height:16px; border:0; background-color:#fff;}
#mainWrapV15 .helloChina .closeMsg button {position:absolute; top:15px; right:15px; width:29px; height:29px; background-color:transparent;}
@-webkit-keyframes twinkle {
	0% {opacity:0;}
	100% {opacity:1;}
}
@keyframes twinkle {
	0% {opacity:0;}
	100% {opacity:1;}
}
.twinkle {animation-name:twinkle; -webkit-animation-name:twinkle; animation-iteration-count:infinite;  -webkit-animation-iteration-count:infinite; animation-duration:3s; -webkit-animation-duration:3s; animation-fill-mode:both;-webkit-animation-fill-mode:both;}

/* superlookie week banner control(20170418~) */
.bwBnrV17 {position:relative; width:630px; height:120px; padding-left:392px; margin:30px auto 0;}
.bwBnrV17 h2 {position:absolute; left:0; top:0; width:503px; height:120px; z-index:10;}
.bwBnrV17 .mainBrWeekSlideV17 {position:relative; width:630px; height:120px; z-index:9;}
.bwBnrV17 .mainBrWeekSlideV17 .slidesjs-navigation {overflow:hidden; position:absolute; top:0; width:75px; height:100%; background-image:url(http://fiximage.10x10.co.kr/web2017/main/bwbnr_navi.png); background-repeat:no-repeat; text-indent:-999em; z-index:10;}
.bwBnrV17 .mainBrWeekSlideV17 .slidesjs-previous {left:92px; background-position:0 50%;}
.bwBnrV17 .mainBrWeekSlideV17 .slidesjs-next {right:0; background-position:100% 50%;}
/* cool festival */
.coolBnrV17 {position:relative; width:630px; height:120px; padding-left:392px; margin:30px auto 0;}
.coolBnrV17 h2 {position:absolute; left:0; top:0; width:503px; height:120px; z-index:10;}
.coolBnrV17 .coolBrSlideV17 {position:relative; width:630px; height:120px; z-index:9;}
.coolBnrV17 .coolBrSlideV17 .slidesjs-navigation {overflow:hidden; position:absolute; top:0; width:75px; height:100%; background-image:url(http://fiximage.10x10.co.kr/web2017/main/bwbnr_navi.png); background-repeat:no-repeat; text-indent:-999em; z-index:10;}
.coolBnrV17 .coolBrSlideV17 .slidesjs-previous {left:92px; background-position:0 50%;}
.coolBnrV17 .coolBrSlideV17 .slidesjs-next {right:0; background-position:100% 50%;}
</style>
<script type="text/javascript" src="${path}/resource/js/jquery.flowslider.js"></script>
<script>
$(function() {

	// cool festival
	$('.coolBrSlideV17').slidesjs({
		width:630,
		height:120,
		start:1,
		navigation:{active:true, effect:"fade"},
		pagination:{active:false},
		play:{active:false, interval:4000, effect:"fade", auto:true},
		stop:{active:false},
		effect:{
			fade:{speed:700, crossfade:true}
		}
	});

	$('.topBnrSlideV15').slidesjs({
		width:1022,
		height:665,
		start:3,
		navigation:{active:false},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:4000, effect:"fade", auto:false},
		effect:{
			fade:{speed:750, crossfade:true}
		}
	});

	//multi banner control
	$('.mainMultiSlideV15').slidesjs({
		width:650,
		height:398,
		navigation:{active:false},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:4000, effect:"fade", auto:true, pauseOnHover:true},
		effect:{
			fade:{speed:750, crossfade:true}
		}
	});
	$('.mainMultiSlideV15 .slidesjs-pagination > li a').prepend("0");
	$('.mainMultiSlideV15 .slidesjs-pagination > li:nth-child(6)').addClass('mainMultiPlay');

	$('.mdPSlideV15').slidesjs({
		width:1015,
		height:566,
		start:1,
		navigation:{active:true, effect:"fade"},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:3500, effect:"fade", auto:false, pauseOnHover:true},
		effect:{
			fade:{speed:700, crossfade:true}
		}
	});

	$('.lookSlideV15').slidesjs({
		width:1124,
		height:628,
		start:1,
		navigation:{active:false, effect:"fade"},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:3500, effect:"fade", auto:false, pauseOnHover:true},
		effect:{
			fade:{speed:700, crossfade:true}
		}
	});
	$('.lookSlideV15 .slidesjs-pagination > li a').prepend("0");

	$('.brandSlideV15').slidesjs({
		width:1116,
		height:224,
		start:3,
		navigation:{active:false, effect:"fade"},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:3500, effect:"fade", auto:false, pauseOnHover:true},
		effect:{
			fade:{speed:700, crossfade:true}
		}
	});
	$('.brandSlideV15 .slidesjs-pagination > li a').prepend("0");

	$('.clearanceSlideV17').slidesjs({
		width:1150,
		height:270,
		start:1,
		navigation:{active:false, effect:"fade"},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:3500, effect:"fade", auto:false, pauseOnHover:true},
		effect:{
			fade:{speed:700, crossfade:true}
		}
	});

	$('.cultureSlideV15').slidesjs({
		width:875,
		height:254,
		start:3,
		navigation:{active:true, effect:"fade"},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:4000, effect:"fade", auto:false},
		effect:{
			fade:{speed:750, crossfade:true}
		}
	});

	$('.imgOverV15').append('<em></em>');
	$('.imgOverV15').mouseenter(function(){
		$(this).find('em').show();
	});
	$('.imgOverV15').mouseleave(function(){
		$(this).find('em').hide();
	});

	$('.roundBnrV15 .bnrBasicV15').mouseenter(function(){
		$(this).find('.imgOverV15 em').show();
	});
	$('.roundBnrV15 .bnrBasicV15').mouseleave(function(){
		$(this).find('.imgOverV15 em').hide();
	});

	$('.topBnrV15 li').mouseenter(function(){
		$(this).find('.imgOverV15 em').show();
	});
	$('.topBnrV15 li').mouseleave(function(){
		$(this).find('.imgOverV15 em').hide();
	});

	$('.onlyBnr1V15').mouseenter(function(){
		$(this).find('.imgOverV15 em').show();
	});
	$('.onlyBnr1V15').mouseleave(function(){
		$(this).find('.imgOverV15 em').hide();
	});

	$('.issuItem').mouseenter(function(){
		$(this).find('.imgOverV15 em').show();
	});
	$('.issuItem').mouseleave(function(){
		$(this).find('.imgOverV15 em').hide();
	});

	$('.cultureListV15 li').mouseenter(function(){
		$(this).find('.imgOverV15 em').show();
	});
	$('.cultureListV15 li').mouseleave(function(){
		$(this).find('.imgOverV15 em').hide();
	});

//	$('.topBnrSlideV15 li:last-child').addClass('playPaging');
	$('.mdPSlideV15 li:nth-child(4)').addClass('bestPaging');
	$('.mdPSlideV15 li:nth-child(5)').addClass('wishPaging');

	$("#issueSlider").FlowSlider({
		marginStart:0,
		marginEnd:0,
		//position:0.0,
		startPosition:0.55
	});

	
	$("#helloChina .closeMsg button").click(function(){
		if(document.getElementById("ChnAnymore").checked){
			setChnCookie( "ChnPopcookieP", "done" , 24 ); 
		}
		$("#helloChina").slideUp();
	});
	

	
		tagScriptSend('', 'mainlanding', '', 'amplitude');
		
	
});

function PopupNewsSel(v) {
	if (v=="")
	{
		var popwin = window.open('/common/news_list.asp','popupnews', 'width=580,height=750,left=300,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
		popwin.focus();
	}
	else
	{
		if($('.mainListWrap .slidesjs-pagination .active').attr("data-slidesjs-item")=="1") {
			var popwin = window.open('/common/news_popup.asp?type=E&idx='+v,'popupnews', 'width=580,height=750,left=300,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
			popwin.focus();
		} else {
			var popwin = window.open('/common/news_popup.asp?type=A&idx='+v,'popupnews', 'width=580,height=750,left=300,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
			popwin.focus();
		}
	}
}

function setChnCookie( name, value, expirehours ) { 
	var todayDate = new Date(); 
	todayDate.setHours( todayDate.getHours() + expirehours ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
}

</script>
</head>
<body>
<div class="wrap" id="mainWrapV15">
	
<script type="text/javascript" src="${path}/resource/js/SearchAutoComplete.js"></script>
<script type="text/javascript">
var V_CURRENTYYYYMM = "2017-11-30";
</script>
<!-- modal layer control area -->
<div id="boxes">
	<div id="mask" class="pngFix"></div>
	<div id="freeForm"></div>
	
</div>
<!-- //modal layer control area -->
<!-- 2015 추가 -->

<!-- layer popup control area -->
<div id="lyrPop">
	<!-- 2015 추가 -->
	
</div>

<div id="hBoxes"></div>


<!-- ie8 버전 이하 알림 -->
<div class="version-noti" id="version-noti" style="display:none;">
	<div class="inner">
		<p>
			구버전의 Internet Explorer로 접속하셨습니다. <strong>텐바이텐은 IE 11에서 최적화</strong>되어 보여집니다.<br/><em>편리한 사이트 이용 및 보안성 향상을 위해 최신 브라우저로의 업그레이드를 권장합니다.</em>
		</p>
		<span><img src="http://fiximage.10x10.co.kr/web2017/main/img_noti.png" alt="" /></span>
		<button type="button" onclick="closeWin('ieversion', 1); return false;" class="btn-close"><img src="http://fiximage.10x10.co.kr/web2017/main/btn_close.png" alt="닫기" /></button>
	</div>
</div>

</div>
<hr />

	<div class="container">
		<div id="contentWrap">


			<div class='section exhibitV17'>
			<div class='exhibit-slideV17'>
			<ul class='exhibit-bnr-listV17'>
			
					
		<c:set var="i" value="0"/> 
			
			
   	<c:forEach var="img" items="${list2}">
		
			
		<c:set var="i" value="${i+1}"/> 
			
				<li class="exhibit-bnr0${i}">
					<!-- <a href="/event/eventmain.asp?eventid=82314&gaparam=main_topbanner_11&rc=A"> -->
					 <a href="info/${img.id}">
						<p class="tag"><span></span></p>
						
							<p class="imgOverV15">
							<img src="${img.content}" alt="우리가 원하던 그 트리" /></p>
						

						<strong><span>${img.title}</span> </strong>

						
							<p class="sub-copy"><em  class='cRd0V15'>*좋아요 자리*</em></p>
						
					</a>
				</li>
 </c:forEach>

  
</div>
</div>
<script type="text/javascript" src="${path}/resource/js/jquery.slides.min.js"></script>
<script type="text/javascript">
//개인화 페이지 start change
$(function() {
	$('.exhibit-slideV17').slidesjs({
		width:980,
		height:848,
		start:1,
		navigation:{active:true, effect:"fade"},
		pagination:{active:true, effect:"fade"},
		play:{active:false, interval:4000, effect:"fade", auto:false, pauseOnHover:true},
		effect:{
			fade:{speed:750, crossfade:true}
		}
	});
	//기획전 자동화 영역 타이틀 글자수 조정(2017-10-30)
	$('.exhibit-bnr-listV17 li').each(function(){
		if ($(this).children('a').children('strong').children('em').length == 1) {
			$(this).children("a").children('strong').find('span').css('max-width','80%');
		}
	});
	//기획전 자동화 영역 태그 텍스트(2017-10-30)
	$('.exhibit-bnr-listV17 li').each(function(){
		if ($(this).hasClass('tag-recomanded')) {
			$(this).children("a").children('.tag').children('span').text('MD추천');
		} else if ($(this).hasClass('tag-best')) {
			$(this).children("a").children('.tag').children('span').text('BEST');
		}
	});
});
</script>
	

		
					<div class="section brandV15">
				<h2><a href="/street/"><img src="http://fiximage.10x10.co.kr/web2015/main/tit_brand.png" alt="BRAND STREET" /></a></h2>
				<div class="brandSlideV15">
					<ul class='brandListV15'><li><a href="/street/street_brand_sub06.asp?makerid=moshi1010&gaparam=main_street_1"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68935_20171124204013.jpg" alt="[2015]브랜드스트리트"  /></p></a></li><li><a href="/street/street_brand_sub06.asp?makerid=o2&gaparam=main_street_2"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68936_20171124204021.jpg" alt="[2015]브랜드스트리트"  /></p></a></li><li><a href="/street/street_brand_sub06.asp?makerid=decole1010&gaparam=main_street_3"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68937_20171124204028.jpg" alt="[2015]브랜드스트리트"  /></p></a></li></ul><ul class='brandListV15'><li><a href="/street/street_brand_sub06.asp?makerid=dearforrest&gaparam=main_street_4"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68938_20171124204035.jpg" alt="[2015]브랜드스트리트"  /></p></a></li><li><a href="/street/street_brand_sub06.asp?makerid=LAFARE1789&gaparam=main_street_5"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68939_20171124204046.jpg" alt="[2015]브랜드스트리트"  /></p></a></li><li><a href="/street/street_brand_sub06.asp?makerid=atclip2016&gaparam=main_street_6"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68940_20171124204054.jpg" alt="[2015]브랜드스트리트"  /></p></a></li></ul><ul class='brandListV15'><li><a href="/street/street_brand_sub06.asp?makerid=tweetyey10&gaparam=main_street_7"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68941_20171124204101.jpg" alt="[2015]브랜드스트리트"  /></p></a></li><li><a href="/street/street_brand_sub06.asp?makerid=heeut&gaparam=main_street_8"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68942_20171124204222.jpg" alt="[2015]브랜드스트리트"  /></p></a></li><li><a href="/street/street_brand_sub06.asp?makerid=dailylike&gaparam=main_street_9"><p class='imgOverV15'><img src="http://imgstatic.10x10.co.kr/main/201711/698/vBrandStreet_68943_20171124204116.jpg" alt="[2015]브랜드스트리트"  /></p></a></li></ul>
				</div>
			</div>
			
				<div class="section roundBnrV15">
				<ul>

	<li>
		<div class="bnrBasicV15">
		
			<a href="/diarystory2018?gaparam=main_round_01">
		
				<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/688/vRndBanner_69035_20171130200838.jpg" alt="Better than Today"><em style="display: none;"></em></p>
				<strong>Better than Today</strong>
				
					<p>2018 배럴댄 투데이 다이어리 1+1 증정!</p>
				
			</a>
		</div>
	</li>


	<li>
		<div class="bnrBasicV15">
		
			<a href="/event/eventmain.asp?eventid=82675&amp;gaparam=main_round_02">
		
				<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/688/vRndBanner_69036_20171130200844.jpg" alt="그대 손을 감싸줄 장갑"><em style="display: none;"></em></p>
				<strong>그대 손을 감싸줄 장갑</strong>
				
					<p>추워지니 생각나는 장갑, 꼭챙기세요!</p>
				
			</a>
		</div>
	</li>


	<li>
		<div class="bnrBasicV15">
		
			<a href="/event/eventmain.asp?eventid=82568&amp;gaparam=main_round_03">
		
				<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201712/688/vRndBanner_69059_20171201095255.jpg" alt="브런치엔 우드플레이트를"><em style="display: none;"></em></p>
				<strong>브런치엔 우드플레이트를</strong>
				
					<p>쓰임 티크플레이트 3일 특가 + 무료배송</p>
				
			</a>
		</div>
	</li>
</ul>
	<div class="bnrBasicV15 justDayLinkV15">
		
				<a href="/shopping/category_prd.asp?itemid=1745551&amp;gaparam=main_just1day_00">
			
			<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/689/vJust1Day_69039_20171130200119.jpg" alt=""><em style="display: none;"></em></p>
			
					<strong><span>&lt; JUST 1 DAY &gt;</span></strong>
				
			<p>헤링본 실리콘 드라잉매트</p>
		</a>
	</div>

	<!--div class="bnrBasicV15 justDayLinkV15">
		<a href="/shopping/category_prd.asp?itemid=1745551">
			<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/689/vJust1Day_69039_20171130200119.jpg" alt="JUST 1 DAY" /></p>
			
				<strong><span>&lt; JUST 1 DAY &gt;</span></strong>
			
			<p></p>
		</a>
	</div-->

			</div>
			
			
			
			
			<div class="section lookV15">
				<h2><img src="http://fiximage.10x10.co.kr/web2015/main/tit_look.png" alt="LO-----OK!" /></h2>
				<div class="lookSlideV15">
					<ul class='lookListV15'>


			 <c:forEach  var="i" begin="1" end="8">
			<li>
			
			<!-- 	<a href="/shopping/category_prd.asp?itemid=1844658&gaparam=main_look_11"> -->
			
					<p class="imgOverV15">
					
					<img src="${path}/resource/img/${i}.jpg" style="width:257px; height:290px;"  />
					
			</p>
			
				<!-- </a> -->
				
			</li>
</c:forEach>


</ul>
	

				</div>
			</div>
			
			<!-- <div class="section issueV15">
				
					<h2><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68947_20171124182501.jpg" alt="" /></h2>
					<div id="issueSlider" class="slider-horizontal">
					
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1583606&gaparam=main_issue_01">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68948_20171124193148.jpg" alt="" /></p>
							<strong>01</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="shopping/category_prd.asp?itemid=1839832&gaparam=main_issue_02">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68949_20171124193154.jpg" alt="" /></p>
							<strong>02</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1830376&gaparam=main_issue_03">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68950_20171124193202.jpg" alt="" /></p>
							<strong>03</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1839857&gaparam=main_issue_04">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68951_20171124193209.jpg" alt="" /></p>
							<strong>04</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1838564&gaparam=main_issue_05">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68953_20171124193216.jpg" alt="" /></p>
							<strong>05</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1823341&gaparam=main_issue_06">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68954_20171124193223.jpg" alt="" /></p>
							<strong>06</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1810265&gaparam=main_issue_07">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68955_20171124193236.jpg" alt="" /></p>
							<strong>07</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1837900&gaparam=main_issue_08">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68956_20171124193244.jpg" alt="" /></p>
							<strong>08</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1836338&gaparam=main_issue_09">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68957_20171124193252.jpg" alt="" /></p>
							<strong>09</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1815756&gaparam=main_issue_10">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68958_20171124195654.jpg" alt="" /></p>
							<strong>10</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1617350&gaparam=main_issue_11">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68959_20171124195645.jpg" alt="" /></p>
							<strong>11</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1391582&gaparam=main_issue_12">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68960_20171124195638.jpg" alt="" /></p>
							<strong>12</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1834625&gaparam=main_issue_13">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68961_20171124195631.jpg" alt="" /></p>
							<strong>13</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1820917&gaparam=main_issue_14">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68962_20171124195624.jpg" alt="" /></p>
							<strong>14</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1831700&gaparam=main_issue_15">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68963_20171124195618.jpg" alt="" /></p>
							<strong>15</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1838569&gaparam=main_issue_16">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68964_20171124195612.jpg" alt="" /></p>
							<strong>16</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1820010&gaparam=main_issue_17">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68965_20171124195605.jpg" alt="" /></p>
							<strong>17</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="shopping/category_prd.asp?itemid=1844677&gaparam=main_issue_18">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68966_20171124195558.jpg" alt="" /></p>
							<strong>18</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1642674&gaparam=main_issue_19">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68967_20171124195549.jpg" alt="" /></p>
							<strong>19</strong>
						</a>
					</div>
	
					<div class="issuItem">
					
						<a href="/shopping/category_prd.asp?itemid=1597055&gaparam=main_issue_20">
					
							<p class="imgOverV15"><img src="http://imgstatic.10x10.co.kr/main/201711/696/vIssueNumItem_68968_20171124195540.jpg" alt="" /></p>
							<strong>20</strong>
						</a>
					</div>
	

	</div>
						

			</div> -->
	
	

		</div>
	</div>
	<div class="favoriteKeyword" style="display:none;">
	<a href="/search/search_result.asp?rect=%ED%85%90%EB%B0%94%EC%9D%B4%ED%85%90%EB%B0%B0%EC%86%A1&exkw=1">텐바이텐배송</a>
<a href="/search/search_result.asp?rect=%EC%95%84%EC%9D%B4%ED%8F%B0%EC%BC%80%EC%9D%B4%EC%8A%A4&exkw=1">아이폰케이스</a>
<a href="/search/search_result.asp?rect=%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC&exkw=1">다이어리</a>
<a href="/search/search_result.asp?rect=%EC%8A%AC%EB%A6%AC%ED%8D%BC&exkw=1">슬리퍼</a>
<a href="/search/search_result.asp?rect=%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4&exkw=1">크리스마스</a>
<a href="/search/search_result.asp?rect=%EA%B0%80%EC%8A%B5%EA%B8%B0&exkw=1">가습기</a>
<a href="/search/search_result.asp?rect=%EB%8B%AC%EB%A0%A5&exkw=1">달력</a>
<a href="/search/search_result.asp?rect=%ED%8A%B8%EB%A6%AC&exkw=1">트리</a>
<a href="/search/search_result.asp?rect=%EC%B0%A8%EB%9F%89&exkw=1">차량</a>
<a href="/search/search_result.asp?rect=%EC%97%AC%EC%9E%90%EA%B0%80%EB%B0%A9&exkw=1">여자가방</a>
<a href="/search/search_result.asp?rect=%EC%B9%B4%EB%93%9C%EC%A7%80%EA%B0%91&exkw=1">카드지갑</a>
<a href="/search/search_result.asp?rect=%EB%8F%85%EC%84%9C%EC%8B%A4%EC%B1%85%EC%83%81&exkw=1">독서실책상</a>
<a href="/search/search_result.asp?rect=%ED%95%B8%EB%93%9C%ED%8F%B0+%EA%B1%B0%EC%B9%98%EB%8C%80&exkw=1">핸드폰 거치대</a>
<a href="/search/search_result.asp?rect=%EB%B0%94%EC%9D%B8%EB%8D%94&exkw=1">바인더</a>
<a href="/search/search_result.asp?rect=%ED%99%94%EC%9E%A5%ED%92%88+%ED%8C%8C%EC%9A%B0%EC%B9%98&exkw=1">화장품 파우치</a>
<a href="/search/search_result.asp?rect=%ED%8E%9C%ED%8C%8C%EC%9A%B0%EC%B9%98&exkw=1">펜파우치</a>
<a href="/search/search_result.asp?rect=%EB%AC%B4%EB%93%9C%EB%93%B1&exkw=1">무드등</a>
<a href="/search/search_result.asp?rect=%EC%BB%A4%ED%94%BC%ED%8F%AC%ED%8A%B8&exkw=1">커피포트</a>
<a href="/search/search_result.asp?rect=%EC%85%80%EC%B9%B4%EB%B4%89&exkw=1">셀카봉</a>
<a href="/search/search_result.asp?rect=%EC%8A%88%EB%A7%81%ED%81%B4%EC%8A%A4&exkw=1">슈링클스</a>
<a href="/search/search_result.asp?rect=%EB%84%AC%EB%A6%AC%EC%84%B8%EC%A0%9C&exkw=1">넬리세제</a>
<a href="/search/search_result.asp?rect=%EB%9E%A9%EC%8A%A4%EC%BB%A4%ED%8A%B8&exkw=1">랩스커트</a>
<a href="/search/search_result.asp?rect=%EC%87%BC%ED%8D%BC%EB%B0%B1&exkw=1">쇼퍼백</a>
<a href="/search/search_result.asp?rect=%EC%97%90%EC%96%B4%EC%87%BC%ED%8C%8C&exkw=1">에어쇼파</a>
<a href="/search/search_result.asp?rect=%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0+%EC%82%BC%EA%B0%81%EB%8C%80&exkw=1">스마트폰 삼각대</a>
<a href="/search/search_result.asp?rect=%EC%97%90%EC%8A%A4%EB%8B%89+%EB%B8%94%EB%9D%BC%EC%9A%B0%EC%8A%A4&exkw=1">에스닉 블라우스</a>
<a href="/search/search_result.asp?rect=%EB%85%B8%ED%8A%B8%EB%B6%81+%ED%85%8C%EC%9D%B4%EB%B8%94&exkw=1">노트북 테이블</a>
<a href="/search/search_result.asp?rect=%EC%84%A0%EA%B8%80%EB%9D%BC%EC%8A%A4&exkw=1">선글라스</a>
<a href="/search/search_result.asp?rect=%ED%95%B8%EB%93%9C%ED%8F%B0+%EC%B0%A8%EB%9F%89+%EA%B1%B0%EC%B9%98%EB%8C%80&exkw=1">핸드폰 차량 거치대</a>
<a href="/search/search_result.asp?rect=%EC%9D%BC%ED%9A%8C%EC%9A%A9+%EB%8F%84%EC%8B%9C%EB%9D%BD+%EC%9A%A9%EA%B8%B0&exkw=1">일회용 도시락 용기</a>

	</div>
	<div itemscope itemtype="https://schema.org/WebSite" style="display:none;">
		<meta itemprop="url" content="http://www.10x10.co.kr/">
		<form itemprop="potentialAction" itemscope itemtype="https://schema.org/SearchAction">
			<meta itemprop="target" content="http://www.10x10.co.kr/search/search_result.asp?rect={search_term}&amp;gaparam=sitelinks_searchbox"/>
			<input itemprop="query-input" type="text" name="search_term" required/>
			<input type="submit"/>
		</form>
	</div>
	<hr />
<div class="footerWrapV15">
	<div class="footerV15">
		<ul class="footerLinkV15">
			<li><a href="http://company.10x10.co.kr/" target="_blank"><strong>회사소개</strong></a></li>
			<li><a href="http://company.10x10.co.kr/Recruit/List/" target="_blank">채용정보</a></li>
			<li><a href="/common/join.asp">이용약관</a></li>
			<li><a href="/common/private.asp"><strong>개인정보 처리방침</strong></a></li>
			<li><a href="http://company.10x10.co.kr/Business/Index/" target="_blank">제휴.광고</a></li>
			<li><a href="http://company.10x10.co.kr/Business/Index/" target="_blank">입점문의</a></li>
			<li><a href="/common/sitemap.asp">퀵쇼핑</a></li>
			<li><a href="http://www.10x10shop.com/" target="_blank">10x10 CHINA</a></li>
			<!-- 2017.10.1 서비스 종료
			<li><a href="http://www.thefingers.co.kr/" target="_blank">더핑거스</a></li>
			-->
		</ul>
		<div class="footerConV15">
			<div class="ftSnsUnitV15">
				<p>모바일에서 텐바이텐을 만나세요.</p>
				<p><a href="/event/appdown/" class="goLinkV15"><strong>10x10</strong> 모바일 안내</a></p>
				<p class="appLinkV15">
					<span><img src="http://fiximage.10x10.co.kr/web2015/layout/qrcode.gif" alt="10x10 QR CODE" /></span>
					<span class="lPad15">
						<a href="https://play.google.com/store/apps/details?id=kr.tenbyten.shopping" target="_blank" title="새창"><img src="http://fiximage.10x10.co.kr/web2015/layout/btn_goole.gif" alt="Google play" /></a>
						<a href="https://itunes.apple.com/kr/app/tenbaiten/id864817011?mt=8" target="_blank" title="새창" class="tMar03"><img src="http://fiximage.10x10.co.kr/web2015/layout/btn_apple.gif" alt="APP Store" /></a>
					</span>
				</p>
				<p class="tMar15"><a href="/apps/sns/" class="goLinkV15">텐바이텐 소셜 친구들</a></p>
				<p class="snsV15">
					<a href="https://twitter.com/your10x10" target="_blank" class="snsTwV15">트위터로 이동</a>
					<a href="https://www.facebook.com/your10x10" target="_blank" class="snsFbV15">페이스북으로 이동</a>
					<a href="https://instagram.com/your10x10/" target="_blank" class="snsItV15">인스타그램으로 이동</a>
					<a href="https://www.pinterest.com/your10x10/" target="_blank" class="snsPrV15">핀터레스트로 이동</a>
				</p>
			</div>
			<div class="ftMallInfoV15">
				<p><strong>소비자피해보상보험 Usafe</strong></p>
				<p>고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 구매안전서비스 <br />(소비자피해 보상보험서비스)를 이용하실 수 있습니다. <a title="새창에서 열림" class="btn btnS6 btnGry2 lMar05" href="" onclick="usafe(2118700620); return false;" target="_blank"><span class="whiteArr01 fn">서비스 가입사실 확인</span></a></p>
				<p class="tMar15"><strong>㈜텐바이텐</strong></p>
				<p>서울시 종로구 대학로12길 31 자유빌딩 5층 (03086) / 대표이사 : 최은희<br />사업자등록번호 : 211-87-00620 / 통신판매업 신고번호 : 제 01-1968호<br />개인정보 보호 및 청소년 보호책임자 : 이문재  <a title="새창에서 열림" class="btn btnS6 btnGry2 lMar05" href="http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2004300010130201968&area1=&area2=&currpage=1&searchKey=01&searchVal=텐바이텐&stdate=&enddate=" target="_blank"><span class="whiteArr01 fn">사업자 정보확인</span></a><br />호스팅서비스 : (주)텐바이텐</p>
			</div>
			<div class="ftCsUnitV15">
				<p><strong><img src="http://fiximage.10x10.co.kr/web2015/layout/txt_csinfo.gif" alt="고객행복센터 : 1644-6030" /></strong></p>
				<p class="tMar15"><a href="" class="goLinkV15" onclick="myqnawrite(); return false;">1:1 문의하기</a></p>
				<p class="tMar12">평일 9:00~18:00 / 점심시간 12:00~13:00<br />주말 및 공휴일은 1:1문의하기를 이용해주세요.<br />업무가 시작되면 바로 처리해 드립니다.<br /><strong>customer@10x10.co.kr</strong></p>
			</div>
		</div>
		<p class="goTop"><span>TOP</span></p>
	</div>
</div>

<!-- Google -->
<script type="text/javascript">
//  var _gaq = _gaq || [];
//  _gaq.push(['_setAccount', 'UA-16971867-1']);
//  _gaq.push(['_setDomainName', '10x10.co.kr']);
   
//  _gaq.push(['_trackPageview']);
   
//  (function() {
//    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
//  })();
</script>


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-16971867-1', 'auto');
  ga('require','displayfeatures');
  ga('require', 'linkid', 'linkid.js');
  

  ga('send', 'pageview');

</script>

<!-- Google ADS -->
 <script type='text/javascript'> 
 var google_tag_params = { 
		ecomm_prodid: '', 
		ecomm_pagetype: 'home', 
		ecomm_totalvalue: '' 
	}; 
	</script> 
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1013881501;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1013881501/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

<!-- Facebook -->

<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');
fbq('init', '889484974415237');
if (Array.from){
fbq('track', "PageView");
}
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=889484974415237&ev=PageView&noscript=1" /></noscript>


<!-- Naver -->

<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script>
<script type="text/javascript">
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_1167df6db7ef";
if (!_nasa) var _nasa={};
wcs.inflow("10x10.co.kr");
wcs_do(_nasa);
</script>

<!-- Daum -->


<!-- appBoy -->
<script type="text/javascript">
	+function(a,p,P,b,y){appboy={};appboyQueue=[];for(var s="initialize destroy getDeviceId toggleAppboyLogging setLogger openSession changeUser requestImmediateDataFlush requestFeedRefresh subscribeToFeedUpdates logCardImpressions logCardClick logFeedDisplayed requestInAppMessageRefresh logInAppMessageImpression logInAppMessageClick logInAppMessageButtonClick logInAppMessageHtmlClick subscribeToNewInAppMessages removeSubscription removeAllSubscriptions logCustomEvent logPurchase isPushSupported isPushBlocked isPushGranted isPushPermissionGranted registerAppboyPushMessages unregisterAppboyPushMessages submitFeedback ab ab.User ab.User.Genders ab.User.NotificationSubscriptionTypes ab.User.prototype.getUserId ab.User.prototype.setFirstName ab.User.prototype.setLastName ab.User.prototype.setEmail ab.User.prototype.setGender ab.User.prototype.setDateOfBirth ab.User.prototype.setCountry ab.User.prototype.setHomeCity ab.User.prototype.setLanguage ab.User.prototype.setEmailNotificationSubscriptionType ab.User.prototype.setPushNotificationSubscriptionType ab.User.prototype.setPhoneNumber ab.User.prototype.setAvatarImageUrl ab.User.prototype.setLastKnownLocation ab.User.prototype.setUserAttribute ab.User.prototype.setCustomUserAttribute ab.User.prototype.addToCustomAttributeArray ab.User.prototype.removeFromCustomAttributeArray ab.User.prototype.incrementCustomUserAttribute ab.User.prototype.addAlias ab.InAppMessage ab.InAppMessage.SlideFrom ab.InAppMessage.ClickAction ab.InAppMessage.DismissType ab.InAppMessage.OpenTarget ab.InAppMessage.ImageStyle ab.InAppMessage.Orientation ab.InAppMessage.CropType ab.InAppMessage.prototype.subscribeToClickedEvent ab.InAppMessage.prototype.subscribeToDismissedEvent ab.InAppMessage.prototype.removeSubscription ab.InAppMessage.prototype.removeAllSubscriptions ab.InAppMessage.Button ab.InAppMessage.Button.prototype.subscribeToClickedEvent ab.InAppMessage.Button.prototype.removeSubscription ab.InAppMessage.Button.prototype.removeAllSubscriptions ab.SlideUpMessage ab.ModalMessage ab.FullScreenMessage ab.HtmlMessage ab.ControlMessage ab.Feed ab.Feed.prototype.getUnreadCardCount ab.Card ab.ClassicCard ab.CaptionedImage ab.Banner ab.WindowUtils display display.automaticallyShowNewInAppMessages display.showInAppMessage display.showFeed display.destroyFeed display.toggleFeed sharedLib".split(" "),i=0;i<s.length;i++){for(var m=s[i],k=appboy,l=m.split("."),j=0;j<l.length-1;j++)k=k[l[j]];k[l[j]]=(new Function("return function "+m.replace(/\./g,"_")+"(){appboyQueue.push(arguments)}"))()}appboy.getUser=function(){return new appboy.ab.User};appboy.getCachedFeed=function(){return new appboy.ab.Feed};(y=p.createElement(P)).type='text/javascript';y.src='https://js.appboycdn.com/web-sdk/2.0/appboy.min.js';y.async=1;(b=p.getElementsByTagName(P)[0]).parentNode.insertBefore(y,b)}(window,document,'script');
	appboy.initialize('fd071a91-c38b-4174-acaa-d1ebff105f35', {enableLogging: false, safariWebsitePushId:'web.kr.10x10', enableHtmlInAppMessages: true});
	appboy.display.automaticallyShowNewInAppMessages();
	//appboy.registerAppboyPushMessages();
	//alert(appboy.isPushSupported());

	

	appboy.openSession();
	//appboy.display.showFeed();
	//appboy.getUser().setCustomUserAttribute('visit pcweb', new Date());
</script>



<script type="text/javascript">
$(function(){
	//'탑으로 가기
	$('.footer .right2').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	;});
});
</script>

</div>
</body>
</html>
