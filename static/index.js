var myIndex = 0

function carousel(input) {
  $('html, body').animate({scrollTop: $(input).offset().top}, 800)
}
$(function() {
  //Animate showing answers on click
  $('.q').click(function(e) {
    $(e.target).next('.a').animate({
      opacity: "toggle"
    }).css({
      display: "inline-block"
    });
  });
});
