unitValues = [];

function preload() {
  table = loadTable("Assets/pvd1.csv", "csv", "header");
}

let hoverOverMe;
let showInfo = false;

function setup() {

  img = loadImage('Data/discbl copy.png');
  imge = loadImage('Data/cdcaseie.png');
  imgn = loadImage('Data/notes.png');
  imgs = loadImage('Data/spotifybl copy.png');
  bg = loadImage('Data/bg.jpeg');
  createCanvas(600, 600);
  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();
   hoverOverMe = createElement("h1", "HOVER FOR MORE INFO");
  hoverOverMe.mouseOver(() => showInfo = true);
  hoverOverMe.mouseOut(() => showInfo = false); 
    
}

function draw() {
  background(bg);
    
    push();
    translate(35, 250);
    img.resize(800, 800);
    image(img, 20, height / 10, img.width / 10, img.height / 10);
    pop();    
    
    push();
    translate(185, 225);
    imge.resize(800, 800);
   image(imge, 20, height / 10, imge.width / 10, img.height / 10);
    pop();
    
    push();
    translate(315, 150);
    imgn.resize(800, 800);
   image(imgn, 20, height / 10, imgn.width / 10, img.height / 10);
    pop();
    
    push();
    translate(440, 110);
    imgs.resize(800, 800);
   image(imgs, 20, height / 10, imgs.width / 10, img.height / 10);
    pop();
    
  for (var i = 0; i < numberOfRows; i++) {
    //place money
    text(table.getString(i, 0), i * 130 + 60, 420);
    //pull numbers
    unitValues[i] = table.getString(i, 1);
    //draw graph
      fill(255);
      
  }
   //determine highest value
   maxValue=max(unitValues);
  for (var k=0;k<maxValue;k=k+20){
    fill(255);
      text(k,30,400-k);
     
      push();
      textSize(32);
      textStyle(BOLD);
      stroke(0);
      strokeWeight(3);
text('2018 results', 200, 80);
fill(0, 102, 153);
      pop();
      
      
      if (showInfo) {     
    textSize(15);
    text("-The most sold CD of 2018 was Scorpion by Drake" , width / 20, height/1.2);
    text("-The most downloaded album of 2018 was The Greatest Showman Soundtrack" , width / 20, height/1.15);     
    text("-The most downloaded single was This is Me, by the Greatest Showman" , width / 20, height/1.1);
    text("-The most streamed artist in 2018 was Drake" , width / 20, height/1.05);        
  }
      
  } 
  }


