let xBolinha = 300
let yBolinha = 200
let dBolinha = 15

let xJogador = 585
let xInimigo = 5
let yInimigo = 140
let yJogador=140
let velJ = 4
let velI = 3
let alturaJ = 150
let totalY = yJogador* 2
let totalI = yInimigo * 2

let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoBolinha();
  mostraJogador();
  mostraInimigo();
  movInimigo();
  colisaoJ();
  colisaoI();
  incluiPlacar();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,dBolinha); 
} 

function movimentaBolinha(){
  xBolinha = xBolinha + velocidadexBolinha;
  yBolinha = yBolinha + velocidadeyBolinha;
}

function colisaoBolinha(){ //Faz o ponto ser de quem rebateu a bolinha na parede do adversário
  if (xBolinha >= width){
    xBolinha = 300; //Retorna a bolinha ao centro da tela para que o jogo continue
    yBolinha = 200;
    pontosDoOponente += 1; //Dá a pontuação ao inimmigo caso a bolinha bata na parede do jogador
  }
    if (yBolinha > height || yBolinha <0){
    velocidadeyBolinha *= -1;
  }
  if (xBolinha < 0){
    xBolinha = 300;
    yBolinha = 200;
    meusPontos +=1; //Dá a pontuação ao jogador caso a bolinha bata na parede do inimigo
  }
  if(meusPontos >=3){
    velI = 3.8;
  }
}

function mostraJogador(){ //Posiciona o jogador na tela e fornece seus movimentos
  rect(xJogador,yJogador,10,alturaJ)
  if (keyIsDown(UP_ARROW)){ 
    yJogador -= velJ;
    totalY -= velJ;
  } else if(keyIsDown(DOWN_ARROW)){
    yJogador +=velJ;
    totalY +=velJ
  }
  function keyReleased (){
    if (velJ === 5){
      velJ = 0;
    }
  }
}

function mostraInimigo(){ 
  rect(xInimigo,yInimigo,10,alturaJ)
}

function movInimigo(){ //Define o movimento do inimigo, que copia os movimentos da bolinha
  if (velocidadeyBolinha > 0){
    yInimigo += velI;
    totalI += velI;
  } else if(velocidadeyBolinha<0){
    yInimigo -= velI;
    totalI -= velI;
  }
  }
function colisaoJ(){ 
  if (xBolinha > xJogador && yBolinha>=yJogador && yBolinha && yBolinha<= totalY){
    velocidadexBolinha *= -1;
  }
}

function colisaoI(){
  if(xBolinha < 15 && yBolinha>= yInimigo && yBolinha <= totalI ){
    velocidadexBolinha *= -1;
  }
}

function incluiPlacar(){
  textAlign(CENTER);
  fill(color(255,140,0))
  rect(150,10,40,26);
  fill(255);
  text(pontosDoOponente, 170,26);
  fill(color(255,140,0))
  rect (450,10,40,26);
  fill (255);
  text(meusPontos, 470,26);
}