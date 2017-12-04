<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<meta name="_csrf" content="${_csrf.token}"/>
<meta name="_csrf_header" content="${_csrf.headerName}"/>

<c:set var="ctx" value="${pageContext.request.contextPath}" />

<link rel="stylesheet" type="text/css" href="${ctx}/resource/css/board/advice.css">

<form method="get">
	<input type="text" name="q" /> <input type="submit" value="검색" />
</form>

<table id="table" class="table">
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
		<c:forEach var="a" items="${list}">
			<tr>
				<td>${a.id}</td>
				<td><a href="${ctx}/admin/board/advice/${a.id}">${a.title}</a></td>
				<td><fmt:formatDate pattern="yyyy-MM-dd" value="${a.date}" />
				</td>
				<td>${a.writerId}</td>
				<td>${a.hit}</td>	
				<td>
				</td>
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
				<li><a class="${strong}" href="${ctx}/admin/board/advice/?p=${startNum+i}">${startNum+i}</a></li>
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

<div>
	<a href="${ctx}/admin/board/advice/reg">추가하기</a>
</div>

</main>