var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 50, 70);
  movingRect = createSprite(400,100,70,50);
  movingRect.velocityY = 2;
  fixedRect.velocityY = -3;
}

function draw() {
  background(255,255,255);  

  //movingRect.x = mouseX;
 // movingRect.y = mouseY;

 edges = createEdgeSprites();

 movingRect.bounceOff(edges);
 fixedRect.bounceOff(edges);

 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
 if(  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }


  drawSprites();
}

function isTouching() {
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    } else {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }
}