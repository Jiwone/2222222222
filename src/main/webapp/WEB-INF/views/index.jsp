<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="path" value="${pageContext.request.contextPath}" />

<link rel="stylesheet" type="text/css" href="resource/css/index.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
$(function() {
	var btn = $(".scroll");
	
	btn.click(function(e) {
		$('html, body').animate({
			scrollTop : $("#main-menu " + $(e.target).attr("id")).offset().top - 71}
		, 400);
	});
});
</script>

<div id="menu" class="fixed">
	<ul>
		<security:authorize access="!hasRole('ROLE_ADMIN') and !hasRole('ROLE_MEMBER')">
			<li><a class="menu-selector" href="${path}/login">Login</a></li>
		</security:authorize>
		<security:authorize access="hasRole('ROLE_ADMIN') or hasRole('ROLE_MEMBER')">
			<li><form action="${path}/logout" method="post">
					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					<input id="logoutBtn" class="menu-selector" type="submit" value="Logout"/>
				</form>
			</li>
			<security:authorize access="hasRole('ROLE_ADMIN')">
				<li><a class="menu-selector" href="${path}/admin/mypage/index">Mypage</a></li>
			</security:authorize>
			<security:authorize access="hasRole('ROLE_MEMBER')">
				<li><a class="menu-selector" href="${path}/member/mypage/index">Mypage</a></li>
			</security:authorize>
		</security:authorize>
		<li><a class="menu-selector" href="#about">About</a></li>
		<li class="dropdown"><a class="menu-selector" class="dropbtn">Board</a>
			<div class="dropdown-content">
				<a class="scroll" id="#advice">Advice</a> 
				<a class="scroll" id="#voting">Voting</a> 
				<a class="scroll" id="#info">Info</a> 
				<a class="scroll" id="#tip">Tip</a> 
				<a class="scroll" id="#free">Free</a>
			</div></li>
		<li><a class="menu-selector active scroll"
			id="#home">Home</a></li>
	</ul>
</div>

<div id="main-menu">
	<div id="home">
	</div>
	<div id="advice">
		<!-- <a>패션 고민 해결</a> -->
		<security:authorize access="hasRole('ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/admin/board/advice">advice</a></li>
		</ul>
		</security:authorize>
		<security:authorize access="hasRole('ROLE_MEMBER') or !hasAnyRole('ROLE_MEMBER', 'ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/member/board/advice">advice</a></li>
		</ul>
		</security:authorize>
	</div>
	<div id="voting">
		<!-- <a>패션 결정 장애 극복</a> -->
		<security:authorize access="hasRole('ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/admin/board/voting">voting</a></li>
		</ul>
		</security:authorize>
		<security:authorize access="hasRole('ROLE_MEMBER') or !hasAnyRole('ROLE_MEMBER', 'ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/member/board/voting">voting</a></li>
		</ul>
		</security:authorize>
	</div>
	<div id="info">
		<!-- <a>요즘 잘나가는 패션 아이템</a> -->
		<security:authorize access="hasRole('ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/admin/board/info">info</a></li>
		</ul>
		</security:authorize>
		<security:authorize access="hasRole('ROLE_MEMBER') or !hasAnyRole('ROLE_MEMBER', 'ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/member/board/info">info</a></li>
		</ul>
		</security:authorize>
	</div>
	<div id="tip">
		<!-- <a>나에게 맞는 패션 정보들</a> -->
		<security:authorize access="hasRole('ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/admin/board/tip">tip</a></li>
		</ul>
		</security:authorize>
		<security:authorize access="hasRole('ROLE_MEMBER') or !hasAnyRole('ROLE_MEMBER', 'ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/member/board/tip">tip</a></li>
		</ul>
		</security:authorize>
	</div>
	<div id="free">
		<!-- <a>다함께 이야기</a> -->
		<security:authorize access="hasRole('ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/admin/board/free">free</a></li>
		</ul>
		</security:authorize>
		<security:authorize access="hasRole('ROLE_MEMBER') or !hasAnyRole('ROLE_MEMBER', 'ROLE_ADMIN')">
		<ul>
			<li><a href="${path}/member/board/free">free</a></li>
		</ul>
		</security:authorize>
	</div>
</div>
