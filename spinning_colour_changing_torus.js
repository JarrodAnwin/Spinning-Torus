function setup() {
  
  createCanvas(windowWidth, windowHeight, WEBGL);
  
}

function draw() {
  
  background('#5600ff');
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(150, 75);
  fill(mouseX, mouseY, mouseX/mouseY);

}
