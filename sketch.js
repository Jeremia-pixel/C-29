const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygonObj;

var launcherObject;
var launchForce = 100;


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(440,300,250,10);
  stand2 = new Stand(750,200,200,10);
 
  //level one
  block1 = new Block(350,275,30,40);
  console.log(block1);
  block2 = new Block(380,275,30,40);
  block3 = new Block(410,275,30,40);
  block4 = new Block(440,275,30,40);
  block5 = new Block(470,275,30,40);
  block6 = new Block(500,275,30,40);
  block7 = new Block(530,275,30,40);
  //level two
  block8 = new Block(380,235,30,40);
  block9 = new Block(410,235,30,40);
  block10 = new Block(440,235,30,40);
  block11 = new Block(470,235,30,40);
  block12 = new Block(500,235,30,40);
  //level three
  block13 = new Block(410,195,30,40);
  block14 = new Block(440,195,30,40);
  block15 = new Block(470,195,30,40);
  //top
  block16 = new Block(440,155,30,40);

  polygonObj = new Polygon(90,250,20)

  launcherObject = new Launcher(polygonObj.body,{x:90, y:250})

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  
  launcherObject.display();
  polygonObj.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygonObj.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){
launcherObject.fly();
}
