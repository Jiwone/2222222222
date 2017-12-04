$(function() {
	//Modal Layer
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(document).width();

		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#boxes').show();
		$('#mask').show();

		var winH = $(window).height();
		var winW = $(document).width();
		$(id).css('top', winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).show();
	});

	//Layer popup
	$('a[name=lyrPopup]').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		$('#lyrPop').show();

		var winH = $(window).height();
		var winW = $(document).width();
		$(id).css('top', winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
		$(id).show();
	});

	$(window).resize(function () {
		var box = $('#boxes .window');
		var box2 = $('#lyrPop .window');

		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		var winH = $(window).height();
		var winW = $(window).width();
		box.css('top', winH/2 - box.height()/2);
		box.css('left', winW/2 - box.width()/2);
		box2.css('top', winH/2 - box2.height()/2);
		box2.css('left', winW/2 - box2.width()/2);
	});

	$('.lyrClose').click(function(e) {
		e.preventDefault();
		$('#boxes').hide();
		$('.window').hide();
		$('#lyrPop').hide();
		$('#freeForm').empty().hide();
	});

	$('#mask').click(function () {
		$('#boxes').hide();
		$('.window').hide();
		$('#lyrPop').hide();
		$('#freeForm').empty().hide();
	});

	//go Top
	$(".goTop").click(function() {
		$('html, body').animate({scrollTop:0});
	});

	//Product photo mouseover control
	$('.pdtPhoto').hover(function() {
		$(this).children('.pdtAction').toggle();
	});

	// contents layer (??)
	$('.addInfo').mouseover(function(){
		$(this).children('.contLyr').show();
	});
	$('.addInfo').mouseleave(function(){
		$(this).children('.contLyr').hide();
	});

	// tab
	$('.tabCont').hide();
	$('.tabCont:first').show();
	$('.tabNavi li:first').addClass('current');
	$('.tabNavi li a').hover(function(){
		$('.tabNavi li').removeClass('current');
		$(this).parent().addClass('current');
		var currentTab = $(this).attr('href');
		$('.tabCont').hide();
		$(currentTab).show();
		return false;
	});

	// my 10x10 menu
	$("#lnbMy10x10V15 .menuV15 .all").show();
	$("#lnbMy10x10V15 .menuV15 .all .close").hide();
	$("#lnbMy10x10V15 .menuV15 .all .open").click(function(){
		$("#lnbMy10x10V15 .menuV15 .navigator").find("ul").show();
		$("#lnbMy10x10V15 .menuV15 .all .open").hide();
		$("#lnbMy10x10V15 .menuV15 .all .close").show();
	});
	$("#lnbMy10x10V15 .menuV15 .all .close").click(function(){
		$("#lnbMy10x10V15 .menuV15 .navigator").find("ul").hide();
		$(".all .close").hide();
		$(".all .open").show();
	});

	$("#lnbMy10x10V15 .menuV15 .navigator li ul").hide();
	$("#lnbMy10x10V15 .menuV15 .navigator li").find("a").on("click", function() {
		if ( $(this).parent().find("ul").length ) {
			if ( $(this).hasClass("on")) {
				$(this).parent().find("ul").hide();
				$(this).removeClass("on");
			} else {
				$("#lnbMy10x10V15 .menuV15 .navigator li a").removeClass("on");
				$("#lnbMy10x10V15 .menuV15 .navigator li ul").hide();
				$(this).addClass("on");
				$(this).parent().find("ul").show();
			}
			return false;
		}
	});
});
