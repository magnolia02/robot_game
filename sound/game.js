// Background image
function preload() {
  img = loadImage('images/stars.jpg');
}

// Create the canvas and set the background to the loaded image
function setup() {
  createCanvas(800, 600);
  image(img, 0, 0);
}

// Define the Robot class with a custom constructor and default constructor, and a draw function to create the robot
class Robot {
  
  constructor(x, y, img, size, color) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.size = size;
    this.color = color;
  }

  init() {
    this.x = 0;
    this.y = 0;
    this.img = null;
    this.size = 1;
    this.color = [123,104,238];
  }

  draw() {
    background(this.img); // clear the canvas and create a new background on each frame
    strokeWeight(0);

    // Move robot to specified position
    translate(this.x, this.y);
    scale(this.size);
    
    //   Connections
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(0, 118, 18, 25); // lower and upper body
    ellipse(-30, 76, 16, 16); // arms and upper body
    ellipse(30, 76, 16, 16);
    ellipse(-20, 138, 18, 18); // legs and lower body
    ellipse(20, 138, 18, 18);
    ellipse(0, 55, 18, 25); // head and upper body

    //   Head
    fill(255);
    ellipse(0, 0, 130, 120);

    //   "Glasses"
    fill(140);
    ellipse(0, -3, 138, 52)

    //   Outer eyes
    fill(230);
    ellipse(-28, -3, 44, 36);
    ellipse(28, -3, 44, 36);

    //   Inner eyes
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(-28, -3, 30, 30);
    ellipse(28, -3, 30, 30);
    fill(0);
    ellipse(-28, -3, 20, 20);
    ellipse(28, -3, 20, 20);

    //   Upper body
    fill(255);
    quad(-30, 64, 30, 64, 15, 113, -15, 113);

    //   Lower body
    quad(-22, 121, 22, 121, 12, 151, -12, 151)

    //   Legs
    quad(-26, 128, -20, 151, -28, 211, -65, 216);
    quad(26, 128, 20, 151, 28, 211, 65, 216);

    //   Arms
    quad(-35, 68, -32, 86, -70, 116, -85, 91);
    quad(35, 68, 32, 86, 70, 116, 85, 91);

    //   Hat
    fill(30);
    quad(-6, -56, 6, -89, 58, -70, 47, -40)
    strokeWeight(8);
    stroke(30);
    line(-15, -62, 55, -36);
  }
}

// Create an instance of the Robot class and call the draw function in a loop to create animation
function setup() {
  createCanvas(800, 600);
  let img = loadImage('images/space.jpg');
  robot = new Robot(width/2, height/2, img, .6, [this.color = [123,104,238]]);
}

// Define the Monster class with a constructor and a draw function to create the monster
class Monster {

  constructor(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
  }

