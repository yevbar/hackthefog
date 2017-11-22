var myIndex = 0

function carousel(input) {
  $('html, body').animate({scrollTop: $(input).offset().top}, 800)
}
$(function() {
	$("#visible").click(function() {
		$('#invisible').toggleClass("show");
	});
});
