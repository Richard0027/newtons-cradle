const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball1,ball2,ball3,ball4;
var roof,invisibleRoof;
var chain,chain1,chain2,chain3;

function setup() {
	var canvas = createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,400,30);
	ball2 = new Ball(400,400,30);
	ball3 = new Ball(600,400,30);
	ball4 = new Ball(500,400,30);
	
	roof = new Ground(400,100,350,20);
	invisibleRoof = new Ground(500,100,400,20);
	chain = new Chain(ball1.body,roof.body);
	chain1 = new Chain(ball2.body,roof.body);
	chain2 = new Chain(ball3.body,invisibleRoof.body);
	chain3 = new Chain(ball4.body,invisibleRoof.body);
	
  
}


function draw() {
  background("purple");
  rectMode(CENTER);
  invisibleRoof.visible = false;
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  roof.display();
  invisibleRoof.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();	
  drawSprites();
 
}