  display() {
    //   Body
    fill(51, 153, 102);
    ellipse(this.x, this.y + (150 * this.size), 200 * this.size, 250 * this.size);

    //   Legs
    fill(102, 204, 153);
    rect(this.x - (50 * this.size), this.y + (230 * this.size), 30 * this.size, 80 * this.size, 10 * this.size);
    rect(this.x + (20 * this.size), this.y + (230 * this.size), 30 * this.size, 80 * this.size, 10 * this.size);

    //   Arms
    fill(102, 153, 51);
    //   Left arm
    push(); // save the current transformation
    translate(this.x - (85 * this.size), this.y + (95 * this.size)); // move the origin to the left arm position
    rotate(45); // rotate the arm by 45 degrees
    rect(0, 0, 30 * this.size, 100 * this.size, 10 * this.size); // draw the left arm
    pop(); // restore the previous transformation
    //   Right arm
    push(); // save the current transformation
    translate(this.x + (70 * this.size), this.y + (120 * this.size)); // move the origin to the right arm position
    rotate(-45); // rotate the arm by -45 degrees
    rect(0, 0, 30 * this.size, 100 * this.size, 10 * this.size); // draw the right arm
    pop(); // restore the previous transformation

    //   Head
    fill(102, 255, 153);
    ellipse(this.x, this.y, 150 * this.size, 200 * this.size);

    //   Eyes
    fill(255);
    ellipse(this.x - (30 * this.size), this.y - (20 * this.size), 50 * this.size, 50 * this.size);
    ellipse(this.x + (30 * this.size), this.y - (20 * this.size), 50 * this.size, 50 * this.size);

    //   Pupils
    fill(0);
    ellipse(this.x - (30 * this.size), this.y - (20 * this.size), 20 * this.size, 20 * this.size);
    ellipse(this.x + (30 * this.size), this.y - (20 * this.size), 20 * this.size, 20 * this.size);

    //   Angry eyebrows
    stroke(255, 0, 0);
    strokeWeight(5 * this.size);
    line(this.x - (50 * this.size), this.y - (40 * this.size), this.x - (20 * this.size), this.y - (30 * this.size));
    line(this.x + (20 * this.size), this.y - (30 * this.size), this.x + (50 * this.size), this.y - (40 * this.size));

    //   Mouth
    noStroke();
    fill(255, 0, 0); //red color
    ellipse(this.x, this.y + (30 * this.size), 60 * this.size, 30 * this.size);

    //   Teeth
    fill(255);
    triangle(this.x - (20 * this.size), this.y + (40 * this.size), this.x - (10 * this.size), this.y + (30 * this.size), this.x, this.y + (40 * this.size));
    triangle(this.x + (5 * this.size), this.y + (40 * this.size), this.x + (15 * this.size), this.y + (30 * this.size), this.x + (25 * this.size), this.y + (40 * this.size));
  }

  // Move the monster by updating its x position
  move() {
    this.x += this.speed;
    // Check if the monster has reached the right edge of the canvas
    if (this.x + (100 * this.size) > width) {
      this.speed = -abs(this.speed); // Reverse the direction
    }
    // Check if the monster has reached the left edge of the canvas
    if (this.x - (100 * this.size) < 0) {
      this.speed = abs(this.speed); // Reverse the direction
    }
  }
}

monster = new Monster(800, 300, 5, 0.6); // (width, height, speed, scaling)

// red dots
  dots = []; // array to store the red dots
  speed = 10; // initial speed of the dots
  elapsedTime = 0; // variable to keep track of elapsed time
  timeIncrement = 5000; // time increment for increasing the dot's speed (10 seconds)

  // function to create and add red dots to the array
  function addRedDots() {
    let dotPos = createVector(monster.x, monster.y + (150 * monster.size)); // create a vector at the center of the monster's body
    dots.push({ pos: dotPos, speed: speed }); // add the vector and speed to the dots array as an object
  }

  setInterval(addRedDots, 500); // call addRedDots function every 0.5 seconds

  // function to display and move the red dots
  function displayRedDots() {
    noStroke();
    fill(255, 0, 0); // red color
    for (let i = 0; i < dots.length; i++) {
      ellipse(dots[i].pos.x, dots[i].pos.y, 30 * monster.size, 30 * monster.size); // draw each dot
      dots[i].pos.y += dots[i].speed * monster.size; // move the dot downwards with its respective speed
    }
  }

// Create the draw function to display the monster and robot on the canvas

function draw() {
  //   Set the background to the loaded image
  background(img);
  noStroke();

  //   Update the monster's x position
  monster.move();

  //   Add monster
  push();
  translate(width*0, height*-0.35); // move origin to top left corner
  monster.display();
  pop();

  //   Add robot
  push();
  translate(mouseX, mouseY); // move the origin to the mouse position
  translate(-robot.x, -robot.y); // move the robot back to its original position
  robot.draw();
  pop();
  
  //   add dots
  push();
  translate(width*0, height*-0.35);
  displayRedDots(); // call the function to display and move the red dots
  pop();
  
  // increment elapsed time
  elapsedTime += deltaTime;

  // increase speed every 10 seconds
  if (elapsedTime >= timeIncrement) {
    elapsedTime = 0; // reset elapsed time
    speed += 5; // increase dot's speed
  }
}
// Background image
let img;
function preload() {
  img = loadImage('images/stars.jpg');
}

