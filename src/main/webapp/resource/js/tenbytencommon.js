/*
+---------------------------------------------------------------------------------------------------------+
|                               [ 페이지 이동 ]  공통 Script 함수선언                                     |
+------------------------------------------+--------------------------------------------------------------+
|                함 수 명                  |                          기    능                            |
+------------------------------------------+--------------------------------------------------------------+
| TnGotoProduct(v,w)                       | 상품페이지로 이동 (w:new = 새창으로 이동)                    |
+------------------------------------------+--------------------------------------------------------------+
| GoToBrandShop(designerid)                | 브랜드 페이지로 이동                                         |
+------------------------------------------+--------------------------------------------------------------+
| TnGotoEventMain(v)                       | 이벤트 페이지로 이동                                         |
+------------------------------------------+--------------------------------------------------------------+
| TnGotoEventGroupMain(v,g)                | 그룹이 나눠진 이벤트 페이지로 이동                           |
+------------------------------------------+--------------------------------------------------------------+
| TnGotoEventbrandday(v)                   | 브랜드데이 이벤트 페이지로 이동                              |
+------------------------------------------+--------------------------------------------------------------+
| TnGotocultureEvenMain(v)                 | 컬쳐스테이션 이벤트 페이지로 이동                            |
+------------------------------------------+--------------------------------------------------------------+
| TnGotoShoppingBag()                      | 장바구니로 이동                                              |
+------------------------------------------+--------------------------------------------------------------+
| TnGotoCategoryList(cdl,cdm,cdn)          | 카테고리 목록페이지로 이동                                   |
+------------------------------------------+--------------------------------------------------------------+
| AddEval(OrdSr,itID,OptCd)                | 상품후기 쓰기 페이지 이동                                    |
+------------------------------------------+--------------------------------------------------------------+
| goOffShop(shopId)                        | 오프라인 매장으로 이동                                       |
+------------------------------------------+--------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------+
|                              [ 레이어 및 팝업 ]  공통 Script 함수선언                                   |
+------------------------------------------+--------------------------------------------------------------+
|                함 수 명                  |                          기    능                            |
+------------------------------------------+--------------------------------------------------------------+
| PopupNews(v)                             | 공지사항 팝업                                                |
+------------------------------------------+--------------------------------------------------------------+
| PopupBank()                              | 입금자를 찾습니다 안내 팝업                                  |
+------------------------------------------+--------------------------------------------------------------+
| PopupBankDate(v)                         | 입금자를 찾습니다 안내 팝업(기간 검색용)                     |
+------------------------------------------+--------------------------------------------------------------+
| PopupWinner()                            | 당첨자 안내 팝업                                             |
+------------------------------------------+--------------------------------------------------------------+
| popupOffShopNotice(iN,sId)               | 오프라인샾 공지 팝업                                         |
+------------------------------------------+--------------------------------------------------------------+
| myqnawrite()                             | 1:1문의 쓰기 팝업                                            |
+------------------------------------------+--------------------------------------------------------------+
| popEvaluate(iid,mtd)                     | 상품후기 보기 팝업                                           |
+------------------------------------------+--------------------------------------------------------------+
| popEvaluateDetail(iid,idx)               | 상품후기 상세 보기 팝업                                      |
+------------------------------------------+--------------------------------------------------------------+
| popTestEvaluate(iid)                     | 테스트상품후기 보기 팝업                                     |
+------------------------------------------+--------------------------------------------------------------+
| popFingersEvaluate(iid)                  | 핑거스 후기 보기 팝업                                        |
+------------------------------------------+--------------------------------------------------------------+
| popShowImg(v)                            | 상세 큰이미지 보기 팝업                                      |
+------------------------------------------+--------------------------------------------------------------+
| popShowGiftImg(eCode)                    | 이벤트 사은품 상세설명 보기 팝업                             |
+------------------------------------------+--------------------------------------------------------------+
| popRssInfo()                             | RSS Feed 안내 팝업                                           |
+------------------------------------------+--------------------------------------------------------------+
| ZoomItemPop(itemid,wm)                   | 상품 상세 이미지/설명 보기 팝업 (wm:new = 새창으로 이동)     |
+------------------------------------------+--------------------------------------------------------------+
| ZoomItemInfo(itemid)                     | 상품 상세 이미지/설명 보기 팝업 레이어 (2013 Ver.)           |
+------------------------------------------+--------------------------------------------------------------+
| popCancel(iorderserial)                  | 주문취소 팝업                                                |
+------------------------------------------+--------------------------------------------------------------+
| fileDownload(fileNo)                     | 파일다운로드 팝업                                            |
+------------------------------------------+--------------------------------------------------------------+
| popSNSPost(svc,tit,link)                 | 쇼셜네트워크로 글보내기 팝업                                 |
+------------------------------------------+--------------------------------------------------------------+
| viewPoupLayer(div,sCont)                 | 레이어 팝업 띄우기(모달:modal/팝업:popup)                    |
+------------------------------------------+--------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------+
|                                 [ 폼 실행 ]  공통 Script 함수선언                                       |
+------------------------------------------+--------------------------------------------------------------+
|                함 수 명                  |                          기    능                            |
+------------------------------------------+--------------------------------------------------------------+
| TnAddShoppingBag(bool)                   | 장바구니에 상품을 담기                                       |
+------------------------------------------+--------------------------------------------------------------+
| TnAddFavorite(iitemid)                   | 관심 품목 담기 - 상품 페이지 전용                            |
+------------------------------------------+--------------------------------------------------------------+
| TnAddFavoriteList()                      | 관심 품목 담기 - 복수 상품용                                 |
+------------------------------------------+--------------------------------------------------------------+
| TnAddFavoritecolor(colorcode)            | 컬러 favorite 담기                                           |
+------------------------------------------+--------------------------------------------------------------+
| TnAddPlaymywish                          | Play담기                                                     |
+------------------------------------------+--------------------------------------------------------------+
| TnMyBrandJJim(makerid)                   | 찜브랜드 담기                                                |
+------------------------------------------+--------------------------------------------------------------+
| TnSearch(frm)                            | 검색 실행                                                    |
+------------------------------------------+--------------------------------------------------------------+
| TnFindZip(frmname)                       | 우편번호 찾기 실행                                           |
+------------------------------------------+--------------------------------------------------------------+
| TnLogOut()                               | 로그아웃 실행                                                |
+------------------------------------------+--------------------------------------------------------------+
| DownloadCoupon(itemcouponidx)            | 쿠폰 다운로드 받기 실행                                      |
+------------------------------------------+--------------------------------------------------------------+
| TnBuyGiftCard(bool)                      | 기프트카드 바로구매하기                                      |
+------------------------------------------+--------------------------------------------------------------+


+---------------------------------------------------------------------------------------------------------+
|                               [ 기타 기능 ]  공통 Script 함수선언                                       |
+------------------------------------------+--------------------------------------------------------------+
|                함 수 명                  |                          기    능                            |
+------------------------------------------+--------------------------------------------------------------+
| GetByteLength(val)                       | 해당문자열의 글자수(Byte) 반환                               |
+------------------------------------------+--------------------------------------------------------------+
| TnLoginMsg()                             | 로그인 안내 메시지 출력                                      |
+------------------------------------------+--------------------------------------------------------------+
| jsChklogin(blnlogin)                     | 로그인여부 확인 후 로그인페이지 이동                         |
+------------------------------------------+--------------------------------------------------------------+
| islogin()                                | 로그인여부 확인 (true or false)                              |
+------------------------------------------+--------------------------------------------------------------+
| jsChkRealname(cRNCheck)                  | 실명확인 여부 확인 후 실명확인페이지 이동                    |
+------------------------------------------+--------------------------------------------------------------+
| getCookie(name)                          | name에 해당하는 쿠키값 접수                                  |
+------------------------------------------+--------------------------------------------------------------+
| IsDigit(v)                               | 입력된 문자열의 숫자여부 확인                                |
+------------------------------------------+--------------------------------------------------------------+
| MM_preloadImages()                       | 이미지 버퍼링                                                |
+------------------------------------------+--------------------------------------------------------------+
| MM_swapImgRestore()                      | 원래 이미지로 치환                                           |
+------------------------------------------+--------------------------------------------------------------+
| MM_findObj(n, d)                         | 오브젝트명 접수                                              |
+------------------------------------------+--------------------------------------------------------------+
| MM_swapImage()                           | 이미지 치환                                                  |
+------------------------------------------+--------------------------------------------------------------+
| MM_changeProp(objName,x,theProp,theValue)| 오브젝트 스타일 치환                                         |
+------------------------------------------+--------------------------------------------------------------+
| FlashEmbed(fid,fn,wd,ht,para,tranYn)     | 플레시파일 출력                                              |
+------------------------------------------+--------------------------------------------------------------+
| WMVEmbed(fid,fn,wd,ht,startYn)           | 미디어파일 출력                                              |
+------------------------------------------+--------------------------------------------------------------+
| function FLVEmbed(fn,wd,ht,img,autSt,ctr)| FLV플레이어 인베드                                           |
+------------------------------------------+--------------------------------------------------------------+
| getCheckedIndex(comp)                    | checkbox/radio의 체크여부 확인                               |
+------------------------------------------+--------------------------------------------------------------+
| Resizeimg(limitwidth,fileid)             | 이미지 리사이징                                              |
+------------------------------------------+--------------------------------------------------------------+
| jsChkNull(type,obj,msg)	               | INPUT태그 BOX의 Value값 체크,CHECKBOX의 체크여부			  |
|										   |	,RADIOBUTTON의 선택여부,SELECT태그 BOX의 선택여부 체크    |
+------------------------------------------+--------------------------------------------------------------+
| jsChkBlank(str)				           | 문자열 공백체크	                                          |
+------------------------------------------+--------------------------------------------------------------+
| TnWinFlash(v,wd,ht)		               | 플래시 재생 팝업 : ('파일경로','가로사이즈','세로사이즈')	  |
+------------------------------------------+--------------------------------------------------------------+
| TnWinWmv(v,wd,ht)				           | 동영상 재생 팝업 : ('파일경로','가로사이즈','세로사이즈')    |
+------------------------------------------+--------------------------------------------------------------+
| TnWinMusic(v)                            | 음악 재생 팝업 : ('파일경로','가로사이즈','세로사이즈')      |
+------------------------------------------+--------------------------------------------------------------+
| loadXML(strFile)                         | XML파일 읽어오기 : (파일명)                                  |
+------------------------------------------+--------------------------------------------------------------+
| handleProcessIE()                        | loadXML내에서 IE 관련 출력 프로세스                          |
|                                          | - 실제출력은 페이지내 XMLsubProcess()에서 처리               |
+------------------------------------------+--------------------------------------------------------------+
| handleProcessETC()                       | loadXML내에서 Mozila, safari 관련 출력 프로세스 (상동)       |
+------------------------------------------+--------------------------------------------------------------+
| flashCleanup()                           | 브라우저의 종료시(혹은 타페이지 이동시) FLASH의 메모리 정리  |
+------------------------------------------+--------------------------------------------------------------+
| TnCheckCompDate(Dt1,cmpMt,Dt2)           | 날짜크기 비교 (Return 크거나같다:0, 작거나같다:-1)           |
+------------------------------------------+--------------------------------------------------------------+
| chktext(str,limit)         		       | 연속된 text 체크									          |
+------------------------------------------+--------------------------------------------------------------+
| tagScriptSend(act, val, data, gn)		   | 각종 태깅&로깅스크립트 펑션(액션, 값, 데이터, 구분값)        |
+------------------------------------------+--------------------------------------------------------------+

*/
//
// logparam (이벤트 수기 상품용)
function getParameter(paramName) {
  var searchString = window.location.search.substring(1),
      i, val, params = searchString.split("&");

  for (i=0;i<params.length;i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return val[1];
    }
  }
  return null;
}

