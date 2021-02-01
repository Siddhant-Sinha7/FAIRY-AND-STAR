var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
	bgImg = loadImage("images/starnight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 //fairyVoice.play();
	
	
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
	var fairy_options={
		isStatic : false
		
	  }
	starBody = Bodies.circle(650 , 30 , 5 ,{restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	fairy.debug = true
	fairy.setCollider("rectangle",510,10,150,150);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
	background(bgImg);
  star.x=starBody.position.x
  star.y=starBody.position.y
  fairy.velocityX = 0;
  if (keyDown(RIGHT_ARROW)){
	fairy.velocityX = 3 ;
}
if (keyDown(LEFT_ARROW)){
	fairy.velocityX = -3 ;
}
if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(starBody,false);
	
}
if(star.isTouching(fairy)){
	Matter.Body.setStatic(starBody,true);
}
  drawSprites();
  keyPressed();
}

function keyPressed() {
	
	if (keyDown(LEFT_ARROW)){
		fairy.velocityX = -3 ;
	}
	if(keyDown(DOWN_ARROW)){
		Matter.Body.setStatic(starBody,false);
		
	}
	if(star.isTouching(fairy)){
		Matter.Body.setStatic(starBody,true);
	}
	
}
