/* 2020 Fall CSMA 101 F1, Echo Theohar, Andrea Jacquez, andrea.jacquezlugo@woodbury.edu */

//extra var + score
var score = 0;
var color;
//variables for ball
var ballX = 10;
var ballY = 10;
var diameter = 50; //for collison//
var directionX = 6;
var directionY = 6;

//variables for Paddles

var rectX = 10;
var rectY = 10;
var rectW = 100;
var rectH = 25;

//set up paddle psoition
var started = false;


function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    color = map(rectX, ballY, height, 0, 255);
    background( 0, 200, color);
    
    //bounces off wall//
    
    ballX = ballX + directionX;
    ballY = ballY + directionY;
    
    if (ballX < 0 || ballX > width) {
        
        directionX = -directionX;
    }
    
        if (ballY < 0 || ballY > height) {
        directionY = -directionY;
}
    
    //detect collsion with paddle//
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter / 2) >= rectY)) {
        directionX *= -1;
        directionY += -1;
        score++;
    }
    
    
    
    //draw ball
    fill(255, 0, 0);
    noStroke();
    ellipse(ballX, ballY, diameter);
    fill(0, 0, 200);
    noStroke();
    rect(rectX, rectY, rectW, rectH);
    
    //update paddle
    if (!started) {
        rectX = width / 2;
        rectY = height - 100;
        started = true;
        
    }
    
    fill(255, 255, 0);
    textStyle(BOLDITALIC);
    textSize(30);
text("Score: " + score, 10, 30);
        stroke(0);
    strokeWeight(2);
}

  function keyPressed() {
        if(keyCode === RIGHT_ARROW) {
            rectX +=50;
        }
        
        if(keyCode == LEFT_ARROW){
            
            rectX-= 50;
        }
    }