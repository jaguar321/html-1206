


//     Check it right now : https://twitter.com/Metamoar










let m,bk,stuff;
let t=0;
let col=['#ff628c', '#FF9D00', '#fad000', '#2ca300', '#2EC4B6', '#5D37F0'];

function setup() {
  createCanvas(windowWidth,windowHeight);
  m=min(width,height);
  
  vinyl=createGraphics(width/2+10,height/2+10);
  vinyl.noFill();
  vinyl.translate(width/4,height/4);
  for (var r=m/60;r<m/2;r++){
    if (r<m/10) vinyl.stroke(random(200,240));
    else vinyl.stroke(random(50));
    vinyl.circle(0,0,r);
  }
  
  bk=createGraphics(width,height);
  bk.drawingContext.shadowOffsetY = height*0.75;
  bk.drawingContext.shadowBlur = 150;
  bk.drawingContext.shadowColor = 'black';
  bk.stroke(255);
  bk.fill(255);
  bk.background(255);
  bk.ellipse(width/2,0,500,100);
  
  col=random(col);
}

function draw() {
  /// Pre Draw
  push();image(bk,0,0);
  translate(width*1.6-width*easeOutSine(min(1,t)),height/2);
  rotate(max(-t,-1));
  image(vinyl,-width/4,-height/4);
  t+=0.01;pop();
  
  /// Real Draw B)
  translate(width*0.6-m/2,height/2-m/4);
  noStroke();
  stuff=createGraphics(m/2,m/2+20)
  stuff.fill(255,97,138);
  stuff.rect(0,0,m/2,m/2+20);
  stuff.fill(255);
  stuff.noStroke();
  stuff.push();
  stuff.translate(m/4,m/4);
  stuff.beginShape();
  stuff.curveVertex(-m/8,0);
  stuff.curveVertex(-m/8,0);
  stuff.curveVertex(0,-m/16);
  stuff.curveVertex(m/8,0);
  stuff.curveVertex(0,m/16);
  stuff.curveVertex(-m/8,0);
  stuff.curveVertex(-m/8,0);
  stuff.endShape();
  stuff.beginShape();
  stuff.curveVertex(m/8,0);
  stuff.curveVertex(m/8,0);
  stuff.curveVertex(0,-m/16);
  stuff.curveVertex(-m/8,0);
  stuff.curveVertex(0,m/16);
  stuff.curveVertex(m/8,0);
  stuff.curveVertex(m/8,0);
  stuff.endShape();
  stuff.fill(col);
  stuff.circle(map(mouseX,0,width,-m/45,m/45),map(mouseY,0,width,-m/75,m/75),m/10);
  stuff.fill(0);
  stuff.circle(map(mouseX,0,width,-m/35,m/35),map(mouseY,0,width,-m/65,m/65),m/16);
  stuff.noFill();
  stuff.stroke(0);
  stuff.strokeWeight(10*(m/800));
  stuff.push();stuff.translate(-m/8,-m/32);stuff.rotate(-0.5);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.push();stuff.translate(-m/12,-m/18);stuff.rotate(-0.4);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.push();stuff.translate(-m/24,-m/13);stuff.rotate(-0.3);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.push();stuff.translate(0,-m/12);stuff.rotate(-0.2);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.push();stuff.translate(m/8,-m/32);stuff.rotate(0.1);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.push();stuff.translate(m/12,-m/18);stuff.rotate(0);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.push();stuff.translate(m/24,-m/13);stuff.rotate(-0.1);stuff.bezier(0,0,-m/40,-m/50,m/50,-m/16,0,-m/16);stuff.pop();
  stuff.pop();
  
  stuff.stroke(255);
  stuff.strokeWeight(3);
  stuff.fill(255);
  stuff.textAlign(RIGHT);
  stuff.textSize(64*(m/800));
  stuff.text('Pixelmoar',m/2-m/64,m/2-m/16);
  stuff.text('Metamoar',m/2-m/64,m/2);
  image(stuff,0,-10);
}


function easeOutSine(x) {
  return sin((x * PI) / 2);
}