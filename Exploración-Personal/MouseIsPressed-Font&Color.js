//--------------------VARIABLES---------------------
let color = 200
let tipografia = "Playwrite GB S Guides";

//--------------------CONFIGURACIÓN BASE---------------------
function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
}

//--------------------DRAW---------------------
function draw() {
  background(200, 50, 90);
  
// si ambos complementos (&&) son verdaderos cuando 1era y 2da condición se cumplen 
  
//--------------------IF COLOR---------------------
  if(mouseIsPressed && mouseX < width/2 && mouseY > height/2){
      color = 60; //amarillo
    } else if(mouseIsPressed && mouseX > width/2 && mouseY > height/2){
      color = 300; //magenta
    } else if(mouseIsPressed && mouseX < width/2 && mouseY < height/2){
      color = 360; //rojo
    } else if(mouseIsPressed && mouseX > width/2 && mouseY < height/2){
      color = 100; //verde
    } else { //sin presionar
      color = 200; //azul
}
  
//--------------------IF FONT---------------------
  if(mouseIsPressed && mouseX < width/2 & mouseY > height/2){
     tipografia = "Nabla";
    } else if(mouseIsPressed && mouseX > width/2 && mouseY > height/2){
      tipografia = "Kablammo";
    } else if(mouseIsPressed && mouseX < width/2 && mouseY < height/2){
      tipografia = "Coral Pixels";
    } else if(mouseIsPressed && mouseX > width/2 && mouseY < height/2){
      tipografia = "Blaka Ink";
    } else {
      tipografia = "Playwrite GB S Guides";
}
  
//--------------------CIRCLE---------------------
push();
  noStroke();
  fill(color, 100, 100);
  circle(width/2, height/2, 100);
pop();
  
//--------------------TEXT MOUSE X/Y---------------------
push();
  translate(width/2, height/2);
  fill(color, 100, 100);
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER);
  text("mouseIsPressed", mouseX-250, mouseY-250);
pop();
  
//--------------------CAMBIO TIPOGRÁFICO---------------------
//Tipografías: Playwrite GB S Guides, Boldonse, Kablammo, Coral Pixels, Blaka Ink, Nabla
  
push();
  translate(width/2, height/2);
  fill(color, 100, 100);
  textAlign(CENTER);
  textStyle(ITALIC);
  textSize(20);
  textFont(tipografia);
  text("Haz click en cualquier lado", 0, 100);
pop();

}
