
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;	
var world;
var paper1;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(800,550);
	//I can't get this to work
	dustbinObj.image = loadImage("dustbingreen.png");

	Engine.run(engine);

	paper1 = new Paper(200,100,50,50);

}


function draw() {
  rectMode(CENTER);
  background(230);


  paper1.display();
  groundObject.display();
  dustbinObj.display();



  drawSprites();  
}

//I can't get this to work
function keyPressed(){

	if(keyCode === UP_ARROW){
	  paper1.x=paper1.x+120;
	  paper1.y=paper1.y-120;
	  World.add(world, paper1);
	}
}