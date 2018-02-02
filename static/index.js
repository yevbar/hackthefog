function showSponsors() {
  $("#sponsors").css('zIndex', '1');
  $("#sponsors").animate({"height":"100%"}, 700).css('overflow', 'visible');
}

function hideSponsors() {
  $("#sponsors").animate({"height":"0%"}, 700, function(){
    $("#sponsors").css('zIndex', '0');
  }).css('overflow', 'visible');
}

function showSchedule() {
  $("#schedule").css({"zIndex":"1"});
  $("#schedule").animate({"height":"100%"}, 700).css('overflow', 'visible');
}

function hideSchedule() {
  $("#schedule").animate({"height":"0%"}, 700, function(){
    $("#schedule").css({"zIndex":"0"});
  }).css('overflow', 'visible');
}
