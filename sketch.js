const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;

function preload() {
}
function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1300, 20);
  slab1= new Ground(400,550,300,20)
  slab2= new Ground(800,500,300,20)
  box1 = new Block(690, 465, 70, 70);
  box2 = new Block(765, 460, 70, 70);
  box3 = new Block(835, 465, 70, 70);
  box4 = new Block(900, 450, 70, 70);
   box5 = new Block(740, 400, 70, 70);
   box6 = new Block(810, 320, 70, 70);
   box7 = new Block(880, 310, 70, 70);
   box8 = new Block(780, 280, 70, 70);
   box9 = new Block(850, 220, 70, 70);
   box10 = new Block(835, 100, 70, 70);
   box11= new Block(290, 100, 70, 70);
  box12= new Block(360,100, 70, 70);
   box13 = new Block(430, 100, 70, 70);
  box14= new Block(500, 100, 70, 70);
   box15= new Block(325,10, 70, 70);
   box16 = new Block(390,5, 70, 70);
  box17 = new Block(460,5, 70, 70);
   box18 = new Block(350,-80, 70, 70);
    box19 = new Block(440,-80, 70, 70);
     box20 = new Block(370,-200, 70, 70);
  polygon= new Polygon(200,150,50);
  sling = new Slingshot(polygon.body,{x:200,y:150})
  var render = Matter.Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); Matter.Render.run(render);

}

function draw() {
  background("Black");
  Engine.update(engine);
  ground.display();
  box1.displayGreen();
   box2.displayGreen();
   box3.displayGreen();
   box4.displayGreen();
   box5.displayYellow();
   box6.displayYellow();
   box7.displayYellow();
  box8.displayBlue();
   box9.displayBlue();
   box10.displayRed();
  box11.displayRed();
 box12.displayRed();
   box13.displayRed();
  box14.displayRed();
   box15.displayBlue();
   box16.displayBlue();
    box17.displayBlue();
    box18.displayYellow();
    box19.displayYellow();
    box20.displayGreen();
  slab1.display();
  slab2.display();
  polygon.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY})
}
function mouseReleased(){
sling.fly();
}