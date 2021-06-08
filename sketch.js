var ground , groundImage ;
var iss , issImage;
var spaceCraft , spaceCraftImage1 , spaceCraftImage2 , spaceCraftImage3 ,spaceCraftImage4; 
var hasDocked = false;

function preload(){
  groundImage = loadImage("spacebg.jpg")
  issImage = loadImage("iss.png")
  spaceCraftImage1 = loadAnimation("spacecraft1.png")
  spaceCraftImage2 = loadAnimation("spacecraft2.png")
  spaceCraftImage3 = loadAnimation("spacecraft3.png")
  spaceCraftImage4 = loadAnimation("spacecraft4.png")
}

function setup() {
  createCanvas(1100,700);
  // create Background image here 

  ground = createSprite(550,350);
  ground.addImage("ground" , groundImage)
  ground.scale =  2 ;

  iss = createSprite(500,260);
  iss.addImage("iss" , issImage)

  spaceCraft = createSprite(550,600)
  spaceCraft.addAnimation("spaceCraft1",spaceCraftImage1)
  spaceCraft.addAnimation("spaceCraft2",spaceCraftImage2)
  spaceCraft.addAnimation("spaceCraft3",spaceCraftImage3)
  spaceCraft.addAnimation("spaceCraft4",spaceCraftImage4)
  spaceCraft.scale = 0.2 ;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(spaceCraft.y <= (iss.y+105)&& spaceCraft.x <= (iss.x-10)){
    hasDocked = true
    fill("red")
    textSize(60)
    text(" Docking Succesful " , 200 , 500)
  }
 
}
function keyPressed(){
  //For moving and changing animation write code here
  if(!hasDocked){
  if(keyCode === UP_ARROW){
  spaceCraft.y = spaceCraft.y-7
  spaceCraft.changeAnimation("spaceCraft2",spaceCraftImage2);
     
}
if(keyCode === DOWN_ARROW){
  spaceCraft.y = spaceCraft.y+7
  spaceCraft.changeAnimation("spaceCraft1",spaceCraftImage1);
}
if(keyCode === LEFT_ARROW){
  spaceCraft.x = spaceCraft.x-7
  spaceCraft.changeAnimation("spaceCraft3",spaceCraftImage3);
}
if(keyCode === RIGHT_ARROW){
  spaceCraft.x = spaceCraft.x+7
  spaceCraft.changeAnimation("spaceCraft4",spaceCraftImage4);
}
}
}