//2016 08 06
//en fabrica de medios
//pagina web interactiva
//funciona con p5.js
//mi nombre es aaron

//setup() es la configuracion inicial
//se ejecuta una vez, al principio
//de los tiempos
var diametro;
diametro = 10;

function setup() {
  //aqui va lo que hace setup()

  //creamos un lienzo
  //createCanvas(dimHor, dimVer);
  //medido en px
  createCanvas(windowWidth, windowHeight);

  //los colores en p5.js
  //los valores van entre 0 y 255
  //1 -> grayscale, 0 es negro, 255 es blanco
  //2 -> grayscale + alpha, 0 es transp, 255 es solido
  //3 -> RGB, red, green, blue
  //4 -> RGB + alpha

  //pintar el fondo verde
  //background(color);
  background(0, 255, 0);
}

//draw() se ejecuta despues de setup()
//se ejecuta 60 veces por segundo
function draw() {
  var pepe;
  pepe = 25;
  background(0, 255, 0);

  //definir estilo de la elipse
  //definir ancho del borde
  //strokeWeight(px);
  //si queremos que no dibuje el borde
  //noStroke();
  estilo();

  //dibujar una elipse
  //ellipse(posX, posY, width, height);
  ellipse(mouseX, mouseY, diametro, diametro);
  //diametro = diametro + 1;
  if (mouseX > width/2) { 
    muchaselipses(0);
  }
  else {
    muchaselipses(1);
  }
}

function estilo () {
  strokeWeight(10);
  //definir el color del borde
  //stroke(color);
  stroke(0, 0, 255, 255/2);
  //definir el color del relleno
  //fill(color);
  fill(255, 0, 0, 255/2);
}

function muchaselipses(mytog) {
  var mycolor;
  if (mytog == 1) {
    mycolor = 1;
  } 
  else {
    mycolor = 255;
  }
  for (var i = 0; i < 100; i++) {
    noStroke();
    //fill(random(255),random(255),random(255),random(255));
    fill(mycolor,mycolor,255,255);
    ellipse(random(width),random(height),50,50);
  }
}
