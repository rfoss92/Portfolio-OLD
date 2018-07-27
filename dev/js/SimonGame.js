// disable buttons when showing sequence

//variables
var colorArray = ["green", "red", "yellow", "blue"];
var randomColorArray = [];
var playerArray = [];
var flashInterval;
var compInterval;
var counter = 1;
var playerCorrect = true;
var strictOn = 1;
var current = 0;

$("#colorButtons button").click( function(){
  yourMove(this.id);
});

//buttons off until start
$("#green").prop('disabled', true)
$("#red").prop('disabled', true)
$("#yellow").prop('disabled', true)
$("#blue").prop('disabled', true)

$("#strict").click(strict);
$("#reset").click(reset);
$("#start").click(start);

function strict() {
  if (strictOn === 1){
    strictOn = strictOn * (-1);
    $("h1").html("STRICT");
    reset(); 
  } else {
    strictOn = strictOn * (-1);
    $("h1").html("SIMON"); 
    reset();         
  }
}

function reset() {
  randomColorArray = [];
  playerArray = [];
  flashInterval;
  compInterval;
  counter = 1;
  $("#counter").html(counter);  
  playerCorrect = true;
  $("#start").prop('disabled', false)
}


//starting the game
function start() {

  //get a random color and add to array
  if (playerCorrect === true) {
    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    randomColorArray.push(randomColor);
  }

  //flash the button
  function myFlash() {           
    $("#counter").html(counter);
    clearInterval(flashInterval);
    clearInterval(compInterval);
    var element = document.getElementById(randomColorArray[i]);
    element.style.background = randomColorArray[i];
    document.getElementById("beep" + colorArray.indexOf(randomColorArray[i])).play();
    compInterval = setInterval(function() {
      element.style.background = "";
    }, 500);
  }

  var i = 0;

  function myLoop() {
    setTimeout(function() {
      myFlash();
      i++;
      if (i < randomColorArray.length) {
        myLoop();
      }
    }, 1000);
  }

  myLoop();

  //change default button settings
  $("#start").prop('disabled', true)
  $("#green").prop('disabled', false)
  $("#red").prop('disabled', false)
  $("#yellow").prop('disabled', false)
  $("#blue").prop('disabled', false)
}

//payer move
function yourMove(ID) {
  clearInterval(flashInterval);
  clearInterval(compInterval);
  //flash the color
  var element = document.getElementById(ID);
  element.style.background = ID;
  document.getElementById("beep" + colorArray.indexOf(ID)).play();
  flashInterval = setInterval(function() {
  element.style.background = "";
  }, 250);

  playerArray.push(ID);

  if (playerArray[current] !== randomColorArray[current]) {
    $("#counter").html("WRONG!");
    current = 0;
    playerArray = [];
    flashInterval;
    compInterval;
    playerCorrect = false;
    if(strictOn === (-1)){     
      reset();
      start();
    }else{
      console.log(randomColorArray);
      start();
    }
  } else if(playerArray.length === 20){
      alert("YOU WIN!");
    reset();
     }else {
    current = current + 1;
    if (playerArray.length === randomColorArray.length) {
      current = 0;
      playerArray = [];
      counter = counter + 1;
      $("#counter").html(counter);
      playerCorrect = true;
      start();
    }
  }
}
