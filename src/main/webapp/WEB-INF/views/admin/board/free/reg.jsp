<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
<script type=text/javascript charset=utf-8 src="${pageContext.request.contextPath}/script/tinymce/js/tinymce/tinymce.min.js"></script>
<meta name="_csrf" content="${_csrf.token}"/>
<meta name="_csrf_header" content="${_csrf.headerName}"/>

<script type="text/javascript">
var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");
    tinymce.init({
        selector: "textarea#elm1",
        language : 'ko_KR',
        theme: "modern",
        width: 800,
        height: 550,
        plugins: [
             "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
             "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
             "save table contextmenu directionality emoticons template paste textcolor"
       ],
       content_css: "css/content.css",
       toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons | table link media custom_image code ", 
       image_title: true, 
       automatic_uploads: true,
       file_picker_types: 'image',
       style_formats: [
            {title: 'Bold text', inline: 'b'},
            {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
            {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
            {title: 'Example 1', inline: 'span', classes: 'example1'},
            {title: 'Example 2', inline: 'span', classes: 'example2'},
            {title: 'Table styles'},
            {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
        ],
        
        file_picker_callback: function(cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.onchange = function() {
              console.log(this.files);
              var file = this.files[0];
              
              var reader = new FileReader();
              reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
            
            input.click();
          }
      
    }); 
    
    	
    	$(document).ready(function(){
    		$("#regForm").submit(function(e){
    			$("#tinymce").val("content");
    	 		var content=$("textarea").val();
    	    	tinymce.get("elm1").setContent(content);
    			tinyMCE.triggerSave();
    	
    			content = tinymce.get("elm1").getContent();
    	
    		});
    	});
    	
    	
</script>

<script type="text/javascript">
$(function() {
	var titleText = $("form input[name='title']");
	var submitBtn = $("form input[type='submit']");
	var cancelBtn = $(".btns a");

	submitBtn.click(function(e) {
		if (titleText.val() == "") {
			alert("제목을 입력하세요.");
			e.preventDefault();
		}
	});

	cancelBtn.click(function(e) {
		if (!confirm("작성중이던 입력을 취소하시겠습니까?")){
			if (titleText.val() == "") {
				alert("제목을 입력하세요.");
			}
			else
				e.preventDefault();
		}
	});
});
</script>

<form action="?${_csrf.parameterName}=${_csrf.token}" method="post"
	enctype="multipart/form-data">
	<table border="1">
		<tbody>
			<tr>
				<td>제목</td>
				<td><input type="text" name="title" /></td>
			</tr>
			<tr>
				<td colspan="2"><textarea id="elm1" name="content" rows="20" cols="60"></textarea>

				</td>
			</tr>
		</tbody>
	</table>

	<div class="btns">
<%-- 		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />  --%>
		<input id="set-data-btn" type="submit" value="등록" /> 
		<a href="../free">취소</a>
	</div>
</form>