
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash;
var ground;
var b1,b2,b3;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	b1 = new bin(1000,265,230,150,0);
	b2 = new bin(890,260,20,225,0);
	b3 = new bin(1110,260,20,225,0);
	ground = new grd(width/2,height-50,width,20);  
	trash = new Paper(100,100,20);

	Engine.run(engine);
  
}

function draw() {
  background(230);
  ground.display();
  trash.display();
  b1.display();
  
}

function keyPressed() {
	console.log("key pressed");
	if(keyCode === UP_ARROW){
		console.log("up");
		Body.applyForce(trash.body,trash.body.position,{x:85,y:-85});
	}
}

