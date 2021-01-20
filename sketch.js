const Engine =  Matter.Engine
const World =  Matter.World
const Bodies =  Matter.Bodies

var engine ,world ,ball,ground; 

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world

box1 = new box(200,200,50,50)
box2 = new box(240,120,50,100)
ground = new Ground(width/2,height,width,25)
}

function draw() {
  background(0);  

  Engine.update(engine)
  box1.display()
  box2.display()
  ground.display()
}