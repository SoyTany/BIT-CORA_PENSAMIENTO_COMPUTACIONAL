//Enlace: https://editor.p5js.org/Tanytanita/sketches/5JzupKuou

function setup() {
  createCanvas(400, 600);
//crea el recuadro/página en el que vamos a trabajar
}

function draw() {
  colorMode (HSB, 360, 100, 100, 100);
//transferimos el sistema de color a HSB para controlar mejor el tono, la saturación //y el brillo
  background(38, 33, 87); 
//indicamos el color del fondo
  
 //         Rojo 9,86,85 // beige 38,33,87 // black 20,55,10
  
angleMode(DEGREES);
//Abre el uso de grados en vez de radianes para facilitar las rotacines
  
scale(0.82); 
//permite achicar a escala todos los elementos del canvas sin mover pieza por pieza
  
push(); //triángulos de fondo beige crema
//push(); comando para encerrar uno o varios elementos dentro de un parámetro sin que //el rsto de elementos se vea afectado
  noStroke(); 
  //elimina el borde de un elemento
  fill(38, 33, 92); 
  //rellena un elemento con unc color
  triangle(270, -20, 358, 300, 495, -20);
  triangle(-100, 460, 350, 350, -110, 630);
  triangle(360, 800, 358, 300, 600, 800);
pop();
  
push(); //Linea vertical
  stroke(38, 40, 70);
  //color de linea
  strokeWeight(1);
  //tamaño de línea
  strokeCap(SQUARE);
  //acabado de las puntas de la linea
  line(20, 300, 20, 580);
pop();
  
push(); //línea horizontal
  stroke(38, 40, 70);
  strokeWeight(1);
  //grosor de linea
  strokeCap(SQUARE);
  line(50, 710, 480, 710);
pop();
 
push(); //rectángulo izquierdo
rectMode(CENTER);
//al dibujar un rectángulo lo hacemos desde el centro del canvas y se forma desde el //centro de dicho rectángulo
translate(width/2, height/2);
//trasladamos el origen 0,0 al centro del canvas
  rotate(17);
//rota la figura, por defecto en radianes
  fill(20, 55, 10);
  strokeWeight(0);
  rect(-150, 48, 840, 50);
pop();
  
push(); //rectángulo derecho
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  rotate(47);
  fill(20, 55, 10);
  strokeWeight(0);
  rect(-130, -130, 750, 50);
pop();
  
push(); //linea roja primera
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  rotate(120);
  fill(9, 86, 85);
  strokeWeight(0);
  triangle(4, 350, -38, -258, 90, 320);
pop();
  
push(); //linea roja tercera
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  rotate(120);
  fill(9, 86, 85);
  strokeWeight(0);
  triangle(-210, 350, 8, -380, -120, 350);
pop();
  
push(); //línea roja media
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  rotate(119);
  fill(9, 86, 85);
  strokeWeight(0);
  triangle(-110, 300, -32, -120, -12, 250);
pop();
  
push(); //cubierta de diagonales sobresalientes
rectMode(CENTER);
translate(width/2, height/2);
rotate(56)
  noStroke();
  fill(38, 33, 87);
  square(280, -162, 100);
pop();
  
//  RECORDATORIO DE COLOR: Rojo 9, 86, 85 // beige 38, 33, 87 // black 20, 55, 10
  
push(); //cículo exterior beige
translate(width/2, height/2);
  noStroke();
  fill(38, 33, 87);
  circle(150, 40, 280);
pop();
  
push(); //círculo negro
translate(width/2, height/2);
  noStroke();
  fill(20, 55, 10);
  circle(150, 40, 260);
pop();
  
push(); //círculo medio beige
translate(width/2, height/2);
  noStroke();
  fill(38, 33, 87);
  circle(150, 40, 236);
pop();
  
push(); //Línea negra del círculo
translate(width/2, height/2);
  stroke(20, 55, 10);
  strokeWeight(54);
  strokeCap(PROJECT);
  line(177, 33, -53, 500);
pop();
  
push(); //círculo rojo exterior
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  noStroke();
  fill(9, 86, 85);
  circle(150, 40, 210);
pop();
  
push(); //Línea roja del cículo
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  stroke(9, 86, 85);
  strokeWeight(70);
  strokeCap(PROJECT);
  line(109, 33, -122, 500);
pop();
  
push(); //círculo beige interior
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  noStroke();
  fill(38, 33, 87);
  circle(150, 40, 180);
pop();
  
push(); //círculo rojo interior
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  noStroke();
  fill(9, 86, 85);
  circle(150, 40, 150);
pop();
  
  //----------------------------------------------------------------------
  //                           SECCIÓN DE TEXTO
  //         Rojo 9, 86, 85 // beige 38, 33, 87 // black 20, 55, 10
  
// FRASE REFERENCIA; "La arquitectura es la organización de la vida", Moisei //Ginzburg, 1924.   
//Porque actualmente casi todo con lo que interactuamos tiene un //código prehecho para que funcione.
//Fue el que diseñó el edificio Narkomfin en Moscú, que era como una 'máquina para //vivir', igual que nosotros hoy diseñamos 'máquinas de código' para interactuar".
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  //permite escoger la tipografía
  textStyle(BOLD);
  //permite escoger el estilo de la tipografía
  rotate(-63.5);
  textSize(40);
  //determina el tamaño del texto
  fill(38, 33, 87);
  //da color al texto
  text("ARQUITECTURA", -433, 138);
pop();
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
  rotate(-63.5);
  textSize(26);
  fill(9, 86, 85);
  text("PARA EL PUEBLO", -315, 191);
pop();
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
  rotate(43);
  textSize(34);
  fill(38, 33, 87);
  text("EL CÓDIGO", -265, -59);
pop();
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
rotate(32);
  textSize(20);
  fill(20, 55, 10);
  text("ES  LA", -68, -28);
pop();
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
rotate(21);
  textSize(30);
  fill(38, 33, 87);
  text("N U E V A", -135, 17);
pop();
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
rotate(17);
  textSize(11);
  fill(9, 86, 85);
  text("La arquitectura es la", -98, 88);
pop();

push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
rotate(-63);
  textSize(11);
  fill(9, 86, 85);
  text("organización de la vida", -244, 75);
pop();
  
push();
angleMode(DEGREES);
rectMode(CENTER);
translate(width/2, height/2);
  textFont("Boldonse");
  textStyle(BOLD);
rotate(-22);
  textSize(15);
  fill(20, 55, 10);
  text("1974, MOISEI GINZBURG", -245, 111);
pop();
  
  //                          FIN SECCIÓN DE TEXTO 
  //         Rojo 9, 86, 85 // beige 38, 33, 87 // black 20, 55, 10
  //--------------------------------------------------------------------
  
  
}
