<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<script>
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#MOVE_TOP_BTN').fadeIn();
        } else {
            $('#MOVE_TOP_BTN').fadeOut();
        }
    });
    
    $("#MOVE_TOP_BTN").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

</script>
<html>
<main>
<table>
	<tbody>
		<tr>
			<th>제목</th>
			<td colspan="2">${v.title}</td>
		</tr>
		<tr>
			<th>조회수</th>
			<td>${v.hit}</td>
		</tr>
		<tr class="content">
			<td colspan="3"><c:forEach var="file" items="${files}"
					varStatus="s">
					<img src="upload/${file.src}" />
				</c:forEach> ${v.content}<br />
		</tr>
	</tbody>
</table>

<c:forEach var="pic" items="${pics}">
<div class="gallery">
	<a target="_blank" href="advice"> 
		<img src='${pic}' alt="Forest" width="300" height="200">
	</a>
	<div class="desc"><button id="" onclick="" name="">이거 사</button></div>
</div>
</c:forEach>

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
	<a href="../voting">목록</a>
</div>

<div>
	<a href="../voting/${v.id}/edit">수정하기</a>
	<a href="../voting/${v.id}/del">삭제하기</a>
</div>

<a id="MOVE_TOP_BTN" href="#">TOP</a>

</main>
</html>