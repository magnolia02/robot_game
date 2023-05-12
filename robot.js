function setup() {
  createCanvas(800, 600);
  background(107,142,35);
}

let img;
function preload() {
  img = loadImage('images/space.jpg');
}

function draw() {
  background(img); // clear the canvas and create a new background on each frame
  strokeWeight(0);

  // move robot to mouse position
  translate(mouseX, mouseY);
  
  //   connections
  fill(160,160,160);
  //   lower and upper body
  ellipse(0,118,18,25);
  //   arms and upper body
  ellipse(-30,76,16,16);
  ellipse(30,76,16,16);
  //   legs and lower body
  ellipse(-20,138,18,18);
  ellipse(20,138,18,18);
  //   head and upper body
  ellipse(0,55,18,25);
  
  
  //   head
  fill(255);
  ellipse(0, 0, 130, 120);
  
  //   "glasses"
  fill(140);
  ellipse(0,-3,138,52)

  //   outer eyes
  fill(230);
  ellipse(-28, -3, 44, 36);
  ellipse(28, -3, 44, 36);
  
  //   inner eyes
  fill(137,196,255);
  ellipse(-28, -3, 30, 30);
  ellipse(28, -3, 30, 30);
  // fill(74,165,255);
  fill(0);
  ellipse(-28, -3, 20, 20);
  ellipse(28, -3, 20, 20);
  
  //   upperbody
  fill(255);
  quad(-30,64,30,64,15,113,-15,113);
  
  //   lower body
  quad(-22,121,22,121,12,151,-12,151)
  
  //   legs
  quad(-26,128,-20,151,-28,211,-65,216);
  quad(26,128,20,151,28,211,65,216);
    
  //   arms
  quad(-35,68,-32,86,-70,116,-85,91);
  quad(35,68,32,86,70,116,85,91);
    
  //   hat
  fill(30);
  quad(-6,-56,6,-89,58,-70,47,-40)
  strokeWeight(8);
  stroke(30);
  line(-15,-62,55,-36);

}