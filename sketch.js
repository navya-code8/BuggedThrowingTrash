
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var binWall1, binWall2, binWall3;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,370, 800, 70)
	binWall1 = new DustBin(650,325, 120, 20)
	binWall2 = new DustBin(580,295,20,80);
	binWall3 = new DustBin(720,295,20,80);
	paper = new DustBin(150,325);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  upArrowPressed();

  ground.display();
  binWall1.display();
  binWall2.display();
  binWall3.display();
  paper.display();
  
  drawSprites();
 
}

function upArrowPressed(){

	if (keyDown(UP_ARROW)){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y: -85})

	}

}



