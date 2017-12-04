var myIndex = 0

function carousel(input) {
  $('html, body').animate({scrollTop: $(input).offset().top}, 800)
}
$(function() {

  //Animate showing answers on click
  $('.q').click(function(e) {
    $(e.target).toggleClass("animated bounce");

    var a = $(e.target).next('.a');

    if(a.css("width") == "0px"){
      a.animate(
        {
          width:"38%",
          height:"100%"
        },
        {
          complete: function(){
            a.animate({"font-size": "1em"});
          },
          start: function(){
            a.css("display", "inline-block")
          }
        }
      );
    } else {
      a.animate(
        {
          width:"0px",
          height:"0px"
        },
        {
          start: function(){
            a.animate({"font-size": "0px"});
          },
          complete: function(){
            a.css("display", "none");
          }
        }
      );
    }
  }
  );

});