function TnGotoProduct(v,w){
	var geteC = getParameter("eventid");
	var addparam;
	if (geteC === null){ 
		addparam = "";
	}else{
		addparam = '&pEtr='+geteC; 
	}

	if(w=='new') {
		window.open('/shopping/category_prd.asp?itemid='+v+addparam);
	} else {
		location.href = '/shopping/category_prd.asp?itemid='+v+addparam;
	}
}

//아이띵소 상품 페이지 이동
function TnGotoItsProduct(v){
		TnGotoProduct(v);
	}

function TnGotoDiaryProduct(v,w){
	if(w=='new') {
		window.open('/diarystory/diary_prd.asp?itemid='+v);
	} else {
		location.href = '/diarystory/diary_prd.asp?itemid='+v;
	}
}

//브랜드 서브 페이지 샵 이벤트 부분으로 이동		//2013.10.08 한용민 생성
function GoToBrandShopevent_direct(makerid,evt_code){
	if (makerid == ""){
		alert("스트리트 브렌드가 없습니다.")
	}
	location.href = "/street/street_brand_sub06.asp?makerid=" + makerid + "&shopview=3";
}

function GoToBrandShop(designerid){
	if (designerid == ""){
		alert("스트리트 브렌드가 없습니다.")
	}
	//location.href = "/street/brandshop.asp?designerid=" + designerid;
	location.href = "/street/street_brand.asp?makerid=" + designerid;
}

function GoMyBrand(designerid){
	if(designerid != "" ){
		//location.href = "/street/street_brand.asp?makerid=" + designerid;
		location.href = "/street/street_brand_sub06.asp?makerid=" + designerid;
	}
}

// 2byte문자열 계산 (EUC식)
function GetByteLength(val){
 	var real_byte = val.length;
 	for (var ii=0; ii<val.length; ii++) {
  		var temp = val.substr(ii,1).charCodeAt(0);
  		if (temp > 127) { real_byte++; }
 	}

   return real_byte;
}

// 문자열 Byte 계산 (UTF식)
function GetRealByteLength(s,b,i,c){
    for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
    return b;
}


function TnAddShoppingBag(bool,openerchk){
    var frm = document.sbagfrm;
    var optCode = "0000";

    if(openerchk == undefined || openerchk == "") {
    	openerchk = "";
    } else if(openerchk=="zp") {
    	frm = document.sbagZoomfrm;
	}

    var MOptPreFixCode="Z";
    /*
    try{
        MOptPreFixCode = Mopt_Code[0].substr(0,1);
    }catch(e){
        MOptPreFixCode="Z";
    }
    */
    if (!frm.item_option){
        //옵션 없는경우

    }else if (!frm.item_option[0].length){
        //단일 옵션
        if (frm.item_option.value.length<1){
            alert('옵션을 선택 하세요.');
            frm.item_option.focus();
            return;
        }

        if (frm.item_option.options[frm.item_option.selectedIndex].id=="S"){
            alert('품절된 옵션은 구매하실 수 없습니다.');
            frm.item_option.focus();
            return;
        }

        optCode = frm.item_option.value;
    }else{
        //이중 옵션 경우

        for (var i=0;i<frm.item_option.length;i++){
            if (frm.item_option[i].value.length<1){
                alert('옵션을 선택 하세요.');
                frm.item_option[i].focus();
                return;
            }

            if (frm.item_option[i].options[frm.item_option[i].selectedIndex].id=="S"){
                alert('품절된 옵션은 구매하실 수 없습니다.');
                frm.item_option[i].focus();
                return;
            }

            if (i==0){
                optCode = MOptPreFixCode + frm.item_option[i].value.substr(1,1);
            }else if (i==1){
                optCode = optCode + frm.item_option[i].value.substr(1,1);
            }else if (i==2){
                optCode = optCode + frm.item_option[i].value.substr(1,1);
            }
        }

        if (optCode.length==2){
            optCode = optCode + "00";
        }

        if (optCode.length==3){
            optCode = optCode + "0";
        }
    }

    frm.itemoption.value = optCode;

    for (var j=0; j < frm.itemea.value.length; j++){
        if (((frm.itemea.value.charAt(j) * 0 == 0) == false)||(frm.itemea.value==0)){
    		alert('수량은 숫자만 가능합니다.');
    		frm.itemea.focus();
    		return;
    	}
    }

    if (frm.requiredetail){

		if (frm.requiredetail.value.length<1){
			alert('주문 제작 상품 문구를 작성해 주세요.');
			frm.requiredetail.focus();
			return;
		}

		if(GetByteLength(frm.requiredetail.value)>255){
			alert('문구 입력은 한글 최대 120자 까지 가능합니다.');
			frm.requiredetail.focus();
			return;
		}
		// 꺽은괄호 치환
		frm.requiredetail.value = frm.requiredetail.value.replace(/</g,"＜").replace(/>/g,"＞");
	}

    if (bool==true){
        frm.mode.value = "add";
        frm.action = "/inipay/shoppingbag_process.asp?tp=pop";
        var BagWin = window.open('','iiBagWin','width=350,height=250,scrollbars=no,resizable=no');
        BagWin.focus();

        frm.target = "iiBagWin";
        frm.submit();

    }else{
        frm.mode.value = "DO1";
        frm.target = "_self";
    	frm.action="/inipay/shoppingbag_process.asp";
    	frm.submit();
    }

}


