var angle = 0;
var treeSize = 50;
var branchFactor = 0.6;
var toggle = 1;
var wave;

function setup() {
  let cnv = createCanvas(800, 400);
}

function draw() {
  background(51);

  //open and close
  if (angle < 1 && toggle==1){
  } else if (angle >= 1) {
    toggle = -1;
  }
  else if(angle < 0) {
    toggle = 1;
  }
  angle += 0.01 * toggle;
  //stroke(255);
  for (let y=130; y<height; y+=100){
    for (let x=100; x<width; x+=100){  
      stroke(100,x, y-40);
      push();
      translate(x, y);
      branch(treeSize,x,y);
      pop()
    }
  }

}

function branch(len, x, y) {
  if ((x/100)%2==0){
    line(0, 0, 0, -len);
  } else if ((x/100)%3==0){
    fill(len*10%255,0,len*100%255)
    circle(0,0,10,-len);
  } else {
    fill(len*10%255,len*100%255,0)
    rect(0,0,10,-len) ; 
  }
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle*(x/100));
    branch(len * branchFactor, x,y);
    pop();
    push();
    rotate(-angle*(y/30));
    branch(len * branchFactor,x,y);
    pop();
  }
}