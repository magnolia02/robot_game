// Background image
function preload() { //deze bestanden worden vooraf geladen
  img = loadImage("images/stars.jpg");
  gameOverSound = loadSound("sound/gameoversoundeffect.mp3");
}

// Create the canvas and set the background to the loaded image
function setup() {
  createCanvas(800, 600);
  image(img, 0, 0); // Plaats de geladen afbeelding als achtergrond op positie (0, 0)
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

  init() { // Definieer de init-functie om de eigenschappen van de robot op nul of de standaardwaarden in te stellen
    this.x = 0;
    this.y = 0;
    this.img = null;
    this.size = 1;
    this.color = [123, 104, 238];
  }

  draw() {
    background(this.img); // clear the canvas and create a new background on each frame
    strokeWeight(0);

    // Move robot to specified position
    translate(this.x, this.y); // Verplaats het coördinatensysteem naar (this.x, this.y)
    scale(this.size); // Schaal de grootte van het coördinatensysteem naar this.size

    //   Connections
    fill(this.color[0], this.color[1], this.color[2]); // Vul met de kleur van de robot
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
    ellipse(0, -3, 138, 52);

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
    quad(-22, 121, 22, 121, 12, 151, -12, 151);

    //   Legs
    quad(-26, 128, -20, 151, -28, 211, -65, 216);
    quad(26, 128, 20, 151, 28, 211, 65, 216);

    //   Arms
    quad(-35, 68, -32, 86, -70, 116, -85, 91);
    quad(35, 68, 32, 86, 70, 116, 85, 91);

    //   Hat
    fill(30);
    quad(-6, -56, 6, -89, 58, -70, 47, -40);
    strokeWeight(8);
    stroke(30);
    line(-15, -62, 55, -36);
  }
}

// Create an instance of the Robot class and call the draw function in a loop to create animation
function setup() {
  createCanvas(800, 600);
  let img = loadImage("images/space.jpg");
  robot = new Robot(width / 2, height / 2, img, 0.6, [
    (this.color = [123, 104, 238]),
  ]);
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
    ellipse(this.x, this.y + 150 * this.size, 200 * this.size, 250 * this.size);

    //   Legs
    fill(102, 204, 153);
    rect(
      this.x - 50 * this.size,
      this.y + 230 * this.size,
      30 * this.size,
      80 * this.size,
      10 * this.size
    );
    rect(
      this.x + 20 * this.size,
      this.y + 230 * this.size,
      30 * this.size,
      80 * this.size,
      10 * this.size
    );

    //   Arms
    fill(102, 153, 51);
    //   Left arm
    push(); // save the current transformation
    translate(this.x - 85 * this.size, this.y + 95 * this.size); // move the origin to the left arm position
    rotate(45); // rotate the arm by 45 degrees
    rect(0, 0, 30 * this.size, 100 * this.size, 10 * this.size); // draw the left arm
    pop(); // restore the previous transformation
    //   Right arm
    push(); // save the current transformation
    translate(this.x + 70 * this.size, this.y + 120 * this.size); // move the origin to the right arm position
    rotate(-45); // rotate the arm by -45 degrees
    rect(0, 0, 30 * this.size, 100 * this.size, 10 * this.size); // draw the right arm
    pop(); // restore the previous transformation

    //   Head
    fill(102, 255, 153);
    ellipse(this.x, this.y, 150 * this.size, 200 * this.size);

    //   Eyes
    fill(255);
    ellipse(
      this.x - 30 * this.size,
      this.y - 20 * this.size,
      50 * this.size,
      50 * this.size
    );
    ellipse(
      this.x + 30 * this.size,
      this.y - 20 * this.size,
      50 * this.size,
      50 * this.size
    );

    //   Pupils
    fill(0);
    ellipse(
      this.x - 30 * this.size,
      this.y - 20 * this.size,
      20 * this.size,
      20 * this.size
    );
    ellipse(
      this.x + 30 * this.size,
      this.y - 20 * this.size,
      20 * this.size,
      20 * this.size
    );

    //   Angry eyebrows
    stroke(255, 0, 0);
    strokeWeight(5 * this.size);
    line(
      this.x - 50 * this.size,
      this.y - 40 * this.size,
      this.x - 20 * this.size,
      this.y - 30 * this.size
    );
    line(
      this.x + 20 * this.size,
      this.y - 30 * this.size,
      this.x + 50 * this.size,
      this.y - 40 * this.size
    );

    //   Mouth
    noStroke();
    fill(255, 0, 0); //red color
    ellipse(this.x, this.y + 30 * this.size, 60 * this.size, 30 * this.size);

    //   Teeth
    fill(255);
    triangle(
      this.x - 20 * this.size,
      this.y + 40 * this.size,
      this.x - 10 * this.size,
      this.y + 30 * this.size,
      this.x,
      this.y + 40 * this.size
    );
    triangle(
      this.x + 5 * this.size,
      this.y + 40 * this.size,
      this.x + 15 * this.size,
      this.y + 30 * this.size,
      this.x + 25 * this.size,
      this.y + 40 * this.size
    );
  }

  // Move the monster by updating its x position
  move() {
    this.x += this.speed;
    // Check if the monster has reached the right edge of the canvas
    if (this.x + 100 * this.size > width) {
      this.speed = -abs(this.speed); // Reverse the direction
    }
    // Check if the monster has reached the left edge of the canvas
    if (this.x - 100 * this.size < 0) {
      this.speed = abs(this.speed); // Reverse the direction
    }
  }
}

