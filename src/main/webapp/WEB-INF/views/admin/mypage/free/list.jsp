<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
$(function() {
	var submitBtn = $("form input[type='submit']");

	submitBtn.click(function(e) {
		if (!confirm("선택하신 게시글을 삭제하시겠습니까?")) {
			e.preventDefault();
		}
	});
});
</script>

<c:set var="ctx" value="${pageContext.request.contextPath}" />

<main>
목록을 누르면 자유 게시판에 해당 게시글로 이동됩니다.
<form method="get">
	<input type="text" name="query"/>
	<input type="submit" value="검색" />
</form>

<form method="post">
<table>
	<thead>
		<tr>
			<th>번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일</th>
			<th>조회수</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="f" items="${list}">
			<tr>
				<td>${f.id}</td>
				<td><a href="${ctx}/admin/mypage/free/${f.id}">${f.title}</a></td>
				<td><fmt:formatDate pattern="yyyy-MM-dd" value="${f.date}" />
				</td>
				<td>${f.hit}</td>
				<td><input type="checkbox" name="freeChk" value="${f.id}"/></td>
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
				<li><a class="${strong}" href="${ctx}/admin/mypage/free/?p=${startNum+i}">${startNum+i}</a></li>
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

<div>
	<a href="${ctx}/admin/mypage/free/reg">게시글 등록</a>
	<a href="${ctx}/admin/board/free">자유 게시판으로</a>
</div>
</main>