$(document).ready(function() {

  var vInterval = setInterval(function() { timeLoop(); }, 1000); // run every second
  var vWork = true;
  var vPomodoro = new Date();
  setTimer();

  function timeLoop() {
    if(vPomodoro.getMinutes() > 0 || vPomodoro.getSeconds() > 0) { //still time left
      vPomodoro.setSeconds(vPomodoro.getSeconds() - 1);
      $("#pomodoro-timer").html(pad(vPomodoro.getMinutes()) + ":" +  pad(vPomodoro.getSeconds()));
    } else
      setTimer();
  };

  function setTimer() {
    if (vWork) {
      $("#pomodoro-state").html("Work Time");
      vPomodoro = new Date(0, 0, 0, 0, 25, 00, 0);
      vWork = false;
    }
    else {
      $("#pomodoro-state").html("Break Time");
      vPomodoro = new Date(0, 0, 0, 0, 05, 00, 0);
      vWork = true;
    }

    $("#pomodoro-timer").html(pad(vPomodoro.getMinutes()) + ":" +  pad(vPomodoro.getSeconds()));
  }

  function pad(number) { return ("0" + number).slice(-2); }

  $("#reset-button").click(function() {
    vWork = true;
    setTimer();
  });
});