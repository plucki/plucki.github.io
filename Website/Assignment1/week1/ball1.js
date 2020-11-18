/* 2020 Fall CSMA 101 F1, Echo Theohar, Andrea Jacquez, andrea.jacquezlugo@woodbury.edu */

var startX;
var startY;
var directionX;
var directionY;
var color;

function setup() {
    //inital setup of canvas
    createCanvas(500, 500);

    //starting point
    startX = width / 2;
    startY = height / 2;

    //movement
    directionX = 9;
    directionY = 5;

}

function draw() {
    //starting point, add movement
    startX = startX + directionX;
    startY = startY + directionY;
    
    //bouncy
    if (startX > width) {
        directionX = -directionX;
    }

    if (startX < 0) {
        directionX = -directionX;
    }
    
    if (startY > height) {
        directionY = -directionY;
    }
    
    if (startY < 0) {
        directionY = -directionY;
    }
    
    //background//
    color = map(startX,250, width, 200, width,)
    background(100,color,10)
    
    //draw ball//
    color = map(startY, 250, height, 200, height);
    fill(color,0,50);
    ellipse(startX, startY, 50);
}
    