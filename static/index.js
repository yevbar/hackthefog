function showSponsors() {
  document.getElementById("sponsors").style.zIndex = "1";
  document.getElementById("sponsors").style.height = "100%";
}

function hideSponsors() {
  document.getElementById("sponsors").style.height = "0%";
  document.getElementById("sponsors").style.zIndex = "0";
}

function showSchedule() {
  document.getElementById("schedule").style.height = "100%";
  document.getElementById("schedule").style.zIndex = "1";
}

function hideSchedule() {
  document.getElementById("schedule").style.height = "0%";
  document.getElementById("schedule").style.zIndex = "0";
}
