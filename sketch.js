var fixedRect, movingRect;

var wall1,wall2,wall3,wall4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  wall1=createSprite(200,200,50,80)
  wall1.shapeColor = "green"

  wall2=createSprite(200,400,50,80)
  wall2.shapeColor="green"

  wall3=createSprite(200,600,50,80)
  wall3.shapeColor="green"

  wall4=createSprite(400,200,50,80)
  wall4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(wall1,movingRect)){
    wall1.shapeColor="blue";
    movingRect.shapeColor="blue"
  }
  else
  if(isTouching(wall2,movingRect)){
    wall2.shapeColor="blue";
    movingRect.shapeColor="blue"
  }
  else
  if(isTouching(wall3,movingRect)){
    wall3.shapeColor="blue";
    movingRect.shapeColor="blue"
  }
  else
  if(isTouching(wall4,movingRect)){
    wall4.shapeColor="blue";
    movingRect.shapeColor="blue"
  }
  else{
    wall1.shapeColor="green"
    wall2.shapeColor="green"
    wall3.shapeColor="green"
    wall4.shapeColor="green"
    movingRect.shapeColor="green"
  }
  

drawSprites();
}