monster = new Monster(800, 300, 5, 0.6); // (width, height, speed, scaling)

// red fireballs
fireballs = []; // array to store the red fireballs
speed = 10; // initial speed of the fireballs
elapsedTime = 0; // variable to keep track of elapsed time
timeIncrement = 5000; // time increment for increasing the fireball's speed (5 seconds)

// function to create and add red fireballs to the array
function addRedFireballs() {
  let fireballPos = createVector(monster.x, monster.y + 150 * monster.size); // create a vector at the center of the monster's body
  fireballs.push({ pos: fireballPos, speed: speed }); // add the vector and speed to the fireballs array as an object
}

setInterval(addRedFireballs, 500); // call addRedFireballs function every 0.5 seconds

// function to display and move the red fireballs
function displayRedFireballs() {
  noStroke();
  fill(255, 0, 0); // red color
  for (let i = 0; i < fireballs.length; i++) {
    ellipse(fireballs[i].pos.x, fireballs[i].pos.y, 25, 25); // draw each fireball
    fireballs[i].pos.y += fireballs[i].speed; // move the fireball downwards with its respective speed
  }
}

// game over
let gameOver = false;

// check for collision between robot and fireballs
function checkCollision() {
  for (let i = 0; i < fireballs.length; i++) {
    let d = dist(robot.x, robot.y, fireballs[i].pos.x, fireballs[i].pos.y);
    let radii = robot.size * 120 + 12.5; // robot's radius + fireball's radius
    if (d < radii) {
      // collision occurred
      gameOver = true;
      // handle collision here (e.g. decrease player health, reset fireball position, etc.)
      return; // exit the function early, no need to check for more collisions
    }
  }
}

// Create the draw function to display the monster, robot and fireballs on the canvas
function draw() {
  // Set the background to the loaded image
  background(img);
  noStroke();

  // Update the monster's x position
  monster.move();

  // Add monster
  push();
  translate(width * 0, height * -0.35); // Move origin to top left corner
  monster.display();
  pop();

  // Add robot
  push();
  translate(mouseX, mouseY); // Move the origin to the mouse position
  translate(-robot.x, -robot.y); // Move the robot back to its original position
  robot.draw();
  pop();

  // Add fireballs
  push();
  translate(width * 0, height * -0.35);
  displayRedFireballs(); // Call the function to display and move the red fireballs
  pop();

  // Increment elapsed time of the fireballs
  elapsedTime += deltaTime;

  // Increase speed every 5 seconds of the fireballs
  if (elapsedTime >= timeIncrement) {
    elapsedTime = 0; // Reset elapsed time
    speed += 5; // Increase fireball's speed
  }

  // Check for collision between robot and fireballs
  checkCollision();

  if (gameOver) {
    background(0);
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    gameOverSound.play();
  }
}