// Create the canvas and set the background to the loaded image
function setup() {
  createCanvas(800, 600);
  image(img, 0, 0);
}

// Define the Robot class with a custom constructor and default constructor, and a draw function to create the robot
class Robot {
  
  constructor(x, y, img, size, color) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.size = size;
    this.color = color;
  }

  init() {
    this.x = 0;
    this.y = 0;
    this.img = null;
    this.size = 1;
    this.color = [123,104,238];
  }

  draw() {
    background(this.img); // clear the canvas and create a new background on each frame
    strokeWeight(0);

    // Move robot to specified position
    translate(this.x, this.y);
    scale(this.size);
    
    //   Connections
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(0, 118, 18, 25); // lower and upper body
    ellipse(-30, 76, 16, 16); // arms and upper body
    ellipse(30, 76, 16, 16);
    ellipse(-20, 138, 18, 18); // legs and lower body
    ellipse(20, 138, 18, 18);
    ellipse(0, 55, 18, 25); // head and upper body

    //   Head
    fill(255);
    ellipse(0, 0, 130, 120);

    //   "Glasses"
    fill(140);
    ellipse(0, -3, 138, 52)

    //   Outer eyes
    fill(230);
    ellipse(-28, -3, 44, 36);
    ellipse(28, -3, 44, 36);

    //   Inner eyes
    fill(this.color[0], this.color[1], this.color[2]);
    ellipse(-28, -3, 30, 30);
    ellipse(28, -3, 30, 30);
    fill(0);
    ellipse(-28, -3, 20, 20);
    ellipse(28, -3, 20, 20);

    //   Upper body
    fill(255);
    quad(-30, 64, 30, 64, 15, 113, -15, 113);

    //   Lower body
    quad(-22, 121, 22, 121, 12, 151, -12, 151)

    //   Legs
    quad(-26, 128, -20, 151, -28, 211, -65, 216);
    quad(26, 128, 20, 151, 28, 211, 65, 216);

    //   Arms
    quad(-35, 68, -32, 86, -70, 116, -85, 91);
    quad(35, 68, 32, 86, 70, 116, 85, 91);

    //   Hat
    fill(30);
    quad(-6, -56, 6, -89, 58, -70, 47, -40)
    strokeWeight(8);
    stroke(30);
    line(-15, -62, 55, -36);
  }
}

// Create an instance of the Robot class and call the draw function in a loop to create animation
let robot;
function setup() {
  createCanvas(800, 600);
  let img = loadImage('images/space.jpg');
  robot = new Robot(width/2, height/2, img, .6, [this.color = [123,104,238]]);
}

// Define the Monster class with a constructor and a draw function to create the monster
class Monster {

  constructor(x, y, speed, size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
  }

