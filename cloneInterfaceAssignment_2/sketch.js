function setup() {
  //   createCanvas(500, 800);
  createCanvas(window.innerWidth, window.innerHeight);
  background(200, 100, 100);
}

function draw() {
  fill(200, 100, 100);
  strokeWeight(2);
  stroke(200, 255, 0);

  //   diameter = (mouseY - pmouseY) / (mouseX / pmouseX);
  let diameter = dist(mouseX, mouseY, pmouseX, pmouseY) * 2;
  //you can do whatever u want with the mouseX mouseY pmouseX pmouseY
  //values and dont have to use all of them for diff effects

  circle(mouseX, mouseY, diameter);
  //pmouseX gives you previous mouseX position
}
