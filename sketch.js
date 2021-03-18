var bullet,speed,weight;
var wall, thick;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thick = random(22,83);
  bullet = createSprite(50, 200, 84, 10);
  bullet.velocityX = speed;
  wall = createSprite(1000,200,thick,height/2);
}

function draw() {
  background(255,255,255);
  
  if(hasColloided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thick * thick * thick);
    if(damage < 10){
      wall.shapeColor = "green";
    }
    if(damage > 10){
      wall.shapeColor = "red";
    }
    
  }  

  drawSprites();
}

function hasColloided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}