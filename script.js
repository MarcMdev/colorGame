var numbSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDiplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //modeButtons EventListeners
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for(var i=0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      this.textContent === "Easy" ? numbSquares = 3: numbSquares = 6;
      reset();
    })
  };
}

function setUpSquares(){
  for(var i = 0; i<squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to  pickedColor
      if(clickedColor === pickedColor){
        messageDiplay.textContent = "Correct!"
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }else {
        this.style.backgroundColor = "#232323";
        messageDiplay.textContent = "Try Again!"
      }
    })
  };
}

function reset(){
  colors = generateRandomColors(numbSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDiplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  for(var i = 0; i < num; i++){
    // add random colors to the array
    arr.push(randomColor())
  }
  //return array
  return arr
}

function randomColor(){
  //pick "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

