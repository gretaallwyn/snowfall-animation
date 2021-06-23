var canvas;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var maxDrops = 20;

var snow = [];

var bg1,bg2,bg3;


function preload(){
   
    //snow1 = loadImage("snow4.webp");
    //snow2 = loadImage("snow5.webp");

    bg1 = loadImage("snow1.jpg");
    bg2 = loadImage("snow2.jpg");
    bg3 = loadImage("snow3.jpg");
    
}

function setup(){
   canvas = createCanvas(windowWidth,windowHeight);
   engine = Engine.create();
   world = engine.world;

   if(frameCount%120===0){
    for(var i = 0;i<maxDrops;i++){
        snow.push(new Snow(random(0,1600),random(0,200)));  
    }
}

}

function draw(){
    background(bg2);
    Engine.update(engine);

        for(var i = 0;i<maxDrops;i++){
            snow[i].display();
            snow[i].update();    
        }
    

    drawSprites();
}   
