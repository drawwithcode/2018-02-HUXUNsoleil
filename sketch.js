
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
  angleMode(DEGREES);


}

function draw() {
 push();
 translate(windowWidth/2, windowHeight/2);

  translate(200*sin(frameCount),200*cos(frameCount));

 stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/3000));
 line(0,0,200*cos(frameCount),200*sin(frameCount));

pop();
push();
translate(windowWidth/2, windowHeight/2);
translate(200*cos(frameCount),200*sin(frameCount));

stroke(lerpColor(color('#24f3dd'), color('#0fefca'), frameCount/3000));
line(200*cos(frameCount),200*sin(frameCount),0,0);




pop();
//noFill();
 //stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/120));
//bezier( 0,windowHeight,windowHeight*cos(frameCount),mouseY,0,windowWidth, windowHeight)




}
