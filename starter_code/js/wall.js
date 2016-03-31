$(document).ready(function()
{
	$('#message').focus();

	$("#post-btn").click(function(){
		if($("#message").val() != ""){
			$("#msg").html("<p>"+ $("#message").val() +"</p>");
			var cpy = $("#tmplet").clone();
			cpy.css("display", "block");
			cpy.prependTo("#wall");
			$("#message").val("");
		}
	});
});
