
// Setting Session Timer
$("#minutes").html($("#sessionLength").html());

// Break Length
$("#breakMinus").click( () => {
  if ($("#breakLength").html() > 0) {
    document.getElementById("breakLength").innerHTML--;   
    timeleft2 = $("#breakLength").html();
  }
});
$("#breakPlus").click( () => {
  document.getElementById("breakLength").innerHTML++;
  timeleft2 = $("#breakLength").html();
});

// Session Length
$("#sessionMinus").click( () => {
  if ($("#sessionLength").html() > 0) {
    document.getElementById("sessionLength").innerHTML--;
    $("#minutes").html($("#sessionLength").html());
    minutes = $("#minutes").html();
    timeleft3 = $("#sessionLength").html();
  }
});
$("#sessionPlus").click( () => {
  document.getElementById("sessionLength").innerHTML++;  
  $("#minutes").html($("#sessionLength").html());
  minutes = $("#minutes").html();
  timeleft3 = $("#sessionLength").html();
});


//variables
var minutes = $("#minutes").html();
var timeleft = 60;
var timeleft2 = $("#breakLength").html();
var timeleft3 = $("#sessionLength").html();
var sSwitch = 1;
var resetPom = 1;
var pauseStatus = false;
var resetStatus = false;
var end = 0;



//Session
startButton.onclick = () => {

  $("#sessionPlus").prop('disabled', true)
  $("#sessionMinus").prop('disabled', true)
  $("#breakPlus").prop('disabled', true)
  $("#breakMinus").prop('disabled', true)
  $("#startButton").prop('disabled', true)

  // pause
  pauseButton.onclick = () => {
    pauseStatus = true;
  };

  // reset
  resetButton.onclick = () => {
    $("#seconds").html('00');
    $("#minutes").html($("#sessionLength").html());
    timeleft = 60;
    timeleft2 = $("#breakLength").html();
    timeleft3 = $("#sessionLength").html();
    minutes = $("#sessionLength").html();
    sSwitch = 1;
    resetStatus = true;

    $("#sessionPlus").prop('disabled', false);
    $("#sessionMinus").prop('disabled', false);
    $("#breakPlus").prop('disabled', false);
    $("#breakMinus").prop('disabled', false);
  };

  //Resume
  resume.onclick = () => {
    pauseStatus = false;
    resetStatus = false;
    $("#sessionPlus").prop('disabled', true)
    $("#sessionMinus").prop('disabled', true)
    $("#breakPlus").prop('disabled', true)
    $("#breakMinus").prop('disabled', true)
  };


  //timer
  var pomodoroTimer = setInterval( (end) => {
    // resume
    if (pauseStatus === false && resetStatus === false) {
      // starting decreases the first minute
      $("#minutes").html(minutes - 1);

      timeleft--;

      // how to handle the first digit in seconds
      if (timeleft < 10) {
        $("#seconds").html("0" + timeleft);
      } else {
        $("#seconds").html(timeleft);
      } // end of how to handle the first digit in seconds

      // time = 0
      if (timeleft <= 0) {
        // decrease minutes
        minutes--;
        $("#minutes").html(minutes);

        //reset seconds
        timeleft = 60;

        //switch between session and break
        if (minutes <= 0) {
          sSwitch = sSwitch * -1;
          if (sSwitch < 0) {
            document.getElementById("beep").play();
            minutes = timeleft2;
            $("#minutes").html(timeleft2);
          } else {
            document.getElementById("beep").play();
            minutes = timeleft3;
            $("#minutes").html(timeleft3);
          }
        }

        setInterval(pomodoroTimer);
      } // end of time = 0
    } // end of pause
  }, 1000); // end of pomodoro timer
}; // end of session.onclick