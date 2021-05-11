const ball = {
  x: 50,
  y: 50,
  radius: 10,
  speedX: 3,
  speedY: 3
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

  print(squares)
}

function draw() {
  let xOffset = 0;
  //BALL creation
  background(0);
  noStroke();
  fill(255);
  circle(ball.x, ball.y, ball.radius);


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
