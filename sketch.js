
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof;
var bob1,bob2,bob3,bpb4,bob5;

var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(400,200,250,20)
	rope1=new Rope(bob1.body,roof.body,-80,0)
	rope2=new Rope(bob2.body,roof.body,-80,0)
	rope3=new Rope(bob3.body,roof.body,-80,0)
	rope4=new Rope(bob4.body,roof.body,-80,0)
	rope5=new Rope(bob5.body,roof.body,-80,0)




	bob1=new Bob(300,400,40)
		bob2=new Bob(350,400,40)
		bob3=new Bob(400,400,40)
			bob4=new Bob(450,400,40)
				bob5=new Bob(500,400,40)
		
		
		
		
	Engine.run(engine);
 // top=new Roof(400,200,250,20)
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(255);
 // roof.display();
 roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
  //drawSprites();
 
}



