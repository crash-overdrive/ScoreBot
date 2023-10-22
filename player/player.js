// for stats track wins and losses on each courts along with score, partner and team played against
// points are only given for winning on kings courts


class Player {
  constructor(id, displayName) {
    this.id = id;
    this.displayName = displayName;
    this.points = 0; // winning on kings court points
    this.scoreDifferential = 0;
    // this.wins = {}; // court -> game (TODO: do we really need this?)
    // this.losses = {}; // court -> game (TODO: do we really need this?)
    this.gameHistory = []; // array of games including those on courtyard
  }

  // initPlayer() {
  //   for (let courtNum = 1; courtNum <= this.numCourts; ++courtNum){
  //     this.wins[courtNum] = [];
  //     this.losses[courtNum] = [];
  //   }
  // }

  games() {

  }

}

module.exports = Player;