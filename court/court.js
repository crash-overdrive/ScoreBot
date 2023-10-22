const CourtGame = require('../game/court-game')

// once I implement db, this is going to write match results to db
// i also need to track who won and where
class Court {
  constructor(courtNumber) {
    this.courtNumber = courtNumber;
    this.courtGame = null;
    this.currentGameTeamList = [];
    this.nextGameTeamList = [];
  }

  isCourtReadyForGame() {
    return this.nextGameTeamList.length === 2;
  }

  addToNextGameTeamList(team) {
    this.nextGameTeamList.push(team);
  }

  setGame() {
    this.currentGameTeamList = this.nextGameTeamList;
    this.nextGameTeamList = [];
    this.courtGame = new CourtGame(this.currentGameTeamList[0], this.currentGameTeamList[1], this.courtNumber);
  }

  setScore(id, selfScore, opponentScore) {
    if (this.courtGame === null) {
      throw Error(`Can't set score on ${this} as game has not been assigned yet`)
    }
    this.courtGame.setScore(id, selfScore, opponentScore);
  }

  getWinningTeam() {
    if (this.courtGame === null) {
      throw Error(`Can't get winning team on ${this} as game has not been assigned yet`)
    }
    return this.courtGame.getWinningTeam();
  }

  getLosingTeam() {
    if (this.courtGame === null) {
      throw Error(`Can't get losing team on ${this} as game has not been assigned yet`)
    }
    return this.courtGame.getLosingTeam();
  }

  toString() {
    return `Court ${this.courtNumber}`
  }

}

module.exports = Court;