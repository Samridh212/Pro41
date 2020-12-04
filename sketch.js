const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var maxDrops=100;
var drops=[];
var thunder_1Img,thunder_2Img,thunder_3Img,thunder_4Img,thunder_sound;
var thunder;
var protection;

function preload(){
   thunder_1Img=loadImage("images/thunderbolt/1.png")
   thunder_2Img=loadImage("images/thunderbolt/2.png")
   thunder_3Img=loadImage("images/thunderbolt/3.png")
   thunder_4Img=loadImage("images/thunderbolt/4.png")

   thunder_sound = loadSound("Sounds/donnerre2.mp3")

}

function setup(){
   canvas = createCanvas(600,900)
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(300,702)

   for(var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,600),random(0,900)))
   }
 var protection = new Protection(umbrella.x,umbrella.y)   
 protection.visible = false;
}

function draw(){
background(0);
Engine.update(engine);

umbrella.display();
for(var i=0;i<maxDrops;i++){
  drops[i].update();
  drops[i].display();
}
if (frameCount%45==0){
thunder_sound.play();

var thunder = createSprite(random(50,550),40)
thunder.lifetime = 15;
var rand = Math.round(random(1,4))
switch(rand){
   case 1 :thunder.addImage(thunder_1Img)
   break;
   case 2 :thunder.addImage(thunder_2Img)
   break;
   case 3 :thunder.addImage(thunder_3Img)
   break;
   case 4 :thunder.addImage(thunder_4Img)
   break;
}
 }
drawSprites();
}   

