var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale=1.1

//criando o sprite do jogador

player=createSprite(displayWidth-1150,displayHeight-300,50,50);
player.addImage(shooterImg)
player.scale=0.3
player.setCollider("rectangle",0,0,300,300);
player.debug=true;


}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques

if(keyDown("UP_ARROW")){
player.y-=30;

}
if(keyDown("DOWN_ARROW")){
player.y+=30


}

if(keyWentDown("space")){
player.addImage(shooter_shooting);



}
else if(keyWentUp("space")){
player.addImage(shooterImg);

}



























































drawSprites();

  }
  