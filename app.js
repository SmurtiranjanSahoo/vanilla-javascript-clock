//selectors
var hourHand = document.querySelector(".hour");
var minuteHand = document.querySelector(".minute");
var secondHand = document.querySelector(".second");
var currentDate = document.querySelector(".date");
//function
function setClock() {
  // sec 6deg
  var date = new Date();
  currentDate.textContent =
    date.getDate() +
    "-" +
    "0" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear();
  var secondsRatio = date.getSeconds() / 60;
  var minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  var hourRatio = (minutesRatio + date.getHours()) / 12;

  secondHand.style.setProperty("--rotation", secondsRatio * 360);
  minuteHand.style.setProperty("--rotation", minutesRatio * 360);
  hourHand.style.setProperty("--rotation", hourRatio * 360);
  //console.log(seconds);
}
setClock();

setInterval(setClock, 1000);
