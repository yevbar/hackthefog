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
      }).toggleClass("animated bounceInRight");
      //If it has bounceOut class, remove it
      if (a.hasClass('flipOutX')) a.toggleClass('flipOutX');
    } else {
      a.toggleClass("bounceInRight flipOutX");
      $('#yourElement')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      , function(){
        a.css({visibility: "hidden"});
      });
    }
  });
});
