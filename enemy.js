class Monster {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    display() {
      //body
      fill(51, 153, 102);
      ellipse(this.x, this.y + 150, 200, 250);
  
      //legs
      fill(102, 204, 153);
      rect(this.x - 50, this.y + 230, 30, 80, 10);
      rect(this.x + 20, this.y + 230, 30, 80, 10);
  
      //arms
      fill(102, 153, 51);
      //   left arm
      push(); // save the current transformation
      translate(this.x - 85, this.y + 95); // move the origin to the left arm position
      rotate(45); // rotate the canvas by 45 degrees
      rect(0, 0, 30, 100, 10); // draw the left arm
      pop(); // restore the previous transformation
      //   right arm
      push(); // save the current transformation
      translate(this.x + 70, this.y + 120); // move the origin to the right arm position
      rotate(-45); // rotate the canvas by -45 degrees
      rect(0, 0, 30, 100, 10); // draw the right arm
      pop(); // restore the previous transformation
  
      //head
      fill(102, 255, 153);
      ellipse(this.x, this.y, 150, 200);
  
      //eyes
      fill(255);
      ellipse(this.x - 30, this.y - 20, 50, 50);
      ellipse(this.x + 30, this.y - 20, 50, 50);
  
      //pupils
      fill(0);
      ellipse(this.x - 30, this.y - 20, 20, 20);
      ellipse(this.x + 30, this.y - 20, 20, 20);
  
      //angry eyebrows
      stroke(255, 0, 0);
      strokeWeight(5);
      line(this.x - 50, this.y - 40, this.x - 20, this.y - 30);
      line(this.x + 20, this.y - 30, this.x + 50, this.y - 40);
  
      //mouth
      noStroke();
      fill(255, 0, 0); //red color
      ellipse(this.x, this.y + 30, 60, 30);
  
      //teeth
      fill(255);
      triangle(this.x - 20, this.y + 40, this.x - 10, this.y + 30, this.x, this.y + 40);
      triangle(this.x + 5, this.y + 40, this.x + 15, this.y + 30, this.x + 25, this.y + 40);
    }
  
    move(x, y) {
      this.x += x;
      this.y += y;
    }
  }
  
  let monster = new Monster(200, 300);
  
  function setup() {
    createCanvas(400, 500);
  }
  
  function draw() {
    background(220);
    translate(width*0, height*-0.3); // move origin to top left corner
    monster.display();
  
  }  
  