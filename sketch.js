function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(24);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(60, 205), random(0, 100), 200);
  fill(mouseY, 80, 10);
  circle(mouseX + 100, mouseY, mouseX);
  fill(0, 30, 50);
  rect(mouseX, mouseY, 100, 100);
}
