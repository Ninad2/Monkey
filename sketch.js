var background_img,backgr;
var monkey, monkey_running;
var ground,ground_img;

var bananaGroup, banana_img;
var obstaclesGroup, obstacles_img;

var gameOver;
var score = 0;

function preload(){
  background_img = loadImage("jungle2.jpg");
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_img = loadImage("banana.png");
  obstacles_img = loadImage("stone.png");
}


function setup() {
  
  createCanvas(600,300);
  
  backgr = createSprite(0,0,800,400);
  backgr.addAnimation("backgroung_img");
  backgr.scale = 1.5;
  backgr.x = backgr.width/2;
  backgr.velocityX = -4;
  
  monkey = cretaeSprite(100,340,800,10);
  monkey.addAnimation("monkey_running");
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = false;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}


function draw(){
 
  background(255);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: player.scale=0.12;
                break;
        case 20: player.scale=0.14;
                break;
        case 30: player.scale=0.16;
                break;
        case 40: player.scale=0.18;
                break;
        default: break;
    }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    spawnFood();
    spawnObstacles();
 
    if(obstaclesGroup.isTouching(player)){ 
        player.scale=0.08;
     // score=score-2;
    }
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.addImage("banana_img");
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifeTime = 300;
    bananaGroup.add(banana);
  }
  
  drawSprites();
} 

function spawnObstacle(){
  if(frameCount % 120 === 0){
    var obstacle = createSprite(800,350,10,40);
    obstacle.addImage("obstacles_img");
    obstacle.velocityX = -7;
    obstacle.lifeTime = 300;
    obstaclesGroup.add(obstacle);
  
  }
  
  
}