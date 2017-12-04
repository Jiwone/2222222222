<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<main>
<table>
	<tbody>
		<tr>
			<th>제목</th>
			<td colspan="2">${a.title}</td>
		</tr>
		<tr>
			<th>작성일</th>
			<td colspan="2">
				<fmt:formatDate pattern="yyyy-MM-dd" value="${a.date}" />
			</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${a.writerId}</td>
			<th>조회수</th>
			<td>${a.hit}</td>
		</tr>
		<%-- <tr>
			<th>첨부파일</th>
			<td colspan="3">
				<c:forEach var="file" items="${files}" varStatus="s">
					<a href="../download?f=${file.src}">${file.src}</a>
					<c:if test="${!s.last}">,</c:if>
				</c:forEach>
			</td>
		</tr> --%>
		<tr class="content">
			<td colspan="3"><c:forEach var="file" items="${files}"
					varStatus="s">
					<img src="upload/${file.src}" />
				</c:forEach> ${a.content}<br />
		</tr>
		<tr>
			<td colspan="3">
				<c:forEach var="prevAdvice" items="${prevlist}">
					${prevAdvice.title} ~
				</c:forEach>
			</td>
		</tr>
	</tbody>
</table>

<table>
	<tbody>
		<c:if test="${empty next}">
			<tr>
				<th>다음글</th>
				<td colspan="3">다음글이 없습니다.</td>
			</tr>
		</c:if>
		<c:if test="${not empty next}">
			<tr>
				<th>다음글</th>
				<td colspan="3">
					<a href="${next.id}">${next.title}</a>
				</td>
			</tr>
		</c:if>
		<c:if test="${empty prev}">
			<tr>
				<th>이전글</th>
				<td colspan="3">이전글이 없습니다.</td>
			</tr>
		</c:if>
		<c:if test="${not empty prev}">
			<tr>
				<th>이전글</th>
				<td colspan="3">
					<a href="${prev.id}">${prev.title}</a>
				</td>
			</tr>
		</c:if>
	</tbody>
</table>

<div>
	<a href="../advice">목록</a>
</div>

<div>
	<a href="../advice/${a.id}/edit">수정하기</a>
	<a href="../advice/${a.id}/del">삭제하기</a>
</div>

</main>