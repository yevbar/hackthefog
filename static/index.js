var myIndex = 0

function carousel(input) {
  $('html, body').animate({scrollTop: $(input).offset().top}, 800)
}
$(function() {

  //Variable for the innerHTML of the .a elements
  var answers = [];
  document.getElementsByClassName('a').forEach(function(item, index){
    answers[index] = item;
    document.getElementsByClassName('a')[index] = "";
  });

  //Animate showing answers on click
  $('.q').click(function(e) {
    var a = $(e.target).next('.a');

    if(a.css("width") == "0px"){
      a.animate(
        {
          width:"48%"
        },
        {
          complete: function(){
            a.css("display", "inline-block");
            var index = $('.q').toArray().forEach(function(item, index){
              if ($('.q').toArray()[index] === e.target) return index;
            });
            a.HTML(answers[index]);
          }
        }
      );
    } else {
      a.animate(
        {
          width:"0%"
        },
        {
          start: function(){
            a.HTML("");
            a.css("display", "none");
          }
        }
      );
    }
  }
  );

  //Animate questions on hover
  $('.q').hover(function(e){
    //Add animate.css class
    $(e.target).addClass("animated bounce");
    //Remove on animation end
    $(e.target).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    , function(){
      $(e.target).removeClass("animated bounce");
    });
  }, function(e){})
});
