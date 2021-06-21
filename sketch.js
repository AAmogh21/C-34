const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box2
var box3
var ball
var chain1
var rope1;

function setup(){
    var canvas = createCanvas(2000,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000,height,2000,20)

    box1 = new Box(1000,300,100,100);
    box2 = new Box(1000,100,100,150);
    box3 = new Box(1000, 400, 100, 100);
    box4 = new Box(1000, 500, 100, 100)
    box5 = new Box(1200, 100, 100, 100)
    box6 = new Box(1200, 300, 100, 200)

    ball = Bodies.circle(700, 200, 40)
    World.add(world, ball)

    var options = {
        bodyA: ball.body,
        pointB: {x:400, y:50},
        stiffness: 1.2,
        length: 250,
    }

    rope1 = Constraint.create(options)
    World.add(world,rope1)

   // chain1 = new Rope(ball.body, {x:700 , y: 100} )
   
   
}

function draw(){
    background(255);
    var pointB = pointB;
    var pointA = rope1.bodyA.position;
    Engine.update(engine);
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 40, 40)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    box6.display();
    ground.display();
    strokeWeight(4);
    stroke("black")
    line(pointB.x, pointB.y, pointA.x, pointA.y);
    chain1.display();
}

function mouseDragged(){

        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}