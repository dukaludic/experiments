function setup() {
  createCanvas(500, 800);


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



function draw() {
  //BALL creation
  background(0);
  noStroke();
  fill(255);
  circle(ballX, ballY, ballRadius);


  // ubaci kocke
  function ubaciKocke(n) {
    let sizeX = (canvas.width - 100) / n;
    let positionX = 0;
    for (let i = 0; i < n; i++) {
      noStroke();
      fill(255, 100);
      rect(positionX, kocka.y, kocka.size, kocka.height);
      positionX = positionX + 100 + 25;
    }
  }
  // ubaciKocke(4);

  // BOUNCING of canvas
  if (ballX + ballRadius > width || ballX - ballRadius < 0) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballY + ballRadius > height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY;
  }

  // Kretanje lopte
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

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

  // if (yTemp.length < 3) {
  //   yTemp.push(ballY);
  // } else {
  //   yTemp.pop();
  //   yTemp.unshift(ballY);
  // }
  // // print(yTemp);
  // if (yTemp[0] > yTemp[2]) {
  //   yDir = 1; //Ide dole
  // } else {
  //   yDir = -1; //Ide gore
  // }
  // // print(yDir);



  print(canvas.width)
  // KOCKICE ZA RUSENJE

  noStroke();
  fill(255, 100);
  rect(kocka.x, kocka.y, kocka.size);




  // Pogodak kocke
  // if (ballY + ballRadius > height - rectHeight) {
  //   if (ballX + ballRadius > rectX && ballX < rectX + rectWidth) {
  //     ballSpeedY = -ballSpeedY;
  //     // print(ballSpeedY)
  //   }
  // }
  if (ballX < kocka.x + kocka.size && ballX > kocka.x &&
    ballY < kocka.y + kocka.size && ballY > kocka.y && kocka.exists
  ) {
    // ballSpeedY = -ballSpeedY;
    if (ballX < kocka.x + kocka.size && ballX > kocka.x) {
      ballSpeedY = -ballSpeedY;
    }
    if (ballY > kocka.y && kocka.y + kocka.size < ballY) {
      ballSpeedX = -ballSpeedX;
    }
  }


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



  if (ballX > kocka.x && ballX < kocka.x + kocka.size) {
    if (ballY > kocka.y && ballY < kocka.y + kocka.height) {
      ballSpeedY = -ballSpeedY;
    }
  }

  // if (ballY > kocka.y && ballY < kocka.y + kocka.size) {
  //   if (ballX > kocka.x && ballX < kocka.x + kocka.size) {
  //     ballSpeedX = -ballSpeedX;
  //   }
  // }


  // if (ballX > kocka.x && kocka.x + kocka.size > ballX) {
  //   if (ballX < kocka.x + kocka.size && ballX > kocka.x &&
  //     ballY < kocka.y + kocka.size && ballY > kocka.y && kocka.exists) {
  //     ballSpeedX = -ballSpeedX;
  //   }
  // }



  // if (xDir == 1 && yDir == 1) {
  //   ballSpeedY = -ballSpeedY;
  // }

  // if ()

  // if (ballSpeedX > ballSpeedY) {
  //   ballSpeedY = -ballSpeedY;
  // }
  // if (ballSpeedY > ballSpeedX)
  //   ballSpeedX = -ballSpeedX;

  // print(`X = ${ballSpeedX}`)
  // print(`Y = ${ballSpeedY}`)


  /* if ballX + ballRadius > mouseX - rectWidth / 2 && ballX < mouseX + rectWidth / 2
  */
}

