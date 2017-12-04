//더블클릭시 최상단으로 이동
$(document).dblclick(function (e) {
	var evtTagNm = e.target.tagName;
	var evtClsNm = e.target.className;

	// 입력박스와 스피너에선 이동금지
	if ((evtTagNm!='SELECT')&&(evtTagNm!='INPUT')&&(evtTagNm!='TEXTAREA')&&(evtClsNm!="up")&&(evtClsNm!="down")){
		//$(document).scrollTop(0); //상단으로 이동
		$('html, body').animate({scrollTop:0}, 'fast');
	}
});

// 특정키를 눌렀을때 페이지 이동
document.onkeyup= function(event) {
	if(window.event) EventStatus = window.event.srcElement.tagName;
	else EventStatus = event.target.tagName;
	if(EventStatus!='INPUT'&&EventStatus!='TEXTAREA'){
		if(keyCode(event)=="192") FnMovePage("/index.asp");	// [`]: 홈으로 이동
	}
}

// 페이지 이동
function FnMovePage(pg) {
	top.location=pg;
}

// 키 이동용 숨김 레이어 생성(Alt용)
var vAltKey;
vAltKey = "";
vAltKey+="<style><!--.AKLR {position:absolute; left:0px; top:0px; width:0; height: 0;z-index:-1;margin-top:-20px;}--></style>"
vAltKey+="<div id='AltKeyLyr' class=AKLR>"
vAltKey+="<input class=AKLR type='radio' onClick=\"FnMovePage('/street/')\" accesskey='b'>"
vAltKey+="<input class=AKLR type='radio' onClick=\"FnMovePage('/culturestation/')\" accesskey='c'>"
vAltKey+="<input class=AKLR type='radio' onClick=\"FnMovePage('/shoppingtoday/shoppingchance_allevent.asp')\" accesskey='e'>"
vAltKey+="<input class=AKLR type='radio' onClick=\"FnMovePage('/play/playDesignFingers.asp')\" accesskey='f'>"
vAltKey+="<input class=AKLR type='radio' onClick=\"FnMovePage('/cscenter/')\" accesskey='h'>"
vAltKey+="<input class=AKLR type='radio' onClick=\"FnMovePage('/award/awardlist.asp?atype=b')\" accesskey='w'>"
vAltKey+="</div>";
document.write(vAltKey);