
$(document).ready(function(){

	$("#regForm").submit(function(e){

		
		tinyMCE.triggerSave();
		
		var content = tinymce.get("elm1").getContent();

		alert(content);
		$("#data-container").html(content);

		return false;

	});

});