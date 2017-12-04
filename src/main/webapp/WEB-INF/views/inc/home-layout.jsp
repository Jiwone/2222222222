<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
<link rel="stylesheet" type="text/css" href="${ctx}/resource/css/home-layout.css">
</head>
<body>
	<!-- header 부분 -->
	<!-- --------------------------- <body> --------------------------------------- -->

	<!-- content 부분 -->
	<tiles:insertAttribute name="main" />	
	
	<!-- ------------------- <footer> --------------------------------------- -->
	<tiles:insertAttribute name="footer" />
</body>
</html>