const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){ 
  polygon_img=loadImage("polygon.jpg"); 
}
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
   world = engine.world;

stand = new Ground(390,240,120,5);
ball = Bodies.circle(50,200,20);
 World.add(world,ball);
 
//level two
block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);

//level three
block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);

//top
block16  = new Box(390,155,30,40);

ground = new Ground();

//polygon holder with sling
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
 
  imageMode(CENTER)
image(polygon_img,ball.position.x,ball.position.y,40,40);

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
ground.display();
stand.display();

slingShot.display();
  drawSprites();
}


