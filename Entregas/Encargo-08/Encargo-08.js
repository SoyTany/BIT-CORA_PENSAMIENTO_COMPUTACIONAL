let amongus;
let sus;
let velocidadX = 2;

// vamos a cambiar la posicion de amongus
let posX = 0;
let dirX = 1;
// posición sus
let posY = 0;
let dirY = 1;
let velocidadY = 2;
let colorFondo = 250;

function preload(){ //para cargar archivos pesados antes de que el programa comience a ejecutarse
   amongus = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Encargo-08/Img/Amongus-Gif.gif");
   sus = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Encargo-08/Img/laRoca.gif");
}

function runColor() {
  velocidadY = random(1, 20);      
  colorFondo = random(0, 360);  
  velocidadX = random(1, 20)
    }

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100)
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(colorFondo, 50, 100);
  
  //guías eje Y
  line(0, height * 1/5, width, height * 1/5);
  line(0, height * 4/5, width, height * 4/5);
  
  //guias eje X
  line(width * 1/5, 0, width * 1/5, height);
  line(width * 4/5, 0, width * 4/5, height);
  
  image(amongus, posX, posY, 100, 100);
  image(sus, 150, posY, 100, 100)
  
posX = posX + velocidadX * dirX;
  
  if (posX > width * 4/5 - 100){
    dirX = -1; 
    runColor();
  }
  if (posX < width * 1/5){
    dirX = 1; 
    runColor();
  }
  
  posY = posY + velocidadY * dirY;
  // Rebote inferior
  if (posY > height * 4/5 - 100){
    dirY = -1; // Cambia el rebote en el eje Y
    runColor(); 
  }
  // Rebote superior
  if (posY < height * 1/5){
    dirY = 1; // Cambia rebote hacia abajo
    runColor();
}
 
  //desafío:
  //implementar este rebote en el eje vertical
  //que además cambie de velocidad aleatoriamente
  //y que cambie el color del fondo
  //y que sea otra imagen y no akrila
  //opcional : que haya otra imagen de fondo
  
}

