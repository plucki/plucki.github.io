function setup(){
  createCanvas(400,400);  
    background(200);
    
}

function draw(){
    if(mouseIsPressed){
        
        rect(200, mouseX, mouseY, 40);
    }
}