var myIndex = 0

function carousel(input) {
  $('html, body').animate({scrollTop: $(input).offset().top}, 800)
}
$(function() {
  //Animate showing answers on click
  $('.q').click(function(e) {
    var a = $(e.target).next('.a');

    if (a.css('visibility') == 'hidden'){
      //Animate it to bounce in if it isn't visible
      a.css({
        visibility: "visible"
      }).addClass("animated flipInX")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
        , function(){
            a.removeClass('animated flipInX');
      });
    } else {
      a.addClass("animated flipOutX")
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
        , function(){
          a.css({visibility: "hidden"})
            .removeClass('animated flipOutX');
      });
    }
  });
});
