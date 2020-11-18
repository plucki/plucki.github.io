
var circleX = 200;

function setup(){
    
    createCanvas(400,400);
}

function draw(){
     background(255);
    fill(random(200), 100 * 2, 0);
    ellipse(circleX, 200, 50);
    circleX = circleX + 1;
    
    if (circleX > width){
        circleX = 0;
    }
}