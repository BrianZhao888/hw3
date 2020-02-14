# hw3
Brian Zhao Computational Practice week3 homework

1.What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 70, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();
  }
  
2.What code makes the "lawnmower" come by? How often does it come by?
  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  The lawnmover comes by after the 1000th grass grows.
  
  3.What's the point of the h variable?
  h is the height which the grass will randomly increase 
  
  4.What does the -10 do ino the second and furth arguments of the line function, height-10-random(h)? Why is it there?
  It is the height which the grass will definitely increase. It is there because it will add on the height base on the height of the old grass.
