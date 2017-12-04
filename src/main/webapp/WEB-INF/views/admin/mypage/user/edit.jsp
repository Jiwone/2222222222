<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
<script type=text/javascript charset=utf-8 src="${pageContext.request.contextPath}/script/tinymce/js/tinymce/tinymce.min.js"></script>
<meta name="_csrf" content="${_csrf.token}"/>
<meta name="_csrf_header" content="${_csrf.headerName}"/>

<form action="edit" method="post">
	<table border="1">
		<tbody>
			<tr>
				<td>아이디</td>
				<td colspan="2">${u.id}</td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td colspan="2">
					<input type="text" name="pw" value="${u.pw}" />
				</td>
			</tr>
			<tr>
				<td>닉네임</td>
				<td colspan="2">
					<input type="text" name="nickName" value="${u.nickName}" />
				</td>
			</tr>
			<tr>
				<td>휴대번호</td>
				<td colspan="2">
					<input type="text" name="phone" value="${u.phone}" />
				</td>
			</tr>
			<tr>
				<td>몸무게</td>
				<td colspan="2">
					<input type="text" name="weight" value="${u.weight}" />
				</td>
			</tr>
			<tr>
				<td>키</td>
				<td colspan="2">
					<input type="text" name="height" value="${u.height}" />
				</td>
			</tr>
		</tbody>
	</table>

	<div class="btns">
		<%-- <input type="hidden" name="code" value="${n.code}" />  --%>
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
		<input id="set-data-btn" type="submit" value="저장" /><%--  <a href="notice-detail?code=${n.code}">취소</a> --%>
		<a href="..">취소</a>
	</div>
</form>





