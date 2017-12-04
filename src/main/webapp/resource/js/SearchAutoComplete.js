/*
#######################################################
	History	:  2008.12.22 허진원 생성
	           2012.03.14 스크립트 수정/이전
	Description : 검색어 자동완성 Java Script
#######################################################
*/

var NowNo=-1;		// 자동완성 결과선택 번호

// 검색 실행
function fnTopSearch(frmnm,frmval){
	var frm = document.searchForm;
	var chkTvs = frm.tvsTxt.value==frmval;

	frmnm.value = frmval;
	
	if(frm.extUrl.value!=""&&chkTvs) {
		self.location.href=frm.extUrl.value;
	} else {
		frm.cpg.value=1;
		if (frm.rect.value.length<=0){
			alert('검색어를 입력해 주세요');
			frm.sTtxt.focus();
			return;
		} else {
			frm.tvsTxt.value="";
			frm.submit();
		}
	}
}

// 입력창 키처리
function fnKeyInput(ek) {
	switch(ek) {
		case 38:
			// 방향키:위
			if($("#atl").css("display")!="none"){
				if($("#rstNo" + (NowNo-1))) {
					if(NowNo>=0) $("#rstNo" + NowNo).removeClass("activate");
					NowNo--;
					$("#rstNo" + NowNo).addClass("activate");
					$("#rstNo" + NowNo).focus();
					document.searchForm.sTtxt.focus();
					selectText($("#rstNo" + NowNo).text());
				}
			}
			break;
		case 40:
			// 방향키:아래
			if($("#atl").css("display")!="none"){
				if($("#rstNo" + (NowNo+1))) {
					if(NowNo>=0) $("#rstNo" + NowNo).removeClass("activate");
					NowNo++;
					$("#rstNo" + NowNo).addClass("activate");
					$("#rstNo" + NowNo).focus();
					document.searchForm.sTtxt.focus();
					selectText($("#rstNo" + NowNo).text());
				}
			}
			break;
		default:
			fnAutoCompLayer('on');
			NowNo = -1;
			break;
	}
}

var strCont, strHead, strFoot;

//레이어 머릿글
strHead = "<ul>";
//레이어 꼬릿글
strFoot = "</ul>";

//자동완성 실행
function fnAutoCompLayer(key) {
	var frm = document.searchForm;

	// 자동완성 레이어 내용 작성
	if(!frm.sTtxt.value) {
		strCont = strHead + "<li>검색어 자동완성 기능을 <b>사용하고</b> 계십니다.</li>" + strFoot;
	} else {
		// XML로딩
		$.ajax({
			type: "GET",
			url: "/search/act_autoComplete.asp",
			data:"str=" + encodeURI(frm.sTtxt.value),
			dataType: "xml",
			cache: false,
			async: true,
			timeout: 5000,
			beforeSend: function(x) {
				if(x && x.overrideMimeType) {
					x.overrideMimeType("text/xml;charset=UTF-8");
				}
			},
			success: function(xml) {
				if($(xml).find("categoryPage").find("item").length>0) {
					var result="";
				
					// item노드 Loop
					$(xml).find("categoryPage").find("item").each(function(idx) {
						result+= "<li id='rstNo" + $(this).find("No").text() + "' onClick='selectText(this.innerText);fnSACLayerOnOff(false);fnTopSearch(document.searchForm.rect,$(\"#sTtxt\").val());' style='cursor:pointer'>";
						result+= convTxtColor($(this).find("Word").text(),$(this).find("Seed").text(),$(this).find("Conv").text());
						result+= "</li>";
					});
					strCont= strHead + result + strFoot;

					//자동완성 레이어 출력
					$("#atl").html(strCont);
					if(strCont!=(strHead+strFoot)) fnSACLayerOnOff(true);
					else fnSACLayerOnOff(false);
					NowNo = -1;
				}
			},
			error: function(xhr, status, error) {/*alert(xhr + '\n' + status + '\n' + error);*/}
		});
	}

	//자동완성 레이어 닫기
	if(!(($("#atl").css("display")=="none"||key=="on")&&(frm.sTtxt.value||key=="off"))) {
		$("#atl").empty();
		fnSACLayerOnOff(false);
	}
}

//레이어on/off
function fnSACLayerOnOff(sw) {
	if(sw) {
		 if($("#atl").html()) $("#atl").fadeIn("fast");
	}
	else $("#atl").fadeOut("fast");
}

//시간차 레이어 닫기
var hide_SACLayer_started = false;
function HideSACLayer() {
    hide_SACLayer_started = true;
    setTimeout("DoHideSACLayer()", 200);
}
function DoHideSACLayer() {
    if (hide_SACLayer_started == true) {
	    fnSACLayerOnOff(false);
	}
	hide_SACLayer_started = false;
}
function CancelHideSACLayer() {
    hide_SACLayer_started = false;
}

//결과에서 검색창으로..
function selectText(txt) {
	document.searchForm.sTtxt.value=txt;
}

//선택 문자 색전환
function convTxtColor(sO,sS,sC) {
    //4.3
    //var v = sO.replace(sS,"<b>"+sS+"</b>");
	//return v;
	    
	if(sC=="null") {
		return sO.replace(sS,"<b>"+sS+"</b>");
	} else {
		return sO.replace(sC,"<b>"+sC+"</b>");
	}
}
