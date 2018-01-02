let Game = function(firstPlayerName, secondPlayerName) {
  this.firstPlayer = new Player(firstPlayerName);
  this.secondPlayer = new Player(secondPlayerName);
  this.dx = 0;
  this.dy = 0;
  this.directionX = 3;
  this.directionY = 3;
  this.ballPosition = [this.dx, this.dy];
  this.firstPlayerScore = 0;
  this.secondPlayerScore = 0;
}

Game.prototype = {
  updateFirstPlayerCoord: function() {
    this.ballPosition[0] += this.directionX;
    this.ballPosition[1] += this.directionY;
    return this.ballPosition;
  },
  updateSecondPlayerSCoord: function() {
    this.ballPosition[0] += this.directionX;
    this.ballPosition[1] += this.directionY;
  },
  updateFirstPlayerScore: function() {
    return this.firstPlayerScore++;
  },
  updateSecondPlayerScore: function() {
    return this.secondPlayerScore++;
  },
  checkFirstPlayerIsWinner: function() {
    return this.firstPlayerScore == 20
      // alert("player1 is winner");

  },
  checkSecondPlayerIsWinner: function() {
    return this.secondPlayerScore == 20
      // alert("player2 is winner");

  }
}
