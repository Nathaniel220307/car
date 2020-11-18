var car 
var wall
var speed
var weight
var thick
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30, 52)
  thick = random (22, 83)
  wall = createSprite(1500, 200, thick, height/2)
  car = createSprite(50, 200, 50, 50)
  car.velocityX = speed 
}

function draw() {
  background("black"); 
  if(wall.x - car.x < wall.width/2 + car.width/2 
    && car.x  - wall.x < wall.width/2 + car.width/2 
    && wall.y - car.y < wall.height/2 +car.height/2 
    && car.y  - wall.y < car.height/2 + car.height/2 ){
      car.velocityX =0
      if (0.5*weight*speed*speed/thick^3 < 11){
      car.shapeColor = "green";
    }
    if (0.5*weight*speed*speed/thick^3 > 10){
      car.shapeColor = "red";
    }
    }
  drawSprites();
}