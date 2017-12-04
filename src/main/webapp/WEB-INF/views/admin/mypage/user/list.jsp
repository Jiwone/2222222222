<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
$(function() {
	var submitBtn = $("form input[value='삭제']");

	submitBtn.click(function(e) {
		if (!confirm("선택하신 게시글을 삭제하시겠습니까?")) {
			e.preventDefault();
		}
	});
});
</script>

<c:set var="ctx" value="${pageContext.request.contextPath}" />

<main>
<form method="get">
	<input type="text" name="q"/>
	<input type="submit" value="검색" />
</form>

<form method="post">
<table>
	<thead>
		<tr>
			<th>아이디</th>
			<th>이름</th>
			<th>별명</th>
			<th>휴대번호</th>
			<th>몸무게</th>
			<th>키</th>
			<th>권한</th>
			<th>삭제</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="u" items="${list}">
			<tr>
				<td><a href="${ctx}/admin/mypage/user/${u.id}/edit">${u.id}</a></td>
				<td>${u.name}</td>
				<td>${u.nickName}</td>
				<td>${u.phone}</td>
				<td>${u.weight}</td>
				<td>${u.height}</td>
				<td>${u.role}</td>
				<td><input type="checkbox" name="userChk" value="${u.id}"/></td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<ul>
<c:set var="page" value="${param.p}" /> 
<c:set var="startNum" value="${page-((page-1)%5)}" /> 
<c:set var="lastNum" value="${fn:substringBefore((count%10 == 0 ? count/10 : count/10 +1),'.')}" />

<c:if test="${startNum != 1}">
	<a href="?p=${startNum != 1}">이전</a>
</c:if>
		
		<c:forEach var="i" begin="0" end="4">	<!-- ${lastNum-1} -->
		
			<c:set var="strong" value="" />
			<c:if test="${page == startNum+i }">
				<c:set var="strong" value="text-strong" />
			</c:if>

			<c:if test="${startNum+i <= lastNum}">
				<li><a class="${strong}" href="${ctx}/admin/mypage/user/?p=${startNum+i}">${startNum+i}</a></li>
			</c:if>

			<!-- 	목록이 더이상 없으면 하이퍼링크 지움 -->
			<c:if test="${startNum+i > lastNum}">
				<li>${startNum+i}</li>
			</c:if>
			
		</c:forEach>
		
<c:if test="${lastNum >= startNum+5 }">
	<a href="?p=${startNum+5}">다음</a>
</c:if>
</ul>

<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
<input type="submit" value="삭제"/>

</form>

</main>