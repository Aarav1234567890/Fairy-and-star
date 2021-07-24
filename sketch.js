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
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}




function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy =createSprite(130, 520,20,20,option);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	
	var fall = {
		isStatic:false
	} 
	var  option = {
		isStatic:true
	  }
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	

	engine = Engine.create();
	world = engine.world;
	

	starBody = Bodies.circle(650 , 30 , 5 ,option);
	World.add(world, starBody);


	Engine.run(engine);

}


function draw() {

	background(bgImg);
  
	fairyVoice.play();
	star.x= starBody.position.x 
	star.y= starBody.position.y 
  
	console.log(star.y);
  
	if(star.y > 470 && star.x> 470 ){
		Matter.Body.setStatic(starBody,true);
     	fairyVoice.play();
	}
  
	drawSprites();
  
  }
function keyPressed(){
if(keyCode === RIGHT_ARROW){
	fairy.x = fairy.x + 20;
}

 if(keyCode === LEFT_ARROW){
	fairy.x = fairy.x - 20;
}

if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(starBody,false); 
}
}