//이중 옵션 인경우 필요
function CheckMultiOption(comp){
    var frm = comp.form;
    var compid = comp.id;
    var compvalue = comp.value;
    var compname  = comp.name;

    //var optSelObj = eval(frm.name + "." + compname);
    var optSelObj = $(".itemoption select[name='" + compname + "']");

    var PreSelObj = null;
    var NextSelObj = null;
    var ReDrawObj = null;

    if (!optSelObj.length){
        return;
    }

    if ((compid==0)&&(optSelObj.length>1)) {
        NextSelObj = optSelObj[1];
        if (optSelObj.length>2) {
            ReDrawObj = optSelObj[2];
        }else{
            ReDrawObj = optSelObj[1];
        }
    }

    if ((compid==1)&&(optSelObj.length>2)) {
        PreSelObj  = optSelObj[0];
        NextSelObj = optSelObj[2];
        ReDrawObj = optSelObj[2];
    }

    if (compid==2) {
        PreSelObj  = optSelObj[1];
    }

    if ((PreSelObj!=null)&&(PreSelObj.value.length<1)){
        alert('상위 옵션을 먼저 선택 하세요.');
        comp.value = '';
        PreSelObj.focus();
        return;
    }

    // 최 하위만 품절 세팅
    var found = false;
    var issoldout = false;


    if ( (compvalue.length>0) && (( (ReDrawObj!=null)&&(optSelObj.length-compid==2) )||( (ReDrawObj!=null)&&(optSelObj.length-compid==3)&&(NextSelObj.value.length>0) ))) {
        for (var i=0; i<NextSelObj.length; i++){
            if (NextSelObj.options[i].value.length<1) continue;

            found = false;
            issoldout = false;
            for (var j=0;j<Mopt_Code.length;j++){
                // Box2Ea, Select1-Change
                if ((compid==0)&&(optSelObj.length==2)){
                    if (Mopt_Code[j].substr(1,1)==compvalue.substr(1,1)&&(Mopt_Code[j].substr(2,1)==ReDrawObj.options[i].value.substr(1,1))){
                        found = true;
                        ReDrawObj.options[i].style.color= "#888888";
                        break;
                    }
                }

                // Box3Ea, Select2-Change
                else if ((compid==1)&&(optSelObj.length==3)) {
                    if ((Mopt_Code[j].substr(1,1)==PreSelObj.value.substr(1,1))&&(Mopt_Code[j].substr(2,1)==comp.value.substr(1,1))&&(Mopt_Code[j].substr(3,1)==ReDrawObj.options[i].value.substr(1,1))){
                        found = true;
                        ReDrawObj.options[i].style.color= "#888888";
                        break;
                    }
                }

                // Box3Ea, Select2 Value Exists, Select1-Change
                else if ((compid==0)&&(optSelObj.length==3)&&(NextSelObj.value.length>0)){
                    if ((Mopt_Code[j].substr(1,1)==compvalue.substr(1,1))&&(Mopt_Code[j].substr(2,1)==NextSelObj.value.substr(1,1))&&(Mopt_Code[j].substr(3,1)==ReDrawObj.options[i].value.substr(1,1))){
                        found = true;
                        ReDrawObj.options[i].style.color= "#888888";
                        break;
                    }
                }
            }


            if (!found){
                ReDrawObj.options[i].text = ReDrawObj.options[i].value.substr(2,255) + " (품절)";
                ReDrawObj.options[i].id = "S";
                ReDrawObj.options[i].style.color= "#DD8888";
            }else{
                if (Mopt_S[j]==true){
                    ReDrawObj.options[i].text = ReDrawObj.options[i].value.substr(2,255) + " (품절)";
                    ReDrawObj.options[i].id = "S";
                    ReDrawObj.options[i].style.color= "#DD8888";
                }else{
                    if ( Mopt_LimitEa[j].length>0){
                        ReDrawObj.options[i].text = ReDrawObj.options[i].value.substr(2,255) + " (한정 " + Mopt_LimitEa[j] + " 개)";
                    }else{
                        ReDrawObj.options[i].text = ReDrawObj.options[i].value.substr(2,255);
                    }
                    ReDrawObj.options[i].style.color= "#888888";
                    ReDrawObj.options[i].id = "";
                }
            }
        }
    }
}


function TnBuyGiftCard(bool)
{
	var frm = document.sbagfrm;
	if (frm.cardopt.value.length<1){
	    alert('옵션을 선택 하세요.');
	    frm.cardopt.focus();
	    return;
	}

	if (frm.cardopt.options[frm.cardopt.selectedIndex].id=="S"){
	    alert('품절된 옵션은 구매하실 수 없습니다.');
	    frm.cardopt.focus();
	    return;
	}

	if (bool==true){
		frm.submit();
	}
}


function TnLoginMsg(){
	alert('로그인이 필요한 서비스입니다.');
}


//로그인 후 로그인 페이지 팝업처리
function jsChklogin(blnLogin){
	if (blnLogin == "True"){
		return true;
	}
	if(confirm("로그인 하시겠습니까?")){
			var winLogin = window.open('/login/PopLoginPage.asp','popLogin','width=400,height=300');
			winLogin.focus();
	}
	return false;

}

//로그인 여부 확인(쿠키)
function islogin() {
	if(getCookie('tinfo')) {
		return "True";
	} else {
		return "False";
	}
}

//실명확인 여부확인 및 실명확인 페이지 팝업
function jsChkRealname(cRNCheck) {
	if(cRNCheck=='Y') {
		return true;
	} else {
		var winRNCheck = window.open('/member/PopCheckName.asp','popNameCheck','width=515,height=460');
		winRNCheck.focus();
	}
	return false;
}

// 쿠키를 가져온다
function getCookie(name){
 var nameOfCookie = name + "=";
 var x = 0;

 while ( x <= document.cookie.length )
 {
  var y = (x+nameOfCookie.length);
  if ( document.cookie.substring( x, y ) == nameOfCookie ) {
   if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
   endOfCookie = document.cookie.length;
   return unescape( document.cookie.substring( y, endOfCookie ) );
  }

  x = document.cookie.indexOf( " ", x ) + 1;

  if ( x == 0 )
   break;
 }
 return "";
}


// 관심 품목 담기 - 상품 페이지 전용 : 상품 코드로 변경
function TnAddFavorite(iitemid, openerchk){
	//if (confirm('관심품목에 추가 하시겠습니까?')){

		var params = "";
	    if(openerchk == undefined || openerchk == "") {
	    	params = "mode=add&itemid=" + iitemid ;
	    } else {
	    	params = "mode=add&op=o&itemid=" + iitemid ;
	    }

        var FavWin = window.open('/my10x10/popMyFavorite.asp?' + params ,'FavWin','width=480,height=530,scrollbars=auto,resizable=no');
    	FavWin.focus();
	//}
}

// 관심 품목 담기 -- 다수 선택 가능
function TnAddFavoriteList(){
	var ArrayFavItemID='';
	var chkbx = document.getElementsByName('chkbxFav');

	for (var i=0;i<chkbx.length;i++) {
			if (chkbx[i].checked){
				ArrayFavItemID=ArrayFavItemID  + ',' + chkbx[i].value;
			}
	}

	if (ArrayFavItemID.length < 1){
			alert('하나 이상 상품을 선택해 주세요');
			return
	}	else	 {
			if (confirm('관심품목에 추가하시겠습니까?')){

			var FavWin = window.open('/my10x10/popMyFavorite.asp?mode=AddFavItems&bagarray=' + ArrayFavItemID ,'FavWin','width=380,height=300,scrollbars=no,resizable=no');
			FavWin.focus();
			}

	}

}

