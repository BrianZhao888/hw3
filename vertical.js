var ballX = 0;
var ballXSpeed = 5


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  ellipse(200, ballX, 30);

  ballX = ballX + ballXSpeed;

  if (ballX > height) {
    //ballX=0;
    //ballX = ballX-90;
    ballXSpeed = -ballXSpeed;
  }

  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
}
}
