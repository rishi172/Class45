var robber;
var security1,security2,security3;
var jewel;
var laser,laser1,laser2,laser3,laser4,laser5,laser6;
var thief1;
var gameState=0;



function preload(){
  thief1=loadImage("thiefRemoved.png");
  laser=loadImage("laser.original-removebg-preview.png");
}

function setup() {
  createCanvas(1500,925);
  
   robber=createSprite(100, 800, 50, 50);
   laser1=createSprite(400,700,900,30);
   laser2=createSprite(800,500,900,30);
   laser3=createSprite(1200,300,900,30);
   


   robber.shapeColor=("black");
   laser1.shapeColor=("red");
   laser2.shapeColor=("red");
   laser3.shapeColor=("red");


  robber.addImage(thief1);
  laser1.addImage(laser);
  laser2.addImage(laser);
  laser3.addImage(laser);


  laser1.scale=2;
  laser2.scale=2;
  laser3.scale=2;
  
  robber.scale=0.25;

  laser1.debug=true;

  laser1.setCollider("circle",20,0,30);

  laser2.debug=true;

  laser2.setCollider("circle",20,0,30);

  laser3.debug=true;

  laser3.setCollider("circle",20,0,30);

  edges = createEdgeSprites();

  laser1.velocityX=10;
  laser2.velocityX=11;
  laser3.velocityX=12;


  
}

function draw() {
  background("grey"); 
  if(gameState===0){

  
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  
  if(keyDown(UP_ARROW)){
    robber.y-=10;
  }
  if(keyDown(DOWN_ARROW)){
    robber.y+=10;
  }
  if(keyDown(RIGHT_ARROW)) {
    robber.x+=10
  }
  if(keyDown(LEFT_ARROW)){
    robber.x-=10
  }
  if(robber.isTouching(laser1)||robber.isTouching(laser2)||robber.isTouching(laser3)){
    
   
     
    gameState=1;
    }
}
  if(gameState===1){
    stroke(0);
    fill(0);
    textSize(30);
    text("Thief is Caught",750,400);

   laser1.velocityX=0;
   laser2.velocityX=0;
   laser3.velocityX=0;

   robber.velocityX=0;
   robber.velocityY=0;
  }
  


  drawSprites();
}