//컬러 관심 품목 담기	'2012.04.09 한용민 생성
function TnAddFavoritecolor(colorcode, openerchk){

	var params = "";
    if(openerchk == undefined || openerchk == "")
    {
    	params = "mode=add&colorcode=" + colorcode ;
    }
    else
    {
    	params = "mode=add&op=o&colorcode=" + colorcode ;
    }

    var FavcolorWin = window.open('/my10x10/popMyFavoritecolor.asp?' + params ,'FavcolorWin','width=380,height=300,scrollbars=no,resizable=no');
	FavcolorWin.focus();
}

//Play 관심 품목 담기	'2013-09-11 이종화
function TnAddPlaymywish(playcode, idx, subidx){
	var id = $("#mywish"+idx);
	// playwish
	$("#tempdiv").empty();
	$.ajax({
		url: "/play/playMyWish.asp?playcode="+playcode+"&codeidx="+idx+"&subcodeidx="+subidx,
		cache: false,
		success: function(message) {
			$("#tempdiv").empty().append(message);
				var state = $("#result").attr("rel");
				var count = $("#result").attr("rel2");

				if (state == "Y")
				{
					id.addClass("myFavor");
					id.html("<strong>"+count+"</strong>");
				}else{
					id.removeClass("myFavor");
					id.html("<strong>"+count+"</strong>");
				}
			$("#tempdiv").empty();
		}
		,error: function(err) {
			alert(err.responseText);
		}
	});
}

//찜브랜드		//2015.04.07 한용민 수정
function TnMyBrandJJim(makerid){
	if (islogin()=="False"){
		jsChklogin(islogin());
		return;
	}
	
	//페이지 별로 css 가 죄다 틀림..골때림..
	$.ajax({
		url: "/street/domybrandjjim.asp?makerid="+makerid,
		cache: false,
		async: false,
		success: function(message) {
			//관심 체크표시
			if(message=="IOK") {
				var $opObj = $("#zzimBrandCnt");
				//카운트 숫자 존재시
				if($opObj.find("strong").length) {
					var fcnt = $opObj.find("strong").text().replace(/,/g,"");
					fcnt++;
					wfnt = setComma(fcnt);
					$opObj.find("strong").text(wfnt);
					$opObj.removeClass('zzimBrOff').addClass('zzimBrOn');
					
				//Award bestBrand List
				}else if($(".addMyBrdV15").length) {
					$("#zzimBr_"+makerid).addClass('zzimBrOn');
				
				//상품상세, 퀵뷰
				}else{
					$("#zzimBr_"+makerid).addClass('zzimBrV15');
				}
				return;

			//관심 체크표시 해제
			} else if (message=='DOK'){
				var $opObj = $("#zzimBrandCnt");
				//카운트 숫자 존재시
				if($opObj.find("strong").length) {
					var fcnt = $opObj.find("strong").text().replace(/,/g,"");
					fcnt--;
					wfnt = setComma(fcnt);
					$opObj.find("strong").text(wfnt);
					$opObj.removeClass('zzimBrOn').addClass('zzimBrOff');
					
				//Award bestBrand List
				}else if($(".addMyBrdV15").length) {
					$("#zzimBr_"+makerid).removeClass('zzimBrOn').addClass('zzimBrOff');
				
				//상품상세, 퀵뷰
				}else{
					$("#zzimBr_"+makerid).removeClass('zzimBrV15');
				}
				return;

			} else if (message=='E01'){
				if(confirm("로그인을 하셔야 참여가 가능 합니다. 로그인 하시겠습니까?")){
					var winLogin = window.open('/login/PopLoginPage.asp','popLogin','width=400,height=300');
					winLogin.focus();
					return;
				}
				return;
			} else if (message=='E02'){
				alert("정상적인 유입경로가 아닙니다.");
				return;
			} else if (message=='E03'){
				alert("브랜드ID가 없습니다.");
				return;
			} else if (message=='FAIL'){
				alert("구분자가 없습니다.");
				return;
			} else {
				alert("정상적인 경로가 아닙니다.");
				return;
			}
		}
	});
}

function TnSearch(frm){
var re0,re1,v0,v1,tot

  re0=/[a-z]|[0-9]/gi; //영숫자 패턴
  re1=/[ㄱ-힣]/g; //한글패턴
  v0=frm.rect.value.match(re0); //매치확인
  v1=frm.rect.value.match(re1); //매치확인
  if(v0!=null)v0=v0.length; //바이트 구함
  if(v1!=null)v1=v1.length; //바이트 구함
  tot=v0+(v1*2); //합을 구함

	if (frm.rect.value.length < 1){
		alert('검색어를 입력하세요..');
		return;
	}

	frm.submit();
}

function TnGotocultureEvenMain(v){

	// 파라메타 빈값으로 넘어올경우 진행중인 이벤트 없음으로 처리 컬쳐메인페이지사용
	if (v==""){
		alert('진행중인 이벤트가 없습니다');
		return;
	}else{
		document.location = '/culturestation/culturestation_event.asp?evt_code=' + v;
	}
}

//기프트데이 주제로 이동
function gogiftdaydetail(detailidx){
	if (detailidx==''){
		alert('DAY 코드값이 없습니다.');
		history.back();
	}else{
		location.href = "/gift/day/view.asp?detailidx="+detailidx;
	}
}

//기프트데이 사연으로 이동
function gogiftdaymaster(masteridx){
	if (masteridx==''){
		alert('DAY 코드값이 없습니다.');
		history.back();
	}else{
		location.href = "/gift/day/index.asp?masteridx="+masteridx;
	}
}

function TnGotoEventMain(v){
	if (v==""){
	document.location = '/shoppingtoday/shoppingchance_allevent.asp';
	}else{
	document.location = '/event/eventmain.asp?eventid=' + v;
}
}

function TnGotoEventMain_New(v){
	if (v==""){
	document.location = '/shoppingtoday/shoppingchance_allevent.asp';
	}else{
	document.location = '/redRibbon/redribbon_main.asp?eventid=' + v;
}
}

function TnGotoEventGroupMain(v,g){
	if (v==""){
		document.location = '/shoppingtoday/shoppingchance_allevent.asp';
	}else{
		document.location = '/event/eventmain.asp?eventid=' + v+'&eGC='+g;
	}
}

//브랜드스트리트 브랜드데이 바로가기
function TnGotoEventbrandday(v){
	if (v==""){
	//document.location = '/street/index.asp';
	}else{
	document.location = '/street/street_brandday.asp?eventid=' + v;
}
}

function TnFindZip(frmname){
    var popwin = window.open('/common/searchzip.asp?target=' + frmname, 'findzipcdode', 'width=445,height=400,left=400,top=200,scrollbars=yes,resizable=yes');
    popwin.focus();
}

// 주소관련수정
function TnFindZipNew(frmname){
    var popwin = window.open('/common/searchzip_new.asp?target=' + frmname, 'findzipcdode', 'width=580,height=690,left=400,top=200,scrollbars=yes,resizable=yes');
    popwin.focus();
}

