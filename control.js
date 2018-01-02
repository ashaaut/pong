let interval=undefined;
let movefirstPlayerPaddle = function(event) {
  let firstPaddle = document.getElementById("firstPaddle");
  if (event.keyCode == 87) {
    firstPaddle.style.top = firstPlayer.moveUp() + "px";
  }
  if (event.keyCode == 83) {
    firstPaddle.style.top = firstPlayer.moveDown() + "px";
  }
}

let movesecondPlayerPaddle = function(event) {
  let secondPaddle = document.getElementById("secondPaddle");
  if (event.keyCode == 38) {
    secondPaddle.style.top = secondPlayer.moveUp() + "px";
  }
  if (event.keyCode == 40) {
    secondPaddle.style.top = secondPlayer.moveDown() + "px";
  }
}

let stopGame=function(){
  clearInterval(interval);

}

let addKeyPressEvent = function() {
  let button = document.getElementById("button");
  firstPlayer = new Player("asha");
  secondPlayer = new Player("manisha");
  Game = new Game("asha", "manisha");
  document.addEventListener("keydown", movefirstPlayerPaddle);
  document.addEventListener("keydown", movesecondPlayerPaddle);
  button.onclick = startGame;
}

let startMovingBall = function() {
  let ball = document.getElementById("ballField");
  let secondPaddle = document.getElementById("secondPaddle");
  let field = document.getElementById('field');
  ball.style.top = Game.updateFirstPlayerCoord()[1] + "px";
  ball.style.left = Game.updateFirstPlayerCoord()[0] + "px";
  checkFirstPaddleAndBallCollide(firstPaddle, ball);
  checkSecondPaddleAndBallCollide(secondPaddle, ball);

  if (Game.updateFirstPlayerCoord()[1] >= field.offsetHeight - ball.offsetHeight) {
    Game.directionY -= (Math.random() * 3) + 1;
  }
  if (Game.updateFirstPlayerCoord()[0] >= field.offsetWidth - ball.offsetHeight) {
    Game.directionX -= (Math.random() * 3) + 1;
  }
  if (Game.updateFirstPlayerCoord()[0] < 0) {
    Game.directionX = (Math.random() * 3) + 1;
  }
  if (Game.updateFirstPlayerCoord()[1] < 0) {
    Game.directionY = (Math.random() * 3) + 1;
  }
}

let secondPlayerServe = function() {
  let ball = document.getElementById("ballField");
  Game.dx = 150;
  Game.dy = 150;
  ball.style.top = Game.updateSecondPlayerSCoord()[0] + "px";
  console.log(Game.dx);
  ball.style.left = Game.updateSecondPlayerSCoord()[1] + "px";
}

let checkSecondPaddleAndBallCollide = function(secondPaddle, ball) {
  let secondPaddleTop = secondPaddle.offsetTop;
  let secondPaddleHeight = secondPaddle.offsetHeight;
  let secondPaddleBottom = secondPaddleTop + secondPaddleHeight;
  if (ball.offsetLeft >= 955 && ball.offsetTop <= secondPaddleBottom && ball.offsetTop >= secondPaddleTop) {
    displaySecondPlayerScore();
  }
}

let displaySecondPlayerScore = function() {
  let secondPlayerScoreBox = document.getElementById("secondPlayerScoreBox");
  let secondPlayerScore = Game.updateSecondPlayerScore();
  secondPlayerScoreBox.innerHTML = secondPlayerScore;
  if(Game.checkSecondPlayerIsWinner()){
     alert("second player is winner!!!!!!!!")
    stopGame();
  }
}

let displayfirstPlayerScore = function() {
  let firstPlayerScoreBox = document.getElementById("firstPlayerScoreBox");
  let firstPlayerScore = Game.updateFirstPlayerScore();
  firstPlayerScoreBox.innerHTML = firstPlayerScore;
  if(Game.checkFirstPlayerIsWinner()){
    alert("player1 is winner!!!!!!!!")
    stopGame();
  }
}

let checkFirstPaddleAndBallCollide = function(firstPaddle, ball) {
  let firstPaddleBottom = firstPaddle.offsetTop + firstPaddle.offsetHeight;
  if (ball.offsetLeft <= 20 && ball.offsetTop <= firstPaddle.offsetTop + firstPaddle.offsetHeight && ball.offsetTop >= firstPaddle.offsetTop) {
    displayfirstPlayerScore();
  }
}


let startGame = function() {
  interval=setInterval(startMovingBall, 100);
  console.log(interval);
}
window.onload = addKeyPressEvent;
