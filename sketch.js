const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ground;
var chain1,chain2,chain3,chain4,chain5,chain6,chain7,chain8,chain9;

function setup(){
  createCanvas(1950,960);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  ball1 = new Ball(900,23,255,0,0,true);
  ball2 = new Ball(875,25,255,150,0,false);
  ball3 = new Ball(850,25,255,255,0,false);
  ball4 = new Ball(825,25,0,255,0,false);
  ball5 = new Ball(800,25,0,255,170,false);
  ball6 = new Ball(775,25,0,255,255,false);
  ball7 = new Ball(750,25,0,0,255,false);
  ball8 = new Ball(725,25,150,0,255,false);
  ball9 = new Ball(700,25,255,0,255,false);
  ball10 = new Ball(675,25,255,0,150,false);

  chain1 = new Chain(ball1.body,ball2.body);
  chain2 = new Chain(ball2.body,ball3.body);
  chain3 = new Chain(ball3.body,ball4.body);
  chain4 = new Chain(ball4.body,ball5.body);
  chain5 = new Chain(ball5.body,ball6.body);
  chain6 = new Chain(ball6.body,ball7.body);
  chain7 = new Chain(ball7.body,ball8.body);
  chain8 = new Chain(ball8.body,ball9.body);
  chain9 = new Chain(ball9.body,ball10.body);
}

function draw(){
  Engine.update(engine);
  background(0);

  ground.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  chain8.display();
  chain9.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();

  if(mouseIsPressed){
    ball10.body.position.x = mouseX;
    ball10.body.position.y = mouseY;
  }
}