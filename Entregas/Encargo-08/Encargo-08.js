  //Encargo: https://editor.p5js.org/Tanytanita/sketches/8R0hzecS5
  //implementar este rebote en el eje vertical
  //que además cambie de velocidad aleatoriamente
  //y que cambie el color del fondo
  //y que sea otra imagen y no akrila
  //opcional : que haya otra imagen de fondo

//------------------------- Etrega 08 ---------------------------------

//para cargar/llamar a las imágenes
let amongus;
let sus;

//-------------------------- AMONGUS -----------------------------------
//guardamos posición X de amongus en 0 para que aumente o disminuya mientras avanza
let posX = 0;
//guarda la dirección en X
let dirX = 1;
// controla la velocidad del movimiento en X por cada fotograma
let velocidadX = 2;
//-------------------------- AMONGUS -----------------------------------


//---------------------------- SUS -------------------------------------
//gaurdamos la posición de sus en 0 dentro de Y
let posY = 0;
// gaurda la dirección en Y
let dirY = 1;
//controla la velocidad del movimiento en Y por cada fotograma
let velocidadY = 2;
//---------------------------- SUS -------------------------------------

//carga el color del fondo en (250, n, n) en HSB
let colorFondo = 250;

//---------------------------- IMÁGENES ---------------------------------
// hace que los archivos se carguen antes de iniciar 
function preload(){ 
  
  //determino el nombre de mi imagen = loadImage(""); para cargar el enalce github de mi imagen
   amongus = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Encargo-08/Img/Amongus-Gif.gif");
   sus = loadImage("https://raw.githubusercontent.com/SoyTany/BITACORA_PENSAMIENTO_COMPUTACIONAL/main/Entregas/Encargo-08/Img/laRoca.gif");
}
//---------------------------- IMÁGENES ---------------------------------


//-------------------------- NUEVA FUNCIÓN ------------------------------
//le enseño una nueva función a p5j
function runColor() {
  //le digo a p5 que me genere un número al azar y que lo guarde constantemente en la nueva variable 
  velocidadY = random(1, 20);   
  //me genera otro número al azar para el HSB(H)  que se guarde en esta otra variable para el color
  colorFondo = random(0, 360);  
  //le pido un tercer número al azar y que lo guarde para esta tercer variable
  velocidadX = random(1, 20)
    }
//-------------------------- NUEVA FUNCIÓN ------------------------------


function setup() {
  createCanvas(400, 400);
  
  //cambio la lectura de color
  colorMode(HSB, 360, 100, 100, 100) 
  //cambio de radianes a grados
  angleMode(DEGREES)
}

function draw() {
  //ocupo mi variable colorFondo para cambiar el tono(H) y pintar el canvas
  background(colorFondo, 50, 100);
  
  //guías eje Y
  line(0, height * 1/5, width, height * 1/5);
  line(0, height * 4/5, width, height * 4/5);
  
  //guias eje X
  line(width * 1/5, 0, width * 1/5, height);
  line(width * 4/5, 0, width * 4/5, height);
 
  //image(cuál imagen coloco, ejeX, ejeY, ancho, alto);
  image(amongus, posX, posY, 100, 100);
  image(sus, 150, posY, 100, 100)
  
  //hago que la variable posX se sume con mi varaible de velocidad en X (random) y se multiplique por la dirección en X
posX = posX + velocidadX * dirX;
  
  if (posX > width * 4/5 - 100){ //si mi varaible posX es mayor a width * 4/5 menos el anchode la imagen para que rebote, cambia su dirección hacia el otro lado al ser negativa (dirX {dirección en ejeX} = -1 {Número negativo}
    dirX = -1; 
    runColor(); //aplicamos variable random para que cambie su velocidad aleatoriamente y además haga que el fondo cambie aleatoriamente por colorFondo
  }
  if (posX < width * 1/5){
    dirX = 1; 
    runColor();
  }
  
  //misma lógica pero en posY
  posY = posY + velocidadY * dirY;
  // Rebote inferior
  if (posY > height * 4/5 - 100){
    dirY = -1; 
    runColor(); 
  }
  
  if (posY < height * 1/5){
    dirY = 1; // Cambia hacia abajo
    runColor();
  }
}
