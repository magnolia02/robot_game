let angle = 0;

let img;
function preload() {
  img = loadImage('images/stars.jpg');
}
function setup() {
  createCanvas(800,600);
  image(img, 0, 0);
}

function draw() {
  background(img);

  // Draw sun
  noStroke();
  fill(255);
  ellipse(width / 2, height / 2, 150, 150);

  // Calculate planet positions
  let planet1_x = width / 2 - 200 * cos(angle);
  let planet1_y = height / 2 + 200 * sin(angle);
  let planet2_x = width / 2 + 200 * cos(angle);
  let planet2_y = height / 2 - 200 * sin(angle);
  let planet3_x = width / 2 + 300 * cos(angle);
  let planet3_y = height / 2 + 300 * sin(angle);
  let planet4_x = width / 2 - 300 * cos(angle);
  let planet4_y = height / 2 - 300 * sin(angle);
  let planet5_x = width / 2 - 200 * cos(angle / 2);
  let planet5_y = height / 2 - 200 * sin(angle / 2);

  // Draw planets
  noStroke();
  fill(210,105,30); // dark orange
  ellipse(planet1_x, planet1_y, 30, 30);
  fill(139, 0, 0); // dark red
  ellipse(planet2_x, planet2_y, 40, 40);
  fill(0, 0, 139); // dark blue
  ellipse(planet3_x, planet3_y, 60, 60);
  fill(0,139,139); // blue
  ellipse(planet4_x, planet4_y, 50, 50);
  fill(128, 0, 128); // purple
  ellipse(planet5_x, planet5_y, 60, 60);

  // Calculate moon positions
  let moon1_x = planet1_x + 40 * cos(angle * 2); 
  let moon1_y = planet1_y + 40 * sin(angle * 2);
  let moon2_x = planet2_x + 50 * cos(angle * 1.5); 
  let moon2_y = planet2_y + 50 * sin(angle * 1.5);

  // Draw moons
  fill(255);
  ellipse(moon1_x, moon1_y, 10, 10);
  ellipse(moon2_x, moon2_y, 15, 15);

  // Update angle
  angle += 0.01;
}