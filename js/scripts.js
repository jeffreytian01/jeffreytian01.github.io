var count1 = 0;
var count2 = 0;
var txt = "I am Jeffrey Tian.";
var txt2 = "Creator. Innovator. Entrepreneur."
var first = true;

function addArrow() {
  document.getElementsByClassName("arrow")[0].style.display = "inline";
}

window.onload = function typewriter() {
    if (count1 < txt.length && first) {
      document.getElementById("header-intro-1").innerHTML += txt.charAt(count1);
      count1++;
      setTimeout(typewriter, 60);
    }
    else {
        first = false;
        if (count2 < txt2.length) {
          document.getElementById("header-intro-2").innerHTML += txt2.charAt(count2);
          count2++;
          setTimeout(typewriter, 60);
        }
        else {
          setTimeout(addArrow, 300);
        }
    }
  }