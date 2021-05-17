const ball = {
  x: 50,
  y: 50,
  radius: 10,
  speedX: 3,
  speedY: 3
}

const snakeBody = [];

function AddSnake(x, y, tmpX, tmpY) { // x = 40 y = 50
  this.x = x;
  this.y = y;
  this.tmpX = tmpX;
  this.tmpY = tmpY;
  this.display = function () {
    noStroke();
    fill(255);
    square(this.x, this.y, 10);
  }
}

const snakeFood = []

function Food(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.exists = true;
  this.display = function () {
    noStroke();
    fill(0, 100, 0);
    square(this.x, this.y, size)
  }
}

//PATH = Temporary variable
snakeBody[0] = {
  x: 50,
  y: 50,
  size: 10,
  body: 3,
  speed: 10,
  display: function () {
    noStroke();
    fill(255);
    square(this.x, this.y, this.size)
  },
  tmpX: this.x - 10,
  tmpY: this.y - 10,
  moveRight: function () {
    this.x = this.x + this.speed;
  },
  moveLeft: function () {
    this.x = this.x - this.speed;
  },
  moveUp: function () {
    this.y = this.y - this.speed;
  },
  moveDown: function () {
    this.y = this.y + this.speed;
  },
}


const player = {
  x: 0,
  y: 800 - 20,
  width: 100,
  height: 10
}

let squares = [];

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.size = 20;
  this.exists = true;
  this.display = function () {
    noStroke();
    fill(255);
    square(x, y, 20);
  }
}

let snakeSize = 3;
let startCoordinateX = 40;
let startCoordinateY = 50;
let tmpX = 40;
let tmpY = 50;
for (let i = 1; i <= snakeSize; i++) {
  snakeBody[i] = new AddSnake(startCoordinateX, startCoordinateY, tmpX, tmpY);
  tmpX = tmpX - 10;
  startCoordinateX = startCoordinateX - 10;
}

function setup() {
  createCanvas(500, 800);
  background(0);
  noStroke();
  fill(255);
  circle(200, 200, 255);

  //UBACUJE square[i] u array squarova
  for (let i = 0; i < 4; i++) {
    squares[i] = new Square((i + 1) * 100, 100);
  }

  //ADD SNAKE


  //ADD SNAKEFOOD
  for (let i = 0; i < 15; i++) {
    snakeFood[i] = new Food(random(width), random(height), 10);
  }
}



function keyPressed() {
  for (let i = snakeBody.length - 1; i > 0; i--) { //snakeBody.length - 1 = 4
    if (i === 1) {
      snakeBody[i].tmpX = snakeBody[i - 1].x;
      snakeBody[i].tmpY = snakeBody[i - 1].y;
      snakeBody[i].x = snakeBody[i - 1].x;
      snakeBody[i].y = snakeBody[i - 1].y;
    } else {
      snakeBody[i].tmpX = snakeBody[i - 1].x;
      snakeBody[i].tmpY = snakeBody[i - 1].y;
      snakeBody[i].x = snakeBody[i - 1].tmpX;
      snakeBody[i].y = snakeBody[i - 1].tmpY;
    }
  }

  if (keyCode === RIGHT_ARROW) {
    snakeBody[0].moveRight();
  }
  if (keyCode === LEFT_ARROW) {
    snakeBody[0].moveLeft();
  }
  if (keyCode === UP_ARROW) {
    snakeBody[0].moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    snakeBody[0].moveDown();
  }
}

function draw() {
  //BALL creation
  background(0);
  noStroke();
  fill(255);
  circle(ball.x, ball.y, ball.radius);

  //Rectangle creation
  noStroke();
  fill(255);
  rect(player.x, player.y, player.width, 10);

  // Ubaci zmiju
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].display();
  }

  // ubaci kocke
  for (let i = 0; i < 4; i++) {
    if (squares[i].exists) {
      squares[i].display();
    }
  }

  //Prikazi hranu
  for (let i = 0; i < snakeFood.length; i++) {
    if (snakeFood[i].exists === true) {
      snakeFood[i].display();
    }
  }


  // Jedenje

  // 
  for (let i = 0; i < snakeFood.length; i++) {
    if (snakeFood[i].x < snakeBody[0].x + snakeBody[0].size &&
      snakeFood[i].x + snakeFood[i].size > snakeBody[0].x &&
      snakeFood[i].y < snakeBody[0].y + snakeBody[0].size &&
      snakeFood[i].y + snakeFood[i].size > snakeBody[0].y &&
      snakeFood[i].exists) {
      snakeFood[i].exists = false;
      snakeBody[snakeBody.length] = new AddSnake(-10, -10, tmpX, tmpY); // -10 je budza da se pojavi van kanvasa kao startna pozicija
      break;
    }
  }

  // console.log(snakeBody.length)

  // snakeBody[i] = new AddSnake(startCoordinateX, startCoordinateY, tmpX, tmpY);
  // tmpX = tmpX - 10;
  // startCoordinateX = startCoordinateX - 10;


  // BOUNCING of canvas
  if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
    ball.speedX = -ball.speedX;
  }

  if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
  }

  // Kretanje lopte
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY * 0.8;

  //GRAVITY
  ball.speedY = ball.speedY + 0.2;
  // console.log(ball.speedY)



  // Rectangle position and capping width to stay on canvas
  if (mouseX + player.width / 2 > width) {
    player.x = width - player.width;
  } else if (mouseX - player.width / 2 < 0) {
    player.x = 0;
  } else {
    player.x = mouseX - player.width / 2;
  }

  // player.x = 200;

  // ODBIJANJE OD RECTA
  if (ball.y + ball.radius >= height - player.height && ball.x >= player.x && ball.x <= player.x + player.width) {
    ball.speedY = -ball.speedY;
  }


  //ODBIJANJE OD KOCKICA
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].exists) {
      if (ball.y > squares[i].y && ball.y < squares[i].y + squares[i].size && ball.x > squares[i].x && ball.x < squares[i].x + squares[i].size) {
        ball.speedY = -ball.speedY;
        squares[i].exists = false;
        // print(squares[i].exists);
      }
    }
  }
}
