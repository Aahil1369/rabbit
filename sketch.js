var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}
function createapple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleIMG);



}
sorry mis I had a problem
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;


  drawSprites();
}