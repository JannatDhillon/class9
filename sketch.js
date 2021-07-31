const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ballOptions = {
    restitution:1,
    frictionAir:0.01
  }

  ball = Bodies.circle(100,200,20,ballOptions);
  World.add(world,ball);

  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,350,800,20,options);
  World.add(world,ground)
}


function draw() 
{
  background(0);
  Engine.update(engine);

  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  fill('violet')
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}

