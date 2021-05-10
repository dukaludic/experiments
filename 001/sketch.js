function setup() {
  createCanvas(500, 800);
  background(0);
  noStroke();
  fill(255);
  circle(200, 200, 255);
  square1.create(100, 100);
}

ballX = 50;
ballY = 50;
ballRadius = 10;
// dirX = 0;
rectX = 0;
rectY = 800 - 20; // ne znam zasto height ne radi
rectWidth = 100;
rectHeight = 10;
ballSpeedX = 3;
ballSpeedY = 3;

// Kockice za rusenje
let kocka = {
  exists: true,
  size: 300,
  height: 5,
  x: 100,
  y: 200
};

let xDir = 0;
let xTemp = [];
let yDir = 0;
let yTemp = [];


// function createSquare(x, y) {
//   noStroke();
//   fill(255);
//   square(x, y, 20);
// }

let squares = [];

function createSquares(n, y) {
  x = 100;
  for (let i = 0; i < n; i++) {
    squares[i] = {
      x: x,
      y: y,
      size: 20,
      exists: true,
      create(x, y) {
        noStroke();
        fill(255);
        square(x, y, 20);
      },
    }
    x += 100; // offset da budu razmaknute
  }
}

let square1 = {
  x: 100,
  y: 100,
  size: 20,
  exists: true,
  create(x, y) {
    noStroke();
    fill(255);
    square(x, y, 20);
  }
}

createSquares(6, 100);

function draw() {
  let xOffset = 0;
  //BALL creation
  background(0);
  noStroke();
  fill(255);
  circle(ballX, ballY, ballRadius);


  // ubaci kocke
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].exists) {
      squares[i].create(squares[i].x, squares[i].y)
      // print(squares[0].exists)
    }
    // xOffset += 100;
  }
  // print(squares)
  // squares[0].create(100, 100);
  // squares[1].create(200, 100);

  // createSquare(200, 200);
  // if (squares[0].exists) {
  //   squares[0].create(100, 100);
  // }






  // BOUNCING of canvas
  if (ballX + ballRadius > width || ballX - ballRadius < 0) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballY + ballRadius > height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY * 0.9;
  }

  // Kretanje lopte
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  ballSpeedY = ballSpeedY + 0.664;
  // if (ballSpeedY > -4) {
  //   ballSpeedY = -4;
  // }
  // ballSpeedY++; JEBEM TI GRAVITACIJU
  // print(ballSpeedY)


  //Rectangle creation
  noStroke();
  fill(255);
  rect(rectX, rectY, rectWidth, rectHeight);

  // Rectangle position and capping width to stay on canvas
  if (mouseX + rectWidth / 2 > width) {
    rectX = width - rectWidth;
  } else if (mouseX - rectWidth / 2 < 0) {
    rectX = 0;
  } else {
    rectX = mouseX - rectWidth / 2;
  }

  // ODBIJANJE OD RECTA

  if (ballY + ballRadius > height - rectHeight - 10) {
    if (ballX > rectX && ballX < rectX + rectWidth) {
      ballSpeedY = -ballSpeedY;
    }
  }

  //ODBIJANJE OD KOCKICA
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].exists) {
      if (ballY > squares[i].y && ballY < squares[i].y + squares[i].size && ballX > squares[i].x && ballX < squares[i].x + squares[i].size) {
        ballSpeedY = -ballSpeedY;
        squares[i].exists = false;
        print(squares[i].exists);
      }
    }
  }

  // if (squares[1].exists) {  // NESTAJU OBE ZATO STO SU ISTI USLOVI SQUARES[i].x/y su uvek isti
  //   if (ballY > squares[1].y && ballY < squares[1].y + squares[1].size && ballX > squares[1].x && ballX < squares[1].x + squares[1].size) {
  //     ballSpeedY = -ballSpeedY;
  //     squares[1].exists = false;
  //     print(squares[1].exists);
  //   }
  // }

  // if (squares[2].exists) {  // NESTAJU OBE ZATO STO SU ISTI USLOVI SQUARES[i].x/y su uvek isti
  //   if (ballY > squares[2].y && ballY < squares[2].y + squares[2].size && ballX > squares[2].x && ballX < squares[2].x + squares[2].size) {
  //     ballSpeedY = -ballSpeedY;
  //     squares[2].exists = false;
  //     print(squares[2].exists);
  //   }
  // }
  // MORALO BI DA SE BUDZI SA OVIM xOffset i opet ne valja
  // if (squares[1].exists) {
  //   if (ballY > squares[1].y && ballY < squares[1].y + squares[1].size && ballX > squares[1].x + xOffset && ballX < squares[1].x + xOffset + squares[1].size) {
  //     ballSpeedY = -ballSpeedY;
  //     squares[1].exists = false;
  //     print(squares[1].exists);
  //   }
  // }


  // ODREDJIVANJE SMERA
  // AKO SE X POVECAVA IDE DESNO
  // AKO SE Y POVECAVA IDE NA DOLE
  // if (xTemp.length < 3) {
  //   xTemp.push(ballX);
  // } else {
  //   xTemp.pop();
  //   xTemp.unshift(ballX);
  // }
  // // print(xTemp);
  // if (xTemp[0] > xTemp[2]) {
  //   xDir = 1; //Ide u desno
  // } else {
  //   xDir = -1; //Ide u levo
  // }





  print(canvas.width)
  // KOCKICE ZA RUSENJE

  // noStroke();
  // fill(255, 100);
  // rect(kocka.x, kocka.y, kocka.size);




  // Pogodak kocke


  // ballSpeedY = -ballSpeedY;
  // if (ballX < kocka.x + kocka.size && ballX > kocka.x) {
  //   if (ballX < kocka.x + kocka.size && ballX > kocka.x &&
  //     ballY < kocka.y + kocka.size && ballY > kocka.y && kocka.exists) {
  //     ballSpeedY = -ballSpeedY;
  //   }
  // }

  // if (ballY > kocka.y && kocka.y + kocka.size > ballY) {   //
  //   if (ballX < kocka.x + kocka.size && ballX > kocka.x &&
  //     ballY < kocka.y + kocka.size && ballY > kocka.y && kocka.exists) {
  //     ballSpeedY = -ballSpeedY;
  //   }
  // }
  // if (ballY > kocka.y && kocka.y + kocka.size > ballY) {   //
  //   if (ballX < kocka.x + kocka.size && ballX > kocka.x &&
  //     ballY < kocka.y + kocka.size && ballY > kocka.y && kocka.exists) {
  //     ballSpeedY = -ballSpeedY;
  //   }
  // }


}
