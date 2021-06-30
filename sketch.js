var bg,bgI;
var hero,hI;
var sit,stand;
var ground,ground2;
var fall;
var enemy,eG,blackGroup,blackE;
var npc,npc22,npc33;
var gun,gunGroup;
var enemyGun,eGGroup;
var START=0
var PLAY=1
var END=2
var gameState=START;


function preload(){
bgI=loadImage("OWNGAMEBG5.png")
hI=loadAnimation("player character/pc1.png","player character/pc2.png",
"player character/pc3.png","player character/pc4.png","player character/pc5.png",
"player character/pc6.png")
sit=loadAnimation("pcSit/pcsit4.png")
fall=loadAnimation("playerCharactetDown/pcd5.png")
npc=loadAnimation("npc1/npc1.1.png","npc1/npc1.2.png","npc1/npc1.3.png"
,"npc1/npc1.4.png","npc1/npc1.5.png","npc1/npc1.6.png")
npc22=loadAnimation("npc3/npc3.1.png","npc3/npc3.2.png","npc3/npc3.3.png"
,"npc3/npc3.4.png","npc3/npc3.5.png","npc3/npc3.6.png")
npc33=loadAnimation("npc4/npc4.1.png","npc4/npc4.2.png","npc4/npc4.3.png"
,"npc4/npc4.4.png","npc4/npc4.5.png","npc4/npc4.6.png")
}


function setup(){
createCanvas(950,500)
 bg=createSprite(width/2,height/2,950,500)
 bg.addImage(bgI)
 bg.scale=1.2;
 bg.velocityX=-2;

 hero=createSprite(130,320);
 hero.addAnimation("play",hI)
 hero.addAnimation("sit",sit)
 hero.addAnimation("fall",fall)
 hero.scale=0.35;
 hero.velocityY=1

 
 ground=createSprite(180,410,50,10)
 ground.visible=false

 ground2=createSprite(180,410,2000,10)
 ground2.visible=false
 eG=new Group();
 blackGroup=new Group();
 gunGroup=new Group();
 eGGroup=new Group();
}

function draw(){
  background("purple")
  if(gameState===START){
    hero.visible=false;
    bg.visible=false;
    bg.velocityX=0;
    console.log(frameCount)
    frameCount=0

   if(keyDown("space")){
     gameState=PLAY
    
   }
  }
  if(gameState===PLAY){
    hero.visible=true;
    bg.visible=true;
    bg.velocityX=-2;

  
if(bg.x<450){
  bg.x=780
}
if(keyWentDown("DOWN_ARROW")){
  hero.changeAnimation("sit",sit)
  hero.scale=0.6
  hero.debug=true
  bg.velocityX=0
  //hero.setCollider("rectangle",0,50,hero.width,150)
  
}

if(keyWentUp("DOWN_ARROW")){
  hero.changeAnimation("play",hI)
  hero.scale=0.35;
  hero.velocityY=5;
  bg.velocityX=-2;
}
if(keyDown("UP_ARROW")){
  hero.velocityY=-10
}
hero.velocityY+=0.5
if(keyDown("LEFT_ARROW") && frameCount%20===0){
  spawnGun()
}


spawnEnemy();
blackEnemy();
spawnEG()


  }

  eG.collide(ground2)
  hero.collide(ground)
  drawSprites()
}
function spawnEnemy(){
  if(frameCount%150===0){
    enemy=createSprite(width,random(50,320))
    enemy.velocityX=-3
    enemy.velocityY=5
  
    if(frameCount%25===0||frameCount%150===0){
    
      enemyGun=createSprite(enemy.x,enemy.y,10,5)
      enemyGun.shapeColor="white"
      enemyGun.velocityX=-5
      eGGroup.add(enemyGun);
      
  }
    var randm=Math.round(random(1,2))
    switch(randm){
      case 1 : enemy.addAnimation("1",npc);
      enemy.scale=0.3
      break;
      case 2:enemy.addAnimation("2",npc22);
      enemy.scale=0.55
      break;
      default: break;
      
    }

    eG.add(enemy);

    
    
  }


  
}
function blackEnemy(){
  if(frameCount%400===0){
    blackE=createSprite(width,330)
    blackE.velocityX=-5
    blackE.addAnimation("b",npc33)
    blackE.scale=0.55
    blackGroup.add(blackE)
  }

}
function spawnGun(){
  gun=createSprite(hero.x+10,hero.y-12,10,5)
 gun.shapeColor="black"
 gun.velocityX=5
 gunGroup.add(gun)
}
function spawnEG(){

}
