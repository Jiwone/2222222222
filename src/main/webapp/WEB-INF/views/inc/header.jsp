<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<c:set var="path" value="${pageContext.request.contextPath}" />

<link rel="stylesheet" type="text/css" href="${path}/resource/css/header.css">

<div id="menu">
	<ul>
		<img id="icon" src="" />
		<%-- <c:if test="${ empty sessionScope.id }"> --%>
		<security:authorize access="!hasRole('ROLE_MEMBER') and !hasRole('ROLE_ADMIN')">
			<li><a class="menu-selector" href="${path}/login">Login</a></li>
		</security:authorize>
		<%-- </c:if> --%>
		<%-- <c:if test="${ not empty sessionScope.id }"> --%>
		<security:authorize access="hasRole('ROLE_ADMIN') or hasRole('ROLE_MEMBER')">
			<li><form action="${path}/logout" method="post">
					<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
					<input class="menu-selector" id="logoutBtn" type="submit" value="Logout"/>
				</form>
			</li>
			<security:authorize access="hasRole('ROLE_ADMIN')">
				<li><a class="menu-selector" href="${path}/admin/mypage/index">Mypage</a></li>
			</security:authorize>
			<security:authorize access="hasRole('ROLE_MEMBER')">
				<li><a class="menu-selector" href="${path}/member/mypage/index">Mypage</a></li>
			</security:authorize>
		</security:authorize>
		<%-- </c:if> --%>
		<li><a class="menu-selector" href="#about">About</a></li>
		<li class="dropdown"> <a class="menu-selector" class="dropbtn">Board</a>
			<div class="dropdown-content">
				<security:authorize access="hasRole('ROLE_ADMIN')">
					<a href="${path}/admin/board/advice">Advice</a> 
					<a href="${path}/admin/board/voting">Voting</a> 
					<a href="${path}/admin/board/info">Info</a>
					<a href="${path}/admin/board/tip">Tip</a>
					<a href="${path}/admin/board/free">Free</a>
				</security:authorize>
				<security:authorize access="hasRole('ROLE_MEMBER') ">
					<a href="${path}/member/board/advice">Advice</a> 
					<a href="${path}/member/board/voting">Voting</a> 
					<a href="${path}/member/board/info">Info</a>
					<a href="${path}/member/board/tip">Tip</a>
					<a href="${path}/member/board/free">Free</a>
				</security:authorize>
			</div>
		</li>
		<li><a class="menu-selector active" href="${path}/index">Home</a></li>
	</ul> 

</div>
