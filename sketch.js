class Ball {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  draw_ball() {
    ellipse(this.x, this.y, this.size, this.size)
  }
  
}


function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let ball = new Ball(mouseX, mouseY, 50);
  ball.draw_ball();
  
  if (mouseIsPressed) {
    stroke(0);
  } else {
    stroke(255);
  }

}