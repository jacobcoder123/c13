var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloud_Img
var obs,obs1,obs2,obs3,obs4,obs5,obs6;


var score= 0;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloud_Img = loadImage ('cloud.png')
 
  obs1 = loadImage('obstacle1.png')
  obs2 = loadImage('obstacle2.png')
  obs3 = loadImage('obstacle3.png')
  obs4 = loadImage('obstacle4.png')
  obs5 = loadImage('obstacle5.png')
  obs6 = loadImage('obstacle6.png')




}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
 // console.log(rand)
console.log("hello"+" "+"jacob"+" "+1)
}

function draw() 
{
  //set background color
  background(180);
  score =score+Math.round(frameCount/60)
  text("score:"+score,500,50)
 // console.log(frameCount)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnObstacle()
  drawSprites();
}

//function to spawn the clouds
 function spawnClouds(){
 // write your code here 
 if(frameCount%60===0){

 
 cloud = createSprite (600,80,40,10);
 cloud.addImage(cloud_Img)
 cloud.velocityX = -3;
 cloud.scale = 0.5    
 cloud.y=Math.round(random(10,100))
 cloud.lifetime =  200
 cloud.depth= trex.depth
 trex.depth= trex.depth+1
 console.log(trex.depth)
 console.log(cloud.depth)
 }
}
function spawnObstacle()
{
 if(frameCount%60===0)
 {
   obs=createSprite(600,165,90,40)
   obs.velocityX=-6
   var rand = Math.round(random(1,6))
   switch(rand)
   {
    case 1 :obs.addImage(obs1)
    break;
    case 2 :obs.addImage(obs2)
    break;
    case 3 :obs.addImage(obs3)
    break;
    case 4 :obs.addImage(obs4)
    break;
    case 5 :obs.addImage(obs5)
    break;
    case 6 :obs.addImage(obs6)
    break;
    default:
    break;
   
  }
    obs.scale = 0.7
    obs.lifetime = 100
 }
}


