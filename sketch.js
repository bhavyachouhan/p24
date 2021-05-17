
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 560);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(100,100,10);
	box1 = new Box(690,500,15,90);
	box2 = new Box(640,540,110,15);
	box3 = new Box(590,500,15,90);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
	 }
   }