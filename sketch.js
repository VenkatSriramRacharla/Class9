
var box;
var paddle;

function setup() {
  createCanvas(400,400);
  box= createSprite(10,380,20,20);
  box.shapeColor= "cyan";

  paddle= createSprite(300,45,80,10);
  paddle.shapeColor= "blue";

  wall1 = createSprite(160,360,400,10);
  wall2 = createSprite(250,180,400,10);
  wall3 = createSprite(265,250,10,140);
  wall4 = createSprite(100,290,10,140);
}

function draw() 
{
  background("orange");

  drawSprites();

  if (keyIsDown(RIGHT_ARROW )){
    box.position.x = box.position.x +5;
  }

  if (keyIsDown(LEFT_ARROW )){
    box.position.x = box.position.x -5;
  }

  if (keyIsDown(UP_ARROW )){
    box.position.y = box.position.y -5;
  }

  if (keyIsDown(DOWN_ARROW )){
    box.position.y = box.position.y +5;
  }

edges = createEdgeSprites();
box.bounceOff(edges);
box.bounce(paddle);
}




