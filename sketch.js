var canvas, backgroundImage;

var Steve
var Craftingtable
var Pickaxe
var Sword
var Shovel
var Axe
var Stone
var Diamond
var obsidian
var netherportal
var netherfort
var blaze
var blazerod
var blazepowder
var enderman
var enderpearl
var endereye
var endportalframe
var endportal
var endstone
var enderdragon
var wood
var form, player, game;
var dirt

function preload(){
bg=loadImage("images/background.png");
SteveImage=loadAnimation("images/0.gif","images/1.gif","images/6.gif","images/7.gif","images/8.gif");
CraftingtableImage=loadImage("images/Crafting_Table.png")
DirtImage=loadImage("images/dirt block.png")
stoneImage=loadImage("images/Stone.png")
woodImage=loadImage("images/wood.png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
Steve=createSprite(800,800)
Steve.addAnimation("walking",SteveImage);
Steve.scale=0.2;

Craftingtable=createSprite(500,690)
Craftingtable.addImage(CraftingtableImage);
Craftingtable.scale=0.2;

ground=createSprite(740,800,1900,210)
ground.visible=false
ground.x = ground.width /2;

wood=createSprite(displayWidth-220,displayHeight-400,55)
wood.addImage(woodImage)
wood.scale=0.14


for(var i=0; i<displayWidth;i=i+50){
dirtSprite=createSprite(i,displayHeight-360,50,50);
dirtSprite.addImage(DirtImage)
dirtSprite.scale=0.15

Stone1=createSprite(i,displayHeight-305,55,55)
Stone=createSprite(i,displayHeight-250,55,55)
Stone.addImage(stoneImage)
Stone1.addImage(stoneImage)
Stone.scale=0.15
Stone1.scale=0.15

}
}
function draw(){
  background(bg);
  //if(keyDown("w")){
  //Steve.y=Steve.y-3
  //}
  if(keyDown("s")){
  Steve.y=Steve.y+3
  }
  if(keyDown("D")){
    Steve.x=Steve.x+3
    }
    if(keyDown("a")){
      Steve.x=Steve.x-3
      }
    Steve.collide(ground);
    ground.collide(Craftingtable)
    Steve.collide(Craftingtable)
  drawSprites()
}