function setup(){
  createCanvas(400,400);  
    background(200);
    
}

function draw(){
    if(mouseIsPressed){
        fill(random(255), 0,0);
        ellipse(200, mouseX, mouseY, 40);
    }
}