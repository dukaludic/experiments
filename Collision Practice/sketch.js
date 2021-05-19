function Point(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.display = function (size, color) {
    // gfx.beginPath();
    // gfx.arc(this.x, this.y, size, 0, 2 * Math.PI, true);
    // gfx.fillStyle = color;
    // gfx.fill();
    // gfx.strokeStyle = color;
    // gfx.stroke(); //CANVAS

    //p5
    fill(color);
    circle(this.x, this.y, size)
  }
}

//Probably createVector() in p5
function Vector(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.display = function (size, color) {
    // gfx.beginPath();
    // gfx.arc(this.x, this.y, size, 0, 2 * Math.PI, true);
    // gfx.fillStyle = color;
    // gfx.fill();
    // gfx.strokeStyle = color;
    // gfx.stroke(); //CANVAS

    //p5
    fill(color);
    circle(this.x, this.y, size)
  }

  this.add = function (vector) {
    return new Vector(this.x += vector.x,
      this.y += vector.y)
  }

  this.subtract = function (vector) {
    return new Vector(this.x -= vector.x,
      this.y -= vector.y)
  }

  this.multiply = function (multiplier) {
    return new Vector(this.x *= multiplier, this.y *= multiplier)
  }

  this.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  this.cross = function (vector) {
    return this.x * vector.y - this.y * vector.x;
  }
  this.dot = function (vector) {
    return this.x * vector.x + this.y * vector.y;
  }
}


let point1 = new Point(100, 100)

function setup() {
  createCanvas(800, 800);
  v1 = createVector(200, 100);
}


function draw() {
  background(0);
  stroke(255);
  line(200, 100, 500, 356)

  fill(100);
  noStroke();
  circle(mouseX, mouseY, 100)

  point1.display(10, '#666');

  stroke(0, 0, 255);
  line(v1.x, v1.y, mouseX, mouseY);
}
