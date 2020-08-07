var car, wall,speed,weight,deformation,l,m,h;

function setup() {
  createCanvas(1600,400);
  m=random(100,180)
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200,60,height/2);
  car.shapeColor = 80,80,80;
  car.debug = true;
  wall.shapeColor = 80,80,80;
  wall.debug = true;
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  //bounce(wall,car);
  deformation=0.5*weight*speed*speed/22500
  if(deformation===m){
    car.shapeColor = 230,230,0;
  }
}