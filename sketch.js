//Ball
let ballX = 300;
let ballY = 200;
let ballD = 15;
let radius = ballD / 2;

let speedX = 6;
let speedY = 6;

//Racket
let racketX = 5;
let racketY = 150;
let racketW = 10;
let racketH = 85;


//Enemy's racket
let racket2X = 590;
let racket2Y = 200;
let racket2W = 10;
let racket2H = 85;
let racket2YSpeed;
let errorChance = 0;

//Game Score
let myScore = 0;
let enemyScore = 0;

function setup() {
  createCanvas(600, 400);
}

//Ball functions
function showBall() {
  let ball = circle(ballX, ballY, ballD);
}

function moveBall() {
  ballX += speedX;
  ballY += speedY;
}

function unstuckBall(){
  if (ballX + radius < 0){
  console.log('bolinha ficou presa');
  ballX = 300;
  }
}

//Racket functions
function showRacket() {
  let racket = rect(racketX, racketY, racketW, racketH);
}

function moveRacket() {
    if (keyIsDown(87)) {
    racketY -= 10;
    }
    if (keyIsDown(83)) {
    racketY += 10;
  }
}

function racketCollision() {
  if (ballX - radius < racketX + racketW && 
      ballY - radius < racketY + racketH && 
      ballY + radius > racketY) {
        speedX *= -1;
  }
}

  //Enemy's racket
  function showRacket2(){
    let racket2 = rect(racket2X, racket2Y, racket2W, racket2H);
}
 
  function moveRacket2(){
    racket2YSpeed = ballY - racket2Y - racket2W + 30 + errorChance;
    racket2Y += racket2YSpeed;
    calcErrorChance();

    /*
    if (keyIsDown(UP_ARROW)) {
    racket2Y -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
    racket2Y += 10;
    }
    */
  }

  function calcErrorChance() {
    if (enemyScore > myScore + 1) {
      errorChance = random (-54, -50)}
    else {errorChance = 0}
  }

function racketCollision2() {
    if(ballX + radius > racket2X && 
    ballY + radius < racket2Y + racket2H && 
    ballY + radius > racket2Y){
  speedX *= -1;
    }
}

//Border collision Functions
function borderCollision() {
  if (ballX > width - radius || 
      ballX < radius) {
    speedX *= -1;
  }
  if (ballY > height - radius || 
      ballY < radius) {
    speedY *= -1;
  } 
}

//Game Score
function showScore() {
  fill(255);
  textSize(16);
  text(myScore, 50, 20);
  text(enemyScore, 550, 20);
}

function scorePoint() {
  if (ballX > 590) {
    myScore += 1;
  }
  if (ballX < 10) {
    enemyScore += 1;
  }
}

function draw() {
  background(0);

  showBall();
  moveBall();
  unstuckBall();
  
  showRacket();
  moveRacket();
  racketCollision();
  
  showRacket2();
  moveRacket2();
  racketCollision2();
  
  borderCollision();
  
  showScore();
  scorePoint();
}
