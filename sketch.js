let r,x,y,step,angle;
let inc = 10

function setup() {
  createCanvas(800, 800);
  frameRate(60)
  noFill();
  ellipseMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(100)
}

function draw() {
  background(255);
 
  r = 250;
  step = 4;
  angle = 10+inc;
  
  push();
  translate(width/3, height/3);
  rotate(-angle);
  
  stroke(255,0,0,50);
  strokeWeight(10);
  blah = cos(frameCount + millis() /1000)
  
  for (y = r; y >= -r; y -= step) {
    
    x = Math.sqrt(Math.pow(r,2) - Math.pow(y,2));
    
    stroke(255,0,0);
    strokeWeight(2);
    line(-x, y, x*blah, y);
    
  }
  
  pop();
  
  
  r = 250;
  step = 4;
  angle = inc;
  
  push();
  translate(width*2/3, height*1/3);
  rotate(angle);
  blah = cos(frameCount + millis() /1000)
  
  for (y = r; y >= -r; y -= step) {
    
    x = Math.sqrt(Math.pow(r,2) - Math.pow(y,2));
    
    stroke(0,255,0);
    strokeWeight(2);
    line(-x, y, x*blah, y);
    
  }
  
  pop();
  
  r = 250;
  step = 4;
  angle = -10+inc/2;
  
  push();
  translate(width*1/2, height*2/3);
  rotate(-angle);
  
  for (y = r; y >= -r; y -= step) {
    
    x = Math.sqrt(Math.pow(r,2) - Math.pow(y,2));
    
    
    blah = cos(frameCount + millis() /1000)
    
    stroke(0,0,255);
    strokeWeight(2);
    line(-x*blah, y, x*blah, y);
    
  }
  
  inc = inc+1
  pop();
  
}