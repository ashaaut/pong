let Player = function(name) {
  this.name = name;
  this.score = 0;
  this.stripInitialPosition = 260;
}
Player.prototype = {
  moveUp: function() {
    return this.stripInitialPosition-=10;
  },
  moveDown: function() {
    return this.stripInitialPosition+=10;
  }
}
