var jungleimg;
var openingplayerimg,openingplayer;
var adventurer,playeranimation;
var rhinoquestionimg,rhino;
var monkeyimg,monkey
var chipmunkimg,chipmunk;
function preload(){
    jungleimg=loadImage("Jungle.jpg");
    rhinoquestionimg=loadImage("rhino.png")
    playeranimation=loadAnimation("runpic1.png","runpic2.png","runpic3.png","runpic4.png","runpic5.png","runpic6.png","runpic7.png","runpic8.png")
    monkeyimg=loadImage("monkey2.png")
    chipmunkimg=loadImage("chipmunk.png")
}
function setup(){
    
createCanvas(displayWidth,displayHeight);






form= new Form()
form.display();

}

function draw(){
background(jungleimg)
textSize(60)
fill("blue")
text("The Education Adventure!",100,100)

drawSprites();
}
function q1(){
    adventurer=createSprite(900,550,10,10)
    adventurer.addAnimation("playeranimation",playeranimation)
    adventurer.scale=2.5
    rhino=createSprite(300,550,10,10)
    rhino.addImage("rhinoquestionimg",rhinoquestionimg)
    rhino.scale=1.5;
    drawSprites();
    }
function q2(){
    adventurer=createSprite(900,550,10,10)
    adventurer.addAnimation("playeranimation",playeranimation)
    adventurer.scale=2.5
    monkey=createSprite(300,550,10,10)
    monkey.addImage("monkeyimg",monkeyimg)
    monkey.scale=2
}
function q3(){
    adventurer=createSprite(900,550,10,10)
    adventurer.addAnimation("playeranimation",playeranimation)
    adventurer.scale=2.5
    chipmunk=createSprite(400,450,10,10)
    chipmunk.addImage(chipmunkimg)

}