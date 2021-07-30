const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1;
var base2;

var bridge
var bridge_con;
var stones =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  base1  = new Base(width -1950 ,height/2.5,500,30);
  base2  = new Base(width - 350,height/2.5,500,30);

  stone = new Stone(width/2 , height/9,20);      

  bridge = new Bridge(15,{x: base1 .x,y: base1.y}); 

  Matter.Composite.add(bridge.body,base2.body);

  bridge_con = new Link(bridge,base2);

  for(var i = 0;i<= 8;i++){
    var x= random(width/2 -200,width/2 +300);
   var y = random(-10,140);
 stone = new Stone(x,y,80);      
   stones.push(stone);
} 

  frameRate(1850);

}

function draw() {
  background(51);

  Engine.update(engine);
  base1.display();
  base2.display();
  bridge.show();
  

 

 // stone.create()

for(var i=0; i<stones.length; i++){
  stones[i].display();
}

 

}

