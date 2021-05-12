const ball = {
  x: 50,
  y: 50,
  radius: 10,
  speedX: 3,
  speedY: 3
}

//PATH SAMO PAMTI
const snake = {
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
  path: {
    x: this.x - 10,
    y: this.y - 10
  },
  moveRight: function () {
    this.path.x = this.x;
    this.path.y = this.y;
    this.x = this.x + this.speed;
  },
  moveLeft: function () {
    this.path.x = this.x;
    this.path.y = this.y;
    this.x = this.x - this.speed;
  },
  moveUp: function () {
    this.path.x = this.x;
    this.path.y = this.y;
    this.y = this.y - this.speed;
  },
  moveDown: function () {
    this.path.x = this.x;
    this.path.y = this.y;
    this.y = this.y + this.speed;
  },
}
const tail1 = {
  path: {
    x: 0,
    y: 0
  },
  createPath: function () {
    this.x = snake.path.x;
    this.y = snake.path.y;
  },
  assignPath: function () {
    this.path.x = snake.path.x;
    this.path.y = snake.path.y;
  },
  display: function () {
    noStroke();
    fill(255);
    square(this.x, this.y, 10);
  },
  // follow: function () {
  //   tail1.x = snake.path.x;
  //   tail1.y = snake.path.y;
  // },
}

const tail2 = {
  createPath: function () {
    this.x = tail1.path.x;
    this.y = tail1.path.y;
  },
  display: function () {
    noStroke();
    fill(255);
    square(this.x, this.y, 10)
    // print(tail1.path.x)
  }
}

// console.log(snake.tail.x)
// const tailPath = {
//   x: 0,
//   y: 0,
// }


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

function setup() {
  createCanvas(500, 800);
  background(0);
  noStroke();
  fill(255);
  circle(200, 200, 255);
  // square1.create(100, 100);

  //UBACUJE square[i] u array squarova
  for (let i = 0; i < 4; i++) {
    squares[i] = new Square((i + 1) * 100, 100);
  }

  // setInterval(snake.moveRight(), 500);

}

//snake movement

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    // tail.path.x = snake.x;
    // tail.path.y = snake.y;
    snake.moveRight();
  }
  if (keyCode === LEFT_ARROW) {
    snake.moveLeft();
  }
  if (keyCode === UP_ARROW) {
    snake.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    snake.moveDown();
  }
}

// if (keyIsDown(RIGHT_ARROW)) {
//   snake.moveRight();
// }

function draw() {
  //BALL creation
  background(0);
  noStroke();
  fill(255);
  circle(ball.x, ball.y, ball.radius);

  //snake creation
  snake.display();
  tail1.display();
  tail1.createPath();
  tail1.assignPath();
  tail2.createPath();
  tail2.display();
  // tail.follow();
  // SNAKE MOVEMENT
  // if (keyIsDown(RIGHT_ARROW)) {
  //   snake.moveRight();
  // }
  // if (keyIsDown(LEFT_ARROW)) {
  //   snake.moveLeft();
  // }
  // if (keyIsDown(UP_ARROW)) {
  //   snake.moveUp();
  // }
  // if (keyIsDown(DOWN_ARROW)) {
  //   snake.moveDown();
  // }

  // setInterval(keyPressed(), 500);


  // ubaci kocke
  // for (let i = 0; i < squares.length; i++) {
  //   if (squares[i].exists) {
  //     squares[i].create(squares[i].x, squares[i].y)
  //     // print(squares[0].exists)
  //   }
  //   // xOffset += 100;
  // }

  for (let i = 0; i < 4; i++) {
    if (squares[i].exists) {
      squares[i].display();
    }
  }

  // print(squares)
  // squares[0].create(100, 100);
  // squares[1].create(200, 100);

  // createSquare(200, 200);
  // if (squares[0].exists) {
  //   squares[0].create(100, 100);
  // }






  // BOUNCING of canvas
  if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
    ball.speedX = -ball.speedX;
  }

  if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
    ball.speedY = -ball.speedY;
  }

  // Kretanje lopte
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;

  //GRAVITY

  // ball.speedY = ball.speedY + 0.5;
  // if (ball.speedY < 0) {
  //   ball.speedY = ball.speedY + 0.5
  // } else if (ball.speedY > 0) {
  //   ball.speedY = ball.speedY - 0.5
  // }
  // if (ball.speedY > 0.3 && ball.speedY < 0.4) { // BUDZA
  //   ball.speedY = 0.5;
  // }
  // print(`X speed: ${ball.speedX}`)
  // print(`Y speed: ${ball.speedY}`)

  // if (ball.speedY < 4) {
  //   ball.speedY = ball.speedY + 4;
  // }
  // ballSpeedY++; JEBEM TI GRAVITACIJU
  // print(ballSpeedY)


  //Rectangle creation
  noStroke();
  fill(255);
  square(player.x, player.y, player.width, player.height);

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

  // if (ball.y + ball.radius > height - player.height - 10) {
  //   if (ball.x > player.x && ball.x < player.x + player.width) {
  //     ball.speedY = -ball.speedY;
  //   }
  // }

  if (ball.y + ball.radius > height - player.height && ball.x > player.x && ball.x < player.x + player.width) {
    ball.speedY = -ball.speedY;
  }


  //ODBIJANJE OD KOCKICA
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].exists) {
      if (ball.y > squares[i].y && ball.y < squares[i].y + squares[i].size && ball.x > squares[i].x && ball.x < squares[i].x + squares[i].size) {
        ball.speedY = -ball.speedY;
        squares[i].exists = false;
        print(squares[i].exists);
      }
    }
  }

}
