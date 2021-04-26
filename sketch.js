
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	packageBody = Bodies.circle(50 , 200 , 20 , {restitution:0.6,density:1, isStatic:false});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 660, width, 20 , {isStatic:true} );
	World.add(world, ground);
	basket1 = Bodies.rectangle(width/2, 650, 150, 30 , {isStatic:true} );
	World.add(world,basket1 );
	basket2 = Bodies.rectangle(width/2-75, 640, 10, 70 , {isStatic:true} );
	World.add(world,basket2 );
	basket3 = Bodies.rectangle(width/2+75, 640, 10, 70 , {isStatic:true} );
	World.add(world,basket3 );
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	
	drawSprites();
	rect(basket1.position.x,basket1.position.y,150,30)
	rect(basket2.position.x,basket2.position.y,10,70)
	rect(basket3.position.x,basket3.position.y,10,70)
	rect(ground.position.x,ground.position.y,width,20)

ellipseMode(RADIUS)
ellipse(packageBody.position.x,packageBody.position.y,20)
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce(packageBody,packageBody.position,{x:30,y:-30})
	   
	 }
   }

