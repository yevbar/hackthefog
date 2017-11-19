var myIndex = 0

function carousel(input) {
    var x = document.getElementsByClassName("info-tab");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    switch(input) {
      case "#info": {
        myIndex = 0;
        break;
      }
      case "#faq": {
        myIndex = 1;
        break;
      }
      case "#sponsors": {
        myIndex = 2;
        break;
      }
      default: {
        myIndex = 0;
        break;
      }
    }
    x[myIndex].style.display = "block";
}
