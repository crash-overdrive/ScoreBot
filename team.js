const Player = require('./player');

class Team {
  constructor(player1Id, player2Id, numCourts) {
    this.player1 = new Player(player1Id);
    this.player2 = new Player(player2Id);
    this.numCourts = numCourts;
    this.numGamesPlayed = {};
    this.resetGamesPlayed();
  }

  resetGamesPlayed() {
    for (let courtNum = 1; courtNum <= this.numCourts; ++courtNum){
      this.numGamesPlayed[courtNum] = 0;
    }
  }

  addGamePlayed(courtNum, score) {
    this.numGamesPlayed[courtNum] += 1;
  }

  getMaxGamesPlayed() {
    let maxGamesPlayed = 0;

    for (let courtNum = 1; courtNum <= this.numCourts; ++courtNum){
      if (this.numGamesPlayed[courtNum] > maxGamesPlayed) {
        maxGamesPlayed = this.numGamesPlayed[courtNum];
      }
    }

    return maxGamesPlayed;
  }
}

module.exports = Team;