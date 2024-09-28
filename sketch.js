//TRABAJO EN CLASE
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   //frameRate(24);
//   background(0);
//   rectMode(CENTER);
// }

// function draw() {
//   background(random(60, 205), random(0, 100), 200, 40);

//   strokeWeight(5);
//   noFill();
//   //fill(mouseY, 80, 10);
//   stroke(mouseY, 80, 10);
//   circle(mouseX + 100, mouseY, mouseX);

//   strokeWeight(1);
//   stroke(0, 30, 50);
//   //fill(0, 30, 50);
//   rect(mouseX, mouseY, 100, 100);
// }

//AMONG US

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
//   rectMode(CENTER);
// }

// function draw() {
//   background(0);

//   noStroke();
//   fill(217, 22, 86);
//   rect(mouseX - 45, mouseY + 6, 40, 65, 20, 0, 0, 20);
//   rect(mouseX, mouseY, 70, 100, 40, 40, 0, 0);
//   fill(245, 245, 247);
//   rect(mouseX + 20, mouseY - 10, 45, 25, 40);
//   fill(217, 22, 86);
//   rect(mouseX + 22.5, mouseY + 60, 25, 40);
//   rect(mouseX - 22.5, mouseY + 60, 25, 40);
// }

//POCHITA

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
}

function draw() {
  background(random(10, 200), random(0, 100), 255, 60);

  noStroke();
  fill(200, 22, 86);
  rect(mouseX - 45, mouseY + 6, 40, 65, 20, 0, 0, 20); //mochila
  rect(mouseX, mouseY, 70, 100, 40, 40, 0, 0); //cuerpo
  fill(255, 22, 86);
  rect(mouseX, mouseY - 10, 70, 80, 40, 40, 0, 100); //sombra
  fill(245, 245, 247);
  rect(mouseX + 20, mouseY - 10, 45, 25, 40); //lente
  fill(104, 109, 118);
  rect(mouseX + 25, mouseY - 13, 20, 5, 40); //Reflejo
  fill(200, 22, 86);
  rect(mouseX + 22.5, mouseY + 60, 25, 40); // P.1
  rect(mouseX - 22.5, mouseY + 60, 25, 40); //P.2
}
