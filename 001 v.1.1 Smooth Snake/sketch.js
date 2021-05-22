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

// To fit in a grid nicely
// function foodGridRandom(number) {
//   return random(number / 10) * 10;
// }

// console.log(foodGridRandom(360));

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
  dir: "r",
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
  move: function () {
    // switch (this.dir) {
    //   case 'r':
    //     this.x = this.x + this.speed;
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //   // code block
    // }
    this.x = this.x + this.speed;
  },
  moveRight: function () {
    this.x = this.x + this.speed;
    // setInterval(function () { this.x = this.x + this.speed; }, 3000);
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

//ADD SNAKE
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

let counter = 0;

function setup() {
  createCanvas(500, 800);
  background(0);
  noStroke();
  fill(255);
  circle(200, 200, 255);

  // PROBA TEST INTERVAL
  timer = createP('timer')
  // setInterval(timeIt, 500);

  //Kretanje zmije postavljanje intervala
  setInterval(snakeMove, 300);
  //UBACUJE square[i] u array squarova
  for (let i = 0; i < 4; i++) {
    squares[i] = new Square((i + 1) * 100, 100);
  }

  //ADD SNAKEFOOD
  for (let i = 0; i < 15; i++) {
    snakeFood[i] = new Food(round(random(width / 10)) * 10, round(random(height / 10)) * 10, 10);
    console.log(snakeFood[i].x, snakeFood[i].y)
  }
  v1 = createVector(width / 2, height / 2)
}

function snakeMove() {
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
  switch (snakeBody[0].dir) {
    case 'r':
      snakeBody[0].x = snakeBody[0].x + 10;
      break;
    case 'l':
      snakeBody[0].x = snakeBody[0].x - 10;
      break;
    case 'u':
      snakeBody[0].y = snakeBody[0].y - 10;
      break;
    case 'd':
      snakeBody[0].y = snakeBody[0].y + 10;
      break;
    default:
  }
}

function timeIt() {
  timer.html(counter);
  counter++;
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
    // snakeBody[0].moveRight();
    snakeBody[0].dir = "r";
  }
  if (keyCode === LEFT_ARROW) {
    // snakeBody[0].moveLeft();
    snakeBody[0].dir = "l";
  }
  if (keyCode === UP_ARROW) {
    // snakeBody[0].moveUp();
    snakeBody[0].dir = "u";
  }
  if (keyCode === DOWN_ARROW) {
    // snakeBody[0].moveDown();
    snakeBody[0].dir = "d";
  }
}

let x = 0;

function draw() {
  //BALL creation
  background(0);
  noStroke();
  fill(255);
  circle(ball.x, ball.y, ball.radius);

  //PROBA TEST INTERVAL
  stroke(255);
  line(x, 0, x, height);

  x = x + 3;
  if (x > width) {
    x = 0;
  }

  //Rectangle creation
  noStroke();
  fill(255);
  rect(player.x, player.y, player.width, 10);

  // Prikazi zmiju
  //SNAKE MOVEMENT
  for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].display();
  }
  // snakeBody[0].x = snakeBody[0].x + 2;

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

  //TAIL FOLLOWING
  // for (let i = snakeBody.length - 1; i > 0; i--) { //snakeBody.length - 1 = 4
  //   if (i === 1) {
  //     snakeBody[i].tmpX = snakeBody[i - 1].x;
  //     snakeBody[i].tmpY = snakeBody[i - 1].y;
  //     snakeBody[i].x = snakeBody[i - 1].x;
  //     snakeBody[i].y = snakeBody[i - 1].y;
  //   } else {
  //     snakeBody[i].tmpX = snakeBody[i - 1].x;
  //     snakeBody[i].tmpY = snakeBody[i - 1].y;
  //     snakeBody[i].x = snakeBody[i - 1].tmpX;
  //     snakeBody[i].y = snakeBody[i - 1].tmpY;
  //   }
  // }

  //SNAKE MOVING (CHANGING DIRECTION)
  // switch (snakeBody[0].dir) {
  //   case 'r':
  //     snakeBody[0].x = snakeBody[0].x + 1;
  //     break;
  //   case 'l':
  //     snakeBody[0].x = snakeBody[0].x - 1;
  //     break;
  //   case 'u':
  //     snakeBody[0].y = snakeBody[0].y - 1;
  //     break;
  //   case 'd':
  //     snakeBody[0].y = snakeBody[0].y + 1;
  //     break;
  //   default:
  // }



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

  // stroke(255);
  // line(100, 100, 400, 256);

  // circle(mouseX, mouseY, 100);
  // line(100, 100, mouseX, mouseY);
  // line(v1.x, v1.y, mouseX, mouseY);



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
