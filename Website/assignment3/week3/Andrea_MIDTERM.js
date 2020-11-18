var stars = [];


function setup(){
    createCanvas(500, 600);
        background(0);

    for(var i = 0; i < 100; i++){
        stars[i] = new Star(random(width), random(height),random(50), random(20), random(104)); 

    }
}

function draw(){


    for(var i = 0; i < stars.length; i++){
        
        stars[i].drawStar();
        stars[i].moveStar();
        stars[i].resetStar();
    }
}

function Star(starX, starY, starR, starSize, speedX, speedY){
   
    this.x = starX;
    this.y = starY;
    this.r = starR;
    this.sz = starSize;
    this.spX = speedX;
    this.spY = speedY;

    this.drawStar = function(){
        push();
        fill (255);
        noStroke();
        ellipse(this.x, this.y, random(this.sz));
        pop();
    }

    this.moveStar = function(){

        this.x += random(-this.spX > random(this.spX));
        this.y += random(this.spY > random(-this.spY))+random(4.5);

    }

    this.resetStar = function(){
        if (this.y > height) {
      this.y = random(0, -height);
        }
    }
        
    }