function PopupNews(v){
	if (!v)
		v = "";
    var popwin = window.open('/common/news_popup.asp?idx=' + v,'popupnews', 'width=580,height=800,left=300,top=100,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}


function PopupBank(){
    var popwin = window.open('/common/online_banking_list.asp','popupbank', 'width=536,height=560,left=400,top=200,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}


function PopupBankDate(v){
    var popwin = window.open('/common/online_banking_list.asp?searchitem=dt&searchtext=' + v,'popupbank', 'width=536,height=560,left=400,top=200,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}


function PopupWinner(){
    var popwin = window.open('/common/winner_popup.asp','popupwinner', 'width=536,height=600,left=400,top=200,location=no,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}

// 오프샾 공지사항 상세보기
function popupOffShopNotice(iN,sId){
	var winN;
	winN = window.open("/offshop/board/notice.asp?iN=" + iN+"&sId="+sId ,"popN",'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=0,resizable=0,width=620,height=600,left=300,top=100');
	winN.focus();
}


function myqnawrite(){
	var popwin;
	popwin = window.open("/my10x10/qna/myqnawrite.asp","myqnawrite","width=700,height=580,scrollbars=yes,resizabled=yes");
	popwin.focus();
}

function myqnawriteWithParam(iorderserial,iqadiv,iitemid){
	var popwin;
	popwin = window.open("/my10x10/qna/myqnawrite.asp?orderserial="+iorderserial+"&qadiv="+iqadiv+"&itemid="+iitemid,"myqnawrite","width=700,height=580,scrollbars=yes,resizabled=yes");
	popwin.focus();
}



function IsDigit(v){
	for (var j=0; j < v.length; j++){
		if ((v.charAt(j) * 0 == 0) == false){
			return false;
		}
	}
	return true;
}


function TnLogOut(){
	var ret = confirm('로그아웃 하시겠습니까?');

	if (ret){
		top.location.href="/login/dologout.asp";
	}
}


function TnGotoShoppingBag(){
    document.location = '/inipay/shoppingbag.asp';
}


function TnGotoCategoryList(cdl,cdm,cdn){
	if(cdm==""&&cdn=="")
		document.location = '/shopping/category_landing.asp?cdl=' + cdl;
	else
		document.location = '/shopping/category_list.asp?cdl=' + cdl + '&cdm=' + cdm + '&cdn='+cdn;
}

//오프라인 매장으로 이동
function goOffShop(shopId) {
	if(shopId)
		self.location="/offshop/shop/shopinfo.asp?shopid=" + shopId;
	else
		document.all.selOffShop.value="";
}


function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_changeProp(objName,x,theProp,theValue) { //v6.0
  var obj = MM_findObj(objName);
  if (obj && (theProp.indexOf("style.")==-1 || obj.style)){
    if (theValue == true || theValue == false)
      eval("obj."+theProp+"="+theValue);
    else eval("obj."+theProp+"='"+theValue+"'");
  }
}


// 스타일진 바로가기 레이어 on,off
	function OnOffTopNowgo(sw)
	{
		var lay = document.getElementById('top_nowgo');
		if(sw=="on") {
			document.getElementById('btnTopBarNowGo').src="http://fiximage.10x10.co.kr/web2011/header/topbar_nowgo_on.gif";
			lay.style.display = "block";
		}
		else if(sw=="off") {
			document.getElementById('btnTopBarNowGo').src="http://fiximage.10x10.co.kr/web2011/header/topbar_nowgo.gif";
			lay.style.display = "none";
		}
	}

//스타일진 검색 레이어 on, off
	function OnOffTopSearch(sw)
	{
		var lay = document.getElementById('top_search');
		if(sw=="on") {
			lay.style.display = "block";
		}
		else if(sw=="off") {
			lay.style.display = "none";
		}
	}

//스타일진 로그인 레이어 on
	function OnOffTopLogin(sw,sq)
	{
		if(document.getElementById('top_search').style.display == 'block'){
			document.getElementById('top_search').style.display = "none";
		}
		var lay = document.getElementById('login');
		if(sw=="on") {
			lay.style.display = "block";
		}
		else if(sw=="off") {
			lay.style.display = "none";
		}
	}



// 플레시 인베드 //
function FlashEmbed(fid,fn,wd,ht,para,tranYn)
{
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + wd + '" height="' + ht + '" id="' + fid + '" align="middle">');
	document.write('<param name="allowScriptAccess" value="always">');
	document.write('<param name="movie" value="' + fn + para + '">');
	document.write('<param name="menu" value="false">');
	document.write('<param name="quality" value="high">');
	if(tranYn=='Y') {
		document.write('<param name="wmode" value="transparent">');}
	document.write('<embed src="' + fn + para + '" menu="false" quality="high" wmode="transparent" width="' + wd + '" height="' + ht + '" name="' + fid + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
	document.write('</object>');
}

// 미디어플레이어 인베드 //
function WMVEmbed(fid,fn,wd,ht,startYn)
{
	document.write('<object ID="' + fid + '" WIDTH="' + wd + '" HEIGHT="' + ht + '"  classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" CODEBASE=http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab standby="Loading Microsoft?Windows? Media Player components..." type="application/x-oleobject">');
	document.write('<param name="Filename" value="' + fn + '">');
	if(startYn=='Y') {
		document.write('<param name="AutoStart" value="true">');}
	else {
		document.write('<param name="AutoStart" value="false">');}
	document.write('<param name="ShowControls" value="true">');
	document.write('<param name="ShowPositionControls" value="false">');
	document.write('<param name="ShowTracker" value="true">');
	document.write('<param name="ShowGotoBar" value="false">');
	document.write('<param name="ShowDisplay" value="false">');
	document.write('<param name="ShowStatusBar" value="true">');
	document.write('<embed type="application/x-mplayer2">');
	document.write('</object>');
}

// FLV플레이어 인베드 v4.3 //
function FLVEmbed(fn,wd,ht,img,autSt,ctrBar) {
	var fVar, addWd=20;
	fVar = "file=" + fn;
	fVar += "&image=" + img;
	if(autSt) fVar += "&autostart=" + autSt;
	if(ctrBar=='none'||ctrBar=='over') {
		fVar += "&controlbar=" + ctrBar;
		addWd = 0;
	}

	if ((navigator.userAgent.indexOf('iPhone') != -1)||(navigator.userAgent.indexOf('iPod') != -1)||(navigator.userAgent.indexOf('iPad') != -1)) { // 아이폰,아이팟,아이패드 일때
		document.write('<video width="' + wd + '" height="' + ht + '" poster="' + img + '" src="' + fn + '" controls="true" type="video/mp4"></video>');
	} else { //아이폰이 아닐때
		document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + wd + '" height="' + (ht+addWd) + '" align="middle">');
		document.write('<param name="allowScriptAccess" value="always">');
		document.write('<param name="allowfullscreen" value="true">');
		document.write('<param name="movie" value="http://fiximage.10x10.co.kr/flash/flvplayer4.swf?' + fVar + '">');
		document.write('<param name="menu" value="false">');
		document.write('<param name="quality" value="high">');
		document.write('<param name="wmode" value="transparent">');
		document.write('<embed src="http://fiximage.10x10.co.kr/flash/flvplayer4.swf?' + fVar + '" menu="false" quality="high" wmode="transparent" width="' + wd + '" height="' + (ht+addWd) + '" align="middle" allowScriptAccess="always" allowfullscreen="true" allownetworking="all" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
		document.write('</object>');
	}
}

// 상품후기 팝업
function popEvaluate(iid,mtd){
	var subwin;
	subwin = window.open("/common/PopItemEvaluate.asp?itemid=" + iid + "&sortMtd=" + mtd,"popeval","width=800,height=820,status=no,resizable=no,scrollbars=yes");
	subwin.focus();
}

// 상품후기 상세보기 팝업
function popEvaluateDetail(iid,idx){
	var subwin;
	subwin = window.open("/common/PopItemEvaluatedetail.asp?id=" + idx + "&itemid=" + iid,"popeval","width=800,height=820,status=no,resizable=no,scrollbars=yes");
	subwin.focus();
}

// 테스트상품후기 팝업
function popTestEvaluate(iid){
	var subwin;
	subwin = window.open("/common/PopItemEvaluate.asp?itemid=" + iid + "&sortMethod=tt","popeval","width=800,height=820,status=no,resizable=no,scrollbars=yes");
	subwin.focus();
}

//상품후기 쓰기
function AddEval(OrdSr,itID,OptCd){
	var winEval;
	winEval = window.open('/my10x10/goodsUsingWrite.asp?orderserial=' + OrdSr + '&itemid=' + itID + '&optionCD=' + OptCd,"popeval","width=925,height=800,status=no,resizable=yes,scrollbars=yes");
	winEval.focus();
}

// 핑거스 상품후기 팝업
function popFingersEvaluate(iid){
	var subwin;
	subwin = window.open("/common/PopFingersItemEvaluate.asp?fingersitemlist=" + iid,"popeval","width=720,height=600,status=no,resizable=yes,scrollbars=yes");
	subwin.focus();
}

// 이미지 상세보기 팝업
function popShowImg(v){
	  var p = (v);
	  w = window.open("/common/showimage.asp?img=" + v, "imageView", "width=10,height=10,status=no,resizable=yes,scrollbars=yes");
      w.focus();
}


function popShowGiftImg(eCode) {
	var w;
		w =window.open("/event/event_gift_win.asp?eventid=" + eCode ,"eventwin",'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=500,height=430');
		w.focus();
	}

// RSS안내 팝업
function popRssInfo()
{
	var popwin = window.open('/common/pop_rssGuide.asp','rssGuide','width=360,height=320');
	popwin.focus();
}

//상품 추가 이미지 PopUp
function ZoomItemPop(itemid,wm) {
	if(wm!='new') wm='pop';
	var popwin = window.open("/common/PopZoomItem.asp?itemid=" + itemid + '&pop=' + wm,"win3",'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=945,height=710');
    popwin.focus();
}

//상품 정보 미리보기 PopUp layer(레이어 사용안함;2015리뉴얼)
function ZoomItemInfo(itemid) {
	ZoomItemPop(itemid);
	return;
}
//레이어 닫기
function ClosePopLayer() {
	$('#boxes').hide();
	$('.window').hide();
	$('#lyrPop').hide();
	$('#freeForm').empty().hide();
}

//레이어 팝업 띄우기(모달/팝업)
function viewPoupLayer(div,sCont) {
	//현재 윈도우 사이즈 접수
	var maskHeight = $(document).height();
	//var maskWidth = $(document).width();
	var maskWidth = $(window).width();

	// 구분에 따라 모달,팝업 선택
	if(div=="modal") {
		//Modal
		var id = $("#freeForm");
		$(id).empty().html(sCont).find(".window").show();

		$('#mask').css({'width':maskWidth,'height':maskHeight});
		$('#mask').fadeIn();

		var id2 = $(id).children();
		$('#boxes').show();

		var winH = $(window).height();
		var winW = $(document).width();
		$(id2).css('top', winH/2-$(id2).height()/2);
		$(id2).css('left', winW/2-$(id2).width()/2);
		$(id).show();
	} else {
		//Popup
		var id = $("#lyrPop");
		$(id).empty().html(sCont);

		var id2 = $(id).children();
		$('#lyrPop').show().find(".window").show();

		var winH = $(window).height();
		var winW = $(document).width();
		$(id2).css('top', winH/2-$(id2).height()/2);
		$(id2).css('left', winW/2-$(id2).width()/2);
		$(id).show();
	}
}


// 모달 레이어 오픈(from Ext File)
function fnOpenModal(sUrl) {
	if(sUrl==""||sUrl=="undefind") return;

	//현재 윈도우 사이즈 접수
	var maskHeight = $(document).height();
	//var maskWidth = $(document).width();
	var maskWidth = $(window).width();

	$.ajax({
		url: sUrl,
		cache: false,
		success: function(message) {
			var id = $("#freeForm");
			$(id).empty().html(message).find(".window").show();

			$('#mask').css({'width':maskWidth,'height':maskHeight});
			$('#mask').fadeIn();

			var id2 = $(id).children();
			$('#boxes').show();

			var winH = $(window).height();
			var winW = $(document).width();
			$(id2).css('top', winH/2-$(id2).height()/2);
			$(id2).css('left', winW/2-$(id2).width()/2);
			$(id).show();
		}
		,error: function(err) {
			//alert(err.responseText);
		}
	});

	$("#freeForm").show();
}


// 취소 pop
function popCancel(iorderserial){
    var popwin = window.open('/my10x10/orderPopup/popCancelOrder.asp?orderserial=' + iorderserial,'popCancelOrder','width=800,height=600,scrollbars=yes,resizable=yes');
    popwin.focus();
}

// 파일 다운로드
function fileDownload(fileNo) {
    //alert('죄송합니다. 잠시 점검중입니다.');
    //return;
	if(jsChklogin(islogin())) {
		location.href = "http://upload.10x10.co.kr/linkweb/download/fileDownload.asp?fn=" + fileNo;
	}
}

// 쇼셜네트워크로 글보내기
function popSNSPost(svc,tit,link,pre,tag,img) {
    // tit, img 및 link는 반드시 UTF8로 변환하여 호출요망! (2013.10.02; 허진원 UTF8 처리 문제로 APPS서버 경유)
    var popwin = window.open("http://apps.10x10.co.kr/snsPost/goSNSposts.asp?svc=" + svc + "&link="+link + "&tit="+tit + "&pre="+pre + "&tag="+tag + "&img="+img,'popSNSpost');
    popwin.focus();
}

// 핀터레스트 공유
function pinit(link,img) {
    // link 및 img는 반드시 UTF8로 변환하여 호출요망!
    var pinit = window.open("http://pinterest.com/pin/create/button/?url="+link+"&media="+img);
    pinit.focus();
}

// for radio button checked Index
function getCheckedIndex(comp){
    var i =0;
    for( var i = 0 ; i <comp.length;  i++){
        if(comp[i].checked) return i;
    }
    return -1;
}

// 쿠폰 받기
function DownloadCoupon(itemcouponidx){
	var popwin=window.open('/my10x10/downloaditemcoupon.asp?itemcouponidx=' + itemcouponidx,'DownloadCoupon','width=470,height=540,scrollbars=yes,resizable=no');
	popwin.focus();
}

// 이미지 사이즈 리사이징
function Resizeimg(limitwidth,fileid)	{
	var frm = document.getElementById(fileid);
	if (frm.width > limitwidth){
		frm.width=limitwidth;
	}
}

// 메뉴 레이어 On/Off
	function OnOffLeftSubMenu(fnm,sw)
	{
		var leftcate = document.all(fnm);
		if(sw=="on")
			leftcate.style.visibility = "visible";
		else
			leftcate.style.visibility = 'hidden';
	}

//INPUT태그 BOX의 Value값 체크,CHECKBOX의 체크여부,RADIOBUTTON의 선택여부,SELECT태그 BOX의 선택여부 체크
function jsChkNull(type,obj,msg)
{

     switch (type) {
        // text, password, textarea, hidden
        case "text" :
        case "password" :
        case "textarea" :
        case "hidden" :
                if (jsChkBlank(obj.value)) {
					alert(msg);
					//obj.focus();
                    return false;
                }
                else {
                    return true;
                }
                break;
        // checkbox
        case "checkbox" :
                if (!obj.checked) {
					alert(msg);
                    return false;
                }
                else {
                    return true;
                }
                break;
        // radiobutton
        case "radio" :
                var objlen = obj.length;

                for (i=0; i < objlen; i++) {
                    if (obj[i].checked == true)
                        return true;
				}
                if (i == objlen) {
					alert(msg);
                    return false;
                }else{
					return true;
                }
                break;
        }

        // select list
        if (obj.type.indexOf("select") != -1) {
            if (obj.options[obj.selectedIndex].value == 0 || obj.options[obj.selectedIndex].value == ""){
				alert(msg);
                return false;
            }else{
                return true;
			}
        }

        return true;

}


//문자열의 공백여부 체크
function jsChkBlank(str)
{
    if (str == "" || str.split(" ").join("") == ""){
        return true;
	}
    else{
        return false;
	}
}

//플래쉬 팝업 보기
function TnWinFlash(v,wd,ht){
	var popwin =window.open('/common/watch_flash.asp?movie=' + v+'&wd='+wd+'&ht='+ht, 'findzipcdode', 'width=400,height=340,left=400,top=200,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}

//동영상 팝업 보기
function TnWinWmv(v,wd,ht){
	var popwin =window.open('/common/watch_wmv.asp?movie=' + v+'&wd='+wd+'&ht='+ht, 'wv', 'width=400,height=340,left=400,top=200,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}

//Music플레이어 팝업 보기
function TnWinMusic(v){
	var popwin =window.open('/common/musicPlayer.asp?file='+v, 'ms', 'width=220,height=40,left=400,top=200,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');
    popwin.focus();
}

// XML로딩
var xmlDoc, xmlHttp;
function loadXML(strFile)
{
	// code for IE
	if (window.ActiveXObject) {
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.load(strFile);
		handleProcessIE();
	}
	// code for Mozilla, Firefox, Opera, etc.
	else if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
		 xmlHttp.open("GET",strFile,true);
		 xmlHttp.overrideMimeType('text/xml');
		 //xmlHttp.setRequestHeader('Connection', 'close');
		 xmlHttp.onreadystatechange = handleProcessETC;
		 xmlHttp.send(null);
	} else {
		//alert('XML을 지원하지 않는 브라우져 입니다.');
	}
}

// XML핸들링(for IE)
function handleProcessIE(){
	XMLsubProcess();
}

// XML핸들링(for Mozilla)
function handleProcessETC(){
 if(xmlHttp.readyState == 4){
   if(xmlHttp.status==200) {
		xmlDoc = xmlHttp.responseXML;
		XMLsubProcess();
	}
 }
}

// Email comboBox 관련
function jsShowMailBox(frm,selVal,strVal) {

	if (eval(frm+"."+selVal).value == 'etc') {
		eval(frm+"."+strVal).style.display = '';
		eval(frm+"."+strVal).value = '';
		eval(frm+"."+strVal).readOnly = false;
		eval(frm+"."+strVal).focus();
	}
	else
	{
		eval(frm+"."+strVal).style.display = 'none';
		eval(frm+"."+strVal).value = eval(frm+"."+selVal).value;
	}
}


// Flash Embeded CleanUp
function flashCleanup()
{__flash_unloadHandler=function()
	{
		externalProbSet=true;
		obj=document.getElementsByTagName("OBJECT");
		for(i=0;i<obj.length;i++) {
			var theObj=eval(obj[i]);
			theObj.style.display="none";
			for(var prop in theObj) {
				if(typeof(theObj[prop])=="function"){theObj[prop]=null}
			}
		}
	};
	if(window.onunload!=__flash_unloadHandler) {
		__flash_savedUnloadHandler=window.onunload;
		window.onunload=__flash_unloadHandler
	}
}
//window.onbeforeunload=flashCleanup;



// Trim
function Trim(v)
{
	return v.replace(/^(\s+)|(\s+)$/g, "");
}
// Replace 함수
function Replace(val, find, change)
{
	return val.split(find).join(change);
}

// 숫자인지 체크
function isNumeric( value )
{
	//	end home arrow (35~40), backspace 8, tab 9, enter 13, delete 46,  num lock 144
	if ((value >= 48 && value <= 57) || (value >= 96 && value <= 105) || (value >= 35 && value <= 40) || value == 8 || value == 9 || value == 13 || value == 46 || value == 144)
		return true;
	else
		return false;
}

// 숫자만 입력받기 IE, FF	onkeydown="onlyNumber(this,event);"
function onlyNumber(obj,evt)
{
	var evCode = (!window.netscape) ? event.keyCode : evt.which;
	if (isNumeric(evCode)==false)
	{
		alert("숫자만 입력이 가능합니다.");
		if (!window.netscape)
			event.returnValue=false;
		else
			obj.value = obj.value.substr(0,obj.value.length-1);
	}
}

// 팝업창 자동 리사이즈
// 팝업창에서 window.onload = popupResize;
// 온로드 이벤트를 이미 사용하고 있으면
//	window.onload = function() {
//		popupResize();	// 추가
//	}

// 팝업창 리사이즈, 지정한대로
function popupResize(innerWidth,innerHeight)
{
	var strAgent = navigator.userAgent.toLowerCase();
	var strVersion = strAgent.substr(strAgent.indexOf("msie")+5,1);

	var innerBody = document.body;
	if (!innerHeight) {
		innerHeight = innerBody.scrollHeight + (innerBody.offsetHeight - innerBody.clientHeight);
	}

	if (strVersion > 6)	{// 7이상
		addHeight = 85;
		innerWidth += 10;
	} else if (strVersion > 3)	{// 3이상
		addHeight = 55;
		innerWidth += 10;
	} else {				// 기타
		addHeight = 65;
		innerWidth += 18;
	}

	innerHeight += addHeight;
	window.resizeTo(innerWidth,innerHeight);
}


// 팝업 오픈 함수
function winOpen(url, win, width, height, scroll, left, top)
{
	var width	= width		? width		: (screen.width);
	var height	= height	? height	: (screen.height);
	var left	= left		? left		: (screen.width-width)/2;
	var top		= top		? top		: (screen.height-top)/2;
	var scroll	= scroll	? "yes"		: "no";
	var params	= "width="+width+",height="+height+",left="+left+",top="+top+",status=no,toolbar=no,menubar=no,location=no,fullscreen=no,resizable=yes,scrollbars="+scroll;
	win = window.open(url,win,params)
	win.focus();
}

// 이메일 형식 체크
function validEmail(obj)
{
	var regExp =/^[0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]{2,3}$/i;

	if(! regExp.test(obj.value) )
	{
		alert("이메일 형식이 맞지 않습니다.");
		obj.focus();
		return false;
	}
	else
		return true;
}

// 폼 필수 필드 유효성 체크
function validField(obj, msg, len)
{
	if (obj.length > 1)
	{
		if (obj[0].type == "radio" || obj[0].type == "checkbox")
		{
			var chk = 0;
			for (var i = 0; i < obj.length; i++)
				if (obj[i].checked)
					chk++;

			if (chk==0)
			{
				if (obj[0].type == "checkbox")
					alert("" + msg + " 하나 이상 체크해주세요.");
				else
					alert("" + msg + " 체크해주세요.");

				obj[0].focus();
				return false;
			}
		}
		else if (obj.type == "select-one")
		{
			if(obj.value=="")
			{
				alert("" + msg + " 선택해주세요.");
				obj.focus();
				return false;
			}
		}
	}
	else if (obj.type == "radio" || obj.type == "checkbox")
	{
		if (obj.checked==false)
		{
			alert("" + msg + " 체크해주세요.");
			obj.focus();
			return false;
		}
	}
	else
	{
		if(Trim(obj.value) == "")
		{
			alert("" + msg + " 입력해주세요.");
			obj.focus();
			return false;
		}
		if (len)
		{
			if (returnByte(obj.value) > len)
			{
				alert("" + msg + " 한글기준 "+parseInt(len/2)+"자, 영문기준 "+len+"자 이내로 해주세요.");
				obj.focus();
				return false;
			}
		}
	}

	return true;
}

// 자리수 형식 체크
function validFieldLeng(obj, msg, len)
{
	if(obj.value.length < len)	// 작으면 false 같거나 크면 상관없음 maxlength로 제한하기 때문에 클 수는 없음
	{
		alert(msg + " 자리수가 맞지 않습니다.\n"+len+" 자리 또는 그 이상으로 입력해주세요.");
		obj.focus();
		return false;
	}
	else
		return true;
}

	function hL(E){
		while (E.tagName!="TR")
		{
			E=E.parentElement;
		}

		E.className = "H";
	}

	function dL(E){
		while (E.tagName!="TR"){
			E=E.parentElement;
		}

		E.className = "";
	}

	function AnSelectAllFrame(bool){
		var frm;
		for (var i=0;i<document.forms.length;i++){
			frm = document.forms[i];
			if (frm.name.substr(0,9)=="frmBuyPrc") {
				if (frm.cksel.disabled!=true){
					frm.cksel.checked = bool;
					AnCheckClick(frm.cksel);
				}
			}
		}
	}

	function AnCheckClick(e){
		if (e.checked) {
			hL(e);
		} else {
			dL(e);
		}
	}

	function ckAll(icomp){
		var bool = icomp.checked;
		AnSelectAllFrame(bool);
	}

	function CheckSelected(){
		var pass=false;
		var frm;

		for (var i=0;i<document.forms.length;i++){
			frm = document.forms[i];
			if (frm.name.substr(0,9)=="frmBuyPrc") {
				pass = ((pass)||(frm.cksel.checked));
			}
		}

		if (!pass) {
			return false;
		}
		return true;
	}

function jsChkNumber(value) {
	var temp = new String(value)

	if(temp.search(/\D/) != -1) {
		return false;
	}
		return true;
}

//주민번호 check
function jsChkSocialNum(varSno1, varSno2){
	  var sno = varSno1 + varSno2;
	  var IDAdd = "234567892345";
	  var iDot=0;

	  //숫자확인
	  if(!jsChkNumber(sno)){
		return false;
	}
	  //숫자가 13자리 인지 확인
	  if(sno.length != 13){
		return false;
	 }
	  if (sno.substring(2,3) > 1) return false;
	  if (sno.substring(4,5) > 3) return false;
	  if (sno.substring(0,2) == '00' && (sno.substring(6,7) != 0 || sno.substring(6,7) != 9 || sno.substring(6,7) != 3 || sno.substring(6,7) !=4)) return false;
	  if (sno.substring(0,2) != '00' && (sno.substring(6,7) > 4 || sno.substring(6,7) == 0)) return false;

	  for(var i=0; i < 13; i ++)
		iDot = iDot + sno.substr(i, 1) * IDAdd.substr(i,1);

	  iDot = 11 - (iDot % 11);

	  if(iDot == 10){
		iDot = 0;
	  } else if (iDot == 11){
		iDot = 1;
	  }

	  if(sno.substr(12,1) == iDot){
		return true;
	  } else {
		return false;
	  }
}



// 필드값 리턴, type이나 length에 따라 달라짐
function getValue(obj)
{
	var ret = "";
	if (obj.length > 1)
	{
		if (obj[0].type == "radio" || obj[0].type == "checkbox")
		{
			for (var i = 0; i < obj.length; i++)
				if (obj[i].checked)
					if (ret=="")
						ret = obj[i].value;
					else
						ret += "," + obj[i].value;
		}
		else if (obj.type == "select-one")
			ret = obj.value;
	}
	else
		ret = obj.value;

	return ret;
}

// 필드값 세팅
function setValue(obj,val)
{
	if (obj.length > 1)
	{
		if (obj[0].type == "radio" || obj[0].type == "checkbox")
		{
			for (i=0;i<obj.length;i++)
				if (obj[i].value == val)	// 밸류값과 동일하면 checked
					obj[i].checked = true;
		}
		else if (obj.type == "select-one")
			obj.value = val;
		else
			alert("필드 중복!!");
	}
	else
		obj.value = val;
}

// ajax용 객체 함수
function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
	return xmlHttp;
}


// iframe 길이 자동
function resizeIfr(obj, minHeight) {
	minHeight = minHeight || 10;

	try {
		var getHeightByElement = function(body) {
			var last = body.lastChild;
			try {
				while (last && last.nodeType != 1 || !last.offsetTop) last = last.previousSibling;
				return last.offsetTop+last.offsetHeight;
			} catch(e) {
				return 0;
			}

		}

		var doc = obj.contentDocument || obj.contentWindow.document;z
		if (doc.location.href == 'about:blank') {
			obj.style.height = minHeight+'px';
			return;
		}

		//var h = Math.max(doc.body.scrollHeight,getHeightByElement(doc.body));
		//var h = doc.body.scrollHeight;
		if (/MSIE/.test(navigator.userAgent)) {
			var h = doc.body.scrollHeight;
		} else {
			var s = doc.body.appendChild(document.createElement('DIV'))
			s.style.clear = 'both';

			var h = s.offsetTop;
			s.parentNode.removeChild(s);
		}

		//if (/MSIE/.test(navigator.userAgent)) h += doc.body.offsetHeight - doc.body.clientHeight;
		if (h < minHeight) h = minHeight;

		obj.style.height = h + 'px';
		if (typeof resizeIfr.check == 'undefined') resizeIfr.check = 0;
		if (typeof obj._check == 'undefined') obj._check = 0;

//		if (obj._check < 5) {
//			obj._check++;
			setTimeout(function(){ resizeIfr(obj,minHeight) }, 200); // check 5 times for IE bug
//		} else {
			//obj._check = 0;
//		}
	} catch (e) {
		//alert(e);
	}

}

//비회원 메일링 서비스 신청 팝업
function notmember()
{

	var notmember = window.open('/member/mailzine/notmember_pop.asp','notmember','width=650,height=900,scrollbars=auto,resizable=no');
	notmember.focus();

}

function onlyAsc(obj)
{
	var regexp = /^[#.,~)(/\'\"_A-Za-z0-9 @-]*$/i;

	if(!regexp.test(obj.value))
	{
		alert("영문이나 숫자 부호만 입력하실 수 있습니다.");
		obj.value = obj.value.substr(0,obj.value.length-1);
	}
}

function checkAsc(val)
{
	var regexp = /^[#.,~)(/\'\"_A-Za-z0-9 @-]*$/i;

	if(!regexp.test(val))
		return false;
	else
		return true;
}


// 연속숫자 및 동일숫자 검사
function chkCtnDplNum(str,cnt) {
    var temp = "";
    re0 = /[0-9]/; //숫자
    var temp2 = str.substring(0, 1); //처음숫자
    var con = 1;

    for (i = 1; i < str.length; i++) {
        temp = str.substring(i, i + 1);  //다음숫자

        if (re0.test(temp) && re0.test(temp2)) //숫자일경우
        {

            if (temp == temp2) { con = 11; } // 77,11,66 같은숫자 연속적인것 체크
            else if (eval(temp) == eval(temp2) + 1) { con = 22; } //1234 순서적인 숫자체크
            else if (eval(temp) + 1 == temp2) { con = 22; } //4321 순서적인 숫자체크
            else { con = 1; temp2 = temp; }

            if (con == 11 || con == 22) { return false; break; } else { return true }

            //if (con == 11) { alert("동일한숫자연속(22)... : " + temp2); break; }
            //else if (con == 22) { alert("연속적인숫자(1234)... : " + temp2); break; }
        } else { con = 1; temp2 = temp; } //숫자가 아닐경우 넘김
    }
}



function setComma(str)
{
	str = ""+str+"";
	var retValue = "";

	for(i=0; i<str.length; i++)
	{
		if(i > 0 && (i%3)==0) {
			retValue = str.charAt(str.length - i -1) + "," + retValue;
		} else {
			retValue = str.charAt(str.length - i -1) + retValue;
		}
	}
	return retValue;
}


function setPng24(obj) {
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter =
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
    obj.src='';
    return '';
}


function popMailling_InMain()
{
	var popMailling = window.open('/member/mailzine/notmember_pop.asp','popMailling','width=520,height=710');
	popMailling.focus();
}

// 키코드 접수
function keyCode(e) {
	var result;
	if(window.event)
		result = window.event.keyCode;
	else if(e)
		result = e.which;
	return result;
}

// 날짜 크기 비교
function TnCheckCompDate(Dt1,cmpMt,Dt2) {
	Dt1 = new Date(Dt1.substring(0,4),Dt1.substring(5,7)-1,Dt1.substring(8,10))
	Dt2 = new Date(Dt2.substring(0,4),Dt2.substring(5,7)-1,Dt2.substring(8,10))
	switch(cmpMt) {
		case "<":
			return (Dt1<Dt2);
			break;
		case "<=":
			return (Dt1<=Dt2);
			break;
		case "=":
			return (Dt1=Dt2);
			break;
		case ">":
			return (Dt1>Dt2);
			break;
		case ">=":
			return (Dt1>=Dt2);
			break;
		default:
			return false;
			break;
	}
}

// 서울보증보험 가입여부 확인 팝업
function usafe(strActPage){
	window.open("https://www.usafe.co.kr/usafeShopCheck.asp?com_no="+strActPage,"", "width=500, height=370, scrollbars=no, location=yes,status=yes,left=0, top=0");
}

// 패스워드 복잡도 검사
function fnChkComplexPassword(pwd) {
    var aAlpha = /[a-z]|[A-Z]/;
    var aNumber = /[0-9]/;
    var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    var sRst = true;

    if(pwd.length < 8){
        sRst=false;
        return sRst;
    }

    var numAlpha = 0;
    var numNums = 0;
    var numSpecials = 0;
    for(var i=0; i<pwd.length; i++){
        if(aAlpha.test(pwd.substr(i,1)))
            numAlpha++;
        else if(aNumber.test(pwd.substr(i,1)))
            numNums++;
        else if(aSpecial.test(pwd.substr(i,1)))
            numSpecials++;
    }

    if((numAlpha>0&&numNums>0)||(numAlpha>0&&numSpecials>0)||(numNums>0&&numSpecials>0)) {
    	sRst=true;
    } else {
    	sRst=false;
    }
    return sRst;
}

//url에 있는 파라메타값받기 getUrlParameter('para')
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

//ISO규정 날짜형식 반환
Date.prototype.isoDate = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString();
   var dd  = this.getDate().toString();
   return yyyy +'-'+ (mm[1]?mm:"0"+mm[0]) +'-'+ (dd[1]?dd:"0"+dd[0]);
};

// IE 버전 확인
function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.    
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");                
        if (re.exec(ua) != null)            
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

//연속된 문자열 체크(문자열,최소체크길이)
function chktext(str, limit){ 
	var o, d, p, n = 0, l = limit==null ? 5 : limit; 
	for(var i=0; i<str.length; i++){ 
		var c = str.charCodeAt(i); 
		if(i > 0 && (p = o - c) >-2 && p < 2 && (n = p == d ? n+1 : 0) > l-3) return false; 
		d = p, o = c; 
		}
	return true; 
}

//태깅&로깅 공용 스크립트
function tagScriptSend(act, val, data, gn)
{
	if (gn=="mixpanel")
	{
		mixpanel.track(val);
	}
	else if (gn=="amplitude")
	{
		amplitude.getInstance().init('31e6741da66c20e94f5807bb844e129f');
		amplitude.getInstance().logEvent(val);
	}
}