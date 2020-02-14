var ballX = 0;
var ballXSpeed = 5

var ballX2 = 0;
var ballX2Speed = 3


var ballX3 = 0;
var ballX3Speed = 6

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(200);
  ellipse(ballX, 220, 35);
  ellipse(ballX2,400, 25);
  ellipse(145, ballX3, 35);

  ballX3 = ballX3 + ballX3Speed;
  ballX2 = ballX2 + ballX2Speed;
  ballX = ballX + ballXSpeed;


  if (ballX > width) {
    //ballX=0;
    //ballX = ballX-90;
    ballXSpeed = -ballXSpeed;
  }
  if (ballX2 > width) {
    //ballX=0;
    //ballX = ballX-90;
    ballX2Speed = -ballX2Speed;
  }
  if (ballX3 > height) {
    ballX3Speed = -ballX3Speed;
  }
  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
  if (ballX2 < 0) {
    ballX2Speed = -ballX2Speed;
  }
  if (ballX3 < 0) {
    ballX3Speed = -ballX3Speed;
  }
}
