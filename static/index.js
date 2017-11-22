var myIndex = 0

function carousel(input) {
  $('html, body').animate({scrollTop: $(input).offset().top}, 800)
}
$(function() {
	$("#q1").click(function() {
		$('#a1').toggleClass("show");
	});
});
