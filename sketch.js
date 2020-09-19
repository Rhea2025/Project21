var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 10, 30);
  bullet.velocityX = speed;
  bullet.shapeColor = "gray";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(255,255,255);
  
  if(bullet.isTouching(wall)) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    
    if (damage > 10) {
      wall.shapeColor = "red";
    }

    if(damage < 10) {
      wall.shapeColor = "green";
    }

  }

  drawSprites();
}