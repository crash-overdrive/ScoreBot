// for stats track wins and losses on each courts along with score, partner and team played against
// points are only given for winning on kings courts

// do we need to have a concept of Match?

const Match = require('./match');

class Player {
  constructor(id, numCourts) {
    this.id = id;
    this.numCourts = numCourts;
    this.wins = {};
    this.losses = {};
    this.pointDifferential = 0;
    this.matches = [];
  }

  initPlayer() {
    for (let courtNum = 1; courtNum <= this.numCourts; ++courtNum){
      this.wins[courtNum] = [];
      this.losses[courtNum] = [];
    }
  }

}

module.exports = Player;