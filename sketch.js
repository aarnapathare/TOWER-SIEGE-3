
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint

var score = 0

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(400,680,850,30);

  stand = new Ground(580,500,230,13);

  //level1
  box1 = new Box(500,474,35,35)
  box2 = new Box(538,474,35,35)
  box3 = new Box(576,474,35,35)
  box4 = new Box(614,474,35,35)
  box5 = new Box(652,474,35,35)

  //level2
  box6 = new Box(520,435,35,35)
  box7 = new Box(558,435,35,35)
  box8 = new Box(596,435,35,35)
  box9 = new Box(634,435,35,35)

//level3
box10 = new Box(540,396,35,35)
box11 = new Box(578,396,35,35)
box12 = new Box(616,396,35,35)

//level4
box13 = new Box(560,357,35,35)
box14 = new Box(598,357,35,35)

//level5
box15 = new Box(580,317,35,35)

  Engine.run(engine);
  
  


  polygon = new Polygon(300,350)

  var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
  Engine.run(engine);

slingshot = new Slingshot(polygon.body,{x:300, y:350})
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  fill("black")
text("Score : "+ score, 750, 40);
  ground.display();
  stand.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();

  box15.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();

  
  polygon.display();
  slingshot.display();
  
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}