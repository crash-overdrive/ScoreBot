import Team = require('./team');

class TeamGames {
  #team: Team;
  constructor(team, numCourts) {
    this.team = team;
    this.numCourts = numCourts;
    this.numGamesPlayed = {};
    this.resetGamesPlayed();
  }

  resetGamesPlayed() {
    for (let courtNum = 1; courtNum <= this.numCourts; ++courtNum){
      this.numGamesPlayed[courtNum] = 0;
    }
  }

  addGamePlayed(courtNum) {
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

export = TeamGames;