  display() {
    //   Body
    fill(51, 153, 102);
    ellipse(this.x, this.y + (150 * this.size), 200 * this.size, 250 * this.size);

    //   Legs
    fill(102, 204, 153);
    rect(this.x - (50 * this.size), this.y + (230 * this.size), 30 * this.size, 80 * this.size, 10 * this.size);
    rect(this.x + (20 * this.size), this.y + (230 * this.size), 30 * this.size, 80 * this.size, 10 * this.size);

    //   Arms
    fill(102, 153, 51);
    //   Left arm
    push(); // save the current transformation
    translate(this.x - (85 * this.size), this.y + (95 * this.size)); // move the origin to the left arm position
    rotate(45); // rotate the arm by 45 degrees
    rect(0, 0, 30 * this.size, 100 * this.size, 10 * this.size); // draw the left arm
    pop(); // restore the previous transformation
    //   Right arm
    push(); // save the current transformation
    translate(this.x + (70 * this.size), this.y + (120 * this.size)); // move the origin to the right arm position
    rotate(-45); // rotate the arm by -45 degrees
    rect(0, 0, 30 * this.size, 100 * this.size, 10 * this.size); // draw the right arm
    pop(); // restore the previous transformation

    //   Head
    fill(102, 255, 153);
    ellipse(this.x, this.y, 150 * this.size, 200 * this.size);

    //   Eyes
    fill(255);
    ellipse(this.x - (30 * this.size), this.y - (20 * this.size), 50 * this.size, 50 * this.size);
    ellipse(this.x + (30 * this.size), this.y - (20 * this.size), 50 * this.size, 50 * this.size);

    //   Pupils
    fill(0);
    ellipse(this.x - (30 * this.size), this.y - (20 * this.size), 20 * this.size, 20 * this.size);
    ellipse(this.x + (30 * this.size), this.y - (20 * this.size), 20 * this.size, 20 * this.size);

    //   Angry eyebrows
    stroke(255, 0, 0);
    strokeWeight(5 * this.size);
    line(this.x - (50 * this.size), this.y - (40 * this.size), this.x - (20 * this.size), this.y - (30 * this.size));
    line(this.x + (20 * this.size), this.y - (30 * this.size), this.x + (50 * this.size), this.y - (40 * this.size));

    //   Mouth
    noStroke();
    fill(255, 0, 0); //red color
    ellipse(this.x, this.y + (30 * this.size), 60 * this.size, 30 * this.size);

    //   Teeth
    fill(255);
    triangle(this.x - (20 * this.size), this.y + (40 * this.size), this.x - (10 * this.size), this.y + (30 * this.size), this.x, this.y + (40 * this.size));
    triangle(this.x + (5 * this.size), this.y + (40 * this.size), this.x + (15 * this.size), this.y + (30 * this.size), this.x + (25 * this.size), this.y + (40 * this.size));
  }

  // Move the monster by updating its x position
  move() {
    this.x += this.speed;
    // Check if the monster has reached the right edge of the canvas
    if (this.x + (100 * this.size) > width) {
      this.speed = -abs(this.speed); // Reverse the direction
    }
    // Check if the monster has reached the left edge of the canvas
    if (this.x - (100 * this.size) < 0) {
      this.speed = abs(this.speed); // Reverse the direction
    }
  }
}

let monster = new Monster(800, 300, 5, 0.6); // (width, height, speed, scaling)

// red dots
  let dots = []; // array to store the red dots
  let speed = 10; // initial speed of the dots
  let elapsedTime = 0; // variable to keep track of elapsed time
  let timeIncrement = 5000; // time increment for increasing the dot's speed (10 seconds)

  // function to create and add red dots to the array
  function addRedDots() {
    let dotPos = createVector(monster.x, monster.y + (150 * monster.size)); // create a vector at the center of the monster's body
    dots.push({ pos: dotPos, speed: speed }); // add the vector and speed to the dots array as an object
  }

  setInterval(addRedDots, 500); // call addRedDots function every 0.5 seconds

  // function to display and move the red dots
  function displayRedDots() {
    noStroke();
    fill(255, 0, 0); // red color
    for (let i = 0; i < dots.length; i++) {
      ellipse(dots[i].pos.x, dots[i].pos.y, 30 * monster.size, 30 * monster.size); // draw each dot
      dots[i].pos.y += dots[i].speed * monster.size; // move the dot downwards with its respective speed
    }
  }

// Create the draw function to display the monster and robot on the canvas

function draw() {
  //   Set the background to the loaded image
  background(img);
  noStroke();

  //   Update the monster's x position
  monster.move();

  //   Add monster
  push();
  translate(width*0, height*-0.35); // move origin to top left corner
  monster.display();
  pop();

  //   Add robot
  push();
  translate(mouseX, mouseY); // move the origin to the mouse position
  translate(-robot.x, -robot.y); // move the robot back to its original position
  robot.draw();
  pop();
  
  //   add dots
  push();
  translate(width*0, height*-0.35);
  displayRedDots(); // call the function to display and move the red dots
  pop();
  
  // increment elapsed time
  elapsedTime += deltaTime;

  // increase speed every 10 seconds
  if (elapsedTime >= timeIncrement) {
    elapsedTime = 0; // reset elapsed time
    speed += 5; // increase dot's speed
  }
}
