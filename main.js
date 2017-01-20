var canvas = document.getElementById("gC");  //The gamespace where we can draw
var ctx = canvas.getContext("2d"); //the render context of the gameCanvas

function drawCard(posX, posY){
  ctx.beginPath();
  ctx.rect(posX, posY, 40, 50);
  ctx.fillStyle = "#F0654B";
  ctx.fill();
  ctx.closePath();
}

function playTurn(){
  var x = document.getElementById("Debug");
  x.innerHTML = "You clicked on the Next Turn button"
}
