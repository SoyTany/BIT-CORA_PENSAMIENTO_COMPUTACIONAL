//Encargo 06 de la Unidad 02
//Encargo: Hacer que formas primitivas varíen en el tiempo, cambiando características basandose en la realización de comportamientos variables. **Implementar 3 de ellas**.
//Enlace: https://editor.p5js.org/Tanytanita/sketches/kSCm10VFr

function setup() {
  createCanvas(600, 450);
  angleMode(DEGREES);
  frameRate(50);
}

function draw() {
  background(220);
  colorMode(HSB, 360, 100, 100, 100);
  background(38, 33, 87); 
  
push();
  stroke(random(100,360), 40, 200);
  strokeWeight(500);
  point(mouseX, height/2);
pop();
  
push();
  textFont("Boldonse");
  textStyle(BOLD);
  textSize(35);
  fill(random(120,200), 50, 100);
  noStroke();
  text("SOY un ARCOÍRIS", width/2-190, mouseY);
pop();
  
}
